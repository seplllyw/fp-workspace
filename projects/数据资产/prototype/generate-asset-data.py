#!/usr/bin/env python3
"""从 Excel 素材生成 asset-data.js"""
import json
import re
import pandas as pd
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

TS_CAT_ABBR = {
    "交通标志": "JTBZ",
    "波形梁护栏": "BXHB",
    "桥梁护栏": "QLHB",
    "防眩设施": "FXSS",
    "隔离栅和桥梁护网": "GLW",
    "混凝土护栏": "HNTB",
    "交通标线": "JTBX",
    "轮廓标、里程牌、百米桩": "LKB",
}

BRIDGE_PART_CODES = {
    "桥墩": "QD", "盖梁": "GL", "桥台": "QT", "墩台基础（承台）": "CT",
    "锥坡": "ZP", "梁底（每跨）": "LD", "横隔板": "HGB", "桥面底面": "QMD",
    "支座": "ZZ", "伸缩缝": "SSF", "桥面铺装": "QMPZ", "排水口": "PSK",
    "护栏": "HL", "路灯": "LDEN", "标志牌": "BZP",
}

BRIDGE_TYPE_CODES = {
    "梁式桥": "LS", "拱式桥": "GQ", "斜拉桥": "XLQ", "悬索桥": "XSQ",
}


def mileage_to_stake(val):
    s = str(val).strip()
    if not s or s == "nan":
        return ""
    if "K" in s.upper() or "+" in s:
        return s
    digits = re.sub(r"\D", "", s)
    if len(digits) >= 6:
        km = int(digits[:-3])
        m = int(digits[-3:])
        return f"K{km}+{m:03d}"
    return s


def tunnel_code(name, stake_range, direction):
    d = "U" if "上行" in direction else "D" if "下行" in direction else "X"
    short = re.sub(r"隧道$", "", name)[:4]
    stake = (stake_range or "").replace(" ", "").replace("～", "-").replace("~", "-")
    return f"TUN-G78-{short}-{stake}-{d}"


def get_encoding_rules():
    """各资产编码规则：摘自功能清单与各 Excel 表头说明。"""
    return {
        "bridge": {
            "entity": {
                "label": "桥梁编码（台账/JTG）",
                "pattern": "[上下行H|G] + 7853 + [路段码4位] + L + [流水号4位]",
                "patternDesc": "1_01桥梁主表 · 功能清单：桥梁编码为全局唯一键（UK）",
                "example": "H78530126L9090",
                "segments": [
                    {"key": "direction", "label": "上下行", "options": [
                        {"value": "H", "label": "H · 下行"}, {"value": "G", "label": "G · 上行"},
                    ]},
                    {"key": "routeSeg", "label": "路线段", "fixed": "7853", "desc": "G78 汕昆·昆石"},
                    {"key": "section", "label": "路段码(4位)", "placeholder": "0126", "default": "0126"},
                    {"key": "laneMark", "label": "幅别标记", "fixed": "L", "desc": "台账编码固定位"},
                    {"key": "serial", "label": "流水号(4位)", "placeholder": "9090", "default": "9090"},
                ],
            },
            "component": {
                "label": "构件实例编码",
                "pattern": "[桥型码]-[部位码]-[方向]-[流水号]",
                "source": "数据资产配置功能清单 · 编码规则引擎",
                "example": "LS-QD-L-0001",
                "segmentDefs": [
                    {"key": "bridgeType", "label": "桥型码", "options": [
                        {"value": v, "label": f"{k}({v})"} for k, v in BRIDGE_TYPE_CODES.items()
                    ]},
                    {"key": "part", "label": "部位码", "options": [
                        {"value": v, "label": f"{k}→{v}"} for k, v in BRIDGE_PART_CODES.items()
                    ]},
                    {"key": "span", "label": "方向/幅别", "options": [
                        {"value": "L", "label": "L · 左幅"}, {"value": "R", "label": "R · 右幅"},
                        {"value": "S", "label": "S · 单幅"},
                    ]},
                    {"key": "serial", "label": "流水号", "placeholder": "0001", "default": "0001"},
                ],
                "partCodes": BRIDGE_PART_CODES,
                "spanFromTree": {"左幅（L）": "L", "右幅（R）": "R", "全幅（F）": "F"},
            },
        },
        "slope": {
            "entity": {
                "label": "边坡编码",
                "pattern": "管养单位标准编码（系统唯一ID）",
                "patternDesc": "2_01边坡主表：根据管养单位标准编码进行",
                "example": "892373949097181184",
            },
            "component": {
                "label": "边坡构件编号",
                "pattern": "[边坡编码]/[资产大类]/[子类]/[部位]/[编号]",
                "source": "2_02边坡构件分解表 L1-L5",
                "example": "{边坡编码}/坡面/①坡面防护/护面墙/001",
            },
        },
        "traffic-safety": {
            "entity": {
                "label": "交安设施编码",
                "pattern": "G78-[里程桩号]-[设施大类码]-[流水号]",
                "patternDesc": "3_02：L1交安设施编码；L3设施大类；编号按块或按起始桩号",
                "example": "G78-K1852+000-JTBZ-001",
            },
            "component": {
                "label": "交安构件/单元编号",
                "pattern": "[设施编码]/[可选细化构件]/[序号]",
                "source": "3_02 可选细化构件（仅在需要时采集）",
                "example": "G78-K1852+000-JTBZ-001/立柱/01",
                "numberingBy": {
                    "交通标志": "按“块”",
                    "波形梁护栏": "按“起始桩号”",
                    "桥梁护栏": "按“起始桩号”",
                },
            },
        },
        "tunnel": {
            "entity": {
                "label": "隧道唯一编码",
                "pattern": "TUN-G78-[隧道简称]-[起终点桩号]-[上下行U|D]",
                "patternDesc": "3.隧道.xlsx：资产全局唯一标识，遵循行业编码规范",
                "example": "TUN-G78-阳宗-K1812+459-K1815+251-U",
            },
        },
        "geo-hazard": {
            "entity": {
                "label": "灾害点编码",
                "pattern": "[路线编号]+[中心桩号]+[灾害类型HP|BT|...]",
                "patternDesc": "4.地质灾害清单：如 G50K126+350HP",
                "example": "G78K1779+300HP",
            },
        },
        "facility": {
            "entity": {
                "label": "收费站编号 / 设施唯一编码",
                "pattern": "SFZ|FAC-G78-[中心桩号]-[类型缩写]",
                "patternDesc": "收费站：收费公路信息基础数据元标准；服务区表：设施唯一编码",
                "example": "SFZ-G78-K1846+750",
            },
        },
        "escape-lane": {
            "entity": {
                "label": "设施唯一编码",
                "pattern": "KD + [系统流水]（台账原码）",
                "patternDesc": "2.紧急避险车道.xlsx",
                "example": "KD9900260",
            },
        },
    }


