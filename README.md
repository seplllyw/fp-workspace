# FP Workspace · 飞派产品 AI 工作空间

> 🚀 无人机行业产品经理的 AI 协同工作站
>
> 服务于：Claude Code · DeepSeek V4 · MiniMax M3 · GPT

---

## 快速开始（给 AI）

```bash
# 进入 Workspace 后，先读这个：
cat CLAUDE.md
```

---

## 目录地图

```
FP-Workspace/
│
├── CLAUDE.md              # 🔑 AI 宪法（任何 AI 进入先读）
├── README.md              # 📖 你正在读的文件（人类可读）
│
├── system/                # 🤖 AI 系统
│   ├── roles/             #   模型角色（Claude / DeepSeek / MiniMax）
│   ├── router/            #   任务路由（自动判断用哪个模型）
│   ├── skills/            #   Skill 库（可复用能力单元）
│   ├── prompts/           #   Prompt 库
│   └── templates/         #   文档模板
│
├── knowledge/             # 🧠 永久知识库
│   ├── glossary/          #   术语表
│   ├── 业务/              #   业务域定义
│   ├── 产品/              #   产品方法论
│   ├── 技术/              #   技术背景
│   └── AI/                #   AI 使用经验
│
├── projects/              # 📦 项目目录
│   ├── 产研Q3待办事项/
│   ├── 数据资产/
│   └── 地图首页/
│
├── inbox/                 # 📥 临时资料入口
├── outputs/               # 📤 AI 生成物
├── archive/               # 🗄️ 历史归档
└── screenshots/           # 🖼️ 截图暂存
```

---

## 核心业务

10 条业务线：飞派云平台、智巡、卫瞳、消防、数据资产、AI 算法平台、智能调度、地图能力、BI、低空经济

详见 [knowledge/业务/业务域定义.md](knowledge/业务/业务域定义.md)

---

## 工作流

```
资料 → inbox/
  ↓
知识 → knowledge/
  ↓
Skill → system/skills/
  ↓
路由 → system/router/
  ↓
输出 → outputs/
```

---

## 当前项目

| 项目 | 状态 | 文档 |
|------|------|------|
| 产研 Q3 待办事项 | ✅ 维护中 | [CLAUDE.md](projects/产研Q3待办事项/CLAUDE.md) |
| 数据资产（昆石高速） | ✅ 活跃开发 | [CLAUDE.md](projects/数据资产/CLAUDE.md) |
| 地图首页 | ⚠️ 缺少 CLAUDE.md | — |

---

## 维护者

AI Workspace Architect (Claude Code)
