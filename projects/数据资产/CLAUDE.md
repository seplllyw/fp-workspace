# 数据资产配置原型 · 项目参考文档

> 面向 DeepSeek v4 / Claude Code，用于后续开发时快速理解项目。

## 项目定位

**高速公路数据资产配置管理原型系统**，以**昆石高速（汕昆高速 G78）**为数据基础，实现对桥梁、边坡、交安设施、隧道、地质灾害点、服务设施、紧急避险车道等 7 大类资产的结构化管理和巡检数据维护。

纯前端 SPA，无框架依赖，单 HTML 文件承载全部 UI 和逻辑。

---

## 文件结构

```
数据资产原型/
├── prototype/
│   ├── index.html              # 主应用（~444KB，全部 CSS+JS+HTML 内嵌）
│   ├── asset-data.js           # 多资产类型统一数据（由 Python 从 Excel 生成）
│   ├── kunshi-data.js          # 原始桥梁数据（L1-L8 树+实例）
│   ├── generate-asset-data.py  # 从 Excel 素材生成 asset-data.js
│   └── build-bridge-routine-template.py  # 从 DOCX 巡检文档更新桥梁模板+病害库
├── *.xlsx                      # 原始素材 Excel 文件（主表+构件分解表）
└── 桥梁经常化巡检.docx          # 巡检文档，用于提取病害结构
```

---

## 核心概念

### 1. 资产模版 (Template)
定义一类资产的数据结构，包含：
- **基础信息**：模版名称、资产类型（bridge/slope/traffic-safety/tunnel/geo-hazard/facility/escape-lane）
- **台账字段**：可自定义的扩展字段（文本/数字/单选/多选）
- **树形结构**：层级化的构件分解树（分组/填写项/检查位置三种节点类型）
- **编码规则**：实体编码 + 构件编码的生成规则

全局变量 `templates`（数组），初始数据来自 `ASSET_DATA.templates`。

### 2. 在管资产 (Instance)
模板的实例化，代表真实的高速公路资产对象。包含：
- **台账信息**（基本信息 Tab）：继承模板的台账字段定义，填写具体值
- **数字档案**（结构 Tab）：基于模板树的实例化树，叶子节点可创建"最小维护单元"（`unitGroup`）
- **巡检记录**：航点绑定、飞行架次、病害事件

全局变量 `instances`（数组），初始数据来自 `ASSET_DATA.instances`。

### 3. 树形结构层级体系
每棵模板树/实例树的节点都有以下属性：
- `id`：唯一标识（稳定 id，部分兼容旧 demo）
- `name`：显示名称
- `level`：层级深度
- `children`：子节点数组
- `defectIds`：关联的病害类型 ID 数组（仅检查位置节点有意义）
- `dataMaintain`：是否可维护数据（叶子节点一般为 true）
- `unitGroup`：是否为最小维护单元分组（名称为"1、2、3…"的节点）
- `nodeCode`：自动生成的路径编码（运行时由 `syncTemplateNodeCodes` 计算）

**节点类型**（新建时的三种选择）：
- **分组**：纯组织层级，不可挂数据
- **填写项**：叶子节点，可维护数据
- **检查位置**：叶子节点，可关联病害库

### 4. 最小维护单元 (Unit)
实例树中 `unitGroup` 节点（"1、2、3…"）的子节点。用户在实例的数字档案中通过"+"创建，例如"左幅 1#墩"、"2#墩"等。每个 unit 存储：
- `unitCounts`：每个 unitGroup 下的单元数量
- `unitDefects`：每个单元绑定的病害记录
- `unitData`：每个单元的补充信息（位置描述、维护状态、备注）
- `unitFlightArchives`：每个单元的飞行巡检档案

### 5. 病害库 (Defect/Disease)
全局变量 `DEFECT_POOL`（数组），存储所有病害类型：
- `id`：病害 ID（d1-d8 为 demo 保留，br-d001+ 为巡检文档提取）
- `name`：病害名称
- `code`：病害编码（缩写）
- `level`：等级（1-3）

病害与树节点的关联通过节点的 `defectIds` 字段实现。

---

## 页面/模块导航

侧边栏包含以下页面入口：

| 页面 | 对应 DOM id | 功能概述 |
|------|------------|---------|
| 资产模版 | `page-templates` | 模版列表 + 新建/编辑模版（基础信息、树形结构） |
| 在管资产 | `page-instances` | 资产实例列表（按模板类型 Tab 筛选）+ 新建/编辑实例 |
| 资产标注 | `page-annotation` | 巡检场景视频标注，资产与航点绑定可视化 |
| 桩号管理 | `page-stakes` | 路段→桩号（百米桩/公里桩）维护，支持 Excel 导入导出 |
| 病害资产 | `page-defects` | 病害库管理（默认隐藏） |
| 编码配置 | `page-encoding` | 编码规则独立展示（默认隐藏） |

