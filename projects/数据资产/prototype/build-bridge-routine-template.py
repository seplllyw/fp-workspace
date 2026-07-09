#!/usr/bin/env python3
"""从《桥梁经常化巡检.docx》生成 tpl-bridge 树形结构与病害库，并写入 asset-data.js。"""
from __future__ import annotations

import json
import re
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCX = ROOT / "桥梁经常化巡检.docx"
ASSET_DATA = Path(__file__).resolve().parent / "asset-data.js"

# 需保留幅别+编号（与在管样例、航点一致）
NUMBERED_WITH_SPAN = {"桥墩"}
NUMBERED_ONLY = {"桥台", "盖梁"}  # 文档未写幅别，样例保留编号能力

# 构件 → 稳定节点 id（兼容既有实例数据）
STABLE_COMPONENT_IDS = {
    "桥墩": "t-桥墩",
}

BRIDGE_TYPES = ["拱式桥", "梁式桥", "悬索桥", "斜拉桥"]
PARTS = ["上部结构", "下部结构", "桥面系"]

# 手工整理：docx 解析易把「支座 - xxx」误拆，此处按文档定稿
CURATED: dict[str, dict[str, dict[str, list[str]]]] = {
    "拱式桥": {
        "上部结构": {
            "主拱圈": ["变形", "裂缝", "渗水", "拱铰功能受损", "拱脚位移", "蜂窝麻面", "剥落掉角", "空洞孔洞"],
            "拱上结构": [
                "侧墙与主拱圈脱裂", "侧墙变形", "拱上填料沉陷开裂", "腹拱横联变形错位",
                "立墙立柱倾斜", "表面缺陷", "裂缝", "排水不畅",
            ],
            "桥面板": ["蜂窝麻面", "剥落掉角", "空洞孔洞", "钢筋锈蚀", "裂缝"],
        },
        "下部结构": {
            "翼墙耳墙": ["破损", "位移", "鼓肚砌体松动", "裂缝"],
            "锥坡护坡": ["缺陷", "冲刷"],
            "桥墩": ["蜂窝麻面", "剥落露筋", "空洞孔洞", "钢筋锈蚀", "位移", "裂缝"],
            "桥台": ["剥落", "空洞孔洞", "桥头跳车", "位移", "裂缝"],
            "墩台基础": ["冲刷淘空", "剥落露筋", "沉降", "滑移倾斜", "裂缝"],
            "河床": ["堵塞", "冲刷", "变迁"],
            "调治构造物": ["损坏", "冲刷变形"],
        },
        "桥面系": {
            "沥青铺装": ["破损", "泛油", "变形", "裂缝"],
            "水泥铺装": ["磨光脱皮露骨", "错台", "坑洞", "裂缝", "剥落"],
            "伸缩缝": ["凹凸不平", "锚固区缺陷", "失效", "破损"],
            "人行道": ["缺失", "破损"],
            "栏杆/护栏": ["撞坏缺失", "破损"],
            "防排水系统": ["排水不畅", "泄水管引水槽缺陷"],
            "标志标牌": ["缺失", "破损", "变形", "污染", "反光度不够", "朝向不对"],
            "照明装置": ["缺失", "污染或损坏"],
        },
    },
    "梁式桥": {
        "上部结构": {
            "上部承重构件（主梁、挂梁）- 混凝土梁": [
                "蜂窝麻面", "保护层厚度不足", "混凝土碳化", "跨中挠度", "结构变位", "预应力构件损伤",
            ],
            "上部承重构件（主梁、挂梁）- 钢梁": [
                "涂层劣化", "锈蚀", "焊缝开裂", "铆钉螺栓损失", "构件裂缝", "跨中挠度", "构件变形", "结构变位",
            ],
            "上部一般构件（湿接缝、横隔板）": ["蜂窝麻面", "保护层厚度不足", "混凝土碳化"],
            "支座 - 板式橡胶支座": [
                "老化变质开裂", "外鼓缺陷", "位置串动脱空剪切超限",
            ],
            "支座 - 盆式支座": ["组件损坏", "聚四氟乙烯滑板磨损", "位移转角超限"],
            "支座 - 钢支座": ["组件功能缺陷", "位移转角超限", "部件磨损裂缝"],
            "混凝土摆式支座": ["混凝土缺损", "滑动面不平整生锈咬死", "轴承裂纹切口偏移"],
        },
        "下部结构": {
            "翼墙耳墙": ["破损", "位移", "鼓肚砌体松动", "裂缝"],
            "锥坡护坡": ["缺陷", "冲刷"],
            "桥墩": ["蜂窝麻面", "剥落露筋", "空洞孔洞", "钢筋锈蚀", "位移", "裂缝"],
            "桥台": ["剥落", "空洞孔洞", "桥头跳车", "位移", "裂缝"],
            "墩台基础": ["冲刷淘空", "剥落露筋", "沉降", "滑移倾斜", "裂缝"],
            "河床": ["堵塞", "冲刷", "变迁"],
            "调治构造物": ["损坏", "冲刷变形"],
        },
        "桥面系": {
            "沥青铺装": ["破损", "泛油", "变形", "裂缝"],
            "水泥铺装": ["磨光脱皮露骨", "错台", "坑洞", "裂缝", "剥落"],
            "伸缩缝": ["凹凸不平", "锚固区缺陷", "失效", "破损"],
            "人行道": ["缺失", "破损"],
            "栏杆/护栏": ["撞坏缺失", "破损"],
            "防排水系统": ["排水不畅", "泄水管引水槽缺陷"],
            "标志标牌": ["缺失", "破损", "变形", "污染", "反光度不够", "朝向不对"],
            "照明装置": ["缺失", "污染或损坏"],
        },
    },
    "悬索桥": {
        "上部结构": {
            "主缆": ["防护损坏", "线形异常", "扶手绳栏杆绳损坏", "腐蚀或索股损坏", "涂膜劣化"],
            "吊索及钢护筒": [
                "渗水", "锈蚀腐蚀", "锚头损坏", "橡胶老化变质", "掉漆起皮",
                "防护套破坏", "防护层破坏", "钢丝断丝",
            ],
            "加劲梁 - 混凝土加劲梁": ["剥落露筋", "跨中挠度", "构件变形"],
            "加劲梁 - 钢桁架加劲梁": ["锈蚀", "跨中挠度", "构件变形"],
            "加劲梁 - 钢箱加劲梁": ["锈蚀", "跨中挠度", "构件变形"],
            "索塔": ["倾斜变形", "基础冲刷"],
            "索夹": ["错位滑移", "面漆起皮", "密封填料损坏", "裂纹和锈蚀"],
            "索鞍": ["座板相对位移", "螺杆锚栓状况", "锈蚀"],
            "锚杆": ["掉皮", "锈蚀", "裂纹"],
            "支座（特殊）": ["螺纹螺帽松动或螺杆剪切", "上下座板锈蚀", "纵横线扭转"],
        },
        "下部结构": {
            "锚碇": ["锚坑漏水", "顶板侧墙损坏", "均匀沉降", "表观病害", "水平位移"],
            "索塔基础": ["冲刷淘空", "剥落露筋", "冲蚀", "河底铺砌损坏", "沉降", "滑移倾斜", "裂缝"],
            "散索鞍": ["座板相对位移", "螺杆锚栓状况", "锈蚀"],
        },
        "桥面系": {},  # 同梁式桥，生成时展开
    },
    "斜拉桥": {
        "上部结构": {
            "斜拉索": ["锈蚀断丝", "滑移变位", "涂层损坏", "护套内材料老化", "锚固区损坏", "线形异常"],
            "斜拉索护套": ["漆膜损坏", "锈蚀", "防护层破损", "上端浆液离析"],
            "锚具": ["锚杯积水", "锚具内潮湿", "防锈油结块", "锈蚀"],
            "减震装置": ["损坏"],
            "主梁—混凝土主梁": ["剥落露筋", "跨中挠度", "构件变形"],
            "主梁—钢桁架主梁": ["锈蚀", "跨中挠度", "构件变形"],
            "主梁—钢箱主梁": ["锈蚀", "跨中挠度", "构件变形"],
            "索塔": ["倾斜变形", "锚固区渗水", "基础冲刷"],
            "支座": ["同梁式桥支座病害"],  # 展开为梁式桥四类支座
        },
        "下部结构": {},  # 同梁式桥
        "桥面系": {},  # 同梁式桥
    },
}