def nid(*parts):
    s = "-".join(str(p) for p in parts if p)
    s = re.sub(r"[^\w\u4e00-\u9fff（）-]", "", s)[:60]
    return s or "n"


def leaf(name, level, children=None, defect_ids=None):
    children = children or []
    n = {"id": nid(name, level), "name": name, "level": level, "children": children}
    if defect_ids:
        n["defectIds"] = defect_ids
    if name == "1、2、3…":
        n["unitGroup"] = True
        n["dataMaintain"] = False
    elif not children:
        n["dataMaintain"] = True
    return n


def apply_template_maintain_flags(nodes):
    """实例维护层：叶子=dataMaintain；编号组=unitGroup，不可再挂子级。"""
    for n in nodes or []:
        ch = n.get("children") or []
        if n.get("name") == "1、2、3…" or (n.get("id") or "").startswith("seq-"):
            n["unitGroup"] = True
            n["dataMaintain"] = False
        elif not ch:
            n["dataMaintain"] = True
        else:
            n.setdefault("dataMaintain", False)
        apply_template_maintain_flags(ch)


def seq_child(parent_name):
    return [leaf("编号/位置", parent_name.__class__.__name__ if False else 8, [
        leaf("1、2、3…", 8)
    ])]


def build_slope_tree():
    """2_02 边坡构件分解 L1-L5"""
    def part_nodes(parts):
        return [leaf(p, 5, [leaf("编号/位置", 5, [leaf("1、2、3…", 5)])]) for p in parts]

    slope_face = leaf("坡面", 2, [
        leaf("①坡面防护", 3, part_nodes(["护面墙", "喷锚/喷射混凝土", "柔性防护网"])),
        leaf("②坡面加固", 3, part_nodes(["锚杆（索）框架梁", "抗滑桩"])),
        leaf("③坡面排水", 3, part_nodes(["坡面排水沟", "平台排水沟"])),
    ])
    top = leaf("坡顶区域", 2, [
        leaf("④截水设施", 3, part_nodes(["坡顶截水沟（天沟）"])),
        leaf("⑤坡顶检查与监测", 3, part_nodes(["边坡位移监测桩", "边坡标识牌"])),
    ])
    foot = leaf("坡脚区域", 2, [
        leaf("⑥支挡结构", 3, part_nodes(["挡土墙", "护脚墙"])),
    ])
    return [{
        "id": "root-slope",
        "name": "边坡",
        "level": 1,
        "children": [{
            "id": "l2-slope-schema",
            "name": "构件分解（L1-L5）",
            "level": 2,
            "children": [slope_face, top, foot],
        }],
    }]


