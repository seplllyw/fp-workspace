/** 多资产类型初始化数据 · 由 Excel 自动生成 */
const ASSET_DATA = {
  "source": "昆石高速多资产素材",
  "routeLabel": "汕昆高速 G78 · 昆石高速",
  "scenes": [
    {
      "id": "sc-kunshi-bd-001",
      "name": "北大村特大桥-下行例行巡检",
      "instanceCode": "H78530126L9090",
      "instanceName": "北大村特大桥",
      "routeLabel": "汕昆高速 G78 · 昆石高速",
      "note": "场景拥有独立实例；航点在航线规划配置后同步至资产"
    }
  ],
  "templates": [
    {
      "id": "tpl-bridge",
      "name": "桥梁",
      "category": "桥梁",
      "saved": true,
      "savedAt": "2026-06-04",
      "schemaNote": "桥梁类型→部位（上/下/桥面系）→构件→幅别(桥墩)→编号→检查部位",
      "tree": [
  {
    "id": "root",
    "name": "桥梁",
    "level": 1,
    "children": [
      {
        "id": "l3-arch",
        "name": "拱式桥",
        "level": 2,
        "children": [
          {
            "id": "part-拱式桥-上部结构",
            "name": "上部结构",
            "level": 3,
            "defectIds": [],
            "children": [
              {
                "id": "t-主拱圈",
                "name": "主拱圈",
                "level": 4,
                "defectIds": [
                  "br-d009",
                  "d1",
                  "d6",
                  "br-d010",
                  "br-d011",
                  "br-d012",
                  "br-d013",
                  "br-d014"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-拱上结构",
                "name": "拱上结构",
                "level": 4,
                "defectIds": [
                  "br-d015",
                  "br-d016",
                  "br-d017",
                  "br-d018",
                  "br-d019",
                  "br-d020",
                  "d1",
                  "br-d021"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-桥面板",
                "name": "桥面板",
                "level": 4,
                "defectIds": [
                  "br-d012",
                  "br-d013",
                  "br-d014",
                  "br-d022",
                  "d1"
                ],
                "children": [],
                "dataMaintain": true
              }
            ],
            "dataMaintain": false
          },
          {
            "id": "part-拱式桥-下部结构",
            "name": "下部结构",
            "level": 3,
            "defectIds": [],
            "children": [
              {
                "id": "t-翼墙耳墙",
                "name": "翼墙耳墙",
                "level": 4,
                "defectIds": [
                  "br-d023",
                  "br-d024",
                  "br-d025",
                  "d1"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-锥坡护坡",
                "name": "锥坡护坡",
                "level": 4,
                "defectIds": [
                  "br-d026",
                  "br-d027"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-桥墩",
                "name": "桥墩",
                "level": 4,
                "defectIds": [
                  "br-d012",
                  "d2",
                  "br-d014",
                  "br-d022",
                  "br-d024",
                  "d1"
                ],
                "children": [
                  {
                    "id": "span-桥墩-L",
                    "name": "左幅（L）",
                    "level": 5,
                    "children": [
                      {
                        "id": "p-桥墩-L",
                        "name": "编号/位置",
                        "level": 6,
                        "children": [
                          {
                            "id": "seq-桥墩-L",
                            "name": "1、2、3…",
                            "level": 7,
                            "children": [],
                            "unitGroup": true,
                            "dataMaintain": false
                          }
                        ],
                        "dataMaintain": false
                      }
                    ],
                    "dataMaintain": false
                  },
                  {
                    "id": "span-桥墩-R",
                    "name": "右幅（R）",
                    "level": 5,
                    "children": [
                      {
                        "id": "p-桥墩-R",
                        "name": "编号/位置",
                        "level": 6,
                        "children": [
                          {
                            "id": "seq-桥墩-R",
                            "name": "1、2、3…",
                            "level": 7,
                            "children": [],
                            "unitGroup": true,
                            "dataMaintain": false
                          }
                        ],
                        "dataMaintain": false
                      }
                    ],
                    "dataMaintain": false
                  },
                  {
                    "id": "span-桥墩-F",
                    "name": "全幅（F）",
                    "level": 5,
                    "children": [
                      {
                        "id": "p-桥墩-F",
                        "name": "编号/位置",
                        "level": 6,
                        "children": [
                          {
                            "id": "seq-桥墩-F",
                            "name": "1、2、3…",
                            "level": 7,
                            "children": [],
                            "unitGroup": true,
                            "dataMaintain": false
                          }
                        ],
                        "dataMaintain": false
                      }
                    ],
                    "dataMaintain": false
                  }
                ],
                "dataMaintain": false
              },
              {
                "id": "t-桥台",
                "name": "桥台",
                "level": 4,
                "defectIds": [
                  "d3",
                  "br-d014",
                  "br-d028",
                  "br-d024",
                  "d1"
                ],
                "children": [
                  {
                    "id": "p-桥台",
                    "name": "编号/位置",
                    "level": 5,
                    "children": [
                      {
                        "id": "seq-桥台",
                        "name": "1、2、3…",
                        "level": 6,
                        "children": [],
                        "unitGroup": true,
                        "dataMaintain": false
                      }
                    ],
                    "dataMaintain": false
                  }
                ],
                "dataMaintain": false
              },
              {
                "id": "t-墩台基础",
                "name": "墩台基础",
                "level": 4,
                "defectIds": [
                  "br-d029",
                  "d2",
                  "br-d030",
                  "br-d031",
                  "d1"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-河床",
                "name": "河床",
                "level": 4,
                "defectIds": [
                  "br-d032",
                  "br-d027",
                  "br-d033"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-调治构造物",
                "name": "调治构造物",
                "level": 4,
                "defectIds": [
                  "br-d034",
                  "br-d035"
                ],
                "children": [],
                "dataMaintain": true
              }
            ],
            "dataMaintain": false
          },
          {
            "id": "part-拱式桥-桥面系",
            "name": "桥面系",
            "level": 3,
            "defectIds": [],
            "children": [
              {
                "id": "t-沥青铺装",
                "name": "沥青铺装",
                "level": 4,
                "defectIds": [
                  "br-d023",
                  "br-d036",
                  "br-d009",
                  "d1"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-水泥铺装",
                "name": "水泥铺装",
                "level": 4,
                "defectIds": [
                  "br-d037",
                  "br-d038",
                  "br-d039",
                  "d1",
                  "d3"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-伸缩缝",
                "name": "伸缩缝",
                "level": 4,
                "defectIds": [
                  "br-d040",
                  "br-d041",
                  "br-d042",
                  "br-d023"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-人行道",
                "name": "人行道",
                "level": 4,
                "defectIds": [
                  "br-d043",
                  "br-d023"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-栏杆-护栏",
                "name": "栏杆/护栏",
                "level": 4,
                "defectIds": [
                  "br-d044",
                  "br-d023"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-防排水系统",
                "name": "防排水系统",
                "level": 4,
                "defectIds": [
                  "br-d021",
                  "br-d045"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-标志标牌",
                "name": "标志标牌",
                "level": 4,
                "defectIds": [
                  "br-d043",
                  "br-d023",
                  "br-d009",
                  "br-d046",
                  "br-d047",
                  "br-d048"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-照明装置",
                "name": "照明装置",
                "level": 4,
                "defectIds": [
                  "br-d043",
                  "br-d049"
                ],
                "children": [],
                "dataMaintain": true
              }
            ],
            "dataMaintain": false
          }
        ],
        "dataMaintain": false
      },
      {
        "id": "l3-beam",
        "name": "梁式桥",
        "level": 2,
        "children": [
          {
            "id": "part-梁式桥-上部结构",
            "name": "上部结构",
            "level": 3,
            "defectIds": [],
            "children": [
              {
                "id": "t-梁底（每跨）",
                "name": "上部承重构件（主梁、挂梁）- 混凝土梁",
                "level": 4,
                "defectIds": [
                  "br-d012",
                  "br-d050",
                  "br-d051",
                  "br-d052",
                  "br-d053",
                  "br-d054"
                ],
                "children": [
                  {
                    "id": "p-上部承重构件-主梁-挂梁-混凝土梁",
                    "name": "编号/位置",
                    "level": 5,
                    "children": [
                      {
                        "id": "seq-梁底（每跨）",
                        "name": "1、2、3…",
                        "level": 6,
                        "children": [],
                        "unitGroup": true,
                        "dataMaintain": false
                      }
                    ],
                    "dataMaintain": false
                  }
                ],
                "dataMaintain": false
              },
              {
                "id": "t-上部承重构件-主梁-挂梁-钢梁",
                "name": "上部承重构件（主梁、挂梁）- 钢梁",
                "level": 4,
                "defectIds": [
                  "d7",
                  "d4",
                  "br-d055",
                  "d8",
                  "br-d056",
                  "br-d052",
                  "br-d057",
                  "br-d053"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-上部一般构件-湿接缝-横隔板",
                "name": "上部一般构件（湿接缝、横隔板）",
                "level": 4,
                "defectIds": [
                  "br-d012",
                  "br-d050",
                  "br-d051"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-支座",
                "name": "支座 - 板式橡胶支座",
                "level": 4,
                "defectIds": [
                  "br-d058",
                  "br-d059",
                  "d5"
                ],
                "children": [
                  {
                    "id": "p-支座-板式橡胶支座",
                    "name": "编号/位置",
                    "level": 5,
                    "children": [
                      {
                        "id": "seq-支座",
                        "name": "1、2、3…",
                        "level": 6,
                        "children": [],
                        "unitGroup": true,
                        "dataMaintain": false
                      }
                    ],
                    "dataMaintain": false
                  }
                ],
                "dataMaintain": false
              },
              {
                "id": "t-支座-盆式支座",
                "name": "支座 - 盆式支座",
                "level": 4,
                "defectIds": [
                  "br-d060",
                  "br-d061",
                  "br-d062"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-支座-钢支座",
                "name": "支座 - 钢支座",
                "level": 4,
                "defectIds": [
                  "br-d063",
                  "br-d062",
                  "br-d064"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-混凝土摆式支座",
                "name": "混凝土摆式支座",
                "level": 4,
                "defectIds": [
                  "br-d065",
                  "br-d066",
                  "br-d067"
                ],
                "children": [],
                "dataMaintain": true
              }
            ],
            "dataMaintain": false
          },
          {
            "id": "part-梁式桥-下部结构",
            "name": "下部结构",
            "level": 3,
            "defectIds": [],
            "children": [
              {
                "id": "t-翼墙耳墙",
                "name": "翼墙耳墙",
                "level": 4,
                "defectIds": [
                  "br-d023",
                  "br-d024",
                  "br-d025",
                  "d1"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-锥坡护坡",
                "name": "锥坡护坡",
                "level": 4,
                "defectIds": [
                  "br-d026",
                  "br-d027"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-桥墩",
                "name": "桥墩",
                "level": 4,
                "defectIds": [
                  "br-d012",
                  "d2",
                  "br-d014",
                  "br-d022",
                  "br-d024",
                  "d1"
                ],
                "children": [
                  {
                    "id": "span-桥墩-L",
                    "name": "左幅（L）",
                    "level": 5,
                    "children": [
                      {
                        "id": "p-桥墩-L",
                        "name": "编号/位置",
                        "level": 6,
                        "children": [
                          {
                            "id": "seq-桥墩-L",
                            "name": "1、2、3…",
                            "level": 7,
                            "children": [],
                            "unitGroup": true,
                            "dataMaintain": false
                          }
                        ],
                        "dataMaintain": false
                      }
                    ],
                    "dataMaintain": false
                  },
                  {
                    "id": "span-桥墩-R",
                    "name": "右幅（R）",
                    "level": 5,
                    "children": [
                      {
                        "id": "p-桥墩-R",
                        "name": "编号/位置",
                        "level": 6,
                        "children": [
                          {
                            "id": "seq-桥墩-R",
                            "name": "1、2、3…",
                            "level": 7,
                            "children": [],
                            "unitGroup": true,
                            "dataMaintain": false
                          }
                        ],
                        "dataMaintain": false
                      }
                    ],
                    "dataMaintain": false
                  },
                  {
                    "id": "span-桥墩-F",
                    "name": "全幅（F）",
                    "level": 5,
                    "children": [
                      {
                        "id": "p-桥墩-F",
                        "name": "编号/位置",
                        "level": 6,
                        "children": [
                          {
                            "id": "seq-桥墩-F",
                            "name": "1、2、3…",
                            "level": 7,
                            "children": [],
                            "unitGroup": true,
                            "dataMaintain": false
                          }
                        ],
                        "dataMaintain": false
                      }
                    ],
                    "dataMaintain": false
                  }
                ],
                "dataMaintain": false
              },
              {
                "id": "t-桥台",
                "name": "桥台",
                "level": 4,
                "defectIds": [
                  "d3",
                  "br-d014",
                  "br-d028",
                  "br-d024",
                  "d1"
                ],
                "children": [
                  {
                    "id": "p-桥台",
                    "name": "编号/位置",
                    "level": 5,
                    "children": [
                      {
                        "id": "seq-桥台",
                        "name": "1、2、3…",
                        "level": 6,
                        "children": [],
                        "unitGroup": true,
                        "dataMaintain": false
                      }
                    ],
                    "dataMaintain": false
                  }
                ],
                "dataMaintain": false
              },
              {
                "id": "t-墩台基础",
                "name": "墩台基础",
                "level": 4,
                "defectIds": [
                  "br-d029",
                  "d2",
                  "br-d030",
                  "br-d031",
                  "d1"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-河床",
                "name": "河床",
                "level": 4,
                "defectIds": [
                  "br-d032",
                  "br-d027",
                  "br-d033"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-调治构造物",
                "name": "调治构造物",
                "level": 4,
                "defectIds": [
                  "br-d034",
                  "br-d035"
                ],
                "children": [],
                "dataMaintain": true
              }
            ],
            "dataMaintain": false
          },
          {
            "id": "part-梁式桥-桥面系",
            "name": "桥面系",
            "level": 3,
            "defectIds": [],
            "children": [
              {
                "id": "t-沥青铺装",
                "name": "沥青铺装",
                "level": 4,
                "defectIds": [
                  "br-d023",
                  "br-d036",
                  "br-d009",
                  "d1"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-水泥铺装",
                "name": "水泥铺装",
                "level": 4,
                "defectIds": [
                  "br-d037",
                  "br-d038",
                  "br-d039",
                  "d1",
                  "d3"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-伸缩缝",
                "name": "伸缩缝",
                "level": 4,
                "defectIds": [
                  "br-d040",
                  "br-d041",
                  "br-d042",
                  "br-d023"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-人行道",
                "name": "人行道",
                "level": 4,
                "defectIds": [
                  "br-d043",
                  "br-d023"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-栏杆-护栏",
                "name": "栏杆/护栏",
                "level": 4,
                "defectIds": [
                  "br-d044",
                  "br-d023"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-防排水系统",
                "name": "防排水系统",
                "level": 4,
                "defectIds": [
                  "br-d021",
                  "br-d045"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-标志标牌",
                "name": "标志标牌",
                "level": 4,
                "defectIds": [
                  "br-d043",
                  "br-d023",
                  "br-d009",
                  "br-d046",
                  "br-d047",
                  "br-d048"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-照明装置",
                "name": "照明装置",
                "level": 4,
                "defectIds": [
                  "br-d043",
                  "br-d049"
                ],
                "children": [],
                "dataMaintain": true
              }
            ],
            "dataMaintain": false
          }
        ],
        "dataMaintain": false
      },
      {
        "id": "l3-susp",
        "name": "悬索桥",
        "level": 2,
        "children": [
          {
            "id": "part-悬索桥-上部结构",
            "name": "上部结构",
            "level": 3,
            "defectIds": [],
            "children": [
              {
                "id": "t-主缆",
                "name": "主缆",
                "level": 4,
                "defectIds": [
                  "br-d068",
                  "br-d069",
                  "br-d070",
                  "br-d071",
                  "br-d072"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-吊索及钢护筒",
                "name": "吊索及钢护筒",
                "level": 4,
                "defectIds": [
                  "d6",
                  "br-d073",
                  "br-d074",
                  "br-d075",
                  "br-d076",
                  "br-d077",
                  "br-d078",
                  "br-d079"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-加劲梁-混凝土加劲梁",
                "name": "加劲梁 - 混凝土加劲梁",
                "level": 4,
                "defectIds": [
                  "d2",
                  "br-d052",
                  "br-d057"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-加劲梁-钢桁架加劲梁",
                "name": "加劲梁 - 钢桁架加劲梁",
                "level": 4,
                "defectIds": [
                  "d4",
                  "br-d052",
                  "br-d057"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-加劲梁-钢箱加劲梁",
                "name": "加劲梁 - 钢箱加劲梁",
                "level": 4,
                "defectIds": [
                  "d4",
                  "br-d052",
                  "br-d057"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-索塔",
                "name": "索塔",
                "level": 4,
                "defectIds": [
                  "br-d080",
                  "br-d081"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-索夹",
                "name": "索夹",
                "level": 4,
                "defectIds": [
                  "br-d082",
                  "br-d083",
                  "br-d084",
                  "br-d085"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-索鞍",
                "name": "索鞍",
                "level": 4,
                "defectIds": [
                  "br-d086",
                  "br-d087",
                  "d4"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-锚杆",
                "name": "锚杆",
                "level": 4,
                "defectIds": [
                  "br-d088",
                  "d4",
                  "br-d089"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-支座-特殊",
                "name": "支座（特殊）",
                "level": 4,
                "defectIds": [
                  "br-d090",
                  "br-d091",
                  "br-d092"
                ],
                "children": [],
                "dataMaintain": true
              }
            ],
            "dataMaintain": false
          },
          {
            "id": "part-悬索桥-下部结构",
            "name": "下部结构",
            "level": 3,
            "defectIds": [],
            "children": [
              {
                "id": "t-锚碇",
                "name": "锚碇",
                "level": 4,
                "defectIds": [
                  "br-d093",
                  "br-d094",
                  "br-d095",
                  "br-d096",
                  "br-d097"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-索塔基础",
                "name": "索塔基础",
                "level": 4,
                "defectIds": [
                  "br-d029",
                  "d2",
                  "br-d098",
                  "br-d099",
                  "br-d030",
                  "br-d031",
                  "d1"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-散索鞍",
                "name": "散索鞍",
                "level": 4,
                "defectIds": [
                  "br-d086",
                  "br-d087",
                  "d4"
                ],
                "children": [],
                "dataMaintain": true
              }
            ],
            "dataMaintain": false
          },
          {
            "id": "part-悬索桥-桥面系",
            "name": "桥面系",
            "level": 3,
            "defectIds": [],
            "children": [
              {
                "id": "t-沥青铺装",
                "name": "沥青铺装",
                "level": 4,
                "defectIds": [
                  "br-d023",
                  "br-d036",
                  "br-d009",
                  "d1"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-水泥铺装",
                "name": "水泥铺装",
                "level": 4,
                "defectIds": [
                  "br-d037",
                  "br-d038",
                  "br-d039",
                  "d1",
                  "d3"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-伸缩缝",
                "name": "伸缩缝",
                "level": 4,
                "defectIds": [
                  "br-d040",
                  "br-d041",
                  "br-d042",
                  "br-d023"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-人行道",
                "name": "人行道",
                "level": 4,
                "defectIds": [
                  "br-d043",
                  "br-d023"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-栏杆-护栏",
                "name": "栏杆/护栏",
                "level": 4,
                "defectIds": [
                  "br-d044",
                  "br-d023"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-防排水系统",
                "name": "防排水系统",
                "level": 4,
                "defectIds": [
                  "br-d021",
                  "br-d045"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-标志标牌",
                "name": "标志标牌",
                "level": 4,
                "defectIds": [
                  "br-d043",
                  "br-d023",
                  "br-d009",
                  "br-d046",
                  "br-d047",
                  "br-d048"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-照明装置",
                "name": "照明装置",
                "level": 4,
                "defectIds": [
                  "br-d043",
                  "br-d049"
                ],
                "children": [],
                "dataMaintain": true
              }
            ],
            "dataMaintain": false
          }
        ],
        "dataMaintain": false
      },
      {
        "id": "l3-cable",
        "name": "斜拉桥",
        "level": 2,
        "children": [
          {
            "id": "part-斜拉桥-上部结构",
            "name": "上部结构",
            "level": 3,
            "defectIds": [],
            "children": [
              {
                "id": "t-斜拉索",
                "name": "斜拉索",
                "level": 4,
                "defectIds": [
                  "br-d100",
                  "br-d101",
                  "br-d102",
                  "br-d103",
                  "br-d104",
                  "br-d069"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-斜拉索护套",
                "name": "斜拉索护套",
                "level": 4,
                "defectIds": [
                  "br-d105",
                  "d4",
                  "br-d106",
                  "br-d107"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-锚具",
                "name": "锚具",
                "level": 4,
                "defectIds": [
                  "br-d108",
                  "br-d109",
                  "br-d110",
                  "d4"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-减震装置",
                "name": "减震装置",
                "level": 4,
                "defectIds": [
                  "br-d034"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-主梁-混凝土主梁",
                "name": "主梁—混凝土主梁",
                "level": 4,
                "defectIds": [
                  "d2",
                  "br-d052",
                  "br-d057"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-主梁-钢桁架主梁",
                "name": "主梁—钢桁架主梁",
                "level": 4,
                "defectIds": [
                  "d4",
                  "br-d052",
                  "br-d057"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-主梁-钢箱主梁",
                "name": "主梁—钢箱主梁",
                "level": 4,
                "defectIds": [
                  "d4",
                  "br-d052",
                  "br-d057"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-索塔",
                "name": "索塔",
                "level": 4,
                "defectIds": [
                  "br-d080",
                  "br-d111",
                  "br-d081"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-支座-板式橡胶支座",
                "name": "支座 - 板式橡胶支座",
                "level": 4,
                "defectIds": [
                  "br-d058",
                  "br-d059",
                  "d5"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-支座-盆式支座",
                "name": "支座 - 盆式支座",
                "level": 4,
                "defectIds": [
                  "br-d060",
                  "br-d061",
                  "br-d062"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-支座-钢支座",
                "name": "支座 - 钢支座",
                "level": 4,
                "defectIds": [
                  "br-d063",
                  "br-d062",
                  "br-d064"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-混凝土摆式支座",
                "name": "混凝土摆式支座",
                "level": 4,
                "defectIds": [
                  "br-d065",
                  "br-d066",
                  "br-d067"
                ],
                "children": [],
                "dataMaintain": true
              }
            ],
            "dataMaintain": false
          },
          {
            "id": "part-斜拉桥-下部结构",
            "name": "下部结构",
            "level": 3,
            "defectIds": [],
            "children": [
              {
                "id": "t-翼墙耳墙",
                "name": "翼墙耳墙",
                "level": 4,
                "defectIds": [
                  "br-d023",
                  "br-d024",
                  "br-d025",
                  "d1"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-锥坡护坡",
                "name": "锥坡护坡",
                "level": 4,
                "defectIds": [
                  "br-d026",
                  "br-d027"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-桥墩",
                "name": "桥墩",
                "level": 4,
                "defectIds": [
                  "br-d012",
                  "d2",
                  "br-d014",
                  "br-d022",
                  "br-d024",
                  "d1"
                ],
                "children": [
                  {
                    "id": "span-桥墩-L",
                    "name": "左幅（L）",
                    "level": 5,
                    "children": [
                      {
                        "id": "p-桥墩-L",
                        "name": "编号/位置",
                        "level": 6,
                        "children": [
                          {
                            "id": "seq-桥墩-L",
                            "name": "1、2、3…",
                            "level": 7,
                            "children": [],
                            "unitGroup": true,
                            "dataMaintain": false
                          }
                        ],
                        "dataMaintain": false
                      }
                    ],
                    "dataMaintain": false
                  },
                  {
                    "id": "span-桥墩-R",
                    "name": "右幅（R）",
                    "level": 5,
                    "children": [
                      {
                        "id": "p-桥墩-R",
                        "name": "编号/位置",
                        "level": 6,
                        "children": [
                          {
                            "id": "seq-桥墩-R",
                            "name": "1、2、3…",
                            "level": 7,
                            "children": [],
                            "unitGroup": true,
                            "dataMaintain": false
                          }
                        ],
                        "dataMaintain": false
                      }
                    ],
                    "dataMaintain": false
                  },
                  {
                    "id": "span-桥墩-F",
                    "name": "全幅（F）",
                    "level": 5,
                    "children": [
                      {
                        "id": "p-桥墩-F",
                        "name": "编号/位置",
                        "level": 6,
                        "children": [
                          {
                            "id": "seq-桥墩-F",
                            "name": "1、2、3…",
                            "level": 7,
                            "children": [],
                            "unitGroup": true,
                            "dataMaintain": false
                          }
                        ],
                        "dataMaintain": false
                      }
                    ],
                    "dataMaintain": false
                  }
                ],
                "dataMaintain": false
              },
              {
                "id": "t-桥台",
                "name": "桥台",
                "level": 4,
                "defectIds": [
                  "d3",
                  "br-d014",
                  "br-d028",
                  "br-d024",
                  "d1"
                ],
                "children": [
                  {
                    "id": "p-桥台",
                    "name": "编号/位置",
                    "level": 5,
                    "children": [
                      {
                        "id": "seq-桥台",
                        "name": "1、2、3…",
                        "level": 6,
                        "children": [],
                        "unitGroup": true,
                        "dataMaintain": false
                      }
                    ],
                    "dataMaintain": false
                  }
                ],
                "dataMaintain": false
              },
              {
                "id": "t-墩台基础",
                "name": "墩台基础",
                "level": 4,
                "defectIds": [
                  "br-d029",
                  "d2",
                  "br-d030",
                  "br-d031",
                  "d1"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-河床",
                "name": "河床",
                "level": 4,
                "defectIds": [
                  "br-d032",
                  "br-d027",
                  "br-d033"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-调治构造物",
                "name": "调治构造物",
                "level": 4,
                "defectIds": [
                  "br-d034",
                  "br-d035"
                ],
                "children": [],
                "dataMaintain": true
              }
            ],
            "dataMaintain": false
          },
          {
            "id": "part-斜拉桥-桥面系",
            "name": "桥面系",
            "level": 3,
            "defectIds": [],
            "children": [
              {
                "id": "t-沥青铺装",
                "name": "沥青铺装",
                "level": 4,
                "defectIds": [
                  "br-d023",
                  "br-d036",
                  "br-d009",
                  "d1"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-水泥铺装",
                "name": "水泥铺装",
                "level": 4,
                "defectIds": [
                  "br-d037",
                  "br-d038",
                  "br-d039",
                  "d1",
                  "d3"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-伸缩缝",
                "name": "伸缩缝",
                "level": 4,
                "defectIds": [
                  "br-d040",
                  "br-d041",
                  "br-d042",
                  "br-d023"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-人行道",
                "name": "人行道",
                "level": 4,
                "defectIds": [
                  "br-d043",
                  "br-d023"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-栏杆-护栏",
                "name": "栏杆/护栏",
                "level": 4,
                "defectIds": [
                  "br-d044",
                  "br-d023"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-防排水系统",
                "name": "防排水系统",
                "level": 4,
                "defectIds": [
                  "br-d021",
                  "br-d045"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-标志标牌",
                "name": "标志标牌",
                "level": 4,
                "defectIds": [
                  "br-d043",
                  "br-d023",
                  "br-d009",
                  "br-d046",
                  "br-d047",
                  "br-d048"
                ],
                "children": [],
                "dataMaintain": true
              },
              {
                "id": "t-照明装置",
                "name": "照明装置",
                "level": 4,
                "defectIds": [
                  "br-d043",
                  "br-d049"
                ],
                "children": [],
                "dataMaintain": true
              }
            ],
            "dataMaintain": false
          }
        ],
        "dataMaintain": false
      }
    ],
    "dataMaintain": false
  }
],
      "sourceFile": "桥梁经常化巡检.docx",
      "assetType": "bridge",
      "encodingRule": {
        "entity": {
          "label": "桥梁编码（台账/JTG）",
          "pattern": "[上下行H|G] + 7853 + [路段码4位] + L + [流水号4位]",
          "patternDesc": "1_01桥梁主表 · 功能清单：桥梁编码为全局唯一键（UK）",
          "example": "H78530126L9090",
          "segments": [
            {
              "key": "direction",
              "label": "上下行",
              "options": [
                {
                  "value": "H",
                  "label": "H · 下行"
                },
                {
                  "value": "G",
                  "label": "G · 上行"
                }
              ]
            },
            {
              "key": "routeSeg",
              "label": "路线段",
              "fixed": "7853",
              "desc": "G78 汕昆·昆石"
            },
            {
              "key": "section",
              "label": "路段码(4位)",
              "placeholder": "0126",
              "default": "0126"
            },
            {
              "key": "laneMark",
              "label": "幅别标记",
              "fixed": "L",
              "desc": "台账编码固定位"
            },
            {
              "key": "serial",
              "label": "流水号(4位)",
              "placeholder": "9090",
              "default": "9090"
            }
          ]
        },
        "component": {
          "label": "构件实例编码",
          "pattern": "[桥型码]-[部位码]-[方向]-[流水号]",
          "source": "数据资产配置功能清单 · 编码规则引擎",
          "example": "LS-QD-L-0001",
          "segmentDefs": [
            {
              "key": "bridgeType",
              "label": "桥型码",
              "options": [
                {
                  "value": "LS",
                  "label": "梁式桥(LS)"
                },
                {
                  "value": "GQ",
                  "label": "拱式桥(GQ)"
                },
                {
                  "value": "XLQ",
                  "label": "斜拉桥(XLQ)"
                },
                {
                  "value": "XSQ",
                  "label": "悬索桥(XSQ)"
                }
              ]
            },
            {
              "key": "part",
              "label": "部位码",
              "options": [
                {
                  "value": "QD",
                  "label": "桥墩→QD"
                },
                {
                  "value": "GL",
                  "label": "盖梁→GL"
                },
                {
                  "value": "QT",
                  "label": "桥台→QT"
                },
                {
                  "value": "CT",
                  "label": "墩台基础（承台）→CT"
                },
                {
                  "value": "ZP",
                  "label": "锥坡→ZP"
                },
                {
                  "value": "LD",
                  "label": "梁底（每跨）→LD"
                },
                {
                  "value": "HGB",
                  "label": "横隔板→HGB"
                },
                {
                  "value": "QMD",
                  "label": "桥面底面→QMD"
                },
                {
                  "value": "ZZ",
                  "label": "支座→ZZ"
                },
                {
                  "value": "SSF",
                  "label": "伸缩缝→SSF"
                },
                {
                  "value": "QMPZ",
                  "label": "桥面铺装→QMPZ"
                },
                {
                  "value": "PSK",
                  "label": "排水口→PSK"
                },
                {
                  "value": "HL",
                  "label": "护栏→HL"
                },
                {
                  "value": "LDEN",
                  "label": "路灯→LDEN"
                },
                {
                  "value": "BZP",
                  "label": "标志牌→BZP"
                }
              ]
            },
            {
              "key": "span",
              "label": "方向/幅别",
              "options": [
                {
                  "value": "L",
                  "label": "L · 左幅"
                },
                {
                  "value": "R",
                  "label": "R · 右幅"
                },
                {
                  "value": "S",
                  "label": "S · 单幅"
                }
              ]
            },
            {
              "key": "serial",
              "label": "流水号",
              "placeholder": "0001",
              "default": "0001"
            }
          ],
          "partCodes": {
            "桥墩": "QD",
            "盖梁": "GL",
            "桥台": "QT",
            "墩台基础（承台）": "CT",
            "锥坡": "ZP",
            "梁底（每跨）": "LD",
            "横隔板": "HGB",
            "桥面底面": "QMD",
            "支座": "ZZ",
            "伸缩缝": "SSF",
            "桥面铺装": "QMPZ",
            "排水口": "PSK",
            "护栏": "HL",
            "路灯": "LDEN",
            "标志牌": "BZP"
          },
          "spanFromTree": {
            "左幅（L）": "L",
            "右幅（R）": "R",
            "全幅（F）": "F"
          }
        }
      }
    },
    {
      "id": "tpl-slope",
      "name": "边坡",
      "category": "边坡",
      "saved": true,
      "savedAt": "2026-06-04",
      "schemaNote": "L1编码→L2名称→L3大类→L4子类→L5部位→编号",
      "tree": [
        {
          "id": "root-slope",
          "name": "边坡",
          "level": 1,
          "children": [
            {
              "id": "l2-slope-schema",
              "name": "构件分解（L1-L5）",
              "level": 2,
              "children": [
                {
                  "id": "坡面-2",
                  "name": "坡面",
                  "level": 2,
                  "children": [
                    {
                      "id": "①坡面防护-3",
                      "name": "①坡面防护",
                      "level": 3,
                      "children": [
                        {
                          "id": "护面墙-5",
                          "name": "护面墙",
                          "level": 5,
                          "children": [
                            {
                              "id": "编号位置-5",
                              "name": "编号/位置",
                              "level": 5,
                              "children": [
                                {
                                  "id": "123-5",
                                  "name": "1、2、3…",
                                  "level": 5,
                                  "children": [],
                                  "unitGroup": true,
                                  "dataMaintain": false
                                }
                              ],
                              "dataMaintain": false
                            }
                          ],
                          "dataMaintain": false
                        },
                        {
                          "id": "喷锚喷射混凝土-5",
                          "name": "喷锚/喷射混凝土",
                          "level": 5,
                          "children": [
                            {
                              "id": "编号位置-5",
                              "name": "编号/位置",
                              "level": 5,
                              "children": [
                                {
                                  "id": "123-5",
                                  "name": "1、2、3…",
                                  "level": 5,
                                  "children": [],
                                  "unitGroup": true,
                                  "dataMaintain": false
                                }
                              ],
                              "dataMaintain": false
                            }
                          ],
                          "dataMaintain": false
                        },
                        {
                          "id": "柔性防护网-5",
                          "name": "柔性防护网",
                          "level": 5,
                          "children": [
                            {
                              "id": "编号位置-5",
                              "name": "编号/位置",
                              "level": 5,
                              "children": [
                                {
                                  "id": "123-5",
                                  "name": "1、2、3…",
                                  "level": 5,
                                  "children": [],
                                  "unitGroup": true,
                                  "dataMaintain": false
                                }
                              ],
                              "dataMaintain": false
                            }
                          ],
                          "dataMaintain": false
                        }
                      ],
                      "dataMaintain": false
                    },
                    {
                      "id": "②坡面加固-3",
                      "name": "②坡面加固",
                      "level": 3,
                      "children": [
                        {
                          "id": "锚杆（索）框架梁-5",
                          "name": "锚杆（索）框架梁",
                          "level": 5,
                          "children": [
                            {
                              "id": "编号位置-5",
                              "name": "编号/位置",
                              "level": 5,
                              "children": [
                                {
                                  "id": "123-5",
                                  "name": "1、2、3…",
                                  "level": 5,
                                  "children": [],
                                  "unitGroup": true,
                                  "dataMaintain": false
                                }
                              ],
                              "dataMaintain": false
                            }
                          ],
                          "dataMaintain": false
                        },
                        {
                          "id": "抗滑桩-5",
                          "name": "抗滑桩",
                          "level": 5,
                          "children": [
                            {
                              "id": "编号位置-5",
                              "name": "编号/位置",
                              "level": 5,
                              "children": [
                                {
                                  "id": "123-5",
                                  "name": "1、2、3…",
                                  "level": 5,
                                  "children": [],
                                  "unitGroup": true,
                                  "dataMaintain": false
                                }
                              ],
                              "dataMaintain": false
                            }
                          ],
                          "dataMaintain": false
                        }
                      ],
                      "dataMaintain": false
                    },
                    {
                      "id": "③坡面排水-3",
                      "name": "③坡面排水",
                      "level": 3,
                      "children": [
                        {
                          "id": "坡面排水沟-5",
                          "name": "坡面排水沟",
                          "level": 5,
                          "children": [
                            {
                              "id": "编号位置-5",
                              "name": "编号/位置",
                              "level": 5,
                              "children": [
                                {
                                  "id": "123-5",
                                  "name": "1、2、3…",
                                  "level": 5,
                                  "children": [],
                                  "unitGroup": true,
                                  "dataMaintain": false
                                }
                              ],
                              "dataMaintain": false
                            }
                          ],
                          "dataMaintain": false
                        },
                        {
                          "id": "平台排水沟-5",
                          "name": "平台排水沟",
                          "level": 5,
                          "children": [
                            {
                              "id": "编号位置-5",
                              "name": "编号/位置",
                              "level": 5,
                              "children": [
                                {
                                  "id": "123-5",
                                  "name": "1、2、3…",
                                  "level": 5,
                                  "children": [],
                                  "unitGroup": true,
                                  "dataMaintain": false
                                }
                              ],
                              "dataMaintain": false
                            }
                          ],
                          "dataMaintain": false
                        }
                      ],
                      "dataMaintain": false
                    }
                  ],
                  "dataMaintain": false
                },
                {
                  "id": "坡顶区域-2",
                  "name": "坡顶区域",
                  "level": 2,
                  "children": [
                    {
                      "id": "④截水设施-3",
                      "name": "④截水设施",
                      "level": 3,
                      "children": [
                        {
                          "id": "坡顶截水沟（天沟）-5",
                          "name": "坡顶截水沟（天沟）",
                          "level": 5,
                          "children": [
                            {
                              "id": "编号位置-5",
                              "name": "编号/位置",
                              "level": 5,
                              "children": [
                                {
                                  "id": "123-5",
                                  "name": "1、2、3…",
                                  "level": 5,
                                  "children": [],
                                  "unitGroup": true,
                                  "dataMaintain": false
                                }
                              ],
                              "dataMaintain": false
                            }
                          ],
                          "dataMaintain": false
                        }
                      ],
                      "dataMaintain": false
                    },
                    {
                      "id": "⑤坡顶检查与监测-3",
                      "name": "⑤坡顶检查与监测",
                      "level": 3,
                      "children": [
                        {
                          "id": "边坡位移监测桩-5",
                          "name": "边坡位移监测桩",
                          "level": 5,
                          "children": [
                            {
                              "id": "编号位置-5",
                              "name": "编号/位置",
                              "level": 5,
                              "children": [
                                {
                                  "id": "123-5",
                                  "name": "1、2、3…",
                                  "level": 5,
                                  "children": [],
                                  "unitGroup": true,
                                  "dataMaintain": false
                                }
                              ],
                              "dataMaintain": false
                            }
                          ],
                          "dataMaintain": false
                        },
                        {
                          "id": "边坡标识牌-5",
                          "name": "边坡标识牌",
                          "level": 5,
                          "children": [
                            {
                              "id": "编号位置-5",
                              "name": "编号/位置",
                              "level": 5,
                              "children": [
                                {
                                  "id": "123-5",
                                  "name": "1、2、3…",
                                  "level": 5,
                                  "children": [],
                                  "unitGroup": true,
                                  "dataMaintain": false
                                }
                              ],
                              "dataMaintain": false
                            }
                          ],
                          "dataMaintain": false
                        }
                      ],
                      "dataMaintain": false
                    }
                  ],
                  "dataMaintain": false
                },
                {
                  "id": "坡脚区域-2",
                  "name": "坡脚区域",
                  "level": 2,
                  "children": [
                    {
                      "id": "⑥支挡结构-3",
                      "name": "⑥支挡结构",
                      "level": 3,
                      "children": [
                        {
                          "id": "挡土墙-5",
                          "name": "挡土墙",
                          "level": 5,
                          "children": [
                            {
                              "id": "编号位置-5",
                              "name": "编号/位置",
                              "level": 5,
                              "children": [
                                {
                                  "id": "123-5",
                                  "name": "1、2、3…",
                                  "level": 5,
                                  "children": [],
                                  "unitGroup": true,
                                  "dataMaintain": false
                                }
                              ],
                              "dataMaintain": false
                            }
                          ],
                          "dataMaintain": false
                        },
                        {
                          "id": "护脚墙-5",
                          "name": "护脚墙",
                          "level": 5,
                          "children": [
                            {
                              "id": "编号位置-5",
                              "name": "编号/位置",
                              "level": 5,
                              "children": [
                                {
                                  "id": "123-5",
                                  "name": "1、2、3…",
                                  "level": 5,
                                  "children": [],
                                  "unitGroup": true,
                                  "dataMaintain": false
                                }
                              ],
                              "dataMaintain": false
                            }
                          ],
                          "dataMaintain": false
                        }
                      ],
                      "dataMaintain": false
                    }
                  ],
                  "dataMaintain": false
                }
              ],
              "dataMaintain": false
            }
          ],
          "dataMaintain": false
        }
      ],
      "sourceFile": "2_02_边坡构件分解表.xlsx",
      "assetType": "slope",
      "encodingRule": {
        "entity": {
          "label": "边坡编码",
          "pattern": "管养单位标准编码（系统唯一ID）",
          "patternDesc": "2_01边坡主表：根据管养单位标准编码进行",
          "example": "892373949097181184"
        },
        "component": {
          "label": "边坡构件编号",
          "pattern": "[边坡编码]/[资产大类]/[子类]/[部位]/[编号]",
          "source": "2_02边坡构件分解表 L1-L5",
          "example": "{边坡编码}/坡面/①坡面防护/护面墙/001"
        }
      }
    },
    {
      "id": "tpl-ts",
      "name": "交安设施",
      "category": "交安设施",
      "saved": true,
      "savedAt": "2026-06-04",
      "schemaNote": "L1编码→L2名称→L3设施大类→编号/可选细化构件",
      "tree": [
        {
          "id": "root-ts",
          "name": "交安设施",
          "level": 1,
          "children": [
            {
              "id": "l2-ts",
              "name": "构件分级（L1-L3+细化）",
              "level": 2,
              "children": [
                {
                  "id": "ts-交通标志",
                  "name": "交通标志",
                  "level": 3,
                  "defectIds": [
                    "d3",
                    "d7"
                  ],
                  "children": [
                    {
                      "id": "编号位置（按块或起止桩号）-4",
                      "name": "编号/位置（按块或起止桩号）",
                      "level": 4,
                      "children": [
                        {
                          "id": "立柱-4",
                          "name": "立柱",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        },
                        {
                          "id": "法兰盘-4",
                          "name": "法兰盘",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        },
                        {
                          "id": "基础-4",
                          "name": "基础",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        },
                        {
                          "id": "反光膜-4",
                          "name": "反光膜",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        },
                        {
                          "id": "版面-4",
                          "name": "版面",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        }
                      ],
                      "dataMaintain": false
                    }
                  ],
                  "dataMaintain": false
                },
                {
                  "id": "ts-波形梁护栏",
                  "name": "波形梁护栏",
                  "level": 3,
                  "defectIds": [],
                  "children": [
                    {
                      "id": "编号位置（按块或起止桩号）-4",
                      "name": "编号/位置（按块或起止桩号）",
                      "level": 4,
                      "children": [
                        {
                          "id": "波形梁板-4",
                          "name": "波形梁板",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        },
                        {
                          "id": "立柱-4",
                          "name": "立柱",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        },
                        {
                          "id": "防阻块-4",
                          "name": "防阻块",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        },
                        {
                          "id": "端头-4",
                          "name": "端头",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        }
                      ],
                      "dataMaintain": false
                    }
                  ],
                  "dataMaintain": false
                },
                {
                  "id": "ts-桥梁护栏",
                  "name": "桥梁护栏",
                  "level": 3,
                  "defectIds": [],
                  "children": [
                    {
                      "id": "编号位置（按块或起止桩号）-4",
                      "name": "编号/位置（按块或起止桩号）",
                      "level": 4,
                      "children": [
                        {
                          "id": "金属梁柱式护栏-4",
                          "name": "金属梁柱式护栏",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        },
                        {
                          "id": "混凝土护栏-4",
                          "name": "混凝土护栏",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        },
                        {
                          "id": "过渡段-4",
                          "name": "过渡段",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        }
                      ],
                      "dataMaintain": false
                    }
                  ],
                  "dataMaintain": false
                },
                {
                  "id": "ts-防眩设施",
                  "name": "防眩设施",
                  "level": 3,
                  "defectIds": [],
                  "children": [
                    {
                      "id": "编号位置（按块或起止桩号）-4",
                      "name": "编号/位置（按块或起止桩号）",
                      "level": 4,
                      "children": [
                        {
                          "id": "防眩板叶片-4",
                          "name": "防眩板叶片",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        },
                        {
                          "id": "连接件-4",
                          "name": "连接件",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        },
                        {
                          "id": "立柱-4",
                          "name": "立柱",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        }
                      ],
                      "dataMaintain": false
                    }
                  ],
                  "dataMaintain": false
                },
                {
                  "id": "ts-隔离栅和桥梁护网",
                  "name": "隔离栅和桥梁护网",
                  "level": 3,
                  "defectIds": [],
                  "children": [
                    {
                      "id": "编号位置（按块或起止桩号）-4",
                      "name": "编号/位置（按块或起止桩号）",
                      "level": 4,
                      "children": [
                        {
                          "id": "焊接网片-4",
                          "name": "焊接网片",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        },
                        {
                          "id": "编织网片-4",
                          "name": "编织网片",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        },
                        {
                          "id": "刺钢丝网-4",
                          "name": "刺钢丝网",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        }
                      ],
                      "dataMaintain": false
                    }
                  ],
                  "dataMaintain": false
                },
                {
                  "id": "ts-混凝土护栏",
                  "name": "混凝土护栏",
                  "level": 3,
                  "defectIds": [],
                  "children": [
                    {
                      "id": "编号位置（按块或起止桩号）-4",
                      "name": "编号/位置（按块或起止桩号）",
                      "level": 4,
                      "children": [
                        {
                          "id": "护栏块体-4",
                          "name": "护栏块体",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        },
                        {
                          "id": "钢筋骨架-4",
                          "name": "钢筋骨架",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        },
                        {
                          "id": "基础-4",
                          "name": "基础",
                          "level": 4,
                          "children": [],
                          "dataMaintain": true
                        }
                      ],
                      "dataMaintain": false
                    }
                  ],
                  "dataMaintain": false
                },
                {
                  "id": "ts-交通标线",
                  "name": "交通标线",
                  "level": 3,
                  "defectIds": [],
                  "children": [
                    {
                      "id": "编号位置（按块或起止桩号）-4",
                      "name": "编号/位置（按块或起止桩号）",
                      "level": 4,
                      "children": [
                        {
                          "id": "123-5",
                          "name": "1、2、3…",
                          "level": 5,
                          "children": [],
                          "unitGroup": true,
                          "dataMaintain": false
                        }
                      ],
                      "dataMaintain": false
                    }
                  ],
                  "dataMaintain": false
                },
                {
                  "id": "ts-轮廓标里程牌百米桩",
                  "name": "轮廓标、里程牌、百米桩",
                  "level": 3,
                  "defectIds": [],
                  "children": [
                    {
                      "id": "编号位置（按块或起止桩号）-4",
                      "name": "编号/位置（按块或起止桩号）",
                      "level": 4,
                      "children": [
                        {
                          "id": "123-5",
                          "name": "1、2、3…",
                          "level": 5,
                          "children": [],
                          "unitGroup": true,
                          "dataMaintain": false
                        }
                      ],
                      "dataMaintain": false
                    }
                  ],
                  "dataMaintain": false
                }
              ],
              "dataMaintain": false
            }
          ],
          "dataMaintain": false
        }
      ],
      "sourceFile": "3_02_交安设施构件分级表.xlsx",
      "assetType": "traffic-safety",
      "encodingRule": {
        "entity": {
          "label": "交安设施编码",
          "pattern": "G78-[里程桩号]-[设施大类码]-[流水号]",
          "patternDesc": "3_02：L1交安设施编码；L3设施大类；编号按块或按起始桩号",
          "example": "G78-K1852+000-JTBZ-001"
        },
        "component": {
          "label": "交安构件/单元编号",
          "pattern": "[设施编码]/[可选细化构件]/[序号]",
          "source": "3_02 可选细化构件（仅在需要时采集）",
          "example": "G78-K1852+000-JTBZ-001/立柱/01",
          "numberingBy": {
            "交通标志": "按“块”",
            "波形梁护栏": "按“起始桩号”",
            "桥梁护栏": "按“起始桩号”"
          }
        }
      }
    },
    {
      "id": "tpl-tunnel",
      "name": "隧道",
      "category": "隧道",
      "saved": true,
      "savedAt": "2026-06-04",
      "schemaNote": "隧道唯一编码→名称→路线→长度/桩号/坐标（3.隧道.xlsx）",
      "tree": [
        {
          "id": "root-tunnel",
          "name": "隧道",
          "level": 1,
          "children": [
            {
              "id": "l2-tunnel",
              "name": "结构分解（示意）",
              "level": 2,
              "children": [
                {
                  "id": "洞口工程-3",
                  "name": "洞口工程",
                  "level": 3,
                  "children": [
                    {
                      "id": "进口-4",
                      "name": "进口",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    },
                    {
                      "id": "出口-4",
                      "name": "出口",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    }
                  ],
                  "dataMaintain": false
                },
                {
                  "id": "洞身结构-3",
                  "name": "洞身结构",
                  "level": 3,
                  "children": [
                    {
                      "id": "衬砌-4",
                      "name": "衬砌",
                      "level": 4,
                      "children": [],
                      "defectIds": [
                        "d1",
                        "d6"
                      ],
                      "dataMaintain": true
                    },
                    {
                      "id": "路面-4",
                      "name": "路面",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    },
                    {
                      "id": "防水排水-4",
                      "name": "防水排水",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    }
                  ],
                  "dataMaintain": false
                },
                {
                  "id": "机电设施-3",
                  "name": "机电设施",
                  "level": 3,
                  "children": [
                    {
                      "id": "通风-4",
                      "name": "通风",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    },
                    {
                      "id": "照明-4",
                      "name": "照明",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    },
                    {
                      "id": "消防-4",
                      "name": "消防",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    }
                  ],
                  "dataMaintain": false
                }
              ],
              "dataMaintain": false
            }
          ],
          "dataMaintain": false
        }
      ],
      "sourceFile": "3.隧道.xlsx",
      "assetType": "tunnel",
      "encodingRule": {
        "entity": {
          "label": "隧道唯一编码",
          "pattern": "TUN-G78-[隧道简称]-[起终点桩号]-[上下行U|D]",
          "patternDesc": "3.隧道.xlsx：资产全局唯一标识，遵循行业编码规范",
          "example": "TUN-G78-阳宗-K1812+459-K1815+251-U"
        }
      }
    },
    {
      "id": "tpl-geo",
      "name": "地质灾害点",
      "category": "地灾",
      "saved": true,
      "savedAt": "2026-06-04",
      "schemaNote": "灾害点编码→名称→桩号范围→风险等级→监测挂接",
      "tree": [
        {
          "id": "root-geo",
          "name": "地质灾害点",
          "level": 1,
          "children": [
            {
              "id": "l2-geo",
              "name": "管理清单结构",
              "level": 2,
              "children": [
                {
                  "id": "灾害体空间-3",
                  "name": "灾害体空间",
                  "level": 3,
                  "children": [
                    {
                      "id": "坡顶线-4",
                      "name": "坡顶线",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    },
                    {
                      "id": "坡脚线-4",
                      "name": "坡脚线",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    },
                    {
                      "id": "裂缝带-4",
                      "name": "裂缝带",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    }
                  ],
                  "dataMaintain": false
                },
                {
                  "id": "监测物联网-3",
                  "name": "监测物联网",
                  "level": 3,
                  "children": [
                    {
                      "id": "GNSS-4",
                      "name": "GNSS",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    },
                    {
                      "id": "雨量计-4",
                      "name": "雨量计",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    },
                    {
                      "id": "测斜管-4",
                      "name": "测斜管",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    }
                  ],
                  "dataMaintain": false
                },
                {
                  "id": "预警与应急-3",
                  "name": "预警与应急",
                  "level": 3,
                  "children": [
                    {
                      "id": "预警阈值-4",
                      "name": "预警阈值",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    },
                    {
                      "id": "抢险记录-4",
                      "name": "抢险记录",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    }
                  ],
                  "dataMaintain": false
                }
              ],
              "dataMaintain": false
            }
          ],
          "dataMaintain": false
        }
      ],
      "sourceFile": "4.地质灾害点管理结构化数据清单.xlsx",
      "assetType": "geo-hazard",
      "encodingRule": {
        "entity": {
          "label": "灾害点编码",
          "pattern": "[路线编号]+[中心桩号]+[灾害类型HP|BT|...]",
          "patternDesc": "4.地质灾害清单：如 G50K126+350HP",
          "example": "G78K1779+300HP"
        }
      }
    },
    {
      "id": "tpl-facility",
      "name": "沿线服务设施",
      "category": "收费站/服务区",
      "saved": true,
      "savedAt": "2026-06-04",
      "schemaNote": "收费站编号或设施唯一编码→名称→类型→桩号→坐标",
      "tree": [
        {
          "id": "root-fac",
          "name": "沿线服务设施",
          "level": 1,
          "children": [
            {
              "id": "l2-fac",
              "name": "设施类型",
              "level": 2,
              "children": [
                {
                  "id": "收费站-3",
                  "name": "收费站",
                  "level": 3,
                  "children": [
                    {
                      "id": "收费广场-4",
                      "name": "收费广场",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    },
                    {
                      "id": "收费站房-4",
                      "name": "收费站房",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    },
                    {
                      "id": "车道-4",
                      "name": "车道",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    }
                  ],
                  "dataMaintain": false
                },
                {
                  "id": "服务区-3",
                  "name": "服务区",
                  "level": 3,
                  "children": [
                    {
                      "id": "主楼-4",
                      "name": "主楼",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    },
                    {
                      "id": "停车场-4",
                      "name": "停车场",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    },
                    {
                      "id": "加油站-4",
                      "name": "加油站",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    }
                  ],
                  "dataMaintain": false
                },
                {
                  "id": "停车区-3",
                  "name": "停车区",
                  "level": 3,
                  "children": [
                    {
                      "id": "停车位-4",
                      "name": "停车位",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    },
                    {
                      "id": "公厕-4",
                      "name": "公厕",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    }
                  ],
                  "dataMaintain": false
                },
                {
                  "id": "加水站-3",
                  "name": "加水站",
                  "level": 3,
                  "children": [
                    {
                      "id": "加水设施-4",
                      "name": "加水设施",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    }
                  ],
                  "dataMaintain": false
                }
              ],
              "dataMaintain": false
            }
          ],
          "dataMaintain": false
        }
      ],
      "sourceFile": "1.收费站、服务区、停车区、加水站.xlsx",
      "assetType": "facility",
      "encodingRule": {
        "entity": {
          "label": "收费站编号 / 设施唯一编码",
          "pattern": "SFZ|FAC-G78-[中心桩号]-[类型缩写]",
          "patternDesc": "收费站：收费公路信息基础数据元标准；服务区表：设施唯一编码",
          "example": "SFZ-G78-K1846+750"
        }
      }
    },
    {
      "id": "tpl-escape",
      "name": "紧急避险车道",
      "category": "紧急避险车道",
      "saved": true,
      "savedAt": "2026-06-04",
      "schemaNote": "设施唯一编码→名称→桩号→制动床/护栏/监控",
      "tree": [
        {
          "id": "root-escape",
          "name": "紧急避险车道",
          "level": 1,
          "children": [
            {
              "id": "l2-escape",
              "name": "组成部分",
              "level": 2,
              "children": [
                {
                  "id": "制动床-3",
                  "name": "制动床",
                  "level": 3,
                  "children": [
                    {
                      "id": "砾石床体-4",
                      "name": "砾石床体",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    }
                  ],
                  "dataMaintain": false
                },
                {
                  "id": "护栏系统-3",
                  "name": "护栏系统",
                  "level": 3,
                  "children": [
                    {
                      "id": "钢筋混凝土防撞护栏-4",
                      "name": "钢筋混凝土防撞护栏",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    }
                  ],
                  "dataMaintain": false
                },
                {
                  "id": "标志与监控-3",
                  "name": "标志与监控",
                  "level": 3,
                  "children": [
                    {
                      "id": "预告标志-4",
                      "name": "预告标志",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    },
                    {
                      "id": "监控摄像头-4",
                      "name": "监控摄像头",
                      "level": 4,
                      "children": [],
                      "dataMaintain": true
                    }
                  ],
                  "dataMaintain": false
                }
              ],
              "dataMaintain": false
            }
          ],
          "dataMaintain": false
        }
      ],
      "sourceFile": "2.紧急避险车道.xlsx",
      "assetType": "escape-lane",
      "encodingRule": {
        "entity": {
          "label": "设施唯一编码",
          "pattern": "KD + [系统流水]（台账原码）",
          "patternDesc": "2.紧急避险车道.xlsx",
          "example": "KD9900260"
        }
      }
    }
  ],
  "instances": [
    {
      "id": "inst-H78530126L9090",
      "templateId": "tpl-bridge",
      "name": "北大村特大桥K34+342",
      "code": "H78530126L9090",
      "centerStake": "1771092",
      "centerStakeDisplay": "K34+342",
      "length": 1199.04,
      "routeName": "汕昆高速",
      "routeCode": "G78",
      "structure": "箱形梁",
      "spanCombo": "5*31+34*30.5",
      "spanLength": 1192.0,
      "scale": "特大桥",
      "openDate": "2003-11-01",
      "keyBridge": true,
      "maintainUnit": "云南交投昆明分公司",
      "manageUnit": "云南交投集团",
      "location": "汕昆高速 G78 · 昆石高速",
      "centerCoord": "103°20＇42＂, 24°51＇44＂",
      "enabled": true,
      "modelId": "m-bd",
      "stakeStart": 1771.692,
      "stakeEnd": 1770.49296,
      "lng": "24°51＇44＂",
      "lat": "103°20＇42＂",
      "structureDefects": {
        "t-桥墩": 3,
        "t-支座": 1,
        "t-梁底（每跨）": 2
      },
      "assetType": "bridge",
      "unitDefects": {
        "seq-桥墩-L-u1": [
          {
            "recordId": "r-bd-1",
            "defectId": "d1",
            "name": "裂缝",
            "code": "CRK",
            "level": 2,
            "status": "已审",
            "size": "长0.45m 宽0.15mm",
            "confirmedAt": "2026-03-15",
            "stake": "K34+342.1",
            "source": "台账登记"
          }
        ],
        "seq-桥墩-L-u2": [
          {
            "recordId": "r-bd-2",
            "defectId": "d3",
            "name": "剥落",
            "code": "SPL",
            "level": 2,
            "status": "已审",
            "size": "面积0.03㎡",
            "confirmedAt": "2026-04-10",
            "stake": "K34+345.6",
            "source": "台账登记"
          }
        ],
        "seq-桥墩-L-u3": [],
        "seq-支座-u1": [
          {
            "recordId": "r-bd-3",
            "defectId": "d5",
            "name": "支座脱空",
            "code": "BRG",
            "level": 3,
            "status": "已审",
            "size": ""
          }
        ],
        "seq-梁底（每跨）-u1": [
          {
            "recordId": "r-bd-4",
            "defectId": "d1",
            "name": "裂缝",
            "code": "CRK",
            "level": 2,
            "status": "已审",
            "size": "长1.2m"
          }
        ],
        "seq-梁底（每跨）-u2": [
          {
            "recordId": "r-bd-5",
            "defectId": "d2",
            "name": "露筋",
            "code": "EXP",
            "level": 3,
            "status": "已审",
            "size": ""
          }
        ]
      },
      "unitCounts": {},
      "unitData": {
        "seq-桥墩-L-u1": {
          "positionDesc": "左幅 1#墩",
          "stakeDisplay": "K34+342.1",
          "maintStatus": "正常",
          "remark": ""
        },
        "seq-桥墩-L-u2": {
          "positionDesc": "左幅 2#墩",
          "stakeDisplay": "K34+345.6",
          "maintStatus": "待检",
          "remark": "外观巡检"
        }
      },
      "sceneId": "sc-kunshi-bd-001",
      "waypointBindings": [
        {
          "id": "WP-03",
          "name": "左幅1#墩迎水面",
          "routeName": "昆石下行·桥梁巡检R1",
          "unitIds": [
            "seq-桥墩-L-u1"
          ]
        },
        {
          "id": "WP-04",
          "name": "左幅2#墩迎水面",
          "routeName": "昆石下行·桥梁巡检R1",
          "unitIds": [
            "seq-桥墩-L-u2"
          ]
        },
        {
          "id": "WP-12",
          "name": "梁底全景扫视",
          "routeName": "昆石下行·桥梁巡检R1",
          "unitIds": [
            "seq-桥墩-L-u1",
            "seq-梁底（每跨）-u1"
          ]
        }
      ],
      "unitWorkOrders": {
        "seq-桥墩-L-u1": [
          {
            "id": "WO-2026-0316-001",
            "title": "1#墩裂缝复核与维修",
            "status": "进行中",
            "createdAt": "2026-03-16",
            "linkedDefectName": "裂缝",
            "assignee": "养护一队",
            "stake": "K34+342.1"
          }
        ],
        "seq-桥墩-L-u2": [
          {
            "id": "WO-2026-0411-002",
            "title": "2#墩剥落处理",
            "status": "待派单",
            "createdAt": "2026-04-11",
            "linkedDefectName": "剥落",
            "assignee": "—",
            "stake": "K34+345.6"
          }
        ]
      },
      "miniProgramVerifiedUnits": [
        "seq-桥墩-L-u1"
      ],
      "miniProgramVerifications": {
        "seq-桥墩-L-u1": {
          "verifiedAt": "2026-05-18",
          "verifiedBy": "张三",
          "method": "扫码核验",
          "note": "墩身铭牌与台账一致"
        }
      },
      "unitFlightArchives": {
        "seq-桥墩-L-u1": [
          {
            "archiveId": "arc-20260315",
            "flightId": "FLT-20260315",
            "flightDate": "2026-03-15",
            "missionLabel": "架次-01",
            "waypointId": "WP-03",
            "waypointName": "左幅1#墩迎水面",
            "stakeAtEvent": "K34+342.1",
            "events": [
              {
                "eventId": "EV-101",
                "name": "裂缝",
                "auditStatus": "已审",
                "abnormal": true,
                "level": 2,
                "size": "长0.45m 宽0.15mm",
                "confirmedAt": "2026-03-15 14:32",
                "stakeAtEvent": "K34+342.1",
                "linkedDefectRecordId": "r-bd-1",
                "photos": [
                  { "label": "巡检正射", "caption": "2026-03-15 左幅1#墩" },
                  { "label": "裂缝近景", "caption": "可见光 · 长0.45m" },
                  { "label": "AI标注", "caption": "识别框 #EV-101" }
                ]
              }
            ]
          },
          {
            "archiveId": "arc-20260520",
            "flightId": "FLT-20260520",
            "flightDate": "2026-05-20",
            "missionLabel": "架次-02",
            "waypointId": "WP-03",
            "waypointName": "左幅1#墩迎水面",
            "stakeAtEvent": "K34+342.2",
            "events": [
              {
                "eventId": "EV-201",
                "name": "渗水",
                "auditStatus": "已审",
                "abnormal": true,
                "level": 2,
                "size": "面积约 0.02㎡",
                "confirmedAt": "2026-05-20 10:15",
                "stakeAtEvent": "K34+342.2",
                "linkedDefectRecordId": null,
                "photos": [
                  { "label": "巡检正射", "caption": "2026-05-20 架次-02" },
                  { "label": "渗水近景", "caption": "迎水面湿痕" }
                ]
              }
            ]
          }
        ],
        "seq-桥墩-L-u2": [
          {
            "archiveId": "arc-20260410",
            "flightId": "FLT-20260410",
            "flightDate": "2026-04-10",
            "missionLabel": "架次-01",
            "waypointId": "WP-04",
            "waypointName": "左幅2#墩迎水面",
            "stakeAtEvent": "K34+345.6",
            "events": [
              {
                "eventId": "EV-102",
                "name": "剥落",
                "auditStatus": "已审",
                "abnormal": true,
                "level": 2,
                "size": "面积0.03㎡",
                "confirmedAt": "2026-04-10 09:40",
                "stakeAtEvent": "K34+345.6",
                "linkedDefectRecordId": "r-bd-2",
                "photos": [
                  { "label": "巡检抓拍", "caption": "左幅2#墩迎水面" },
                  { "label": "剥落局部", "caption": "面积0.03㎡" }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "id": "inst-G78530126L7591",
      "templateId": "tpl-bridge",
      "name": "北大村特大桥K34+342",
      "code": "G78530126L7591",
      "centerStake": "1771097",
      "centerStakeDisplay": "K34+342",
      "length": 1200.04,
      "routeName": "汕昆高速",
      "routeCode": "G78",
      "structure": "箱形梁",
      "spanCombo": "5*31+34*30.5",
      "spanLength": 1192.0,
      "scale": "特大桥",
      "openDate": "2003-11-01",
      "keyBridge": true,
      "maintainUnit": "云南交投昆明分公司",
      "manageUnit": "云南交投集团",
      "location": "汕昆高速 G78 · 昆石高速",
      "centerCoord": "103°21＇19＂, 24°52＇00＂",
      "enabled": true,
      "modelId": "",
      "stakeStart": 1770.49796,
      "stakeEnd": 1771.698,
      "lng": "24°52＇00＂",
      "lat": "103°21＇19＂",
      "structureDefects": {},
      "assetType": "bridge",
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-H78530126L0060",
      "templateId": "tpl-bridge",
      "name": "昆石-K73+625半截河立交大桥（下行）",
      "code": "H78530126L0060",
      "centerStake": "1778536",
      "centerStakeDisplay": "K73+625半截河立交大桥（下行）",
      "length": 374.38,
      "routeName": "汕昆高速",
      "routeCode": "G78",
      "structure": "T梁",
      "spanCombo": "12*30",
      "spanLength": 360.0,
      "scale": "大桥",
      "openDate": "2003-11-01",
      "keyBridge": true,
      "maintainUnit": "云南交投昆明分公司",
      "manageUnit": "云南交投集团",
      "location": "汕昆高速 G78 · 昆石高速",
      "centerCoord": "103°17＇26＂, 24°51＇51＂",
      "enabled": true,
      "modelId": "",
      "stakeStart": 1778.7273,
      "stakeEnd": 1778.35292,
      "lng": "24°51＇51＂",
      "lat": "103°17＇26＂",
      "structureDefects": {},
      "assetType": "bridge",
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-G78530125L0271",
      "templateId": "tpl-bridge",
      "name": "昆石-K57.642南盘江桥",
      "code": "G78530125L0271",
      "centerStake": "1795298",
      "centerStakeDisplay": "K57.642南盘江桥",
      "length": 477.61,
      "routeName": "汕昆高速",
      "routeCode": "G78",
      "structure": "空心板梁",
      "spanCombo": "12*30+1*31+2*30+1*20.55",
      "spanLength": 471.55,
      "scale": "大桥",
      "openDate": "2003-11-01",
      "keyBridge": true,
      "maintainUnit": "云南交投昆明分公司",
      "manageUnit": "云南交投集团",
      "location": "汕昆高速 G78 · 昆石高速",
      "centerCoord": "103°10＇32＂, 24°55＇01＂",
      "enabled": true,
      "modelId": "",
      "stakeStart": 1795.05897,
      "stakeEnd": 1795.53658,
      "lng": "24°55＇01＂",
      "lat": "103°10＇32＂",
      "structureDefects": {},
      "assetType": "bridge",
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-H78530125L0350",
      "templateId": "tpl-bridge",
      "name": "昆石-K57.642南盘江桥",
      "code": "H78530125L0350",
      "centerStake": "1795302",
      "centerStakeDisplay": "K57.642南盘江桥",
      "length": 477.61,
      "routeName": "汕昆高速",
      "routeCode": "G78",
      "structure": "空心板梁",
      "spanCombo": "6*30+1*29.55+6*29+1*30+2*29",
      "spanLength": 471.55,
      "scale": "大桥",
      "openDate": "2003-11-01",
      "keyBridge": true,
      "maintainUnit": "云南交投昆明分公司",
      "manageUnit": "云南交投集团",
      "location": "汕昆高速 G78 · 昆石高速",
      "centerCoord": "103°10＇16＂, 24°55＇07＂",
      "enabled": true,
      "modelId": "",
      "stakeStart": 1795.54103,
      "stakeEnd": 1795.06342,
      "lng": "24°55＇07＂",
      "lat": "103°10＇16＂",
      "structureDefects": {},
      "assetType": "bridge",
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-G78530126L7431",
      "templateId": "tpl-bridge",
      "name": "K24+320跨线桥",
      "code": "G78530126L7431",
      "centerStake": "1761078",
      "centerStakeDisplay": "K24+320跨线桥",
      "length": 63.1,
      "routeName": "汕昆高速",
      "routeCode": "G78",
      "structure": "连续箱梁",
      "spanCombo": "1*13+1*31+1*13",
      "spanLength": 57.0,
      "scale": "中桥",
      "openDate": "2003-11-01",
      "keyBridge": false,
      "maintainUnit": "云南交投昆明分公司",
      "manageUnit": "云南交投集团",
      "location": "汕昆高速 G78 · 昆石高速",
      "centerCoord": "103°26＇20＂, 24°53＇19＂",
      "enabled": true,
      "modelId": "",
      "stakeStart": null,
      "stakeEnd": null,
      "lng": "24°53＇19＂",
      "lat": "103°26＇20＂",
      "structureDefects": {},
      "assetType": "bridge",
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-H78530126L0110",
      "templateId": "tpl-bridge",
      "name": "昆石-K71+450官山水库大桥（下行）",
      "code": "H78530126L0110",
      "centerStake": "1781581",
      "centerStakeDisplay": "K71+450官山水库大桥（下行）",
      "length": 462.5,
      "routeName": "汕昆高速",
      "routeCode": "G78",
      "structure": "T梁",
      "spanCombo": "15*29.5",
      "spanLength": 442.5,
      "scale": "大桥",
      "openDate": "2003-11-01",
      "keyBridge": true,
      "maintainUnit": "云南交投昆明分公司",
      "manageUnit": "云南交投集团",
      "location": "汕昆高速 G78 · 昆石高速",
      "centerCoord": "103°15＇55＂, 24°52＇44＂",
      "enabled": true,
      "modelId": "",
      "stakeStart": 1781.81,
      "stakeEnd": 1781.3475,
      "lng": "24°52＇44＂",
      "lat": "103°15＇55＂",
      "structureDefects": {},
      "assetType": "bridge",
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-G78530125L0201",
      "templateId": "tpl-bridge",
      "name": "昆石-K61.560木喳箐1号大桥上行",
      "code": "G78530125L0201",
      "centerStake": "1791253",
      "centerStakeDisplay": "K61.560木喳箐1号大桥上行",
      "length": 655.5,
      "routeName": "汕昆高速",
      "routeCode": "G78",
      "structure": "T梁",
      "spanCombo": "22*29",
      "spanLength": 638.0,
      "scale": "大桥",
      "openDate": "2003-11-01",
      "keyBridge": true,
      "maintainUnit": "云南交投昆明分公司",
      "manageUnit": "云南交投集团",
      "location": "汕昆高速 G78 · 昆石高速",
      "centerCoord": "103°12＇50＂, 24°54＇47＂",
      "enabled": true,
      "modelId": "",
      "stakeStart": 1790.9265,
      "stakeEnd": 1791.582,
      "lng": "24°54＇47＂",
      "lat": "103°12＇50＂",
      "structureDefects": {},
      "assetType": "bridge",
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-slope-949097181184",
      "templateId": "tpl-slope",
      "assetType": "slope",
      "name": "1833+462～+756",
      "code": "892373949097181184",
      "routeCode": "G78",
      "stakeStart": "1833+756",
      "stakeEnd": "1833+462",
      "direction": "左侧",
      "slopeType": "路堑边坡",
      "location": "汕昆高速 G78 · 昆石高速",
      "centerStake": "1833+756",
      "centerStakeDisplay": "1833+462～+756",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-slope-466892795904",
      "templateId": "tpl-slope",
      "assetType": "slope",
      "name": "1830+595～+873",
      "code": "894149466892795904",
      "routeCode": "G78",
      "stakeStart": "1830+873",
      "stakeEnd": "1830+595",
      "direction": "左侧",
      "slopeType": "路堑边坡",
      "location": "汕昆高速 G78 · 昆石高速",
      "centerStake": "1830+873",
      "centerStakeDisplay": "1830+595～+873",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-slope-730802597888",
      "templateId": "tpl-slope",
      "assetType": "slope",
      "name": "1828+818～1829+070",
      "code": "894149730802597888",
      "routeCode": "G78",
      "stakeStart": "1829+070",
      "stakeEnd": "1828+818",
      "direction": "左侧",
      "slopeType": "路堑边坡",
      "location": "汕昆高速 G78 · 昆石高速",
      "centerStake": "1829+070",
      "centerStakeDisplay": "1828+818～1829+070",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-slope-888755892224",
      "templateId": "tpl-slope",
      "assetType": "slope",
      "name": "1827+476～+590",
      "code": "894149888755892224",
      "routeCode": "G78",
      "stakeStart": "1827+590",
      "stakeEnd": "1827+476",
      "direction": "左侧",
      "slopeType": "路堑边坡",
      "location": "汕昆高速 G78 · 昆石高速",
      "centerStake": "1827+590",
      "centerStakeDisplay": "1827+476～+590",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-slope-846074695680",
      "templateId": "tpl-slope",
      "assetType": "slope",
      "name": "1825+780～1826+533",
      "code": "892379846074695680",
      "routeCode": "G78",
      "stakeStart": "1826+533",
      "stakeEnd": "1825+780",
      "direction": "左侧",
      "slopeType": "路堑边坡",
      "location": "汕昆高速 G78 · 昆石高速",
      "centerStake": "1826+533",
      "centerStakeDisplay": "1825+780～1826+533",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-slope-535543414784",
      "templateId": "tpl-slope",
      "assetType": "slope",
      "name": "1825+542～+704",
      "code": "892416535543414784",
      "routeCode": "G78",
      "stakeStart": "1825+704",
      "stakeEnd": "1825+542",
      "direction": "左侧",
      "slopeType": "路堑边坡",
      "location": "汕昆高速 G78 · 昆石高速",
      "centerStake": "1825+704",
      "centerStakeDisplay": "1825+542～+704",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-ts-sign-2",
      "templateId": "tpl-ts",
      "assetType": "traffic-safety",
      "name": "1851850追尾危险保持车距",
      "code": "G78-K1851+850-JTBZ-002",
      "tsCategory": "交通标志",
      "tsSubType": "指示标志",
      "stakeStart": "1851850",
      "stakeEnd": "1851850",
      "position": "下行线",
      "location": "汕昆高速 · 交安",
      "centerStake": "1851850",
      "centerStakeDisplay": "1851850",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-ts-sign-3",
      "templateId": "tpl-ts",
      "assetType": "traffic-safety",
      "name": "1851550车距确认前方200M",
      "code": "G78-K1851+550-JTBZ-003",
      "tsCategory": "交通标志",
      "tsSubType": "指示标志",
      "stakeStart": "1851550",
      "stakeEnd": "1851550",
      "position": "下行线",
      "location": "汕昆高速 · 交安",
      "centerStake": "1851550",
      "centerStakeDisplay": "1851550",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-ts-sign-4",
      "templateId": "tpl-ts",
      "assetType": "traffic-safety",
      "name": "1851380车距确认0M",
      "code": "G78-K1851+380-JTBZ-004",
      "tsCategory": "交通标志",
      "tsSubType": "指示标志",
      "stakeStart": "1851380",
      "stakeEnd": "1851380",
      "position": "下行线",
      "location": "汕昆高速 · 交安",
      "centerStake": "1851380",
      "centerStakeDisplay": "1851380",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-ts-sign-5",
      "templateId": "tpl-ts",
      "assetType": "traffic-safety",
      "name": "1851330车距确认50M",
      "code": "G78-K1851+330-JTBZ-005",
      "tsCategory": "交通标志",
      "tsSubType": "指示标志",
      "stakeStart": "1851330",
      "stakeEnd": "1851330",
      "position": "下行线",
      "location": "汕昆高速 · 交安",
      "centerStake": "1851330",
      "centerStakeDisplay": "1851330",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-ts-guard-2",
      "templateId": "tpl-ts",
      "assetType": "traffic-safety",
      "name": "波形护栏 K1850+800-K1850+710",
      "code": "G78-K1850+800-K1850+710-BXHB",
      "tsCategory": "波形梁护栏",
      "stakeStart": "K1850+800",
      "stakeEnd": "K1850+710",
      "position": "下行线",
      "guardLevel": "A",
      "length": "90.0",
      "location": "汕昆高速 · 交安",
      "centerStakeDisplay": "K1850+800-K1850+710",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-ts-guard-3",
      "templateId": "tpl-ts",
      "assetType": "traffic-safety",
      "name": "波形护栏 K1850+440-K1850+350",
      "code": "G78-K1850+440-K1850+350-BXHB",
      "tsCategory": "波形梁护栏",
      "stakeStart": "K1850+440",
      "stakeEnd": "K1850+350",
      "position": "下行线",
      "guardLevel": "A",
      "length": "90.0",
      "location": "汕昆高速 · 交安",
      "centerStakeDisplay": "K1850+440-K1850+350",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-ts-guard-4",
      "templateId": "tpl-ts",
      "assetType": "traffic-safety",
      "name": "波形护栏 K1850+140-K1849+570",
      "code": "G78-K1850+140-K1849+570-BXHB",
      "tsCategory": "波形梁护栏",
      "stakeStart": "K1850+140",
      "stakeEnd": "K1849+570",
      "position": "下行线",
      "guardLevel": "A",
      "length": "570.0",
      "location": "汕昆高速 · 交安",
      "centerStakeDisplay": "K1850+140-K1849+570",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-tunnel-阳宗隧道-下行线",
      "templateId": "tpl-tunnel",
      "assetType": "tunnel",
      "name": "阳宗隧道（下行线）",
      "code": "TUN-G78-阳宗-K1815+262-K1812+535-D",
      "routeName": "G78 昆石高速",
      "length": 2727.0,
      "tunnelClass": "长隧道（1000-3000m）",
      "stakeRange": "K1815+262-K1812+535",
      "centerCoord": "103.0402, 24.871619",
      "maintainUnit": "下行线",
      "location": "汕昆高速 G78",
      "centerStakeDisplay": "K1815+262-K1812+535",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-tunnel-小团山隧道-上行线",
      "templateId": "tpl-tunnel",
      "assetType": "tunnel",
      "name": "小团山隧道（上行线）",
      "code": "TUN-G78-小团山-K1834+232-K1835+351.84-U",
      "routeName": "G78 昆石高速",
      "length": 1119.84,
      "tunnelClass": "长隧道（1000-3000m）",
      "stakeRange": "K1834+232-K1835+351.84",
      "centerCoord": "102.882555, 24.938687",
      "maintainUnit": "上行线",
      "location": "汕昆高速 G78",
      "centerStakeDisplay": "K1834+232-K1835+351.84",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-tunnel-小团山隧道-下行线",
      "templateId": "tpl-tunnel",
      "assetType": "tunnel",
      "name": "小团山隧道（下行线）",
      "code": "TUN-G78-小团山-K1835+347-K1834+163-D",
      "routeName": "G78 昆石高速",
      "length": 1184.0,
      "tunnelClass": "长隧道（1000-3000m）",
      "stakeRange": "K1835+347-K1834+163",
      "centerCoord": "102.882555, 24.938687",
      "maintainUnit": "下行线",
      "location": "汕昆高速 G78",
      "centerStakeDisplay": "K1835+347-K1834+163",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-tunnel-清水沟1号隧道-上行线",
      "templateId": "tpl-tunnel",
      "assetType": "tunnel",
      "name": "清水沟1号隧道（上行线）",
      "code": "TUN-G78-清水沟1-K1806+883-K1807+266-U",
      "routeName": "G78 昆石高速",
      "length": 383.0,
      "tunnelClass": "短隧道（≤500m）",
      "stakeRange": "K1806+883-K1807+266",
      "centerCoord": "103.078441, 24.89814",
      "maintainUnit": "上行线",
      "location": "汕昆高速 G78",
      "centerStakeDisplay": "K1806+883-K1807+266",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-tunnel-清水沟1号隧道-下行线",
      "templateId": "tpl-tunnel",
      "assetType": "tunnel",
      "name": "清水沟1号隧道（下行线）",
      "code": "TUN-G78-清水沟1-K1807+250-K1806+867-D",
      "routeName": "G78 昆石高速",
      "length": 383.0,
      "tunnelClass": "短隧道（≤500m）",
      "stakeRange": "K1807+250-K1806+867",
      "centerCoord": "103.078441, 24.89814",
      "maintainUnit": "下行线",
      "location": "汕昆高速 G78",
      "centerStakeDisplay": "K1807+250-K1806+867",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-tunnel-清水沟2号隧道-上行线",
      "templateId": "tpl-tunnel",
      "assetType": "tunnel",
      "name": "清水沟2号隧道（上行线）",
      "code": "TUN-G78-清水沟2-K1805+277-K1805+542-U",
      "routeName": "G78 昆石高速",
      "length": 265.0,
      "tunnelClass": "短隧道（≤500m）",
      "stakeRange": "K1805+277-K1805+542",
      "centerCoord": "103.089542, 24.91065",
      "maintainUnit": "上行线",
      "location": "汕昆高速 G78",
      "centerStakeDisplay": "K1805+277-K1805+542",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-tunnel-清水沟2号隧道-下行线",
      "templateId": "tpl-tunnel",
      "assetType": "tunnel",
      "name": "清水沟2号隧道（下行线）",
      "code": "TUN-G78-清水沟2-K1805+536-K1805+271-D",
      "routeName": "G78 昆石高速",
      "length": 265.0,
      "tunnelClass": "短隧道（≤500m）",
      "stakeRange": "K1805+536-K1805+271",
      "centerCoord": "103.089542, 24.91065",
      "maintainUnit": "下行线",
      "location": "汕昆高速 G78",
      "centerStakeDisplay": "K1805+536-K1805+271",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
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
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "note": "主表暂无数据行，按4_地质灾害点管理结构化数据清单预置字段",
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-toll-王家营收费站",
      "templateId": "tpl-facility",
      "assetType": "facility",
      "facilityType": "收费站",
      "name": "王家营收费站",
      "code": "SFZ-G78-K1837+850",
      "tollType": "匝道收费站",
      "stakeStart": "K1837+850",
      "centerStakeDisplay": "K1837+850",
      "centerCoord": "102.863753, 24.955133",
      "status": "正常运营",
      "lanes": "7",
      "location": "云南省昆明市呈贡区洛羊街道石龙路辅路",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-toll-松茂收费站",
      "templateId": "tpl-facility",
      "assetType": "facility",
      "facilityType": "收费站",
      "name": "松茂收费站",
      "code": "SFZ-G78-K1830+300",
      "tollType": "匝道收费站",
      "stakeStart": "K1830+300",
      "centerStakeDisplay": "K1830+300",
      "centerCoord": "102.912589, 24.910224",
      "status": "正常运营",
      "lanes": "4",
      "location": "云南省昆明市呈贡区七甸街道",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-toll-马郎收费站",
      "templateId": "tpl-facility",
      "assetType": "facility",
      "facilityType": "收费站",
      "name": "马郎收费站",
      "code": "SFZ-G78-K1827+300",
      "tollType": "匝道收费站",
      "stakeStart": "K1827+300",
      "centerStakeDisplay": "K1827+300",
      "centerCoord": "102.943045, 24.901165",
      "status": "正常运营",
      "lanes": "12",
      "location": "云南省昆明市呈贡区七甸街道",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-toll-阳宗收费站",
      "templateId": "tpl-facility",
      "assetType": "facility",
      "facilityType": "收费站",
      "name": "阳宗收费站",
      "code": "SFZ-G78-K1818+810",
      "tollType": "匝道收费站",
      "stakeStart": "K1818+810",
      "centerStakeDisplay": "K1818+810",
      "centerCoord": "102.988604, 24.849456",
      "status": "正常运营",
      "lanes": "4",
      "location": "云南省玉溪市澄江市阳宗镇澄阳路",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-toll-宜良收费站",
      "templateId": "tpl-facility",
      "assetType": "facility",
      "facilityType": "收费站",
      "name": "宜良收费站",
      "code": "SFZ-G78-K1798+150",
      "tollType": "匝道收费站",
      "stakeStart": "K1798+150",
      "centerStakeDisplay": "K1798+150",
      "centerCoord": "103.156966, 24.92958",
      "status": "正常运营",
      "lanes": "23",
      "location": "云南省昆明市宜良县匡远街道",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-toll-草甸收费站",
      "templateId": "tpl-facility",
      "assetType": "facility",
      "facilityType": "收费站",
      "name": "草甸收费站",
      "code": "SFZ-G78-K1811+400",
      "tollType": "匝道收费站",
      "stakeStart": "K1811+400",
      "centerStakeDisplay": "K1811+400",
      "centerCoord": "103.053165, 24.874019",
      "status": "正常运营",
      "lanes": "8",
      "location": "云南省昆明市宜良县汤池街道",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-toll-半截河收费站",
      "templateId": "tpl-facility",
      "assetType": "facility",
      "facilityType": "收费站",
      "name": "半截河收费站",
      "code": "SFZ-G78-K1779+000",
      "tollType": "匝道收费站",
      "stakeStart": "K1779+000",
      "centerStakeDisplay": "K1779+000",
      "centerCoord": "103.290424, 24.85568",
      "status": "闲置",
      "lanes": "0",
      "location": "云南省昆明市石林彝族自治县鹿阜街道",
      "enabled": false,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-toll-石林收费站",
      "templateId": "tpl-facility",
      "assetType": "facility",
      "facilityType": "收费站",
      "name": "石林收费站",
      "code": "SFZ-G78-K77+100",
      "tollType": "匝道收费站",
      "stakeStart": "K77+100",
      "centerStakeDisplay": "K77+100",
      "centerCoord": "103.318348, 24.846123",
      "status": "正常运营",
      "lanes": "8",
      "location": "云南省昆明市石林彝族自治县鹿阜街道",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-fac-小团山服务区",
      "templateId": "tpl-facility",
      "assetType": "facility",
      "facilityType": "服务区",
      "name": "小团山服务区",
      "code": "FAC-G78--FWQ",
      "stakeStart": "",
      "centerStakeDisplay": "",
      "centerCoord": "",
      "direction": "",
      "maintainUnit": "云南交投昆明分公司",
      "location": "",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-fac-龙昇服务区",
      "templateId": "tpl-facility",
      "assetType": "facility",
      "facilityType": "服务区",
      "name": "龙昇服务区",
      "code": "FAC-G78-K1843+900-FWQ",
      "stakeStart": "K1843+900",
      "centerStakeDisplay": "K1843+900",
      "centerCoord": "102.817623, 24.982433",
      "direction": "双向",
      "maintainUnit": "云南交投昆明分公司",
      "location": "云南省昆明市官渡区阿拉街道",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-fac-小团山停车区",
      "templateId": "tpl-facility",
      "assetType": "facility",
      "facilityType": "停车区",
      "name": "小团山停车区",
      "code": "FAC-G78-K1834+000-TCQ",
      "stakeStart": "K1834+000",
      "centerStakeDisplay": "K1834+000",
      "centerCoord": "102.887254, 24.931544",
      "direction": "下行线",
      "maintainUnit": "云南交投昆明分公司",
      "location": "云南省昆明市呈贡区洛羊街道",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-fac-K68加水站",
      "templateId": "tpl-facility",
      "assetType": "facility",
      "facilityType": "加水站",
      "name": "K68加水站",
      "code": "FAC-G78--JSS",
      "stakeStart": "",
      "centerStakeDisplay": "",
      "centerCoord": "",
      "direction": "下行线",
      "maintainUnit": "云南交投昆明分公司",
      "location": "",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-fac-木喳箐加水站",
      "templateId": "tpl-facility",
      "assetType": "facility",
      "facilityType": "加水站",
      "name": "木喳箐加水站",
      "code": "FAC-G78-K1785+000-JSS",
      "stakeStart": "K1785+000",
      "centerStakeDisplay": "K1785+000",
      "centerCoord": "103.239806, 24.883709",
      "direction": "上行线",
      "maintainUnit": "云南交投昆明分公司",
      "location": "云南省昆明市宜良县匡远街道",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-fac-小团山停车区下行加水点",
      "templateId": "tpl-facility",
      "assetType": "facility",
      "facilityType": "加水站",
      "name": "小团山停车区下行加水点",
      "code": "FAC-G78--JSS",
      "stakeStart": "",
      "centerStakeDisplay": "",
      "centerCoord": "",
      "direction": "",
      "maintainUnit": "云南交投昆明分公司",
      "location": "",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    },
    {
      "id": "inst-escape-1",
      "templateId": "tpl-escape",
      "assetType": "escape-lane",
      "name": "nan",
      "code": "nan",
      "routeName": "nan",
      "direction": "nan",
      "stakeStart": "nan",
      "centerStakeDisplay": "nan",
      "centerCoord": "nan",
      "escapeType": "nan",
      "laneLength": "nan",
      "laneWidth": "nan",
      "maintainUnit": "nan",
      "location": "汕昆高速 G78",
      "enabled": true,
      "modelId": "",
      "structureDefects": {},
      "unitDefects": {},
      "unitCounts": {},
      "unitData": {}
    }
  ],
  "annotationMissions": [
    {
      "id": "ann-flt-20260520",
      "flightId": "FLT-20260520",
      "instanceId": "inst-H78530126L9090",
      "sceneId": "sc-kunshi-bd-001",
      "title": "北大村特大桥 · 架次-02",
      "flightDate": "2026-05-20",
      "missionLabel": "架次-02",
      "videoDurationSec": 186,
      "videoLabel": "可见光回放 · 左幅迎水面",
      "status": "pending",
      "gpsTrack": [
        { "sec": 0, "lat": 24.86211, "lng": 103.34506, "stakeKm": 1771.691 },
        { "sec": 30, "lat": 24.86215, "lng": 103.34512, "stakeKm": 1771.692 },
        { "sec": 60, "lat": 24.86218, "lng": 103.34518, "stakeKm": 1771.692 },
        { "sec": 90, "lat": 24.86222, "lng": 103.34524, "stakeKm": 1771.693 },
        { "sec": 120, "lat": 24.86228, "lng": 103.34532, "stakeKm": 1771.694 },
        { "sec": 150, "lat": 24.86234, "lng": 103.34540, "stakeKm": 1771.695 },
        { "sec": 186, "lat": 24.86240, "lng": 103.34548, "stakeKm": 1771.696 }
      ],
      "bindings": []
    },
    {
      "id": "ann-flt-20260315",
      "flightId": "FLT-20260315",
      "instanceId": "inst-H78530126L9090",
      "sceneId": "sc-kunshi-bd-001",
      "title": "北大村特大桥 · 架次-01",
      "flightDate": "2026-03-15",
      "missionLabel": "架次-01",
      "videoDurationSec": 142,
      "videoLabel": "可见光回放 · 1#墩迎水面",
      "status": "partial",
      "gpsTrack": [
        { "sec": 0, "lat": 24.86210, "lng": 103.34505, "stakeKm": 1771.691 },
        { "sec": 35, "lat": 24.86214, "lng": 103.34511, "stakeKm": 1771.692 },
        { "sec": 70, "lat": 24.86217, "lng": 103.34516, "stakeKm": 1771.692 },
        { "sec": 105, "lat": 24.86221, "lng": 103.34522, "stakeKm": 1771.693 },
        { "sec": 142, "lat": 24.86226, "lng": 103.34530, "stakeKm": 1771.694 }
      ],
      "bindings": [
        {
          "id": "bind-20260315-1",
          "atSec": 35,
          "unitId": "seq-桥墩-L-u1",
          "source": "gis-suggested",
          "confirmedBy": "李工",
          "confirmedAt": "2026-03-16 09:20"
        }
      ]
    },
    {
      "id": "ann-flt-20260410",
      "flightId": "FLT-20260410",
      "instanceId": "inst-H78530126L9090",
      "sceneId": "sc-kunshi-bd-001",
      "title": "北大村特大桥 · 架次-01",
      "flightDate": "2026-04-10",
      "missionLabel": "架次-01 · 2#墩",
      "videoDurationSec": 98,
      "videoLabel": "可见光回放 · 左幅2#墩",
      "status": "done",
      "gpsTrack": [
        { "sec": 0, "lat": 24.86230, "lng": 103.34538, "stakeKm": 1771.695 },
        { "sec": 49, "lat": 24.86233, "lng": 103.34542, "stakeKm": 1771.696 },
        { "sec": 98, "lat": 24.86236, "lng": 103.34546, "stakeKm": 1771.696 }
      ],
      "bindings": [
        {
          "id": "bind-20260410-1",
          "atSec": 49,
          "unitId": "seq-桥墩-L-u2",
          "source": "gis-suggested",
          "confirmedBy": "王标注",
          "confirmedAt": "2026-04-11 14:05"
        }
      ]
    },
    {
      "id": "ann-flt-20260528",
      "flightId": "FLT-20260528",
      "instanceId": "inst-slope-949097181184",
      "sceneId": "sc-kunshi-slope-001",
      "title": "1833+462~+756边坡 · 架次-01",
      "flightDate": "2026-05-28",
      "missionLabel": "架次-01",
      "videoDurationSec": 156,
      "videoLabel": "可见光回放 · 边坡全景",
      "status": "pending",
      "gpsTrack": [
        { "sec": 0, "lat": 24.85120, "lng": 103.33240, "stakeKm": 1833.462 },
        { "sec": 39, "lat": 24.85124, "lng": 103.33246, "stakeKm": 1833.500 },
        { "sec": 78, "lat": 24.85128, "lng": 103.33252, "stakeKm": 1833.550 },
        { "sec": 117, "lat": 24.85133, "lng": 103.33260, "stakeKm": 1833.620 },
        { "sec": 156, "lat": 24.85138, "lng": 103.33270, "stakeKm": 1833.756 }
      ],
      "bindings": []
    },
    {
      "id": "ann-flt-20260601",
      "flightId": "FLT-20260601",
      "instanceId": "inst-tunnel-阳宗隧道-下行线",
      "sceneId": "sc-kunshi-tunnel-001",
      "title": "阳宗隧道（下行） · 架次-03",
      "flightDate": "2026-06-01",
      "missionLabel": "架次-03",
      "videoDurationSec": 210,
      "videoLabel": "红外回放 · 隧道下行线",
      "status": "pending",
      "gpsTrack": [
        { "sec": 0, "lat": 24.87850, "lng": 103.36010, "stakeKm": 1800.200 },
        { "sec": 52, "lat": 24.87860, "lng": 103.36040, "stakeKm": 1800.800 },
        { "sec": 105, "lat": 24.87875, "lng": 103.36072, "stakeKm": 1801.500 },
        { "sec": 158, "lat": 24.87890, "lng": 103.36105, "stakeKm": 1802.200 },
        { "sec": 210, "lat": 24.87905, "lng": 103.36140, "stakeKm": 1802.900 }
      ],
      "bindings": []
    },
    {
      "id": "ann-flt-20260605",
      "flightId": "FLT-20260605",
      "instanceId": "inst-ts-sign-2",
      "sceneId": "sc-kunshi-ts-001",
      "title": "标志牌1851850 · 架次-01",
      "flightDate": "2026-06-05",
      "missionLabel": "架次-01",
      "videoDurationSec": 88,
      "videoLabel": "可见光回放 · 标志牌",
      "status": "pending",
      "gpsTrack": [
        { "sec": 0, "lat": 24.86110, "lng": 103.34150, "stakeKm": 1851.850 },
        { "sec": 44, "lat": 24.86112, "lng": 103.34155, "stakeKm": 1851.850 },
        { "sec": 88, "lat": 24.86114, "lng": 103.34160, "stakeKm": 1851.850 }
      ],
      "bindings": []
    },
    {
      "id": "ann-flt-20260608",
      "flightId": "FLT-20260608",
      "instanceId": "inst-ts-guard-2",
      "sceneId": "sc-kunshi-ts-002",
      "title": "波形护栏K1850+800 · 架次-02",
      "flightDate": "2026-06-08",
      "missionLabel": "架次-02",
      "videoDurationSec": 124,
      "videoLabel": "可见光回放 · 护栏段",
      "status": "pending",
      "gpsTrack": [
        { "sec": 0, "lat": 24.86080, "lng": 103.34090, "stakeKm": 1850.800 },
        { "sec": 31, "lat": 24.86078, "lng": 103.34084, "stakeKm": 1850.770 },
        { "sec": 62, "lat": 24.86075, "lng": 103.34078, "stakeKm": 1850.740 },
        { "sec": 93, "lat": 24.86072, "lng": 103.34072, "stakeKm": 1850.710 },
        { "sec": 124, "lat": 24.86070, "lng": 103.34068, "stakeKm": 1850.710 }
      ],
      "bindings": []
    }
  ],
  "aiDetections": {
    "ann-flt-20260520": [
      {
        "id": "det-20260520-001",
        "atSec": 18,
        "endSec": 23,
        "categoryLabel": "路灯",
        "categoryKey": "streetlight",
        "confidence": 0.91,
        "bbox": { "x": 38, "y": 22, "w": 16, "h": 22 },
        "suggestedUnitIds": ["seq-路灯-L-u3"],
        "suggestReason": "类型匹配 · 航线K34+300段关联 · 距GPS位置12m"
      },
      {
        "id": "det-20260520-002",
        "atSec": 45,
        "endSec": 51,
        "categoryLabel": "标志牌",
        "categoryKey": "sign",
        "confidence": 0.87,
        "bbox": { "x": 52, "y": 10, "w": 24, "h": 20 },
        "suggestedUnitIds": ["seq-标志牌-L-u1"],
        "suggestReason": "类型匹配 · GIS位置相邻 · 历史标注印证"
      },
      {
        "id": "det-20260520-003",
        "atSec": 78,
        "endSec": 84,
        "categoryLabel": "护栏",
        "categoryKey": "guardrail",
        "confidence": 0.95,
        "bbox": { "x": 8, "y": 55, "w": 70, "h": 25 },
        "suggestedUnitIds": ["seq-护栏-L-u2"],
        "suggestReason": "类型匹配 · 航线桥梁段关联 · 空间位置重合"
      },
      {
        "id": "det-20260520-004",
        "atSec": 110,
        "endSec": 116,
        "categoryLabel": "摄像头",
        "categoryKey": "camera",
        "confidence": 0.72,
        "bbox": { "x": 68, "y": 6, "w": 14, "h": 14 },
        "suggestedUnitIds": [],
        "suggestReason": ""
      },
      {
        "id": "det-20260520-005",
        "atSec": 148,
        "endSec": 153,
        "categoryLabel": "路灯",
        "categoryKey": "streetlight",
        "confidence": 0.93,
        "bbox": { "x": 32, "y": 24, "w": 15, "h": 20 },
        "suggestedUnitIds": ["seq-路灯-L-u5"],
        "suggestReason": "类型匹配 · 航线K34+500段关联 · 距GPS位置8m"
      }
    ],
    "ann-flt-20260315": [
      {
        "id": "det-20260315-001",
        "atSec": 12,
        "endSec": 18,
        "categoryLabel": "护栏",
        "categoryKey": "guardrail",
        "confidence": 0.94,
        "bbox": { "x": 5, "y": 58, "w": 72, "h": 22 },
        "suggestedUnitIds": ["seq-护栏-L-u1"],
        "suggestReason": "类型匹配 · 航线1#墩段关联 · 空间位置重合"
      },
      {
        "id": "det-20260315-002",
        "atSec": 55,
        "endSec": 61,
        "categoryLabel": "标志牌",
        "categoryKey": "sign",
        "confidence": 0.83,
        "bbox": { "x": 48, "y": 12, "w": 26, "h": 22 },
        "suggestedUnitIds": [],
        "suggestReason": ""
      },
      {
        "id": "det-20260315-003",
        "atSec": 88,
        "endSec": 94,
        "categoryLabel": "路灯",
        "categoryKey": "streetlight",
        "confidence": 0.90,
        "bbox": { "x": 35, "y": 25, "w": 14, "h": 18 },
        "suggestedUnitIds": ["seq-路灯-L-u1"],
        "suggestReason": "类型匹配 · GIS位置相邻 · 航线关联"
      },
      {
        "id": "det-20260315-004",
        "atSec": 115,
        "endSec": 120,
        "categoryLabel": "摄像头",
        "categoryKey": "camera",
        "confidence": 0.68,
        "bbox": { "x": 72, "y": 8, "w": 12, "h": 12 },
        "suggestedUnitIds": ["seq-摄像头-L-u2"],
        "suggestReason": "类型匹配 · 历史数据低置信度印证"
      }
    ],
    "ann-flt-20260410": [
      {
        "id": "det-20260410-001",
        "atSec": 20,
        "endSec": 26,
        "categoryLabel": "路灯",
        "categoryKey": "streetlight",
        "confidence": 0.89,
        "bbox": { "x": 40, "y": 20, "w": 16, "h": 21 },
        "suggestedUnitIds": ["seq-路灯-L-u4"],
        "suggestReason": "类型匹配 · 航线2#墩段关联 · 距GPS位置15m"
      },
      {
        "id": "det-20260410-002",
        "atSec": 60,
        "endSec": 66,
        "categoryLabel": "护栏",
        "categoryKey": "guardrail",
        "confidence": 0.92,
        "bbox": { "x": 6, "y": 56, "w": 68, "h": 24 },
        "suggestedUnitIds": ["seq-护栏-L-u1"],
        "suggestReason": "类型匹配 · 桥梁段关联 · 空间位置重合"
      },
      {
        "id": "det-20260410-003",
        "atSec": 82,
        "endSec": 87,
        "categoryLabel": "标志牌",
        "categoryKey": "sign",
        "confidence": 0.76,
        "bbox": { "x": 55, "y": 14, "w": 22, "h": 19 },
        "suggestedUnitIds": ["seq-标志牌-L-u2"],
        "suggestReason": "类型匹配 · GIS位置相邻"
      }
    ]
  ,
  "ann-flt-20260528": [
    {
      "id": "det-20260528-001",
      "atSec": 22,
      "endSec": 28,
      "categoryLabel": "边坡防护网",
      "categoryKey": "slope-net",
      "confidence": 0.89,
      "bbox": { "x": 15, "y": 30, "w": 55, "h": 40 },
      "suggestedUnitIds": ["seq-防护网-u1"],
      "suggestReason": "类型匹配 · 边坡段关联 · 距GPS位置15m"
    },
    {
      "id": "det-20260528-002",
      "atSec": 58,
      "endSec": 64,
      "categoryLabel": "排水沟",
      "categoryKey": "drain",
      "confidence": 0.92,
      "bbox": { "x": 20, "y": 60, "w": 45, "h": 18 },
      "suggestedUnitIds": ["seq-排水沟-u1"],
      "suggestReason": "类型匹配 · 边坡底部关联 · GIS位置匹配"
    },
    {
      "id": "det-20260528-003",
      "atSec": 98,
      "endSec": 104,
      "categoryLabel": "裂缝",
      "categoryKey": "crack",
      "confidence": 0.78,
      "bbox": { "x": 35, "y": 35, "w": 18, "h": 12 },
      "suggestedUnitIds": ["seq-坡面-u1"],
      "suggestReason": "类型匹配 · 坡面区域关联"
    },
    {
      "id": "det-20260528-004",
      "atSec": 132,
      "endSec": 138,
      "categoryLabel": "植被覆盖",
      "categoryKey": "vegetation",
      "confidence": 0.95,
      "bbox": { "x": 10, "y": 25, "w": 60, "h": 45 },
      "suggestedUnitIds": [],
      "suggestReason": ""
    }
  ],
  "ann-flt-20260601": [
    {
      "id": "det-20260601-001",
      "atSec": 25,
      "endSec": 32,
      "categoryLabel": "隧道衬砌",
      "categoryKey": "tunnel-lining",
      "confidence": 0.88,
      "bbox": { "x": 20, "y": 15, "w": 45, "h": 50 },
      "suggestedUnitIds": ["seq-衬砌-u1"],
      "suggestReason": "类型匹配 · 隧道段关联 · 距入口200m"
    },
    {
      "id": "det-20260601-002",
      "atSec": 68,
      "endSec": 74,
      "categoryLabel": "照明灯具",
      "categoryKey": "tunnel-light",
      "confidence": 0.93,
      "bbox": { "x": 40, "y": 8, "w": 18, "h": 14 },
      "suggestedUnitIds": ["seq-照明-u1"],
      "suggestReason": "类型匹配 · 隧道顶部关联 · GIS位置匹配"
    },
    {
      "id": "det-20260601-003",
      "atSec": 110,
      "endSec": 116,
      "categoryLabel": "消防设施",
      "categoryKey": "tunnel-fire",
      "confidence": 0.85,
      "bbox": { "x": 8, "y": 40, "w": 12, "h": 20 },
      "suggestedUnitIds": ["seq-消防-u1"],
      "suggestReason": "类型匹配 · 隧道侧壁关联 · 位置符合规范"
    },
    {
      "id": "det-20260601-004",
      "atSec": 155,
      "endSec": 161,
      "categoryLabel": "排水设施",
      "categoryKey": "tunnel-drain",
      "confidence": 0.79,
      "bbox": { "x": 5, "y": 65, "w": 55, "h": 15 },
      "suggestedUnitIds": ["seq-排水-u1"],
      "suggestReason": "类型匹配 · 隧道路面关联"
    },
    {
      "id": "det-20260601-005",
      "atSec": 188,
      "endSec": 194,
      "categoryLabel": "裂缝",
      "categoryKey": "crack",
      "confidence": 0.71,
      "bbox": { "x": 28, "y": 32, "w": 14, "h": 10 },
      "suggestedUnitIds": [],
      "suggestReason": ""
    }
  ],
  "ann-flt-20260605": [
    {
      "id": "det-20260605-001",
      "atSec": 18,
      "endSec": 24,
      "categoryLabel": "标志牌",
      "categoryKey": "sign",
      "confidence": 0.94,
      "bbox": { "x": 25, "y": 10, "w": 30, "h": 22 },
      "suggestedUnitIds": ["seq-标志牌-u1"],
      "suggestReason": "类型匹配 · 桩号匹配 · GIS位置精确匹配"
    },
    {
      "id": "det-20260605-002",
      "atSec": 50,
      "endSec": 56,
      "categoryLabel": "立柱",
      "categoryKey": "post",
      "confidence": 0.82,
      "bbox": { "x": 42, "y": 20, "w": 8, "h": 35 },
      "suggestedUnitIds": ["seq-立柱-u1"],
      "suggestReason": "类型匹配 · 标志牌附属结构"
    },
    {
      "id": "det-20260605-003",
      "atSec": 72,
      "endSec": 78,
      "categoryLabel": "反光膜",
      "categoryKey": "reflective",
      "confidence": 0.68,
      "bbox": { "x": 30, "y": 14, "w": 20, "h": 14 },
      "suggestedUnitIds": [],
      "suggestReason": ""
    }
  ],
  "ann-flt-20260608": [
    {
      "id": "det-20260608-001",
      "atSec": 15,
      "endSec": 21,
      "categoryLabel": "波形护栏",
      "categoryKey": "guardrail",
      "confidence": 0.96,
      "bbox": { "x": 5, "y": 45, "w": 72, "h": 30 },
      "suggestedUnitIds": ["seq-护栏-u1"],
      "suggestReason": "类型匹配 · 路侧关联 · GPS位置精确匹配"
    },
    {
      "id": "det-20260608-002",
      "atSec": 48,
      "endSec": 54,
      "categoryLabel": "护栏立柱",
      "categoryKey": "post",
      "confidence": 0.84,
      "bbox": { "x": 15, "y": 48, "w": 10, "h": 25 },
      "suggestedUnitIds": ["seq-立柱-u1"],
      "suggestReason": "类型匹配 · 护栏附属结构"
    },
    {
      "id": "det-20260608-003",
      "atSec": 80,
      "endSec": 86,
      "categoryLabel": "防阻块",
      "categoryKey": "block",
      "confidence": 0.75,
      "bbox": { "x": 20, "y": 50, "w": 8, "h": 12 },
      "suggestedUnitIds": ["seq-防阻块-u1"],
      "suggestReason": "类型匹配 · 护栏连接件"
    },
    {
      "id": "det-20260608-004",
      "atSec": 105,
      "endSec": 110,
      "categoryLabel": "护栏变形",
      "categoryKey": "deform",
      "confidence": 0.88,
      "bbox": { "x": 30, "y": 46, "w": 25, "h": 28 },
      "suggestedUnitIds": ["seq-护栏-u3"],
      "suggestReason": "异常检测 · 几何变形特征 · 历史无此记录"
    }
  ]
  },
  "totalCounts": {
    "bridge": 243,
    "slope": 62,
    "trafficSign": 637,
    "tunnel": 5,
    "toll": 8,
    "facility": 14
  },
  "featuredBridgeCode": "H78530126L9090",
  "encodingCatalog": {
    "bridge": {
      "entity": {
        "label": "桥梁编码（台账/JTG）",
        "pattern": "[上下行H|G] + 7853 + [路段码4位] + L + [流水号4位]",
        "patternDesc": "1_01桥梁主表 · 功能清单：桥梁编码为全局唯一键（UK）",
        "example": "H78530126L9090",
        "segments": [
          {
            "key": "direction",
            "label": "上下行",
            "options": [
              {
                "value": "H",
                "label": "H · 下行"
              },
              {
                "value": "G",
                "label": "G · 上行"
              }
            ]
          },
          {
            "key": "routeSeg",
            "label": "路线段",
            "fixed": "7853",
            "desc": "G78 汕昆·昆石"
          },
          {
            "key": "section",
            "label": "路段码(4位)",
            "placeholder": "0126",
            "default": "0126"
          },
          {
            "key": "laneMark",
            "label": "幅别标记",
            "fixed": "L",
            "desc": "台账编码固定位"
          },
          {
            "key": "serial",
            "label": "流水号(4位)",
            "placeholder": "9090",
            "default": "9090"
          }
        ]
      },
      "component": {
        "label": "构件实例编码",
        "pattern": "[桥型码]-[部位码]-[方向]-[流水号]",
        "source": "数据资产配置功能清单 · 编码规则引擎",
        "example": "LS-QD-L-0001",
        "segmentDefs": [
          {
            "key": "bridgeType",
            "label": "桥型码",
            "options": [
              {
                "value": "LS",
                "label": "梁式桥(LS)"
              },
              {
                "value": "GQ",
                "label": "拱式桥(GQ)"
              },
              {
                "value": "XLQ",
                "label": "斜拉桥(XLQ)"
              },
              {
                "value": "XSQ",
                "label": "悬索桥(XSQ)"
              }
            ]
          },
          {
            "key": "part",
            "label": "部位码",
            "options": [
              {
                "value": "QD",
                "label": "桥墩→QD"
              },
              {
                "value": "GL",
                "label": "盖梁→GL"
              },
              {
                "value": "QT",
                "label": "桥台→QT"
              },
              {
                "value": "CT",
                "label": "墩台基础（承台）→CT"
              },
              {
                "value": "ZP",
                "label": "锥坡→ZP"
              },
              {
                "value": "LD",
                "label": "梁底（每跨）→LD"
              },
              {
                "value": "HGB",
                "label": "横隔板→HGB"
              },
              {
                "value": "QMD",
                "label": "桥面底面→QMD"
              },
              {
                "value": "ZZ",
                "label": "支座→ZZ"
              },
              {
                "value": "SSF",
                "label": "伸缩缝→SSF"
              },
              {
                "value": "QMPZ",
                "label": "桥面铺装→QMPZ"
              },
              {
                "value": "PSK",
                "label": "排水口→PSK"
              },
              {
                "value": "HL",
                "label": "护栏→HL"
              },
              {
                "value": "LDEN",
                "label": "路灯→LDEN"
              },
              {
                "value": "BZP",
                "label": "标志牌→BZP"
              }
            ]
          },
          {
            "key": "span",
            "label": "方向/幅别",
            "options": [
              {
                "value": "L",
                "label": "L · 左幅"
              },
              {
                "value": "R",
                "label": "R · 右幅"
              },
              {
                "value": "S",
                "label": "S · 单幅"
              }
            ]
          },
          {
            "key": "serial",
            "label": "流水号",
            "placeholder": "0001",
            "default": "0001"
          }
        ],
        "partCodes": {
          "桥墩": "QD",
          "盖梁": "GL",
          "桥台": "QT",
          "墩台基础（承台）": "CT",
          "锥坡": "ZP",
          "梁底（每跨）": "LD",
          "横隔板": "HGB",
          "桥面底面": "QMD",
          "支座": "ZZ",
          "伸缩缝": "SSF",
          "桥面铺装": "QMPZ",
          "排水口": "PSK",
          "护栏": "HL",
          "路灯": "LDEN",
          "标志牌": "BZP"
        },
        "spanFromTree": {
          "左幅（L）": "L",
          "右幅（R）": "R",
          "全幅（F）": "F"
        }
      }
    },
    "slope": {
      "entity": {
        "label": "边坡编码",
        "pattern": "管养单位标准编码（系统唯一ID）",
        "patternDesc": "2_01边坡主表：根据管养单位标准编码进行",
        "example": "892373949097181184"
      },
      "component": {
        "label": "边坡构件编号",
        "pattern": "[边坡编码]/[资产大类]/[子类]/[部位]/[编号]",
        "source": "2_02边坡构件分解表 L1-L5",
        "example": "{边坡编码}/坡面/①坡面防护/护面墙/001"
      }
    },
    "traffic-safety": {
      "entity": {
        "label": "交安设施编码",
        "pattern": "G78-[里程桩号]-[设施大类码]-[流水号]",
        "patternDesc": "3_02：L1交安设施编码；L3设施大类；编号按块或按起始桩号",
        "example": "G78-K1852+000-JTBZ-001"
      },
      "component": {
        "label": "交安构件/单元编号",
        "pattern": "[设施编码]/[可选细化构件]/[序号]",
        "source": "3_02 可选细化构件（仅在需要时采集）",
        "example": "G78-K1852+000-JTBZ-001/立柱/01",
        "numberingBy": {
          "交通标志": "按“块”",
          "波形梁护栏": "按“起始桩号”",
          "桥梁护栏": "按“起始桩号”"
        }
      }
    },
    "tunnel": {
      "entity": {
        "label": "隧道唯一编码",
        "pattern": "TUN-G78-[隧道简称]-[起终点桩号]-[上下行U|D]",
        "patternDesc": "3.隧道.xlsx：资产全局唯一标识，遵循行业编码规范",
        "example": "TUN-G78-阳宗-K1812+459-K1815+251-U"
      }
    },
    "geo-hazard": {
      "entity": {
        "label": "灾害点编码",
        "pattern": "[路线编号]+[中心桩号]+[灾害类型HP|BT|...]",
        "patternDesc": "4.地质灾害清单：如 G50K126+350HP",
        "example": "G78K1779+300HP"
      }
    },
    "facility": {
      "entity": {
        "label": "收费站编号 / 设施唯一编码",
        "pattern": "SFZ|FAC-G78-[中心桩号]-[类型缩写]",
        "patternDesc": "收费站：收费公路信息基础数据元标准；服务区表：设施唯一编码",
        "example": "SFZ-G78-K1846+750"
      }
    },
    "escape-lane": {
      "entity": {
        "label": "设施唯一编码",
        "pattern": "KD + [系统流水]（台账原码）",
        "patternDesc": "2.紧急避险车道.xlsx",
        "example": "KD9900260"
      }
    }
  }
};