# 展开「同梁式桥」引用
def expand_beam_ref(part: str, section: str) -> dict[str, list[str]]:
    beam = CURATED["梁式桥"]
    if section == "下部结构":
        return dict(beam["下部结构"])
    if section == "桥面系":
        return dict(beam["桥面系"])
    if section == "上部结构" and part == "支座":
        return {
            k: v for k, v in beam["上部结构"].items() if k.startswith("支座") or k == "混凝土摆式支座"
        }
    return {}


def slug(s: str) -> str:
    s = re.sub(r"[（）()—\-/·、\s]+", "-", s.strip())
    s = re.sub(r"[^\w\u4e00-\u9fff-]", "", s)
    return s.strip("-") or "node"


# 兼容旧 demo 的构件 id 映射
LEGACY_SEQ_IDS = {
    ("梁式桥", "上部结构", "支座 - 板式橡胶支座"): "seq-支座",
    ("梁式桥", "上部结构", "上部承重构件（主梁、挂梁）- 混凝土梁"): "seq-梁底（每跨）",
}
LEGACY_T_IDS = {
    ("梁式桥", "上部结构", "支座 - 板式橡胶支座"): "t-支座",
    ("梁式桥", "上部结构", "上部承重构件（主梁、挂梁）- 混凝土梁"): "t-梁底（每跨）",
}