def build_ts_tree():
    """3_02 交安设施构件分级"""
    types = [
        ("交通标志", ["立柱", "法兰盘", "基础", "反光膜", "版面"]),
        ("波形梁护栏", ["波形梁板", "立柱", "防阻块", "端头"]),
        ("桥梁护栏", ["金属梁柱式护栏", "混凝土护栏", "过渡段"]),
        ("防眩设施", ["防眩板叶片", "连接件", "立柱"]),
        ("隔离栅和桥梁护网", ["焊接网片", "编织网片", "刺钢丝网"]),
        ("混凝土护栏", ["护栏块体", "钢筋骨架", "基础"]),
        ("交通标线", []),
        ("轮廓标、里程牌、百米桩", []),
    ]
    children = []
    for i, (cat, subs) in enumerate(types):
        sub_nodes = [leaf(s, 4) for s in subs] if subs else []
        children.append({
            "id": nid("ts", cat),
            "name": cat,
            "level": 3,
            "defectIds": ["d3", "d7"] if cat == "交通标志" else [],
            "children": [
                leaf("编号/位置（按块或起止桩号）", 4, sub_nodes if sub_nodes else [leaf("1、2、3…", 5)])
            ],
        })
    return [{
        "id": "root-ts",
        "name": "交安设施",
        "level": 1,
        "children": [{
            "id": "l2-ts",
            "name": "构件分级（L1-L3+细化）",
            "level": 2,
            "children": children,
        }],
    }]


def build_tunnel_tree():
    return [{
        "id": "root-tunnel",
        "name": "隧道",
        "level": 1,
        "children": [{
            "id": "l2-tunnel",
            "name": "结构分解（示意）",
            "level": 2,
            "children": [
                leaf("洞口工程", 3, [leaf("进口", 4), leaf("出口", 4)]),
                leaf("洞身结构", 3, [leaf("衬砌", 4, defect_ids=["d1", "d6"]), leaf("路面", 4), leaf("防水排水", 4)]),
                leaf("机电设施", 3, [leaf("通风", 4), leaf("照明", 4), leaf("消防", 4)]),
            ],
        }],
    }]


def build_geo_tree():
    return [{
        "id": "root-geo",
        "name": "地质灾害点",
        "level": 1,
        "children": [{
            "id": "l2-geo",
            "name": "管理清单结构",
            "level": 2,
            "children": [
                leaf("灾害体空间", 3, [leaf("坡顶线", 4), leaf("坡脚线", 4), leaf("裂缝带", 4)]),
                leaf("监测物联网", 3, [leaf("GNSS", 4), leaf("雨量计", 4), leaf("测斜管", 4)]),
                leaf("预警与应急", 3, [leaf("预警阈值", 4), leaf("抢险记录", 4)]),
            ],
        }],
    }]


def build_facility_tree():
    return [{
        "id": "root-fac",
        "name": "沿线服务设施",
        "level": 1,
        "children": [{
            "id": "l2-fac",
            "name": "设施类型",
            "level": 2,
            "children": [
                leaf("收费站", 3, [leaf("收费广场", 4), leaf("收费站房", 4), leaf("车道", 4)]),
                leaf("服务区", 3, [leaf("主楼", 4), leaf("停车场", 4), leaf("加油站", 4)]),
                leaf("停车区", 3, [leaf("停车位", 4), leaf("公厕", 4)]),
                leaf("加水站", 3, [leaf("加水设施", 4)]),
            ],
        }],
    }]


def build_escape_tree():
    return [{
        "id": "root-escape",
        "name": "紧急避险车道",
        "level": 1,
        "children": [{
            "id": "l2-escape",
            "name": "组成部分",
            "level": 2,
            "children": [
                leaf("制动床", 3, [leaf("砾石床体", 4)]),
                leaf("护栏系统", 3, [leaf("钢筋混凝土防撞护栏", 4)]),
                leaf("标志与监控", 3, [leaf("预告标志", 4), leaf("监控摄像头", 4)]),
            ],
        }],
    }]


SAMPLE_UNIT_DEFECTS = {
    "seq-桥墩-L-u1": [
        {"recordId": "r-bd-1", "defectId": "d1", "name": "裂缝", "code": "CRK", "level": 2, "status": "已审", "size": "长0.45m 宽0.15mm"},
    ],
    "seq-桥墩-L-u2": [
        {"recordId": "r-bd-2", "defectId": "d3", "name": "剥落", "code": "SPL", "level": 2, "status": "未审", "size": "面积0.03㎡"},
    ],
    "seq-桥墩-L-u3": [],
    "seq-支座-u1": [
        {"recordId": "r-bd-3", "defectId": "d5", "name": "支座脱空", "code": "BRG", "level": 3, "status": "已审", "size": ""},
    ],
    "seq-梁底（每跨）-u1": [
        {"recordId": "r-bd-4", "defectId": "d1", "name": "裂缝", "code": "CRK", "level": 2, "status": "已审", "size": "长1.2m"},
    ],
    "seq-梁底（每跨）-u2": [
        {"recordId": "r-bd-5", "defectId": "d2", "name": "露筋", "code": "EXP", "level": 3, "status": "已审", "size": ""},
    ],
}

UNIT_KEY_MIGRATION = {
    "seq-桥墩l5-L-u1": "seq-桥墩-L-u1",
    "seq-桥墩l5-L-u2": "seq-桥墩-L-u2",
    "seq-桥墩l5-L-u3": "seq-桥墩-L-u3",
    "seq-支座l5-L-u1": "seq-支座-u1",
    "seq-梁底（每跨）l5-L-u1": "seq-梁底（每跨）-u1",
    "seq-梁底（每跨）l5-L-u2": "seq-梁底（每跨）-u2",
}

