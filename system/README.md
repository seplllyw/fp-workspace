# System · AI 系统维护规范

> 本目录管理 AI Workspace 的"元系统"——让多个 AI 模型协同工作的基础设施。

---

## 目录结构

```
system/
├── README.md              # ← 你正在读的文件
├── roles/                 # 模型角色定义（省 Token 的核心）
│   ├── Claude.md
│   ├── DeepSeek.md
│   └── MiniMax.md
├── router/                # 任务路由规则
│   ├── README.md
│   ├── routing-rule.md
│   ├── task-type.md
│   └── models.md
├── skills/                # Skill 库（终极沉淀形态）
│   ├── generate-prd/
│   ├── review-prd/
│   ├── weekly-report/
│   └── ...
├── prompts/               # Prompt 库（Skill 的原料）
└── templates/             # 文档模板（Skill 的骨架）
```

---

## 演进路径

```
资料（inbox/）
  ↓ 提炼
Knowledge（knowledge/）
  ↓ 抽象
Prompt（system/prompts/）
  ↓ 结构化
Template（system/templates/）
  ↓ 封装
Skill（system/skills/）
  ↓ 调度
Router（system/router/）
  ↓ 执行
最终输出（outputs/）
```

---

## 维护原则

1. **Roles 是基石** — 每个模型的能力边界清晰定义，新增模型先写 Role
2. **Router 是调度器** — 任务来了先进 Router，不直接硬编码"用哪个模型"
3. **Skill > Prompt** — 优先构建 Skill，而非散落的 Prompt 文本
4. **跨模型共享** — 同一个 Skill 可被 MiniMax、DeepSeek、Claude 调用

---

## 何时创建新 Skill

满足以下 **任意 2 个条件** 即升级为 Skill：

- 同一个 Prompt 被使用 ≥ 3 次
- 有明确的输入/输出格式
- 需要 Template 配合
- 需要 Examples 辅助
- 跨模型复用

---

## Skill 标准结构

```
skill-name/
├── README.md      # Skill 说明（功能、适用场景、使用方法）
├── prompt.md       # 核心 Prompt
├── template.md     # 输出模板（可选）
├── examples.md     # 使用示例（可选）
├── input.md        # 输入规范（可选）
└── output.md       # 输出规范（可选）
```
