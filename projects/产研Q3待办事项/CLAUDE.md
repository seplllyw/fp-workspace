# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

飞派（FP）Q3 产研待办事项文档项目，包含产品路线图、核心流程图和产品配图。覆盖 11 条产品线：飞派云平台、飞派智巡、飞派卫瞳、飞派消防、空间服务平台、资产数字平台、AI 算法平台、自动运维平台、运营中台、大屏矩阵、FP Pilot。

## 文件结构

```
l0MU_A/
├── 产研Q3待办事项.md          # 主文档：Q3 产品线能力总览 + 版本路线图 + 各产品线功能说明
├── 智巡流程图.pen              # Pencil 设计源文件，包含所有核心流程图 + Q3 能力总览图 + 版本路线图
├── flowcharts/                 # 从 Pencil 导出的流程图 PNG，md 文档通过相对路径引用
│   ├── Q3_capability.png       #   一、Q3 产品线能力总览
│   ├── Q3_roadmap.png          #   二、Q3 版本路线图
│   └── 智巡-*.png ...          #   各产品线核心流程图
└── image/                      # 产品配图资源，md 文档通过相对路径引用
```

## 常见操作

### 修改流程图

1. 用户在 VS Code 中打开 `.pen` 文件（需安装 Pencil 扩展）
2. 通过 Pencil MCP 工具（`batch_get`、`batch_design`）定位和修改 frame
3. 用 `export_nodes` 导出为 PNG 到 `flowcharts/`，覆盖对应文件
4. `batch_design` 语法为 JavaScript，核心 API：`Insert()`、`Update()`、`Replace()`、`Delete()`、`Copy()`、`Move()`

### 替换图片

md 文档中的图片通过相对路径引用 `flowcharts/` 或 `image/` 下的文件。用户在对话中贴图后，直接将缓存图片复制到目标路径即可：
```bash
cp /Users/yaweili/.claude/image-cache/<cache-dir>/<n>.png l0MU_A/flowcharts/<target>.png
```

### 修改文档内容

直接 `Read` → `Edit` 操作 `l0MU_A/产研Q3待办事项.md`。文档结构：
- 一、二：总览图 + 路线图
- 三～十一：各产品线 V1.x → V2.x 版本功能说明（前置依赖、功能说明、操作流程、核心流程、业务价值、业务目标、配图）

## 数据来源

`飞派全景产品功能版本梳理（Q3实施维度）.xlsx` 是版本号和数据的基础参考，文档中标注了「版本号以 Excel 为准」。