SEQ_ID_MIGRATION = {
    "seq-桥墩l5-L": "seq-桥墩-L",
    "seq-桥墩l5-R": "seq-桥墩-R",
    "seq-桥墩l5-S": "seq-桥墩-F",
    "seq-支座l5-L": "seq-支座",
    "seq-梁底（每跨）l5-L": "seq-梁底（每跨）",
}


def _span_key_from_id(node_id):
    if node_id in ("l5-L", "l5-R", "l5-S"):
        return node_id.split("-")[-1]
    return None


def _remap_component_node(comp, cat_name):
    """去掉幅别层级后的构件节点（非桥墩）。"""
    import copy
    name = comp["name"]
    c = copy.deepcopy(comp)
    c["id"] = nid("t", name)
    c["level"] = 6
    c["children"] = _remap_position_subtree(c.get("children", []), name, None)
    return c


def _remap_position_subtree(children, part_name, span_key):
    import copy
    out = []
    for ch in children:
        if ch["name"] == "编号/位置":
            p = copy.deepcopy(ch)
            p["id"] = nid("p", part_name, span_key)
            p["level"] = 7 if span_key else 7
            p["children"] = []
            for sub in ch.get("children", []):
                if sub["name"] == "1、2、3…":
                    seq = copy.deepcopy(sub)
                    seq["id"] = nid("seq", part_name, span_key) if span_key else nid("seq", part_name)
                    seq["level"] = 8 if span_key else 8
                    p["children"].append(seq)
            out.append(p)
        else:
            out.append(ch)
    return out


def split_structure_form_siblings(tree):
    """结构形式下：空心板梁、T梁、连续箱梁/箱形梁 为三个平级维护节点。"""
    import copy

    def walk(nodes):
        for n in nodes or []:
            if n.get("id") == "l4-beam-struct":
                rebuilt = []
                for ch in n.get("children") or []:
                    if ch.get("id") == "s-mixed" or "空心板梁/T梁" in (ch.get("name") or ""):
                        rebuilt.extend([
                            leaf("空心板梁", ch.get("level", 4)),
                            leaf("T梁", ch.get("level", 4)),
                            leaf("连续箱梁/箱形梁", ch.get("level", 4)),
                        ])
                    else:
                        rebuilt.append(copy.deepcopy(ch))
                n["children"] = rebuilt
            walk(n.get("children") or [])

    walk(tree)
    return tree


def restructure_bridge_tree(tree):
    """
    将 L5 幅别上提合并：左/右/全幅仅作为 L7 桥墩子节点；
    其余构件挂在 L5 大类下，不再按幅别整树复制。
    """
    import copy
    import re

    tree = copy.deepcopy(tree)
    beam = None
    for n in tree[0]["children"][0]["children"]:
        if n.get("id") == "l3-beam":
            beam = n
            break
    if not beam:
        return tree

    span_parent = next((c for c in beam["children"] if c.get("id") == "l5-span"), None)
    if not span_parent:
        return tree

    spans = {}
    for s in span_parent["children"]:
        k = _span_key_from_id(s["id"])
        if k:
            spans[k] = s

    base = spans.get("L") or next(iter(spans.values()))
    struct_nodes = [c for c in beam["children"] if c.get("id") != "l5-span"]
    new_cats = []

    for cat in base["children"]:
        cat_new = copy.deepcopy(cat)
        cat_new["level"] = 5
        cat_new["id"] = nid("cat", cat["name"])
        comps_out = []
        for comp in cat["children"]:
            if comp["name"] == "桥墩":
                pier = copy.deepcopy(comp)
                pier["id"] = "t-桥墩"
                pier["level"] = 6
                span_children = []
                for sk, label in [("L", "左幅（L）"), ("R", "右幅（R）"), ("F", "全幅（F）")]:
                    old_k = "S" if sk == "F" else sk
                    old_span = spans.get(old_k)
                    if not old_span:
                        continue
                    old_cat = next((c for c in old_span["children"] if c["name"] == cat["name"]), None)
                    if not old_cat:
                        continue
                    old_pier = next((c for c in old_cat["children"] if c["name"] == "桥墩"), None)
                    if not old_pier:
                        continue
                    span_children.append({
                        "id": f"span-桥墩-{sk}",
                        "name": label,
                        "level": 7,
                        "children": _remap_position_subtree(old_pier.get("children", []), "桥墩", sk),
                    })
                pier["children"] = span_children
                comps_out.append(pier)
            else:
                comps_out.append(_remap_component_node(comp, cat["name"]))
        cat_new["children"] = comps_out
        new_cats.append(cat_new)

    beam["children"] = struct_nodes + new_cats
    return tree