页面切换通过 `showPage(name)` 函数。URL hash 用于持久化当前页面。

### 模板编辑页（page-template-edit）
两个 Tab：
- **基础信息**：模板名称、资产类型、台账字段配置
- **树形结构**：左右分栏，左侧树面板 + 右侧节点详情面板。两种工具栏模式：
  - **统一模式**（unified）：新建下级/平级时弹出类型选择菜单（分组/填写项/检查位置）
  - **经典模式**（classic）：传统 +下级/+平级/删除 按钮

### 实例编辑页（page-instance-edit）
两个 Tab：
- **数字档案**（结构）：基于模板树的实例树 + 巡检记录子视图（当存在巡检数据时显示）
- **基本信息**（台账）：基础字段（编码/名称/桩号等）+ 模板自定义台账字段

---

## 数据流

```
Excel/DOCX 素材
    ↓ Python 脚本 (generate-asset-data.py)
asset-data.js  ← ASSET_DATA 全局变量
    ↓ 页面初始化 initDefaultTemplate() / initDefaultInstance()
运行时变量:
  - templates[]       ← ASSET_DATA.templates
  - instances[]       ← ASSET_DATA.instances
  - DEFECT_POOL[]     ← 硬编码在 index.html 中
  - STAKE_DATA        ← 硬编码桩号数据
  - KUNSHI_DATA       ← kunshi-data.js（被 asset-data.js 引用并转换）
```

**重要**：运行时对 templates/instances 的修改仅存在于内存中，刷新页面即重置为初始数据。

---

## 编码规则引擎

每种资产类型有独立的编码规则，存储在 `template.encodingRule` 中，包含：

### 实体编码（entity）
- **桥梁**：`[H|G] + 7853 + [路段码4位] + L + [流水号4位]`，例 `H78530126L9090`
- **边坡**：管养单位标准编码（系统唯一 ID）
- **交安设施**：`G78-[里程桩号]-[设施大类码]-[流水号]`，例 `G78-K1852+000-JTBZ-001`
- **隧道**：`TUN-G78-[简称]-[起终点桩号]-[U|D]`
- **地灾**：`[路线编号]+[中心桩号]+[灾害类型]`
- **服务设施**：`SFZ-G78-[中心桩号]-[类型缩写]`
- **避险车道**：`KD + [系统流水]`

### 构件编码（component）
- 如桥梁：`[桥型码]-[部位码]-[方向]-[流水号]`，例 `LS-QD-L-0001`

编码配置页（`page-encoding`）可独立查看，模板编辑的基础信息 Tab 中也有编码规则引擎的实时预览。

---

## 核心函数索引

### 页面路由
- `showPage(name)` — 页面切换（行 5342）
- `switchTemplateTab(tabId)` — 模板编辑 Tab 切换
- `switchInstanceTab(tabId)` — 实例编辑 Tab 切换

### 模板管理
- `renderTemplateTable()` — 渲染模板列表
- `openTemplateEditor(id)` — 打开模板编辑器（新建/编辑）
- `saveTemplate()` — 保存模板
- `renderTemplateTree()` — 渲染模板树
- `addTreeNode()` / `deleteTreeNode()` — 经典模式添加/删除节点
- `openUnifiedTypeMenu()` / `confirmUnifiedAdd()` — 统一模式添加节点
- `copyTemplateBranch()` / `pasteTemplateBranchAsChild()` — 复制/粘贴分支
- `syncTemplateNodeCodes()` — 自动生成节点路径编码
- `renderTemplateNodeDetail()` — 渲染选中节点的详情面板

### 实例管理
- `renderInstanceTable()` — 渲染实例列表（按模板类型 Tab 筛选）
- `openAddInstanceWizard()` — 新建资产向导
- `saveInstance()` — 保存实例
- `renderInstanceStructureTree()` — 渲染实例数字档案树
- `renderInstanceNodeDetail()` — 渲染实例节点详情（含单元管理）
- `addInstanceTreeNode()` — 实例树添加节点（创建 unit）
- `renderInstanceLedgerFields()` — 渲染台账字段表单
- `renderLedgerPriorityStrip()` — 渲染桩号范围条（桩号图下方的核心字段概览）
- `switchToInstanceEditMode()` — 从查看模式切换到编辑模式

### 巡检相关
- `hasInspectionData(inst)` — 判断实例是否有巡检数据
- `renderInspectionOverviewPanel(inst)` — 渲染巡检概览
- `renderStructureInspectionHub(inst)` — 渲染结构树中的巡检标记
- `jumpToInspectionUnit(unitId)` — 从巡检记录跳转到对应单元
- `initAnnotationMissions()` — 初始化资产标注场景数据
- `renderAnnotationPage()` — 渲染标注页

