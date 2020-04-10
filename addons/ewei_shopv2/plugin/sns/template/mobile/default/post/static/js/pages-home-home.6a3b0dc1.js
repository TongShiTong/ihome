(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home"], {
    "489d": function (n, e, t) {
        "use strict";
        var u, r = function () {
            var n = this, e = n.$createElement, t = n._self._c || e;
            return t("v-uni-view")
        }, f = [];
        t.d(e, "b", (function () {
            return r
        })), t.d(e, "c", (function () {
            return f
        })), t.d(e, "a", (function () {
            return u
        }))
    }, 6868: function (n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0}), e.default = void 0;
        var u = {
            data: function () {
                return {}
            }, onLoad: function () {
                uni.reLaunch({url: "/pages/index/index?uid=1"})
            }, methods: {}
        };
        e.default = u
    }, b1bc: function (n, e, t) {
        "use strict";
        t.r(e);
        var u = t("6868"), r = t.n(u);
        for (var f in u) "default" !== f && function (n) {
            t.d(e, n, (function () {
                return u[n]
            }))
        }(f);
        e["default"] = r.a
    }, f0ff: function (n, e, t) {
        "use strict";
        t.r(e);
        var u = t("489d"), r = t("b1bc");
        for (var f in r) "default" !== f && function (n) {
            t.d(e, n, (function () {
                return r[n]
            }))
        }(f);
        var i, c = t("f0c5"),
            a = Object(c["a"])(r["default"], u["b"], u["c"], !1, null, "fef80ed4", null, !1, u["a"], i);
        e["default"] = a.exports
    }
}]);