def defect_registry() -> tuple[list[dict], dict[str, str]]:
    """收集全部病害，分配稳定 id（保留 d1-d8 与 demo 一致）。"""
    legacy = {
        "裂缝": "d1",
        "露筋": "d2",
        "剥落": "d3",
        "剥落露筋": "d2",
        "锈蚀": "d4",
        "支座脱空": "d5",
        "位置串动脱空剪切超限": "d5",
        "渗水": "d6",
        "涂层脱落": "d7",
        "涂层劣化": "d7",
        "螺栓松动": "d8",
        "铆钉螺栓损失": "d8",
    }
    name_to_id: dict[str, str] = {}
    ordered: list[str] = []

    def add(name: str) -> None:
        if name in ("同梁式桥支座病害",):
            return
        if name not in ordered:
            ordered.append(name)

    for btype, parts in CURATED.items():
        for part_name, comps in parts.items():
            if not comps and btype in ("悬索桥", "斜拉桥"):
                ref = expand_beam_ref("", part_name)
                for defects in ref.values():
                    for d in defects:
                        add(d)
                continue
            for defects in comps.values():
                for d in defects:
                    add(d)
            if btype == "斜拉桥" and part_name == "上部结构":
                for k in list(comps.keys()):
                    if k == "支座":
                        for sub in expand_beam_ref("", "上部结构").values():
                            for d in sub:
                                add(d)

    # 按出现顺序分配 id
    next_n = 9
    defects: list[dict] = []
    for name in ordered:
        if name in legacy:
            did = legacy[name]
        elif name in name_to_id:
            did = name_to_id[name]
        else:
            did = f"br-d{next_n:03d}"
            next_n += 1
        name_to_id[name] = did
        code = re.sub(r"[^\u4e00-\u9fffA-Za-z0-9]", "", name)[:6].upper() or "DF"
        level = 3 if any(x in name for x in ("断丝", "滑移", "冲刷淘空", "预应力")) else 2
        if any(x in name for x in ("缺失", "污染", "泛油", "堵塞")):
            level = 1
        defects.append({"id": did, "name": name, "code": code[:6], "level": level})

    # 确保 d1-d8 存在（demo）
    base = [
        ("d1", "裂缝", "CRK", 2),
        ("d2", "露筋", "EXP", 3),
        ("d3", "剥落", "SPL", 2),
        ("d4", "锈蚀", "RST", 1),
        ("d5", "支座脱空", "BRG", 3),
        ("d6", "渗水", "LK", 1),
        ("d7", "涂层脱落", "COT", 1),
        ("d8", "螺栓松动", "BLT", 2),
    ]
    by_id = {d["id"]: d for d in defects}
    for did, name, code, level in base:
        if did not in by_id:
            by_id[did] = {"id": did, "name": name, "code": code, "level": level}
    # 合并：base 优先显示
    final = []
    seen = set()
    for did, name, code, level in base:
        final.append(by_id[did])
        seen.add(did)
    for d in defects:
        if d["id"] not in seen:
            final.append(d)
            seen.add(d["id"])
    return final, name_to_id


