(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-index-index"], {
    "0020": function (l, e, a) {
        "use strict";
        var u = {"w-picker": a("ec4e").default, "uni-calendar": a("2fe8").default}, b = function () {
            var l = this, e = l.$createElement, a = l._self._c || e;
            return a("v-uni-view", {staticClass: "receive"}, [a("v-uni-view", {staticClass: "tishi"}, [l._v("*填写装修信息，方便您和设计师更加高效的沟通")]), a("v-uni-view", {staticClass: "content-box"}, [a("v-uni-view", {staticClass: "content"}, [a("v-uni-view", [l._v("姓名")]), a("v-uni-view", {staticClass: "input"}, [a("v-uni-view", [a("v-uni-input", {
                attrs: {
                    type: "text",
                    "placeholder-style": "color:#ccc",
                    value: "",
                    placeholder: "请填写"
                }, on: {
                    blur: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.inputBlur5.apply(void 0, arguments)
                    }
                }, model: {
                    value: l.param.name, callback: function (e) {
                        l.$set(l.param, "name", e)
                    }, expression: "param.name"
                }
            })], 1)], 1)], 1), a("v-uni-view", {staticClass: "content"}, [a("v-uni-view", [l._v("房屋所在城市")]), a("v-uni-view", {
                staticClass: "input",
                on: {
                    click: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.chooseLocation.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-view", [a("v-uni-input", {
                attrs: {
                    type: "text",
                    "placeholder-style": "color:#ccc",
                    value: "",
                    placeholder: "请选择",
                    disabled: "true"
                }, model: {
                    value: l.param.province_city, callback: function (e) {
                        l.$set(l.param, "province_city", e)
                    }, expression: "param.province_city"
                }
            })], 1), a("v-uni-view", {staticClass: "fanhui"})], 1)], 1), a("v-uni-view", {staticClass: "content"}, [a("v-uni-view", [l._v("户型")]), a("v-uni-view", {staticClass: "input"}, [a("v-uni-picker", {
                attrs: {
                    value: l.index,
                    range: l.array
                }, on: {
                    change: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.bindPickerChange.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-input", {
                attrs: {
                    type: "text",
                    "placeholder-style": "color:#ccc",
                    value: "",
                    placeholder: "请选择",
                    disabled: "true"
                }, model: {
                    value: l.param.type, callback: function (e) {
                        l.$set(l.param, "type", e)
                    }, expression: "param.type"
                }
            })], 1), a("v-uni-picker", {
                attrs: {value: l.index, range: l.array}, on: {
                    change: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.bindPickerChange.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-view", {staticClass: "fanhui"})], 1)], 1)], 1), a("v-uni-view", {staticClass: "content"}, [a("v-uni-view", [l._v("建筑面积")]), a("v-uni-view", {staticClass: "input"}, [a("v-uni-view", [a("v-uni-input", {
                attrs: {
                    type: "number",
                    "placeholder-style": "color:#ccc",
                    value: "",
                    placeholder: "请填写"
                }, on: {
                    blur: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.inputBlur1.apply(void 0, arguments)
                    }
                }, model: {
                    value: l.param.area, callback: function (e) {
                        l.$set(l.param, "area", e)
                    }, expression: "param.area"
                }
            })], 1), a("v-uni-view", {staticClass: "zi"}, [l._v("m²")])], 1)], 1), a("v-uni-view", {staticClass: "content"}, [a("v-uni-view", [l._v("房屋类型")]), a("v-uni-view", {staticClass: "input"}, [a("v-uni-picker", {
                attrs: {
                    value: l.index1,
                    range: l.array1
                }, on: {
                    change: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.bindPickerChange1.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-input", {
                attrs: {
                    type: "text",
                    "placeholder-style": "color:#ccc",
                    value: "",
                    placeholder: "请选择",
                    disabled: "true"
                }, model: {
                    value: l.param.model, callback: function (e) {
                        l.$set(l.param, "model", e)
                    }, expression: "param.model"
                }
            })], 1), a("v-uni-picker", {
                attrs: {value: l.index1, range: l.array1}, on: {
                    change: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.bindPickerChange1.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-view", {staticClass: "fanhui"})], 1)], 1)], 1)], 1), a("v-uni-view", {staticClass: "zs"}), a("v-uni-view", {staticClass: "content-box"}, [a("v-uni-view", {staticClass: "content"}, [a("v-uni-view", [l._v("装修预算")]), a("v-uni-view", {staticClass: "input"}, [a("v-uni-view", [a("v-uni-input", {
                attrs: {
                    type: "number",
                    "placeholder-style": "color:#ccc",
                    value: "",
                    placeholder: "请填写"
                }, on: {
                    blur: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.inputBlur3.apply(void 0, arguments)
                    }
                }, model: {
                    value: l.param.budget, callback: function (e) {
                        l.$set(l.param, "budget", e)
                    }, expression: "param.budget"
                }
            })], 1), a("v-uni-view", {staticClass: "zi"}, [l._v("万元(含设计费)")])], 1)], 1), a("v-uni-view", {staticClass: "content"}, [a("v-uni-view", [l._v("何时开始装修")]), a("v-uni-view", {
                staticClass: "input",
                on: {
                    click: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.openCalendar.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-view", [a("v-uni-input", {
                attrs: {
                    type: "text",
                    "placeholder-style": "color:#ccc",
                    value: "",
                    placeholder: "请选择",
                    disabled: "true"
                }, model: {
                    value: l.param.startingtime, callback: function (e) {
                        l.$set(l.param, "startingtime", e)
                    }, expression: "param.startingtime"
                }
            })], 1), a("v-uni-view", {staticClass: "fanhui"})], 1)], 1), a("v-uni-view", {staticClass: "content"}, [a("v-uni-view", [l._v("希望何时入住")]), a("v-uni-view", {
                staticClass: "input",
                on: {
                    click: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.rzopenCalendar.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-view", [a("v-uni-input", {
                attrs: {
                    type: "text",
                    "placeholder-style": "color:#ccc",
                    value: "",
                    placeholder: "请选择",
                    disabled: "true"
                }, model: {
                    value: l.param.checktime, callback: function (e) {
                        l.$set(l.param, "checktime", e)
                    }, expression: "param.checktime"
                }
            })], 1), a("v-uni-view", {staticClass: "fanhui"})], 1)], 1), a("v-uni-view", {staticClass: "content"}, [a("v-uni-view", [l._v("联系手机号码")]), a("v-uni-view", {staticClass: "input"}, [a("v-uni-view", [a("v-uni-input", {
                attrs: {
                    type: "number",
                    "placeholder-style": "color:#ccc",
                    value: "",
                    placeholder: "请填写"
                }, on: {
                    blur: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.inputBlur2.apply(void 0, arguments)
                    }
                }, model: {
                    value: l.param.mobile, callback: function (e) {
                        l.$set(l.param, "mobile", e)
                    }, expression: "param.mobile"
                }
            })], 1)], 1)], 1)], 1), a("v-uni-view", {staticClass: "zs"}), a("v-uni-view", {staticClass: "beizhu"}, [a("v-uni-view", {staticClass: "input-title"}, [l._v("备注 (选填)")]), a("v-uni-view", {staticStyle: {height: "250rpx"}}, [a("v-uni-textarea", {
                staticStyle: {
                    width: "100%",
                    height: "100%"
                },
                attrs: {
                    type: "text",
                    "placeholder-style": "color:#999;font-size:28rpx;",
                    value: "",
                    placeholder: "写下想跟设计师交代的内容，如风格喜好，家庭成员的需求和禁忌，对家的憧憬..."
                },
                on: {
                    blur: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.inputBlur4.apply(void 0, arguments)
                    }
                },
                model: {
                    value: l.param.comments, callback: function (e) {
                        l.$set(l.param, "comments", e)
                    }, expression: "param.comments"
                }
            })], 1)], 1), a("w-picker", {
                ref: "region",
                attrs: {
                    mode: "region",
                    defaultVal: ["浙江省", "杭州市", "江干区"],
                    areaCode: ["33", "3301", "330108"],
                    hideArea: !1,
                    themeColor: "#6B0415"
                },
                on: {
                    confirm: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.onConfirm.apply(void 0, arguments)
                    }, cancel: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.onCancel.apply(void 0, arguments)
                    }
                }
            }), a("uni-calendar", {
                ref: "calendar",
                attrs: {insert: !1, disableBefore: !0, range: !1, date: l.date},
                on: {
                    confirm: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.confirm.apply(void 0, arguments)
                    }
                }
            }), a("uni-calendar", {
                ref: "rzcalendar",
                attrs: {insert: !1, disableBefore: !0, range: !1, date: l.kstime},
                on: {
                    confirm: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.rzconfirm.apply(void 0, arguments)
                    }
                }
            }), a("v-uni-view", {
                staticClass: "xyb", on: {
                    click: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.submit.apply(void 0, arguments)
                    }
                }
            }, [l._v("提交预约申请")])], 1)
        }, v = [];
        a.d(e, "b", (function () {
            return b
        })), a.d(e, "c", (function () {
            return v
        })), a.d(e, "a", (function () {
            return u
        }))
    }, "01db": function (l, e, a) {
        "use strict";
        var u = a("35b3"), b = a.n(u);
        b.a
    }, "035c": function (l, e, a) {
        var u = a("24fb");
        e = u(!1), e.push([l.i, '@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.w-picker[data-v-1211c663]{position:relative;z-index:888}.w-picker .mask[data-v-1211c663]{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,.6);visibility:hidden;opacity:0;-webkit-transition:all .3s ease;transition:all .3s ease}.w-picker .mask.show[data-v-1211c663]{visibility:visible;opacity:1}.w-picker .w-picker-cnt[data-v-1211c663]{position:fixed;bottom:0;left:0;width:100%;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translateY(100%);transform:translateY(100%);z-index:3000}.w-picker .w-picker-cnt.show[data-v-1211c663]{-webkit-transform:translateY(0);transform:translateY(0)}.w-picker .w-picker-hd[data-v-1211c663]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?30?%;height:%?88?%;background-color:#fff;position:relative;text-align:center;font-size:%?32?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.w-picker .w-picker-hd .w-picker-btn[data-v-1211c663]{font-size:%?30?%}.w-picker .w-picker-hd[data-v-1211c663]:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.w-picker .w-picker-item[data-v-1211c663]{text-align:center;width:100%;height:%?88?%;line-height:%?88?%;text-overflow:ellipsis;white-space:nowrap;font-size:%?30?%}.w-picker .w-picker-view[data-v-1211c663]{width:100%;height:%?476?%;overflow:hidden;background-color:#fff;z-index:666}.w-picker uni-picker-view[data-v-1211c663]{height:100%}', ""]), l.exports = e
    }, "0625": function (l, e, a) {
        var u = a("f3db");
        "string" === typeof u && (u = [[l.i, u, ""]]), u.locals && (l.exports = u.locals);
        var b = a("4f06").default;
        b("ab8d39f6", u, !0, {sourceMap: !1, shadowMode: !1})
    }, "0c23": function (l, e, a) {
        "use strict";
        var u = a("4ea4");
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, a("ac6a");
        var b = u(a("768b"));
        a("c5f6"), a("28a5"), a("a481");
        var v = u(a("2ca7")), t = u(a("d668")), n = {
            name: "UniCalendar",
            components: {uniCalendarItem: t.default},
            props: {
                date: {type: String, default: ""},
                selected: {
                    type: Array, default: function () {
                        return []
                    }
                },
                lunar: {type: Boolean, default: !1},
                buxian: {type: Boolean, default: !1},
                disableBefore: {type: Boolean, default: !1},
                startDate: {type: String, default: ""},
                endDate: {type: String, default: ""},
                range: {type: Boolean, default: !1},
                insert: {type: Boolean, default: !1}
            },
            data: function () {
                return {
                    maskShow: !1,
                    aniMaskShow: !1,
                    dateShow: !1,
                    canlender: {weeks: []},
                    buxianrq: "",
                    multiple: 0,
                    multipleDates: {begin: "", end: "", data: []},
                    isLunar: !1
                }
            },
            watch: {
                date: function () {
                    this.init()
                }, selected: function () {
                    this.init()
                }, lunar: function (l) {
                    this.isLunar = l, this.init()
                }, disableBefore: function () {
                    this.init()
                }, startDate: function () {
                    this.init()
                }, endDate: function () {
                    this.init()
                }
            },
            created: function () {
                this.init()
            },
            methods: {
                init: function () {
                    this.getMonthAll(0, this.date, !0)
                }, open: function () {
                    var l = this;
                    this.maskShow = !0, this.multiple = 0, this.multipleDates.data = [], this.multipleDates.begin = "", this.multipleDates.end = "", this.init(), this.$nextTick((function () {
                        setTimeout((function () {
                            return l.aniMaskShow = !0
                        }), 30)
                    }))
                }, close: function () {
                    var l = this;
                    this.aniMaskShow = !1, this.$nextTick((function () {
                        setTimeout((function () {
                            return l.maskShow = !1
                        }), 300)
                    }))
                }, confirm: function () {
                    this.setEmit("confirm"), this.close()
                }, getMonthAll: function (l, e) {
                    "" === e && (e = new Date);
                    var a = this.getWeek(this.getDate(e, l, "month"));
                    this.canlender = a, this.insert && this.setEmit("change")
                }, setEmit: function (l) {
                    var e = this.canlender;
                    this.$emit(l, {
                        range: this.range ? this.multipleDates : {},
                        year: e.year,
                        month: e.month,
                        date: e.date,
                        lunar: e.lunar,
                        clockinfo: e.clockinfo || {},
                        fulldate: e.year + "-" + e.month + "-" + e.date,
                        buxianrq: this.buxianrq
                    })
                }, isDisableBefore: function (l, e, a) {
                    var u = this.date || new Date, b = l + "-" + e + "-" + a, v = !1, t = !1;
                    return this.startDate && (v = this.dateCompare(this.startDate, b)), this.endDate && (t = this.dateCompare(this.getDate(this.endDate, 1), b)), this.disableBefore ? this.startDate ? !this.dateCompare(this.getDate(u, 0), b) || !v || t : this.endDate ? !this.dateCompare(this.getDate(u, 0), b) || t : !this.dateCompare(this.getDate(u, 0), b) : this.startDate ? !v || t : !!this.endDate && t
                }, backtoday: function () {
                    this.buxianrq = "不限", this.setEmit("confirm"), this.close()
                }, dataBefor: function (l, e) {
                    var a = this.canlender.year + "-" + this.canlender.month + "-" + this.canlender.date;
                    this.getMonthAll(l, a)
                }, selectDays: function (l) {
                    this.buxianrq = "";
                    var e = l.week, a = l.index, u = l.ischeck, b = l.isDay;
                    if (u && !b) {
                        var v = this.canlender,
                            t = v.weeks[e][a].month < 10 ? "0" + v.weeks[e][a].month : v.weeks[e][a].month,
                            n = v.weeks[e][a].date < 10 ? "0" + v.weeks[e][a].date : v.weeks[e][a].date,
                            i = v.year + "-" + t + "-" + n;
                        if (this.isClick = !0, 0 === this.multiple) this.multipleDates.begin = i, this.multiple = 1; else if (1 === this.multiple) {
                            this.multiple = 2, this.multipleDates.data && (this.multipleDates.data = []);
                            var r = this.dateCompare(this.multipleDates.begin, i);
                            r ? (this.multipleDates.data = this.geDateAll(this.multipleDates.begin, i), this.multipleDates.end = i) : (this.multipleDates.data = this.geDateAll(i, this.multipleDates.begin), this.multipleDates.end = this.multipleDates.begin, this.multipleDates.begin = i)
                        } else this.multiple = 0, this.multipleDates.data = [], this.multipleDates.begin = "", this.multipleDates.end = "";
                        this.getMonthAll(0, i)
                    }
                }, getWeek: function (l) {
                    var e = this;
                    "object" !== typeof l && (l = l.replace(/-/g, "/"));
                    for (var a = this.selected, u = this.getDate(this.date || new Date), t = this.getNewDate(l), n = t.year, i = t.month, r = t.date, c = t.day, s = [], o = {
                        firstDay: new Date(n, i - 1, 1).getDay(),
                        lastMonthDays: [],
                        currentMonthDys: [],
                        nextMonthDays: [],
                        endDay: new Date(n, i, 0).getDay(),
                        weeks: []
                    }, d = o.firstDay; d > 0; d--) {
                        var f = new Date(n, i - 1, 1 - d).getDate() + "";
                        o.lastMonthDays.push({
                            date: f,
                            month: i - 1,
                            disable: this.isDisableBefore(n, i - 1, f),
                            lunar: this.getlunar(n, i - 1, f),
                            isDay: !1
                        })
                    }
                    for (var h = {have: !1}, p = function (l) {
                        for (var v = !1, t = {}, c = 0; c < a.length; c++) {
                            var s = a[c].date.split("-");
                            Number(n) === Number(s[0]) && Number(i) === Number(s[1]) && Number(l) === Number(s[2]) && (v = !0, t.have = !0, t.date = a[c].date, a[c].info && (t.info = a[c].info), "{}" !== JSON.stringify(a[c].data) && void 0 === a[c].data || (t.data = a[c].data), Number(n) === Number(s[0]) && Number(i) === Number(s[1]) && Number(r) === Number(s[2]) && (h = t))
                        }
                        var d = e.multipleDates, f = d.begin, p = d.end, m = d.data, g = f.split("-"),
                            w = (0, b.default)(g, 3), k = w[0], y = w[1], _ = w[2], A = p.split("-"),
                            x = (0, b.default)(A, 3), D = x[0], C = x[1], S = x[2], M = !1, B = !1, Y = !1;
                        m.forEach((function (e, a) {
                            var u = e.split("-"), v = (0, b.default)(u, 3), t = v[0], r = v[1], c = v[2];
                            n === Number(t) && i === Number(r) && l === Number(c) && (M = !0)
                        })), n === Number(k) && i === Number(y) && l === Number(_) && (B = !0), n === Number(D) && i === Number(C) && l === Number(S) && (Y = !0), o.currentMonthDys.push({
                            checked: !!e.range && M,
                            multipleBegin: !!e.range && B,
                            multipleEnd: !!e.range && Y,
                            date: l + "",
                            month: i,
                            have: v,
                            clockinfo: t,
                            disable: e.isDisableBefore(n, i, l + ""),
                            lunar: e.getlunar(n, i, l + ""),
                            isDay: u === n + "-" + (i < 10 ? "0" + i : i) + "-" + (l < 10 ? "0" + l : l)
                        })
                    }, m = 1; m <= new Date(n, i, 0).getDate(); m++) p(m);
                    for (var g = 42 - (o.lastMonthDays.length + o.currentMonthDys.length), w = 1; w < g + 1; w++) o.nextMonthDays.push({
                        date: w + "",
                        month: i + 1,
                        disable: this.isDisableBefore(n, i + 1, w + ""),
                        lunar: this.getlunar(n, i + 1, w + ""),
                        isDay: !1
                    });
                    s = s.concat(o.lastMonthDays, o.currentMonthDys, o.nextMonthDays);
                    for (var k = 0; k < s.length; k++) k % 7 === 0 && (o.weeks[parseInt(k / 7)] = new Array(7)), o.weeks[parseInt(k / 7)][k % 7] = s[k];
                    return {
                        weeks: o.weeks,
                        month: i,
                        date: r,
                        day: c,
                        year: n,
                        clockinfo: h,
                        lunar: v.default.solar2lunar(n, i, r),
                        lastDate: o.currentMonthDys[o.currentMonthDys.length - 1].date
                    }
                }, getlunar: function (l, e, a) {
                    return v.default.solar2lunar(l, e, a).IDayCn
                }, getNewDate: function (l) {
                    var e = new Date(l);
                    return {year: e.getFullYear(), month: e.getMonth() + 1, date: e.getDate(), day: e.getDay()}
                }, getDate: function (l) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "day";
                    "object" !== typeof l && (l = l.replace(/-/g, "/"));
                    var u = new Date(l);
                    switch (a) {
                        case"day":
                            u.setDate(u.getDate() + e);
                            break;
                        case"month":
                            u.setMonth(u.getMonth() + e);
                            break;
                        case"year":
                            u.setFullYear(u.getFullYear() + e);
                            break
                    }
                    var b = u.getFullYear(), v = u.getMonth() + 1 < 10 ? "0" + (u.getMonth() + 1) : u.getMonth() + 1,
                        t = u.getDate() < 10 ? "0" + u.getDate() : u.getDate();
                    return b + "-" + v + "-" + t
                }, dateCompare: function (l, e) {
                    return l = new Date(l.replace("-", "/").replace("-", "/")), e = new Date(e.replace("-", "/").replace("-", "/")), l <= e
                }, geDateAll: function (l, e) {
                    var a = [], u = l.split("-"), b = e.split("-"), v = new Date;
                    v.setUTCFullYear(u[0], u[1] - 1, u[2]);
                    var t = new Date;
                    t.setUTCFullYear(b[0], b[1] - 1, b[2]);
                    for (var n = v.getTime() - 864e5, i = t.getTime() - 864e5, r = n; r <= i;) r += 864e5, a.push(this.getDate(new Date(parseInt(r))));
                    return a
                }
            }
        };
        e.default = n
    }, "0de5": function (l, e, a) {
        "use strict";
        a.r(e);
        var u = a("0020"), b = a("78e7");
        for (var v in b) "default" !== v && function (l) {
            a.d(e, l, (function () {
                return b[l]
            }))
        }(v);
        a("fed6");
        var t, n = a("f0c5"),
            i = Object(n["a"])(b["default"], u["b"], u["c"], !1, null, "36f5b70a", null, !1, u["a"], t);
        e["default"] = i.exports
    }, "0fee": function (l, e, a) {
        "use strict";
        var u, b = function () {
            var l = this, e = l.$createElement, a = l._self._c || e;
            return a("v-uni-view", {staticClass: "w-picker"}, [a("v-uni-view", {
                staticClass: "mask",
                class: {show: l.showPicker},
                attrs: {catchtouchmove: "true"},
                on: {
                    touchmove: function (e) {
                        e.stopPropagation(), e.preventDefault(), arguments[0] = e = l.$handleEvent(e)
                    }, click: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.maskTap.apply(void 0, arguments)
                    }
                }
            }), a("v-uni-view", {
                staticClass: "w-picker-cnt",
                class: {show: l.showPicker}
            }, [a("v-uni-view", {
                staticClass: "w-picker-hd",
                attrs: {catchtouchmove: "true"},
                on: {
                    touchmove: function (e) {
                        e.stopPropagation(), e.preventDefault(), arguments[0] = e = l.$handleEvent(e)
                    }
                }
            }, [a("v-uni-view", {
                staticClass: "w-picker-btn", on: {
                    click: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.pickerCancel.apply(void 0, arguments)
                    }
                }
            }, [l._v("取消")]), a("v-uni-view", {
                staticClass: "w-picker-btn",
                style: {color: l.themeColor},
                on: {
                    click: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.pickerConfirm.apply(void 0, arguments)
                    }
                }
            }, [l._v("确定")])], 1), "linkage" == l.mode ? a("v-uni-view", {staticClass: "w-picker-view"}, [a("v-uni-picker-view", {
                attrs: {
                    "indicator-style": l.itemHeight,
                    value: l.pickVal
                }, on: {
                    change: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.bindChange.apply(void 0, arguments)
                    }
                }
            }, l._l(l.data, (function (e, u) {
                return a("v-uni-picker-view-column", {key: u}, l._l(e, (function (e, u) {
                    return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e.label))])
                })), 1)
            })), 1)], 1) : l._e(), "half" == l.mode ? a("v-uni-view", {staticClass: "w-picker-view"}, [a("v-uni-picker-view", {
                attrs: {
                    "indicator-style": l.itemHeight,
                    value: l.pickVal
                }, on: {
                    change: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.bindChange.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-picker-view-column", l._l(l.data.years, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e) + "年")])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.months, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e) + "月")])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.days, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e) + "日")])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.areas, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e.label))])
            })), 1)], 1)], 1) : l._e(), "date" == l.mode ? a("v-uni-view", {staticClass: "w-picker-view"}, [a("v-uni-picker-view", {
                attrs: {
                    "indicator-style": l.itemHeight,
                    value: l.pickVal
                }, on: {
                    change: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.bindChange.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-picker-view-column", l._l(l.data.years, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e) + "年")])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.months, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e) + "月")])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.days, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e) + "日")])
            })), 1)], 1)], 1) : l._e(), "yearMonth" == l.mode ? a("v-uni-view", {staticClass: "w-picker-view"}, [a("v-uni-picker-view", {
                attrs: {
                    "indicator-style": l.itemHeight,
                    value: l.pickVal
                }, on: {
                    change: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.bindChange.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-picker-view-column", l._l(l.data.years, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e) + "年")])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.months, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e) + "月")])
            })), 1)], 1)], 1) : l._e(), "dateTime" == l.mode ? a("v-uni-view", {staticClass: "w-picker-view"}, [a("v-uni-picker-view", {
                attrs: {
                    "indicator-style": l.itemHeight,
                    value: l.pickVal
                }, on: {
                    change: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.bindChange.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-picker-view-column", l._l(l.data.years, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e) + "年")])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.months, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e) + "月")])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.days, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e) + "日")])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.hours, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e) + "时")])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.minutes, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e) + "分")])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.seconds, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e) + "秒")])
            })), 1)], 1)], 1) : l._e(), "range" == l.mode ? a("v-uni-view", {staticClass: "w-picker-view"}, [a("v-uni-picker-view", {
                attrs: {
                    "indicator-style": l.itemHeight,
                    value: l.pickVal
                }, on: {
                    change: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.bindChange.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-picker-view-column", l._l(l.data.fyears, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e))])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.fmonths, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e))])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.fdays, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e))])
            })), 1), a("v-uni-picker-view-column", [a("v-uni-view", {staticClass: "w-picker-item"}, [l._v("-")])], 1), a("v-uni-picker-view-column", l._l(l.data.tyears, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e))])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.tmonths, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e))])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.tdays, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e))])
            })), 1)], 1)], 1) : l._e(), "time" == l.mode ? a("v-uni-view", {staticClass: "w-picker-view"}, [a("v-uni-picker-view", {
                attrs: {
                    "indicator-style": l.itemHeight,
                    value: l.pickVal
                }, on: {
                    change: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.bindChange.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-picker-view-column", l._l(l.data.hours, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e) + "时")])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.minutes, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e) + "分")])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.seconds, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e) + "秒")])
            })), 1)], 1)], 1) : l._e(), "region" == l.mode ? a("v-uni-view", {staticClass: "w-picker-view"}, [a("v-uni-picker-view", {
                attrs: {
                    "indicator-style": l.itemHeight,
                    value: l.pickVal
                }, on: {
                    change: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.bindChange.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-picker-view-column", l._l(l.data.provinces, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e.label))])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.citys, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e.label))])
            })), 1), l.hideArea ? l._e() : a("v-uni-picker-view-column", l._l(l.data.areas, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e.label))])
            })), 1)], 1)], 1) : l._e(), "selector" == l.mode ? a("v-uni-view", {staticClass: "w-picker-view"}, [a("v-uni-picker-view", {
                attrs: {
                    "indicator-style": l.itemHeight,
                    value: l.pickVal
                }, on: {
                    change: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.bindChange.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-picker-view-column", l._l(l.data, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e.label))])
            })), 1)], 1)], 1) : l._e(), "limit" == l.mode ? a("v-uni-view", {staticClass: "w-picker-view"}, [a("v-uni-picker-view", {
                attrs: {
                    "indicator-style": l.itemHeight,
                    value: l.pickVal
                }, on: {
                    change: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.bindChange.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-picker-view-column", l._l(l.data.date, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e.label))])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.hours, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e.label) + "时")])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.minutes, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e.label) + "分")])
            })), 1)], 1)], 1) : l._e(), "limitHour" == l.mode ? a("v-uni-view", {staticClass: "w-picker-view"}, [a("v-uni-picker-view", {
                attrs: {
                    "indicator-style": l.itemHeight,
                    value: l.pickVal
                }, on: {
                    change: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.bindChange.apply(void 0, arguments)
                    }
                }
            }, [a("v-uni-picker-view-column", l._l(l.data.date, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e.label))])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.areas, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e.label))])
            })), 1), a("v-uni-picker-view-column", l._l(l.data.hours, (function (e, u) {
                return a("v-uni-view", {key: u, staticClass: "w-picker-item"}, [l._v(l._s(e.label) + "时")])
            })), 1)], 1)], 1) : l._e()], 1)], 1)
        }, v = [];
        a.d(e, "b", (function () {
            return b
        })), a.d(e, "c", (function () {
            return v
        })), a.d(e, "a", (function () {
            return u
        }))
    }, "1af6": function (l, e, a) {
        var u = a("63b6");
        u(u.S, "Array", {isArray: a("9003")})
    }, "1b09": function (l, e, a) {
        "use strict";
        var u, b = function () {
            var l = this, e = l.$createElement, a = l._self._c || e;
            return a("v-uni-view", [l._l(l.canlender.weeks, (function (e, u) {
                return [a("v-uni-view", {
                    key: u + "_0",
                    staticClass: "uni-calender__body-date-week"
                }, [l._l(e, (function (e, b) {
                    return [a("v-uni-view", {
                        key: b + "_0",
                        staticClass: "uni-calender__date",
                        class: {
                            "uni-calender__disable": l.canlender.month !== e.month || e.disable,
                            "uni-calender__date-current": (e.date == l.canlender.date && !e.checked || e.multipleBegin || e.multipleEnd) && l.canlender.month == e.month && !e.disable,
                            "uni-calender__lunar": l.lunar,
                            "uni-calender__active": !e.isDay,
                            "uni-calender__is-day": e.isDay,
                            "uni-calender__multiple": e.multipleBegin || e.multipleEnd,
                            "uni-calender__multiple-box": e.checked
                        },
                        on: {
                            click: function (a) {
                                arguments[0] = a = l.$handleEvent(a), l.selectDays(u, b, l.canlender.month === e.month, e.disable, l.canlender.lunar)
                            }
                        }
                    }, [a("v-uni-view", {staticClass: "uni-calender__circle-box"}, [l._v(l._s(e.date)), l.lunar ? a("v-uni-view", {staticClass: "uni-calender__lunar"}, [l._v(l._s(e.lunar))]) : l._e(), e.have ? a("v-uni-view", {staticClass: "uni-calender__data-circle"}) : l._e(), e.have && !l.lunar ? a("v-uni-view", {staticClass: "uni-calender__lunar"}, [l._v(l._s(e.clockinfo.info))]) : l._e()], 1), a("v-uni-view", {
                        staticClass: "uni-calender_check-bg",
                        class: {
                            "uni-calender_check": e.checked,
                            "calender_check-begin": e.multipleBegin,
                            "calender_check-end": e.multipleEnd
                        }
                    })], 1)]
                }))], 2)]
            }))], 2)
        }, v = [];
        a.d(e, "b", (function () {
            return b
        })), a.d(e, "c", (function () {
            return v
        })), a.d(e, "a", (function () {
            return u
        }))
    }, "1f37": function (l, e, a) {
        var u = a("4795");
        "string" === typeof u && (u = [[l.i, u, ""]]), u.locals && (l.exports = u.locals);
        var b = a("4f06").default;
        b("5c8304ef", u, !0, {sourceMap: !1, shadowMode: !1})
    }, "241d": function (l, e, a) {
        "use strict";
        a.r(e);
        var u = a("8209"), b = a.n(u);
        for (var v in u) "default" !== v && function (l) {
            a.d(e, l, (function () {
                return u[l]
            }))
        }(v);
        e["default"] = b.a
    }, 2541: function (l, e, a) {
        "use strict";
        var u = a("0625"), b = a.n(u);
        b.a
    }, "2b5d": function (l, e, a) {
        "use strict";
        a.r(e);
        var u = a("d666"), b = a("a6d7");
        for (var v in b) "default" !== v && function (l) {
            a.d(e, l, (function () {
                return b[l]
            }))
        }(v);
        a("01db");
        var t, n = a("f0c5"),
            i = Object(n["a"])(b["default"], u["b"], u["c"], !1, null, "d44ae210", null, !1, u["a"], t);
        e["default"] = i.exports
    }, "2ca7": function (l, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, a("6b54");
        var u = {
            lunarInfo: [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 23232, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560],
            solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            Gan: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
            Zhi: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
            Animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
            solarTerm: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"],
            sTermInfo: ["9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd0b06bdb0722c965ce1cfcc920f", "b027097bd097c36b0b6fc9274c91aa", "9778397bd19801ec9210c965cc920e", "97b6b97bd19801ec95f8c965cc920f", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd197c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bd09801d98082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec95f8c965cc920e", "97bcf97c3598082c95f8e1cfcc920f", "97bd097bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c3598082c95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf97c359801ec95f8c965cc920f", "97bd097bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd19801ec9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b97bd19801ec95f8c965cc920f", "97bd07f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bd07f1487f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c965cc920e", "97bcf7f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b97bd19801ec9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b97bd197c36c9210c9274c920e", "97bcf7f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "9778397bd097c36c9210c9274c920e", "97b6b7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c36b0b6fc9210c8dc2", "9778397bd097c36b0b70c9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9274c91aa", "97b6b7f0e47f531b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c91aa", "97b6b7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "9778397bd097c36b0b6fc9210c8dc2", "977837f0e37f149b0723b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f5307f595b0b0bc920fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc9210c8dc2", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd097c35b0b6fc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0b0bb0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14998082b0723b06bd", "7f07e7f0e37f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e397bd07f595b0b0bc920fb0722", "977837f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f595b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e37f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f1487f531b0b0bb0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e47f149b0723b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14998082b0723b06bd", "7f07e7f0e37f14998083b0787b0721", "7f0e27f0e47f531b0723b0b6fb0722", "7f0e37f0e366aa89801eb072297c35", "7ec967f0e37f14898082b0723b02d5", "7f07e7f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66aa89801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b0721", "7f07e7f0e47f531b0723b0b6fb0722", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b0723b02d5", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e36665b66a449801e9808297c35", "665f67f0e37f14898082b072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e26665b66a449801e9808297c35", "665f67f0e37f1489801eb072297c35", "7ec967f0e37f14998082b0787b06bd", "7f07e7f0e47f531b0723b0b6fb0721", "7f0e27f1487f531b0b0bb0b6fb0722"],
            nStr1: ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"],
            nStr2: ["初", "十", "廿", "卅"],
            nStr3: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
            lYearDays: function (l) {
                var e, a = 348;
                for (e = 32768; e > 8; e >>= 1) a += this.lunarInfo[l - 1900] & e ? 1 : 0;
                return a + this.leapDays(l)
            },
            leapMonth: function (l) {
                return 15 & this.lunarInfo[l - 1900]
            },
            leapDays: function (l) {
                return this.leapMonth(l) ? 65536 & this.lunarInfo[l - 1900] ? 30 : 29 : 0
            },
            monthDays: function (l, e) {
                return e > 12 || e < 1 ? -1 : this.lunarInfo[l - 1900] & 65536 >> e ? 30 : 29
            },
            solarDays: function (l, e) {
                if (e > 12 || e < 1) return -1;
                var a = e - 1;
                return 1 == a ? l % 4 == 0 && l % 100 != 0 || l % 400 == 0 ? 29 : 28 : this.solarMonth[a]
            },
            toGanZhiYear: function (l) {
                var e = (l - 3) % 10, a = (l - 3) % 12;
                return 0 == e && (e = 10), 0 == a && (a = 12), this.Gan[e - 1] + this.Zhi[a - 1]
            },
            toAstro: function (l, e) {
                var a = "魔羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯", u = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
                return a.substr(2 * l - (e < u[l - 1] ? 2 : 0), 2) + "座"
            },
            toGanZhi: function (l) {
                return this.Gan[l % 10] + this.Zhi[l % 12]
            },
            getTerm: function (l, e) {
                if (l < 1900 || l > 2100) return -1;
                if (e < 1 || e > 24) return -1;
                var a = this.sTermInfo[l - 1900],
                    u = [parseInt("0x" + a.substr(0, 5)).toString(), parseInt("0x" + a.substr(5, 5)).toString(), parseInt("0x" + a.substr(10, 5)).toString(), parseInt("0x" + a.substr(15, 5)).toString(), parseInt("0x" + a.substr(20, 5)).toString(), parseInt("0x" + a.substr(25, 5)).toString()],
                    b = [u[0].substr(0, 1), u[0].substr(1, 2), u[0].substr(3, 1), u[0].substr(4, 2), u[1].substr(0, 1), u[1].substr(1, 2), u[1].substr(3, 1), u[1].substr(4, 2), u[2].substr(0, 1), u[2].substr(1, 2), u[2].substr(3, 1), u[2].substr(4, 2), u[3].substr(0, 1), u[3].substr(1, 2), u[3].substr(3, 1), u[3].substr(4, 2), u[4].substr(0, 1), u[4].substr(1, 2), u[4].substr(3, 1), u[4].substr(4, 2), u[5].substr(0, 1), u[5].substr(1, 2), u[5].substr(3, 1), u[5].substr(4, 2)];
                return parseInt(b[e - 1])
            },
            toChinaMonth: function (l) {
                if (l > 12 || l < 1) return -1;
                var e = this.nStr3[l - 1];
                return e += "月", e
            },
            toChinaDay: function (l) {
                var e;
                switch (l) {
                    case 10:
                        e = "初十";
                        break;
                    case 20:
                        e = "二十";
                        break;
                    case 30:
                        e = "三十";
                        break;
                    default:
                        e = this.nStr2[Math.floor(l / 10)], e += this.nStr1[l % 10]
                }
                return e
            },
            getAnimal: function (l) {
                return this.Animals[(l - 4) % 12]
            },
            solar2lunar: function (l, e, a) {
                if (l < 1900 || l > 2100) return -1;
                if (1900 == l && 1 == e && a < 31) return -1;
                if (l) u = new Date(l, parseInt(e) - 1, a); else var u = new Date;
                var b, v = 0, t = 0,
                    n = (l = u.getFullYear(), e = u.getMonth() + 1, a = u.getDate(), (Date.UTC(u.getFullYear(), u.getMonth(), u.getDate()) - Date.UTC(1900, 0, 31)) / 864e5);
                for (b = 1900; b < 2101 && n > 0; b++) t = this.lYearDays(b), n -= t;
                n < 0 && (n += t, b--);
                var i = new Date, r = !1;
                i.getFullYear() == l && i.getMonth() + 1 == e && i.getDate() == a && (r = !0);
                var c = u.getDay(), s = this.nStr1[c];
                0 == c && (c = 7);
                var o = b, d = (v = this.leapMonth(b), !1);
                for (b = 1; b < 13 && n > 0; b++) v > 0 && b == v + 1 && 0 == d ? (--b, d = !0, t = this.leapDays(o)) : t = this.monthDays(o, b), 1 == d && b == v + 1 && (d = !1), n -= t;
                0 == n && v > 0 && b == v + 1 && (d ? d = !1 : (d = !0, --b)), n < 0 && (n += t, --b);
                var f = b, h = n + 1, p = e - 1, m = this.toGanZhiYear(o), g = this.getTerm(l, 2 * e - 1),
                    w = this.getTerm(l, 2 * e), k = this.toGanZhi(12 * (l - 1900) + e + 11);
                a >= g && (k = this.toGanZhi(12 * (l - 1900) + e + 12));
                var y = !1, _ = null;
                g == a && (y = !0, _ = this.solarTerm[2 * e - 2]), w == a && (y = !0, _ = this.solarTerm[2 * e - 1]);
                var A = Date.UTC(l, p, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10, x = this.toGanZhi(A + a - 1),
                    D = this.toAstro(e, a);
                return {
                    lYear: o,
                    lMonth: f,
                    lDay: h,
                    Animal: this.getAnimal(o),
                    IMonthCn: (d ? "闰" : "") + this.toChinaMonth(f),
                    IDayCn: this.toChinaDay(h),
                    cYear: l,
                    cMonth: e,
                    cDay: a,
                    gzYear: m,
                    gzMonth: k,
                    gzDay: x,
                    isToday: r,
                    isLeap: d,
                    nWeek: c,
                    ncWeek: "星期" + s,
                    isTerm: y,
                    Term: _,
                    astro: D
                }
            },
            lunar2solar: function (l, e, a, u) {
                u = !!u;
                var b = this.leapMonth(l);
                this.leapDays(l);
                if (u && b != e) return -1;
                if (2100 == l && 12 == e && a > 1 || 1900 == l && 1 == e && a < 31) return -1;
                var v = this.monthDays(l, e), t = v;
                if (u && (t = this.leapDays(l, e)), l < 1900 || l > 2100 || a > t) return -1;
                for (var n = 0, i = 1900; i < l; i++) n += this.lYearDays(i);
                var r = 0, c = !1;
                for (i = 1; i < e; i++) r = this.leapMonth(l), c || r <= i && r > 0 && (n += this.leapDays(l), c = !0), n += this.monthDays(l, i);
                u && (n += v);
                var s = Date.UTC(1900, 1, 30, 0, 0, 0), o = new Date(864e5 * (n + a - 31) + s), d = o.getUTCFullYear(),
                    f = o.getUTCMonth() + 1, h = o.getUTCDate();
                return this.solar2lunar(d, f, h)
            }
        }, b = u;
        e.default = b
    }, "2fe8": function (l, e, a) {
        "use strict";
        a.r(e);
        var u = a("7edb"), b = a("7f15");
        for (var v in b) "default" !== v && function (l) {
            a.d(e, l, (function () {
                return b[l]
            }))
        }(v);
        a("95ef");
        var t, n = a("f0c5"),
            i = Object(n["a"])(b["default"], u["b"], u["c"], !1, null, "05a1d492", null, !1, u["a"], t);
        e["default"] = i.exports
    }, "35b3": function (l, e, a) {
        var u = a("6af3");
        "string" === typeof u && (u = [[l.i, u, ""]]), u.locals && (l.exports = u.locals);
        var b = a("4f06").default;
        b("308a780a", u, !0, {sourceMap: !1, shadowMode: !1})
    }, "3eda": function (l, e, a) {
        var u = a("035c");
        "string" === typeof u && (u = [[l.i, u, ""]]), u.locals && (l.exports = u.locals);
        var b = a("4f06").default;
        b("25aeb6f6", u, !0, {sourceMap: !1, shadowMode: !1})
    }, "40c3": function (l, e, a) {
        var u = a("6b4c"), b = a("5168")("toStringTag"), v = "Arguments" == u(function () {
            return arguments
        }()), t = function (l, e) {
            try {
                return l[e]
            } catch (a) {
            }
        };
        l.exports = function (l) {
            var e, a, n;
            return void 0 === l ? "Undefined" : null === l ? "Null" : "string" == typeof (a = t(e = Object(l), b)) ? a : v ? u(e) : "Object" == (n = u(e)) && "function" == typeof e.callee ? "Arguments" : n
        }
    }, "469f": function (l, e, a) {
        a("6c1c"), a("1654"), l.exports = a("7d7b")
    }, 4795: function (l, e, a) {
        var u = a("24fb");
        e = u(!1), e.push([l.i, '@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:iconfont;src:url(//at.alicdn.com/t/font_989023_qdgy7euvg4.eot?t=1545961121132);\n  /* IE9*/src:url(//at.alicdn.com/t/font_989023_qdgy7euvg4.eot?t=1545961121132#iefix) format("embedded-opentype"),url("data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAPcAAsAAAAABiAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8fEf5Y21hcAAAAYAAAABLAAABcOcutbxnbHlmAAABzAAAACgAAAAoOZ2GtGhlYWQAAAH0AAAALwAAADYTtoNAaGhlYQAAAiQAAAAcAAAAJAfeA4NobXR4AAACQAAAAAgAAAAICAAAAGxvY2EAAAJIAAAABgAAAAYAFAAAbWF4cAAAAlAAAAAeAAAAIAENABJuYW1lAAACcAAAAUUAAAJtPlT+fXBvc3QAAAO4AAAAIQAAADLf6deseJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByesT1jY27438AQw9zI0AAUZgTJAQDeIAvweJxjYGBgZWBgYAZiHSBmYWBgDGFgZAABP6AoI1icmYELLM7CoARWwwISf8b2/z+MBPJZwCQDIxvDKOABkzJQHjisIJiBEQA3lgmBAAABAAD/gAMAA4EABQAACQE1CQE1AQACAP6IAXgBgP4AiAF4AXiIAAB4nGNgZGBgAOLdZzma4vltvjJwszCAwA3v+QsR9P8GFgbmRiCXg4EJJAoAMzgKmgB4nGNgZGBgbvjfwBDDwgACQJKRARUwAQBHCAJrBAAAAAQAAAAAAAAAABQAAHicY2BkYGBgYmBjANEgFgMDFxAyMPwH8xkACS0BIAAAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicY2BigAAuBuyAiZGJkZmBIyszMa8kv9SEgQEAGD0DTAAAAA==") format("woff"),url(//at.alicdn.com/t/font_989023_qdgy7euvg4.ttf?t=1545961121132) format("truetype"),url(//at.alicdn.com/t/font_989023_qdgy7euvg4.svg?t=1545961121132#iconfont) format("svg")\n  /* iOS 4.1- */}.iconfont[data-v-05a1d492]{font-family:iconfont!important;font-size:%?32?%;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-jiantou[data-v-05a1d492]:before{content:"\\e606"}.uni-calendar__mask[data-v-05a1d492]{position:fixed;bottom:0;top:0;width:100%;background:rgba(0,0,0,.4);-webkit-transition:all .3s;transition:all .3s;opacity:0;z-index:9998}.uni-calendar__mask.ani-mask-show[data-v-05a1d492]{opacity:1}.header[data-v-05a1d492]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;height:%?100?%;background:#fff;z-index:10000;font-size:%?32?%}.uni-calendar__box[data-v-05a1d492]{position:fixed;bottom:0;z-index:9999;width:100%;box-sizing:border-box;-webkit-transition:all .3s;transition:all .3s;-webkit-transform:translateY(100%);transform:translateY(100%)}.uni-calendar__box.ani-calendar-show[data-v-05a1d492]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-calendar__box.uni-calendar__static[data-v-05a1d492]{position:static;-webkit-transform:translateY(0);transform:translateY(0)}.uni-calendar__box .uni-calendar__nav[data-v-05a1d492]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?100?%;font-size:%?30?%;border-bottom:1px #f5f5f5 solid;background:#fff;padding:0 %?10?%}.uni-calendar__box .uni-calendar__nav .uni-calendar__nav-item[data-v-05a1d492]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?100?%;height:%?100?%;color:#333}.uni-calendar__wrapper[data-v-05a1d492]{width:100%;box-sizing:border-box;font-size:%?26?%;background:#fff;-webkit-transition:all .3s;transition:all .3s}.uni-calendar__wrapper .uni-calenda__content .uni-calendar__panel[data-v-05a1d492]{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;height:%?100?%}.uni-calendar__wrapper .uni-calenda__content .uni-calendar__panel .uni-calendar__date-befor[data-v-05a1d492],\n    .uni-calendar__wrapper .uni-calenda__content .uni-calendar__panel .uni-calendar__date-after[data-v-05a1d492]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%;width:%?80?%;text-align:center;line-height:%?80?%}.uni-calendar__wrapper .uni-calenda__content .uni-calendar__panel .uni-calendar__date-befor.uni-calendar__rollback[data-v-05a1d492],\n      .uni-calendar__wrapper .uni-calenda__content .uni-calendar__panel .uni-calendar__date-after.uni-calendar__rollback[data-v-05a1d492]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-calendar__wrapper .uni-calenda__content .uni-calendar__panel .uni-calendar__panel-box[data-v-05a1d492]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?200?%}.uni-calendar__wrapper .uni-calenda__content .uni-calendar__panel .uni-calendar__backtoday[data-v-05a1d492]{position:absolute;right:0;top:%?25?%;padding:0 %?10?%;padding-left:%?20?%;height:%?50?%;line-height:%?50?%;border:1px rgba(253,46,50,.5) solid;border-right:none;font-size:%?24?%;border-top-left-radius:%?50?%;border-bottom-left-radius:%?50?%;color:rgba(253,46,50,.7);background:rgba(241,233,233,.4)}.uni-calendar__wrapper .uni-calenda__content .uni-calendar__day-detail[data-v-05a1d492]{padding:%?20?%;padding-left:%?30?%;border-top:1px #f5f5f5 solid}.uni-calendar__wrapper .uni-calenda__content .uni-calendar__header[data-v-05a1d492]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?28?%;border-top:1px #f5f5f5 solid}.uni-calendar__wrapper .uni-calenda__content .uni-calendar__header .uni-calendar__week[data-v-05a1d492]{width:100%;text-align:center;line-height:%?80?%;color:#333;font-weight:700}.uni-calendar__wrapper .uni-calenda__content .uni-calendar__body[data-v-05a1d492]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;font-size:%?28?%}', ""]), l.exports = e
    }, 4861: function (l, e, a) {
        "use strict";
        var u = a("4ea4");
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var b = u(a("ec4e")), v = u(a("2b5d")), t = u(a("2fe8")), n = {
            components: {wPicker: b.default, uniPopup: v.default, uniCalendar: t.default}, data: function () {
                return {
                    date: "",
                    kstime: "",
                    array: ["单间", "一居室", "两居室", "三居室", "四居室", "复式", "别墅", "其他"],
                    index: 0,
                    array1: ["毛坯房", "二手房", "精装房", "日本"],
                    index1: 0,
                    param: {
                        name: "",
                        mobile: "",
                        province_city: "",
                        comments: "",
                        type: "",
                        area: "",
                        model: "",
                        member: "",
                        budget: "",
                        startingtime: "",
                        checktime: "",
                        uid: ""
                    }
                }
            }, onLoad: function (l) {
                console.log(l), this.param.uid = l.uid, this.param.name = uni.getStorageSync("name"), this.param.mobile = uni.getStorageSync("mobile"), this.param.province_city = uni.getStorageSync("province_city"), this.param.comments = uni.getStorageSync("comments"), this.param.type = uni.getStorageSync("type"), this.param.area = uni.getStorageSync("area"), this.param.model = uni.getStorageSync("model"), this.param.budget = uni.getStorageSync("budget"), this.param.startingtime = uni.getStorageSync("startingtime"), this.param.checktime = uni.getStorageSync("checktime"), this.kstime = uni.getStorageSync("kstime")
            }, methods: {
                fabhui: function () {
                    uni.navigateBack({delta: 1})
                }, bindPickerChange: function (l) {
                    this.index = l.target.value, this.param.type = this.array[l.target.value], uni.setStorageSync("type", this.param.type)
                }, bindPickerChange1: function (l) {
                    this.index1 = l.target.value, this.param.model = this.array1[l.target.value], uni.setStorageSync("model", this.param.model)
                }, openCalendar: function () {
                    var l = new Date;
                    l.setTime(l.getTime() + 864e5);
                    var e = l.getFullYear() + "-" + (l.getMonth() + 1) + "-" + l.getDate();
                    this.date = e, this.$refs.calendar.open()
                }, rzopenCalendar: function () {
                    this.kstime ? this.$refs.rzcalendar.open() : uni.showToast({title: "请您先选择装修时间", duration: 2e3})
                }, confirm: function (l) {
                    this.param.startingtime = l.year + "/" + l.month + "/" + l.date, this.kstime = l.fulldate, uni.setStorageSync("kstime", l.fulldate), uni.setStorageSync("startingtime", this.param.startingtime)
                }, rzconfirm: function (l) {
                    this.param.checktime = l.year + "/" + l.month + "/" + l.date, uni.setStorageSync("checktime", this.param.checktime)
                }, openPopup: function () {
                    this.$refs.popup.open()
                }, fwlxopenPopup: function () {
                    this.$refs.fwlxpopup.open()
                }, jtcyopenPopup: function () {
                    this.$refs.jtcypopup.open()
                }, closePopup: function () {
                    this.$refs.popup.close()
                }, chooseLocation: function () {
                    this.$refs.region.show()
                }, onConfirm: function (l) {
                    this.param.province_city = l.result, uni.setStorageSync("province_city", this.param.province_city), this.$refs.region.hide()
                }, onCancel: function (l) {
                    this.$refs.region.hide()
                }, inputBlur1: function (l) {
                    var e = event.target.value;
                    uni.setStorageSync("area", e)
                }, inputBlur2: function (l) {
                    var e = event.target.value;
                    uni.setStorageSync("mobile", e)
                }, inputBlur3: function (l) {
                    console.log(123, l);
                    var e = event.target.value;
                    uni.setStorageSync("budget", e)
                }, inputBlur4: function (l) {
                    var e = event.target.value;
                    uni.setStorageSync("comments", e)
                }, inputBlur5: function (l) {
                    var e = event.target.value;
                    uni.setStorageSync("name", e)
                }, submit: function () {
                    var l = this, e = /^1[3456789]\d{9}$/;
                    e.test(this.param.mobile) ? l.$POST_FUN("app/index.php?i=2&c=entry&m=ewei_shopv2&do=mobile&r=sns.post.designer&cid=1", this.param, (function (l) {
                        console.log(l), l.data.status, uni.showToast({title: l.data.msg})
                    })) : uni.showToast({title: "请输入正确的手机号码"})
                }
            }
        };
        e.default = n
    }, "4c8f": function (l, e, a) {
        var u = a("24fb");
        e = u(!1), e.push([l.i, ".receive[data-v-36f5b70a]{line-height:1;font-weight:500}.tishi[data-v-36f5b70a]{background:#f5f5f5;width:100%;height:%?62?%;padding-left:%?32?%;line-height:%?62?%;box-sizing:border-box;font-size:%?22?%;color:#999}.fanhui[data-v-36f5b70a]{width:%?14?%;height:%?14?%;border-top:%?2?% solid #ccc;border-right:%?2?% solid #ccc;-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-left:%?22?%}.zi[data-v-36f5b70a]{margin-left:%?22?%}.zs[data-v-36f5b70a]{width:100%;height:%?16?%;background:#f5f5f5}.xyb[data-v-36f5b70a]{width:%?690?%;height:%?96?%;border-radius:%?10?%;line-height:%?96?%;text-align:center;margin:%?0?% auto;background:#6b0415;font-size:%?36?%;color:#fff;font-weight:500;margin-bottom:%?30?%}.content-box[data-v-36f5b70a]{font-size:%?30?%;color:#1a1a1a;margin:0 %?30?%}.content[data-v-36f5b70a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:%?90?%;line-height:%?90?%}.input[data-v-36f5b70a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-flex:2;-webkit-flex:2;flex:2}uni-input[data-v-36f5b70a]{font-size:%?30?%;text-align:right}.beizhu[data-v-36f5b70a]{margin:%?30?% %?30?% %?30?%;font-size:%?30?%;color:#1a1a1a;font-weight:500}.input-title[data-v-36f5b70a]{margin-bottom:%?38?%}.queding[data-v-36f5b70a]{position:absolute;background:#fff;z-index:1;top:%?0?%;width:%?750?%;-webkit-transform:translateX(%?-30?%);transform:translateX(%?-30?%);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;font-weight:500;padding:0 %?30?%;box-sizing:border-box;height:%?80?%;border-bottom:1px solid #e5e5e5}", ""]), l.exports = e
    }, "54a1": function (l, e, a) {
        a("6c1c"), a("1654"), l.exports = a("95d5")
    }, "590c": function (l, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var u = [[[{label: "东城区", value: "110101"}, {label: "西城区", value: "110102"}, {
                label: "朝阳区",
                value: "110105"
            }, {label: "丰台区", value: "110106"}, {label: "石景山区", value: "110107"}, {
                label: "海淀区",
                value: "110108"
            }, {label: "门头沟区", value: "110109"}, {label: "房山区", value: "110111"}, {
                label: "通州区",
                value: "110112"
            }, {label: "顺义区", value: "110113"}, {label: "昌平区", value: "110114"}, {
                label: "大兴区",
                value: "110115"
            }, {label: "怀柔区", value: "110116"}, {label: "平谷区", value: "110117"}, {
                label: "密云区",
                value: "110118"
            }, {label: "延庆区", value: "110119"}]], [[{label: "和平区", value: "120101"}, {
                label: "河东区",
                value: "120102"
            }, {label: "河西区", value: "120103"}, {label: "南开区", value: "120104"}, {
                label: "河北区",
                value: "120105"
            }, {label: "红桥区", value: "120106"}, {label: "东丽区", value: "120110"}, {
                label: "西青区",
                value: "120111"
            }, {label: "津南区", value: "120112"}, {label: "北辰区", value: "120113"}, {
                label: "武清区",
                value: "120114"
            }, {label: "宝坻区", value: "120115"}, {label: "滨海新区", value: "120116"}, {
                label: "宁河区",
                value: "120117"
            }, {label: "静海区", value: "120118"}, {label: "蓟州区", value: "120119"}]], [[{
                label: "长安区",
                value: "130102"
            }, {label: "桥西区", value: "130104"}, {label: "新华区", value: "130105"}, {
                label: "井陉矿区",
                value: "130107"
            }, {label: "裕华区", value: "130108"}, {label: "藁城区", value: "130109"}, {
                label: "鹿泉区",
                value: "130110"
            }, {label: "栾城区", value: "130111"}, {label: "井陉县", value: "130121"}, {
                label: "正定县",
                value: "130123"
            }, {label: "行唐县", value: "130125"}, {label: "灵寿县", value: "130126"}, {
                label: "高邑县",
                value: "130127"
            }, {label: "深泽县", value: "130128"}, {label: "赞皇县", value: "130129"}, {
                label: "无极县",
                value: "130130"
            }, {label: "平山县", value: "130131"}, {label: "元氏县", value: "130132"}, {
                label: "赵县",
                value: "130133"
            }, {label: "石家庄高新技术产业开发区", value: "130171"}, {label: "石家庄循环化工园区", value: "130172"}, {
                label: "辛集市",
                value: "130181"
            }, {label: "晋州市", value: "130183"}, {label: "新乐市", value: "130184"}], [{
                label: "路南区",
                value: "130202"
            }, {label: "路北区", value: "130203"}, {label: "古冶区", value: "130204"}, {
                label: "开平区",
                value: "130205"
            }, {label: "丰南区", value: "130207"}, {label: "丰润区", value: "130208"}, {
                label: "曹妃甸区",
                value: "130209"
            }, {label: "滦县", value: "130223"}, {label: "滦南县", value: "130224"}, {
                label: "乐亭县",
                value: "130225"
            }, {label: "迁西县", value: "130227"}, {label: "玉田县", value: "130229"}, {
                label: "唐山市芦台经济技术开发区",
                value: "130271"
            }, {label: "唐山市汉沽管理区", value: "130272"}, {label: "唐山高新技术产业开发区", value: "130273"}, {
                label: "河北唐山海港经济开发区",
                value: "130274"
            }, {label: "遵化市", value: "130281"}, {label: "迁安市", value: "130283"}], [{
                label: "海港区",
                value: "130302"
            }, {label: "山海关区", value: "130303"}, {label: "北戴河区", value: "130304"}, {
                label: "抚宁区",
                value: "130306"
            }, {label: "青龙满族自治县", value: "130321"}, {label: "昌黎县", value: "130322"}, {
                label: "卢龙县",
                value: "130324"
            }, {label: "秦皇岛市经济技术开发区", value: "130371"}, {label: "北戴河新区", value: "130372"}], [{
                label: "邯山区",
                value: "130402"
            }, {label: "丛台区", value: "130403"}, {label: "复兴区", value: "130404"}, {
                label: "峰峰矿区",
                value: "130406"
            }, {label: "肥乡区", value: "130407"}, {label: "永年区", value: "130408"}, {
                label: "临漳县",
                value: "130423"
            }, {label: "成安县", value: "130424"}, {label: "大名县", value: "130425"}, {
                label: "涉县",
                value: "130426"
            }, {label: "磁县", value: "130427"}, {label: "邱县", value: "130430"}, {
                label: "鸡泽县",
                value: "130431"
            }, {label: "广平县", value: "130432"}, {label: "馆陶县", value: "130433"}, {
                label: "魏县",
                value: "130434"
            }, {label: "曲周县", value: "130435"}, {label: "邯郸经济技术开发区", value: "130471"}, {
                label: "邯郸冀南新区",
                value: "130473"
            }, {label: "武安市", value: "130481"}], [{label: "桥东区", value: "130502"}, {
                label: "桥西区",
                value: "130503"
            }, {label: "邢台县", value: "130521"}, {label: "临城县", value: "130522"}, {
                label: "内丘县",
                value: "130523"
            }, {label: "柏乡县", value: "130524"}, {label: "隆尧县", value: "130525"}, {
                label: "任县",
                value: "130526"
            }, {label: "南和县", value: "130527"}, {label: "宁晋县", value: "130528"}, {
                label: "巨鹿县",
                value: "130529"
            }, {label: "新河县", value: "130530"}, {label: "广宗县", value: "130531"}, {
                label: "平乡县",
                value: "130532"
            }, {label: "威县", value: "130533"}, {label: "清河县", value: "130534"}, {
                label: "临西县",
                value: "130535"
            }, {label: "河北邢台经济开发区", value: "130571"}, {label: "南宫市", value: "130581"}, {
                label: "沙河市",
                value: "130582"
            }], [{label: "竞秀区", value: "130602"}, {label: "莲池区", value: "130606"}, {
                label: "满城区",
                value: "130607"
            }, {label: "清苑区", value: "130608"}, {label: "徐水区", value: "130609"}, {
                label: "涞水县",
                value: "130623"
            }, {label: "阜平县", value: "130624"}, {label: "定兴县", value: "130626"}, {
                label: "唐县",
                value: "130627"
            }, {label: "高阳县", value: "130628"}, {label: "容城县", value: "130629"}, {
                label: "涞源县",
                value: "130630"
            }, {label: "望都县", value: "130631"}, {label: "安新县", value: "130632"}, {
                label: "易县",
                value: "130633"
            }, {label: "曲阳县", value: "130634"}, {label: "蠡县", value: "130635"}, {
                label: "顺平县",
                value: "130636"
            }, {label: "博野县", value: "130637"}, {label: "雄县", value: "130638"}, {
                label: "保定高新技术产业开发区",
                value: "130671"
            }, {label: "保定白沟新城", value: "130672"}, {label: "涿州市", value: "130681"}, {
                label: "定州市",
                value: "130682"
            }, {label: "安国市", value: "130683"}, {label: "高碑店市", value: "130684"}], [{
                label: "桥东区",
                value: "130702"
            }, {label: "桥西区", value: "130703"}, {label: "宣化区", value: "130705"}, {
                label: "下花园区",
                value: "130706"
            }, {label: "万全区", value: "130708"}, {label: "崇礼区", value: "130709"}, {
                label: "张北县",
                value: "130722"
            }, {label: "康保县", value: "130723"}, {label: "沽源县", value: "130724"}, {
                label: "尚义县",
                value: "130725"
            }, {label: "蔚县", value: "130726"}, {label: "阳原县", value: "130727"}, {
                label: "怀安县",
                value: "130728"
            }, {label: "怀来县", value: "130730"}, {label: "涿鹿县", value: "130731"}, {
                label: "赤城县",
                value: "130732"
            }, {label: "张家口市高新技术产业开发区", value: "130771"}, {label: "张家口市察北管理区", value: "130772"}, {
                label: "张家口市塞北管理区",
                value: "130773"
            }], [{label: "双桥区", value: "130802"}, {label: "双滦区", value: "130803"}, {
                label: "鹰手营子矿区",
                value: "130804"
            }, {label: "承德县", value: "130821"}, {label: "兴隆县", value: "130822"}, {
                label: "滦平县",
                value: "130824"
            }, {label: "隆化县", value: "130825"}, {label: "丰宁满族自治县", value: "130826"}, {
                label: "宽城满族自治县",
                value: "130827"
            }, {label: "围场满族蒙古族自治县", value: "130828"}, {label: "承德高新技术产业开发区", value: "130871"}, {
                label: "平泉市",
                value: "130881"
            }], [{label: "新华区", value: "130902"}, {label: "运河区", value: "130903"}, {
                label: "沧县",
                value: "130921"
            }, {label: "青县", value: "130922"}, {label: "东光县", value: "130923"}, {
                label: "海兴县",
                value: "130924"
            }, {label: "盐山县", value: "130925"}, {label: "肃宁县", value: "130926"}, {
                label: "南皮县",
                value: "130927"
            }, {label: "吴桥县", value: "130928"}, {label: "献县", value: "130929"}, {
                label: "孟村回族自治县",
                value: "130930"
            }, {label: "河北沧州经济开发区", value: "130971"}, {label: "沧州高新技术产业开发区", value: "130972"}, {
                label: "沧州渤海新区",
                value: "130973"
            }, {label: "泊头市", value: "130981"}, {label: "任丘市", value: "130982"}, {
                label: "黄骅市",
                value: "130983"
            }, {label: "河间市", value: "130984"}], [{label: "安次区", value: "131002"}, {
                label: "广阳区",
                value: "131003"
            }, {label: "固安县", value: "131022"}, {label: "永清县", value: "131023"}, {
                label: "香河县",
                value: "131024"
            }, {label: "大城县", value: "131025"}, {label: "文安县", value: "131026"}, {
                label: "大厂回族自治县",
                value: "131028"
            }, {label: "廊坊经济技术开发区", value: "131071"}, {label: "霸州市", value: "131081"}, {
                label: "三河市",
                value: "131082"
            }], [{label: "桃城区", value: "131102"}, {label: "冀州区", value: "131103"}, {
                label: "枣强县",
                value: "131121"
            }, {label: "武邑县", value: "131122"}, {label: "武强县", value: "131123"}, {
                label: "饶阳县",
                value: "131124"
            }, {label: "安平县", value: "131125"}, {label: "故城县", value: "131126"}, {
                label: "景县",
                value: "131127"
            }, {label: "阜城县", value: "131128"}, {label: "河北衡水经济开发区", value: "131171"}, {
                label: "衡水滨湖新区",
                value: "131172"
            }, {label: "深州市", value: "131182"}]], [[{label: "小店区", value: "140105"}, {
                label: "迎泽区",
                value: "140106"
            }, {label: "杏花岭区", value: "140107"}, {label: "尖草坪区", value: "140108"}, {
                label: "万柏林区",
                value: "140109"
            }, {label: "晋源区", value: "140110"}, {label: "清徐县", value: "140121"}, {
                label: "阳曲县",
                value: "140122"
            }, {label: "娄烦县", value: "140123"}, {label: "山西转型综合改革示范区", value: "140171"}, {
                label: "古交市",
                value: "140181"
            }], [{label: "城区", value: "140202"}, {label: "矿区", value: "140203"}, {
                label: "南郊区",
                value: "140211"
            }, {label: "新荣区", value: "140212"}, {label: "阳高县", value: "140221"}, {
                label: "天镇县",
                value: "140222"
            }, {label: "广灵县", value: "140223"}, {label: "灵丘县", value: "140224"}, {
                label: "浑源县",
                value: "140225"
            }, {label: "左云县", value: "140226"}, {label: "大同县", value: "140227"}, {
                label: "山西大同经济开发区",
                value: "140271"
            }], [{label: "城区", value: "140302"}, {label: "矿区", value: "140303"}, {
                label: "郊区",
                value: "140311"
            }, {label: "平定县", value: "140321"}, {label: "盂县", value: "140322"}, {
                label: "山西阳泉经济开发区",
                value: "140371"
            }], [{label: "城区", value: "140402"}, {label: "郊区", value: "140411"}, {
                label: "长治县",
                value: "140421"
            }, {label: "襄垣县", value: "140423"}, {label: "屯留县", value: "140424"}, {
                label: "平顺县",
                value: "140425"
            }, {label: "黎城县", value: "140426"}, {label: "壶关县", value: "140427"}, {
                label: "长子县",
                value: "140428"
            }, {label: "武乡县", value: "140429"}, {label: "沁县", value: "140430"}, {
                label: "沁源县",
                value: "140431"
            }, {label: "山西长治高新技术产业园区", value: "140471"}, {label: "潞城市", value: "140481"}], [{
                label: "城区",
                value: "140502"
            }, {label: "沁水县", value: "140521"}, {label: "阳城县", value: "140522"}, {
                label: "陵川县",
                value: "140524"
            }, {label: "泽州县", value: "140525"}, {label: "高平市", value: "140581"}], [{
                label: "朔城区",
                value: "140602"
            }, {label: "平鲁区", value: "140603"}, {label: "山阴县", value: "140621"}, {
                label: "应县",
                value: "140622"
            }, {label: "右玉县", value: "140623"}, {label: "怀仁县", value: "140624"}, {
                label: "山西朔州经济开发区",
                value: "140671"
            }], [{label: "榆次区", value: "140702"}, {label: "榆社县", value: "140721"}, {
                label: "左权县",
                value: "140722"
            }, {label: "和顺县", value: "140723"}, {label: "昔阳县", value: "140724"}, {
                label: "寿阳县",
                value: "140725"
            }, {label: "太谷县", value: "140726"}, {label: "祁县", value: "140727"}, {
                label: "平遥县",
                value: "140728"
            }, {label: "灵石县", value: "140729"}, {label: "介休市", value: "140781"}], [{
                label: "盐湖区",
                value: "140802"
            }, {label: "临猗县", value: "140821"}, {label: "万荣县", value: "140822"}, {
                label: "闻喜县",
                value: "140823"
            }, {label: "稷山县", value: "140824"}, {label: "新绛县", value: "140825"}, {
                label: "绛县",
                value: "140826"
            }, {label: "垣曲县", value: "140827"}, {label: "夏县", value: "140828"}, {
                label: "平陆县",
                value: "140829"
            }, {label: "芮城县", value: "140830"}, {label: "永济市", value: "140881"}, {
                label: "河津市",
                value: "140882"
            }], [{label: "忻府区", value: "140902"}, {label: "定襄县", value: "140921"}, {
                label: "五台县",
                value: "140922"
            }, {label: "代县", value: "140923"}, {label: "繁峙县", value: "140924"}, {
                label: "宁武县",
                value: "140925"
            }, {label: "静乐县", value: "140926"}, {label: "神池县", value: "140927"}, {
                label: "五寨县",
                value: "140928"
            }, {label: "岢岚县", value: "140929"}, {label: "河曲县", value: "140930"}, {
                label: "保德县",
                value: "140931"
            }, {label: "偏关县", value: "140932"}, {label: "五台山风景名胜区", value: "140971"}, {
                label: "原平市",
                value: "140981"
            }], [{label: "尧都区", value: "141002"}, {label: "曲沃县", value: "141021"}, {
                label: "翼城县",
                value: "141022"
            }, {label: "襄汾县", value: "141023"}, {label: "洪洞县", value: "141024"}, {
                label: "古县",
                value: "141025"
            }, {label: "安泽县", value: "141026"}, {label: "浮山县", value: "141027"}, {
                label: "吉县",
                value: "141028"
            }, {label: "乡宁县", value: "141029"}, {label: "大宁县", value: "141030"}, {
                label: "隰县",
                value: "141031"
            }, {label: "永和县", value: "141032"}, {label: "蒲县", value: "141033"}, {
                label: "汾西县",
                value: "141034"
            }, {label: "侯马市", value: "141081"}, {label: "霍州市", value: "141082"}], [{
                label: "离石区",
                value: "141102"
            }, {label: "文水县", value: "141121"}, {label: "交城县", value: "141122"}, {
                label: "兴县",
                value: "141123"
            }, {label: "临县", value: "141124"}, {label: "柳林县", value: "141125"}, {
                label: "石楼县",
                value: "141126"
            }, {label: "岚县", value: "141127"}, {label: "方山县", value: "141128"}, {
                label: "中阳县",
                value: "141129"
            }, {label: "交口县", value: "141130"}, {label: "孝义市", value: "141181"}, {
                label: "汾阳市",
                value: "141182"
            }]], [[{label: "新城区", value: "150102"}, {label: "回民区", value: "150103"}, {
                label: "玉泉区",
                value: "150104"
            }, {label: "赛罕区", value: "150105"}, {label: "土默特左旗", value: "150121"}, {
                label: "托克托县",
                value: "150122"
            }, {label: "和林格尔县", value: "150123"}, {label: "清水河县", value: "150124"}, {
                label: "武川县",
                value: "150125"
            }, {label: "呼和浩特金海工业园区", value: "150171"}, {label: "呼和浩特经济技术开发区", value: "150172"}], [{
                label: "东河区",
                value: "150202"
            }, {label: "昆都仑区", value: "150203"}, {label: "青山区", value: "150204"}, {
                label: "石拐区",
                value: "150205"
            }, {label: "白云鄂博矿区", value: "150206"}, {label: "九原区", value: "150207"}, {
                label: "土默特右旗",
                value: "150221"
            }, {label: "固阳县", value: "150222"}, {label: "达尔罕茂明安联合旗", value: "150223"}, {
                label: "包头稀土高新技术产业开发区",
                value: "150271"
            }], [{label: "海勃湾区", value: "150302"}, {label: "海南区", value: "150303"}, {
                label: "乌达区",
                value: "150304"
            }], [{label: "红山区", value: "150402"}, {label: "元宝山区", value: "150403"}, {
                label: "松山区",
                value: "150404"
            }, {label: "阿鲁科尔沁旗", value: "150421"}, {label: "巴林左旗", value: "150422"}, {
                label: "巴林右旗",
                value: "150423"
            }, {label: "林西县", value: "150424"}, {label: "克什克腾旗", value: "150425"}, {
                label: "翁牛特旗",
                value: "150426"
            }, {label: "喀喇沁旗", value: "150428"}, {label: "宁城县", value: "150429"}, {
                label: "敖汉旗",
                value: "150430"
            }], [{label: "科尔沁区", value: "150502"}, {label: "科尔沁左翼中旗", value: "150521"}, {
                label: "科尔沁左翼后旗",
                value: "150522"
            }, {label: "开鲁县", value: "150523"}, {label: "库伦旗", value: "150524"}, {
                label: "奈曼旗",
                value: "150525"
            }, {label: "扎鲁特旗", value: "150526"}, {label: "通辽经济技术开发区", value: "150571"}, {
                label: "霍林郭勒市",
                value: "150581"
            }], [{label: "东胜区", value: "150602"}, {label: "康巴什区", value: "150603"}, {
                label: "达拉特旗",
                value: "150621"
            }, {label: "准格尔旗", value: "150622"}, {label: "鄂托克前旗", value: "150623"}, {
                label: "鄂托克旗",
                value: "150624"
            }, {label: "杭锦旗", value: "150625"}, {label: "乌审旗", value: "150626"}, {
                label: "伊金霍洛旗",
                value: "150627"
            }], [{label: "海拉尔区", value: "150702"}, {label: "扎赉诺尔区", value: "150703"}, {
                label: "阿荣旗",
                value: "150721"
            }, {label: "莫力达瓦达斡尔族自治旗", value: "150722"}, {label: "鄂伦春自治旗", value: "150723"}, {
                label: "鄂温克族自治旗",
                value: "150724"
            }, {label: "陈巴尔虎旗", value: "150725"}, {label: "新巴尔虎左旗", value: "150726"}, {
                label: "新巴尔虎右旗",
                value: "150727"
            }, {label: "满洲里市", value: "150781"}, {label: "牙克石市", value: "150782"}, {
                label: "扎兰屯市",
                value: "150783"
            }, {label: "额尔古纳市", value: "150784"}, {label: "根河市", value: "150785"}], [{
                label: "临河区",
                value: "150802"
            }, {label: "五原县", value: "150821"}, {label: "磴口县", value: "150822"}, {
                label: "乌拉特前旗",
                value: "150823"
            }, {label: "乌拉特中旗", value: "150824"}, {label: "乌拉特后旗", value: "150825"}, {
                label: "杭锦后旗",
                value: "150826"
            }], [{label: "集宁区", value: "150902"}, {label: "卓资县", value: "150921"}, {
                label: "化德县",
                value: "150922"
            }, {label: "商都县", value: "150923"}, {label: "兴和县", value: "150924"}, {
                label: "凉城县",
                value: "150925"
            }, {label: "察哈尔右翼前旗", value: "150926"}, {label: "察哈尔右翼中旗", value: "150927"}, {
                label: "察哈尔右翼后旗",
                value: "150928"
            }, {label: "四子王旗", value: "150929"}, {label: "丰镇市", value: "150981"}], [{
                label: "乌兰浩特市",
                value: "152201"
            }, {label: "阿尔山市", value: "152202"}, {label: "科尔沁右翼前旗", value: "152221"}, {
                label: "科尔沁右翼中旗",
                value: "152222"
            }, {label: "扎赉特旗", value: "152223"}, {label: "突泉县", value: "152224"}], [{
                label: "二连浩特市",
                value: "152501"
            }, {label: "锡林浩特市", value: "152502"}, {label: "阿巴嘎旗", value: "152522"}, {
                label: "苏尼特左旗",
                value: "152523"
            }, {label: "苏尼特右旗", value: "152524"}, {label: "东乌珠穆沁旗", value: "152525"}, {
                label: "西乌珠穆沁旗",
                value: "152526"
            }, {label: "太仆寺旗", value: "152527"}, {label: "镶黄旗", value: "152528"}, {
                label: "正镶白旗",
                value: "152529"
            }, {label: "正蓝旗", value: "152530"}, {label: "多伦县", value: "152531"}, {
                label: "乌拉盖管委会",
                value: "152571"
            }], [{label: "阿拉善左旗", value: "152921"}, {label: "阿拉善右旗", value: "152922"}, {
                label: "额济纳旗",
                value: "152923"
            }, {label: "内蒙古阿拉善经济开发区", value: "152971"}]], [[{label: "和平区", value: "210102"}, {
                label: "沈河区",
                value: "210103"
            }, {label: "大东区", value: "210104"}, {label: "皇姑区", value: "210105"}, {
                label: "铁西区",
                value: "210106"
            }, {label: "苏家屯区", value: "210111"}, {label: "浑南区", value: "210112"}, {
                label: "沈北新区",
                value: "210113"
            }, {label: "于洪区", value: "210114"}, {label: "辽中区", value: "210115"}, {
                label: "康平县",
                value: "210123"
            }, {label: "法库县", value: "210124"}, {label: "新民市", value: "210181"}], [{
                label: "中山区",
                value: "210202"
            }, {label: "西岗区", value: "210203"}, {label: "沙河口区", value: "210204"}, {
                label: "甘井子区",
                value: "210211"
            }, {label: "旅顺口区", value: "210212"}, {label: "金州区", value: "210213"}, {
                label: "普兰店区",
                value: "210214"
            }, {label: "长海县", value: "210224"}, {label: "瓦房店市", value: "210281"}, {
                label: "庄河市",
                value: "210283"
            }], [{label: "铁东区", value: "210302"}, {label: "铁西区", value: "210303"}, {
                label: "立山区",
                value: "210304"
            }, {label: "千山区", value: "210311"}, {label: "台安县", value: "210321"}, {
                label: "岫岩满族自治县",
                value: "210323"
            }, {label: "海城市", value: "210381"}], [{label: "新抚区", value: "210402"}, {
                label: "东洲区",
                value: "210403"
            }, {label: "望花区", value: "210404"}, {label: "顺城区", value: "210411"}, {
                label: "抚顺县",
                value: "210421"
            }, {label: "新宾满族自治县", value: "210422"}, {label: "清原满族自治县", value: "210423"}], [{
                label: "平山区",
                value: "210502"
            }, {label: "溪湖区", value: "210503"}, {label: "明山区", value: "210504"}, {
                label: "南芬区",
                value: "210505"
            }, {label: "本溪满族自治县", value: "210521"}, {label: "桓仁满族自治县", value: "210522"}], [{
                label: "元宝区",
                value: "210602"
            }, {label: "振兴区", value: "210603"}, {label: "振安区", value: "210604"}, {
                label: "宽甸满族自治县",
                value: "210624"
            }, {label: "东港市", value: "210681"}, {label: "凤城市", value: "210682"}], [{
                label: "古塔区",
                value: "210702"
            }, {label: "凌河区", value: "210703"}, {label: "太和区", value: "210711"}, {
                label: "黑山县",
                value: "210726"
            }, {label: "义县", value: "210727"}, {label: "凌海市", value: "210781"}, {
                label: "北镇市",
                value: "210782"
            }], [{label: "站前区", value: "210802"}, {label: "西市区", value: "210803"}, {
                label: "鲅鱼圈区",
                value: "210804"
            }, {label: "老边区", value: "210811"}, {label: "盖州市", value: "210881"}, {
                label: "大石桥市",
                value: "210882"
            }], [{label: "海州区", value: "210902"}, {label: "新邱区", value: "210903"}, {
                label: "太平区",
                value: "210904"
            }, {label: "清河门区", value: "210905"}, {label: "细河区", value: "210911"}, {
                label: "阜新蒙古族自治县",
                value: "210921"
            }, {label: "彰武县", value: "210922"}], [{label: "白塔区", value: "211002"}, {
                label: "文圣区",
                value: "211003"
            }, {label: "宏伟区", value: "211004"}, {label: "弓长岭区", value: "211005"}, {
                label: "太子河区",
                value: "211011"
            }, {label: "辽阳县", value: "211021"}, {label: "灯塔市", value: "211081"}], [{
                label: "双台子区",
                value: "211102"
            }, {label: "兴隆台区", value: "211103"}, {label: "大洼区", value: "211104"}, {
                label: "盘山县",
                value: "211122"
            }], [{label: "银州区", value: "211202"}, {label: "清河区", value: "211204"}, {
                label: "铁岭县",
                value: "211221"
            }, {label: "西丰县", value: "211223"}, {label: "昌图县", value: "211224"}, {
                label: "调兵山市",
                value: "211281"
            }, {label: "开原市", value: "211282"}], [{label: "双塔区", value: "211302"}, {
                label: "龙城区",
                value: "211303"
            }, {label: "朝阳县", value: "211321"}, {label: "建平县", value: "211322"}, {
                label: "喀喇沁左翼蒙古族自治县",
                value: "211324"
            }, {label: "北票市", value: "211381"}, {label: "凌源市", value: "211382"}], [{
                label: "连山区",
                value: "211402"
            }, {label: "龙港区", value: "211403"}, {label: "南票区", value: "211404"}, {
                label: "绥中县",
                value: "211421"
            }, {label: "建昌县", value: "211422"}, {label: "兴城市", value: "211481"}]], [[{
                label: "南关区",
                value: "220102"
            }, {label: "宽城区", value: "220103"}, {label: "朝阳区", value: "220104"}, {
                label: "二道区",
                value: "220105"
            }, {label: "绿园区", value: "220106"}, {label: "双阳区", value: "220112"}, {
                label: "九台区",
                value: "220113"
            }, {label: "农安县", value: "220122"}, {label: "长春经济技术开发区", value: "220171"}, {
                label: "长春净月高新技术产业开发区",
                value: "220172"
            }, {label: "长春高新技术产业开发区", value: "220173"}, {label: "长春汽车经济技术开发区", value: "220174"}, {
                label: "榆树市",
                value: "220182"
            }, {label: "德惠市", value: "220183"}], [{label: "昌邑区", value: "220202"}, {
                label: "龙潭区",
                value: "220203"
            }, {label: "船营区", value: "220204"}, {label: "丰满区", value: "220211"}, {
                label: "永吉县",
                value: "220221"
            }, {label: "吉林经济开发区", value: "220271"}, {label: "吉林高新技术产业开发区", value: "220272"}, {
                label: "吉林中国新加坡食品区",
                value: "220273"
            }, {label: "蛟河市", value: "220281"}, {label: "桦甸市", value: "220282"}, {
                label: "舒兰市",
                value: "220283"
            }, {label: "磐石市", value: "220284"}], [{label: "铁西区", value: "220302"}, {
                label: "铁东区",
                value: "220303"
            }, {label: "梨树县", value: "220322"}, {label: "伊通满族自治县", value: "220323"}, {
                label: "公主岭市",
                value: "220381"
            }, {label: "双辽市", value: "220382"}], [{label: "龙山区", value: "220402"}, {
                label: "西安区",
                value: "220403"
            }, {label: "东丰县", value: "220421"}, {label: "东辽县", value: "220422"}], [{
                label: "东昌区",
                value: "220502"
            }, {label: "二道江区", value: "220503"}, {label: "通化县", value: "220521"}, {
                label: "辉南县",
                value: "220523"
            }, {label: "柳河县", value: "220524"}, {label: "梅河口市", value: "220581"}, {
                label: "集安市",
                value: "220582"
            }], [{label: "浑江区", value: "220602"}, {label: "江源区", value: "220605"}, {
                label: "抚松县",
                value: "220621"
            }, {label: "靖宇县", value: "220622"}, {label: "长白朝鲜族自治县", value: "220623"}, {
                label: "临江市",
                value: "220681"
            }], [{label: "宁江区", value: "220702"}, {label: "前郭尔罗斯蒙古族自治县", value: "220721"}, {
                label: "长岭县",
                value: "220722"
            }, {label: "乾安县", value: "220723"}, {label: "吉林松原经济开发区", value: "220771"}, {
                label: "扶余市",
                value: "220781"
            }], [{label: "洮北区", value: "220802"}, {label: "镇赉县", value: "220821"}, {
                label: "通榆县",
                value: "220822"
            }, {label: "吉林白城经济开发区", value: "220871"}, {label: "洮南市", value: "220881"}, {
                label: "大安市",
                value: "220882"
            }], [{label: "延吉市", value: "222401"}, {label: "图们市", value: "222402"}, {
                label: "敦化市",
                value: "222403"
            }, {label: "珲春市", value: "222404"}, {label: "龙井市", value: "222405"}, {
                label: "和龙市",
                value: "222406"
            }, {label: "汪清县", value: "222424"}, {label: "安图县", value: "222426"}]], [[{
                label: "道里区",
                value: "230102"
            }, {label: "南岗区", value: "230103"}, {label: "道外区", value: "230104"}, {
                label: "平房区",
                value: "230108"
            }, {label: "松北区", value: "230109"}, {label: "香坊区", value: "230110"}, {
                label: "呼兰区",
                value: "230111"
            }, {label: "阿城区", value: "230112"}, {label: "双城区", value: "230113"}, {
                label: "依兰县",
                value: "230123"
            }, {label: "方正县", value: "230124"}, {label: "宾县", value: "230125"}, {
                label: "巴彦县",
                value: "230126"
            }, {label: "木兰县", value: "230127"}, {label: "通河县", value: "230128"}, {
                label: "延寿县",
                value: "230129"
            }, {label: "尚志市", value: "230183"}, {label: "五常市", value: "230184"}], [{
                label: "龙沙区",
                value: "230202"
            }, {label: "建华区", value: "230203"}, {label: "铁锋区", value: "230204"}, {
                label: "昂昂溪区",
                value: "230205"
            }, {label: "富拉尔基区", value: "230206"}, {label: "碾子山区", value: "230207"}, {
                label: "梅里斯达斡尔族区",
                value: "230208"
            }, {label: "龙江县", value: "230221"}, {label: "依安县", value: "230223"}, {
                label: "泰来县",
                value: "230224"
            }, {label: "甘南县", value: "230225"}, {label: "富裕县", value: "230227"}, {
                label: "克山县",
                value: "230229"
            }, {label: "克东县", value: "230230"}, {label: "拜泉县", value: "230231"}, {
                label: "讷河市",
                value: "230281"
            }], [{label: "鸡冠区", value: "230302"}, {label: "恒山区", value: "230303"}, {
                label: "滴道区",
                value: "230304"
            }, {label: "梨树区", value: "230305"}, {label: "城子河区", value: "230306"}, {
                label: "麻山区",
                value: "230307"
            }, {label: "鸡东县", value: "230321"}, {label: "虎林市", value: "230381"}, {
                label: "密山市",
                value: "230382"
            }], [{label: "向阳区", value: "230402"}, {label: "工农区", value: "230403"}, {
                label: "南山区",
                value: "230404"
            }, {label: "兴安区", value: "230405"}, {label: "东山区", value: "230406"}, {
                label: "兴山区",
                value: "230407"
            }, {label: "萝北县", value: "230421"}, {label: "绥滨县", value: "230422"}], [{
                label: "尖山区",
                value: "230502"
            }, {label: "岭东区", value: "230503"}, {label: "四方台区", value: "230505"}, {
                label: "宝山区",
                value: "230506"
            }, {label: "集贤县", value: "230521"}, {label: "友谊县", value: "230522"}, {
                label: "宝清县",
                value: "230523"
            }, {label: "饶河县", value: "230524"}], [{label: "萨尔图区", value: "230602"}, {
                label: "龙凤区",
                value: "230603"
            }, {label: "让胡路区", value: "230604"}, {label: "红岗区", value: "230605"}, {
                label: "大同区",
                value: "230606"
            }, {label: "肇州县", value: "230621"}, {label: "肇源县", value: "230622"}, {
                label: "林甸县",
                value: "230623"
            }, {label: "杜尔伯特蒙古族自治县", value: "230624"}, {label: "大庆高新技术产业开发区", value: "230671"}], [{
                label: "伊春区",
                value: "230702"
            }, {label: "南岔区", value: "230703"}, {label: "友好区", value: "230704"}, {
                label: "西林区",
                value: "230705"
            }, {label: "翠峦区", value: "230706"}, {label: "新青区", value: "230707"}, {
                label: "美溪区",
                value: "230708"
            }, {label: "金山屯区", value: "230709"}, {label: "五营区", value: "230710"}, {
                label: "乌马河区",
                value: "230711"
            }, {label: "汤旺河区", value: "230712"}, {label: "带岭区", value: "230713"}, {
                label: "乌伊岭区",
                value: "230714"
            }, {label: "红星区", value: "230715"}, {label: "上甘岭区", value: "230716"}, {
                label: "嘉荫县",
                value: "230722"
            }, {label: "铁力市", value: "230781"}], [{label: "向阳区", value: "230803"}, {
                label: "前进区",
                value: "230804"
            }, {label: "东风区", value: "230805"}, {label: "郊区", value: "230811"}, {
                label: "桦南县",
                value: "230822"
            }, {label: "桦川县", value: "230826"}, {label: "汤原县", value: "230828"}, {
                label: "同江市",
                value: "230881"
            }, {label: "富锦市", value: "230882"}, {label: "抚远市", value: "230883"}], [{
                label: "新兴区",
                value: "230902"
            }, {label: "桃山区", value: "230903"}, {label: "茄子河区", value: "230904"}, {
                label: "勃利县",
                value: "230921"
            }], [{label: "东安区", value: "231002"}, {label: "阳明区", value: "231003"}, {
                label: "爱民区",
                value: "231004"
            }, {label: "西安区", value: "231005"}, {label: "林口县", value: "231025"}, {
                label: "牡丹江经济技术开发区",
                value: "231071"
            }, {label: "绥芬河市", value: "231081"}, {label: "海林市", value: "231083"}, {
                label: "宁安市",
                value: "231084"
            }, {label: "穆棱市", value: "231085"}, {label: "东宁市", value: "231086"}], [{
                label: "爱辉区",
                value: "231102"
            }, {label: "嫩江县", value: "231121"}, {label: "逊克县", value: "231123"}, {
                label: "孙吴县",
                value: "231124"
            }, {label: "北安市", value: "231181"}, {label: "五大连池市", value: "231182"}], [{
                label: "北林区",
                value: "231202"
            }, {label: "望奎县", value: "231221"}, {label: "兰西县", value: "231222"}, {
                label: "青冈县",
                value: "231223"
            }, {label: "庆安县", value: "231224"}, {label: "明水县", value: "231225"}, {
                label: "绥棱县",
                value: "231226"
            }, {label: "安达市", value: "231281"}, {label: "肇东市", value: "231282"}, {
                label: "海伦市",
                value: "231283"
            }], [{label: "加格达奇区", value: "232701"}, {label: "松岭区", value: "232702"}, {
                label: "新林区",
                value: "232703"
            }, {label: "呼中区", value: "232704"}, {label: "呼玛县", value: "232721"}, {
                label: "塔河县",
                value: "232722"
            }, {label: "漠河县", value: "232723"}]], [[{label: "黄浦区", value: "310101"}, {
                label: "徐汇区",
                value: "310104"
            }, {label: "长宁区", value: "310105"}, {label: "静安区", value: "310106"}, {
                label: "普陀区",
                value: "310107"
            }, {label: "虹口区", value: "310109"}, {label: "杨浦区", value: "310110"}, {
                label: "闵行区",
                value: "310112"
            }, {label: "宝山区", value: "310113"}, {label: "嘉定区", value: "310114"}, {
                label: "浦东新区",
                value: "310115"
            }, {label: "金山区", value: "310116"}, {label: "松江区", value: "310117"}, {
                label: "青浦区",
                value: "310118"
            }, {label: "奉贤区", value: "310120"}, {label: "崇明区", value: "310151"}]], [[{
                label: "玄武区",
                value: "320102"
            }, {label: "秦淮区", value: "320104"}, {label: "建邺区", value: "320105"}, {
                label: "鼓楼区",
                value: "320106"
            }, {label: "浦口区", value: "320111"}, {label: "栖霞区", value: "320113"}, {
                label: "雨花台区",
                value: "320114"
            }, {label: "江宁区", value: "320115"}, {label: "六合区", value: "320116"}, {
                label: "溧水区",
                value: "320117"
            }, {label: "高淳区", value: "320118"}], [{label: "锡山区", value: "320205"}, {
                label: "惠山区",
                value: "320206"
            }, {label: "滨湖区", value: "320211"}, {label: "梁溪区", value: "320213"}, {
                label: "新吴区",
                value: "320214"
            }, {label: "江阴市", value: "320281"}, {label: "宜兴市", value: "320282"}], [{
                label: "鼓楼区",
                value: "320302"
            }, {label: "云龙区", value: "320303"}, {label: "贾汪区", value: "320305"}, {
                label: "泉山区",
                value: "320311"
            }, {label: "铜山区", value: "320312"}, {label: "丰县", value: "320321"}, {
                label: "沛县",
                value: "320322"
            }, {label: "睢宁县", value: "320324"}, {label: "徐州经济技术开发区", value: "320371"}, {
                label: "新沂市",
                value: "320381"
            }, {label: "邳州市", value: "320382"}], [{label: "天宁区", value: "320402"}, {
                label: "钟楼区",
                value: "320404"
            }, {label: "新北区", value: "320411"}, {label: "武进区", value: "320412"}, {
                label: "金坛区",
                value: "320413"
            }, {label: "溧阳市", value: "320481"}], [{label: "虎丘区", value: "320505"}, {
                label: "吴中区",
                value: "320506"
            }, {label: "相城区", value: "320507"}, {label: "姑苏区", value: "320508"}, {
                label: "吴江区",
                value: "320509"
            }, {label: "苏州工业园区", value: "320571"}, {label: "常熟市", value: "320581"}, {
                label: "张家港市",
                value: "320582"
            }, {label: "昆山市", value: "320583"}, {label: "太仓市", value: "320585"}], [{
                label: "崇川区",
                value: "320602"
            }, {label: "港闸区", value: "320611"}, {label: "通州区", value: "320612"}, {
                label: "海安县",
                value: "320621"
            }, {label: "如东县", value: "320623"}, {label: "南通经济技术开发区", value: "320671"}, {
                label: "启东市",
                value: "320681"
            }, {label: "如皋市", value: "320682"}, {label: "海门市", value: "320684"}], [{
                label: "连云区",
                value: "320703"
            }, {label: "海州区", value: "320706"}, {label: "赣榆区", value: "320707"}, {
                label: "东海县",
                value: "320722"
            }, {label: "灌云县", value: "320723"}, {label: "灌南县", value: "320724"}, {
                label: "连云港经济技术开发区",
                value: "320771"
            }, {label: "连云港高新技术产业开发区", value: "320772"}], [{label: "淮安区", value: "320803"}, {
                label: "淮阴区",
                value: "320804"
            }, {label: "清江浦区", value: "320812"}, {label: "洪泽区", value: "320813"}, {
                label: "涟水县",
                value: "320826"
            }, {label: "盱眙县", value: "320830"}, {label: "金湖县", value: "320831"}, {
                label: "淮安经济技术开发区",
                value: "320871"
            }], [{label: "亭湖区", value: "320902"}, {label: "盐都区", value: "320903"}, {
                label: "大丰区",
                value: "320904"
            }, {label: "响水县", value: "320921"}, {label: "滨海县", value: "320922"}, {
                label: "阜宁县",
                value: "320923"
            }, {label: "射阳县", value: "320924"}, {label: "建湖县", value: "320925"}, {
                label: "盐城经济技术开发区",
                value: "320971"
            }, {label: "东台市", value: "320981"}], [{label: "广陵区", value: "321002"}, {
                label: "邗江区",
                value: "321003"
            }, {label: "江都区", value: "321012"}, {label: "宝应县", value: "321023"}, {
                label: "扬州经济技术开发区",
                value: "321071"
            }, {label: "仪征市", value: "321081"}, {label: "高邮市", value: "321084"}], [{
                label: "京口区",
                value: "321102"
            }, {label: "润州区", value: "321111"}, {label: "丹徒区", value: "321112"}, {
                label: "镇江新区",
                value: "321171"
            }, {label: "丹阳市", value: "321181"}, {label: "扬中市", value: "321182"}, {
                label: "句容市",
                value: "321183"
            }], [{label: "海陵区", value: "321202"}, {label: "高港区", value: "321203"}, {
                label: "姜堰区",
                value: "321204"
            }, {label: "泰州医药高新技术产业开发区", value: "321271"}, {label: "兴化市", value: "321281"}, {
                label: "靖江市",
                value: "321282"
            }, {label: "泰兴市", value: "321283"}], [{label: "宿城区", value: "321302"}, {
                label: "宿豫区",
                value: "321311"
            }, {label: "沭阳县", value: "321322"}, {label: "泗阳县", value: "321323"}, {
                label: "泗洪县",
                value: "321324"
            }, {label: "宿迁经济技术开发区", value: "321371"}]], [[{label: "上城区", value: "330102"}, {
                label: "下城区",
                value: "330103"
            }, {label: "江干区", value: "330104"}, {label: "拱墅区", value: "330105"}, {
                label: "西湖区",
                value: "330106"
            }, {label: "滨江区", value: "330108"}, {label: "萧山区", value: "330109"}, {
                label: "余杭区",
                value: "330110"
            }, {label: "富阳区", value: "330111"}, {label: "临安区", value: "330112"}, {
                label: "桐庐县",
                value: "330122"
            }, {label: "淳安县", value: "330127"}, {label: "建德市", value: "330182"}], [{
                label: "海曙区",
                value: "330203"
            }, {label: "江北区", value: "330205"}, {label: "北仑区", value: "330206"}, {
                label: "镇海区",
                value: "330211"
            }, {label: "鄞州区", value: "330212"}, {label: "奉化区", value: "330213"}, {
                label: "象山县",
                value: "330225"
            }, {label: "宁海县", value: "330226"}, {label: "余姚市", value: "330281"}, {
                label: "慈溪市",
                value: "330282"
            }], [{label: "鹿城区", value: "330302"}, {label: "龙湾区", value: "330303"}, {
                label: "瓯海区",
                value: "330304"
            }, {label: "洞头区", value: "330305"}, {label: "永嘉县", value: "330324"}, {
                label: "平阳县",
                value: "330326"
            }, {label: "苍南县", value: "330327"}, {label: "文成县", value: "330328"}, {
                label: "泰顺县",
                value: "330329"
            }, {label: "温州经济技术开发区", value: "330371"}, {label: "瑞安市", value: "330381"}, {
                label: "乐清市",
                value: "330382"
            }], [{label: "南湖区", value: "330402"}, {label: "秀洲区", value: "330411"}, {
                label: "嘉善县",
                value: "330421"
            }, {label: "海盐县", value: "330424"}, {label: "海宁市", value: "330481"}, {
                label: "平湖市",
                value: "330482"
            }, {label: "桐乡市", value: "330483"}], [{label: "吴兴区", value: "330502"}, {
                label: "南浔区",
                value: "330503"
            }, {label: "德清县", value: "330521"}, {label: "长兴县", value: "330522"}, {
                label: "安吉县",
                value: "330523"
            }], [{label: "越城区", value: "330602"}, {label: "柯桥区", value: "330603"}, {
                label: "上虞区",
                value: "330604"
            }, {label: "新昌县", value: "330624"}, {label: "诸暨市", value: "330681"}, {
                label: "嵊州市",
                value: "330683"
            }], [{label: "婺城区", value: "330702"}, {label: "金东区", value: "330703"}, {
                label: "武义县",
                value: "330723"
            }, {label: "浦江县", value: "330726"}, {label: "磐安县", value: "330727"}, {
                label: "兰溪市",
                value: "330781"
            }, {label: "义乌市", value: "330782"}, {label: "东阳市", value: "330783"}, {
                label: "永康市",
                value: "330784"
            }], [{label: "柯城区", value: "330802"}, {label: "衢江区", value: "330803"}, {
                label: "常山县",
                value: "330822"
            }, {label: "开化县", value: "330824"}, {label: "龙游县", value: "330825"}, {
                label: "江山市",
                value: "330881"
            }], [{label: "定海区", value: "330902"}, {label: "普陀区", value: "330903"}, {
                label: "岱山县",
                value: "330921"
            }, {label: "嵊泗县", value: "330922"}], [{label: "椒江区", value: "331002"}, {
                label: "黄岩区",
                value: "331003"
            }, {label: "路桥区", value: "331004"}, {label: "三门县", value: "331022"}, {
                label: "天台县",
                value: "331023"
            }, {label: "仙居县", value: "331024"}, {label: "温岭市", value: "331081"}, {
                label: "临海市",
                value: "331082"
            }, {label: "玉环市", value: "331083"}], [{label: "莲都区", value: "331102"}, {
                label: "青田县",
                value: "331121"
            }, {label: "缙云县", value: "331122"}, {label: "遂昌县", value: "331123"}, {
                label: "松阳县",
                value: "331124"
            }, {label: "云和县", value: "331125"}, {label: "庆元县", value: "331126"}, {
                label: "景宁畲族自治县",
                value: "331127"
            }, {label: "龙泉市", value: "331181"}]], [[{label: "瑶海区", value: "340102"}, {
                label: "庐阳区",
                value: "340103"
            }, {label: "蜀山区", value: "340104"}, {label: "包河区", value: "340111"}, {
                label: "长丰县",
                value: "340121"
            }, {label: "肥东县", value: "340122"}, {label: "肥西县", value: "340123"}, {
                label: "庐江县",
                value: "340124"
            }, {label: "合肥高新技术产业开发区", value: "340171"}, {label: "合肥经济技术开发区", value: "340172"}, {
                label: "合肥新站高新技术产业开发区",
                value: "340173"
            }, {label: "巢湖市", value: "340181"}], [{label: "镜湖区", value: "340202"}, {
                label: "弋江区",
                value: "340203"
            }, {label: "鸠江区", value: "340207"}, {label: "三山区", value: "340208"}, {
                label: "芜湖县",
                value: "340221"
            }, {label: "繁昌县", value: "340222"}, {label: "南陵县", value: "340223"}, {
                label: "无为县",
                value: "340225"
            }, {label: "芜湖经济技术开发区", value: "340271"}, {label: "安徽芜湖长江大桥经济开发区", value: "340272"}], [{
                label: "龙子湖区",
                value: "340302"
            }, {label: "蚌山区", value: "340303"}, {label: "禹会区", value: "340304"}, {
                label: "淮上区",
                value: "340311"
            }, {label: "怀远县", value: "340321"}, {label: "五河县", value: "340322"}, {
                label: "固镇县",
                value: "340323"
            }, {label: "蚌埠市高新技术开发区", value: "340371"}, {label: "蚌埠市经济开发区", value: "340372"}], [{
                label: "大通区",
                value: "340402"
            }, {label: "田家庵区", value: "340403"}, {label: "谢家集区", value: "340404"}, {
                label: "八公山区",
                value: "340405"
            }, {label: "潘集区", value: "340406"}, {label: "凤台县", value: "340421"}, {
                label: "寿县",
                value: "340422"
            }], [{label: "花山区", value: "340503"}, {label: "雨山区", value: "340504"}, {
                label: "博望区",
                value: "340506"
            }, {label: "当涂县", value: "340521"}, {label: "含山县", value: "340522"}, {
                label: "和县",
                value: "340523"
            }], [{label: "杜集区", value: "340602"}, {label: "相山区", value: "340603"}, {
                label: "烈山区",
                value: "340604"
            }, {label: "濉溪县", value: "340621"}], [{label: "铜官区", value: "340705"}, {
                label: "义安区",
                value: "340706"
            }, {label: "郊区", value: "340711"}, {label: "枞阳县", value: "340722"}], [{
                label: "迎江区",
                value: "340802"
            }, {label: "大观区", value: "340803"}, {label: "宜秀区", value: "340811"}, {
                label: "怀宁县",
                value: "340822"
            }, {label: "潜山县", value: "340824"}, {label: "太湖县", value: "340825"}, {
                label: "宿松县",
                value: "340826"
            }, {label: "望江县", value: "340827"}, {label: "岳西县", value: "340828"}, {
                label: "安徽安庆经济开发区",
                value: "340871"
            }, {label: "桐城市", value: "340881"}], [{label: "屯溪区", value: "341002"}, {
                label: "黄山区",
                value: "341003"
            }, {label: "徽州区", value: "341004"}, {label: "歙县", value: "341021"}, {
                label: "休宁县",
                value: "341022"
            }, {label: "黟县", value: "341023"}, {label: "祁门县", value: "341024"}], [{
                label: "琅琊区",
                value: "341102"
            }, {label: "南谯区", value: "341103"}, {label: "来安县", value: "341122"}, {
                label: "全椒县",
                value: "341124"
            }, {label: "定远县", value: "341125"}, {label: "凤阳县", value: "341126"}, {
                label: "苏滁现代产业园",
                value: "341171"
            }, {label: "滁州经济技术开发区", value: "341172"}, {label: "天长市", value: "341181"}, {
                label: "明光市",
                value: "341182"
            }], [{label: "颍州区", value: "341202"}, {label: "颍东区", value: "341203"}, {
                label: "颍泉区",
                value: "341204"
            }, {label: "临泉县", value: "341221"}, {label: "太和县", value: "341222"}, {
                label: "阜南县",
                value: "341225"
            }, {label: "颍上县", value: "341226"}, {label: "阜阳合肥现代产业园区", value: "341271"}, {
                label: "阜阳经济技术开发区",
                value: "341272"
            }, {label: "界首市", value: "341282"}], [{label: "埇桥区", value: "341302"}, {
                label: "砀山县",
                value: "341321"
            }, {label: "萧县", value: "341322"}, {label: "灵璧县", value: "341323"}, {
                label: "泗县",
                value: "341324"
            }, {label: "宿州马鞍山现代产业园区", value: "341371"}, {label: "宿州经济技术开发区", value: "341372"}], [{
                label: "金安区",
                value: "341502"
            }, {label: "裕安区", value: "341503"}, {label: "叶集区", value: "341504"}, {
                label: "霍邱县",
                value: "341522"
            }, {label: "舒城县", value: "341523"}, {label: "金寨县", value: "341524"}, {
                label: "霍山县",
                value: "341525"
            }], [{label: "谯城区", value: "341602"}, {label: "涡阳县", value: "341621"}, {
                label: "蒙城县",
                value: "341622"
            }, {label: "利辛县", value: "341623"}], [{label: "贵池区", value: "341702"}, {
                label: "东至县",
                value: "341721"
            }, {label: "石台县", value: "341722"}, {label: "青阳县", value: "341723"}], [{
                label: "宣州区",
                value: "341802"
            }, {label: "郎溪县", value: "341821"}, {label: "广德县", value: "341822"}, {
                label: "泾县",
                value: "341823"
            }, {label: "绩溪县", value: "341824"}, {label: "旌德县", value: "341825"}, {
                label: "宣城市经济开发区",
                value: "341871"
            }, {label: "宁国市", value: "341881"}]], [[{label: "鼓楼区", value: "350102"}, {
                label: "台江区",
                value: "350103"
            }, {label: "仓山区", value: "350104"}, {label: "马尾区", value: "350105"}, {
                label: "晋安区",
                value: "350111"
            }, {label: "闽侯县", value: "350121"}, {label: "连江县", value: "350122"}, {
                label: "罗源县",
                value: "350123"
            }, {label: "闽清县", value: "350124"}, {label: "永泰县", value: "350125"}, {
                label: "平潭县",
                value: "350128"
            }, {label: "福清市", value: "350181"}, {label: "长乐市", value: "350182"}], [{
                label: "思明区",
                value: "350203"
            }, {label: "海沧区", value: "350205"}, {label: "湖里区", value: "350206"}, {
                label: "集美区",
                value: "350211"
            }, {label: "同安区", value: "350212"}, {label: "翔安区", value: "350213"}], [{
                label: "城厢区",
                value: "350302"
            }, {label: "涵江区", value: "350303"}, {label: "荔城区", value: "350304"}, {
                label: "秀屿区",
                value: "350305"
            }, {label: "仙游县", value: "350322"}], [{label: "梅列区", value: "350402"}, {
                label: "三元区",
                value: "350403"
            }, {label: "明溪县", value: "350421"}, {label: "清流县", value: "350423"}, {
                label: "宁化县",
                value: "350424"
            }, {label: "大田县", value: "350425"}, {label: "尤溪县", value: "350426"}, {
                label: "沙县",
                value: "350427"
            }, {label: "将乐县", value: "350428"}, {label: "泰宁县", value: "350429"}, {
                label: "建宁县",
                value: "350430"
            }, {label: "永安市", value: "350481"}], [{label: "鲤城区", value: "350502"}, {
                label: "丰泽区",
                value: "350503"
            }, {label: "洛江区", value: "350504"}, {label: "泉港区", value: "350505"}, {
                label: "惠安县",
                value: "350521"
            }, {label: "安溪县", value: "350524"}, {label: "永春县", value: "350525"}, {
                label: "德化县",
                value: "350526"
            }, {label: "金门县", value: "350527"}, {label: "石狮市", value: "350581"}, {
                label: "晋江市",
                value: "350582"
            }, {label: "南安市", value: "350583"}], [{label: "芗城区", value: "350602"}, {
                label: "龙文区",
                value: "350603"
            }, {label: "云霄县", value: "350622"}, {label: "漳浦县", value: "350623"}, {
                label: "诏安县",
                value: "350624"
            }, {label: "长泰县", value: "350625"}, {label: "东山县", value: "350626"}, {
                label: "南靖县",
                value: "350627"
            }, {label: "平和县", value: "350628"}, {label: "华安县", value: "350629"}, {
                label: "龙海市",
                value: "350681"
            }], [{label: "延平区", value: "350702"}, {label: "建阳区", value: "350703"}, {
                label: "顺昌县",
                value: "350721"
            }, {label: "浦城县", value: "350722"}, {label: "光泽县", value: "350723"}, {
                label: "松溪县",
                value: "350724"
            }, {label: "政和县", value: "350725"}, {label: "邵武市", value: "350781"}, {
                label: "武夷山市",
                value: "350782"
            }, {label: "建瓯市", value: "350783"}], [{label: "新罗区", value: "350802"}, {
                label: "永定区",
                value: "350803"
            }, {label: "长汀县", value: "350821"}, {label: "上杭县", value: "350823"}, {
                label: "武平县",
                value: "350824"
            }, {label: "连城县", value: "350825"}, {label: "漳平市", value: "350881"}], [{
                label: "蕉城区",
                value: "350902"
            }, {label: "霞浦县", value: "350921"}, {label: "古田县", value: "350922"}, {
                label: "屏南县",
                value: "350923"
            }, {label: "寿宁县", value: "350924"}, {label: "周宁县", value: "350925"}, {
                label: "柘荣县",
                value: "350926"
            }, {label: "福安市", value: "350981"}, {label: "福鼎市", value: "350982"}]], [[{
                label: "东湖区",
                value: "360102"
            }, {label: "西湖区", value: "360103"}, {label: "青云谱区", value: "360104"}, {
                label: "湾里区",
                value: "360105"
            }, {label: "青山湖区", value: "360111"}, {label: "新建区", value: "360112"}, {
                label: "南昌县",
                value: "360121"
            }, {label: "安义县", value: "360123"}, {label: "进贤县", value: "360124"}], [{
                label: "昌江区",
                value: "360202"
            }, {label: "珠山区", value: "360203"}, {label: "浮梁县", value: "360222"}, {
                label: "乐平市",
                value: "360281"
            }], [{label: "安源区", value: "360302"}, {label: "湘东区", value: "360313"}, {
                label: "莲花县",
                value: "360321"
            }, {label: "上栗县", value: "360322"}, {label: "芦溪县", value: "360323"}], [{
                label: "濂溪区",
                value: "360402"
            }, {label: "浔阳区", value: "360403"}, {label: "柴桑区", value: "360404"}, {
                label: "武宁县",
                value: "360423"
            }, {label: "修水县", value: "360424"}, {label: "永修县", value: "360425"}, {
                label: "德安县",
                value: "360426"
            }, {label: "都昌县", value: "360428"}, {label: "湖口县", value: "360429"}, {
                label: "彭泽县",
                value: "360430"
            }, {label: "瑞昌市", value: "360481"}, {label: "共青城市", value: "360482"}, {
                label: "庐山市",
                value: "360483"
            }], [{label: "渝水区", value: "360502"}, {label: "分宜县", value: "360521"}], [{
                label: "月湖区",
                value: "360602"
            }, {label: "余江县", value: "360622"}, {label: "贵溪市", value: "360681"}], [{
                label: "章贡区",
                value: "360702"
            }, {label: "南康区", value: "360703"}, {label: "赣县区", value: "360704"}, {
                label: "信丰县",
                value: "360722"
            }, {label: "大余县", value: "360723"}, {label: "上犹县", value: "360724"}, {
                label: "崇义县",
                value: "360725"
            }, {label: "安远县", value: "360726"}, {label: "龙南县", value: "360727"}, {
                label: "定南县",
                value: "360728"
            }, {label: "全南县", value: "360729"}, {label: "宁都县", value: "360730"}, {
                label: "于都县",
                value: "360731"
            }, {label: "兴国县", value: "360732"}, {label: "会昌县", value: "360733"}, {
                label: "寻乌县",
                value: "360734"
            }, {label: "石城县", value: "360735"}, {label: "瑞金市", value: "360781"}], [{
                label: "吉州区",
                value: "360802"
            }, {label: "青原区", value: "360803"}, {label: "吉安县", value: "360821"}, {
                label: "吉水县",
                value: "360822"
            }, {label: "峡江县", value: "360823"}, {label: "新干县", value: "360824"}, {
                label: "永丰县",
                value: "360825"
            }, {label: "泰和县", value: "360826"}, {label: "遂川县", value: "360827"}, {
                label: "万安县",
                value: "360828"
            }, {label: "安福县", value: "360829"}, {label: "永新县", value: "360830"}, {
                label: "井冈山市",
                value: "360881"
            }], [{label: "袁州区", value: "360902"}, {label: "奉新县", value: "360921"}, {
                label: "万载县",
                value: "360922"
            }, {label: "上高县", value: "360923"}, {label: "宜丰县", value: "360924"}, {
                label: "靖安县",
                value: "360925"
            }, {label: "铜鼓县", value: "360926"}, {label: "丰城市", value: "360981"}, {
                label: "樟树市",
                value: "360982"
            }, {label: "高安市", value: "360983"}], [{label: "临川区", value: "361002"}, {
                label: "东乡区",
                value: "361003"
            }, {label: "南城县", value: "361021"}, {label: "黎川县", value: "361022"}, {
                label: "南丰县",
                value: "361023"
            }, {label: "崇仁县", value: "361024"}, {label: "乐安县", value: "361025"}, {
                label: "宜黄县",
                value: "361026"
            }, {label: "金溪县", value: "361027"}, {label: "资溪县", value: "361028"}, {
                label: "广昌县",
                value: "361030"
            }], [{label: "信州区", value: "361102"}, {label: "广丰区", value: "361103"}, {
                label: "上饶县",
                value: "361121"
            }, {label: "玉山县", value: "361123"}, {label: "铅山县", value: "361124"}, {
                label: "横峰县",
                value: "361125"
            }, {label: "弋阳县", value: "361126"}, {label: "余干县", value: "361127"}, {
                label: "鄱阳县",
                value: "361128"
            }, {label: "万年县", value: "361129"}, {label: "婺源县", value: "361130"}, {
                label: "德兴市",
                value: "361181"
            }]], [[{label: "历下区", value: "370102"}, {label: "市中区", value: "370103"}, {
                label: "槐荫区",
                value: "370104"
            }, {label: "天桥区", value: "370105"}, {label: "历城区", value: "370112"}, {
                label: "长清区",
                value: "370113"
            }, {label: "章丘区", value: "370114"}, {label: "平阴县", value: "370124"}, {
                label: "济阳县",
                value: "370125"
            }, {label: "商河县", value: "370126"}, {label: "济南高新技术产业开发区", value: "370171"}], [{
                label: "市南区",
                value: "370202"
            }, {label: "市北区", value: "370203"}, {label: "黄岛区", value: "370211"}, {
                label: "崂山区",
                value: "370212"
            }, {label: "李沧区", value: "370213"}, {label: "城阳区", value: "370214"}, {
                label: "即墨区",
                value: "370215"
            }, {label: "青岛高新技术产业开发区", value: "370271"}, {label: "胶州市", value: "370281"}, {
                label: "平度市",
                value: "370283"
            }, {label: "莱西市", value: "370285"}], [{label: "淄川区", value: "370302"}, {
                label: "张店区",
                value: "370303"
            }, {label: "博山区", value: "370304"}, {label: "临淄区", value: "370305"}, {
                label: "周村区",
                value: "370306"
            }, {label: "桓台县", value: "370321"}, {label: "高青县", value: "370322"}, {
                label: "沂源县",
                value: "370323"
            }], [{label: "市中区", value: "370402"}, {label: "薛城区", value: "370403"}, {
                label: "峄城区",
                value: "370404"
            }, {label: "台儿庄区", value: "370405"}, {label: "山亭区", value: "370406"}, {
                label: "滕州市",
                value: "370481"
            }], [{label: "东营区", value: "370502"}, {label: "河口区", value: "370503"}, {
                label: "垦利区",
                value: "370505"
            }, {label: "利津县", value: "370522"}, {label: "广饶县", value: "370523"}, {
                label: "东营经济技术开发区",
                value: "370571"
            }, {label: "东营港经济开发区", value: "370572"}], [{label: "芝罘区", value: "370602"}, {
                label: "福山区",
                value: "370611"
            }, {label: "牟平区", value: "370612"}, {label: "莱山区", value: "370613"}, {
                label: "长岛县",
                value: "370634"
            }, {label: "烟台高新技术产业开发区", value: "370671"}, {label: "烟台经济技术开发区", value: "370672"}, {
                label: "龙口市",
                value: "370681"
            }, {label: "莱阳市", value: "370682"}, {label: "莱州市", value: "370683"}, {
                label: "蓬莱市",
                value: "370684"
            }, {label: "招远市", value: "370685"}, {label: "栖霞市", value: "370686"}, {
                label: "海阳市",
                value: "370687"
            }], [{label: "潍城区", value: "370702"}, {label: "寒亭区", value: "370703"}, {
                label: "坊子区",
                value: "370704"
            }, {label: "奎文区", value: "370705"}, {label: "临朐县", value: "370724"}, {
                label: "昌乐县",
                value: "370725"
            }, {label: "潍坊滨海经济技术开发区", value: "370772"}, {label: "青州市", value: "370781"}, {
                label: "诸城市",
                value: "370782"
            }, {label: "寿光市", value: "370783"}, {label: "安丘市", value: "370784"}, {
                label: "高密市",
                value: "370785"
            }, {label: "昌邑市", value: "370786"}], [{label: "任城区", value: "370811"}, {
                label: "兖州区",
                value: "370812"
            }, {label: "微山县", value: "370826"}, {label: "鱼台县", value: "370827"}, {
                label: "金乡县",
                value: "370828"
            }, {label: "嘉祥县", value: "370829"}, {label: "汶上县", value: "370830"}, {
                label: "泗水县",
                value: "370831"
            }, {label: "梁山县", value: "370832"}, {label: "济宁高新技术产业开发区", value: "370871"}, {
                label: "曲阜市",
                value: "370881"
            }, {label: "邹城市", value: "370883"}], [{label: "泰山区", value: "370902"}, {
                label: "岱岳区",
                value: "370911"
            }, {label: "宁阳县", value: "370921"}, {label: "东平县", value: "370923"}, {
                label: "新泰市",
                value: "370982"
            }, {label: "肥城市", value: "370983"}], [{label: "环翠区", value: "371002"}, {
                label: "文登区",
                value: "371003"
            }, {label: "威海火炬高技术产业开发区", value: "371071"}, {label: "威海经济技术开发区", value: "371072"}, {
                label: "威海临港经济技术开发区",
                value: "371073"
            }, {label: "荣成市", value: "371082"}, {label: "乳山市", value: "371083"}], [{
                label: "东港区",
                value: "371102"
            }, {label: "岚山区", value: "371103"}, {label: "五莲县", value: "371121"}, {
                label: "莒县",
                value: "371122"
            }, {label: "日照经济技术开发区", value: "371171"}, {label: "日照国际海洋城", value: "371172"}], [{
                label: "莱城区",
                value: "371202"
            }, {label: "钢城区", value: "371203"}], [{label: "兰山区", value: "371302"}, {
                label: "罗庄区",
                value: "371311"
            }, {label: "河东区", value: "371312"}, {label: "沂南县", value: "371321"}, {
                label: "郯城县",
                value: "371322"
            }, {label: "沂水县", value: "371323"}, {label: "兰陵县", value: "371324"}, {
                label: "费县",
                value: "371325"
            }, {label: "平邑县", value: "371326"}, {label: "莒南县", value: "371327"}, {
                label: "蒙阴县",
                value: "371328"
            }, {label: "临沭县", value: "371329"}, {label: "临沂高新技术产业开发区", value: "371371"}, {
                label: "临沂经济技术开发区",
                value: "371372"
            }, {label: "临沂临港经济开发区", value: "371373"}], [{label: "德城区", value: "371402"}, {
                label: "陵城区",
                value: "371403"
            }, {label: "宁津县", value: "371422"}, {label: "庆云县", value: "371423"}, {
                label: "临邑县",
                value: "371424"
            }, {label: "齐河县", value: "371425"}, {label: "平原县", value: "371426"}, {
                label: "夏津县",
                value: "371427"
            }, {label: "武城县", value: "371428"}, {label: "德州经济技术开发区", value: "371471"}, {
                label: "德州运河经济开发区",
                value: "371472"
            }, {label: "乐陵市", value: "371481"}, {label: "禹城市", value: "371482"}], [{
                label: "东昌府区",
                value: "371502"
            }, {label: "阳谷县", value: "371521"}, {label: "莘县", value: "371522"}, {
                label: "茌平县",
                value: "371523"
            }, {label: "东阿县", value: "371524"}, {label: "冠县", value: "371525"}, {
                label: "高唐县",
                value: "371526"
            }, {label: "临清市", value: "371581"}], [{label: "滨城区", value: "371602"}, {
                label: "沾化区",
                value: "371603"
            }, {label: "惠民县", value: "371621"}, {label: "阳信县", value: "371622"}, {
                label: "无棣县",
                value: "371623"
            }, {label: "博兴县", value: "371625"}, {label: "邹平县", value: "371626"}], [{
                label: "牡丹区",
                value: "371702"
            }, {label: "定陶区", value: "371703"}, {label: "曹县", value: "371721"}, {
                label: "单县",
                value: "371722"
            }, {label: "成武县", value: "371723"}, {label: "巨野县", value: "371724"}, {
                label: "郓城县",
                value: "371725"
            }, {label: "鄄城县", value: "371726"}, {label: "东明县", value: "371728"}, {
                label: "菏泽经济技术开发区",
                value: "371771"
            }, {label: "菏泽高新技术开发区", value: "371772"}]], [[{label: "中原区", value: "410102"}, {
                label: "二七区",
                value: "410103"
            }, {label: "管城回族区", value: "410104"}, {label: "金水区", value: "410105"}, {
                label: "上街区",
                value: "410106"
            }, {label: "惠济区", value: "410108"}, {label: "中牟县", value: "410122"}, {
                label: "郑州经济技术开发区",
                value: "410171"
            }, {label: "郑州高新技术产业开发区", value: "410172"}, {label: "郑州航空港经济综合实验区", value: "410173"}, {
                label: "巩义市",
                value: "410181"
            }, {label: "荥阳市", value: "410182"}, {label: "新密市", value: "410183"}, {
                label: "新郑市",
                value: "410184"
            }, {label: "登封市", value: "410185"}], [{label: "龙亭区", value: "410202"}, {
                label: "顺河回族区",
                value: "410203"
            }, {label: "鼓楼区", value: "410204"}, {label: "禹王台区", value: "410205"}, {
                label: "祥符区",
                value: "410212"
            }, {label: "杞县", value: "410221"}, {label: "通许县", value: "410222"}, {
                label: "尉氏县",
                value: "410223"
            }, {label: "兰考县", value: "410225"}], [{label: "老城区", value: "410302"}, {
                label: "西工区",
                value: "410303"
            }, {label: "瀍河回族区", value: "410304"}, {label: "涧西区", value: "410305"}, {
                label: "吉利区",
                value: "410306"
            }, {label: "洛龙区", value: "410311"}, {label: "孟津县", value: "410322"}, {
                label: "新安县",
                value: "410323"
            }, {label: "栾川县", value: "410324"}, {label: "嵩县", value: "410325"}, {
                label: "汝阳县",
                value: "410326"
            }, {label: "宜阳县", value: "410327"}, {label: "洛宁县", value: "410328"}, {
                label: "伊川县",
                value: "410329"
            }, {label: "洛阳高新技术产业开发区", value: "410371"}, {label: "偃师市", value: "410381"}], [{
                label: "新华区",
                value: "410402"
            }, {label: "卫东区", value: "410403"}, {label: "石龙区", value: "410404"}, {
                label: "湛河区",
                value: "410411"
            }, {label: "宝丰县", value: "410421"}, {label: "叶县", value: "410422"}, {
                label: "鲁山县",
                value: "410423"
            }, {label: "郏县", value: "410425"}, {label: "平顶山高新技术产业开发区", value: "410471"}, {
                label: "平顶山市新城区",
                value: "410472"
            }, {label: "舞钢市", value: "410481"}, {label: "汝州市", value: "410482"}], [{
                label: "文峰区",
                value: "410502"
            }, {label: "北关区", value: "410503"}, {label: "殷都区", value: "410505"}, {
                label: "龙安区",
                value: "410506"
            }, {label: "安阳县", value: "410522"}, {label: "汤阴县", value: "410523"}, {
                label: "滑县",
                value: "410526"
            }, {label: "内黄县", value: "410527"}, {label: "安阳高新技术产业开发区", value: "410571"}, {
                label: "林州市",
                value: "410581"
            }], [{label: "鹤山区", value: "410602"}, {label: "山城区", value: "410603"}, {
                label: "淇滨区",
                value: "410611"
            }, {label: "浚县", value: "410621"}, {label: "淇县", value: "410622"}, {
                label: "鹤壁经济技术开发区",
                value: "410671"
            }], [{label: "红旗区", value: "410702"}, {label: "卫滨区", value: "410703"}, {
                label: "凤泉区",
                value: "410704"
            }, {label: "牧野区", value: "410711"}, {label: "新乡县", value: "410721"}, {
                label: "获嘉县",
                value: "410724"
            }, {label: "原阳县", value: "410725"}, {label: "延津县", value: "410726"}, {
                label: "封丘县",
                value: "410727"
            }, {label: "长垣县", value: "410728"}, {label: "新乡高新技术产业开发区", value: "410771"}, {
                label: "新乡经济技术开发区",
                value: "410772"
            }, {label: "新乡市平原城乡一体化示范区", value: "410773"}, {label: "卫辉市", value: "410781"}, {
                label: "辉县市",
                value: "410782"
            }], [{label: "解放区", value: "410802"}, {label: "中站区", value: "410803"}, {
                label: "马村区",
                value: "410804"
            }, {label: "山阳区", value: "410811"}, {label: "修武县", value: "410821"}, {
                label: "博爱县",
                value: "410822"
            }, {label: "武陟县", value: "410823"}, {label: "温县", value: "410825"}, {
                label: "焦作城乡一体化示范区",
                value: "410871"
            }, {label: "沁阳市", value: "410882"}, {label: "孟州市", value: "410883"}], [{
                label: "华龙区",
                value: "410902"
            }, {label: "清丰县", value: "410922"}, {label: "南乐县", value: "410923"}, {
                label: "范县",
                value: "410926"
            }, {label: "台前县", value: "410927"}, {label: "濮阳县", value: "410928"}, {
                label: "河南濮阳工业园区",
                value: "410971"
            }, {label: "濮阳经济技术开发区", value: "410972"}], [{label: "魏都区", value: "411002"}, {
                label: "建安区",
                value: "411003"
            }, {label: "鄢陵县", value: "411024"}, {label: "襄城县", value: "411025"}, {
                label: "许昌经济技术开发区",
                value: "411071"
            }, {label: "禹州市", value: "411081"}, {label: "长葛市", value: "411082"}], [{
                label: "源汇区",
                value: "411102"
            }, {label: "郾城区", value: "411103"}, {label: "召陵区", value: "411104"}, {
                label: "舞阳县",
                value: "411121"
            }, {label: "临颍县", value: "411122"}, {label: "漯河经济技术开发区", value: "411171"}], [{
                label: "湖滨区",
                value: "411202"
            }, {label: "陕州区", value: "411203"}, {label: "渑池县", value: "411221"}, {
                label: "卢氏县",
                value: "411224"
            }, {label: "河南三门峡经济开发区", value: "411271"}, {label: "义马市", value: "411281"}, {
                label: "灵宝市",
                value: "411282"
            }], [{label: "宛城区", value: "411302"}, {label: "卧龙区", value: "411303"}, {
                label: "南召县",
                value: "411321"
            }, {label: "方城县", value: "411322"}, {label: "西峡县", value: "411323"}, {
                label: "镇平县",
                value: "411324"
            }, {label: "内乡县", value: "411325"}, {label: "淅川县", value: "411326"}, {
                label: "社旗县",
                value: "411327"
            }, {label: "唐河县", value: "411328"}, {label: "新野县", value: "411329"}, {
                label: "桐柏县",
                value: "411330"
            }, {label: "南阳高新技术产业开发区", value: "411371"}, {label: "南阳市城乡一体化示范区", value: "411372"}, {
                label: "邓州市",
                value: "411381"
            }], [{label: "梁园区", value: "411402"}, {label: "睢阳区", value: "411403"}, {
                label: "民权县",
                value: "411421"
            }, {label: "睢县", value: "411422"}, {label: "宁陵县", value: "411423"}, {
                label: "柘城县",
                value: "411424"
            }, {label: "虞城县", value: "411425"}, {label: "夏邑县", value: "411426"}, {
                label: "豫东综合物流产业聚集区",
                value: "411471"
            }, {label: "河南商丘经济开发区", value: "411472"}, {label: "永城市", value: "411481"}], [{
                label: "浉河区",
                value: "411502"
            }, {label: "平桥区", value: "411503"}, {label: "罗山县", value: "411521"}, {
                label: "光山县",
                value: "411522"
            }, {label: "新县", value: "411523"}, {label: "商城县", value: "411524"}, {
                label: "固始县",
                value: "411525"
            }, {label: "潢川县", value: "411526"}, {label: "淮滨县", value: "411527"}, {
                label: "息县",
                value: "411528"
            }, {label: "信阳高新技术产业开发区", value: "411571"}], [{label: "川汇区", value: "411602"}, {
                label: "扶沟县",
                value: "411621"
            }, {label: "西华县", value: "411622"}, {label: "商水县", value: "411623"}, {
                label: "沈丘县",
                value: "411624"
            }, {label: "郸城县", value: "411625"}, {label: "淮阳县", value: "411626"}, {
                label: "太康县",
                value: "411627"
            }, {label: "鹿邑县", value: "411628"}, {label: "河南周口经济开发区", value: "411671"}, {
                label: "项城市",
                value: "411681"
            }], [{label: "驿城区", value: "411702"}, {label: "西平县", value: "411721"}, {
                label: "上蔡县",
                value: "411722"
            }, {label: "平舆县", value: "411723"}, {label: "正阳县", value: "411724"}, {
                label: "确山县",
                value: "411725"
            }, {label: "泌阳县", value: "411726"}, {label: "汝南县", value: "411727"}, {
                label: "遂平县",
                value: "411728"
            }, {label: "新蔡县", value: "411729"}, {label: "河南驻马店经济开发区", value: "411771"}], [{
                label: "济源市",
                value: "419001"
            }]], [[{label: "江岸区", value: "420102"}, {label: "江汉区", value: "420103"}, {
                label: "硚口区",
                value: "420104"
            }, {label: "汉阳区", value: "420105"}, {label: "武昌区", value: "420106"}, {
                label: "青山区",
                value: "420107"
            }, {label: "洪山区", value: "420111"}, {label: "东西湖区", value: "420112"}, {
                label: "汉南区",
                value: "420113"
            }, {label: "蔡甸区", value: "420114"}, {label: "江夏区", value: "420115"}, {
                label: "黄陂区",
                value: "420116"
            }, {label: "新洲区", value: "420117"}], [{label: "黄石港区", value: "420202"}, {
                label: "西塞山区",
                value: "420203"
            }, {label: "下陆区", value: "420204"}, {label: "铁山区", value: "420205"}, {
                label: "阳新县",
                value: "420222"
            }, {label: "大冶市", value: "420281"}], [{label: "茅箭区", value: "420302"}, {
                label: "张湾区",
                value: "420303"
            }, {label: "郧阳区", value: "420304"}, {label: "郧西县", value: "420322"}, {
                label: "竹山县",
                value: "420323"
            }, {label: "竹溪县", value: "420324"}, {label: "房县", value: "420325"}, {
                label: "丹江口市",
                value: "420381"
            }], [{label: "西陵区", value: "420502"}, {label: "伍家岗区", value: "420503"}, {
                label: "点军区",
                value: "420504"
            }, {label: "猇亭区", value: "420505"}, {label: "夷陵区", value: "420506"}, {
                label: "远安县",
                value: "420525"
            }, {label: "兴山县", value: "420526"}, {label: "秭归县", value: "420527"}, {
                label: "长阳土家族自治县",
                value: "420528"
            }, {label: "五峰土家族自治县", value: "420529"}, {label: "宜都市", value: "420581"}, {
                label: "当阳市",
                value: "420582"
            }, {label: "枝江市", value: "420583"}], [{label: "襄城区", value: "420602"}, {
                label: "樊城区",
                value: "420606"
            }, {label: "襄州区", value: "420607"}, {label: "南漳县", value: "420624"}, {
                label: "谷城县",
                value: "420625"
            }, {label: "保康县", value: "420626"}, {label: "老河口市", value: "420682"}, {
                label: "枣阳市",
                value: "420683"
            }, {label: "宜城市", value: "420684"}], [{label: "梁子湖区", value: "420702"}, {
                label: "华容区",
                value: "420703"
            }, {label: "鄂城区", value: "420704"}], [{label: "东宝区", value: "420802"}, {
                label: "掇刀区",
                value: "420804"
            }, {label: "京山县", value: "420821"}, {label: "沙洋县", value: "420822"}, {
                label: "钟祥市",
                value: "420881"
            }], [{label: "孝南区", value: "420902"}, {label: "孝昌县", value: "420921"}, {
                label: "大悟县",
                value: "420922"
            }, {label: "云梦县", value: "420923"}, {label: "应城市", value: "420981"}, {
                label: "安陆市",
                value: "420982"
            }, {label: "汉川市", value: "420984"}], [{label: "沙市区", value: "421002"}, {
                label: "荆州区",
                value: "421003"
            }, {label: "公安县", value: "421022"}, {label: "监利县", value: "421023"}, {
                label: "江陵县",
                value: "421024"
            }, {label: "荆州经济技术开发区", value: "421071"}, {label: "石首市", value: "421081"}, {
                label: "洪湖市",
                value: "421083"
            }, {label: "松滋市", value: "421087"}], [{label: "黄州区", value: "421102"}, {
                label: "团风县",
                value: "421121"
            }, {label: "红安县", value: "421122"}, {label: "罗田县", value: "421123"}, {
                label: "英山县",
                value: "421124"
            }, {label: "浠水县", value: "421125"}, {label: "蕲春县", value: "421126"}, {
                label: "黄梅县",
                value: "421127"
            }, {label: "龙感湖管理区", value: "421171"}, {label: "麻城市", value: "421181"}, {
                label: "武穴市",
                value: "421182"
            }], [{label: "咸安区", value: "421202"}, {label: "嘉鱼县", value: "421221"}, {
                label: "通城县",
                value: "421222"
            }, {label: "崇阳县", value: "421223"}, {label: "通山县", value: "421224"}, {
                label: "赤壁市",
                value: "421281"
            }], [{label: "曾都区", value: "421303"}, {label: "随县", value: "421321"}, {
                label: "广水市",
                value: "421381"
            }], [{label: "恩施市", value: "422801"}, {label: "利川市", value: "422802"}, {
                label: "建始县",
                value: "422822"
            }, {label: "巴东县", value: "422823"}, {label: "宣恩县", value: "422825"}, {
                label: "咸丰县",
                value: "422826"
            }, {label: "来凤县", value: "422827"}, {label: "鹤峰县", value: "422828"}], [{
                label: "仙桃市",
                value: "429004"
            }, {label: "潜江市", value: "429005"}, {label: "天门市", value: "429006"}, {
                label: "神农架林区",
                value: "429021"
            }]], [[{label: "芙蓉区", value: "430102"}, {label: "天心区", value: "430103"}, {
                label: "岳麓区",
                value: "430104"
            }, {label: "开福区", value: "430105"}, {label: "雨花区", value: "430111"}, {
                label: "望城区",
                value: "430112"
            }, {label: "长沙县", value: "430121"}, {label: "浏阳市", value: "430181"}, {
                label: "宁乡市",
                value: "430182"
            }], [{label: "荷塘区", value: "430202"}, {label: "芦淞区", value: "430203"}, {
                label: "石峰区",
                value: "430204"
            }, {label: "天元区", value: "430211"}, {label: "株洲县", value: "430221"}, {
                label: "攸县",
                value: "430223"
            }, {label: "茶陵县", value: "430224"}, {label: "炎陵县", value: "430225"}, {
                label: "云龙示范区",
                value: "430271"
            }, {label: "醴陵市", value: "430281"}], [{label: "雨湖区", value: "430302"}, {
                label: "岳塘区",
                value: "430304"
            }, {label: "湘潭县", value: "430321"}, {label: "湖南湘潭高新技术产业园区", value: "430371"}, {
                label: "湘潭昭山示范区",
                value: "430372"
            }, {label: "湘潭九华示范区", value: "430373"}, {label: "湘乡市", value: "430381"}, {
                label: "韶山市",
                value: "430382"
            }], [{label: "珠晖区", value: "430405"}, {label: "雁峰区", value: "430406"}, {
                label: "石鼓区",
                value: "430407"
            }, {label: "蒸湘区", value: "430408"}, {label: "南岳区", value: "430412"}, {
                label: "衡阳县",
                value: "430421"
            }, {label: "衡南县", value: "430422"}, {label: "衡山县", value: "430423"}, {
                label: "衡东县",
                value: "430424"
            }, {label: "祁东县", value: "430426"}, {label: "衡阳综合保税区", value: "430471"}, {
                label: "湖南衡阳高新技术产业园区",
                value: "430472"
            }, {label: "湖南衡阳松木经济开发区", value: "430473"}, {label: "耒阳市", value: "430481"}, {
                label: "常宁市",
                value: "430482"
            }], [{label: "双清区", value: "430502"}, {label: "大祥区", value: "430503"}, {
                label: "北塔区",
                value: "430511"
            }, {label: "邵东县", value: "430521"}, {label: "新邵县", value: "430522"}, {
                label: "邵阳县",
                value: "430523"
            }, {label: "隆回县", value: "430524"}, {label: "洞口县", value: "430525"}, {
                label: "绥宁县",
                value: "430527"
            }, {label: "新宁县", value: "430528"}, {label: "城步苗族自治县", value: "430529"}, {
                label: "武冈市",
                value: "430581"
            }], [{label: "岳阳楼区", value: "430602"}, {label: "云溪区", value: "430603"}, {
                label: "君山区",
                value: "430611"
            }, {label: "岳阳县", value: "430621"}, {label: "华容县", value: "430623"}, {
                label: "湘阴县",
                value: "430624"
            }, {label: "平江县", value: "430626"}, {label: "岳阳市屈原管理区", value: "430671"}, {
                label: "汨罗市",
                value: "430681"
            }, {label: "临湘市", value: "430682"}], [{label: "武陵区", value: "430702"}, {
                label: "鼎城区",
                value: "430703"
            }, {label: "安乡县", value: "430721"}, {label: "汉寿县", value: "430722"}, {
                label: "澧县",
                value: "430723"
            }, {label: "临澧县", value: "430724"}, {label: "桃源县", value: "430725"}, {
                label: "石门县",
                value: "430726"
            }, {label: "常德市西洞庭管理区", value: "430771"}, {label: "津市市", value: "430781"}], [{
                label: "永定区",
                value: "430802"
            }, {label: "武陵源区", value: "430811"}, {label: "慈利县", value: "430821"}, {
                label: "桑植县",
                value: "430822"
            }], [{label: "资阳区", value: "430902"}, {label: "赫山区", value: "430903"}, {
                label: "南县",
                value: "430921"
            }, {label: "桃江县", value: "430922"}, {label: "安化县", value: "430923"}, {
                label: "益阳市大通湖管理区",
                value: "430971"
            }, {label: "湖南益阳高新技术产业园区", value: "430972"}, {label: "沅江市", value: "430981"}], [{
                label: "北湖区",
                value: "431002"
            }, {label: "苏仙区", value: "431003"}, {label: "桂阳县", value: "431021"}, {
                label: "宜章县",
                value: "431022"
            }, {label: "永兴县", value: "431023"}, {label: "嘉禾县", value: "431024"}, {
                label: "临武县",
                value: "431025"
            }, {label: "汝城县", value: "431026"}, {label: "桂东县", value: "431027"}, {
                label: "安仁县",
                value: "431028"
            }, {label: "资兴市", value: "431081"}], [{label: "零陵区", value: "431102"}, {
                label: "冷水滩区",
                value: "431103"
            }, {label: "祁阳县", value: "431121"}, {label: "东安县", value: "431122"}, {
                label: "双牌县",
                value: "431123"
            }, {label: "道县", value: "431124"}, {label: "江永县", value: "431125"}, {
                label: "宁远县",
                value: "431126"
            }, {label: "蓝山县", value: "431127"}, {label: "新田县", value: "431128"}, {
                label: "江华瑶族自治县",
                value: "431129"
            }, {label: "永州经济技术开发区", value: "431171"}, {label: "永州市金洞管理区", value: "431172"}, {
                label: "永州市回龙圩管理区",
                value: "431173"
            }], [{label: "鹤城区", value: "431202"}, {label: "中方县", value: "431221"}, {
                label: "沅陵县",
                value: "431222"
            }, {label: "辰溪县", value: "431223"}, {label: "溆浦县", value: "431224"}, {
                label: "会同县",
                value: "431225"
            }, {label: "麻阳苗族自治县", value: "431226"}, {label: "新晃侗族自治县", value: "431227"}, {
                label: "芷江侗族自治县",
                value: "431228"
            }, {label: "靖州苗族侗族自治县", value: "431229"}, {label: "通道侗族自治县", value: "431230"}, {
                label: "怀化市洪江管理区",
                value: "431271"
            }, {label: "洪江市", value: "431281"}], [{label: "娄星区", value: "431302"}, {
                label: "双峰县",
                value: "431321"
            }, {label: "新化县", value: "431322"}, {label: "冷水江市", value: "431381"}, {
                label: "涟源市",
                value: "431382"
            }], [{label: "吉首市", value: "433101"}, {label: "泸溪县", value: "433122"}, {
                label: "凤凰县",
                value: "433123"
            }, {label: "花垣县", value: "433124"}, {label: "保靖县", value: "433125"}, {
                label: "古丈县",
                value: "433126"
            }, {label: "永顺县", value: "433127"}, {label: "龙山县", value: "433130"}, {
                label: "湖南吉首经济开发区",
                value: "433172"
            }, {label: "湖南永顺经济开发区", value: "433173"}]], [[{label: "荔湾区", value: "440103"}, {
                label: "越秀区",
                value: "440104"
            }, {label: "海珠区", value: "440105"}, {label: "天河区", value: "440106"}, {
                label: "白云区",
                value: "440111"
            }, {label: "黄埔区", value: "440112"}, {label: "番禺区", value: "440113"}, {
                label: "花都区",
                value: "440114"
            }, {label: "南沙区", value: "440115"}, {label: "从化区", value: "440117"}, {
                label: "增城区",
                value: "440118"
            }], [{label: "武江区", value: "440203"}, {label: "浈江区", value: "440204"}, {
                label: "曲江区",
                value: "440205"
            }, {label: "始兴县", value: "440222"}, {label: "仁化县", value: "440224"}, {
                label: "翁源县",
                value: "440229"
            }, {label: "乳源瑶族自治县", value: "440232"}, {label: "新丰县", value: "440233"}, {
                label: "乐昌市",
                value: "440281"
            }, {label: "南雄市", value: "440282"}], [{label: "罗湖区", value: "440303"}, {
                label: "福田区",
                value: "440304"
            }, {label: "南山区", value: "440305"}, {label: "宝安区", value: "440306"}, {
                label: "龙岗区",
                value: "440307"
            }, {label: "盐田区", value: "440308"}, {label: "龙华区", value: "440309"}, {
                label: "坪山区",
                value: "440310"
            }], [{label: "香洲区", value: "440402"}, {label: "斗门区", value: "440403"}, {
                label: "金湾区",
                value: "440404"
            }], [{label: "龙湖区", value: "440507"}, {label: "金平区", value: "440511"}, {
                label: "濠江区",
                value: "440512"
            }, {label: "潮阳区", value: "440513"}, {label: "潮南区", value: "440514"}, {
                label: "澄海区",
                value: "440515"
            }, {label: "南澳县", value: "440523"}], [{label: "禅城区", value: "440604"}, {
                label: "南海区",
                value: "440605"
            }, {label: "顺德区", value: "440606"}, {label: "三水区", value: "440607"}, {
                label: "高明区",
                value: "440608"
            }], [{label: "蓬江区", value: "440703"}, {label: "江海区", value: "440704"}, {
                label: "新会区",
                value: "440705"
            }, {label: "台山市", value: "440781"}, {label: "开平市", value: "440783"}, {
                label: "鹤山市",
                value: "440784"
            }, {label: "恩平市", value: "440785"}], [{label: "赤坎区", value: "440802"}, {
                label: "霞山区",
                value: "440803"
            }, {label: "坡头区", value: "440804"}, {label: "麻章区", value: "440811"}, {
                label: "遂溪县",
                value: "440823"
            }, {label: "徐闻县", value: "440825"}, {label: "廉江市", value: "440881"}, {
                label: "雷州市",
                value: "440882"
            }, {label: "吴川市", value: "440883"}], [{label: "茂南区", value: "440902"}, {
                label: "电白区",
                value: "440904"
            }, {label: "高州市", value: "440981"}, {label: "化州市", value: "440982"}, {
                label: "信宜市",
                value: "440983"
            }], [{label: "端州区", value: "441202"}, {label: "鼎湖区", value: "441203"}, {
                label: "高要区",
                value: "441204"
            }, {label: "广宁县", value: "441223"}, {label: "怀集县", value: "441224"}, {
                label: "封开县",
                value: "441225"
            }, {label: "德庆县", value: "441226"}, {label: "四会市", value: "441284"}], [{
                label: "惠城区",
                value: "441302"
            }, {label: "惠阳区", value: "441303"}, {label: "博罗县", value: "441322"}, {
                label: "惠东县",
                value: "441323"
            }, {label: "龙门县", value: "441324"}], [{label: "梅江区", value: "441402"}, {
                label: "梅县区",
                value: "441403"
            }, {label: "大埔县", value: "441422"}, {label: "丰顺县", value: "441423"}, {
                label: "五华县",
                value: "441424"
            }, {label: "平远县", value: "441426"}, {label: "蕉岭县", value: "441427"}, {
                label: "兴宁市",
                value: "441481"
            }], [{label: "城区", value: "441502"}, {label: "海丰县", value: "441521"}, {
                label: "陆河县",
                value: "441523"
            }, {label: "陆丰市", value: "441581"}], [{label: "源城区", value: "441602"}, {
                label: "紫金县",
                value: "441621"
            }, {label: "龙川县", value: "441622"}, {label: "连平县", value: "441623"}, {
                label: "和平县",
                value: "441624"
            }, {label: "东源县", value: "441625"}], [{label: "江城区", value: "441702"}, {
                label: "阳东区",
                value: "441704"
            }, {label: "阳西县", value: "441721"}, {label: "阳春市", value: "441781"}], [{
                label: "清城区",
                value: "441802"
            }, {label: "清新区", value: "441803"}, {label: "佛冈县", value: "441821"}, {
                label: "阳山县",
                value: "441823"
            }, {label: "连山壮族瑶族自治县", value: "441825"}, {label: "连南瑶族自治县", value: "441826"}, {
                label: "英德市",
                value: "441881"
            }, {label: "连州市", value: "441882"}], [{label: "东莞市", value: "441900"}], [{
                label: "中山市",
                value: "442000"
            }], [{label: "湘桥区", value: "445102"}, {label: "潮安区", value: "445103"}, {
                label: "饶平县",
                value: "445122"
            }], [{label: "榕城区", value: "445202"}, {label: "揭东区", value: "445203"}, {
                label: "揭西县",
                value: "445222"
            }, {label: "惠来县", value: "445224"}, {label: "普宁市", value: "445281"}], [{
                label: "云城区",
                value: "445302"
            }, {label: "云安区", value: "445303"}, {label: "新兴县", value: "445321"}, {
                label: "郁南县",
                value: "445322"
            }, {label: "罗定市", value: "445381"}]], [[{label: "兴宁区", value: "450102"}, {
                label: "青秀区",
                value: "450103"
            }, {label: "江南区", value: "450105"}, {label: "西乡塘区", value: "450107"}, {
                label: "良庆区",
                value: "450108"
            }, {label: "邕宁区", value: "450109"}, {label: "武鸣区", value: "450110"}, {
                label: "隆安县",
                value: "450123"
            }, {label: "马山县", value: "450124"}, {label: "上林县", value: "450125"}, {
                label: "宾阳县",
                value: "450126"
            }, {label: "横县", value: "450127"}], [{label: "城中区", value: "450202"}, {
                label: "鱼峰区",
                value: "450203"
            }, {label: "柳南区", value: "450204"}, {label: "柳北区", value: "450205"}, {
                label: "柳江区",
                value: "450206"
            }, {label: "柳城县", value: "450222"}, {label: "鹿寨县", value: "450223"}, {
                label: "融安县",
                value: "450224"
            }, {label: "融水苗族自治县", value: "450225"}, {label: "三江侗族自治县", value: "450226"}], [{
                label: "秀峰区",
                value: "450302"
            }, {label: "叠彩区", value: "450303"}, {label: "象山区", value: "450304"}, {
                label: "七星区",
                value: "450305"
            }, {label: "雁山区", value: "450311"}, {label: "临桂区", value: "450312"}, {
                label: "阳朔县",
                value: "450321"
            }, {label: "灵川县", value: "450323"}, {label: "全州县", value: "450324"}, {
                label: "兴安县",
                value: "450325"
            }, {label: "永福县", value: "450326"}, {label: "灌阳县", value: "450327"}, {
                label: "龙胜各族自治县",
                value: "450328"
            }, {label: "资源县", value: "450329"}, {label: "平乐县", value: "450330"}, {
                label: "荔浦县",
                value: "450331"
            }, {label: "恭城瑶族自治县", value: "450332"}], [{label: "万秀区", value: "450403"}, {
                label: "长洲区",
                value: "450405"
            }, {label: "龙圩区", value: "450406"}, {label: "苍梧县", value: "450421"}, {
                label: "藤县",
                value: "450422"
            }, {label: "蒙山县", value: "450423"}, {label: "岑溪市", value: "450481"}], [{
                label: "海城区",
                value: "450502"
            }, {label: "银海区", value: "450503"}, {label: "铁山港区", value: "450512"}, {
                label: "合浦县",
                value: "450521"
            }], [{label: "港口区", value: "450602"}, {label: "防城区", value: "450603"}, {
                label: "上思县",
                value: "450621"
            }, {label: "东兴市", value: "450681"}], [{label: "钦南区", value: "450702"}, {
                label: "钦北区",
                value: "450703"
            }, {label: "灵山县", value: "450721"}, {label: "浦北县", value: "450722"}], [{
                label: "港北区",
                value: "450802"
            }, {label: "港南区", value: "450803"}, {label: "覃塘区", value: "450804"}, {
                label: "平南县",
                value: "450821"
            }, {label: "桂平市", value: "450881"}], [{label: "玉州区", value: "450902"}, {
                label: "福绵区",
                value: "450903"
            }, {label: "容县", value: "450921"}, {label: "陆川县", value: "450922"}, {
                label: "博白县",
                value: "450923"
            }, {label: "兴业县", value: "450924"}, {label: "北流市", value: "450981"}], [{
                label: "右江区",
                value: "451002"
            }, {label: "田阳县", value: "451021"}, {label: "田东县", value: "451022"}, {
                label: "平果县",
                value: "451023"
            }, {label: "德保县", value: "451024"}, {label: "那坡县", value: "451026"}, {
                label: "凌云县",
                value: "451027"
            }, {label: "乐业县", value: "451028"}, {label: "田林县", value: "451029"}, {
                label: "西林县",
                value: "451030"
            }, {label: "隆林各族自治县", value: "451031"}, {label: "靖西市", value: "451081"}], [{
                label: "八步区",
                value: "451102"
            }, {label: "平桂区", value: "451103"}, {label: "昭平县", value: "451121"}, {
                label: "钟山县",
                value: "451122"
            }, {label: "富川瑶族自治县", value: "451123"}], [{label: "金城江区", value: "451202"}, {
                label: "宜州区",
                value: "451203"
            }, {label: "南丹县", value: "451221"}, {label: "天峨县", value: "451222"}, {
                label: "凤山县",
                value: "451223"
            }, {label: "东兰县", value: "451224"}, {label: "罗城仫佬族自治县", value: "451225"}, {
                label: "环江毛南族自治县",
                value: "451226"
            }, {label: "巴马瑶族自治县", value: "451227"}, {label: "都安瑶族自治县", value: "451228"}, {
                label: "大化瑶族自治县",
                value: "451229"
            }], [{label: "兴宾区", value: "451302"}, {label: "忻城县", value: "451321"}, {
                label: "象州县",
                value: "451322"
            }, {label: "武宣县", value: "451323"}, {label: "金秀瑶族自治县", value: "451324"}, {
                label: "合山市",
                value: "451381"
            }], [{label: "江州区", value: "451402"}, {label: "扶绥县", value: "451421"}, {
                label: "宁明县",
                value: "451422"
            }, {label: "龙州县", value: "451423"}, {label: "大新县", value: "451424"}, {
                label: "天等县",
                value: "451425"
            }, {label: "凭祥市", value: "451481"}]], [[{label: "秀英区", value: "460105"}, {
                label: "龙华区",
                value: "460106"
            }, {label: "琼山区", value: "460107"}, {label: "美兰区", value: "460108"}], [{
                label: "海棠区",
                value: "460202"
            }, {label: "吉阳区", value: "460203"}, {label: "天涯区", value: "460204"}, {
                label: "崖州区",
                value: "460205"
            }], [{label: "西沙群岛", value: "460321"}, {label: "南沙群岛", value: "460322"}, {
                label: "中沙群岛的岛礁及其海域",
                value: "460323"
            }], [{label: "儋州市", value: "460400"}], [{label: "五指山市", value: "469001"}, {
                label: "琼海市",
                value: "469002"
            }, {label: "文昌市", value: "469005"}, {label: "万宁市", value: "469006"}, {
                label: "东方市",
                value: "469007"
            }, {label: "定安县", value: "469021"}, {label: "屯昌县", value: "469022"}, {
                label: "澄迈县",
                value: "469023"
            }, {label: "临高县", value: "469024"}, {label: "白沙黎族自治县", value: "469025"}, {
                label: "昌江黎族自治县",
                value: "469026"
            }, {label: "乐东黎族自治县", value: "469027"}, {label: "陵水黎族自治县", value: "469028"}, {
                label: "保亭黎族苗族自治县",
                value: "469029"
            }, {label: "琼中黎族苗族自治县", value: "469030"}]], [[{label: "万州区", value: "500101"}, {
                label: "涪陵区",
                value: "500102"
            }, {label: "渝中区", value: "500103"}, {label: "大渡口区", value: "500104"}, {
                label: "江北区",
                value: "500105"
            }, {label: "沙坪坝区", value: "500106"}, {label: "九龙坡区", value: "500107"}, {
                label: "南岸区",
                value: "500108"
            }, {label: "北碚区", value: "500109"}, {label: "綦江区", value: "500110"}, {
                label: "大足区",
                value: "500111"
            }, {label: "渝北区", value: "500112"}, {label: "巴南区", value: "500113"}, {
                label: "黔江区",
                value: "500114"
            }, {label: "长寿区", value: "500115"}, {label: "江津区", value: "500116"}, {
                label: "合川区",
                value: "500117"
            }, {label: "永川区", value: "500118"}, {label: "南川区", value: "500119"}, {
                label: "璧山区",
                value: "500120"
            }, {label: "铜梁区", value: "500151"}, {label: "潼南区", value: "500152"}, {
                label: "荣昌区",
                value: "500153"
            }, {label: "开州区", value: "500154"}, {label: "梁平区", value: "500155"}, {
                label: "武隆区",
                value: "500156"
            }], [{label: "城口县", value: "500229"}, {label: "丰都县", value: "500230"}, {
                label: "垫江县",
                value: "500231"
            }, {label: "忠县", value: "500233"}, {label: "云阳县", value: "500235"}, {
                label: "奉节县",
                value: "500236"
            }, {label: "巫山县", value: "500237"}, {label: "巫溪县", value: "500238"}, {
                label: "石柱土家族自治县",
                value: "500240"
            }, {label: "秀山土家族苗族自治县", value: "500241"}, {label: "酉阳土家族苗族自治县", value: "500242"}, {
                label: "彭水苗族土家族自治县",
                value: "500243"
            }]], [[{label: "锦江区", value: "510104"}, {label: "青羊区", value: "510105"}, {
                label: "金牛区",
                value: "510106"
            }, {label: "武侯区", value: "510107"}, {label: "成华区", value: "510108"}, {
                label: "龙泉驿区",
                value: "510112"
            }, {label: "青白江区", value: "510113"}, {label: "新都区", value: "510114"}, {
                label: "温江区",
                value: "510115"
            }, {label: "双流区", value: "510116"}, {label: "郫都区", value: "510117"}, {
                label: "金堂县",
                value: "510121"
            }, {label: "大邑县", value: "510129"}, {label: "蒲江县", value: "510131"}, {
                label: "新津县",
                value: "510132"
            }, {label: "都江堰市", value: "510181"}, {label: "彭州市", value: "510182"}, {
                label: "邛崃市",
                value: "510183"
            }, {label: "崇州市", value: "510184"}, {label: "简阳市", value: "510185"}], [{
                label: "自流井区",
                value: "510302"
            }, {label: "贡井区", value: "510303"}, {label: "大安区", value: "510304"}, {
                label: "沿滩区",
                value: "510311"
            }, {label: "荣县", value: "510321"}, {label: "富顺县", value: "510322"}], [{
                label: "东区",
                value: "510402"
            }, {label: "西区", value: "510403"}, {label: "仁和区", value: "510411"}, {
                label: "米易县",
                value: "510421"
            }, {label: "盐边县", value: "510422"}], [{label: "江阳区", value: "510502"}, {
                label: "纳溪区",
                value: "510503"
            }, {label: "龙马潭区", value: "510504"}, {label: "泸县", value: "510521"}, {
                label: "合江县",
                value: "510522"
            }, {label: "叙永县", value: "510524"}, {label: "古蔺县", value: "510525"}], [{
                label: "旌阳区",
                value: "510603"
            }, {label: "罗江区", value: "510604"}, {label: "中江县", value: "510623"}, {
                label: "广汉市",
                value: "510681"
            }, {label: "什邡市", value: "510682"}, {label: "绵竹市", value: "510683"}], [{
                label: "涪城区",
                value: "510703"
            }, {label: "游仙区", value: "510704"}, {label: "安州区", value: "510705"}, {
                label: "三台县",
                value: "510722"
            }, {label: "盐亭县", value: "510723"}, {label: "梓潼县", value: "510725"}, {
                label: "北川羌族自治县",
                value: "510726"
            }, {label: "平武县", value: "510727"}, {label: "江油市", value: "510781"}], [{
                label: "利州区",
                value: "510802"
            }, {label: "昭化区", value: "510811"}, {label: "朝天区", value: "510812"}, {
                label: "旺苍县",
                value: "510821"
            }, {label: "青川县", value: "510822"}, {label: "剑阁县", value: "510823"}, {
                label: "苍溪县",
                value: "510824"
            }], [{label: "船山区", value: "510903"}, {label: "安居区", value: "510904"}, {
                label: "蓬溪县",
                value: "510921"
            }, {label: "射洪县", value: "510922"}, {label: "大英县", value: "510923"}], [{
                label: "市中区",
                value: "511002"
            }, {label: "东兴区", value: "511011"}, {label: "威远县", value: "511024"}, {
                label: "资中县",
                value: "511025"
            }, {label: "内江经济开发区", value: "511071"}, {label: "隆昌市", value: "511083"}], [{
                label: "市中区",
                value: "511102"
            }, {label: "沙湾区", value: "511111"}, {label: "五通桥区", value: "511112"}, {
                label: "金口河区",
                value: "511113"
            }, {label: "犍为县", value: "511123"}, {label: "井研县", value: "511124"}, {
                label: "夹江县",
                value: "511126"
            }, {label: "沐川县", value: "511129"}, {label: "峨边彝族自治县", value: "511132"}, {
                label: "马边彝族自治县",
                value: "511133"
            }, {label: "峨眉山市", value: "511181"}], [{label: "顺庆区", value: "511302"}, {
                label: "高坪区",
                value: "511303"
            }, {label: "嘉陵区", value: "511304"}, {label: "南部县", value: "511321"}, {
                label: "营山县",
                value: "511322"
            }, {label: "蓬安县", value: "511323"}, {label: "仪陇县", value: "511324"}, {
                label: "西充县",
                value: "511325"
            }, {label: "阆中市", value: "511381"}], [{label: "东坡区", value: "511402"}, {
                label: "彭山区",
                value: "511403"
            }, {label: "仁寿县", value: "511421"}, {label: "洪雅县", value: "511423"}, {
                label: "丹棱县",
                value: "511424"
            }, {label: "青神县", value: "511425"}], [{label: "翠屏区", value: "511502"}, {
                label: "南溪区",
                value: "511503"
            }, {label: "宜宾县", value: "511521"}, {label: "江安县", value: "511523"}, {
                label: "长宁县",
                value: "511524"
            }, {label: "高县", value: "511525"}, {label: "珙县", value: "511526"}, {
                label: "筠连县",
                value: "511527"
            }, {label: "兴文县", value: "511528"}, {label: "屏山县", value: "511529"}], [{
                label: "广安区",
                value: "511602"
            }, {label: "前锋区", value: "511603"}, {label: "岳池县", value: "511621"}, {
                label: "武胜县",
                value: "511622"
            }, {label: "邻水县", value: "511623"}, {label: "华蓥市", value: "511681"}], [{
                label: "通川区",
                value: "511702"
            }, {label: "达川区", value: "511703"}, {label: "宣汉县", value: "511722"}, {
                label: "开江县",
                value: "511723"
            }, {label: "大竹县", value: "511724"}, {label: "渠县", value: "511725"}, {
                label: "达州经济开发区",
                value: "511771"
            }, {label: "万源市", value: "511781"}], [{label: "雨城区", value: "511802"}, {
                label: "名山区",
                value: "511803"
            }, {label: "荥经县", value: "511822"}, {label: "汉源县", value: "511823"}, {
                label: "石棉县",
                value: "511824"
            }, {label: "天全县", value: "511825"}, {label: "芦山县", value: "511826"}, {
                label: "宝兴县",
                value: "511827"
            }], [{label: "巴州区", value: "511902"}, {label: "恩阳区", value: "511903"}, {
                label: "通江县",
                value: "511921"
            }, {label: "南江县", value: "511922"}, {label: "平昌县", value: "511923"}, {
                label: "巴中经济开发区",
                value: "511971"
            }], [{label: "雁江区", value: "512002"}, {label: "安岳县", value: "512021"}, {
                label: "乐至县",
                value: "512022"
            }], [{label: "马尔康市", value: "513201"}, {label: "汶川县", value: "513221"}, {
                label: "理县",
                value: "513222"
            }, {label: "茂县", value: "513223"}, {label: "松潘县", value: "513224"}, {
                label: "九寨沟县",
                value: "513225"
            }, {label: "金川县", value: "513226"}, {label: "小金县", value: "513227"}, {
                label: "黑水县",
                value: "513228"
            }, {label: "壤塘县", value: "513230"}, {label: "阿坝县", value: "513231"}, {
                label: "若尔盖县",
                value: "513232"
            }, {label: "红原县", value: "513233"}], [{label: "康定市", value: "513301"}, {
                label: "泸定县",
                value: "513322"
            }, {label: "丹巴县", value: "513323"}, {label: "九龙县", value: "513324"}, {
                label: "雅江县",
                value: "513325"
            }, {label: "道孚县", value: "513326"}, {label: "炉霍县", value: "513327"}, {
                label: "甘孜县",
                value: "513328"
            }, {label: "新龙县", value: "513329"}, {label: "德格县", value: "513330"}, {
                label: "白玉县",
                value: "513331"
            }, {label: "石渠县", value: "513332"}, {label: "色达县", value: "513333"}, {
                label: "理塘县",
                value: "513334"
            }, {label: "巴塘县", value: "513335"}, {label: "乡城县", value: "513336"}, {
                label: "稻城县",
                value: "513337"
            }, {label: "得荣县", value: "513338"}], [{label: "西昌市", value: "513401"}, {
                label: "木里藏族自治县",
                value: "513422"
            }, {label: "盐源县", value: "513423"}, {label: "德昌县", value: "513424"}, {
                label: "会理县",
                value: "513425"
            }, {label: "会东县", value: "513426"}, {label: "宁南县", value: "513427"}, {
                label: "普格县",
                value: "513428"
            }, {label: "布拖县", value: "513429"}, {label: "金阳县", value: "513430"}, {
                label: "昭觉县",
                value: "513431"
            }, {label: "喜德县", value: "513432"}, {label: "冕宁县", value: "513433"}, {
                label: "越西县",
                value: "513434"
            }, {label: "甘洛县", value: "513435"}, {label: "美姑县", value: "513436"}, {
                label: "雷波县",
                value: "513437"
            }]], [[{label: "南明区", value: "520102"}, {label: "云岩区", value: "520103"}, {
                label: "花溪区",
                value: "520111"
            }, {label: "乌当区", value: "520112"}, {label: "白云区", value: "520113"}, {
                label: "观山湖区",
                value: "520115"
            }, {label: "开阳县", value: "520121"}, {label: "息烽县", value: "520122"}, {
                label: "修文县",
                value: "520123"
            }, {label: "清镇市", value: "520181"}], [{label: "钟山区", value: "520201"}, {
                label: "六枝特区",
                value: "520203"
            }, {label: "水城县", value: "520221"}, {label: "盘州市", value: "520281"}], [{
                label: "红花岗区",
                value: "520302"
            }, {label: "汇川区", value: "520303"}, {label: "播州区", value: "520304"}, {
                label: "桐梓县",
                value: "520322"
            }, {label: "绥阳县", value: "520323"}, {label: "正安县", value: "520324"}, {
                label: "道真仡佬族苗族自治县",
                value: "520325"
            }, {label: "务川仡佬族苗族自治县", value: "520326"}, {label: "凤冈县", value: "520327"}, {
                label: "湄潭县",
                value: "520328"
            }, {label: "余庆县", value: "520329"}, {label: "习水县", value: "520330"}, {
                label: "赤水市",
                value: "520381"
            }, {label: "仁怀市", value: "520382"}], [{label: "西秀区", value: "520402"}, {
                label: "平坝区",
                value: "520403"
            }, {label: "普定县", value: "520422"}, {label: "镇宁布依族苗族自治县", value: "520423"}, {
                label: "关岭布依族苗族自治县",
                value: "520424"
            }, {label: "紫云苗族布依族自治县", value: "520425"}], [{label: "七星关区", value: "520502"}, {
                label: "大方县",
                value: "520521"
            }, {label: "黔西县", value: "520522"}, {label: "金沙县", value: "520523"}, {
                label: "织金县",
                value: "520524"
            }, {label: "纳雍县", value: "520525"}, {label: "威宁彝族回族苗族自治县", value: "520526"}, {
                label: "赫章县",
                value: "520527"
            }], [{label: "碧江区", value: "520602"}, {label: "万山区", value: "520603"}, {
                label: "江口县",
                value: "520621"
            }, {label: "玉屏侗族自治县", value: "520622"}, {label: "石阡县", value: "520623"}, {
                label: "思南县",
                value: "520624"
            }, {label: "印江土家族苗族自治县", value: "520625"}, {label: "德江县", value: "520626"}, {
                label: "沿河土家族自治县",
                value: "520627"
            }, {label: "松桃苗族自治县", value: "520628"}], [{label: "兴义市", value: "522301"}, {
                label: "兴仁县",
                value: "522322"
            }, {label: "普安县", value: "522323"}, {label: "晴隆县", value: "522324"}, {
                label: "贞丰县",
                value: "522325"
            }, {label: "望谟县", value: "522326"}, {label: "册亨县", value: "522327"}, {
                label: "安龙县",
                value: "522328"
            }], [{label: "凯里市", value: "522601"}, {label: "黄平县", value: "522622"}, {
                label: "施秉县",
                value: "522623"
            }, {label: "三穗县", value: "522624"}, {label: "镇远县", value: "522625"}, {
                label: "岑巩县",
                value: "522626"
            }, {label: "天柱县", value: "522627"}, {label: "锦屏县", value: "522628"}, {
                label: "剑河县",
                value: "522629"
            }, {label: "台江县", value: "522630"}, {label: "黎平县", value: "522631"}, {
                label: "榕江县",
                value: "522632"
            }, {label: "从江县", value: "522633"}, {label: "雷山县", value: "522634"}, {
                label: "麻江县",
                value: "522635"
            }, {label: "丹寨县", value: "522636"}], [{label: "都匀市", value: "522701"}, {
                label: "福泉市",
                value: "522702"
            }, {label: "荔波县", value: "522722"}, {label: "贵定县", value: "522723"}, {
                label: "瓮安县",
                value: "522725"
            }, {label: "独山县", value: "522726"}, {label: "平塘县", value: "522727"}, {
                label: "罗甸县",
                value: "522728"
            }, {label: "长顺县", value: "522729"}, {label: "龙里县", value: "522730"}, {
                label: "惠水县",
                value: "522731"
            }, {label: "三都水族自治县", value: "522732"}]], [[{label: "五华区", value: "530102"}, {
                label: "盘龙区",
                value: "530103"
            }, {label: "官渡区", value: "530111"}, {label: "西山区", value: "530112"}, {
                label: "东川区",
                value: "530113"
            }, {label: "呈贡区", value: "530114"}, {label: "晋宁区", value: "530115"}, {
                label: "富民县",
                value: "530124"
            }, {label: "宜良县", value: "530125"}, {label: "石林彝族自治县", value: "530126"}, {
                label: "嵩明县",
                value: "530127"
            }, {label: "禄劝彝族苗族自治县", value: "530128"}, {label: "寻甸回族彝族自治县", value: "530129"}, {
                label: "安宁市",
                value: "530181"
            }], [{label: "麒麟区", value: "530302"}, {label: "沾益区", value: "530303"}, {
                label: "马龙县",
                value: "530321"
            }, {label: "陆良县", value: "530322"}, {label: "师宗县", value: "530323"}, {
                label: "罗平县",
                value: "530324"
            }, {label: "富源县", value: "530325"}, {label: "会泽县", value: "530326"}, {
                label: "宣威市",
                value: "530381"
            }], [{label: "红塔区", value: "530402"}, {label: "江川区", value: "530403"}, {
                label: "澄江县",
                value: "530422"
            }, {label: "通海县", value: "530423"}, {label: "华宁县", value: "530424"}, {
                label: "易门县",
                value: "530425"
            }, {label: "峨山彝族自治县", value: "530426"}, {label: "新平彝族傣族自治县", value: "530427"}, {
                label: "元江哈尼族彝族傣族自治县",
                value: "530428"
            }], [{label: "隆阳区", value: "530502"}, {label: "施甸县", value: "530521"}, {
                label: "龙陵县",
                value: "530523"
            }, {label: "昌宁县", value: "530524"}, {label: "腾冲市", value: "530581"}], [{
                label: "昭阳区",
                value: "530602"
            }, {label: "鲁甸县", value: "530621"}, {label: "巧家县", value: "530622"}, {
                label: "盐津县",
                value: "530623"
            }, {label: "大关县", value: "530624"}, {label: "永善县", value: "530625"}, {
                label: "绥江县",
                value: "530626"
            }, {label: "镇雄县", value: "530627"}, {label: "彝良县", value: "530628"}, {
                label: "威信县",
                value: "530629"
            }, {label: "水富县", value: "530630"}], [{label: "古城区", value: "530702"}, {
                label: "玉龙纳西族自治县",
                value: "530721"
            }, {label: "永胜县", value: "530722"}, {label: "华坪县", value: "530723"}, {
                label: "宁蒗彝族自治县",
                value: "530724"
            }], [{label: "思茅区", value: "530802"}, {label: "宁洱哈尼族彝族自治县", value: "530821"}, {
                label: "墨江哈尼族自治县",
                value: "530822"
            }, {label: "景东彝族自治县", value: "530823"}, {label: "景谷傣族彝族自治县", value: "530824"}, {
                label: "镇沅彝族哈尼族拉祜族自治县",
                value: "530825"
            }, {label: "江城哈尼族彝族自治县", value: "530826"}, {label: "孟连傣族拉祜族佤族自治县", value: "530827"}, {
                label: "澜沧拉祜族自治县",
                value: "530828"
            }, {label: "西盟佤族自治县", value: "530829"}], [{label: "临翔区", value: "530902"}, {
                label: "凤庆县",
                value: "530921"
            }, {label: "云县", value: "530922"}, {label: "永德县", value: "530923"}, {
                label: "镇康县",
                value: "530924"
            }, {label: "双江拉祜族佤族布朗族傣族自治县", value: "530925"}, {label: "耿马傣族佤族自治县", value: "530926"}, {
                label: "沧源佤族自治县",
                value: "530927"
            }], [{label: "楚雄市", value: "532301"}, {label: "双柏县", value: "532322"}, {
                label: "牟定县",
                value: "532323"
            }, {label: "南华县", value: "532324"}, {label: "姚安县", value: "532325"}, {
                label: "大姚县",
                value: "532326"
            }, {label: "永仁县", value: "532327"}, {label: "元谋县", value: "532328"}, {
                label: "武定县",
                value: "532329"
            }, {label: "禄丰县", value: "532331"}], [{label: "个旧市", value: "532501"}, {
                label: "开远市",
                value: "532502"
            }, {label: "蒙自市", value: "532503"}, {label: "弥勒市", value: "532504"}, {
                label: "屏边苗族自治县",
                value: "532523"
            }, {label: "建水县", value: "532524"}, {label: "石屏县", value: "532525"}, {
                label: "泸西县",
                value: "532527"
            }, {label: "元阳县", value: "532528"}, {label: "红河县", value: "532529"}, {
                label: "金平苗族瑶族傣族自治县",
                value: "532530"
            }, {label: "绿春县", value: "532531"}, {label: "河口瑶族自治县", value: "532532"}], [{
                label: "文山市",
                value: "532601"
            }, {label: "砚山县", value: "532622"}, {label: "西畴县", value: "532623"}, {
                label: "麻栗坡县",
                value: "532624"
            }, {label: "马关县", value: "532625"}, {label: "丘北县", value: "532626"}, {
                label: "广南县",
                value: "532627"
            }, {label: "富宁县", value: "532628"}], [{label: "景洪市", value: "532801"}, {
                label: "勐海县",
                value: "532822"
            }, {label: "勐腊县", value: "532823"}], [{label: "大理市", value: "532901"}, {
                label: "漾濞彝族自治县",
                value: "532922"
            }, {label: "祥云县", value: "532923"}, {label: "宾川县", value: "532924"}, {
                label: "弥渡县",
                value: "532925"
            }, {label: "南涧彝族自治县", value: "532926"}, {label: "巍山彝族回族自治县", value: "532927"}, {
                label: "永平县",
                value: "532928"
            }, {label: "云龙县", value: "532929"}, {label: "洱源县", value: "532930"}, {
                label: "剑川县",
                value: "532931"
            }, {label: "鹤庆县", value: "532932"}], [{label: "瑞丽市", value: "533102"}, {
                label: "芒市",
                value: "533103"
            }, {label: "梁河县", value: "533122"}, {label: "盈江县", value: "533123"}, {
                label: "陇川县",
                value: "533124"
            }], [{label: "泸水市", value: "533301"}, {label: "福贡县", value: "533323"}, {
                label: "贡山独龙族怒族自治县",
                value: "533324"
            }, {label: "兰坪白族普米族自治县", value: "533325"}], [{label: "香格里拉市", value: "533401"}, {
                label: "德钦县",
                value: "533422"
            }, {label: "维西傈僳族自治县", value: "533423"}]], [[{label: "城关区", value: "540102"}, {
                label: "堆龙德庆区",
                value: "540103"
            }, {label: "林周县", value: "540121"}, {label: "当雄县", value: "540122"}, {
                label: "尼木县",
                value: "540123"
            }, {label: "曲水县", value: "540124"}, {label: "达孜县", value: "540126"}, {
                label: "墨竹工卡县",
                value: "540127"
            }, {label: "格尔木藏青工业园区", value: "540171"}, {label: "拉萨经济技术开发区", value: "540172"}, {
                label: "西藏文化旅游创意园区",
                value: "540173"
            }, {label: "达孜工业园区", value: "540174"}], [{label: "桑珠孜区", value: "540202"}, {
                label: "南木林县",
                value: "540221"
            }, {label: "江孜县", value: "540222"}, {label: "定日县", value: "540223"}, {
                label: "萨迦县",
                value: "540224"
            }, {label: "拉孜县", value: "540225"}, {label: "昂仁县", value: "540226"}, {
                label: "谢通门县",
                value: "540227"
            }, {label: "白朗县", value: "540228"}, {label: "仁布县", value: "540229"}, {
                label: "康马县",
                value: "540230"
            }, {label: "定结县", value: "540231"}, {label: "仲巴县", value: "540232"}, {
                label: "亚东县",
                value: "540233"
            }, {label: "吉隆县", value: "540234"}, {label: "聂拉木县", value: "540235"}, {
                label: "萨嘎县",
                value: "540236"
            }, {label: "岗巴县", value: "540237"}], [{label: "卡若区", value: "540302"}, {
                label: "江达县",
                value: "540321"
            }, {label: "贡觉县", value: "540322"}, {label: "类乌齐县", value: "540323"}, {
                label: "丁青县",
                value: "540324"
            }, {label: "察雅县", value: "540325"}, {label: "八宿县", value: "540326"}, {
                label: "左贡县",
                value: "540327"
            }, {label: "芒康县", value: "540328"}, {label: "洛隆县", value: "540329"}, {
                label: "边坝县",
                value: "540330"
            }], [{label: "巴宜区", value: "540402"}, {label: "工布江达县", value: "540421"}, {
                label: "米林县",
                value: "540422"
            }, {label: "墨脱县", value: "540423"}, {label: "波密县", value: "540424"}, {
                label: "察隅县",
                value: "540425"
            }, {label: "朗县", value: "540426"}], [{label: "乃东区", value: "540502"}, {
                label: "扎囊县",
                value: "540521"
            }, {label: "贡嘎县", value: "540522"}, {label: "桑日县", value: "540523"}, {
                label: "琼结县",
                value: "540524"
            }, {label: "曲松县", value: "540525"}, {label: "措美县", value: "540526"}, {
                label: "洛扎县",
                value: "540527"
            }, {label: "加查县", value: "540528"}, {label: "隆子县", value: "540529"}, {
                label: "错那县",
                value: "540530"
            }, {label: "浪卡子县", value: "540531"}], [{label: "那曲县", value: "542421"}, {
                label: "嘉黎县",
                value: "542422"
            }, {label: "比如县", value: "542423"}, {label: "聂荣县", value: "542424"}, {
                label: "安多县",
                value: "542425"
            }, {label: "申扎县", value: "542426"}, {label: "索县", value: "542427"}, {
                label: "班戈县",
                value: "542428"
            }, {label: "巴青县", value: "542429"}, {label: "尼玛县", value: "542430"}, {
                label: "双湖县",
                value: "542431"
            }], [{label: "普兰县", value: "542521"}, {label: "札达县", value: "542522"}, {
                label: "噶尔县",
                value: "542523"
            }, {label: "日土县", value: "542524"}, {label: "革吉县", value: "542525"}, {
                label: "改则县",
                value: "542526"
            }, {label: "措勤县", value: "542527"}]], [[{label: "新城区", value: "610102"}, {
                label: "碑林区",
                value: "610103"
            }, {label: "莲湖区", value: "610104"}, {label: "灞桥区", value: "610111"}, {
                label: "未央区",
                value: "610112"
            }, {label: "雁塔区", value: "610113"}, {label: "阎良区", value: "610114"}, {
                label: "临潼区",
                value: "610115"
            }, {label: "长安区", value: "610116"}, {label: "高陵区", value: "610117"}, {
                label: "鄠邑区",
                value: "610118"
            }, {label: "蓝田县", value: "610122"}, {label: "周至县", value: "610124"}], [{
                label: "王益区",
                value: "610202"
            }, {label: "印台区", value: "610203"}, {label: "耀州区", value: "610204"}, {
                label: "宜君县",
                value: "610222"
            }], [{label: "渭滨区", value: "610302"}, {label: "金台区", value: "610303"}, {
                label: "陈仓区",
                value: "610304"
            }, {label: "凤翔县", value: "610322"}, {label: "岐山县", value: "610323"}, {
                label: "扶风县",
                value: "610324"
            }, {label: "眉县", value: "610326"}, {label: "陇县", value: "610327"}, {
                label: "千阳县",
                value: "610328"
            }, {label: "麟游县", value: "610329"}, {label: "凤县", value: "610330"}, {
                label: "太白县",
                value: "610331"
            }], [{label: "秦都区", value: "610402"}, {label: "杨陵区", value: "610403"}, {
                label: "渭城区",
                value: "610404"
            }, {label: "三原县", value: "610422"}, {label: "泾阳县", value: "610423"}, {
                label: "乾县",
                value: "610424"
            }, {label: "礼泉县", value: "610425"}, {label: "永寿县", value: "610426"}, {
                label: "彬县",
                value: "610427"
            }, {label: "长武县", value: "610428"}, {label: "旬邑县", value: "610429"}, {
                label: "淳化县",
                value: "610430"
            }, {label: "武功县", value: "610431"}, {label: "兴平市", value: "610481"}], [{
                label: "临渭区",
                value: "610502"
            }, {label: "华州区", value: "610503"}, {label: "潼关县", value: "610522"}, {
                label: "大荔县",
                value: "610523"
            }, {label: "合阳县", value: "610524"}, {label: "澄城县", value: "610525"}, {
                label: "蒲城县",
                value: "610526"
            }, {label: "白水县", value: "610527"}, {label: "富平县", value: "610528"}, {
                label: "韩城市",
                value: "610581"
            }, {label: "华阴市", value: "610582"}], [{label: "宝塔区", value: "610602"}, {
                label: "安塞区",
                value: "610603"
            }, {label: "延长县", value: "610621"}, {label: "延川县", value: "610622"}, {
                label: "子长县",
                value: "610623"
            }, {label: "志丹县", value: "610625"}, {label: "吴起县", value: "610626"}, {
                label: "甘泉县",
                value: "610627"
            }, {label: "富县", value: "610628"}, {label: "洛川县", value: "610629"}, {
                label: "宜川县",
                value: "610630"
            }, {label: "黄龙县", value: "610631"}, {label: "黄陵县", value: "610632"}], [{
                label: "汉台区",
                value: "610702"
            }, {label: "南郑区", value: "610703"}, {label: "城固县", value: "610722"}, {
                label: "洋县",
                value: "610723"
            }, {label: "西乡县", value: "610724"}, {label: "勉县", value: "610725"}, {
                label: "宁强县",
                value: "610726"
            }, {label: "略阳县", value: "610727"}, {label: "镇巴县", value: "610728"}, {
                label: "留坝县",
                value: "610729"
            }, {label: "佛坪县", value: "610730"}], [{label: "榆阳区", value: "610802"}, {
                label: "横山区",
                value: "610803"
            }, {label: "府谷县", value: "610822"}, {label: "靖边县", value: "610824"}, {
                label: "定边县",
                value: "610825"
            }, {label: "绥德县", value: "610826"}, {label: "米脂县", value: "610827"}, {
                label: "佳县",
                value: "610828"
            }, {label: "吴堡县", value: "610829"}, {label: "清涧县", value: "610830"}, {
                label: "子洲县",
                value: "610831"
            }, {label: "神木市", value: "610881"}], [{label: "汉滨区", value: "610902"}, {
                label: "汉阴县",
                value: "610921"
            }, {label: "石泉县", value: "610922"}, {label: "宁陕县", value: "610923"}, {
                label: "紫阳县",
                value: "610924"
            }, {label: "岚皋县", value: "610925"}, {label: "平利县", value: "610926"}, {
                label: "镇坪县",
                value: "610927"
            }, {label: "旬阳县", value: "610928"}, {label: "白河县", value: "610929"}], [{
                label: "商州区",
                value: "611002"
            }, {label: "洛南县", value: "611021"}, {label: "丹凤县", value: "611022"}, {
                label: "商南县",
                value: "611023"
            }, {label: "山阳县", value: "611024"}, {label: "镇安县", value: "611025"}, {
                label: "柞水县",
                value: "611026"
            }]], [[{label: "城关区", value: "620102"}, {label: "七里河区", value: "620103"}, {
                label: "西固区",
                value: "620104"
            }, {label: "安宁区", value: "620105"}, {label: "红古区", value: "620111"}, {
                label: "永登县",
                value: "620121"
            }, {label: "皋兰县", value: "620122"}, {label: "榆中县", value: "620123"}, {
                label: "兰州新区",
                value: "620171"
            }], [{label: "嘉峪关市", value: "620201"}], [{label: "金川区", value: "620302"}, {
                label: "永昌县",
                value: "620321"
            }], [{label: "白银区", value: "620402"}, {label: "平川区", value: "620403"}, {
                label: "靖远县",
                value: "620421"
            }, {label: "会宁县", value: "620422"}, {label: "景泰县", value: "620423"}], [{
                label: "秦州区",
                value: "620502"
            }, {label: "麦积区", value: "620503"}, {label: "清水县", value: "620521"}, {
                label: "秦安县",
                value: "620522"
            }, {label: "甘谷县", value: "620523"}, {label: "武山县", value: "620524"}, {
                label: "张家川回族自治县",
                value: "620525"
            }], [{label: "凉州区", value: "620602"}, {label: "民勤县", value: "620621"}, {
                label: "古浪县",
                value: "620622"
            }, {label: "天祝藏族自治县", value: "620623"}], [{label: "甘州区", value: "620702"}, {
                label: "肃南裕固族自治县",
                value: "620721"
            }, {label: "民乐县", value: "620722"}, {label: "临泽县", value: "620723"}, {
                label: "高台县",
                value: "620724"
            }, {label: "山丹县", value: "620725"}], [{label: "崆峒区", value: "620802"}, {
                label: "泾川县",
                value: "620821"
            }, {label: "灵台县", value: "620822"}, {label: "崇信县", value: "620823"}, {
                label: "华亭县",
                value: "620824"
            }, {label: "庄浪县", value: "620825"}, {label: "静宁县", value: "620826"}, {
                label: "平凉工业园区",
                value: "620871"
            }], [{label: "肃州区", value: "620902"}, {label: "金塔县", value: "620921"}, {
                label: "瓜州县",
                value: "620922"
            }, {label: "肃北蒙古族自治县", value: "620923"}, {label: "阿克塞哈萨克族自治县", value: "620924"}, {
                label: "玉门市",
                value: "620981"
            }, {label: "敦煌市", value: "620982"}], [{label: "西峰区", value: "621002"}, {
                label: "庆城县",
                value: "621021"
            }, {label: "环县", value: "621022"}, {label: "华池县", value: "621023"}, {
                label: "合水县",
                value: "621024"
            }, {label: "正宁县", value: "621025"}, {label: "宁县", value: "621026"}, {
                label: "镇原县",
                value: "621027"
            }], [{label: "安定区", value: "621102"}, {label: "通渭县", value: "621121"}, {
                label: "陇西县",
                value: "621122"
            }, {label: "渭源县", value: "621123"}, {label: "临洮县", value: "621124"}, {
                label: "漳县",
                value: "621125"
            }, {label: "岷县", value: "621126"}], [{label: "武都区", value: "621202"}, {
                label: "成县",
                value: "621221"
            }, {label: "文县", value: "621222"}, {label: "宕昌县", value: "621223"}, {
                label: "康县",
                value: "621224"
            }, {label: "西和县", value: "621225"}, {label: "礼县", value: "621226"}, {
                label: "徽县",
                value: "621227"
            }, {label: "两当县", value: "621228"}], [{label: "临夏市", value: "622901"}, {
                label: "临夏县",
                value: "622921"
            }, {label: "康乐县", value: "622922"}, {label: "永靖县", value: "622923"}, {
                label: "广河县",
                value: "622924"
            }, {label: "和政县", value: "622925"}, {label: "东乡族自治县", value: "622926"}, {
                label: "积石山保安族东乡族撒拉族自治县",
                value: "622927"
            }], [{label: "合作市", value: "623001"}, {label: "临潭县", value: "623021"}, {
                label: "卓尼县",
                value: "623022"
            }, {label: "舟曲县", value: "623023"}, {label: "迭部县", value: "623024"}, {
                label: "玛曲县",
                value: "623025"
            }, {label: "碌曲县", value: "623026"}, {label: "夏河县", value: "623027"}]], [[{
                label: "城东区",
                value: "630102"
            }, {label: "城中区", value: "630103"}, {label: "城西区", value: "630104"}, {
                label: "城北区",
                value: "630105"
            }, {label: "大通回族土族自治县", value: "630121"}, {label: "湟中县", value: "630122"}, {
                label: "湟源县",
                value: "630123"
            }], [{label: "乐都区", value: "630202"}, {label: "平安区", value: "630203"}, {
                label: "民和回族土族自治县",
                value: "630222"
            }, {label: "互助土族自治县", value: "630223"}, {label: "化隆回族自治县", value: "630224"}, {
                label: "循化撒拉族自治县",
                value: "630225"
            }], [{label: "门源回族自治县", value: "632221"}, {label: "祁连县", value: "632222"}, {
                label: "海晏县",
                value: "632223"
            }, {label: "刚察县", value: "632224"}], [{label: "同仁县", value: "632321"}, {
                label: "尖扎县",
                value: "632322"
            }, {label: "泽库县", value: "632323"}, {label: "河南蒙古族自治县", value: "632324"}], [{
                label: "共和县",
                value: "632521"
            }, {label: "同德县", value: "632522"}, {label: "贵德县", value: "632523"}, {
                label: "兴海县",
                value: "632524"
            }, {label: "贵南县", value: "632525"}], [{label: "玛沁县", value: "632621"}, {
                label: "班玛县",
                value: "632622"
            }, {label: "甘德县", value: "632623"}, {label: "达日县", value: "632624"}, {
                label: "久治县",
                value: "632625"
            }, {label: "玛多县", value: "632626"}], [{label: "玉树市", value: "632701"}, {
                label: "杂多县",
                value: "632722"
            }, {label: "称多县", value: "632723"}, {label: "治多县", value: "632724"}, {
                label: "囊谦县",
                value: "632725"
            }, {label: "曲麻莱县", value: "632726"}], [{label: "格尔木市", value: "632801"}, {
                label: "德令哈市",
                value: "632802"
            }, {label: "乌兰县", value: "632821"}, {label: "都兰县", value: "632822"}, {
                label: "天峻县",
                value: "632823"
            }, {label: "大柴旦行政委员会", value: "632857"}, {label: "冷湖行政委员会", value: "632858"}, {
                label: "茫崖行政委员会",
                value: "632859"
            }]], [[{label: "兴庆区", value: "640104"}, {label: "西夏区", value: "640105"}, {
                label: "金凤区",
                value: "640106"
            }, {label: "永宁县", value: "640121"}, {label: "贺兰县", value: "640122"}, {
                label: "灵武市",
                value: "640181"
            }], [{label: "大武口区", value: "640202"}, {label: "惠农区", value: "640205"}, {
                label: "平罗县",
                value: "640221"
            }], [{label: "利通区", value: "640302"}, {label: "红寺堡区", value: "640303"}, {
                label: "盐池县",
                value: "640323"
            }, {label: "同心县", value: "640324"}, {label: "青铜峡市", value: "640381"}], [{
                label: "原州区",
                value: "640402"
            }, {label: "西吉县", value: "640422"}, {label: "隆德县", value: "640423"}, {
                label: "泾源县",
                value: "640424"
            }, {label: "彭阳县", value: "640425"}], [{label: "沙坡头区", value: "640502"}, {
                label: "中宁县",
                value: "640521"
            }, {label: "海原县", value: "640522"}]], [[{label: "天山区", value: "650102"}, {
                label: "沙依巴克区",
                value: "650103"
            }, {label: "新市区", value: "650104"}, {label: "水磨沟区", value: "650105"}, {
                label: "头屯河区",
                value: "650106"
            }, {label: "达坂城区", value: "650107"}, {label: "米东区", value: "650109"}, {
                label: "乌鲁木齐县",
                value: "650121"
            }, {label: "乌鲁木齐经济技术开发区", value: "650171"}, {label: "乌鲁木齐高新技术产业开发区", value: "650172"}], [{
                label: "独山子区",
                value: "650202"
            }, {label: "克拉玛依区", value: "650203"}, {label: "白碱滩区", value: "650204"}, {
                label: "乌尔禾区",
                value: "650205"
            }], [{label: "高昌区", value: "650402"}, {label: "鄯善县", value: "650421"}, {
                label: "托克逊县",
                value: "650422"
            }], [{label: "伊州区", value: "650502"}, {label: "巴里坤哈萨克自治县", value: "650521"}, {
                label: "伊吾县",
                value: "650522"
            }], [{label: "昌吉市", value: "652301"}, {label: "阜康市", value: "652302"}, {
                label: "呼图壁县",
                value: "652323"
            }, {label: "玛纳斯县", value: "652324"}, {label: "奇台县", value: "652325"}, {
                label: "吉木萨尔县",
                value: "652327"
            }, {label: "木垒哈萨克自治县", value: "652328"}], [{label: "博乐市", value: "652701"}, {
                label: "阿拉山口市",
                value: "652702"
            }, {label: "精河县", value: "652722"}, {label: "温泉县", value: "652723"}], [{
                label: "库尔勒市",
                value: "652801"
            }, {label: "轮台县", value: "652822"}, {label: "尉犁县", value: "652823"}, {
                label: "若羌县",
                value: "652824"
            }, {label: "且末县", value: "652825"}, {label: "焉耆回族自治县", value: "652826"}, {
                label: "和静县",
                value: "652827"
            }, {label: "和硕县", value: "652828"}, {label: "博湖县", value: "652829"}, {
                label: "库尔勒经济技术开发区",
                value: "652871"
            }], [{label: "阿克苏市", value: "652901"}, {label: "温宿县", value: "652922"}, {
                label: "库车县",
                value: "652923"
            }, {label: "沙雅县", value: "652924"}, {label: "新和县", value: "652925"}, {
                label: "拜城县",
                value: "652926"
            }, {label: "乌什县", value: "652927"}, {label: "阿瓦提县", value: "652928"}, {
                label: "柯坪县",
                value: "652929"
            }], [{label: "阿图什市", value: "653001"}, {label: "阿克陶县", value: "653022"}, {
                label: "阿合奇县",
                value: "653023"
            }, {label: "乌恰县", value: "653024"}], [{label: "喀什市", value: "653101"}, {
                label: "疏附县",
                value: "653121"
            }, {label: "疏勒县", value: "653122"}, {label: "英吉沙县", value: "653123"}, {
                label: "泽普县",
                value: "653124"
            }, {label: "莎车县", value: "653125"}, {label: "叶城县", value: "653126"}, {
                label: "麦盖提县",
                value: "653127"
            }, {label: "岳普湖县", value: "653128"}, {label: "伽师县", value: "653129"}, {
                label: "巴楚县",
                value: "653130"
            }, {label: "塔什库尔干塔吉克自治县", value: "653131"}], [{label: "和田市", value: "653201"}, {
                label: "和田县",
                value: "653221"
            }, {label: "墨玉县", value: "653222"}, {label: "皮山县", value: "653223"}, {
                label: "洛浦县",
                value: "653224"
            }, {label: "策勒县", value: "653225"}, {label: "于田县", value: "653226"}, {
                label: "民丰县",
                value: "653227"
            }], [{label: "伊宁市", value: "654002"}, {label: "奎屯市", value: "654003"}, {
                label: "霍尔果斯市",
                value: "654004"
            }, {label: "伊宁县", value: "654021"}, {label: "察布查尔锡伯自治县", value: "654022"}, {
                label: "霍城县",
                value: "654023"
            }, {label: "巩留县", value: "654024"}, {label: "新源县", value: "654025"}, {
                label: "昭苏县",
                value: "654026"
            }, {label: "特克斯县", value: "654027"}, {label: "尼勒克县", value: "654028"}], [{
                label: "塔城市",
                value: "654201"
            }, {label: "乌苏市", value: "654202"}, {label: "额敏县", value: "654221"}, {
                label: "沙湾县",
                value: "654223"
            }, {label: "托里县", value: "654224"}, {label: "裕民县", value: "654225"}, {
                label: "和布克赛尔蒙古自治县",
                value: "654226"
            }], [{label: "阿勒泰市", value: "654301"}, {label: "布尔津县", value: "654321"}, {
                label: "富蕴县",
                value: "654322"
            }, {label: "福海县", value: "654323"}, {label: "哈巴河县", value: "654324"}, {
                label: "青河县",
                value: "654325"
            }, {label: "吉木乃县", value: "654326"}], [{label: "石河子市", value: "659001"}, {
                label: "阿拉尔市",
                value: "659002"
            }, {label: "图木舒克市", value: "659003"}, {label: "五家渠市", value: "659004"}, {
                label: "铁门关市",
                value: "659006"
            }]], [[{label: "台北", value: "660101"}], [{label: "高雄", value: "660201"}], [{
                label: "基隆",
                value: "660301"
            }], [{label: "台中", value: "660401"}], [{label: "台南", value: "660501"}], [{
                label: "新竹",
                value: "660601"
            }], [{label: "嘉义", value: "660701"}], [{label: "宜兰", value: "660801"}], [{
                label: "桃园",
                value: "660901"
            }], [{label: "苗栗", value: "661001"}], [{label: "彰化", value: "661101"}], [{
                label: "南投",
                value: "661201"
            }], [{label: "云林", value: "661301"}], [{label: "屏东", value: "661401"}], [{
                label: "台东",
                value: "661501"
            }], [{label: "花莲", value: "661601"}], [{label: "澎湖", value: "661701"}]], [[{
                label: "香港岛",
                value: "670101"
            }], [{label: "九龙", value: "670201"}], [{label: "新界", value: "670301"}]], [[{
                label: "澳门半岛",
                value: "680101"
            }], [{label: "氹仔岛", value: "680201"}], [{label: "路环岛", value: "680301"}], [{label: "路氹城", value: "680401"}]]],
            b = u;
        e.default = b
    }, "5d73": function (l, e, a) {
        l.exports = a("469f")
    }, "6af3": function (l, e, a) {
        var u = a("24fb");
        e = u(!1), e.push([l.i, '@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.radius[data-v-d44ae210]{border-top-left-radius:%?30?%;border-top-right-radius:%?30?%}.uni-popup[data-v-d44ae210]{position:fixed;top:0;bottom:0;left:0;right:0;z-index:99999;overflow:hidden}.uni-popup__mask[data-v-d44ae210]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:998;background:rgba(0,0,0,.4);opacity:0}.uni-popup__mask.ani[data-v-d44ae210]{-webkit-transition:all .3s;transition:all .3s}.uni-popup__mask.uni-top[data-v-d44ae210], .uni-popup__mask.uni-bottom[data-v-d44ae210], .uni-popup__mask.uni-center[data-v-d44ae210]{opacity:1}.uni-popup__wrapper[data-v-d44ae210]{position:absolute;z-index:999;box-sizing:border-box}.uni-popup__wrapper.ani[data-v-d44ae210]{-webkit-transition:all .3s;transition:all .3s}.uni-popup__wrapper.top[data-v-d44ae210]{top:0;left:0;width:100%;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.uni-popup__wrapper.bottom[data-v-d44ae210]{bottom:0;left:0;width:100%;-webkit-transform:translateY(100%);transform:translateY(100%)}.uni-popup__wrapper.center[data-v-d44ae210]{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-d44ae210]{position:relative;box-sizing:border-box}.uni-popup__wrapper.uni-custom .uni-popup__wrapper-box[data-v-d44ae210]{padding:%?30?%;background:#fff}.uni-popup__wrapper.uni-custom.center .uni-popup__wrapper-box[data-v-d44ae210]{position:relative;max-width:80%;max-height:80%;overflow-y:scroll}.uni-popup__wrapper.uni-custom.top .uni-popup__wrapper-box[data-v-d44ae210], .uni-popup__wrapper.uni-custom.bottom .uni-popup__wrapper-box[data-v-d44ae210]{width:100%;max-height:600px;overflow-y:scroll}.uni-popup__wrapper.uni-top[data-v-d44ae210], .uni-popup__wrapper.uni-bottom[data-v-d44ae210]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-popup__wrapper.uni-center[data-v-d44ae210]{-webkit-transform:scale(1);transform:scale(1);opacity:1}', ""]), l.exports = e
    }, "768b": function (l, e, a) {
        "use strict";
        a.r(e);
        var u = a("a745"), b = a.n(u);

        function v(l) {
            if (b()(l)) return l
        }

        var t = a("5d73"), n = a.n(t), i = a("c8bb"), r = a.n(i);

        function c(l, e) {
            if (r()(Object(l)) || "[object Arguments]" === Object.prototype.toString.call(l)) {
                var a = [], u = !0, b = !1, v = void 0;
                try {
                    for (var t, i = n()(l); !(u = (t = i.next()).done); u = !0) if (a.push(t.value), e && a.length === e) break
                } catch (c) {
                    b = !0, v = c
                } finally {
                    try {
                        u || null == i["return"] || i["return"]()
                    } finally {
                        if (b) throw v
                    }
                }
                return a
            }
        }

        function s() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }

        function o(l, e) {
            return v(l) || c(l, e) || s()
        }

        a.d(e, "default", (function () {
            return o
        }))
    }, "78e7": function (l, e, a) {
        "use strict";
        a.r(e);
        var u = a("4861"), b = a.n(u);
        for (var v in u) "default" !== v && function (l) {
            a.d(e, l, (function () {
                return u[l]
            }))
        }(v);
        e["default"] = b.a
    }, "7cd6": function (l, e, a) {
        var u = a("40c3"), b = a("5168")("iterator"), v = a("481b");
        l.exports = a("584a").getIteratorMethod = function (l) {
            if (void 0 != l) return l[b] || l["@@iterator"] || v[u(l)]
        }
    }, "7d7b": function (l, e, a) {
        var u = a("e4ae"), b = a("7cd6");
        l.exports = a("584a").getIterator = function (l) {
            var e = b(l);
            if ("function" != typeof e) throw TypeError(l + " is not iterable!");
            return u(e.call(l))
        }
    }, "7edb": function (l, e, a) {
        "use strict";
        var u, b = function () {
            var l = this, e = l.$createElement, a = l._self._c || e;
            return a("v-uni-view", [l.maskShow && !l.insert ? a("v-uni-view", {
                staticClass: "uni-calendar__mask",
                class: {"ani-mask-show": l.aniMaskShow}
            }) : l._e(), l.maskShow || l.insert ? a("v-uni-view", {
                staticClass: "uni-calendar__box",
                class: {"ani-calendar-show": l.aniMaskShow, "uni-calendar__static": l.insert}
            }, [l.insert ? l._e() : a("v-uni-view", {staticClass: "uni-calendar__nav"}, [a("v-uni-view", {
                staticClass: "uni-calendar__nav-item",
                on: {
                    click: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.close.apply(void 0, arguments)
                    }
                }
            }, [l._v("取消")]), a("v-uni-view", {
                staticClass: "uni-calendar__nav-item",
                staticStyle: {color: "#6B0415"},
                on: {
                    click: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.confirm.apply(void 0, arguments)
                    }
                }
            }, [l._v("确认")])], 1), a("v-uni-view", {staticClass: "uni-calendar__wrapper"}, [a("v-uni-view", {staticClass: "uni-calenda__content"}, [a("v-uni-view", {staticClass: "uni-calendar__panel"}, [a("v-uni-view", {
                staticClass: "uni-calendar__date-befor",
                on: {
                    click: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.dataBefor(-1, "month")
                    }
                }
            }, [a("v-uni-text", {staticClass: "iconfont icon-jiantou"})], 1), a("v-uni-view", {staticClass: "uni-calendar__panel-box"}, [a("v-uni-view", [l._v(l._s(l.canlender.year) + "年")]), a("v-uni-view", [l._v(l._s(l.canlender.month) + "月")])], 1), a("v-uni-view", {
                staticClass: "uni-calendar__date-after uni-calendar__rollback",
                on: {
                    click: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.dataBefor(1, "month")
                    }
                }
            }, [a("v-uni-text", {staticClass: "iconfont icon-jiantou "})], 1), l.buxian ? a("v-uni-view", {
                staticClass: "uni-calendar__backtoday",
                on: {
                    click: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.backtoday.apply(void 0, arguments)
                    }
                }
            }, [l._v("不限")]) : l._e()], 1), l.isLunar ? a("v-uni-view", {staticClass: "uni-calendar__day-detail"}, [a("v-uni-view", [l._v(l._s(l.canlender.year + "年" + l.canlender.month + "月" + l.canlender.date + "日 （" + l.canlender.lunar.astro + ")"))]), a("v-uni-view", [l._v(l._s(l.canlender.lunar.gzYear + "年" + l.canlender.lunar.gzMonth + "月" + l.canlender.lunar.gzDay + "日 (" + l.canlender.lunar.Animal + "年)") + "\n              " + l._s(l.canlender.lunar.IMonthCn + l.canlender.lunar.IDayCn) + " " + l._s(l.canlender.lunar.isTerm ? l.canlender.lunar.Term : ""))])], 1) : l._e(), a("v-uni-view", {staticClass: "uni-calendar__header"}, [a("v-uni-view", {staticClass: "uni-calendar__week"}, [l._v("日")]), a("v-uni-view", {staticClass: "uni-calendar__week"}, [l._v("一")]), a("v-uni-view", {staticClass: "uni-calendar__week"}, [l._v("二")]), a("v-uni-view", {staticClass: "uni-calendar__week"}, [l._v("三")]), a("v-uni-view", {staticClass: "uni-calendar__week"}, [l._v("四")]), a("v-uni-view", {staticClass: "uni-calendar__week"}, [l._v("五")]), a("v-uni-view", {staticClass: "uni-calendar__week"}, [l._v("六")])], 1), a("uni-calendar-item", {
                attrs: {
                    canlender: l.canlender,
                    lunar: l.isLunar
                }, on: {
                    selectDays: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.selectDays.apply(void 0, arguments)
                    }
                }
            })], 1)], 1)], 1) : l._e()], 1)
        }, v = [];
        a.d(e, "b", (function () {
            return b
        })), a.d(e, "c", (function () {
            return v
        })), a.d(e, "a", (function () {
            return u
        }))
    }, "7f15": function (l, e, a) {
        "use strict";
        a.r(e);
        var u = a("0c23"), b = a.n(u);
        for (var v in u) "default" !== v && function (l) {
            a.d(e, l, (function () {
                return u[l]
            }))
        }(v);
        e["default"] = b.a
    }, 8209: function (l, e, a) {
        "use strict";
        var u = a("4ea4");
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, a("a481"), a("6b54"), a("c5f6");
        var b = u(a("c825")), v = u(a("d5a8")), t = u(a("590c")), n = u(a("8801"));

        function i(l, e) {
            for (var a = 0; a < e.length; a++) if (l === e[a]) return !0;
            throw new Error("mode无效，请选择有效的mode!")
        }

        var r = {
            data: function () {
                return {
                    result: [],
                    data: {},
                    checkArr: [],
                    checkValue: [],
                    pickVal: [],
                    showPicker: !1,
                    resultStr: "",
                    itemHeight: "height: ".concat(uni.upx2px(88), "px;")
                }
            }, computed: {}, props: {
                mode: {
                    type: String, validator: function (l) {
                        var e = ["half", "date", "dateTime", "yearMonth", "time", "region", "selector", "limit", "limitHour", "range", "linkage"];
                        return i(l, e)
                    }, default: function () {
                        return "date"
                    }
                },
                themeColor: {
                    type: String, default: function () {
                        return "#f5a200"
                    }
                },
                startYear: {
                    type: [String, Number], default: function () {
                        return "1970"
                    }
                },
                endYear: {
                    type: [String, Number], default: function () {
                        return (new Date).getFullYear() + ""
                    }
                },
                defaultVal: {
                    type: Array, default: function () {
                        return [0, 0, 0, 0, 0, 0, 0]
                    }
                },
                areaCode: {
                    type: Array, default: function () {
                        return null
                    }
                },
                hideArea: {type: Boolean, default: !1},
                step: {type: [String, Number], default: 1},
                current: {type: Boolean, default: !1},
                selectList: {
                    type: Array, default: function () {
                        return []
                    }
                },
                dayStep: {type: [String, Number], default: 7},
                startHour: {type: [String, Number], default: 8},
                endHour: {type: [String, Number], default: 20},
                minuteStep: {type: [String, Number], default: 10},
                afterStep: {type: [String, Number], default: 30},
                disabledAfter: {type: Boolean, default: !1},
                linkList: {
                    type: Array, default: function () {
                        return []
                    }
                },
                value: {
                    type: Array, default: function () {
                        return null
                    }
                },
                level: {type: [Number, String], default: 2}
            }, watch: {
                mode: function () {
                    this.initData()
                }, selectList: function () {
                    this.initData()
                }, linkList: function () {
                    this.initData()
                }
            }, methods: {
                getLinkageVal: function (l, e) {
                    var a = [], u = l, b = this.linkList, v = this.level, t = 0, n = [], i = [], r = "", c = [];
                    switch (v) {
                        case 2:
                            a = [0, 0];
                            break;
                        case 3:
                            a = [0, 0, 0];
                            break
                    }
                    var s = function l(b, t, s) {
                        return t < v && (c.push(b), b.map((function (b, v) {
                            (e ? b.value == u[t] : b.label == u[t]) && (a[t] = v, n.push(b.label), i.push(b.value), r += b.label, b.children && l(b.children, t += 1))
                        })), {data: c, dval: a, checkArr: n, checkValue: i, resultStr: r})
                    };
                    return s(b, t)
                }, getRegionVal: function (l, e) {
                    var a = l[0], u = l[1], n = 0, i = 0, r = 0, c = [], s = this;
                    if (b.default.map((function (l, u) {
                        (e ? l.value == a : l.label == a) && (n = u)
                    })), v.default[n].map((function (l, a) {
                        (e ? l.value == u : l.label == u) && (i = a)
                    })), s.hideArea) c = [n, i]; else {
                        var o = l[2];
                        t.default[n][i].map((function (l, a) {
                            (e ? l.value == o : l.label == o) && (r = a)
                        })), c = [n, i, r]
                    }
                    return c
                }, useCurrent: function () {
                    var l = new Date, e = l.getFullYear().toString(), a = this.formatNum(l.getMonth() + 1).toString(),
                        u = this.formatNum(l.getDate()).toString(), b = this.formatNum(l.getHours()).toString(),
                        v = this.formatNum(l.getMinutes()).toString(), t = this.formatNum(l.getSeconds()).toString();
                    return this.current ? [e, a, u, b, (Math.floor(v / this.step) * this.step).toString(), t] : this.defaultVal
                }, formatNum: function (l) {
                    return l < 10 ? "0" + l : l + ""
                }, maskTap: function () {
                    this.showPicker = !1
                }, show: function () {
                    this.showPicker = !0
                }, hide: function () {
                    this.showPicker = !1
                }, pickerCancel: function () {
                    this.$emit("cancel", {checkArr: this.checkArr, defaultVal: this.pickVal}), this.showPicker = !1
                }, pickerConfirm: function (l) {
                    switch (this.mode) {
                        case"range":
                            var e = this.checkArr, a = new Date(e[0], e[1], e[2]), u = new Date(e[3], e[4], e[5]),
                                b = this.pickVal;
                            a > u ? (this.checkArr = [e[3], e[4], e[5], e[0], e[1], e[2]], this.pickVal = [b[4], b[5], b[6], 0, b[0], b[1], b[2]], this.$emit("confirm", {
                                checkArr: this.checkArr,
                                from: e[3] + "-" + e[4] + "-" + e[5],
                                to: e[0] + "-" + e[1] + "-" + e[2],
                                defaultVal: this.pickVal,
                                result: this.resultStr
                            })) : this.$emit("confirm", {
                                checkArr: this.checkArr,
                                from: e[0] + "-" + e[1] + "-" + e[2],
                                to: e[3] + "-" + e[4] + "-" + e[5],
                                defaultVal: this.pickVal,
                                result: this.resultStr
                            });
                            break;
                        case"limit":
                            var v = (new Date).getTime(), t = new Date(this.resultStr.replace(/-/g, "/")).getTime();
                            if (v > t) return void uni.showModal({
                                title: "提示",
                                content: "选择时间必须大于当前时间",
                                confirmColor: this.themeColor
                            });
                            this.$emit("confirm", {
                                checkArr: this.checkArr,
                                defaultVal: this.pickVal,
                                result: this.resultStr
                            });
                            break;
                        case"region":
                        case"linkage":
                            this.$emit("confirm", {
                                checkArr: this.checkArr,
                                checkValue: this.checkValue,
                                defaultVal: this.pickVal,
                                result: this.resultStr
                            });
                            break;
                        default:
                            this.$emit("confirm", {
                                checkArr: this.checkArr,
                                defaultVal: this.pickVal,
                                result: this.resultStr
                            });
                            break
                    }
                    this.showPicker = !1
                }, bindChange: function (l) {
                    var e, a, u, b, i, r, c, s, o, d = this, f = l.detail.value, h = "", p = "", m = "", g = "", w = "",
                        k = "", y = d.checkArr, _ = [], A = [], x = d.mode;
                    switch (x) {
                        case"limitHour":
                            if (b = d.data.date[f[0]], i = d.data.areas[f[1]], d.data.hours[f[2]], b.value != y[0].value) {
                                f[1] = 0, f[2] = 0;
                                var D = n.default.limitHour.initAreas(b);
                                d.data.areas = D;
                                var C = n.default.limitHour.initHours(b, d.data.areas[f[1]]);
                                d.data.hours = C
                            }
                            if (i.value != y[1].value) {
                                f[2] = 0;
                                var S = n.default.limitHour.initHours(b, d.data.areas[f[1]]);
                                d.data.hours = S
                            }
                            r = d.data.date[f[0]] || d.data.date[d.data.date.length - 1], c = d.data.areas[f[1]] || d.data.areas[d.data.areas.length - 1], s = d.data.hours[f[2]] || d.data.hours[d.data.hours.length - 1], d.checkArr = [r, c, s], d.resultStr = "".concat(r.value + " " + c.label + " " + s.label + "时");
                            break;
                        case"limit":
                            if (b = d.data.date[f[0]], i = d.data.hours[f[1]], b.value != y[0].value) {
                                var M = n.default.limit.initHours(d.startHour, d.endHour, d.minuteStep, d.afterStep, b.value),
                                    B = n.default.limit.initMinutes(d.startHour, d.endHour, d.minuteStep, d.afterStep, b.value, i.value);
                                d.data.hours = M, d.data.minutes = B
                            }
                            if (i.value != y[1].value) {
                                var Y = n.default.limit.initMinutes(d.startHour, d.endHour, d.minuteStep, d.afterStep, b.value, i.value);
                                d.data.minutes = Y
                            }
                            r = d.data.date[f[0]] || d.data.date[d.data.date.length - 1], s = d.data.hours[f[1]] || d.data.hours[d.data.hours.length - 1], o = d.data.minutes[f[2]] || d.data.minutes[d.data.minutes.length - 1], d.checkArr = [r, s, o], d.resultStr = "".concat(r.value + " " + s.value + ":" + o.value + ":00");
                            break;
                        case"range":
                            var O = d.data.fyears[f[0]] || d.data.fyears[d.data.fyears.length - 1],
                                $ = d.data.fmonths[f[1]] || d.data.fmonths[d.data.fmonths.length - 1],
                                V = d.data.fdays[f[2]] || d.data.fdays[d.data.fdays.length - 1],
                                E = d.data.tyears[f[4]] || d.data.tyears[d.data.tyears.length - 1],
                                z = d.data.tmonths[f[5]] || d.data.tmonths[d.data.tmonths.length - 1],
                                j = d.data.tdays[f[6]] || d.data.tdays[d.data.tdays.length - 1];
                            O != y[0] && (_ = n.default.range.initDays(O, $), d.data.fdays = _), $ != y[1] && (_ = n.default.range.initDays(O, $), d.data.fdays = _), E != y[3] && (_ = n.default.range.initDays(E, z), d.data.tdays = _), z != y[4] && (_ = n.default.range.initDays(E, z), d.data.tdays = _), d.checkArr = [O, $, V, E, z, j], d.resultStr = "".concat(O + "-" + $ + "-" + V + "至" + E + "-" + z + "-" + j);
                            break;
                        case"half":
                            h = d.data.years[f[0]] || d.data.years[d.data.years.length - 1], p = d.data.months[f[1]] || d.data.months[d.data.months.length - 1], m = d.data.days[f[2]] || d.data.days[d.data.days.length - 1], u = d.data.areas[f[3]] || d.data.areas[d.data.areas.length - 1], h != y[0] && (f[1] = 0, f[2] = 0, _ = n.default.date.initDays(h, p, d.disabledAfter), A = n.default.date.initMonths(h, d.disabledAfter), p = d.data.months[f[1]] || d.data.months[d.data.months.length - 1], m = d.data.days[f[2]] || d.data.days[d.data.days.length - 1], d.data.days = _, d.data.months = A), p != y[1] && (f[2] = 0, _ = n.default.date.initDays(h, p, d.disabledAfter), m = d.data.days[f[2]] || d.data.days[d.data.days.length - 1], d.data.days = _), d.checkArr = [h, p, m, u], d.resultStr = "".concat(h + "-" + p + "-" + m + u.label);
                            break;
                        case"date":
                            h = d.data.years[f[0]] || d.data.years[d.data.years.length - 1], p = d.data.months[f[1]] || d.data.months[d.data.months.length - 1], m = d.data.days[f[2]] || d.data.days[d.data.days.length - 1], h != y[0] && (f[1] = 0, f[2] = 0, _ = n.default.date.initDays(h, p, d.disabledAfter), A = n.default.date.initMonths(h, d.disabledAfter), p = d.data.months[f[1]] || d.data.months[d.data.months.length - 1], m = d.data.days[f[2]] || d.data.days[d.data.days.length - 1], d.data.days = _, d.data.months = A), p != y[1] && (f[2] = 0, _ = n.default.date.initDays(h, p, d.disabledAfter), m = d.data.days[f[2]] || d.data.days[d.data.days.length - 1], d.data.days = _), d.checkArr = [h, p, m], d.resultStr = "".concat(h + "-" + p + "-" + m);
                            break;
                        case"yearMonth":
                            h = d.data.years[f[0]] || d.data.years[d.data.years.length - 1], p = d.data.months[f[1]] || d.data.months[d.data.months.length - 1], h != y[0] && (f[1] = 0, A = n.default.date.initMonths(h, d.disabledAfter), p = d.data.months[f[1]] || d.data.months[d.data.months.length - 1], d.data.months = A), d.checkArr = [h, p], d.resultStr = "".concat(h + "-" + p);
                            break;
                        case"dateTime":
                            h = d.data.years[f[0]] || d.data.years[d.data.years.length - 1], p = d.data.months[f[1]] || d.data.months[d.data.months.length - 1], m = d.data.days[f[2]] || d.data.days[d.data.days.length - 1], g = d.data.hours[f[3]] || d.data.hours[d.data.hours.length - 1], w = d.data.minutes[f[4]] || d.data.minutes[d.data.minutes.length - 1], k = d.data.seconds[f[5]] || d.data.seconds[d.data.seconds.length - 1], h != y[0] && (f[2] = 0, _ = n.default.date.initDays(h, p), m = d.data.days[f[2]] || d.data.days[d.data.days.length - 1], d.data.days = _), p != y[1] && (f[2] = 0, _ = n.default.date.initDays(h, p), m = d.data.days[f[2]] || d.data.days[d.data.days.length - 1], d.data.days = _), d.checkArr = [h, p, m, g, w, k], d.resultStr = "".concat(h + "-" + p + "-" + m + " " + g + ":" + w + ":" + k);
                            break;
                        case"time":
                            g = d.data.hours[f[0]] || d.data.hours[d.data.hours.length - 1], w = d.data.minutes[f[1]] || d.data.minutes[d.data.minutes.length - 1], k = d.data.seconds[f[2]] || d.data.seconds[d.data.seconds.length - 1], d.checkArr = [g, w, k], d.resultStr = "".concat(g + ":" + w + ":" + k);
                            break;
                        case"linkage":
                            var T, H, P, I = this.linkList;
                            T = d.data[0][f[0]] || d.data[0][0], H = d.data[1][f[1]] || d.data[1][0], 3 == this.level ? (P = d.data[2][f[2]] || d.data[2][0], T.label != y[0] && (d.data[1] = I[f[0]].children, d.data[2] = I[f[0]].children[f[1]].children, f[1] = 0, f[2] = 0, H = d.data[1][f[1]] || d.data[1][0], P = d.data[2][f[2]] || d.data[2][0]), H.label != y[1] && (d.data[2] = I[f[0]].children[f[1]].children, f[2] = 0, P = d.data[2][f[2]] || d.data[2][0]), d.checkArr = [T.label, H.label, P.label], d.checkValue = [d.data[0][f[0]] ? d.data[0][f[0]].value : d.data[0][0].value, d.data[1][f[1]] ? d.data[1][f[1]].value : d.data[1][0].value, d.data[2][f[2]] ? d.data[2][f[2]].value : d.data[2][0].value], d.resultStr = T.label + H.label + P.label) : (T.label != y[0] && (d.data[1] = I[f[0]].children, f[1] = 0, H = d.data[1][f[1]] || d.data[1][0]), d.checkArr = [T.label, H.label], d.checkValue = [d.data[0][f[0]] ? d.data[0][f[0]].value : d.data[0][0].value, d.data[1][f[1]] ? d.data[1][f[1]].value : d.data[1][0].value], d.resultStr = T.label + H.label);
                            break;
                        case"region":
                            e = d.data.provinces[f[0]] || d.data.provinces[0], a = d.data.citys[f[1]] || d.data.citys[0], d.hideArea || (u = d.data.areas[f[2]] || d.data.areas[0]), e.label != y[0] && (d.data.citys = v.default[f[0]] || v.default[0], d.hideArea || (d.data.areas = t.default[f[0]][0] || t.default[0][0]), f[1] = 0, f[2] = 0, a = d.data.citys[f[1]] || d.data.citys[0], d.hideArea || (u = d.data.areas[f[2]] || d.data.areas[0])), a.label == y[1] || d.hideArea || (d.data.areas = t.default[f[0]][f[1]] || t.default[0][0], f[2] = 0, u = d.data.areas[f[2]] || d.data.areas[0]), d.hideArea ? (d.checkArr = [e.label, a.label], d.checkValue = [d.data.provinces[f[0]] ? d.data.provinces[f[0]].value : d.data.provinces[0].value, d.data.citys[f[1]] ? d.data.citys[f[1]].value : d.data.citys[0].value], d.resultStr = e.label + a.label) : (d.checkArr = [e.label, a.label, u.label], d.checkValue = [d.data.provinces[f[0]] ? d.data.provinces[f[0]].value : d.data.provinces[0].value, d.data.citys[f[1]] ? d.data.citys[f[1]].value : d.data.citys[0].value, d.data.areas[f[2]] ? d.data.areas[f[2]].value : d.data.areas[0].value], d.resultStr = e.label + a.label + u.label);
                            break;
                        case"selector":
                            d.checkArr = d.data[f[0]] || d.data[d.data.length - 1], d.resultStr = d.data[f[0]] ? d.data[f[0]].label : d.data[d.data.length - 1].label;
                            break
                    }
                    d.$nextTick((function () {
                        d.pickVal = f
                    }))
                }, initData: function () {
                    var l, e, a, u, i, r, c, s, o, d, f, h, p = this, m = this, g = {}, w = m.mode, k = [];
                    switch (w) {
                        case"linkage":
                            var y;
                            y = m.value ? m.getLinkageVal(m.value, !0) : m.getLinkageVal(m.defaultVal), k = y.dval, g = y.data, m.checkArr = y.checkArr, m.checkValue = y.checkValue, m.resultStr = y.resultStr;
                            break;
                        case"region":
                            k = m.areaCode ? m.getRegionVal(m.areaCode, !0) : m.getRegionVal(m.defaultVal), g = m.hideArea ? {
                                provinces: b.default,
                                citys: v.default[k[0]]
                            } : {provinces: b.default, citys: v.default[k[0]], areas: t.default[k[0]][k[1]]};
                            break;
                        case"selector":
                            var _ = 0;
                            g = m.selectList, m.selectList.map((function (l, e) {
                                l.label == p.defaultVal[0] && (_ = l.value)
                            })), k = [_];
                            break;
                        case"limit":
                            g = n.default.limit.init(m.dayStep, m.startHour, m.endHour, m.minuteStep, m.afterStep, this.defaultVal), k = g.defaultVal || m.defaultVal;
                            break;
                        case"limitHour":
                            g = n.default.limitHour.init(m.dayStep, this.defaultVal), k = g.defaultVal || m.defaultVal;
                            break;
                        case"range":
                            g = n.default.range.init(m.startYear, m.endYear, m.useCurrent(), m.current), k = g.defaultVal || m.defaultVal;
                            break;
                        default:
                            g = n.default.date.init(m.startYear, m.endYear, m.mode, m.step, m.useCurrent(), m.current, m.disabledAfter), k = g.defaultVal || m.defaultVal;
                            break
                    }
                    switch (m.data = g, w) {
                        case"limitHour":
                            d = g.date[k[0]] || g.date[g.date.length - 1], f = g.areas[k[2]] || g.areas[g.areas.length - 1], h = g.hours[k[1]] || g.hours[g.hours.length - 1], m.checkArr = [d, f, h], m.resultStr = "".concat(d.value + " " + f.label + " " + h.label + "时");
                            break;
                        case"limit":
                            d = g.date[k[0]] || g.date[g.date.length - 1], f = g.hours[k[1]] || g.hours[g.hours.length - 1], h = g.minutes[k[2]] || g.minutes[g.minutes.length - 1], m.checkArr = [d, f, h], m.resultStr = "".concat(d.value + " " + f.value + ":" + h.value + ":00");
                            break;
                        case"range":
                            var A = g.fyears[k[0]] || g.fyears[g.fyears.length - 1],
                                x = g.fmonths[k[1]] || g.fmonths[g.fmonths.length - 1],
                                D = g.fdays[k[2]] || g.fdays[g.fdays.length - 1],
                                C = g.tyears[k[4]] || g.tyears[g.tyears.length - 1],
                                S = g.tmonths[k[5]] || g.tmonths[g.tmonths.length - 1],
                                M = g.tdays[k[6]] || g.tdays[g.tdays.length - 1];
                            m.checkArr = [A, x, D, C, S, M], m.resultStr = "".concat(A + "-" + x + "-" + D + "至" + C + "-" + S + "-" + M);
                            break;
                        case"half":
                            l = g.years[k[0]] || g.years[g.years.length - 1], e = g.months[k[1]] || g.months[g.months.length - 1], a = g.days[k[2]] || g.days[g.days.length - 1], o = g.areas[k[3]] || g.areas[g.areas.length - 1], m.checkArr = [l, e, a, o], m.resultStr = "".concat(l + "-" + e + "-" + a + " " + o.label);
                            break;
                        case"date":
                            l = g.years[k[0]] || g.years[g.years.length - 1], e = g.months[k[1]] || g.months[g.months.length - 1], a = g.days[k[2]] || g.days[g.days.length - 1], m.checkArr = [l, e, a], m.resultStr = "".concat(l + "-" + e + "-" + a);
                            break;
                        case"yearMonth":
                            l = g.years[k[0]] || g.years[g.years.length - 1], e = g.months[k[1]] || g.months[g.months.length - 1], m.checkArr = [l, e], m.resultStr = "".concat(l + "-" + e);
                            break;
                        case"dateTime":
                            l = g.years[k[0]] || g.years[g.years.length - 1], e = g.months[k[1]] || g.months[g.months.length - 1], a = g.days[k[2]] || g.days[g.days.length - 1], u = g.hours[k[3]] || g.hours[g.hours.length - 1], i = g.minutes[k[4]] || g.minutes[g.minutes.length - 1], r = g.seconds[k[5]] || g.seconds[g.seconds.length - 1], m.resultStr = "".concat(l + "-" + e + "-" + a + " " + u + ":" + i + ":" + r), m.checkArr = [l, e, a, u, i];
                            break;
                        case"time":
                            u = g.hours[k[0]] || g.hours[g.hours.length - 1], i = g.minutes[k[1]] || g.minutes[g.minutes.length - 1], r = g.seconds[k[2]] || g.seconds[g.seconds.length - 1], m.checkArr = [u, i, r], m.resultStr = "".concat(u + ":" + i + ":" + r);
                            break;
                        case"region":
                            c = g.provinces[k[0]], s = g.citys[k[1]], m.hideArea ? (m.checkArr = [c.label, s.label], m.checkValue = [c.value, s.value], m.resultStr = c.label + s.label) : (o = g.areas[k[2]], m.checkArr = [c.label, s.label, o.label], m.checkValue = [c.value, s.value, o.value], m.resultStr = c.label + s.label + o.label);
                            break;
                        case"selector":
                            m.checkArr = g[k[0]] || g[g.length - 1], m.resultStr = g[k[0]].label || g[g.length - 1].label;
                            break
                    }
                    m.$nextTick((function () {
                        m.pickVal = k
                    }))
                }
            }, mounted: function () {
                this.initData()
            }
        };
        e.default = r
    }, 8801: function (l, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0, a("28a5"), a("6b54");
        var u = function (l) {
            return l < 10 ? "0" + l : l + ""
        }, b = {
            date: {
                init: function (l, e) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "date",
                        b = arguments.length > 3 ? arguments[3] : void 0,
                        v = arguments.length > 4 ? arguments[4] : void 0,
                        t = arguments.length > 5 ? arguments[5] : void 0,
                        n = arguments.length > 6 ? arguments[6] : void 0, i = new Date, r = [],
                        c = new Date(l.toString()), s = new Date(e.toString());
                    l > e && (c = new Date(e.toString()), s = new Date(l.toString()));
                    var o = c.getFullYear(), d = (c.getMonth(), s.getFullYear()), f = [], h = [], p = [], m = [],
                        g = [], w = [], k = [], y = [], _ = t ? 1 * v[1] : v[1] + 1, A = i.getFullYear(),
                        x = i.getMonth() + 1, D = i.getDate(), C = new Date(o, _, 0).getDate();
                    switch (a) {
                        case"half":
                        case"date":
                        case"yearMonth":
                            var S = v[0], M = v[1];
                            if (n) {
                                for (var B = o; B <= A; B++) f.push(B + "");
                                if (S == A) for (var Y = 1; Y <= x; Y++) h.push(u(Y)); else for (var O = 1; O <= 12; O++) h.push(u(O));
                                if (M == x) for (var $ = 1; $ <= D; $++) p.push(u($)); else for (var V = 1; V <= C; V++) p.push(u(V))
                            } else {
                                for (var E = o; E <= d; E++) f.push(E + "");
                                for (var z = 1; z <= 12; z++) h.push(u(z));
                                for (var j = 1; j <= C; j++) p.push(u(j))
                            }
                            break;
                        default:
                            for (var T = o; T <= d; T++) f.push(T + "");
                            for (var H = 1; H <= 12; H++) h.push(u(H));
                            for (var P = 1; P <= C; P++) p.push(u(P));
                            break
                    }
                    for (var I = 0; I < 24; I++) m.push(u(I));
                    for (var N = 0; N < 60; N += 1 * b) g.push(u(N));
                    for (var F = 0; F < 60; F++) w.push(u(F));
                    switch (t && (y = [f.indexOf(v[0]), h.indexOf(v[1]), p.indexOf(v[2]), m.indexOf(v[3]), -1 == g.indexOf(v[4]) ? 0 : g.indexOf(v[4]), w.indexOf(v[5])]), a) {
                        case"range":
                            return t ? (r = [y[0], y[1], y[2], 0, y[0], y[1], y[2]], {
                                years: f,
                                months: h,
                                days: p,
                                defaultVal: r
                            }) : {years: f, months: h, days: p};
                        case"date":
                            return t ? (r = [y[0], y[1], y[2]], {
                                years: f,
                                months: h,
                                days: p,
                                defaultVal: r
                            }) : (r = [-1 == f.indexOf(v[0]) ? 0 : f.indexOf(v[0]), -1 == h.indexOf(v[1]) ? 0 : h.indexOf(v[1]), -1 == p.indexOf(v[2]) ? 0 : p.indexOf(v[2])], {
                                years: f,
                                months: h,
                                days: p,
                                defaultVal: r
                            });
                        case"half":
                            if (k = [{label: "上午", value: 0}, {
                                label: "下午",
                                value: 1
                            }], t) return r = [y[0], y[1], y[2], y[3]], {
                                years: f,
                                months: h,
                                days: p,
                                areas: k,
                                defaultVal: r
                            };
                            var G = 0;
                            return k.map((function (l, e) {
                                l.label == v[3] && (G = l.value)
                            })), r = [-1 == f.indexOf(v[0]) ? 0 : f.indexOf(v[0]), -1 == h.indexOf(v[1]) ? 0 : h.indexOf(v[1]), -1 == p.indexOf(v[2]) ? 0 : p.indexOf(v[2]), G], {
                                years: f,
                                months: h,
                                days: p,
                                areas: k,
                                defaultVal: r
                            };
                        case"yearMonth":
                            return t ? (r = [y[0], y[1]], {
                                years: f,
                                months: h,
                                defaultVal: r
                            }) : (r = [-1 == f.indexOf(v[0]) ? 0 : f.indexOf(v[0]), -1 == h.indexOf(v[1]) ? 0 : h.indexOf(v[1])], {
                                years: f,
                                months: h,
                                defaultVal: r
                            });
                        case"dateTime":
                            return r = t ? y : [-1 == f.indexOf(v[0]) ? 0 : f.indexOf(v[0]), -1 == h.indexOf(v[1]) ? 0 : h.indexOf(v[1]), -1 == p.indexOf(v[2]) ? 0 : p.indexOf(v[2]), -1 == m.indexOf(v[3]) ? 0 : m.indexOf(v[3]), -1 == g.indexOf(v[4]) ? 0 : g.indexOf(v[4]), -1 == w.indexOf(v[5]) ? 0 : w.indexOf(v[5])], {
                                years: f,
                                months: h,
                                days: p,
                                hours: m,
                                minutes: g,
                                seconds: w,
                                defaultVal: r
                            };
                        case"time":
                            return r = t ? [y[3], y[4], y[5]] : [-1 == m.indexOf(v[0]) ? 0 : m.indexOf(v[0]), -1 == g.indexOf(v[1]) ? 0 : g.indexOf(v[1]), -1 == w.indexOf(v[2]) ? 0 : w.indexOf(v[2])], {
                                hours: m,
                                minutes: g,
                                seconds: w,
                                defaultVal: r
                            }
                    }
                }, initMonths: function (l, e) {
                    var a = new Date, b = a.getFullYear(), v = a.getMonth() + 1, t = (a.getDate(), b == l), n = [];
                    if (e) if (t) for (var i = 1; i <= v; i++) n.push(u(i)); else for (var r = 1; r <= 12; r++) n.push(u(r)); else for (var c = 1; c <= 12; c++) n.push(u(c));
                    return n
                }, initDays: function (l, e, a) {
                    var b = new Date, v = b.getFullYear(), t = b.getMonth() + 1, n = b.getDate(), i = v == l && t == e,
                        r = new Date(l, e, 0).getDate(), c = [];
                    if (i && a) for (var s = 1; s <= n; s++) c.push(u(s)); else for (var o = 1; o <= r; o++) c.push(u(o));
                    return c
                }
            }, limitHour: {
                init: function () {
                    for (var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7, e = arguments.length > 1 ? arguments[1] : void 0, a = new Date, b = [], v = [], t = [], n = (new Date).getHours(), i = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], r = [], c = 0, s = 0, o = 0, d = 0; d < l; d++) {
                        var f = void 0, h = void 0, p = void 0, m = void 0;
                        f = a.getFullYear(), h = u(a.getMonth() + 1), p = u(a.getDate()), m = i[a.getDay()];
                        var g = "";
                        switch (d) {
                            case 0:
                                g = "今天";
                                break;
                            case 1:
                                g = "明天";
                                break;
                            case 2:
                                g = "后天";
                                break;
                            default:
                                g = h + "月" + p + "日 " + m;
                                break
                        }
                        b.push({label: g, value: f + "-" + h + "-" + p, today: 0 == d}), a.setDate(a.getDate() + 1)
                    }
                    v = n > 12 ? [{label: "下午", value: 1}] : [{label: "上午", value: 0}, {label: "下午", value: 1}];
                    for (var w = n > 12 ? n - 12 : n; w <= 12; w++) t.push({
                        label: u(w),
                        value: u(n > 12 ? w + 12 : w)
                    });
                    return b.map((function (l, a) {
                        l.label == e[0] && (c = a)
                    })), 0 != c && (v = this.initAreas(b[c]), t = this.initHours(b[c], v[s])), v.map((function (l, a) {
                        l.label == e[1] && (s = a)
                    })), t.map((function (l, a) {
                        l.label == e[2] && (o = a)
                    })), r = [c, s, o], {date: b, areas: v, hours: t, defaultVal: r}
                }, initAreas: function (l) {
                    var e = [], a = (new Date).getHours();
                    return e = l.today && a > 12 ? [{label: "下午", value: 1}] : [{label: "上午", value: 0}, {
                        label: "下午",
                        value: 1
                    }], e
                }, initHours: function (l, e) {
                    var a = [], b = (new Date).getHours();
                    if (l.today) if (1 == e.value && b <= 12) for (var v = 1; v <= 12; v++) a.push({
                        label: u(v),
                        value: u(1 == e.value ? v + 12 : v)
                    }); else for (var t = b > 12 ? b - 12 : b; t <= 12; t++) a.push({
                        label: u(t),
                        value: u(1 == e.value ? t + 12 : t)
                    }); else for (var n = 1; n <= 12; n++) a.push({label: u(n), value: u(1 == e.value ? n + 12 : n)});
                    return a
                }
            }, limit: {
                init: function () {
                    for (var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 7, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 20, b = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, v = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 30, t = arguments.length > 5 ? arguments[5] : void 0, n = new Date, i = new Date((new Date).getTime() + 60 * v * 1e3), r = [], c = [], s = [], o = i.getHours(), d = Math.floor(i.getMinutes() / b) * b, f = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], h = 0, p = 0, m = 0, g = [], w = 0; w < l; w++) {
                        var k = void 0, y = void 0, _ = void 0, A = void 0;
                        k = n.getFullYear(), y = u(n.getMonth() + 1), _ = u(n.getDate()), A = f[n.getDay()];
                        var x = "";
                        switch (w) {
                            case 0:
                                x = "今天";
                                break;
                            case 1:
                                x = "明天";
                                break;
                            case 2:
                                x = "后天";
                                break;
                            default:
                                x = y + "月" + _ + "日 " + A;
                                break
                        }
                        r.push({label: x, value: k + "-" + y + "-" + _, flag: 0 == w}), n.setDate(n.getDate() + 1)
                    }
                    o < e && (o = e), o > a && (o = a);
                    for (var D = 1 * o; D <= 1 * a; D++) c.push({label: u(D), value: u(D), flag: D == o});
                    for (var C = d; C < 60; C += 1 * b) s.push({label: u(C), value: u(C)});
                    return r.map((function (l, e) {
                        l.label == t[0] && (h = e)
                    })), 0 != h && (c = this.initHours(e = 8, a = 20, b = 1, v = 30, r[h].value)), c.map((function (l, e) {
                        l.label == t[1] && (p = e)
                    })), s.map((function (l, e) {
                        l.label == t[2] && (m = e)
                    })), g = [h, p, m], {date: r, hours: c, minutes: s, defaultVal: g}
                }, initHours: function () {
                    var l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                        a = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30),
                        b = arguments.length > 4 ? arguments[4] : void 0, v = [], t = b.split("-"), n = new Date,
                        i = n.getFullYear(), r = n.getMonth() + 1, c = n.getDate(),
                        s = new Date((new Date).getTime() + 60 * a * 1e3), o = s.getHours(),
                        d = i == t[0] && r == t[1] && c == t[2];
                    if (o > e && (o = e), d) for (var f = 1 * o; f <= 1 * e; f++) v.push({
                        label: u(f),
                        value: u(f),
                        flag: f == o
                    }); else for (var h = 1 * l; h <= 1 * e; h++) v.push({label: u(h), value: u(h), flag: !1});
                    return v
                }, initMinutes: function () {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 30,
                        a = arguments.length > 4 ? arguments[4] : void 0,
                        b = arguments.length > 5 ? arguments[5] : void 0, v = [],
                        t = new Date((new Date).getTime() + 60 * e * 1e3), n = a.split("-"), i = new Date,
                        r = i.getFullYear(), c = i.getMonth() + 1, s = i.getDate(), o = t.getHours(),
                        d = Math.floor(t.getMinutes() / l) * l, f = r == n[0] && c == n[1] && s == n[2];
                    if (f) if (b == o) for (var h = d; h < 60; h += 1 * l) v.push({
                        label: u(h),
                        value: u(h)
                    }); else for (var p = 0; p < 60; p += 1 * l) v.push({
                        label: u(p),
                        value: u(p)
                    }); else for (var m = 0; m < 60; m += 1 * l) v.push({label: u(m), value: u(m)});
                    return v
                }
            }, range: {
                init: function (l, e, a, b) {
                    new Date;
                    var v = [], t = new Date(l.toString()), n = new Date(e.toString());
                    l > e && (t = new Date(e.toString()), n = new Date(l.toString()));
                    for (var i = t.getFullYear(), r = (t.getMonth(), n.getFullYear()), c = [], s = [], o = [], d = [], f = [], h = [], p = b ? 1 * a[1] : a[1] + 1, m = new Date(i, p, 0).getDate(), g = i; g <= r; g++) c.push(g + "");
                    for (var w = 1; w <= 12; w++) s.push(u(w));
                    for (var k = 1; k <= m; k++) o.push(u(k));
                    for (var y = i; y <= r; y++) d.push(y + "");
                    for (var _ = 1; _ <= 12; _++) f.push(u(_));
                    for (var A = 1; A <= m; A++) h.push(u(A));
                    return v = [-1 == c.indexOf(a[0]) ? 0 : c.indexOf(a[0]), -1 == s.indexOf(a[1]) ? 0 : s.indexOf(a[1]), -1 == o.indexOf(a[2]) ? 0 : o.indexOf(a[2]), 0, -1 == d.indexOf(a[4]) ? 0 : d.indexOf(a[4]), -1 == f.indexOf(a[5]) ? 0 : f.indexOf(a[5]), -1 == h.indexOf(a[6]) ? 0 : h.indexOf(a[6])], {
                        fyears: c,
                        fmonths: s,
                        fdays: o,
                        tyears: d,
                        tmonths: f,
                        tdays: h,
                        defaultVal: v
                    }
                }, initDays: function (l, e) {
                    for (var a = new Date(l, e, 0).getDate(), b = [], v = 1; v <= a; v++) b.push(u(v));
                    return b
                }
            }
        }, v = b;
        e.default = v
    }, 8946: function (l, e, a) {
        "use strict";
        var u = a("3eda"), b = a.n(u);
        b.a
    }, "95d5": function (l, e, a) {
        var u = a("40c3"), b = a("5168")("iterator"), v = a("481b");
        l.exports = a("584a").isIterable = function (l) {
            var e = Object(l);
            return void 0 !== e[b] || "@@iterator" in e || v.hasOwnProperty(u(e))
        }
    }, "95ef": function (l, e, a) {
        "use strict";
        var u = a("1f37"), b = a.n(u);
        b.a
    }, 9686: function (l, e, a) {
        var u = a("4c8f");
        "string" === typeof u && (u = [[l.i, u, ""]]), u.locals && (l.exports = u.locals);
        var b = a("4f06").default;
        b("213265a8", u, !0, {sourceMap: !1, shadowMode: !1})
    }, a6d7: function (l, e, a) {
        "use strict";
        a.r(e);
        var u = a("b544"), b = a.n(u);
        for (var v in u) "default" !== v && function (l) {
            a.d(e, l, (function () {
                return u[l]
            }))
        }(v);
        e["default"] = b.a
    }, a745: function (l, e, a) {
        l.exports = a("f410")
    }, b544: function (l, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var u = {
            name: "UniPopup",
            props: {
                animation: {type: Boolean, default: !0},
                type: {type: String, default: "center"},
                radius: {type: Boolean, default: !1},
                custom: {type: Boolean, default: !1},
                maskClick: {type: Boolean, default: !0},
                show: {type: Boolean, default: !0}
            },
            data: function () {
                return {ani: "", showPopup: !1}
            },
            watch: {
                show: function (l) {
                    l ? this.open() : this.close()
                }
            },
            created: function () {
            },
            methods: {
                clear: function () {
                }, open: function () {
                    var l = this;
                    this.$emit("change", {show: !0}), this.showPopup = !0, this.$nextTick((function () {
                        setTimeout((function () {
                            l.ani = "uni-" + l.type
                        }), 30)
                    }))
                }, close: function (l) {
                    var e = this;
                    !this.maskClick && l || (this.$emit("change", {show: !1}), this.ani = "", this.$nextTick((function () {
                        setTimeout((function () {
                            e.showPopup = !1
                        }), 300)
                    })))
                }
            }
        };
        e.default = u
    }, c228: function (l, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var u = {
            name: "UniCalendarItem", props: {
                canlender: {
                    type: null, default: function () {
                        return {}
                    }
                }, lunar: {type: Boolean, default: !1}
            }, data: function () {
                return {}
            }, created: function () {
            }, methods: {
                selectDays: function (l, e, a, u, b) {
                    this.$emit("selectDays", {week: l, index: e, ischeck: a, isDay: u, lunar: b})
                }
            }
        };
        e.default = u
    }, c825: function (l, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var u = [{label: "北京市", value: "11"}, {label: "天津市", value: "12"}, {label: "河北省", value: "13"}, {
            label: "山西省",
            value: "14"
        }, {label: "内蒙古自治区", value: "15"}, {label: "辽宁省", value: "21"}, {label: "吉林省", value: "22"}, {
            label: "黑龙江省",
            value: "23"
        }, {label: "上海市", value: "31"}, {label: "江苏省", value: "32"}, {label: "浙江省", value: "33"}, {
            label: "安徽省",
            value: "34"
        }, {label: "福建省", value: "35"}, {label: "江西省", value: "36"}, {label: "山东省", value: "37"}, {
            label: "河南省",
            value: "41"
        }, {label: "湖北省", value: "42"}, {label: "湖南省", value: "43"}, {label: "广东省", value: "44"}, {
            label: "广西壮族自治区",
            value: "45"
        }, {label: "海南省", value: "46"}, {label: "重庆市", value: "50"}, {label: "四川省", value: "51"}, {
            label: "贵州省",
            value: "52"
        }, {label: "云南省", value: "53"}, {label: "西藏自治区", value: "54"}, {label: "陕西省", value: "61"}, {
            label: "甘肃省",
            value: "62"
        }, {label: "青海省", value: "63"}, {label: "宁夏回族自治区", value: "64"}, {label: "新疆维吾尔自治区", value: "65"}, {
            label: "台湾",
            value: "66"
        }, {label: "香港", value: "67"}, {label: "澳门", value: "68"}], b = u;
        e.default = b
    }, c8bb: function (l, e, a) {
        l.exports = a("54a1")
    }, d5a8: function (l, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var u = [[{label: "市辖区", value: "1101"}], [{label: "市辖区", value: "1201"}], [{
            label: "石家庄市",
            value: "1301"
        }, {label: "唐山市", value: "1302"}, {label: "秦皇岛市", value: "1303"}, {label: "邯郸市", value: "1304"}, {
            label: "邢台市",
            value: "1305"
        }, {label: "保定市", value: "1306"}, {label: "张家口市", value: "1307"}, {label: "承德市", value: "1308"}, {
            label: "沧州市",
            value: "1309"
        }, {label: "廊坊市", value: "1310"}, {label: "衡水市", value: "1311"}], [{label: "太原市", value: "1401"}, {
            label: "大同市",
            value: "1402"
        }, {label: "阳泉市", value: "1403"}, {label: "长治市", value: "1404"}, {label: "晋城市", value: "1405"}, {
            label: "朔州市",
            value: "1406"
        }, {label: "晋中市", value: "1407"}, {label: "运城市", value: "1408"}, {label: "忻州市", value: "1409"}, {
            label: "临汾市",
            value: "1410"
        }, {label: "吕梁市", value: "1411"}], [{label: "呼和浩特市", value: "1501"}, {
            label: "包头市",
            value: "1502"
        }, {label: "乌海市", value: "1503"}, {label: "赤峰市", value: "1504"}, {label: "通辽市", value: "1505"}, {
            label: "鄂尔多斯市",
            value: "1506"
        }, {label: "呼伦贝尔市", value: "1507"}, {label: "巴彦淖尔市", value: "1508"}, {
            label: "乌兰察布市",
            value: "1509"
        }, {label: "兴安盟", value: "1522"}, {label: "锡林郭勒盟", value: "1525"}, {
            label: "阿拉善盟",
            value: "1529"
        }], [{label: "沈阳市", value: "2101"}, {label: "大连市", value: "2102"}, {label: "鞍山市", value: "2103"}, {
            label: "抚顺市",
            value: "2104"
        }, {label: "本溪市", value: "2105"}, {label: "丹东市", value: "2106"}, {label: "锦州市", value: "2107"}, {
            label: "营口市",
            value: "2108"
        }, {label: "阜新市", value: "2109"}, {label: "辽阳市", value: "2110"}, {label: "盘锦市", value: "2111"}, {
            label: "铁岭市",
            value: "2112"
        }, {label: "朝阳市", value: "2113"}, {label: "葫芦岛市", value: "2114"}], [{
            label: "长春市",
            value: "2201"
        }, {label: "吉林市", value: "2202"}, {label: "四平市", value: "2203"}, {label: "辽源市", value: "2204"}, {
            label: "通化市",
            value: "2205"
        }, {label: "白山市", value: "2206"}, {label: "松原市", value: "2207"}, {
            label: "白城市",
            value: "2208"
        }, {label: "延边朝鲜族自治州", value: "2224"}], [{label: "哈尔滨市", value: "2301"}, {
            label: "齐齐哈尔市",
            value: "2302"
        }, {label: "鸡西市", value: "2303"}, {label: "鹤岗市", value: "2304"}, {label: "双鸭山市", value: "2305"}, {
            label: "大庆市",
            value: "2306"
        }, {label: "伊春市", value: "2307"}, {label: "佳木斯市", value: "2308"}, {
            label: "七台河市",
            value: "2309"
        }, {label: "牡丹江市", value: "2310"}, {label: "黑河市", value: "2311"}, {
            label: "绥化市",
            value: "2312"
        }, {label: "大兴安岭地区", value: "2327"}], [{label: "市辖区", value: "3101"}], [{
            label: "南京市",
            value: "3201"
        }, {label: "无锡市", value: "3202"}, {label: "徐州市", value: "3203"}, {label: "常州市", value: "3204"}, {
            label: "苏州市",
            value: "3205"
        }, {label: "南通市", value: "3206"}, {label: "连云港市", value: "3207"}, {label: "淮安市", value: "3208"}, {
            label: "盐城市",
            value: "3209"
        }, {label: "扬州市", value: "3210"}, {label: "镇江市", value: "3211"}, {label: "泰州市", value: "3212"}, {
            label: "宿迁市",
            value: "3213"
        }], [{label: "杭州市", value: "3301"}, {label: "宁波市", value: "3302"}, {label: "温州市", value: "3303"}, {
            label: "嘉兴市",
            value: "3304"
        }, {label: "湖州市", value: "3305"}, {label: "绍兴市", value: "3306"}, {label: "金华市", value: "3307"}, {
            label: "衢州市",
            value: "3308"
        }, {label: "舟山市", value: "3309"}, {label: "台州市", value: "3310"}, {label: "丽水市", value: "3311"}], [{
            label: "合肥市",
            value: "3401"
        }, {label: "芜湖市", value: "3402"}, {label: "蚌埠市", value: "3403"}, {label: "淮南市", value: "3404"}, {
            label: "马鞍山市",
            value: "3405"
        }, {label: "淮北市", value: "3406"}, {label: "铜陵市", value: "3407"}, {label: "安庆市", value: "3408"}, {
            label: "黄山市",
            value: "3410"
        }, {label: "滁州市", value: "3411"}, {label: "阜阳市", value: "3412"}, {label: "宿州市", value: "3413"}, {
            label: "六安市",
            value: "3415"
        }, {label: "亳州市", value: "3416"}, {label: "池州市", value: "3417"}, {label: "宣城市", value: "3418"}], [{
            label: "福州市",
            value: "3501"
        }, {label: "厦门市", value: "3502"}, {label: "莆田市", value: "3503"}, {label: "三明市", value: "3504"}, {
            label: "泉州市",
            value: "3505"
        }, {label: "漳州市", value: "3506"}, {label: "南平市", value: "3507"}, {label: "龙岩市", value: "3508"}, {
            label: "宁德市",
            value: "3509"
        }], [{label: "南昌市", value: "3601"}, {label: "景德镇市", value: "3602"}, {
            label: "萍乡市",
            value: "3603"
        }, {label: "九江市", value: "3604"}, {label: "新余市", value: "3605"}, {label: "鹰潭市", value: "3606"}, {
            label: "赣州市",
            value: "3607"
        }, {label: "吉安市", value: "3608"}, {label: "宜春市", value: "3609"}, {label: "抚州市", value: "3610"}, {
            label: "上饶市",
            value: "3611"
        }], [{label: "济南市", value: "3701"}, {label: "青岛市", value: "3702"}, {label: "淄博市", value: "3703"}, {
            label: "枣庄市",
            value: "3704"
        }, {label: "东营市", value: "3705"}, {label: "烟台市", value: "3706"}, {label: "潍坊市", value: "3707"}, {
            label: "济宁市",
            value: "3708"
        }, {label: "泰安市", value: "3709"}, {label: "威海市", value: "3710"}, {label: "日照市", value: "3711"}, {
            label: "莱芜市",
            value: "3712"
        }, {label: "临沂市", value: "3713"}, {label: "德州市", value: "3714"}, {label: "聊城市", value: "3715"}, {
            label: "滨州市",
            value: "3716"
        }, {label: "菏泽市", value: "3717"}], [{label: "郑州市", value: "4101"}, {label: "开封市", value: "4102"}, {
            label: "洛阳市",
            value: "4103"
        }, {label: "平顶山市", value: "4104"}, {label: "安阳市", value: "4105"}, {label: "鹤壁市", value: "4106"}, {
            label: "新乡市",
            value: "4107"
        }, {label: "焦作市", value: "4108"}, {label: "濮阳市", value: "4109"}, {label: "许昌市", value: "4110"}, {
            label: "漯河市",
            value: "4111"
        }, {label: "三门峡市", value: "4112"}, {label: "南阳市", value: "4113"}, {label: "商丘市", value: "4114"}, {
            label: "信阳市",
            value: "4115"
        }, {label: "周口市", value: "4116"}, {label: "驻马店市", value: "4117"}, {
            label: "省直辖县级行政区划",
            value: "4190"
        }], [{label: "武汉市", value: "4201"}, {label: "黄石市", value: "4202"}, {label: "十堰市", value: "4203"}, {
            label: "宜昌市",
            value: "4205"
        }, {label: "襄阳市", value: "4206"}, {label: "鄂州市", value: "4207"}, {label: "荆门市", value: "4208"}, {
            label: "孝感市",
            value: "4209"
        }, {label: "荆州市", value: "4210"}, {label: "黄冈市", value: "4211"}, {label: "咸宁市", value: "4212"}, {
            label: "随州市",
            value: "4213"
        }, {label: "恩施土家族苗族自治州", value: "4228"}, {label: "省直辖县级行政区划", value: "4290"}], [{
            label: "长沙市",
            value: "4301"
        }, {label: "株洲市", value: "4302"}, {label: "湘潭市", value: "4303"}, {label: "衡阳市", value: "4304"}, {
            label: "邵阳市",
            value: "4305"
        }, {label: "岳阳市", value: "4306"}, {label: "常德市", value: "4307"}, {label: "张家界市", value: "4308"}, {
            label: "益阳市",
            value: "4309"
        }, {label: "郴州市", value: "4310"}, {label: "永州市", value: "4311"}, {label: "怀化市", value: "4312"}, {
            label: "娄底市",
            value: "4313"
        }, {label: "湘西土家族苗族自治州", value: "4331"}], [{label: "广州市", value: "4401"}, {
            label: "韶关市",
            value: "4402"
        }, {label: "深圳市", value: "4403"}, {label: "珠海市", value: "4404"}, {label: "汕头市", value: "4405"}, {
            label: "佛山市",
            value: "4406"
        }, {label: "江门市", value: "4407"}, {label: "湛江市", value: "4408"}, {label: "茂名市", value: "4409"}, {
            label: "肇庆市",
            value: "4412"
        }, {label: "惠州市", value: "4413"}, {label: "梅州市", value: "4414"}, {label: "汕尾市", value: "4415"}, {
            label: "河源市",
            value: "4416"
        }, {label: "阳江市", value: "4417"}, {label: "清远市", value: "4418"}, {label: "东莞市", value: "4419"}, {
            label: "中山市",
            value: "4420"
        }, {label: "潮州市", value: "4451"}, {label: "揭阳市", value: "4452"}, {label: "云浮市", value: "4453"}], [{
            label: "南宁市",
            value: "4501"
        }, {label: "柳州市", value: "4502"}, {label: "桂林市", value: "4503"}, {label: "梧州市", value: "4504"}, {
            label: "北海市",
            value: "4505"
        }, {label: "防城港市", value: "4506"}, {label: "钦州市", value: "4507"}, {label: "贵港市", value: "4508"}, {
            label: "玉林市",
            value: "4509"
        }, {label: "百色市", value: "4510"}, {label: "贺州市", value: "4511"}, {label: "河池市", value: "4512"}, {
            label: "来宾市",
            value: "4513"
        }, {label: "崇左市", value: "4514"}], [{label: "海口市", value: "4601"}, {label: "三亚市", value: "4602"}, {
            label: "三沙市",
            value: "4603"
        }, {label: "儋州市", value: "4604"}, {label: "省直辖县级行政区划", value: "4690"}], [{
            label: "市辖区",
            value: "5001"
        }, {label: "县", value: "5002"}], [{label: "成都市", value: "5101"}, {label: "自贡市", value: "5103"}, {
            label: "攀枝花市",
            value: "5104"
        }, {label: "泸州市", value: "5105"}, {label: "德阳市", value: "5106"}, {label: "绵阳市", value: "5107"}, {
            label: "广元市",
            value: "5108"
        }, {label: "遂宁市", value: "5109"}, {label: "内江市", value: "5110"}, {label: "乐山市", value: "5111"}, {
            label: "南充市",
            value: "5113"
        }, {label: "眉山市", value: "5114"}, {label: "宜宾市", value: "5115"}, {label: "广安市", value: "5116"}, {
            label: "达州市",
            value: "5117"
        }, {label: "雅安市", value: "5118"}, {label: "巴中市", value: "5119"}, {
            label: "资阳市",
            value: "5120"
        }, {label: "阿坝藏族羌族自治州", value: "5132"}, {label: "甘孜藏族自治州", value: "5133"}, {
            label: "凉山彝族自治州",
            value: "5134"
        }], [{label: "贵阳市", value: "5201"}, {label: "六盘水市", value: "5202"}, {
            label: "遵义市",
            value: "5203"
        }, {label: "安顺市", value: "5204"}, {label: "毕节市", value: "5205"}, {
            label: "铜仁市",
            value: "5206"
        }, {label: "黔西南布依族苗族自治州", value: "5223"}, {label: "黔东南苗族侗族自治州", value: "5226"}, {
            label: "黔南布依族苗族自治州",
            value: "5227"
        }], [{label: "昆明市", value: "5301"}, {label: "曲靖市", value: "5303"}, {label: "玉溪市", value: "5304"}, {
            label: "保山市",
            value: "5305"
        }, {label: "昭通市", value: "5306"}, {label: "丽江市", value: "5307"}, {label: "普洱市", value: "5308"}, {
            label: "临沧市",
            value: "5309"
        }, {label: "楚雄彝族自治州", value: "5323"}, {label: "红河哈尼族彝族自治州", value: "5325"}, {
            label: "文山壮族苗族自治州",
            value: "5326"
        }, {label: "西双版纳傣族自治州", value: "5328"}, {label: "大理白族自治州", value: "5329"}, {
            label: "德宏傣族景颇族自治州",
            value: "5331"
        }, {label: "怒江傈僳族自治州", value: "5333"}, {label: "迪庆藏族自治州", value: "5334"}], [{
            label: "拉萨市",
            value: "5401"
        }, {label: "日喀则市", value: "5402"}, {label: "昌都市", value: "5403"}, {label: "林芝市", value: "5404"}, {
            label: "山南市",
            value: "5405"
        }, {label: "那曲地区", value: "5424"}, {label: "阿里地区", value: "5425"}], [{
            label: "西安市",
            value: "6101"
        }, {label: "铜川市", value: "6102"}, {label: "宝鸡市", value: "6103"}, {label: "咸阳市", value: "6104"}, {
            label: "渭南市",
            value: "6105"
        }, {label: "延安市", value: "6106"}, {label: "汉中市", value: "6107"}, {label: "榆林市", value: "6108"}, {
            label: "安康市",
            value: "6109"
        }, {label: "商洛市", value: "6110"}], [{label: "兰州市", value: "6201"}, {
            label: "嘉峪关市",
            value: "6202"
        }, {label: "金昌市", value: "6203"}, {label: "白银市", value: "6204"}, {label: "天水市", value: "6205"}, {
            label: "武威市",
            value: "6206"
        }, {label: "张掖市", value: "6207"}, {label: "平凉市", value: "6208"}, {label: "酒泉市", value: "6209"}, {
            label: "庆阳市",
            value: "6210"
        }, {label: "定西市", value: "6211"}, {label: "陇南市", value: "6212"}, {
            label: "临夏回族自治州",
            value: "6229"
        }, {label: "甘南藏族自治州", value: "6230"}], [{label: "西宁市", value: "6301"}, {
            label: "海东市",
            value: "6302"
        }, {label: "海北藏族自治州", value: "6322"}, {label: "黄南藏族自治州", value: "6323"}, {
            label: "海南藏族自治州",
            value: "6325"
        }, {label: "果洛藏族自治州", value: "6326"}, {label: "玉树藏族自治州", value: "6327"}, {
            label: "海西蒙古族藏族自治州",
            value: "6328"
        }], [{label: "银川市", value: "6401"}, {label: "石嘴山市", value: "6402"}, {
            label: "吴忠市",
            value: "6403"
        }, {label: "固原市", value: "6404"}, {label: "中卫市", value: "6405"}], [{
            label: "乌鲁木齐市",
            value: "6501"
        }, {label: "克拉玛依市", value: "6502"}, {label: "吐鲁番市", value: "6504"}, {
            label: "哈密市",
            value: "6505"
        }, {label: "昌吉回族自治州", value: "6523"}, {label: "博尔塔拉蒙古自治州", value: "6527"}, {
            label: "巴音郭楞蒙古自治州",
            value: "6528"
        }, {label: "阿克苏地区", value: "6529"}, {label: "克孜勒苏柯尔克孜自治州", value: "6530"}, {
            label: "喀什地区",
            value: "6531"
        }, {label: "和田地区", value: "6532"}, {label: "伊犁哈萨克自治州", value: "6540"}, {
            label: "塔城地区",
            value: "6542"
        }, {label: "阿勒泰地区", value: "6543"}, {label: "自治区直辖县级行政区划", value: "6590"}], [{
            label: "台北",
            value: "6601"
        }, {label: "高雄", value: "6602"}, {label: "基隆", value: "6603"}, {label: "台中", value: "6604"}, {
            label: "台南",
            value: "6605"
        }, {label: "新竹", value: "6606"}, {label: "嘉义", value: "6607"}, {label: "宜兰", value: "6608"}, {
            label: "桃园",
            value: "6609"
        }, {label: "苗栗", value: "6610"}, {label: "彰化", value: "6611"}, {label: "南投", value: "6612"}, {
            label: "云林",
            value: "6613"
        }, {label: "屏东", value: "6614"}, {label: "台东", value: "6615"}, {label: "花莲", value: "6616"}, {
            label: "澎湖",
            value: "6617"
        }], [{label: "香港岛", value: "6701"}, {label: "九龙", value: "6702"}, {
            label: "新界",
            value: "6703"
        }], [{label: "澳门半岛", value: "6801"}, {label: "氹仔岛", value: "6802"}, {
            label: "路环岛",
            value: "6803"
        }, {label: "路氹城", value: "6804"}]], b = u;
        e.default = b
    }, d666: function (l, e, a) {
        "use strict";
        var u, b = function () {
            var l = this, e = l.$createElement, a = l._self._c || e;
            return l.showPopup ? a("v-uni-view", {staticClass: "uni-popup"}, [a("v-uni-view", {
                staticClass: "uni-popup__mask",
                class: [l.ani, l.animation ? "ani" : "", l.custom ? "" : "uni-custom"],
                on: {
                    click: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.close(!0)
                    }
                }
            }), a("v-uni-view", {
                staticClass: "uni-popup__wrapper",
                class: [l.type, l.ani, l.animation ? "ani" : "", l.custom ? "" : "uni-custom"],
                on: {
                    click: function (e) {
                        arguments[0] = e = l.$handleEvent(e), l.close(!0)
                    }
                }
            }, [a("v-uni-view", {
                staticClass: "uni-popup__wrapper-box",
                class: {radius: l.radius},
                on: {
                    click: function (e) {
                        e.stopPropagation(), arguments[0] = e = l.$handleEvent(e), l.clear.apply(void 0, arguments)
                    }
                }
            }, [l._t("default")], 2)], 1)], 1) : l._e()
        }, v = [];
        a.d(e, "b", (function () {
            return b
        })), a.d(e, "c", (function () {
            return v
        })), a.d(e, "a", (function () {
            return u
        }))
    }, d668: function (l, e, a) {
        "use strict";
        a.r(e);
        var u = a("1b09"), b = a("fb39");
        for (var v in b) "default" !== v && function (l) {
            a.d(e, l, (function () {
                return b[l]
            }))
        }(v);
        a("2541");
        var t, n = a("f0c5"),
            i = Object(n["a"])(b["default"], u["b"], u["c"], !1, null, "06f1ae09", null, !1, u["a"], t);
        e["default"] = i.exports
    }, ec4e: function (l, e, a) {
        "use strict";
        a.r(e);
        var u = a("0fee"), b = a("241d");
        for (var v in b) "default" !== v && function (l) {
            a.d(e, l, (function () {
                return b[l]
            }))
        }(v);
        a("8946");
        var t, n = a("f0c5"),
            i = Object(n["a"])(b["default"], u["b"], u["c"], !1, null, "1211c663", null, !1, u["a"], t);
        e["default"] = i.exports
    }, f3db: function (l, e, a) {
        var u = a("24fb");
        e = u(!1), e.push([l.i, '@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-calender__body-date-week[data-v-06f1ae09]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;border-bottom:1px #f5f5f5 solid}.uni-calender__body-date-week[data-v-06f1ae09]:last-child{border:none}.uni-calender__body-date-week .uni-calender__date[data-v-06f1ae09]{position:relative;width:100%;text-align:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;color:#000;background:#fff;box-sizing:border-box;padding:%?10?% 0;line-height:1.5;z-index:2}.uni-calender__body-date-week .uni-calender__date .uni-calender__lunar[data-v-06f1ae09]{font-size:%?20?%;color:#000;line-height:1.2}.uni-calender__body-date-week .uni-calender__date .uni-calender__circle-box[data-v-06f1ae09]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?80?%;height:%?80?%;-webkit-flex-shrink:0;flex-shrink:0;border-radius:%?10?%;line-height:1.2}.uni-calender__body-date-week .uni-calender__date.uni-calender__disable[data-v-06f1ae09]{color:#ccc}.uni-calender__body-date-week .uni-calender__date.uni-calender__disable .uni-calender__lunar[data-v-06f1ae09]{color:#ccc}.uni-calender__body-date-week .uni-calender__date.uni-calender__is-day[data-v-06f1ae09]{color:#fd2e32}.uni-calender__body-date-week .uni-calender__date.uni-calender__is-day .uni-calender__lunar[data-v-06f1ae09]{color:#fd2e32}.uni-calender__body-date-week .uni-calender__date.uni-calender__date-current[data-v-06f1ae09]{color:#fff;box-sizing:border-box}.uni-calender__body-date-week .uni-calender__date.uni-calender__date-current .uni-calender__circle-box[data-v-06f1ae09]{background:#fd2e32}.uni-calender__body-date-week .uni-calender__date.uni-calender__date-current.uni-calender__active[data-v-06f1ae09]{color:#fff}.uni-calender__body-date-week .uni-calender__date.uni-calender__date-current.uni-calender__multiple .uni-calender__circle-box[data-v-06f1ae09]{border-radius:50%;background:#fd2e32}.uni-calender__body-date-week .uni-calender__date.uni-calender__date-current .uni-calender__lunar[data-v-06f1ae09]{color:#fff}.uni-calender__body-date-week .uni-calender__date.uni-calender__multiple-box[data-v-06f1ae09]{color:#fff}.uni-calender__body-date-week .uni-calender__date.uni-calender__multiple-box .uni-calender__lunar[data-v-06f1ae09]{color:#fff}.uni-calender__body-date-week .uni-calender__date .uni-calender__data-circle[data-v-06f1ae09]{position:absolute;top:%?5?%;right:%?5?%;width:%?10?%;height:%?10?%;border-radius:50%;background:#ff5a5f;border:1px #fff solid;z-index:2}.uni-calender__body-date-week .uni-calender__date .uni-calender_check-bg[data-v-06f1ae09]{position:absolute;top:%?10?%;bottom:%?10?%;left:0;right:0;z-index:-1}.uni-calender__body-date-week .uni-calender__date .uni-calender_check-bg.uni-calender_check[data-v-06f1ae09]{background:#ffd3d3}.uni-calender__body-date-week .uni-calender__date .uni-calender_check-bg.calender_check-begin[data-v-06f1ae09]{left:%?20?%;border-top-left-radius:%?100?%;border-bottom-left-radius:%?100?%}.uni-calender__body-date-week .uni-calender__date .uni-calender_check-bg.calender_check-end[data-v-06f1ae09]{right:%?20?%;border-top-right-radius:%?100?%;border-bottom-right-radius:%?100?%}', ""]), l.exports = e
    }, f410: function (l, e, a) {
        a("1af6"), l.exports = a("584a").Array.isArray
    }, fb39: function (l, e, a) {
        "use strict";
        a.r(e);
        var u = a("c228"), b = a.n(u);
        for (var v in u) "default" !== v && function (l) {
            a.d(e, l, (function () {
                return u[l]
            }))
        }(v);
        e["default"] = b.a
    }, fed6: function (l, e, a) {
        "use strict";
        var u = a("9686"), b = a.n(u);
        b.a
    }
}]);