def _migrate_inst_unit_storage(inst):
    """实例 unitCounts / unitDefects / unitData 键名随模板树调整。"""
    for old_seq, new_seq in SEQ_ID_MIGRATION.items():
        if inst.get("unitCounts") and old_seq in inst["unitCounts"]:
            inst["unitCounts"][new_seq] = inst["unitCounts"].pop(old_seq)
    if inst.get("unitData"):
        inst["unitData"] = {UNIT_KEY_MIGRATION.get(k, k): v for k, v in inst["unitData"].items()}
    inst["unitDefects"] = {UNIT_KEY_MIGRATION.get(k, k): v for k, v in (inst.get("unitDefects") or {}).items()}


def enrich_instance_units(instances):
    import copy
    for inst in instances:
        inst.setdefault("unitDefects", {})
        inst.setdefault("unitCounts", {})
        inst.setdefault("unitData", {})
        _migrate_inst_unit_storage(inst)
        if inst.get("code") == "H78530126L9090":
            inst["unitDefects"] = copy.deepcopy(SAMPLE_UNIT_DEFECTS)
            inst["unitData"] = {
                "seq-桥墩-L-u1": {"positionDesc": "左幅 1#墩", "maintStatus": "正常", "remark": ""},
                "seq-桥墩-L-u2": {"positionDesc": "左幅 2#墩", "maintStatus": "待检", "remark": "外观巡检"},
            }
            inst["structureDefects"] = {"t-桥墩": 3, "t-支座": 1, "t-梁底（每跨）": 2}
            inst["sceneId"] = "sc-kunshi-bd-001"
            inst["waypointBindings"] = [
                {"id": "WP-03", "name": "左幅1#墩迎水面", "routeName": "昆石下行·桥梁巡检R1", "unitIds": ["seq-桥墩-L-u1"]},
                {"id": "WP-04", "name": "左幅2#墩迎水面", "routeName": "昆石下行·桥梁巡检R1", "unitIds": ["seq-桥墩-L-u2"]},
                {
                    "id": "WP-12",
                    "name": "梁底全景扫视",
                    "routeName": "昆石下行·桥梁巡检R1",
                    "unitIds": ["seq-桥墩-L-u1", "seq-梁底（每跨）-u1"],
                },
            ]
            inst["unitFlightArchives"] = {
                "seq-桥墩-L-u1": [
                    {
                        "archiveId": "arc-20260315",
                        "flightId": "FLT-20260315",
                        "flightDate": "2026-03-15",
                        "missionLabel": "架次-01",
                        "waypointId": "WP-03",
                        "waypointName": "左幅1#墩迎水面",
                        "events": [
                            {
                                "eventId": "EV-101",
                                "name": "裂缝",
                                "auditStatus": "已审",
                                "linkedDefectRecordId": "r-bd-1",
                            },
                        ],
                    },
                    {
                        "archiveId": "arc-20260520",
                        "flightId": "FLT-20260520",
                        "flightDate": "2026-05-20",
                        "missionLabel": "架次-02",
                        "waypointId": "WP-03",
                        "waypointName": "左幅1#墩迎水面",
                        "events": [
                            {
                                "eventId": "EV-201",
                                "name": "渗水",
                                "auditStatus": "已审",
                                "linkedDefectRecordId": None,
                            },
                        ],
                    },
                ],
                "seq-桥墩-L-u2": [
                    {
                        "archiveId": "arc-20260410",
                        "flightId": "FLT-20260410",
                        "flightDate": "2026-04-10",
                        "missionLabel": "架次-01",
                        "waypointId": "WP-04",
                        "waypointName": "左幅2#墩迎水面",
                        "events": [
                            {
                                "eventId": "EV-102",
                                "name": "剥落",
                                "auditStatus": "已审",
                                "linkedDefectRecordId": "r-bd-2",
                            },
                        ],
                    },
                ],
            }


def load_bridge_template_and_instances():
    """保留既有昆石桥梁数据"""
    import importlib.util
    kunshi_path = ROOT / "prototype" / "kunshi-data.js"
    text = kunshi_path.read_text(encoding="utf-8")
    start = text.index("{")
    end = text.rindex("};")
    data = json.loads(text[start : end + 1])
    tpl = {
        "id": data["templateMeta"]["id"],
        "name": data["templateMeta"]["name"],
        "category": data["templateMeta"]["category"],
        "saved": True,
        "savedAt": data["templateMeta"]["savedAt"],
        "schemaNote": data["templateMeta"]["schemaNote"],
        "tree": data["tree"],
        "sourceFile": "1_03_01_桥梁构件分解表.xlsx",
    }
    instances = []
    for i in data["instances"]:
        inst = {**i, "assetType": "bridge"}
        instances.append(inst)
    tpl["tree"] = restructure_bridge_tree(tpl["tree"])
    tpl["tree"] = split_structure_form_siblings(tpl["tree"])
    apply_template_maintain_flags(tpl["tree"])
    tpl["schemaNote"] = "L1编码→L2名称→L3类型→L4结构→L5大类→L6构件→L7幅别(桥墩)→L8编号→L9最小单元"
    return tpl, instances, data.get("totalBridgeCount", 243)


