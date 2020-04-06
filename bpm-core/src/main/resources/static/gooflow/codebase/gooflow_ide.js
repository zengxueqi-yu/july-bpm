!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (k, t) {
    var c = [], f = k.document, h = c.slice, m = c.concat, a = c.push, l = c.indexOf, i = {}, d = i.toString,
        v = i.hasOwnProperty, A = {}, e = "1.12.4", C = function (e, t) {
            return new C.fn.init(e, t)
        }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, r = /-([\da-z])/gi, s = function (e, t) {
            return t.toUpperCase()
        };

    function g(e) {
        var t = !!e && "length" in e && e.length, i = C.type(e);
        return "function" !== i && !C.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }

    C.fn = C.prototype = {
        jquery: e, constructor: C, selector: "", length: 0, toArray: function () {
            return h.call(this)
        }, get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : h.call(this)
        }, pushStack: function (e) {
            var t = C.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e) {
            return C.each(this, e)
        }, map: function (i) {
            return this.pushStack(C.map(this, function (e, t) {
                return i.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(h.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, i = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= i && i < t ? [this[i]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: a, sort: c.sort, splice: c.splice
    }, C.extend = C.fn.extend = function () {
        var e, t, i, n, o, r, s = arguments[0] || {}, a = 1, l = arguments.length, d = !1;
        for ("boolean" == typeof s && (d = s, s = arguments[a] || {}, a++), "object" == typeof s || C.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (o = arguments[a])) for (n in o) e = s[n], s !== (i = o[n]) && (d && i && (C.isPlainObject(i) || (t = C.isArray(i))) ? (r = t ? (t = !1, e && C.isArray(e) ? e : []) : e && C.isPlainObject(e) ? e : {}, s[n] = C.extend(d, r, i)) : void 0 !== i && (s[n] = i));
        return s
    }, C.extend({
        expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === C.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === C.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            var t = e && e.toString();
            return !C.isArray(e) && 0 <= t - parseFloat(t) + 1
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, isPlainObject: function (e) {
            var t;
            if (!e || "object" !== C.type(e) || e.nodeType || C.isWindow(e)) return !1;
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (!A.ownFirst) for (t in e) return v.call(e, t);
            for (t in e) ;
            return void 0 === t || v.call(e, t)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[d.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            e && C.trim(e) && (k.execScript || function (e) {
                k.eval.call(k, e)
            })(e)
        }, camelCase: function (e) {
            return e.replace(o, "ms-").replace(r, s)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var i, n = 0;
            if (g(e)) for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++) ; else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(n, "")
        }, makeArray: function (e, t) {
            var i = t || [];
            return null != e && (g(Object(e)) ? C.merge(i, "string" == typeof e ? [e] : e) : a.call(i, e)), i
        }, inArray: function (e, t, i) {
            var n;
            if (t) {
                if (l) return l.call(t, e, i);
                for (n = t.length, i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++) if (i in t && t[i] === e) return i
            }
            return -1
        }, merge: function (e, t) {
            for (var i = +t.length, n = 0, o = e.length; n < i;) e[o++] = t[n++];
            if (i != i) for (; void 0 !== t[n];) e[o++] = t[n++];
            return e.length = o, e
        }, grep: function (e, t, i) {
            for (var n = [], o = 0, r = e.length, s = !i; o < r; o++) !t(e[o], o) !== s && n.push(e[o]);
            return n
        }, map: function (e, t, i) {
            var n, o, r = 0, s = [];
            if (g(e)) for (n = e.length; r < n; r++) null != (o = t(e[r], r, i)) && s.push(o); else for (r in e) null != (o = t(e[r], r, i)) && s.push(o);
            return m.apply([], s)
        }, guid: 1, proxy: function (e, t) {
            var i, n, o;
            return "string" == typeof t && (o = e[t], t = e, e = o), C.isFunction(e) ? (i = h.call(arguments, 2), (n = function () {
                return e.apply(t || this, i.concat(h.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, n) : void 0
        }, now: function () {
            return +new Date
        }, support: A
    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = c[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var u = function (i) {
        var e, f, w, r, o, m, c, v, x, l, d, b, D, s, _, g, a, h, y, k = "sizzle" + 1 * new Date, $ = i.document, A = 0,
            n = 0, C = oe(), u = oe(), N = oe(), p = function (e, t) {
                return e === t && (d = !0), 0
            }, T = {}.hasOwnProperty, t = [], S = t.pop, E = t.push, M = t.push, L = t.slice, F = function (e, t) {
                for (var i = 0, n = e.length; i < n; i++) if (e[i] === t) return i;
                return -1
            },
            B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]", O = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            H = "\\[" + I + "*(" + O + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + I + "*\\]",
            j = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
            z = new RegExp(I + "+", "g"), G = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
            q = new RegExp("^" + I + "*," + I + "*"), R = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            P = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"), W = new RegExp(j),
            V = new RegExp("^" + O + "$"), X = {
                ID: new RegExp("^#(" + O + ")"),
                CLASS: new RegExp("^\\.(" + O + ")"),
                TAG: new RegExp("^(" + O + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + j),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + B + ")$", "i"),
                needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
            }, J = /^(?:input|select|textarea|button)$/i, U = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
            Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Q = /[+~]/, Z = /'|\\/g,
            ee = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"), te = function (e, t, i) {
                var n = "0x" + t - 65536;
                return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            }, ie = function () {
                b()
            };
        try {
            M.apply(t = L.call($.childNodes), $.childNodes), t[$.childNodes.length].nodeType
        } catch (we) {
            M = {
                apply: t.length ? function (e, t) {
                    E.apply(e, L.call(t))
                } : function (e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];) ;
                    e.length = i - 1
                }
            }
        }

        function ne(e, t, i, n) {
            var o, r, s, a, l, d, h, c, u = t && t.ownerDocument, p = t ? t.nodeType : 9;
            if (i = i || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return i;
            if (!n && ((t ? t.ownerDocument || t : $) !== D && b(t), t = t || D, _)) {
                if (11 !== p && (d = Y.exec(e))) if (o = d[1]) {
                    if (9 === p) {
                        if (!(s = t.getElementById(o))) return i;
                        if (s.id === o) return i.push(s), i
                    } else if (u && (s = u.getElementById(o)) && y(t, s) && s.id === o) return i.push(s), i
                } else {
                    if (d[2]) return M.apply(i, t.getElementsByTagName(e)), i;
                    if ((o = d[3]) && f.getElementsByClassName && t.getElementsByClassName) return M.apply(i, t.getElementsByClassName(o)), i
                }
                if (f.qsa && !N[e + " "] && (!g || !g.test(e))) {
                    if (1 !== p) u = t, c = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(Z, "\\$&") : t.setAttribute("id", a = k), r = (h = m(e)).length, l = V.test(a) ? "#" + a : "[id='" + a + "']"; r--;) h[r] = l + " " + fe(h[r]);
                        c = h.join(","), u = Q.test(e) && ue(t.parentNode) || t
                    }
                    if (c) try {
                        return M.apply(i, u.querySelectorAll(c)), i
                    } catch (C) {
                    } finally {
                        a === k && t.removeAttribute("id")
                    }
                }
            }
            return v(e.replace(G, "$1"), t, i, n)
        }

        function oe() {
            var i = [];
            return function n(e, t) {
                return i.push(e + " ") > w.cacheLength && delete n[i.shift()], n[e + " "] = t
            }
        }

        function re(e) {
            return e[k] = !0, e
        }

        function se(e) {
            var t = D.createElement("div");
            try {
                return !!e(t)
            } catch (f) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ae(e, t) {
            for (var i = e.split("|"), n = i.length; n--;) w.attrHandle[i[n]] = t
        }

        function le(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (n) return n;
            if (i) for (; i = i.nextSibling;) if (i === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(i) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === i
            }
        }

        function ce(s) {
            return re(function (r) {
                return r = +r, re(function (e, t) {
                    for (var i, n = s([], e.length, r), o = n.length; o--;) e[i = n[o]] && (e[i] = !(t[i] = e[i]))
                })
            })
        }

        function ue(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        for (e in f = ne.support = {}, o = ne.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, b = ne.setDocument = function (e) {
            var t, i, n = e ? e.ownerDocument || e : $;
            return n !== D && 9 === n.nodeType && n.documentElement && (s = (D = n).documentElement, _ = !o(D), (i = D.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ie, !1) : i.attachEvent && i.attachEvent("onunload", ie)), f.attributes = se(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), f.getElementsByTagName = se(function (e) {
                return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length
            }), f.getElementsByClassName = K.test(D.getElementsByClassName), f.getById = se(function (e) {
                return s.appendChild(e).id = k, !D.getElementsByName || !D.getElementsByName(k).length
            }), f.getById ? (w.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && _) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }, w.filter.ID = function (e) {
                var t = e.replace(ee, te);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete w.find.ID, w.filter.ID = function (e) {
                var i = e.replace(ee, te);
                return function (e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === i
                }
            }), w.find.TAG = f.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var i, n = [], o = 0, r = t.getElementsByTagName(e);
                if ("*" !== e) return r;
                for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                return n
            }, w.find.CLASS = f.getElementsByClassName && function (e, t) {
                return "undefined" != typeof t.getElementsByClassName && _ ? t.getElementsByClassName(e) : void 0
            }, a = [], g = [], (f.qsa = K.test(D.querySelectorAll)) && (se(function (e) {
                s.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + I + "*(?:value|" + B + ")"), e.querySelectorAll("[id~=" + k + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || g.push(".#.+[+~]")
            }), se(function (e) {
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + I + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (f.matchesSelector = K.test(h = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && se(function (e) {
                f.disconnectedMatch = h.call(e, "div"), h.call(e, "[s!='']:x"), a.push("!=", j)
            }), g = g.length && new RegExp(g.join("|")), a = a.length && new RegExp(a.join("|")), t = K.test(s.compareDocumentPosition), y = t || K.test(s.contains) ? function (e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e, n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, p = t ? function (e, t) {
                if (e === t) return d = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === i ? e === D || e.ownerDocument === $ && y($, e) ? -1 : t === D || t.ownerDocument === $ && y($, t) ? 1 : l ? F(l, e) - F(l, t) : 0 : 4 & i ? -1 : 1)
            } : function (e, t) {
                if (e === t) return d = !0, 0;
                var i, n = 0, o = e.parentNode, r = t.parentNode, s = [e], a = [t];
                if (!o || !r) return e === D ? -1 : t === D ? 1 : o ? -1 : r ? 1 : l ? F(l, e) - F(l, t) : 0;
                if (o === r) return le(e, t);
                for (i = e; i = i.parentNode;) s.unshift(i);
                for (i = t; i = i.parentNode;) a.unshift(i);
                for (; s[n] === a[n];) n++;
                return n ? le(s[n], a[n]) : s[n] === $ ? -1 : a[n] === $ ? 1 : 0
            }), D
        }, ne.matches = function (e, t) {
            return ne(e, null, null, t)
        }, ne.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== D && b(e), t = t.replace(P, "='$1']"), f.matchesSelector && _ && !N[t + " "] && (!a || !a.test(t)) && (!g || !g.test(t))) try {
                var i = h.call(e, t);
                if (i || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (r) {
            }
            return 0 < ne(t, D, null, [e]).length
        }, ne.contains = function (e, t) {
            return (e.ownerDocument || e) !== D && b(e), y(e, t)
        }, ne.attr = function (e, t) {
            (e.ownerDocument || e) !== D && b(e);
            var i = w.attrHandle[t.toLowerCase()],
                n = i && T.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !_) : void 0;
            return void 0 !== n ? n : f.attributes || !_ ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, ne.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ne.uniqueSort = function (e) {
            var t, i = [], n = 0, o = 0;
            if (d = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(p), d) {
                for (; t = e[o++];) t === e[o] && (n = i.push(o));
                for (; n--;) e.splice(i[n], 1)
            }
            return l = null, e
        }, r = ne.getText = function (e) {
            var t, i = "", n = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += r(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else for (; t = e[n++];) i += r(t);
            return i
        }, (w = ne.selectors = {
            cacheLength: 50,
            createPseudo: re,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ee, te), e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ne.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ne.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, i = !e[6] && e[2];
                    return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && W.test(i) && (t = m(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ee, te).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = C[e + " "];
                    return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && C(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (i, n, o) {
                    return function (e) {
                        var t = ne.attr(e, i);
                        return null == t ? "!=" === n : !n || (t += "", "=" === n ? t === o : "!=" === n ? t !== o : "^=" === n ? o && 0 === t.indexOf(o) : "*=" === n ? o && -1 < t.indexOf(o) : "$=" === n ? o && t.slice(-o.length) === o : "~=" === n ? -1 < (" " + t.replace(z, " ") + " ").indexOf(o) : "|=" === n && (t === o || t.slice(0, o.length + 1) === o + "-"))
                    }
                }, CHILD: function (f, e, t, m, v) {
                    var g = "nth" !== f.slice(0, 3), y = "last" !== f.slice(-4), $ = "of-type" === e;
                    return 1 === m && 0 === v ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, i) {
                        var n, o, r, s, a, l, d = g !== y ? "nextSibling" : "previousSibling", h = e.parentNode,
                            c = $ && e.nodeName.toLowerCase(), u = !i && !$, p = !1;
                        if (h) {
                            if (g) {
                                for (; d;) {
                                    for (s = e; s = s[d];) if ($ ? s.nodeName.toLowerCase() === c : 1 === s.nodeType) return !1;
                                    l = d = "only" === f && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [y ? h.firstChild : h.lastChild], y && u) {
                                for (p = (a = (n = (o = (r = (s = h)[k] || (s[k] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[f] || [])[0] === A && n[1]) && n[2], s = a && h.childNodes[a]; s = ++a && s && s[d] || (p = a = 0) || l.pop();) if (1 === s.nodeType && ++p && s === e) {
                                    o[f] = [A, a, p];
                                    break
                                }
                            } else if (u && (p = a = (n = (o = (r = (s = e)[k] || (s[k] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[f] || [])[0] === A && n[1]), !1 === p) for (; (s = ++a && s && s[d] || (p = a = 0) || l.pop()) && (($ ? s.nodeName.toLowerCase() !== c : 1 !== s.nodeType) || !++p || (u && ((o = (r = s[k] || (s[k] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[f] = [A, p]), s !== e));) ;
                            return (p -= v) === m || p % m == 0 && 0 <= p / m
                        }
                    }
                }, PSEUDO: function (e, r) {
                    var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || ne.error("unsupported pseudo: " + e);
                    return s[k] ? s(r) : 1 < s.length ? (t = [e, e, "", r], w.setFilters.hasOwnProperty(e.toLowerCase()) ? re(function (e, t) {
                        for (var i, n = s(e, r), o = n.length; o--;) e[i = F(e, n[o])] = !(t[i] = n[o])
                    }) : function (e) {
                        return s(e, 0, t)
                    }) : s
                }
            },
            pseudos: {
                not: re(function (e) {
                    var n = [], o = [], a = c(e.replace(G, "$1"));
                    return a[k] ? re(function (e, t, i, n) {
                        for (var o, r = a(e, null, n, []), s = e.length; s--;) (o = r[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, t, i) {
                        return n[0] = e, a(n, null, i, o), n[0] = null, !o.pop()
                    }
                }), has: re(function (t) {
                    return function (e) {
                        return 0 < ne(t, e).length
                    }
                }), contains: re(function (t) {
                    return t = t.replace(ee, te), function (e) {
                        return -1 < (e.textContent || e.innerText || r(e)).indexOf(t)
                    }
                }), lang: re(function (i) {
                    return V.test(i || "") || ne.error("unsupported lang: " + i), i = i.replace(ee, te).toLowerCase(), function (e) {
                        var t;
                        do {
                            if (t = _ ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var t = i.location && i.location.hash;
                    return t && t.slice(1) === e.id
                }, root: function (e) {
                    return e === s
                }, focus: function (e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return !1 === e.disabled
                }, disabled: function (e) {
                    return !0 === e.disabled
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !w.pseudos.empty(e)
                }, header: function (e) {
                    return U.test(e.nodeName)
                }, input: function (e) {
                    return J.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: ce(function () {
                    return [0]
                }), last: ce(function (e, t) {
                    return [t - 1]
                }), eq: ce(function (e, t, i) {
                    return [i < 0 ? i + t : i]
                }), even: ce(function (e, t) {
                    for (var i = 0; i < t; i += 2) e.push(i);
                    return e
                }), odd: ce(function (e, t) {
                    for (var i = 1; i < t; i += 2) e.push(i);
                    return e
                }), lt: ce(function (e, t, i) {
                    for (var n = i < 0 ? i + t : i; 0 <= --n;) e.push(n);
                    return e
                }), gt: ce(function (e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }).pseudos.nth = w.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[e] = de(e);
        for (e in {submit: !0, reset: !0}) w.pseudos[e] = he(e);

        function pe() {
        }

        function fe(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function me(a, e, t) {
            var l = e.dir, d = t && "parentNode" === l, h = n++;
            return e.first ? function (e, t, i) {
                for (; e = e[l];) if (1 === e.nodeType || d) return a(e, t, i)
            } : function (e, t, i) {
                var n, o, r, s = [A, h];
                if (i) {
                    for (; e = e[l];) if ((1 === e.nodeType || d) && a(e, t, i)) return !0
                } else for (; e = e[l];) if (1 === e.nodeType || d) {
                    if ((n = (o = (r = e[k] || (e[k] = {}))[e.uniqueID] || (r[e.uniqueID] = {}))[l]) && n[0] === A && n[1] === h) return s[2] = n[2];
                    if ((o[l] = s)[2] = a(e, t, i)) return !0
                }
            }
        }

        function ve(o) {
            return 1 < o.length ? function (e, t, i) {
                for (var n = o.length; n--;) if (!o[n](e, t, i)) return !1;
                return !0
            } : o[0]
        }

        function ge(e, t, i, n, o) {
            for (var r, s = [], a = 0, l = e.length, d = null != t; a < l; a++) (r = e[a]) && (i && !i(r, n, o) || (s.push(r), d && t.push(a)));
            return s
        }

        function ye(f, m, v, g, y, e) {
            return g && !g[k] && (g = ye(g)), y && !y[k] && (y = ye(y, e)), re(function (e, t, i, n) {
                var o, r, s, a = [], l = [], d = t.length, h = e || function p(e, t, i) {
                        for (var n = 0, o = t.length; n < o; n++) ne(e, t[n], i);
                        return i
                    }(m || "*", i.nodeType ? [i] : i, []), c = !f || !e && m ? h : ge(h, a, f, i, n),
                    u = v ? y || (e ? f : d || g) ? [] : t : c;
                if (v && v(c, u, i, n), g) for (o = ge(u, l), g(o, [], i, n), r = o.length; r--;) (s = o[r]) && (u[l[r]] = !(c[l[r]] = s));
                if (e) {
                    if (y || f) {
                        if (y) {
                            for (o = [], r = u.length; r--;) (s = u[r]) && o.push(c[r] = s);
                            y(null, u = [], o, n)
                        }
                        for (r = u.length; r--;) (s = u[r]) && -1 < (o = y ? F(e, s) : a[r]) && (e[o] = !(t[o] = s))
                    }
                } else u = ge(u === t ? u.splice(d, u.length) : u), y ? y(null, t, u, n) : M.apply(t, u)
            })
        }

        function $e(e) {
            for (var o, t, i, n = e.length, r = w.relative[e[0].type], s = r || w.relative[" "], a = r ? 1 : 0, l = me(function (e) {
                return e === o
            }, s, !0), d = me(function (e) {
                return -1 < F(o, e)
            }, s, !0), h = [function (e, t, i) {
                var n = !r && (i || t !== x) || ((o = t).nodeType ? l(e, t, i) : d(e, t, i));
                return o = null, n
            }]; a < n; a++) if (t = w.relative[e[a].type]) h = [me(ve(h), t)]; else {
                if ((t = w.filter[e[a].type].apply(null, e[a].matches))[k]) {
                    for (i = ++a; i < n && !w.relative[e[i].type]; i++) ;
                    return ye(1 < a && ve(h), 1 < a && fe(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(G, "$1"), t, a < i && $e(e.slice(a, i)), i < n && $e(e = e.slice(i)), i < n && fe(e))
                }
                h.push(t)
            }
            return ve(h)
        }

        return pe.prototype = w.filters = w.pseudos, w.setFilters = new pe, m = ne.tokenize = function (e, t) {
            var i, n, o, r, s, a, l, d = u[e + " "];
            if (d) return t ? 0 : d.slice(0);
            for (s = e, a = [], l = w.preFilter; s;) {
                for (r in i && !(n = q.exec(s)) || (n && (s = s.slice(n[0].length) || s), a.push(o = [])), i = !1, (n = R.exec(s)) && (i = n.shift(), o.push({
                    value: i,
                    type: n[0].replace(G, " ")
                }), s = s.slice(i.length)), w.filter) !(n = X[r].exec(s)) || l[r] && !(n = l[r](n)) || (i = n.shift(), o.push({
                    value: i,
                    type: r,
                    matches: n
                }), s = s.slice(i.length));
                if (!i) break
            }
            return t ? s.length : s ? ne.error(e) : u(e, a).slice(0)
        }, c = ne.compile = function (e, t) {
            var i, n = [], o = [], r = N[e + " "];
            if (!r) {
                for (t || (t = m(e)), i = t.length; i--;) (r = $e(t[i]))[k] ? n.push(r) : o.push(r);
                (r = N(e, function s(v, g) {
                    var y = 0 < g.length, $ = 0 < v.length, e = function (e, t, i, n, o) {
                        var r, s, a, l = 0, d = "0", h = e && [], c = [], u = x, p = e || $ && w.find.TAG("*", o),
                            f = A += null == u ? 1 : Math.random() || .1, m = p.length;
                        for (o && (x = t === D || t || o); d !== m && null != (r = p[d]); d++) {
                            if ($ && r) {
                                for (s = 0, t || r.ownerDocument === D || (b(r), i = !_); a = v[s++];) if (a(r, t || D, i)) {
                                    n.push(r);
                                    break
                                }
                                o && (A = f)
                            }
                            y && ((r = !a && r) && l--, e && h.push(r))
                        }
                        if (l += d, y && d !== l) {
                            for (s = 0; a = g[s++];) a(h, c, t, i);
                            if (e) {
                                if (0 < l) for (; d--;) h[d] || c[d] || (c[d] = S.call(n));
                                c = ge(c)
                            }
                            M.apply(n, c), o && !e && 0 < c.length && 1 < l + g.length && ne.uniqueSort(n)
                        }
                        return o && (A = f, x = u), h
                    };
                    return y ? re(e) : e
                }(o, n))).selector = e
            }
            return r
        }, v = ne.select = function (e, t, i, n) {
            var o, r, s, a, l, d = "function" == typeof e && e, h = !n && m(e = d.selector || e);
            if (i = i || [], 1 === h.length) {
                if (2 < (r = h[0] = h[0].slice(0)).length && "ID" === (s = r[0]).type && f.getById && 9 === t.nodeType && _ && w.relative[r[1].type]) {
                    if (!(t = (w.find.ID(s.matches[0].replace(ee, te), t) || [])[0])) return i;
                    d && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (o = X.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]);) if ((l = w.find[a]) && (n = l(s.matches[0].replace(ee, te), Q.test(r[0].type) && ue(t.parentNode) || t))) {
                    if (r.splice(o, 1), !(e = n.length && fe(r))) return M.apply(i, n), i;
                    break
                }
            }
            return (d || c(e, h))(n, t, !_, i, !t || Q.test(e) && ue(t.parentNode) || t), i
        }, f.sortStable = k.split("").sort(p).join("") === k, f.detectDuplicates = !!d, b(), f.sortDetached = se(function (e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"))
        }), se(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ae("type|href|height|width", function (e, t, i) {
            return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), f.attributes && se(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ae("value", function (e, t, i) {
            return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), se(function (e) {
            return null == e.getAttribute("disabled")
        }) || ae(B, function (e, t, i) {
            var n;
            return i ? void 0 : !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), ne
    }(k);
    C.find = u, C.expr = u.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = u.uniqueSort, C.text = u.getText, C.isXMLDoc = u.isXML, C.contains = u.contains;
    var p = function (e, t, i) {
        for (var n = [], o = void 0 !== i; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (o && C(e).is(i)) break;
            n.push(e)
        }
        return n
    }, y = function (e, t) {
        for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
        return i
    }, $ = C.expr.match.needsContext, N = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

    function x(e, i, n) {
        if (C.isFunction(i)) return C.grep(e, function (e, t) {
            return !!i.call(e, t, e) !== n
        });
        if (i.nodeType) return C.grep(e, function (e) {
            return e === i !== n
        });
        if ("string" == typeof i) {
            if (w.test(i)) return C.filter(i, e, n);
            i = C.filter(i, e)
        }
        return C.grep(e, function (e) {
            return -1 < C.inArray(e, i) !== n
        })
    }

    C.filter = function (e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? C.find.matchesSelector(n, e) ? [n] : [] : C.find.matches(e, C.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, C.fn.extend({
        find: function (e) {
            var t, i = [], n = this, o = n.length;
            if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
                for (t = 0; t < o; t++) if (C.contains(n[t], this)) return !0
            }));
            for (t = 0; t < o; t++) C.find(e, n[t], i);
            return (i = this.pushStack(1 < o ? C.unique(i) : i)).selector = this.selector ? this.selector + " " + e : e, i
        }, filter: function (e) {
            return this.pushStack(x(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(x(this, e || [], !0))
        }, is: function (e) {
            return !!x(this, "string" == typeof e && $.test(e) ? C(e) : e || [], !1).length
        }
    });
    var b, D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (C.fn.init = function (e, t, i) {
        var n, o;
        if (!e) return this;
        if (i = i || b, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : C.isFunction(e) ? "undefined" != typeof i.ready ? i.ready(e) : e(C) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), C.makeArray(e, this));
        if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : D.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
        if (n[1]) {
            if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : f, !0)), N.test(n[1]) && C.isPlainObject(t)) for (n in t) C.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this
        }
        if ((o = f.getElementById(n[2])) && o.parentNode) {
            if (o.id !== n[2]) return b.find(e);
            this.length = 1, this[0] = o
        }
        return this.context = f, this.selector = e, this
    }).prototype = C.fn, b = C(f);
    var _ = /^(?:parents|prev(?:Until|All))/, T = {children: !0, contents: !0, next: !0, prev: !0};

    function S(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
    }

    C.fn.extend({
        has: function (e) {
            var t, i = C(e, this), n = i.length;
            return this.filter(function () {
                for (t = 0; t < n; t++) if (C.contains(this, i[t])) return !0
            })
        }, closest: function (e, t) {
            for (var i, n = 0, o = this.length, r = [], s = $.test(e) || "string" != typeof e ? C(e, t || this.context) : 0; n < o; n++) for (i = this[n]; i && i !== t; i = i.parentNode) if (i.nodeType < 11 && (s ? -1 < s.index(i) : 1 === i.nodeType && C.find.matchesSelector(i, e))) {
                r.push(i);
                break
            }
            return this.pushStack(1 < r.length ? C.uniqueSort(r) : r)
        }, index: function (e) {
            return e ? "string" == typeof e ? C.inArray(this[0], C(e)) : C.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), C.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return p(e, "parentNode")
        }, parentsUntil: function (e, t, i) {
            return p(e, "parentNode", i)
        }, next: function (e) {
            return S(e, "nextSibling")
        }, prev: function (e) {
            return S(e, "previousSibling")
        }, nextAll: function (e) {
            return p(e, "nextSibling")
        }, prevAll: function (e) {
            return p(e, "previousSibling")
        }, nextUntil: function (e, t, i) {
            return p(e, "nextSibling", i)
        }, prevUntil: function (e, t, i) {
            return p(e, "previousSibling", i)
        }, siblings: function (e) {
            return y((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return y(e.firstChild)
        }, contents: function (e) {
            return C.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : C.merge([], e.childNodes)
        }
    }, function (n, o) {
        C.fn[n] = function (e, t) {
            var i = C.map(this, o, e);
            return "Until" !== n.slice(-5) && (t = e), t && "string" == typeof t && (i = C.filter(t, i)), 1 < this.length && (T[n] || (i = C.uniqueSort(i)), _.test(n) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var E, M, L = /\S+/g;

    function F() {
        f.addEventListener ? (f.removeEventListener("DOMContentLoaded", B), k.removeEventListener("load", B)) : (f.detachEvent("onreadystatechange", B), k.detachEvent("onload", B))
    }

    function B() {
        (f.addEventListener || "load" === k.event.type || "complete" === f.readyState) && (F(), C.ready())
    }

    for (M in C.Callbacks = function (n) {
        n = "string" == typeof n ? function h(e) {
            var i = {};
            return C.each(e.match(L) || [], function (e, t) {
                i[t] = !0
            }), i
        }(n) : C.extend({}, n);
        var o, e, t, i, r = [], s = [], a = -1, l = function () {
            for (i = n.once, t = o = !0; s.length; a = -1) for (e = s.shift(); ++a < r.length;) !1 === r[a].apply(e[0], e[1]) && n.stopOnFalse && (a = r.length, e = !1);
            n.memory || (e = !1), o = !1, i && (r = e ? [] : "")
        }, d = {
            add: function () {
                return r && (e && !o && (a = r.length - 1, s.push(e)), function i(e) {
                    C.each(e, function (e, t) {
                        C.isFunction(t) ? n.unique && d.has(t) || r.push(t) : t && t.length && "string" !== C.type(t) && i(t)
                    })
                }(arguments), e && !o && l()), this
            }, remove: function () {
                return C.each(arguments, function (e, t) {
                    for (var i; -1 < (i = C.inArray(t, r, i));) r.splice(i, 1), i <= a && a--
                }), this
            }, has: function (e) {
                return e ? -1 < C.inArray(e, r) : 0 < r.length
            }, empty: function () {
                return r && (r = []), this
            }, disable: function () {
                return i = s = [], r = e = "", this
            }, disabled: function () {
                return !r
            }, lock: function () {
                return i = !0, e || d.disable(), this
            }, locked: function () {
                return !!i
            }, fireWith: function (e, t) {
                return i || (t = [e, (t = t || []).slice ? t.slice() : t], s.push(t), o || l()), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!t
            }
        };
        return d
    }, C.extend({
        Deferred: function (e) {
            var r = [["resolve", "done", C.Callbacks("once memory"), "resolved"], ["reject", "fail", C.Callbacks("once memory"), "rejected"], ["notify", "progress", C.Callbacks("memory")]],
                o = "pending", s = {
                    state: function () {
                        return o
                    }, always: function () {
                        return a.done(arguments).fail(arguments), this
                    }, then: function () {
                        var o = arguments;
                        return C.Deferred(function (n) {
                            C.each(r, function (e, t) {
                                var i = C.isFunction(o[e]) && o[e];
                                a[t[1]](function () {
                                    var e = i && i.apply(this, arguments);
                                    e && C.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[t[0] + "With"](this === s ? n.promise() : this, i ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? C.extend(e, s) : s
                    }
                }, a = {};
            return s.pipe = s.then, C.each(r, function (e, t) {
                var i = t[2], n = t[3];
                s[t[1]] = i.add, n && i.add(function () {
                    o = n
                }, r[1 ^ e][2].disable, r[2][2].lock), a[t[0]] = function () {
                    return a[t[0] + "With"](this === a ? s : this, arguments), this
                }, a[t[0] + "With"] = i.fireWith
            }), s.promise(a), e && e.call(a, a), a
        }, when: function (e) {
            var o, t, i, n = 0, r = h.call(arguments), s = r.length,
                a = 1 !== s || e && C.isFunction(e.promise) ? s : 0, l = 1 === a ? e : C.Deferred(),
                d = function (t, i, n) {
                    return function (e) {
                        i[t] = this, n[t] = 1 < arguments.length ? h.call(arguments) : e, n === o ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (1 < s) for (o = new Array(s), t = new Array(s), i = new Array(s); n < s; n++) r[n] && C.isFunction(r[n].promise) ? r[n].promise().progress(d(n, t, o)).done(d(n, i, r)).fail(l.reject) : --a;
            return a || l.resolveWith(i, r), l.promise()
        }
    }), C.fn.ready = function (e) {
        return C.ready.promise().done(e), this
    }, C.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? C.readyWait++ : C.ready(!0)
        }, ready: function (e) {
            (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait || (E.resolveWith(f, [C]), C.fn.triggerHandler && (C(f).triggerHandler("ready"), C(f).off("ready"))))
        }
    }), C.ready.promise = function (e) {
        if (!E) if (E = C.Deferred(), "complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll) k.setTimeout(C.ready); else if (f.addEventListener) f.addEventListener("DOMContentLoaded", B), k.addEventListener("load", B); else {
            f.attachEvent("onreadystatechange", B), k.attachEvent("onload", B);
            var t = !1;
            try {
                t = null == k.frameElement && f.documentElement
            } catch (h) {
            }
            t && t.doScroll && function i() {
                if (!C.isReady) {
                    try {
                        t.doScroll("left")
                    } catch (e) {
                        return k.setTimeout(i, 50)
                    }
                    F(), C.ready()
                }
            }()
        }
        return E.promise(e)
    }, C.ready.promise(), C(A)) break;
    A.ownFirst = "0" === M, A.inlineBlockNeedsLayout = !1, C(function () {
        var e, t, i, n;
        (i = f.getElementsByTagName("body")[0]) && i.style && (t = f.createElement("div"), (n = f.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", A.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (i.style.zoom = 1)), i.removeChild(n))
    }), function () {
        var e = f.createElement("div");
        A.deleteExpando = !0;
        try {
            delete e.test
        } catch (t) {
            A.deleteExpando = !1
        }
        e = null
    }();
    var I, O = function (e) {
        var t = C.noData[(e.nodeName + " ").toLowerCase()], i = +e.nodeType || 1;
        return (1 === i || 9 === i) && (!t || !0 !== t && e.getAttribute("classid") === t)
    }, H = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, j = /([A-Z])/g;

    function z(e, t, i) {
        if (void 0 === i && 1 === e.nodeType) {
            var n = "data-" + t.replace(j, "-$1").toLowerCase();
            if ("string" == typeof (i = e.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : H.test(i) ? C.parseJSON(i) : i)
                } catch (h) {
                }
                C.data(e, t, i)
            } else i = void 0
        }
        return i
    }

    function G(e) {
        var t;
        for (t in e) if (("data" !== t || !C.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function q(e, t, i, n) {
        if (O(e)) {
            var o, r, s = C.expando, a = e.nodeType, l = a ? C.cache : e, d = a ? e[s] : e[s] && s;
            if (d && l[d] && (n || l[d].data) || void 0 !== i || "string" != typeof t) return d || (d = a ? e[s] = c.pop() || C.guid++ : s), l[d] || (l[d] = a ? {} : {toJSON: C.noop}), "object" != typeof t && "function" != typeof t || (n ? l[d] = C.extend(l[d], t) : l[d].data = C.extend(l[d].data, t)), r = l[d], n || (r.data || (r.data = {}), r = r.data), void 0 !== i && (r[C.camelCase(t)] = i), "string" == typeof t ? null == (o = r[t]) && (o = r[C.camelCase(t)]) : o = r, o
        }
    }

    function R(e, t, i) {
        if (O(e)) {
            var n, o, r = e.nodeType, s = r ? C.cache : e, a = r ? e[C.expando] : C.expando;
            if (s[a]) {
                if (t && (n = i ? s[a] : s[a].data)) {
                    o = (t = C.isArray(t) ? t.concat(C.map(t, C.camelCase)) : t in n ? [t] : (t = C.camelCase(t)) in n ? [t] : t.split(" ")).length;
                    for (; o--;) delete n[t[o]];
                    if (i ? !G(n) : !C.isEmptyObject(n)) return
                }
                (i || (delete s[a].data, G(s[a]))) && (r ? C.cleanData([e], !0) : A.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
            }
        }
    }

    C.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return !!(e = e.nodeType ? C.cache[e[C.expando]] : e[C.expando]) && !G(e)
        },
        data: function (e, t, i) {
            return q(e, t, i)
        },
        removeData: function (e, t) {
            return R(e, t)
        },
        _data: function (e, t, i) {
            return q(e, t, i, !0)
        },
        _removeData: function (e, t) {
            return R(e, t, !0)
        }
    }), C.fn.extend({
        data: function (e, t) {
            var i, n, o, r = this[0], s = r && r.attributes;
            if (void 0 !== e) return "object" == typeof e ? this.each(function () {
                C.data(this, e)
            }) : 1 < arguments.length ? this.each(function () {
                C.data(this, e, t)
            }) : r ? z(r, e, C.data(r, e)) : void 0;
            if (this.length && (o = C.data(r), 1 === r.nodeType && !C._data(r, "parsedAttrs"))) {
                for (i = s.length; i--;) s[i] && (0 === (n = s[i].name).indexOf("data-") && z(r, n = C.camelCase(n.slice(5)), o[n]));
                C._data(r, "parsedAttrs", !0)
            }
            return o
        }, removeData: function (e) {
            return this.each(function () {
                C.removeData(this, e)
            })
        }
    }), C.extend({
        queue: function (e, t, i) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = C._data(e, t), i && (!n || C.isArray(i) ? n = C._data(e, t, C.makeArray(i)) : n.push(i)), n || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var i = C.queue(e, t), n = i.length, o = i.shift(), r = C._queueHooks(e, t);
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete r.stop, o.call(e, function () {
                C.dequeue(e, t)
            }, r)), !n && r && r.empty.fire()
        }, _queueHooks: function (e, t) {
            var i = t + "queueHooks";
            return C._data(e, i) || C._data(e, i, {
                empty: C.Callbacks("once memory").add(function () {
                    C._removeData(e, t + "queue"), C._removeData(e, i)
                })
            })
        }
    }), C.fn.extend({
        queue: function (t, i) {
            var e = 2;
            return "string" != typeof t && (i = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === i ? this : this.each(function () {
                var e = C.queue(this, t, i);
                C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                C.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var i, n = 1, o = C.Deferred(), r = this, s = this.length, a = function () {
                --n || o.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;) (i = C._data(r[s], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(t)
        }
    }), A.shrinkWrapBlocks = function () {
        return null != I ? I : (I = !1, (t = f.getElementsByTagName("body")[0]) && t.style ? (e = f.createElement("div"), (i = f.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(f.createElement("div")).style.width = "5px", I = 3 !== e.offsetWidth), t.removeChild(i), I) : void 0);
        var e, t, i
    };
    var P = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, W = new RegExp("^(?:([+-])=|)(" + P + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"], X = function (e, t) {
            return e = t || e, "none" === C.css(e, "display") || !C.contains(e.ownerDocument, e)
        };

    function J(e, t, i, n) {
        var o, r = 1, s = 20, a = n ? function () {
                return n.cur()
            } : function () {
                return C.css(e, t, "")
            }, l = a(), d = i && i[3] || (C.cssNumber[t] ? "" : "px"),
            h = (C.cssNumber[t] || "px" !== d && +l) && W.exec(C.css(e, t));
        if (h && h[3] !== d) for (d = d || h[3], i = i || [], h = +l || 1; h /= r = r || ".5", C.style(e, t, h + d), r !== (r = a() / l) && 1 !== r && --s;) ;
        return i && (h = +h || +l || 0, o = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = d, n.start = h, n.end = o)), o
    }

    var U, K, Y, Q = function (e, t, i, n, o, r, s) {
            var a = 0, l = e.length, d = null == i;
            if ("object" === C.type(i)) for (a in o = !0, i) Q(e, t, a, i[a], !0, r, s); else if (void 0 !== n && (o = !0, C.isFunction(n) || (s = !0), d && (t = s ? (t.call(e, n), null) : (d = t, function (e, t, i) {
                return d.call(C(e), i)
            })), t)) for (; a < l; a++) t(e[a], i, s ? n : n.call(e[a], a, t(e[a], i)));
            return o ? e : d ? t.call(e) : l ? t(e[0], i) : r
        }, Z = /^(?:checkbox|radio)$/i, ee = /<([\w:-]+)/, te = /^$|\/(?:java|ecma)script/i, ie = /^\s+/,
        ne = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function oe(e) {
        var t = ne.split("|"), i = e.createDocumentFragment();
        if (i.createElement) for (; t.length;) i.createElement(t.pop());
        return i
    }

    U = f.createElement("div"), K = f.createDocumentFragment(), Y = f.createElement("input"), U.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", A.leadingWhitespace = 3 === U.firstChild.nodeType, A.tbody = !U.getElementsByTagName("tbody").length, A.htmlSerialize = !!U.getElementsByTagName("link").length, A.html5Clone = "<:nav></:nav>" !== f.createElement("nav").cloneNode(!0).outerHTML, Y.type = "checkbox", Y.checked = !0, K.appendChild(Y), A.appendChecked = Y.checked, U.innerHTML = "<textarea>x</textarea>", A.noCloneChecked = !!U.cloneNode(!0).lastChild.defaultValue, K.appendChild(U), (Y = f.createElement("input")).setAttribute("type", "radio"), Y.setAttribute("checked", "checked"), Y.setAttribute("name", "t"), U.appendChild(Y), A.checkClone = U.cloneNode(!0).cloneNode(!0).lastChild.checked, A.noCloneEvent = !!U.addEventListener, U[C.expando] = 1, A.attributes = !U.getAttribute(C.expando);
    var re = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: A.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };

    function we(e, t) {
        var i, n, o = 0,
            r = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!r) for (r = [], i = e.childNodes || e; null != (n = i[o]); o++) !t || C.nodeName(n, t) ? r.push(n) : C.merge(r, we(n, t));
        return void 0 === t || t && C.nodeName(e, t) ? C.merge([e], r) : r
    }

    function se(e, t) {
        for (var i, n = 0; null != (i = e[n]); n++) C._data(i, "globalEval", !t || C._data(t[n], "globalEval"))
    }

    re.optgroup = re.option, re.tbody = re.tfoot = re.colgroup = re.caption = re.thead, re.th = re.td;
    var ae = /<|&#?\w+;/, le = /<tbody/i;

    function de(e) {
        Z.test(e.type) && (e.defaultChecked = e.checked)
    }

    function he(e, t, i, n, o) {
        for (var r, s, a, l, d, h, c, u = e.length, p = oe(t), f = [], m = 0; m < u; m++) if ((s = e[m]) || 0 === s) if ("object" === C.type(s)) C.merge(f, s.nodeType ? [s] : s); else if (ae.test(s)) {
            for (l = l || p.appendChild(t.createElement("div")), d = (ee.exec(s) || ["", ""])[1].toLowerCase(), c = re[d] || re._default, l.innerHTML = c[1] + C.htmlPrefilter(s) + c[2], r = c[0]; r--;) l = l.lastChild;
            if (!A.leadingWhitespace && ie.test(s) && f.push(t.createTextNode(ie.exec(s)[0])), !A.tbody) for (r = (s = "table" !== d || le.test(s) ? "<table>" !== c[1] || le.test(s) ? 0 : l : l.firstChild) && s.childNodes.length; r--;) C.nodeName(h = s.childNodes[r], "tbody") && !h.childNodes.length && s.removeChild(h);
            for (C.merge(f, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = p.lastChild
        } else f.push(t.createTextNode(s));
        for (l && p.removeChild(l), A.appendChecked || C.grep(we(f, "input"), de), m = 0; s = f[m++];) if (n && -1 < C.inArray(s, n)) o && o.push(s); else if (a = C.contains(s.ownerDocument, s), l = we(p.appendChild(s), "script"), a && se(l), i) for (r = 0; s = l[r++];) te.test(s.type || "") && i.push(s);
        return l = null, p
    }

    !function () {
        var e, t, i = f.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) t = "on" + e, (A[e] = t in k) || (i.setAttribute(t, "t"), A[e] = !1 === i.attributes[t].expando);
        i = null
    }();
    var ce = /^(?:input|select|textarea)$/i, ue = /^key/, pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        fe = /^(?:focusinfocus|focusoutblur)$/, me = /^([^.]*)(?:\.(.+)|)/;

    function ve() {
        return !0
    }

    function ge() {
        return !1
    }

    function ye() {
        try {
            return f.activeElement
        } catch (k) {
        }
    }

    function $e(e, t, i, n, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof i && (n = n || i, i = void 0), t) $e(e, a, i, n, t[a], r);
            return e
        }
        if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = ge; else if (!o) return e;
        return 1 === r && (s = o, (o = function (e) {
            return C().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = C.guid++)), e.each(function () {
            C.event.add(this, t, o, n, i)
        })
    }

    C.event = {
        global: {},
        add: function (e, t, i, n, o) {
            var r, s, a, l, d, h, c, u, p, f, m, v = C._data(e);
            if (v) {
                for (i.handler && (i = (l = i).handler, o = l.selector), i.guid || (i.guid = C.guid++), (s = v.events) || (s = v.events = {}), (h = v.handle) || ((h = v.handle = function (e) {
                    return void 0 === C || e && C.event.triggered === e.type ? void 0 : C.event.dispatch.apply(h.elem, arguments)
                }).elem = e), a = (t = (t || "").match(L) || [""]).length; a--;) p = m = (r = me.exec(t[a]) || [])[1], f = (r[2] || "").split(".").sort(), p && (d = C.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = C.event.special[p] || {}, c = C.extend({
                    type: p,
                    origType: m,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && C.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, l), (u = s[p]) || ((u = s[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, f, h) || (e.addEventListener ? e.addEventListener(p, h, !1) : e.attachEvent && e.attachEvent("on" + p, h))), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = i.guid)), o ? u.splice(u.delegateCount++, 0, c) : u.push(c), C.event.global[p] = !0);
                e = null
            }
        },
        remove: function (e, t, i, n, o) {
            var r, s, a, l, d, h, c, u, p, f, m, v = C.hasData(e) && C._data(e);
            if (v && (h = v.events)) {
                for (d = (t = (t || "").match(L) || [""]).length; d--;) if (p = m = (a = me.exec(t[d]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                    for (c = C.event.special[p] || {}, u = h[p = (n ? c.delegateType : c.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = u.length; r--;) s = u[r], !o && m !== s.origType || i && i.guid !== s.guid || a && !a.test(s.namespace) || n && n !== s.selector && ("**" !== n || !s.selector) || (u.splice(r, 1), s.selector && u.delegateCount--, c.remove && c.remove.call(e, s));
                    l && !u.length && (c.teardown && !1 !== c.teardown.call(e, f, v.handle) || C.removeEvent(e, p, v.handle), delete h[p])
                } else for (p in h) C.event.remove(e, p + t[d], i, n, !0);
                C.isEmptyObject(h) && (delete v.handle, C._removeData(e, "events"))
            }
        },
        trigger: function (e, t, i, n) {
            var o, r, s, a, l, d, h, c = [i || f], u = v.call(e, "type") ? e.type : e,
                p = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = d = i = i || f, 3 !== i.nodeType && 8 !== i.nodeType && !fe.test(u + C.event.triggered) && (-1 < u.indexOf(".") && (u = (p = u.split(".")).shift(), p.sort()), r = u.indexOf(":") < 0 && "on" + u, (e = e[C.expando] ? e : new C.Event(u, "object" == typeof e && e)).isTrigger = n ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : C.makeArray(t, [e]), l = C.event.special[u] || {}, n || !l.trigger || !1 !== l.trigger.apply(i, t))) {
                if (!n && !l.noBubble && !C.isWindow(i)) {
                    for (a = l.delegateType || u, fe.test(a + u) || (s = s.parentNode); s; s = s.parentNode) c.push(s), d = s;
                    d === (i.ownerDocument || f) && c.push(d.defaultView || d.parentWindow || k)
                }
                for (h = 0; (s = c[h++]) && !e.isPropagationStopped();) e.type = 1 < h ? a : l.bindType || u, (o = (C._data(s, "events") || {})[e.type] && C._data(s, "handle")) && o.apply(s, t), (o = r && s[r]) && o.apply && O(s) && (e.result = o.apply(s, t), !1 === e.result && e.preventDefault());
                if (e.type = u, !n && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(c.pop(), t)) && O(i) && r && i[u] && !C.isWindow(i)) {
                    (d = i[r]) && (i[r] = null), C.event.triggered = u;
                    try {
                        i[u]()
                    } catch (g) {
                    }
                    C.event.triggered = void 0, d && (i[r] = d)
                }
                return e.result
            }
        },
        dispatch: function (e) {
            e = C.event.fix(e);
            var t, i, n, o, r, s = [], a = h.call(arguments), l = (C._data(this, "events") || {})[e.type] || [],
                d = C.event.special[e.type] || {};
            if ((a[0] = e).delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, e)) {
                for (s = C.event.handlers.call(this, e, l), t = 0; (o = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, i = 0; (r = o.handlers[i++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, void 0 !== (n = ((C.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var i, n, o, r, s = [], a = t.delegateCount, l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                for (n = [], i = 0; i < a; i++) void 0 === n[o = (r = t[i]).selector + " "] && (n[o] = r.needsContext ? -1 < C(o, this).index(l) : C.find(o, this, null, [l]).length), n[o] && n.push(r);
                n.length && s.push({elem: l, handlers: n})
            }
            return a < t.length && s.push({elem: this, handlers: t.slice(a)}), s
        },
        fix: function (e) {
            if (e[C.expando]) return e;
            var t, i, n, o = e.type, r = e, s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = pe.test(o) ? this.mouseHooks : ue.test(o) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, e = new C.Event(r), t = n.length; t--;) e[i = n[t]] = r[i];
            return e.target || (e.target = r.srcElement || f), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var i, n, o, r = t.button, s = t.fromElement;
                return null == e.pageX && null != t.clientX && (o = (n = e.target.ownerDocument || f).documentElement, i = n.body, e.pageX = t.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== ye() && this.focus) try {
                        return this.focus(), !1
                    } catch (k) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === ye() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return C.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (e) {
                    return C.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, i) {
            var n = C.extend(new C.Event, i, {type: e, isSimulated: !0});
            C.event.trigger(n, null, t), n.isDefaultPrevented() && i.preventDefault()
        }
    }, C.removeEvent = f.removeEventListener ? function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    } : function (e, t, i) {
        var n = "on" + t;
        e.detachEvent && ("undefined" == typeof e[n] && (e[n] = null), e.detachEvent(n, i))
    }, C.Event = function (e, t) {
        return this instanceof C.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ve : ge) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || C.now(), void (this[C.expando] = !0)) : new C.Event(e, t)
    }, C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: ge,
        isPropagationStopped: ge,
        isImmediatePropagationStopped: ge,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = ve, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = ve, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ve, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, o) {
        C.event.special[e] = {
            delegateType: o, bindType: o, handle: function (e) {
                var t, i = e.relatedTarget, n = e.handleObj;
                return i && (i === this || C.contains(this, i)) || (e.type = n.origType, t = n.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), A.submit || (C.event.special.submit = {
        setup: function () {
            return !C.nodeName(this, "form") && void C.event.add(this, "click._submit keypress._submit", function (e) {
                var t = e.target, i = C.nodeName(t, "input") || C.nodeName(t, "button") ? C.prop(t, "form") : void 0;
                i && !C._data(i, "submit") && (C.event.add(i, "submit._submit", function (e) {
                    e._submitBubble = !0
                }), C._data(i, "submit", !0))
            })
        }, postDispatch: function (e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && C.event.simulate("submit", this.parentNode, e))
        }, teardown: function () {
            return !C.nodeName(this, "form") && void C.event.remove(this, "._submit")
        }
    }), A.change || (C.event.special.change = {
        setup: function () {
            return ce.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (C.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }), C.event.add(this, "click._change", function (e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), C.event.simulate("change", this, e)
            })), !1) : void C.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                ce.test(t.nodeName) && !C._data(t, "change") && (C.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || C.event.simulate("change", this.parentNode, e)
                }), C._data(t, "change", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return C.event.remove(this, "._change"), !ce.test(this.nodeName)
        }
    }), A.focusin || C.each({focus: "focusin", blur: "focusout"}, function (i, n) {
        var o = function (e) {
            C.event.simulate(n, e.target, C.event.fix(e))
        };
        C.event.special[n] = {
            setup: function () {
                var e = this.ownerDocument || this, t = C._data(e, n);
                t || e.addEventListener(i, o, !0), C._data(e, n, (t || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this, t = C._data(e, n) - 1;
                t ? C._data(e, n, t) : (e.removeEventListener(i, o, !0), C._removeData(e, n))
            }
        }
    }), C.fn.extend({
        on: function (e, t, i, n) {
            return $e(this, e, t, i, n)
        }, one: function (e, t, i, n) {
            return $e(this, e, t, i, n, 1)
        }, off: function (e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, C(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = ge), this.each(function () {
                C.event.remove(this, e, i, t)
            });
            for (o in e) this.off(o, t, e[o]);
            return this
        }, trigger: function (e, t) {
            return this.each(function () {
                C.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var i = this[0];
            return i ? C.event.trigger(e, t, i, !0) : void 0
        }
    });
    var xe = / jQuery\d+="(?:null|\d+)"/g, be = new RegExp("<(?:" + ne + ")[\\s/>]", "i"),
        De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, _e = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i, Ae = /^true\/(.*)/, Ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ne = oe(f).appendChild(f.createElement("div"));

    function Te(e, t) {
        return C.nodeName(e, "table") && C.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Se(e) {
        return e.type = (null !== C.find.attr(e, "type")) + "/" + e.type, e
    }

    function Ee(e) {
        var t = Ae.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function Me(e, t) {
        if (1 === t.nodeType && C.hasData(e)) {
            var i, n, o, r = C._data(e), s = C._data(t, r), a = r.events;
            if (a) for (i in delete s.handle, s.events = {}, a) for (n = 0, o = a[i].length; n < o; n++) C.event.add(t, i, a[i][n]);
            s.data && (s.data = C.extend({}, s.data))
        }
    }

    function Le(e, t) {
        var i, n, o;
        if (1 === t.nodeType) {
            if (i = t.nodeName.toLowerCase(), !A.noCloneEvent && t[C.expando]) {
                for (n in (o = C._data(t)).events) C.removeEvent(t, n, o.handle);
                t.removeAttribute(C.expando)
            }
            "script" === i && t.text !== e.text ? (Se(t).text = e.text, Ee(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML), A.html5Clone && e.innerHTML && !C.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && Z.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
        }
    }

    function Fe(i, n, o, r) {
        n = m.apply([], n);
        var e, t, s, a, l, d, h = 0, c = i.length, u = c - 1, p = n[0], f = C.isFunction(p);
        if (f || 1 < c && "string" == typeof p && !A.checkClone && ke.test(p)) return i.each(function (e) {
            var t = i.eq(e);
            f && (n[0] = p.call(this, e, t.html())), Fe(t, n, o, r)
        });
        if (c && (e = (d = he(n, i[0].ownerDocument, !1, i, r)).firstChild, 1 === d.childNodes.length && (d = e), e || r)) {
            for (s = (a = C.map(we(d, "script"), Se)).length; h < c; h++) t = d, h !== u && (t = C.clone(t, !0, !0), s && C.merge(a, we(t, "script"))), o.call(i[h], t, h);
            if (s) for (l = a[a.length - 1].ownerDocument, C.map(a, Ee), h = 0; h < s; h++) t = a[h], te.test(t.type || "") && !C._data(t, "globalEval") && C.contains(l, t) && (t.src ? C._evalUrl && C._evalUrl(t.src) : C.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Ce, "")));
            d = e = null
        }
        return i
    }

    function Be(e, t, i) {
        for (var n, o = t ? C.filter(t, e) : e, r = 0; null != (n = o[r]); r++) i || 1 !== n.nodeType || C.cleanData(we(n)), n.parentNode && (i && C.contains(n.ownerDocument, n) && se(we(n, "script")), n.parentNode.removeChild(n));
        return e
    }

    C.extend({
        htmlPrefilter: function (e) {
            return e.replace(De, "<$1></$2>")
        }, clone: function (e, t, i) {
            var n, o, r, s, a, l = C.contains(e.ownerDocument, e);
            if (A.html5Clone || C.isXMLDoc(e) || !be.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Ne.innerHTML = e.outerHTML, Ne.removeChild(r = Ne.firstChild)), !(A.noCloneEvent && A.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (n = we(r), a = we(e), s = 0; null != (o = a[s]); ++s) n[s] && Le(o, n[s]);
            if (t) if (i) for (a = a || we(e), n = n || we(r), s = 0; null != (o = a[s]); s++) Me(o, n[s]); else Me(e, r);
            return 0 < (n = we(r, "script")).length && se(n, !l && we(e, "script")), n = a = o = null, r
        }, cleanData: function (e, t) {
            for (var i, n, o, r, s = 0, a = C.expando, l = C.cache, d = A.attributes, h = C.event.special; null != (i = e[s]); s++) if ((t || O(i)) && (r = (o = i[a]) && l[o])) {
                if (r.events) for (n in r.events) h[n] ? C.event.remove(i, n) : C.removeEvent(i, n, r.handle);
                l[o] && (delete l[o], d || "undefined" == typeof i.removeAttribute ? i[a] = void 0 : i.removeAttribute(a), c.push(o))
            }
        }
    }), C.fn.extend({
        domManip: Fe, detach: function (e) {
            return Be(this, e, !0)
        }, remove: function (e) {
            return Be(this, e)
        }, text: function (e) {
            return Q(this, function (e) {
                return void 0 === e ? C.text(this) : this.empty().append((this[0] && this[0].ownerDocument || f).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return Fe(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Te(this, e).appendChild(e)
            })
        }, prepend: function () {
            return Fe(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Te(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return Fe(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return Fe(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && C.cleanData(we(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && C.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return C.clone(this, e, t)
            })
        }, html: function (e) {
            return Q(this, function (e) {
                var t = this[0] || {}, i = 0, n = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(xe, "") : void 0;
                if ("string" == typeof e && !_e.test(e) && (A.htmlSerialize || !be.test(e)) && (A.leadingWhitespace || !ie.test(e)) && !re[(ee.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (C.cleanData(we(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (h) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var i = [];
            return Fe(this, arguments, function (e) {
                var t = this.parentNode;
                C.inArray(this, i) < 0 && (C.cleanData(we(this)), t && t.replaceChild(e, this))
            }, i)
        }
    }), C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, s) {
        C.fn[e] = function (e) {
            for (var t, i = 0, n = [], o = C(e), r = o.length - 1; i <= r; i++) t = i === r ? this : this.clone(!0), C(o[i])[s](t), a.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Ie, Oe = {HTML: "block", BODY: "block"};

    function He(e, t) {
        var i = C(t.createElement(e)).appendTo(t.body), n = C.css(i[0], "display");
        return i.detach(), n
    }

    function je(e) {
        var t = f, i = Oe[e];
        return i || ("none" !== (i = He(e, t)) && i || ((t = ((Ie = (Ie || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ie[0].contentDocument).document).write(), t.close(), i = He(e, t), Ie.detach()), Oe[e] = i), i
    }

    var ze = /^margin/, Ge = new RegExp("^(" + P + ")(?!px)[a-z%]+$", "i"), qe = function (e, t, i, n) {
        var o, r, s = {};
        for (r in t) s[r] = e.style[r], e.style[r] = t[r];
        for (r in o = i.apply(e, n || []), t) e.style[r] = s[r];
        return o
    }, Re = f.documentElement;
    !function () {
        var n, o, r, s, a, l, d = f.createElement("div"), h = f.createElement("div");
        if (h.style) {
            function e() {
                var e, t, i = f.documentElement;
                i.appendChild(d), h.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = l = !1, o = a = !0, k.getComputedStyle && (t = k.getComputedStyle(h), n = "1%" !== (t || {}).top, l = "2px" === (t || {}).marginLeft, r = "4px" === (t || {width: "4px"}).width, h.style.marginRight = "50%", o = "4px" === (t || {marginRight: "4px"}).marginRight, (e = h.appendChild(f.createElement("div"))).style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", h.style.width = "1px", a = !parseFloat((k.getComputedStyle(e) || {}).marginRight), h.removeChild(e)), h.style.display = "none", (s = 0 === h.getClientRects().length) && (h.style.display = "", h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", h.childNodes[0].style.borderCollapse = "separate", (e = h.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (s = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", s = 0 === e[0].offsetHeight)), i.removeChild(d)
            }

            h.style.cssText = "float:left;opacity:.5", A.opacity = "0.5" === h.style.opacity, A.cssFloat = !!h.style.cssFloat, h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", A.clearCloneStyle = "content-box" === h.style.backgroundClip, (d = f.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.innerHTML = "", d.appendChild(h), A.boxSizing = "" === h.style.boxSizing || "" === h.style.MozBoxSizing || "" === h.style.WebkitBoxSizing, C.extend(A, {
                reliableHiddenOffsets: function () {
                    return null == n && e(), s
                }, boxSizingReliable: function () {
                    return null == n && e(), r
                }, pixelMarginRight: function () {
                    return null == n && e(), o
                }, pixelPosition: function () {
                    return null == n && e(), n
                }, reliableMarginRight: function () {
                    return null == n && e(), a
                }, reliableMarginLeft: function () {
                    return null == n && e(), l
                }
            })
        }
    }();
    var Pe, We, Ve = /^(top|right|bottom|left)$/;

    function Xe(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    k.getComputedStyle ? (Pe = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = k), t.getComputedStyle(e)
    }, We = function (e, t, i) {
        var n, o, r, s, a = e.style;
        return "" !== (s = (i = i || Pe(e)) ? i.getPropertyValue(t) || i[t] : void 0) && void 0 !== s || C.contains(e.ownerDocument, e) || (s = C.style(e, t)), i && !A.pixelMarginRight() && Ge.test(s) && ze.test(t) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r), void 0 === s ? s : s + ""
    }) : Re.currentStyle && (Pe = function (e) {
        return e.currentStyle
    }, We = function (e, t, i) {
        var n, o, r, s, a = e.style;
        return null == (s = (i = i || Pe(e)) ? i[t] : void 0) && a && a[t] && (s = a[t]), Ge.test(s) && !Ve.test(t) && (n = a.left, (r = (o = e.runtimeStyle) && o.left) && (o.left = e.currentStyle.left), a.left = "fontSize" === t ? "1em" : s, s = a.pixelLeft + "px", a.left = n, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
    });
    var Je = /alpha\([^)]*\)/i, Ue = /opacity\s*=\s*([^)]*)/i, Ke = /^(none|table(?!-c[ea]).+)/,
        Ye = new RegExp("^(" + P + ")(.*)$", "i"), Qe = {position: "absolute", visibility: "hidden", display: "block"},
        Ze = {letterSpacing: "0", fontWeight: "400"}, et = ["Webkit", "O", "Moz", "ms"],
        tt = f.createElement("div").style;

    function it(e) {
        if (e in tt) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), i = et.length; i--;) if ((e = et[i] + t) in tt) return e
    }

    function nt(e, t) {
        for (var i, n, o, r = [], s = 0, a = e.length; s < a; s++) (n = e[s]).style && (r[s] = C._data(n, "olddisplay"), i = n.style.display, t ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && X(n) && (r[s] = C._data(n, "olddisplay", je(n.nodeName)))) : (o = X(n), (i && "none" !== i || !o) && C._data(n, "olddisplay", o ? i : C.css(n, "display"))));
        for (s = 0; s < a; s++) (n = e[s]).style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[s] || "" : "none"));
        return e
    }

    function ot(e, t, i) {
        var n = Ye.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function rt(e, t, i, n, o) {
        for (var r = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; r < 4; r += 2) "margin" === i && (s += C.css(e, i + V[r], !0, o)), n ? ("content" === i && (s -= C.css(e, "padding" + V[r], !0, o)), "margin" !== i && (s -= C.css(e, "border" + V[r] + "Width", !0, o))) : (s += C.css(e, "padding" + V[r], !0, o), "padding" !== i && (s += C.css(e, "border" + V[r] + "Width", !0, o)));
        return s
    }

    function st(e, t, i) {
        var n = !0, o = "width" === t ? e.offsetWidth : e.offsetHeight, r = Pe(e),
            s = A.boxSizing && "border-box" === C.css(e, "boxSizing", !1, r);
        if (o <= 0 || null == o) {
            if (((o = We(e, t, r)) < 0 || null == o) && (o = e.style[t]), Ge.test(o)) return o;
            n = s && (A.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + rt(e, t, i || (s ? "border" : "content"), n, r) + "px"
    }

    function at(e, t, i, n, o) {
        return new at.prototype.init(e, t, i, n, o)
    }

    C.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = We(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": A.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = C.camelCase(t), l = e.style;
                if (t = C.cssProps[a] || (C.cssProps[a] = it(a) || a), s = C.cssHooks[t] || C.cssHooks[a], void 0 === i) return s && "get" in s && void 0 !== (o = s.get(e, !1, n)) ? o : l[t];
                if ("string" === (r = typeof i) && (o = W.exec(i)) && o[1] && (i = J(e, t, o), r = "number"), null != i && i == i && ("number" === r && (i += o && o[3] || (C.cssNumber[a] ? "" : "px")), A.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(s && "set" in s && void 0 === (i = s.set(e, i, n))))) try {
                    l[t] = i
                } catch (d) {
                }
            }
        },
        css: function (e, t, i, n) {
            var o, r, s, a = C.camelCase(t);
            return t = C.cssProps[a] || (C.cssProps[a] = it(a) || a), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (r = s.get(e, !0, i)), void 0 === r && (r = We(e, t, n)), "normal" === r && t in Ze && (r = Ze[t]), "" === i || i ? (o = parseFloat(r), !0 === i || isFinite(o) ? o || 0 : r) : r
        }
    }), C.each(["height", "width"], function (e, o) {
        C.cssHooks[o] = {
            get: function (e, t, i) {
                return t ? Ke.test(C.css(e, "display")) && 0 === e.offsetWidth ? qe(e, Qe, function () {
                    return st(e, o, i)
                }) : st(e, o, i) : void 0
            }, set: function (e, t, i) {
                var n = i && Pe(e);
                return ot(0, t, i ? rt(e, o, i, A.boxSizing && "border-box" === C.css(e, "boxSizing", !1, n), n) : 0)
            }
        }
    }), A.opacity || (C.cssHooks.opacity = {
        get: function (e, t) {
            return Ue.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var i = e.style, n = e.currentStyle, o = C.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = n && n.filter || i.filter || "";
            ((i.zoom = 1) <= t || "" === t) && "" === C.trim(r.replace(Je, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === t || n && !n.filter) || (i.filter = Je.test(r) ? r.replace(Je, o) : r + " " + o)
        }
    }), C.cssHooks.marginRight = Xe(A.reliableMarginRight, function (e, t) {
        return t ? qe(e, {display: "inline-block"}, We, [e, "marginRight"]) : void 0
    }), C.cssHooks.marginLeft = Xe(A.reliableMarginLeft, function (e, t) {
        return t ? (parseFloat(We(e, "marginLeft")) || (C.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - qe(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), C.each({margin: "", padding: "", border: "Width"}, function (o, r) {
        C.cssHooks[o + r] = {
            expand: function (e) {
                for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) i[o + V[t] + r] = n[t] || n[t - 2] || n[0];
                return i
            }
        }, ze.test(o) || (C.cssHooks[o + r].set = ot)
    }), C.fn.extend({
        css: function (e, t) {
            return Q(this, function (e, t, i) {
                var n, o, r = {}, s = 0;
                if (C.isArray(t)) {
                    for (n = Pe(e), o = t.length; s < o; s++) r[t[s]] = C.css(e, t[s], !1, n);
                    return r
                }
                return void 0 !== i ? C.style(e, t, i) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        }, show: function () {
            return nt(this, !0)
        }, hide: function () {
            return nt(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                X(this) ? C(this).show() : C(this).hide()
            })
        }
    }), ((C.Tween = at).prototype = {
        constructor: at, init: function (e, t, i, n, o, r) {
            this.elem = e, this.prop = i, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (C.cssNumber[i] ? "" : "px")
        }, cur: function () {
            var e = at.propHooks[this.prop];
            return e && e.get ? e.get(this) : at.propHooks._default.get(this)
        }, run: function (e) {
            var t, i = at.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : at.propHooks._default.set(this), this
        }
    }).init.prototype = at.prototype, (at.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = at.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, C.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, C.fx = at.prototype.init, C.fx.step = {};
    var lt, dt, ht, ct, ut, pt, ft, mt = /^(?:toggle|show|hide)$/, vt = /queueHooks$/;

    function gt() {
        return k.setTimeout(function () {
            lt = void 0
        }), lt = C.now()
    }

    function yt(e, t) {
        var i, n = {height: e}, o = 0;
        for (t = t ? 1 : 0; o < 4; o += 2 - t) n["margin" + (i = V[o])] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e), n
    }

    function $t(e, t, i) {
        for (var n, o = (wt.tweeners[t] || []).concat(wt.tweeners["*"]), r = 0, s = o.length; r < s; r++) if (n = o[r].call(i, t, e)) return n
    }

    function wt(r, e, t) {
        var i, s, n = 0, o = wt.prefilters.length, a = C.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (s) return !1;
            for (var e = lt || gt(), t = Math.max(0, d.startTime + d.duration - e), i = 1 - (t / d.duration || 0), n = 0, o = d.tweens.length; n < o; n++) d.tweens[n].run(i);
            return a.notifyWith(r, [d, i, t]), i < 1 && o ? t : (a.resolveWith(r, [d]), !1)
        }, d = a.promise({
            elem: r,
            props: C.extend({}, e),
            opts: C.extend(!0, {specialEasing: {}, easing: C.easing._default}, t),
            originalProperties: e,
            originalOptions: t,
            startTime: lt || gt(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var i = C.Tween(r, d.opts, e, t, d.opts.specialEasing[e] || d.opts.easing);
                return d.tweens.push(i), i
            },
            stop: function (e) {
                var t = 0, i = e ? d.tweens.length : 0;
                if (s) return this;
                for (s = !0; t < i; t++) d.tweens[t].run(1);
                return e ? (a.notifyWith(r, [d, 1, 0]), a.resolveWith(r, [d, e])) : a.rejectWith(r, [d, e]), this
            }
        }), h = d.props;
        for (function c(e, t) {
            var i, n, o, r, s;
            for (i in e) if (o = t[n = C.camelCase(i)], r = e[i], C.isArray(r) && (o = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), (s = C.cssHooks[n]) && "expand" in s) for (i in r = s.expand(r), delete e[n], r) i in e || (e[i] = r[i], t[i] = o); else t[n] = o
        }(h, d.opts.specialEasing); n < o; n++) if (i = wt.prefilters[n].call(d, r, h, d.opts)) return C.isFunction(i.stop) && (C._queueHooks(d.elem, d.opts.queue).stop = C.proxy(i.stop, i)), i;
        return C.map(h, $t, d), C.isFunction(d.opts.start) && d.opts.start.call(r, d), C.fx.timer(C.extend(l, {
            elem: r,
            anim: d,
            queue: d.opts.queue
        })), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
    }

    C.Animation = C.extend(wt, {
        tweeners: {
            "*": [function (e, t) {
                var i = this.createTween(e, t);
                return J(i.elem, e, W.exec(t), i), i
            }]
        }, tweener: function (e, t) {
            for (var i, n = 0, o = (e = C.isFunction(e) ? (t = e, ["*"]) : e.match(L)).length; n < o; n++) i = e[n], wt.tweeners[i] = wt.tweeners[i] || [], wt.tweeners[i].unshift(t)
        }, prefilters: [function fi(t, e, i) {
            var n, o, r, s, a, l, d, h = this, c = {}, u = t.style, p = t.nodeType && X(t), f = C._data(t, "fxshow");
            for (n in i.queue || (null == (a = C._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                a.unqueued || l()
            }), a.unqueued++, h.always(function () {
                h.always(function () {
                    a.unqueued--, C.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [u.overflow, u.overflowX, u.overflowY], "inline" === ("none" === (d = C.css(t, "display")) ? C._data(t, "olddisplay") || je(t.nodeName) : d) && "none" === C.css(t, "float") && (A.inlineBlockNeedsLayout && "inline" !== je(t.nodeName) ? u.zoom = 1 : u.display = "inline-block")), i.overflow && (u.overflow = "hidden", A.shrinkWrapBlocks() || h.always(function () {
                u.overflow = i.overflow[0], u.overflowX = i.overflow[1], u.overflowY = i.overflow[2]
            })), e) if (o = e[n], mt.exec(o)) {
                if (delete e[n], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
                    if ("show" !== o || !f || void 0 === f[n]) continue;
                    p = !0
                }
                c[n] = f && f[n] || C.style(t, n)
            } else d = void 0;
            if (C.isEmptyObject(c)) "inline" === ("none" === d ? je(t.nodeName) : d) && (u.display = d); else for (n in f ? "hidden" in f && (p = f.hidden) : f = C._data(t, "fxshow", {}), r && (f.hidden = !p), p ? C(t).show() : h.done(function () {
                C(t).hide()
            }), h.done(function () {
                var e;
                for (e in C._removeData(t, "fxshow"), c) C.style(t, e, c[e])
            }), c) s = $t(p ? f[n] : 0, n, h), n in f || (f[n] = s.start, p && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
        }], prefilter: function (e, t) {
            t ? wt.prefilters.unshift(e) : wt.prefilters.push(e)
        }
    }), C.speed = function (e, t, i) {
        var n = e && "object" == typeof e ? C.extend({}, e) : {
            complete: i || !i && t || C.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !C.isFunction(t) && t
        };
        return n.duration = C.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in C.fx.speeds ? C.fx.speeds[n.duration] : C.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
            C.isFunction(n.old) && n.old.call(this), n.queue && C.dequeue(this, n.queue)
        }, n
    }, C.fn.extend({
        fadeTo: function (e, t, i, n) {
            return this.filter(X).css("opacity", 0).show().end().animate({opacity: t}, e, i, n)
        }, animate: function (t, e, i, n) {
            var o = C.isEmptyObject(t), r = C.speed(e, i, n), s = function () {
                var e = wt(this, C.extend({}, t), r);
                (o || C._data(this, "finish")) && e.stop(!0)
            };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        }, stop: function (o, e, r) {
            var s = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof o && (r = e, e = o, o = void 0), e && !1 !== o && this.queue(o || "fx", []), this.each(function () {
                var e = !0, t = null != o && o + "queueHooks", i = C.timers, n = C._data(this);
                if (t) n[t] && n[t].stop && s(n[t]); else for (t in n) n[t] && n[t].stop && vt.test(t) && s(n[t]);
                for (t = i.length; t--;) i[t].elem !== this || null != o && i[t].queue !== o || (i[t].anim.stop(r), e = !1, i.splice(t, 1));
                !e && r || C.dequeue(this, o)
            })
        }, finish: function (s) {
            return !1 !== s && (s = s || "fx"), this.each(function () {
                var e, t = C._data(this), i = t[s + "queue"], n = t[s + "queueHooks"], o = C.timers,
                    r = i ? i.length : 0;
                for (t.finish = !0, C.queue(this, s, []), n && n.stop && n.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < r; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete t.finish
            })
        }
    }), C.each(["toggle", "show", "hide"], function (e, n) {
        var o = C.fn[n];
        C.fn[n] = function (e, t, i) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(yt(n, !0), e, t, i)
        }
    }), C.each({
        slideDown: yt("show"),
        slideUp: yt("hide"),
        slideToggle: yt("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, n) {
        C.fn[e] = function (e, t, i) {
            return this.animate(n, e, t, i)
        }
    }), C.timers = [], C.fx.tick = function () {
        var e, t = C.timers, i = 0;
        for (lt = C.now(); i < t.length; i++) (e = t[i])() || t[i] !== e || t.splice(i--, 1);
        t.length || C.fx.stop(), lt = void 0
    }, C.fx.timer = function (e) {
        C.timers.push(e), e() ? C.fx.start() : C.timers.pop()
    }, C.fx.interval = 13, C.fx.start = function () {
        dt || (dt = k.setInterval(C.fx.tick, C.fx.interval))
    }, C.fx.stop = function () {
        k.clearInterval(dt), dt = null
    }, C.fx.speeds = {slow: 600, fast: 200, _default: 400}, C.fn.delay = function (n, e) {
        return n = C.fx && C.fx.speeds[n] || n, e = e || "fx", this.queue(e, function (e, t) {
            var i = k.setTimeout(e, n);
            t.stop = function () {
                k.clearTimeout(i)
            }
        })
    }, ct = f.createElement("input"), ut = f.createElement("div"), pt = f.createElement("select"), ft = pt.appendChild(f.createElement("option")), (ut = f.createElement("div")).setAttribute("className", "t"), ut.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ht = ut.getElementsByTagName("a")[0], ct.setAttribute("type", "checkbox"), ut.appendChild(ct), (ht = ut.getElementsByTagName("a")[0]).style.cssText = "top:1px", A.getSetAttribute = "t" !== ut.className, A.style = /top/.test(ht.getAttribute("style")), A.hrefNormalized = "/a" === ht.getAttribute("href"), A.checkOn = !!ct.value, A.optSelected = ft.selected, A.enctype = !!f.createElement("form").enctype, pt.disabled = !0, A.optDisabled = !ft.disabled, (ct = f.createElement("input")).setAttribute("value", ""), A.input = "" === ct.getAttribute("value"), ct.value = "t", ct.setAttribute("type", "radio"), A.radioValue = "t" === ct.value;
    var xt = /\r/g, bt = /[\x20\t\r\n\f]+/g;
    C.fn.extend({
        val: function (i) {
            var n, e, o, t = this[0];
            return arguments.length ? (o = C.isFunction(i), this.each(function (e) {
                var t;
                1 === this.nodeType && (null == (t = o ? i.call(this, e, C(this).val()) : i) ? t = "" : "number" == typeof t ? t += "" : C.isArray(t) && (t = C.map(t, function (e) {
                    return null == e ? "" : e + ""
                })), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, t, "value") || (this.value = t))
            })) : t ? (n = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), C.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : C.trim(C.text(e)).replace(bt, " ")
                }
            }, select: {
                get: function (e) {
                    for (var t, i, n = e.options, o = e.selectedIndex, r = "select-one" === e.type || o < 0, s = r ? null : [], a = r ? o + 1 : n.length, l = o < 0 ? a : r ? o : 0; l < a; l++) if (((i = n[l]).selected || l === o) && (A.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !C.nodeName(i.parentNode, "optgroup"))) {
                        if (t = C(i).val(), r) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var i, n, o = e.options, r = C.makeArray(t), s = o.length; s--;) if (n = o[s], -1 < C.inArray(C.valHooks.option.get(n), r)) try {
                        n.selected = i = !0
                    } catch (l) {
                        n.scrollHeight
                    } else n.selected = !1;
                    return i || (e.selectedIndex = -1), o
                }
            }
        }
    }), C.each(["radio", "checkbox"], function () {
        C.valHooks[this] = {
            set: function (e, t) {
                return C.isArray(t) ? e.checked = -1 < C.inArray(C(e).val(), t) : void 0
            }
        }, A.checkOn || (C.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Dt, _t, kt = C.expr.attrHandle, At = /^(?:checked|selected)$/i, Ct = A.getSetAttribute, Nt = A.input;
    C.fn.extend({
        attr: function (e, t) {
            return Q(this, C.attr, e, t, 1 < arguments.length)
        }, removeAttr: function (e) {
            return this.each(function () {
                C.removeAttr(this, e)
            })
        }
    }), C.extend({
        attr: function (e, t, i) {
            var n, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return "undefined" == typeof e.getAttribute ? C.prop(e, t, i) : (1 === r && C.isXMLDoc(e) || (t = t.toLowerCase(), o = C.attrHooks[t] || (C.expr.match.bool.test(t) ? _t : Dt)), void 0 !== i ? null === i ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : o && "get" in o && null !== (n = o.get(e, t)) ? n : null == (n = C.find.attr(e, t)) ? void 0 : n)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!A.radioValue && "radio" === t && C.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var i, n, o = 0, r = t && t.match(L);
            if (r && 1 === e.nodeType) for (; i = r[o++];) n = C.propFix[i] || i, C.expr.match.bool.test(i) ? Nt && Ct || !At.test(i) ? e[n] = !1 : e[C.camelCase("default-" + i)] = e[n] = !1 : C.attr(e, i, ""), e.removeAttribute(Ct ? i : n)
        }
    }), _t = {
        set: function (e, t, i) {
            return !1 === t ? C.removeAttr(e, i) : Nt && Ct || !At.test(i) ? e.setAttribute(!Ct && C.propFix[i] || i, i) : e[C.camelCase("default-" + i)] = e[i] = !0, i
        }
    }, C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var r = kt[t] || C.find.attr;
        Nt && Ct || !At.test(t) ? kt[t] = function (e, t, i) {
            var n, o;
            return i || (o = kt[t], kt[t] = n, n = null != r(e, t, i) ? t.toLowerCase() : null, kt[t] = o), n
        } : kt[t] = function (e, t, i) {
            return i ? void 0 : e[C.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), Nt && Ct || (C.attrHooks.value = {
        set: function (e, t, i) {
            return C.nodeName(e, "input") ? void (e.defaultValue = t) : Dt && Dt.set(e, t, i)
        }
    }), Ct || (Dt = {
        set: function (e, t, i) {
            var n = e.getAttributeNode(i);
            return n || e.setAttributeNode(n = e.ownerDocument.createAttribute(i)), n.value = t += "", "value" === i || t === e.getAttribute(i) ? t : void 0
        }
    }, kt.id = kt.name = kt.coords = function (e, t, i) {
        var n;
        return i ? void 0 : (n = e.getAttributeNode(t)) && "" !== n.value ? n.value : null
    }, C.valHooks.button = {
        get: function (e, t) {
            var i = e.getAttributeNode(t);
            return i && i.specified ? i.value : void 0
        }, set: Dt.set
    }, C.attrHooks.contenteditable = {
        set: function (e, t, i) {
            Dt.set(e, "" !== t && t, i)
        }
    }, C.each(["width", "height"], function (e, i) {
        C.attrHooks[i] = {
            set: function (e, t) {
                return "" === t ? (e.setAttribute(i, "auto"), t) : void 0
            }
        }
    })), A.style || (C.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Tt = /^(?:input|select|textarea|button|object)$/i, St = /^(?:a|area)$/i;
    C.fn.extend({
        prop: function (e, t) {
            return Q(this, C.prop, e, t, 1 < arguments.length)
        }, removeProp: function (e) {
            return e = C.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {
                }
            })
        }
    }), C.extend({
        prop: function (e, t, i) {
            var n, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Tt.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {"for": "htmlFor", "class": "className"}
    }), A.hrefNormalized || C.each(["href", "src"], function (e, t) {
        C.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), A.optSelected || (C.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        C.propFix[this.toLowerCase()] = this
    }), A.enctype || (C.propFix.enctype = "encoding");
    var Et = /[\t\r\n\f]/g;

    function Mt(e) {
        return C.attr(e, "class") || ""
    }

    C.fn.extend({
        addClass: function (t) {
            var e, i, n, o, r, s, a, l = 0;
            if (C.isFunction(t)) return this.each(function (e) {
                C(this).addClass(t.call(this, e, Mt(this)))
            });
            if ("string" == typeof t && t) for (e = t.match(L) || []; i = this[l++];) if (o = Mt(i), n = 1 === i.nodeType && (" " + o + " ").replace(Et, " ")) {
                for (s = 0; r = e[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                o !== (a = C.trim(n)) && C.attr(i, "class", a)
            }
            return this
        }, removeClass: function (t) {
            var e, i, n, o, r, s, a, l = 0;
            if (C.isFunction(t)) return this.each(function (e) {
                C(this).removeClass(t.call(this, e, Mt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) for (e = t.match(L) || []; i = this[l++];) if (o = Mt(i), n = 1 === i.nodeType && (" " + o + " ").replace(Et, " ")) {
                for (s = 0; r = e[s++];) for (; -1 < n.indexOf(" " + r + " ");) n = n.replace(" " + r + " ", " ");
                o !== (a = C.trim(n)) && C.attr(i, "class", a)
            }
            return this
        }, toggleClass: function (o, t) {
            var r = typeof o;
            return "boolean" == typeof t && "string" === r ? t ? this.addClass(o) : this.removeClass(o) : C.isFunction(o) ? this.each(function (e) {
                C(this).toggleClass(o.call(this, e, Mt(this), t), t)
            }) : this.each(function () {
                var e, t, i, n;
                if ("string" === r) for (t = 0, i = C(this), n = o.match(L) || []; e = n[t++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e); else void 0 !== o && "boolean" !== r || ((e = Mt(this)) && C._data(this, "__className__", e), C.attr(this, "class", e || !1 === o ? "" : C._data(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++];) if (1 === i.nodeType && -1 < (" " + Mt(i) + " ").replace(Et, " ").indexOf(t)) return !0;
            return !1
        }
    }), C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, i) {
        C.fn[i] = function (e, t) {
            return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
        }
    }), C.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var Lt = k.location, Ft = C.now(), Bt = /\?/,
        It = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    C.parseJSON = function (e) {
        if (k.JSON && k.JSON.parse) return k.JSON.parse(e + "");
        var o, r = null, t = C.trim(e + "");
        return t && !C.trim(t.replace(It, function (e, t, i, n) {
            return o && t && (r = 0), 0 === r ? e : (o = i || t, r += !n - !i, "")
        })) ? Function("return " + t)() : C.error("Invalid JSON: " + e)
    }, C.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            k.DOMParser ? t = (new k.DOMParser).parseFromString(e, "text/xml") : ((t = new k.ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e))
        } catch (h) {
            t = void 0
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
    };
    var Ot = /#.*$/, Ht = /([?&])_=[^&]*/, jt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, zt = /^(?:GET|HEAD)$/, Gt = /^\/\//,
        qt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Rt = {}, Pt = {}, Wt = "*/".concat("*"),
        Vt = Lt.href, Xt = qt.exec(Vt.toLowerCase()) || [];

    function Jt(r) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var i, n = 0, o = e.toLowerCase().match(L) || [];
            if (C.isFunction(t)) for (; i = o[n++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (r[i] = r[i] || []).unshift(t)) : (r[i] = r[i] || []).push(t)
        }
    }

    function Ut(t, o, r, s) {
        var a = {}, l = t === Pt;

        function d(e) {
            var n;
            return a[e] = !0, C.each(t[e] || [], function (e, t) {
                var i = t(o, r, s);
                return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (o.dataTypes.unshift(i), d(i), !1)
            }), n
        }

        return d(o.dataTypes[0]) || !a["*"] && d("*")
    }

    function Kt(e, t) {
        var i, n, o = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && C.extend(!0, e, i), e
    }

    C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Vt,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Xt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Wt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": C.parseJSON, "text xml": C.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Kt(Kt(e, C.ajaxSettings), t) : Kt(C.ajaxSettings, e)
        },
        ajaxPrefilter: Jt(Rt),
        ajaxTransport: Jt(Pt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, n, u, p, f, m, v, o, g = C.ajaxSetup({}, t), y = g.context || g,
                $ = g.context && (y.nodeType || y.jquery) ? C(y) : C.event, w = C.Deferred(),
                x = C.Callbacks("once memory"), b = g.statusCode || {}, r = {}, s = {}, D = 0, a = "canceled", _ = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === D) {
                            if (!o) for (o = {}; t = jt.exec(p);) o[t[1].toLowerCase()] = t[2];
                            t = o[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === D ? p : null
                    }, setRequestHeader: function (e, t) {
                        var i = e.toLowerCase();
                        return D || (e = s[i] = s[i] || e, r[e] = t), this
                    }, overrideMimeType: function (e) {
                        return D || (g.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (D < 2) for (t in e) b[t] = [b[t], e[t]]; else _.always(e[_.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || a;
                        return v && v.abort(t), l(0, t), this
                    }
                };
            if (w.promise(_).complete = x.add, _.success = _.done, _.error = _.fail, g.url = ((e || g.url || Vt) + "").replace(Ot, "").replace(Gt, Xt[1] + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = C.trim(g.dataType || "*").toLowerCase().match(L) || [""], null == g.crossDomain && (i = qt.exec(g.url.toLowerCase()), g.crossDomain = !(!i || i[1] === Xt[1] && i[2] === Xt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Xt[3] || ("http:" === Xt[1] ? "80" : "443")))), g.data && g.processData && "string" != typeof g.data && (g.data = C.param(g.data, g.traditional)), Ut(Rt, g, t, _), 2 === D) return _;
            for (n in (m = C.event && g.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !zt.test(g.type), u = g.url, g.hasContent || (g.data && (u = g.url += (Bt.test(u) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = Ht.test(u) ? u.replace(Ht, "$1_=" + Ft++) : u + (Bt.test(u) ? "&" : "?") + "_=" + Ft++)), g.ifModified && (C.lastModified[u] && _.setRequestHeader("If-Modified-Since", C.lastModified[u]), C.etag[u] && _.setRequestHeader("If-None-Match", C.etag[u])), (g.data && g.hasContent && !1 !== g.contentType || t.contentType) && _.setRequestHeader("Content-Type", g.contentType), _.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : g.accepts["*"]), g.headers) _.setRequestHeader(n, g.headers[n]);
            if (g.beforeSend && (!1 === g.beforeSend.call(y, _, g) || 2 === D)) return _.abort();
            for (n in a = "abort", {success: 1, error: 1, complete: 1}) _[n](g[n]);
            if (v = Ut(Pt, g, t, _)) {
                if (_.readyState = 1, m && $.trigger("ajaxSend", [_, g]), 2 === D) return _;
                g.async && 0 < g.timeout && (f = k.setTimeout(function () {
                    _.abort("timeout")
                }, g.timeout));
                try {
                    D = 1, v.send(r, l)
                } catch (N) {
                    if (!(D < 2)) throw N;
                    l(-1, N)
                }
            } else l(-1, "No Transport");

            function l(e, t, i, n) {
                var o, r, s, a, l, d = t;
                2 !== D && (D = 2, f && k.clearTimeout(f), v = void 0, p = n || "", _.readyState = 0 < e ? 4 : 0, o = 200 <= e && e < 300 || 304 === e, i && (a = function h(e, t, i) {
                    for (var n, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (o) for (s in a) if (a[s] && a[s].test(o)) {
                        l.unshift(s);
                        break
                    }
                    if (l[0] in i) r = l[0]; else {
                        for (s in i) {
                            if (!l[0] || e.converters[s + " " + l[0]]) {
                                r = s;
                                break
                            }
                            n || (n = s)
                        }
                        r = r || n
                    }
                    return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
                }(g, _, i)), a = function c(e, t, i, n) {
                    var o, r, s, a, l, d = {}, h = e.dataTypes.slice();
                    if (h[1]) for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
                    for (r = h.shift(); r;) if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = h.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
                        if (!(s = d[l + " " + r] || d["* " + r])) for (o in d) if ((a = o.split(" "))[1] === r && (s = d[l + " " + a[0]] || d["* " + a[0]])) {
                            !0 === s ? s = d[o] : !0 !== d[o] && (r = a[0], h.unshift(a[1]));
                            break
                        }
                        if (!0 !== s) if (s && e["throws"]) t = s(t); else try {
                            t = s(t)
                        } catch (A) {
                            return {state: "parsererror", error: s ? A : "No conversion from " + l + " to " + r}
                        }
                    }
                    return {state: "success", data: t}
                }(g, a, _, o), o ? (g.ifModified && ((l = _.getResponseHeader("Last-Modified")) && (C.lastModified[u] = l), (l = _.getResponseHeader("etag")) && (C.etag[u] = l)), 204 === e || "HEAD" === g.type ? d = "nocontent" : 304 === e ? d = "notmodified" : (d = a.state, r = a.data, o = !(s = a.error))) : (s = d, !e && d || (d = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (t || d) + "", o ? w.resolveWith(y, [r, d, _]) : w.rejectWith(y, [_, d, s]), _.statusCode(b), b = void 0, m && $.trigger(o ? "ajaxSuccess" : "ajaxError", [_, g, o ? r : s]), x.fireWith(y, [_, d]), m && ($.trigger("ajaxComplete", [_, g]), --C.active || C.event.trigger("ajaxStop")))
            }

            return _
        },
        getJSON: function (e, t, i) {
            return C.get(e, t, i, "json")
        },
        getScript: function (e, t) {
            return C.get(e, void 0, t, "script")
        }
    }), C.each(["get", "post"], function (e, o) {
        C[o] = function (e, t, i, n) {
            return C.isFunction(t) && (n = n || i, i = t, t = void 0), C.ajax(C.extend({
                url: e,
                type: o,
                dataType: n,
                data: t,
                success: i
            }, C.isPlainObject(e) && e))
        }
    }), C._evalUrl = function (e) {
        return C.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0})
    }, C.fn.extend({
        wrapAll: function (t) {
            if (C.isFunction(t)) return this.each(function (e) {
                C(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = C(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (i) {
            return C.isFunction(i) ? this.each(function (e) {
                C(this).wrapInner(i.call(this, e))
            }) : this.each(function () {
                var e = C(this), t = e.contents();
                t.length ? t.wrapAll(i) : e.append(i)
            })
        }, wrap: function (t) {
            var i = C.isFunction(t);
            return this.each(function (e) {
                C(this).wrapAll(i ? t.call(this, e) : t)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                C.nodeName(this, "body") || C(this).replaceWith(this.childNodes)
            }).end()
        }
    }), C.expr.filters.hidden = function (e) {
        return A.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : function i(e) {
            if (!C.contains(e.ownerDocument || f, e)) return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === ((t = e).style && t.style.display || C.css(t, "display")) || "hidden" === e.type) return !0;
                e = e.parentNode
            }
            var t;
            return !1
        }(e)
    }, C.expr.filters.visible = function (e) {
        return !C.expr.filters.hidden(e)
    };
    var Yt = /%20/g, Qt = /\[\]$/, Zt = /\r?\n/g, ei = /^(?:submit|button|image|reset|file)$/i,
        ti = /^(?:input|select|textarea|keygen)/i;

    function ii(i, e, n, o) {
        var t;
        if (C.isArray(e)) C.each(e, function (e, t) {
            n || Qt.test(i) ? o(i, t) : ii(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, n, o)
        }); else if (n || "object" !== C.type(e)) o(i, e); else for (t in e) ii(i + "[" + t + "]", e[t], n, o)
    }

    C.param = function (e, t) {
        var i, n = [], o = function (e, t) {
            t = C.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function () {
            o(this.name, this.value)
        }); else for (i in e) ii(i, e[i], t, o);
        return n.join("&").replace(Yt, "+")
    }, C.fn.extend({
        serialize: function () {
            return C.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && ti.test(this.nodeName) && !ei.test(e) && (this.checked || !Z.test(e))
            }).map(function (e, t) {
                var i = C(this).val();
                return null == i ? null : C.isArray(i) ? C.map(i, function (e) {
                    return {name: t.name, value: e.replace(Zt, "\r\n")}
                }) : {name: t.name, value: i.replace(Zt, "\r\n")}
            }).get()
        }
    }), C.ajaxSettings.xhr = void 0 !== k.ActiveXObject ? function () {
        return this.isLocal ? ai() : 8 < f.documentMode ? si() : /^(get|post|head|put|delete|options)$/i.test(this.type) && si() || ai()
    } : si;
    var ni = 0, oi = {}, ri = C.ajaxSettings.xhr();

    function si() {
        try {
            return new k.XMLHttpRequest
        } catch (t) {
        }
    }

    function ai() {
        try {
            return new k.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    k.attachEvent && k.attachEvent("onunload", function () {
        for (var e in oi) oi[e](void 0, !0)
    }), A.cors = !!ri && "withCredentials" in ri, (ri = A.ajax = !!ri) && C.ajaxTransport(function (l) {
        var d;
        if (!l.crossDomain || A.cors) return {
            send: function (e, r) {
                var t, s = l.xhr(), a = ++ni;
                if (s.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields) for (t in l.xhrFields) s[t] = l.xhrFields[t];
                for (t in l.mimeType && s.overrideMimeType && s.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) void 0 !== e[t] && s.setRequestHeader(t, e[t] + "");
                s.send(l.hasContent && l.data || null), d = function (e, t) {
                    var i, n, o;
                    if (d && (t || 4 === s.readyState)) if (delete oi[a], d = void 0, s.onreadystatechange = C.noop, t) 4 !== s.readyState && s.abort(); else {
                        o = {}, i = s.status, "string" == typeof s.responseText && (o.text = s.responseText);
                        try {
                            n = s.statusText
                        } catch (v) {
                            n = ""
                        }
                        i || !l.isLocal || l.crossDomain ? 1223 === i && (i = 204) : i = o.text ? 200 : 404
                    }
                    o && r(i, n, o, s.getAllResponseHeaders())
                }, l.async ? 4 === s.readyState ? k.setTimeout(d) : s.onreadystatechange = oi[a] = d : d()
            }, abort: function () {
                d && d(void 0, !0)
            }
        }
    }), C.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return C.globalEval(e), e
            }
        }
    }), C.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), C.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var n, o = f.head || C("head")[0] || f.documentElement;
            return {
                send: function (e, i) {
                    (n = f.createElement("script")).async = !0, t.scriptCharset && (n.charset = t.scriptCharset), n.src = t.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, o.insertBefore(n, o.firstChild)
                }, abort: function () {
                    n && n.onload(void 0, !0)
                }
            }
        }
    });
    var li = [], di = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = li.pop() || C.expando + "_" + Ft++;
            return this[e] = !0, e
        }
    }), C.ajaxPrefilter("json jsonp", function (e, t, i) {
        var n, o, r,
            s = !1 !== e.jsonp && (di.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && di.test(e.data) && "data");
        return s || "jsonp" === e.dataTypes[0] ? (n = e.jsonpCallback = C.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(di, "$1" + n) : !1 !== e.jsonp && (e.url += (Bt.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function () {
            return r || C.error(n + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = k[n], k[n] = function () {
            r = arguments
        }, i.always(function () {
            void 0 === o ? C(k).removeProp(n) : k[n] = o, e[n] && (e.jsonpCallback = t.jsonpCallback, li.push(n)), r && C.isFunction(o) && o(r[0]), r = o = void 0
        }), "script") : void 0
    }), C.parseHTML = function (e, t, i) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (i = t, t = !1), t = t || f;
        var n = N.exec(e), o = !i && [];
        return n ? [t.createElement(n[1])] : (n = he([e], t, o), o && o.length && C(o).remove(), C.merge([], n.childNodes))
    };
    var hi = C.fn.load;

    function ci(e) {
        return C.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    C.fn.load = function (e, t, i) {
        if ("string" != typeof e && hi) return hi.apply(this, arguments);
        var n, o, r, s = this, a = e.indexOf(" ");
        return -1 < a && (n = C.trim(e.slice(a, e.length)), e = e.slice(0, a)), C.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < s.length && C.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments, s.html(n ? C("<div>").append(C.parseHTML(e)).find(n) : e)
        }).always(i && function (e, t) {
            s.each(function () {
                i.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        C.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), C.expr.filters.animated = function (t) {
        return C.grep(C.timers, function (e) {
            return t === e.elem
        }).length
    }, C.offset = {
        setOffset: function (e, t, i) {
            var n, o, r, s, a, l, d = C.css(e, "position"), h = C(e), c = {};
            "static" === d && (e.style.position = "relative"), a = h.offset(), r = C.css(e, "top"), l = C.css(e, "left"), o = ("absolute" === d || "fixed" === d) && -1 < C.inArray("auto", [r, l]) ? (s = (n = h.position()).top, n.left) : (s = parseFloat(r) || 0, parseFloat(l) || 0), C.isFunction(t) && (t = t.call(e, i, C.extend({}, a))), null != t.top && (c.top = t.top - a.top + s), null != t.left && (c.left = t.left - a.left + o), "using" in t ? t.using.call(e, c) : h.css(c)
        }
    }, C.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                C.offset.setOffset(this, t, e)
            });
            var e, i, n = {top: 0, left: 0}, o = this[0], r = o && o.ownerDocument;
            return r ? (e = r.documentElement, C.contains(e, o) ? ("undefined" != typeof o.getBoundingClientRect && (n = o.getBoundingClientRect()), i = ci(r), {
                top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : n) : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, i = {top: 0, left: 0}, n = this[0];
                return "fixed" === C.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), C.nodeName(e[0], "html") || (i = e.offset()), i.top += C.css(e[0], "borderTopWidth", !0), i.left += C.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - C.css(n, "marginTop", !0),
                    left: t.left - i.left - C.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && !C.nodeName(e, "html") && "static" === C.css(e, "position");) e = e.offsetParent;
                return e || Re
            })
        }
    }), C.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, o) {
        var r = /Y/.test(o);
        C.fn[t] = function (e) {
            return Q(this, function (e, t, i) {
                var n = ci(e);
                return void 0 === i ? n ? o in n ? n[o] : n.document.documentElement[t] : e[t] : void (n ? n.scrollTo(r ? C(n).scrollLeft() : i, r ? i : C(n).scrollTop()) : e[t] = i)
            }, t, e, arguments.length, null)
        }
    }), C.each(["top", "left"], function (e, i) {
        C.cssHooks[i] = Xe(A.pixelPosition, function (e, t) {
            return t ? (t = We(e, i), Ge.test(t) ? C(e).position()[i] + "px" : t) : void 0
        })
    }), C.each({Height: "height", Width: "width"}, function (r, s) {
        C.each({padding: "inner" + r, content: s, "": "outer" + r}, function (n, e) {
            C.fn[e] = function (e, t) {
                var i = arguments.length && (n || "boolean" != typeof e),
                    o = n || (!0 === e || !0 === t ? "margin" : "border");
                return Q(this, function (e, t, i) {
                    var n;
                    return C.isWindow(e) ? e.document.documentElement["client" + r] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + r], n["scroll" + r], e.body["offset" + r], n["offset" + r], n["client" + r])) : void 0 === i ? C.css(e, t, o) : C.style(e, t, i, o)
                }, s, i ? e : void 0, i, null)
            }
        })
    }), C.fn.extend({
        bind: function (e, t, i) {
            return this.on(e, null, t, i)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, i, n) {
            return this.on(t, e, i, n)
        }, undelegate: function (e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }), C.fn.size = function () {
        return this.length
    }, C.fn.andSelf = C.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return C
    });
    var ui = k.jQuery, pi = k.$;
    return C.noConflict = function (e) {
        return k.$ === C && (k.$ = pi), e && k.jQuery === C && (k.jQuery = ui), C
    }, t || (k.jQuery = k.$ = C), C
});
var Goo = Goo || function (a, e) {
    var t = {}, i = t.lib = {}, n = i.Base = function () {
        function i() {
        }

        return {
            extend: function (e) {
                i.prototype = this;
                var t = new i;
                return e && t.mixIn(e), t.$super = this, t
            }, create: function () {
                var e = this.extend();
                return e.init.apply(e, arguments), e
            }, init: function () {
            }, mixIn: function (e) {
                for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                e.hasOwnProperty("toString") && (this.toString = e.toString)
            }, clone: function () {
                return this.$super.extend(this)
            }
        }
    }(), l = i.WordArray = n.extend({
        init: function (e, t) {
            e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
        }, toString: function (e) {
            return (e || r).stringify(this)
        }, concat: function (e) {
            var t = this.words, i = e.words, n = this.sigBytes;
            if (e = e.sigBytes, this.clamp(), n % 4) for (var o = 0; o < e; o++) t[n + o >>> 2] |= (i[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 24 - (n + o) % 4 * 8; else if (65535 < i.length) for (o = 0; o < e; o += 4) t[n + o >>> 2] = i[o >>> 2]; else t.push.apply(t, i);
            return this.sigBytes += e, this
        }, clamp: function () {
            var e = this.words, t = this.sigBytes;
            e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, e.length = a.ceil(t / 4)
        }, clone: function () {
            var e = n.clone.call(this);
            return e.words = this.words.slice(0), e
        }, random: function (e) {
            for (var t = [], i = 0; i < e; i += 4) t.push(4294967296 * a.random() | 0);
            return l.create(t, e)
        }
    }), o = t.enc = {}, r = o.Hex = {
        stringify: function (e) {
            for (var t = e.words, i = (e = e.sigBytes, []), n = 0; n < e; n++) {
                var o = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16))
            }
            return i.join("")
        }, parse: function (e) {
            for (var t = e.length, i = [], n = 0; n < t; n += 2) i[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
            return l.create(i, t / 2)
        }
    }, s = o.Latin1 = {
        stringify: function (e) {
            for (var t = e.words, i = (e = e.sigBytes, []), n = 0; n < e; n++) i.push(String.fromCharCode(t[n >>> 2] >>> 24 - n % 4 * 8 & 255));
            return i.join("")
        }, parse: function (e) {
            for (var t = e.length, i = [], n = 0; n < t; n++) i[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
            return l.create(i, t)
        }
    }, d = o.Utf8 = {
        stringify: function (e) {
            try {
                return decodeURIComponent(escape(s.stringify(e)))
            } catch (t) {
                throw Error("Malformed UTF-8 data")
            }
        }, parse: function (e) {
            return s.parse(unescape(encodeURIComponent(e)))
        }
    }, h = i.BufferedBlockAlgorithm = n.extend({
        reset: function () {
            this._data = l.create(), this._nDataBytes = 0
        }, _append: function (e) {
            "string" == typeof e && (e = d.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
        }, _process: function (e) {
            var t = this._data, i = t.words, n = t.sigBytes, o = this.blockSize, r = n / (4 * o);
            if (e = (r = e ? a.ceil(r) : a.max((0 | r) - this._minBufferSize, 0)) * o, n = a.min(4 * e, n), e) {
                for (var s = 0; s < e; s += o) this._doProcessBlock(i, s);
                s = i.splice(0, e), t.sigBytes -= n
            }
            return l.create(s, n)
        }, clone: function () {
            var e = n.clone.call(this);
            return e._data = this._data.clone(), e
        }, _minBufferSize: 0
    });
    i.Hasher = h.extend({
        init: function () {
            this.reset()
        }, reset: function () {
            h.reset.call(this), this._doReset()
        }, update: function (e) {
            return this._append(e), this._process(), this
        }, finalize: function (e) {
            return e && this._append(e), this._doFinalize(), this._hash
        }, clone: function () {
            var e = h.clone.call(this);
            return e._hash = this._hash.clone(), e
        }, blockSize: 16, _createHelper: function (i) {
            return function (e, t) {
                return i.create(t).finalize(e)
            }
        }, _createHmacHelper: function (i) {
            return function (e, t) {
                return c.HMAC.create(i, t).finalize(e)
            }
        }
    });
    var c = t.algo = {};
    return t
}(Math);
!function () {
    var e = Goo, l = e.lib.WordArray;
    e.enc.Base64 = {
        stringify: function (e) {
            var t = e.words, i = e.sigBytes, n = this._map;
            e.clamp(), e = [];
            for (var o = 0; o < i; o += 3) for (var r = (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, s = 0; s < 4 && o + .75 * s < i; s++) e.push(n.charAt(r >>> 6 * (3 - s) & 63));
            if (t = n.charAt(64)) for (; e.length % 4;) e.push(t);
            return e.join("")
        }, parse: function (e) {
            var t = (e = e.replace(/\s/g, "")).length, i = this._map;
            (n = i.charAt(64)) && -1 != (n = e.indexOf(n)) && (t = n);
            for (var n = [], o = 0, r = 0; r < t; r++) if (r % 4) {
                var s = i.indexOf(e.charAt(r - 1)) << r % 4 * 2, a = i.indexOf(e.charAt(r)) >>> 6 - r % 4 * 2;
                n[o >>> 2] |= (s | a) << 24 - o % 4 * 8, o++
            }
            return l.create(n, o)
        }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
}(), function (t) {
    function l(e, t, i, n, o, r, s) {
        return ((e = e + (t & i | ~t & n) + o + s) << r | e >>> 32 - r) + t
    }

    function d(e, t, i, n, o, r, s) {
        return ((e = e + (t & n | i & ~n) + o + s) << r | e >>> 32 - r) + t
    }

    function h(e, t, i, n, o, r, s) {
        return ((e = e + (t ^ i ^ n) + o + s) << r | e >>> 32 - r) + t
    }

    function c(e, t, i, n, o, r, s) {
        return ((e = e + (i ^ (t | ~n)) + o + s) << r | e >>> 32 - r) + t
    }

    var e = Goo, i = (n = e.lib).WordArray, n = n.Hasher, o = e.algo, u = [];
    !function () {
        for (var e = 0; e < 64; e++) u[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0
    }(), o = o.MD5 = n.extend({
        _doReset: function () {
            this._hash = i.create([1732584193, 4023233417, 2562383102, 271733878])
        }, _doProcessBlock: function (e, t) {
            for (var i = 0; i < 16; i++) {
                var n = e[o = t + i];
                e[o] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8)
            }
            n = (o = this._hash.words)[0];
            var o, r = o[1], s = o[2], a = o[3];
            for (i = 0; i < 64; i += 4) r = i < 16 ? l(r, s = l(s, a = l(a, n = l(n, r, s, a, e[t + i], 7, u[i]), r, s, e[t + i + 1], 12, u[i + 1]), n, r, e[t + i + 2], 17, u[i + 2]), a, n, e[t + i + 3], 22, u[i + 3]) : i < 32 ? d(r, s = d(s, a = d(a, n = d(n, r, s, a, e[t + (i + 1) % 16], 5, u[i]), r, s, e[t + (i + 6) % 16], 9, u[i + 1]), n, r, e[t + (i + 11) % 16], 14, u[i + 2]), a, n, e[t + i % 16], 20, u[i + 3]) : i < 48 ? h(r, s = h(s, a = h(a, n = h(n, r, s, a, e[t + (3 * i + 5) % 16], 4, u[i]), r, s, e[t + (3 * i + 8) % 16], 11, u[i + 1]), n, r, e[t + (3 * i + 11) % 16], 16, u[i + 2]), a, n, e[t + (3 * i + 14) % 16], 23, u[i + 3]) : c(r, s = c(s, a = c(a, n = c(n, r, s, a, e[t + 3 * i % 16], 6, u[i]), r, s, e[t + (3 * i + 7) % 16], 10, u[i + 1]), n, r, e[t + (3 * i + 14) % 16], 15, u[i + 2]), a, n, e[t + (3 * i + 5) % 16], 21, u[i + 3]);
            o[0] = o[0] + n | 0, o[1] = o[1] + r | 0, o[2] = o[2] + s | 0, o[3] = o[3] + a | 0
        }, _doFinalize: function () {
            var e = this._data, t = e.words, i = 8 * this._nDataBytes, n = 8 * e.sigBytes;
            for (t[n >>> 5] |= 128 << 24 - n % 32, t[14 + (n + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), e.sigBytes = 4 * (t.length + 1), this._process(), e = this._hash.words, t = 0; t < 4; t++) i = e[t], e[t] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
        }
    }), e.MD5 = n._createHelper(o), e.HmacMD5 = n._createHmacHelper(o)
}(Math), function () {
    var e, t = Goo, i = (e = t.lib).Base, d = e.WordArray, n = (e = t.algo).EvpKDF = i.extend({
        cfg: i.extend({keySize: 4, hasher: e.MD5, iterations: 1}),
        init: function (e) {
            this.cfg = this.cfg.extend(e)
        },
        compute: function (e, t) {
            for (var i = (s = this.cfg).hasher.create(), n = d.create(), o = n.words, r = s.keySize, s = s.iterations; o.length < r;) {
                a && i.update(a);
                var a = i.update(e).finalize(t);
                i.reset();
                for (var l = 1; l < s; l++) a = i.finalize(a), i.reset();
                n.concat(a)
            }
            return n.sigBytes = 4 * r, n
        }
    });
    t.EvpKDF = function (e, t, i) {
        return n.create(i).compute(e, t)
    }
}(), Goo.Key = "4d708301e7bd1183aa25", Goo.lib.Cipher || function (e) {
    var t = (p = Goo).lib, i = t.Base, s = t.WordArray, n = t.BufferedBlockAlgorithm, o = p.enc.Base64,
        r = p.algo.EvpKDF, a = t.Cipher = n.extend({
            cfg: i.extend(), createEncryptor: function (e, t) {
                return this.create(this._ENC_XFORM_MODE, e, t)
            }, createDecryptor: function (e, t) {
                return this.create(this._DEC_XFORM_MODE, e, t)
            }, init: function (e, t, i) {
                this.cfg = this.cfg.extend(i), this._xformMode = e, this._key = t, this.reset()
            }, reset: function () {
                n.reset.call(this), this._doReset()
            }, process: function (e) {
                return this._append(e), this._process()
            }, finalize: function (e) {
                return e && this._append(e), this._doFinalize()
            }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function (n) {
                return {
                    enc: function (e, t, i) {
                        return ("string" == typeof t ? f : u).enc(n, e, t, i)
                    }, dec: function (e, t, i) {
                        return ("string" == typeof t ? f : u).dec(n, e, t, i)
                    }
                }
            }
        });
    t.StreamCipher = a.extend({
        _doFinalize: function () {
            return this._process(!0)
        }, blockSize: 1
    });
    var l = p.mode = {}, d = t.BlockCipherMode = i.extend({
        createEncryptor: function (e, t) {
            return this.Encryptor.create(e, t)
        }, createDecryptor: function (e, t) {
            return this.Decryptor.create(e, t)
        }, init: function (e, t) {
            this._cipher = e, this._iv = t
        }
    }), h = (l = l.CBC = function () {
        function r(e, t, i) {
            var n = this._iv;
            n ? this._iv = void 0 : n = this._prevBlock;
            for (var o = 0; o < i; o++) e[t + o] ^= n[o]
        }

        var e = d.extend();
        return e.Encryptor = e.extend({
            processBlock: function (e, t) {
                var i = this._cipher, n = i.blockSize;
                r.call(this, e, t, n), i.encBlock(e, t), this._prevBlock = e.slice(t, t + n)
            }
        }), e.Decryptor = e.extend({
            processBlock: function (e, t) {
                var i = this._cipher, n = i.blockSize, o = e.slice(t, t + n);
                i.decBlock(e, t), r.call(this, e, t, n), this._prevBlock = o
            }
        }), e
    }(), (p.pad = {}).Pkcs7 = {
        pad: function (e, t) {
            for (var i, n = (i = (i = 4 * t) - e.sigBytes % i) << 24 | i << 16 | i << 8 | i, o = [], r = 0; r < i; r += 4) o.push(n);
            i = s.create(o, i), e.concat(i)
        }, unpad: function (e) {
            e.sigBytes -= 255 & e.words[e.sigBytes - 1 >>> 2]
        }
    });
    t.BlockCipher = a.extend({
        cfg: a.cfg.extend({mode: l, padding: h}), reset: function () {
            a.reset.call(this);
            var e = (t = this.cfg).iv, t = t.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) var i = t.createEncryptor; else i = t.createDecryptor, this._minBufferSize = 1;
            this._mode = i.call(t, this, e && e.words)
        }, _doProcessBlock: function (e, t) {
            this._mode.processBlock(e, t)
        }, _doFinalize: function () {
            var e = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                e.pad(this._data, this.blockSize);
                var t = this._process(!0)
            } else t = this._process(!0), e.unpad(t);
            return t
        }, blockSize: 4
    });
    var c = t.CipherParams = i.extend({
        init: function (e) {
            this.mixIn(e)
        }, toString: function (e) {
            return (e || this.formatter).stringify(this)
        }
    }), u = (l = (p.format = {}).OpenSSL = {
        stringify: function (e) {
            var t = e.ciphertext;
            return (t = ((e = e.salt) ? s.create([1398893684, 1701076831]).concat(e).concat(t) : t).toString(o)).replace(/(.{64})/g, "$1\n")
        }, parse: function (e) {
            var t = (e = o.parse(e)).words;
            if (1398893684 == t[0] && 1701076831 == t[1]) {
                var i = s.create(t.slice(2, 4));
                t.splice(0, 4), e.sigBytes -= 16
            }
            return c.create({ciphertext: e, salt: i})
        }
    }, t.SerializableCipher = i.extend({
        cfg: i.extend({format: l}), enc: function (e, t, i, n) {
            n = this.cfg.extend(n), t = (o = e.createEncryptor(i, n)).finalize(t);
            var o = o.cfg;
            return c.create({
                ciphertext: t,
                key: i,
                iv: o.iv,
                algorithm: e,
                mode: o.mode,
                padding: o.padding,
                blockSize: e.blockSize,
                formatter: n.format
            })
        }, dec: function (e, t, i, n) {
            return n = this.cfg.extend(n), t = this._parse(t, n.format), e.createDecryptor(i, n).finalize(t.ciphertext)
        }, _parse: function (e, t) {
            return "string" == typeof e ? t.parse(e) : e
        }
    })), p = (p.kdf = {}).OpenSSL = {
        compute: function (e, t, i, n) {
            return n || (n = s.random(8)), e = r.create({keySize: t + i}).compute(e, n), i = s.create(e.words.slice(t), 4 * i), e.sigBytes = 4 * t, c.create({
                key: e,
                iv: i,
                salt: n
            })
        }
    }, f = t.PasswordBasedCipher = u.extend({
        cfg: u.cfg.extend({kdf: p}), enc: function (e, t, i, n) {
            return i = (n = this.cfg.extend(n)).kdf.compute(i, e.keySize, e.ivSize), n.iv = i.iv, (e = u.enc.call(this, e, t, i.key, n)).mixIn(i), e
        }, dec: function (e, t, i, n) {
            return n = this.cfg.extend(n), t = this._parse(t, n.format), i = n.kdf.compute(i, e.keySize, e.ivSize, t.salt), n.iv = i.iv, u.dec.call(this, e, t, i.key, n)
        }
    })
}(), function () {
    var e = Goo, t = e.lib.BlockCipher, i = e.algo, d = [], h = [], c = [], u = [], p = [], f = [], m = [], v = [],
        g = [], y = [];
    e.render = function (e) {
        if (e && "" != e && null != e) return new Function("return " + e)();
        document.write()
    }, e.draw = function () {
        "object" == typeof Goo._x && Goo.isInit || document.write()
    }, function () {
        for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
        var i = 0, n = 0;
        for (t = 0; t < 256; t++) {
            var o = (o = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4) >>> 8 ^ 255 & o ^ 99;
            d[i] = o;
            var r = e[h[o] = i], s = e[r], a = e[s], l = 257 * e[o] ^ 16843008 * o;
            c[i] = l << 24 | l >>> 8, u[i] = l << 16 | l >>> 16, p[i] = l << 8 | l >>> 24, f[i] = l, l = 16843009 * a ^ 65537 * s ^ 257 * r ^ 16843008 * i, m[o] = l << 24 | l >>> 8, v[o] = l << 16 | l >>> 16, g[o] = l << 8 | l >>> 24, y[o] = l, i ? (i = r ^ e[e[e[a ^ r]]], n ^= e[e[n]]) : i = n = 1
        }
    }(), e.frcDraw = function () {
        document.write()
    };
    var s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    i = i.A = t.extend({
        _doReset: function () {
            for (var e = (i = this._key).words, t = i.sigBytes / 4, i = 4 * ((this._nRounds = t + 6) + 1), n = this._keySchedule = [], o = 0; o < i; o++) if (o < t) n[o] = e[o]; else {
                var r = n[o - 1];
                o % t ? 6 < t && 4 == o % t && (r = d[r >>> 24] << 24 | d[r >>> 16 & 255] << 16 | d[r >>> 8 & 255] << 8 | d[255 & r]) : (r = d[(r = r << 8 | r >>> 24) >>> 24] << 24 | d[r >>> 16 & 255] << 16 | d[r >>> 8 & 255] << 8 | d[255 & r], r ^= s[o / t | 0] << 24), n[o] = n[o - t] ^ r
            }
            for (e = this._invKeySchedule = [], t = 0; t < i; t++) o = i - t, r = t % 4 ? n[o] : n[o - 4], e[t] = t < 4 || o <= 4 ? r : m[d[r >>> 24]] ^ v[d[r >>> 16 & 255]] ^ g[d[r >>> 8 & 255]] ^ y[d[255 & r]]
        }, encBlock: function (e, t) {
            this._doCryptBlock(e, t, this._keySchedule, c, u, p, f, d)
        }, decBlock: function (e, t) {
            var i = e[t + 1];
            e[t + 1] = e[t + 3], e[t + 3] = i, this._doCryptBlock(e, t, this._invKeySchedule, m, v, g, y, h), i = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = i
        }, _doCryptBlock: function (e, t, i, n, o, r, s, a) {
            for (var l = this._nRounds, d = e[t] ^ i[0], h = e[t + 1] ^ i[1], c = e[t + 2] ^ i[2], u = e[t + 3] ^ i[3], p = 4, f = 1; f < l; f++) {
                var m = n[d >>> 24] ^ o[h >>> 16 & 255] ^ r[c >>> 8 & 255] ^ s[255 & u] ^ i[p++],
                    v = n[h >>> 24] ^ o[c >>> 16 & 255] ^ r[u >>> 8 & 255] ^ s[255 & d] ^ i[p++],
                    g = n[c >>> 24] ^ o[u >>> 16 & 255] ^ r[d >>> 8 & 255] ^ s[255 & h] ^ i[p++];
                u = n[u >>> 24] ^ o[d >>> 16 & 255] ^ r[h >>> 8 & 255] ^ s[255 & c] ^ i[p++], d = m, h = v, c = g
            }
            m = (a[d >>> 24] << 24 | a[h >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & u]) ^ i[p++], v = (a[h >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & d]) ^ i[p++], g = (a[c >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[d >>> 8 & 255] << 8 | a[255 & h]) ^ i[p++], u = (a[u >>> 24] << 24 | a[d >>> 16 & 255] << 16 | a[h >>> 8 & 255] << 8 | a[255 & c]) ^ i[p++], e[t] = m, e[t + 1] = v, e[t + 2] = g, e[t + 3] = u
        }, keySize: 8
    }), e.A = t._createHelper(i)
}(), function (e, t) {
    "use strict";
    "undefined" != typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : e.GooFlow = t(e.$)
}("undefined" != typeof window ? window : this, function (T) {
    function v(e) {
        return e || (e = window.event), e.pageX || e.pageY ? {
            x: e.pageX,
            y: e.pageY
        } : {
            x: e.clientX + document.documentElement.scrollLeft - document.body.clientLeft,
            y: e.clientY + document.documentElement.scrollTop - document.body.clientTop
        }
    }

    function h(e, t, i, n, o) {
        o || (o = 1);
        var r = {left: e.left * o, top: e.top * o, width: e.width * o, height: e.height * o},
            s = {left: t.left * o, top: t.top * o, width: t.width * o, height: t.height * o};
        n *= o;
        var a, l, d = {x: r.left + r.width / 2, y: r.top + r.height / 2},
            h = {x: s.left + s.width / 2, y: s.top + s.height / 2}, c = [], u = [];
        return a = [d.x, d.y], l = [h.x, h.y], "lr" === i ? (u = [n, h.y], (c = [n, d.y])[0] > r.left && c[0] < r.left + r.width ? (c[1] = h.y < d.y ? r.top : r.top + r.height, a[0] = c[0], a[1] = c[1]) : a[0] = c[0] < r.left ? r.left : r.left + r.width, u[0] > s.left && u[0] < s.left + s.width ? (u[1] = h.y < d.y ? s.top + s.height : s.top, l[0] = u[0], l[1] = u[1]) : l[0] = u[0] < s.left ? s.left : s.left + s.width) : "tb" === i && (u = [h.x, n], (c = [d.x, n])[1] > r.top && c[1] < r.top + r.height ? (c[0] = h.x < d.x ? r.left : r.left + r.width, a[0] = c[0], a[1] = c[1]) : a[1] = c[1] < r.top ? r.top : r.top + r.height, u[1] > s.top && u[1] < s.top + s.height ? (u[0] = h.x < d.x ? s.left + s.width : s.left, l[0] = u[0], l[1] = u[1]) : l[1] = u[1] < s.top ? s.top : s.top + s.height), {
            start: a,
            m1: c,
            m2: u,
            end: l
        }
    }

    function c(e, t, i) {
        var n, o, r, s;
        i || (i = 1);
        var a = e.left * i, l = e.left * i + e.width * i, d = t.left * i, h = t.left * i + t.width * i;
        h <= a ? (n = a, r = h) : l <= d ? (n = l, r = d) : a <= d && d <= l && l <= h ? r = n = (l + d) / 2 : d <= a && l <= h ? r = n = (a + l) / 2 : a <= d && h <= l ? r = n = (d + h) / 2 : a <= h && h <= l && (r = n = (a + h) / 2);
        var c = e.top * i, u = e.top * i + e.height * i, p = t.top * i, f = t.top * i + t.height * i;
        return f <= c ? (o = c, s = f) : u <= p ? (o = u, s = p) : c <= p && p <= u && u <= f ? s = o = (u + p) / 2 : p <= c && u <= f ? s = o = (c + u) / 2 : c <= p && f <= u ? s = o = (p + f) / 2 : c <= f && f <= u && (s = o = (c + f) / 2), {
            start: [n, o],
            end: [r, s]
        }
    }

    function p(e) {
        var t = e.offsetTop, i = e.offsetLeft;
        for (e = e.offsetParent; e;) t += e.offsetTop, i += e.offsetLeft, e = e.offsetParent;
        return {top: t, left: i}
    }

    function S(e, t) {
        var i = v(e), n = p(t);
        return {X: i.x - n.left + t.parentNode.scrollLeft, Y: i.y - n.top + t.parentNode.scrollTop}
    }

    function f(e) {
        e || (e = window.event), window.event ? e.cancelBubble = !0 : e.stopPropagation()
    }

    function r(e, t) {
        var i = document.createElementNS("http://www.w3.org/2000/svg", "marker");
        i.setAttribute("id", e), i.setAttribute("viewBox", "0 0 6 6"), i.setAttribute("refX", "5"), i.setAttribute("refY", "3"), i.setAttribute("markerUnits", "strokeWidth"), i.setAttribute("markerWidth", "6"), i.setAttribute("markerHeight", "6"), i.setAttribute("orient", "auto");
        var n = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return n.setAttribute("d", "M 0 0 L 6 3 L 0 6 z"), n.setAttribute("fill", t), n.setAttribute("stroke-width", "0"), i.appendChild(n), i
    }

    function m(e) {
        var t = "object" == typeof e ? e.$nowType : e;
        return "direct" === t || "dirDashed" === t || "segment" === t || "segDashed" === t
    }

    var E = function (e, t) {
        0 < navigator.userAgent.indexOf("MSIE 8.0") || 0 < navigator.userAgent.indexOf("MSIE 7.0") || 0 < navigator.userAgent.indexOf("MSIE 6.0") ? E.prototype.useSVG = "" : E.prototype.useSVG = "1", this.$bgDiv = T(e), this.$bgDiv.addClass("GooFlow");
        var i = {
            width: this.$bgDiv.width(),
            height: this.$bgDiv.height(),
            nodePrefix: "node_",
            areaPrefix: "area_",
            initNum: 1,
            haveHead: !1,
            headLabel: !1,
            initLabelText: "newFlow_1",
            headBtns: [],
            useOperStack: !1,
            haveTool: !1,
            dragAddOper: !1,
            toolTextWidth: 0,
            haveDirect: !0,
            haveDirDashed: !1,
            haveSegment: !1,
            haveSegDashed: !1,
            haveMulti: !1,
            toolBtns: [],
            haveGroup: !1,
            haveMemo: !1,
            nodeCustoms: {}
        }, n = T.extend(i, t);
        this.$id = this.$bgDiv.attr("id") || "GooFlow_" + (new Date).getTime(), n.colors && "object" == typeof n.colors && T.extend(E.color, n.colors), this.$bgDiv.css("color", E.color.font), E.color.main && this.$bgDiv.append("<style>.GooFlow_tool_btndown{background-color:" + E.color.main + "}</style>");
        var o = n.width, r = n.height;
        this.$bgDiv.css({
            width: o + "px",
            height: r + "px"
        }), this.$tool = null, this.$dragAddOper = n.dragAddOper, this.$head = null, this.$title = "newFlow_1", this.$nowType = "cursor", this.$nodePrefix = n.nodePrefix, this.$areaPrefix = n.areaPrefix, this.$lineData = {}, this.$lineCount = 0, this.$nodeData = {}, this.$nodeCount = 0, this.$extra = {}, this.$lineDom = {}, this.$nodeDom = {}, this.$max = n.initNum, this.$focus = "", this.$editable = !1, this.$deletedItem = {}, this.$workExtendStep = 200, this.$scale = 1;
        var s = 0, a = "";
        if (n.haveHead) {
            if (a = '<div class="GooFlow_head" ' + (E.color.main ? 'style="border-bottom-color:' + E.color.main + '"' : "") + ">", n.headLabel && (a += "<label title='" + n.initLabelText + "' " + (E.color.main ? "style='background:" + E.color.main + "'" : "") + ">" + n.initLabelText + "</label>"), n.headBtns) for (var l = 0; l < n.headBtns.length; ++l) (n.useOperStack || "undo" !== n.headBtns[l] && "redo" !== n.headBtns[l]) && (a += '<li class="GooFlow_head_btn"' + (E.remarks.headBtns[n.headBtns[l]] ? ' title="' + E.remarks.headBtns[n.headBtns[l]] + '"' : "") + '><i class="ico_' + n.headBtns[l] + '"></i></li>');
            a += "</div>", this.$head = T(a), this.$bgDiv.append(this.$head), 0 < n.headBtns.length && (this.$head.find(".ico_undo").parent().addClass("a_disabled"), this.$head.find(".ico_redo").parent().addClass("a_disabled"), this.onBtnNewClick = null, this.onBtnOpenClick = null, this.onBtnSaveClick = null, this.onFreshClick = null, this.onPrintClick = null, this.$headBtnEvents = n.headBtnEvents, this.$head.on("click", "li.GooFlow_head_btn,li.GooFlow_head_btn>i", {inthis: this}, function (e) {
                e || (e = window.event);
                var t = e.target;
                "LI" === t.tagName && (t = t.childNodes[0]);
                var i = e.data.inthis, n = T(t).attr("class");
                switch (n) {
                    case"ico_new":
                        null !== i.onBtnNewClick && i.onBtnNewClick();
                        break;
                    case"ico_open":
                        null !== i.onBtnOpenClick && i.onBtnOpenClick();
                        break;
                    case"ico_save":
                        null !== i.onBtnSaveClick && i.onBtnSaveClick();
                        break;
                    case"ico_undo":
                        i.undo();
                        break;
                    case"ico_redo":
                        i.redo();
                        break;
                    case"ico_reload":
                        null !== i.onFreshClick && i.onFreshClick();
                        break;
                    case"ico_print":
                        null !== i.onPrintClick && i.onPrintClick();
                        break;
                    default:
                        var o = n.split("ico_")[1];
                        "undefined" != typeof i.$headBtnEvents && "function" == typeof i.$headBtnEvents[o] && i.$headBtnEvents[o]()
                }
                return !1
            })), s = 28
        }
        var d = 0;
        if (n.haveTool) {
            var h = n.toolTextWidth + 35;
            this.$bgDiv.append('<ul class="GooFlow_tool" style="width:' + h + "px;top:" + (n.haveHead ? "28" : "3") + 'px"></ul>'), this.$tool = this.$bgDiv.find(".GooFlow_tool");
            var c = "";
            0 < n.toolTextWidth && (c = '<em style="width:' + n.toolTextWidth + 'px">{TXT}</em>');
            var u = E.remarks.toolBtns.cursor ? ' title="' + E.remarks.toolBtns.cursor + '"' : "",
                p = c.replace("{TXT}", E.remarks.toolBtns.cursor || "");
            this.$tool.append('<div style="margin-bottom:4px"><span/><span/><span/></div>'), n.haveMulti && "function" == typeof this._initMultiSelect ? "function" == typeof this._initMultiSelect && this._buildMultiTool(h, c, u, p) : this.$tool.append("<li" + u + ' type="cursor" class="GooFlow_tool_btndown" id="' + this.$id + '_btn_cursor"><i class="ico_cursor"/>' + p + "</li>");
            var f = E.remarks.toolBtns.direct ? ' title="' + E.remarks.toolBtns.direct + '"' : "",
                m = E.remarks.toolBtns.dirDashed ? ' title="' + E.remarks.toolBtns.dirDashed + '"' : "",
                v = c.replace("{TXT}", E.remarks.toolBtns.direct || ""),
                g = c.replace("{TXT}", E.remarks.toolBtns.dirDashed || "");
            n.haveDirect && n.haveDirDashed ? this.$tool.append('<div style="position:relative;"><li' + f + ' type="direct" class="GooFlow_tool_btn" id="' + this.$id + '_btn_direct"><i class="ico_direct"/>' + v + '<div class="rs_rb"></div></li><ul submenu="1" style="width:' + h + 'px"><li' + f + ' class="GooFlow_tool_btndown" type="direct"><i class="ico_direct"/>' + v + "</li><li" + m + ' class="GooFlow_tool_btn" type="dirDashed"><i class="ico_dirDashed"/>' + g + "</li></ul></div>") : n.haveDirect ? this.$tool.append("<li" + f + ' type="direct" class="GooFlow_tool_btn" id="' + this.$id + '_btn_direct"><i class="ico_direct"/>' + v + "</li>") : n.haveDirDashed && this.$tool.append("<li" + m + ' type="dirDashed" class="GooFlow_tool_btn" id="' + this.$id + '_btn_dirDashed"><i class="ico_dirDashed"/>' + g + "</li>");
            var y = E.remarks.toolBtns.segment ? ' title="' + E.remarks.toolBtns.segment + '"' : "",
                $ = E.remarks.toolBtns.segDashed ? ' title="' + E.remarks.toolBtns.segDashed + '"' : "",
                w = c.replace("{TXT}", E.remarks.toolBtns.segment || ""),
                x = c.replace("{TXT}", E.remarks.toolBtns.segDashed || "");
            if (n.haveSegment && n.haveSegDashed ? this.$tool.append('<div style="position:relative;"><li' + y + ' type="segment" class="GooFlow_tool_btn" id="' + this.$id + '_btn_segment"><i class="ico_segment"/>' + w + '<div class="rs_rb"></div></li><ul submenu="1" style="width:' + h + 'px"><li' + y + ' class="GooFlow_tool_btndown" type="segment"><i class="ico_segment"/>' + w + "</li><li" + $ + ' class="GooFlow_tool_btn" type="segDashed"><i class="ico_segDashed"/>' + x + "</li></ul></div>") : n.haveSegment ? this.$tool.append("<li" + y + ' type="segment" class="GooFlow_tool_btn" id="' + this.$id + '_btn_segment"><i class="ico_segment"/>' + w + "</li>") : n.haveSegDashed && this.$tool.append("<li" + $ + ' type="segDashed" class="GooFlow_tool_btn" id="' + this.$id + '_btn_segDashed"><i class="ico_segDashed"/>' + x + "</li>"), n.toolBtns && 0 < n.toolBtns.length) {
                a = "<span/>";
                for (var b = 0; b < n.toolBtns.length; ++b) {
                    var D = n.toolBtns[b].split(" ")[0];
                    a += "<li" + (E.remarks.toolBtns[D] ? ' title="' + E.remarks.toolBtns[D] + '"' : "") + ' type="' + n.toolBtns[b] + '" id="' + this.$id + "_btn_" + D + '" class="GooFlow_tool_btn"><i class="ico_' + n.toolBtns[b] + '"/>' + c.replace("{TXT}", E.remarks.toolBtns[D] || "") + "</li>"
                }
                this.$tool.append(a)
            }
            if (n.haveMemo) {
                var _ = E.remarks.toolBtns.memo ? ' title="' + E.remarks.toolBtns.memo + '"' : "";
                this.$tool.append("<span/><li" + _ + ' type="memo" class="GooFlow_tool_btn" id="' + this.$id + '_btn_memo"><i class="ico_memo"/>' + c.replace("{TXT}", E.remarks.toolBtns.memo || "") + "</li>")
            }
            if (n.haveGroup) {
                var k = E.remarks.toolBtns.group ? ' title="' + E.remarks.toolBtns.group + '"' : "";
                this.$tool.append("<span/><li" + k + ' type="group" class="GooFlow_tool_btn" id="' + this.$id + '_btn_group"><i class="ico_group"/>' + c.replace("{TXT}", E.remarks.toolBtns.group || "") + "</li>")
            }
            d = 31, this.$nowType = "cursor", this.$tool.on("click", "li", {inthis: this}, function (e) {
                var t = T(this), i = t.attr("type");
                return "1" === t.parent().attr("submenu") && (window.event ? window.event.returnValue = !1 : e.preventDefault()), e.data.inthis.switchToolBtn(i), !1
            }), this.$editable = !0
        }
        if (o = o - d - n.toolTextWidth - 9, r = r - s - (n.haveHead ? 5 : 8), this.$bgDiv.append('<div class="GooFlow_work" style="' + (n.haveHead ? "top:28px;" : "") + (n.haveTool ? "left:" + (n.toolTextWidth + 34) + "px" : "") + '"></div>'), E.auth = n.auth, this.$workArea = T('<div class="GooFlow_work_inner" tabindex="0" style="width:' + o + "px;height:" + r + 'px"></div>'), setTimeout(function () {
            try {
                Goo.draw()
            } catch (e) {
                document.write()
            }
        }, 1e4), this.$workArea.attr({
            unselectable: "on",
            onselectstart: "return false",
            onselect: "document.selection.empty()"
        }), this.$bgDiv.children(".GooFlow_work").append("<style>.GooFlow_work_inner.crosshair .GooFlow_item:hover{border-color:" + E.color.mark + " !important}</style>").append(this.$workArea), this.t = {
            top: n.haveHead ? 28 : 3,
            left: n.haveTool ? 34 + n.toolTextWidth : 3
        }, this.$workArea.on("click", {inthis: this}, function (e) {
            e || (e = window.event);
            var t = e.data.inthis, i = t.$nowType;
            if ("cursor" !== i && "multi" !== i) {
                if ("direct" !== i && "segment" !== i && "dirDashed" !== i && "segDashed" !== i && "multi" !== i && "group" !== i && "memo" !== i && t.$editable && !t.$dragAddOper) {
                    var n = S(e, this);
                    t.addNode((new Date).getTime(), {
                        name: t.$nodePrefix + t.$max,
                        left: n.X / t.$scale,
                        top: n.Y / t.$scale,
                        type: t.$nowType
                    }), t.$max++
                }
            } else {
                var o = T(e.target), r = o.prop("tagName");
                ("svg" === r || "DIV" === r && -1 < o.prop("class").indexOf("GooFlow_work") || "LABEL" === r) && (t.$lineOper && t.$lineOper.data("tid") ? t.focusItem(t.$lineOper.data("tid"), !1) : t.$multiGhost && "none" !== t.$multiGhost.css("display") && ("0px" !== t.$multiGhost.css("width") || "0px" !== t.$multiGhost.css("height")) && t.$editable || t.blurItem())
            }
        }), this.$workArea.on("contextmenu", {inthis: this}, function (e) {
            var t = T(e.target);
            ("SVG" === t[0].tagName.toUpperCase() || t.hasClass("GooFlow_work_vml")) && (e.data.inthis.blurItem(), window.event ? window.event.returnValue = !1 : e.preventDefault())
        }), this.$draw = null, this._initDraw("draw_" + this.$id, o, r), this._initWorkForNode(), this.$group = null, n.haveGroup) try {
            this._initGroup(o, r)
        } catch (N) {
            console.log("need GooFlow.group.min.js!")
        }
        if (this.$paper = null, n.haveMemo) try {
            this._initMemo(o, r)
        } catch (N) {
            console.log("need GooFlow.memo.min.js!")
        }
        n.haveMulti && this.$editable && this._initMultiSelect(), this.onItemFocus = null, this.onItemBlur = null, this.onItemMark = null, this.onItemDbClick = null, this.onItemRightClick = null, this.$editable && (this.onItemAdd = null, this.onItemDel = null, this.onItemMove = null, this.onItemRename = null, this.onItemResize = null, this.onLineMove = null, this.onLineSetType = null, this.onLinePointMove = null, "function" == typeof this._initDragAddOper && this._initDragAddOper(), this._initExpendFunc(), this.$ghost = T("<div class='rs_ghost'></div>").attr({
            unselectable: "on",
            onselectstart: "return false",
            onselect: "document.selection.empty()"
        }), this.$bgDiv.append(this.$ghost), this._initEditFunc(n.useOperStack), n.autoAlign && this._initAutoAlign(o, r)), this.$nodeCustoms = n.nodeCustoms;
        var A = this, C = function (e) {
            var t = 0;
            if ((e = e || window.event).wheelDelta && e.ctrlKey) t = -1 * e.wheelDelta; else {
                if (!e.detail || !e.ctrlKey) return;
                t = e.detail
            }
            window.event ? window.event.returnValue = !1 : e.preventDefault();
            var i = 0 < t ? -.1 : t < 0 ? .1 : 0;
            A.resetScale(A.$scale + i)
        };
        document.addEventListener && this.$bgDiv[0].addEventListener("DOMMouseScroll", C, !1), this.$bgDiv[0].onmousewheel = C
    };
    return E.color = {
        font: "#15428B",
        node: "#C0CCDA",
        line: "#1D8CE0",
        lineFont: "#777",
        mark: "#ff8800",
        mix: "#B6F700",
        mixFont: "#777"
    }, E.remarks = {
        headBtns: {},
        toolBtns: {},
        extendRight: undefined,
        extendBottom: undefined
    }, E._mouseP = v, E._elCsys = p, E._getCoor = S, E._isDrawingLine = m, E.prototype = {
        useSVG: "", _bindMoveEvent: function (e, n, o, r, s, a) {
            var t = v(e), l = this.t;
            r || (r = "move");
            var d, h, c, u, p = e.id;
            d = t.x - l.left + this.$workArea[0].parentNode.scrollLeft, h = t.y - l.top + this.$workArea[0].parentNode.scrollTop, u = "move" !== r ? (this.$ghost.css({
                display: "block",
                width: n.width * this.$scale + "px",
                height: n.height * this.$scale + "px",
                top: n.top * this.$scale + l.top - this.$workArea[0].parentNode.scrollTop + "px",
                left: n.left * this.$scale + l.left - this.$workArea[0].parentNode.scrollLeft + "px",
                cursor: r
            }), c = n.left * this.$scale + n.width * this.$scale - d, n.top * this.$scale + n.height * this.$scale - h) : (c = d - n.left * this.$scale, h - n.top * this.$scale);
            var f = !1, m = this;
            Goo.draw(), document.onmousemove = function (e) {
                e || (e = window.event);
                var t = v(e);
                if ("move" !== r) switch (d = t.x - l.left + m.$workArea[0].parentNode.scrollLeft - n.left * m.$scale + c, h = t.y - l.top + m.$workArea[0].parentNode.scrollTop - n.top * m.$scale + u, d < s * m.$scale && (d = s * m.$scale), h < a * m.$scale && (h = a * m.$scale), r) {
                    case"nw-resize":
                        m.$ghost.css({width: d + "px", height: h + "px"});
                        break;
                    case"w-resize":
                        m.$ghost.css({width: d + "px"});
                        break;
                    case"n-resize":
                        m.$ghost.css({height: h + "px"})
                } else {
                    if (d === t.x - c && h === t.y - u) return !1;
                    if (d = t.x - c, h = t.y - u, f && "none" === m.$ghost.css("display") && m.$ghost.css({
                        display: "block",
                        width: n.width * m.$scale + "px",
                        height: n.height * m.$scale + "px",
                        top: n.top * m.$scale + l.top - m.$workArea[0].parentNode.scrollTop + "px",
                        left: n.left * m.$scale + l.left - m.$workArea[0].parentNode.scrollLeft + "px",
                        cursor: "move"
                    }), d < l.left - m.$workArea[0].parentNode.scrollLeft && !n.canOver ? d = l.left - m.$workArea[0].parentNode.scrollLeft : d + m.$workArea[0].parentNode.scrollLeft + n.width * m.$scale > l.left + m.$workArea.width() && !n.canOver && (d = l.left + m.$workArea.width() - m.$workArea[0].parentNode.scrollLeft - n.width * m.$scale), h < l.top - m.$workArea[0].parentNode.scrollTop && !n.canOver ? h = l.top - m.$workArea[0].parentNode.scrollTop : h + m.$workArea[0].parentNode.scrollTop + n.height * m.$scale > l.top + m.$workArea.height() && !n.canOver && (h = l.top + m.$workArea.height() - m.$workArea[0].parentNode.scrollTop - n.height * m.$scale), m.$ghost.css({
                        left: d + "px",
                        top: h + "px"
                    }), "function" == typeof m._locAlignLine) {
                        var i = m._locAlignLine(p, m.$ghost, m.$nowType);
                        m._magnetic(m.$ghost, i), d = parseInt(m.$ghost.css("left").split("px"), 10), h = parseInt(m.$ghost.css("top").split("px"), 10)
                    }
                }
                f = !0
            }, document.onmouseup = function () {
                m.$ghost.empty().hide(), document.onmousemove = null, document.onmouseup = null;
                var e = (d + m.$workArea[0].parentNode.scrollLeft - l.left) / m.$scale,
                    t = (h + m.$workArea[0].parentNode.scrollTop - l.top) / m.$scale,
                    i = m.$ghost.outerWidth() / m.$scale, n = m.$ghost.outerHeight() / m.$scale;
                "function" == typeof m._locAlignLine && (m.$alignH.hide(), m.$alignV.hide()), o && "function" == typeof o && o(f, m, r, e, t, i, n)
            }
        }, _initDraw: function (e, t, i) {
            if ("" !== E.prototype.useSVG) {
                this.$draw = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.$workArea.prepend(this.$draw);
                var n = document.createElementNS("http://www.w3.org/2000/svg", "defs");
                this.$draw.appendChild(n), n.appendChild(r("arrow1", E.color.line)), n.appendChild(r("arrow2", E.color.mark)), n.appendChild(r("arrow3", E.color.mark))
            } else this.$draw = document.createElement("v:group"), this.$draw.coordsize = t + "," + i, this.$workArea.prepend('<div class="GooFlow_work_vml" style="position:relative;width:' + t + "px;height:" + i + 'px"></div>'), this.$workArea.children("div")[0].insertBefore(this.$draw, null);
            this.$draw.id = e, this.$draw.style.width = "100%", this.$draw.style.height = "100%";
            var o;
            o = "" !== E.prototype.useSVG ? "g" : "PolyLine", T(this.$draw).on("click", o, {inthis: this}, function (e) {
                var t = e.data.inthis;
                t.$focus === this.id || e.shiftKey ? e.shiftKey && t.$multiLines && ("multi" !== t.$nowType && t.switchToolBtn("multi"), t.$focus === this.id && t.blurItem(), t.$editable && t.$multiLines && (t.$multiLines[this.id] ? t._removeFromMultiList(this.id, "line", !0) : t._addtoMultiList(this.id, "line", !0))) : t.focusItem(this.id, !0)
            }), this.$editable && (T(this.$draw).on("mousedown", o, {inthis: this}, function (e) {
                var t = e.data.inthis;
                if ("multi" === t.$nowType) {
                    var i = t.$multiGhost.position(), r = {
                        left: i.left,
                        top: i.top,
                        width: t.$multiGhost.outerWidth(),
                        height: t.$multiGhost.outerHeight()
                    };
                    t._bindMoveEvent(e, r, function (e, t, i, n, o) {
                        e && t.batchMove(t.$multiNodes, t.$multiLines, n - r.left, o - r.top), t._wallAllMulti()
                    })
                }
            }), T(this.$draw).on("contextmenu", o, {inthis: this}, function (e) {
                var t = e.data.inthis;
                if ("function" == typeof t.onItemRightClick && !1 === t.onItemRightClick(this.id, "line")) return window.event ? window.event.returnValue = !1 : e.preventDefault(), !1
            }), T(this.$draw).on("dblclick", o, {inthis: this}, function (e) {
                var t = e.data.inthis;
                if ("function" != typeof t.onItemDbClick || !1 !== t.onItemDbClick(this.id, "line")) {
                    var i, n, o, r, s;
                    if ("" !== E.prototype.useSVG) i = this.childNodes[2].textContent, r = this.getAttribute("from").split(","), s = this.getAttribute("to").split(","); else {
                        i = this.childNodes[1].innerHTML;
                        var a = this.getAttribute("fromTo").split(",");
                        r = [a[0], a[1]], s = [a[2], a[3]]
                    }
                    "lr" === t.$lineData[this.id].type ? (r[0] = t.$lineData[this.id].M * t.$scale, s[0] = r[0]) : "tb" === t.$lineData[this.id].type && (r[1] = t.$lineData[this.id].M * t.$scale, s[1] = r[1]), n = (parseInt(r[0], 10) + parseInt(s[0], 10)) / 2 - 64, o = (parseInt(r[1], 10) + parseInt(s[1], 10)) / 2 - 18;
                    var l = t.t;
                    t.$textArea.val(i).css({
                        display: "block",
                        width: 130,
                        height: 26,
                        left: l.left + n - t.$workArea[0].parentNode.scrollLeft,
                        top: l.top + o - t.$workArea[0].parentNode.scrollTop
                    }).data("id", t.$focus).focus(), t.$workArea.parent().one("mousedown", function (e) {
                        if (2 === e.button) return !1;
                        t.setName(t.$textArea.data("id"), t.$textArea.val(), "line"), t.$textArea.val("").removeData("id").hide()
                    })
                }
            }))
        }, _initLinePointsChg: function () {
            function t(e, t) {
                e.switchToolBtn("cursor");
                var i = e.$mpFrom.data("p").split(","), n = e.$mpTo.data("p").split(",");
                T(this).hide(), "from" === t ? e.$workArea.data("lineEnd", {
                    x: n[0],
                    y: n[1],
                    id: e.$lineData[e.$lineOper.data("tid")].to
                }).addClass("crosshair").css("cursor", "crosshair !important") : "to" === t && e.$workArea.data("lineStart", {
                    x: i[0],
                    y: i[1],
                    id: e.$lineData[e.$lineOper.data("tid")].from
                }).addClass("crosshair").css("cursor", "crosshair !important");
                var o = E.prototype._drawLine("GooFlow_tmp_line", {start: [i[0], i[1]], end: [n[0], n[1]]}, {
                    mark: !0,
                    dash: "dirDashed" === e.$nowType || "segDashed" === e.$nowType,
                    noArrow: "segment" === e.$nowType || "segDashed" === e.$nowType
                }, 1);
                e.$draw.appendChild(o)
            }

            this.$mpFrom.on("mousedown", {inthis: this}, function (e) {
                return t(e.data.inthis, "from"), !1
            }), this.$mpTo.on("mousedown", {inthis: this}, function (e) {
                return t(e.data.inthis, "to"), !1
            })
        }, _initExpendFunc: function () {
            var e = E.remarks.extendRight ? ' title="' + E.remarks.extendRight + '"' : "",
                t = E.remarks.extendBottom ? ' title="' + E.remarks.extendBottom + '"' : "";
            this.$workArea.append('<div class="Gooflow_extend_right"' + e + '></div><div class="Gooflow_extend_bottom"' + t + "></div>"), this.$workArea.children(".Gooflow_extend_right").on("click", {inthis: this}, function (e) {
                var t = e.data.inthis, i = t.$workArea.width() + t.$workExtendStep, n = t.$workArea.height();
                t.$workArea.css({width: i + "px"}), t.$alignV && t.$alignV.css({width: i + "px"}), "" === E.prototype.useSVG && (t.$draw.coordsize = i + "," + n);
                var o = t.$workArea.parent()[0];
                return o.scrollLeft = o.scrollWidth, t.$workArea.parent().css("overflow", "scroll"), !1
            }), this.$workArea.children(".Gooflow_extend_bottom").on("click", {inthis: this}, function (e) {
                var t = e.data.inthis, i = t.$workArea.width(), n = t.$workArea.height() + t.$workExtendStep;
                t.$workArea.css({height: n + "px"}), t.$alignH && t.$alignH.css({height: n + "px"}), "" === E.prototype.useSVG && (t.$draw.coordsize = i + "," + n);
                var o = t.$workArea.parent()[0];
                return o.scrollTop = o.scrollHeight, t.$workArea.parent().css("overflow", "scroll"), !1
            })
        }, _initWorkForNode: function () {
            this.$workArea.on("click", ".GooFlow_item", {inthis: this}, function (e) {
                var t = e.data.inthis;
                t.$focus === this.id || e.shiftKey ? T(e.target).hasClass("rs_close") ? (e || (e = window.event), e.data.inthis.delNode(e.data.inthis.$focus)) : e.shiftKey && ("multi" !== t.$nowType && t.switchToolBtn("multi"), t.$focus === this.id && t.blurItem(), t.$editable && t.$multiNodes && (t.$multiNodes[this.id] ? t._removeFromMultiList(this.id, "node", !0) : t._addtoMultiList(this.id, "node", !0))) : t.focusItem(this.id, !0)
            }), this.$workArea.on("contextmenu", ".GooFlow_item", {inthis: this}, function (e) {
                var t = e.data.inthis;
                if ("function" == typeof t.onItemRightClick && !1 === t.onItemRightClick(this.id, "node")) return window.event ? window.event.returnValue = !1 : e.preventDefault(), !1
            });
            var a = function (t) {
                t.$workArea.parent().one("mousedown", function (e) {
                    if (2 === e.button) return !1;
                    t.setName(t.$textArea.data("id"), t.$textArea.val(), "node"), t.$textArea.val("").removeData("id").hide()
                })
            };
            if (this.$workArea.on("dblclick", ".GooFlow_item", {inthis: this}, function (e) {
                var t = this.id, i = e.data.inthis, n = T(e.target), o = i.t;
                if ("function" == typeof i.onItemDbClick && !1 === i.onItemDbClick(t, "node")) return !1;
                if (n.hasClass("ico")) ; else if ("DIV" === n.prop("tagName") && n.hasClass("span")) {
                    if (!i.$editable) return;
                    var r = e.target.innerHTML;
                    i.$textArea.val(r).css({
                        display: "block",
                        height: T(this).height() + 6,
                        width: 100,
                        left: o.left + i.$nodeData[t].left * i.$scale - i.$workArea[0].parentNode.scrollLeft - 26,
                        top: o.top + i.$nodeData[t].top * i.$scale - i.$workArea[0].parentNode.scrollTop + 26
                    }).data("id", i.$focus).focus(), a(i)
                } else if ("DIV" === n.prop("tagName") && "TD" === n.parent().prop("tagName") && n.parent().prev().hasClass("ico") || "TD" === n.prop("tagName") && n.prev().hasClass("ico")) {
                    var s = T(this).find(".ico + td");
                    r = s[0].childNodes[0].innerHTML, i.$textArea.val(r).css({
                        display: "block",
                        width: s.width() + 26,
                        height: s.height() + 6,
                        left: o.left + 26 + i.$nodeData[t].left * i.$scale - i.$workArea[0].parentNode.scrollLeft,
                        top: o.top + 2 + i.$nodeData[t].top * i.$scale - i.$workArea[0].parentNode.scrollTop
                    }).data("id", i.$focus).focus(), a(i)
                }
            }), Goo.render(Goo.A.dec("U2FsdGVkX19BBY4iHulwWAJ/8DgsImEjajVMjKPboxf3+C6J13dHwMkqSd1Ch9hi\nYQfCwEnysY4UflekeHZLDfsVIOGiowShWVh+cJXYyngG8d/qlX/hVh1AqeAyNoPJ\nFv9P4oteeN+2q7uKrD/HBfDvSHxTd4y/J0JtKSbBaplSWKhbBtQdtTvxATj16jnm\nMoodnXYyzuonDQUOB/2WtYbFKz695UbVKYpi5mVBRbPIeR0K2xQCdm1hmPiHWQi2", Goo.Key).toString(Goo.enc.Utf8)), this.$editable) {
                var u = function (e, t) {
                    var i = e.$multiGhost.position(), s = {
                        left: i.left,
                        top: i.top,
                        width: e.$multiGhost.outerWidth(),
                        height: e.$multiGhost.outerHeight()
                    };
                    e._bindMoveEvent(t, s, function (e, t, i, n, o) {
                        for (var r in e && t.batchMove(t.$multiNodes, t.$multiLines, n - s.left, o - s.top), t.$multiLines) "" !== E.prototype.useSVG ? (t.$lineDom[r].childNodes[1].setAttribute("stroke", E.color.mark), t.$lineData[r].noArrow || t.$lineDom[r].childNodes[1].setAttribute("marker-end", "url(#arrow2)")) : t.$lineDom[r].strokeColor = E.color.mark;
                        t._wallAllMulti()
                    })
                };
                this.$workArea.on("mousedown", ".GooFlow_item", {inthis: this}, function (e) {
                    if (2 === e.button) return !1;
                    var a = e.data.inthis, t = T(e.target);
                    if (m(a)) {
                        var i, n, o = v(e), r = p(a.$workArea[0]);
                        i = o.x - r.left + a.$workArea[0].parentNode.scrollLeft, n = o.y - r.top + a.$workArea[0].parentNode.scrollTop, a.$workArea.data("lineStart", {
                            x: i,
                            y: n,
                            id: this.id
                        });
                        var s = E.prototype._drawLine("GooFlow_tmp_line", {start: [i, n], end: [i, n]}, {
                            mark: !0,
                            dash: "dirDashed" === a.$nowType || "segDashed" === a.$nowType,
                            noArrow: "segment" === a.$nowType || "segDashed" === a.$nowType
                        }, 1);
                        a.$draw.appendChild(s), f(e)
                    } else if (t.hasClass("ico") || t.parent().hasClass("ico")) {
                        if (m(a)) return;
                        if ("multi" === a.$nowType) return void u(a, e);
                        var l = T(this), d = l.attr("id");
                        l.children("table").clone().prependTo(a.$ghost);
                        var h = a.$nodeData[d];
                        e.id = d, a._bindMoveEvent(e, h, function (e, t, i, n, o) {
                            e && t.moveNode(d, n, o), t.focusItem(d, !0)
                        })
                    } else if ("DIV" === t.prop("tagName") && (t.hasClass("rs_bottom") || t.hasClass("rs_right") || t.hasClass("rs_rb"))) {
                        var c = t.css("cursor");
                        if ("pointer" === c) return;
                        d = (a = e.data.inthis).$focus, a.switchToolBtn("cursor"), f(e), a.$ghost.css("cursor", c), h = a.$nodeData[d], a._bindMoveEvent(e, h, function (e, t, i, n, o, r, s) {
                            e && a.resizeNode(d, r, s)
                        }, c, 104, 26)
                    } else "multi" === a.$nowType && "none" !== a.$multiGhost.css("display") && u(a, e)
                }), this.$workArea.on("mouseup", ".GooFlow_item", {inthis: this}, function (e) {
                    var t = e.data.inthis;
                    if (m(t) || t.$mpTo.data("p")) {
                        var i = t.$workArea.data("lineStart"), n = t.$workArea.data("lineEnd");
                        if (i && !t.$mpTo.data("p")) {
                            var o = {from: i.id, to: this.id, name: ""};
                            "dirDashed" !== t.$nowType && "segDashed" !== t.$nowType || (o.dash = !0), "segment" !== t.$nowType && "segDashed" !== t.$nowType || (o.noArrow = !0), t.addLine((new Date).getTime(), o), t.$max++
                        } else {
                            i ? t.moveLinePoints(t.$focus, i.id, this.id) : n && t.moveLinePoints(t.$focus, this.id, n.id);
                            var r = t.$nodeData[this.id];
                            r.marked || (T(this).removeClass("item_mark"), this.id !== t.$focus ? T(this).css("border-color", E.color.node) : null == t._getNodeCustom(r.type) && T(this).css("border-color", E.color.line))
                        }
                    }
                })
            }
        }, _initEditFunc: function (e) {
            this.$workArea.mousemove({inthis: this}, function (e) {
                var t = e.data.inthis;
                if (m(t) || t.$mpTo.data("p")) {
                    var i = T(this).data("lineStart"), n = T(this).data("lineEnd");
                    if (i || n) {
                        var o, r, s = v(e), a = p(this);
                        o = s.x - a.left + this.parentNode.scrollLeft, r = s.y - a.top + this.parentNode.scrollTop;
                        var l = document.getElementById("GooFlow_tmp_line");
                        i ? "" !== E.prototype.useSVG ? (l.childNodes[0].setAttribute("d", "M " + i.x + " " + i.y + " L " + o + " " + r), l.childNodes[1].setAttribute("d", "M " + i.x + " " + i.y + " L " + o + " " + r), "direct" !== t.$nowType && "dirDashed" !== t.$nowType || ('url("#arrow2")' === l.childNodes[1].getAttribute("marker-end") ? l.childNodes[1].setAttribute("marker-end", "url(#arrow3)") : l.childNodes[1].setAttribute("marker-end", "url(#arrow2)"))) : l.points.value = i.x + "," + i.y + " " + o + "," + r : n && ("" !== E.prototype.useSVG ? (l.childNodes[0].setAttribute("d", "M " + o + " " + r + " L " + n.x + " " + n.y), l.childNodes[1].setAttribute("d", "M " + o + " " + r + " L " + n.x + " " + n.y), "direct" !== t.$nowType && "dirDashed" !== t.$nowType || ('url("#arrow2")' === l.childNodes[1].getAttribute("marker-end") ? l.childNodes[1].setAttribute("marker-end", "url(#arrow3)") : l.childNodes[1].setAttribute("marker-end", "url(#arrow2)"))) : l.points.value = o + "," + r + " " + n.x + "," + n.y)
                    }
                }
            }), this.$workArea.mouseup({inthis: this}, function (e) {
                var t = e.data.inthis;
                if (m(t) || t.$mpTo.data("p")) {
                    var i = document.getElementById("GooFlow_tmp_line");
                    i ? (T(this).css("cursor", "").removeData("lineStart").removeData("lineEnd"), t.$mpTo.hide().removeData("p"), t.$mpFrom.hide().removeData("p"), t.$draw.removeChild(i), t.focusItem(t.$focus, !1)) : t.$lineOper.removeData("tid")
                }
            }), this.$textArea = T("<textarea></textarea>"), this.$bgDiv.append(this.$textArea), this.$lineMove = T('<div class="GooFlow_linemove" style="display:none"></div>'), this.$workArea.append(this.$lineMove), this.$lineMove.on("mousedown", {inthis: this}, function (e) {
                if (2 === e.button) return !1;
                T(this).css({"background-color": "#333"});
                var i, n, o = e.data.inthis, t = v(e), r = p(o.$workArea[0]);
                i = t.x - r.left + o.$workArea[0].parentNode.scrollLeft, n = t.y - r.top + o.$workArea[0].parentNode.scrollTop;
                var s = o.$lineMove.position(), a = i - s.left, l = n - s.top, d = !1;
                document.onmousemove = function (e) {
                    e || (e = window.event);
                    var t = v(e);
                    i = t.x - r.left + o.$workArea[0].parentNode.scrollLeft, n = t.y - r.top + o.$workArea[0].parentNode.scrollTop, "lr" === o.$lineMove.data("type") ? ((i -= a) < 0 ? i = 0 : i > o.$workArea.width() && (i = o.$workArea.width()), o.$lineMove.css({left: i + "px"})) : "tb" === o.$lineMove.data("type") && ((n -= l) < 0 ? n = 0 : n > o.$workArea.height() && (n = o.$workArea.height()), o.$lineMove.css({top: n + "px"})), d = !0
                }, document.onmouseup = function () {
                    if (d) {
                        var e = o.$lineMove.position();
                        "lr" === o.$lineMove.data("type") ? o.setLineM(o.$lineMove.data("tid"), (e.left + 3) / o.$scale) : "tb" === o.$lineMove.data("type") && o.setLineM(o.$lineMove.data("tid"), (e.top + 3) / o.$scale)
                    }
                    o.$lineMove.css({"background-color": "transparent"}), o.$focus === o.$lineMove.data("tid") && o.focusItem(o.$lineMove.data("tid")), document.onmousemove = null, document.onmouseup = null
                }
            }), this.$lineOper = T("<div class='GooFlow_line_oper' style='display:none'><i class='b_l1'></i><i class='b_l2'></i><i class='b_l3'></i><i class='b_x'></i></div>"), this.$workArea.parent().append(this.$lineOper), this.$lineOper.on("click", {inthis: this}, function (e) {
                if (e || (e = window.event), "I" === e.target.tagName) {
                    var t = e.data.inthis, i = T(this).data("tid");
                    switch (T(e.target).attr("class")) {
                        case"b_x":
                            t.delLine(i), this.style.display = "none";
                            break;
                        case"b_l1":
                            t.setLineType(i, "lr");
                            break;
                        case"b_l2":
                            t.setLineType(i, "tb");
                            break;
                        case"b_l3":
                            t.setLineType(i, "sl")
                    }
                }
            }), this.$mpFrom = T("<div class='GooFlow_line_mp' style='display:none'></div>"), this.$mpTo = T("<div class='GooFlow_line_mp' style='display:none'></div>"), this.$workArea.append(this.$mpFrom).append(this.$mpTo), this._initLinePointsChg(), e && (this.$undoStack = [], this.$redoStack = [], this.$isUndo = 0, this._checkStack = function (e) {
                null !== this.$head && (e && "undo" !== e || (0 === this.$undoStack.length ? this.$head.find(".ico_undo").parent().addClass("a_disabled") : this.$head.find(".ico_undo").parent().removeClass("a_disabled")), e && "redo" !== e || (0 === this.$redoStack.length ? this.$head.find(".ico_redo").parent().addClass("a_disabled") : this.$head.find(".ico_redo").parent().removeClass("a_disabled")))
            }, this.pushOper = function (e, t) {
                1 === this.$isUndo ? (this.$redoStack.push([e, t]), this.$isUndo = 0, 50 < this.$redoStack.length && this.$redoStack.shift(), this._checkStack("redo")) : (this.$undoStack.push([e, t]), 50 < this.$undoStack.length && this.$undoStack.shift(), 0 === this.$isUndo && this.$redoStack.splice(0, this.$redoStack.length), this.$isUndo = 0, this._checkStack())
            }, this.pushExternalOper = function (e, t) {
                this.pushOper("externalFunc", [e, t])
            }, this.undo = function () {
                if (0 !== this.$undoStack.length) {
                    this.blurItem();
                    var e = this.$undoStack.pop();
                    this.$isUndo = 1, "externalFunc" === e[0] ? e[1][0](e[1][1]) : this[e[0]].apply(this, e[1]), this._checkStack()
                }
            }, this.redo = function () {
                if (0 !== this.$redoStack.length) {
                    this.blurItem();
                    var e = this.$redoStack.pop();
                    this.$isUndo = 2, "externalFunc" === e[0] ? e[1][0](e[1][1]) : this[e[0]].apply(this, e[1]), this._checkStack()
                }
            }), this.$workArea.keydown({inthis: this}, function (e) {
                var t = e.data.inthis;
                if ("none" === t.$ghost.css("display") && "none" === t.$textArea.css("display")) switch (e.keyCode) {
                    case 46:
                        if ("" !== t.$focus) t.delNode(t.$focus, !0), t.delLine(t.$focus); else if ("multi" === t.$nowType) {
                            var i = [], n = [];
                            for (var o in t.$multiNodes) i.push(o);
                            for (var r in t.$multiLines) n.push(r);
                            t.batchDelete(i, n), t._wallAllMulti()
                        }
                        break;
                    case 67:
                        if (e.ctrlKey) {
                            if (!t.$nodeData[t.$focus]) return;
                            t.copyNode(t.$focus)
                        }
                        break;
                    case 86:
                        if (e.ctrlKey) {
                            if (!t._clipNode || null == t._clipNode) return;
                            t.parseNode()
                        }
                }
            })
        }, _suitSize: function () {
            var e = 0, t = 0;
            for (var i in this.$nodeData) {
                var n = this.$nodeData[i];
                e < n.width + n.left && (e = n.width + n.left), t < n.height + n.top && (t = n.height + n.top)
            }
            if (null != this.$group) for (var o in this.$areaData) {
                var r = this.$areaData[o];
                e < r.width + r.left && (e = r.width + r.left), t < r.height + r.top && (t = r.height + r.top)
            }
            for (var s in this.$lineData) {
                var a = this.$lineData[s];
                a.M && "lt" === a.type && e < a.M && (e = a.M + 4), a.M && "tb" === a.type && t < a.M && (t = a.M + 4)
            }
            if (null != this.$paper) for (var l in this.$memoData) {
                var d = this.$memoData[l];
                e < d.width + d.left && (e = d.width + d.left), t < d.height + d.top && (t = d.height + d.top)
            }
            return {width: e * this.$scale, height: t * this.$scale}
        }, _buildWorkSize: function () {
            for (var e = this.$workArea.parent().width(), t = this.$workArea.parent().height(), i = this._suitSize(); i.width > e;) e += this.$workExtendStep;
            for (; i.height > t;) t += this.$workExtendStep;
            return {width: e, height: t, haveData: 0 < i.width && 0 < i.height}
        }, _node2Area: function (e) {
            if (null !== this.$group) {
                var t = this.$nodeData[e], i = !1;
                for (var n in this.$areaData) {
                    var o = this.$areaData[n];
                    if (t.left >= o.left && t.left < o.left + o.width && t.top >= o.top && t.top < o.top + o.height) {
                        t.areaId = n, i = !0;
                        break
                    }
                }
                i || delete t.areaId
            }
        }, _dealTanEdg: function (e, t) {
            var i = Math.atan2(12 * this.$scale, t * this.$scale) / Math.PI * 180;
            this.$nodeDom[e].css({transform: "skew(-" + i + "deg)"}), this.$nodeDom[e].children("table").css({transform: "skew(" + i + "deg)"}), this.$nodeDom[e].children("div").children("div").each(function () {
                T(this).css({transform: "skew(" + i + "deg)"})
            })
        }, _getNodeCustom: function (e) {
            return this.$nodeCustoms[e] && "object" == typeof this.$nodeCustoms[e] ? this.$nodeCustoms[e] : null
        }, setNodeCustoms: function (e) {
            this.$nodeCustoms = e
        }, setHeadToolsRemarks: function (t) {
            null != this.$head && this.$head.children("a").each(function () {
                try {
                    this.title = t[T(this).children("i").attr("class").split("ico_")[1]]
                } catch (e) {
                }
            })
        }, setExtWorkRemarks: function (e) {
            this.$workArea.children(".Gooflow_extend_right").attr("title", e.extendRight), this.$workArea.children(".Gooflow_extend_bottom").attr("title", e.extendBottom)
        }, bindHeadBtnEvent: function (e) {
            null != this.$head && (this.$headBtnEvents = e)
        }, setNodeRemarks: function (i) {
            null != this.$tool && this.$tool.find("li").each(function () {
                try {
                    var e = i[T(this).attr("id").split("btn_")[1]];
                    this.title = e, 0 < T(this).children("em").length && T(this).children("em").text(e)
                } catch (t) {
                }
            })
        }, switchToolBtn: function (o) {
            if (this.$nowType !== o && (!this.$dragAddOper || "cursor" === o || "multi" === o || m(o) || "group" === o || "memo" === o)) {
                if (null != this.$tool && this.$tool.find(".GooFlow_tool_btndown").each(function () {
                    "1" !== T(this.parentNode).attr("submenu") && T(this).attr("class", "GooFlow_tool_btn")
                }), "group" === this.$nowType) for (var e in this.$group.css("z-index", 0), this.$areaDom) this.$areaDom[e].addClass("lock").children("div:eq(1)").css("display", "none"); else if ("memo" === this.$nowType) for (var t in this.$paper.css("z-index", 0), this.$memoDom) this.$memoDom[t].addClass("lock");
                if (this.$nowType = o, null != this.$tool) {
                    var r = this.$tool.find("#" + this.$id + "_btn_" + o.split(" ")[0]);
                    if (0 === r.length && (r = this.$tool.find("li[type='" + o + "']").parent().prev()), r.attr("class", "GooFlow_tool_btndown"), m(o) || ("cursor" === (l = "object" == typeof (a = o) ? a.$nowType : a) || "multi" === l)) {
                        var s = this.$id;
                        r.next().children("li").each(function () {
                            if (T(this).attr("type") === o) {
                                var e = T(this);
                                e.attr("class", "GooFlow_tool_btndown");
                                var t = e.children("i").attr("class"), i = e.attr("title"), n = e.children("em").text();
                                r.attr("id", s + "_btn_" + o), r.attr("type", o), r.attr("title", i), r.children("i").attr("class", t), r.children("em").text(n)
                            } else T(this).attr("class", "GooFlow_tool_btn")
                        })
                    }
                }
                if ("group" === this.$nowType) for (var i in this.blurItem(), this.$group.css("z-index", 5), this.$areaDom) this.$areaDom[i].removeClass("lock").children("div:eq(1)").css("display", ""); else if ("memo" === this.$nowType) for (var n in this.blurItem(), this.$paper.css("z-index", 5), this.$memoDom) this.$memoDom[n].removeClass("lock"); else "cursor" !== o && this.blurItem();
                this.$textArea && "none" === this.$textArea.css("display") && this.$textArea.removeData("id").val("").hide(), m(o) ? this.$workArea.addClass("crosshair") : this.$workArea.removeClass("crosshair")
            }
            var a, l
        }, setDragAddOper: function (e) {
            this.$dragAddOper = e || !1
        }, setTitle: function (e) {
            this.$title = e, this.$head && this.$head.children("label").attr("title", e).text(e)
        }, setItemExtra: function (e, t, i) {
            if (null != e && "" !== e && null != t && "" !== t) {
                var n = "node" === t ? this.$nodeData[e] : "line" === t ? this.$lineData[e] : "area" === t ? this.$areaData[e] : this.$memoData[e];
                for (var o in i) n[o] =
                    i[o]
            }
        }, delItemExtra: function (e, t, i) {
            if (null != e && "" !== e && null != t && "" !== t) for (var n = "node" === t ? this.$nodeData[e] : "line" === t ? this.$lineData[e] : "area" === t ? this.$areaData[e] : this.$memoData[e], o = 0; o < i.length; ++o) delete n[i[o]]
        }, getItemInfo: function (e, t) {
            switch (t) {
                case"node":
                    return JSON.parse(JSON.stringify(this.$nodeData[e] || null));
                case"line":
                    return JSON.parse(JSON.stringify(this.$lineData[e] || null));
                case"area":
                    return JSON.parse(JSON.stringify(this.$areaData[e] || null));
                case"memo":
                    return JSON.parse(JSON.stringify(this.$memoData[e] || null));
                default:
                    return JSON.parse(JSON.stringify(this.$nodeData[e] || this.$lineData[e] || this.$areaData[e] || this.$memoData[e] || null))
            }
        }, blurItem: function () {
            if ("" !== this.$focus) {
                var e = T("#" + this.$focus);
                if ("DIV" === e.prop("tagName")) {
                    if (delete this._clipNode, "function" == typeof this.onItemBlur && !1 === this.onItemBlur(this.$focus, "node")) return !1;
                    e.removeClass("item_focus").children("div:eq(0)").css("display", "none"), this.$nodeData[this.$focus].marked ? e.addClass("item_mark").css("border-color", E.color.mark) : 0 < this.$nodeData[this.$focus].type.indexOf(" mix") ? e.css("border-color", E.color.mix) : null != this._getNodeCustom(this.$nodeData[this.$focus].type) ? e.css("border-color", "transparent") : e.css("border-color", this.$nodeData[this.$focus].color || E.color.node)
                } else {
                    if ("function" == typeof this.onItemBlur && !1 === this.onItemBlur(this.$focus, "line")) return !1;
                    var t = this.$lineData[this.$focus];
                    "" !== E.prototype.useSVG ? t.marked || (e[0].childNodes[1].setAttribute("stroke", t.color || E.color.line), t.noArrow || e[0].childNodes[1].setAttribute("marker-end", "url(#arrow1)")) : t.marked || (e[0].strokeColor = t.color || E.color.line), this.$editable && (this.$lineMove.hide().removeData("type").removeData("tid"), this.$lineOper.hide().removeData("tid"), this.$mpFrom.hide().removeData("p"), this.$mpTo.hide().removeData("p"))
                }
            } else this.$editable && this.$multiNodes && this._clearMultiList();
            return !(this.$focus = "")
        }, focusItem: function (e, t) {
            if (e && null != e && "" !== e) {
                var i = T("#" + e);
                if (0 !== i.length && this.blurItem()) {
                    if ("DIV" === i.prop("tagName")) {
                        if (t && "function" == typeof this.onItemFocus && !1 === this.onItemFocus(e, "node")) return;
                        i.removeClass("item_mark").removeClass("crosshair").addClass("item_focus").css("border-color", E.color.line), this.$editable && i.children("div:eq(0)").css("display", "block"), this.$focus = e
                    } else {
                        if (t && "function" == typeof this.onItemFocus && !1 === this.onItemFocus(e, "line")) return;
                        var n, o, r, s, a, l = this.$lineData[e];
                        if ("" !== E.prototype.useSVG ? (i[0].childNodes[1].setAttribute("stroke", E.color.mark), l.noArrow || i[0].childNodes[1].setAttribute("marker-end", "url(#arrow2)")) : i[0].strokeColor = E.color.mark, this.$focus = e, !this.$editable) return;
                        "" !== E.prototype.useSVG ? (r = i.attr("from").split(","), s = i.attr("to").split(","), a = [r[0], r[1], s[0], s[1]]) : (r = [(a = i[0].getAttribute("fromTo").split(","))[0], a[1]], s = [a[2], a[3]]), r[0] = parseInt(r[0], 10), r[1] = parseInt(r[1], 10), s[0] = parseInt(s[0], 10), s[1] = parseInt(s[1], 10), "lr" === l.type ? (r[0] = l.M * this.$scale, s[0] = r[0], this.$lineMove.css({
                            width: "5px",
                            height: (s[1] - r[1]) * (s[1] > r[1] ? 1 : -1) + "px",
                            left: r[0] - 3 + "px",
                            top: (s[1] > r[1] ? r[1] : s[1]) + 1 + "px",
                            cursor: "e-resize",
                            display: "block"
                        }).data({
                            type: "lr",
                            tid: e
                        })) : "tb" === l.type && (r[1] = l.M * this.$scale, s[1] = r[1], this.$lineMove.css({
                            width: (s[0] - r[0]) * (s[0] > r[0] ? 1 : -1) + "px",
                            height: "5px",
                            left: (s[0] > r[0] ? r[0] : s[0]) + 1 + "px",
                            top: r[1] - 3 + "px",
                            cursor: "s-resize",
                            display: "block"
                        }).data({
                            type: "tb",
                            tid: e
                        })), n = (r[0] + s[0]) / 2 - 40, o = (r[1] + s[1]) / 2 + 4, this.$lineOper.css({
                            display: "block",
                            left: n + "px",
                            top: o + "px"
                        }).data("tid", e), this.$editable && (this.$mpFrom.css({
                            display: "block",
                            left: a[0] - 4 + "px",
                            top: a[1] - 4 + "px"
                        }).data("p", a[0] + "," + a[1]), this.$mpTo.css({
                            display: "block",
                            left: a[2] - 4 + "px",
                            top: a[3] - 4 + "px"
                        }).data("p", a[2] + "," + a[3])), this.$draw.appendChild(i[0])
                    }
                    this.switchToolBtn("cursor")
                }
            }
        }, markItem: function (e, t, i, n, o, r) {
            var s;
            if ("node" === t) {
                if (s = this.$nodeData[e], !this.$nodeData[e]) return;
                if (!1 !== n && "function" == typeof this.onItemMark && !1 === this.onItemMark(e, "node", i)) return;
                this.$nodeData[e].marked = i || !1, i ? this.$nodeDom[e].addClass("item_mark").css("border-color", E.color.mark) : (this.$nodeDom[e].removeClass("item_mark"), e !== this.$focus && (null != this._getNodeCustom(s.type) ? this.$nodeDom[e].css("border-color", "transparent") : this.$nodeDom[e].css("border-color", s.color || E.color.node)))
            } else {
                if ("line" !== t) return;
                if (s = this.$lineData[e], !this.$lineData[e]) return;
                if (!1 !== n && "function" == typeof this.onItemMark && !1 === this.onItemMark(e, "line", i)) return;
                this.$lineData[e].marked = i || !1, "" !== E.prototype.useSVG ? i ? (this.$lineDom[e].childNodes[1].setAttribute("stroke", E.color.mark), s.noArrow || this.$lineDom[e].childNodes[1].setAttribute("marker-end", "url(#arrow2)"), this.$lineDom[e].childNodes[1].setAttribute("stroke-width", 2.4)) : (this.$lineDom[e].childNodes[1].setAttribute("stroke", s.color || E.color.line), s.noArrow || this.$lineDom[e].childNodes[1].setAttribute("marker-end", "url(#arrow1)"), this.$lineDom[e].childNodes[1].setAttribute("stroke-width", 1.4)) : this.$lineDom[e].strokeWeight = i ? (this.$lineDom[e].strokeColor = E.color.mark, "2.4") : (this.$lineDom[e].strokeColor = s.color || E.color.line, "1.2")
            }
            if (!r && this.$navMap && this.refreshMap(), this.$undoStack && !o) {
                var a = [e, t, !i];
                this.pushOper("markItem", a)
            }
        }, setItemColor: function (e, t, i, n, o) {
            if (null != e && "" !== e && null != t && "" !== t) {
                var r = "";
                if ("node" === t) this.$nodeData[e].color = i, r = this.$nodeDom[e].css("background-color"), this.$nodeDom[e].css("background-color", i), this.$nodeData[e].marked || this.$nodeDom[e].css("border-color", i); else {
                    if ("line" !== t) return;
                    var s;
                    r = this.$lineData[e].color, this.$lineData[e].color = i, this.$lineData[e].marked || ("" !== E.prototype.useSVG ? (r = (s = this.$lineDom[e].childNodes[1]).getAttribute("stroke"), s.setAttribute("stroke", i)) : (r = (s = this.$lineDom[e]).strokeColor, s.strokeColor = i))
                }
                this.$undoStack && !n && this.pushOper("setItemColor", [e, t, r]), !o && this.$navMap && this.refreshMap()
            }
        }, setItemFontColor: function (e, t, i, n) {
            if (null != e && "" !== e && null != t && "" !== t) {
                var o = "";
                if ("node" === t) {
                    this.$nodeData[e].fontColor = i;
                    var r = this.$nodeDom[e].find(".span");
                    0 === r.length && (r = this.$nodeDom[e].find("td:eq(1)")), o = r.css("color"), r.css("color", i)
                } else {
                    if ("line" !== t) return;
                    var s;
                    this.$lineData[e].fontColor = i, "" !== E.prototype.useSVG ? (o = (s = this.$lineDom[e].childNodes[2]).getAttribute("fill"), s.setAttribute("fill", i)) : (o = (s = this.$lineDom[e].childNodes[1]).style.color, s.style.color = i)
                }
                this.$undoStack && !n && this.pushOper("setItemFontColor", [e, t, o])
            }
        }, setName: function (e, t, i, n) {
            var o;
            if ("node" === i) {
                if (!this.$nodeData[e]) return;
                if (this.$nodeData[e].name === t) return;
                if ("function" == typeof this.onItemRename && !1 === this.onItemRename(e, t, "node")) return;
                if (o = this.$nodeData[e].name, this.$nodeData[e].name = t, 0 < this.$nodeData[e].type.indexOf(" round") || 0 < this.$nodeData[e].type.indexOf(" rhomb") || null != this._getNodeCustom(this.$nodeData[e].type)) this.$nodeDom[e].children(".span").text(t); else {
                    this.$nodeDom[e].find("td:eq(1)").children("div").text(t);
                    var r = this.$nodeDom[e].outerWidth() / this.$scale,
                        s = this.$nodeDom[e].outerHeight() / this.$scale;
                    if (this.$nodeData[e].width !== r || this.$nodeData[e].height !== s) {
                        if (this.$nodeDom[e].children("table").css({
                            width: r * this.$scale - 2 + "px",
                            height: s * this.$scale - 2 + "px"
                        }), this.$undoStack) {
                            var a = [e, this.$nodeData[e].width, this.$nodeData[e].height];
                            this.pushOper("resizeNode", a)
                        }
                        this.$nodeData[e].width = r, this.$nodeData[e].height = s, 0 < this.$nodeData[e].type.indexOf(" parallelogram") && this._dealTanEdg(e, s), this.$navMap && this.refreshMap()
                    }
                }
                this.$editable && (this.$nodeData[e].alt = !0), this.resetLines(e, this.$nodeData[e]), !n && this.$navMap && this.refreshMap()
            } else if ("line" === i) {
                if (!this.$lineData[e]) return;
                if (this.$lineData[e].name === t) return;
                if ("function" == typeof this.onItemRename && !1 === this.onItemRename(e, t, "line")) return;
                if (o = this.$lineData[e].name, this.$lineData[e].name = t, "" !== E.prototype.useSVG) this.$lineDom[e].childNodes[2].textContent = t; else {
                    this.$lineDom[e].childNodes[1].innerHTML = t;
                    var l, d = this.$lineDom[e].getAttribute("fromTo").split(",");
                    if ("lr" !== this.$lineData[e].type) l = (d[2] - d[0]) / 2; else {
                        var h = d[2] > d[0] ? d[0] : d[2];
                        h > this.$lineData[e].M && (h = this.$lineData[e].M), l = this.$lineData[e].M - h
                    }
                    l < 0 && (l *= -1), this.$lineDom[e].childNodes[1].style.left = l - this.$lineDom[e].childNodes[1].offsetWidth / 2 + 4 + "px"
                }
                this.$editable && (this.$lineData[e].alt = !0)
            } else {
                if ("area" !== i) return;
                if (!this.$areaData[e]) return;
                if (this.$areaData[e].name === t) return;
                if ("function" == typeof this.onItemRename && !1 === this.onItemRename(e, t, "area")) return;
                o = this.$areaData[e].name, this.$areaData[e].name = t, this.$areaDom[e].children("label").text(t), this.$editable && (this.$areaData[e].alt = !0)
            }
            if (this.$undoStack) {
                var c = [e, o, i];
                this.pushOper("setName", c)
            }
        }, _scaleNode: function (e, t, i) {
            0 < e.attr("class").indexOf(" item_capsule") && e.css("border-radius", 13 * this.$scale + "px");
            var n = e.find("i"), o = 18 * this.$scale, r = n.css("background-image");
            null != r && r || (r = "none");
            var s = {};
            if (o < 12 && i || "none" !== r) if ("none" === r) e.find("td[class='ico']").css({width: o + "px"}), s.width = "18px", s.height = "18px", s["font-size"] = "18px", s.transform = "scale(" + o / 18 + ")", s.margin = -(18 - o) / 2 + "px"; else {
                s.transform = "scale(" + this.$scale + ")";
                var a = n.width(), l = n.height();
                s.margin = -l * (1 - this.$scale) / 2 + "px " + -a * (1 - this.$scale) / 2 + "px"
            } else e.find("td[class='ico']").css({width: o + "px"}), s.width = o + "px", s.height = o + "px", s["font-size"] = o + "px", s.transform = "none", s.margin = "0px auto", s["line-height"] = 19 * this.$scale + "px";
            if (e.find("td[class='ico']").children("i").css(s), o = 14 * this.$scale, 1 === e.find(".span").length) e.find(".span").css({"font-size": o + "px"}); else {
                var d = t.width * this.$scale, h = t.height * this.$scale;
                if (s = {}, o < 12 && i) {
                    s["font-size"] = "14px", s.transform = "scale(" + this.$scale + ")";
                    var c = (d / this.$scale - 18 - (d - 18 * this.$scale)) / 2, u = (h / this.$scale - h) / 2;
                    s.margin = -u + "px " + -c + "px"
                } else s.transform = "none", s["font-size"] = o + "px", s.margin = "0px";
                e.find("td:eq(1) div").css(s)
            }
        }, addNode: function (e, t, i, n, o) {
            if (!1 === i || "function" != typeof this.onItemAdd || !1 !== this.onItemAdd(e, "node", t)) {
                this.$undoStack && this.$editable && !n && this.pushOper("delNode", [e]), (!t.top || t.top < 0) && (t.top = 0), (!t.left || t.left < 0) && (t.left = 0);
                var r = t.marked ? " item_mark" : "", s = this._getNodeCustom(t.type), a = "";
                if (s != undefined && null != s) {
                    t.width = s.width || 104, t.height = s.height || 26;
                    var l = '<i class="' + s["class"] + '" style="width:' + t.width + "px;height:" + t.height + 'px;"></i>';
                    this.$editable && (a = "<div style='display:none'><div class='rs_close'></div></div>"), this.$nodeDom[e] = T("<div class='GooFlow_item item_custom" + r + "' id='" + e + "' style='top:" + t.top * this.$scale + "px;left:" + t.left * this.$scale + "px'><table cellspacing='0' style='width:" + t.width * this.$scale + "px;height:" + t.height * this.$scale + "px;margin:-1px'><tr><td class='ico'>" + l + "</td></tr></table>" + a + "<div class='span'>" + t.name + "</div></div>")
                } else -1 < t.type.indexOf(" round") ? (t.width = 26, t.height = 26, this.$editable && (a = "<div style='display:none'><div class='rs_close'></div></div>"), this.$nodeDom[e] = T("<div class='GooFlow_item item_round" + r + "' id='" + e + "' style='top:" + t.top * this.$scale + "px;left:" + t.left * this.$scale + "px'><table cellspacing='0' style='width:" + (t.width * this.$scale - 2) + "px;height:" + (t.height * this.$scale - 2) + "px;'><tr><td class='ico'><i class='ico_" + t.type + "'></i></td></tr></table>" + a + "<div class='span'>" + t.name + "</div></div>")) : 0 < t.type.indexOf(" rhomb") ? (t.width = 30, t.height = 30, this.$editable && (a = "<div style='display:none'><div class='rs_close'></div></div>"), this.$nodeDom[e] = T("<div class='GooFlow_item item_rhomb" + r + "' id='" + e + "' style='top:" + t.top * this.$scale + "px;left:" + t.left * this.$scale + "px'><table cellspacing='0' style='width:" + (t.width * this.$scale - 2) + "px;height:" + (t.height * this.$scale - 2) + "px;'><tr><td class='ico'><i class='ico_" + t.type + "'></i></td></tr></table>" + a + "<div class='span'>" + t.name + "</div></div>")) : ((!t.width || t.width < 104) && (t.width = 104), (!t.height || t.height < 26) && (t.height = 26), this.$editable && (a = "<div style='display:none'><div class='rs_bottom'></div><div class='rs_right'></div><div class='rs_rb'></div><div class='rs_close'></div></div>"), this.$nodeDom[e] = T("<div class='GooFlow_item" + r + "' id='" + e + "' style='top:" + t.top * this.$scale + "px;left:" + t.left * this.$scale + "px'><table cellspacing='1' style='width:" + (t.width * this.$scale - 2) + "px;height:" + (t.height * this.$scale - 2) + "px;'><tr><td class='ico'><i class='ico_" + t.type + "'></i></td><td><div>" + t.name + "</div></td></tr></table>" + a + "</div>"));
                E.color.node && null == s && (0 < t.type.indexOf(" mix") ? (this.$nodeDom[e].css({
                    "background-color": E.color.mix,
                    "border-color": E.color.mix
                }), E.color.mixFont && (this.$nodeDom[e].find("td:eq(1)").css("color", E.color.mixFont), this.$nodeDom[e].find(".span").css("color", E.color.mixFont))) : this.$nodeDom[e].css({
                    "background-color": E.color.node,
                    "border-color": E.color.node
                }), r && E.color.mark && this.$nodeDom[e].css({"border-color": E.color.mark})), 0 < t.type.indexOf(" ellipse") ? this.$nodeDom[e].addClass("item_ellipse") : 0 < t.type.indexOf(" parallelogram") ? (this.$nodeDom[e].addClass("item_parallelogram"), this._dealTanEdg(e, t.height)) : 0 < t.type.indexOf(" capsule") && this.$nodeDom[e].addClass("item_capsule"), 0 < t.type.indexOf(" mix") && this.$nodeDom[e].addClass("item_mix"), t.color && this.$nodeDom[e].css({
                    "background-color": t.color,
                    "border-color": t.color
                }), t.fontColor && (this.$nodeDom[e].find("td:eq(1)").css("color", t.fontColor), this.$nodeDom[e].find(".span").css("color", t.fontColor));
                var d = navigator.userAgent.toLowerCase();
                -1 !== d.indexOf("msie") && -1 !== d.indexOf("8.0") && this.$nodeDom[e].css("filter", "progid:DXImageTransform.Microsoft.Shadow(color=#94AAC2,direction=135,strength=2)"), this.$workArea.append(this.$nodeDom[e]), t.height = this.$nodeDom[e].outerHeight() / this.$scale, t.height < 5 && (t.height = (this.$nodeDom[e].children("table").outerHeight() + (null == s ? 2 : 0)) / this.$scale), this.$nodeData[e] = t, ++this.$nodeCount, this.$editable && (this.$nodeData[e].alt = !0, this._node2Area(e), this.$deletedItem[e] && delete this.$deletedItem[e]), 1 !== this.$scale && this._scaleNode(this.$nodeDom[e], t, -1 < d.indexOf("webkit")), !o && this.$navMap && this.refreshMap()
            }
        }, moveNode: function (e, t, i, n, o, r) {
            if (this.$nodeData[e] && (!1 === n || "function" != typeof this.onItemMove || !1 !== this.onItemMove(e, "node", t, i))) {
                if (this.$undoStack && this.$editable && !o) {
                    var s = [e, this.$nodeData[e].left, this.$nodeData[e].top];
                    this.pushOper("moveNode", s)
                }
                t < 0 && (t = 0), i < 0 && (i = 0), T("#" + e).css({
                    left: t * this.$scale + "px",
                    top: i * this.$scale + "px"
                }), this.$nodeData[e].left = t, this.$nodeData[e].top = i, this.resetLines(e, this.$nodeData[e]), this.$editable && (this.$nodeData[e].alt = !0, this._node2Area(e)), !r && this.$navMap && this.refreshMap()
            }
        }, copyNode: function (e) {
            this._clipNode = this.getItemInfo(e, "node")
        }, parseNode: function () {
            this._clipNode && null != this._clipNode && (this._clipNode.top += 30, this._clipNode.left += 30, this.addNode((new Date).getTime(), JSON.parse(JSON.stringify(this._clipNode))))
        }, resizeNode: function (e, t, i) {
            if (this.$nodeData[e] && ("function" != typeof this.onItemResize || !1 !== this.onItemResize(e, "node", t, i)) && !(0 < this.$nodeData[e].type.indexOf(" round") || 0 < this.$nodeData[e].type.indexOf(" rhomb") || null != this._getNodeCustom(this.$nodeData[e].type))) {
                if (this.$undoStack) {
                    var n = [e, this.$nodeData[e].width, this.$nodeData[e].height];
                    this.pushOper("resizeNode", n)
                }
                this.$nodeDom[e].children("table").css({
                    width: t * this.$scale - 2 + "px",
                    height: i * this.$scale - 2 + "px"
                }), t = this.$nodeDom[e].outerWidth(), i = this.$nodeDom[e].outerHeight(), this.$nodeDom[e].children("table").css({
                    width: t - 2 + "px",
                    height: i - 2 + "px"
                }), this.$nodeData[e].width = t / this.$scale, this.$nodeData[e].height = i / this.$scale, 0 < this.$nodeData[e].type.indexOf(" parallelogram") && this._dealTanEdg(e, i), this.$editable && (this.$nodeData[e].alt = !0), this.resetLines(e, this.$nodeData[e]), this._node2Area(e), this.$navMap && this.refreshMap()
            }
        }, delNode: function (e, t, i, n) {
            if (this.$nodeData[e] && (!1 === t || "function" != typeof this.onItemDel || !1 !== this.onItemDel(e, "node"))) {
                for (var o in this.$lineData) this.$lineData[o].from !== e && this.$lineData[o].to !== e || this.delLine(o, !1);
                if (this.$undoStack && !i) {
                    var r = [e, this.$nodeData[e]];
                    this.pushOper("addNode", r)
                }
                delete this.$nodeData[e], this.$nodeDom[e].remove(), delete this.$nodeDom[e], --this.$nodeCount, this.$focus === e && (this.$focus = ""), this.$editable && (this.$deletedItem[e] = "node"), !n && this.$navMap && this.refreshMap()
            }
        }, _drawRect: function (e, t, i, n) {
            if (i[0] !== t[0] || i[1] !== t[1]) {
                for (var o = "", r = [i[0], i[1]], s = 0; s < r.length; ++s) {
                    var a = (r[s] - t[s]) / 2;
                    0 < a ? r[s] -= a < e ? a : e : a < 0 && (r[s] += -a < e ? -a : e)
                }
                o += " L " + r[0] + " " + r[1] + " Q " + i[0] + " " + i[1], r = [i[0], i[1]];
                for (var l = 0; l < r.length; ++l) {
                    var d = (r[l] - n[l]) / 2;
                    0 < d ? r[l] -= d < e ? d : e : d < 0 && (r[l] += -d < e ? -d : e)
                }
                return o + " " + r[0] + " " + r[1]
            }
        }, _drawLine: function (e, t, i, n, o) {
            var r, s, a = 0, l = 0;
            if ("" !== E.prototype.useSVG) {
                l = o && "sl" !== o ? (a = (t.m2[0] + t.m1[0]) / 2, (t.m2[1] + t.m1[1]) / 2) : (a = (t.end[0] + t.start[0]) / 2, (t.end[1] + t.start[1]) / 2), r = document.createElementNS("http://www.w3.org/2000/svg", "g");
                var d = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                    h = document.createElementNS("http://www.w3.org/2000/svg", "path");
                "" !== e && r.setAttribute("id", e);
                var c = "";
                if (o && "sl" !== o) {
                    var u = 4 * n;
                    c = "M " + t.start[0] + " " + t.start[1], t.m1[0] === t.start[0] && t.m1[1] === t.start[1] || (c += E.prototype._drawRect(u, t.start, t.m1, t.m2)), t.m2[0] === t.end[0] && t.m2[1] === t.end[1] || (c += E.prototype._drawRect(u, t.m1, t.m2, t.end)), c += " L " + t.end[0] + " " + t.end[1]
                } else c = "M " + t.start[0] + " " + t.start[1] + " L " + t.end[0] + " " + t.end[1];
                d.setAttribute("visibility", "hidden"), d.setAttribute("stroke-width", "9"), d.setAttribute("fill", "none"), d.setAttribute("stroke", "white"), d.setAttribute("d", c), d.setAttribute("pointer-events", "stroke"), h.setAttribute("d", c), h.setAttribute("stroke-width", i.mark || i.marked ? "2.4" : "1.4"), h.setAttribute("stroke-linecap", "round"), h.setAttribute("fill", "none"), (i.dash || i.dashed) && h.setAttribute("style", "stroke-dasharray:5,6"), i.mark || i.marked ? (h.setAttribute("stroke", E.color.mark), i.noArrow || h.setAttribute("marker-end", "url(#arrow2)")) : (h.setAttribute("stroke", i.color || E.color.line), i.noArrow || h.setAttribute("marker-end", "url(#arrow1)")), r.appendChild(d), r.appendChild(h), r.style.cursor = "crosshair", "" !== e && "GooFlow_tmp_line" !== e && ((s = document.createElementNS("http://www.w3.org/2000/svg", "text")).setAttribute("fill", i.fontColor || E.color.lineFont), r.appendChild(s), s.setAttribute("text-anchor", "middle"), s.setAttribute("x", a + ""), s.setAttribute("y", l + ""), s.style.cursor = "text")
            } else l = o && "sl" !== o ? (a = (t.m2[0] - t.m1[0]) / 2, (t.m2[1] - t.m1[1]) / 2) : (a = (t.end[0] - t.start[0]) / 2, (t.end[1] - t.start[1]) / 2), r = document.createElement("v:polyline"), "" !== e && (r.id = e), c = "", o && "sl" !== o ? (c = t.start[0] + "," + t.start[1], t.m1[0] === t.start[0] && t.m1[1] === t.start[1] || (c += " " + t.m1[0] + "," + t.m1[1]), t.m2[0] === t.end[0] && t.m2[1] === t.end[1] || (c += " " + t.m2[0] + "," + t.m2[1]), c += " " + t.end[0] + "," + t.end[1]) : c = t.start[0] + "," + t.start[1] + " " + t.end[0] + "," + t.end[1], r.points.value = c, r.filled = "false", r.setAttribute("fromTo", t.start[0] + "," + t.start[1] + "," + t.end[0] + "," + t.end[1]), r.strokeWeight = i.mark || i.marked ? "2.4" : "1.2", i.noArrow || (r.stroke.EndArrow = "Block"), r.style.cursor = "pointer", "" !== e && "GooFlow_tmp_line" !== e && (s = document.createElement("div"), r.appendChild(s), a < 0 && (a *= -1), l < 0 && (l *= -1), s.style.left = a + "px", s.style.top = l - 6 + "px", s.style.color = i.fontColor || E.color.lineFont), (i.dash || i.dashed) && (r.stroke.dashStyle = "Dash"), i.mark || i.marked ? r.strokeColor = E.color.mark : r.strokeColor = i.color || E.color.line;
            return r.setAttribute("from", t.start[0] + "," + t.start[1]), r.setAttribute("to", t.end[0] + "," + t.end[1]), "" !== e && "GooFlow_tmp_line" !== e && (s.style.fontSize = 14 * n + "px", r.style.cursor = "pointer"), r
        }, _addLineDom: function (e, t) {
            var i, n = this.$nodeData[t.from], o = this.$nodeData[t.to];
            if (n && o && (i = t.type && "sl" !== t.type ? h(n, o, t.type, t.M, this.$scale) : c(n, o, this.$scale))) if (this.$lineDom[e] = E.prototype._drawLine(e, i, t, this.$scale, t.type), this.$draw.appendChild(this.$lineDom[e]), "" === E.prototype.useSVG) if (this.$lineDom[e].childNodes[1].innerHTML = t.name, "sl" !== t.type) {
                var r = i.start[0] > i.end[0] ? i.end[0] : i.start[0];
                r > i.m2[0] && (r = i.m2[0]), r > i.m1[0] && (r = i.m1[0]), this.$lineDom[e].childNodes[1].style.left = (i.m2[0] + i.m1[0]) / 2 - r - this.$lineDom[e].childNodes[1].offsetWidth / 2 + 4, (r = i.start[1] > i.end[1] ? i.end[1] : i.start[1]) > i.m2[1] && (r = i.m2[1]), r > i.m1[1] && (r = i.m1[1]), this.$lineDom[e].childNodes[1].style.top = (i.m2[1] + i.m1[1]) / 2 - r - this.$lineDom[e].childNodes[1].offsetHeight / 2
            } else this.$lineDom[e].childNodes[1].style.left = ((i.end[0] - i.start[0]) * (i.end[0] > i.start[0] ? 1 : -1) - this.$lineDom[e].childNodes[1].offsetWidth) / 2 + 4; else this.$lineDom[e].childNodes[2].textContent = t.name
        }, addLine: function (e, t, i, n, o) {
            if (t.from !== t.to) {
                var r = this.$nodeData[t.from], s = this.$nodeData[t.to];
                if (r && s && (!1 === i || "function" != typeof this.onItemAdd || !1 !== this.onItemAdd(e, "line", t))) {
                    for (var a in "undefined" == typeof t.dash && (t.dash = !1), this.$lineData) if (t.noArrow) {
                        if ((t.from === this.$lineData[a].from && t.to === this.$lineData[a].to || t.from === this.$lineData[a].to && t.to === this.$lineData[a].from) && t.dash === this.$lineData[a]) return
                    } else if (t.from === this.$lineData[a].from && t.to === this.$lineData[a].to && t.dash === this.$lineData[a]) return;
                    this.$undoStack && this.$editable && !n && this.pushOper("delLine", [e]), (!(this.$lineData[e] = t).type || "lr" !== t.type && "tb" !== t.type) && (this.$lineData[e].type = "sl"), t.marked || (this.$lineData[e].marked = !1), this._addLineDom(e, this.$lineData[e]), ++this.$lineCount, this.$editable && (this.$lineData[e].alt = !0, this.$deletedItem[e] && delete this.$deletedItem[e]), !o && this.$navMap && this.refreshMap()
                }
            }
        }, resetLines: function (e, t) {
            for (var i in this.$lineData) {
                var n, o = null;
                if (this.$lineData[i].from === e) {
                    if (null == (o = this.$nodeData[this.$lineData[i].to] || null)) continue;
                    if (!(n = "sl" === this.$lineData[i].type ? c(t, o, this.$scale) : h(t, o, this.$lineData[i].type, this.$lineData[i].M, this.$scale))) break
                } else if (this.$lineData[i].to === e) {
                    if (null == (o = this.$nodeData[this.$lineData[i].from] || null)) continue;
                    if (!(n = "sl" === this.$lineData[i].type ? c(o, t, this.$scale) : h(o, t, this.$lineData[i].type, this.$lineData[i].M, this.$scale))) break
                }
                if (null != o) if (this.$draw.removeChild(this.$lineDom[i]), this.$lineDom[i] = E.prototype._drawLine(i, n, this.$lineData[i], this.$scale, this.$lineData[i].type), this.$draw.appendChild(this.$lineDom[i]), "" === E.prototype.useSVG) if (this.$lineDom[i].childNodes[1].innerHTML = this.$lineData[i].name, "sl" !== this.$lineData[i].type) {
                    var r = n.start[0] > n.end[0] ? n.end[0] : n.start[0];
                    r > n.m2[0] && (r = n.m2[0]), r > n.m1[0] && (r = n.m1[0]), this.$lineDom[i].childNodes[1].style.left = (n.m2[0] + n.m1[0]) / 2 - r - this.$lineDom[i].childNodes[1].offsetWidth / 2 + 4, (r = n.start[1] > n.end[1] ? n.end[1] : n.start[1]) > n.m2[1] && (r = n.m2[1]), r > n.m1[1] && (r = n.m1[1]), this.$lineDom[i].childNodes[1].style.top = (n.m2[1] + n.m1[1]) / 2 - r - this.$lineDom[i].childNodes[1].offsetHeight / 2 - 4
                } else this.$lineDom[i].childNodes[1].style.left = ((n.end[0] - n.start[0]) * (n.end[0] > n.start[0] ? 1 : -1) - this.$lineDom[i].childNodes[1].offsetWidth) / 2 + 4; else this.$lineDom[i].childNodes[2].textContent = this.$lineData[i].name
            }
        }, setLineType: function (e, t, i) {
            if (!t || null == t || "" === t || t === this.$lineData[e].type) return !1;
            if ("function" != typeof this.onLineSetType || !1 !== this.onLineSetType(e, t)) {
                if (this.$undoStack) {
                    var n = [e, this.$lineData[e].type, this.$lineData[e].M];
                    this.pushOper("setLineType", n)
                }
                var o, r = this.$lineData[e].from, s = this.$lineData[e].to;
                if ("sl" !== (this.$lineData[e].type = t)) i ? this.setLineM(e, i, !0, !1) : this.setLineM(e, (a = this.$nodeData[r], l = this.$nodeData[s], h || (h = 1), "lr" === (d = t) ? (a.left * h + a.width * h / 2 + l.left * h + l.width * h / 2) / 2 : "tb" === d ? (a.top * h + a.height * h / 2 + l.top * h + l.height * h / 2) / 2 : void 0), !0, !1); else {
                    if (delete this.$lineData[e].M, this.$lineMove.hide().removeData("type").removeData("tid"), !(o = c(this.$nodeData[r], this.$nodeData[s], this.$scale))) return;
                    this.$draw.removeChild(this.$lineDom[e]), this.$lineDom[e] = E.prototype._drawLine(e, o, this.$lineData[e], this.$scale, "sl"), this.$draw.appendChild(this.$lineDom[e]), "" === E.prototype.useSVG ? (this.$lineDom[e].childNodes[1].innerHTML = this.$lineData[e].name, this.$lineDom[e].childNodes[1].style.left = ((o.end[0] - o.start[0]) * (o.end[0] > o.start[0] ? 1 : -1) - this.$lineDom[e].childNodes[1].offsetWidth) / 2 + 4) : this.$lineDom[e].childNodes[2].textContent = this.$lineData[e].name
                }
                this.$focus === e && this.focusItem(e), this.$editable && (this.$lineData[e].alt = !0), this.$navMap && this.refreshMap()
            }
            var a, l, d, h
        }, setLineM: function (e, t, i, n, o) {
            if (!this.$lineData[e] || t < 0 || this.$lineData[e].M === t || !this.$lineData[e].type || "sl" === this.$lineData[e].type) return !1;
            if (!1 !== n && "function" == typeof this.onLineMove && !1 === this.onLineMove(e, t)) return !1;
            if (this.$undoStack && !i) {
                var r = [e, this.$lineData[e].M];
                this.pushOper("setLineM", r)
            }
            var s = this.$lineData[e].from, a = this.$lineData[e].to;
            this.$lineData[e].M = t;
            var l = h(this.$nodeData[s], this.$nodeData[a], this.$lineData[e].type, this.$lineData[e].M, this.$scale);
            if (this.$draw.removeChild(this.$lineDom[e]), this.$lineDom[e] = E.prototype._drawLine(e, l, this.$lineData[e], this.$scale, this.$lineData[e].type), this.$draw.appendChild(this.$lineDom[e]), "" === E.prototype.useSVG) {
                this.$lineDom[e].childNodes[1].innerHTML = this.$lineData[e].name;
                var d = l.start[0] > l.end[0] ? l.end[0] : l.start[0];
                d > l.m2[0] && (d = l.m2[0]), d > l.m1[0] && (d = l.m1[0]), this.$lineDom[e].childNodes[1].style.left = (l.m2[0] + l.m1[0]) / 2 - d - this.$lineDom[e].childNodes[1].offsetWidth / 2 + 4, (d = l.start[1] > l.end[1] ? l.end[1] : l.start[1]) > l.m2[1] && (d = l.m2[1]), d > l.m1[1] && (d = l.m1[1]), this.$lineDom[e].childNodes[1].style.top = (l.m2[1] + l.m1[1]) / 2 - d - this.$lineDom[e].childNodes[1].offsetHeight / 2 - 4
            } else this.$lineDom[e].childNodes[2].textContent = this.$lineData[e].name;
            this.$editable && (this.$lineData[e].alt = !0), !o && this.$navMap && this.refreshMap()
        }, delLine: function (e, t, i, n) {
            if (this.$lineData[e] && (!1 === t || "function" != typeof this.onItemDel || !1 !== this.onItemDel(e, "line"))) {
                if (this.$undoStack && !i) {
                    var o = [e, this.$lineData[e]];
                    this.pushOper("addLine", o)
                }
                this.$draw.removeChild(this.$lineDom[e]), delete this.$lineData[e], delete this.$lineDom[e], this.$focus === e && (this.$focus = ""), --this.$lineCount, this.$editable && (this.$deletedItem[e] = "line", this.$mpFrom.hide().removeData("p"), this.$mpTo.hide().removeData("p")), this.$lineOper && this.$lineOper.hide().removeData("tid"), !n && this.$navMap && this.refreshMap()
            }
        }, moveLinePoints: function (e, t, i, n) {
            if (t !== i && e && this.$lineData[e]) {
                for (var o in null != t && "" !== t || (t = this.$lineData[e].from), null != i && "" !== i || (i = this.$lineData[e].to), this.$lineData) if (t === this.$lineData[o].from && i === this.$lineData[o].to) return;
                if ("function" != typeof this.onLinePointMove || !1 !== this.onLinePointMove(e, t, i)) {
                    if (this.$undoStack && !n) {
                        var r = [e, this.$lineData[e].from, this.$lineData[e].to];
                        this.pushOper("moveLinePoints", r)
                    }
                    null != t && "" !== t && (this.$lineData[e].from = t), null != i && "" !== i && (this.$lineData[e].to = i), this.$draw.removeChild(this.$lineDom[e]), this._addLineDom(e, this.$lineData[e]), this.$editable && (this.$lineData[e].alt = !0), this.$navMap && this.refreshMap()
                }
            }
        }, setExtra: function (e) {
            if ("object" == typeof e) for (var t in e) this.$extra[t] = e[t]
        }, getExtra: function () {
            return this.$extra
        }, loadData: function (e) {
            for (var t in this.clearData(), e.title && this.setTitle(e.title), this.$max = "undefined" == typeof e.initNum ? 1 : e.initNum, e.nodes) this.addNode(t, e.nodes[t], !1, !0, !0);
            for (var i in e.lines) this.addLine(i, e.lines[i], !1, !0, !0);
            if (null != this.$group) for (var n in e.areas) this.addArea(n, e.areas[n], !1, !0, !0);
            if (null != this.$paper) for (var o in e.memos) this.addMemo(o, e.memos[o], !1, !0, !0);
            this.$deletedItem = {}, this.$extra = e.extra;
            var r = this._buildWorkSize();
            this.$workArea.css({
                height: r.height + "px",
                width: r.width + "px"
            }), this.$alignV && this.$alignV.css({width: r.width + "px"}), this.$alignH && this.$alignH.css({height: r.height + "px"}), "" === E.prototype.useSVG && (this.$draw.coordsize = r.width + "," + r.height), this.$navMap && this.refreshMap()
        }, loadDataAjax: function (n) {
            var t = this;
            T.ajax({
                type: n.type,
                url: n.url + "?" + (new Date).getTime(),
                dataType: "json",
                data: n.data,
                success: function (e) {
                    n.dataFilter && n.dataFilter(e, "json"), t.loadData(e), n.success && n.success(e)
                },
                error: function (e, t, i) {
                    n.error && n.error(t, i)
                }
            })
        }, exportData: function () {
            var e = {title: this.$title, nodes: {}, lines: {}};
            for (var t in e.initNum = this.$max, this.$nodeData) this.$nodeData[t].marked || delete this.$nodeData[t].marked, e.nodes[t] = JSON.parse(JSON.stringify(this.$nodeData[t]));
            for (var i in this.$lineData) this.$lineData[i].marked || delete this.$lineData[i].marked, e.lines[i] = JSON.parse(JSON.stringify(this.$lineData[i]));
            if (null != this.$group) for (var n in e.areas = {}, this.$areaData) e.areas[n] = JSON.parse(JSON.stringify(this.$areaData[n]));
            if (null != this.$paper) for (var o in e.memos = {}, this.$memoData) e.memos[o] = JSON.parse(JSON.stringify(this.$memoData[o]));
            for (var r in e.extra = {}, this.$extra) e.extra[r] = JSON.parse(JSON.stringify(this.$extra[r]));
            return e
        }, exportAlter: function () {
            var e = {nodes: {}, lines: {}, areas: {}, memos: {}};
            for (var t in this.$nodeData) this.$nodeData[t].alt && (e.nodes[t] = this.$nodeData[t]);
            for (var i in this.$lineData) this.$lineData[i].alt && (e.lines[i] = this.$lineData[i]);
            if (null != this.$group) for (var n in this.$areaData) this.$areaData[n].alt && (e.areas[n] = this.$areaData[n]);
            if (null != this.$paper) for (var o in this.$memoData) this.$memoData[o].alt && (e.memos[o] = this.$memoData[o]);
            return e.deletedItem = this.$deletedItem, e
        }, transNewId: function (e, t, i) {
            var n;
            switch (i) {
                case"node":
                    this.$nodeData[e] && (n = this.$nodeData[e], delete this.$nodeData[e], this.$nodeData[t] = n, n = this.$nodeDom[e].attr("id", t), delete this.$nodeDom[e], this.$nodeDom[t] = n);
                    break;
                case"line":
                    this.$lineData[e] && (n = this.$lineData[e], delete this.$lineData[e], this.$lineData[t] = n, n = this.$lineDom[e].attr("id", t), delete this.$lineDom[e], this.$lineDom[t] = n);
                    break;
                case"area":
                    if (this.$areaData[e]) for (var o in n = this.$areaData[e], delete this.$areaData[e], this.$areaData[t] = n, n = this.$areaDom[e].attr("id", t), delete this.$areaDom[e], this.$areaDom[t] = n, this.$nodeData) (n = this.$nodeData[o]).areaId === e && (this.$nodeData[o].areaId = t);
                    break;
                case"memo":
                    this.$memoData[e] && (n = this.$memoData[e], delete this.$memoData[e], this.$memoData[t] = n, n = this.$memoDom[e].attr("id", t), delete this.$memoDom[e], this.$memoDom[t] = n)
            }
            e !== this.$focus || "node" !== i && "line" !== i || (this.$focus = t)
        }, clearData: function () {
            for (var e in this.$nodeData) this.delNode(e, !1, !1, !0);
            for (var t in this.$lineData) this.delLine(t, !1, !1, !0);
            for (var i in this.$areaData) this.delArea(i, !1, !1, !0);
            for (var n in this.$memoData) this.delMemo(n, !1, !1, !0);
            for (var o in this.$extra) delete this.$extra[o];
            this.$max = 1, this.$deletedItem = {}, this.$navMap && this.refreshMap()
        }, destrory: function () {
            this.$bgDiv.empty(), this.$lineData = null, this.$nodeData = null, this.$lineDom = null, this.$nodeDom = null, this.$lineCount = 0, this.$nodeCount = 0, this.$deletedItem = {}, null != this.$paper && (this.$memoData = null, this.$memoDom = null, this.$memoCount = 0), null != this.$group && (this.$areaData = null, this.$areaDom = null, this.$areaCount = 0), this.$navMap && this.$navMap.empty()
        }, reinitSize: function (e, t) {
            var i = e || this.$bgDiv.width(), n = t || this.$bgDiv.height();
            this.$bgDiv.css({height: n + "px", width: i + "px"});
            var o = 0, r = 8;
            null != this.$head && (o = 26, r = 7), null != this.$tool && (this.$tool.css({height: n - o - r + "px"}), i -= 31), i -= 9, n = n - o - (null != this.$head ? 5 : 8), this.$workArea.width() > i && (i = this.$workArea.width()), this.$workArea.height() > n && (n = this.$workArea.height()), this.$workArea.css({
                height: n + "px",
                width: i + "px"
            }), this.$alignV && this.$alignV.css({width: i + "px"}), this.$alignH && this.$alignH.css({height: n + "px"}), "" === E.prototype.useSVG && (this.$draw.coordsize = i + "," + n), this.$navMap && this.refreshMap()
        }, resetScale: function (r) {
            if (r ? r < .5 ? r = .5 : 4 < r && (r = 4) : r = 1, this.$scale !== r) {
                var s = this.$scale / (this.$scale = r), a = 0, l = 0, d = {};
                this.blurItem();
                var e = this._suitSize();
                a = e.width + this.$workExtendStep, l = e.height + this.$workExtendStep, a < this.$workArea.parent().width() && (a = this.$workArea.parent().width()), l < this.$workArea.parent().height() && (l = this.$workArea.parent().height()), this.$workArea.css({
                    height: l + "px",
                    width: a + "px"
                }), this.$alignV && this.$alignV.css({width: a + "px"}), this.$alignH && this.$alignH.css({height: l + "px"}), "" === E.prototype.useSVG && (this.$draw.coordsize = a + "," + l);
                var n = this, h = -1 < navigator.userAgent.toLowerCase().indexOf("webkit");
                this.$workArea.children(".GooFlow_item").each(function () {
                    var e = T(this), t = n.getItemInfo(e.attr("id"), "node");
                    e.css({
                        left: t.left * r + "px",
                        top: t.top * r + "px"
                    }), n._scaleNode(e, t, h), a = t.width * r, l = t.height * r;
                    var i = e.hasClass("item_custom");
                    (e = e.children("table")).css({width: a - (i ? 0 : 2) + "px", height: l - (i ? 0 : 2) + "px"})
                });
                var t = 16 * r + 2;
                for (var i in null != this.$group && this.$group.children(".GooFlow_area").each(function () {
                    var e = T(this);
                    d = e.position(), e.css({
                        left: d.left / s + "px",
                        top: d.top / s + "px"
                    }), e = e.children("div:eq(0)"), a = e.outerWidth() / s, l = e.outerHeight() / s, e.css({
                        width: a + "px",
                        height: l + "px"
                    }), e.next("label").css({
                        "font-size": 14 * r + "px",
                        left: t + 3 + "px"
                    }).next("i").css({
                        "font-size": t - 2 + "px",
                        width: t + "px",
                        height: t + "px",
                        "line-height": t + "px"
                    })
                }), null != this.$paper && this.$paper.children(".GooFlow_memo").each(function () {
                    var e = T(this), t = 12 * r;
                    d = e.position(), e.css({
                        left: d.left / s + "px",
                        top: d.top / s + "px"
                    }), e = e.children("div:eq(0)"), a = e.outerWidth() / s, l = e.outerHeight() / s, e.css({
                        width: a + "px",
                        height: l + "px"
                    }), e.css({padding: 9 * r + "px"}).children().css({"font-size": 12 * r + "px"});
                    var i = {};
                    if (t < 12 && h) {
                        i.transform = "scale(" + t / 12 + ")";
                        var n = (a - a * r) / 2, o = (l - l * r) / 2;
                        i.margin = -o + "px " + -n + "px"
                    } else i.transform = "none", i["min-height"] = 34 * r + "px", i.margin = "0px";
                    e.children().css(i)
                }), this.$lineDom) this.$draw.removeChild(this.$lineDom[i]), delete this.$lineDom[i];
                for (var o in this.$lineData) this._addLineDom(o, this.$lineData[o]);
                this.$navMap && this.refreshMap(), "undefined" == typeof this._tmpScaleValue && (this._tmpScaleValue = T('<div id="' + this.$id + '_scaleValue" style="width:360px;height:120px;line-height:100%;position:absolute;margin:-60px 0 0 -' + (180 - (null == this.$tool ? 0 : this.$tool.width())) + 'px;top:50%;left:50%;text-align:center;font-weight:bold;color:rgba(0,0,0,.1);font-size:120px !important;"></div>'), this.$bgDiv.append(this._tmpScaleValue)), this._tmpScaleValue.show().text(Math.round(1e4 * this.$scale) / 100 + "%"), this._tmpTimeout && (clearTimeout(this._tmpTimeout), delete this._tmpTimeout);
                var c = this;
                this._tmpTimeout = setTimeout(function () {
                    c._tmpScaleValue.hide()
                }, 600)
            }
        }
    }, E.extend = function (e) {
        for (var t in e) E.prototype[t] = e[t]
    }, E.init = function (e, t) {
        return new E(e, t)
    }, E.setColors = function (e) {
        T.extend(E.color, e)
    }, T.extend({
        createGooFlow: function (e, t) {
            return new E(e, t)
        }
    }), E
}), function (e, t) {
    "use strict";
    "undefined" != typeof define && define.amd ? define(["jquery", "GooFlow"], t) : "undefined" != typeof module && module.exports ? t(require("jquery"), require("GooFlow")) : t(e.$, e.GooFlow)
}("undefined" != typeof window ? window : this, function (d, a) {
    "function" != typeof a.prototype._initGroup && (a.prototype.$areaData = {}, a.prototype.$areaCount = 0, a.prototype.$areaDom = {}, a.prototype._initGroup = function () {
        this.$group = d('<div class="GooFlow_work_group" style="width:100%;height:100%"></div>'), this.$workArea.prepend(this.$group), this.$editable && (this.$group.on("contextmenu", ".GooFlow_area", {inthis: this}, function (e) {
            var t = e.data.inthis;
            if ("function" == typeof t.onItemRightClick && !1 === t.onItemRightClick(this.id, "area")) return window.event ? window.event.returnValue = !1 : e.preventDefault(), !1
        }), this.$group.on("mousedown", {inthis: this}, function (e) {
            if (2 === e.button) return !1;
            var a = e.data.inthis;
            if ("group" === a.$nowType && "none" === a.$textArea.css("display") && (e || (e = window.event), "LABEL" !== e.target.tagName && "I" !== e.target.tagName)) {
                var t = d(e.target).css("cursor"), l = e.target.parentNode;
                switch (t) {
                    case"nw-resize":
                    case"w-resize":
                    case"n-resize":
                        l = l.parentNode;
                        break;
                    case"move":
                        break;
                    default:
                        return
                }
                l = l.id, Goo.draw(), a.$ghost.css("cursor", t);
                var i = a.$areaData[l];
                return e.id = l, a._bindMoveEvent(e, i, function (e, t, i, n, o, r, s) {
                    e && ("move" !== i ? a.resizeArea(l, r, s) : a.moveArea(l, n, o))
                }, t, 200, 100), !1
            }
        }), setTimeout(function () {
            try {
                Goo.draw()
            } catch (e) {
                document.write()
            }
        }, 1e4), this.$group.on("dblclick", {inthis: this}, function (e) {
            var t = e.data.inthis;
            if ("group" === t.$nowType) {
                if (e || (e = window.event), "LABEL" !== e.target.tagName) return !1;
                var i = e.target.parentNode;
                if ("function" != typeof t.onItemDbClick || !1 !== t.onItemDbClick(i.id, "area")) {
                    var n = e.target.innerHTML, o = parseInt(i.style.left, 10) + 18, r = parseInt(i.style.top, 10) + 1,
                        s = t.t;
                    return t.$textArea.val(n).css({
                        display: "block",
                        width: 130,
                        height: 26,
                        left: s.left + o - t.$workArea[0].parentNode.scrollLeft,
                        top: s.top + r - t.$workArea[0].parentNode.scrollTop
                    }).data("id", i.id).focus(), t.$workArea.parent().one("mouseup", function (e) {
                        return 2 === e.button || "block" === t.$textArea.css("display") && (t.setName(t.$textArea.data("id"), t.$textArea.val(), "area"), t.$textArea.val("").removeData("id").hide()), !1
                    }), !1
                }
            }
        }), this.$group.mouseup({inthis: this}, function (e) {
            var t = e.data.inthis;
            if ("block" === t.$textArea.css("display")) return t.setName(t.$textArea.data("id"), t.$textArea.val(), "area"), void t.$textArea.val("").removeData("id").hide();
            if ("group" === t.$nowType) {
                switch (e || (e = window.event), d(e.target).attr("class")) {
                    case"rs_close":
                        return t.delArea(e.target.parentNode.parentNode.id), !1;
                    case"bg":
                        return
                }
                switch (e.target.tagName) {
                    case"LABEL":
                        return !1;
                    case"I":
                        var i = e.target.parentNode.id;
                        switch (t.$areaData[i].color) {
                            case"red":
                                t.setAreaColor(i, "yellow");
                                break;
                            case"yellow":
                                t.setAreaColor(i, "blue");
                                break;
                            case"blue":
                                t.setAreaColor(i, "green");
                                break;
                            case"green":
                                t.setAreaColor(i, "milk");
                                break;
                            case"milk":
                                t.setAreaColor(i, "red")
                        }
                        return !1
                }
                if (!t.$dragAddOper && "none" === e.data.inthis.$ghost.css("display")) {
                    if (2 === e.button) return !1;
                    var n, o, r = a._mouseP(e), s = a._elCsys(this);
                    return n = r.x - s.left + this.parentNode.parentNode.scrollLeft, o = r.y - s.top + this.parentNode.parentNode.scrollTop, t.addArea((new Date).getTime(), {
                        name: t.$areaPrefix + e.data.inthis.$max,
                        left: n / t.$scale,
                        top: o / t.$scale,
                        color: ["red", "yellow", "blue", "green", "milk"][t.$max % 5],
                        width: 200,
                        height: 100
                    }), t.$max++, !1
                }
            }
        }))
    }, a.prototype._areaFixNodes = function (e) {
        var t = this.$areaData[e];
        for (var i in this.$nodeData) {
            var n = this.$nodeData[i];
            n.left >= t.left && n.left < t.left + t.width && n.top >= t.top && n.top < t.top + t.height ? n.areaId = e : n.areaId && n.areaId === e && this._node2Area(i)
        }
    }, a.prototype.addArea = function (e, t, i, n, o) {
        if (!1 === i || "function" != typeof this.onItemAdd || !1 !== this.onItemAdd(e, "area", t)) {
            if (this.$undoStack && !n && this.$editable && this.pushOper("delArea", [e]), this.$areaDom[e] = d("<div id='" + e + "' class='GooFlow_area area_" + t.color + "' style='top:" + t.top * this.$scale + "px;left:" + t.left * this.$scale + "px'><div class='bg' style='width:" + t.width * this.$scale + "px;height:" + t.height * this.$scale + "px'></div><label>" + t.name + "</label><i></i>" + (this.$editable ? "<div><div class='rs_bottom'></div><div class='rs_right'></div><div class='rs_rb'></div><div class='rs_close'></div></div>" : "") + "</div>"), this.$areaData[e] = t, this.$group.append(this.$areaDom[e]), 1 !== this.$scale) {
                var r = 16 * this.$scale + 2;
                this.$areaDom[e].find("label").css({
                    "font-size": 14 * this.$scale + "px",
                    left: r + 3 + "px"
                }).next("i").css({
                    "font-size": r - 2 + "px",
                    width: r + "px",
                    height: r + "px",
                    "line-height": r + "px"
                })
            }
            "group" !== this.$nowType && this.$areaDom[e].children("div:eq(1)").css("display", "none"), ++this.$areaCount, this.$editable && (this.$areaData[e].alt = !0, this._areaFixNodes(e), this.$deletedItem[e] && delete this.$deletedItem[e]), !o && this.$navMap && this.refreshMap()
        }
    }, a.prototype.moveArea = function (e, t, i) {
        if (this.$areaData[e] && (null == this.onItemMove || this.onItemMove(e, "area", t, i))) {
            if (this.$undoStack) {
                var n = [e, this.$areaData[e].left, this.$areaData[e].top];
                this.pushOper("moveArea", n)
            }
            t < 0 && (t = 0), i < 0 && (i = 0), d("#" + e).css({
                left: t * this.$scale + "px",
                top: i * this.$scale + "px"
            }), this.$areaData[e].left = t, this.$areaData[e].top = i, this.$editable && (this.$areaData[e].alt = !0, this._areaFixNodes(e)), this.$navMap && this.refreshMap()
        }
    }, a.prototype.delArea = function (e, t, i, n) {
        if (this.$areaData[e] && (!1 === t || "function" != typeof this.onItemDel || !1 !== this.onItemDel(e, "area"))) {
            if (this.$undoStack && !i) {
                var o = [e, this.$areaData[e]];
                this.pushOper("addArea", o)
            }
            if (delete this.$areaData[e], this.$areaDom[e].remove(), delete this.$areaDom[e], --this.$areaCount, this.$editable) {
                for (var r in this.$nodeData) {
                    var s = this.$nodeData[r];
                    s.areaId === e && delete s.areaId
                }
                this.$deletedItem[e] = "area"
            }
            !n && this.$navMap && this.refreshMap()
        }
    }, a.prototype.setAreaColor = function (e, t) {
        if (this.$areaData[e] && ("red" === t || "yellow" === t || "blue" === t || "green" === t || "milk" === t)) {
            if (this.$undoStack) {
                var i = [e, this.$areaData[e].color];
                this.pushOper("setAreaColor", i)
            }
            this.$areaDom[e].removeClass("area_" + this.$areaData[e].color).addClass("area_" + t), this.$areaData[e].color = t, this.$editable && (this.$areaData[e].alt = !0), this.$navMap && this.refreshMap()
        }
    }, a.prototype.resizeArea = function (e, t, i) {
        if (this.$areaData[e] && ("function" != typeof this.onItemResize || !1 !== this.onItemResize(e, "area", t, i))) {
            if (this.$undoStack) {
                var n = [e, this.$areaData[e].width, this.$areaData[e].height];
                this.pushOper("resizeArea", n)
            }
            Goo.draw(), this.$areaDom[e].children(".bg").css({
                width: t * this.$scale + "px",
                height: i * this.$scale + "px"
            }), t = this.$areaDom[e].outerWidth(), i = this.$areaDom[e].outerHeight(), this.$areaDom[e].children("bg").css({
                width: t + "px",
                height: i + "px"
            }), this.$areaData[e].width = t, this.$areaData[e].height = i, this.$editable && (this.$areaData[e].alt = !0, this._areaFixNodes(e)), this.$navMap && this.refreshMap()
        }
    })
}), GooFlow.color = {
    main: "#20A0FF",
    font: "#15428B",
    node: "#C0CCDA",
    line: "#1D8CE0",
    lineFont: "#ff6600",
    mark: "#ff8800",
    mix: "#B6F700",
    mixFont: "#777"
}, GooFlow.remarks.toolBtns = {
    cursor: "选择指针",
    multi: "多选",
    direct: "有向连线",
    dirDashed: "有向虚线",
    segment: "无向连线",
    segDashed: "无向虚线",
    start: "入口结点",
    end: "结束结点",
    task: "任务结点",
    node: "自动结点",
    chat: "决策结点",
    state: "状态结点",
    plug: "附加插件",
    fork: "分支结点",
    join: "联合结点",
    complex: "复合结点",
    group: "区域编辑开关",
    memo: "添加便笺"
}, GooFlow.remarks.headBtns = {
    "new": "新建流程",
    open: "打开流程",
    save: "保存结果",
    undo: "撤销",
    redo: "重做",
    reload: "刷新流程",
    print: "打印流程图"
}, GooFlow.remarks.extendRight = "工作区向右扩展", GooFlow.remarks.extendBottom = "工作区向下扩展";
var auth = "no auth", jsondata = {
    title: "手机上网套餐办理", nodes: {
        demo_node_1: {name: "子树入口", left: 295, top: 0, type: "start round", width: 24, height: 24},
        demo_node_2: {name: "广告语", left: 256, top: 79, type: "state", width: 86, height: 24},
        demo_node_3: {name: "菜单", left: 265, top: 146, type: "join", width: 86, height: 24},
        demo_node_7: {name: "流量叠加包", left: 433, top: 149, type: "join", width: 109, height: 24},
        demo_node_8: {name: "手机上网套餐", left: 247, top: 246, type: "join", width: 117, height: 25},
        demo_node_9: {name: "夜猫套餐", left: 64, top: 253, type: "join", width: 86, height: 24},
        demo_node_15: {name: "套餐及上网流量剩余查询", left: 93, top: 140, type: "node", width: 119, height: 36},
        demo_node_17: {name: "10元夜猫", left: 106, top: 358, type: "node", width: 86, height: 24},
        demo_node_18: {name: "5元夜猫", left: 2, top: 363, type: "node", width: 86, height: 24},
        demo_node_21: {name: "2元叠加包", left: 591, top: 2, type: "node", width: 86, height: 24},
        demo_node_22: {name: "5元叠加包", left: 598, top: 45, type: "node", width: 86, height: 24},
        demo_node_23: {name: "10元叠加包", left: 603, top: 102, type: "node", width: 102, height: 24},
        demo_node_24: {name: "20元叠加包", left: 606, top: 147, type: "node", width: 106, height: 24},
        demo_node_25: {name: "30元叠加包", left: 597, top: 224, type: "node", width: 113, height: 24},
        demo_node_26: {name: "5元套餐", left: 87, top: 448, type: "node", width: 86, height: 24},
        demo_node_27: {name: "8元套餐", left: 210, top: 405, type: "node", width: 86, height: 24},
        demo_node_28: {name: "10元套餐", left: 272, top: 451, type: "node", width: 91, height: 24},
        demo_node_29: {name: "20元套餐", left: 341, top: 412, type: "node", width: 91, height: 24},
        demo_node_30: {name: "30元套餐", left: 460, top: 437, type: "node", width: 91, height: 24},
        demo_node_31: {name: "50元套餐", left: 580, top: 464, type: "node", width: 92, height: 24},
        demo_node_32: {name: "GPRS功能办理", left: 683, top: 464, type: "node", width: 130, height: 24}
    }, lines: {
        demo_line_4: {type: "sl", from: "demo_node_1", to: "demo_node_2", name: ""},
        demo_line_5: {type: "sl", from: "demo_node_2", to: "demo_node_3", name: ""},
        demo_line_11: {type: "sl", from: "demo_node_3", to: "demo_node_7", name: "2"},
        demo_line_12: {type: "sl", from: "demo_node_3", to: "demo_node_8", name: "1"},
        demo_line_13: {type: "sl", from: "demo_node_3", to: "demo_node_9", name: "3"},
        demo_line_16: {type: "sl", from: "demo_node_3", to: "demo_node_15", name: "4"},
        demo_line_19: {type: "sl", from: "demo_node_9", to: "demo_node_17", name: "2"},
        demo_line_20: {type: "sl", from: "demo_node_9", to: "demo_node_18", name: "1"},
        demo_line_33: {type: "sl", from: "demo_node_7", to: "demo_node_21", name: "1"},
        demo_line_34: {type: "sl", from: "demo_node_7", to: "demo_node_22", name: "2"},
        demo_line_35: {type: "sl", from: "demo_node_7", to: "demo_node_23", name: "3"},
        demo_line_36: {type: "sl", from: "demo_node_7", to: "demo_node_24", name: "4"},
        demo_line_37: {type: "sl", from: "demo_node_7", to: "demo_node_25", name: "5"},
        demo_line_39: {type: "sl", from: "demo_node_8", to: "demo_node_26", name: "1"},
        demo_line_42: {type: "sl", from: "demo_node_8", to: "demo_node_29", name: "4"},
        demo_line_43: {type: "sl", from: "demo_node_8", to: "demo_node_30", name: "5"},
        demo_line_44: {type: "sl", from: "demo_node_8", to: "demo_node_31", name: "6"},
        demo_line_45: {type: "sl", from: "demo_node_8", to: "demo_node_32", name: "7"},
        demo_line_46: {type: "sl", from: "demo_node_8", to: "demo_node_27", name: "2"},
        demo_line_47: {type: "sl", from: "demo_node_8", to: "demo_node_28", name: "3"}
    }, areas: {}, initNum: 48
};