def defect_ids(names: list[str], name_to_id: dict[str, str]) -> list[str]:
    ids = []
    for n in names:
        if n == "同梁式桥支座病害":
            continue
        if n in name_to_id:
            ids.append(name_to_id[n])
    return ids


def pier_span_nodes(comp_name: str, comp_id: str) -> list[dict]:
    spans = [
        ("L", "左幅（L）", f"span-{slug(comp_name)}-L", f"p-{slug(comp_name)}-L", f"seq-{slug(comp_name)}-L"),
        ("R", "右幅（R）", f"span-{slug(comp_name)}-R", f"p-{slug(comp_name)}-R", f"seq-{slug(comp_name)}-R"),
        ("F", "全幅（F）", f"span-{slug(comp_name)}-F", f"p-{slug(comp_name)}-F", f"seq-{slug(comp_name)}-F"),
    ]
    if comp_id == "t-桥墩":
        spans = [
            ("L", "左幅（L）", "span-桥墩-L", "p-桥墩-L", "seq-桥墩-L"),
            ("R", "右幅（R）", "span-桥墩-R", "p-桥墩-R", "seq-桥墩-R"),
            ("F", "全幅（F）", "span-桥墩-F", "p-桥墩-F", "seq-桥墩-F"),
        ]
    children = []
    for _, span_label, span_id, p_id, seq_id in spans:
        children.append({
            "id": span_id,
            "name": span_label,
            "level": 5,
            "children": [{
                "id": p_id,
                "name": "编号/位置",
                "level": 6,
                "children": [{
                    "id": seq_id,
                    "name": "1、2、3…",
                    "level": 7,
                    "children": [],
                    "unitGroup": True,
                    "dataMaintain": False,
                }],
                "dataMaintain": False,
            }],
            "dataMaintain": False,
        })
    return children


def seq_only_node(comp_name: str, legacy_seq: str | None = None) -> dict:
    seq_id = legacy_seq or f"seq-{slug(comp_name)}"
    return {
        "id": f"p-{slug(comp_name)}",
        "name": "编号/位置",
        "level": 5,
        "children": [{
            "id": seq_id,
            "name": "1、2、3…",
            "level": 6,
            "children": [],
            "unitGroup": True,
            "dataMaintain": False,
        }],
        "dataMaintain": False,
    }


def component_node(
    btype: str,
    part: str,
    comp_name: str,
    defects: list[str],
    name_to_id: dict[str, str],
    level: int = 4,
) -> dict:
    key = (btype, part, comp_name)
    comp_id = STABLE_COMPONENT_IDS.get(comp_name) or LEGACY_T_IDS.get(key) or f"t-{slug(comp_name)}"
    node: dict = {
        "id": comp_id,
        "name": comp_name,
        "level": level,
        "defectIds": defect_ids(defects, name_to_id),
        "children": [],
        "dataMaintain": False,
    }
    if comp_name in NUMBERED_WITH_SPAN:
        node["children"] = pier_span_nodes(comp_name, comp_id)
    elif comp_name in NUMBERED_ONLY:
        node["children"] = [seq_only_node(comp_name)]
    elif key in LEGACY_SEQ_IDS:
        node["children"] = [seq_only_node(comp_name, LEGACY_SEQ_IDS[key])]
    else:
        node["dataMaintain"] = True
    return node


def part_node(btype: str, part_name: str, comps: dict[str, list[str]], name_to_id: dict[str, str]) -> dict:
    children = [
        component_node(btype, part_name, cn, df, name_to_id, level=4)
        for cn, df in comps.items()
    ]
    return {
        "id": f"part-{slug(btype)}-{slug(part_name)}",
        "name": part_name,
        "level": 3,
        "defectIds": [],
        "children": children,
        "dataMaintain": False,
    }


