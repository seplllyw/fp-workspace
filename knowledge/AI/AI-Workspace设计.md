# AI Workspace 设计思想

> 本文档记录本次 Workspace 架构设计的核心思想，供后续迭代参考。

---

## 一、核心问题

**AI 时代的产品经理，面对的不是"一个 AI"，而是"多个 AI 协同工作"。**

如果每次使用 AI 都从零开始：
- 重复写 Prompt → Token 浪费
- 知识无法复用 → 每次重新解释业务
- 模型能力混乱 → 用错误的模型做错误的事
- 产出散落各处 → 无法追溯和复用

---

## 二、设计目标

1. **知识可复用** — 术语、业务域、方法论写一次，永久复用
2. **模型可调度** — 不同任务自动路由到最合适的模型
3. **Skill 可封装** — 将 Prompt+Template+Examples 打包为 Skill
4. **新人（AI）可快速上手** — 任何 AI 进入 Workspace，读 CLAUDE.md 就懂
5. **长期可维护** — 有清晰的演进路径

---

## 三、核心架构

### 3.1 资料→知识→Skill 演进路径

```
inbox/（临时资料）
  ↓ 提取知识
knowledge/（永久知识）
  ↓ 抽象 Prompt
system/prompts/（可复用 Prompt）
  ↓ 结构化 + Template
system/templates/（输出模板）
  ↓ 封装为 Skill
system/skills/（可调度能力单元）
  ↓ 自动调度
system/router/（任务路由）
  ↓ 执行
outputs/（最终产出）
```

### 3.2 三层模型体系

```
Role 层    — 定义每个模型"是谁"、"能做什么"、"不能做什么"
Router 层  — 定义任务"应该由谁做"
Skill 层   — 定义"怎么做"
```

### 3.3 CLAUDE.md 作为宪法

```
任何 AI → 进入 Workspace → 先读根 CLAUDE.md
  ├── 知道 Workspace 结构
  ├── 知道自己的 Role
  ├── 知道什么时候该切换模型
  ├── 知道有哪些知识可查
  └── 知道完成后的沉淀路径
```

---

## 四、关键决策记录

| 决策 | 原因 |
|------|------|
| Roles 独立成文件 | 每次 load file 比每次粘贴 Prompt 省 Token |
| Skill 跨模型共享 | MiniMax/DeepSeek/Claude 都读同一个 Skill 目录 |
| Router 不作为 Skill | Router 是系统级调度器，不是可选的 Skill |
| inbox 是入口 | 日常资料先进 inbox，AI 负责分类，人不负责分类 |
| 中文目录名 | 用户是中文产品经理，降低认知负担 |

---

## 五、迭代原则

1. **先用起来，再优化** — 不要过度设计
2. **碰到重复 3 次的操作，就写 Skill** — 触发条件
3. **每次对话结束，思考是否需要沉淀** — 持续积累
4. **Role 和 Router 可以先粗后细** — 使用中逐步细化

---

> 创建时间：2026-07-07
> 作者：AI Workspace Architect (Claude)
