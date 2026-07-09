# Task Type · 任务类型分类

---

## 分类体系

```
产品任务
├── 战略层
│   ├── Roadmap / 版本规划
│   ├── 产品战略
│   └── 竞品分析
├── 执行层
│   ├── PRD
│   ├── 功能设计
│   ├── 产品说明
│   └── 交互评审
├── 汇报层
│   ├── 周报
│   ├── 月报
│   └── 阶段性汇报
└── 运营层
    ├── 用户反馈分析
    ├── 数据复盘
    └── 发布说明

视觉任务
├── 截图分析
├── OCR 提取
├── UI 评审
├── 页面走查
├── 原型还原
└── 设计稿分析

工程任务
├── 代码开发
├── 代码重构
├── 架构设计
├── Git 操作
├── Agent 编排
├── 脚本工具
└── 原型（HTML/CSS/JS）

AI 系统工程
├── Workspace 架构
├── Prompt 工程
├── Knowledge 沉淀
├── Skill 构建
├── Router 设计
└── Role 定义
```

---

## 任务属性

每个任务具有以下属性，用于路由决策：

| 属性 | 取值 | 说明 |
|------|------|------|
| 复杂度 | simple / medium / complex | 决定是否拆分 |
| 模型倾向 | minimax / deepseek / claude | 主路由信号 |
| 是否需要视觉 | yes / no | 次要路由信号 |
| 是否需要代码 | yes / no | 次要路由信号 |
| 是否可拆分 | yes / no | 复合任务拆分 |

---

## 常见复合任务模式

| 复合任务 | 拆分方案 |
|----------|---------|
| 截图→PRD | MiniMax 分析截图 → DeepSeek 写 PRD |
| 需求→原型 | Claude 开发原型 → MiniMax 评审 UI |
| PRD→开发 | DeepSeek 写 PRD → Claude 开发 |
| 数据→报告 | DeepSeek 分析 → DeepSeek 输出报告 |
| Workspace 建设 | DeepSeek 设计架构 → Claude 执行文件操作 |