def bridge_type_node(btype: str, name_to_id: dict[str, str]) -> dict:
    parts_data = CURATED[btype]
    children = []
    for part in PARTS:
        comps = parts_data.get(part) or {}
        if not comps:
            if btype == "悬索桥" and part == "桥面系":
                comps = dict(CURATED["梁式桥"]["桥面系"])
            elif btype == "斜拉桥":
                if part == "下部结构":
                    comps = dict(CURATED["梁式桥"]["下部结构"])
                elif part == "桥面系":
                    comps = dict(CURATED["梁式桥"]["桥面系"])
                else:
                    continue
            else:
                continue
        # 斜拉桥支座展开
        if btype == "斜拉桥" and part == "上部结构" and "支座" in comps:
            del comps["支座"]
            beam_upper = CURATED["梁式桥"]["上部结构"]
            for k, v in beam_upper.items():
                if k.startswith("支座") or k == "混凝土摆式支座":
                    comps[k] = v
        children.append(part_node(btype, part, comps, name_to_id))
    type_ids = {"拱式桥": "l3-arch", "梁式桥": "l3-beam", "悬索桥": "l3-susp", "斜拉桥": "l3-cable"}
    return {
        "id": type_ids.get(btype, f"l3-{slug(btype)}"),
        "name": btype,
        "level": 2,
        "children": children,
        "dataMaintain": False,
    }


def build_tree(name_to_id: dict[str, str]) -> list[dict]:
    root_children = [bridge_type_node(bt, name_to_id) for bt in BRIDGE_TYPES]
    return [{
        "id": "root",
        "name": "桥梁",
        "level": 1,
        "children": root_children,
        "dataMaintain": False,
    }]


def patch_asset_data(tree: list, schema_note: str) -> None:
    text = ASSET_DATA.read_text(encoding="utf-8")
    # 替换 tree 数组（tpl-bridge 内第一个 "tree": [）
    marker = '"id": "tpl-bridge"'
    idx = text.find(marker)
    if idx < 0:
        raise SystemExit("tpl-bridge not found")
    tree_key = '"tree": ['
    t0 = text.find(tree_key, idx)
    if t0 < 0:
        raise SystemExit("tree key not found")
    depth = 0
    i = t0 + len(tree_key) - 1
    while i < len(text):
        c = text[i]
        if c == "[":
            depth += 1
        elif c == "]":
            depth -= 1
            if depth == 0:
                t1 = i + 1
                break
        i += 1
    else:
        raise SystemExit("tree array end not found")
    new_tree = json.dumps(tree, ensure_ascii=False, indent=2)
    text = text[:t0] + '"tree": ' + new_tree + text[t1:]

    text = re.sub(
        r'"schemaNote": "[^"]*"',
        f'"schemaNote": "{schema_note}"',
        text,
        count=1,
        flags=re.S,
    )
    text = text.replace(
        '"sourceFile": "1_03_01_桥梁构件分解表.xlsx"',
        '"sourceFile": "桥梁经常化巡检.docx"',
        1,
    )
    ASSET_DATA.write_text(text, encoding="utf-8")


def write_defect_pool_js(defects: list[dict]) -> None:
    index_html = Path(__file__).resolve().parent / "index.html"
    text = index_html.read_text(encoding="utf-8")
    lines = ["    const DEFECT_POOL = ["]
    for d in defects:
        lines.append(
            f"      {{ id: '{d['id']}', name: '{d['name']}', code: '{d['code']}', level: {d['level']} }},"
        )
    lines.append("    ];")
    new_block = "\n".join(lines)
    text = re.sub(
        r"    const DEFECT_POOL = \[[\s\S]*?\n    \];",
        new_block,
        text,
        count=1,
    )
    index_html.write_text(text, encoding="utf-8")


def main() -> None:
    defects, name_to_id = defect_registry()
    tree = build_tree(name_to_id)
    schema = "桥梁类型→部位（上/下/桥面系）→构件→幅别(桥墩)→编号→检查部位"
    patch_asset_data(tree, schema)
    write_defect_pool_js(defects)
    print(f"Updated {ASSET_DATA.name}: {len(BRIDGE_TYPES)} bridge types, {len(defects)} defects")
    print(f"Updated index.html DEFECT_POOL with {min(120, len(defects))} entries")


if __name__ == "__main__":
    main()