def read_slopes():
    df = pd.read_excel(ROOT / "2_01_边坡主表.xlsx", header=0)
    df = df.iloc[1:].dropna(subset=[df.columns[0]], how="all")
    insts = []
    for _, r in df.head(6).iterrows():
        code = str(r.iloc[0]).strip().replace("\t", "")
        insts.append({
            "id": "inst-slope-" + code[-12:],
            "templateId": "tpl-slope",
            "assetType": "slope",
            "name": str(r.iloc[1]),
            "code": code,
            "routeCode": str(r.iloc[3]) if pd.notna(r.iloc[3]) else "G78",
            "stakeStart": str(r.iloc[4]) if pd.notna(r.iloc[4]) else "",
            "stakeEnd": str(r.iloc[5]) if pd.notna(r.iloc[5]) else "",
            "direction": str(r.iloc[6]) if pd.notna(r.iloc[6]) else "",
            "slopeType": str(r.iloc[7]) if pd.notna(r.iloc[7]) else "",
            "location": "汕昆高速 G78 · 昆石高速",
            "centerStake": str(r.iloc[4]) if pd.notna(r.iloc[4]) else "",
            "centerStakeDisplay": str(r.iloc[1])[:20],
            "enabled": True,
            "modelId": "",
            "structureDefects": {},
        })
    return insts, len(df)


def read_ts_signs():
    df = pd.read_excel(ROOT / "3_01_交安设施主表.xlsx", sheet_name="交通标志（表1）", header=0)
    df = df.iloc[1:]
    insts = []
    for _, r in df.head(4).iterrows():
        stake = str(r.iloc[1]) if pd.notna(r.iloc[1]) else ""
        name = f"{stake}{r.iloc[4]}" if pd.notna(r.iloc[4]) else stake
        stake_fmt = mileage_to_stake(stake)
        code = f"G78-{stake_fmt}-{TS_CAT_ABBR['交通标志']}-{int(r.iloc[0]):03d}"
        insts.append({
            "id": "inst-ts-sign-" + str(r.iloc[0]),
            "templateId": "tpl-ts",
            "assetType": "traffic-safety",
            "name": str(name)[:40],
            "code": code,
            "tsCategory": "交通标志",
            "tsSubType": str(r.iloc[3]) if pd.notna(r.iloc[3]) else "",
            "stakeStart": stake,
            "stakeEnd": stake,
            "position": str(r.iloc[2]) if pd.notna(r.iloc[2]) else "",
            "location": "汕昆高速 · 交安",
            "centerStake": stake,
            "centerStakeDisplay": stake,
            "enabled": True,
            "modelId": "",
            "structureDefects": {},
        })
    return insts


def read_ts_guard():
    df = pd.read_excel(ROOT / "3_01_交安设施主表.xlsx", sheet_name="路基中分带护栏-波形护栏（表2）", header=0)
    df = df.iloc[1:]
    insts = []
    for _, r in df.head(3).iterrows():
        span = str(r.iloc[1]) if pd.notna(r.iloc[1]) else ""
        code = f"G78-{span.replace(' ', '')}-{TS_CAT_ABBR['波形梁护栏']}"
        insts.append({
            "id": "inst-ts-guard-" + str(r.iloc[0]),
            "templateId": "tpl-ts",
            "assetType": "traffic-safety",
            "name": f"波形护栏 {span}",
            "code": code,
            "tsCategory": "波形梁护栏",
            "stakeStart": span.split("-")[0] if "-" in span else span,
            "stakeEnd": span.split("-")[-1] if "-" in span else span,
            "position": str(r.iloc[2]) if pd.notna(r.iloc[2]) else "",
            "guardLevel": str(r.iloc[4]) if pd.notna(r.iloc[4]) else "",
            "length": str(r.iloc[8]) if pd.notna(r.iloc[8]) else "",
            "location": "汕昆高速 · 交安",
            "centerStakeDisplay": span,
            "enabled": True,
            "modelId": "",
            "structureDefects": {},
        })
    return insts


def read_tunnels():
    df = pd.read_excel(ROOT / "3.隧道.xlsx", header=0)
    df = df.iloc[2:10]
    insts = []
    for _, r in df.iterrows():
        if pd.isna(r.iloc[1]):
            continue
        name = str(r.iloc[1])
        direction = str(r.iloc[11]) if pd.notna(r.iloc[11]) else ""
        coord = str(r.iloc[10]) if pd.notna(r.iloc[10]) else ""
        stake_range = str(r.iloc[9]) if pd.notna(r.iloc[9]) else ""
        code = tunnel_code(name, stake_range, direction)
        insts.append({
            "id": nid("inst-tunnel", name, direction),
            "templateId": "tpl-tunnel",
            "assetType": "tunnel",
            "name": name + ("（" + direction + "）" if direction else ""),
            "code": code,
            "routeName": str(r.iloc[2]) if pd.notna(r.iloc[2]) else "",
            "length": float(r.iloc[3]) if pd.notna(r.iloc[3]) else None,
            "tunnelClass": str(r.iloc[8]) if pd.notna(r.iloc[8]) else "",
            "stakeRange": str(r.iloc[9]) if pd.notna(r.iloc[9]) else "",
            "centerCoord": coord,
            "maintainUnit": str(r.iloc[11]) if pd.notna(r.iloc[11]) else "",
            "location": "汕昆高速 G78",
            "centerStakeDisplay": str(r.iloc[9]) if pd.notna(r.iloc[9]) else "",
            "enabled": True,
            "modelId": "m-tunnel" if name == "阳宗隧道" and "上行" in direction else "",
            "structureDefects": {},
        })
    return insts