### 桩号管理
- `renderStakePage()` / `renderStakeTree()` — 渲染桩号管理页
- `openSectionModal()` / `saveSectionFromModal()` — 新建/编辑路段
- `openStakeModal()` / `saveStakeFromModal()` — 新建/编辑桩号
- `triggerImport()` / `confirmImport()` — Excel 导入桩号
- `downloadStakeTemplate()` — 下载 Excel 模板

### 编码
- `updateEntityCodePreview()` / `updateComponentCodePreview()` — 编码实时预览
- `resolveNodeSegment()` — 节点→编码段映射
- `getNodeCodeRuleHint()` — 获取编码规则说明文本

### 辅助
- `showToast(msg)` — Toast 提示
- `closeModal(id)` / `openModal(id)` — 弹窗管理
- `findNodeById(rootNodes, id)` — 递归查找节点
- `collectTreeLeafPaths()` — 收集叶子路径
- `formatKm(v)` — 公里值格式化

---

## 关键全局变量

```js
ASSET_DATA          // 多资产类型统一数据源
KUNSHI_DATA         // 原始桥梁数据（被 asset-data.js 引用）
templates           // 运行时模板数组
instances           // 运行时实例数组
DEFECT_POOL         // 病害类型库
STAKE_DATA          // 桩号/路段数据
STAKE_TENANT        // 租户信息（模拟）
editingTemplateId   // 当前编辑的模板 ID
editingInstanceId   // 当前编辑的实例 ID
selectedTreeNodeId  // 模板树当前选中节点
selectedInstanceNodeId  // 实例树当前选中节点
templateTreeCollapsed  // 模板树折叠状态集合
instanceTreeCollapsed  // 实例树折叠状态集合
isNewTemplateFlow   // 是否新建模板流程
isNewInstanceFlow   // 是否新建实例流程
instanceTemplateFilter  // 实例列表的模板类型筛选
instanceStructureSubview  // 实例结构子视图（tree/inspection）
```

---

## UI 设计规范

### 配色（CSS Variables）
- 主色：`--primary: #0d6e6e`（深青色）
- 强调色：`--accent: #c45c26`（橙色）
- 侧边栏：`--sidebar: #1a2332`（深蓝黑）
- 成功/警告/危险：绿/黄/红标准色

### 组件模式
- `.card`：标准卡片容器
- `.btn-*`：按钮（primary/secondary/ghost/danger）
- `.badge-*`：标签
- `.modal-overlay`：弹窗（通过 `.open` 类控制显示）
- `.split`：左右分栏布局（模板树/实例树用）
- `.tree-panel` + `.detail-panel`：树面板 + 详情面板
- `.tabs` / `.tab`：Tab 切换
- `.tree-toolbar`：树工具栏

---

## 数据持久化说明

当前原型**无后端**，所有数据修改仅存在于浏览器内存中。`saveTemplate()` 和 `saveInstance()` 只更新 `templates[]` 和 `instances[]` 数组，刷新后丢失。

未来的持久化需求需要对接后端 API。

---

## Python 脚本说明

### generate-asset-data.py
- 读取根目录下的 Excel 素材文件
- 调用各 `read_*()` 函数生成模板和实例数据
- `restructure_bridge_tree()` 将原始 L5 幅别层级上提合并
- `split_structure_form_siblings()` 拆分结构形式节点
- `enrich_instance_units()` 为样本实例填充巡检演示数据
- 输出 `prototype/asset-data.js`

### build-bridge-routine-template.py  
- 从 `桥梁经常化巡检.docx` 提取四类桥梁（拱式/梁式/悬索/斜拉桥）的完整病害-构件映射
- 重新生成桥梁模板树（类型→部位→构件→幅别→编号）
- 构建 DEFECT_POOL（病害库），保留 d1-d8 与旧 demo 兼容
- 直接 patch `asset-data.js` 中 tpl-bridge 的 tree 和 index.html 中的 DEFECT_POOL

---

## 业务领域缩写

| 缩写 | 全称 |
|------|------|
| L1-L8 | 树形结构层级（L1编码→L2名称→…→L8编号） |
| 台账 (Ledger) | 资产基本信息记录 |
| 档案 (Archive) | 资产的构件分解数字档案 |
| 桩号 (Stake) | 公路里程标记（百米桩/公里桩） |
| 病害 (Defect) | 构件损伤/缺陷 |
| 航点 (Waypoint) | 无人机巡检航线中的拍摄点位 |
| 架次 (Flight/Mission) | 一次巡检飞行任务 |
| G78 | 汕昆高速编号 |
| 昆石 | 昆明—石林段 |
