!function s(u, a, o) {
    function d(n, e) {
        if (!a[n]) {
            if (!u[n]) {
                var r = "function" == typeof require && require;
                if (!e && r) return r(n, !0);
                if (_) return _(n, !0);
                var t = new Error("Cannot find module '" + n + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            var i = a[n] = {exports: {}};
            u[n][0].call(i.exports, function (e) {
                return d(u[n][1][e] || e)
            }, i, i.exports, s, u, a, o)
        }
        return a[n].exports
    }

    for (var _ = "function" == typeof require && require, e = 0; e < o.length; e++) d(o[e]);
    return d
}({
    1: [function (e, n, r) {
        Dashboard = Object.assign({}, window.Dashboard || {}, {
            Sidebar: {
                init: function (e, n, r) {
                    var t, i = e(".sidebar-menu"),
                        s = i.find(".sidebar-menu__entry__link,.sidebar-submenu__entry__link"),
                        u = i.find(".sidebar-menu__entry--nested > .sidebar-menu__entry__link,.sidebar-submenu__entry--nested > .sidebar-submenu__entry__link");
                    (t = s.filter(function () {
                        return n.location.href === e(this).prop("href")
                    }).first()).parent().addClass("active"), function e(n) {
                        var r = n.parents(".sidebar-submenu__entry--nested,.sidebar-menu__entry--nested");
                        0 < r.length && (r.addClass("active open"), e(r))
                    }(t), u.on("click", function () {
                        e(this).parent(".sidebar-menu__entry--nested,.sidebar-submenu__entry--nested").toggleClass("open")
                    })
                }
            }
        })
    }, {}]
}, {}, [1]);
//# sourceMappingURL=side-menu.js.map