def read_toll():
    df = pd.read_excel(ROOT / "1.收费站、服务区、停车区、加水站.xlsx", sheet_name="1.收费站", header=0)
    df = df.iloc[2:11]
    insts = []
    for _, r in df.iterrows():
        if pd.isna(r.iloc[1]):
            continue
        stake = mileage_to_stake(r.iloc[5]) if pd.notna(r.iloc[5]) else ""
        code = str(r.iloc[0]) if pd.notna(r.iloc[0]) and str(r.iloc[0]) != "nan" else f"SFZ-G78-{stake}"
        insts.append({
            "id": nid("inst-toll", r.iloc[1]),
            "templateId": "tpl-facility",
            "assetType": "facility",
            "facilityType": "收费站",
            "name": str(r.iloc[1]),
            "code": code,
            "tollType": str(r.iloc[2]) if pd.notna(r.iloc[2]) else "",
            "stakeStart": str(r.iloc[5]) if pd.notna(r.iloc[5]) else "",
            "centerStakeDisplay": str(r.iloc[5]) if pd.notna(r.iloc[5]) else "",
            "centerCoord": str(r.iloc[10]) if pd.notna(r.iloc[10]) else "",
            "status": str(r.iloc[11]) if pd.notna(r.iloc[11]) else "",
            "lanes": str(r.iloc[12]) if pd.notna(r.iloc[12]) else "",
            "location": str(r.iloc[8]) if pd.notna(r.iloc[8]) else "",
            "enabled": str(r.iloc[11]) != "闲置",
            "modelId": "",
            "structureDefects": {},
        })
    return insts


def read_service():
    df = pd.read_excel(ROOT / "1.收费站、服务区、停车区、加水站.xlsx", sheet_name="2.服务区、停车区、加水站", header=0)
    df = df.iloc[2:9]
    insts = []
    for _, r in df.iterrows():
        if pd.isna(r.iloc[1]):
            continue
        ftype = str(r.iloc[2]) if pd.notna(r.iloc[2]) else "服务区"
        stake = mileage_to_stake(r.iloc[11]) if pd.notna(r.iloc[11]) else ""
        abbr = {"服务区": "FWQ", "停车区": "TCQ", "加水站": "JSS"}.get(ftype, "FAC")
        code = str(r.iloc[0]) if pd.notna(r.iloc[0]) and str(r.iloc[0]) != "nan" else f"FAC-G78-{stake}-{abbr}"
        insts.append({
            "id": nid("inst-fac", r.iloc[1]),
            "templateId": "tpl-facility",
            "assetType": "facility",
            "facilityType": ftype,
            "name": str(r.iloc[1]),
            "code": code,
            "stakeStart": str(r.iloc[11]) if pd.notna(r.iloc[11]) else "",
            "centerStakeDisplay": str(r.iloc[11]) if pd.notna(r.iloc[11]) else "",
            "centerCoord": str(r.iloc[10]) if pd.notna(r.iloc[10]) else "",
            "direction": str(r.iloc[12]) if pd.notna(r.iloc[12]) else "",
            "maintainUnit": str(r.iloc[5]) if pd.notna(r.iloc[5]) else "",
            "location": str(r.iloc[9]) if pd.notna(r.iloc[9]) else "",
            "enabled": True,
            "modelId": "",
            "structureDefects": {},
        })
    return insts


def read_escape():
    df = pd.read_excel(ROOT / "2.紧急避险车道.xlsx", header=0)
    r = df.iloc[2]
    return [{
        "id": "inst-escape-1",
        "templateId": "tpl-escape",
        "assetType": "escape-lane",
        "name": str(r.iloc[1]),
        "code": str(r.iloc[0]),
        "routeName": str(r.iloc[2]),
        "direction": str(r.iloc[3]),
        "stakeStart": str(r.iloc[4]),
        "centerStakeDisplay": str(r.iloc[4]),
        "centerCoord": str(r.iloc[5]),
        "escapeType": str(r.iloc[7]),
        "laneLength": str(r.iloc[8]),
        "laneWidth": str(r.iloc[9]),
        "maintainUnit": str(r.iloc[6]),
        "location": "汕昆高速 G78",
        "enabled": True,
        "modelId": "",
        "structureDefects": {},
    }]


def geo_sample():
    return [{
        "id": "inst-geo-sample",
        "templateId": "tpl-geo",
        "assetType": "geo-hazard",
        "name": "G78K1779+300滑坡点（样例）",
        "code": "G78K1779+300HP",
        "hazardType": "滑坡",
        "riskLevel": "三级（一般风险）",
        "stakeStart": "K1779+300",
        "stakeEnd": "K1779+350",
        "centerStakeDisplay": "K1779+300",
        "routeName": "汕昆高速",
        "routeCode": "G78",
        "location": "昆石高速 · 清单结构预置",
        "enabled": True,
        "modelId": "",
        "structureDefects": {},
        "note": "主表暂无数据行，按4_地质灾害点管理结构化数据清单预置字段",
    }]


