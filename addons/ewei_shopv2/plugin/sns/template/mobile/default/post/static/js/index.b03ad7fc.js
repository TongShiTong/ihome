(function (e) {
    function n(n) {
        for (var o, a, u = n[0], c = n[1], s = n[2], f = 0, l = []; f < u.length; f++) a = u[f], i[a] && l.push(i[a][0]), i[a] = 0;
        for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
        p && p(n);
        while (l.length) l.shift()();
        return r.push.apply(r, s || []), t()
    }

    function t() {
        for (var e, n = 0; n < r.length; n++) {
            for (var t = r[n], o = !0, a = 1; a < t.length; a++) {
                var c = t[a];
                0 !== i[c] && (o = !1)
            }
            o && (r.splice(n--, 1), e = u(u.s = t[0]))
        }
        return e
    }

    var o = {}, i = {index: 0}, r = [];

    function a(e) {
        return u.p + "../addons/ewei_shopv2/plugin/sns/template/mobile/default/post/static/js/" + ({"pages-index-index": "pages-index-index"}[e] || e) + "." + {"pages-index-index": "f208c3c6"}[e] + ".js"
    }

    function u(n) {
        if (o[n]) return o[n].exports;
        var t = o[n] = {i: n, l: !1, exports: {}};
        return e[n].call(t.exports, t, t.exports, u), t.l = !0, t.exports
    }

    u.e = function (e) {
        var n = [], t = i[e];
        if (0 !== t) if (t) n.push(t[2]); else {
            var o = new Promise((function (n, o) {
                t = i[e] = [n, o]
            }));
            n.push(t[2] = o);
            var r, c = document.createElement("script");
            c.charset = "utf-8", c.timeout = 120, u.nc && c.setAttribute("nonce", u.nc), c.src = a(e), r = function (n) {
                c.onerror = c.onload = null, clearTimeout(s);
                var t = i[e];
                if (0 !== t) {
                    if (t) {
                        var o = n && ("load" === n.type ? "missing" : n.type), r = n && n.target && n.target.src,
                            a = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
                        a.type = o, a.request = r, t[1](a)
                    }
                    i[e] = void 0
                }
            };
            var s = setTimeout((function () {
                r({type: "timeout", target: c})
            }), 12e4);
            c.onerror = c.onload = r, document.head.appendChild(c)
        }
        return Promise.all(n)
    }, u.m = e, u.c = o, u.d = function (e, n, t) {
        u.o(e, n) || Object.defineProperty(e, n, {enumerable: !0, get: t})
    }, u.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, u.t = function (e, n) {
        if (1 & n && (e = u(e)), 8 & n) return e;
        if (4 & n && "object" === typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (u.r(t), Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var o in e) u.d(t, o, function (n) {
            return e[n]
        }.bind(null, o));
        return t
    }, u.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return u.d(n, "a", n), n
    }, u.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, u.p = "/", u.oe = function (e) {
        throw console.error(e), e
    };
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [], s = c.push.bind(c);
    c.push = n, c = c.slice();
    for (var f = 0; f < c.length; f++) n(c[f]);
    var p = s;
    r.push([0, "chunk-vendors"]), t()
})({
    0: function (e, n, t) {
        e.exports = t("f892")
    }, "3fa2": function (e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = void 0;
        var o = {
            pages: {"pages/index/index": {navigationBarTitleText: "", navigationStyle: "custom"}},
            globalStyle: {
                navigationBarTextStyle: "black",
                navigationBarTitleText: "uni-app",
                navigationBarBackgroundColor: "#F8F8F8",
                backgroundColor: "#F8F8F8"
            }
        };
        n.default = o
    }, 4266: function (e, n, t) {
        "use strict";
        t.r(n);
        var o = t("6905"), i = t.n(o);
        for (var r in o) "default" !== r && function (e) {
            t.d(n, e, (function () {
                return o[e]
            }))
        }(r);
        n["default"] = i.a
    }, 5762: function (e, n, t) {
        var o = t("24fb");
        n = o(!1), n.push([e.i, ".uni-picker-container .uni-picker-action{font-size:%?30?%}.uni-picker-container .uni-picker-action.uni-picker-action-confirm{color:#6b0415;font-size:%?30?%}", ""]), e.exports = n
    }, "5abd": function (e, n, t) {
        "use strict";
        var o = t("d809"), i = t.n(o);
        i.a
    }, "624d": function (e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = void 0;
        var o = {appid: "__UNI__DC539C3"};
        n.default = o
    }, 6905: function (e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0}), n.default = void 0;
        var o = {
            onLaunch: function () {
                console.log("App Launch")
            }, onShow: function () {
                console.log("App Show")
            }, onHide: function () {
                console.log("App Hide")
            }
        };
        n.default = o
    }, "6d21": function (e, n, t) {
        "use strict";
        var o, i = function () {
            var e = this, n = e.$createElement, t = e._self._c || n;
            return t("App", {attrs: {keepAliveInclude: e.keepAliveInclude}})
        }, r = [];
        t.d(n, "b", (function () {
            return i
        })), t.d(n, "c", (function () {
            return r
        })), t.d(n, "a", (function () {
            return o
        }))
    }, "9dd9": function (e, n, t) {
        "use strict";
        (function (e) {
            var n = t("4ea4"), o = n(t("e143"));
            e["____DC539C3____"] = !0, delete e["____DC539C3____"], e.__uniConfig = {
                globalStyle: {
                    navigationBarTextStyle: "black",
                    navigationBarTitleText: "uni-app",
                    navigationBarBackgroundColor: "#F8F8F8",
                    backgroundColor: "#F8F8F8"
                }
            }, e.__uniConfig.router = {mode: "hash", base: "/"}, e.__uniConfig["async"] = {
                loading: "AsyncLoading",
                error: "AsyncError",
                delay: 200,
                timeout: 6e4
            }, e.__uniConfig.debug = !1, e.__uniConfig.networkTimeout = {
                request: 6e4,
                connectSocket: 6e4,
                uploadFile: 6e4,
                downloadFile: 6e4
            }, e.__uniConfig.sdkConfigs = {}, e.__uniConfig.qqMapKey = "XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2", e.__uniConfig.nvue = {"flex-direction": "column"}, o.default.component("pages-index-index", (function (e) {
                var n = {
                    component: t.e("pages-index-index").then(function () {
                        return e(t("0de5"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function (e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError", render: function (e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            })), e.__uniRoutes = [{
                path: "/",
                alias: "/pages/index/index",
                component: {
                    render: function (e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isEntry: !0
                            }, __uniConfig.globalStyle, {navigationBarTitleText: "", navigationStyle: "custom"})
                        }, [e("pages-index-index", {slot: "page"})])
                    }
                },
                meta: {
                    id: 1,
                    name: "pages-index-index",
                    isNVue: !1,
                    pagePath: "pages/index/index",
                    isQuit: !0,
                    isEntry: !0,
                    windowTop: 0
                }
            }, {
                path: "/preview-image", component: {
                    render: function (e) {
                        return e("Page", {props: {navigationStyle: "custom"}}, [e("system-preview-image", {slot: "page"})])
                    }
                }, meta: {name: "preview-image", pagePath: "/preview-image"}
            }, {
                path: "/choose-location", component: {
                    render: function (e) {
                        return e("Page", {props: {navigationStyle: "custom"}}, [e("system-choose-location", {slot: "page"})])
                    }
                }, meta: {name: "choose-location", pagePath: "/choose-location"}
            }, {
                path: "/open-location", component: {
                    render: function (e) {
                        return e("Page", {props: {navigationStyle: "custom"}}, [e("system-open-location", {slot: "page"})])
                    }
                }, meta: {name: "open-location", pagePath: "/open-location"}
            }]
        }).call(this, t("c8ba"))
    }, d809: function (e, n, t) {
        var o = t("5762");
        "string" === typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
        var i = t("4f06").default;
        i("e65465fa", o, !0, {sourceMap: !1, shadowMode: !1})
    }, dfa4: function (e, n, t) {
        "use strict";
        t.r(n);
        var o = t("6d21"), i = t("4266");
        for (var r in i) "default" !== r && function (e) {
            t.d(n, e, (function () {
                return i[e]
            }))
        }(r);
        t("5abd");
        var a, u = t("f0c5"), c = Object(u["a"])(i["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], a);
        n["default"] = c.exports
    }, f892: function (e, n, t) {
        "use strict";
        var o = t("4ea4");
        t("8e6e"), t("ac6a"), t("456d");
        var i = o(t("bd86"));
        t("cadf"), t("551c"), t("f751"), t("097d"), t("9dd9"), t("1c31"), t("921b");
        var r = o(t("e143")), a = o(t("dfa4"));

        function u(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                n && (o = o.filter((function (n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }

        function c(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? u(Object(t), !0).forEach((function (n) {
                    (0, i.default)(e, n, t[n])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach((function (n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }))
            }
            return e
        }

        r.default.config.productionTip = !1, r.default.prototype.$BASE_URL = "https://shop5.jiuduanfw.com/", r.default.prototype.$ANNEX_URL = "https://shop5.jiuduanfw.com/", r.default.prototype.$GET_FUN = function (e, n, t, o) {
            -1 == e.indexOf("https://") && -1 == e.indexOf("http://") && (e = this.$BASE_URL + e);
            var i = uni.getStorageSync("token");
            uni.request({
                url: e,
                data: n,
                method: "GET",
                dataType: "json",
                header: {
                    "content-type": "multipart/form-data",
                    Accept: "application/json, text/javascript, ",
                    "X-Requested-With": "XMLHttpRequest",
                    token: i
                },
                success: function (e) {
                    "function" === typeof t && t(e)
                },
                fail: function (e) {
                    "function" === typeof o && o(e)
                }
            })
        }, r.default.prototype.$POST_FUN = function (e, n, t, o) {
            -1 == e.indexOf("https://") && -1 == e.indexOf("http://") && (e = this.$BASE_URL + e);
            var i = uni.getStorageSync("token");
            uni.request({
                url: e,
                data: n,
                method: "POST",
                dataType: "json",
                header: {"content-type": "application/x-www-form-urlencoded", token: i},
                success: function (e) {
                    "function" === typeof t && t(e)
                },
                fail: function (e) {
                    "function" === typeof o && o(e), uni.getNetworkType({
                        success: function (e) {
                            console.log(e.networkType), "none" == e.networkType && uni.showToast({
                                title: "请检查网络",
                                icon: "none"
                            })
                        }
                    })
                }
            })
        }, a.default.mpType = "app";
        var s = new r.default(c({}, a.default));
        s.$mount()
    }
});