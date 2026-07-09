/** 昆石高速初始化数据 */
const KUNSHI_DATA = {
  "source": "昆石高速素材",
  "templateMeta": {
    "id": "tpl-bridge",
    "name": "桥梁",
    "category": "桥梁",
    "saved": true,
    "savedAt": "2026-06-04",
    "schemaNote": "L1编码→L2名称→L3类型→L4结构→L5幅别→L6大类→L7构件→L8编号"
  },
  "tree": [
    {
      "id": "root",
      "name": "桥梁",
      "level": 1,
      "children": [
        {
          "id": "l2-schema",
          "name": "构件分解（L1-L8）",
          "level": 2,
          "children": [
            {
              "id": "l3-beam",
              "name": "梁式桥",
              "level": 3,
              "children": [
                {
                  "id": "l4-beam-struct",
                  "name": "结构形式",
                  "level": 4,
                  "children": [
                    {
                      "id": "s-kxb",
                      "name": "空心板梁",
                      "level": 4,
                      "children": []
                    },
                    {
                      "id": "s-tbeam",
                      "name": "T梁",
                      "level": 4,
                      "children": []
                    },
                    {
                      "id": "s-xlb",
                      "name": "连续箱梁/箱形梁",
                      "level": 4,
                      "children": []
                    }
                  ]
                },
                {
                  "id": "l5-span",
                  "name": "幅别",
                  "level": 5,
                  "children": [
                    {
                      "id": "l5-L",
                      "name": "左幅（L）",
                      "level": 5,
                      "children": [
                        {
                          "id": "cat-下部结构l5-L",
                          "name": "下部结构",
                          "level": 6,
                          "defectIds": [],
                          "children": [
                            {
                              "id": "t-桥墩l5-L",
                              "name": "桥墩",
                              "level": 7,
                              "defectIds": [
                                "d1",
                                "d3",
                                "d6"
                              ],
                              "children": [
                                {
                                  "id": "p-桥墩l5-L",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-桥墩l5-L",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-盖梁l5-L",
                              "name": "盖梁",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-盖梁l5-L",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-盖梁l5-L",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-桥台l5-L",
                              "name": "桥台",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-桥台l5-L",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-桥台l5-L",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-墩台基础（承台）l5-L",
                              "name": "墩台基础（承台）",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-墩台基础（承台）l5-L",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-墩台基础（承台）l5-L",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-锥坡l5-L",
                              "name": "锥坡",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-锥坡l5-L",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-锥坡l5-L",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "cat-上部结构l5-L",
                          "name": "上部结构",
                          "level": 6,
                          "defectIds": [],
                          "children": [
                            {
                              "id": "t-梁底（每跨）l5-L",
                              "name": "梁底（每跨）",
                              "level": 7,
                              "defectIds": [
                                "d1",
                                "d2",
                                "d3"
                              ],
                              "children": [
                                {
                                  "id": "p-梁底（每跨）l5-L",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-梁底（每跨）l5-L",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-横隔板l5-L",
                              "name": "横隔板",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-横隔板l5-L",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-横隔板l5-L",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-桥面底面l5-L",
                              "name": "桥面底面",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-桥面底面l5-L",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-桥面底面l5-L",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "cat-支座l5-L",
                          "name": "支座",
                          "level": 6,
                          "defectIds": [],
                          "children": [
                            {
                              "id": "t-支座l5-L",
                              "name": "支座",
                              "level": 7,
                              "defectIds": [
                                "d5",
                                "d8"
                              ],
                              "children": [
                                {
                                  "id": "p-支座l5-L",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-支座l5-L",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "cat-桥面系l5-L",
                          "name": "桥面系",
                          "level": 6,
                          "defectIds": [],
                          "children": [
                            {
                              "id": "t-伸缩缝l5-L",
                              "name": "伸缩缝",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-伸缩缝l5-L",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-伸缩缝l5-L",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-桥面铺装l5-L",
                              "name": "桥面铺装",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-桥面铺装l5-L",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-桥面铺装l5-L",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-排水口l5-L",
                              "name": "排水口",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-排水口l5-L",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-排水口l5-L",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "cat-附属设施l5-L",
                          "name": "附属设施",
                          "level": 6,
                          "defectIds": [],
                          "children": [
                            {
                              "id": "t-护栏l5-L",
                              "name": "护栏",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-护栏l5-L",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-护栏l5-L",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-路灯l5-L",
                              "name": "路灯",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-路灯l5-L",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-路灯l5-L",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-标志牌l5-L",
                              "name": "标志牌",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-标志牌l5-L",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-标志牌l5-L",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "id": "l5-R",
                      "name": "右幅（R）",
                      "level": 5,
                      "children": [
                        {
                          "id": "cat-下部结构l5-R",
                          "name": "下部结构",
                          "level": 6,
                          "defectIds": [],
                          "children": [
                            {
                              "id": "t-桥墩l5-R",
                              "name": "桥墩",
                              "level": 7,
                              "defectIds": [
                                "d1",
                                "d3",
                                "d6"
                              ],
                              "children": [
                                {
                                  "id": "p-桥墩l5-R",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-桥墩l5-R",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-盖梁l5-R",
                              "name": "盖梁",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-盖梁l5-R",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-盖梁l5-R",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-桥台l5-R",
                              "name": "桥台",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-桥台l5-R",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-桥台l5-R",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-墩台基础（承台）l5-R",
                              "name": "墩台基础（承台）",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-墩台基础（承台）l5-R",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-墩台基础（承台）l5-R",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-锥坡l5-R",
                              "name": "锥坡",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-锥坡l5-R",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-锥坡l5-R",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "cat-上部结构l5-R",
                          "name": "上部结构",
                          "level": 6,
                          "defectIds": [],
                          "children": [
                            {
                              "id": "t-梁底（每跨）l5-R",
                              "name": "梁底（每跨）",
                              "level": 7,
                              "defectIds": [
                                "d1",
                                "d2",
                                "d3"
                              ],
                              "children": [
                                {
                                  "id": "p-梁底（每跨）l5-R",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-梁底（每跨）l5-R",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-横隔板l5-R",
                              "name": "横隔板",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-横隔板l5-R",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-横隔板l5-R",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-桥面底面l5-R",
                              "name": "桥面底面",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-桥面底面l5-R",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-桥面底面l5-R",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "cat-支座l5-R",
                          "name": "支座",
                          "level": 6,
                          "defectIds": [],
                          "children": [
                            {
                              "id": "t-支座l5-R",
                              "name": "支座",
                              "level": 7,
                              "defectIds": [
                                "d5",
                                "d8"
                              ],
                              "children": [
                                {
                                  "id": "p-支座l5-R",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-支座l5-R",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "cat-桥面系l5-R",
                          "name": "桥面系",
                          "level": 6,
                          "defectIds": [],
                          "children": [
                            {
                              "id": "t-伸缩缝l5-R",
                              "name": "伸缩缝",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-伸缩缝l5-R",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-伸缩缝l5-R",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-桥面铺装l5-R",
                              "name": "桥面铺装",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-桥面铺装l5-R",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-桥面铺装l5-R",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-排水口l5-R",
                              "name": "排水口",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-排水口l5-R",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-排水口l5-R",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "cat-附属设施l5-R",
                          "name": "附属设施",
                          "level": 6,
                          "defectIds": [],
                          "children": [
                            {
                              "id": "t-护栏l5-R",
                              "name": "护栏",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-护栏l5-R",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-护栏l5-R",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-路灯l5-R",
                              "name": "路灯",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-路灯l5-R",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-路灯l5-R",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-标志牌l5-R",
                              "name": "标志牌",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-标志牌l5-R",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-标志牌l5-R",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "id": "l5-S",
                      "name": "单幅（S）",
                      "level": 5,
                      "children": [
                        {
                          "id": "cat-下部结构l5-S",
                          "name": "下部结构",
                          "level": 6,
                          "defectIds": [],
                          "children": [
                            {
                              "id": "t-桥墩l5-S",
                              "name": "桥墩",
                              "level": 7,
                              "defectIds": [
                                "d1",
                                "d3",
                                "d6"
                              ],
                              "children": [
                                {
                                  "id": "p-桥墩l5-S",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-桥墩l5-S",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-盖梁l5-S",
                              "name": "盖梁",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-盖梁l5-S",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-盖梁l5-S",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-桥台l5-S",
                              "name": "桥台",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-桥台l5-S",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-桥台l5-S",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-墩台基础（承台）l5-S",
                              "name": "墩台基础（承台）",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-墩台基础（承台）l5-S",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-墩台基础（承台）l5-S",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-锥坡l5-S",
                              "name": "锥坡",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-锥坡l5-S",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-锥坡l5-S",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "cat-上部结构l5-S",
                          "name": "上部结构",
                          "level": 6,
                          "defectIds": [],
                          "children": [
                            {
                              "id": "t-梁底（每跨）l5-S",
                              "name": "梁底（每跨）",
                              "level": 7,
                              "defectIds": [
                                "d1",
                                "d2",
                                "d3"
                              ],
                              "children": [
                                {
                                  "id": "p-梁底（每跨）l5-S",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-梁底（每跨）l5-S",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-横隔板l5-S",
                              "name": "横隔板",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-横隔板l5-S",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-横隔板l5-S",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-桥面底面l5-S",
                              "name": "桥面底面",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-桥面底面l5-S",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-桥面底面l5-S",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "cat-支座l5-S",
                          "name": "支座",
                          "level": 6,
                          "defectIds": [],
                          "children": [
                            {
                              "id": "t-支座l5-S",
                              "name": "支座",
                              "level": 7,
                              "defectIds": [
                                "d5",
                                "d8"
                              ],
                              "children": [
                                {
                                  "id": "p-支座l5-S",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-支座l5-S",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "cat-桥面系l5-S",
                          "name": "桥面系",
                          "level": 6,
                          "defectIds": [],
                          "children": [
                            {
                              "id": "t-伸缩缝l5-S",
                              "name": "伸缩缝",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-伸缩缝l5-S",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-伸缩缝l5-S",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-桥面铺装l5-S",
                              "name": "桥面铺装",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-桥面铺装l5-S",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-桥面铺装l5-S",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-排水口l5-S",
                              "name": "排水口",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-排水口l5-S",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-排水口l5-S",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "id": "cat-附属设施l5-S",
                          "name": "附属设施",
                          "level": 6,
                          "defectIds": [],
                          "children": [
                            {
                              "id": "t-护栏l5-S",
                              "name": "护栏",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-护栏l5-S",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-护栏l5-S",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-路灯l5-S",
                              "name": "路灯",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-路灯l5-S",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-路灯l5-S",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "id": "t-标志牌l5-S",
                              "name": "标志牌",
                              "level": 7,
                              "defectIds": [],
                              "children": [
                                {
                                  "id": "p-标志牌l5-S",
                                  "name": "编号/位置",
                                  "level": 8,
                                  "children": [
                                    {
                                      "id": "seq-标志牌l5-S",
                                      "name": "1、2、3…",
                                      "level": 8,
                                      "children": []
                                    }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "id": "l3-arch",
              "name": "拱桥",
              "level": 3,
              "children": []
            },
            {
              "id": "l3-cable",
              "name": "斜拉桥",
              "level": 3,
              "children": []
            },
            {
              "id": "l3-susp",
              "name": "悬索桥",
              "level": 3,
              "children": []
            },
            {
              "id": "l3-rigid",
              "name": "刚构桥",
              "level": 3,
              "children": []
            }
          ]
        }
      ]
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
      "t-桥墩l5-L": 3,
      "t-支座l5-L": 1,
      "t-梁底（每跨）l5-L": 2
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
    "structureDefects": {}
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
    "structureDefects": {}
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
    "structureDefects": {}
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
    "structureDefects": {}
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
    "structureDefects": {}
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
    "structureDefects": {}
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
    "structureDefects": {}
  }
],
  "featuredBridgeCode": "H78530126L9090",
  "routeLabel": "汕昆高速 G78 · 昆石高速",
  "totalBridgeCount": 243
};