def main():
    bridge_tpl, bridge_insts, bridge_count = load_bridge_template_and_instances()
    slope_insts, slope_count = read_slopes()
    ts_insts = read_ts_signs() + read_ts_guard()
    tunnel_insts = read_tunnels()
    toll_insts = read_toll()
    service_insts = read_service()
    escape_insts = read_escape()
    geo_insts = geo_sample()

    enc = get_encoding_rules()

    def attach_enc(tpl):
        at = tpl.get("assetType")
        tpl["encodingRule"] = enc.get(at, {})
        apply_template_maintain_flags(tpl.get("tree"))
        return tpl

    templates = [
        attach_enc({**bridge_tpl, "assetType": "bridge"}),
        attach_enc({
            "id": "tpl-slope",
            "name": "边坡",
            "category": "边坡",
            "saved": True,
            "savedAt": "2026-06-04",
            "schemaNote": "L1编码→L2名称→L3大类→L4子类→L5部位→编号",
            "tree": build_slope_tree(),
            "sourceFile": "2_02_边坡构件分解表.xlsx",
            "assetType": "slope",
        }),
        attach_enc({
            "id": "tpl-ts",
            "name": "交安设施",
            "category": "交安设施",
            "saved": True,
            "savedAt": "2026-06-04",
            "schemaNote": "L1编码→L2名称→L3设施大类→编号/可选细化构件",
            "tree": build_ts_tree(),
            "sourceFile": "3_02_交安设施构件分级表.xlsx",
            "assetType": "traffic-safety",
        }),
        attach_enc({
            "id": "tpl-tunnel",
            "name": "隧道",
            "category": "隧道",
            "saved": True,
            "savedAt": "2026-06-04",
            "schemaNote": "隧道唯一编码→名称→路线→长度/桩号/坐标（3.隧道.xlsx）",
            "tree": build_tunnel_tree(),
            "sourceFile": "3.隧道.xlsx",
            "assetType": "tunnel",
        }),
        attach_enc({
            "id": "tpl-geo",
            "name": "地质灾害点",
            "category": "地灾",
            "saved": True,
            "savedAt": "2026-06-04",
            "schemaNote": "灾害点编码→名称→桩号范围→风险等级→监测挂接",
            "tree": build_geo_tree(),
            "sourceFile": "4.地质灾害点管理结构化数据清单.xlsx",
            "assetType": "geo-hazard",
        }),
        attach_enc({
            "id": "tpl-facility",
            "name": "沿线服务设施",
            "category": "收费站/服务区",
            "saved": True,
            "savedAt": "2026-06-04",
            "schemaNote": "收费站编号或设施唯一编码→名称→类型→桩号→坐标",
            "tree": build_facility_tree(),
            "sourceFile": "1.收费站、服务区、停车区、加水站.xlsx",
            "assetType": "facility",
        }),
        attach_enc({
            "id": "tpl-escape",
            "name": "紧急避险车道",
            "category": "紧急避险车道",
            "saved": True,
            "savedAt": "2026-06-04",
            "schemaNote": "设施唯一编码→名称→桩号→制动床/护栏/监控",
            "tree": build_escape_tree(),
            "sourceFile": "2.紧急避险车道.xlsx",
            "assetType": "escape-lane",
        }),
    ]

    instances = (
        bridge_insts
        + slope_insts
        + ts_insts
        + tunnel_insts
        + geo_insts
        + toll_insts
        + service_insts
        + escape_insts
    )
    enrich_instance_units(instances)

    out = {
        "source": "昆石高速多资产素材",
        "routeLabel": "汕昆高速 G78 · 昆石高速",
        "scenes": [
            {
                "id": "sc-kunshi-bd-001",
                "name": "北大村特大桥-下行例行巡检",
                "instanceCode": "H78530126L9090",
                "instanceName": "北大村特大桥",
                "routeLabel": "汕昆高速 G78 · 昆石高速",
                "note": "场景拥有独立实例；航点在航线规划配置后同步至资产",
            },
        ],
        "templates": templates,
        "instances": instances,
        "totalCounts": {
            "bridge": bridge_count,
            "slope": slope_count,
            "trafficSign": 637,
            "tunnel": 5,
            "toll": len(toll_insts),
            "facility": len(toll_insts) + len(service_insts),
        },
        "featuredBridgeCode": "H78530126L9090",
        "encodingCatalog": enc,
    }

    out_path = ROOT / "prototype" / "asset-data.js"
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("/** 多资产类型初始化数据 · 由 Excel 自动生成 */\nconst ASSET_DATA = ")
        json.dump(out, f, ensure_ascii=False, indent=2)
        f.write(";\n")
    print("Wrote", out_path)
    print("templates:", len(templates), "instances:", len(instances))


if __name__ == "__main__":
    main()
