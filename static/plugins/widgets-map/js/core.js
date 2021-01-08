if (function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";
    var i = [],
        n = t.document,
        s = Object.getPrototypeOf,
        o = i.slice,
        a = i.concat,
        r = i.push,
        l = i.indexOf,
        h = {},
        c = h.toString,
        d = h.hasOwnProperty,
        u = d.toString,
        p = u.call(Object),
        f = {};

    function g(t, e) {
        var i = (e = e || n).createElement("script");
        i.text = t, e.head.appendChild(i).parentNode.removeChild(i)
    }
    var m = "3.2.1",
        v = function(t, e) {
            return new v.fn.init(t, e)
        },
        y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        b = /^-ms-/,
        w = /-([a-z])/g,
        x = function(t, e) {
            return e.toUpperCase()
        };

    function S(t) {
        var e = !!t && "length" in t && t.length,
            i = v.type(t);
        return "function" !== i && !v.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    v.fn = v.prototype = {
        jquery: m,
        constructor: v,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(t) {
            return null == t ? o.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = v.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function(t) {
            return v.each(this, t)
        },
        map: function(t) {
            return this.pushStack(v.map(this, function(e, i) {
                return t.call(e, i, e)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: r,
        sort: i.sort,
        splice: i.splice
    }, v.extend = v.fn.extend = function() {
        var t, e, i, n, s, o, a = arguments[0] || {},
            r = 1,
            l = arguments.length,
            h = !1;
        for ("boolean" == typeof a && (h = a, a = arguments[r] || {}, r++), "object" == typeof a || v.isFunction(a) || (a = {}), r === l && (a = this, r--); r < l; r++)
            if (null != (t = arguments[r]))
                for (e in t) i = a[e], a !== (n = t[e]) && (h && n && (v.isPlainObject(n) || (s = Array.isArray(n))) ? (s ? (s = !1, o = i && Array.isArray(i) ? i : []) : o = i && v.isPlainObject(i) ? i : {}, a[e] = v.extend(h, o, n)) : void 0 !== n && (a[e] = n));
        return a
    }, v.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === v.type(t)
        },
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = v.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        },
        isPlainObject: function(t) {
            var e, i;
            return !(!t || "[object Object]" !== c.call(t) || (e = s(t)) && (i = d.call(e, "constructor") && e.constructor, "function" != typeof i || u.call(i) !== p))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? h[c.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            g(t)
        },
        camelCase: function(t) {
            return t.replace(b, "ms-").replace(w, x)
        },
        each: function(t, e) {
            var i, n = 0;
            if (S(t))
                for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(y, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (S(Object(t)) ? v.merge(i, "string" == typeof t ? [t] : t) : r.call(i, t)), i
        },
        inArray: function(t, e, i) {
            return null == e ? -1 : l.call(e, t, i)
        },
        merge: function(t, e) {
            for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
            return t.length = s, t
        },
        grep: function(t, e, i) {
            for (var n = [], s = 0, o = t.length, a = !i; s < o; s++) !e(t[s], s) !== a && n.push(t[s]);
            return n
        },
        map: function(t, e, i) {
            var n, s, o = 0,
                r = [];
            if (S(t))
                for (n = t.length; o < n; o++) null != (s = e(t[o], o, i)) && r.push(s);
            else
                for (o in t) null != (s = e(t[o], o, i)) && r.push(s);
            return a.apply([], r)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            if ("string" == typeof e && (i = t[e], e = t, t = i), v.isFunction(t)) return n = o.call(arguments, 2), (s = function() {
                return t.apply(e || this, n.concat(o.call(arguments)))
            }).guid = t.guid = t.guid || v.guid++, s
        },
        now: Date.now,
        support: f
    }), "function" == typeof Symbol && (v.fn[Symbol.iterator] = i[Symbol.iterator]), v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        h["[object " + e + "]"] = e.toLowerCase()
    });
    var k = function(t) {
        var e, i, n, s, o, a, r, l, h, c, d, u, p, f, g, m, v, y, b, w = "sizzle" + 1 * new Date,
            x = t.document,
            S = 0,
            k = 0,
            D = at(),
            C = at(),
            T = at(),
            _ = function(t, e) {
                return t === e && (d = !0), 0
            },
            M = {}.hasOwnProperty,
            A = [],
            P = A.pop,
            O = A.push,
            I = A.push,
            N = A.slice,
            $ = function(t, e) {
                for (var i = 0, n = t.length; i < n; i++)
                    if (t[i] === e) return i;
                return -1
            },
            E = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            F = "[\\x20\\t\\r\\n\\f]",
            j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            L = "\\[" + F + "*(" + j + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + F + "*\\]",
            z = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + L + ")*)|.*)\\)|)",
            H = new RegExp(F + "+", "g"),
            R = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
            W = new RegExp("^" + F + "*," + F + "*"),
            U = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
            J = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
            B = new RegExp(z),
            V = new RegExp("^" + j + "$"),
            q = {
                ID: new RegExp("^#(" + j + ")"),
                CLASS: new RegExp("^\\.(" + j + ")"),
                TAG: new RegExp("^(" + j + "|[*])"),
                ATTR: new RegExp("^" + L),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + E + ")$", "i"),
                needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
            tt = function(t, e, i) {
                var n = "0x" + e - 65536;
                return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            it = function(t, e) {
                return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            nt = function() {
                u()
            },
            st = yt(function(t) {
                return !0 === t.disabled && ("form" in t || "label" in t)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            I.apply(A = N.call(x.childNodes), x.childNodes), A[x.childNodes.length].nodeType
        } catch (t) {
            I = {
                apply: A.length ? function(t, e) {
                    O.apply(t, N.call(e))
                } : function(t, e) {
                    for (var i = t.length, n = 0; t[i++] = e[n++];);
                    t.length = i - 1
                }
            }
        }

        function ot(t, e, n, s) {
            var o, r, h, c, d, f, v, y = e && e.ownerDocument,
                S = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== S && 9 !== S && 11 !== S) return n;
            if (!s && ((e ? e.ownerDocument || e : x) !== p && u(e), e = e || p, g)) {
                if (11 !== S && (d = X.exec(t)))
                    if (o = d[1]) {
                        if (9 === S) {
                            if (!(h = e.getElementById(o))) return n;
                            if (h.id === o) return n.push(h), n
                        } else if (y && (h = y.getElementById(o)) && b(e, h) && h.id === o) return n.push(h), n
                    } else {
                        if (d[2]) return I.apply(n, e.getElementsByTagName(t)), n;
                        if ((o = d[3]) && i.getElementsByClassName && e.getElementsByClassName) return I.apply(n, e.getElementsByClassName(o)), n
                    } if (i.qsa && !T[t + " "] && (!m || !m.test(t))) {
                    if (1 !== S) y = e, v = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((c = e.getAttribute("id")) ? c = c.replace(et, it) : e.setAttribute("id", c = w), r = (f = a(t)).length; r--;) f[r] = "#" + c + " " + vt(f[r]);
                        v = f.join(","), y = K.test(t) && gt(e.parentNode) || e
                    }
                    if (v) try {
                        return I.apply(n, y.querySelectorAll(v)), n
                    } catch (t) {} finally {
                        c === w && e.removeAttribute("id")
                    }
                }
            }
            return l(t.replace(R, "$1"), e, n, s)
        }

        function at() {
            var t = [];
            return function e(i, s) {
                return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = s
            }
        }

        function rt(t) {
            return t[w] = !0, t
        }

        function lt(t) {
            var e = p.createElement("fieldset");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function ht(t, e) {
            for (var i = t.split("|"), s = i.length; s--;) n.attrHandle[i[s]] = e
        }

        function ct(t, e) {
            var i = e && t,
                n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === e) return -1;
            return t ? 1 : -1
        }

        function dt(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function ut(t) {
            return function(e) {
                var i = e.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && e.type === t
            }
        }

        function pt(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && st(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ft(t) {
            return rt(function(e) {
                return e = +e, rt(function(i, n) {
                    for (var s, o = t([], i.length, e), a = o.length; a--;) i[s = o[a]] && (i[s] = !(n[s] = i[s]))
                })
            })
        }

        function gt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (e in i = ot.support = {}, o = ot.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, u = ot.setDocument = function(t) {
                var e, s, a = t ? t.ownerDocument || t : x;
                return a !== p && 9 === a.nodeType && a.documentElement ? (f = (p = a).documentElement, g = !o(p), x !== p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", nt, !1) : s.attachEvent && s.attachEvent("onunload", nt)), i.attributes = lt(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), i.getElementsByTagName = lt(function(t) {
                    return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
                }), i.getElementsByClassName = Q.test(p.getElementsByClassName), i.getById = lt(function(t) {
                    return f.appendChild(t).id = w, !p.getElementsByName || !p.getElementsByName(w).length
                }), i.getById ? (n.filter.ID = function(t) {
                    var e = t.replace(Z, tt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }, n.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && g) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }) : (n.filter.ID = function(t) {
                    var e = t.replace(Z, tt);
                    return function(t) {
                        var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }, n.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && g) {
                        var i, n, s, o = e.getElementById(t);
                        if (o) {
                            if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
                            for (s = e.getElementsByName(t), n = 0; o = s[n++];)
                                if ((i = o.getAttributeNode("id")) && i.value === t) return [o]
                        }
                        return []
                    }
                }), n.find.TAG = i.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        s = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, n.find.CLASS = i.getElementsByClassName && function(t, e) {
                    if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                }, v = [], m = [], (i.qsa = Q.test(p.querySelectorAll)) && (lt(function(t) {
                    f.appendChild(t).innerHTML = "<a id='" + w + "'></a><selects id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></selects>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + E + ")"), t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                }), lt(function(t) {
                    t.innerHTML = "<a href='' disabled='disabled'></a><selects disabled='disabled'><option/></selects>";
                    var e = p.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                })), (i.matchesSelector = Q.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && lt(function(t) {
                    i.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", z)
                }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = Q.test(f.compareDocumentPosition), b = e || Q.test(f.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, _ = e ? function(t, e) {
                    if (t === e) return d = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === p || t.ownerDocument === x && b(x, t) ? -1 : e === p || e.ownerDocument === x && b(x, e) ? 1 : c ? $(c, t) - $(c, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return d = !0, 0;
                    var i, n = 0,
                        s = t.parentNode,
                        o = e.parentNode,
                        a = [t],
                        r = [e];
                    if (!s || !o) return t === p ? -1 : e === p ? 1 : s ? -1 : o ? 1 : c ? $(c, t) - $(c, e) : 0;
                    if (s === o) return ct(t, e);
                    for (i = t; i = i.parentNode;) a.unshift(i);
                    for (i = e; i = i.parentNode;) r.unshift(i);
                    for (; a[n] === r[n];) n++;
                    return n ? ct(a[n], r[n]) : a[n] === x ? -1 : r[n] === x ? 1 : 0
                }, p) : p
            }, ot.matches = function(t, e) {
                return ot(t, null, null, e)
            }, ot.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== p && u(t), e = e.replace(J, "='$1']"), i.matchesSelector && g && !T[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                    var n = y.call(t, e);
                    if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (t) {}
                return ot(e, p, null, [t]).length > 0
            }, ot.contains = function(t, e) {
                return (t.ownerDocument || t) !== p && u(t), b(t, e)
            }, ot.attr = function(t, e) {
                (t.ownerDocument || t) !== p && u(t);
                var s = n.attrHandle[e.toLowerCase()],
                    o = s && M.call(n.attrHandle, e.toLowerCase()) ? s(t, e, !g) : void 0;
                return void 0 !== o ? o : i.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
            }, ot.escape = function(t) {
                return (t + "").replace(et, it)
            }, ot.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, ot.uniqueSort = function(t) {
                var e, n = [],
                    s = 0,
                    o = 0;
                if (d = !i.detectDuplicates, c = !i.sortStable && t.slice(0), t.sort(_), d) {
                    for (; e = t[o++];) e === t[o] && (s = n.push(o));
                    for (; s--;) t.splice(n[s], 1)
                }
                return c = null, t
            }, s = ot.getText = function(t) {
                var e, i = "",
                    n = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += s(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[n++];) i += s(e);
                return i
            }, (n = ot.selectors = {
                cacheLength: 50,
                createPseudo: rt,
                match: q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(Z, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(Z, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return q.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && B.test(i) && (e = a(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(Z, tt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = D[t + " "];
                        return e || (e = new RegExp("(^|" + F + ")" + t + "(" + F + "|$)")) && D(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, e, i) {
                        return function(n) {
                            var s = ot.attr(n, t);
                            return null == s ? "!=" === e : !e || (s += "", "=" === e ? s === i : "!=" === e ? s !== i : "^=" === e ? i && 0 === s.indexOf(i) : "*=" === e ? i && s.indexOf(i) > -1 : "$=" === e ? i && s.slice(-i.length) === i : "~=" === e ? (" " + s.replace(H, " ") + " ").indexOf(i) > -1 : "|=" === e && (s === i || s.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, i, n, s) {
                        var o = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            r = "of-type" === e;
                        return 1 === n && 0 === s ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var h, c, d, u, p, f, g = o !== a ? "nextSibling" : "previousSibling",
                                m = e.parentNode,
                                v = r && e.nodeName.toLowerCase(),
                                y = !l && !r,
                                b = !1;
                            if (m) {
                                if (o) {
                                    for (; g;) {
                                        for (u = e; u = u[g];)
                                            if (r ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                        f = g = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (b = (p = (h = (c = (d = (u = m)[w] || (u[w] = {}))[u.uniqueID] || (d[u.uniqueID] = {}))[t] || [])[0] === S && h[1]) && h[2], u = p && m.childNodes[p]; u = ++p && u && u[g] || (b = p = 0) || f.pop();)
                                        if (1 === u.nodeType && ++b && u === e) {
                                            c[t] = [S, p, b];
                                            break
                                        }
                                } else if (y && (b = p = (h = (c = (d = (u = e)[w] || (u[w] = {}))[u.uniqueID] || (d[u.uniqueID] = {}))[t] || [])[0] === S && h[1]), !1 === b)
                                    for (;
                                        (u = ++p && u && u[g] || (b = p = 0) || f.pop()) && ((r ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++b || (y && ((c = (d = u[w] || (u[w] = {}))[u.uniqueID] || (d[u.uniqueID] = {}))[t] = [S, b]), u !== e)););
                                return (b -= s) === n || b % n == 0 && b / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, e) {
                        var i, s = n.pseudos[t] || n.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                        return s[w] ? s(e) : s.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? rt(function(t, i) {
                            for (var n, o = s(t, e), a = o.length; a--;) t[n = $(t, o[a])] = !(i[n] = o[a])
                        }) : function(t) {
                            return s(t, 0, i)
                        }) : s
                    }
                },
                pseudos: {
                    not: rt(function(t) {
                        var e = [],
                            i = [],
                            n = r(t.replace(R, "$1"));
                        return n[w] ? rt(function(t, e, i, s) {
                            for (var o, a = n(t, null, s, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o))
                        }) : function(t, s, o) {
                            return e[0] = t, n(e, null, o, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: rt(function(t) {
                        return function(e) {
                            return ot(t, e).length > 0
                        }
                    }),
                    contains: rt(function(t) {
                        return t = t.replace(Z, tt),
                            function(e) {
                                return (e.textContent || e.innerText || s(e)).indexOf(t) > -1
                            }
                    }),
                    lang: rt(function(t) {
                        return V.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(Z, tt).toLowerCase(),
                            function(e) {
                                var i;
                                do {
                                    if (i = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === f
                    },
                    focus: function(t) {
                        return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: pt(!1),
                    disabled: pt(!0),
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !n.pseudos.empty(t)
                    },
                    header: function(t) {
                        return G.test(t.nodeName)
                    },
                    input: function(t) {
                        return Y.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: ft(function() {
                        return [0]
                    }),
                    last: ft(function(t, e) {
                        return [e - 1]
                    }),
                    eq: ft(function(t, e, i) {
                        return [i < 0 ? i + e : i]
                    }),
                    even: ft(function(t, e) {
                        for (var i = 0; i < e; i += 2) t.push(i);
                        return t
                    }),
                    odd: ft(function(t, e) {
                        for (var i = 1; i < e; i += 2) t.push(i);
                        return t
                    }),
                    lt: ft(function(t, e, i) {
                        for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: ft(function(t, e, i) {
                        for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }).pseudos.nth = n.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) n.pseudos[e] = dt(e);
        for (e in {
                submit: !0,
                reset: !0
            }) n.pseudos[e] = ut(e);

        function mt() {}

        function vt(t) {
            for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
            return n
        }

        function yt(t, e, i) {
            var n = e.dir,
                s = e.next,
                o = s || n,
                a = i && "parentNode" === o,
                r = k++;
            return e.first ? function(e, i, s) {
                for (; e = e[n];)
                    if (1 === e.nodeType || a) return t(e, i, s);
                return !1
            } : function(e, i, l) {
                var h, c, d, u = [S, r];
                if (l) {
                    for (; e = e[n];)
                        if ((1 === e.nodeType || a) && t(e, i, l)) return !0
                } else
                    for (; e = e[n];)
                        if (1 === e.nodeType || a)
                            if (c = (d = e[w] || (e[w] = {}))[e.uniqueID] || (d[e.uniqueID] = {}), s && s === e.nodeName.toLowerCase()) e = e[n] || e;
                            else {
                                if ((h = c[o]) && h[0] === S && h[1] === r) return u[2] = h[2];
                                if (c[o] = u, u[2] = t(e, i, l)) return !0
                            } return !1
            }
        }

        function bt(t) {
            return t.length > 1 ? function(e, i, n) {
                for (var s = t.length; s--;)
                    if (!t[s](e, i, n)) return !1;
                return !0
            } : t[0]
        }

        function wt(t, e, i, n, s) {
            for (var o, a = [], r = 0, l = t.length, h = null != e; r < l; r++)(o = t[r]) && (i && !i(o, n, s) || (a.push(o), h && e.push(r)));
            return a
        }

        function xt(t, e, i, n, s, o) {
            return n && !n[w] && (n = xt(n)), s && !s[w] && (s = xt(s, o)), rt(function(o, a, r, l) {
                var h, c, d, u = [],
                    p = [],
                    f = a.length,
                    g = o || function(t, e, i) {
                        for (var n = 0, s = e.length; n < s; n++) ot(t, e[n], i);
                        return i
                    }(e || "*", r.nodeType ? [r] : r, []),
                    m = !t || !o && e ? g : wt(g, u, t, r, l),
                    v = i ? s || (o ? t : f || n) ? [] : a : m;
                if (i && i(m, v, r, l), n)
                    for (h = wt(v, p), n(h, [], r, l), c = h.length; c--;)(d = h[c]) && (v[p[c]] = !(m[p[c]] = d));
                if (o) {
                    if (s || t) {
                        if (s) {
                            for (h = [], c = v.length; c--;)(d = v[c]) && h.push(m[c] = d);
                            s(null, v = [], h, l)
                        }
                        for (c = v.length; c--;)(d = v[c]) && (h = s ? $(o, d) : u[c]) > -1 && (o[h] = !(a[h] = d))
                    }
                } else v = wt(v === a ? v.splice(f, v.length) : v), s ? s(null, a, v, l) : I.apply(a, v)
            })
        }

        function St(t) {
            for (var e, i, s, o = t.length, a = n.relative[t[0].type], r = a || n.relative[" "], l = a ? 1 : 0, c = yt(function(t) {
                    return t === e
                }, r, !0), d = yt(function(t) {
                    return $(e, t) > -1
                }, r, !0), u = [function(t, i, n) {
                    var s = !a && (n || i !== h) || ((e = i).nodeType ? c(t, i, n) : d(t, i, n));
                    return e = null, s
                }]; l < o; l++)
                if (i = n.relative[t[l].type]) u = [yt(bt(u), i)];
                else {
                    if ((i = n.filter[t[l].type].apply(null, t[l].matches))[w]) {
                        for (s = ++l; s < o && !n.relative[t[s].type]; s++);
                        return xt(l > 1 && bt(u), l > 1 && vt(t.slice(0, l - 1).concat({
                            value: " " === t[l - 2].type ? "*" : ""
                        })).replace(R, "$1"), i, l < s && St(t.slice(l, s)), s < o && St(t = t.slice(s)), s < o && vt(t))
                    }
                    u.push(i)
                } return bt(u)
        }

        function kt(t, e) {
            var i = e.length > 0,
                s = t.length > 0,
                o = function(o, a, r, l, c) {
                    var d, f, m, v = 0,
                        y = "0",
                        b = o && [],
                        w = [],
                        x = h,
                        k = o || s && n.find.TAG("*", c),
                        D = S += null == x ? 1 : Math.random() || .1,
                        C = k.length;
                    for (c && (h = a === p || a || c); y !== C && null != (d = k[y]); y++) {
                        if (s && d) {
                            for (f = 0, a || d.ownerDocument === p || (u(d), r = !g); m = t[f++];)
                                if (m(d, a || p, r)) {
                                    l.push(d);
                                    break
                                } c && (S = D)
                        }
                        i && ((d = !m && d) && v--, o && b.push(d))
                    }
                    if (v += y, i && y !== v) {
                        for (f = 0; m = e[f++];) m(b, w, a, r);
                        if (o) {
                            if (v > 0)
                                for (; y--;) b[y] || w[y] || (w[y] = P.call(l));
                            w = wt(w)
                        }
                        I.apply(l, w), c && !o && w.length > 0 && v + e.length > 1 && ot.uniqueSort(l)
                    }
                    return c && (S = D, h = x), b
                };
            return i ? rt(o) : o
        }
        return mt.prototype = n.filters = n.pseudos, n.setFilters = new mt, a = ot.tokenize = function(t, e) {
            var i, s, o, a, r, l, h, c = C[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (r = t, l = [], h = n.preFilter; r;) {
                for (a in i && !(s = W.exec(r)) || (s && (r = r.slice(s[0].length) || r), l.push(o = [])), i = !1, (s = U.exec(r)) && (i = s.shift(), o.push({
                        value: i,
                        type: s[0].replace(R, " ")
                    }), r = r.slice(i.length)), n.filter) !(s = q[a].exec(r)) || h[a] && !(s = h[a](s)) || (i = s.shift(), o.push({
                    value: i,
                    type: a,
                    matches: s
                }), r = r.slice(i.length));
                if (!i) break
            }
            return e ? r.length : r ? ot.error(t) : C(t, l).slice(0)
        }, r = ot.compile = function(t, e) {
            var i, n = [],
                s = [],
                o = T[t + " "];
            if (!o) {
                for (e || (e = a(t)), i = e.length; i--;)(o = St(e[i]))[w] ? n.push(o) : s.push(o);
                (o = T(t, kt(s, n))).selector = t
            }
            return o
        }, l = ot.select = function(t, e, i, s) {
            var o, l, h, c, d, u = "function" == typeof t && t,
                p = !s && a(t = u.selector || t);
            if (i = i || [], 1 === p.length) {
                if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (h = l[0]).type && 9 === e.nodeType && g && n.relative[l[1].type]) {
                    if (!(e = (n.find.ID(h.matches[0].replace(Z, tt), e) || [])[0])) return i;
                    u && (e = e.parentNode), t = t.slice(l.shift().value.length)
                }
                for (o = q.needsContext.test(t) ? 0 : l.length; o-- && (h = l[o], !n.relative[c = h.type]);)
                    if ((d = n.find[c]) && (s = d(h.matches[0].replace(Z, tt), K.test(l[0].type) && gt(e.parentNode) || e))) {
                        if (l.splice(o, 1), !(t = s.length && vt(l))) return I.apply(i, s), i;
                        break
                    }
            }
            return (u || r(t, p))(s, e, !g, i, !e || K.test(t) && gt(e.parentNode) || e), i
        }, i.sortStable = w.split("").sort(_).join("") === w, i.detectDuplicates = !!d, u(), i.sortDetached = lt(function(t) {
            return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
        }), lt(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || ht("type|href|height|width", function(t, e, i) {
            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), i.attributes && lt(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || ht("value", function(t, e, i) {
            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), lt(function(t) {
            return null == t.getAttribute("disabled")
        }) || ht(E, function(t, e, i) {
            var n;
            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
        }), ot
    }(t);
    v.find = k, v.expr = k.selectors, v.expr[":"] = v.expr.pseudos, v.uniqueSort = v.unique = k.uniqueSort, v.text = k.getText, v.isXMLDoc = k.isXML, v.contains = k.contains, v.escapeSelector = k.escape;
    var D = function(t, e, i) {
            for (var n = [], s = void 0 !== i;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (s && v(t).is(i)) break;
                    n.push(t)
                } return n
        },
        C = function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        },
        T = v.expr.match.needsContext;

    function _(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        A = /^.[^:#\[\.,]*$/;

    function P(t, e, i) {
        return v.isFunction(e) ? v.grep(t, function(t, n) {
            return !!e.call(t, n, t) !== i
        }) : e.nodeType ? v.grep(t, function(t) {
            return t === e !== i
        }) : "string" != typeof e ? v.grep(t, function(t) {
            return l.call(e, t) > -1 !== i
        }) : A.test(e) ? v.filter(e, t, i) : (e = v.filter(e, t), v.grep(t, function(t) {
            return l.call(e, t) > -1 !== i && 1 === t.nodeType
        }))
    }
    v.filter = function(t, e, i) {
        var n = e[0];
        return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? v.find.matchesSelector(n, t) ? [n] : [] : v.find.matches(t, v.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, v.fn.extend({
        find: function(t) {
            var e, i, n = this.length,
                s = this;
            if ("string" != typeof t) return this.pushStack(v(t).filter(function() {
                for (e = 0; e < n; e++)
                    if (v.contains(s[e], this)) return !0
            }));
            for (i = this.pushStack([]), e = 0; e < n; e++) v.find(t, s[e], i);
            return n > 1 ? v.uniqueSort(i) : i
        },
        filter: function(t) {
            return this.pushStack(P(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(P(this, t || [], !0))
        },
        is: function(t) {
            return !!P(this, "string" == typeof t && T.test(t) ? v(t) : t || [], !1).length
        }
    });
    var O, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (v.fn.init = function(t, e, i) {
        var s, o;
        if (!t) return this;
        if (i = i || O, "string" == typeof t) {
            if (!(s = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : I.exec(t)) || !s[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
            if (s[1]) {
                if (e = e instanceof v ? e[0] : e, v.merge(this, v.parseHTML(s[1], e && e.nodeType ? e.ownerDocument || e : n, !0)), M.test(s[1]) && v.isPlainObject(e))
                    for (s in e) v.isFunction(this[s]) ? this[s](e[s]) : this.attr(s, e[s]);
                return this
            }
            return (o = n.getElementById(s[2])) && (this[0] = o, this.length = 1), this
        }
        return t.nodeType ? (this[0] = t, this.length = 1, this) : v.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(v) : v.makeArray(t, this)
    }).prototype = v.fn, O = v(n);
    var N = /^(?:parents|prev(?:Until|All))/,
        $ = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function E(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    v.fn.extend({
        has: function(t) {
            var e = v(t, this),
                i = e.length;
            return this.filter(function() {
                for (var t = 0; t < i; t++)
                    if (v.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            var i, n = 0,
                s = this.length,
                o = [],
                a = "string" != typeof t && v(t);
            if (!T.test(t))
                for (; n < s; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && v.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        } return this.pushStack(o.length > 1 ? v.uniqueSort(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? l.call(v(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(v.uniqueSort(v.merge(this.get(), v(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), v.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return D(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return D(t, "parentNode", i)
        },
        next: function(t) {
            return E(t, "nextSibling")
        },
        prev: function(t) {
            return E(t, "previousSibling")
        },
        nextAll: function(t) {
            return D(t, "nextSibling")
        },
        prevAll: function(t) {
            return D(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return D(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return D(t, "previousSibling", i)
        },
        siblings: function(t) {
            return C((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return C(t.firstChild)
        },
        contents: function(t) {
            return _(t, "iframe") ? t.contentDocument : (_(t, "template") && (t = t.content || t), v.merge([], t.childNodes))
        }
    }, function(t, e) {
        v.fn[t] = function(i, n) {
            var s = v.map(this, e, i);
            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = v.filter(n, s)), this.length > 1 && ($[t] || v.uniqueSort(s), N.test(t) && s.reverse()), this.pushStack(s)
        }
    });
    var F = /[^\x20\t\r\n\f]+/g;

    function j(t) {
        return t
    }

    function L(t) {
        throw t
    }

    function z(t, e, i, n) {
        var s;
        try {
            t && v.isFunction(s = t.promise) ? s.call(t).done(e).fail(i) : t && v.isFunction(s = t.then) ? s.call(t, e, i) : e.apply(void 0, [t].slice(n))
        } catch (t) {
            i.apply(void 0, [t])
        }
    }
    v.Callbacks = function(t) {
        t = "string" == typeof t ? function(t) {
            var e = {};
            return v.each(t.match(F) || [], function(t, i) {
                e[i] = !0
            }), e
        }(t) : v.extend({}, t);
        var e, i, n, s, o = [],
            a = [],
            r = -1,
            l = function() {
                for (s = s || t.once, n = e = !0; a.length; r = -1)
                    for (i = a.shift(); ++r < o.length;) !1 === o[r].apply(i[0], i[1]) && t.stopOnFalse && (r = o.length, i = !1);
                t.memory || (i = !1), e = !1, s && (o = i ? [] : "")
            },
            h = {
                add: function() {
                    return o && (i && !e && (r = o.length - 1, a.push(i)), function e(i) {
                        v.each(i, function(i, n) {
                            v.isFunction(n) ? t.unique && h.has(n) || o.push(n) : n && n.length && "string" !== v.type(n) && e(n)
                        })
                    }(arguments), i && !e && l()), this
                },
                remove: function() {
                    return v.each(arguments, function(t, e) {
                        for (var i;
                            (i = v.inArray(e, o, i)) > -1;) o.splice(i, 1), i <= r && r--
                    }), this
                },
                has: function(t) {
                    return t ? v.inArray(t, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return s = a = [], o = i = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return s = a = [], i || e || (o = i = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(t, i) {
                    return s || (i = [t, (i = i || []).slice ? i.slice() : i], a.push(i), e || l()), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return h
    }, v.extend({
        Deferred: function(e) {
            var i = [
                    ["notify", "progress", v.Callbacks("memory"), v.Callbacks("memory"), 2],
                    ["resolve", "done", v.Callbacks("once memory"), v.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", v.Callbacks("once memory"), v.Callbacks("once memory"), 1, "rejected"]
                ],
                n = "pending",
                s = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(t) {
                        return s.then(null, t)
                    },
                    pipe: function() {
                        var t = arguments;
                        return v.Deferred(function(e) {
                            v.each(i, function(i, n) {
                                var s = v.isFunction(t[n[4]]) && t[n[4]];
                                o[n[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && v.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[n[0] + "With"](this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function(e, n, s) {
                        var o = 0;

                        function a(e, i, n, s) {
                            return function() {
                                var r = this,
                                    l = arguments,
                                    h = function() {
                                        var t, h;
                                        if (!(e < o)) {
                                            if ((t = n.apply(r, l)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                            h = t && ("object" == typeof t || "function" == typeof t) && t.then, v.isFunction(h) ? s ? h.call(t, a(o, i, j, s), a(o, i, L, s)) : (o++, h.call(t, a(o, i, j, s), a(o, i, L, s), a(o, i, j, i.notifyWith))) : (n !== j && (r = void 0, l = [t]), (s || i.resolveWith)(r, l))
                                        }
                                    },
                                    c = s ? h : function() {
                                        try {
                                            h()
                                        } catch (t) {
                                            v.Deferred.exceptionHook && v.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= o && (n !== L && (r = void 0, l = [t]), i.rejectWith(r, l))
                                        }
                                    };
                                e ? c() : (v.Deferred.getStackHook && (c.stackTrace = v.Deferred.getStackHook()), t.setTimeout(c))
                            }
                        }
                        return v.Deferred(function(t) {
                            i[0][3].add(a(0, t, v.isFunction(s) ? s : j, t.notifyWith)), i[1][3].add(a(0, t, v.isFunction(e) ? e : j)), i[2][3].add(a(0, t, v.isFunction(n) ? n : L))
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? v.extend(t, s) : s
                    }
                },
                o = {};
            return v.each(i, function(t, e) {
                var a = e[2],
                    r = e[5];
                s[e[1]] = a.add, r && a.add(function() {
                    n = r
                }, i[3 - t][2].disable, i[0][2].lock), a.add(e[3].fire), o[e[0]] = function() {
                    return o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[e[0] + "With"] = a.fireWith
            }), s.promise(o), e && e.call(o, o), o
        },
        when: function(t) {
            var e = arguments.length,
                i = e,
                n = Array(i),
                s = o.call(arguments),
                a = v.Deferred(),
                r = function(t) {
                    return function(i) {
                        n[t] = this, s[t] = arguments.length > 1 ? o.call(arguments) : i, --e || a.resolveWith(n, s)
                    }
                };
            if (e <= 1 && (z(t, a.done(r(i)).resolve, a.reject, !e), "pending" === a.state() || v.isFunction(s[i] && s[i].then))) return a.then();
            for (; i--;) z(s[i], r(i), a.reject);
            return a.promise()
        }
    });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    v.Deferred.exceptionHook = function(e, i) {
        t.console && t.console.warn && e && H.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, i)
    }, v.readyException = function(e) {
        t.setTimeout(function() {
            throw e
        })
    };
    var R = v.Deferred();

    function W() {
        n.removeEventListener("DOMContentLoaded", W), t.removeEventListener("load", W), v.ready()
    }
    v.fn.ready = function(t) {
        return R.then(t).catch(function(t) {
            v.readyException(t)
        }), this
    }, v.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --v.readyWait : v.isReady) || (v.isReady = !0, !0 !== t && --v.readyWait > 0 || R.resolveWith(n, [v]))
        }
    }), v.ready.then = R.then, "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? t.setTimeout(v.ready) : (n.addEventListener("DOMContentLoaded", W), t.addEventListener("load", W));
    var U = function(t, e, i, n, s, o, a) {
            var r = 0,
                l = t.length,
                h = null == i;
            if ("object" === v.type(i))
                for (r in s = !0, i) U(t, e, r, i[r], !0, o, a);
            else if (void 0 !== n && (s = !0, v.isFunction(n) || (a = !0), h && (a ? (e.call(t, n), e = null) : (h = e, e = function(t, e, i) {
                    return h.call(v(t), i)
                })), e))
                for (; r < l; r++) e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
            return s ? t : h ? e.call(t) : l ? e(t[0], i) : o
        },
        J = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

    function B() {
        this.expando = v.expando + B.uid++
    }
    B.uid = 1, B.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {}, J(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function(t, e, i) {
            var n, s = this.cache(t);
            if ("string" == typeof e) s[v.camelCase(e)] = i;
            else
                for (n in e) s[v.camelCase(n)] = e[n];
            return s
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][v.camelCase(e)]
        },
        access: function(t, e, i) {
            return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
        },
        remove: function(t, e) {
            var i, n = t[this.expando];
            if (void 0 !== n) {
                if (void 0 !== e) {
                    Array.isArray(e) ? e = e.map(v.camelCase) : e = (e = v.camelCase(e)) in n ? [e] : e.match(F) || [], i = e.length;
                    for (; i--;) delete n[e[i]]
                }(void 0 === e || v.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !v.isEmptyObject(e)
        }
    };
    var V = new B,
        q = new B,
        Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        G = /[A-Z]/g;

    function Q(t, e, i) {
        var n;
        if (void 0 === i && 1 === t.nodeType)
            if (n = "data-" + e.replace(G, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                try {
                    i = function(t) {
                        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Y.test(t) ? JSON.parse(t) : t)
                    }(i)
                } catch (t) {}
                q.set(t, e, i)
            } else i = void 0;
        return i
    }
    v.extend({
        hasData: function(t) {
            return q.hasData(t) || V.hasData(t)
        },
        data: function(t, e, i) {
            return q.access(t, e, i)
        },
        removeData: function(t, e) {
            q.remove(t, e)
        },
        _data: function(t, e, i) {
            return V.access(t, e, i)
        },
        _removeData: function(t, e) {
            V.remove(t, e)
        }
    }), v.fn.extend({
        data: function(t, e) {
            var i, n, s, o = this[0],
                a = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (s = q.get(o), 1 === o.nodeType && !V.get(o, "hasDataAttrs"))) {
                    for (i = a.length; i--;) a[i] && (0 === (n = a[i].name).indexOf("data-") && (n = v.camelCase(n.slice(5)), Q(o, n, s[n])));
                    V.set(o, "hasDataAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function() {
                q.set(this, t)
            }) : U(this, function(e) {
                var i;
                if (o && void 0 === e) {
                    if (void 0 !== (i = q.get(o, t))) return i;
                    if (void 0 !== (i = Q(o, t))) return i
                } else this.each(function() {
                    q.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                q.remove(this, t)
            })
        }
    }), v.extend({
        queue: function(t, e, i) {
            var n;
            if (t) return e = (e || "fx") + "queue", n = V.get(t, e), i && (!n || Array.isArray(i) ? n = V.access(t, e, v.makeArray(i)) : n.push(i)), n || []
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = v.queue(t, e),
                n = i.length,
                s = i.shift(),
                o = v._queueHooks(t, e);
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, function() {
                v.dequeue(t, e)
            }, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return V.get(t, i) || V.access(t, i, {
                empty: v.Callbacks("once memory").add(function() {
                    V.remove(t, [e + "queue", i])
                })
            })
        }
    }), v.fn.extend({
        queue: function(t, e) {
            var i = 2;
            return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? v.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var i = v.queue(this, t, e);
                v._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && v.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                v.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                s = v.Deferred(),
                o = this,
                a = this.length,
                r = function() {
                    --n || s.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(i = V.get(o[a], t + "queueHooks")) && i.empty && (n++, i.empty.add(r));
            return r(), s.promise(e)
        }
    });
    var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        K = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
        Z = ["Top", "Right", "Bottom", "Left"],
        tt = function(t, e) {
            return "none" === (t = e || t).style.display || "" === t.style.display && v.contains(t.ownerDocument, t) && "none" === v.css(t, "display")
        },
        et = function(t, e, i, n) {
            var s, o, a = {};
            for (o in e) a[o] = t.style[o], t.style[o] = e[o];
            for (o in s = i.apply(t, n || []), e) t.style[o] = a[o];
            return s
        };

    function it(t, e, i, n) {
        var s, o = 1,
            a = 20,
            r = n ? function() {
                return n.cur()
            } : function() {
                return v.css(t, e, "")
            },
            l = r(),
            h = i && i[3] || (v.cssNumber[e] ? "" : "px"),
            c = (v.cssNumber[e] || "px" !== h && +l) && K.exec(v.css(t, e));
        if (c && c[3] !== h) {
            h = h || c[3], i = i || [], c = +l || 1;
            do {
                c /= o = o || ".5", v.style(t, e, c + h)
            } while (o !== (o = r() / l) && 1 !== o && --a)
        }
        return i && (c = +c || +l || 0, s = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = h, n.start = c, n.end = s)), s
    }
    var nt = {};

    function st(t) {
        var e, i = t.ownerDocument,
            n = t.nodeName,
            s = nt[n];
        return s || (e = i.body.appendChild(i.createElement(n)), s = v.css(e, "display"), e.parentNode.removeChild(e), "none" === s && (s = "block"), nt[n] = s, s)
    }

    function ot(t, e) {
        for (var i, n, s = [], o = 0, a = t.length; o < a; o++)(n = t[o]).style && (i = n.style.display, e ? ("none" === i && (s[o] = V.get(n, "display") || null, s[o] || (n.style.display = "")), "" === n.style.display && tt(n) && (s[o] = st(n))) : "none" !== i && (s[o] = "none", V.set(n, "display", i)));
        for (o = 0; o < a; o++) null != s[o] && (t[o].style.display = s[o]);
        return t
    }
    v.fn.extend({
        show: function() {
            return ot(this, !0)
        },
        hide: function() {
            return ot(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                tt(this) ? v(this).show() : v(this).hide()
            })
        }
    });
    var at = /^(?:checkbox|radio)$/i,
        rt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        lt = /^$|\/(?:java|ecma)script/i,
        ht = {
            option: [1, "<selects multiple='multiple'>", "</selects>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ct(t, e) {
        var i;
        return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && _(t, e) ? v.merge([t], i) : i
    }

    function dt(t, e) {
        for (var i = 0, n = t.length; i < n; i++) V.set(t[i], "globalEval", !e || V.get(e[i], "globalEval"))
    }
    ht.optgroup = ht.option, ht.tbody = ht.tfoot = ht.colgroup = ht.caption = ht.thead, ht.th = ht.td;
    var ut = /<|&#?\w+;/;

    function pt(t, e, i, n, s) {
        for (var o, a, r, l, h, c, d = e.createDocumentFragment(), u = [], p = 0, f = t.length; p < f; p++)
            if ((o = t[p]) || 0 === o)
                if ("object" === v.type(o)) v.merge(u, o.nodeType ? [o] : o);
                else if (ut.test(o)) {
            for (a = a || d.appendChild(e.createElement("div")), r = (rt.exec(o) || ["", ""])[1].toLowerCase(), l = ht[r] || ht._default, a.innerHTML = l[1] + v.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
            v.merge(u, a.childNodes), (a = d.firstChild).textContent = ""
        } else u.push(e.createTextNode(o));
        for (d.textContent = "", p = 0; o = u[p++];)
            if (n && v.inArray(o, n) > -1) s && s.push(o);
            else if (h = v.contains(o.ownerDocument, o), a = ct(d.appendChild(o), "script"), h && dt(a), i)
            for (c = 0; o = a[c++];) lt.test(o.type || "") && i.push(o);
        return d
    }! function() {
        var t = n.createDocumentFragment().appendChild(n.createElement("div")),
            e = n.createElement("input");
        e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), f.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", f.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var ft = n.documentElement,
        gt = /^key/,
        mt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        vt = /^([^.]*)(?:\.(.+)|)/;

    function yt() {
        return !0
    }

    function bt() {
        return !1
    }

    function wt() {
        try {
            return n.activeElement
        } catch (t) {}
    }

    function xt(t, e, i, n, s, o) {
        var a, r;
        if ("object" == typeof e) {
            for (r in "string" != typeof i && (n = n || i, i = void 0), e) xt(t, r, i, n, e[r], o);
            return t
        }
        if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = bt;
        else if (!s) return t;
        return 1 === o && (a = s, (s = function(t) {
            return v().off(t), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = v.guid++)), t.each(function() {
            v.event.add(this, e, s, n, i)
        })
    }
    v.event = {
        global: {},
        add: function(t, e, i, n, s) {
            var o, a, r, l, h, c, d, u, p, f, g, m = V.get(t);
            if (m)
                for (i.handler && (i = (o = i).handler, s = o.selector), s && v.find.matchesSelector(ft, s), i.guid || (i.guid = v.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                        return void 0 !== v && v.event.triggered !== e.type ? v.event.dispatch.apply(t, arguments) : void 0
                    }), h = (e = (e || "").match(F) || [""]).length; h--;) p = g = (r = vt.exec(e[h]) || [])[1], f = (r[2] || "").split(".").sort(), p && (d = v.event.special[p] || {}, p = (s ? d.delegateType : d.bindType) || p, d = v.event.special[p] || {}, c = v.extend({
                    type: p,
                    origType: g,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: s,
                    needsContext: s && v.expr.match.needsContext.test(s),
                    namespace: f.join(".")
                }, o), (u = l[p]) || ((u = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, n, f, a) || t.addEventListener && t.addEventListener(p, a)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), s ? u.splice(u.delegateCount++, 0, c) : u.push(c), v.event.global[p] = !0)
        },
        remove: function(t, e, i, n, s) {
            var o, a, r, l, h, c, d, u, p, f, g, m = V.hasData(t) && V.get(t);
            if (m && (l = m.events)) {
                for (h = (e = (e || "").match(F) || [""]).length; h--;)
                    if (p = g = (r = vt.exec(e[h]) || [])[1], f = (r[2] || "").split(".").sort(), p) {
                        for (d = v.event.special[p] || {}, u = l[p = (n ? d.delegateType : d.bindType) || p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = u.length; o--;) c = u[o], !s && g !== c.origType || i && i.guid !== c.guid || r && !r.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (u.splice(o, 1), c.selector && u.delegateCount--, d.remove && d.remove.call(t, c));
                        a && !u.length && (d.teardown && !1 !== d.teardown.call(t, f, m.handle) || v.removeEvent(t, p, m.handle), delete l[p])
                    } else
                        for (p in l) v.event.remove(t, p + e[h], i, n, !0);
                v.isEmptyObject(l) && V.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, i, n, s, o, a, r = v.event.fix(t),
                l = new Array(arguments.length),
                h = (V.get(this, "events") || {})[r.type] || [],
                c = v.event.special[r.type] || {};
            for (l[0] = r, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (r.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, r)) {
                for (a = v.event.handlers.call(this, r, h), e = 0;
                    (s = a[e++]) && !r.isPropagationStopped();)
                    for (r.currentTarget = s.elem, i = 0;
                        (o = s.handlers[i++]) && !r.isImmediatePropagationStopped();) r.rnamespace && !r.rnamespace.test(o.namespace) || (r.handleObj = o, r.data = o.data, void 0 !== (n = ((v.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l)) && !1 === (r.result = n) && (r.preventDefault(), r.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, r), r.result
            }
        },
        handlers: function(t, e) {
            var i, n, s, o, a, r = [],
                l = e.delegateCount,
                h = t.target;
            if (l && h.nodeType && !("click" === t.type && t.button >= 1))
                for (; h !== this; h = h.parentNode || this)
                    if (1 === h.nodeType && ("click" !== t.type || !0 !== h.disabled)) {
                        for (o = [], a = {}, i = 0; i < l; i++) void 0 === a[s = (n = e[i]).selector + " "] && (a[s] = n.needsContext ? v(s, this).index(h) > -1 : v.find(s, this, null, [h]).length), a[s] && o.push(n);
                        o.length && r.push({
                            elem: h,
                            handlers: o
                        })
                    } return h = this, l < e.length && r.push({
                elem: h,
                handlers: e.slice(l)
            }), r
        },
        addProp: function(t, e) {
            Object.defineProperty(v.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v.isFunction(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[v.expando] ? t : new v.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== wt() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === wt() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && _(this, "input")) return this.click(), !1
                },
                _default: function(t) {
                    return _(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, v.removeEvent = function(t, e, i) {
        t.removeEventListener && t.removeEventListener(e, i)
    }, v.Event = function(t, e) {
        return this instanceof v.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? yt : bt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && v.extend(this, e), this.timeStamp = t && t.timeStamp || v.now(), void(this[v.expando] = !0)) : new v.Event(t, e)
    }, v.Event.prototype = {
        constructor: v.Event,
        isDefaultPrevented: bt,
        isPropagationStopped: bt,
        isImmediatePropagationStopped: bt,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = yt, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = yt, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = yt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, v.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && gt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && mt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, v.event.addProp), v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        v.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var i, n = t.relatedTarget,
                    s = t.handleObj;
                return n && (n === this || v.contains(this, n)) || (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
            }
        }
    }), v.fn.extend({
        on: function(t, e, i, n) {
            return xt(this, t, e, i, n)
        },
        one: function(t, e, i, n) {
            return xt(this, t, e, i, n, 1)
        },
        off: function(t, e, i) {
            var n, s;
            if (t && t.preventDefault && t.handleObj) return n = t.handleObj, v(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = bt), this.each(function() {
                v.event.remove(this, t, i, e)
            })
        }
    });
    var St = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        kt = /<script|<style|<link/i,
        Dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ct = /^true\/(.*)/,
        Tt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function _t(t, e) {
        return _(t, "table") && _(11 !== e.nodeType ? e : e.firstChild, "tr") && v(">tbody", t)[0] || t
    }

    function Mt(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function At(t) {
        var e = Ct.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function Pt(t, e) {
        var i, n, s, o, a, r, l, h;
        if (1 === e.nodeType) {
            if (V.hasData(t) && (o = V.access(t), a = V.set(e, o), h = o.events))
                for (s in delete a.handle, a.events = {}, h)
                    for (i = 0, n = h[s].length; i < n; i++) v.event.add(e, s, h[s][i]);
            q.hasData(t) && (r = q.access(t), l = v.extend({}, r), q.set(e, l))
        }
    }

    function Ot(t, e) {
        var i = e.nodeName.toLowerCase();
        "input" === i && at.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
    }

    function It(t, e, i, n) {
        e = a.apply([], e);
        var s, o, r, l, h, c, d = 0,
            u = t.length,
            p = u - 1,
            m = e[0],
            y = v.isFunction(m);
        if (y || u > 1 && "string" == typeof m && !f.checkClone && Dt.test(m)) return t.each(function(s) {
            var o = t.eq(s);
            y && (e[0] = m.call(this, s, o.html())), It(o, e, i, n)
        });
        if (u && (o = (s = pt(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === s.childNodes.length && (s = o), o || n)) {
            for (l = (r = v.map(ct(s, "script"), Mt)).length; d < u; d++) h = s, d !== p && (h = v.clone(h, !0, !0), l && v.merge(r, ct(h, "script"))), i.call(t[d], h, d);
            if (l)
                for (c = r[r.length - 1].ownerDocument, v.map(r, At), d = 0; d < l; d++) h = r[d], lt.test(h.type || "") && !V.access(h, "globalEval") && v.contains(c, h) && (h.src ? v._evalUrl && v._evalUrl(h.src) : g(h.textContent.replace(Tt, ""), c))
        }
        return t
    }

    function Nt(t, e, i) {
        for (var n, s = e ? v.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || v.cleanData(ct(n)), n.parentNode && (i && v.contains(n.ownerDocument, n) && dt(ct(n, "script")), n.parentNode.removeChild(n));
        return t
    }
    v.extend({
        htmlPrefilter: function(t) {
            return t.replace(St, "<$1></$2>")
        },
        clone: function(t, e, i) {
            var n, s, o, a, r = t.cloneNode(!0),
                l = v.contains(t.ownerDocument, t);
            if (!(f.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || v.isXMLDoc(t)))
                for (a = ct(r), n = 0, s = (o = ct(t)).length; n < s; n++) Ot(o[n], a[n]);
            if (e)
                if (i)
                    for (o = o || ct(t), a = a || ct(r), n = 0, s = o.length; n < s; n++) Pt(o[n], a[n]);
                else Pt(t, r);
            return (a = ct(r, "script")).length > 0 && dt(a, !l && ct(t, "script")), r
        },
        cleanData: function(t) {
            for (var e, i, n, s = v.event.special, o = 0; void 0 !== (i = t[o]); o++)
                if (J(i)) {
                    if (e = i[V.expando]) {
                        if (e.events)
                            for (n in e.events) s[n] ? v.event.remove(i, n) : v.removeEvent(i, n, e.handle);
                        i[V.expando] = void 0
                    }
                    i[q.expando] && (i[q.expando] = void 0)
                }
        }
    }), v.fn.extend({
        detach: function(t) {
            return Nt(this, t, !0)
        },
        remove: function(t) {
            return Nt(this, t)
        },
        text: function(t) {
            return U(this, function(t) {
                return void 0 === t ? v.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return It(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _t(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return It(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = _t(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return It(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return It(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (v.cleanData(ct(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return v.clone(this, t, e)
            })
        },
        html: function(t) {
            return U(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !kt.test(t) && !ht[(rt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = v.htmlPrefilter(t);
                    try {
                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (v.cleanData(ct(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return It(this, arguments, function(e) {
                var i = this.parentNode;
                v.inArray(this, t) < 0 && (v.cleanData(ct(this)), i && i.replaceChild(e, this))
            }, t)
        }
    }), v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        v.fn[t] = function(t) {
            for (var i, n = [], s = v(t), o = s.length - 1, a = 0; a <= o; a++) i = a === o ? this : this.clone(!0), v(s[a])[e](i), r.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var $t = /^margin/,
        Et = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
        Ft = function(e) {
            var i = e.ownerDocument.defaultView;
            return i && i.opener || (i = t), i.getComputedStyle(e)
        };

    function jt(t, e, i) {
        var n, s, o, a, r = t.style;
        return (i = i || Ft(t)) && ("" !== (a = i.getPropertyValue(e) || i[e]) || v.contains(t.ownerDocument, t) || (a = v.style(t, e)), !f.pixelMarginRight() && Et.test(a) && $t.test(e) && (n = r.width, s = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = n, r.minWidth = s, r.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Lt(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }! function() {
        function e() {
            if (l) {
                l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", l.innerHTML = "", ft.appendChild(r);
                var e = t.getComputedStyle(l);
                i = "1%" !== e.top, a = "2px" === e.marginLeft, s = "4px" === e.width, l.style.marginRight = "50%", o = "4px" === e.marginRight, ft.removeChild(r), l = null
            }
        }
        var i, s, o, a, r = n.createElement("div"),
            l = n.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = "content-box" === l.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(l), v.extend(f, {
            pixelPosition: function() {
                return e(), i
            },
            boxSizingReliable: function() {
                return e(), s
            },
            pixelMarginRight: function() {
                return e(), o
            },
            reliableMarginLeft: function() {
                return e(), a
            }
        }))
    }();
    var zt = /^(none|table(?!-c[ea]).+)/,
        Ht = /^--/,
        Rt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Wt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ut = ["Webkit", "Moz", "ms"],
        Jt = n.createElement("div").style;

    function Bt(t) {
        var e = v.cssProps[t];
        return e || (e = v.cssProps[t] = function(t) {
            if (t in Jt) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = Ut.length; i--;)
                if ((t = Ut[i] + e) in Jt) return t
        }(t) || t), e
    }

    function Vt(t, e, i) {
        var n = K.exec(e);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
    }

    function qt(t, e, i, n, s) {
        var o, a = 0;
        for (o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0; o < 4; o += 2) "margin" === i && (a += v.css(t, i + Z[o], !0, s)), n ? ("content" === i && (a -= v.css(t, "padding" + Z[o], !0, s)), "margin" !== i && (a -= v.css(t, "border" + Z[o] + "Width", !0, s))) : (a += v.css(t, "padding" + Z[o], !0, s), "padding" !== i && (a += v.css(t, "border" + Z[o] + "Width", !0, s)));
        return a
    }

    function Yt(t, e, i) {
        var n, s = Ft(t),
            o = jt(t, e, s),
            a = "border-box" === v.css(t, "boxSizing", !1, s);
        return Et.test(o) ? o : (n = a && (f.boxSizingReliable() || o === t.style[e]), "auto" === o && (o = t["offset" + e[0].toUpperCase() + e.slice(1)]), (o = parseFloat(o) || 0) + qt(t, e, i || (a ? "border" : "content"), n, s) + "px")
    }

    function Gt(t, e, i, n, s) {
        return new Gt.prototype.init(t, e, i, n, s)
    }
    v.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = jt(t, "opacity");
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
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, a, r = v.camelCase(e),
                    l = Ht.test(e),
                    h = t.style;
                return l || (e = Bt(r)), a = v.cssHooks[e] || v.cssHooks[r], void 0 === i ? a && "get" in a && void 0 !== (s = a.get(t, !1, n)) ? s : h[e] : ("string" === (o = typeof i) && (s = K.exec(i)) && s[1] && (i = it(t, e, s), o = "number"), void(null != i && i == i && ("number" === o && (i += s && s[3] || (v.cssNumber[r] ? "" : "px")), f.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (h[e] = "inherit"), a && "set" in a && void 0 === (i = a.set(t, i, n)) || (l ? h.setProperty(e, i) : h[e] = i))))
            }
        },
        css: function(t, e, i, n) {
            var s, o, a, r = v.camelCase(e);
            return Ht.test(e) || (e = Bt(r)), (a = v.cssHooks[e] || v.cssHooks[r]) && "get" in a && (s = a.get(t, !0, i)), void 0 === s && (s = jt(t, e, n)), "normal" === s && e in Wt && (s = Wt[e]), "" === i || i ? (o = parseFloat(s), !0 === i || isFinite(o) ? o || 0 : s) : s
        }
    }), v.each(["height", "width"], function(t, e) {
        v.cssHooks[e] = {
            get: function(t, i, n) {
                if (i) return !zt.test(v.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Yt(t, e, n) : et(t, Rt, function() {
                    return Yt(t, e, n)
                })
            },
            set: function(t, i, n) {
                var s, o = n && Ft(t),
                    a = n && qt(t, e, n, "border-box" === v.css(t, "boxSizing", !1, o), o);
                return a && (s = K.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i, i = v.css(t, e)), Vt(0, i, a)
            }
        }
    }), v.cssHooks.marginLeft = Lt(f.reliableMarginLeft, function(t, e) {
        if (e) return (parseFloat(jt(t, "marginLeft")) || t.getBoundingClientRect().left - et(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        })) + "px"
    }), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        v.cssHooks[t + e] = {
            expand: function(i) {
                for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[t + Z[n] + e] = o[n] || o[n - 2] || o[0];
                return s
            }
        }, $t.test(t) || (v.cssHooks[t + e].set = Vt)
    }), v.fn.extend({
        css: function(t, e) {
            return U(this, function(t, e, i) {
                var n, s, o = {},
                    a = 0;
                if (Array.isArray(e)) {
                    for (n = Ft(t), s = e.length; a < s; a++) o[e[a]] = v.css(t, e[a], !1, n);
                    return o
                }
                return void 0 !== i ? v.style(t, e, i) : v.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), v.Tween = Gt, Gt.prototype = {
        constructor: Gt,
        init: function(t, e, i, n, s, o) {
            this.elem = t, this.prop = i, this.easing = s || v.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (v.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = Gt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Gt.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = Gt.propHooks[this.prop];
            return this.options.duration ? this.pos = e = v.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Gt.propHooks._default.set(this), this
        }
    }, Gt.prototype.init.prototype = Gt.prototype, Gt.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = v.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                v.fx.step[t.prop] ? v.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[v.cssProps[t.prop]] && !v.cssHooks[t.prop] ? t.elem[t.prop] = t.now : v.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, Gt.propHooks.scrollTop = Gt.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, v.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, v.fx = Gt.prototype.init, v.fx.step = {};
    var Qt, Xt, Kt = /^(?:toggle|show|hide)$/,
        Zt = /queueHooks$/;

    function te() {
        Xt && (!1 === n.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(te) : t.setTimeout(te, v.fx.interval), v.fx.tick())
    }

    function ee() {
        return t.setTimeout(function() {
            Qt = void 0
        }), Qt = v.now()
    }

    function ie(t, e) {
        var i, n = 0,
            s = {
                height: t
            };
        for (e = e ? 1 : 0; n < 4; n += 2 - e) s["margin" + (i = Z[n])] = s["padding" + i] = t;
        return e && (s.opacity = s.width = t), s
    }

    function ne(t, e, i) {
        for (var n, s = (se.tweeners[e] || []).concat(se.tweeners["*"]), o = 0, a = s.length; o < a; o++)
            if (n = s[o].call(i, e, t)) return n
    }

    function se(t, e, i) {
        var n, s, o = 0,
            a = se.prefilters.length,
            r = v.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = Qt || ee(), i = Math.max(0, h.startTime + h.duration - e), n = 1 - (i / h.duration || 0), o = 0, a = h.tweens.length; o < a; o++) h.tweens[o].run(n);
                return r.notifyWith(t, [h, n, i]), n < 1 && a ? i : (a || r.notifyWith(t, [h, 1, 0]), r.resolveWith(t, [h]), !1)
            },
            h = r.promise({
                elem: t,
                props: v.extend({}, e),
                opts: v.extend(!0, {
                    specialEasing: {},
                    easing: v.easing._default
                }, i),
                originalProperties: e,
                originalOptions: i,
                startTime: Qt || ee(),
                duration: i.duration,
                tweens: [],
                createTween: function(e, i) {
                    var n = v.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(n), n
                },
                stop: function(e) {
                    var i = 0,
                        n = e ? h.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < n; i++) h.tweens[i].run(1);
                    return e ? (r.notifyWith(t, [h, 1, 0]), r.resolveWith(t, [h, e])) : r.rejectWith(t, [h, e]), this
                }
            }),
            c = h.props;
        for (function(t, e) {
                var i, n, s, o, a;
                for (i in t)
                    if (s = e[n = v.camelCase(i)], o = t[i], Array.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (a = v.cssHooks[n]) && "expand" in a)
                        for (i in o = a.expand(o), delete t[n], o) i in t || (t[i] = o[i], e[i] = s);
                    else e[n] = s
            }(c, h.opts.specialEasing); o < a; o++)
            if (n = se.prefilters[o].call(h, t, c, h.opts)) return v.isFunction(n.stop) && (v._queueHooks(h.elem, h.opts.queue).stop = v.proxy(n.stop, n)), n;
        return v.map(c, ne, h), v.isFunction(h.opts.start) && h.opts.start.call(t, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), v.fx.timer(v.extend(l, {
            elem: t,
            anim: h,
            queue: h.opts.queue
        })), h
    }
    v.Animation = v.extend(se, {
            tweeners: {
                "*": [function(t, e) {
                    var i = this.createTween(t, e);
                    return it(i.elem, t, K.exec(e), i), i
                }]
            },
            tweener: function(t, e) {
                v.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(F);
                for (var i, n = 0, s = t.length; n < s; n++) i = t[n], se.tweeners[i] = se.tweeners[i] || [], se.tweeners[i].unshift(e)
            },
            prefilters: [function(t, e, i) {
                var n, s, o, a, r, l, h, c, d = "width" in e || "height" in e,
                    u = this,
                    p = {},
                    f = t.style,
                    g = t.nodeType && tt(t),
                    m = V.get(t, "fxshow");
                for (n in i.queue || (null == (a = v._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, r = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || r()
                    }), a.unqueued++, u.always(function() {
                        u.always(function() {
                            a.unqueued--, v.queue(t, "fx").length || a.empty.fire()
                        })
                    })), e)
                    if (s = e[n], Kt.test(s)) {
                        if (delete e[n], o = o || "toggle" === s, s === (g ? "hide" : "show")) {
                            if ("show" !== s || !m || void 0 === m[n]) continue;
                            g = !0
                        }
                        p[n] = m && m[n] || v.style(t, n)
                    } if ((l = !v.isEmptyObject(e)) || !v.isEmptyObject(p))
                    for (n in d && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (h = m && m.display) && (h = V.get(t, "display")), "none" === (c = v.css(t, "display")) && (h ? c = h : (ot([t], !0), h = t.style.display || h, c = v.css(t, "display"), ot([t]))), ("inline" === c || "inline-block" === c && null != h) && "none" === v.css(t, "float") && (l || (u.done(function() {
                            f.display = h
                        }), null == h && (c = f.display, h = "none" === c ? "" : c)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", u.always(function() {
                            f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                        })), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = V.access(t, "fxshow", {
                        display: h
                    }), o && (m.hidden = !g), g && ot([t], !0), u.done(function() {
                        for (n in g || ot([t]), V.remove(t, "fxshow"), p) v.style(t, n, p[n])
                    })), l = ne(g ? m[n] : 0, n, u), n in m || (m[n] = l.start, g && (l.end = l.start, l.start = 0))
            }],
            prefilter: function(t, e) {
                e ? se.prefilters.unshift(t) : se.prefilters.push(t)
            }
        }), v.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? v.extend({}, t) : {
                complete: i || !i && e || v.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !v.isFunction(e) && e
            };
            return v.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in v.fx.speeds ? n.duration = v.fx.speeds[n.duration] : n.duration = v.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                v.isFunction(n.old) && n.old.call(this), n.queue && v.dequeue(this, n.queue)
            }, n
        }, v.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(tt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var s = v.isEmptyObject(t),
                    o = v.speed(e, i, n),
                    a = function() {
                        var e = se(this, v.extend({}, t), o);
                        (s || V.get(this, "finish")) && e.stop(!0)
                    };
                return a.finish = a, s || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(t, e, i) {
                var n = function(t) {
                    var e = t.stop;
                    delete t.stop, e(i)
                };
                return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        s = null != t && t + "queueHooks",
                        o = v.timers,
                        a = V.get(this);
                    if (s) a[s] && a[s].stop && n(a[s]);
                    else
                        for (s in a) a[s] && a[s].stop && Zt.test(s) && n(a[s]);
                    for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                    !e && i || v.dequeue(this, t)
                })
            },
            finish: function(t) {
                return !1 !== t && (t = t || "fx"), this.each(function() {
                    var e, i = V.get(this),
                        n = i[t + "queue"],
                        s = i[t + "queueHooks"],
                        o = v.timers,
                        a = n ? n.length : 0;
                    for (i.finish = !0, v.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), v.each(["toggle", "show", "hide"], function(t, e) {
            var i = v.fn[e];
            v.fn[e] = function(t, n, s) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(ie(e, !0), t, n, s)
            }
        }), v.each({
            slideDown: ie("show"),
            slideUp: ie("hide"),
            slideToggle: ie("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            v.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), v.timers = [], v.fx.tick = function() {
            var t, e = 0,
                i = v.timers;
            for (Qt = v.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
            i.length || v.fx.stop(), Qt = void 0
        }, v.fx.timer = function(t) {
            v.timers.push(t), v.fx.start()
        }, v.fx.interval = 13, v.fx.start = function() {
            Xt || (Xt = !0, te())
        }, v.fx.stop = function() {
            Xt = null
        }, v.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, v.fn.delay = function(e, i) {
            return e = v.fx && v.fx.speeds[e] || e, i = i || "fx", this.queue(i, function(i, n) {
                var s = t.setTimeout(i, e);
                n.stop = function() {
                    t.clearTimeout(s)
                }
            })
        },
        function() {
            var t = n.createElement("input"),
                e = n.createElement("select").appendChild(n.createElement("option"));
            t.type = "checkbox", f.checkOn = "" !== t.value, f.optSelected = e.selected, (t = n.createElement("input")).value = "t", t.type = "radio", f.radioValue = "t" === t.value
        }();
    var oe, ae = v.expr.attrHandle;
    v.fn.extend({
        attr: function(t, e) {
            return U(this, v.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                v.removeAttr(this, t)
            })
        }
    }), v.extend({
        attr: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? v.prop(t, e, i) : (1 === o && v.isXMLDoc(t) || (s = v.attrHooks[e.toLowerCase()] || (v.expr.match.bool.test(e) ? oe : void 0)), void 0 !== i ? null === i ? void v.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : null == (n = v.find.attr(t, e)) ? void 0 : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!f.radioValue && "radio" === e && _(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var i, n = 0,
                s = e && e.match(F);
            if (s && 1 === t.nodeType)
                for (; i = s[n++];) t.removeAttribute(i)
        }
    }), oe = {
        set: function(t, e, i) {
            return !1 === e ? v.removeAttr(t, i) : t.setAttribute(i, i), i
        }
    }, v.each(v.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var i = ae[e] || v.find.attr;
        ae[e] = function(t, e, n) {
            var s, o, a = e.toLowerCase();
            return n || (o = ae[a], ae[a] = s, s = null != i(t, e, n) ? a : null, ae[a] = o), s
        }
    });
    var re = /^(?:input|select|textarea|button)$/i,
        le = /^(?:a|area)$/i;

    function he(t) {
        return (t.match(F) || []).join(" ")
    }

    function ce(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    v.fn.extend({
        prop: function(t, e) {
            return U(this, v.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[v.propFix[t] || t]
            })
        }
    }), v.extend({
        prop: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && v.isXMLDoc(t) || (e = v.propFix[e] || e, s = v.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = v.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : re.test(t.nodeName) || le.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), f.optSelected || (v.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        v.propFix[this.toLowerCase()] = this
    }), v.fn.extend({
        addClass: function(t) {
            var e, i, n, s, o, a, r, l = 0;
            if (v.isFunction(t)) return this.each(function(e) {
                v(this).addClass(t.call(this, e, ce(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(F) || []; i = this[l++];)
                    if (s = ce(i), n = 1 === i.nodeType && " " + he(s) + " ") {
                        for (a = 0; o = e[a++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        s !== (r = he(n)) && i.setAttribute("class", r)
                    } return this
        },
        removeClass: function(t) {
            var e, i, n, s, o, a, r, l = 0;
            if (v.isFunction(t)) return this.each(function(e) {
                v(this).removeClass(t.call(this, e, ce(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(F) || []; i = this[l++];)
                    if (s = ce(i), n = 1 === i.nodeType && " " + he(s) + " ") {
                        for (a = 0; o = e[a++];)
                            for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                        s !== (r = he(n)) && i.setAttribute("class", r)
                    } return this
        },
        toggleClass: function(t, e) {
            var i = typeof t;
            return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : v.isFunction(t) ? this.each(function(i) {
                v(this).toggleClass(t.call(this, i, ce(this), e), e)
            }) : this.each(function() {
                var e, n, s, o;
                if ("string" === i)
                    for (n = 0, s = v(this), o = t.match(F) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else void 0 !== t && "boolean" !== i || ((e = ce(this)) && V.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : V.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, i, n = 0;
            for (e = " " + t + " "; i = this[n++];)
                if (1 === i.nodeType && (" " + he(ce(i)) + " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var de = /\r/g;
    v.fn.extend({
        val: function(t) {
            var e, i, n, s = this[0];
            return arguments.length ? (n = v.isFunction(t), this.each(function(i) {
                var s;
                1 === this.nodeType && (null == (s = n ? t.call(this, i, v(this).val()) : t) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = v.map(s, function(t) {
                    return null == t ? "" : t + ""
                })), (e = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
            })) : s ? (e = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : "string" == typeof(i = s.value) ? i.replace(de, "") : null == i ? "" : i : void 0
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = v.find.attr(t, "value");
                    return null != e ? e : he(v.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, i, n, s = t.options,
                        o = t.selectedIndex,
                        a = "select-one" === t.type,
                        r = a ? null : [],
                        l = a ? o + 1 : s.length;
                    for (n = o < 0 ? l : a ? o : 0; n < l; n++)
                        if (((i = s[n]).selected || n === o) && !i.disabled && (!i.parentNode.disabled || !_(i.parentNode, "optgroup"))) {
                            if (e = v(i).val(), a) return e;
                            r.push(e)
                        } return r
                },
                set: function(t, e) {
                    for (var i, n, s = t.options, o = v.makeArray(e), a = s.length; a--;)((n = s[a]).selected = v.inArray(v.valHooks.option.get(n), o) > -1) && (i = !0);
                    return i || (t.selectedIndex = -1), o
                }
            }
        }
    }), v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e)) return t.checked = v.inArray(v(t).val(), e) > -1
            }
        }, f.checkOn || (v.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var ue = /^(?:focusinfocus|focusoutblur)$/;
    v.extend(v.event, {
        trigger: function(e, i, s, o) {
            var a, r, l, h, c, u, p, f = [s || n],
                g = d.call(e, "type") ? e.type : e,
                m = d.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = l = s = s || n, 3 !== s.nodeType && 8 !== s.nodeType && !ue.test(g + v.event.triggered) && (g.indexOf(".") > -1 && (g = (m = g.split(".")).shift(), m.sort()), c = g.indexOf(":") < 0 && "on" + g, (e = e[v.expando] ? e : new v.Event(g, "object" == typeof e && e)).isTrigger = o ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = s), i = null == i ? [e] : v.makeArray(i, [e]), p = v.event.special[g] || {}, o || !p.trigger || !1 !== p.trigger.apply(s, i))) {
                if (!o && !p.noBubble && !v.isWindow(s)) {
                    for (h = p.delegateType || g, ue.test(h + g) || (r = r.parentNode); r; r = r.parentNode) f.push(r), l = r;
                    l === (s.ownerDocument || n) && f.push(l.defaultView || l.parentWindow || t)
                }
                for (a = 0;
                    (r = f[a++]) && !e.isPropagationStopped();) e.type = a > 1 ? h : p.bindType || g, (u = (V.get(r, "events") || {})[e.type] && V.get(r, "handle")) && u.apply(r, i), (u = c && r[c]) && u.apply && J(r) && (e.result = u.apply(r, i), !1 === e.result && e.preventDefault());
                return e.type = g, o || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(f.pop(), i) || !J(s) || c && v.isFunction(s[g]) && !v.isWindow(s) && ((l = s[c]) && (s[c] = null), v.event.triggered = g, s[g](), v.event.triggered = void 0, l && (s[c] = l)), e.result
            }
        },
        simulate: function(t, e, i) {
            var n = v.extend(new v.Event, i, {
                type: t,
                isSimulated: !0
            });
            v.event.trigger(n, null, e)
        }
    }), v.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                v.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            if (i) return v.event.trigger(t, e, i, !0)
        }
    }), v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
        v.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), v.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), f.focusin = "onfocusin" in t, f.focusin || v.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            v.event.simulate(e, t.target, v.event.fix(t))
        };
        v.event.special[e] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    s = V.access(n, e);
                s || n.addEventListener(t, i, !0), V.access(n, e, (s || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    s = V.access(n, e) - 1;
                s ? V.access(n, e, s) : (n.removeEventListener(t, i, !0), V.remove(n, e))
            }
        }
    });
    var pe = t.location,
        fe = v.now(),
        ge = /\?/;
    v.parseXML = function(e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + e), i
    };
    var me = /\[\]$/,
        ve = /\r?\n/g,
        ye = /^(?:submit|button|image|reset|file)$/i,
        be = /^(?:input|select|textarea|keygen)/i;

    function we(t, e, i, n) {
        var s;
        if (Array.isArray(e)) v.each(e, function(e, s) {
            i || me.test(t) ? n(t, s) : we(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n)
        });
        else if (i || "object" !== v.type(e)) n(t, e);
        else
            for (s in e) we(t + "[" + s + "]", e[s], i, n)
    }
    v.param = function(t, e) {
        var i, n = [],
            s = function(t, e) {
                var i = v.isFunction(e) ? e() : e;
                n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (Array.isArray(t) || t.jquery && !v.isPlainObject(t)) v.each(t, function() {
            s(this.name, this.value)
        });
        else
            for (i in t) we(i, t[i], e, s);
        return n.join("&")
    }, v.fn.extend({
        serialize: function() {
            return v.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = v.prop(this, "elements");
                return t ? v.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !v(this).is(":disabled") && be.test(this.nodeName) && !ye.test(t) && (this.checked || !at.test(t))
            }).map(function(t, e) {
                var i = v(this).val();
                return null == i ? null : Array.isArray(i) ? v.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ve, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(ve, "\r\n")
                }
            }).get()
        }
    });
    var xe = /%20/g,
        Se = /#.*$/,
        ke = /([?&])_=[^&]*/,
        De = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ce = /^(?:GET|HEAD)$/,
        Te = /^\/\//,
        _e = {},
        Me = {},
        Ae = "*/".concat("*"),
        Pe = n.createElement("a");

    function Oe(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s = 0,
                o = e.toLowerCase().match(F) || [];
            if (v.isFunction(i))
                for (; n = o[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
        }
    }

    function Ie(t, e, i, n) {
        var s = {},
            o = t === Me;

        function a(r) {
            var l;
            return s[r] = !0, v.each(t[r] || [], function(t, r) {
                var h = r(e, i, n);
                return "string" != typeof h || o || s[h] ? o ? !(l = h) : void 0 : (e.dataTypes.unshift(h), a(h), !1)
            }), l
        }
        return a(e.dataTypes[0]) || !s["*"] && a("*")
    }

    function Ne(t, e) {
        var i, n, s = v.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
        return n && v.extend(!0, t, n), t
    }
    Pe.href = pe.href, v.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: pe.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pe.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ae,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": v.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Ne(Ne(t, v.ajaxSettings), e) : Ne(v.ajaxSettings, t)
        },
        ajaxPrefilter: Oe(_e),
        ajaxTransport: Oe(Me),
        ajax: function(e, i) {
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var s, o, a, r, l, h, c, d, u, p, f = v.ajaxSetup({}, i),
                g = f.context || f,
                m = f.context && (g.nodeType || g.jquery) ? v(g) : v.event,
                y = v.Deferred(),
                b = v.Callbacks("once memory"),
                w = f.statusCode || {},
                x = {},
                S = {},
                k = "canceled",
                D = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (c) {
                            if (!r)
                                for (r = {}; e = De.exec(a);) r[e[1].toLowerCase()] = e[2];
                            e = r[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return c ? a : null
                    },
                    setRequestHeader: function(t, e) {
                        return null == c && (t = S[t.toLowerCase()] = S[t.toLowerCase()] || t, x[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return null == c && (f.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (c) D.always(t[D.status]);
                            else
                                for (e in t) w[e] = [w[e], t[e]];
                        return this
                    },
                    abort: function(t) {
                        var e = t || k;
                        return s && s.abort(e), C(0, e), this
                    }
                };
            if (y.promise(D), f.url = ((e || f.url || pe.href) + "").replace(Te, pe.protocol + "//"), f.type = i.method || i.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(F) || [""], null == f.crossDomain) {
                h = n.createElement("a");
                try {
                    h.href = f.url, h.href = h.href, f.crossDomain = Pe.protocol + "//" + Pe.host != h.protocol + "//" + h.host
                } catch (t) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = v.param(f.data, f.traditional)), Ie(_e, f, i, D), c) return D;
            for (u in (d = v.event && f.global) && 0 == v.active++ && v.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ce.test(f.type), o = f.url.replace(Se, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(xe, "+")) : (p = f.url.slice(o.length), f.data && (o += (ge.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (o = o.replace(ke, "$1"), p = (ge.test(o) ? "&" : "?") + "_=" + fe++ + p), f.url = o + p), f.ifModified && (v.lastModified[o] && D.setRequestHeader("If-Modified-Since", v.lastModified[o]), v.etag[o] && D.setRequestHeader("If-None-Match", v.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && D.setRequestHeader("Content-Type", f.contentType), D.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ae + "; q=0.01" : "") : f.accepts["*"]), f.headers) D.setRequestHeader(u, f.headers[u]);
            if (f.beforeSend && (!1 === f.beforeSend.call(g, D, f) || c)) return D.abort();
            if (k = "abort", b.add(f.complete), D.done(f.success), D.fail(f.error), s = Ie(Me, f, i, D)) {
                if (D.readyState = 1, d && m.trigger("ajaxSend", [D, f]), c) return D;
                f.async && f.timeout > 0 && (l = t.setTimeout(function() {
                    D.abort("timeout")
                }, f.timeout));
                try {
                    c = !1, s.send(x, C)
                } catch (t) {
                    if (c) throw t;
                    C(-1, t)
                }
            } else C(-1, "No Transport");

            function C(e, i, n, r) {
                var h, u, p, x, S, k = i;
                c || (c = !0, l && t.clearTimeout(l), s = void 0, a = r || "", D.readyState = e > 0 ? 4 : 0, h = e >= 200 && e < 300 || 304 === e, n && (x = function(t, e, i) {
                    for (var n, s, o, a, r = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (n)
                        for (s in r)
                            if (r[s] && r[s].test(n)) {
                                l.unshift(s);
                                break
                            } if (l[0] in i) o = l[0];
                    else {
                        for (s in i) {
                            if (!l[0] || t.converters[s + " " + l[0]]) {
                                o = s;
                                break
                            }
                            a || (a = s)
                        }
                        o = o || a
                    }
                    if (o) return o !== l[0] && l.unshift(o), i[o]
                }(f, D, n)), x = function(t, e, i, n) {
                    var s, o, a, r, l, h = {},
                        c = t.dataTypes.slice();
                    if (c[1])
                        for (a in t.converters) h[a.toLowerCase()] = t.converters[a];
                    for (o = c.shift(); o;)
                        if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) {
                        if (!(a = h[l + " " + o] || h["* " + o]))
                            for (s in h)
                                if ((r = s.split(" "))[1] === o && (a = h[l + " " + r[0]] || h["* " + r[0]])) {
                                    !0 === a ? a = h[s] : !0 !== h[s] && (o = r[0], c.unshift(r[1]));
                                    break
                                } if (!0 !== a)
                            if (a && t.throws) e = a(e);
                            else try {
                                e = a(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: a ? t : "No conversion from " + l + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(f, x, D, h), h ? (f.ifModified && ((S = D.getResponseHeader("Last-Modified")) && (v.lastModified[o] = S), (S = D.getResponseHeader("etag")) && (v.etag[o] = S)), 204 === e || "HEAD" === f.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = x.state, u = x.data, h = !(p = x.error))) : (p = k, !e && k || (k = "error", e < 0 && (e = 0))), D.status = e, D.statusText = (i || k) + "", h ? y.resolveWith(g, [u, k, D]) : y.rejectWith(g, [D, k, p]), D.statusCode(w), w = void 0, d && m.trigger(h ? "ajaxSuccess" : "ajaxError", [D, f, h ? u : p]), b.fireWith(g, [D, k]), d && (m.trigger("ajaxComplete", [D, f]), --v.active || v.event.trigger("ajaxStop")))
            }
            return D
        },
        getJSON: function(t, e, i) {
            return v.get(t, e, i, "json")
        },
        getScript: function(t, e) {
            return v.get(t, void 0, e, "script")
        }
    }), v.each(["get", "post"], function(t, e) {
        v[e] = function(t, i, n, s) {
            return v.isFunction(i) && (s = s || n, n = i, i = void 0), v.ajax(v.extend({
                url: t,
                type: e,
                dataType: s,
                data: i,
                success: n
            }, v.isPlainObject(t) && t))
        }
    }), v._evalUrl = function(t) {
        return v.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, v.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (v.isFunction(t) && (t = t.call(this[0])), e = v(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function(t) {
            return v.isFunction(t) ? this.each(function(e) {
                v(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = v(this),
                    i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = v.isFunction(t);
            return this.each(function(i) {
                v(this).wrapAll(e ? t.call(this, i) : t)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                v(this).replaceWith(this.childNodes)
            }), this
        }
    }), v.expr.pseudos.hidden = function(t) {
        return !v.expr.pseudos.visible(t)
    }, v.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, v.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (t) {}
    };
    var $e = {
            0: 200,
            1223: 204
        },
        Ee = v.ajaxSettings.xhr();
    f.cors = !!Ee && "withCredentials" in Ee, f.ajax = Ee = !!Ee, v.ajaxTransport(function(e) {
        var i, n;
        if (f.cors || Ee && !e.crossDomain) return {
            send: function(s, o) {
                var a, r = e.xhr();
                if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (a in e.xhrFields) r[a] = e.xhrFields[a];
                for (a in e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) r.setRequestHeader(a, s[a]);
                i = function(t) {
                    return function() {
                        i && (i = n = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === t ? r.abort() : "error" === t ? "number" != typeof r.status ? o(0, "error") : o(r.status, r.statusText) : o($e[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = i(), n = r.onerror = i("error"), void 0 !== r.onabort ? r.onabort = n : r.onreadystatechange = function() {
                    4 === r.readyState && t.setTimeout(function() {
                        i && n()
                    })
                }, i = i("abort");
                try {
                    r.send(e.hasContent && e.data || null)
                } catch (t) {
                    if (i) throw t
                }
            },
            abort: function() {
                i && i()
            }
        }
    }), v.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return v.globalEval(t), t
            }
        }
    }), v.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), v.ajaxTransport("script", function(t) {
        var e, i;
        if (t.crossDomain) return {
            send: function(s, o) {
                e = v("<script>").prop({
                    charset: t.scriptCharset,
                    src: t.url
                }).on("load error", i = function(t) {
                    e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                }), n.head.appendChild(e[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Fe = [],
        je = /(=)\?(?=&|$)|\?\?/;
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Fe.pop() || v.expando + "_" + fe++;
            return this[t] = !0, t
        }
    }), v.ajaxPrefilter("json jsonp", function(e, i, n) {
        var s, o, a, r = !1 !== e.jsonp && (je.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && je.test(e.data) && "data");
        if (r || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = v.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(je, "$1" + s) : !1 !== e.jsonp && (e.url += (ge.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
            return a || v.error(s + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = t[s], t[s] = function() {
            a = arguments
        }, n.always(function() {
            void 0 === o ? v(t).removeProp(s) : t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, Fe.push(s)), a && v.isFunction(o) && o(a[0]), a = o = void 0
        }), "script"
    }), f.createHTMLDocument = function() {
        var t = n.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), v.parseHTML = function(t, e, i) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (f.createHTMLDocument ? ((s = (e = n.implementation.createHTMLDocument("")).createElement("base")).href = n.location.href, e.head.appendChild(s)) : e = n), o = M.exec(t), a = !i && [], o ? [e.createElement(o[1])] : (o = pt([t], e, a), a && a.length && v(a).remove(), v.merge([], o.childNodes)));
        var s, o, a
    }, v.fn.load = function(t, e, i) {
        var n, s, o, a = this,
            r = t.indexOf(" ");
        return r > -1 && (n = he(t.slice(r)), t = t.slice(0, r)), v.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), a.length > 0 && v.ajax({
            url: t,
            type: s || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, a.html(n ? v("<div>").append(v.parseHTML(t)).find(n) : t)
        }).always(i && function(t, e) {
            a.each(function() {
                i.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        v.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), v.expr.pseudos.animated = function(t) {
        return v.grep(v.timers, function(e) {
            return t === e.elem
        }).length
    }, v.offset = {
        setOffset: function(t, e, i) {
            var n, s, o, a, r, l, h = v.css(t, "position"),
                c = v(t),
                d = {};
            "static" === h && (t.style.position = "relative"), r = c.offset(), o = v.css(t, "top"), l = v.css(t, "left"), ("absolute" === h || "fixed" === h) && (o + l).indexOf("auto") > -1 ? (a = (n = c.position()).top, s = n.left) : (a = parseFloat(o) || 0, s = parseFloat(l) || 0), v.isFunction(e) && (e = e.call(t, i, v.extend({}, r))), null != e.top && (d.top = e.top - r.top + a), null != e.left && (d.left = e.left - r.left + s), "using" in e ? e.using.call(t, d) : c.css(d)
        }
    }, v.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                v.offset.setOffset(this, t, e)
            });
            var e, i, n, s, o = this[0];
            return o ? o.getClientRects().length ? (n = o.getBoundingClientRect(), i = (e = o.ownerDocument).documentElement, s = e.defaultView, {
                top: n.top + s.pageYOffset - i.clientTop,
                left: n.left + s.pageXOffset - i.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === v.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), _(t[0], "html") || (n = t.offset()), n = {
                    top: n.top + v.css(t[0], "borderTopWidth", !0),
                    left: n.left + v.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - n.top - v.css(i, "marginTop", !0),
                    left: e.left - n.left - v.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === v.css(t, "position");) t = t.offsetParent;
                return t || ft
            })
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var i = "pageYOffset" === e;
        v.fn[t] = function(n) {
            return U(this, function(t, n, s) {
                var o;
                return v.isWindow(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === s ? o ? o[e] : t[n] : void(o ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset) : t[n] = s)
            }, t, n, arguments.length)
        }
    }), v.each(["top", "left"], function(t, e) {
        v.cssHooks[e] = Lt(f.pixelPosition, function(t, i) {
            if (i) return i = jt(t, e), Et.test(i) ? v(t).position()[e] + "px" : i
        })
    }), v.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        v.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(i, n) {
            v.fn[n] = function(s, o) {
                var a = arguments.length && (i || "boolean" != typeof s),
                    r = i || (!0 === s || !0 === o ? "margin" : "border");
                return U(this, function(e, i, s) {
                    var o;
                    return v.isWindow(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === s ? v.css(e, i, r) : v.style(e, i, s, r)
                }, e, a ? s : void 0, a)
            }
        })
    }), v.fn.extend({
        bind: function(t, e, i) {
            return this.on(t, null, e, i)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, i, n) {
            return this.on(e, t, i, n)
        },
        undelegate: function(t, e, i) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
        }
    }), v.holdReady = function(t) {
        t ? v.readyWait++ : v.ready(!0)
    }, v.isArray = Array.isArray, v.parseJSON = JSON.parse, v.nodeName = _, "function" == typeof define && define.amd && define("jquery", [], function() {
        return v
    });
    var Le = t.jQuery,
        ze = t.$;
    return v.noConflict = function(e) {
        return t.$ === v && (t.$ = ze), e && t.jQuery === v && (t.jQuery = Le), v
    }, e || (t.jQuery = t.$ = v), v
}), function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(t) {
    t.ui = t.ui || {};
    t.ui.version = "1.12.1";
    var e, i = 0,
        n = Array.prototype.slice;
    t.cleanData = (e = t.cleanData, function(i) {
        var n, s, o;
        for (o = 0; null != (s = i[o]); o++) try {
            (n = t._data(s, "events")) && n.remove && t(s).triggerHandler("remove")
        } catch (t) {}
        e(i)
    }), t.widget = function(e, i, n) {
        var s, o, a, r = {},
            l = e.split(".")[0],
            h = l + "-" + (e = e.split(".")[1]);
        return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))), t.expr[":"][h.toLowerCase()] = function(e) {
            return !!t.data(e, h)
        }, t[l] = t[l] || {}, s = t[l][e], o = t[l][e] = function(t, e) {
            if (!this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e)
        }, t.extend(o, s, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }), (a = new i).options = t.widget.extend({}, a.options), t.each(n, function(e, n) {
            t.isFunction(n) ? r[e] = function() {
                function t() {
                    return i.prototype[e].apply(this, arguments)
                }

                function s(t) {
                    return i.prototype[e].apply(this, t)
                }
                return function() {
                    var e, i = this._super,
                        o = this._superApply;
                    return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
                }
            }() : r[e] = n
        }), o.prototype = t.widget.extend(a, {
            widgetEventPrefix: s && a.widgetEventPrefix || e
        }, r, {
            constructor: o,
            namespace: l,
            widgetName: e,
            widgetFullName: h
        }), s ? (t.each(s._childConstructors, function(e, i) {
            var n = i.prototype;
            t.widget(n.namespace + "." + n.widgetName, o, i._proto)
        }), delete s._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
    }, t.widget.extend = function(e) {
        for (var i, s, o = n.call(arguments, 1), a = 0, r = o.length; a < r; a++)
            for (i in o[a]) s = o[a][i], o[a].hasOwnProperty(i) && void 0 !== s && (t.isPlainObject(s) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : e[i] = s);
        return e
    }, t.widget.bridge = function(e, i) {
        var s = i.prototype.widgetFullName || e;
        t.fn[e] = function(o) {
            var a = "string" == typeof o,
                r = n.call(arguments, 1),
                l = this;
            return a ? this.length || "instance" !== o ? this.each(function() {
                var i, n = t.data(this, s);
                return "instance" === o ? (l = n, !1) : n ? t.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, r)) !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'")
            }) : l = void 0 : (r.length && (o = t.widget.extend.apply(null, [o].concat(r))), this.each(function() {
                var e = t.data(this, s);
                e ? (e.option(o || {}), e._init && e._init()) : t.data(this, s, new i(o, this))
            })), l
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(e, n) {
            n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === n && this.destroy()
                }
            }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            var e = this;
            this._destroy(), t.each(this.classesElementLookup, function(t, i) {
                e._removeClass(i, t)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(e, i) {
            var n, s, o, a = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (a = {}, e = (n = e.split(".")).shift(), n.length) {
                    for (s = a[e] = t.widget.extend({}, this.options[e]), o = 0; o < n.length - 1; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                    if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                    s[e] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                    a[e] = i
                } return this._setOptions(a), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
        },
        _setOptionClasses: function(e) {
            var i, n, s;
            for (i in e) s = this.classesElementLookup[i], e[i] !== this.options.classes[i] && s && s.length && (n = t(s.get()), this._removeClass(s, i), n.addClass(this._classes({
                element: n,
                keys: i,
                classes: e,
                add: !0
            })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(e) {
            var i = [],
                n = this;

            function s(s, o) {
                var a, r;
                for (r = 0; r < s.length; r++) a = n.classesElementLookup[s[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[s[r]] = a, i.push(s[r]), o && e.classes[s[r]] && i.push(e.classes[s[r]])
            }
            return e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e), this._on(e.element, {
                remove: "_untrackClassesElement"
            }), e.keys && s(e.keys.match(/\S+/g) || [], !0), e.extra && s(e.extra.match(/\S+/g) || []), i.join(" ")
        },
        _untrackClassesElement: function(e) {
            var i = this;
            t.each(i.classesElementLookup, function(n, s) {
                -1 !== t.inArray(e.target, s) && (i.classesElementLookup[n] = t(s.not(e.target).get()))
            })
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, n) {
            n = "boolean" == typeof n ? n : i;
            var s = "string" == typeof t || null === t,
                o = {
                    extra: s ? e : i,
                    keys: s ? t : e,
                    element: s ? this.element : t,
                    add: n
                };
            return o.element.toggleClass(this._classes(o), n), this
        },
        _on: function(e, i, n) {
            var s, o = this;
            "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function(n, a) {
                function r() {
                    if (e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof a ? o[a] : a).apply(o, arguments)
                }
                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var l = n.match(/^([\w:-]*)\s*(.*)$/),
                    h = l[1] + o.eventNamespace,
                    c = l[2];
                c ? s.on(h, c, r) : i.on(h, r)
            })
        },
        _off: function(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus")
                },
                focusout: function(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, n) {
            var s, o, a = this.options[e];
            if (n = n || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                for (s in o) s in i || (i[s] = o[s]);
            return this.element.trigger(i, n), !(t.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(n, s, o) {
            var a;
            "string" == typeof s && (s = {
                effect: s
            });
            var r = s ? !0 === s || "number" == typeof s ? i : s.effect || i : e;
            "number" == typeof(s = s || {}) && (s = {
                duration: s
            }), a = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), a && t.effects && t.effects.effect[r] ? n[e](s) : r !== e && n[r] ? n[r](s.duration, s.easing, o) : n.queue(function(i) {
                t(this)[e](), o && o.call(n[0]), i()
            })
        }
    });
    t.widget;
    ! function() {
        var e, i = Math.max,
            n = Math.abs,
            s = /left|center|right/,
            o = /top|center|bottom/,
            a = /[\+\-]\d+(\.[\d]+)?%?/,
            r = /^\w+/,
            l = /%$/,
            h = t.fn.position;

        function c(t, e, i) {
            return [parseFloat(t[0]) * (l.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (l.test(t[1]) ? i / 100 : 1)]
        }

        function d(e, i) {
            return parseInt(t.css(e, i), 10) || 0
        }
        t.position = {
            scrollbarWidth: function() {
                if (void 0 !== e) return e;
                var i, n, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    o = s.children()[0];
                return t("body").append(s), i = o.offsetWidth, s.css("overflow", "scroll"), i === (n = o.offsetWidth) && (n = s[0].clientWidth), s.remove(), e = i - n
            },
            getScrollInfo: function(e) {
                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                    n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                    s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                return {
                    width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                    height: s ? t.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(e) {
                var i = t(e || window),
                    n = t.isWindow(i[0]),
                    s = !!i[0] && 9 === i[0].nodeType;
                return {
                    element: i,
                    isWindow: n,
                    isDocument: s,
                    offset: !n && !s ? t(e).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: i.outerWidth(),
                    height: i.outerHeight()
                }
            }
        }, t.fn.position = function(e) {
            if (!e || !e.of) return h.apply(this, arguments);
            e = t.extend({}, e);
            var l, u, p, f, g, m, v, y, b = t(e.of),
                w = t.position.getWithinInfo(e.within),
                x = t.position.getScrollInfo(w),
                S = (e.collision || "flip").split(" "),
                k = {};
            return m = 9 === (y = (v = b)[0]).nodeType ? {
                width: v.width(),
                height: v.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            } : t.isWindow(y) ? {
                width: v.width(),
                height: v.height(),
                offset: {
                    top: v.scrollTop(),
                    left: v.scrollLeft()
                }
            } : y.preventDefault ? {
                width: 0,
                height: 0,
                offset: {
                    top: y.pageY,
                    left: y.pageX
                }
            } : {
                width: v.outerWidth(),
                height: v.outerHeight(),
                offset: v.offset()
            }, b[0].preventDefault && (e.at = "left top"), u = m.width, p = m.height, f = m.offset, g = t.extend({}, f), t.each(["my", "at"], function() {
                var t, i, n = (e[this] || "").split(" ");
                1 === n.length && (n = s.test(n[0]) ? n.concat(["center"]) : o.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = s.test(n[0]) ? n[0] : "center", n[1] = o.test(n[1]) ? n[1] : "center", t = a.exec(n[0]), i = a.exec(n[1]), k[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [r.exec(n[0])[0], r.exec(n[1])[0]]
            }), 1 === S.length && (S[1] = S[0]), "right" === e.at[0] ? g.left += u : "center" === e.at[0] && (g.left += u / 2), "bottom" === e.at[1] ? g.top += p : "center" === e.at[1] && (g.top += p / 2), l = c(k.at, u, p), g.left += l[0], g.top += l[1], this.each(function() {
                var s, o, a = t(this),
                    r = a.outerWidth(),
                    h = a.outerHeight(),
                    m = d(this, "marginLeft"),
                    v = d(this, "marginTop"),
                    y = r + m + d(this, "marginRight") + x.width,
                    D = h + v + d(this, "marginBottom") + x.height,
                    C = t.extend({}, g),
                    T = c(k.my, a.outerWidth(), a.outerHeight());
                "right" === e.my[0] ? C.left -= r : "center" === e.my[0] && (C.left -= r / 2), "bottom" === e.my[1] ? C.top -= h : "center" === e.my[1] && (C.top -= h / 2), C.left += T[0], C.top += T[1], s = {
                    marginLeft: m,
                    marginTop: v
                }, t.each(["left", "top"], function(i, n) {
                    t.ui.position[S[i]] && t.ui.position[S[i]][n](C, {
                        targetWidth: u,
                        targetHeight: p,
                        elemWidth: r,
                        elemHeight: h,
                        collisionPosition: s,
                        collisionWidth: y,
                        collisionHeight: D,
                        offset: [l[0] + T[0], l[1] + T[1]],
                        my: e.my,
                        at: e.at,
                        within: w,
                        elem: a
                    })
                }), e.using && (o = function(t) {
                    var s = f.left - C.left,
                        o = s + u - r,
                        l = f.top - C.top,
                        c = l + p - h,
                        d = {
                            target: {
                                element: b,
                                left: f.left,
                                top: f.top,
                                width: u,
                                height: p
                            },
                            element: {
                                element: a,
                                left: C.left,
                                top: C.top,
                                width: r,
                                height: h
                            },
                            horizontal: o < 0 ? "left" : s > 0 ? "right" : "center",
                            vertical: c < 0 ? "top" : l > 0 ? "bottom" : "middle"
                        };
                    u < r && n(s + o) < u && (d.horizontal = "center"), p < h && n(l + c) < p && (d.vertical = "middle"), i(n(s), n(o)) > i(n(l), n(c)) ? d.important = "horizontal" : d.important = "vertical", e.using.call(this, t, d)
                }), a.offset(t.extend(C, {
                    using: o
                }))
            })
        }, t.ui.position = {
            fit: {
                left: function(t, e) {
                    var n, s = e.within,
                        o = s.isWindow ? s.scrollLeft : s.offset.left,
                        a = s.width,
                        r = t.left - e.collisionPosition.marginLeft,
                        l = o - r,
                        h = r + e.collisionWidth - a - o;
                    e.collisionWidth > a ? l > 0 && h <= 0 ? (n = t.left + l + e.collisionWidth - a - o, t.left += l - n) : t.left = h > 0 && l <= 0 ? o : l > h ? o + a - e.collisionWidth : o : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = i(t.left - r, t.left)
                },
                top: function(t, e) {
                    var n, s = e.within,
                        o = s.isWindow ? s.scrollTop : s.offset.top,
                        a = e.within.height,
                        r = t.top - e.collisionPosition.marginTop,
                        l = o - r,
                        h = r + e.collisionHeight - a - o;
                    e.collisionHeight > a ? l > 0 && h <= 0 ? (n = t.top + l + e.collisionHeight - a - o, t.top += l - n) : t.top = h > 0 && l <= 0 ? o : l > h ? o + a - e.collisionHeight : o : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = i(t.top - r, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i, s, o = e.within,
                        a = o.offset.left + o.scrollLeft,
                        r = o.width,
                        l = o.isWindow ? o.scrollLeft : o.offset.left,
                        h = t.left - e.collisionPosition.marginLeft,
                        c = h - l,
                        d = h + e.collisionWidth - r - l,
                        u = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        f = -2 * e.offset[0];
                    c < 0 ? ((i = t.left + u + p + f + e.collisionWidth - r - a) < 0 || i < n(c)) && (t.left += u + p + f) : d > 0 && ((s = t.left - e.collisionPosition.marginLeft + u + p + f - l) > 0 || n(s) < d) && (t.left += u + p + f)
                },
                top: function(t, e) {
                    var i, s, o = e.within,
                        a = o.offset.top + o.scrollTop,
                        r = o.height,
                        l = o.isWindow ? o.scrollTop : o.offset.top,
                        h = t.top - e.collisionPosition.marginTop,
                        c = h - l,
                        d = h + e.collisionHeight - r - l,
                        u = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        f = -2 * e.offset[1];
                    c < 0 ? ((s = t.top + u + p + f + e.collisionHeight - r - a) < 0 || s < n(c)) && (t.top += u + p + f) : d > 0 && ((i = t.top - e.collisionPosition.marginTop + u + p + f - l) > 0 || n(i) < d) && (t.top += u + p + f)
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    }();
    var s;
    t.ui.position, t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
            return function(i) {
                return !!t.data(i, e)
            }
        }) : function(e, i, n) {
            return !!t.data(e, n[3])
        }
    }), t.fn.extend({
        disableSelection: (s = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function() {
            return this.on(s + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        }),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    });
    t.ui.focusable = function(e, i) {
        var n, s, o, a, r, l = e.nodeName.toLowerCase();
        return "area" === l ? (s = (n = e.parentNode).name, !(!e.href || !s || "map" !== n.nodeName.toLowerCase()) && ((o = t("img[usemap='#" + s + "']")).length > 0 && o.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(l) ? (a = !e.disabled) && (r = t(e).closest("fieldset")[0]) && (a = !r.disabled) : a = "a" === l && e.href || i, a && t(e).is(":visible") && function(t) {
            var e = t.css("visibility");
            for (;
                "inherit" === e;) t = t.parent(), e = t.css("visibility");
            return "hidden" !== e
        }(t(e)))
    }, t.extend(t.expr[":"], {
        focusable: function(e) {
            return t.ui.focusable(e, null != t.attr(e, "tabindex"))
        }
    });
    t.ui.focusable, t.fn.form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
    }, t.ui.formResetMixin = {
        _formResetHandler: function() {
            var e = t(this);
            setTimeout(function() {
                var i = e.data("ui-form-reset-instances");
                t.each(i, function() {
                    this.refresh()
                })
            })
        },
        _bindFormResetHandler: function() {
            if (this.form = this.element.form(), this.form.length) {
                var t = this.form.data("ui-form-reset-instances") || [];
                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var e = this.form.data("ui-form-reset-instances");
                e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    }, t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, t.ui.escapeSelector = (o = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, function(t) {
        return t.replace(o, "\\$1")
    }), t.fn.labels = function() {
        var e, i, n, s, o;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), (n = this.attr("id")) && (o = (e = this.eq(0).parents().last()).add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(n) + "']", s = s.add(o.find(i).addBack(i))), this.pushStack(s))
    }, t.fn.scrollParent = function(e) {
        var i = this.css("position"),
            n = "absolute" === i,
            s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            o = this.parents().filter(function() {
                var e = t(this);
                return (!n || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
            }).eq(0);
        return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
    }, t.extend(t.expr[":"], {
        tabbable: function(e) {
            var i = t.attr(e, "tabindex"),
                n = null != i;
            return (!n || i >= 0) && t.ui.focusable(e, n)
        }
    }), t.fn.extend({
        uniqueId: (a = 0, function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++a)
            })
        }),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var o, a, r = !1;
    t(document).on("mouseup", function() {
        r = !1
    });
    t.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).on("click." + this.widgetName, function(i) {
                if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(e) {
            if (!r) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this,
                    n = 1 === e.which,
                    s = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(n && !s && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return i._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return i._mouseUp(t)
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), r = !0, !0))
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, r = !1, e.preventDefault()
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }), t.ui.plugin = {
        add: function(e, i, n) {
            var s, o = t.ui[e].prototype;
            for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]])
        },
        call: function(t, e, i, n) {
            var s, o = t.plugins[e];
            if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (s = 0; s < o.length; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
        }
    }, t.ui.safeActiveElement = function(t) {
        var e;
        try {
            e = t.activeElement
        } catch (i) {
            e = t.body
        }
        return e || (e = t.body), e.nodeName || (e = t.body), e
    }, t.ui.safeBlur = function(e) {
        e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
    };
    t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function(t, e) {
            this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function() {
            (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(), this._mouseDestroy())
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blurActiveElement(e), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0))
        },
        _blockFrames: function(e) {
            this.iframeBlocks = this.document.find(e).map(function() {
                var e = t(this);
                return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function(e) {
            var i = t.ui.safeActiveElement(this.document[0]);
            t(e.target).closest(i).length || t.ui.safeBlur(i)
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                return "fixed" === t(this).css("position")
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _refreshOffsets: function(t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: t.pageX - this.offset.left,
                top: t.pageY - this.offset.top
            }
        },
        _mouseDrag: function(e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var n = this._uiHash();
                if (!1 === this._trigger("drag", e, n)) return this._mouseUp(new t.Event("mouseup", e)), !1;
                this.position = n.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function(e) {
            var i = this,
                n = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                !1 !== i._trigger("stop", e) && i._clear()
            }) : !1 !== this._trigger("stop", e) && this._clear(), !1
        },
        _mouseUp: function(e) {
            return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
                target: this.element[0]
            })) : this._clear(), this
        },
        _getHandle: function(e) {
            return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function(e) {
            var i = this.options,
                n = t.isFunction(i.helper),
                s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _isRootNode: function(t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0]
        },
        _getParentOffset: function() {
            var e = this.offsetParent.offset(),
                i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var t = this.element.position(),
                e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, n, s = this.options,
                o = this.document[0];
            this.relativeContainer = null, s.containment ? "window" !== s.containment ? "document" !== s.containment ? s.containment.constructor !== Array ? ("parent" === s.containment && (s.containment = this.helper[0].parentNode), (n = (i = t(s.containment))[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i)) : this.containment = s.containment : this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = null
        },
        _convertPositionTo: function(t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1,
                n = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(t, e) {
            var i, n, s, o, a = this.options,
                r = this._isRootNode(this.scrollParent[0]),
                l = t.pageX,
                h = t.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), a.grid && (s = a.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - a.grid[1] : s + a.grid[1] : s, o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (l = this.originalPageX), "x" === a.axis && (h = this.originalPageY)), {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _trigger: function(e, i, n) {
            return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, n)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i, n) {
            var s = t.extend({}, i, {
                item: n.element
            });
            n.sortables = [], t(n.options.connectToSortable).each(function() {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s))
            })
        },
        stop: function(e, i, n) {
            var s = t.extend({}, i, {
                item: n.element
            });
            n.cancelHelperRemoval = !1, t.each(n.sortables, function() {
                this.isOver ? (this.isOver = 0, n.cancelHelperRemoval = !0, this.cancelHelperRemoval = !1, this._storedCSS = {
                    position: this.placeholder.css("position"),
                    top: this.placeholder.css("top"),
                    left: this.placeholder.css("left")
                }, this._mouseStop(e), this.options.helper = this.options._helper) : (this.cancelHelperRemoval = !0, this._trigger("deactivate", e, s))
            })
        },
        drag: function(e, i, n) {
            t.each(n.sortables, function() {
                var s = !1,
                    o = this;
                o.positionAbs = n.positionAbs, o.helperProportions = n.helperProportions, o.offset.click = n.offset.click, o._intersectsWith(o.containerCache) && (s = !0, t.each(n.sortables, function() {
                    return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = !1), s
                })), s ? (o.isOver || (o.isOver = 1, n._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() {
                    return i.helper[0]
                }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, n._trigger("toSortable", e), n.dropped = o.element, t.each(n.sortables, function() {
                    this.refreshPositions()
                }), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(e), i.position = n._generatePosition(e, !0), n._trigger("fromSortable", e), n.dropped = !1, t.each(n.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function(e, i, n) {
            var s = t("body"),
                o = n.options;
            s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor)
        },
        stop: function(e, i, n) {
            var s = n.options;
            s._cursor && t("body").css("cursor", s._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i, n) {
            var s = t(i.helper),
                o = n.options;
            s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity)
        },
        stop: function(e, i, n) {
            var s = n.options;
            s._opacity && t(i.helper).css("opacity", s._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function(t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function(e, i, n) {
            var s = n.options,
                o = !1,
                a = n.scrollParentNotHidden[0],
                r = n.document[0];
            a !== r && "HTML" !== a.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + a.offsetHeight - e.pageY < s.scrollSensitivity ? a.scrollTop = o = a.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (a.scrollTop = o = a.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + a.offsetWidth - e.pageX < s.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(r).scrollTop() < s.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < s.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(r).scrollLeft() < s.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < s.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + s.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function(e, i, n) {
            var s = n.options;
            n.snapElements = [], t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function() {
                var e = t(this),
                    i = e.offset();
                this !== n.element[0] && n.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        },
        drag: function(e, i, n) {
            var s, o, a, r, l, h, c, d, u, p, f = n.options,
                g = f.snapTolerance,
                m = i.offset.left,
                v = m + n.helperProportions.width,
                y = i.offset.top,
                b = y + n.helperProportions.height;
            for (u = n.snapElements.length - 1; u >= 0; u--) h = (l = n.snapElements[u].left - n.margins.left) + n.snapElements[u].width, d = (c = n.snapElements[u].top - n.margins.top) + n.snapElements[u].height, v < l - g || m > h + g || b < c - g || y > d + g || !t.contains(n.snapElements[u].item.ownerDocument, n.snapElements[u].item) ? (n.snapElements[u].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
                snapItem: n.snapElements[u].item
            })), n.snapElements[u].snapping = !1) : ("inner" !== f.snapMode && (s = Math.abs(c - b) <= g, o = Math.abs(d - y) <= g, a = Math.abs(l - v) <= g, r = Math.abs(h - m) <= g, s && (i.position.top = n._convertPositionTo("relative", {
                top: c - n.helperProportions.height,
                left: 0
            }).top), o && (i.position.top = n._convertPositionTo("relative", {
                top: d,
                left: 0
            }).top), a && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: l - n.helperProportions.width
            }).left), r && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left)), p = s || o || a || r, "outer" !== f.snapMode && (s = Math.abs(c - y) <= g, o = Math.abs(d - b) <= g, a = Math.abs(l - m) <= g, r = Math.abs(h - v) <= g, s && (i.position.top = n._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top), o && (i.position.top = n._convertPositionTo("relative", {
                top: d - n.helperProportions.height,
                left: 0
            }).top), a && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left), r && (i.position.left = n._convertPositionTo("relative", {
                top: 0,
                left: h - n.helperProportions.width
            }).left)), !n.snapElements[u].snapping && (s || o || a || r || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
                snapItem: n.snapElements[u].item
            })), n.snapElements[u].snapping = s || o || a || r || p)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function(e, i, n) {
            var s, o = n.options,
                a = t.makeArray(t(o.stack)).sort(function(e, i) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                });
            a.length && (s = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) {
                t(this).css("zIndex", s + e)
            }), this.css("zIndex", s + a.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i, n) {
            var s = t(i.helper),
                o = n.options;
            s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex)
        },
        stop: function(e, i, n) {
            var s = n.options;
            s._zIndex && t(i.helper).css("zIndex", s._zIndex)
        }
    });
    t.ui.draggable;
    t.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var e, i = this.options,
                n = i.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(n) ? n : function(t) {
                return t.is(n)
            }, this.proportions = function() {
                if (!arguments.length) return e || (e = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                });
                e = arguments[0]
            }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function(e) {
            t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
        },
        _splice: function(t) {
            for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1)
        },
        _destroy: function() {
            var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e)
        },
        _setOption: function(e, i) {
            if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
                return t.is(i)
            };
            else if ("scope" === e) {
                var n = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(n), this._addToManager(i)
            }
            this._super(e, i)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var n = i || t.ui.ddmanager.current,
                s = !1;
            return !(!n || (n.currentItem || n.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var i = t(this).droppable("instance");
                if (i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && l(n, t.extend(i, {
                        offset: i.element.offset()
                    }), i.options.tolerance, e)) return s = !0, !1
            }), !s && (!!this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(n)), this.element)))
        },
        ui: function(t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        },
        _addHoverClass: function() {
            this._addClass("ui-droppable-hover")
        },
        _removeHoverClass: function() {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function() {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function() {
            this._removeClass("ui-droppable-active")
        }
    });
    var l = t.ui.intersect = function() {
        function t(t, e, i) {
            return t >= e && t < e + i
        }
        return function(e, i, n, s) {
            if (!i.offset) return !1;
            var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                a = (e.positionAbs || e.position.absolute).top + e.margins.top,
                r = o + e.helperProportions.width,
                l = a + e.helperProportions.height,
                h = i.offset.left,
                c = i.offset.top,
                d = h + i.proportions().width,
                u = c + i.proportions().height;
            switch (n) {
                case "fit":
                    return h <= o && r <= d && c <= a && l <= u;
                case "intersect":
                    return h < o + e.helperProportions.width / 2 && r - e.helperProportions.width / 2 < d && c < a + e.helperProportions.height / 2 && l - e.helperProportions.height / 2 < u;
                case "pointer":
                    return t(s.pageY, c, i.proportions().height) && t(s.pageX, h, i.proportions().width);
                case "touch":
                    return (a >= c && a <= u || l >= c && l <= u || a < c && l > u) && (o >= h && o <= d || r >= h && r <= d || o < h && r > d);
                default:
                    return !1
            }
        }
    }();
    t.ui.ddmanager = {
        current: null,
        droppables: {
            default: []
        },
        prepareOffsets: function(e, i) {
            var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                a = i ? i.type : null,
                r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (n = 0; n < o.length; n++)
                if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
                    for (s = 0; s < r.length; s++)
                        if (r[s] === o[n].element[0]) {
                            o[n].proportions().height = 0;
                            continue t
                        } o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === a && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({
                        width: o[n].element[0].offsetWidth,
                        height: o[n].element[0].offsetHeight
                    }))
                }
        },
        drop: function(e, i) {
            var n = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && l(e, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), n
        },
        dragStart: function(e, i) {
            e.element.parentsUntil("body").on("scroll.droppable", function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var n, s, o, a = l(e, this, this.options.tolerance, i),
                        r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (s = this.options.scope, (o = this.element.parents(":data(ui-droppable)").filter(function() {
                        return t(this).droppable("instance").options.scope === s
                    })).length && ((n = t(o[0]).droppable("instance")).greedyChild = "isover" === r)), n && "isover" === r && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), n && "isout" === r && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                }
            })
        },
        dragStop: function(e, i) {
            e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    }, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, {
        options: {
            hoverClass: !1,
            activeClass: !1
        },
        _addActiveClass: function() {
            this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function() {
            this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function() {
            this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function() {
            this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    });
    t.ui.droppable;
    t.widget("ui.resizable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(t) {
            return parseFloat(t) || 0
        },
        _isNumber: function(t) {
            return !isNaN(parseFloat(t))
        },
        _hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var n, s = i && "left" === i ? "scrollLeft" : "scrollTop";
            return e[s] > 0 || (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
        },
        _create: function() {
            var e, i = this.options,
                n = this;
            this._addClass("ui-resizable"), t.extend(this, {
                _aspectRatio: !!i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function() {
                i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show())
            }).on("mouseleave", function() {
                i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide())
            }), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var e, i = function(e) {
                t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _setOption: function(t, e) {
            switch (this._super(t, e), t) {
                case "handles":
                    this._removeHandles(), this._setupHandles()
            }
        },
        _setupHandles: function() {
            var e, i, n, s, o, a = this.options,
                r = this;
            if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; i < n.length; i++) s = "ui-resizable-" + (e = t.trim(n[i])), o = t("<div>"), this._addClass(o, "ui-resizable-handle " + s), o.css({
                    zIndex: a.zIndex
                }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
            this._renderAxis = function(e) {
                var i, n, s, o;
                for (i in e = e || this.element, this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
                    mousedown: r._mouseDown
                })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() {
                r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se")
            }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() {
            this._handles.remove()
        },
        _mouseCapture: function(e) {
            var i, n, s = !1;
            for (i in this.handles)((n = t(this.handles[i])[0]) === e.target || t.contains(n, e.target)) && (s = !0);
            return !this.options.disabled && s
        },
        _mouseStart: function(e) {
            var i, n, s, o = this.options,
                a = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: i,
                top: n
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: a.width(),
                height: a.height()
            }, this.originalSize = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            }, this.sizeDiff = {
                width: a.outerWidth() - a.width(),
                height: a.outerHeight() - a.height()
            }, this.originalPosition = {
                left: i,
                top: n
            }, this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
        },
        _mouseDrag: function(e) {
            var i, n, s = this.originalMousePosition,
                o = this.axis,
                a = e.pageX - s.left || 0,
                r = e.pageY - s.top || 0,
                l = this._change[o];
            return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, n, s, o, a, r, l, h = this.options;
            return this._helper && (s = (n = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : this.sizeDiff.height, o = n ? 0 : this.sizeDiff.width, a = {
                width: this.helper.width() - o,
                height: this.helper.height() - s
            }, r = parseFloat(this.element.css("left")) + (this.position.left - this.originalPosition.left) || null, l = parseFloat(this.element.css("top")) + (this.position.top - this.originalPosition.top) || null, h.animate || this.element.css(t.extend(a, {
                top: l,
                left: r
            })), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, n, s, o, a = this.options;
            o = {
                minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), i < o.maxWidth && (o.maxWidth = i), s < o.maxHeight && (o.maxHeight = s)), this._vBoundaries = o
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position,
                i = this.size,
                n = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
                i = this.axis,
                n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                r = this.originalPosition.left + this.originalSize.width,
                l = this.originalPosition.top + this.originalSize.height,
                h = /sw|nw|w/.test(i),
                c = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth), a && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && h && (t.left = r - e.minWidth), n && h && (t.left = r - e.maxWidth), a && c && (t.top = l - e.minHeight), s && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _getPaddingPlusBorderDimensions: function(t) {
            for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) i[e] = parseFloat(n[e]) || 0, i[e] += parseFloat(s[e]) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                    height: i.height() - this.outerDimensions.height || 0,
                    width: i.width() - this.outerDimensions.width || 0
                })
        },
        _renderProxy: function() {
            var e = this.element,
                i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize;
                return {
                    left: this.originalPosition.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var n = this.originalSize;
                return {
                    top: this.originalPosition.top + i,
                    height: n.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
            },
            sw: function(e, i, n) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
            },
            ne: function(e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
            },
            nw: function(e, i, n) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).resizable("instance"),
                n = i.options,
                s = i._proportionallyResizeElements,
                o = s.length && /textarea/i.test(s[0].nodeName),
                a = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                r = o ? 0 : i.sizeDiff.width,
                l = {
                    width: i.size.width - r,
                    height: i.size.height - a
                },
                h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, c && h ? {
                top: c,
                left: h
            } : {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function() {
                    var n = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    s && s.length && t(s[0]).css({
                        width: n.width,
                        height: n.height
                    }), i._updateCache(n), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var e, i, n, s, o, a, r, l = t(this).resizable("instance"),
                h = l.options,
                c = l.element,
                d = h.containment,
                u = d instanceof t ? d.get(0) : /parent/.test(d) ? c.parent().get(0) : d;
            u && (l.containerElement = t(u), /document/.test(d) || d === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {
                left: 0,
                top: 0
            }, l.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (e = t(u), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) {
                i[t] = l._num(e.css("padding" + n))
            }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                height: e.innerHeight() - i[3],
                width: e.innerWidth() - i[1]
            }, n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, a = l._hasScroll(u, "left") ? u.scrollWidth : o, r = l._hasScroll(u) ? u.scrollHeight : s, l.parentData = {
                element: u,
                left: n.left,
                top: n.top,
                width: a,
                height: r
            }))
        },
        resize: function(e) {
            var i, n, s, o, a = t(this).resizable("instance"),
                r = a.options,
                l = a.containerOffset,
                h = a.position,
                c = a._aspectRatio || e.shiftKey,
                d = {
                    top: 0,
                    left: 0
                },
                u = a.containerElement,
                p = !0;
            u[0] !== document && /static/.test(u.css("position")) && (d = l), h.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - d.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? l.left : 0), h.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? l.top : 0), s = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), s && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - d.left : a.offset.left - l.left)), n = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - d.top : a.offset.top - l.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), n + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - n, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
        },
        stop: function() {
            var e = t(this).resizable("instance"),
                i = e.options,
                n = e.containerOffset,
                s = e.containerPosition,
                o = e.containerElement,
                a = t(e.helper),
                r = a.offset(),
                l = a.outerWidth() - e.sizeDiff.width,
                h = a.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                left: r.left - s.left - n.left,
                width: l,
                height: h
            }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                left: r.left - s.left - n.left,
                width: l,
                height: h
            })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).resizable("instance").options;
            t(e.alsoResize).each(function() {
                var e = t(this);
                e.data("ui-resizable-alsoresize", {
                    width: parseFloat(e.width()),
                    height: parseFloat(e.height()),
                    left: parseFloat(e.css("left")),
                    top: parseFloat(e.css("top"))
                })
            })
        },
        resize: function(e, i) {
            var n = t(this).resizable("instance"),
                s = n.options,
                o = n.originalSize,
                a = n.originalPosition,
                r = {
                    height: n.size.height - o.height || 0,
                    width: n.size.width - o.width || 0,
                    top: n.position.top - a.top || 0,
                    left: n.position.left - a.left || 0
                };
            t(s.alsoResize).each(function() {
                var e = t(this),
                    n = t(this).data("ui-resizable-alsoresize"),
                    s = {},
                    o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(o, function(t, e) {
                    var i = (n[e] || 0) + (r[e] || 0);
                    i && i >= 0 && (s[e] = i || null)
                }), e.css(s)
            })
        },
        stop: function() {
            t(this).removeData("ui-resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).resizable("instance"),
                i = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e, i = t(this).resizable("instance"),
                n = i.options,
                s = i.size,
                o = i.originalSize,
                a = i.originalPosition,
                r = i.axis,
                l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                h = l[0] || 1,
                c = l[1] || 1,
                d = Math.round((s.width - o.width) / h) * h,
                u = Math.round((s.height - o.height) / c) * c,
                p = o.width + d,
                f = o.height + u,
                g = n.maxWidth && n.maxWidth < p,
                m = n.maxHeight && n.maxHeight < f,
                v = n.minWidth && n.minWidth > p,
                y = n.minHeight && n.minHeight > f;
            n.grid = l, v && (p += h), y && (f += c), g && (p -= h), m && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - u) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - d) : ((f - c <= 0 || p - h <= 0) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - u) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - h > 0 ? (i.size.width = p, i.position.left = a.left - d) : (p = h - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
        }
    });
    t.ui.resizable, t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(t, e, i) {
            return t >= e && t < e + i
        },
        _isFloating: function(t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        },
        _create: function() {
            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },
        _setOption: function(t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName()
        },
        _setHandleClassName: function() {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function() {
                e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function(e, i) {
            var n = null,
                s = !1,
                o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function() {
                if (t.data(this, o.widgetName + "-item") === o) return n = t(this), !1
            }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), !!n && (!(this.options.handle && !i && (t(this.options.handle, n).find("*").addBack().each(function() {
                this === e.target && (s = !0)
            }), !s)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0))))
        },
        _mouseStart: function(e, i, n) {
            var s, o, a = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            var i, n, s, o, a = this.options,
                r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), !1 !== r && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (s = (n = this.items[i]).item[0], (o = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && !(s === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === s || t.contains(this.placeholder[0], s) || "semi-dynamic" === this.options.type && t.contains(this.element[0], s))) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                    this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                    break
                } return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var n = this,
                        s = this.placeholder.offset(),
                        o = this.options.axis,
                        a = {};
                    o && "x" !== o || (a.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                        n._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new t.Event("mouseup", {
                    target: null
                })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !n.length && e.key && n.push(e.key + "="), n.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, i.each(function() {
                n.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), n
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                n = this.positionAbs.top,
                s = n + this.helperProportions.height,
                o = t.left,
                a = o + t.width,
                r = t.top,
                l = r + t.height,
                h = this.offset.click.top,
                c = this.offset.click.left,
                d = "x" === this.options.axis || n + h > r && n + h < l,
                u = "y" === this.options.axis || e + c > o && e + c < a,
                p = d && u;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function(t) {
            var e, i, n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
            return !(!n || !s) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                n = this._getDragVerticalDirection(),
                s = this._getDragHorizontalDirection();
            return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            var i, n, s, o, a = [],
                r = [],
                l = this._connectWith();
            if (l && e)
                for (i = l.length - 1; i >= 0; i--)
                    for (n = (s = t(l[i], this.document[0])).length - 1; n >= 0; n--)(o = t.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && r.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);

            function h() {
                a.push(this)
            }
            for (r.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = r.length - 1; i >= 0; i--) r[i][0].each(h);
            return t(a)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; i < e.length; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i, n, s, o, a, r, l, h, c = this.items,
                d = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
                ],
                u = this._connectWith();
            if (u && this.ready)
                for (i = u.length - 1; i >= 0; i--)
                    for (n = (s = t(u[i], this.document[0])).length - 1; n >= 0; n--)(o = t.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && (d.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                        item: this.currentItem
                    }) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = d.length - 1; i >= 0; i--)
                for (a = d[i][1], n = 0, h = (r = d[i][0]).length; n < h; n++)(l = t(r[n])).data(this.widgetName + "-item", a), c.push({
                    item: l,
                    instance: a,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(e) {
            var i, n, s, o;
            for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), i = this.items.length - 1; i >= 0; i--)(n = this.items[i]).instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            var i, n = (e = e || this).options;
            n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                element: function() {
                    var n = e.currentItem[0].nodeName.toLowerCase(),
                        s = t("<" + n + ">", e.document[0]);
                    return e._addClass(s, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(s, "ui-sortable-helper"), "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, s) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                },
                update: function(t, s) {
                    i && !n.forcePlaceholderSize || (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
        },
        _createTrPlaceholder: function(e, i) {
            var n = this;
            e.children().each(function() {
                t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
            })
        },
        _contactContainers: function(e) {
            var i, n, s, o, a, r, l, h, c, d, u = null,
                p = null;
            for (i = this.containers.length - 1; i >= 0; i--)
                if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                    if (this._intersectsWith(this.containers[i].containerCache)) {
                        if (u && t.contains(this.containers[i].element[0], u.element[0])) continue;
                        u = this.containers[i], p = i
                    } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (u)
                if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                else {
                    for (s = 1e4, o = null, a = (c = u.floating || this._isFloating(this.currentItem)) ? "left" : "top", r = c ? "width" : "height", d = c ? "pageX" : "pageY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[a], h = !1, e[d] - l > this.items[n][r] / 2 && (h = !0), Math.abs(e[d] - l) < s && (s = Math.abs(e[d] - l), o = this.items[n], this.direction = h ? "up" : "down"));
                    if (!o && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                    o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options,
                n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), n[0].style.width && !i.forceHelperSize || n.width(this.currentItem.width()), n[0].style.height && !i.forceHelperSize || n.height(this.currentItem.height()), n
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, n, s = this.options;
            "parent" === s.containment && (s.containment = this.helper[0].parentNode), "document" !== s.containment && "window" !== s.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1,
                s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(s[0].tagName);
            return {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
            }
        },
        _generatePosition: function(e) {
            var i, n, s = this.options,
                o = e.pageX,
                a = e.pageY,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var s = this.counter;
            this._delay(function() {
                s === this.counter && this.refreshPositions(!n)
            })
        },
        _clear: function(t, e) {
            this.reverting = !1;
            var i, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS) "auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i] || (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
            } else this.currentItem.show();

            function s(t, e, i) {
                return function(n) {
                    i._trigger(t, n, e._uiHash(e))
                }
            }
            for (this.fromOutside && !e && n.push(function(t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                    this._trigger("update", t, this._uiHash())
                }), this !== this.currentContainer && (e || (n.push(function(t) {
                    this._trigger("remove", t, this._uiHash())
                }), n.push(function(t) {
                    return function(e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), n.push(function(t) {
                    return function(e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) e || n.push(s("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (n.push(s("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                for (i = 0; i < n.length; i++) n[i].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function() {
            !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    });
    var h = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance()
        },
        _enhance: function() {
            this.element.attr("role", "toolbar"), this.refresh()
        },
        _destroy: function() {
            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function() {
            var e = this,
                i = [];
            t.each(this.options.items, function(n, s) {
                var o, a = {};
                if (s) return "controlgroupLabel" === n ? ((o = e.element.find(s)).each(function() {
                    var e = t(this);
                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(o.get()))) : void(t.fn[n] && (a = e["_" + n + "Options"] ? e["_" + n + "Options"]("middle") : {
                    classes: {}
                }, e.element.find(s).each(function() {
                    var s = t(this),
                        o = s[n]("instance"),
                        r = t.widget.extend({}, a);
                    if ("button" !== n || !s.parent(".ui-spinner").length) {
                        o || (o = s[n]()[n]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), s[n](r);
                        var l = s[n]("widget");
                        t.data(l[0], "ui-controlgroup-data", o || s[n]("instance")), i.push(l[0])
                    }
                })))
            }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(e) {
            this.childWidgets.each(function() {
                var i = t(this).data("ui-controlgroup-data");
                i && i[e] && i[e]()
            })
        },
        _updateCornerClass: function(t, e) {
            var i = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
        },
        _buildSimpleOptions: function(t, e) {
            var i = "vertical" === this.options.direction,
                n = {
                    classes: {}
                };
            return n.classes[e] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            } [t], n
        },
        _spinnerOptions: function(t) {
            var e = this._buildSimpleOptions(t, "ui-spinner");
            return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
        },
        _buttonOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-button")
        },
        _checkboxradioOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function(t) {
            var e = "vertical" === this.options.direction;
            return {
                width: !!e && "auto",
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                } [t]
            }
        },
        _resolveClassesValues: function(e, i) {
            var n = {};
            return t.each(e, function(s) {
                var o = i.options.classes[s] || "";
                o = t.trim(o.replace(h, "")), n[s] = (o + " " + e[s]).replace(/\s+/g, " ")
            }), n
        },
        _setOption: function(t, e) {
            "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" !== t ? this.refresh() : this._callChildMethod(e ? "disable" : "enable")
        },
        refresh: function() {
            var e, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function(t, n) {
                var s = e[n]().data("ui-controlgroup-data");
                if (s && i["_" + s.widgetName + "Options"]) {
                    var o = i["_" + s.widgetName + "Options"](1 === e.length ? "only" : n);
                    o.classes = i._resolveClassesValues(o.classes, s), s.element[s.widgetName](o)
                } else i._updateCornerClass(e[n](), n)
            }), this._callChildMethod("refresh"))
        }
    });
    t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var e, i, n = this,
                s = this._super() || {};
            return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() {
                n.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
            }), this.originalLabel && (s.label = this.originalLabel), null != (e = this.element[0].disabled) && (s.disabled = e), s
        },
        _create: function() {
            var t = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function() {
            var e = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked)
        },
        widget: function() {
            return this.label
        },
        _getRadioGroup: function() {
            var e = this.element[0].name,
                i = "input[name='" + t.ui.escapeSelector(e) + "']";
            return e ? (this.form.length ? t(this.form[0].elements).filter(i) : t(i).filter(function() {
                return 0 === t(this).form().length
            })).not(this.element) : t([])
        },
        _toggleClasses: function() {
            var e = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function() {
                var e = t(this).checkboxradio("instance");
                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
        },
        _setOption: function(t, e) {
            if ("label" !== t || e) {
                if (this._super(t, e), "disabled" === t) return this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e);
                this.refresh()
            }
        },
        _updateIcon: function(e) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
        },
        _updateLabel: function() {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
        },
        refresh: function() {
            var t = this.element[0].checked,
                e = this.element[0].disabled;
            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
                disabled: e
            })
        }
    }]);
    t.ui.checkboxradio;
    t.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function() {
            var t, e = this._super() || {};
            return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                keyup: function(e) {
                    e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function() {
            this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function(e, i) {
            var n = "iconPosition" !== e,
                s = n ? this.options.iconPosition : i,
                o = "top" === s || "bottom" === s;
            this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), n && this._addClass(this.icon, null, i), this._attachIcon(s), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s))
        },
        _destroy: function() {
            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function(t) {
            this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function(t) {
            this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function(t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0), this._super(t)
        },
        _setOption: function(t, e) {
            "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({
                disabled: t
            }), this._updateTooltip()
        }
    }), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
        },
        _setOption: function(t, e) {
            "text" !== t ? ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments)) : this._super("showLabel", e)
        }
    }), t.fn.button = function(e) {
        return function() {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
                icon: !1
            }) : this.checkboxradio.apply(this, arguments))
        }
    }(t.fn.button), t.fn.buttonset = function() {
        return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        }), this.controlgroup.apply(this, arguments))
    });
    t.ui.button;
    t.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    i < 0 && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
        },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i = this;
            this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
                i._trigger("close", e)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(e, i) {
            var n = !1,
                s = this.uiDialog.siblings(".ui-front:visible").map(function() {
                    return +t(this).css("z-index")
                }).get(),
                o = Math.max.apply(null, s);
            return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), n = !0), n && !i && this._trigger("focus", e), n
        },
        open: function() {
            var e = this;
            this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                e._focusTabbable(), e._trigger("focus")
            }), this._makeFocusTarget(), this._trigger("open"))
        },
        _focusTabbable: function() {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
        },
        _keepFocus: function(e) {
            function i() {
                var e = t.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
            }
            e.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"),
                            n = i.filter(":first"),
                            s = i.filter(":last");
                        e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
                            s.trigger("focus")
                        }), e.preventDefault()) : (this._delay(function() {
                            n.trigger("focus")
                        }), e.preventDefault())
                    }
                },
                mousedown: function(t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                mousedown: function(e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                label: t("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                click: function(t) {
                    t.preventDefault(), this.close(t)
                }
            }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                "aria-labelledby": e.attr("id")
            })
        },
        _title: function(t) {
            this.options.title ? t.text(this.options.title) : t.html("&#160;")
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
        },
        _createButtons: function() {
            var e = this,
                i = this.options.buttons;
            this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function(i, n) {
                var s, o;
                n = t.isFunction(n) ? {
                    click: n,
                    text: i
                } : n, n = t.extend({
                    type: "button"
                }, n), s = n.click, o = {
                    icon: n.icon,
                    iconPosition: n.iconPosition,
                    showLabel: n.showLabel,
                    icons: n.icons,
                    text: n.text
                }, delete n.click, delete n.icon, delete n.iconPosition, delete n.showLabel, delete n.icons, "boolean" == typeof n.text && delete n.text, t("<button></button>", n).button(o).appendTo(e.uiButtonSet).on("click", function() {
                    s.apply(e.element[0], arguments)
                })
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            var e = this,
                i = this.options;

            function n(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(i, s) {
                    e._addClass(t(this), "ui-dialog-dragging"), e._blockFrames(), e._trigger("dragStart", i, n(s))
                },
                drag: function(t, i) {
                    e._trigger("drag", t, n(i))
                },
                stop: function(s, o) {
                    var a = o.offset.left - e.document.scrollLeft(),
                        r = o.offset.top - e.document.scrollTop();
                    i.position = {
                        my: "left top",
                        at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r,
                        of: e.window
                    }, e._removeClass(t(this), "ui-dialog-dragging"), e._unblockFrames(), e._trigger("dragStop", s, n(o))
                }
            })
        },
        _makeResizable: function() {
            var e = this,
                i = this.options,
                n = i.resizable,
                s = this.uiDialog.css("position"),
                o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";

            function a(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: i.maxWidth,
                maxHeight: i.maxHeight,
                minWidth: i.minWidth,
                minHeight: this._minHeight(),
                handles: o,
                start: function(i, n) {
                    e._addClass(t(this), "ui-dialog-resizing"), e._blockFrames(), e._trigger("resizeStart", i, a(n))
                },
                resize: function(t, i) {
                    e._trigger("resize", t, a(i))
                },
                stop: function(n, s) {
                    var o = e.uiDialog.offset(),
                        r = o.left - e.document.scrollLeft(),
                        l = o.top - e.document.scrollTop();
                    i.height = e.uiDialog.height(), i.width = e.uiDialog.width(), i.position = {
                        my: "left top",
                        at: "left" + (r >= 0 ? "+" : "") + r + " top" + (l >= 0 ? "+" : "") + l,
                        of: e.window
                    }, e._removeClass(t(this), "ui-dialog-resizing"), e._unblockFrames(), e._trigger("resizeStop", n, a(s))
                }
            }).css("position", s)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(e) {
                    this._makeFocusTarget(), this._focusedElement = t(e.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance(), this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var e = this._trackingInstances(),
                i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
        },
        _trackingInstances: function() {
            var t = this.document.data("ui-dialog-instances");
            return t || (t = [], this.document.data("ui-dialog-instances", t)), t
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function(e) {
            var i = this,
                n = !1,
                s = {};
            t.each(e, function(t, e) {
                i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e)
            }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
        },
        _setOption: function(e, i) {
            var n, s, o = this.uiDialog;
            "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                label: t("<a>").text("" + this.options.closeText).html()
            }), "draggable" === e && ((n = o.is(":data(ui-draggable)")) && !i && o.draggable("destroy"), !n && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && ((s = o.is(":data(ui-resizable)")) && !i && o.resizable("destroy"), s && "string" == typeof i && o.resizable("option", "handles", i), s || !1 === i || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t, e, i, n = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(e) {
            return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = !0;
                this._delay(function() {
                    e = !1
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function(t) {
                        e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
            }
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super(), this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function(t, e) {
            "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
        }
    });
    t.ui.dialog
}), function(t) {
    function e(t, e) {
        if (!(t.originalEvent.touches.length > 1)) {
            t.preventDefault();
            var i = t.originalEvent.changedTouches[0],
                n = document.createEvent("MouseEvents");
            n.initMouseEvent(e, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(n)
        }
    }
    if (t.support.touch = "ontouchend" in document, t.support.touch) {
        var i, n = t.ui.mouse.prototype,
            s = n._mouseInit,
            o = n._mouseDestroy;
        n._touchStart = function(t) {
            !i && this._mouseCapture(t.originalEvent.changedTouches[0]) && (i = !0, this._touchMoved = !1, e(t, "mouseover"), e(t, "mousemove"), e(t, "mousedown"))
        }, n._touchMove = function(t) {
            i && (this._touchMoved = !0, e(t, "mousemove"))
        }, n._touchEnd = function(t) {
            i && (e(t, "mouseup"), e(t, "mouseout"), this._touchMoved || e(t, "click"), i = !1)
        }, n._mouseInit = function() {
            var e = this;
            e.element.bind({
                touchstart: t.proxy(e, "_touchStart"),
                touchmove: t.proxy(e, "_touchMove"),
                touchend: t.proxy(e, "_touchEnd")
            }), s.call(e)
        }, n._mouseDestroy = function() {
            var e = this;
            e.element.unbind({
                touchstart: t.proxy(e, "_touchStart"),
                touchmove: t.proxy(e, "_touchMove"),
                touchend: t.proxy(e, "_touchEnd")
            }), o.call(e)
        }
    }
}(jQuery), function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports && "function" == typeof require ? t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = {
            escapeRegExChars: function(t) {
                return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
            },
            createNode: function(t) {
                var e = document.createElement("div");
                return e.className = t, e.style.position = "absolute", e.style.display = "none", e
            }
        },
        i = 27,
        n = 9,
        s = 13,
        o = 38,
        a = 39,
        r = 40,
        l = t.noop;

    function h(e, i) {
        this.element = e, this.el = t(e), this.suggestions = [], this.badQueries = [], this.selectedIndex = -1, this.currentValue = this.element.value, this.timeoutId = null, this.cachedResponse = {}, this.onChangeTimeout = null, this.onChange = null, this.isLocal = !1, this.suggestionsContainer = null, this.noSuggestionsContainer = null, this.options = t.extend(!0, {}, h.defaults, i), this.classes = {
            selected: "autocomplete-selected",
            suggestion: "autocomplete-suggestion"
        }, this.hint = null, this.hintValue = "", this.selection = null, this.initialize(), this.setOptions(i)
    }
    h.utils = e, t.Autocomplete = h, h.defaults = {
        ajaxSettings: {},
        autoSelectFirst: !1,
        appendTo: "body",
        serviceUrl: null,
        lookup: null,
        onSelect: null,
        width: "auto",
        minChars: 1,
        maxHeight: 300,
        deferRequestBy: 0,
        params: {},
        formatResult: function(t, i) {
            if (!i) return t.value;
            var n = "(" + e.escapeRegExChars(i) + ")";
            return t.value.replace(new RegExp(n, "gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>")
        },
        formatGroup: function(t, e) {
            return '<div class="autocomplete-group">' + e + "</div>"
        },
        delimiter: null,
        zIndex: 9999,
        type: "GET",
        noCache: !1,
        onSearchStart: l,
        onSearchComplete: l,
        onSearchError: l,
        preserveInput: !1,
        containerClass: "autocomplete-suggestions",
        tabDisabled: !1,
        dataType: "text",
        currentRequest: null,
        triggerSelectOnValidInput: !0,
        preventBadQueries: !0,
        lookupFilter: function(t, e, i) {
            return -1 !== t.value.toLowerCase().indexOf(i)
        },
        paramName: "query",
        transformResult: function(e) {
            return "string" == typeof e ? t.parseJSON(e) : e
        },
        showNoSuggestionNotice: !1,
        noSuggestionNotice: "No results",
        orientation: "bottom",
        forceFixPosition: !1
    }, h.prototype = {
        initialize: function() {
            var e, i = this,
                n = "." + i.classes.suggestion,
                s = i.classes.selected,
                o = i.options;
            i.element.setAttribute("autocomplete", "off"), i.noSuggestionsContainer = t('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0), i.suggestionsContainer = h.utils.createNode(o.containerClass), (e = t(i.suggestionsContainer)).appendTo(o.appendTo || "body"), "auto" !== o.width && e.css("width", o.width), e.on("mouseover.autocomplete", n, function() {
                i.activate(t(this).data("index"))
            }), e.on("mouseout.autocomplete", function() {
                i.selectedIndex = -1, e.children("." + s).removeClass(s)
            }), e.on("click.autocomplete", n, function() {
                i.select(t(this).data("index"))
            }), e.on("click.autocomplete", function() {
                clearTimeout(i.blurTimeoutId)
            }), i.fixPositionCapture = function() {
                i.visible && i.fixPosition()
            }, t(window).on("resize.autocomplete", i.fixPositionCapture), i.el.on("keydown.autocomplete", function(t) {
                i.onKeyPress(t)
            }), i.el.on("keyup.autocomplete", function(t) {
                i.onKeyUp(t)
            }), i.el.on("blur.autocomplete", function() {
                i.onBlur()
            }), i.el.on("focus.autocomplete", function() {
                i.onFocus()
            }), i.el.on("change.autocomplete", function(t) {
                i.onKeyUp(t)
            }), i.el.on("input.autocomplete", function(t) {
                i.onKeyUp(t)
            })
        },
        onFocus: function() {
            this.fixPosition(), this.el.val().length >= this.options.minChars && this.onValueChange()
        },
        onBlur: function() {
            var e = this,
                i = e.options,
                n = e.el.val(),
                s = e.getQuery(n);
            e.blurTimeoutId = setTimeout(function() {
                e.hide(), e.selection && e.currentValue !== s && (i.onInvalidateSelection || t.noop).call(e.element)
            }, 200)
        },
        abortAjax: function() {
            this.currentRequest && (this.currentRequest.abort(), this.currentRequest = null)
        },
        setOptions: function(e) {
            var i = t.extend({}, this.options, e);
            this.isLocal = Array.isArray(i.lookup), this.isLocal && (i.lookup = this.verifySuggestionsFormat(i.lookup)), i.orientation = this.validateOrientation(i.orientation, "bottom"), t(this.suggestionsContainer).css({
                "max-height": i.maxHeight + "px",
                width: i.width + "px",
                "z-index": i.zIndex
            }), this.options = i
        },
        clearCache: function() {
            this.cachedResponse = {}, this.badQueries = []
        },
        clear: function() {
            this.clearCache(), this.currentValue = "", this.suggestions = []
        },
        disable: function() {
            this.disabled = !0, clearTimeout(this.onChangeTimeout), this.abortAjax()
        },
        enable: function() {
            this.disabled = !1
        },
        fixPosition: function() {
            var e = t(this.suggestionsContainer),
                i = e.parent().get(0);
            if (i === document.body || this.options.forceFixPosition) {
                var n = this.options.orientation,
                    s = e.outerHeight(),
                    o = this.el.outerHeight(),
                    a = this.el.offset(),
                    r = {
                        top: a.top,
                        left: a.left
                    };
                if ("auto" === n) {
                    var l = t(window).height(),
                        h = t(window).scrollTop(),
                        c = -h + a.top - s,
                        d = h + l - (a.top + o + s);
                    n = Math.max(c, d) === c ? "top" : "bottom"
                }
                if (r.top += "top" === n ? -s : o, i !== document.body) {
                    var u, p = e.css("opacity");
                    this.visible || e.css("opacity", 0).show(), u = e.offsetParent().offset(), r.top -= u.top, r.top += i.scrollTop, r.left -= u.left, this.visible || e.css("opacity", p).hide()
                }
                "auto" === this.options.width && (r.width = this.el.outerWidth() + "px"), e.css(r)
            }
        },
        isCursorAtEnd: function() {
            var t, e = this.el.val().length,
                i = this.element.selectionStart;
            return "number" == typeof i ? i === e : !document.selection || ((t = document.selection.createRange()).moveStart("character", -e), e === t.text.length)
        },
        onKeyPress: function(t) {
            if (this.disabled || this.visible || t.which !== r || !this.currentValue) {
                if (!this.disabled && this.visible) {
                    switch (t.which) {
                        case i:
                            this.el.val(this.currentValue), this.hide();
                            break;
                        case a:
                            if (this.hint && this.options.onHint && this.isCursorAtEnd()) {
                                this.selectHint();
                                break
                            }
                            return;
                        case n:
                            if (this.hint && this.options.onHint) return void this.selectHint();
                            if (-1 === this.selectedIndex) return void this.hide();
                            if (this.select(this.selectedIndex), !1 === this.options.tabDisabled) return;
                            break;
                        case s:
                            if (-1 === this.selectedIndex) return void this.hide();
                            this.select(this.selectedIndex);
                            break;
                        case o:
                            this.moveUp();
                            break;
                        case r:
                            this.moveDown();
                            break;
                        default:
                            return
                    }
                    t.stopImmediatePropagation(), t.preventDefault()
                }
            } else this.suggest()
        },
        onKeyUp: function(t) {
            var e = this;
            if (!e.disabled) {
                switch (t.which) {
                    case o:
                    case r:
                        return
                }
                clearTimeout(e.onChangeTimeout), e.currentValue !== e.el.val() && (e.findBestHint(), e.options.deferRequestBy > 0 ? e.onChangeTimeout = setTimeout(function() {
                    e.onValueChange()
                }, e.options.deferRequestBy) : e.onValueChange())
            }
        },
        onValueChange: function() {
            if (this.ignoreValueChange) this.ignoreValueChange = !1;
            else {
                var e = this.options,
                    i = this.el.val(),
                    n = this.getQuery(i);
                this.selection && this.currentValue !== n && (this.selection = null, (e.onInvalidateSelection || t.noop).call(this.element)), clearTimeout(this.onChangeTimeout), this.currentValue = i, this.selectedIndex = -1, e.triggerSelectOnValidInput && this.isExactMatch(n) ? this.select(0) : n.length < e.minChars ? this.hide() : this.getSuggestions(n)
            }
        },
        isExactMatch: function(t) {
            var e = this.suggestions;
            return 1 === e.length && e[0].value.toLowerCase() === t.toLowerCase()
        },
        getQuery: function(e) {
            var i, n = this.options.delimiter;
            return n ? (i = e.split(n), t.trim(i[i.length - 1])) : e
        },
        getSuggestionsLocal: function(e) {
            var i, n = this.options,
                s = e.toLowerCase(),
                o = n.lookupFilter,
                a = parseInt(n.lookupLimit, 10);
            return i = {
                suggestions: t.grep(n.lookup, function(t) {
                    return o(t, e, s)
                })
            }, a && i.suggestions.length > a && (i.suggestions = i.suggestions.slice(0, a)), i
        },
        getSuggestions: function(e) {
            var i, n, s, o, a = this,
                r = a.options,
                l = r.serviceUrl;
            r.params[r.paramName] = e, !1 !== r.onSearchStart.call(a.element, r.params) && (n = r.ignoreParams ? null : r.params, t.isFunction(r.lookup) ? r.lookup(e, function(t) {
                a.suggestions = t.suggestions, a.suggest(), r.onSearchComplete.call(a.element, e, t.suggestions)
            }) : (a.isLocal ? i = a.getSuggestionsLocal(e) : (t.isFunction(l) && (l = l.call(a.element, e)), s = l + "?" + t.param(n || {}), i = a.cachedResponse[s]), i && Array.isArray(i.suggestions) ? (a.suggestions = i.suggestions, a.suggest(), r.onSearchComplete.call(a.element, e, i.suggestions)) : a.isBadQuery(e) ? r.onSearchComplete.call(a.element, e, []) : (a.abortAjax(), o = {
                url: l,
                data: n,
                type: r.type,
                dataType: r.dataType
            }, t.extend(o, r.ajaxSettings), a.currentRequest = t.ajax(o).done(function(t) {
                var i;
                a.currentRequest = null, i = r.transformResult(t, e), a.processResponse(i, e, s), r.onSearchComplete.call(a.element, e, i.suggestions)
            }).fail(function(t, i, n) {
                r.onSearchError.call(a.element, e, t, i, n)
            }))))
        },
        isBadQuery: function(t) {
            if (!this.options.preventBadQueries) return !1;
            for (var e = this.badQueries, i = e.length; i--;)
                if (0 === t.indexOf(e[i])) return !0;
            return !1
        },
        hide: function() {
            var e = t(this.suggestionsContainer);
            t.isFunction(this.options.onHide) && this.visible && this.options.onHide.call(this.element, e), this.visible = !1, this.selectedIndex = -1, clearTimeout(this.onChangeTimeout), t(this.suggestionsContainer).hide(), this.signalHint(null)
        },
        suggest: function() {
            if (this.suggestions.length) {
                var e, i = this.options,
                    n = i.groupBy,
                    s = i.formatResult,
                    o = this.getQuery(this.currentValue),
                    a = this.classes.suggestion,
                    r = this.classes.selected,
                    l = t(this.suggestionsContainer),
                    h = t(this.noSuggestionsContainer),
                    c = i.beforeRender,
                    d = "";
                i.triggerSelectOnValidInput && this.isExactMatch(o) ? this.select(0) : (t.each(this.suggestions, function(t, r) {
                    n && (d += function(t, s) {
                        var o = t.data[n];
                        return e === o ? "" : (e = o, i.formatGroup(t, e))
                    }(r, 0)), d += '<div class="' + a + '" data-index="' + t + '">' + s(r, o, t) + "</div>"
                }), this.adjustContainerWidth(), h.detach(), l.html(d), t.isFunction(c) && c.call(this.element, l, this.suggestions), this.fixPosition(), l.show(), i.autoSelectFirst && (this.selectedIndex = 0, l.scrollTop(0), l.children("." + a).first().addClass(r)), this.visible = !0, this.findBestHint())
            } else this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide()
        },
        noSuggestions: function() {
            var e = this.options.beforeRender,
                i = t(this.suggestionsContainer),
                n = t(this.noSuggestionsContainer);
            this.adjustContainerWidth(), n.detach(), i.empty(), i.append(n), t.isFunction(e) && e.call(this.element, i, this.suggestions), this.fixPosition(), i.show(), this.visible = !0
        },
        adjustContainerWidth: function() {
            var e, i = this.options,
                n = t(this.suggestionsContainer);
            "auto" === i.width ? (e = this.el.outerWidth(), n.css("width", e > 0 ? e : 300)) : "flex" === i.width && n.css("width", "")
        },
        findBestHint: function() {
            var e = this.el.val().toLowerCase(),
                i = null;
            e && (t.each(this.suggestions, function(t, n) {
                var s = 0 === n.value.toLowerCase().indexOf(e);
                return s && (i = n), !s
            }), this.signalHint(i))
        },
        signalHint: function(e) {
            var i = "";
            e && (i = this.currentValue + e.value.substr(this.currentValue.length)), this.hintValue !== i && (this.hintValue = i, this.hint = e, (this.options.onHint || t.noop)(i))
        },
        verifySuggestionsFormat: function(e) {
            return e.length && "string" == typeof e[0] ? t.map(e, function(t) {
                return {
                    value: t,
                    data: null
                }
            }) : e
        },
        validateOrientation: function(e, i) {
            return e = t.trim(e || "").toLowerCase(), -1 === t.inArray(e, ["auto", "bottom", "top"]) && (e = i), e
        },
        processResponse: function(t, e, i) {
            var n = this.options;
            t.suggestions = this.verifySuggestionsFormat(t.suggestions), n.noCache || (this.cachedResponse[i] = t, n.preventBadQueries && !t.suggestions.length && this.badQueries.push(e)), e === this.getQuery(this.currentValue) && (this.suggestions = t.suggestions, this.suggest())
        },
        activate: function(e) {
            var i, n = this.classes.selected,
                s = t(this.suggestionsContainer),
                o = s.find("." + this.classes.suggestion);
            return s.find("." + n).removeClass(n), this.selectedIndex = e, -1 !== this.selectedIndex && o.length > this.selectedIndex ? (i = o.get(this.selectedIndex), t(i).addClass(n), i) : null
        },
        selectHint: function() {
            var e = t.inArray(this.hint, this.suggestions);
            this.select(e)
        },
        select: function(t) {
            this.hide(), this.onSelect(t)
        },
        moveUp: function() {
            if (-1 !== this.selectedIndex) return 0 === this.selectedIndex ? (t(this.suggestionsContainer).children("." + this.classes.suggestion).first().removeClass(this.classes.selected), this.selectedIndex = -1, this.ignoreValueChange = !1, this.el.val(this.currentValue), void this.findBestHint()) : void this.adjustScroll(this.selectedIndex - 1)
        },
        moveDown: function() {
            this.selectedIndex !== this.suggestions.length - 1 && this.adjustScroll(this.selectedIndex + 1)
        },
        adjustScroll: function(e) {
            var i = this.activate(e);
            if (i) {
                var n, s, o, a = t(i).outerHeight();
                n = i.offsetTop, o = (s = t(this.suggestionsContainer).scrollTop()) + this.options.maxHeight - a, n < s ? t(this.suggestionsContainer).scrollTop(n) : n > o && t(this.suggestionsContainer).scrollTop(n - this.options.maxHeight + a), this.options.preserveInput || (this.ignoreValueChange = !0, this.el.val(this.getValue(this.suggestions[e].value))), this.signalHint(null)
            }
        },
        onSelect: function(e) {
            var i = this.options.onSelect,
                n = this.suggestions[e];
            this.currentValue = this.getValue(n.value), this.currentValue === this.el.val() || this.options.preserveInput || this.el.val(this.currentValue), this.signalHint(null), this.suggestions = [], this.selection = n, t.isFunction(i) && i.call(this.element, n)
        },
        getValue: function(t) {
            var e, i, n = this.options.delimiter;
            return n ? 1 === (i = (e = this.currentValue).split(n)).length ? t : e.substr(0, e.length - i[i.length - 1].length) + t : t
        },
        dispose: function() {
            this.el.off(".autocomplete").removeData("autocomplete"), t(window).off("resize.autocomplete", this.fixPositionCapture), t(this.suggestionsContainer).remove()
        }
    }, t.fn.devbridgeAutocomplete = function(e, i) {
        return arguments.length ? this.each(function() {
            var n = t(this),
                s = n.data("autocomplete");
            "string" == typeof e ? s && "function" == typeof s[e] && s[e](i) : (s && s.dispose && s.dispose(), s = new h(this, e), n.data("autocomplete", s))
        }) : this.first().data("autocomplete")
    }, t.fn.autocomplete || (t.fn.autocomplete = t.fn.devbridgeAutocomplete)
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

function DragSelect(t) {
this.multiSelectKeyPressed, this.initialCursorPos = {
    x: 0,
    y: 0
}, this.newCursorPos = {
    x: 0,
    y: 0
}, this.previousCursorPos = {
    x: 0,
    y: 0
}, this.initialScroll, this.selected = [], this._prevSelected = [], this._createBindings(), this._setupOptions(t), this.start()
}

function dd() {
app.debug && console.log(arguments)
}! function(t) {
"use strict";
var e = t.fn.jquery.split(" ")[0].split(".");
if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
function(t) {
"use strict";
t.fn.emulateTransitionEnd = function(e) {
    var i = !1,
        n = this;
    t(this).one("bsTransitionEnd", function() {
        i = !0
    });
    return setTimeout(function() {
        i || t(n).trigger(t.support.transition.end)
    }, e), this
}, t(function() {
    t.support.transition = function() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }(), t.support.transition && (t.event.special.bsTransitionEnd = {
        bindType: t.support.transition.end,
        delegateType: t.support.transition.end,
        handle: function(e) {
            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    })
})
}(jQuery),
function(t) {
"use strict";
var e = '[data-dismiss="alert"]',
    i = function(i) {
        t(i).on("click", e, this.close)
    };
i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
    function n() {
        a.detach().trigger("closed.bs.alert").remove()
    }
    var s = t(this),
        o = s.attr("data-target");
    o || (o = (o = s.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, ""));
    var a = t("#" === o ? [] : o);
    e && e.preventDefault(), a.length || (a = s.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
};
var n = t.fn.alert;
t.fn.alert = function(e) {
    return this.each(function() {
        var n = t(this),
            s = n.data("bs.alert");
        s || n.data("bs.alert", s = new i(this)), "string" == typeof e && s[e].call(n)
    })
}, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
    return t.fn.alert = n, this
}, t(document).on("click.bs.alert.data-api", e, i.prototype.close)
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var n = t(this),
            s = n.data("bs.button"),
            o = "object" == typeof e && e;
        s || n.data("bs.button", s = new i(this, o)), "toggle" == e ? s.toggle() : e && s.setState(e)
    })
}
var i = function(e, n) {
    this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
};
i.VERSION = "3.3.7", i.DEFAULTS = {
    loadingText: "loading..."
}, i.prototype.setState = function(e) {
    var i = "disabled",
        n = this.$element,
        s = n.is("input") ? "val" : "html",
        o = n.data();
    e += "Text", null == o.resetText && n.data("resetText", n[s]()), setTimeout(t.proxy(function() {
        n[s](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
    }, this), 0)
}, i.prototype.toggle = function() {
    var t = !0,
        e = this.$element.closest('[data-toggle-map="buttons"]');
    if (e.length) {
        var i = this.$element.find("input");
        "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
};
var n = t.fn.button;
t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
    return t.fn.button = n, this
}, t(document).on("click.bs.button.data-api", '[data-toggle-map^="button"]', function(i) {
    var n = t(i.target).closest(".btn");
    e.call(n, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle-map^="button"]', function(e) {
    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var n = t(this),
            s = n.data("bs.carousel"),
            o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
            a = "string" == typeof e ? e : o.slide;
        s || n.data("bs.carousel", s = new i(this, o)), "number" == typeof e ? s.to(e) : a ? s[a]() : o.interval && s.pause().cycle()
    })
}
var i = function(e, i) {
    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
};
i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
}, i.prototype.keydown = function(t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }
}, i.prototype.cycle = function(e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
}, i.prototype.getItemIndex = function(t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
}, i.prototype.getItemForDirection = function(t, e) {
    var i = this.getItemIndex(e);
    if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
    var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
    return this.$items.eq(n)
}, i.prototype.to = function(t) {
    var e = this,
        i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
        e.to(t)
    }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
}, i.prototype.pause = function(e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
}, i.prototype.next = function() {
    if (!this.sliding) return this.slide("next")
}, i.prototype.prev = function() {
    if (!this.sliding) return this.slide("prev")
}, i.prototype.slide = function(e, n) {
    var s = this.$element.find(".item.active"),
        o = n || this.getItemForDirection(e, s),
        a = this.interval,
        r = "next" == e ? "left" : "right",
        l = this;
    if (o.hasClass("active")) return this.sliding = !1;
    var h = o[0],
        c = t.Event("slide.bs.carousel", {
            relatedTarget: h,
            direction: r
        });
    if (this.$element.trigger(c), !c.isDefaultPrevented()) {
        if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var d = t(this.$indicators.children()[this.getItemIndex(o)]);
            d && d.addClass("active")
        }
        var u = t.Event("slid.bs.carousel", {
            relatedTarget: h,
            direction: r
        });
        return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, s.addClass(r), o.addClass(r), s.one("bsTransitionEnd", function() {
            o.removeClass([e, r].join(" ")).addClass("active"), s.removeClass(["active", r].join(" ")), l.sliding = !1, setTimeout(function() {
                l.$element.trigger(u)
            }, 0)
        }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(u)), a && this.cycle(), this
    }
};
var n = t.fn.carousel;
t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
    return t.fn.carousel = n, this
};
var s = function(i) {
    var n, s = t(this),
        o = t(s.attr("data-target") || (n = s.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
    if (o.hasClass("carousel")) {
        var a = t.extend({}, o.data(), s.data()),
            r = s.attr("data-slide-to");
        r && (a.interval = !1), e.call(o, a), r && o.data("bs.carousel").to(r), i.preventDefault()
    }
};
t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", function() {
    t('[data-ride="carousel"]').each(function() {
        var i = t(this);
        e.call(i, i.data())
    })
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
    return t(n)
}

function i(e) {
    return this.each(function() {
        var i = t(this),
            s = i.data("bs.collapse"),
            o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
        !s && o.toggle && /show|hide/.test(e) && (o.toggle = !1), s || i.data("bs.collapse", s = new n(this, o)), "string" == typeof e && s[e]()
    })
}
var n = function(e, i) {
    this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle-map="collapse"][href="#' + e.id + '"],[data-toggle-map="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
};
n.VERSION = "3.3.7", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
    toggle: !0
}, n.prototype.dimension = function() {
    return this.$element.hasClass("width") ? "width" : "height"
}, n.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
        var e, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (!(s && s.length && (e = s.data("bs.collapse"), e && e.transitioning))) {
            var o = t.Event("show.bs.collapse");
            if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                s && s.length && (i.call(s, "hide"), e || s.data("bs.collapse", null));
                var a = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                var r = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return r.call(this);
                var l = t.camelCase(["scroll", a].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[a](this.$element[0][l])
            }
        }
    }
}, n.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
        var e = t.Event("hide.bs.collapse");
        if (this.$element.trigger(e), !e.isDefaultPrevented()) {
            var i = this.dimension();
            this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
            var s = function() {
                this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
            };
            return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : s.call(this)
        }
    }
}, n.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
}, n.prototype.getParent = function() {
    return t(this.options.parent).find('[data-toggle-map="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
        var s = t(n);
        this.addAriaAndCollapsedClass(e(s), s)
    }, this)).end()
}, n.prototype.addAriaAndCollapsedClass = function(t, e) {
    var i = t.hasClass("in");
    t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
};
var s = t.fn.collapse;
t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
    return t.fn.collapse = s, this
}, t(document).on("click.bs.collapse.data-api", '[data-toggle-map="collapse"]', function(n) {
    var s = t(this);
    s.attr("data-target") || n.preventDefault();
    var o = e(s),
        a = o.data("bs.collapse") ? "toggle" : s.data();
    i.call(o, a)
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    var i = e.attr("data-target");
    i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
    var n = i && t(i);
    return n && n.length ? n : e.parent()
}

function i(i) {
    i && 3 === i.which || (t(n).remove(), t(s).each(function() {
        var n = t(this),
            s = e(n),
            o = {
                relatedTarget: this
            };
        s.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(s[0], i.target) || (s.trigger(i = t.Event("hide.bs.dropdown-map", o)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), s.removeClass("open").trigger(t.Event("hidden.bs.dropdown-map", o)))))
    }))
}
var n = ".dropdown-map-backdrop",
    s = '[data-toggle-map="dropdown-map"]',
    o = function(e) {
        t(e).on("click.bs.dropdown-map", this.toggle)
    };
o.VERSION = "3.3.7", o.prototype.toggle = function(n) {
    var s = t(this);
    if (!s.is(".disabled, :disabled")) {
        var o = e(s),
            a = o.hasClass("open");
        if (i(), !a) {
            "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-map-backdrop").insertAfter(t(this)).on("click", i);
            var r = {
                relatedTarget: this
            };
            if (o.trigger(n = t.Event("show.bs.dropdown-map", r)), n.isDefaultPrevented()) return;
            s.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown-map", r))
        }
        return !1
    }
}, o.prototype.keydown = function(i) {
    if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
        var n = t(this);
        if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
            var o = e(n),
                a = o.hasClass("open");
            if (!a && 27 != i.which || a && 27 == i.which) return 27 == i.which && o.find(s).trigger("focus"), n.trigger("click");
            var r = o.find(".dropdown-menu-map li:not(.disabled):visible a");
            if (r.length) {
                var l = r.index(i.target);
                38 == i.which && l > 0 && l--, 40 == i.which && l < r.length - 1 && l++, ~l || (l = 0), r.eq(l).trigger("focus")
            }
        }
    }
};
var a = t.fn.dropdown;
t.fn.dropdown = function(e) {
    return this.each(function() {
        var i = t(this),
            n = i.data("bs.dropdown-map");
        n || i.data("bs.dropdown-map", n = new o(this)), "string" == typeof e && n[e].call(i)
    })
}, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
    return t.fn.dropdown = a, this
}, t(document).on("click.bs.dropdown-map.data-api", i).on("click.bs.dropdown-map.data-api", ".dropdown-map form", function(t) {
    t.stopPropagation()
}).on("click.bs.dropdown-map.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown-map.data-api", s, o.prototype.keydown).on("keydown.bs.dropdown-map.data-api", ".dropdown-menu-map", o.prototype.keydown)
}(jQuery),
function(t) {
"use strict";

function e(e, n) {
    return this.each(function() {
        var s = t(this),
            o = s.data("bs.modal"),
            a = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
        o || s.data("bs.modal", o = new i(this, a)), "string" == typeof e ? o[e](n) : a.show && o.show(n)
    })
}
var i = function(e, i) {
    this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
        this.$element.trigger("loaded.bs.modal")
    }, this))
};
i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
}, i.prototype.toggle = function(t) {
    return this.isShown ? this.hide() : this.show(t)
}, i.prototype.show = function(e) {
    var n = this,
        s = t.Event("show.bs.modal", {
            relatedTarget: e
        });
    this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
        n.$element.one("mouseup.dismiss.bs.modal", function(e) {
            t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
        })
    }), this.backdrop(function() {
        var s = t.support.transition && n.$element.hasClass("fade");
        n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), s && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
        var o = t.Event("shown.bs.modal", {
            relatedTarget: e
        });
        s ? n.$dialog.one("bsTransitionEnd", function() {
            n.$element.trigger("focus").trigger(o)
        }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(o)
    }))
}, i.prototype.hide = function(e) {
    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
}, i.prototype.enforceFocus = function() {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
        document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
    }, this))
}, i.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
        27 == t.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
}, i.prototype.resize = function() {
    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
}, i.prototype.hideModal = function() {
    var t = this;
    this.$element.hide(), this.backdrop(function() {
        t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
    })
}, i.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
}, i.prototype.backdrop = function(e) {
    var n = this,
        s = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
        var o = t.support.transition && s;
        if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
        o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
    } else if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass("in");
        var a = function() {
            n.removeBackdrop(), e && e()
        };
        t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
    } else e && e()
}, i.prototype.handleUpdate = function() {
    this.adjustDialog()
}, i.prototype.adjustDialog = function() {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
        paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
        paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    })
}, i.prototype.resetAdjustments = function() {
    this.$element.css({
        paddingLeft: "",
        paddingRight: ""
    })
}, i.prototype.checkScrollbar = function() {
    var t = window.innerWidth;
    if (!t) {
        var e = document.documentElement.getBoundingClientRect();
        t = e.right - Math.abs(e.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
}, i.prototype.setScrollbar = function() {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
}, i.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
}, i.prototype.measureScrollbar = function() {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e
};
var n = t.fn.modal;
t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
    return t.fn.modal = n, this
}, t(document).on("click.bs.modal.data-api", '[data-toggle-map="modal"]', function(i) {
    var n = t(this),
        s = n.attr("href"),
        o = t(n.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
        a = o.data("bs.modal") ? "toggle" : t.extend({
            remote: !/#/.test(s) && s
        }, o.data(), n.data());
    n.is("a") && i.preventDefault(), o.one("show.bs.modal", function(t) {
        t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
            n.is(":visible") && n.trigger("focus")
        })
    }), e.call(o, a, this)
})
}(jQuery),
function(t) {
"use strict";
var e = function(t, e) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
};
e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
        selector: "body",
        padding: 0
    }
}, e.prototype.init = function(e, i, n) {
    if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var s = this.options.trigger.split(" "), o = s.length; o--;) {
        var a = s[o];
        if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
        else if ("manual" != a) {
            var r = "hover" == a ? "mouseenter" : "focusin",
                l = "hover" == a ? "mouseleave" : "focusout";
            this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
        }
    }
    this.options.selector ? this._options = t.extend({}, this.options, {
        trigger: "manual",
        selector: ""
    }) : this.fixTitle()
}, e.prototype.getDefaults = function() {
    return e.DEFAULTS
}, e.prototype.getOptions = function(e) {
    return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
        show: e.delay,
        hide: e.delay
    }), e
}, e.prototype.getDelegateOptions = function() {
    var e = {},
        i = this.getDefaults();
    return this._options && t.each(this._options, function(t, n) {
        i[t] != n && (e[t] = n)
    }), e
}, e.prototype.enter = function(e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
        "in" == i.hoverState && i.show()
    }, i.options.delay.show)) : i.show())
}, e.prototype.isInStateTrue = function() {
    for (var t in this.inState)
        if (this.inState[t]) return !0;
    return !1
}, e.prototype.leave = function(e) {
    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    if (i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
        "out" == i.hoverState && i.hide()
    }, i.options.delay.hide)) : i.hide()
}, e.prototype.show = function() {
    var i = t.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
        this.$element.trigger(i);
        var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
        if (i.isDefaultPrevented() || !n) return;
        var s = this,
            o = this.tip(),
            a = this.getUID(this.type);
        this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
        var r = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
            l = /\s?auto?\s?/i,
            h = l.test(r);
        h && (r = r.replace(l, "") || "top"), o.detach().css({
            top: 0,
            left: 0,
            display: "block"
        }).addClass(r).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
        var c = this.getPosition(),
            d = o[0].offsetWidth,
            u = o[0].offsetHeight;
        if (h) {
            var p = r,
                f = this.getPosition(this.$viewport);
            r = "bottom" == r && c.bottom + u > f.bottom ? "top" : "top" == r && c.top - u < f.top ? "bottom" : "right" == r && c.right + d > f.width ? "left" : "left" == r && c.left - d < f.left ? "right" : r, o.removeClass(p).addClass(r)
        }
        var g = this.getCalculatedOffset(r, c, d, u);
        this.applyPlacement(g, r);
        var m = function() {
            var t = s.hoverState;
            s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s)
        };
        t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(e.TRANSITION_DURATION) : m()
    }
}, e.prototype.applyPlacement = function(e, i) {
    var n = this.tip(),
        s = n[0].offsetWidth,
        o = n[0].offsetHeight,
        a = parseInt(n.css("margin-top"), 10),
        r = parseInt(n.css("margin-left"), 10);
    isNaN(a) && (a = 0), isNaN(r) && (r = 0), e.top += a, e.left += r, t.offset.setOffset(n[0], t.extend({
        using: function(t) {
            n.css({
                top: Math.round(t.top),
                left: Math.round(t.left)
            })
        }
    }, e), 0), n.addClass("in");
    var l = n[0].offsetWidth,
        h = n[0].offsetHeight;
    "top" == i && h != o && (e.top = e.top + o - h);
    var c = this.getViewportAdjustedDelta(i, e, l, h);
    c.left ? e.left += c.left : e.top += c.top;
    var d = /top|bottom/.test(i),
        u = d ? 2 * c.left - s + l : 2 * c.top - o + h,
        p = d ? "offsetWidth" : "offsetHeight";
    n.offset(e), this.replaceArrow(u, n[0][p], d)
}, e.prototype.replaceArrow = function(t, e, i) {
    this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
}, e.prototype.setContent = function() {
    var t = this.tip(),
        e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
}, e.prototype.hide = function(i) {
    function n() {
        "in" != s.hoverState && o.detach(), s.$element && s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), i && i()
    }
    var s = this,
        o = t(this.$tip),
        a = t.Event("hide.bs." + this.type);
    if (this.$element.trigger(a), !a.isDefaultPrevented()) return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(e.TRANSITION_DURATION) : n(), this.hoverState = null, this
}, e.prototype.fixTitle = function() {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
}, e.prototype.hasContent = function() {
    return this.getTitle()
}, e.prototype.getPosition = function(e) {
    var i = (e = e || this.$element)[0],
        n = "BODY" == i.tagName,
        s = i.getBoundingClientRect();
    null == s.width && (s = t.extend({}, s, {
        width: s.right - s.left,
        height: s.bottom - s.top
    }));
    var o = window.SVGElement && i instanceof window.SVGElement,
        a = n ? {
            top: 0,
            left: 0
        } : o ? null : e.offset(),
        r = {
            scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        },
        l = n ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
    return t.extend({}, s, r, l, a)
}, e.prototype.getCalculatedOffset = function(t, e, i, n) {
    return "bottom" == t ? {
        top: e.top + e.height,
        left: e.left + e.width / 2 - i / 2
    } : "top" == t ? {
        top: e.top - n,
        left: e.left + e.width / 2 - i / 2
    } : "left" == t ? {
        top: e.top + e.height / 2 - n / 2,
        left: e.left - i
    } : {
        top: e.top + e.height / 2 - n / 2,
        left: e.left + e.width
    }
}, e.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
    var s = {
        top: 0,
        left: 0
    };
    if (!this.$viewport) return s;
    var o = this.options.viewport && this.options.viewport.padding || 0,
        a = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
        var r = e.top - o - a.scroll,
            l = e.top + o - a.scroll + n;
        r < a.top ? s.top = a.top - r : l > a.top + a.height && (s.top = a.top + a.height - l)
    } else {
        var h = e.left - o,
            c = e.left + o + i;
        h < a.left ? s.left = a.left - h : c > a.right && (s.left = a.left + a.width - c)
    }
    return s
}, e.prototype.getTitle = function() {
    var t = this.$element,
        e = this.options;
    return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
}, e.prototype.getUID = function(t) {
    do {
        t += ~~(1e6 * Math.random())
    } while (document.getElementById(t));
    return t
}, e.prototype.tip = function() {
    if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
}, e.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
}, e.prototype.enable = function() {
    this.enabled = !0
}, e.prototype.disable = function() {
    this.enabled = !1
}, e.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
}, e.prototype.toggle = function(e) {
    var i = this;
    e && ((i = t(e.currentTarget).data("bs." + this.type)) || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
}, e.prototype.destroy = function() {
    var t = this;
    clearTimeout(this.timeout), this.hide(function() {
        t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
    })
};
var i = t.fn.tooltip;
t.fn.tooltip = function(i) {
    return this.each(function() {
        var n = t(this),
            s = n.data("bs.tooltip"),
            o = "object" == typeof i && i;
        !s && /destroy|hide/.test(i) || (s || n.data("bs.tooltip", s = new e(this, o)), "string" == typeof i && s[i]())
    })
}, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function() {
    return t.fn.tooltip = i, this
}
}(jQuery),
function(t) {
"use strict";
var e = function(t, e) {
    this.init("popover", t, e)
};
if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
e.VERSION = "3.3.7", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
}), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function() {
    return e.DEFAULTS
}, e.prototype.setContent = function() {
    var t = this.tip(),
        e = this.getTitle(),
        i = this.getContent();
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
}, e.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
}, e.prototype.getContent = function() {
    var t = this.$element,
        e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
}, e.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
};
var i = t.fn.popover;
t.fn.popover = function(i) {
    return this.each(function() {
        var n = t(this),
            s = n.data("bs.popover"),
            o = "object" == typeof i && i;
        !s && /destroy|hide/.test(i) || (s || n.data("bs.popover", s = new e(this, o)), "string" == typeof i && s[i]())
    })
}, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function() {
    return t.fn.popover = i, this
}
}(jQuery),
function(t) {
"use strict";

function e(i, n) {
    this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
}

function i(i) {
    return this.each(function() {
        var n = t(this),
            s = n.data("bs.scrollspy"),
            o = "object" == typeof i && i;
        s || n.data("bs.scrollspy", s = new e(this, o)), "string" == typeof i && s[i]()
    })
}
e.VERSION = "3.3.7", e.DEFAULTS = {
    offset: 10
}, e.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
}, e.prototype.refresh = function() {
    var e = this,
        i = "offset",
        n = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
        var e = t(this),
            s = e.data("target") || e.attr("href"),
            o = /^#./.test(s) && t(s);
        return o && o.length && o.is(":visible") && [
            [o[i]().top + n, s]
        ] || null
    }).sort(function(t, e) {
        return t[0] - e[0]
    }).each(function() {
        e.offsets.push(this[0]), e.targets.push(this[1])
    })
}, e.prototype.process = function() {
    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
        i = this.getScrollHeight(),
        n = this.options.offset + i - this.$scrollElement.height(),
        s = this.offsets,
        o = this.targets,
        a = this.activeTarget;
    if (this.scrollHeight != i && this.refresh(), e >= n) return a != (t = o[o.length - 1]) && this.activate(t);
    if (a && e < s[0]) return this.activeTarget = null, this.clear();
    for (t = s.length; t--;) a != o[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(o[t])
}, e.prototype.activate = function(e) {
    this.activeTarget = e, this.clear();
    var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
        n = t(i).parents("li").addClass("active");
    n.parent(".dropdown-menu-map").length && (n = n.closest("li.dropdown-map").addClass("active")), n.trigger("activate.bs.scrollspy")
}, e.prototype.clear = function() {
    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
};
var n = t.fn.scrollspy;
t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
    return t.fn.scrollspy = n, this
}, t(window).on("load.bs.scrollspy.data-api", function() {
    t('[data-spy="scroll"]').each(function() {
        var e = t(this);
        i.call(e, e.data())
    })
})
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var n = t(this),
            s = n.data("bs.tab");
        s || n.data("bs.tab", s = new i(this)), "string" == typeof e && s[e]()
    })
}
var i = function(e) {
    this.element = t(e)
};
i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
    var e = this.element,
        i = e.closest("ul:not(.dropdown-menu-map)"),
        n = e.data("target");
    if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
        var s = i.find(".active:last a"),
            o = t.Event("hide.bs.tab", {
                relatedTarget: e[0]
            }),
            a = t.Event("show.bs.tab", {
                relatedTarget: s[0]
            });
        if (s.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
            var r = t(n);
            this.activate(e.closest("li"), i), this.activate(r, r.parent(), function() {
                s.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: e[0]
                }), e.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: s[0]
                })
            })
        }
    }
}, i.prototype.activate = function(e, n, s) {
    function o() {
        a.removeClass("active").find("> .dropdown-menu-map > .active").removeClass("active").end().find('[data-toggle-map="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle-map="tab"]').attr("aria-expanded", !0), r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu-map").length && e.closest("li.dropdown-map").addClass("active").end().find('[data-toggle-map="tab"]').attr("aria-expanded", !0), s && s()
    }
    var a = n.find("> .active"),
        r = s && t.support.transition && (a.length && a.hasClass("fade") || !!n.find("> .fade").length);
    a.length && r ? a.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(), a.removeClass("in")
};
var n = t.fn.tab;
t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
    return t.fn.tab = n, this
};
var s = function(i) {
    i.preventDefault(), e.call(t(this), "show")
};
t(document).on("click.bs.tab.data-api", '[data-toggle-map="tab"]', s).on("click.bs.tab.data-api", '[data-toggle-map="pill"]', s)
}(jQuery),
function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var n = t(this),
            s = n.data("bs.affix"),
            o = "object" == typeof e && e;
        s || n.data("bs.affix", s = new i(this, o)), "string" == typeof e && s[e]()
    })
}
var i = function(e, n) {
    this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
};
i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
    offset: 0,
    target: window
}, i.prototype.getState = function(t, e, i, n) {
    var s = this.$target.scrollTop(),
        o = this.$element.offset(),
        a = this.$target.height();
    if (null != i && "top" == this.affixed) return s < i && "top";
    if ("bottom" == this.affixed) return null != i ? !(s + this.unpin <= o.top) && "bottom" : !(s + a <= t - n) && "bottom";
    var r = null == this.affixed,
        l = r ? s : o.top;
    return null != i && s <= i ? "top" : null != n && l + (r ? a : e) >= t - n && "bottom"
}, i.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(i.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
        e = this.$element.offset();
    return this.pinnedOffset = e.top - t
}, i.prototype.checkPositionWithEventLoop = function() {
    setTimeout(t.proxy(this.checkPosition, this), 1)
}, i.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
        var e = this.$element.height(),
            n = this.options.offset,
            s = n.top,
            o = n.bottom,
            a = Math.max(t(document).height(), t(document.body).height());
        "object" != typeof n && (o = s = n), "function" == typeof s && (s = n.top(this.$element)), "function" == typeof o && (o = n.bottom(this.$element));
        var r = this.getState(a, e, s, o);
        if (this.affixed != r) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (r ? "-" + r : ""),
                h = t.Event(l + ".bs.affix");
            if (this.$element.trigger(h), h.isDefaultPrevented()) return;
            this.affixed = r, this.unpin = "bottom" == r ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
        }
        "bottom" == r && this.$element.offset({
            top: a - e - o
        })
    }
};
var n = t.fn.affix;
t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
    return t.fn.affix = n, this
}, t(window).on("load", function() {
    t('[data-spy="affix"]').each(function() {
        var i = t(this),
            n = i.data();
        n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
    })
})
}(jQuery),
function(t) {
"use strict";
var e, i, n, s;
String.prototype.includes || (e = {}.toString, i = function() {
    try {
        var t = {},
            e = Object.defineProperty,
            i = e(t, t, t) && e
    } catch (t) {}
    return i
}(), n = "".indexOf, s = function(t) {
    if (null == this) throw new TypeError;
    var i = String(this);
    if (t && "[object RegExp]" == e.call(t)) throw new TypeError;
    var s = i.length,
        o = String(t),
        a = o.length,
        r = arguments.length > 1 ? arguments[1] : void 0,
        l = r ? Number(r) : 0;
    return l != l && (l = 0), !(a + Math.min(Math.max(l, 0), s) > s) && -1 != n.call(i, o, l)
}, i ? i(String.prototype, "includes", {
    value: s,
    configurable: !0,
    writable: !0
}) : String.prototype.includes = s), String.prototype.startsWith || function() {
    var t = function() {
            try {
                var t = {},
                    e = Object.defineProperty,
                    i = e(t, t, t) && e
            } catch (t) {}
            return i
        }(),
        e = {}.toString,
        i = function(t) {
            if (null == this) throw new TypeError;
            var i = String(this);
            if (t && "[object RegExp]" == e.call(t)) throw new TypeError;
            var n = i.length,
                s = String(t),
                o = s.length,
                a = arguments.length > 1 ? arguments[1] : void 0,
                r = a ? Number(a) : 0;
            r != r && (r = 0);
            var l = Math.min(Math.max(r, 0), n);
            if (o + l > n) return !1;
            for (var h = -1; ++h < o;)
                if (i.charCodeAt(l + h) != s.charCodeAt(h)) return !1;
            return !0
        };
    t ? t(String.prototype, "startsWith", {
        value: i,
        configurable: !0,
        writable: !0
    }) : String.prototype.startsWith = i
}(), Object.keys || (Object.keys = function(t, e, i) {
    for (e in i = [], t) i.hasOwnProperty.call(t, e) && i.push(e);
    return i
});
var o = {
    useDefault: !1,
    _set: t.valHooks.select.set
};
t.valHooks.select.set = function(e, i) {
    return i && !o.useDefault && t(e).data("selected", !0), o._set.apply(this, arguments)
};
var a = null;

function r(e) {
    return t.each([{
        re: /[\xC0-\xC6]/g,
        ch: "A"
    }, {
        re: /[\xE0-\xE6]/g,
        ch: "a"
    }, {
        re: /[\xC8-\xCB]/g,
        ch: "E"
    }, {
        re: /[\xE8-\xEB]/g,
        ch: "e"
    }, {
        re: /[\xCC-\xCF]/g,
        ch: "I"
    }, {
        re: /[\xEC-\xEF]/g,
        ch: "i"
    }, {
        re: /[\xD2-\xD6]/g,
        ch: "O"
    }, {
        re: /[\xF2-\xF6]/g,
        ch: "o"
    }, {
        re: /[\xD9-\xDC]/g,
        ch: "U"
    }, {
        re: /[\xF9-\xFC]/g,
        ch: "u"
    }, {
        re: /[\xC7-\xE7]/g,
        ch: "c"
    }, {
        re: /[\xD1]/g,
        ch: "N"
    }, {
        re: /[\xF1]/g,
        ch: "n"
    }], function() {
        e = e ? e.replace(this.re, this.ch) : ""
    }), e
}
t.fn.triggerNative = function(t) {
    var e, i = this[0];
    i.dispatchEvent ? ("function" == typeof Event ? e = new Event(t, {
        bubbles: !0
    }) : (e = document.createEvent("Event")).initEvent(t, !0, !1), i.dispatchEvent(e)) : i.fireEvent ? ((e = document.createEventObject()).eventType = t, i.fireEvent("on" + t, e)) : this.trigger(t)
}, t.expr.pseudos.icontains = function(e, i, n) {
    var s = t(e).find("a");
    return (s.data("tokens") || s.text()).toString().toUpperCase().includes(n[3].toUpperCase())
}, t.expr.pseudos.ibegins = function(e, i, n) {
    var s = t(e).find("a");
    return (s.data("tokens") || s.text()).toString().toUpperCase().startsWith(n[3].toUpperCase())
}, t.expr.pseudos.aicontains = function(e, i, n) {
    var s = t(e).find("a");
    return (s.data("tokens") || s.data("normalizedText") || s.text()).toString().toUpperCase().includes(n[3].toUpperCase())
}, t.expr.pseudos.aibegins = function(e, i, n) {
    var s = t(e).find("a");
    return (s.data("tokens") || s.data("normalizedText") || s.text()).toString().toUpperCase().startsWith(n[3].toUpperCase())
};
var l = function(t) {
        var e = function(e) {
                return t[e]
            },
            i = "(?:" + Object.keys(t).join("|") + ")",
            n = RegExp(i),
            s = RegExp(i, "g");
        return function(t) {
            return t = null == t ? "" : "" + t, n.test(t) ? t.replace(s, e) : t
        }
    },
    h = l({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }),
    c = l({
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#x27;": "'",
        "&#x60;": "`"
    }),
    d = function(e, i) {
        o.useDefault || (t.valHooks.select.set = o._set, o.useDefault = !0), this.$element = t(e), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = i, null === this.options.title && (this.options.title = this.$element.attr("title"));
        var n = this.options.windowPadding;
        "number" == typeof n && (this.options.windowPadding = [n, n, n, n]), this.val = d.prototype.val, this.render = d.prototype.render, this.refresh = d.prototype.refresh, this.setStyle = d.prototype.setStyle, this.selectAll = d.prototype.selectAll, this.deselectAll = d.prototype.deselectAll, this.destroy = d.prototype.destroy, this.remove = d.prototype.remove, this.show = d.prototype.show, this.hide = d.prototype.hide, this.init()
    };

function u(e) {
    var i, n = arguments,
        s = e;
    [].shift.apply(n);
    var o = this.each(function() {
        var e = t(this);
        if (e.is("select")) {
            var o = e.data("selectpickerMap"),
                a = "object" == typeof s && s;
            if (o) {
                if (a)
                    for (var r in a) a.hasOwnProperty(r) && (o.options[r] = a[r])
            } else {
                var l = t.extend({}, d.DEFAULTS, t.fn.selectpickerMap.defaults || {}, e.data(), a);
                l.template = t.extend({}, d.DEFAULTS.template, t.fn.selectpickerMap.defaults ? t.fn.selectpickerMap.defaults.template : {}, e.data().template, a.template), e.data("selectpickerMap", o = new d(this, l))
            }
            "string" == typeof s && (i = o[s] instanceof Function ? o[s].apply(o, n) : o.options[s])
        }
    });
    return void 0 !== i ? i : o
}
d.VERSION = "1.12.2", d.DEFAULTS = {
    noneSelectedText: window.lang && window.lang.nothing_selected ? window.lang.nothing_selected : "Nothing selected",
    noneResultsText: window.lang && window.lang.no_results_matched ? window.lang.no_results_matched : "No results matched {0}",
    countSelectedText: function(t, e) {
        return 1 == t ? "{0} item selected" : "{0} items selected"
    },
    maxOptionsText: function(t, e) {
        return [1 == t ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == e ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"]
    },
    selectAllText: window.lang && window.lang.select_all ? window.lang.select_all : "Select All",
    deselectAllText: window.lang && window.lang.deselect_all ? window.lang.deselect_all : "Deselect All",
    doneButton: !1,
    doneButtonText: window.lang && window.lang.close ? window.lang.close : "Close",
    multipleSeparator: ", ",
    styleBase: "btn",
    style: "btn-default",
    size: "auto",
    title: null,
    selectedTextFormat: "values",
    width: !1,
    container: !1,
    hideDisabled: !1,
    showSubtext: !1,
    showIcon: !0,
    showContent: !0,
    dropupAuto: !0,
    header: !1,
    liveSearch: !1,
    liveSearchPlaceholder: null,
    liveSearchNormalize: !1,
    liveSearchStyle: "contains",
    actionsBox: !1,
    iconBase: "glyphicon",
    tickIcon: "glyphicon-ok",
    showTick: !1,
    template: {
        caret: '<span class="caret"></span>'
    },
    maxOptions: !1,
    mobile: !1,
    selectOnTab: !1,
    dropdownAlignRight: !1,
    windowPadding: 0,
    icon: ""
}, d.prototype = {
    constructor: d,
    init: function() {
        var e = this,
            i = this.$element.attr("id");
        this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu-map"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.checking = !1, this.$element.removeClass("bs-select-hidden"), !0 === this.options.dropdownAlignRight && this.$menu.addClass("dropdown-menu-map-right"), void 0 !== i && (this.$button.attr("data-id", i), t('label[for="' + i + '"]').click(function(t) {
            t.preventDefault(), e.$button.focus()
        })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({
            "hide.bs.dropdown-map": function(t) {
                e.$menuInner.attr("aria-expanded", !1), e.$element.trigger("hide.bs.select", t)
            },
            "hidden.bs.dropdown-map": function(t) {
                e.$element.trigger("hidden.bs.select", t)
            },
            "show.bs.dropdown-map": function(t) {
                e.$menuInner.attr("aria-expanded", !0), e.$element.trigger("show.bs.select", t)
            },
            "shown.bs.dropdown-map": function(t) {
                e.$element.trigger("shown.bs.select", t)
            }
        }), e.$element[0].hasAttribute("required") && this.$element.on("invalid", function() {
            e.$button.addClass("bs-invalid").focus(), e.$element.on({
                "focus.bs.select": function() {
                    e.$button.focus(), e.$element.off("focus.bs.select")
                },
                "shown.bs.select": function() {
                    e.$element.val(e.$element.val()).off("shown.bs.select")
                },
                "rendered.bs.select": function() {
                    this.validity.valid && e.$button.removeClass("bs-invalid"), e.$element.off("rendered.bs.select")
                }
            })
        }), setTimeout(function() {
            e.$element.trigger("loaded.bs.select")
        })
    },
    createDropdown: function() {
        var e = this.multiple || this.options.showTick ? " show-tick" : "",
            i = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
            n = this.autofocus ? " autofocus" : "",
            s = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
            o = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + h(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>' : "",
            a = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
            r = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "";
        return t(l)
    },
    createView: function() {
        var t = this.createDropdown(),
            e = this.createLi();
        return t.find("ul")[0].innerHTML = e, t
    },
    reloadLi: function() {
        var t = this.createLi();
        this.$menuInner[0].innerHTML = t
    },
    createLi: function() {
        var e = this,
            i = [],
            n = 0,
            s = document.createElement("option"),
            o = -1,
            a = function(t, e, i, n) {
                return "<li" + (void 0 !== i && "" !== i ? ' class="' + i + '"' : "") + (void 0 !== e && null !== e ? ' data-original-index="' + e + '"' : "") + (void 0 !== n && null !== n ? 'data-optgroup="' + n + '"' : "") + ">" + t + "</li>"
            },
            l = function(i, n, s, o) {
                return '<a tabindex="0"' + (void 0 !== n ? ' class="' + n + '"' : "") + (s ? ' style="' + s + '"' : "") + (e.options.liveSearchNormalize ? ' data-normalized-text="' + r(h(t(i).html())) + '"' : "") + (void 0 !== o || null !== o ? ' data-tokens="' + o + '"' : "") + ' role="option"><span class="' + e.options.iconBase + " " + e.options.tickIcon + ' check-mark"></span>' + i + "</a>"
            };
        if (this.options.title && !this.multiple && (o--, !this.$element.find(".bs-title-option").length)) {
            var c = this.$element[0];
            s.className = "bs-title-option", s.innerHTML = this.options.title, s.value = "", c.insertBefore(s, c.firstChild), void 0 === t(c.options[c.selectedIndex]).attr("selected") && void 0 === this.$element.data("selected") && (s.selected = !0)
        }
        var d = this.$element.find("option");
        return d.each(function(s) {
            var r = t(this);
            if (o++, !r.hasClass("bs-title-option")) {
                var c, u = this.className || "",
                    p = h(this.style.cssText),
                    f = r.data("content") ? r.data("content") : r.html(),
                    g = r.data("tokens") ? r.data("tokens") : null,
                    m = void 0 !== r.data("subtext") ? '<small class="text-muted">' + r.data("subtext") + "</small>" : "",
                    v = void 0 !== r.data("icon") ? '<span class="' + e.options.iconBase + " " + r.data("icon") + '"></span> ' : "",
                    y = r.parent(),
                    b = "OPTGROUP" === y[0].tagName,
                    w = b && y[0].disabled,
                    x = this.disabled || w;
                if ("" !== v && x && (v = "<span>" + v + "</span>"), e.options.hideDisabled && (x && !b || w)) return c = r.data("prevHiddenIndex"), r.next().data("prevHiddenIndex", void 0 !== c ? c : s), void o--;
                if (r.data("content") || (f = v + '<span class="text">' + f + m + "</span>"), b && !0 !== r.data("divider")) {
                    if (e.options.hideDisabled && x) {
                        if (void 0 === y.data("allOptionsDisabled")) {
                            var S = y.children();
                            y.data("allOptionsDisabled", S.filter(":disabled").length === S.length)
                        }
                        if (y.data("allOptionsDisabled")) return void o--
                    }
                    var k = " " + y[0].className || "";
                    if (0 === r.index()) {
                        n += 1;
                        var D = y[0].label,
                            C = void 0 !== y.data("subtext") ? '<small class="text-muted">' + y.data("subtext") + "</small>" : "";
                        D = (y.data("icon") ? '<span class="' + e.options.iconBase + " " + y.data("icon") + '"></span> ' : "") + '<span class="text">' + h(D) + C + "</span>", 0 !== s && i.length > 0 && (o++, i.push(a("", null, "divider", n + "div"))), o++, D = '<div class="checkbox-inline"><input type="checkbox"><label></label></div>' + D, i.push(a(D, null, "dropdown-map-header" + k, n))
                    }
                    if (e.options.hideDisabled && x) return void o--;
                    i.push(a(l(f, "opt " + u + k, p, g), s, "", n))
                } else if (!0 === r.data("divider")) i.push(a("", s, "divider"));
                else if (!0 === r.data("hidden")) c = r.data("prevHiddenIndex"), r.next().data("prevHiddenIndex", void 0 !== c ? c : s), i.push(a(l(f, u, p, g), s, "hidden is-hidden"));
                else {
                    var T = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName;
                    if (!T && e.options.hideDisabled && void 0 !== (c = r.data("prevHiddenIndex"))) {
                        var _ = d.eq(c)[0].previousElementSibling;
                        _ && "OPTGROUP" === _.tagName && !_.disabled && (T = !0)
                    }
                    T && (o++, i.push(a("", null, "divider", n + "div"))), i.push(a(l(f, u, p, g), s))
                }
                e.liObj[s] = o
            }
        }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), i.join("")
    },
    findLis: function() {
        return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis
    },
    render: function(e) {
        var i, n = this,
            s = this.$element.find("option");
        !1 !== e && s.each(function(t) {
            var e = n.findLis().eq(n.liObj[t]);
            n.setDisabled(t, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, e), n.setSelected(t, this.selected, e)
        }), this.togglePlaceholder(), this.tabIndex();
        var o = s.map(function() {
                if (this.selected) {
                    if (n.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return;
                    var e, i = t(this),
                        s = i.data("icon") && n.options.showIcon ? '<i class="' + n.options.iconBase + " " + i.data("icon") + '"></i> ' : "";
                    return e = n.options.showSubtext && i.data("subtext") && !n.multiple ? ' <small class="text-muted">' + i.data("subtext") + "</small>" : "", void 0 !== i.attr("title") ? i.attr("title") : i.data("content") && n.options.showContent ? i.data("content").toString() : s + i.html() + e
                }
            }).toArray(),
            a = this.multiple ? o.join(this.options.multipleSeparator) : o[0];
        if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) {
            var r = this.options.selectedTextFormat.split(">");
            if (r.length > 1 && o.length > r[1] || 1 == r.length && o.length >= 2) {
                i = this.options.hideDisabled ? ", [disabled]" : "";
                var l = s.not('[data-divider="true"], [data-hidden="true"]' + i).length;
                a = ("function" == typeof this.options.countSelectedText ? this.options.countSelectedText(o.length, l) : this.options.countSelectedText).replace("{0}", o.length.toString()).replace("{1}", l.toString())
            }
        }
        void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (a = this.options.title), a || (a = void 0 !== this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", c(t.trim(a.replace(/<[^>]*>?/g, "")))), this.$button.children(".filter-option").html(a), this.$element.trigger("rendered.bs.select")
    },
    setStyle: function(t, e) {
        this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpickerMap|mobile-device|bs-select-hidden|validate\[.*\]/gi, ""));
        var i = t || this.options.style;
        "add" == e ? this.$button.addClass(i) : "remove" == e ? this.$button.removeClass(i) : (this.$button.removeClass(this.options.style), this.$button.addClass(i))
    },
    liHeight: function(e) {
        if (e || !1 !== this.options.size && !this.sizeInfo) {
            var i = document.createElement("div"),
                n = document.createElement("div"),
                s = document.createElement("ul"),
                o = document.createElement("li"),
                a = document.createElement("li"),
                r = document.createElement("a"),
                l = document.createElement("span"),
                h = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                c = this.options.liveSearch ? document.createElement("div") : null,
                d = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                u = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null;
            if (l.className = "text", i.className = this.$menu[0].parentNode.className + " open", n.className = "dropdown-menu-map open", s.className = "dropdown-menu-map inner", o.className = "divider", l.appendChild(document.createTextNode("Inner text")), r.appendChild(l), a.appendChild(r), s.appendChild(a), s.appendChild(o), h && n.appendChild(h), c) {
                var p = document.createElement("input");
                c.className = "bs-searchbox", p.className = "form-control", c.appendChild(p), n.appendChild(c)
            }
            d && n.appendChild(d), n.appendChild(s), u && n.appendChild(u), i.appendChild(n), document.body.appendChild(i);
            var f = r.offsetHeight,
                g = h ? h.offsetHeight : 0,
                m = c ? c.offsetHeight : 0,
                v = d ? d.offsetHeight : 0,
                y = u ? u.offsetHeight : 0,
                b = t(o).outerHeight(!0),
                w = "function" == typeof getComputedStyle && getComputedStyle(n),
                x = w ? null : t(n),
                S = {
                    vert: parseInt(w ? w.paddingTop : x.css("paddingTop")) + parseInt(w ? w.paddingBottom : x.css("paddingBottom")) + parseInt(w ? w.borderTopWidth : x.css("borderTopWidth")) + parseInt(w ? w.borderBottomWidth : x.css("borderBottomWidth")),
                    horiz: parseInt(w ? w.paddingLeft : x.css("paddingLeft")) + parseInt(w ? w.paddingRight : x.css("paddingRight")) + parseInt(w ? w.borderLeftWidth : x.css("borderLeftWidth")) + parseInt(w ? w.borderRightWidth : x.css("borderRightWidth"))
                },
                k = {
                    vert: S.vert + parseInt(w ? w.marginTop : x.css("marginTop")) + parseInt(w ? w.marginBottom : x.css("marginBottom")) + 2,
                    horiz: S.horiz + parseInt(w ? w.marginLeft : x.css("marginLeft")) + parseInt(w ? w.marginRight : x.css("marginRight")) + 2
                };
            document.body.removeChild(i), this.sizeInfo = {
                liHeight: f,
                headerHeight: g,
                searchHeight: m,
                actionsHeight: v,
                doneButtonHeight: y,
                dividerHeight: b,
                menuPadding: S,
                menuExtras: k
            }
        }
    },
    setSize: function() {
        if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), !1 !== this.options.size) {
            var e, i, n, s, o, a, r, l, h = this,
                c = this.$menu,
                d = this.$menuInner,
                u = t(window),
                p = this.$newElement[0].offsetHeight,
                f = this.$newElement[0].offsetWidth,
                g = this.sizeInfo.liHeight,
                m = this.sizeInfo.headerHeight,
                v = this.sizeInfo.searchHeight,
                y = this.sizeInfo.actionsHeight,
                b = this.sizeInfo.doneButtonHeight,
                w = this.sizeInfo.dividerHeight,
                x = this.sizeInfo.menuPadding,
                S = this.sizeInfo.menuExtras,
                k = this.options.hideDisabled ? ".disabled" : "",
                D = function() {
                    var e, i = h.$newElement.offset(),
                        n = t(h.options.container);
                    h.options.container && !n.is("body") ? ((e = n.offset()).top += parseInt(n.css("borderTopWidth")), e.left += parseInt(n.css("borderLeftWidth"))) : e = {
                        top: 0,
                        left: 0
                    };
                    var s = h.options.windowPadding;
                    o = i.top - e.top - u.scrollTop(), a = u.height() - o - p - e.top - s[2], r = i.left - e.left - u.scrollLeft(), l = u.width() - r - f - e.left - s[1], o -= s[0], r -= s[3]
                };
            if (D(), "auto" === this.options.size) {
                var C = function() {
                    var u, p = function(e, i) {
                            return function(n) {
                                return i ? n.classList ? n.classList.contains(e) : t(n).hasClass(e) : !(n.classList ? n.classList.contains(e) : t(n).hasClass(e))
                            }
                        },
                        w = h.$menuInner[0].getElementsByTagName("li"),
                        k = Array.prototype.filter ? Array.prototype.filter.call(w, p("hidden", !1)) : h.$lis.not(".hidden"),
                        C = Array.prototype.filter ? Array.prototype.filter.call(k, p("dropdown-header", !0)) : k.filter(".dropdown-header");
                    D(), e = a - S.vert, i = l - S.horiz, h.options.container ? (c.data("height") || c.data("height", c.height()), n = c.data("height"), c.data("width") || c.data("width", c.width()), s = c.data("width")) : (n = c.height(), s = c.width()), h.options.dropupAuto && h.$newElement.toggleClass("dropup", o > a && e - S.vert < n), h.$newElement.hasClass("dropup") && (e = o - S.vert), "auto" === h.options.dropdownAlignRight && c.toggleClass("dropdown-menu-map-right", r > l && i - S.horiz < s - f), u = k.length + C.length > 3 ? 3 * g + S.vert - 2 : 0, c.css({
                        "max-height": e + "px",
                        overflow: "hidden",
                        "min-height": u + m + v + y + b + "px"
                    }), d.css({
                        "max-height": e - m - v - y - b - x.vert + "px",
                        "overflow-y": "auto",
                        "min-height": Math.max(u - x.vert, 0) + "px"
                    })
                };
                C(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", C), u.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", C)
            } else if (this.options.size && "auto" != this.options.size && this.$lis.not(k).length > this.options.size) {
                var T = this.$lis.not(".divider").not(k).children().slice(0, this.options.size).last().parent().index(),
                    _ = this.$lis.slice(0, T + 1).filter(".divider").length;
                e = g * this.options.size + _ * w + x.vert, h.options.container ? (c.data("height") || c.data("height", c.height()), n = c.data("height")) : n = c.height(), h.options.dropupAuto && this.$newElement.toggleClass("dropup", o > a && e - S.vert < n), c.css({
                    "max-height": e + m + v + y + b + "px",
                    overflow: "hidden",
                    "min-height": ""
                }), d.css({
                    "max-height": e - x.vert + "px",
                    "overflow-y": "auto",
                    "min-height": ""
                })
            }
        }
    },
    setWidth: function() {
        if ("auto" === this.options.width) {
            this.$menu.css("min-width", "0");
            var t = this.$menu.parent().clone().appendTo("body"),
                e = this.options.container ? this.$newElement.clone().appendTo("body") : t,
                i = t.children(".dropdown-menu-map").outerWidth(),
                n = e.css("width", "auto").children("button").outerWidth();
            t.remove(), e.remove(), this.$newElement.css("width", Math.max(i, n) + "px")
        } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
        this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width")
    },
    selectPosition: function() {
        this.$bsContainer = t('<div class="bs-container" />');
        var e, i, n, s = this,
            o = t(this.options.container),
            a = function(t) {
                s.$bsContainer.addClass(t.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", t.hasClass("dropup")), e = t.offset(), o.is("body") ? i = {
                    top: 0,
                    left: 0
                } : ((i = o.offset()).top += parseInt(o.css("borderTopWidth")) - o.scrollTop(), i.left += parseInt(o.css("borderLeftWidth")) - o.scrollLeft()), n = t.hasClass("dropup") ? 0 : t[0].offsetHeight, s.$bsContainer.css({
                    top: e.top - i.top + n,
                    left: e.left - i.left,
                    width: t[0].offsetWidth
                })
            };
        this.$button.on("click", function() {
            var e = t(this);
            s.isDisabled() || (a(s.$newElement), s.$bsContainer.appendTo(s.options.container).toggleClass("open", !e.hasClass("open")).append(s.$menu))
        }), t(window).on("resize scroll", function() {
            a(s.$newElement)
        }), this.$element.on("hide.bs.select", function() {
            s.$menu.data("height", s.$menu.height()), s.$bsContainer.detach()
        })
    },
    setSelected: function(t, e, i) {
        i || (this.togglePlaceholder(), i = this.findLis().eq(this.liObj[t])), i.toggleClass("selected", e).find("a").attr("aria-selected", e)
    },
    setDisabled: function(t, e, i) {
        i || (i = this.findLis().eq(this.liObj[t])), e ? i.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1).attr("aria-disabled", !0) : i.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0).attr("aria-disabled", !1)
    },
    isDisabled: function() {
        return this.$element[0].disabled
    },
    checkDisabled: function() {
        var t = this;
        this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1).attr("aria-disabled", !0)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled").attr("aria-disabled", !1)), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function() {
            return !t.isDisabled()
        })
    },
    checkSelectedGroups: function(e) {
        if (this.multiple) {
            var i = this.$menuInner,
                n = "li.dropdown-header[data-optgroup]";
            e && (n = 'li.dropdown-header[data-optgroup="' + e + '"]'), i.find(n).each(function() {
                var e = t(this).find("input"),
                    n = 0 == i.find("li[data-original-index][data-optgroup=" + t(this).data("optgroup") + "]:not(.selected)").not(".divider, .dropdown-header, .disabled, .hidden").length;
                n != e.prop("checked") && e.prop("checked", n)
            }), this.checking = !1
        }
    },
    togglePlaceholder: function() {
        var t = this.$element.val();
        this.$button.toggleClass("bs-placeholder", null === t || "" === t || t.constructor === Array && 0 === t.length)
    },
    tabIndex: function() {
        this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98)
    },
    clickListener: function() {
        var e = this,
            i = t(document);
        i.data("spaceSelect", !1), this.$button.on("keyup", function(t) {
            /(32)/.test(t.keyCode.toString(10)) && i.data("spaceSelect") && (t.preventDefault(), i.data("spaceSelect", !1))
        }), this.$button.on("click", function() {
            e.setSize()
        }), this.$menuInner.on("click", ".divider, .dropdown-header", function(t) {
            t.stopPropagation()
        }), this.$element.on("shown.bs.select", function() {
            if (e.options.liveSearch || e.multiple) {
                if (!e.multiple) {
                    var t = e.liObj[e.$element[0].selectedIndex];
                    if ("number" != typeof t || !1 === e.options.size) return;
                    var i = e.$lis.eq(t)[0].offsetTop - e.$menuInner[0].offsetTop;
                    i = i - e.$menuInner[0].offsetHeight / 2 + e.sizeInfo.liHeight / 2, e.$menuInner[0].scrollTop = i
                }
            } else e.$menuInner.find(".selected a").focus()
        }), this.$menuInner.on("click", "li a", function(i) {
            var n = t(this),
                s = n.parent().data("originalIndex"),
                o = e.$element.val(),
                r = e.$element.prop("selectedIndex"),
                l = !0;
            if (e.multiple && 1 !== e.options.maxOptions && i.stopPropagation(), i.preventDefault(), !e.isDisabled() && !n.parent().hasClass("disabled")) {
                var h = e.$element.find("option"),
                    c = h.eq(s),
                    d = c.prop("selected"),
                    u = c.parent("optgroup"),
                    p = e.options.maxOptions,
                    f = u.data("maxOptions") || !1;
                if (e.multiple) {
                    if (c.prop("selected", !d), e.setSelected(s, !d), n.blur(), !1 !== p || !1 !== f) {
                        var g = p < h.filter(":selected").length,
                            m = f < u.find("option:selected").length;
                        if (p && g || f && m)
                            if (p && 1 == p) h.prop("selected", !1), c.prop("selected", !0), e.$menuInner.find(".selected").removeClass("selected"), e.setSelected(s, !0);
                            else if (f && 1 == f) {
                            u.find("option:selected").prop("selected", !1), c.prop("selected", !0);
                            var v = n.parent().data("optgroup");
                            e.$menuInner.find('[data-optgroup="' + v + '"]').removeClass("selected"), e.setSelected(s, !0)
                        } else {
                            var y = "string" == typeof e.options.maxOptionsText ? [e.options.maxOptionsText, e.options.maxOptionsText] : e.options.maxOptionsText,
                                b = "function" == typeof y ? y(p, f) : y,
                                w = b[0].replace("{n}", p),
                                x = b[1].replace("{n}", f),
                                S = t('<div class="notify"></div>');
                            b[2] && (w = w.replace("{var}", b[2][p > 1 ? 0 : 1]), x = x.replace("{var}", b[2][f > 1 ? 0 : 1])), c.prop("selected", !1), e.$menu.append(S), p && g && (S.append(t("<div>" + w + "</div>")), l = !1, e.$element.trigger("maxReached.bs.select")), f && m && (S.append(t("<div>" + x + "</div>")), l = !1, e.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() {
                                e.setSelected(s, !1)
                            }, 10), S.delay(750).fadeOut(300, function() {
                                t(this).remove()
                            })
                        }
                    }
                } else h.prop("selected", !1), c.prop("selected", !0), e.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected", !1), e.setSelected(s, !0);
                l && (o != e.$element.val() && e.multiple || r != e.$element.prop("selectedIndex") && !e.multiple) && (a = [s, c.prop("selected"), d], e.$element.triggerNative("change"))
            }
        }), this.$menuInner.on("change", "li.dropdown-map-header input", function() {
            if (e.multiple) {
                e.findLis();
                for (var i = t(this).closest(".dropdown-map-header").data("optgroup"), n = e.$element.find("option"), s = e.$lis.not(".divider, .dropdown-map-header, .disabled, .hidden").filter("[data-optgroup=" + i + "]"), o = [], a = t(this).prop("checked"), r = 0; r < s.length; r++) {
                    var l = s[r].getAttribute("data-original-index");
                    o[o.length] = n.eq(l)[0]
                }
                t(o).prop("selected", a), e.render(!0), e.togglePlaceholder(), e.$element.triggerNative("change")
            }
        }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(i) {
            i.currentTarget == this && (i.preventDefault(), i.stopPropagation(), e.options.liveSearch && !t(i.target).hasClass("close") ? e.$searchbox.focus() : e.$button.focus())
        }), this.$menu.on("click", ".popover-title .close", function() {
            e.$button.click()
        }), this.$searchbox.on("click", function(t) {
            e.$newElement.hasClass("open") || e.$newElement.addClass("open"), t.stopPropagation()
        }), this.$menu.on("click", ".actions-btn", function(i) {
            e.options.liveSearch ? e.$searchbox.focus() : e.$button.focus(), i.preventDefault(), i.stopPropagation(), t(this).hasClass("bs-select-all") ? e.selectAll() : e.deselectAll()
        }), this.$element.change(function() {
            e.render(!1), e.$element.trigger("changed.bs.select", a), a = null, e.checkSelectedGroups()
        })
    },
    liveSearchListener: function() {
        var e = this,
            i = t('<li class="no-results"></li>');
        this.$button.on("click.dropdown-map.data-api", function() {
            e.$menuInner.find(".active").removeClass("active"), e.$searchbox.val() && (e.$searchbox.val(""), e.$lis.not(".is-hidden").removeClass("hidden"), i.parent().length && i.remove()), e.multiple || e.$menuInner.find(".selected").addClass("active"), setTimeout(function() {
                e.$searchbox.focus()
            }, 10)
        }), this.$searchbox.on("click.dropdown-map.data-api focus.dropdown-map.data-api touchend.dropdown-map.data-api", function(t) {
            t.stopPropagation()
        }), this.$searchbox.on("input propertychange", function() {
            if (e.$lis.not(".is-hidden").removeClass("hidden"), e.$lis.filter(".active").removeClass("active"), i.remove(), e.$searchbox.val()) {
                var n, s = e.$lis.not(".is-hidden, .divider, .dropdown-map-header");
                if ((n = e.options.liveSearchNormalize ? s.not(":a" + e._searchStyle() + '("' + r(e.$searchbox.val()) + '")') : s.not(":" + e._searchStyle() + '("' + e.$searchbox.val() + '")')).length === s.length) i.html(e.options.noneResultsText.replace("{0}", '"' + h(e.$searchbox.val()) + '"')), e.$menuInner.append(i), e.$lis.addClass("hidden");
                else {
                    n.addClass("hidden");
                    var o, a = e.$lis.not(".hidden");
                    a.each(function(e) {
                        var i = t(this);
                        i.hasClass("divider") ? void 0 === o ? i.addClass("hidden") : (o && o.addClass("hidden"), o = i) : i.hasClass("dropdown-map-header") && a.eq(e + 1).data("optgroup") !== i.data("optgroup") ? i.addClass("hidden") : o = null
                    }), o && o.addClass("hidden"), s.not(".hidden").first().addClass("active"), e.$menuInner.scrollTop(0)
                }
            }
            e.checking || (e.checking = !0, setTimeout(function() {
                e.checkSelectedGroups()
            }, 20))
        })
    },
    _searchStyle: function() {
        return {
            begins: "ibegins",
            startsWith: "ibegins"
        } [this.options.liveSearchStyle] || "icontains"
    },
    val: function(t) {
        return void 0 !== t ? (this.$element.val(t), this.render(), this.$element) : this.$element.val()
    },
    changeAll: function(e) {
        if (this.multiple) {
            void 0 === e && (e = !0), this.findLis();
            var i = this.$element.find("option"),
                n = this.$lis.not(".divider, .dropdown-map-header, .disabled, .hidden"),
                s = n.length,
                o = [];
            if (e) {
                if (n.filter(".selected").length === n.length) return
            } else if (0 === n.filter(".selected").length) return;
            n.toggleClass("selected", e);
            for (var a = 0; a < s; a++) {
                var r = n[a].getAttribute("data-original-index");
                o[o.length] = i.eq(r)[0]
            }
            t(o).prop("selected", e), this.render(!1), this.togglePlaceholder(), this.$element.triggerNative("change")
        }
    },
    selectAll: function() {
        return this.changeAll(!0)
    },
    deselectAll: function() {
        return this.changeAll(!1)
    },
    toggle: function(t) {
        (t = t || window.event) && t.stopPropagation(), this.$button.trigger("click")
    },
    keydown: function(e) {
        var i, n, s, o, a = t(this),
            r = (a.is("input") ? a.parent().parent() : a.parent()).data("this"),
            l = ":not(.disabled, .hidden, .dropdown-map-header, .divider)",
            h = {
                32: " ",
                48: "0",
                49: "1",
                50: "2",
                51: "3",
                52: "4",
                53: "5",
                54: "6",
                55: "7",
                56: "8",
                57: "9",
                59: ";",
                65: "a",
                66: "b",
                67: "c",
                68: "d",
                69: "e",
                70: "f",
                71: "g",
                72: "h",
                73: "i",
                74: "j",
                75: "k",
                76: "l",
                77: "m",
                78: "n",
                79: "o",
                80: "p",
                81: "q",
                82: "r",
                83: "s",
                84: "t",
                85: "u",
                86: "v",
                87: "w",
                88: "x",
                89: "y",
                90: "z",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9"
            };
        if (!(o = r.$newElement.hasClass("open")) && (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 65 && e.keyCode <= 90)) return r.options.container ? r.$button.trigger("click") : (r.setSize(), r.$menu.parent().addClass("open"), o = !0), void r.$searchbox.focus();
        if (r.options.liveSearch && /(^9$|27)/.test(e.keyCode.toString(10)) && o && (e.preventDefault(), e.stopPropagation(), r.$menuInner.click(), r.$button.focus()), /(38|40)/.test(e.keyCode.toString(10))) {
            if (!(i = r.$lis.filter(l)).length) return;
            n = r.options.liveSearch ? i.index(i.filter(".active")) : i.index(i.find("a").filter(":focus").parent()), s = r.$menuInner.data("prevIndex"), 38 == e.keyCode ? (!r.options.liveSearch && n != s || -1 == n || n--, n < 0 && (n += i.length)) : 40 == e.keyCode && ((r.options.liveSearch || n == s) && n++, n %= i.length), r.$menuInner.data("prevIndex", n), r.options.liveSearch ? (e.preventDefault(), a.hasClass("dropdown-toggle-maop") || (i.removeClass("active").eq(n).addClass("active").children("a").focus(), a.focus())) : i.eq(n).children("a").focus()
        } else if (!a.is("input")) {
            var c, d = [];
            (i = r.$lis.filter(l)).each(function(i) {
                t.trim(t(this).children("a").text().toLowerCase()).substring(0, 1) == h[e.keyCode] && d.push(i)
            }), c = t(document).data("keycount"), c++, t(document).data("keycount", c), t.trim(t(":focus").text().toLowerCase()).substring(0, 1) != h[e.keyCode] ? (c = 1, t(document).data("keycount", c)) : c >= d.length && (t(document).data("keycount", 0), c > d.length && (c = 1)), i.eq(d[c - 1]).children("a").focus()
        }
        if ((/(13|32)/.test(e.keyCode.toString(10)) || /(^9$)/.test(e.keyCode.toString(10)) && r.options.selectOnTab) && o) {
            if (/(32)/.test(e.keyCode.toString(10)) || e.preventDefault(), r.options.liveSearch) /(32)/.test(e.keyCode.toString(10)) || (r.$menuInner.find(".active a").click(), a.focus());
            else {
                var u = t(":focus");
                u.click(), u.focus(), e.preventDefault(), t(document).data("spaceSelect", !0)
            }
            t(document).data("keycount", 0)
        }(/(^9$|27)/.test(e.keyCode.toString(10)) && o && (r.multiple || r.options.liveSearch) || /(27)/.test(e.keyCode.toString(10)) && !o) && (r.$menu.parent().removeClass("open"), r.options.container && r.$newElement.removeClass("open"), r.$button.focus())
    },
    mobile: function() {
        this.$element.addClass("mobile-device")
    },
    refresh: function() {
        this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select")
    },
    hide: function() {
        this.$newElement.hide()
    },
    show: function() {
        this.$newElement.show()
    },
    remove: function() {
        this.$newElement.remove(), this.$element.remove()
    },
    destroy: function() {
        this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpickerMap").removeClass("bs-select-hidden selectpickerMap")
    }
};
var p = t.fn.selectpickerMap;
t.fn.selectpickerMap = u, t.fn.selectpickerMap.Constructor = d, t.fn.selectpickerMap.noConflict = function() {
    return t.fn.selectpickerMap = p, this
}, t(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select-map [data-toggle-map=dropdown-map], .bootstrap-select-map [role="listboxMap"], .bs-searchbox input', d.prototype.keydown).on("focusin.modal", '.bootstrap-select-map [data-toggle-map=dropdown-map], .bootstrap-select-map [role="listboxMap"], .bs-searchbox input', function(t) {
    t.stopPropagation()
}), t(window).on("load.bs.select.data-api", function() {
    t(".selectpickerMap").each(function() {
        var e = t(this);
        u.call(e, e.data())
    })
})
}(jQuery),
function(t, e) {
var i = function(i, n) {
    var s, o, a = this;
    n = n || {}, this.$element = t(i), this.options = t.extend(!0, {}, t.fn.ajaxselectpickerMap.defaults, n), this.LOG_ERROR = 1, this.LOG_WARNING = 2, this.LOG_INFO = 3, this.LOG_DEBUG = 4, this.lastRequest = !1, this.previousQuery = "", this.query = "", this.request = !1;
    var r = [{
        from: "ajaxResultsPreHook",
        to: "preprocessData"
    }, {
        from: "ajaxSearchUrl",
        to: {
            ajax: {
                url: "{{{value}}}"
            }
        }
    }, {
        from: "ajaxOptions",
        to: "ajax"
    }, {
        from: "debug",
        to: function(e) {
            var i = {};
            i.log = Boolean(a.options[e.from]) ? a.LOG_DEBUG : 0, a.options = t.extend(!0, {}, a.options, i), delete a.options[e.from], a.log(a.LOG_WARNING, 'Deprecated option "' + e.from + '". Update code to use:', i)
        }
    }, {
        from: "mixWithCurrents",
        to: "preserveSelected"
    }, {
        from: "placeHolderOption",
        to: {
            locale: {
                emptyTitle: "{{{value}}}"
            }
        }
    }];
    r.length && t.map(r, function(e) {
        if (a.options[e.from])
            if (t.isPlainObject(e.to)) a.replaceValue(e.to, "{{{value}}}", a.options[e.from]), a.options = t.extend(!0, {}, a.options, e.to), a.log(a.LOG_WARNING, 'Deprecated option "' + e.from + '". Update code to use:', e.to), delete a.options[e.from];
            else if (t.isFunction(e.to)) e.to.apply(a, [e]);
        else {
            var i = {};
            i[e.to] = a.options[e.from], a.options = t.extend(!0, {}, a.options, i), a.log(a.LOG_WARNING, 'Deprecated option "' + e.from + '". Update code to use:', i), delete a.options[e.from]
        }
    });
    var l = this.$element.data();
    l.searchUrl && (a.log(a.LOG_WARNING, 'Deprecated attribute name: "data-search-url". Update markup to use: \' data-abs-ajax-url="' + l.searchUrl + "\" '"), this.options.ajax.url = l.searchUrl);
    var h = function(t, e) {
            return e.toLowerCase()
        },
        c = function(t, e, i) {
            var n = [].concat(t),
                s = n.length,
                o = i || {};
            if (s) {
                var a = n.shift();
                o[a] = c(n, e, o[a])
            }
            return s ? o : e
        },
        d = Object.keys(l).filter(/./.test.bind(new RegExp("^abs[A-Z]")));
    if (d.length) {
        var u = {},
            p = ["locale"];
        for (s = 0, o = d.length; s < o; s++) {
            var f = d[s].replace(/^abs([A-Z])/, h).replace(/([A-Z])/g, "-$1").toLowerCase(),
                g = f.split("-");
            if (g[0] && g.length > 1 && -1 !== p.indexOf(g[0])) {
                for (var m = [g.shift()], v = "", y = 0; y < g.length; y++) v += 0 === y ? g[y] : g[y].charAt(0).toUpperCase() + g[y].slice(1);
                m.push(v), g = m
            }
            this.log(this.LOG_DEBUG, 'Processing data attribute "data-abs-' + f + '":', l[d[s]]), c(g, l[d[s]], u)
        }
        this.options = t.extend(!0, {}, this.options, u), this.log(this.LOG_DEBUG, "Merged in the data attribute options: ", u, this.options)
    }
    if (this.selectpickerMap = l.selectpickerMap, !this.selectpickerMap) return this.log(this.LOG_ERROR, "Cannot instantiate an AjaxBootstrapSelect instance without selectpickerMap first being initialized!"), null;
    if (!this.options.ajax.url) return this.log(this.LOG_ERROR, 'Option "ajax.url" must be set! Options:', this.options), null;
    if (this.locale = t.extend(!0, {}, t.fn.ajaxselectpickerMap.locale), this.options.langCode = this.options.langCode || e.navigator.userLanguage || e.navigator.language || "en", !this.locale[this.options.langCode]) {
        var b = this.options.langCode;
        this.options.langCode = "en";
        var w = b.split("-");
        for (s = 0, o = w.length; s < o; s++) {
            var x = w.join("-");
            if (x.length && this.locale[x]) {
                this.options.langCode = x;
                break
            }
            w.pop()
        }
        this.log(this.LOG_WARNING, 'Unknown langCode option: "' + b + '". Using the following langCode instead: "' + this.options.langCode + '".')
    }
    this.locale[this.options.langCode] = t.extend(!0, {}, this.locale[this.options.langCode], this.options.locale), this.list = new e.AjaxBootstrapSelectList(this), this.list.refresh(), setTimeout(function() {
        a.init()
    }, 500)
};
i.prototype.init = function() {
    var i, n = this;
    this.options.preserveSelected && this.selectpickerMap.$menu.off("click", ".actions-btn").on("click", ".actions-btn", function(e) {
        n.selectpickerMap.options.liveSearch ? n.selectpickerMap.$searchbox.focus() : n.selectpickerMap.$button.focus(), e.preventDefault(), e.stopPropagation(), t(this).is(".bs-select-all") ? (null === n.selectpickerMap.$lis && (n.selectpickerMap.$lis = n.selectpickerMap.$menu.find("li")), n.$element.find("option:enabled").prop("selected", !0), t(n.selectpickerMap.$lis).not(".disabled").addClass("selected"), n.selectpickerMap.render()) : (null === n.selectpickerMap.$lis && (n.selectpickerMap.$lis = n.selectpickerMap.$menu.find("li")), n.$element.find("option:enabled").prop("selected", !1), t(n.selectpickerMap.$lis).not(".disabled").removeClass("selected"), n.selectpickerMap.render()), n.selectpickerMap.$element.change()
    }), this.selectpickerMap.$searchbox.attr("placeholder", this.t("searchPlaceholder")).off("input propertychange"), this.selectpickerMap.$searchbox.on(this.options.bindEvent, function(s) {
        var o = n.selectpickerMap.$searchbox.val();
        if (n.log(n.LOG_DEBUG, 'Bind event fired: "' + n.options.bindEvent + '", keyCode:', s.keyCode, s), n.options.cache || (n.options.ignoredKeys[13] = "enter"), n.options.ignoredKeys[s.keyCode]) n.log(n.LOG_DEBUG, "Key ignored.");
        else if (clearTimeout(i), o.length || (n.options.clearOnEmpty && n.list.destroy(), n.options.emptyRequest)) {
            if (n.previousQuery = n.query, n.query = o, n.options.cache && 13 !== s.keyCode) {
                var a = n.list.cacheGet(n.query);
                if (a) return n.list.setStatus(a.length ? "" : n.t("statusNoResults")), n.list.replaceOptions(a), void n.log(n.LOG_INFO, "Rebuilt options from cached data.")
            }
            i = setTimeout(function() {
                n.lastRequest && n.lastRequest.jqXHR && t.isFunction(n.lastRequest.jqXHR.abort) && n.lastRequest.jqXHR.abort(), n.request = new e.AjaxBootstrapSelectRequest(n), n.request.jqXHR.always(function() {
                    n.lastRequest = n.request, n.request = !1
                })
            }, n.options.requestDelay || 300)
        }
    })
}, i.prototype.log = function(t, i) {
    if (e.console && this.options.log) {
        if ("number" != typeof this.options.log) switch ("string" == typeof this.options.log && (this.options.log = this.options.log.toLowerCase()), this.options.log) {
            case !0:
            case "debug":
                this.options.log = this.LOG_DEBUG;
                break;
            case "info":
                this.options.log = this.LOG_INFO;
                break;
            case "warn":
            case "warning":
                this.options.log = this.LOG_WARNING;
                break;
            default:
            case !1:
            case "error":
                this.options.log = this.LOG_ERROR
        }
        if (t <= this.options.log) {
            var n = [].slice.apply(arguments, [2]);
            switch (t) {
                case this.LOG_DEBUG:
                    t = "debug";
                    break;
                case this.LOG_INFO:
                    t = "info";
                    break;
                case this.LOG_WARNING:
                    t = "warn";
                    break;
                default:
                case this.LOG_ERROR:
                    t = "error"
            }
            var s = "[" + t.toUpperCase() + "] AjaxBootstrapSelect:";
            "string" == typeof i ? n.unshift(s + " " + i) : (n.unshift(i), n.unshift(s)), e.console[t].apply(e.console, n)
        }
    }
}, i.prototype.replaceValue = function(e, i, n, s) {
    var o = this;
    s = t.extend({
        recursive: !0,
        depth: !1,
        limit: !1
    }, s), t.each(e, function(a, r) {
        return !(!1 !== s.limit && "number" == typeof s.limit && s.limit <= 0) && void(t.isArray(e[a]) || t.isPlainObject(e[a]) ? (s.recursive && !1 === s.depth || s.recursive && "number" == typeof s.depth && s.depth > 0) && o.replaceValue(e[a], i, n, s) : r === i && (!1 !== s.limit && "number" == typeof s.limit && s.limit--, e[a] = n))
    })
}, i.prototype.t = function(t, e) {
    return e = e || this.options.langCode, this.locale[e] && this.locale[e].hasOwnProperty(t) ? this.locale[e][t] : (this.log(this.LOG_WARNING, "Unknown translation key:", t), t)
}, e.AjaxBootstrapSelect = e.AjaxBootstrapSelect || i;
var n = function(e) {
    var i = this;
    this.$status = t(e.options.templates.status).hide().appendTo(e.selectpickerMap.$menu);
    var n = e.t("statusInitialized");
    n && n.length && this.setStatus(n), this.cache = {}, this.plugin = e, this.selected = [], this.title = null, this.selectedTextFormat = e.selectpickerMap.options.selectedTextFormat;
    var s = [];
    e.$element.find("option").each(function() {
        var i = t(this),
            n = i.attr("value");
        s.push({
            value: n,
            text: i.text(),
            class: i.attr("class") || "",
            data: i.data() || {},
            preserved: e.options.preserveSelected,
            selected: !!i.attr("selected")
        })
    }), this.cacheSet("", s), e.options.preserveSelected && (i.selected = s, e.$element.on("change.abs.preserveSelected", function(n) {
        var s = e.$element.find(":selected");
        i.selected = [], e.selectpickerMap.multiple || (s = s.last()), s.each(function() {
            var e = t(this),
                n = e.attr("value");
            i.selected.push({
                value: n,
                text: e.text(),
                class: e.attr("class") || "",
                data: e.data() || {},
                preserved: !0,
                selected: !0
            })
        }), i.replaceOptions(i.cacheGet(i.plugin.query))
    }))
};
n.prototype.build = function(e) {
    var i, n, s = e.length,
        o = t("<selects/>"),
        a = t("<optgroup/>").attr("label", this.plugin.t("currentlySelected"));
    for (this.plugin.log(this.plugin.LOG_DEBUG, "Building the select list options from data:", e), n = 0; n < s; n++) {
        var r = e[n],
            l = t("<option/>").appendTo(r.preserved ? a : o);
        if (r.hasOwnProperty("divider")) l.attr("data-divider", "true");
        else
            for (i in l.val(r.value).text(r.text), r.class.length && l.attr("class", r.class), r.disabled && l.attr("disabled", !0), r.selected && !this.plugin.selectpickerMap.multiple && o.find(":selected").prop("selected", !1), r.selected && l.attr("selected", !0), r.data) r.data.hasOwnProperty(i) && l.attr("data-" + i, r.data[i])
    }
    a.find("option").length && a["before" === this.plugin.options.preserveSelectedPosition ? "prependTo" : "appendTo"](o);
    var h = o.html();
    return this.plugin.log(this.plugin.LOG_DEBUG, h), h
}, n.prototype.cacheGet = function(t, e) {
    var i = this.cache[t] || e;
    return this.plugin.log(this.LOG_DEBUG, "Retrieving cache:", t, i), i
}, n.prototype.cacheSet = function(t, e) {
    this.cache[t] = e, this.plugin.log(this.LOG_DEBUG, "Saving to cache:", t, e)
}, n.prototype.destroy = function() {
    this.replaceOptions(), this.plugin.list.setStatus(), this.plugin.log(this.plugin.LOG_DEBUG, "Destroyed select list.")
}, n.prototype.refresh = function(t) {
    this.plugin.selectpickerMap.$menu.css("minHeight", 0), this.plugin.selectpickerMap.$menu.find("> .inner").css("minHeight", 0);
    var e = this.plugin.t("emptyTitle");
    !this.plugin.$element.find("option").length && e && e.length ? this.setTitle(e) : this.title && this.restoreTitle(), this.plugin.selectpickerMap.refresh(), this.plugin.selectpickerMap.findLis(), t && (this.plugin.log(this.plugin.LOG_DEBUG, "Triggering Change"), this.plugin.$element.trigger("change.$")), this.plugin.log(this.plugin.LOG_DEBUG, "Refreshed select list.")
}, n.prototype.replaceOptions = function(t) {
    var e, i, n, s = "",
        o = [],
        a = [],
        r = [];
    if (t = t || [], this.selected && this.selected.length) {
        for (this.plugin.log(this.plugin.LOG_INFO, "Processing preserved selections:", this.selected), i = (a = [].concat(this.selected, t)).length, e = 0; e < i; e++)(n = a[e]).hasOwnProperty("value") && -1 === r.indexOf(n.value + "") ? (r.push(n.value + ""), o.push(n)) : this.plugin.log(this.plugin.LOG_DEBUG, "Duplicate item found, ignoring.");
        t = o
    }
    t.length && (s = this.plugin.list.build(t)), this.plugin.$element.html(s), this.refresh(), this.plugin.log(this.plugin.LOG_DEBUG, "Replaced options with data:", t)
}, n.prototype.restore = function() {
    var t = this.plugin.list.cacheGet(this.plugin.previousQuery);
    return t && this.plugin.list.replaceOptions(t) && this.plugin.log(this.plugin.LOG_DEBUG, "Restored select list to the previous query: ", this.plugin.previousQuery), this.plugin.log(this.plugin.LOG_DEBUG, "Unable to restore select list to the previous query:", this.plugin.previousQuery), !1
}, n.prototype.restoreTitle = function() {
    this.plugin.request || (this.plugin.selectpickerMap.options.selectedTextFormat = this.selectedTextFormat, this.title ? this.plugin.$element.attr("title", this.title) : this.plugin.$element.removeAttr("title"), this.title = null)
}, n.prototype.setTitle = function(t) {
    this.plugin.request || (this.title = this.plugin.$element.attr("title"), this.plugin.selectpickerMap.options.selectedTextFormat = "static", this.plugin.$element.attr("title", t))
}, n.prototype.setStatus = function(t) {
    (t = t || "").length ? this.$status.html(t).show() : this.$status.html("").hide()
}, e.AjaxBootstrapSelectList = e.AjaxBootstrapSelectList || n;
var s = function(e) {
    var i, n = this,
        s = function(t) {
            return function() {
                n.plugin.log(n.plugin.LOG_INFO, "Invoking AjaxBootstrapSelectRequest." + t + " callback:", arguments), n[t].apply(n, arguments), n.callbacks[t] && (n.plugin.log(n.plugin.LOG_INFO, "Invoking ajax." + t + " callback:", arguments), n.callbacks[t].apply(n, arguments))
            }
        },
        o = ["beforeSend", "success", "error", "complete"],
        a = o.length;
    for (this.plugin = e, this.options = t.extend(!0, {}, e.options.ajax), this.callbacks = {}, i = 0; i < a; i++) {
        var r = o[i];
        this.options[r] && t.isFunction(this.options[r]) && (this.callbacks[r] = this.options[r]), this.options[r] = s(r)
    }
    this.options.data && t.isFunction(this.options.data) && (this.options.data = this.options.data.apply(this) || {
        q: "{{{q}}}"
    }), this.plugin.replaceValue(this.options.data, "{{{q}}}", this.plugin.query), this.jqXHR = t.ajax(this.options)
};
s.prototype.beforeSend = function(t) {
    this.plugin.list.destroy(), this.plugin.list.setStatus(this.plugin.t("statusSearching"))
}, s.prototype.complete = function(t, e) {
    if ("abort" !== e) {
        var i = this.plugin.list.cacheGet(this.plugin.query);
        if (i) {
            if (!i.length) return this.plugin.list.destroy(), this.plugin.list.setStatus(this.plugin.t("statusNoResults")), void this.plugin.log(this.plugin.LOG_INFO, "No results were returned.");
            this.plugin.list.setStatus()
        }
        this.plugin.list.refresh(!0)
    }
}, s.prototype.error = function(t, e, i) {
    "abort" !== e && (this.plugin.list.cacheSet(this.plugin.query), this.plugin.options.clearOnError && this.plugin.list.destroy(), this.plugin.list.setStatus(this.plugin.t("errorText")), this.plugin.options.restoreOnError && (this.plugin.list.restore(), this.plugin.list.setStatus()))
}, s.prototype.process = function(e) {
    var i, n, s, o, a, r, l = [],
        h = [];
    if (this.plugin.log(this.plugin.LOG_INFO, "Processing raw data for:", this.plugin.query, e), a = e, t.isFunction(this.plugin.options.preprocessData) && (this.plugin.log(this.plugin.LOG_DEBUG, "Invoking preprocessData callback:", this.plugin.options.processData), void 0 !== (s = this.plugin.options.preprocessData.apply(this, [a])) && null !== s && !1 !== s && (a = s)), !t.isArray(a)) return this.plugin.log(this.plugin.LOG_ERROR, 'The data returned is not an Array. Use the "preprocessData" callback option to parse the results and construct a proper array for this plugin.', a), !1;
    for (n = a.length, i = 0; i < n; i++) o = a[i], this.plugin.log(this.plugin.LOG_DEBUG, "Processing item:", o), t.isPlainObject(o) && (o.hasOwnProperty("divider") || o.hasOwnProperty("data") && t.isPlainObject(o.data) && o.data.divider ? (this.plugin.log(this.plugin.LOG_DEBUG, "Item is a divider, ignoring provided data."), l.push({
        divider: !0
    })) : o.hasOwnProperty("value") ? -1 === h.indexOf(o.value + "") ? (h.push(o.value + ""), o = t.extend({
        text: o.value,
        class: "",
        data: {},
        disabled: !1,
        selected: !1
    }, o), l.push(o)) : this.plugin.log(this.plugin.LOG_DEBUG, "Duplicate item found, ignoring.") : this.plugin.log(this.plugin.LOG_DEBUG, 'Data item must have a "value" property, skipping.'));
    if (r = [].concat(l), t.isFunction(this.plugin.options.processData) && (this.plugin.log(this.plugin.LOG_DEBUG, "Invoking processData callback:", this.plugin.options.processData), void 0 !== (s = this.plugin.options.processData.apply(this, [r])) && null !== s && !1 !== s)) {
        if (!t.isArray(s)) return this.plugin.log(this.plugin.LOG_ERROR, "The processData callback did not return an array.", s), !1;
        r = s
    }
    return this.plugin.list.cacheSet(this.plugin.query, r), this.plugin.log(this.plugin.LOG_INFO, "Processed data:", r), r
}, s.prototype.success = function(e, i, n) {
    if (!t.isArray(e) && !t.isPlainObject(e)) return this.plugin.log(this.plugin.LOG_ERROR, "Request did not return a JSON Array or Object.", e), void this.plugin.list.destroy();
    var s = this.process(e);
    this.plugin.list.replaceOptions(s)
}, e.AjaxBootstrapSelectRequest = e.AjaxBootstrapSelectRequest || s, t.fn.ajaxselectpickerMap = function(i) {
    return this.each(function() {
        t(this).data("AjaxBootstrapSelect") || t(this).data("AjaxBootstrapSelect", new e.AjaxBootstrapSelect(this, i))
    })
}, t.fn.ajaxselectpickerMap.locale = {}, t.fn.ajaxselectpickerMap.defaults = {
    ajax: {
        url: null,
        type: "POST",
        dataType: "json",
        data: {
            q: "{{{q}}}"
        }
    },
    bindEvent: "keyup",
    cache: !0,
    clearOnEmpty: !0,
    clearOnError: !0,
    emptyRequest: !1,
    ignoredKeys: {
        9: "tab",
        16: "shift",
        17: "ctrl",
        18: "alt",
        27: "esc",
        37: "left",
        39: "right",
        38: "up",
        40: "down",
        91: "meta"
    },
    langCode: null,
    locale: null,
    log: "error",
    preprocessData: function() {},
    preserveSelected: !0,
    preserveSelectedPosition: "after",
    processData: function() {},
    requestDelay: 300,
    restoreOnError: !1,
    templates: {
        status: '<div class="status"></div>'
    }
}, t.fn.ajaxselectpickerMap.locale["en-US"] = {
    currentlySelected: "Currently Selected",
    emptyTitle: "Select and begin typing",
    errorText: "Unable to retrieve results",
    searchPlaceholder: "Search...",
    statusInitialized: "Start typing a search query",
    statusNoResults: "No Results",
    statusSearching: "Searching..."
}, t.fn.ajaxselectpickerMap.locale.en = t.fn.ajaxselectpickerMap.locale["en-US"]
}(jQuery, window),
function(t) {
"function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function(t, e) {
function i() {
    return new Date(Date.UTC.apply(Date, arguments))
}

function n() {
    var t = new Date;
    return i(t.getFullYear(), t.getMonth(), t.getDate())
}

function s(t, e) {
    return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate()
}

function o(i, n) {
    return function() {
        return n !== e && t.fn.datepicker.deprecated(n), this[i].apply(this, arguments)
    }
}

function a(e) {
    var i = {};
    if (f[e] || (e = e.split("-")[0], f[e])) {
        var n = f[e];
        return t.each(p, function(t, e) {
            e in n && (i[e] = n[e])
        }), i
    }
}
var r = function() {
        var e = {
            get: function(t) {
                return this.slice(t)[0]
            },
            contains: function(t) {
                for (var e = t && t.valueOf(), i = 0, n = this.length; n > i; i++)
                    if (0 <= this[i].valueOf() - e && this[i].valueOf() - e < 864e5) return i;
                return -1
            },
            remove: function(t) {
                this.splice(t, 1)
            },
            replace: function(e) {
                e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e))
            },
            clear: function() {
                this.length = 0
            },
            copy: function() {
                var t = new r;
                return t.replace(this), t
            }
        };
        return function() {
            var i = [];
            return i.push.apply(i, arguments), t.extend(i, e), i
        }
    }(),
    l = function(e, i) {
        t.data(e, "datepicker", this), this._process_options(i), this.dates = new r, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = t(e), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = t(g.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown-map dropdown-menu-map"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function(t, e) {
            return Number(e) + 1
        }), this._process_options({
            startDate: this._o.startDate,
            endDate: this._o.endDate,
            daysOfWeekDisabled: this.o.daysOfWeekDisabled,
            daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
            datesDisabled: this.o.datesDisabled
        }), this._allow_update = !1, this.setViewMode(this.o.startView), this._allow_update = !0, this.fillDow(), this.fillMonths(), this.update(), this.isInline && this.show()
    };
l.prototype = {
    constructor: l,
    _resolveViewName: function(e) {
        return t.each(g.viewModes, function(i, n) {
            return e === i || -1 !== t.inArray(e, n.names) ? (e = i, !1) : void 0
        }), e
    },
    _resolveDaysOfWeek: function(e) {
        return t.isArray(e) || (e = e.split(/[,\s]*/)), t.map(e, Number)
    },
    _check_template: function(i) {
        try {
            return i !== e && "" !== i && ((i.match(/[<>]/g) || []).length <= 0 || t(i).length > 0)
        } catch (t) {
            return !1
        }
    },
    _process_options: function(e) {
        this._o = t.extend({}, this._o, e);
        var s = this.o = t.extend({}, this._o),
            o = s.language;
        f[o] || (o = o.split("-")[0], f[o] || (o = u.language)), s.language = o, s.startView = this._resolveViewName(s.startView), s.minViewMode = this._resolveViewName(s.minViewMode), s.maxViewMode = this._resolveViewName(s.maxViewMode), s.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, s.startView)), !0 !== s.multidate && (s.multidate = Number(s.multidate) || !1, !1 !== s.multidate && (s.multidate = Math.max(0, s.multidate))), s.multidateSeparator = String(s.multidateSeparator), s.weekStart %= 7, s.weekEnd = (s.weekStart + 6) % 7;
        var a = g.parseFormat(s.format);
        s.startDate !== -1 / 0 && (s.startDate ? s.startDate instanceof Date ? s.startDate = this._local_to_utc(this._zero_time(s.startDate)) : s.startDate = g.parseDate(s.startDate, a, s.language, s.assumeNearbyYear) : s.startDate = -1 / 0), s.endDate !== 1 / 0 && (s.endDate ? s.endDate instanceof Date ? s.endDate = this._local_to_utc(this._zero_time(s.endDate)) : s.endDate = g.parseDate(s.endDate, a, s.language, s.assumeNearbyYear) : s.endDate = 1 / 0), s.daysOfWeekDisabled = this._resolveDaysOfWeek(s.daysOfWeekDisabled || []), s.daysOfWeekHighlighted = this._resolveDaysOfWeek(s.daysOfWeekHighlighted || []), s.datesDisabled = s.datesDisabled || [], t.isArray(s.datesDisabled) || (s.datesDisabled = s.datesDisabled.split(",")), s.datesDisabled = t.map(s.datesDisabled, function(t) {
            return g.parseDate(t, a, s.language, s.assumeNearbyYear)
        });
        var r = String(s.orientation).toLowerCase().split(/\s+/g),
            l = s.orientation.toLowerCase();
        if (r = t.grep(r, function(t) {
                return /^auto|left|right|top|bottom$/.test(t)
            }), s.orientation = {
                x: "auto",
                y: "auto"
            }, l && "auto" !== l)
            if (1 === r.length) switch (r[0]) {
                case "top":
                case "bottom":
                    s.orientation.y = r[0];
                    break;
                case "left":
                case "right":
                    s.orientation.x = r[0]
            } else l = t.grep(r, function(t) {
                return /^left|right$/.test(t)
            }), s.orientation.x = l[0] || "auto", l = t.grep(r, function(t) {
                return /^top|bottom$/.test(t)
            }), s.orientation.y = l[0] || "auto";
        if (s.defaultViewDate instanceof Date || "string" == typeof s.defaultViewDate) s.defaultViewDate = g.parseDate(s.defaultViewDate, a, s.language, s.assumeNearbyYear);
        else if (s.defaultViewDate) {
            var h = s.defaultViewDate.year || (new Date).getFullYear(),
                c = s.defaultViewDate.month || 0,
                d = s.defaultViewDate.day || 1;
            s.defaultViewDate = i(h, c, d)
        } else s.defaultViewDate = n()
    },
    _events: [],
    _secondaryEvents: [],
    _applyEvents: function(t) {
        for (var i, n, s, o = 0; o < t.length; o++) i = t[o][0], 2 === t[o].length ? (n = e, s = t[o][1]) : 3 === t[o].length && (n = t[o][1], s = t[o][2]), i.on(s, n)
    },
    _unapplyEvents: function(t) {
        for (var i, n, s, o = 0; o < t.length; o++) i = t[o][0], 2 === t[o].length ? (s = e, n = t[o][1]) : 3 === t[o].length && (s = t[o][1], n = t[o][2]), i.off(n, s)
    },
    _buildEvents: function() {
        var e = {
            keyup: t.proxy(function(e) {
                -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
            }, this),
            keydown: t.proxy(this.keydown, this),
            paste: t.proxy(this.paste, this)
        };
        !0 === this.o.showOnFocus && (e.focus = t.proxy(this.show, this)), this.isInput ? this._events = [
            [this.element, e]
        ] : this.component && this.inputField.length ? this._events = [
            [this.inputField, e],
            [this.component, {
                click: t.proxy(this.show, this)
            }]
        ] : this._events = [
            [this.element, {
                click: t.proxy(this.show, this),
                keydown: t.proxy(this.keydown, this)
            }]
        ], this._events.push([this.element, "*", {
            blur: t.proxy(function(t) {
                this._focused_from = t.target
            }, this)
        }], [this.element, {
            blur: t.proxy(function(t) {
                this._focused_from = t.target
            }, this)
        }]), this.o.immediateUpdates && this._events.push([this.element, {
            "changeYear changeMonth": t.proxy(function(t) {
                this.update(t.date)
            }, this)
        }]), this._secondaryEvents = [
            [this.picker, {
                click: t.proxy(this.click, this)
            }],
            [this.picker, ".prev, .next", {
                click: t.proxy(this.navArrowsClick, this)
            }],
            [t(window), {
                resize: t.proxy(this.place, this)
            }],
            [t(document), {
                "mousedown touchstart": t.proxy(function(t) {
                    this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.isInline || this.hide()
                }, this)
            }]
        ]
    },
    _attachEvents: function() {
        this._detachEvents(), this._applyEvents(this._events)
    },
    _detachEvents: function() {
        this._unapplyEvents(this._events)
    },
    _attachSecondaryEvents: function() {
        this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
    },
    _detachSecondaryEvents: function() {
        this._unapplyEvents(this._secondaryEvents)
    },
    _trigger: function(e, i) {
        var n = i || this.dates.get(-1),
            s = this._utc_to_local(n);
        this.element.trigger({
            type: e,
            date: s,
            viewMode: this.viewMode,
            dates: t.map(this.dates, this._utc_to_local),
            format: t.proxy(function(t, e) {
                0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
                var i = this.dates.get(t);
                return g.formatDate(i, e, this.o.language)
            }, this)
        })
    },
    show: function() {
        return this.inputField.prop("disabled") || this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly ? void 0 : (this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && t(this.element).blur(), this)
    },
    hide: function() {
        return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this)
    },
    destroy: function() {
        return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
    },
    paste: function(e) {
        var i;
        if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types && -1 !== t.inArray("text/plain", e.originalEvent.clipboardData.types)) i = e.originalEvent.clipboardData.getData("text/plain");
        else {
            if (!window.clipboardData) return;
            i = window.clipboardData.getData("Text")
        }
        this.setDate(i), this.update(), e.preventDefault()
    },
    _utc_to_local: function(t) {
        if (!t) return t;
        var e = new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
        return e.getTimezoneOffset() !== t.getTimezoneOffset() && (e = new Date(t.getTime() + 6e4 * e.getTimezoneOffset())), e
    },
    _local_to_utc: function(t) {
        return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
    },
    _zero_time: function(t) {
        return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
    },
    _zero_utc_time: function(t) {
        return t && i(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())
    },
    getDates: function() {
        return t.map(this.dates, this._utc_to_local)
    },
    getUTCDates: function() {
        return t.map(this.dates, function(t) {
            return new Date(t)
        })
    },
    getDate: function() {
        return this._utc_to_local(this.getUTCDate())
    },
    getUTCDate: function() {
        var t = this.dates.get(-1);
        return t !== e ? new Date(t) : null
    },
    clearDates: function() {
        this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
    },
    setDates: function() {
        var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
        return this.update.apply(this, e), this._trigger("changeDate"), this.setValue(), this
    },
    setUTCDates: function() {
        var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
        return this.setDates.apply(this, t.map(e, this._utc_to_local)), this
    },
    setDate: o("setDates"),
    setUTCDate: o("setUTCDates"),
    remove: o("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),
    setValue: function() {
        var t = this.getFormattedDate();
        return this.inputField.val(t), this
    },
    getFormattedDate: function(i) {
        i === e && (i = this.o.format);
        var n = this.o.language;
        return t.map(this.dates, function(t) {
            return g.formatDate(t, i, n)
        }).join(this.o.multidateSeparator)
    },
    getStartDate: function() {
        return this.o.startDate
    },
    setStartDate: function(t) {
        return this._process_options({
            startDate: t
        }), this.update(), this.updateNavArrows(), this
    },
    getEndDate: function() {
        return this.o.endDate
    },
    setEndDate: function(t) {
        return this._process_options({
            endDate: t
        }), this.update(), this.updateNavArrows(), this
    },
    setDaysOfWeekDisabled: function(t) {
        return this._process_options({
            daysOfWeekDisabled: t
        }), this.update(), this
    },
    setDaysOfWeekHighlighted: function(t) {
        return this._process_options({
            daysOfWeekHighlighted: t
        }), this.update(), this
    },
    setDatesDisabled: function(t) {
        return this._process_options({
            datesDisabled: t
        }), this.update(), this
    },
    place: function() {
        if (this.isInline) return this;
        var e = this.picker.outerWidth(),
            i = this.picker.outerHeight(),
            n = t(this.o.container),
            s = n.width(),
            o = "body" === this.o.container ? t(document).scrollTop() : n.scrollTop(),
            a = n.offset(),
            r = [0];
        this.element.parents().each(function() {
            var e = t(this).css("z-index");
            "auto" !== e && 0 !== Number(e) && r.push(Number(e))
        });
        var l = Math.max.apply(Math, r) + this.o.zIndexOffset,
            h = this.component ? this.component.parent().offset() : this.element.offset(),
            c = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
            d = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
            u = h.left - a.left,
            p = h.top - a.top;
        "body" !== this.o.container && (p += o), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (u -= e - d)) : h.left < 0 ? (this.picker.addClass("datepicker-orient-left"), u -= h.left - 10) : u + e > s ? (this.picker.addClass("datepicker-orient-right"), u += d - e) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left");
        var f = this.o.orientation.y;
        if ("auto" === f && (f = 0 > -o + p - i ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + f), "top" === f ? p -= i + parseInt(this.picker.css("padding-top")) : p += c, this.o.rtl) {
            var g = s - (u + d);
            this.picker.css({
                top: p,
                right: g,
                zIndex: l
            })
        } else this.picker.css({
            top: p,
            left: u,
            zIndex: l
        });
        return this
    },
    _allow_update: !0,
    update: function() {
        if (!this._allow_update) return this;
        var e = this.dates.copy(),
            i = [],
            n = !1;
        return arguments.length ? (t.each(arguments, t.proxy(function(t, e) {
            e instanceof Date && (e = this._local_to_utc(e)), i.push(e)
        }, this)), n = !0) : (i = (i = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val()) && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date), i = t.map(i, t.proxy(function(t) {
            return g.parseDate(t, this.o.format, this.o.language, this.o.assumeNearbyYear)
        }, this)), i = t.grep(i, t.proxy(function(t) {
            return !this.dateWithinRange(t) || !t
        }, this), !0), this.dates.replace(i), this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate), n ? (this.setValue(), this.element.change()) : this.dates.length && ("string" == typeof this.o.format ? (String(this.element[0].value).length === String(this.o.format).length && String(e) !== String(this.dates) && this._trigger("changeDate"), this.element.change()) : String(e) !== String(this.dates) && (this._trigger("changeDate"), this.element.change())), !this.dates.length && e.length && (this._trigger("clearDate"), this.element.change()), this.fill(), this
    },
    fillDow: function() {
        var e = this.o.weekStart,
            i = "<tr>";
        for (this.o.calendarWeeks && (i += '<th class="cw">&#160;</th>'); e < this.o.weekStart + 7;) i += '<th class="dow', -1 !== t.inArray(e, this.o.daysOfWeekDisabled) && (i += " disabled"), i += '">' + f[this.o.language].daysMin[e++ % 7] + "</th>";
        i += "</tr>", this.picker.find(".datepicker-days thead").append(i)
    },
    fillMonths: function() {
        for (var t = this._utc_to_local(this.viewDate), e = "", i = 0; 12 > i; i++) e += '<span class="month' + (t && t.getMonth() === i ? " focused" : "") + '">' + f[this.o.language].monthsShort[i] + "</span>";
        this.picker.find(".datepicker-months td").html(e)
    },
    setRange: function(e) {
        e && e.length ? this.range = t.map(e, function(t) {
            return t.valueOf()
        }) : delete this.range, this.fill()
    },
    getClassNames: function(e) {
        var i = [],
            o = this.viewDate.getUTCFullYear(),
            a = this.viewDate.getUTCMonth(),
            r = n();
        return e.getUTCFullYear() < o || e.getUTCFullYear() === o && e.getUTCMonth() < a ? i.push("old") : (e.getUTCFullYear() > o || e.getUTCFullYear() === o && e.getUTCMonth() > a) && i.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && s(e, r) && i.push("today"), -1 !== this.dates.contains(e) && i.push("active"), this.dateWithinRange(e) || i.push("disabled"), this.dateIsDisabled(e) && i.push("disabled", "disabled-date"), -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekHighlighted) && i.push("highlighted"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && i.push("selected"), e.valueOf() === this.range[0] && i.push("range-start"), e.valueOf() === this.range[this.range.length - 1] && i.push("range-end")), i
    },
    _fill_yearsView: function(i, n, s, o, a, r, l) {
        for (var h, c, d, u = "", p = s / 10, f = this.picker.find(i), g = Math.floor(o / s) * s, m = g + 9 * p, v = Math.floor(this.viewDate.getFullYear() / p) * p, y = t.map(this.dates, function(t) {
                return Math.floor(t.getUTCFullYear() / p) * p
            }), b = g - p; m + p >= b; b += p) h = [n], c = null, b === g - p ? h.push("old") : b === m + p && h.push("new"), -1 !== t.inArray(b, y) && h.push("active"), (a > b || b > r) && h.push("disabled"), b === v && h.push("focused"), l !== t.noop && ((d = l(new Date(b, 0, 1))) === e ? d = {} : "boolean" == typeof d ? d = {
            enabled: d
        } : "string" == typeof d && (d = {
            classes: d
        }), !1 === d.enabled && h.push("disabled"), d.classes && (h = h.concat(d.classes.split(/\s+/))), d.tooltip && (c = d.tooltip)), u += '<span class="' + h.join(" ") + '"' + (c ? ' title="' + c + '"' : "") + ">" + b + "</span>";
        f.find(".datepicker-switch").text(g + "-" + m), f.find("td").html(u)
    },
    fill: function() {
        var n, s, o = new Date(this.viewDate),
            a = o.getUTCFullYear(),
            r = o.getUTCMonth(),
            l = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
            h = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
            c = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
            d = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
            u = f[this.o.language].today || f.en.today || "",
            p = f[this.o.language].clear || f.en.clear || "",
            m = f[this.o.language].titleFormat || f.en.titleFormat;
        if (!isNaN(a) && !isNaN(r)) {
            this.picker.find(".datepicker-days .datepicker-switch").text(g.formatDate(o, m, this.o.language)), this.picker.find("tfoot .today").text(u).toggle(!1 !== this.o.todayBtn), this.picker.find("tfoot .clear").text(p).toggle(!1 !== this.o.clearBtn), this.picker.find("thead .datepicker-title").text(this.o.title).toggle("" !== this.o.title), this.updateNavArrows(), this.fillMonths();
            var v = i(a, r, 0),
                y = v.getUTCDate();
            v.setUTCDate(y - (v.getUTCDay() - this.o.weekStart + 7) % 7);
            var b = new Date(v);
            v.getUTCFullYear() < 100 && b.setUTCFullYear(v.getUTCFullYear()), b.setUTCDate(b.getUTCDate() + 42), b = b.valueOf();
            for (var w, x, S = []; v.valueOf() < b;) {
                if ((w = v.getUTCDay()) === this.o.weekStart && (S.push("<tr>"), this.o.calendarWeeks)) {
                    var k = new Date(+v + (this.o.weekStart - w - 7) % 7 * 864e5),
                        D = new Date(Number(k) + (11 - k.getUTCDay()) % 7 * 864e5),
                        C = new Date(Number(C = i(D.getUTCFullYear(), 0, 1)) + (11 - C.getUTCDay()) % 7 * 864e5),
                        T = (D - C) / 864e5 / 7 + 1;
                    S.push('<td class="cw">' + T + "</td>")
                }(x = this.getClassNames(v)).push("day"), this.o.beforeShowDay !== t.noop && ((s = this.o.beforeShowDay(this._utc_to_local(v))) === e ? s = {} : "boolean" == typeof s ? s = {
                    enabled: s
                } : "string" == typeof s && (s = {
                    classes: s
                }), !1 === s.enabled && x.push("disabled"), s.classes && (x = x.concat(s.classes.split(/\s+/))), s.tooltip && (n = s.tooltip)), x = t.isFunction(t.uniqueSort) ? t.uniqueSort(x) : t.unique(x), S.push('<td class="' + x.join(" ") + '"' + (n ? ' title="' + n + '"' : "") + (this.o.dateCells ? ' data-date="' + v.getTime().toString() + '"' : "") + ">" + v.getUTCDate() + "</td>"), n = null, w === this.o.weekEnd && S.push("</tr>"), v.setUTCDate(v.getUTCDate() + 1)
            }
            this.picker.find(".datepicker-days tbody").html(S.join(""));
            var _ = f[this.o.language].monthsTitle || f.en.monthsTitle || "Months",
                M = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? _ : a).end().find("tbody span").removeClass("active");
            if (t.each(this.dates, function(t, e) {
                    e.getUTCFullYear() === a && M.eq(e.getUTCMonth()).addClass("active")
                }), (l > a || a > c) && M.addClass("disabled"), a === l && M.slice(0, h).addClass("disabled"), a === c && M.slice(d + 1).addClass("disabled"), this.o.beforeShowMonth !== t.noop) {
                var A = this;
                t.each(M, function(i, n) {
                    var s = new Date(a, i, 1),
                        o = A.o.beforeShowMonth(s);
                    o === e ? o = {} : "boolean" == typeof o ? o = {
                        enabled: o
                    } : "string" == typeof o && (o = {
                        classes: o
                    }), !1 !== o.enabled || t(n).hasClass("disabled") || t(n).addClass("disabled"), o.classes && t(n).addClass(o.classes), o.tooltip && t(n).prop("title", o.tooltip)
                })
            }
            this._fill_yearsView(".datepicker-years", "year", 10, a, l, c, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, a, l, c, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, a, l, c, this.o.beforeShowCentury)
        }
    },
    updateNavArrows: function() {
        if (this._allow_update) {
            var t, e, i = new Date(this.viewDate),
                n = i.getUTCFullYear(),
                s = i.getUTCMonth(),
                o = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                a = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                r = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                h = 1;
            switch (this.viewMode) {
                case 0:
                    t = o >= n && a >= s, e = n >= r && s >= l;
                    break;
                case 4:
                    h *= 10;
                case 3:
                    h *= 10;
                case 2:
                    h *= 10;
                case 1:
                    t = Math.floor(n / h) * h <= o, e = Math.floor(n / h) * h + h >= r
            }
            this.picker.find(".prev").toggleClass("disabled", t), this.picker.find(".next").toggleClass("disabled", e)
        }
    },
    click: function(e) {
        var s, o, a, r, l;
        e.preventDefault(), e.stopPropagation(), (s = t(e.target)).hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1), s.hasClass("today") && !s.hasClass("day") && (this.setViewMode(0), this._setDate(n(), "linked" === this.o.todayBtn ? null : "view")), s.hasClass("clear") && this.clearDates(), s.hasClass("disabled") || (s.hasClass("day") && (a = Number(s.text()), r = this.viewDate.getUTCFullYear(), l = this.viewDate.getUTCMonth(), (s.hasClass("old") || s.hasClass("new")) && (l = (l + (o = s.hasClass("old") ? -1 : 1) + 12) % 12, (-1 === o && 11 === l || 1 === o && 0 === l) && (r += o, this.o.updateViewDate && this._trigger("changeYear", this.viewDate)), this.o.updateViewDate && this._trigger("changeMonth", this.viewDate)), this._setDate(i(r, l, a))), (s.hasClass("month") || s.hasClass("year") || s.hasClass("decade") || s.hasClass("century")) && (this.viewDate.setUTCDate(1), a = 1, 1 === this.viewMode ? (l = s.parent().find("span").index(s), r = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(l)) : (l = 0, r = Number(s.text()), this.viewDate.setUTCFullYear(r)), this._trigger(g.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(i(r, l, a)) : (this.setViewMode(this.viewMode - 1), this.fill()))), this.picker.is(":visible") && this._focused_from && this._focused_from.focus(), delete this._focused_from
    },
    navArrowsClick: function(e) {
        var i = t(e.target).hasClass("prev") ? -1 : 1;
        0 !== this.viewMode && (i *= 12 * g.viewModes[this.viewMode].navStep), this.viewDate = this.moveMonth(this.viewDate, i), this._trigger(g.viewModes[this.viewMode].e, this.viewDate), this.fill()
    },
    _toggle_multidate: function(t) {
        var e = this.dates.contains(t);
        if (t || this.dates.clear(), -1 !== e ? (!0 === this.o.multidate || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(e) : !1 === this.o.multidate ? (this.dates.clear(), this.dates.push(t)) : this.dates.push(t), "number" == typeof this.o.multidate)
            for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
    },
    _setDate: function(t, e) {
        e && "date" !== e || this._toggle_multidate(t && new Date(t)), (!e && this.o.updateViewDate || "view" === e) && (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), e && "view" === e || this._trigger("changeDate"), this.inputField.trigger("change"), !this.o.autoclose || e && "date" !== e || this.hide()
    },
    moveDay: function(t, e) {
        var i = new Date(t);
        return i.setUTCDate(t.getUTCDate() + e), i
    },
    moveWeek: function(t, e) {
        return this.moveDay(t, 7 * e)
    },
    moveMonth: function(t, e) {
        if (! function(t) {
                return t && !isNaN(t.getTime())
            }(t)) return this.o.defaultViewDate;
        if (!e) return t;
        var i, n, s = new Date(t.valueOf()),
            o = s.getUTCDate(),
            a = s.getUTCMonth(),
            r = Math.abs(e);
        if (e = e > 0 ? 1 : -1, 1 === r) n = -1 === e ? function() {
            return s.getUTCMonth() === a
        } : function() {
            return s.getUTCMonth() !== i
        }, i = a + e, s.setUTCMonth(i), i = (i + 12) % 12;
        else {
            for (var l = 0; r > l; l++) s = this.moveMonth(s, e);
            i = s.getUTCMonth(), s.setUTCDate(o), n = function() {
                return i !== s.getUTCMonth()
            }
        }
        for (; n();) s.setUTCDate(--o), s.setUTCMonth(i);
        return s
    },
    moveYear: function(t, e) {
        return this.moveMonth(t, 12 * e)
    },
    moveAvailableDate: function(t, e, i) {
        do {
            if (t = this[i](t, e), !this.dateWithinRange(t)) return !1;
            i = "moveDay"
        } while (this.dateIsDisabled(t));
        return t
    },
    weekOfDateIsDisabled: function(e) {
        return -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)
    },
    dateIsDisabled: function(e) {
        return this.weekOfDateIsDisabled(e) || t.grep(this.o.datesDisabled, function(t) {
            return s(e, t)
        }).length > 0
    },
    dateWithinRange: function(t) {
        return t >= this.o.startDate && t <= this.o.endDate
    },
    keydown: function(t) {
        if (this.picker.is(":visible")) {
            var e, i, n = !1,
                s = this.focusDate || this.viewDate;
            switch (t.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault(), t.stopPropagation();
                    break;
                case 37:
                case 38:
                case 39:
                case 40:
                    if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                    e = 37 === t.keyCode || 38 === t.keyCode ? -1 : 1, 0 === this.viewMode ? t.ctrlKey ? (i = this.moveAvailableDate(s, e, "moveYear")) && this._trigger("changeYear", this.viewDate) : t.shiftKey ? (i = this.moveAvailableDate(s, e, "moveMonth")) && this._trigger("changeMonth", this.viewDate) : 37 === t.keyCode || 39 === t.keyCode ? i = this.moveAvailableDate(s, e, "moveDay") : this.weekOfDateIsDisabled(s) || (i = this.moveAvailableDate(s, e, "moveWeek")) : 1 === this.viewMode ? ((38 === t.keyCode || 40 === t.keyCode) && (e *= 4), i = this.moveAvailableDate(s, e, "moveMonth")) : 2 === this.viewMode && ((38 === t.keyCode || 40 === t.keyCode) && (e *= 4), i = this.moveAvailableDate(s, e, "moveYear")), i && (this.focusDate = this.viewDate = i, this.setValue(), this.fill(), t.preventDefault());
                    break;
                case 13:
                    if (!this.o.forceParse) break;
                    s = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(s), n = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), t.stopPropagation(), this.o.autoclose && this.hide());
                    break;
                case 9:
                    this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
            }
            n && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField.trigger("change"))
        } else(40 === t.keyCode || 27 === t.keyCode) && (this.show(), t.stopPropagation())
    },
    setViewMode: function(t) {
        this.viewMode = t, this.picker.children("div").hide().filter(".datepicker-" + g.viewModes[this.viewMode].clsName).show(), this.updateNavArrows(), this._trigger("changeViewMode", new Date(this.viewDate))
    }
};
var h = function(e, i) {
    t.data(e, "datepicker", this), this.element = t(e), this.inputs = t.map(i.inputs, function(t) {
        return t.jquery ? t[0] : t
    }), delete i.inputs, this.keepEmptyValues = i.keepEmptyValues, delete i.keepEmptyValues, d.call(t(this.inputs), i).on("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function(e) {
        return t.data(e, "datepicker")
    }), this.updateDates()
};
h.prototype = {
    updateDates: function() {
        this.dates = t.map(this.pickers, function(t) {
            return t.getUTCDate()
        }), this.updateRanges()
    },
    updateRanges: function() {
        var e = t.map(this.dates, function(t) {
            return t.valueOf()
        });
        t.each(this.pickers, function(t, i) {
            i.setRange(e)
        })
    },
    dateUpdated: function(i) {
        if (!this.updating) {
            this.updating = !0;
            var n = t.data(i.target, "datepicker");
            if (n !== e) {
                var s = n.getUTCDate(),
                    o = this.keepEmptyValues,
                    a = t.inArray(i.target, this.inputs),
                    r = a - 1,
                    l = a + 1,
                    h = this.inputs.length;
                if (-1 !== a) {
                    if (t.each(this.pickers, function(t, e) {
                            e.getUTCDate() || e !== n && o || e.setUTCDate(s)
                        }), s < this.dates[r])
                        for (; r >= 0 && s < this.dates[r];) this.pickers[r--].setUTCDate(s);
                    else if (s > this.dates[l])
                        for (; h > l && s > this.dates[l];) this.pickers[l++].setUTCDate(s);
                    this.updateDates(), delete this.updating
                }
            }
        }
    },
    destroy: function() {
        t.map(this.pickers, function(t) {
            t.destroy()
        }), t(this.inputs).off("changeDate", this.dateUpdated), delete this.element.data().datepicker
    },
    remove: o("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")
};
var c = t.fn.datepicker,
    d = function(i) {
        var n, s = Array.apply(null, arguments);
        if (s.shift(), this.each(function() {
                var e = t(this),
                    o = e.data("datepicker"),
                    r = "object" == typeof i && i;
                if (!o) {
                    var c = function(e, i) {
                            function n(t, e) {
                                return e.toLowerCase()
                            }
                            var s = t(e).data(),
                                o = {},
                                a = new RegExp("^" + i.toLowerCase() + "([A-Z])");
                            for (var r in i = new RegExp("^" + i.toLowerCase()), s) i.test(r) && (o[r.replace(a, n)] = s[r]);
                            return o
                        }(this, "date"),
                        d = a(t.extend({}, u, c, r).language),
                        p = t.extend({}, u, d, c, r);
                    e.hasClass("input-daterange") || p.inputs ? (t.extend(p, {
                        inputs: p.inputs || e.find("input").toArray()
                    }), o = new h(this, p)) : o = new l(this, p), e.data("datepicker", o)
                }
                "string" == typeof i && "function" == typeof o[i] && (n = o[i].apply(o, s))
            }), n === e || n instanceof l || n instanceof h) return this;
        if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + i + " function)");
        return n
    };
t.fn.datepicker = d;
var u = t.fn.datepicker.defaults = {
        assumeNearbyYear: !1,
        autoclose: !1,
        beforeShowDay: t.noop,
        beforeShowMonth: t.noop,
        beforeShowYear: t.noop,
        beforeShowDecade: t.noop,
        beforeShowCentury: t.noop,
        calendarWeeks: !1,
        clearBtn: !1,
        toggleActive: !1,
        daysOfWeekDisabled: [],
        daysOfWeekHighlighted: [],
        datesDisabled: [],
        endDate: 1 / 0,
        forceParse: !0,
        format: "mm/dd/yyyy",
        keepEmptyValues: !1,
        keyboardNavigation: !0,
        language: "en",
        minViewMode: 0,
        maxViewMode: 4,
        multidate: !1,
        multidateSeparator: ",",
        orientation: "auto",
        rtl: !1,
        startDate: -1 / 0,
        startView: 0,
        todayBtn: !1,
        todayHighlight: !1,
        updateViewDate: !0,
        weekStart: 0,
        disableTouchKeyboard: !1,
        enableOnReadonly: !0,
        showOnFocus: !0,
        zIndexOffset: 10,
        container: "body",
        immediateUpdates: !1,
        dateCells: !1,
        title: "",
        templates: {
            leftArrow: "&#x00AB;",
            rightArrow: "&#x00BB;"
        }
    },
    p = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
t.fn.datepicker.Constructor = l;
var f = t.fn.datepicker.dates = {
        en: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            titleFormat: "MM yyyy"
        }
    },
    g = {
        viewModes: [{
            names: ["days", "month"],
            clsName: "days",
            e: "changeMonth"
        }, {
            names: ["months", "year"],
            clsName: "months",
            e: "changeYear",
            navStep: 1
        }, {
            names: ["years", "decade"],
            clsName: "years",
            e: "changeDecade",
            navStep: 10
        }, {
            names: ["decades", "century"],
            clsName: "decades",
            e: "changeCentury",
            navStep: 100
        }, {
            names: ["centuries", "millennium"],
            clsName: "centuries",
            e: "changeMillennium",
            navStep: 1e3
        }],
        validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
        nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
        parseFormat: function(t) {
            if ("function" == typeof t.toValue && "function" == typeof t.toDisplay) return t;
            var e = t.replace(this.validParts, "\0").split("\0"),
                i = t.match(this.validParts);
            if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format.");
            return {
                separators: e,
                parts: i
            }
        },
        parseDate: function(i, s, o, a) {
            function r() {
                var t = this.slice(0, h[u].length),
                    e = h[u].slice(0, t.length);
                return t.toLowerCase() === e.toLowerCase()
            }
            if (!i) return e;
            if (i instanceof Date) return i;
            if ("string" == typeof s && (s = g.parseFormat(s)), s.toValue) return s.toValue(i, s, o);
            var h, c, d, u, p, m = {
                    d: "moveDay",
                    m: "moveMonth",
                    w: "moveWeek",
                    y: "moveYear"
                },
                v = {
                    yesterday: "-1d",
                    today: "+0d",
                    tomorrow: "+1d"
                };
            if (i in v && (i = v[i]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(i)) {
                for (h = i.match(/([\-+]\d+)([dmwy])/gi), i = new Date, u = 0; u < h.length; u++) c = h[u].match(/([\-+]\d+)([dmwy])/i), d = Number(c[1]), p = m[c[2].toLowerCase()], i = l.prototype[p](i, d);
                return l.prototype._zero_utc_time(i)
            }
            h = i && i.match(this.nonpunctuation) || [];
            var y, b, w = {},
                x = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                S = {
                    yyyy: function(t, e) {
                        return t.setUTCFullYear(a ? function(t, e) {
                            return !0 === e && (e = 10), 100 > t && (t += 2e3) > (new Date).getFullYear() + e && (t -= 100), t
                        }(e, a) : e)
                    },
                    m: function(t, e) {
                        if (isNaN(t)) return t;
                        for (e -= 1; 0 > e;) e += 12;
                        for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
                        return t
                    },
                    d: function(t, e) {
                        return t.setUTCDate(e)
                    }
                };
            S.yy = S.yyyy, S.M = S.MM = S.mm = S.m, S.dd = S.d, i = n();
            var k = s.parts.slice();
            if (h.length !== k.length && (k = t(k).filter(function(e, i) {
                    return -1 !== t.inArray(i, x)
                }).toArray()), h.length === k.length) {
                var D, C, T;
                for (u = 0, D = k.length; D > u; u++) {
                    if (y = parseInt(h[u], 10), c = k[u], isNaN(y)) switch (c) {
                        case "MM":
                            b = t(f[o].months).filter(r), y = t.inArray(b[0], f[o].months) + 1;
                            break;
                        case "M":
                            b = t(f[o].monthsShort).filter(r), y = t.inArray(b[0], f[o].monthsShort) + 1
                    }
                    w[c] = y
                }
                for (u = 0; u < x.length; u++)(T = x[u]) in w && !isNaN(w[T]) && (C = new Date(i), S[T](C, w[T]), isNaN(C) || (i = C))
            }
            return i
        },
        formatDate: function(e, i, n) {
            if (!e) return "";
            if ("string" == typeof i && (i = g.parseFormat(i)), i.toDisplay) return i.toDisplay(e, i, n);
            var s = {
                d: e.getUTCDate(),
                D: f[n].daysShort[e.getUTCDay()],
                DD: f[n].days[e.getUTCDay()],
                m: e.getUTCMonth() + 1,
                M: f[n].monthsShort[e.getUTCMonth()],
                MM: f[n].months[e.getUTCMonth()],
                yy: e.getUTCFullYear().toString().substring(2),
                yyyy: e.getUTCFullYear()
            };
            s.dd = (s.d < 10 ? "0" : "") + s.d, s.mm = (s.m < 10 ? "0" : "") + s.m, e = [];
            for (var o = t.extend([], i.separators), a = 0, r = i.parts.length; r >= a; a++) o.length && e.push(o.shift()), e.push(s[i.parts[a]]);
            return e.join("")
        },
        headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>',
        contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
        footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
    };
g.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + g.headTemplate + "<tbody></tbody>" + g.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = g, t.fn.datepicker.noConflict = function() {
    return t.fn.datepicker = c, this
}, t.fn.datepicker.version = "1.7.0-dev", t.fn.datepicker.deprecated = function(t) {
    var e = window.console;
    e && e.warn && e.warn("DEPRECATED: " + t)
}, t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(e) {
    var i = t(this);
    i.data("datepicker") || (e.preventDefault(), d.call(i, "show"))
}), t(function() {
    d.call(t('[data-provide="datepicker-inline"]'))
})
}), jQuery.fn.datepicker.dates["ar-tn"] = {
    days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"],
    daysShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت", "أحد"],
    daysMin: ["ح", "ن", "ث", "ع", "خ", "ج", "س", "ح"],
    months: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويليه", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    monthsShort: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويليه", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    today: "هذا اليوم",
    rtl: !0
}, jQuery.fn.datepicker.dates.ar = {
    days: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"],
    daysShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت", "أحد"],
    daysMin: ["ح", "ن", "ث", "ع", "خ", "ج", "س", "ح"],
    months: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    monthsShort: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
    today: "هذا اليوم",
    rtl: !0
}, jQuery.fn.datepicker.dates.az = {
    days: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"],
    daysShort: ["B.", "B.e", "Ç.a", "Ç.", "C.a", "C.", "Ş."],
    daysMin: ["B.", "B.e", "Ç.a", "Ç.", "C.a", "C.", "Ş."],
    months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "İyun", "İyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
    monthsShort: ["Yan", "Fev", "Mar", "Apr", "May", "İyun", "İyul", "Avq", "Sen", "Okt", "Noy", "Dek"],
    today: "Bu gün",
    weekStart: 1,
    clear: "Təmizlə",
    monthsTitle: "Aylar"
}, jQuery.fn.datepicker.dates.bg = {
    days: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
    daysShort: ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб"],
    daysMin: ["Н", "П", "В", "С", "Ч", "П", "С"],
    months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
    monthsShort: ["Ян", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Ное", "Дек"],
    today: "днес"
}, jQuery.fn.datepicker.dates.bm = {
    days: ["Kari", "Ntɛnɛn", "Tarata", "Araba", "Alamisa", "Juma", "Sibiri"],
    daysShort: ["Kar", "Ntɛ", "Tar", "Ara", "Ala", "Jum", "Sib"],
    daysMin: ["Ka", "Nt", "Ta", "Ar", "Al", "Ju", "Si"],
    months: ["Zanwuyekalo", "Fewuruyekalo", "Marisikalo", "Awirilikalo", "Mɛkalo", "Zuwɛnkalo", "Zuluyekalo", "Utikalo", "Sɛtanburukalo", "ɔkutɔburukalo", "Nowanburukalo", "Desanburukalo"],
    monthsShort: ["Zan", "Few", "Mar", "Awi", "Mɛ", "Zuw", "Zul", "Uti", "Sɛt", "ɔku", "Now", "Des"],
    today: "Bi",
    monthsTitle: "Kalo",
    clear: "Ka jɔsi",
    weekStart: 1,
    format: "dd/mm/yyyy"
}, jQuery.fn.datepicker.dates.bn = {
    days: ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"],
    daysShort: ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"],
    daysMin: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"],
    months: ["জানুয়ারী", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "অগাস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
    monthsShort: ["জানুয়ারী", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "অগাস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
    today: "আজ",
    monthsTitle: "মাস",
    clear: "পরিষ্কার",
    weekStart: 0,
    format: "mm/dd/yyyy"
}, jQuery.fn.datepicker.dates.br = {
    days: ["Sul", "Lun", "Meurzh", "Merc'her", "Yaou", "Gwener", "Sadorn"],
    daysShort: ["Sul", "Lun", "Meu.", "Mer.", "Yao.", "Gwe.", "Sad."],
    daysMin: ["Su", "L", "Meu", "Mer", "Y", "G", "Sa"],
    months: ["Genver", "C'hwevrer", "Meurzh", "Ebrel", "Mae", "Mezheven", "Gouere", "Eost", "Gwengolo", "Here", "Du", "Kerzu"],
    monthsShort: ["Genv.", "C'hw.", "Meur.", "Ebre.", "Mae", "Mezh.", "Goue.", "Eost", "Gwen.", "Here", "Du", "Kerz."],
    today: "Hiziv",
    monthsTitle: "Miz",
    clear: "Dilemel",
    weekStart: 1,
    format: "dd/mm/yyyy"
}, jQuery.fn.datepicker.dates.bs = {
    days: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
    daysShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
    daysMin: ["N", "Po", "U", "Sr", "Č", "Pe", "Su"],
    months: ["Januar", "Februar", "Mart", "April", "Maj", "Juni", "Juli", "August", "Septembar", "Oktobar", "Novembar", "Decembar"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
    today: "Danas",
    weekStart: 1,
    format: "dd.mm.yyyy"
}, jQuery.fn.datepicker.dates.ca = {
    days: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
    daysShort: ["Diu", "Dil", "Dmt", "Dmc", "Dij", "Div", "Dis"],
    daysMin: ["dg", "dl", "dt", "dc", "dj", "dv", "ds"],
    months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
    monthsShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
    today: "Avui",
    monthsTitle: "Mesos",
    clear: "Esborrar",
    weekStart: 1,
    format: "dd/mm/yyyy"
}, jQuery.fn.datepicker.dates.cs = {
    days: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
    daysShort: ["Ned", "Pon", "Úte", "Stř", "Čtv", "Pát", "Sob"],
    daysMin: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
    months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
    monthsShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čnc", "Srp", "Zář", "Říj", "Lis", "Pro"],
    today: "Dnes",
    clear: "Vymazat",
    monthsTitle: "Měsíc",
    weekStart: 1,
    format: "dd.mm.yyyy"
}, jQuery.fn.datepicker.dates.cy = {
    days: ["Sul", "Llun", "Mawrth", "Mercher", "Iau", "Gwener", "Sadwrn"],
    daysShort: ["Sul", "Llu", "Maw", "Mer", "Iau", "Gwe", "Sad"],
    daysMin: ["Su", "Ll", "Ma", "Me", "Ia", "Gwe", "Sa"],
    months: ["Ionawr", "Chewfror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorfennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"],
    monthsShort: ["Ion", "Chw", "Maw", "Ebr", "Mai", "Meh", "Gor", "Aws", "Med", "Hyd", "Tach", "Rha"],
    today: "Heddiw"
}, jQuery.fn.datepicker.dates.da = {
    days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
    daysShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
    daysMin: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
    months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
    today: "I Dag",
    weekStart: 1,
    clear: "Nulstil",
    format: "dd/mm/yyyy",
    monthsTitle: "Måneder"
}, jQuery.fn.datepicker.dates.de = {
    days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    daysShort: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam"],
    daysMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    monthsShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    today: "Heute",
    monthsTitle: "Monate",
    clear: "Löschen",
    weekStart: 1,
    format: "dd.mm.yyyy"
}, jQuery.fn.datepicker.dates.el = {
    days: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
    daysShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
    daysMin: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
    months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
    monthsShort: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μάι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
    today: "Σήμερα",
    clear: "Καθαρισμός",
    weekStart: 1,
    format: "d/m/yyyy"
}, jQuery.fn.datepicker.dates["en-AU"] = {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: "Today",
    monthsTitle: "Months",
    clear: "Clear",
    weekStart: 1,
    format: "d/mm/yyyy"
}, jQuery.fn.datepicker.dates["en-CA"] = {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: "Today",
    monthsTitle: "Months",
    clear: "Clear",
    weekStart: 0,
    format: "yyyy-mm-dd"
}, jQuery.fn.datepicker.dates["en-GB"] = {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: "Today",
    monthsTitle: "Months",
    clear: "Clear",
    weekStart: 1,
    format: "dd/mm/yyyy"
}, jQuery.fn.datepicker.dates["en-IE"] = {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: "Today",
    monthsTitle: "Months",
    clear: "Clear",
    weekStart: 1,
    format: "dd/mm/yyyy"
}, jQuery.fn.datepicker.dates["en-NZ"] = {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: "Today",
    monthsTitle: "Months",
    clear: "Clear",
    weekStart: 1,
    format: "d/mm/yyyy"
}, jQuery.fn.datepicker.dates["en-ZA"] = {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: "Today",
    monthsTitle: "Months",
    clear: "Clear",
    weekStart: 1,
    format: "yyyy/mm/d"
}, jQuery.fn.datepicker.dates.eo = {
    days: ["dimanĉo", "lundo", "mardo", "merkredo", "ĵaŭdo", "vendredo", "sabato"],
    daysShort: ["dim.", "lun.", "mar.", "mer.", "ĵaŭ.", "ven.", "sam."],
    daysMin: ["d", "l", "ma", "me", "ĵ", "v", "s"],
    months: ["januaro", "februaro", "marto", "aprilo", "majo", "junio", "julio", "aŭgusto", "septembro", "oktobro", "novembro", "decembro"],
    monthsShort: ["jan.", "feb.", "mar.", "apr.", "majo", "jun.", "jul.", "aŭg.", "sep.", "okt.", "nov.", "dec."],
    today: "Hodiaŭ",
    clear: "Nuligi",
    weekStart: 1,
    format: "yyyy-mm-dd"
}, jQuery.fn.datepicker.dates.es = {
    days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
    daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    today: "Hoy",
    monthsTitle: "Meses",
    clear: "Borrar",
    weekStart: 1,
    format: "dd/mm/yyyy"
}, jQuery.fn.datepicker.dates.et = {
    days: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"],
    daysShort: ["Pühap", "Esmasp", "Teisip", "Kolmap", "Neljap", "Reede", "Laup"],
    daysMin: ["P", "E", "T", "K", "N", "R", "L"],
    months: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
    monthsShort: ["Jaan", "Veebr", "Märts", "Apr", "Mai", "Juuni", "Juuli", "Aug", "Sept", "Okt", "Nov", "Dets"],
    today: "Täna",
    clear: "Tühjenda",
    weekStart: 1,
    format: "dd.mm.yyyy"
}, jQuery.fn.datepicker.dates.eu = {
    days: ["Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata"],
    daysShort: ["Ig", "Al", "Ar", "Az", "Og", "Ol", "Lr"],
    daysMin: ["Ig", "Al", "Ar", "Az", "Og", "Ol", "Lr"],
    months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"],
    monthsShort: ["Urt", "Ots", "Mar", "Api", "Mai", "Eka", "Uzt", "Abu", "Ira", "Urr", "Aza", "Abe"],
    today: "Gaur",
    monthsTitle: "Hilabeteak",
    clear: "Ezabatu",
    weekStart: 1,
    format: "yyyy/mm/dd"
}, jQuery.fn.datepicker.dates.fa = {
    days: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه", "یک‌شنبه"],
    daysShort: ["یک", "دو", "سه", "چهار", "پنج", "جمعه", "شنبه", "یک"],
    daysMin: ["ی", "د", "س", "چ", "پ", "ج", "ش", "ی"],
    months: ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
    monthsShort: ["ژان", "فور", "مار", "آور", "مه", "ژون", "ژوی", "اوت", "سپت", "اکت", "نوا", "دسا"],
    today: "امروز",
    clear: "پاک کن",
    weekStart: 1,
    format: "yyyy/mm/dd"
}, jQuery.fn.datepicker.dates.fi = {
    days: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
    daysShort: ["sun", "maa", "tii", "kes", "tor", "per", "lau"],
    daysMin: ["su", "ma", "ti", "ke", "to", "pe", "la"],
    months: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
    monthsShort: ["tam", "hel", "maa", "huh", "tou", "kes", "hei", "elo", "syy", "lok", "mar", "jou"],
    today: "tänään",
    clear: "Tyhjennä",
    weekStart: 1,
    format: "d.m.yyyy"
}, jQuery.fn.datepicker.dates.fo = {
    days: ["Sunnudagur", "Mánadagur", "Týsdagur", "Mikudagur", "Hósdagur", "Fríggjadagur", "Leygardagur"],
    daysShort: ["Sun", "Mán", "Týs", "Mik", "Hós", "Frí", "Ley"],
    daysMin: ["Su", "Má", "Tý", "Mi", "Hó", "Fr", "Le"],
    months: ["Januar", "Februar", "Marts", "Apríl", "Mei", "Juni", "Juli", "August", "Septembur", "Oktobur", "Novembur", "Desembur"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
    today: "Í Dag",
    clear: "Reinsa"
}, jQuery.fn.datepicker.dates.fr = {
    days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    daysMin: ["D", "L", "Ma", "Me", "J", "V", "S"],
    months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    monthsShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Déc"],
    today: "Aujourd'hui",
    monthsTitle: "Mois",
    clear: "Effacer",
    weekStart: 1,
    format: "dd.mm.yyyy"
}, jQuery.fn.datepicker.dates.fr = {
    days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
    daysShort: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
    daysMin: ["d", "l", "ma", "me", "j", "v", "s"],
    months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
    monthsShort: ["janv.", "févr.", "mars", "avril", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
    today: "Aujourd'hui",
    monthsTitle: "Mois",
    clear: "Effacer",
    weekStart: 1,
    format: "dd/mm/yyyy"
}, jQuery.fn.datepicker.dates.gl = {
    days: ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"],
    daysShort: ["Dom", "Lun", "Mar", "Mér", "Xov", "Ven", "Sáb"],
    daysMin: ["Do", "Lu", "Ma", "Me", "Xo", "Ve", "Sa"],
    months: ["Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xuño", "Xullo", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro"],
    monthsShort: ["Xan", "Feb", "Mar", "Abr", "Mai", "Xun", "Xul", "Ago", "Sep", "Out", "Nov", "Dec"],
    today: "Hoxe",
    clear: "Limpar",
    weekStart: 1,
    format: "dd/mm/yyyy"
}, jQuery.fn.datepicker.dates.he = {
    days: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"],
    daysShort: ["א", "ב", "ג", "ד", "ה", "ו", "ש", "א"],
    daysMin: ["א", "ב", "ג", "ד", "ה", "ו", "ש", "א"],
    months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
    monthsShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
    today: "היום",
    rtl: !0
}, jQuery.fn.datepicker.dates.hi = {
    days: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
    daysShort: ["सूर्य", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
    daysMin: ["र", "सो", "मं", "बु", "गु", "शु", "श"],
    months: ["जनवरी", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितम्बर", "अक्टूबर", "नवंबर", "दिसम्बर"],
    monthsShort: ["जन", "फ़रवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितं", "अक्टूबर", "नवं", "दिसम्बर"],
    today: "आज",
    monthsTitle: "महीने",
    clear: "साफ",
    weekStart: 1,
    format: "dd / mm / yyyy"
}, jQuery.fn.datepicker.dates.hr = {
    days: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
    daysShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
    daysMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
    months: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
    monthsShort: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
    today: "Danas"
}, jQuery.fn.datepicker.dates.hu = {
    days: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
    daysShort: ["vas", "hét", "ked", "sze", "csü", "pén", "szo"],
    daysMin: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
    months: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
    monthsShort: ["jan", "feb", "már", "ápr", "máj", "jún", "júl", "aug", "sze", "okt", "nov", "dec"],
    today: "ma",
    weekStart: 1,
    clear: "töröl",
    titleFormat: "yyyy. MM",
    format: "yyyy.mm.dd"
}, jQuery.fn.datepicker.dates.hy = {
    days: ["Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ"],
    daysShort: ["Կիր", "Երկ", "Երե", "Չոր", "Հին", "Ուրբ", "Շաբ"],
    daysMin: ["Կի", "Եկ", "Եք", "Չո", "Հի", "Ու", "Շա"],
    months: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"],
    monthsShort: ["Հնվ", "Փետ", "Մար", "Ապր", "Մայ", "Հուն", "Հուլ", "Օգս", "Սեպ", "Հոկ", "Նոյ", "Դեկ"],
    today: "Այսօր",
    clear: "Ջնջել",
    format: "dd.mm.yyyy",
    weekStart: 1,
    monthsTitle: "Ամիսնէր"
}, jQuery.fn.datepicker.dates.id = {
    days: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
    daysShort: ["Mgu", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
    daysMin: ["Mg", "Sn", "Sl", "Ra", "Ka", "Ju", "Sa"],
    months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"],
    today: "Hari Ini",
    clear: "Kosongkan"
}, jQuery.fn.datepicker.dates.is = {
    days: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"],
    daysShort: ["Sun", "Mán", "Þri", "Mið", "Fim", "Fös", "Lau"],
    daysMin: ["Su", "Má", "Þr", "Mi", "Fi", "Fö", "La"],
    months: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maí", "Jún", "Júl", "Ágú", "Sep", "Okt", "Nóv", "Des"],
    today: "Í Dag"
}, jQuery.fn.datepicker.dates.it = {
    days: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
    daysShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
    daysMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
    months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
    monthsShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
    today: "Oggi",
    clear: "Cancella",
    weekStart: 1,
    format: "dd.mm.yyyy"
}, jQuery.fn.datepicker.dates.it = {
    days: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
    daysShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
    daysMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
    months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
    monthsShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
    today: "Oggi",
    monthsTitle: "Mesi",
    clear: "Cancella",
    weekStart: 1,
    format: "dd/mm/yyyy"
}, jQuery.fn.datepicker.dates.ja = {
    days: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"],
    daysShort: ["日", "月", "火", "水", "木", "金", "土"],
    daysMin: ["日", "月", "火", "水", "木", "金", "土"],
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    today: "今日",
    format: "yyyy/mm/dd",
    titleFormat: "yyyy年mm月",
    clear: "クリア"
}, jQuery.fn.datepicker.dates.ka = {
    days: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"],
    daysShort: ["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"],
    daysMin: ["კვ", "ორ", "სა", "ოთ", "ხუ", "პა", "შა"],
    months: ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"],
    monthsShort: ["იან", "თებ", "მარ", "აპრ", "მაი", "ივნ", "ივლ", "აგვ", "სექ", "ოქტ", "ნოე", "დეკ"],
    today: "დღეს",
    clear: "გასუფთავება",
    weekStart: 1,
    format: "dd.mm.yyyy"
}, jQuery.fn.datepicker.dates.kk = {
    days: ["Жексенбі", "Дүйсенбі", "Сейсенбі", "Сәрсенбі", "Бейсенбі", "Жұма", "Сенбі"],
    daysShort: ["Жек", "Дүй", "Сей", "Сәр", "Бей", "Жұм", "Сен"],
    daysMin: ["Жк", "Дс", "Сс", "Ср", "Бс", "Жм", "Сн"],
    months: ["Қаңтар", "Ақпан", "Наурыз", "Сәуір", "Мамыр", "Маусым", "Шілде", "Тамыз", "Қыркүйек", "Қазан", "Қараша", "Желтоқсан"],
    monthsShort: ["Қаң", "Ақп", "Нау", "Сәу", "Мам", "Мау", "Шіл", "Там", "Қыр", "Қаз", "Қар", "Жел"],
    today: "Бүгін",
    weekStart: 1
}, jQuery.fn.datepicker.dates.km = {
    days: ["អាទិត្យ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រហស្បតិ៍", "សុក្រ", "សៅរ៍"],
    daysShort: ["អា.ទិ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រ.ហ", "សុក្រ", "សៅរ៍"],
    daysMin: ["អា.ទិ", "ចន្ទ", "អង្គារ", "ពុធ", "ព្រ.ហ", "សុក្រ", "សៅរ៍"],
    months: ["មករា", "កុម្ភះ", "មិនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"],
    monthsShort: ["មករា", "កុម្ភះ", "មិនា", "មេសា", "ឧសភា", "មិថុនា", "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ"],
    today: "ថ្ងៃនេះ",
    clear: "សំអាត"
}, jQuery.fn.datepicker.dates.ko = {
    days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
    daysShort: ["일", "월", "화", "수", "목", "금", "토"],
    daysMin: ["일", "월", "화", "수", "목", "금", "토"],
    months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    monthsShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    today: "오늘",
    clear: "삭제",
    format: "yyyy-mm-dd",
    titleFormat: "yyyy년mm월",
    weekStart: 0
}, jQuery.fn.datepicker.dates.lt = {
    days: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"],
    daysShort: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
    daysMin: ["Sk", "Pr", "An", "Tr", "Ke", "Pn", "Št"],
    months: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
    monthsShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gru"],
    today: "Šiandien",
    monthsTitle: "Mėnesiai",
    clear: "Išvalyti",
    weekStart: 1,
    format: "yyyy-mm-dd"
}, jQuery.fn.datepicker.dates.lv = {
    days: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"],
    daysShort: ["Sv", "P", "O", "T", "C", "Pk", "S"],
    daysMin: ["Sv", "Pr", "Ot", "Tr", "Ce", "Pk", "Se"],
    months: ["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jūn", "Jūl", "Aug", "Sep", "Okt", "Nov", "Dec"],
    monthsTitle: "Mēneši",
    today: "Šodien",
    clear: "Nodzēst",
    weekStart: 1
}, jQuery.fn.datepicker.dates.me = {
    days: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
    daysShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
    daysMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
    months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
    today: "Danas",
    weekStart: 1,
    clear: "Izbriši",
    format: "dd.mm.yyyy"
}, jQuery.fn.datepicker.dates.mk = {
    days: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"],
    daysShort: ["Нед", "Пон", "Вто", "Сре", "Чет", "Пет", "Саб"],
    daysMin: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Са"],
    months: ["Јануари", "Февруари", "Март", "Април", "Мај", "Јуни", "Јули", "Август", "Септември", "Октомври", "Ноември", "Декември"],
    monthsShort: ["Јан", "Фев", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Ное", "Дек"],
    today: "Денес",
    format: "dd.mm.yyyy"
}, jQuery.fn.datepicker.dates.mn = {
    days: ["Ням", "Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба"],
    daysShort: ["Ням", "Дав", "Мяг", "Лха", "Пүр", "Баа", "Бям"],
    daysMin: ["Ня", "Да", "Мя", "Лх", "Пү", "Ба", "Бя"],
    months: ["Хулгана", "Үхэр", "Бар", "Туулай", "Луу", "Могой", "Морь", "Хонь", "Бич", "Тахиа", "Нохой", "Гахай"],
    monthsShort: ["Хул", "Үхэ", "Бар", "Туу", "Луу", "Мог", "Мор", "Хон", "Бич", "Тах", "Нох", "Гах"],
    today: "Өнөөдөр",
    clear: "Тодорхой",
    format: "yyyy.mm.dd",
    weekStart: 1
}, jQuery.fn.datepicker.dates.ms = {
    days: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
    daysShort: ["Aha", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab"],
    daysMin: ["Ah", "Is", "Se", "Ra", "Kh", "Ju", "Sa"],
    months: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"],
    today: "Hari Ini",
    clear: "Bersihkan"
}, jQuery.fn.datepicker.dates["nl-BE"] = {
    days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
    daysShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
    daysMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
    months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
    monthsShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
    today: "Vandaag",
    monthsTitle: "Maanden",
    clear: "Leegmaken",
    weekStart: 1,
    format: "dd/mm/yyyy"
}, jQuery.fn.datepicker.dates.nl = {
    days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
    daysShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
    daysMin: ["zo", "ma", "di", "wo", "do", "vr", "za"],
    months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
    monthsShort: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
    today: "Vandaag",
    monthsTitle: "Maanden",
    clear: "Wissen",
    weekStart: 1,
    format: "dd-mm-yyyy"
}, jQuery.fn.datepicker.dates.no = {
    days: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
    daysShort: ["søn", "man", "tir", "ons", "tor", "fre", "lør"],
    daysMin: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
    months: ["januar", "februar", "mars", "april", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
    monthsShort: ["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"],
    today: "i dag",
    monthsTitle: "Måneder",
    clear: "Nullstill",
    weekStart: 1,
    format: "dd.mm.yyyy"
}, jQuery.fn.datepicker.dates.oc = {
    days: ["Dimenge", "Diluns", "Dimars", "Dimècres", "Dijòus", "Divendres", "Dissabte"],
    daysShort: ["Dim", "Dil", "Dmr", "Dmc", "Dij", "Div", "Dis"],
    daysMin: ["dg", "dl", "dr", "dc", "dj", "dv", "ds"],
    months: ["Genièr", "Febrièr", "Març", "Abrial", "Mai", "Junh", "Julhet", "Agost", "Setembre", "Octobre", "Novembre", "Decembre"],
    monthsShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dec"],
    today: "Uèi",
    monthsTitle: "Meses",
    clear: "Escafar",
    weekStart: 1,
    format: "dd/mm/yyyy"
}, jQuery.fn.datepicker.dates.pl = {
    days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
    daysShort: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Piąt.", "Sob."],
    daysMin: ["Ndz.", "Pn.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
    months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
    monthsShort: ["Sty.", "Lut.", "Mar.", "Kwi.", "Maj", "Cze.", "Lip.", "Sie.", "Wrz.", "Paź.", "Lis.", "Gru."],
    today: "Dzisiaj",
    weekStart: 1,
    clear: "Wyczyść",
    format: "dd.mm.yyyy"
}, jQuery.fn.datepicker.dates["pt-BR"] = {
    days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    today: "Hoje",
    monthsTitle: "Meses",
    clear: "Limpar",
    format: "dd/mm/yyyy"
}, jQuery.fn.datepicker.dates.pt = {
    days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
    daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    today: "Hoje",
    monthsTitle: "Meses",
    clear: "Limpar",
    format: "dd/mm/yyyy"
}, jQuery.fn.datepicker.dates.ro = {
    days: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
    daysShort: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sâm"],
    daysMin: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
    months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
    monthsShort: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: "Astăzi",
    clear: "Șterge",
    weekStart: 1,
    format: "dd/mm/yyyy"
}, jQuery.fn.datepicker.dates.ru = {
    days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб"],
    daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    today: "Сегодня",
    clear: "Очистить",
    format: "dd.mm.yyyy",
    weekStart: 1,
    monthsTitle: "Месяцы"
}, jQuery.fn.datepicker.dates.si = {
    days: ["ඉරිදා", "සඳුදා", "අඟහරුවාදා", "බදාදා", "බ්‍රහස්පතින්දා", "සිකුරාදා", "සෙනසුරාදා"],
    daysShort: ["ඉරි", "සඳු", "අඟ", "බදා", "බ්‍රහ", "සිකු", "සෙන"],
    daysMin: ["ඉ", "ස", "අ", "බ", "බ්‍ර", "සි", "සෙ"],
    months: ["ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජුනි", "ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"],
    monthsShort: ["ජන", "පෙබ", "මාර්", "අප්‍රේ", "මැයි", "ජුනි", "ජූලි", "අගෝ", "සැප්", "ඔක්", "නොවැ", "දෙසැ"],
    today: "අද",
    monthsTitle: "මාස",
    clear: "මකන්න",
    weekStart: 0,
    format: "yyyy-mm-dd"
}, jQuery.fn.datepicker.dates.sk = {
    days: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
    daysShort: ["Ned", "Pon", "Uto", "Str", "Štv", "Pia", "Sob"],
    daysMin: ["Ne", "Po", "Ut", "St", "Št", "Pia", "So"],
    months: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
    today: "Dnes",
    clear: "Vymazať",
    weekStart: 1,
    format: "d.m.yyyy"
}, jQuery.fn.datepicker.dates.sl = {
    days: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"],
    daysShort: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
    daysMin: ["Ne", "Po", "To", "Sr", "Če", "Pe", "So"],
    months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
    today: "Danes",
    weekStart: 1
}, jQuery.fn.datepicker.dates.sq = {
    days: ["E Diel", "E Hënë", "E Martē", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"],
    daysShort: ["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Shtu"],
    daysMin: ["Di", "Hë", "Ma", "Më", "En", "Pr", "Sht"],
    months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"],
    monthsShort: ["Jan", "Shk", "Mar", "Pri", "Maj", "Qer", "Korr", "Gu", "Sht", "Tet", "Nën", "Dhjet"],
    monthsTitle: "Muaj",
    today: "Sot",
    weekStart: 1,
    format: "dd/mm/yyyy",
    clear: "Pastro"
}, jQuery.fn.datepicker.dates["sr-latin"] = {
    days: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"],
    daysShort: ["Ned", "Pon", "Uto", "Sre", "Čet", "Pet", "Sub"],
    daysMin: ["N", "Po", "U", "Sr", "Č", "Pe", "Su"],
    months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
    today: "Danas",
    weekStart: 1,
    format: "dd.mm.yyyy"
}, jQuery.fn.datepicker.dates.sr = {
    days: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
    daysShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
    daysMin: ["Н", "По", "У", "Ср", "Ч", "Пе", "Су"],
    months: ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
    monthsShort: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
    today: "Данас",
    weekStart: 1,
    format: "dd.mm.yyyy"
}, jQuery.fn.datepicker.dates.sv = {
    days: ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"],
    daysShort: ["sön", "mån", "tis", "ons", "tor", "fre", "lör"],
    daysMin: ["sö", "må", "ti", "on", "to", "fr", "lö"],
    months: ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"],
    monthsShort: ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
    today: "Idag",
    format: "yyyy-mm-dd",
    weekStart: 1,
    clear: "Rensa"
}, jQuery.fn.datepicker.dates.sw = {
    days: ["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"],
    daysShort: ["J2", "J3", "J4", "J5", "Alh", "Ij", "J1"],
    daysMin: ["2", "3", "4", "5", "A", "I", "1"],
    months: ["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba"],
    monthsShort: ["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ago", "Sep", "Okt", "Nov", "Des"],
    today: "Leo"
}, jQuery.fn.datepicker.dates.ta = {
    days: ["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"],
    daysShort: ["ஞாயி", "திங்", "செவ்", "புத", "வியா", "வெள்", "சனி"],
    daysMin: ["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"],
    months: ["ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்", "ஜூலை", "ஆகஸ்டு", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"],
    monthsShort: ["ஜன", "பிப்", "மார்", "ஏப்", "மே", "ஜூன்", "ஜூலை", "ஆக", "செப்", "அக்", "நவ", "டிச"],
    today: "இன்று",
    monthsTitle: "மாதங்கள்",
    clear: "நீக்கு",
    weekStart: 1,
    format: "dd/mm/yyyy"
}, jQuery.fn.datepicker.dates.tg = {
    days: ["Якшанбе", "Душанбе", "Сешанбе", "Чоршанбе", "Панҷшанбе", "Ҷумъа", "Шанбе"],
    daysShort: ["Яшб", "Дшб", "Сшб", "Чшб", "Пшб", "Ҷум", "Шнб"],
    daysMin: ["Яш", "Дш", "Сш", "Чш", "Пш", "Ҷм", "Шб"],
    months: ["Январ", "Феврал", "Март", "Апрел", "Май", "Июн", "Июл", "Август", "Сентябр", "Октябр", "Ноябр", "Декабр"],
    monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    today: "Имрӯз",
    monthsTitle: "Моҳҳо",
    clear: "Тоза намудан",
    weekStart: 1,
    format: "dd.mm.yyyy"
}, jQuery.fn.datepicker.dates.th = {
    days: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"],
    daysShort: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"],
    daysMin: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"],
    months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
    monthsShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
    today: "วันนี้"
}, jQuery.fn.datepicker.dates.tk = {
    days: ["Ýekşenbe", "Duşenbe", "Sişenbe", "Çarşenbe", "Penşenbe", "Anna", "Şenbe"],
    daysShort: ["Ýek", "Duş", "Siş", "Çar", "Pen", "Ann", "Şen"],
    daysMin: ["Ýe", "Du", "Si", "Ça", "Pe", "An", "Şe"],
    months: ["Ýanwar", "Fewral", "Mart", "Aprel", "Maý", "Iýun", "Iýul", "Awgust", "Sentýabr", "Oktýabr", "Noýabr", "Dekabr"],
    monthsShort: ["Ýan", "Few", "Mar", "Apr", "Maý", "Iýn", "Iýl", "Awg", "Sen", "Okt", "Noý", "Dek"],
    today: "Bu gün",
    monthsTitle: "Aýlar",
    clear: "Aýyr",
    weekStart: 1,
    format: "dd.mm.yyyy"
}, jQuery.fn.datepicker.dates.tr = {
    days: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
    daysShort: ["Pz", "Pzt", "Sal", "Çrş", "Prş", "Cu", "Cts"],
    daysMin: ["Pz", "Pzt", "Sa", "Çr", "Pr", "Cu", "Ct"],
    months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
    monthsShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
    today: "Bugün",
    clear: "Temizle",
    weekStart: 1,
    format: "dd.mm.yyyy"
}, jQuery.fn.datepicker.dates.uk = {
    days: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"],
    daysShort: ["Нед", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб"],
    daysMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    months: ["Cічень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
    monthsShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
    today: "Сьогодні",
    clear: "Очистити",
    format: "dd.mm.yyyy",
    weekStart: 1
}, jQuery.fn.datepicker.dates["uz-cyrl"] = {
    days: ["Якшанба", "Душанба", "Сешанба", "Чоршанба", "Пайшанба", "Жума", "Шанба"],
    daysShort: ["Якш", "Ду", "Се", "Чор", "Пай", "Жу", "Ша"],
    daysMin: ["Як", "Ду", "Се", "Чо", "Па", "Жу", "Ша"],
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    today: "Бугун",
    clear: "Ўчириш",
    format: "dd.mm.yyyy",
    weekStart: 1,
    monthsTitle: "Ойлар"
}, jQuery.fn.datepicker.dates["uz-latn"] = {
    days: ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"],
    daysShort: ["Yak", "Du", "Se", "Chor", "Pay", "Ju", "Sha"],
    daysMin: ["Ya", "Du", "Se", "Cho", "Pa", "Ju", "Sha"],
    months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"],
    monthsShort: ["Yan", "Fev", "Mar", "Apr", "May", "Iyn", "Iyl", "Avg", "Sen", "Okt", "Noy", "Dek"],
    today: "Bugun",
    clear: "O'chirish",
    format: "dd.mm.yyyy",
    weekStart: 1,
    monthsTitle: "Oylar"
}, jQuery.fn.datepicker.dates.vi = {
    days: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
    daysShort: ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
    daysMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
    months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
    monthsShort: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
    today: "Hôm nay",
    clear: "Xóa",
    format: "dd/mm/yyyy"
}, jQuery.fn.datepicker.dates["zh-CN"] = {
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    daysMin: ["日", "一", "二", "三", "四", "五", "六"],
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    today: "今天",
    monthsTitle: "选择月份",
    clear: "清除",
    format: "yyyy-mm-dd",
    titleFormat: "yyyy年mm月",
    weekStart: 1
}, jQuery.fn.datepicker.dates["zh-TW"] = {
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    daysShort: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
    daysMin: ["日", "一", "二", "三", "四", "五", "六"],
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    today: "今天",
    format: "yyyy年mm月dd日",
    weekStart: 1,
    clear: "清除"
},
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
}(function(t, e) {
    function i() {
        return new Date(Date.UTC.apply(Date, arguments))
    }
    "indexOf" in Array.prototype || (Array.prototype.indexOf = function(t, i) {
        i === e && (i = 0), i < 0 && (i += this.length), i < 0 && (i = 0);
        for (var n = this.length; i < n; i++)
            if (i in this && this[i] === t) return i;
        return -1
    });
    var n = function(i, n) {
        var s = this;
        this.element = t(i), this.container = n.container || "body", this.language = n.language || this.element.data("date-language") || "en", this.language = this.language in o ? this.language : this.language.split("-")[0], this.language = this.language in o ? this.language : "en", this.isRTL = o[this.language].rtl || !1, this.formatType = n.formatType || this.element.data("format-type") || "standard", this.format = a.parseFormat(n.format || this.element.data("date-format") || o[this.language].format || a.getDefaultFormat(this.formatType, "input"), this.formatType), this.isInline = !1, this.isVisible = !1, this.isInput = this.element.is("input"), this.fontAwesome = n.fontAwesome || this.element.data("font-awesome") || !1, this.bootcssVer = n.bootcssVer || (this.isInput ? this.element.is(".form-control") ? 3 : 2 : this.bootcssVer = this.element.is(".input-group") ? 3 : 2), this.component = !!this.element.is(".date") && (3 === this.bootcssVer ? this.element.find(".input-group-addon .glyphicon-th, .input-group-addon .glyphicon-time, .input-group-addon .glyphicon-remove, .input-group-addon .glyphicon-calendar, .input-group-addon .fa-calendar, .input-group-addon .fa-clock-o").parent() : this.element.find(".add-on .icon-th, .add-on .icon-time, .add-on .icon-calendar, .add-on .fa-calendar, .add-on .fa-clock-o").parent()), this.componentReset = !!this.element.is(".date") && (3 === this.bootcssVer ? this.element.find(".input-group-addon .glyphicon-remove, .input-group-addon .fa-times").parent() : this.element.find(".add-on .icon-remove, .add-on .fa-times").parent()), this.hasInput = this.component && this.element.find("input").length, this.component && 0 === this.component.length && (this.component = !1), this.linkField = n.linkField || this.element.data("link-field") || !1, this.linkFormat = a.parseFormat(n.linkFormat || this.element.data("link-format") || a.getDefaultFormat(this.formatType, "link"), this.formatType), this.minuteStep = n.minuteStep || this.element.data("minute-step") || 5, this.pickerPosition = n.pickerPosition || this.element.data("picker-position") || "bottom-right", this.showMeridian = n.showMeridian || this.element.data("show-meridian") || !1, this.initialDate = n.initialDate || new Date, this.zIndex = n.zIndex || this.element.data("z-index") || e, this.title = void 0 !== n.title && n.title, this.timezone = n.timezone || function() {
            var t, e, i, n, s;
            if ((i = (null != (s = (e = (new Date).toString()).split("(")[1]) ? s.slice(0, -1) : 0) || e.split(" ")) instanceof Array) {
                n = [];
                for (var o = 0, a = i.length; o < a; o++)(t = null !== (s = i[o].match(/\b[A-Z]+\b/))) && s[0] && n.push(t);
                i = n.pop()
            }
            return i
        }(), this.icons = {
            leftArrow: this.fontAwesome ? "fa-arrow-left" : 3 === this.bootcssVer ? "glyphicon-arrow-left" : "icon-arrow-left",
            rightArrow: this.fontAwesome ? "fa-arrow-right" : 3 === this.bootcssVer ? "glyphicon-arrow-right" : "icon-arrow-right"
        }, this.icontype = this.fontAwesome ? "fa" : "glyphicon", this._attachEvents(), this.clickedOutside = function(e) {
            0 === t(e.target).closest(".datetimepicker").length && s.hide()
        }, this.formatViewType = "datetime", "formatViewType" in n ? this.formatViewType = n.formatViewType : "formatViewType" in this.element.data() && (this.formatViewType = this.element.data("formatViewType")), this.minView = 0, "minView" in n ? this.minView = n.minView : "minView" in this.element.data() && (this.minView = this.element.data("min-view")), this.minView = a.convertViewMode(this.minView), this.maxView = a.modes.length - 1, "maxView" in n ? this.maxView = n.maxView : "maxView" in this.element.data() && (this.maxView = this.element.data("max-view")), this.maxView = a.convertViewMode(this.maxView), this.wheelViewModeNavigation = !1, "wheelViewModeNavigation" in n ? this.wheelViewModeNavigation = n.wheelViewModeNavigation : "wheelViewModeNavigation" in this.element.data() && (this.wheelViewModeNavigation = this.element.data("view-mode-wheel-navigation")), this.wheelViewModeNavigationInverseDirection = !1, "wheelViewModeNavigationInverseDirection" in n ? this.wheelViewModeNavigationInverseDirection = n.wheelViewModeNavigationInverseDirection : "wheelViewModeNavigationInverseDirection" in this.element.data() && (this.wheelViewModeNavigationInverseDirection = this.element.data("view-mode-wheel-navigation-inverse-dir")), this.wheelViewModeNavigationDelay = 100, "wheelViewModeNavigationDelay" in n ? this.wheelViewModeNavigationDelay = n.wheelViewModeNavigationDelay : "wheelViewModeNavigationDelay" in this.element.data() && (this.wheelViewModeNavigationDelay = this.element.data("view-mode-wheel-navigation-delay")), this.startViewMode = 2, "startView" in n ? this.startViewMode = n.startView : "startView" in this.element.data() && (this.startViewMode = this.element.data("start-view")), this.startViewMode = a.convertViewMode(this.startViewMode), this.viewMode = this.startViewMode, this.viewSelect = this.minView, "viewSelect" in n ? this.viewSelect = n.viewSelect : "viewSelect" in this.element.data() && (this.viewSelect = this.element.data("view-select")), this.viewSelect = a.convertViewMode(this.viewSelect), this.forceParse = !0, "forceParse" in n ? this.forceParse = n.forceParse : "dateForceParse" in this.element.data() && (this.forceParse = this.element.data("date-force-parse"));
        for (var r = 3 === this.bootcssVer ? a.templateV3 : a.template; - 1 !== r.indexOf("{iconType}");) r = r.replace("{iconType}", this.icontype);
        for (; - 1 !== r.indexOf("{leftArrow}");) r = r.replace("{leftArrow}", this.icons.leftArrow);
        for (; - 1 !== r.indexOf("{rightArrow}");) r = r.replace("{rightArrow}", this.icons.rightArrow);
        if (this.picker = t(r).appendTo(this.isInline ? this.element : this.container).on({
                click: t.proxy(this.click, this),
                mousedown: t.proxy(this.mousedown, this)
            }), this.wheelViewModeNavigation && (t.fn.mousewheel ? this.picker.on({
                mousewheel: t.proxy(this.mousewheel, this)
            }) : console.log("Mouse Wheel event is not supported. Please include the jQuery Mouse Wheel plugin before enabling this option")), this.isInline ? this.picker.addClass("datetimepicker-inline") : this.picker.addClass("datetimepicker-dropdown-map" + this.pickerPosition + " dropdown-menu-map"), this.isRTL) {
            this.picker.addClass("datetimepicker-rtl");
            var l = 3 === this.bootcssVer ? ".prev span, .next span" : ".prev i, .next i";
            this.picker.find(l).toggleClass(this.icons.leftArrow + " " + this.icons.rightArrow)
        }
        t(document).on("mousedown touchend", this.clickedOutside), this.autoclose = !1, "autoclose" in n ? this.autoclose = n.autoclose : "dateAutoclose" in this.element.data() && (this.autoclose = this.element.data("date-autoclose")), this.keyboardNavigation = !0, "keyboardNavigation" in n ? this.keyboardNavigation = n.keyboardNavigation : "dateKeyboardNavigation" in this.element.data() && (this.keyboardNavigation = this.element.data("date-keyboard-navigation")), this.todayBtn = n.todayBtn || this.element.data("date-today-btn") || !1, this.clearBtn = n.clearBtn || this.element.data("date-clear-btn") || !1, this.todayHighlight = n.todayHighlight || this.element.data("date-today-highlight") || !1, this.weekStart = 0, void 0 !== n.weekStart ? this.weekStart = n.weekStart : void 0 !== this.element.data("date-weekstart") ? this.weekStart = this.element.data("date-weekstart") : void 0 !== o[this.language].weekStart && (this.weekStart = o[this.language].weekStart), this.weekStart = this.weekStart % 7, this.weekEnd = (this.weekStart + 6) % 7, this.onRenderDay = function(t) {
            var e = (n.onRenderDay || function() {
                return []
            })(t);
            "string" == typeof e && (e = [e]);
            return ["day"].concat(e || [])
        }, this.onRenderHour = function(t) {
            var e = (n.onRenderHour || function() {
                return []
            })(t);
            return "string" == typeof e && (e = [e]), ["hour"].concat(e || [])
        }, this.onRenderMinute = function(t) {
            var e = (n.onRenderMinute || function() {
                    return []
                })(t),
                i = ["minute"];
            return "string" == typeof e && (e = [e]), t < this.startDate || t > this.endDate ? i.push("disabled") : Math.floor(this.date.getUTCMinutes() / this.minuteStep) === Math.floor(t.getUTCMinutes() / this.minuteStep) && i.push("active"), i.concat(e || [])
        }, this.onRenderYear = function(t) {
            var e = (n.onRenderYear || function() {
                    return []
                })(t),
                i = ["year"];
            "string" == typeof e && (e = [e]), this.date.getUTCFullYear() === t.getUTCFullYear() && i.push("active");
            var s = t.getUTCFullYear(),
                o = this.endDate.getUTCFullYear();
            return (t < this.startDate || s > o) && i.push("disabled"), i.concat(e || [])
        }, this.onRenderMonth = function(t) {
            var e = (n.onRenderMonth || function() {
                return []
            })(t);
            return "string" == typeof e && (e = [e]), ["month"].concat(e || [])
        }, this.startDate = new Date(-8639968443048e3), this.endDate = new Date(8639968443048e3), this.datesDisabled = [], this.daysOfWeekDisabled = [], this.setStartDate(n.startDate || this.element.data("date-startdate")), this.setEndDate(n.endDate || this.element.data("date-enddate")), this.setDatesDisabled(n.datesDisabled || this.element.data("date-dates-disabled")), this.setDaysOfWeekDisabled(n.daysOfWeekDisabled || this.element.data("date-days-of-week-disabled")), this.setMinutesDisabled(n.minutesDisabled || this.element.data("date-minute-disabled")), this.setHoursDisabled(n.hoursDisabled || this.element.data("date-hour-disabled")), this.fillDow(), this.fillMonths(), this.update(), this.showMode(), this.isInline && this.show()
    };
    n.prototype = {
        constructor: n,
        _events: [],
        _attachEvents: function() {
            this._detachEvents(), this.isInput ? this._events = [
                [this.element, {
                    focus: t.proxy(this.show, this),
                    keyup: t.proxy(this.update, this),
                    keydown: t.proxy(this.keydown, this)
                }]
            ] : this.component && this.hasInput ? (this._events = [
                [this.element.find("input"), {
                    focus: t.proxy(this.show, this),
                    keyup: t.proxy(this.update, this),
                    keydown: t.proxy(this.keydown, this)
                }],
                [this.component, {
                    click: t.proxy(this.show, this)
                }]
            ], this.componentReset && this._events.push([this.componentReset, {
                click: t.proxy(this.reset, this)
            }])) : this.element.is("div") ? this.isInline = !0 : this._events = [
                [this.element, {
                    click: t.proxy(this.show, this)
                }]
            ];
            for (var e, i, n = 0; n < this._events.length; n++) e = this._events[n][0], i = this._events[n][1], e.on(i)
        },
        _detachEvents: function() {
            for (var t, e, i = 0; i < this._events.length; i++) t = this._events[i][0], e = this._events[i][1], t.off(e);
            this._events = []
        },
        show: function(e) {
            this.picker.show(), this.height = this.component ? this.component.outerHeight() : this.element.outerHeight(), this.forceParse && this.update(), this.place(), t(window).on("resize", t.proxy(this.place, this)), e && (e.stopPropagation(), e.preventDefault()), this.isVisible = !0, this.element.trigger({
                type: "show",
                date: this.date
            })
        },
        hide: function() {
            this.isVisible && (this.isInline || (this.picker.hide(), t(window).off("resize", this.place), this.viewMode = this.startViewMode, this.showMode(), this.isInput || t(document).off("mousedown", this.hide), this.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find("input").val()) && this.setValue(), this.isVisible = !1, this.element.trigger({
                type: "hide",
                date: this.date
            })))
        },
        remove: function() {
            this._detachEvents(), t(document).off("mousedown", this.clickedOutside), this.picker.remove(), delete this.picker, delete this.element.data().datetimepicker
        },
        getDate: function() {
            var t = this.getUTCDate();
            return null === t ? null : new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
        },
        getUTCDate: function() {
            return this.date
        },
        getInitialDate: function() {
            return this.initialDate
        },
        setInitialDate: function(t) {
            this.initialDate = t
        },
        setDate: function(t) {
            this.setUTCDate(new Date(t.getTime() - 6e4 * t.getTimezoneOffset()))
        },
        setUTCDate: function(t) {
            t >= this.startDate && t <= this.endDate ? (this.date = t, this.setValue(), this.viewDate = this.date, this.fill()) : this.element.trigger({
                type: "outOfRange",
                date: t,
                startDate: this.startDate,
                endDate: this.endDate
            })
        },
        setFormat: function(t) {
            var e;
            this.format = a.parseFormat(t, this.formatType), this.isInput ? e = this.element : this.component && (e = this.element.find("input")), e && e.val() && this.setValue()
        },
        setValue: function() {
            var e = this.getFormattedDate();
            this.isInput ? this.element.val(e) : (this.component && this.element.find("input").val(e), this.element.data("date", e)), this.linkField && t("#" + this.linkField).val(this.getFormattedDate(this.linkFormat))
        },
        getFormattedDate: function(t) {
            return t = t || this.format, a.formatDate(this.date, t, this.language, this.formatType, this.timezone)
        },
        setStartDate: function(t) {
            this.startDate = t || this.startDate, 8639968443048e3 !== this.startDate.valueOf() && (this.startDate = a.parseDate(this.startDate, this.format, this.language, this.formatType, this.timezone)), this.update(), this.updateNavArrows()
        },
        setEndDate: function(t) {
            this.endDate = t || this.endDate, 8639968443048e3 !== this.endDate.valueOf() && (this.endDate = a.parseDate(this.endDate, this.format, this.language, this.formatType, this.timezone)), this.update(), this.updateNavArrows()
        },
        setDatesDisabled: function(e) {
            this.datesDisabled = e || [], t.isArray(this.datesDisabled) || (this.datesDisabled = this.datesDisabled.split(/,\s*/));
            var i = this;
            this.datesDisabled = t.map(this.datesDisabled, function(t) {
                return a.parseDate(t, i.format, i.language, i.formatType, i.timezone).toDateString()
            }), this.update(), this.updateNavArrows()
        },
        setTitle: function(t, e) {
            return this.picker.find(t).find("th:eq(1)").text(!1 === this.title ? e : this.title)
        },
        setDaysOfWeekDisabled: function(e) {
            this.daysOfWeekDisabled = e || [], t.isArray(this.daysOfWeekDisabled) || (this.daysOfWeekDisabled = this.daysOfWeekDisabled.split(/,\s*/)), this.daysOfWeekDisabled = t.map(this.daysOfWeekDisabled, function(t) {
                return parseInt(t, 10)
            }), this.update(), this.updateNavArrows()
        },
        setMinutesDisabled: function(e) {
            this.minutesDisabled = e || [], t.isArray(this.minutesDisabled) || (this.minutesDisabled = this.minutesDisabled.split(/,\s*/)), this.minutesDisabled = t.map(this.minutesDisabled, function(t) {
                return parseInt(t, 10)
            }), this.update(), this.updateNavArrows()
        },
        setHoursDisabled: function(e) {
            this.hoursDisabled = e || [], t.isArray(this.hoursDisabled) || (this.hoursDisabled = this.hoursDisabled.split(/,\s*/)), this.hoursDisabled = t.map(this.hoursDisabled, function(t) {
                return parseInt(t, 10)
            }), this.update(), this.updateNavArrows()
        },
        place: function() {
            if (!this.isInline) {
                if (!this.zIndex) {
                    var e = 0;
                    t("div").each(function() {
                        var i = parseInt(t(this).css("zIndex"), 10);
                        i > e && (e = i)
                    }), this.zIndex = e + 10
                }
                var i, n, s, o;
                o = this.container instanceof t ? this.container.offset() : t(this.container).offset(), this.component ? (s = (i = this.component.offset()).left, "bottom-left" !== this.pickerPosition && "top-left" !== this.pickerPosition || (s += this.component.outerWidth() - this.picker.outerWidth())) : (s = (i = this.element.offset()).left, "bottom-left" !== this.pickerPosition && "top-left" !== this.pickerPosition || (s += this.element.outerWidth() - this.picker.outerWidth()));
                var a = document.body.clientWidth || window.innerWidth;
                s + 220 > a && (s = a - 220), n = "top-left" === this.pickerPosition || "top-right" === this.pickerPosition ? i.top - this.picker.outerHeight() : i.top + this.height, n -= o.top, s -= o.left, this.picker.css({
                    top: n,
                    left: s,
                    zIndex: this.zIndex
                })
            }
        },
        hour_minute: "^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]",
        update: function() {
            var t, e = !1;
            arguments && arguments.length && ("string" == typeof arguments[0] || arguments[0] instanceof Date) ? (t = arguments[0], e = !0) : "string" == typeof(t = (this.isInput ? this.element.val() : this.element.find("input").val()) || this.element.data("date") || this.initialDate) && (t = t.replace(/^\s+|\s+$/g, "")), t || (t = new Date, e = !1), "string" == typeof t && (new RegExp(this.hour_minute).test(t) || new RegExp(this.hour_minute + ":[0-5][0-9]").test(t)) && (t = this.getDate()), this.date = a.parseDate(t, this.format, this.language, this.formatType, this.timezone), e && this.setValue(), this.date < this.startDate ? this.viewDate = new Date(this.startDate) : this.date > this.endDate ? this.viewDate = new Date(this.endDate) : this.viewDate = new Date(this.date), this.fill()
        },
        fillDow: function() {
            for (var t = this.weekStart, e = "<tr>"; t < this.weekStart + 7;) e += '<th class="dow">' + o[this.language].daysMin[t++ % 7] + "</th>";
            e += "</tr>", this.picker.find(".datetimepicker-days thead").append(e)
        },
        fillMonths: function() {
            for (var t = "", e = new Date(this.viewDate), i = 0; i < 12; i++) {
                e.setUTCMonth(i), t += '<span class="' + this.onRenderMonth(e).join(" ") + '">' + o[this.language].monthsShort[i] + "</span>"
            }
            this.picker.find(".datetimepicker-months td").html(t)
        },
        fill: function() {
            if (this.date && this.viewDate) {
                var e = new Date(this.viewDate),
                    n = e.getUTCFullYear(),
                    r = e.getUTCMonth(),
                    l = e.getUTCDate(),
                    h = e.getUTCHours(),
                    c = this.startDate.getUTCFullYear(),
                    d = this.startDate.getUTCMonth(),
                    u = this.endDate.getUTCFullYear(),
                    p = this.endDate.getUTCMonth() + 1,
                    f = new i(this.date.getUTCFullYear(), this.date.getUTCMonth(), this.date.getUTCDate()).valueOf(),
                    g = new Date;
                if (this.setTitle(".datetimepicker-days", o[this.language].months[r] + " " + n), "time" === this.formatViewType) {
                    var m = this.getFormattedDate();
                    this.setTitle(".datetimepicker-hours", m), this.setTitle(".datetimepicker-minutes", m)
                } else this.setTitle(".datetimepicker-hours", l + " " + o[this.language].months[r] + " " + n), this.setTitle(".datetimepicker-minutes", l + " " + o[this.language].months[r] + " " + n);
                this.picker.find("tfoot th.today").text(o[this.language].today || o.en.today).toggle(!1 !== this.todayBtn), this.picker.find("tfoot th.clear").text(o[this.language].clear || o.en.clear).toggle(!1 !== this.clearBtn), this.updateNavArrows(), this.fillMonths();
                var v = i(n, r - 1, 28, 0, 0, 0, 0),
                    y = a.getDaysInMonth(v.getUTCFullYear(), v.getUTCMonth());
                v.setUTCDate(y), v.setUTCDate(y - (v.getUTCDay() - this.weekStart + 7) % 7);
                var b = new Date(v);
                b.setUTCDate(b.getUTCDate() + 42), b = b.valueOf();
                for (var w, x = []; v.valueOf() < b;) v.getUTCDay() === this.weekStart && x.push("<tr>"), w = this.onRenderDay(v), v.getUTCFullYear() < n || v.getUTCFullYear() === n && v.getUTCMonth() < r ? w.push("old") : (v.getUTCFullYear() > n || v.getUTCFullYear() === n && v.getUTCMonth() > r) && w.push("new"), this.todayHighlight && v.getUTCFullYear() === g.getFullYear() && v.getUTCMonth() === g.getMonth() && v.getUTCDate() === g.getDate() && w.push("today"), v.valueOf() === f && w.push("active"), (v.valueOf() + 864e5 <= this.startDate || v.valueOf() > this.endDate || -1 !== t.inArray(v.getUTCDay(), this.daysOfWeekDisabled) || -1 !== t.inArray(v.toDateString(), this.datesDisabled)) && w.push("disabled"), x.push('<td class="' + w.join(" ") + '">' + v.getUTCDate() + "</td>"), v.getUTCDay() === this.weekEnd && x.push("</tr>"), v.setUTCDate(v.getUTCDate() + 1);
                this.picker.find(".datetimepicker-days tbody").empty().append(x.join("")), x = [];
                var S = "",
                    k = "",
                    D = "",
                    C = this.hoursDisabled || [];
                e = new Date(this.viewDate);
                for (var T = 0; T < 24; T++) {
                    e.setUTCHours(T), w = this.onRenderHour(e), -1 !== C.indexOf(T) && w.push("disabled");
                    var _ = i(n, r, l, T);
                    _.valueOf() + 36e5 <= this.startDate || _.valueOf() > this.endDate ? w.push("disabled") : h === T && w.push("active"), this.showMeridian && 2 === o[this.language].meridiem.length ? ((k = T < 12 ? o[this.language].meridiem[0] : o[this.language].meridiem[1]) !== D && ("" !== D && x.push("</fieldset>"), x.push('<fieldset class="hour"><legend>' + k.toUpperCase() + "</legend>")), D = k, S = T % 12 ? T % 12 : 12, T < 12 ? w.push("hour_am") : w.push("hour_pm"), x.push('<span class="' + w.join(" ") + '">' + S + "</span>"), 23 === T && x.push("</fieldset>")) : (S = T + ":00", x.push('<span class="' + w.join(" ") + '">' + S + "</span>"))
                }
                this.picker.find(".datetimepicker-hours td").html(x.join("")), x = [], S = "", k = "", D = "";
                var M = this.minutesDisabled || [];
                e = new Date(this.viewDate);
                for (T = 0; T < 60; T += this.minuteStep) - 1 === M.indexOf(T) && (e.setUTCMinutes(T), e.setUTCSeconds(0), w = this.onRenderMinute(e), this.showMeridian && 2 === o[this.language].meridiem.length ? ((k = h < 12 ? o[this.language].meridiem[0] : o[this.language].meridiem[1]) !== D && ("" !== D && x.push("</fieldset>"), x.push('<fieldset class="minute"><legend>' + k.toUpperCase() + "</legend>")), D = k, S = h % 12 ? h % 12 : 12, x.push('<span class="' + w.join(" ") + '">' + S + ":" + (T < 10 ? "0" + T : T) + "</span>"), 59 === T && x.push("</fieldset>")) : (S = T + ":00", x.push('<span class="' + w.join(" ") + '">' + h + ":" + (T < 10 ? "0" + T : T) + "</span>")));
                this.picker.find(".datetimepicker-minutes td").html(x.join(""));
                var A = this.date.getUTCFullYear(),
                    P = this.setTitle(".datetimepicker-months", n).end().find(".month").removeClass("active");
                A === n && P.eq(this.date.getUTCMonth()).addClass("active"), (n < c || n > u) && P.addClass("disabled"), n === c && P.slice(0, d).addClass("disabled"), n === u && P.slice(p).addClass("disabled"), x = "", n = 10 * parseInt(n / 10, 10);
                var O = this.setTitle(".datetimepicker-years", n + "-" + (n + 9)).end().find("td");
                n -= 1, e = new Date(this.viewDate);
                for (T = -1; T < 11; T++) e.setUTCFullYear(n), w = this.onRenderYear(e), -1 !== T && 10 !== T || w.push(s), x += '<span class="' + w.join(" ") + '">' + n + "</span>", n += 1;
                O.html(x), this.place()
            }
        },
        updateNavArrows: function() {
            var t = new Date(this.viewDate),
                e = t.getUTCFullYear(),
                i = t.getUTCMonth(),
                n = t.getUTCDate(),
                s = t.getUTCHours();
            switch (this.viewMode) {
                case 0:
                    e <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() && n <= this.startDate.getUTCDate() && s <= this.startDate.getUTCHours() ? this.picker.find(".prev").css({
                        visibility: "hidden"
                    }) : this.picker.find(".prev").css({
                        visibility: "visible"
                    }), e >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() && n >= this.endDate.getUTCDate() && s >= this.endDate.getUTCHours() ? this.picker.find(".next").css({
                        visibility: "hidden"
                    }) : this.picker.find(".next").css({
                        visibility: "visible"
                    });
                    break;
                case 1:
                    e <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() && n <= this.startDate.getUTCDate() ? this.picker.find(".prev").css({
                        visibility: "hidden"
                    }) : this.picker.find(".prev").css({
                        visibility: "visible"
                    }), e >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() && n >= this.endDate.getUTCDate() ? this.picker.find(".next").css({
                        visibility: "hidden"
                    }) : this.picker.find(".next").css({
                        visibility: "visible"
                    });
                    break;
                case 2:
                    e <= this.startDate.getUTCFullYear() && i <= this.startDate.getUTCMonth() ? this.picker.find(".prev").css({
                        visibility: "hidden"
                    }) : this.picker.find(".prev").css({
                        visibility: "visible"
                    }), e >= this.endDate.getUTCFullYear() && i >= this.endDate.getUTCMonth() ? this.picker.find(".next").css({
                        visibility: "hidden"
                    }) : this.picker.find(".next").css({
                        visibility: "visible"
                    });
                    break;
                case 3:
                case 4:
                    e <= this.startDate.getUTCFullYear() ? this.picker.find(".prev").css({
                        visibility: "hidden"
                    }) : this.picker.find(".prev").css({
                        visibility: "visible"
                    }), e >= this.endDate.getUTCFullYear() ? this.picker.find(".next").css({
                        visibility: "hidden"
                    }) : this.picker.find(".next").css({
                        visibility: "visible"
                    })
            }
        },
        mousewheel: function(e) {
            if (e.preventDefault(), e.stopPropagation(), !this.wheelPause) {
                this.wheelPause = !0;
                var i = e.originalEvent.wheelDelta,
                    n = i > 0 ? 1 : 0 === i ? 0 : -1;
                this.wheelViewModeNavigationInverseDirection && (n = -n), this.showMode(n), setTimeout(t.proxy(function() {
                    this.wheelPause = !1
                }, this), this.wheelViewModeNavigationDelay)
            }
        },
        click: function(e) {
            e.stopPropagation(), e.preventDefault();
            var n = t(e.target).closest("span, td, th, legend");
            if (n.is("." + this.icontype) && (n = t(n).parent().closest("span, td, th, legend")), 1 === n.length) {
                if (n.is(".disabled")) return void this.element.trigger({
                    type: "outOfRange",
                    date: this.viewDate,
                    startDate: this.startDate,
                    endDate: this.endDate
                });
                switch (n[0].nodeName.toLowerCase()) {
                    case "th":
                        switch (n[0].className) {
                            case "switch":
                                this.showMode(1);
                                break;
                            case "prev":
                            case "next":
                                var s = a.modes[this.viewMode].navStep * ("prev" === n[0].className ? -1 : 1);
                                switch (this.viewMode) {
                                    case 0:
                                        this.viewDate = this.moveHour(this.viewDate, s);
                                        break;
                                    case 1:
                                        this.viewDate = this.moveDate(this.viewDate, s);
                                        break;
                                    case 2:
                                        this.viewDate = this.moveMonth(this.viewDate, s);
                                        break;
                                    case 3:
                                    case 4:
                                        this.viewDate = this.moveYear(this.viewDate, s)
                                }
                                this.fill(), this.element.trigger({
                                    type: n[0].className + ":" + this.convertViewModeText(this.viewMode),
                                    date: this.viewDate,
                                    startDate: this.startDate,
                                    endDate: this.endDate
                                });
                                break;
                            case "clear":
                                this.reset(), this.autoclose && this.hide();
                                break;
                            case "today":
                                var o = new Date;
                                (o = i(o.getFullYear(), o.getMonth(), o.getDate(), o.getHours(), o.getMinutes(), o.getSeconds(), 0)) < this.startDate ? o = this.startDate : o > this.endDate && (o = this.endDate), this.viewMode = this.startViewMode, this.showMode(0), this._setDate(o), this.fill(), this.autoclose && this.hide()
                        }
                        break;
                    case "span":
                        if (!n.is(".disabled")) {
                            var r = this.viewDate.getUTCFullYear(),
                                l = this.viewDate.getUTCMonth(),
                                h = this.viewDate.getUTCDate(),
                                c = this.viewDate.getUTCHours(),
                                d = this.viewDate.getUTCMinutes(),
                                u = this.viewDate.getUTCSeconds();
                            if (n.is(".month") ? (this.viewDate.setUTCDate(1), l = n.parent().find("span").index(n), h = this.viewDate.getUTCDate(), this.viewDate.setUTCMonth(l), this.element.trigger({
                                    type: "changeMonth",
                                    date: this.viewDate
                                }), this.viewSelect >= 3 && this._setDate(i(r, l, h, c, d, u, 0))) : n.is(".year") ? (this.viewDate.setUTCDate(1), r = parseInt(n.text(), 10) || 0, this.viewDate.setUTCFullYear(r), this.element.trigger({
                                    type: "changeYear",
                                    date: this.viewDate
                                }), this.viewSelect >= 4 && this._setDate(i(r, l, h, c, d, u, 0))) : n.is(".hour") ? (c = parseInt(n.text(), 10) || 0, (n.hasClass("hour_am") || n.hasClass("hour_pm")) && (12 === c && n.hasClass("hour_am") ? c = 0 : 12 !== c && n.hasClass("hour_pm") && (c += 12)), this.viewDate.setUTCHours(c), this.element.trigger({
                                    type: "changeHour",
                                    date: this.viewDate
                                }), this.viewSelect >= 1 && this._setDate(i(r, l, h, c, d, u, 0))) : n.is(".minute") && (d = parseInt(n.text().substr(n.text().indexOf(":") + 1), 10) || 0, this.viewDate.setUTCMinutes(d), this.element.trigger({
                                    type: "changeMinute",
                                    date: this.viewDate
                                }), this.viewSelect >= 0 && this._setDate(i(r, l, h, c, d, u, 0))), 0 !== this.viewMode) {
                                var p = this.viewMode;
                                this.showMode(-1), this.fill(), p === this.viewMode && this.autoclose && this.hide()
                            } else this.fill(), this.autoclose && this.hide()
                        }
                        break;
                    case "td":
                        if (n.is(".day") && !n.is(".disabled")) {
                            h = parseInt(n.text(), 10) || 1, r = this.viewDate.getUTCFullYear(), l = this.viewDate.getUTCMonth(), c = this.viewDate.getUTCHours(), d = this.viewDate.getUTCMinutes(), u = this.viewDate.getUTCSeconds();
                            n.is(".old") ? 0 === l ? (l = 11, r -= 1) : l -= 1 : n.is(".new") && (11 === l ? (l = 0, r += 1) : l += 1), this.viewDate.setUTCFullYear(r), this.viewDate.setUTCMonth(l, h), this.element.trigger({
                                type: "changeDay",
                                date: this.viewDate
                            }), this.viewSelect >= 2 && this._setDate(i(r, l, h, c, d, u, 0))
                        }
                        p = this.viewMode;
                        this.showMode(-1), this.fill(), p === this.viewMode && this.autoclose && this.hide()
                }
            }
        },
        _setDate: function(t, e) {
            var i;
            e && "date" !== e || (this.date = t), e && "view" !== e || (this.viewDate = t), this.fill(), this.setValue(), this.isInput ? i = this.element : this.component && (i = this.element.find("input")), i && i.change(), this.element.trigger({
                type: "changeDate",
                date: this.getDate()
            }), null === t && (this.date = this.viewDate)
        },
        moveMinute: function(t, e) {
            if (!e) return t;
            var i = new Date(t.valueOf());
            return i.setUTCMinutes(i.getUTCMinutes() + e * this.minuteStep), i
        },
        moveHour: function(t, e) {
            if (!e) return t;
            var i = new Date(t.valueOf());
            return i.setUTCHours(i.getUTCHours() + e), i
        },
        moveDate: function(t, e) {
            if (!e) return t;
            var i = new Date(t.valueOf());
            return i.setUTCDate(i.getUTCDate() + e), i
        },
        moveMonth: function(t, e) {
            if (!e) return t;
            var i, n, s = new Date(t.valueOf()),
                o = s.getUTCDate(),
                a = s.getUTCMonth(),
                r = Math.abs(e);
            if (e = e > 0 ? 1 : -1, 1 === r) n = -1 === e ? function() {
                return s.getUTCMonth() === a
            } : function() {
                return s.getUTCMonth() !== i
            }, i = a + e, s.setUTCMonth(i), (i < 0 || i > 11) && (i = (i + 12) % 12);
            else {
                for (var l = 0; l < r; l++) s = this.moveMonth(s, e);
                i = s.getUTCMonth(), s.setUTCDate(o), n = function() {
                    return i !== s.getUTCMonth()
                }
            }
            for (; n();) s.setUTCDate(--o), s.setUTCMonth(i);
            return s
        },
        moveYear: function(t, e) {
            return this.moveMonth(t, 12 * e)
        },
        dateWithinRange: function(t) {
            return t >= this.startDate && t <= this.endDate
        },
        keydown: function(t) {
            if (this.picker.is(":not(:visible)")) 27 === t.keyCode && this.show();
            else {
                var e, i, n, s, o = !1;
                switch (t.keyCode) {
                    case 27:
                        this.hide(), t.preventDefault();
                        break;
                    case 37:
                    case 39:
                        if (!this.keyboardNavigation) break;
                        e = 37 === t.keyCode ? -1 : 1;
                        var a = this.viewMode;
                        t.ctrlKey ? a += 2 : t.shiftKey && (a += 1), 4 === a ? (i = this.moveYear(this.date, e), n = this.moveYear(this.viewDate, e)) : 3 === a ? (i = this.moveMonth(this.date, e), n = this.moveMonth(this.viewDate, e)) : 2 === a ? (i = this.moveDate(this.date, e), n = this.moveDate(this.viewDate, e)) : 1 === a ? (i = this.moveHour(this.date, e), n = this.moveHour(this.viewDate, e)) : 0 === a && (i = this.moveMinute(this.date, e), n = this.moveMinute(this.viewDate, e)), this.dateWithinRange(i) && (this.date = i, this.viewDate = n, this.setValue(), this.update(), t.preventDefault(), o = !0);
                        break;
                    case 38:
                    case 40:
                        if (!this.keyboardNavigation) break;
                        e = 38 === t.keyCode ? -1 : 1, a = this.viewMode, t.ctrlKey ? a += 2 : t.shiftKey && (a += 1), 4 === a ? (i = this.moveYear(this.date, e), n = this.moveYear(this.viewDate, e)) : 3 === a ? (i = this.moveMonth(this.date, e), n = this.moveMonth(this.viewDate, e)) : 2 === a ? (i = this.moveDate(this.date, 7 * e), n = this.moveDate(this.viewDate, 7 * e)) : 1 === a ? this.showMeridian ? (i = this.moveHour(this.date, 6 * e), n = this.moveHour(this.viewDate, 6 * e)) : (i = this.moveHour(this.date, 4 * e), n = this.moveHour(this.viewDate, 4 * e)) : 0 === a && (i = this.moveMinute(this.date, 4 * e), n = this.moveMinute(this.viewDate, 4 * e)), this.dateWithinRange(i) && (this.date = i, this.viewDate = n, this.setValue(), this.update(), t.preventDefault(), o = !0);
                        break;
                    case 13:
                        if (0 !== this.viewMode) {
                            var r = this.viewMode;
                            this.showMode(-1), this.fill(), r === this.viewMode && this.autoclose && this.hide()
                        } else this.fill(), this.autoclose && this.hide();
                        t.preventDefault();
                        break;
                    case 9:
                        this.hide()
                }
                if (o) this.isInput ? s = this.element : this.component && (s = this.element.find("input")), s && s.change(), this.element.trigger({
                    type: "changeDate",
                    date: this.getDate()
                })
            }
        },
        showMode: function(t) {
            if (t) {
                var e = Math.max(0, Math.min(a.modes.length - 1, this.viewMode + t));
                e >= this.minView && e <= this.maxView && (this.element.trigger({
                    type: "changeMode",
                    date: this.viewDate,
                    oldViewMode: this.viewMode,
                    newViewMode: e
                }), this.viewMode = e)
            }
            this.picker.find(">div").hide().filter(".datetimepicker-" + a.modes[this.viewMode].clsName).css("display", "block"), this.updateNavArrows()
        },
        reset: function() {
            this._setDate(null, "date")
        },
        convertViewModeText: function(t) {
            switch (t) {
                case 4:
                    return "decade";
                case 3:
                    return "year";
                case 2:
                    return "month";
                case 1:
                    return "day";
                case 0:
                    return "hour"
            }
        }
    };
    var s = t.fn.datetimepicker;
    t.fn.datetimepicker = function(i) {
        var s, o = Array.apply(null, arguments);
        return o.shift(), this.each(function() {
            var a = t(this),
                r = a.data("datetimepicker"),
                l = "object" == typeof i && i;
            if (r || a.data("datetimepicker", r = new n(this, t.extend({}, t.fn.datetimepicker.defaults, l))), "string" == typeof i && "function" == typeof r[i] && (s = r[i].apply(r, o)) !== e) return !1
        }), s !== e ? s : this
    }, t.fn.datetimepicker.defaults = {}, t.fn.datetimepicker.Constructor = n;
    var o = t.fn.datetimepicker.dates = {
            en: {
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                meridiem: ["am", "pm"],
                suffix: ["st", "nd", "rd", "th"],
                today: "Today",
                clear: "Clear"
            }
        },
        a = {
            modes: [{
                clsName: "minutes",
                navFnc: "Hours",
                navStep: 1
            }, {
                clsName: "hours",
                navFnc: "Date",
                navStep: 1
            }, {
                clsName: "days",
                navFnc: "Month",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "FullYear",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "FullYear",
                navStep: 10
            }],
            isLeapYear: function(t) {
                return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
            },
            getDaysInMonth: function(t, e) {
                return [31, a.isLeapYear(t) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][e]
            },
            getDefaultFormat: function(t, e) {
                if ("standard" === t) return "input" === e ? "yyyy-mm-dd hh:ii" : "yyyy-mm-dd hh:ii:ss";
                if ("php" === t) return "input" === e ? "Y-m-d H:i" : "Y-m-d H:i:s";
                throw new Error("Invalid format type.")
            },
            validParts: function(t) {
                if ("standard" === t) return /t|hh?|HH?|p|P|z|Z|ii?|ss?|dd?|DD?|mm?|MM?|yy(?:yy)?/g;
                if ("php" === t) return /[dDjlNwzFmMnStyYaABgGhHis]/g;
                throw new Error("Invalid format type.")
            },
            nonpunctuation: /[^ -\/:-@\[-`{-~\t\n\rTZ]+/g,
            parseFormat: function(t, e) {
                var i = t.replace(this.validParts(e), "\0").split("\0"),
                    n = t.match(this.validParts(e));
                if (!i || !i.length || !n || 0 === n.length) throw new Error("Invalid date format.");
                return {
                    separators: i,
                    parts: n
                }
            },
            parseDate: function(e, s, a, r, l) {
                if (e instanceof Date) {
                    var h = new Date(e.valueOf() - 6e4 * e.getTimezoneOffset());
                    return h.setMilliseconds(0), h
                }
                if (/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(e) && (s = this.parseFormat("yyyy-mm-dd", r)), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}$/.test(e) && (s = this.parseFormat("yyyy-mm-dd hh:ii", r)), /^\d{4}\-\d{1,2}\-\d{1,2}[T ]\d{1,2}\:\d{1,2}\:\d{1,2}[Z]{0,1}$/.test(e) && (s = this.parseFormat("yyyy-mm-dd hh:ii:ss", r)), /^[-+]\d+[dmwy]([\s,]+[-+]\d+[dmwy])*$/.test(e)) {
                    var c, d = /([-+]\d+)([dmwy])/,
                        u = e.match(/([-+]\d+)([dmwy])/g);
                    e = new Date;
                    for (var p = 0; p < u.length; p++) switch (m = d.exec(u[p]), c = parseInt(m[1]), m[2]) {
                        case "d":
                            e.setUTCDate(e.getUTCDate() + c);
                            break;
                        case "m":
                            e = n.prototype.moveMonth.call(n.prototype, e, c);
                            break;
                        case "w":
                            e.setUTCDate(e.getUTCDate() + 7 * c);
                            break;
                        case "y":
                            e = n.prototype.moveYear.call(n.prototype, e, c)
                    }
                    return i(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), 0)
                }
                u = e && e.toString().match(this.nonpunctuation) || [], e = new Date(0, 0, 0, 0, 0, 0, 0);
                var f, g, m, v = {},
                    y = ["hh", "h", "ii", "i", "ss", "s", "yyyy", "yy", "M", "MM", "m", "mm", "D", "DD", "d", "dd", "H", "HH", "p", "P", "z", "Z"],
                    b = {
                        hh: function(t, e) {
                            return t.setUTCHours(e)
                        },
                        h: function(t, e) {
                            return t.setUTCHours(e)
                        },
                        HH: function(t, e) {
                            return t.setUTCHours(12 === e ? 0 : e)
                        },
                        H: function(t, e) {
                            return t.setUTCHours(12 === e ? 0 : e)
                        },
                        ii: function(t, e) {
                            return t.setUTCMinutes(e)
                        },
                        i: function(t, e) {
                            return t.setUTCMinutes(e)
                        },
                        ss: function(t, e) {
                            return t.setUTCSeconds(e)
                        },
                        s: function(t, e) {
                            return t.setUTCSeconds(e)
                        },
                        yyyy: function(t, e) {
                            return t.setUTCFullYear(e)
                        },
                        yy: function(t, e) {
                            return t.setUTCFullYear(2e3 + e)
                        },
                        m: function(t, e) {
                            for (e -= 1; e < 0;) e += 12;
                            for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) {
                                if (isNaN(t.getUTCMonth())) return t;
                                t.setUTCDate(t.getUTCDate() - 1)
                            }
                            return t
                        },
                        d: function(t, e) {
                            return t.setUTCDate(e)
                        },
                        p: function(t, e) {
                            return t.setUTCHours(1 === e ? t.getUTCHours() + 12 : t.getUTCHours())
                        },
                        z: function() {
                            return l
                        }
                    };
                if (b.M = b.MM = b.mm = b.m, b.dd = b.d, b.P = b.p, b.Z = b.z, e = i(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds()), u.length === s.parts.length) {
                    p = 0;
                    for (var w = s.parts.length; p < w; p++) {
                        if (f = parseInt(u[p], 10), m = s.parts[p], isNaN(f)) switch (m) {
                            case "MM":
                                g = t(o[a].months).filter(function() {
                                    var t = this.slice(0, u[p].length);
                                    return t === u[p].slice(0, t.length)
                                }), f = t.inArray(g[0], o[a].months) + 1;
                                break;
                            case "M":
                                g = t(o[a].monthsShort).filter(function() {
                                    var t = this.slice(0, u[p].length),
                                        e = u[p].slice(0, t.length);
                                    return t.toLowerCase() === e.toLowerCase()
                                }), f = t.inArray(g[0], o[a].monthsShort) + 1;
                                break;
                            case "p":
                            case "P":
                                f = t.inArray(u[p].toLowerCase(), o[a].meridiem)
                        }
                        v[m] = f
                    }
                    var x;
                    for (p = 0; p < y.length; p++)(x = y[p]) in v && !isNaN(v[x]) && b[x](e, v[x])
                }
                return e
            },
            formatDate: function(e, i, n, s, r) {
                if (null === e) return "";
                var l;
                if ("standard" === s) l = {
                    t: e.getTime(),
                    yy: e.getUTCFullYear().toString().substring(2),
                    yyyy: e.getUTCFullYear(),
                    m: e.getUTCMonth() + 1,
                    M: o[n].monthsShort[e.getUTCMonth()],
                    MM: o[n].months[e.getUTCMonth()],
                    d: e.getUTCDate(),
                    D: o[n].daysShort[e.getUTCDay()],
                    DD: o[n].days[e.getUTCDay()],
                    p: 2 === o[n].meridiem.length ? o[n].meridiem[e.getUTCHours() < 12 ? 0 : 1] : "",
                    h: e.getUTCHours(),
                    i: e.getUTCMinutes(),
                    s: e.getUTCSeconds(),
                    z: r
                }, 2 === o[n].meridiem.length ? l.H = l.h % 12 == 0 ? 12 : l.h % 12 : l.H = l.h, l.HH = (l.H < 10 ? "0" : "") + l.H, l.P = l.p.toUpperCase(), l.Z = l.z, l.hh = (l.h < 10 ? "0" : "") + l.h, l.ii = (l.i < 10 ? "0" : "") + l.i, l.ss = (l.s < 10 ? "0" : "") + l.s, l.dd = (l.d < 10 ? "0" : "") + l.d, l.mm = (l.m < 10 ? "0" : "") + l.m;
                else {
                    if ("php" !== s) throw new Error("Invalid format type.");
                    (l = {
                        y: e.getUTCFullYear().toString().substring(2),
                        Y: e.getUTCFullYear(),
                        F: o[n].months[e.getUTCMonth()],
                        M: o[n].monthsShort[e.getUTCMonth()],
                        n: e.getUTCMonth() + 1,
                        t: a.getDaysInMonth(e.getUTCFullYear(), e.getUTCMonth()),
                        j: e.getUTCDate(),
                        l: o[n].days[e.getUTCDay()],
                        D: o[n].daysShort[e.getUTCDay()],
                        w: e.getUTCDay(),
                        N: 0 === e.getUTCDay() ? 7 : e.getUTCDay(),
                        S: e.getUTCDate() % 10 <= o[n].suffix.length ? o[n].suffix[e.getUTCDate() % 10 - 1] : "",
                        a: 2 === o[n].meridiem.length ? o[n].meridiem[e.getUTCHours() < 12 ? 0 : 1] : "",
                        g: e.getUTCHours() % 12 == 0 ? 12 : e.getUTCHours() % 12,
                        G: e.getUTCHours(),
                        i: e.getUTCMinutes(),
                        s: e.getUTCSeconds()
                    }).m = (l.n < 10 ? "0" : "") + l.n, l.d = (l.j < 10 ? "0" : "") + l.j, l.A = l.a.toString().toUpperCase(), l.h = (l.g < 10 ? "0" : "") + l.g, l.H = (l.G < 10 ? "0" : "") + l.G, l.i = (l.i < 10 ? "0" : "") + l.i, l.s = (l.s < 10 ? "0" : "") + l.s
                }
                e = [];
                for (var h = t.extend([], i.separators), c = 0, d = i.parts.length; c < d; c++) h.length && e.push(h.shift()), e.push(l[i.parts[c]]);
                return h.length && e.push(h.shift()), e.join("")
            },
            convertViewMode: function(t) {
                switch (t) {
                    case 4:
                    case "decade":
                        t = 4;
                        break;
                    case 3:
                    case "year":
                        t = 3;
                        break;
                    case 2:
                    case "month":
                        t = 2;
                        break;
                    case 1:
                    case "day":
                        t = 1;
                        break;
                    case 0:
                    case "hour":
                        t = 0
                }
                return t
            },
            headTemplate: '<thead><tr><th class="prev"><i class="{iconType} {leftArrow}"/></th><th colspan="5" class="switch"></th><th class="next"><i class="{iconType} {rightArrow}"/></th></tr></thead>',
            headTemplateV3: '<thead><tr><th class="prev"><span class="{iconType} {leftArrow}"></span> </th><th colspan="5" class="switch"></th><th class="next"><span class="{iconType} {rightArrow}"></span> </th></tr></thead>',
            contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
            footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
        };
    a.template = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + a.headTemplate + a.contTemplate + a.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + a.headTemplate + a.contTemplate + a.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + a.headTemplate + "<tbody></tbody>" + a.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + a.headTemplate + a.contTemplate + a.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + a.headTemplate + a.contTemplate + a.footTemplate + "</table></div></div>", a.templateV3 = '<div class="datetimepicker"><div class="datetimepicker-minutes"><table class=" table-condensed">' + a.headTemplateV3 + a.contTemplate + a.footTemplate + '</table></div><div class="datetimepicker-hours"><table class=" table-condensed">' + a.headTemplateV3 + a.contTemplate + a.footTemplate + '</table></div><div class="datetimepicker-days"><table class=" table-condensed">' + a.headTemplateV3 + "<tbody></tbody>" + a.footTemplate + '</table></div><div class="datetimepicker-months"><table class="table-condensed">' + a.headTemplateV3 + a.contTemplate + a.footTemplate + '</table></div><div class="datetimepicker-years"><table class="table-condensed">' + a.headTemplateV3 + a.contTemplate + a.footTemplate + "</table></div></div>", t.fn.datetimepicker.DPGlobal = a, t.fn.datetimepicker.noConflict = function() {
        return t.fn.datetimepicker = s, this
    }, t(document).on("focus.datetimepicker.data-api click.datetimepicker.data-api", '[data-provide="datetimepicker"]', function(e) {
        var i = t(this);
        i.data("datetimepicker") || (e.preventDefault(), i.datetimepicker("show"))
    }), t(function() {
        t('[data-provide="datetimepicker-inline"]').datetimepicker()
    })
}), jQuery.fn.datetimepicker.dates.bg = {
    days: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота", "Неделя"],
    daysShort: ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб", "Нед"],
    daysMin: ["Н", "П", "В", "С", "Ч", "П", "С", "Н"],
    months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
    monthsShort: ["Ян", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Ное", "Дек"],
    today: "днес",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.cs = {
    days: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"],
    daysShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So", "Ne"],
    daysMin: ["N", "P", "Ú", "St", "Č", "P", "So", "N"],
    months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
    monthsShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čnc", "Srp", "Zář", "Říj", "Lis", "Pro"],
    today: "Dnes",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.da = {
    days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"],
    daysShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"],
    daysMin: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø", "Sø"],
    months: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
    today: "I Dag",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.de = {
    days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"],
    daysShort: ["Son", "Mon", "Die", "Mit", "Don", "Fre", "Sam", "Son"],
    daysMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
    months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    monthsShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    today: "Heute",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.es = {
    days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
    daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"],
    months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    today: "Hoy",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates["fa-IR"] = {
    days: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه", "یکشنبه"],
    daysShort: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه", "یکشنبه"],
    daysMin: ["ش۱ ۱", "۲ ش", "۳ ش", "۴ ش", "۵ ش", "ج", "ش", "۱ ش"],
    months: ["ژانویه", "فوریه", "مارس", "آوریل", "می", "ژوئن", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
    monthsShort: ["ژانویه", "فوریه", "مارس", "آوریل", "می", "ژوئن", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"],
    today: "امروز",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.fi = {
    days: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai", "sunnuntai"],
    daysShort: ["sun", "maa", "tii", "kes", "tor", "per", "lau", "sun"],
    daysMin: ["su", "ma", "ti", "ke", "to", "pe", "la", "su"],
    months: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
    monthsShort: ["tam", "hel", "maa", "huh", "tou", "kes", "hei", "elo", "syy", "lok", "mar", "jou"],
    today: "tänään",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.fo = {
    days: ["Sunnudagur", "Mánadagur", "Týsdagur", "Mikudagur", "Hósdagur", "Fríggjadagur", "Leygardagur", "Sunnudagur"],
    daysShort: ["Sun", "Mán", "Týs", "Mik", "Hós", "Frí", "Ley", "Sun"],
    daysMin: ["Su", "Má", "Tý", "Mi", "Hó", "Fr", "Le", "Su"],
    months: ["Januar", "Februar", "Mars", "Apríl", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
    today: "Í dag",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.fr = {
    days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
    daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    daysMin: ["D", "L", "Ma", "Me", "J", "V", "S", "D"],
    months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    monthsShort: ["Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"],
    today: "Aujourd'hui",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.hr = {
    days: ["Nedjelja", "Ponedjelja", "Utorak", "Srijeda", "Četrtak", "Petak", "Subota", "Nedjelja"],
    daysShort: ["Ned", "Pon", "Uto", "Srr", "Čet", "Pet", "Sub", "Ned"],
    daysMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su", "Ne"],
    months: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
    monthsShort: ["Sije", "Velj", "Ožu", "Tra", "Svi", "Lip", "Jul", "Kol", "Ruj", "Lis", "Stu", "Pro"],
    today: "Danas",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.hu = {
    days: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"],
    daysShort: ["Vas", "Hét", "Ked", "Sze", "Csü", "Pén", "Szo", "Vas"],
    daysMin: ["V", "H", "K", "Sze", "Cs", "P", "Szo", "V"],
    months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
    monthsShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Sze", "Okt", "Nov", "Dec"],
    today: "Ma",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.id = {
    days: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
    daysShort: ["Mgu", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Mgu"],
    daysMin: ["Mg", "Sn", "Sl", "Ra", "Ka", "Ju", "Sa", "Mg"],
    months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"],
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.is = {
    days: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur", "Sunnudagur"],
    daysShort: ["Sun", "Mán", "Þri", "Mið", "Fim", "Fös", "Lau", "Sun"],
    daysMin: ["Su", "Má", "Þr", "Mi", "Fi", "Fö", "La", "Su"],
    months: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maí", "Jún", "Júl", "Ágú", "Sep", "Okt", "Nóv", "Des"],
    today: "Í Dag",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.it = {
    days: ["Domenica", "Lunedi", "Martedi", "Mercoledi", "Giovedi", "Venerdi", "Sabato", "Domenica"],
    daysShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"],
    daysMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa", "Do"],
    months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
    monthsShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
    today: "Oggi",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.ja = {
    days: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜", "日曜"],
    daysShort: ["日", "月", "火", "水", "木", "金", "土", "日"],
    daysMin: ["日", "月", "火", "水", "木", "金", "土", "日"],
    months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    monthsShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.kr = {
    days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"],
    daysShort: ["일", "월", "화", "수", "목", "금", "토", "일"],
    daysMin: ["일", "월", "화", "수", "목", "금", "토", "일"],
    months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    monthsShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.lt = {
    days: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis", "Sekmadienis"],
    daysShort: ["S", "Pr", "A", "T", "K", "Pn", "Š", "S"],
    daysMin: ["Sk", "Pr", "An", "Tr", "Ke", "Pn", "Št", "Sk"],
    months: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
    monthsShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gru"],
    today: "Šiandien",
    weekStart: 1,
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.lv = {
    days: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena", "Svētdiena"],
    daysShort: ["Sv", "P", "O", "T", "C", "Pk", "S", "Sv"],
    daysMin: ["Sv", "Pr", "Ot", "Tr", "Ce", "Pk", "St", "Sv"],
    months: ["Janvāris", "Februāris", "Marts", "Aprīlis", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jūn", "Jūl", "Aug", "Sep", "Okt", "Nov", "Dec."],
    today: "Šodien",
    weekStart: 1,
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.ms = {
    days: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu", "Ahad"],
    daysShort: ["Aha", "Isn", "Sel", "Rab", "Kha", "Jum", "Sab", "Aha"],
    daysMin: ["Ah", "Is", "Se", "Ra", "Kh", "Ju", "Sa", "Ah"],
    months: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ogo", "Sep", "Okt", "Nov", "Dis"],
    today: "Hari Ini",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.nb = {
    days: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"],
    daysShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør", "Søn"],
    daysMin: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø", "Sø"],
    months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
    today: "I Dag",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.nl = {
    days: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"],
    daysShort: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
    daysMin: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],
    months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
    today: "Vandaag",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.pl = {
    days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"],
    daysShort: ["Nie", "Pn", "Wt", "Śr", "Czw", "Pt", "So", "Nie"],
    daysMin: ["N", "Pn", "Wt", "Śr", "Cz", "Pt", "So", "N"],
    months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
    monthsShort: ["Sty", "Lu", "Mar", "Kw", "Maj", "Cze", "Lip", "Sie", "Wrz", "Pa", "Lis", "Gru"],
    today: "Dzisiaj",
    weekStart: 1,
    meridiem: ""
}, jQuery.fn.datetimepicker.dates["pt-BR"] = {
    days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
    daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa", "Do"],
    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    today: "Hoje",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.pt = {
    days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
    daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
    daysMin: ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa", "Do"],
    months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    monthsShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.ro = {
    days: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă", "Duminică"],
    daysShort: ["Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "Sâm", "Dum"],
    daysMin: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ", "Du"],
    months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
    monthsShort: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: "Astăzi",
    weekStart: 1,
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.ru = {
    days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб", "Вск"],
    daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
    monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
    today: "Сегодня",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.sk = {
    days: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota", "Nedeľa"],
    daysShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So", "Ne"],
    daysMin: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So", "Ne"],
    months: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
    today: "Dnes",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.sl = {
    days: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota", "Nedelja"],
    daysShort: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob", "Ned"],
    daysMin: ["Ne", "Po", "To", "Sr", "Če", "Pe", "So", "Ne"],
    months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Avg", "Sep", "Okt", "Nov", "Dec"],
    today: "Danes",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.sr = {
    days: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота", "Недеља"],
    daysShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб", "Нед"],
    daysMin: ["Н", "По", "У", "Ср", "Ч", "Пе", "Су", "Н"],
    months: ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
    monthsShort: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
    today: "Данас",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.sv = {
    days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"],
    daysShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör", "Sön"],
    daysMin: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö", "Sö"],
    months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
    monthsShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
    today: "Idag",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.th = {
    days: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"],
    daysShort: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"],
    daysMin: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส", "อา"],
    months: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
    monthsShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
    today: "วันนี้",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.tr = {
    days: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"],
    daysShort: ["Pz", "Pzt", "Sal", "Çrş", "Prş", "Cu", "Cts", "Pz"],
    daysMin: ["Pz", "Pzt", "Sa", "Çr", "Pr", "Cu", "Ct", "Pz"],
    months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
    monthsShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
    today: "Bugün",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates.uk = {
    days: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"],
    daysShort: ["Нед", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб", "Нед"],
    daysMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
    months: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
    monthsShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
    today: "Сьогодні",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates["zh-CN"] = {
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
    daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    today: "今日",
    meridiem: ""
}, jQuery.fn.datetimepicker.dates["zh-TW"] = {
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
    daysShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthsShort: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    meridiem: ""
},
function(t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], function(t) {
        return e(t)
    }) : "object" == typeof exports ? module.exports = e(require("jquery")) : jQuery && !jQuery.fn.colorpicker && e(jQuery)
}(0, function(t) {
    "use strict";
    var e = function(i, n, s, o, a) {
        this.fallbackValue = s ? s && void 0 !== s.h ? s : this.value = {
            h: 0,
            s: 0,
            b: 0,
            a: 1
        } : null, this.fallbackFormat = o || "rgba", this.hexNumberSignPrefix = !0 === a, this.value = this.fallbackValue, this.origFormat = null, this.predefinedColors = n || {}, this.colors = t.extend({}, e.webColors, this.predefinedColors), i && (void 0 !== i.h ? this.value = i : this.setColor(String(i))), this.value || (this.value = {
            h: 0,
            s: 0,
            b: 0,
            a: 1
        })
    };
    e.webColors = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "00ffff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000000",
        blanchedalmond: "ffebcd",
        blue: "0000ff",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "00ffff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "ff00ff",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgrey: "d3d3d3",
        lightgreen: "90ee90",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "778899",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "00ff00",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "ff00ff",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370d8",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "d87093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        red: "ff0000",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "ffffff",
        whitesmoke: "f5f5f5",
        yellow: "ffff00",
        yellowgreen: "9acd32",
        transparent: "transparent"
    }, e.prototype = {
        constructor: e,
        colors: {},
        predefinedColors: {},
        getValue: function() {
            return this.value
        },
        setValue: function(t) {
            this.value = t
        },
        _sanitizeNumber: function(t) {
            return "number" == typeof t ? t : isNaN(t) || null === t || "" === t || void 0 === t ? 1 : "" === t ? 0 : void 0 !== t.toLowerCase ? (t.match(/^\./) && (t = "0" + t), Math.ceil(100 * parseFloat(t)) / 100) : 1
        },
        isTransparent: function(t) {
            return !(!t || !("string" == typeof t || t instanceof String)) && ("transparent" === (t = t.toLowerCase().trim()) || t.match(/#?00000000/) || t.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/))
        },
        rgbaIsTransparent: function(t) {
            return 0 === t.r && 0 === t.g && 0 === t.b && 0 === t.a
        },
        setColor: function(t) {
            if (t = t.toLowerCase().trim()) {
                if (this.isTransparent(t)) return this.value = {
                    h: 0,
                    s: 0,
                    b: 0,
                    a: 0
                }, !0;
                var e = this.parse(t);
                e ? (this.value = this.value = {
                    h: e.h,
                    s: e.s,
                    b: e.b,
                    a: e.a
                }, this.origFormat || (this.origFormat = e.format)) : this.fallbackValue && (this.value = this.fallbackValue)
            }
            return !1
        },
        setHue: function(t) {
            this.value.h = 1 - t
        },
        setSaturation: function(t) {
            this.value.s = t
        },
        setBrightness: function(t) {
            this.value.b = 1 - t
        },
        setAlpha: function(t) {
            this.value.a = Math.round(parseInt(100 * (1 - t), 10) / 100 * 100) / 100
        },
        toRGB: function(t, e, i, n) {
            var s, o, a, r, l;
            return 0 === arguments.length && (t = this.value.h, e = this.value.s, i = this.value.b, n = this.value.a), t = (t *= 360) % 360 / 60, s = o = a = i - (l = i * e), s += [l, r = l * (1 - Math.abs(t % 2 - 1)), 0, 0, r, l][t = ~~t], o += [r, l, l, r, 0, 0][t], a += [0, 0, r, l, l, r][t], {
                r: Math.round(255 * s),
                g: Math.round(255 * o),
                b: Math.round(255 * a),
                a: n
            }
        },
        toHex: function(t, e, i, n) {
            0 === arguments.length && (t = this.value.h, e = this.value.s, i = this.value.b, n = this.value.a);
            var s = this.toRGB(t, e, i, n);
            return this.rgbaIsTransparent(s) ? "transparent" : (this.hexNumberSignPrefix ? "#" : "") + ((1 << 24) + (parseInt(s.r) << 16) + (parseInt(s.g) << 8) + parseInt(s.b)).toString(16).slice(1)
        },
        toHSL: function(t, e, i, n) {
            0 === arguments.length && (t = this.value.h, e = this.value.s, i = this.value.b, n = this.value.a);
            var s = t,
                o = (2 - e) * i,
                a = e * i;
            return a /= o > 0 && o <= 1 ? o : 2 - o, o /= 2, a > 1 && (a = 1), {
                h: isNaN(s) ? 0 : s,
                s: isNaN(a) ? 0 : a,
                l: isNaN(o) ? 0 : o,
                a: isNaN(n) ? 0 : n
            }
        },
        toAlias: function(t, e, i, n) {
            var s, o = 0 === arguments.length ? this.toHex() : this.toHex(t, e, i, n),
                a = "alias" === this.origFormat ? o : this.toString(this.origFormat, !1);
            for (var r in this.colors)
                if ((s = this.colors[r].toLowerCase().trim()) === o || s === a) return r;
            return !1
        },
        RGBtoHSB: function(t, e, i, n) {
            var s, o, a, r;
            return t /= 255, e /= 255, i /= 255, s = ((s = 0 === (r = (a = Math.max(t, e, i)) - Math.min(t, e, i)) ? null : a === t ? (e - i) / r : a === e ? (i - t) / r + 2 : (t - e) / r + 4) + 360) % 6 * 60 / 360, o = 0 === r ? 0 : r / a, {
                h: this._sanitizeNumber(s),
                s: o,
                b: a,
                a: this._sanitizeNumber(n)
            }
        },
        HueToRGB: function(t, e, i) {
            return i < 0 ? i += 1 : i > 1 && (i -= 1), 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
        },
        HSLtoRGB: function(t, e, i, n) {
            var s;
            e < 0 && (e = 0);
            var o = 2 * i - (s = i <= .5 ? i * (1 + e) : i + e - i * e),
                a = t + 1 / 3,
                r = t,
                l = t - 1 / 3;
            return [Math.round(255 * this.HueToRGB(o, s, a)), Math.round(255 * this.HueToRGB(o, s, r)), Math.round(255 * this.HueToRGB(o, s, l)), this._sanitizeNumber(n)]
        },
        parse: function(e) {
            if (0 === arguments.length) return !1;
            var i, n, s = this,
                o = !1,
                a = void 0 !== this.colors[e];
            return a && (e = this.colors[e].toLowerCase().trim()), t.each(this.stringParsers, function(t, r) {
                var l = r.re.exec(e);
                return !(i = l && r.parse.apply(s, [l])) || (o = {}, n = a ? "alias" : r.format ? r.format : s.getValidFallbackFormat(), (o = n.match(/hsla?/) ? s.RGBtoHSB.apply(s, s.HSLtoRGB.apply(s, i)) : s.RGBtoHSB.apply(s, i)) instanceof Object && (o.format = n), !1)
            }), o
        },
        getValidFallbackFormat: function() {
            var t = ["rgba", "rgb", "hex", "hsla", "hsl"];
            return this.origFormat && -1 !== t.indexOf(this.origFormat) ? this.origFormat : this.fallbackFormat && -1 !== t.indexOf(this.fallbackFormat) ? this.fallbackFormat : "rgba"
        },
        toString: function(t, i) {
            t = t || this.origFormat || this.fallbackFormat, i = i || !1;
            var n = !1;
            switch (t) {
                case "rgb":
                    return n = this.toRGB(), this.rgbaIsTransparent(n) ? "transparent" : "rgb(" + n.r + "," + n.g + "," + n.b + ")";
                case "rgba":
                    return "rgba(" + (n = this.toRGB()).r + "," + n.g + "," + n.b + "," + n.a + ")";
                case "hsl":
                    return n = this.toHSL(), "hsl(" + Math.round(360 * n.h) + "," + Math.round(100 * n.s) + "%," + Math.round(100 * n.l) + "%)";
                case "hsla":
                    return n = this.toHSL(), "hsla(" + Math.round(360 * n.h) + "," + Math.round(100 * n.s) + "%," + Math.round(100 * n.l) + "%," + n.a + ")";
                case "hex":
                    return this.toHex();
                case "alias":
                    return !1 === (n = this.toAlias()) ? this.toString(this.getValidFallbackFormat()) : i && !(n in e.webColors) && n in this.predefinedColors ? this.predefinedColors[n] : n;
                default:
                    return n
            }
        },
        stringParsers: [{
            re: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,
            format: "rgb",
            parse: function(t) {
                return [t[1], t[2], t[3], 1]
            }
        }, {
            re: /rgb\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
            format: "rgb",
            parse: function(t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], 1]
            }
        }, {
            re: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
            format: "rgba",
            parse: function(t) {
                return [t[1], t[2], t[3], t[4]]
            }
        }, {
            re: /rgba\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
            format: "rgba",
            parse: function(t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
        }, {
            re: /hsl\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
            format: "hsl",
            parse: function(t) {
                return [t[1] / 360, t[2] / 100, t[3] / 100, t[4]]
            }
        }, {
            re: /hsla\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
            format: "hsla",
            parse: function(t) {
                return [t[1] / 360, t[2] / 100, t[3] / 100, t[4]]
            }
        }, {
            re: /#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
            format: "hex",
            parse: function(t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), 1]
            }
        }, {
            re: /#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
            format: "hex",
            parse: function(t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16), 1]
            }
        }],
        colorNameToHex: function(t) {
            return void 0 !== this.colors[t.toLowerCase()] && this.colors[t.toLowerCase()]
        }
    };
    var i = {
            horizontal: !1,
            inline: !1,
            color: !1,
            format: !1,
            input: "input",
            container: !1,
            component: ".add-on, .input-group-addon",
            fallbackColor: !1,
            fallbackFormat: "hex",
            hexNumberSignPrefix: !0,
            sliders: {
                saturation: {
                    maxLeft: 100,
                    maxTop: 100,
                    callLeft: "setSaturation",
                    callTop: "setBrightness"
                },
                hue: {
                    maxLeft: 0,
                    maxTop: 100,
                    callLeft: !1,
                    callTop: "setHue"
                },
                alpha: {
                    maxLeft: 0,
                    maxTop: 100,
                    callLeft: !1,
                    callTop: "setAlpha"
                }
            },
            slidersHorz: {
                saturation: {
                    maxLeft: 100,
                    maxTop: 100,
                    callLeft: "setSaturation",
                    callTop: "setBrightness"
                },
                hue: {
                    maxLeft: 100,
                    maxTop: 0,
                    callLeft: "setHue",
                    callTop: !1
                },
                alpha: {
                    maxLeft: 100,
                    maxTop: 0,
                    callLeft: "setAlpha",
                    callTop: !1
                }
            },
            template: '<div class="colorpicker dropdown-menu-map"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div><div class="colorpicker-selectors"></div></div>',
            align: "right",
            customClass: null,
            colorSelectors: null
        },
        n = function(e, n) {
            this.element = t(e).addClass("colorpicker-element"), this.options = t.extend(!0, {}, i, this.element.data(), n), this.component = this.options.component, this.component = !1 !== this.component && this.element.find(this.component), this.component && 0 === this.component.length && (this.component = !1), this.container = !0 === this.options.container ? this.element : this.options.container, this.container = !1 !== this.container && t(this.container), this.input = this.element.is("input") ? this.element : !!this.options.input && this.element.find(this.options.input), this.input && 0 === this.input.length && (this.input = !1), this.color = this.createColor(!1 !== this.options.color ? this.options.color : this.getValue()), this.format = !1 !== this.options.format ? this.options.format : this.color.origFormat, !1 !== this.options.color && (this.updateInput(this.color), this.updateData(this.color));
            var s = this.picker = t(this.options.template);
            if (this.options.customClass && s.addClass(this.options.customClass), this.options.inline ? s.addClass("colorpicker-inline colorpicker-visible") : s.addClass("colorpicker-hidden"), this.options.horizontal && s.addClass("colorpicker-horizontal"), -1 === ["rgba", "hsla", "alias"].indexOf(this.format) && !1 !== this.options.format && "transparent" !== this.getValue() || s.addClass("colorpicker-with-alpha"), "right" === this.options.align && s.addClass("colorpicker-right"), !0 === this.options.inline && s.addClass("colorpicker-no-arrow"), this.options.colorSelectors) {
                var o = this,
                    a = o.picker.find(".colorpicker-selectors");
                a.length > 0 && (t.each(this.options.colorSelectors, function(e, i) {
                    var n = t("<i />").addClass("colorpicker-selectors-color").css("background-color", i).data("class", e).data("alias", e);
                    n.on("mousedown.colorpicker touchstart.colorpicker", function(e) {
                        e.preventDefault(), o.setValue("alias" === o.format ? t(this).data("alias") : t(this).css("background-color"))
                    }), a.append(n)
                }), a.show().addClass("colorpicker-visible"))
            }
            s.on("mousedown.colorpicker touchstart.colorpicker", t.proxy(function(t) {
                t.target === t.currentTarget && t.preventDefault()
            }, this)), s.find(".colorpicker-saturation, .colorpicker-hue, .colorpicker-alpha").on("mousedown.colorpicker touchstart.colorpicker", t.proxy(this.mousedown, this)), s.appendTo(this.container ? this.container : t("body")), !1 !== this.input && (this.input.on({
                "keyup.colorpicker": t.proxy(this.keyup, this)
            }), this.input.on({
                "change.colorpicker": t.proxy(this.change, this)
            }), !1 === this.component && this.element.on({
                "focus.colorpicker": t.proxy(this.show, this)
            }), !1 === this.options.inline && this.element.on({
                "focusout.colorpicker": t.proxy(this.hide, this)
            })), !1 !== this.component && this.component.on({
                "click.colorpicker": t.proxy(this.show, this)
            }), !1 === this.input && !1 === this.component && this.element.on({
                "click.colorpicker": t.proxy(this.show, this)
            }), !1 !== this.input && !1 !== this.component && "color" === this.input.attr("type") && this.input.on({
                "click.colorpicker": t.proxy(this.show, this),
                "focus.colorpicker": t.proxy(this.show, this)
            }), this.update(), t(t.proxy(function() {
                this.element.trigger("create")
            }, this))
        };
    n.Color = e, n.prototype = {
        constructor: n,
        destroy: function() {
            this.picker.remove(), this.element.removeData("colorpicker", "color").off(".colorpicker"), !1 !== this.input && this.input.off(".colorpicker"), !1 !== this.component && this.component.off(".colorpicker"), this.element.removeClass("colorpicker-element"), this.element.trigger({
                type: "destroy"
            })
        },
        reposition: function() {
            if (!1 !== this.options.inline || this.options.container) return !1;
            var t = this.container && this.container[0] !== window.document.body ? "position" : "offset",
                e = this.component || this.element,
                i = e[t]();
            "right" === this.options.align && (i.left -= this.picker.outerWidth() - e.outerWidth()), this.picker.css({
                top: i.top + e.outerHeight(),
                left: i.left
            })
        },
        show: function(e) {
            this.isDisabled() || (this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"), this.reposition(), t(window).on("resize.colorpicker", t.proxy(this.reposition, this)), !e || this.hasInput() && "color" !== this.input.attr("type") || e.stopPropagation && e.preventDefault && (e.stopPropagation(), e.preventDefault()), !this.component && this.input || !1 !== this.options.inline || t(window.document).on({
                "mousedown.colorpicker": t.proxy(this.hide, this)
            }), this.element.trigger({
                type: "showPicker",
                color: this.color
            }))
        },
        hide: function(e) {
            return (void 0 === e || !e.target || !(t(e.currentTarget).parents(".colorpicker").length > 0 || t(e.target).parents(".colorpicker").length > 0)) && (this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"), t(window).off("resize.colorpicker", this.reposition), t(window.document).off({
                "mousedown.colorpicker": this.hide
            }), this.update(), void this.element.trigger({
                type: "hidePicker",
                color: this.color
            }))
        },
        updateData: function(t) {
            return t = t || this.color.toString(this.format, !1), this.element.data("color", t), t
        },
        updateInput: function(t) {
            return t = t || this.color.toString(this.format, !1), !1 !== this.input && (this.input.prop("value", t), this.input.trigger("change")), t
        },
        updatePicker: function(t) {
            void 0 !== t && (this.color = this.createColor(t));
            var e = !1 === this.options.horizontal ? this.options.sliders : this.options.slidersHorz,
                i = this.picker.find("i");
            if (0 !== i.length) return !1 === this.options.horizontal ? (e = this.options.sliders, i.eq(1).css("top", e.hue.maxTop * (1 - this.color.value.h)).end().eq(2).css("top", e.alpha.maxTop * (1 - this.color.value.a))) : (e = this.options.slidersHorz, i.eq(1).css("left", e.hue.maxLeft * (1 - this.color.value.h)).end().eq(2).css("left", e.alpha.maxLeft * (1 - this.color.value.a))), i.eq(0).css({
                top: e.saturation.maxTop - this.color.value.b * e.saturation.maxTop,
                left: this.color.value.s * e.saturation.maxLeft
            }), this.picker.find(".colorpicker-saturation").css("backgroundColor", (this.options.hexNumberSignPrefix ? "" : "#") + this.color.toHex(this.color.value.h, 1, 1, 1)), this.picker.find(".colorpicker-alpha").css("backgroundColor", (this.options.hexNumberSignPrefix ? "" : "#") + this.color.toHex()), this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor", this.color.toString(this.format, !0)), t
        },
        updateComponent: function(t) {
            var e;
            if (e = void 0 !== t ? this.createColor(t) : this.color, !1 !== this.component) {
                var i = this.component.find("i").eq(0);
                i.length > 0 ? i.css({
                    backgroundColor: e.toString(this.format, !0)
                }) : this.component.css({
                    backgroundColor: e.toString(this.format, !0)
                })
            }
            return e.toString(this.format, !1)
        },
        update: function(t) {
            var e;
            return !1 === this.getValue(!1) && !0 !== t || (e = this.updateComponent(), this.updateInput(e), this.updateData(e), this.updatePicker()), e
        },
        setValue: function(t) {
            this.color = this.createColor(t), this.update(!0), this.element.trigger({
                type: "changeColor",
                color: this.color,
                value: t
            })
        },
        createColor: function(t) {
            return new e(t || null, this.options.colorSelectors, this.options.fallbackColor ? this.options.fallbackColor : this.color, this.options.fallbackFormat, this.options.hexNumberSignPrefix)
        },
        getValue: function(t) {
            var e;
            return t = void 0 === t ? this.options.fallbackColor : t, void 0 !== (e = this.hasInput() ? this.input.val() : this.element.data("color")) && "" !== e && null !== e || (e = t), e
        },
        hasInput: function() {
            return !1 !== this.input
        },
        isDisabled: function() {
            return !!this.hasInput() && !0 === this.input.prop("disabled")
        },
        disable: function() {
            return !!this.hasInput() && (this.input.prop("disabled", !0), this.element.trigger({
                type: "disable",
                color: this.color,
                value: this.getValue()
            }), !0)
        },
        enable: function() {
            return !!this.hasInput() && (this.input.prop("disabled", !1), this.element.trigger({
                type: "enable",
                color: this.color,
                value: this.getValue()
            }), !0)
        },
        currentSlider: null,
        mousePointer: {
            left: 0,
            top: 0
        },
        mousedown: function(e) {
            !e.pageX && !e.pageY && e.originalEvent && e.originalEvent.touches && (e.pageX = e.originalEvent.touches[0].pageX, e.pageY = e.originalEvent.touches[0].pageY), e.stopPropagation(), e.preventDefault();
            var i = t(e.target).closest("div"),
                n = this.options.horizontal ? this.options.slidersHorz : this.options.sliders;
            if (!i.is(".colorpicker")) {
                if (i.is(".colorpicker-saturation")) this.currentSlider = t.extend({}, n.saturation);
                else if (i.is(".colorpicker-hue")) this.currentSlider = t.extend({}, n.hue);
                else {
                    if (!i.is(".colorpicker-alpha")) return !1;
                    this.currentSlider = t.extend({}, n.alpha)
                }
                var s = i.offset();
                this.currentSlider.guide = i.find("i")[0].style, this.currentSlider.left = e.pageX - s.left, this.currentSlider.top = e.pageY - s.top, this.mousePointer = {
                    left: e.pageX,
                    top: e.pageY
                }, t(window.document).on({
                    "mousemove.colorpicker": t.proxy(this.mousemove, this),
                    "touchmove.colorpicker": t.proxy(this.mousemove, this),
                    "mouseup.colorpicker": t.proxy(this.mouseup, this),
                    "touchend.colorpicker": t.proxy(this.mouseup, this)
                }).trigger("mousemove")
            }
            return !1
        },
        mousemove: function(t) {
            !t.pageX && !t.pageY && t.originalEvent && t.originalEvent.touches && (t.pageX = t.originalEvent.touches[0].pageX, t.pageY = t.originalEvent.touches[0].pageY), t.stopPropagation(), t.preventDefault();
            var e = Math.max(0, Math.min(this.currentSlider.maxLeft, this.currentSlider.left + ((t.pageX || this.mousePointer.left) - this.mousePointer.left))),
                i = Math.max(0, Math.min(this.currentSlider.maxTop, this.currentSlider.top + ((t.pageY || this.mousePointer.top) - this.mousePointer.top)));
            return this.currentSlider.guide.left = e + "px", this.currentSlider.guide.top = i + "px", this.currentSlider.callLeft && this.color[this.currentSlider.callLeft].call(this.color, e / this.currentSlider.maxLeft), this.currentSlider.callTop && this.color[this.currentSlider.callTop].call(this.color, i / this.currentSlider.maxTop), !1 !== this.options.format || "setAlpha" !== this.currentSlider.callTop && "setAlpha" !== this.currentSlider.callLeft || (1 !== this.color.value.a ? (this.format = "rgba", this.color.origFormat = "rgba") : (this.format = "hex", this.color.origFormat = "hex")), this.update(!0), this.element.trigger({
                type: "changeColor",
                color: this.color
            }), !1
        },
        mouseup: function(e) {
            return e.stopPropagation(), e.preventDefault(), t(window.document).off({
                "mousemove.colorpicker": this.mousemove,
                "touchmove.colorpicker": this.mousemove,
                "mouseup.colorpicker": this.mouseup,
                "touchend.colorpicker": this.mouseup
            }), !1
        },
        change: function(t) {
            this.keyup(t)
        },
        keyup: function(t) {
            38 === t.keyCode ? (this.color.value.a < 1 && (this.color.value.a = Math.round(100 * (this.color.value.a + .01)) / 100), this.update(!0)) : 40 === t.keyCode ? (this.color.value.a > 0 && (this.color.value.a = Math.round(100 * (this.color.value.a - .01)) / 100), this.update(!0)) : (this.color = this.createColor(this.input.val()), this.color.origFormat && !1 === this.options.format && (this.format = this.color.origFormat), !1 !== this.getValue(!1) && (this.updateData(), this.updateComponent(), this.updatePicker())), this.element.trigger({
                type: "changeColor",
                color: this.color,
                value: this.input.val()
            })
        }
    }, t.colorpicker = n, t.fn.colorpicker = function(e) {
        var i = Array.prototype.slice.call(arguments, 1),
            s = 1 === this.length,
            o = null,
            a = this.each(function() {
                var s = t(this),
                    a = s.data("colorpicker");
                a || (a = new n(this, "object" == typeof e ? e : {}), s.data("colorpicker", a)), "string" == typeof e ? t.isFunction(a[e]) ? o = a[e].apply(a, i) : (i.length && (a[e] = i[0]), o = a[e]) : o = s
            });
        return s ? o : a
    }, t.fn.colorpicker.constructor = n
}),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.init(t, e)
    };
    e.prototype = {
        constructor: e,
        init: function(e, i) {
            var n = this;
            this.options = i, this.$element = t(e).delegate('[data-dismiss="modal"]', "click.dismiss.modal", t.proxy(this.hide, this)), this.options.remote && this.$element.find(".modal-body").load(this.options.remote, function() {
                var e = t.Event("loaded");
                n.$element.trigger(e)
            });
            var s = "function" == typeof this.options.manager ? this.options.manager.call(this) : this.options.manager;
            (s = s.appendModal ? s : t(s).modalmanager().data("modalmanager")).appendModal(this)
        },
        toggle: function() {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function() {
            var e = t.Event("show");
            this.isShown || (this.$element.trigger(e), e.isDefaultPrevented() || (this.escape(), this.tab(), this.options.loading && this.loading()))
        },
        hide: function(e) {
            e && e.preventDefault(), e = t.Event("hide"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.tab(), this.isLoading && this.loading(), t(document).off("focusin.modal"), this.$element.removeClass("in").removeClass("animated").removeClass(this.options.attentionAnimation).removeClass("modal-overflow").attr("aria-hidden", !0), t.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
        },
        layout: function() {
            var e = this.options.height ? "height" : "max-height",
                i = this.options.height || this.options.maxHeight;
            if (this.options.width) {
                this.$element.css("width", this.options.width);
                var n = this;
                this.$element.css("margin-left", function() {
                    return /%/gi.test(n.options.width) ? -parseInt(n.options.width) / 2 + "%" : -t(this).width() / 2 + "px"
                })
            } else this.$element.css("width", ""), this.$element.css("margin-left", "");
            this.$element.find(".modal-body").css("overflow", "").css(e, ""), i && this.$element.find(".modal-body").css("overflow", "auto").css(e, i), t(window).height() - 10 < this.$element.height() || this.options.modaloverflow ? this.$element.css("margin-top", 0).addClass("modal-overflow") : this.$element.css("margin-top", 0 - this.$element.height() / 2).removeClass("modal-overflow")
        },
        tab: function() {
            var e = this;
            this.isShown && this.options.consumeTab ? this.$element.on("keydown.tabindex.modal", "[data-tabindex]", function(i) {
                if (i.keyCode && 9 == i.keyCode) {
                    var n = t(this),
                        s = t(this);
                    e.$element.find("[data-tabindex]:enabled:not([readonly])").each(function(e) {
                        n = e.shiftKey ? n.data("tabindex") > t(this).data("tabindex") ? n = t(this) : s = t(this) : n.data("tabindex") < t(this).data("tabindex") ? n = t(this) : s = t(this)
                    }), n[0] !== t(this)[0] ? n.focus() : s.focus(), i.preventDefault()
                }
            }) : this.isShown || this.$element.off("keydown.tabindex.modal")
        },
        escape: function() {
            var t = this;
            this.isShown && this.options.keyboard ? (this.$element.attr("tabindex") || this.$element.attr("tabindex", -1), this.$element.on("keyup.dismiss.modal", function(e) {
                27 == e.which && t.hide()
            })) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function() {
            var e = this,
                i = setTimeout(function() {
                    e.$element.off(t.support.transition.end), e.hideModal()
                }, 500);
            this.$element.one(t.support.transition.end, function() {
                clearTimeout(i), e.hideModal()
            })
        },
        hideModal: function() {
            var t = this.options.height ? "height" : "max-height";
            (this.options.height || this.options.maxHeight) && this.$element.find(".modal-body").css("overflow", "").css(t, ""), this.$element.hide().trigger("hidden")
        },
        removeLoading: function() {
            this.$loading.remove(), this.$loading = null, this.isLoading = !1
        },
        loading: function(e) {
            e = e || function() {};
            var i = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isLoading)
                if (this.isLoading && this.$loading) {
                    this.$loading.removeClass("in");
                    var n = this;
                    t.support.transition && this.$element.hasClass("fade") ? this.$loading.one(t.support.transition.end, function() {
                        n.removeLoading()
                    }) : n.removeLoading()
                } else e && e(this.isLoading);
            else {
                var s = t.support.transition && i;
                this.$loading = t('<div class="loading-mask ' + i + '">').append(this.options.spinner).appendTo(this.$element), s && this.$loading[0].offsetWidth, this.$loading.addClass("in"), this.isLoading = !0, s ? this.$loading.one(t.support.transition.end, e) : e()
            }
        },
        focus: function() {
            var t = this.$element.find(this.options.focusOn);
            (t = t.length ? t : this.$element).focus()
        },
        attention: function() {
            if (this.options.attentionAnimation) {
                this.$element.removeClass("animated").removeClass(this.options.attentionAnimation);
                var t = this;
                setTimeout(function() {
                    t.$element.addClass("animated").addClass(t.options.attentionAnimation)
                }, 0)
            }
            this.focus()
        },
        destroy: function() {
            var e = t.Event("destroy");
            this.$element.trigger(e), e.isDefaultPrevented() || (this.$element.off(".modal").removeData("modal").removeClass("in").attr("aria-hidden", !0), this.$parent !== this.$element.parent() ? this.$element.appendTo(this.$parent) : this.$parent.length || (this.$element.remove(), this.$element = null), this.$element.trigger("destroyed"))
        }
    }, t.fn.modal = function(i, n) {
        return this.each(function() {
            var s = t(this),
                o = s.data("modal"),
                a = t.extend({}, t.fn.modal.defaults, s.data(), "object" == typeof i && i);
            o || s.data("modal", o = new e(this, a)), "string" == typeof i ? o[i].apply(o, [].concat(n)) : a.show && o.show()
        })
    }, t.fn.modal.defaults = {
        keyboard: !0,
        backdrop: !0,
        loading: !1,
        show: !0,
        width: null,
        height: null,
        maxHeight: null,
        modaloverflow: !1,
        consumeTab: !0,
        focusOn: null,
        replace: !1,
        resize: !1,
        attentionAnimation: "shake",
        manager: "body",
        spinner: '<div class="loading-spinner" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div>',
        backdropTemplate: '<div class="modal-backdrop" />'
    }, t.fn.modal.Constructor = e, t(function() {
        t(document).off("click.modal").on("click.modal.data-api", '[data-toggle-map="modal"]', function(e) {
            var i = t(this),
                n = i.attr("href"),
                s = t(i.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, "")),
                o = s.data("modal") ? "toggle" : t.extend({
                    remote: !/#/.test(n) && n
                }, s.data(), i.data());
            e.preventDefault(), s.modal(o).one("hide", function() {
                i.focus()
            })
        })
    })
}(window.jQuery),
function(t) {
    "use strict";
    var e = function(t, e) {
        this.init(t, e)
    };
    e.prototype = {
        constructor: e,
        init: function(e, i) {
            if (this.$element = t(e), this.options = t.extend({}, t.fn.modalmanager.defaults, this.$element.data(), "object" == typeof i && i), this.stack = [], this.backdropCount = 0, this.options.resize) {
                var n, s = this;
                t(window).on("resize.modal", function() {
                    n && clearTimeout(n), n = setTimeout(function() {
                        for (var t = 0; t < s.stack.length; t++) s.stack[t].isShown && s.stack[t].layout()
                    }, 10)
                })
            }
        },
        createModal: function(e, i) {
            t(e).modal(t.extend({
                manager: this
            }, i))
        },
        appendModal: function(e) {
            this.stack.push(e);
            var i = this;
            e.$element.on("show.modalmanager", o(function(n) {
                var s = function() {
                    e.isShown = !0;
                    var n = t.support.transition && e.$element.hasClass("fade");
                    i.$element.toggleClass("modal-open", i.hasOpenModal()).toggleClass("page-overflow", t(window).height() < i.$element.height()), e.$parent = e.$element.parent(), e.$container = i.createContainer(e), e.$element.appendTo(e.$container), i.backdrop(e, function() {
                        e.$element.show(), n && e.$element[0].offsetWidth, e.layout(), e.$element.addClass("in").attr("aria-hidden", !1);
                        var s = function() {
                            i.setFocus(), e.$element.trigger("shown")
                        };
                        n ? e.$element.one(t.support.transition.end, s) : s()
                    })
                };
                e.options.replace ? i.replace(s) : s()
            })), e.$element.on("hidden.modalmanager", o(function(n) {
                if (i.backdrop(e), e.$element.parent().length)
                    if (e.$backdrop) {
                        t.support.transition && e.$element.hasClass("fade") && e.$element[0].offsetWidth, t.support.transition && e.$element.hasClass("fade") ? e.$backdrop.one(t.support.transition.end, function() {
                            e.destroy()
                        }) : e.destroy()
                    } else e.destroy();
                else i.destroyModal(e)
            })), e.$element.on("destroyed.modalmanager", o(function(t) {
                i.destroyModal(e)
            }))
        },
        getOpenModals: function() {
            for (var t = [], e = 0; e < this.stack.length; e++) this.stack[e].isShown && t.push(this.stack[e]);
            return t
        },
        hasOpenModal: function() {
            return this.getOpenModals().length > 0
        },
        setFocus: function() {
            for (var t, e = 0; e < this.stack.length; e++) this.stack[e].isShown && (t = this.stack[e]);
            t && t.focus()
        },
        destroyModal: function(t) {
            t.$element.off(".modalmanager"), t.$backdrop && this.removeBackdrop(t), this.stack.splice(this.getIndexOfModal(t), 1);
            var e = this.hasOpenModal();
            this.$element.toggleClass("modal-open", e), e || this.$element.removeClass("page-overflow"), this.removeContainer(t), this.setFocus()
        },
        getModalAt: function(t) {
            return this.stack[t]
        },
        getIndexOfModal: function(t) {
            for (var e = 0; e < this.stack.length; e++)
                if (t === this.stack[e]) return e
        },
        replace: function(e) {
            for (var i, n = 0; n < this.stack.length; n++) this.stack[n].isShown && (i = this.stack[n]);
            i ? (this.$backdropHandle = i.$backdrop, i.$backdrop = null, e && i.$element.one("hidden", o(t.proxy(e, this))), i.hide()) : e && e()
        },
        removeBackdrop: function(t) {
            t.$backdrop.remove(), t.$backdrop = null
        },
        createBackdrop: function(e, i) {
            var n;
            return this.$backdropHandle ? ((n = this.$backdropHandle).off(".modalmanager"), this.$backdropHandle = null, this.isLoading && this.removeSpinner()) : n = t(i).addClass(e).appendTo(this.$element), n
        },
        removeContainer: function(t) {
            t.$container.remove(), t.$container = null
        },
        createContainer: function(e) {
            var i;
            return i = t('<div class="modal-scrollable">').css("z-index", s("modal", this.getOpenModals().length)).appendTo(this.$element), e && "static" != e.options.backdrop ? i.on("click.modal", o(function(t) {
                e.hide()
            })) : e && i.on("click.modal", o(function(t) {
                e.attention()
            })), i
        },
        backdrop: function(e, i) {
            var n = e.$element.hasClass("fade") ? "fade" : "",
                o = e.options.backdrop && this.backdropCount < this.options.backdropLimit;
            if (e.isShown && o) {
                var a = t.support.transition && n && !this.$backdropHandle;
                e.$backdrop = this.createBackdrop(n, e.options.backdropTemplate), e.$backdrop.css("z-index", s("backdrop", this.getOpenModals().length)), a && e.$backdrop[0].offsetWidth, e.$backdrop.addClass("in"), this.backdropCount += 1, a ? e.$backdrop.one(t.support.transition.end, i) : i()
            } else if (!e.isShown && e.$backdrop) {
                e.$backdrop.removeClass("in"), this.backdropCount -= 1;
                var r = this;
                t.support.transition && e.$element.hasClass("fade") ? e.$backdrop.one(t.support.transition.end, function() {
                    r.removeBackdrop(e)
                }) : r.removeBackdrop(e)
            } else i && i()
        },
        removeSpinner: function() {
            this.$spinner && this.$spinner.remove(), this.$spinner = null, this.isLoading = !1
        },
        removeLoading: function() {
            this.$backdropHandle && this.$backdropHandle.remove(), this.$backdropHandle = null, this.removeSpinner()
        },
        loading: function(e) {
            if (e = e || function() {}, this.$element.toggleClass("modal-open", !this.isLoading || this.hasOpenModal()).toggleClass("page-overflow", t(window).height() < this.$element.height()), this.isLoading)
                if (this.isLoading && this.$backdropHandle) {
                    this.$backdropHandle.removeClass("in");
                    var i = this;
                    t.support.transition ? this.$backdropHandle.one(t.support.transition.end, function() {
                        i.removeLoading()
                    }) : i.removeLoading()
                } else e && e(this.isLoading);
            else {
                this.$backdropHandle = this.createBackdrop("fade", this.options.backdropTemplate), this.$backdropHandle[0].offsetWidth;
                var n = this.getOpenModals();
                this.$backdropHandle.css("z-index", s("backdrop", n.length + 1)).addClass("in");
                var o = t(this.options.spinner).css("z-index", s("modal", n.length + 1)).appendTo(this.$element).addClass("in");
                this.$spinner = t(this.createContainer()).append(o).on("click.modalmanager", t.proxy(this.loading, this)), this.isLoading = !0, t.support.transition ? this.$backdropHandle.one(t.support.transition.end, e) : e()
            }
        }
    };
    var i, n, s = (n = {}, function(e, s) {
        if (void 0 === i) {
            var o = t('<div class="modal hide" />').appendTo("body"),
                a = t('<div class="modal-backdrop hide" />').appendTo("body");
            n.modal = +o.css("z-index"), n.backdrop = +a.css("z-index"), i = n.modal - n.backdrop, o.remove(), a.remove(), a = o = null
        }
        return n[e] + i * s
    });

    function o(t) {
        return function(e) {
            if (e && this === e.target) return t.apply(this, arguments)
        }
    }
    t.fn.modalmanager = function(i, n) {
        return this.each(function() {
            var s = t(this),
                o = s.data("modalmanager");
            o || s.data("modalmanager", o = new e(this, i)), "string" == typeof i && o[i].apply(o, [].concat(n))
        })
    }, t.fn.modalmanager.defaults = {
        backdropLimit: 999,
        resize: !0,
        spinner: '<div class="loading-spinner fade" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div>',
        backdropTemplate: '<div class="modal-backdrop" />'
    }, t.fn.modalmanager.Constructor = e, t(function() {
        t(document).off("show.bs.modal").off("hidden.bs.modal")
    })
}(jQuery),
function(t) {
    t(["jquery"], function(t) {
        return function() {
            var e, i, n = 0,
                s = {
                    error: "error",
                    info: "info",
                    success: "success",
                    warning: "warning"
                },
                o = {
                    clear: function(i) {
                        var n = h();
                        e || l(n);
                        if (i && 0 === t(":focus", i).length) return void i[n.hideMethod]({
                            duration: n.hideDuration,
                            easing: n.hideEasing,
                            complete: function() {
                                c(i)
                            }
                        });
                        e.children().length && e[n.hideMethod]({
                            duration: n.hideDuration,
                            easing: n.hideEasing,
                            complete: function() {
                                e.remove()
                            }
                        })
                    },
                    error: function(t, e, i) {
                        return r({
                            type: s.error,
                            iconClass: h().iconClasses.error,
                            message: t,
                            optionsOverride: i,
                            title: e
                        })
                    },
                    getContainer: l,
                    info: function(t, e, i) {
                        return r({
                            type: s.info,
                            iconClass: h().iconClasses.info,
                            message: t,
                            optionsOverride: i,
                            title: e
                        })
                    },
                    options: {},
                    subscribe: function(t) {
                        i = t
                    },
                    success: function(t, e, i) {
                        return r({
                            type: s.success,
                            iconClass: h().iconClasses.success,
                            message: t,
                            optionsOverride: i,
                            title: e
                        })
                    },
                    version: "2.0.1",
                    warning: function(t, e, i) {
                        return r({
                            type: s.warning,
                            iconClass: h().iconClasses.warning,
                            message: t,
                            optionsOverride: i,
                            title: e
                        })
                    }
                };
            return o;

            function a(t) {
                i && i(t)
            }

            function r(i) {
                var s = h(),
                    o = i.iconClass || s.iconClass;
                void 0 !== i.optionsOverride && (s = t.extend(s, i.optionsOverride), o = i.optionsOverride.iconClass || o), n++, e = l(s);
                var r = null,
                    d = t("<div/>"),
                    u = t("<div/>"),
                    p = t("<div/>"),
                    f = t(s.closeHtml),
                    g = {
                        toastId: n,
                        state: "visible",
                        startTime: new Date,
                        options: s,
                        map: i
                    };
                return i.iconClass && d.addClass(s.toastClass).addClass(o), i.title && (u.append(i.title).addClass(s.titleClass), d.append(u)), i.message && (p.append(i.message).addClass(s.messageClass), d.append(p)), s.closeButton && (f.addClass("toast-close-button"), d.prepend(f)), d.hide(), s.newestOnTop ? e.prepend(d) : e.append(d), d[s.showMethod]({
                    duration: s.showDuration,
                    easing: s.showEasing,
                    complete: s.onShown
                }), s.timeOut > 0 && (r = setTimeout(m, s.timeOut)), d.hover(function() {
                    clearTimeout(r), d.stop(!0, !0)[s.showMethod]({
                        duration: s.showDuration,
                        easing: s.showEasing
                    })
                }, function() {
                    (s.timeOut > 0 || s.extendedTimeOut > 0) && (r = setTimeout(m, s.extendedTimeOut))
                }), !s.onclick && s.tapToDismiss && d.click(m), s.closeButton && f && f.click(function(t) {
                    t.stopPropagation(), m(!0)
                }), s.onclick && d.click(function() {
                    s.onclick(), m()
                }), a(g), s.debug && console && console.log(g), d;

                function m(e) {
                    if (!t(":focus", d).length || e) return d[s.hideMethod]({
                        duration: s.hideDuration,
                        easing: s.hideEasing,
                        complete: function() {
                            c(d), s.onHidden && s.onHidden(), g.state = "hidden", g.endTime = new Date, a(g)
                        }
                    })
                }
            }

            function l(i) {
                return i || (i = h()), (e = t("#" + i.containerId)).length ? e : ((e = t("<div/>").attr("id", i.containerId).addClass(i.positionClass)).appendTo(t(i.target)), e)
            }

            function h() {
                return t.extend({}, {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: void 0,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    target: "body",
                    closeHtml: "<button>&times;</button>",
                    newestOnTop: !0
                }, o.options)
            }

            function c(t) {
                e || (e = l()), t.is(":visible") || (t.remove(), t = null, 0 === e.children().length && e.remove())
            }
        }()
    })
}("function" == typeof define && define.amd ? define : function(t, e) {
    "undefined" != typeof module && module.exports ? module.exports = e(require(t[0])) : window.toastr = e(window.jQuery)
}),
function(t, e) {
    "$:nomunge";
    var i, n = t.jQuery || t.Cowboy || (t.Cowboy = {});
    n.throttle = i = function(t, i, s, o) {
        var a, r = 0;

        function l() {
            var n = this,
                l = +new Date - r,
                h = arguments;

            function c() {
                r = +new Date, s.apply(n, h)
            }
            o && !a && c(), a && clearTimeout(a), o === e && l > t ? c() : !0 !== i && (a = setTimeout(o ? function() {
                a = e
            } : c, o === e ? t - l : t))
        }
        return "boolean" != typeof i && (o = s, s = i, i = e), n.guid && (l.guid = s.guid = s.guid || n.guid++), l
    }, n.debounce = function(t, n, s) {
        return s === e ? i(t, n, !1) : i(t, s, !1 !== n)
    }
}(this), DragSelect.prototype._createBindings = function() {
    this._startUp = this._startUp.bind(this), this._handleMove = this._handleMove.bind(this), this.reset = this.reset.bind(this), this._onClick = this._onClick.bind(this)
}, DragSelect.prototype._setupOptions = function(t) {
    if (this.selectables = [], this._handleSelectables(this.toArray(t.selectables)), this.multiSelectKeys = t.multiSelectKeys || ["ctrlKey", "shiftKey", "metaKey"], this.multiSelectMode = t.multiSelectMode || !1, this.autoScrollSpeed = t.autoScrollSpeed || 1, this.selectCallback = t.onElementSelect || function() {}, this.unselectCallback = t.onElementUnselect || function() {}, this.moveStartCallback = t.onDragStart || function() {}, this.moveCallback = t.onDragMove || function() {}, this.callback = t.callback || function() {}, this.area = t.area || document, this.customStyles = t.customStyles, this.currentValue = null, this.area !== document) {
        var e = getComputedStyle(this.area);
        "absolute" === e.position || "relative" === e.position || "fixed" === e.position || (this.area.style.position = "relative")
    }
    this.selector = t.selector || this._createSelector(), this.addClass(this.selector, "ds-selector")
}, DragSelect.prototype._handleSelectables = function(t, e, i) {
    for (var n = 0; n < t.length; n++) {
        var s = t[n],
            o = this.selectables.indexOf(s);
        o < 0 && !e ? (this.addClass(s, "ds-selectable"), s.addEventListener("click", this._onClick), this.selectables.push(s), i && this.selected.indexOf(s) < 0 && (this.addClass(s, "ds-selected"), this.selected.push(s))) : -1 < o && e && (this.removeClass(s, "ds-hover"), this.removeClass(s, "ds-selectable"), s.removeEventListener("click", this._onClick), this.selectables.splice(o, 1), i && -1 < this.selected.indexOf(s) && (this.removeClass(s, "ds-selected"), this.selected.splice(this.selected.indexOf(s), 1)))
    }
}, DragSelect.prototype._onClick = function(t) {
    if (!this.mouseInteraction && !this.isRightClick(t)) {
        var e = t.target;
        this.isMultiSelectKeyPressed(t) ? this._prevSelected = this.selected.slice() : this._prevSelected = [], this.checkIfInsideSelection(!0), -1 < this.selectables.indexOf(e) && this.toggle(e), this.reset()
    }
}, DragSelect.prototype._createSelector = function() {
    var t = document.createElement("div");
    return t.style.position = "absolute", this.customStyles || (t.style.background = "rgba(0, 0, 255, 0.1)", t.style.border = "1px solid rgba(0, 0, 255, 0.45)", t.style.display = "none", t.style.pointerEvents = "none"), (this.area === document ? document.body : this.area).appendChild(t), t
}, DragSelect.prototype.start = function() {
    this.area.addEventListener("mousedown", this._startUp)
}, DragSelect.prototype._startUp = function(t) {
    if (!this.isRightClick(t)) {
        if (this.mouseInteraction = !0, this.selector.style.display = "block", this.isMultiSelectKeyPressed(t) ? this._prevSelected = this.selected.slice() : this._prevSelected = [], this._getStartingPositions(t), this.checkIfInsideSelection(!0), this.selector.style.display = "none", this.moveStartCallback(t), this._breaked) return !1;
        this.area.removeEventListener("mousedown", this._startUp), this.area.addEventListener("mousemove", this._handleMove), document.addEventListener("mouseup", this.reset)
    }
}, DragSelect.prototype.isMultiSelectKeyPressed = function(t) {
    if (this.multiSelectKeyPressed = !1, this.multiSelectMode) this.multiSelectKeyPressed = !0;
    else
        for (var e = 0; e < this.multiSelectKeys.length; e++) t[this.multiSelectKeys[e]] && (this.multiSelectKeyPressed = !0);
    return this.multiSelectKeyPressed
}, DragSelect.prototype._getStartingPositions = function(t) {
    this.initialCursorPos = this.newCursorPos = this._getCursorPos(t, this.area), this.initialScroll = this.getScroll(this.area);
    var e = {};
    e.x = this.initialCursorPos.x + this.initialScroll.x, e.y = this.initialCursorPos.y + this.initialScroll.y, e.w = 0, e.h = 0, this.updatePos(this.selector, e)
}, DragSelect.prototype._handleMove = function(t) {
    var e = this.getPosition(t);
    if (this.moveCallback(t), this._breaked) return !1;
    this.selector.style.display = "block", this.updatePos(this.selector, e), this.checkIfInsideSelection(), this._autoScroll(t)
}, DragSelect.prototype.getPosition = function(t) {
    var e = this._getCursorPos(t, this.area),
        i = this.getScroll(this.area);
    this.newCursorPos = e;
    var n = i.x - this.initialScroll.x,
        s = i.y - this.initialScroll.y,
        o = {};
    return e.x > this.initialCursorPos.x - n ? (o.x = this.initialCursorPos.x + this.initialScroll.x, o.w = e.x - this.initialCursorPos.x + n) : (o.x = e.x + i.x, o.w = this.initialCursorPos.x - e.x - n), e.y > this.initialCursorPos.y - s ? (o.y = this.initialCursorPos.y + this.initialScroll.y, o.h = e.y - this.initialCursorPos.y + s) : (o.y = e.y + i.y, o.h = this.initialCursorPos.y - e.y - s), o
}, DragSelect.prototype.checkIfInsideSelection = function(t) {
    for (var e = !1, i = 0, n = this.selectables.length; i < n; i++) {
        var s = this.selectables[i];
        this.isElementTouching(s, this.selector, this.area) ? (this._handleSelection(s, t), e = !0) : this._handleUnselection(s, t)
    }
    return e
}, DragSelect.prototype._handleSelection = function(t, e) {
    if (this.hasClass(t, "ds-hover") && !e) return !1;
    var i = this.selected.indexOf(t);
    null === this.currentValue && (this.currentValue = i < 0), e ? i < 0 ? this.select(t) : -1 < i && this.multiSelectKeyPressed && this.unselect(t) : this.currentValue ? this.select(t) : this.unselect(t), this.addClass(t, "ds-hover")
}, DragSelect.prototype._handleUnselection = function(t, e) {
    if (!this.hasClass(t, "ds-hover") && !e) return !1;
    var i = this.selected.indexOf(t),
        n = this._prevSelected.indexOf(t); - 1 < i && n < 0 ? this.unselect(t) : i < 0 && -1 < n && this.select(t), this.removeClass(t, "ds-hover")
}, DragSelect.prototype.select = function(t) {
    return !(-1 < this.selected.indexOf(t)) && (this.selected.push(t), this.addClass(t, "ds-selected"), this.selectCallback(t), !this._breaked && t)
}, DragSelect.prototype.unselect = function(t) {
    return !(this.selected.indexOf(t) < 0) && (this.selected.splice(this.selected.indexOf(t), 1), this.removeClass(t, "ds-selected"), this.unselectCallback(t), !this._breaked && t)
}, DragSelect.prototype.toggle = function(t) {
    return -1 < this.selected.indexOf(t) ? this.unselect(t) : this.select(t), t
}, DragSelect.prototype.isElementTouching = function(t, e, i) {
    var n = this.getScroll(i),
        s = e.getBoundingClientRect().top + n.y,
        o = e.getBoundingClientRect().left + n.x,
        a = e.offsetHeight || t.getBoundingClientRect().height,
        r = e.offsetWidth || t.getBoundingClientRect().width,
        l = t.getBoundingClientRect().top + n.y,
        h = t.getBoundingClientRect().left + n.x,
        c = t.offsetHeight || t.getBoundingClientRect().height;
    return o < h + (t.offsetWidth || t.getBoundingClientRect().width) && h < o + r && s < l + c && l < a + s
}, DragSelect.prototype._autoScroll = function(t) {
    var e = this.isCursorNearEdge(t, this.area),
        i = this.area === document ? this.area.body : this.area;
    "top" === e && 0 < i.scrollTop ? i.scrollTop -= 1 * this.autoScrollSpeed : "bottom" === e ? i.scrollTop += 1 * this.autoScrollSpeed : "left" === e && 0 < i.scrollLeft ? i.scrollLeft -= 1 * this.autoScrollSpeed : "right" === e && (i.scrollLeft += 1 * this.autoScrollSpeed)
}, DragSelect.prototype.isCursorNearEdge = function(t, e) {
    var i = this._getCursorPos(t, e),
        n = this.getAreaRect(e),
        s = Math.max(n.width / 10, 30),
        o = Math.max(n.height / 10, 30);
    return i.y < o ? "top" : n.height - i.y < o ? "bottom" : n.width - i.x < s ? "right" : i.x < s && "left"
}, DragSelect.prototype.reset = function(t) {
    if (this.previousCursorPos = this._getCursorPos(t, this.area), document.removeEventListener("mouseup", this.reset), this.area.removeEventListener("mousemove", this._handleMove), this.area.addEventListener("mousedown", this._startUp), this.callback(this.selected, t), this._breaked) return !1;
    this.selector.style.width = "0", this.selector.style.height = "0", this.selector.style.display = "none", setTimeout(function() {
        this.mouseInteraction = !1
    }.bind(this), 100), this.currentValue = null
}, DragSelect.prototype.break = function() {
    this._breaked = !0, setTimeout(function() {
        this._breaked = !1
    }.bind(this), 100)
}, DragSelect.prototype.stop = function() {
    this.reset(), this.area.removeEventListener("mousedown", this._startUp), document.removeEventListener("mouseup", this.reset)
}, DragSelect.prototype.getSelection = function() {
    return this.selected
}, DragSelect.prototype.getCursorPos = function(t, e, i) {
    if (!t) return !1;
    var n = e || !1 !== e && this.area,
        s = this._getCursorPos(t, n),
        o = i ? {
            x: 0,
            y: 0
        } : this.getScroll(n);
    return {
        x: s.x + o.x,
        y: s.y + o.y
    }
}, DragSelect.prototype.addSelection = function(t, e, i) {
    for (var n = this.toArray(t), s = 0, o = n.length; s < o; s++) {
        var a = n[s];
        this.select(a)
    }
    return i || this.addSelectables(n), e && this.callback(this.selected, !1), this.selected
}, DragSelect.prototype.removeSelection = function(t, e, i) {
    for (var n = this.toArray(t), s = 0, o = n.length; s < o; s++) {
        var a = n[s];
        this.unselect(a)
    }
    return i && this.removeSelectables(n), e && this.callback(this.selected, !1), this.selected
}, DragSelect.prototype.toggleSelection = function(t, e, i) {
    for (var n = this.toArray(t), s = 0, o = n.length; s < o; s++) {
        var a = n[s];
        this.selected.indexOf(a) < 0 ? this.addSelection(a, e, i) : this.removeSelection(a, e, i)
    }
    return this.selected
}, DragSelect.prototype.setSelection = function(t, e, i) {
    return this.clearSelection(), this.addSelection(t, e, i), this.selected
}, DragSelect.prototype.clearSelection = function(t) {
    for (var e = this.selected.slice(), i = 0, n = e.length; i < n; i++) {
        var s = e[i];
        this.unselect(s)
    }
    return t && this.callback(this.selected, !1), this.selected
}, DragSelect.prototype.addSelectables = function(t, e) {
    var i = this.toArray(t);
    return this._handleSelectables(i, !1, e), t
}, DragSelect.prototype.getSelectables = function() {
    return this.selectables
}, DragSelect.prototype.removeSelectables = function(t, e) {
    var i = this.toArray(t);
    return this._handleSelectables(i, !0, e), t
}, DragSelect.prototype.isRightClick = function(t) {
    if (!t) return !1;
    var e = !1;
    return "which" in t ? e = 3 === t.which : "button" in t && (e = 2 === t.button), e
}, DragSelect.prototype.addClass = function(t, e) {
    if (t.classList) return t.classList.add(e);
    var i = t.getAttribute("class") || "";
    return -1 !== i.indexOf(e) || ("" !== i && (e = " " + e), t.setAttribute("class", i + e)), t
}, DragSelect.prototype.removeClass = function(t, e) {
    if (t.classList) return t.classList.remove(e);
    var i = t.getAttribute("class") || "",
        n = new RegExp(e + "\\b", "g");
    return i = i.replace(n, ""), t.setAttribute("class", i), t
}, DragSelect.prototype.hasClass = function(t, e) {
    return t.classList ? t.classList.contains(e) : -1 < (t.getAttribute("class") || "").indexOf(e)
}, DragSelect.prototype.toArray = function(t) {
    if (!t) return !1;
    if (!t.length && this.isElement(t)) return [t];
    for (var e = [], i = t.length - 1; 0 <= i; i--) e[i] = t[i];
    return e
}, DragSelect.prototype.isElement = function(t) {
    try {
        return t instanceof HTMLElement || t instanceof SVGElement
    } catch (e) {
        return "object" == typeof t && 1 === t.nodeType && "object" == typeof t.style && "object" == typeof t.ownerDocument
    }
}, DragSelect.prototype._getCursorPos = function(t, e) {
    if (!t) return {
        x: 0,
        y: 0
    };
    var i = t.pageX || t.clientX,
        n = t.pageY || t.clientY,
        s = this.getAreaRect(e || document),
        o = this.getScroll();
    return {
        x: i - s.left - o.x,
        y: n - s.top - o.y
    }
}, DragSelect.prototype.getInitialCursorPosition = function() {
    return this.initialCursorPos
}, DragSelect.prototype.getCurrentCursorPosition = function() {
    return this.newCursorPos
}, DragSelect.prototype.getPreviousCursorPosition = function() {
    return this.previousCursorPos
}, DragSelect.prototype.getCursorPositionDifference = function(t) {
    var e = this.getCurrentCursorPosition(),
        i = t ? this.getPreviousCursorPosition() : this.getInitialCursorPosition();
    return {
        x: e.x - i.x,
        y: e.y - i.y
    }
}, DragSelect.prototype.getScroll = function(t) {
    var e = {
        top: 0 < document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop,
        left: 0 < document.body.scrollLeft ? document.body.scrollLeft : document.documentElement.scrollLeft
    };
    return {
        y: t && 0 <= t.scrollTop ? t.scrollTop : e.top,
        x: t && 0 <= t.scrollLeft ? t.scrollLeft : e.left
    }
}, DragSelect.prototype.getAreaRect = function(t) {
    if (t === document) {
        var e = {
            y: 0 < t.documentElement.clientHeight ? t.documentElement.clientHeight : window.innerHeight,
            x: 0 < t.documentElement.clientWidth ? t.documentElement.clientWidth : window.innerWidth
        };
        return {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: e.x,
            height: e.y
        }
    }
    return {
        top: t.getBoundingClientRect().top,
        left: t.getBoundingClientRect().left,
        bottom: t.getBoundingClientRect().bottom,
        right: t.getBoundingClientRect().right,
        width: t.offsetWidth,
        height: t.offsetHeight
    }
}, DragSelect.prototype.updatePos = function(t, e) {
    return t.style.left = e.x + "px", t.style.top = e.y + "px", t.style.width = e.w + "px", t.style.height = e.h + "px", t
}, "undefined" != typeof module && null !== module ? module.exports = DragSelect : "undefined" != typeof define && "function" == typeof define && define ? define(function() {
    return DragSelect
}) : window.DragSelect = DragSelect,
function(t, e, i) {
    var n = function(n) {
        function s(t) {
            var e, i, o = {};
            n.each(t, function(n) {
                (e = n.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(e[1] + " ") && (i = n.replace(e[0], e[2].toLowerCase()), o[i] = n, "o" === e[1] && s(t[n]))
            }), t._hungarianMap = o
        }

        function o(t, e, a) {
            var r;
            t._hungarianMap || s(t), n.each(e, function(s) {
                (r = t._hungarianMap[s]) === i || !a && e[r] !== i || ("o" === r.charAt(0) ? (e[r] || (e[r] = {}), n.extend(!0, e[r], e[s]), o(t[r], e[r], a)) : e[r] = e[s])
            })
        }

        function a(t) {
            var e = Vt.defaults.oLanguage,
                i = t.sZeroRecords;
            !t.sEmptyTable && i && "No data available in table" === e.sEmptyTable && Et(t, t, "sZeroRecords", "sEmptyTable"), !t.sLoadingRecords && i && "Loading..." === e.sLoadingRecords && Et(t, t, "sZeroRecords", "sLoadingRecords"), t.sInfoThousands && (t.sThousands = t.sInfoThousands), (t = t.sDecimal) && Jt(t)
        }

        function r(t) {
            if (fe(t, "ordering", "bSort"), fe(t, "orderMulti", "bSortMulti"), fe(t, "orderClasses", "bSortClasses"), fe(t, "orderCellsTop", "bSortCellsTop"), fe(t, "order", "aaSorting"), fe(t, "orderFixed", "aaSortingFixed"), fe(t, "paging", "bPaginate"), fe(t, "pagingType", "sPaginationType"), fe(t, "pageLength", "iDisplayLength"), fe(t, "searching", "bFilter"), t = t.aoSearchCols)
                for (var e = 0, i = t.length; e < i; e++) t[e] && o(Vt.models.oSearch, t[e])
        }

        function l(t) {
            fe(t, "orderable", "bSortable"), fe(t, "orderData", "aDataSort"), fe(t, "orderSequence", "asSorting"), fe(t, "orderDataType", "sortDataType");
            var e = t.aDataSort;
            e && !n.isArray(e) && (t.aDataSort = [e])
        }

        function h(t) {
            t = t.oBrowser;
            var e = n("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: 1,
                    width: 1,
                    overflow: "hidden"
                }).append(n("<div/>").css({
                    position: "absolute",
                    top: 1,
                    left: 1,
                    width: 100,
                    overflow: "scroll"
                }).append(n('<div class="test"/>').css({
                    width: "100%",
                    height: 10
                }))).appendTo("body"),
                i = e.find(".test");
            t.bScrollOversize = 100 === i[0].offsetWidth, t.bScrollbarLeft = 1 !== Math.round(i.offset().left), e.remove()
        }

        function c(t, e, n, s, o, a) {
            var r, l = !1;
            for (n !== i && (r = n, l = !0); s !== o;) t.hasOwnProperty(s) && (r = l ? e(r, t[s], s, t) : t[s], l = !0, s += a);
            return r
        }

        function d(t, i) {
            var s = Vt.defaults.column,
                o = t.aoColumns.length;
            s = n.extend({}, Vt.models.oColumn, s, {
                nTh: i || e.createElement("th"),
                sTitle: s.sTitle ? s.sTitle : i ? i.innerHTML : "",
                aDataSort: s.aDataSort ? s.aDataSort : [o],
                mData: s.mData ? s.mData : o,
                idx: o
            });
            t.aoColumns.push(s), (s = t.aoPreSearchCols)[o] = n.extend({}, Vt.models.oSearch, s[o]), u(t, o, n(i).data())
        }

        function u(t, e, s) {
            e = t.aoColumns[e];
            var a = t.oClasses,
                r = n(e.nTh);
            if (!e.sWidthOrig) {
                e.sWidthOrig = r.attr("width") || null;
                var h = (r.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
                h && (e.sWidthOrig = h[1])
            }
            s !== i && null !== s && (l(s), o(Vt.defaults.column, s), s.mDataProp !== i && !s.mData && (s.mData = s.mDataProp), s.sType && (e._sManualType = s.sType), s.className && !s.sClass && (s.sClass = s.className), n.extend(e, s), Et(e, s, "sWidth", "sWidthOrig"), s.iDataSort !== i && (e.aDataSort = [s.iDataSort]), Et(e, s, "aDataSort"));
            var c = e.mData,
                d = C(c),
                u = e.mRender ? C(e.mRender) : null;
            s = function(t) {
                return "string" == typeof t && -1 !== t.indexOf("@")
            };
            e._bAttrSrc = n.isPlainObject(c) && (s(c.sort) || s(c.type) || s(c.filter)), e.fnGetData = function(t, e, n) {
                var s = d(t, e, i, n);
                return u && e ? u(s, e, t, n) : s
            }, e.fnSetData = function(t, e, i) {
                return T(c)(t, e, i)
            }, "number" != typeof c && (t._rowReadObject = !0), t.oFeatures.bSort || (e.bSortable = !1, r.addClass(a.sSortableNone)), t = -1 !== n.inArray("asc", e.asSorting), s = -1 !== n.inArray("desc", e.asSorting), e.bSortable && (t || s) ? t && !s ? (e.sSortingClass = a.sSortableAsc, e.sSortingClassJUI = a.sSortJUIAscAllowed) : !t && s ? (e.sSortingClass = a.sSortableDesc, e.sSortingClassJUI = a.sSortJUIDescAllowed) : (e.sSortingClass = a.sSortable, e.sSortingClassJUI = a.sSortJUI) : (e.sSortingClass = a.sSortableNone, e.sSortingClassJUI = "")
        }

        function p(t) {
            if (!1 !== t.oFeatures.bAutoWidth) {
                var e = t.aoColumns;
                mt(t);
                for (var i = 0, n = e.length; i < n; i++) e[i].nTh.style.width = e[i].sWidth
            }("" !== (e = t.oScroll).sY || "" !== e.sX) && ft(t), zt(t, null, "column-sizing", [t])
        }

        function f(t, e) {
            var i = v(t, "bVisible");
            return "number" == typeof i[e] ? i[e] : null
        }

        function g(t, e) {
            var i = v(t, "bVisible");
            return -1 !== (i = n.inArray(e, i)) ? i : null
        }

        function m(t) {
            return v(t, "bVisible").length
        }

        function v(t, e) {
            var i = [];
            return n.map(t.aoColumns, function(t, n) {
                t[e] && i.push(n)
            }), i
        }

        function y(t) {
            var e, n, s, o, a, r, l, h, c, d = t.aoColumns,
                u = t.aoData,
                p = Vt.ext.type.detect;
            for (e = 0, n = d.length; e < n; e++)
                if (c = [], !(l = d[e]).sType && l._sManualType) l.sType = l._sManualType;
                else if (!l.sType) {
                for (s = 0, o = p.length; s < o; s++) {
                    for (a = 0, r = u.length; a < r && (c[a] === i && (c[a] = S(t, a, e, "type")), (h = p[s](c[a], t)) || s === p.length - 1) && "html" !== h; a++);
                    if (h) {
                        l.sType = h;
                        break
                    }
                }
                l.sType || (l.sType = "string")
            }
        }

        function b(t, e, s, o) {
            var a, r, l, h, c, u, p = t.aoColumns;
            if (e)
                for (a = e.length - 1; 0 <= a; a--) {
                    var f = (u = e[a]).targets !== i ? u.targets : u.aTargets;
                    for (n.isArray(f) || (f = [f]), r = 0, l = f.length; r < l; r++)
                        if ("number" == typeof f[r] && 0 <= f[r]) {
                            for (; p.length <= f[r];) d(t);
                            o(f[r], u)
                        } else if ("number" == typeof f[r] && 0 > f[r]) o(p.length + f[r], u);
                    else if ("string" == typeof f[r])
                        for (h = 0, c = p.length; h < c; h++)("_all" == f[r] || n(p[h].nTh).hasClass(f[r])) && o(h, u)
                }
            if (s)
                for (a = 0, t = s.length; a < t; a++) o(a, s[a])
        }

        function w(t, e, i, s) {
            var o = t.aoData.length;
            (a = n.extend(!0, {}, Vt.models.oRow, {
                src: i ? "dom" : "data"
            }))._aData = e, t.aoData.push(a);
            for (var a = 0, r = (e = t.aoColumns).length; a < r; a++) i && k(t, o, a, S(t, o, a)), e[a].sType = null;
            return t.aiDisplayMaster.push(o), (i || !t.oFeatures.bDeferRender) && I(t, o, i, s), o
        }

        function x(t, e) {
            var i;
            return e instanceof n || (e = n(e)), e.map(function(e, n) {
                return i = O(t, n), w(t, i.data, n, i.cells)
            })
        }

        function S(t, e, n, s) {
            var o = t.iDraw,
                a = t.aoColumns[n],
                r = t.aoData[e]._aData,
                l = a.sDefaultContent;
            if ((n = a.fnGetData(r, s, {
                    settings: t,
                    row: e,
                    col: n
                })) === i) return t.iDrawError != o && null === l && ($t(t, 0, "Requested unknown parameter " + ("function" == typeof a.mData ? "{function}" : "'" + a.mData + "'") + " for row " + e, 4), t.iDrawError = o), l;
            if (n !== r && null !== n || null === l) {
                if ("function" == typeof n) return n.call(r)
            } else n = l;
            return null === n && "display" == s ? "" : n
        }

        function k(t, e, i, n) {
            t.aoColumns[i].fnSetData(t.aoData[e]._aData, n, {
                settings: t,
                row: e,
                col: i
            })
        }

        function D(t) {
            return n.map(t.match(/(\\.|[^\.])+/g), function(t) {
                return t.replace(/\\./g, ".")
            })
        }

        function C(t) {
            if (n.isPlainObject(t)) {
                var e = {};
                return n.each(t, function(t, i) {
                        i && (e[t] = C(i))
                    }),
                    function(t, n, s, o) {
                        var a = e[n] || e._;
                        return a !== i ? a(t, n, s, o) : t
                    }
            }
            if (null === t) return function(t) {
                return t
            };
            if ("function" == typeof t) return function(e, i, n, s) {
                return t(e, i, n, s)
            };
            if ("string" == typeof t && (-1 !== t.indexOf(".") || -1 !== t.indexOf("[") || -1 !== t.indexOf("("))) {
                var s = function(t, e, n) {
                    var o, a;
                    if ("" !== n)
                        for (var r = 0, l = (a = D(n)).length; r < l; r++) {
                            if (n = a[r].match(ge), o = a[r].match(me), n) {
                                for (a[r] = a[r].replace(ge, ""), "" !== a[r] && (t = t[a[r]]), o = [], a.splice(0, r + 1), a = a.join("."), r = 0, l = t.length; r < l; r++) o.push(s(t[r], e, a));
                                t = "" === (t = n[0].substring(1, n[0].length - 1)) ? o : o.join(t);
                                break
                            }
                            if (o) a[r] = a[r].replace(me, ""), t = t[a[r]]();
                            else {
                                if (null === t || t[a[r]] === i) return i;
                                t = t[a[r]]
                            }
                        }
                    return t
                };
                return function(e, i) {
                    return s(e, i, t)
                }
            }
            return function(e) {
                return e[t]
            }
        }

        function T(t) {
            if (n.isPlainObject(t)) return T(t._);
            if (null === t) return function() {};
            if ("function" == typeof t) return function(e, i, n) {
                t(e, "set", i, n)
            };
            if ("string" == typeof t && (-1 !== t.indexOf(".") || -1 !== t.indexOf("[") || -1 !== t.indexOf("("))) {
                var e = function(t, n, s) {
                    var o;
                    o = (s = D(s))[s.length - 1];
                    for (var a, r, l = 0, h = s.length - 1; l < h; l++) {
                        if (a = s[l].match(ge), r = s[l].match(me), a) {
                            for (s[l] = s[l].replace(ge, ""), t[s[l]] = [], (o = s.slice()).splice(0, l + 1), a = o.join("."), r = 0, h = n.length; r < h; r++) e(o = {}, n[r], a), t[s[l]].push(o);
                            return
                        }
                        r && (s[l] = s[l].replace(me, ""), t = t[s[l]](n)), null !== t[s[l]] && t[s[l]] !== i || (t[s[l]] = {}), t = t[s[l]]
                    }
                    o.match(me) ? t[o.replace(me, "")](n) : t[o.replace(ge, "")] = n
                };
                return function(i, n) {
                    return e(i, n, t)
                }
            }
            return function(e, i) {
                e[t] = i
            }
        }

        function _(t) {
            return he(t.aoData, "_aData")
        }

        function M(t) {
            t.aoData.length = 0, t.aiDisplayMaster.length = 0, t.aiDisplay.length = 0
        }

        function A(t, e, n) {
            for (var s = -1, o = 0, a = t.length; o < a; o++) t[o] == e ? s = o : t[o] > e && t[o]--; - 1 != s && n === i && t.splice(s, 1)
        }

        function P(t, e, n, s) {
            var o, a = t.aoData[e],
                r = function(i, n) {
                    for (; i.childNodes.length;) i.removeChild(i.firstChild);
                    i.innerHTML = S(t, e, n, "display")
                };
            if ("dom" !== n && (n && "auto" !== n || "dom" !== a.src)) {
                var l = a.anCells;
                if (l)
                    if (s !== i) r(l[s], s);
                    else
                        for (n = 0, o = l.length; n < o; n++) r(l[n], n)
            } else a._aData = O(t, a, s, s === i ? i : a._aData).data;
            if (a._aSortData = null, a._aFilterData = null, r = t.aoColumns, s !== i) r[s].sType = null;
            else {
                for (n = 0, o = r.length; n < o; n++) r[n].sType = null;
                N(a)
            }
        }

        function O(t, e, s, o) {
            var a, r, l = [],
                h = e.firstChild,
                c = 0,
                d = t.aoColumns,
                u = t._rowReadObject,
                p = (o = o || u ? {} : [], function(t, e) {
                    if ("string" == typeof t) {
                        var i = t.indexOf("@"); - 1 !== i && (i = t.substring(i + 1), T(t)(o, e.getAttribute(i)))
                    }
                });
            t = function(t) {
                s !== i && s !== c || (a = d[c], r = n.trim(t.innerHTML), a && a._bAttrSrc ? (T(a.mData._)(o, r), p(a.mData.sort, t), p(a.mData.type, t), p(a.mData.filter, t)) : u ? (a._setter || (a._setter = T(a.mData)), a._setter(o, r)) : o[c] = r), c++
            };
            if (h)
                for (; h;) "TD" != (e = h.nodeName.toUpperCase()) && "TH" != e || (t(h), l.push(h)), h = h.nextSibling;
            else
                for (h = 0, e = (l = e.anCells).length; h < e; h++) t(l[h]);
            return {
                data: o,
                cells: l
            }
        }

        function I(t, i, n, s) {
            var o, a, r, l, h, c = t.aoData[i],
                d = c._aData,
                u = [];
            if (null === c.nTr) {
                for (o = n || e.createElement("tr"), c.nTr = o, c.anCells = u, o._DT_RowIndex = i, N(c), l = 0, h = t.aoColumns.length; l < h; l++) r = t.aoColumns[l], a = n ? s[l] : e.createElement(r.sCellType), u.push(a), n && !r.mRender && r.mData === l || (a.innerHTML = S(t, i, l, "display")), r.sClass && (a.className += " " + r.sClass), r.bVisible && !n ? o.appendChild(a) : !r.bVisible && n && a.parentNode.removeChild(a), r.fnCreatedCell && r.fnCreatedCell.call(t.oInstance, a, S(t, i, l), d, i, l);
                zt(t, "aoRowCreatedCallback", null, [o, d, i])
            }
            c.nTr.setAttribute("role", "row")
        }

        function N(t) {
            var e = t.nTr,
                i = t._aData;
            if (e) {
                if (i.DT_RowId && (e.id = i.DT_RowId), i.DT_RowClass) {
                    var s = i.DT_RowClass.split(" ");
                    t.__rowc = t.__rowc ? pe(t.__rowc.concat(s)) : s, n(e).removeClass(t.__rowc.join(" ")).addClass(i.DT_RowClass)
                }
                i.DT_RowAttr && n(e).attr(i.DT_RowAttr), i.DT_RowData && n(e).data(i.DT_RowData)
            }
        }

        function $(t) {
            var e, i, s, o, a, r = t.nTHead,
                l = t.nTFoot,
                h = 0 === n("th, td", r).length,
                c = t.oClasses,
                d = t.aoColumns;
            for (h && (o = n("<tr/>").appendTo(r)), e = 0, i = d.length; e < i; e++) a = d[e], s = n(a.nTh).addClass(a.sClass), h && s.appendTo(o), t.oFeatures.bSort && (s.addClass(a.sSortingClass), !1 !== a.bSortable && (s.attr("tabindex", t.iTabIndex).attr("aria-controls", t.sTableId), Mt(t, a.nTh, e))), a.sTitle != s.html() && s.html(a.sTitle), Rt(t, "header")(t, s, a, c);
            if (h && z(t.aoHeader, r), n(r).find(">tr").attr("role", "row"), n(r).find(">tr>th, >tr>td").addClass(c.sHeaderTH), n(l).find(">tr>th, >tr>td").addClass(c.sFooterTH), null !== l)
                for (e = 0, i = (t = t.aoFooter[0]).length; e < i; e++)(a = d[e]).nTf = t[e].cell, a.sClass && n(a.nTf).addClass(a.sClass)
        }

        function E(t, e, s) {
            var o, a, r, l, h = [],
                c = [],
                d = t.aoColumns.length;
            if (e) {
                for (s === i && (s = !1), o = 0, a = e.length; o < a; o++) {
                    for (h[o] = e[o].slice(), h[o].nTr = e[o].nTr, r = d - 1; 0 <= r; r--) !t.aoColumns[r].bVisible && !s && h[o].splice(r, 1);
                    c.push([])
                }
                for (o = 0, a = h.length; o < a; o++) {
                    if (t = h[o].nTr)
                        for (; r = t.firstChild;) t.removeChild(r);
                    for (r = 0, e = h[o].length; r < e; r++)
                        if (l = d = 1, c[o][r] === i) {
                            for (t.appendChild(h[o][r].cell), c[o][r] = 1; h[o + d] !== i && h[o][r].cell == h[o + d][r].cell;) c[o + d][r] = 1, d++;
                            for (; h[o][r + l] !== i && h[o][r].cell == h[o][r + l].cell;) {
                                for (s = 0; s < d; s++) c[o + s][r + l] = 1;
                                l++
                            }
                            n(h[o][r].cell).attr("rowspan", d).attr("colspan", l)
                        }
                }
            }
        }

        function F(t) {
            var e = zt(t, "aoPreDrawCallback", "preDraw", [t]);
            if (-1 !== n.inArray(!1, e)) ut(t, !1);
            else {
                e = [];
                var s = 0,
                    o = t.asStripeClasses,
                    a = o.length,
                    r = t.oLanguage,
                    l = t.iInitDisplayStart,
                    h = "ssp" == Wt(t),
                    c = t.aiDisplay;
                t.bDrawing = !0, l !== i && -1 !== l && (t._iDisplayStart = h ? l : l >= t.fnRecordsDisplay() ? 0 : l, t.iInitDisplayStart = -1);
                l = t._iDisplayStart;
                var d = t.fnDisplayEnd();
                if (t.bDeferLoading) t.bDeferLoading = !1, t.iDraw++, ut(t, !1);
                else if (h) {
                    if (!t.bDestroying && !W(t)) return
                } else t.iDraw++;
                if (0 !== c.length)
                    for (r = h ? t.aoData.length : d, h = h ? 0 : l; h < r; h++) {
                        var u = c[h],
                            p = t.aoData[u];
                        if (null === p.nTr && I(t, u), u = p.nTr, 0 !== a) {
                            var f = o[s % a];
                            p._sRowStripe != f && (n(u).removeClass(p._sRowStripe).addClass(f), p._sRowStripe = f)
                        }
                        zt(t, "aoRowCallback", null, [u, p._aData, s, h]), e.push(u), s++
                    } else s = r.sZeroRecords, 1 == t.iDraw && "ajax" == Wt(t) ? s = r.sLoadingRecords : r.sEmptyTable && 0 === t.fnRecordsTotal() && (s = r.sEmptyTable), e[0] = n("<tr/>", {
                        class: a ? o[0] : ""
                    }).append(n("<td />", {
                        valign: "top",
                        colSpan: m(t),
                        class: t.oClasses.sRowEmpty
                    }).html(s))[0];
                zt(t, "aoHeaderCallback", "header", [n(t.nTHead).children("tr")[0], _(t), l, d, c]), zt(t, "aoFooterCallback", "footer", [n(t.nTFoot).children("tr")[0], _(t), l, d, c]), (o = n(t.nTBody)).children().detach(), o.append(n(e)), zt(t, "aoDrawCallback", "draw", [t]), t.bSorted = !1, t.bFiltered = !1, t.bDrawing = !1
            }
        }

        function j(t, e) {
            var i = t.oFeatures,
                n = i.bFilter;
            i.bSort && Ct(t), n ? q(t, t.oPreviousSearch) : t.aiDisplay = t.aiDisplayMaster.slice(), !0 !== e && (t._iDisplayStart = 0), t._drawHold = e, F(t), t._drawHold = !1
        }

        function L(t) {
            var e = t.oClasses,
                i = n(t.nTable),
                s = (i = n("<div/>").insertBefore(i), t.oFeatures),
                o = n("<div/>", {
                    id: t.sTableId + "_wrapper",
                    class: e.sWrapper + (t.nTFoot ? "" : " " + e.sNoFooter)
                });
            t.nHolding = i[0], t.nTableWrapper = o[0], t.nTableReinsertBefore = t.nTable.nextSibling;
            for (var a, r, l, h, c, d, u = t.sDom.split(""), p = 0; p < u.length; p++) {
                if (a = null, "<" == (r = u[p])) {
                    if (l = n("<div/>")[0], "'" == (h = u[p + 1]) || '"' == h) {
                        for (c = "", d = 2; u[p + d] != h;) c += u[p + d], d++;
                        "H" == c ? c = e.sJUIHeader : "F" == c && (c = e.sJUIFooter), -1 != c.indexOf(".") ? (h = c.split("."), l.id = h[0].substr(1, h[0].length - 1), l.className = h[1]) : "#" == c.charAt(0) ? l.id = c.substr(1, c.length - 1) : l.className = c, p += d
                    }
                    o.append(l), o = n(l)
                } else if (">" == r) o = o.parent();
                else if ("l" == r && s.bPaginate && s.bLengthChange) a = lt(t);
                else if ("f" == r && s.bFilter) a = V(t);
                else if ("r" == r && s.bProcessing) a = dt(t);
                else if ("t" == r) a = pt(t);
                else if ("i" == r && s.bInfo) a = it(t);
                else if ("p" == r && s.bPaginate) a = ht(t);
                else if (0 !== Vt.ext.feature.length)
                    for (d = 0, h = (l = Vt.ext.feature).length; d < h; d++)
                        if (r == l[d].cFeature) {
                            a = l[d].fnInit(t);
                            break
                        } a && ((l = t.aanFeatures)[r] || (l[r] = []), l[r].push(a), o.append(a))
            }
            i.replaceWith(o)
        }

        function z(t, e) {
            var i, s, o, a, r, l, h, c, d, u, p = n(e).children("tr");
            for (t.splice(0, t.length), o = 0, l = p.length; o < l; o++) t.push([]);
            for (o = 0, l = p.length; o < l; o++)
                for (s = (i = p[o]).firstChild; s;) {
                    if ("TD" == s.nodeName.toUpperCase() || "TH" == s.nodeName.toUpperCase()) {
                        for (c = 1 * s.getAttribute("colspan"), d = 1 * s.getAttribute("rowspan"), c = c && 0 !== c && 1 !== c ? c : 1, d = d && 0 !== d && 1 !== d ? d : 1, a = 0, r = t[o]; r[a];) a++;
                        for (h = a, u = 1 === c, r = 0; r < c; r++)
                            for (a = 0; a < d; a++) t[o + a][h + r] = {
                                cell: s,
                                unique: u
                            }, t[o + a].nTr = i
                    }
                    s = s.nextSibling
                }
        }

        function H(t, e, i) {
            var n = [];
            i || (i = t.aoHeader, e && z(i = [], e));
            e = 0;
            for (var s = i.length; e < s; e++)
                for (var o = 0, a = i[e].length; o < a; o++) !i[e][o].unique || n[o] && t.bSortCellsTop || (n[o] = i[e][o].cell);
            return n
        }

        function R(t, e, i) {
            if (zt(t, "aoServerParams", "serverParams", [e]), e && n.isArray(e)) {
                var s = {},
                    o = /(.*?)\[\]$/;
                n.each(e, function(t, e) {
                    var i = e.name.match(o);
                    i ? (i = i[0], s[i] || (s[i] = []), s[i].push(e.value)) : s[e.name] = e.value
                }), e = s
            }
            var a, r = t.ajax,
                l = t.oInstance,
                h = function(e) {
                    zt(t, null, "xhr", [t, e, t.jqXHR]), i(e)
                };
            if (n.isPlainObject(r) && r.data) {
                a = r.data;
                var c = n.isFunction(a) ? a(e, t) : a;
                e = n.isFunction(a) && c ? c : n.extend(!0, e, c);
                delete r.data
            }
            c = {
                data: e,
                success: function(e) {
                    var i = e.error || e.sError;
                    i && $t(t, 0, i), t.json = e, h(e)
                },
                dataType: "json",
                cache: !1,
                type: t.sServerMethod,
                error: function(e, i) {
                    var s = zt(t, null, "xhr", [t, null, t.jqXHR]); - 1 === n.inArray(!0, s) && ("parsererror" == i ? $t(t, 0, "Invalid JSON response", 1) : 4 === e.readyState && $t(t, 0, "Ajax error", 7)), ut(t, !1)
                }
            }, t.oAjaxData = e, zt(t, null, "preXhr", [t, e]), t.fnServerData ? t.fnServerData.call(l, t.sAjaxSource, n.map(e, function(t, e) {
                return {
                    name: e,
                    value: t
                }
            }), h, t) : t.sAjaxSource || "string" == typeof r ? t.jqXHR = n.ajax(n.extend(c, {
                url: r || t.sAjaxSource
            })) : n.isFunction(r) ? t.jqXHR = r.call(l, e, h, t) : (t.jqXHR = n.ajax(n.extend(c, r)), r.data = a)
        }

        function W(t) {
            return !t.bAjaxDataGet || (t.iDraw++, ut(t, !0), R(t, U(t), function(e) {
                J(t, e)
            }), !1)
        }

        function U(t) {
            var e, i, s, o, a = t.aoColumns,
                r = a.length,
                l = t.oFeatures,
                h = t.oPreviousSearch,
                c = t.aoPreSearchCols,
                d = [],
                u = Dt(t);
            e = t._iDisplayStart, i = !1 !== l.bPaginate ? t._iDisplayLength : -1;
            var p = function(t, e) {
                d.push({
                    name: t,
                    value: e
                })
            };
            p("sEcho", t.iDraw), p("iColumns", r), p("sColumns", he(a, "sName").join(",")), p("iDisplayStart", e), p("iDisplayLength", i);
            var f = {
                draw: t.iDraw,
                columns: [],
                order: [],
                start: e,
                length: i,
                search: {
                    value: h.sSearch,
                    regex: h.bRegex
                }
            };
            for (e = 0; e < r; e++) s = a[e], o = c[e], i = "function" == typeof s.mData ? "function" : s.mData, f.columns.push({
                data: i,
                name: s.sName,
                searchable: s.bSearchable,
                orderable: s.bSortable,
                search: {
                    value: o.sSearch,
                    regex: o.bRegex
                }
            }), p("mDataProp_" + e, i), l.bFilter && (p("sSearch_" + e, o.sSearch), p("bRegex_" + e, o.bRegex), p("bSearchable_" + e, s.bSearchable)), l.bSort && p("bSortable_" + e, s.bSortable);
            return l.bFilter && (p("sSearch", h.sSearch), p("bRegex", h.bRegex)), l.bSort && (n.each(u, function(t, e) {
                f.order.push({
                    column: e.col,
                    dir: e.dir
                }), p("iSortCol_" + t, e.col), p("sSortDir_" + t, e.dir)
            }), p("iSortingCols", u.length)), null === (a = Vt.ext.legacy.ajax) ? t.sAjaxSource ? d : f : a ? d : f
        }

        function J(t, e) {
            var n = B(t, e),
                s = e.sEcho !== i ? e.sEcho : e.draw,
                o = e.iTotalRecords !== i ? e.iTotalRecords : e.recordsTotal,
                a = e.iTotalDisplayRecords !== i ? e.iTotalDisplayRecords : e.recordsFiltered;
            if (s) {
                if (1 * s < t.iDraw) return;
                t.iDraw = 1 * s
            }
            for (M(t), t._iRecordsTotal = parseInt(o, 10), t._iRecordsDisplay = parseInt(a, 10), s = 0, o = n.length; s < o; s++) w(t, n[s]);
            t.aiDisplay = t.aiDisplayMaster.slice(), t.bAjaxDataGet = !1, F(t), t._bInitComplete || at(t, e), t.bAjaxDataGet = !0, ut(t, !1)
        }

        function B(t, e) {
            var s = n.isPlainObject(t.ajax) && t.ajax.dataSrc !== i ? t.ajax.dataSrc : t.sAjaxDataProp;
            return "data" === s ? e.aaData || e[s] : "" !== s ? C(s)(e) : e
        }

        function V(t) {
            var i = t.oClasses,
                s = t.sTableId,
                o = t.oLanguage,
                a = t.oPreviousSearch,
                r = t.aanFeatures,
                l = '<input type="search" class="' + i.sFilterInput + '"/>',
                h = (h = o.sSearch).match(/_INPUT_/) ? h.replace("_INPUT_", l) : h + l,
                c = (i = n("<div/>", {
                    id: r.f ? null : s + "_filter",
                    class: i.sFilter
                }).append(n("<label/>").append(h)), r = function() {
                    var e = this.value ? this.value : "";
                    e != a.sSearch && (q(t, {
                        sSearch: e,
                        bRegex: a.bRegex,
                        bSmart: a.bSmart,
                        bCaseInsensitive: a.bCaseInsensitive
                    }), t._iDisplayStart = 0, F(t))
                }, l = null !== t.searchDelay ? t.searchDelay : "ssp" === Wt(t) ? 400 : 0, n("input", i).val(a.sSearch).attr("placeholder", o.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT", l ? vt(r, l) : r).bind("keypress.DT", function(t) {
                    if (13 == t.keyCode) return !1
                }).attr("aria-controls", s));
            return n(t.nTable).on("search.dt.DT", function(i, n) {
                if (t === n) try {
                    c[0] !== e.activeElement && c.val(a.sSearch)
                } catch (t) {}
            }), i[0]
        }

        function q(t, e, n) {
            var s = t.oPreviousSearch,
                o = t.aoPreSearchCols,
                a = function(t) {
                    s.sSearch = t.sSearch, s.bRegex = t.bRegex, s.bSmart = t.bSmart, s.bCaseInsensitive = t.bCaseInsensitive
                };
            if (y(t), "ssp" != Wt(t)) {
                for (Q(t, e.sSearch, n, e.bEscapeRegex !== i ? !e.bEscapeRegex : e.bRegex, e.bSmart, e.bCaseInsensitive), a(e), e = 0; e < o.length; e++) G(t, o[e].sSearch, e, o[e].bEscapeRegex !== i ? !o[e].bEscapeRegex : o[e].bRegex, o[e].bSmart, o[e].bCaseInsensitive);
                Y(t)
            } else a(e);
            t.bFiltered = !0, zt(t, null, "search", [t])
        }

        function Y(t) {
            for (var e, i, n = Vt.ext.search, s = t.aiDisplay, o = 0, a = n.length; o < a; o++) {
                for (var r = [], l = 0, h = s.length; l < h; l++) i = s[l], e = t.aoData[i], n[o](t, e._aFilterData, i, e._aData, l) && r.push(i);
                s.length = 0, s.push.apply(s, r)
            }
        }

        function G(t, e, i, n, s, o) {
            if ("" !== e) {
                var a = t.aiDisplay;
                for (n = X(e, n, s, o), s = a.length - 1; 0 <= s; s--) e = t.aoData[a[s]]._aFilterData[i], n.test(e) || a.splice(s, 1)
            }
        }

        function Q(t, e, i, n, s, o) {
            var a;
            n = X(e, n, s, o), s = t.oPreviousSearch.sSearch, o = t.aiDisplayMaster;
            if (0 !== Vt.ext.search.length && (i = !0), a = Z(t), 0 >= e.length) t.aiDisplay = o.slice();
            else
                for ((a || i || s.length > e.length || 0 !== e.indexOf(s) || t.bSorted) && (t.aiDisplay = o.slice()), i = (e = t.aiDisplay).length - 1; 0 <= i; i--) n.test(t.aoData[e[i]]._sFilterRow) || e.splice(i, 1)
        }

        function X(t, e, i, s) {
            return t = e ? t : K(t), i && (t = "^(?=.*?" + n.map(t.match(/"[^"]+"|[^ ]+/g) || [""], function(t) {
                if ('"' === t.charAt(0)) {
                    var e = t.match(/^"(.*)"$/);
                    t = e ? e[1] : t
                }
                return t.replace('"', "")
            }).join(")(?=.*?") + ").*$"), RegExp(t, s ? "i" : "")
        }

        function K(t) {
            return t.replace(ie, "\\$1")
        }

        function Z(t) {
            var e, i, n, s, o, a, r, l, h = t.aoColumns,
                c = Vt.ext.type.search;
            for (e = !1, i = 0, s = t.aoData.length; i < s; i++)
                if (!(l = t.aoData[i])._aFilterData) {
                    for (a = [], n = 0, o = h.length; n < o; n++)(e = h[n]).bSearchable ? (r = S(t, i, n, "filter"), c[e.sType] && (r = c[e.sType](r)), null === r && (r = ""), "string" != typeof r && r.toString && (r = r.toString())) : r = "", r.indexOf && -1 !== r.indexOf("&") && (ve.innerHTML = r, r = ye ? ve.textContent : ve.innerText), r.replace && (r = r.replace(/[\r\n]/g, "")), a.push(r);
                    l._aFilterData = a, l._sFilterRow = a.join("  "), e = !0
                } return e
        }

        function tt(t) {
            return {
                search: t.sSearch,
                smart: t.bSmart,
                regex: t.bRegex,
                caseInsensitive: t.bCaseInsensitive
            }
        }

        function et(t) {
            return {
                sSearch: t.search,
                bSmart: t.smart,
                bRegex: t.regex,
                bCaseInsensitive: t.caseInsensitive
            }
        }

        function it(t) {
            var e = t.sTableId,
                i = t.aanFeatures.i,
                s = n("<div/>", {
                    class: t.oClasses.sInfo,
                    id: i ? null : e + "_info"
                });
            return i || (t.aoDrawCallback.push({
                fn: nt,
                sName: "information"
            }), s.attr("role", "status").attr("aria-live", "polite"), n(t.nTable).attr("aria-describedby", e + "_info")), s[0]
        }

        function nt(t) {
            var e = t.aanFeatures.i;
            if (0 !== e.length) {
                var i = t.oLanguage,
                    s = t._iDisplayStart + 1,
                    o = t.fnDisplayEnd(),
                    a = t.fnRecordsTotal(),
                    r = t.fnRecordsDisplay(),
                    l = r ? i.sInfo : i.sInfoEmpty;
                r !== a && (l += " " + i.sInfoFiltered), l = st(t, l += i.sInfoPostFix), null !== (i = i.fnInfoCallback) && (l = i.call(t.oInstance, t, s, o, a, r, l)), n(e).html(l)
            }
        }

        function st(t, e) {
            var i = t.fnFormatNumber,
                n = t._iDisplayStart + 1,
                s = t._iDisplayLength,
                o = t.fnRecordsDisplay(),
                a = -1 === s;
            return e.replace(/_START_/g, i.call(t, n)).replace(/_END_/g, i.call(t, t.fnDisplayEnd())).replace(/_MAX_/g, i.call(t, t.fnRecordsTotal())).replace(/_TOTAL_/g, i.call(t, o)).replace(/_PAGE_/g, i.call(t, a ? 1 : Math.ceil(n / s))).replace(/_PAGES_/g, i.call(t, a ? 1 : Math.ceil(o / s)))
        }

        function ot(t) {
            var e, i, n, s = t.iInitDisplayStart,
                o = t.aoColumns;
            if (i = t.oFeatures, t.bInitialised) {
                for (L(t), $(t), E(t, t.aoHeader), E(t, t.aoFooter), ut(t, !0), i.bAutoWidth && mt(t), e = 0, i = o.length; e < i; e++)(n = o[e]).sWidth && (n.nTh.style.width = St(n.sWidth));
                j(t), "ssp" != (o = Wt(t)) && ("ajax" == o ? R(t, [], function(i) {
                    var n = B(t, i);
                    for (e = 0; e < n.length; e++) w(t, n[e]);
                    t.iInitDisplayStart = s, j(t), ut(t, !1), at(t, i)
                }) : (ut(t, !1), at(t)))
            } else setTimeout(function() {
                ot(t)
            }, 200)
        }

        function at(t, e) {
            t._bInitComplete = !0, e && p(t), zt(t, "aoInitComplete", "init", [t, e])
        }

        function rt(t, e) {
            var i = parseInt(e, 10);
            t._iDisplayLength = i, Ht(t), zt(t, null, "length", [t, i])
        }

        function lt(t) {
            for (var e = t.oClasses, i = t.sTableId, s = t.aLengthMenu, o = (a = n.isArray(s[0])) ? s[0] : s, a = (s = a ? s[1] : s, n("<selects/>", {
                    name: i + "_length",
                    "aria-controls": i,
                    class: e.sLengthSelect
                })), r = 0, l = o.length; r < l; r++) a[0][r] = new Option(s[r], o[r]);
            var h = n("<div><label/></div>").addClass(e.sLength);
            return t.aanFeatures.l || (h[0].id = i + "_length"), h.children().append(t.oLanguage.sLengthMenu.replace("_MENU_", a[0].outerHTML)), n("select", h).val(t._iDisplayLength).bind("change.DT", function() {
                rt(t, n(this).val()), F(t)
            }), n(t.nTable).bind("length.dt.DT", function(e, i, s) {
                t === i && n("select", h).val(s)
            }), h[0]
        }

        function ht(t) {
            var e = t.sPaginationType,
                i = Vt.ext.pager[e],
                s = "function" == typeof i,
                o = function(t) {
                    F(t)
                },
                a = (e = n("<div/>").addClass(t.oClasses.sPaging + e)[0], t.aanFeatures);
            return s || i.fnInit(t, e, o), a.p || (e.id = t.sTableId + "_paginate", t.aoDrawCallback.push({
                fn: function(t) {
                    if (s) {
                        var e, n = t._iDisplayStart,
                            r = t._iDisplayLength,
                            l = t.fnRecordsDisplay(),
                            h = (n = (h = -1 === r) ? 0 : Math.ceil(n / r), r = h ? 1 : Math.ceil(l / r), l = i(n, r), 0);
                        for (e = a.p.length; h < e; h++) Rt(t, "pageButton")(t, a.p[h], h, l, n, r)
                    } else i.fnUpdate(t, o)
                },
                sName: "pagination"
            })), e
        }

        function ct(t, e, i) {
            var n = t._iDisplayStart,
                s = t._iDisplayLength,
                o = t.fnRecordsDisplay();
            return 0 === o || -1 === s ? n = 0 : "number" == typeof e ? (n = e * s) > o && (n = 0) : "first" == e ? n = 0 : "previous" == e ? 0 > (n = 0 <= s ? n - s : 0) && (n = 0) : "next" == e ? n + s < o && (n += s) : "last" == e ? n = Math.floor((o - 1) / s) * s : $t(t, 0, "Unknown paging action: " + e, 5), e = t._iDisplayStart !== n, t._iDisplayStart = n, e && (zt(t, null, "page", [t]), i && F(t)), e
        }

        function dt(t) {
            return n("<div/>", {
                id: t.aanFeatures.r ? null : t.sTableId + "_processing",
                class: t.oClasses.sProcessing
            }).html(t.oLanguage.sProcessing).insertBefore(t.nTable)[0]
        }

        function ut(t, e) {
            t.oFeatures.bProcessing && n(t.aanFeatures.r).css("display", e ? "block" : "none"), zt(t, null, "processing", [t, e])
        }

        function pt(t) {
            (d = n(t.nTable)).attr("role", "grid");
            var e = t.oScroll;
            if ("" === e.sX && "" === e.sY) return t.nTable;
            var i = e.sX,
                s = e.sY,
                o = t.oClasses,
                a = d.children("caption"),
                r = a.length ? a[0]._captionSide : null,
                l = n(d[0].cloneNode(!1)),
                h = n(d[0].cloneNode(!1)),
                c = d.children("tfoot");
            e.sX && "100%" === d.attr("width") && d.removeAttr("width"), c.length || (c = null), e = n("<div/>", {
                class: o.sScrollWrapper
            }).append(n("<div/>", {
                class: o.sScrollHead
            }).css({
                overflow: "hidden",
                position: "relative",
                border: 0,
                width: i ? i ? St(i) : null : "100%"
            }).append(n("<div/>", {
                class: o.sScrollHeadInner
            }).css({
                "box-sizing": "content-box",
                width: e.sXInner || "100%"
            }).append(l.removeAttr("id").css("margin-left", 0).append("top" === r ? a : null).append(d.children("thead"))))).append(n("<div/>", {
                class: o.sScrollBody
            }).css({
                overflow: "auto",
                height: s ? St(s) : null,
                width: i ? St(i) : null
            }).append(d)), c && e.append(n("<div/>", {
                class: o.sScrollFoot
            }).css({
                overflow: "hidden",
                border: 0,
                width: i ? i ? St(i) : null : "100%"
            }).append(n("<div/>", {
                class: o.sScrollFootInner
            }).append(h.removeAttr("id").css("margin-left", 0).append("bottom" === r ? a : null).append(d.children("tfoot")))));
            var d, u = (d = e.children())[0],
                p = (o = d[1], c ? d[2] : null);
            return i && n(o).on("scroll.DT", function() {
                var t = this.scrollLeft;
                u.scrollLeft = t, c && (p.scrollLeft = t)
            }), t.nScrollHead = u, t.nScrollBody = o, t.nScrollFoot = p, t.aoDrawCallback.push({
                fn: ft,
                sName: "scrolling"
            }), e[0]
        }

        function ft(t) {
            var e, i, s, o, a, r, l = t.oScroll,
                h = l.sX,
                c = l.sXInner,
                d = l.sY,
                u = l.iBarWidth,
                p = n(t.nScrollHead),
                g = p[0].style,
                m = (y = p.children("div"))[0].style,
                v = y.children("table"),
                y = t.nScrollBody,
                b = n(y),
                w = y.style,
                x = n(t.nScrollFoot).children("div"),
                S = x.children("table"),
                k = n(t.nTHead),
                D = n(t.nTable),
                C = D[0],
                T = C.style,
                _ = t.nTFoot ? n(t.nTFoot) : null,
                M = t.oBrowser,
                A = M.bScrollOversize,
                P = [],
                O = [],
                I = [],
                N = function(t) {
                    (t = t.style).paddingTop = "0", t.paddingBottom = "0", t.borderTopWidth = "0", t.borderBottomWidth = "0", t.height = 0
                };
            D.children("thead, tfoot").remove(), a = k.clone().prependTo(D), e = k.find("tr"), s = a.find("tr"), a.find("th, td").removeAttr("tabindex"), _ && (o = _.clone().prependTo(D), i = _.find("tr"), o = o.find("tr")), h || (w.width = "100%", p[0].style.width = "100%"), n.each(H(t, a), function(e, i) {
                r = f(t, e), i.style.width = t.aoColumns[r].sWidth
            }), _ && gt(function(t) {
                t.style.width = ""
            }, o), l.bCollapse && "" !== d && (w.height = b[0].offsetHeight + k[0].offsetHeight + "px"), p = D.outerWidth(), "" === h ? (T.width = "100%", A && (D.find("tbody").height() > y.offsetHeight || "scroll" == b.css("overflow-y")) && (T.width = St(D.outerWidth() - u))) : "" !== c ? T.width = St(c) : p == b.width() && b.height() < D.height() ? (T.width = St(p - u), D.outerWidth() > p - u && (T.width = St(p))) : T.width = St(p), p = D.outerWidth(), gt(N, s), gt(function(t) {
                I.push(t.innerHTML), P.push(St(n(t).css("width")))
            }, s), gt(function(t, e) {
                t.style.width = P[e]
            }, e), n(s).height(0), _ && (gt(N, o), gt(function(t) {
                O.push(St(n(t).css("width")))
            }, o), gt(function(t, e) {
                t.style.width = O[e]
            }, i), n(o).height(0)), gt(function(t, e) {
                t.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + I[e] + "</div>", t.style.width = P[e]
            }, s), _ && gt(function(t, e) {
                t.innerHTML = "", t.style.width = O[e]
            }, o), D.outerWidth() < p ? (i = y.scrollHeight > y.offsetHeight || "scroll" == b.css("overflow-y") ? p + u : p, A && (y.scrollHeight > y.offsetHeight || "scroll" == b.css("overflow-y")) && (T.width = St(i - u)), ("" === h || "" !== c) && $t(t, 1, "Possible column misalignment", 6)) : i = "100%", w.width = St(i), g.width = St(i), _ && (t.nScrollFoot.style.width = St(i)), !d && A && (w.height = St(C.offsetHeight + u)), d && l.bCollapse && (w.height = St(d), l = h && C.offsetWidth > y.offsetWidth ? u : 0, C.offsetHeight < y.offsetHeight && (w.height = St(C.offsetHeight + l))), l = D.outerWidth(), v[0].style.width = St(l), m.width = St(l), v = D.height() > y.clientHeight || "scroll" == b.css("overflow-y"), m[M = "padding" + (M.bScrollbarLeft ? "Left" : "Right")] = v ? u + "px" : "0px", _ && (S[0].style.width = St(l), x[0].style.width = St(l), x[0].style[M] = v ? u + "px" : "0px"), b.scroll(), !t.bSorted && !t.bFiltered || t._drawHold || (y.scrollTop = 0)
        }

        function gt(t, e, i) {
            for (var n, s, o = 0, a = 0, r = e.length; a < r;) {
                for (n = e[a].firstChild, s = i ? i[a].firstChild : null; n;) 1 === n.nodeType && (i ? t(n, s, o) : t(n, o), o++), n = n.nextSibling, s = i ? s.nextSibling : null;
                a++
            }
        }

        function mt(e) {
            var i, s, o = e.nTable,
                a = e.aoColumns,
                r = (d = e.oScroll).sY,
                l = d.sX,
                h = d.sXInner,
                c = a.length,
                d = v(e, "bVisible"),
                u = n("th", e.nTHead),
                f = o.getAttribute("width"),
                g = o.parentNode,
                y = !1;
            for ((i = o.style.width) && -1 !== i.indexOf("%") && (f = i), i = 0; i < d.length; i++) null !== (s = a[d[i]]).sWidth && (s.sWidth = yt(s.sWidthOrig, g), y = !0);
            if (y || l || r || c != m(e) || c != u.length) {
                (c = n(o).clone().css("visibility", "hidden").removeAttr("id")).find("tbody tr").remove();
                var b = n("<tr/>").appendTo(c.find("tbody"));
                for (c.find("tfoot th, tfoot td").css("width", ""), u = H(e, c.find("thead")[0]), i = 0; i < d.length; i++) s = a[d[i]], u[i].style.width = null !== s.sWidthOrig && "" !== s.sWidthOrig ? St(s.sWidthOrig) : "";
                if (e.aoData.length)
                    for (i = 0; i < d.length; i++) s = a[y = d[i]], n(wt(e, y)).clone(!1).append(s.sContentPadding).appendTo(b);
                if (c.appendTo(g), l && h ? c.width(h) : l ? (c.css("width", "auto"), c.width() < g.offsetWidth && c.width(g.offsetWidth)) : r ? c.width(g.offsetWidth) : f && c.width(f), bt(e, c[0]), l) {
                    for (i = h = 0; i < d.length; i++) s = a[d[i]], r = n(u[i]).outerWidth(), h += null === s.sWidthOrig ? r : parseInt(s.sWidth, 10) + r - n(u[i]).width();
                    c.width(St(h)), o.style.width = St(h)
                }
                for (i = 0; i < d.length; i++) s = a[d[i]], (r = n(u[i]).width()) && (s.sWidth = St(r));
                o.style.width = St(c.css("width")), c.remove()
            } else
                for (i = 0; i < c; i++) a[i].sWidth = St(u.eq(i).width());
            f && (o.style.width = St(f)), !f && !l || e._reszEvt || (o = function() {
                n(t).bind("resize.DT-" + e.sInstance, vt(function() {
                    p(e)
                }))
            }, e.oBrowser.bScrollOversize ? setTimeout(o, 1e3) : o(), e._reszEvt = !0)
        }

        function vt(t, e) {
            var n, s, o = e !== i ? e : 200;
            return function() {
                var e = this,
                    a = +new Date,
                    r = arguments;
                n && a < n + o ? (clearTimeout(s), s = setTimeout(function() {
                    n = i, t.apply(e, r)
                }, o)) : (n = a, t.apply(e, r))
            }
        }

        function yt(t, i) {
            if (!t) return 0;
            var s = n("<div/>").css("width", St(t)).appendTo(i || e.body),
                o = s[0].offsetWidth;
            return s.remove(), o
        }

        function bt(t, e) {
            var i = t.oScroll;
            (i.sX || i.sY) && (i = i.sX ? 0 : i.iBarWidth, e.style.width = St(n(e).outerWidth() - i))
        }

        function wt(t, e) {
            var i = xt(t, e);
            if (0 > i) return null;
            var s = t.aoData[i];
            return s.nTr ? s.anCells[e] : n("<td/>").html(S(t, i, e, "display"))[0]
        }

        function xt(t, e) {
            for (var i, n = -1, s = -1, o = 0, a = t.aoData.length; o < a; o++)(i = (i = S(t, o, e, "display") + "").replace(be, "")).length > n && (n = i.length, s = o);
            return s
        }

        function St(t) {
            return null === t ? "0px" : "number" == typeof t ? 0 > t ? "0px" : t + "px" : t.match(/\d$/) ? t + "px" : t
        }

        function kt() {
            if ((e = Vt.__scrollbarWidth) === i) {
                var t = n("<p/>").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: 150,
                        padding: 0,
                        overflow: "scroll",
                        visibility: "hidden"
                    }).appendTo("body"),
                    e = t[0].offsetWidth - t[0].clientWidth;
                Vt.__scrollbarWidth = e, t.remove()
            }
            return e
        }

        function Dt(t) {
            var e, s, o, a, r, l, h = [],
                c = t.aoColumns;
            e = t.aaSortingFixed, s = n.isPlainObject(e);
            var d = [];
            for (o = function(t) {
                    t.length && !n.isArray(t[0]) ? d.push(t) : d.push.apply(d, t)
                }, n.isArray(e) && o(e), s && e.pre && o(e.pre), o(t.aaSorting), s && e.post && o(e.post), t = 0; t < d.length; t++)
                for (e = 0, s = (o = c[l = d[t][0]].aDataSort).length; e < s; e++) r = c[a = o[e]].sType || "string", d[t]._idx === i && (d[t]._idx = n.inArray(d[t][1], c[a].asSorting)), h.push({
                    src: l,
                    col: a,
                    dir: d[t][1],
                    index: d[t]._idx,
                    type: r,
                    formatter: Vt.ext.type.order[r + "-pre"]
                });
            return h
        }

        function Ct(t) {
            var e, i, n, s, o = [],
                a = Vt.ext.type.order,
                r = t.aoData,
                l = 0,
                h = t.aiDisplayMaster;
            for (y(t), e = 0, i = (s = Dt(t)).length; e < i; e++)(n = s[e]).formatter && l++, Pt(t, n.col);
            if ("ssp" != Wt(t) && 0 !== s.length) {
                for (e = 0, i = h.length; e < i; e++) o[h[e]] = e;
                l === s.length ? h.sort(function(t, e) {
                    var i, n, a, l, h = s.length,
                        c = r[t]._aSortData,
                        d = r[e]._aSortData;
                    for (a = 0; a < h; a++)
                        if (0 !== (i = (i = c[(l = s[a]).col]) < (n = d[l.col]) ? -1 : i > n ? 1 : 0)) return "asc" === l.dir ? i : -i;
                    return (i = o[t]) < (n = o[e]) ? -1 : i > n ? 1 : 0
                }) : h.sort(function(t, e) {
                    var i, n, l, h, c = s.length,
                        d = r[t]._aSortData,
                        u = r[e]._aSortData;
                    for (l = 0; l < c; l++)
                        if (i = d[(h = s[l]).col], n = u[h.col], 0 !== (i = (h = a[h.type + "-" + h.dir] || a["string-" + h.dir])(i, n))) return i;
                    return (i = o[t]) < (n = o[e]) ? -1 : i > n ? 1 : 0
                })
            }
            t.bSorted = !0
        }

        function Tt(t) {
            for (var e, i, n = t.aoColumns, s = Dt(t), o = (t = t.oLanguage.oAria, 0), a = n.length; o < a; o++) {
                var r = (i = n[o]).asSorting;
                e = i.sTitle.replace(/<.*?>/g, "");
                var l = i.nTh;
                l.removeAttribute("aria-sort"), i.bSortable && (0 < s.length && s[0].col == o ? (l.setAttribute("aria-sort", "asc" == s[0].dir ? "ascending" : "descending"), i = r[s[0].index + 1] || r[0]) : i = r[0], e += "asc" === i ? t.sSortAscending : t.sSortDescending), l.setAttribute("aria-label", e)
            }
        }

        function _t(t, e, s, o) {
            var a = t.aaSorting,
                r = t.aoColumns[e].asSorting,
                l = function(t, e) {
                    var s = t._idx;
                    return s === i && (s = n.inArray(t[1], r)), s + 1 < r.length ? s + 1 : e ? null : 0
                };
            "number" == typeof a[0] && (a = t.aaSorting = [a]), s && t.oFeatures.bSortMulti ? -1 !== (s = n.inArray(e, he(a, "0"))) ? (null === (e = l(a[s], !0)) && 1 === a.length && (e = 0), null === e ? a.splice(s, 1) : (a[s][1] = r[e], a[s]._idx = e)) : (a.push([e, r[0], 0]), a[a.length - 1]._idx = 0) : a.length && a[0][0] == e ? (e = l(a[0]), a.length = 1, a[0][1] = r[e], a[0]._idx = e) : (a.length = 0, a.push([e, r[0]]), a[0]._idx = 0), j(t), "function" == typeof o && o(t)
        }

        function Mt(t, e, i, n) {
            var s = t.aoColumns[i];
            jt(e, {}, function(e) {
                !1 !== s.bSortable && (t.oFeatures.bProcessing ? (ut(t, !0), setTimeout(function() {
                    _t(t, i, e.shiftKey, n), "ssp" !== Wt(t) && ut(t, !1)
                }, 0)) : _t(t, i, e.shiftKey, n))
            })
        }

        function At(t) {
            var e, i, s = t.aLastSort,
                o = t.oClasses.sSortColumn,
                a = Dt(t),
                r = t.oFeatures;
            if (r.bSort && r.bSortClasses) {
                for (r = 0, e = s.length; r < e; r++) i = s[r].src, n(he(t.aoData, "anCells", i)).removeClass(o + (2 > r ? r + 1 : 3));
                for (r = 0, e = a.length; r < e; r++) i = a[r].src, n(he(t.aoData, "anCells", i)).addClass(o + (2 > r ? r + 1 : 3))
            }
            t.aLastSort = a
        }

        function Pt(t, e) {
            var i, n = t.aoColumns[e],
                s = Vt.ext.order[n.sSortDataType];
            s && (i = s.call(t.oInstance, t, e, g(t, e)));
            for (var o, a = Vt.ext.type.order[n.sType + "-pre"], r = 0, l = t.aoData.length; r < l; r++)(n = t.aoData[r])._aSortData || (n._aSortData = []), (!n._aSortData[e] || s) && (o = s ? i[r] : S(t, r, e, "sort"), n._aSortData[e] = a ? a(o) : o)
        }

        function Ot(t) {
            if (t.oFeatures.bStateSave && !t.bDestroying) {
                var e = {
                    time: +new Date,
                    start: t._iDisplayStart,
                    length: t._iDisplayLength,
                    order: n.extend(!0, [], t.aaSorting),
                    search: tt(t.oPreviousSearch),
                    columns: n.map(t.aoColumns, function(e, i) {
                        return {
                            visible: e.bVisible,
                            search: tt(t.aoPreSearchCols[i])
                        }
                    })
                };
                zt(t, "aoStateSaveParams", "stateSaveParams", [t, e]), t.oSavedState = e, t.fnStateSaveCallback.call(t.oInstance, t, e)
            }
        }

        function It(t) {
            var e, s, o = t.aoColumns;
            if (t.oFeatures.bStateSave) {
                var a = t.fnStateLoadCallback.call(t.oInstance, t);
                if (a && a.time && (e = zt(t, "aoStateLoadParams", "stateLoadParams", [t, a]), -1 === n.inArray(!1, e) && (!(0 < (e = t.iStateDuration) && a.time < +new Date - 1e3 * e) && o.length === a.columns.length))) {
                    for (t.oLoadedState = n.extend(!0, {}, a), a.start !== i && (t._iDisplayStart = a.start, t.iInitDisplayStart = a.start), a.length !== i && (t._iDisplayLength = a.length), a.order !== i && (t.aaSorting = [], n.each(a.order, function(e, i) {
                            t.aaSorting.push(i[0] >= o.length ? [0, i[1]] : i)
                        })), a.search !== i && n.extend(t.oPreviousSearch, et(a.search)), e = 0, s = a.columns.length; e < s; e++) {
                        var r = a.columns[e];
                        r.visible !== i && (o[e].bVisible = r.visible), r.search !== i && n.extend(t.aoPreSearchCols[e], et(r.search))
                    }
                    zt(t, "aoStateLoaded", "stateLoaded", [t, a])
                }
            }
        }

        function Nt(t) {
            var e = Vt.settings;
            return -1 !== (t = n.inArray(t, he(e, "nTable"))) ? e[t] : null
        }

        function $t(e, i, n, s) {
            if (n = "DataTables warning: " + (null !== e ? "table id=" + e.sTableId + " - " : "") + n, s && (n += ". For more information about this error, please see http://datatables.net/tn/" + s), i) t.console && console.log && console.log(n);
            else if (i = (i = Vt.ext).sErrMode || i.errMode, zt(e, null, "error", [e, s, n]), "alert" == i) alert(n);
            else {
                if ("throw" == i) throw Error(n);
                "function" == typeof i && i(e, s, n)
            }
        }

        function Et(t, e, s, o) {
            n.isArray(s) ? n.each(s, function(i, s) {
                n.isArray(s) ? Et(t, e, s[0], s[1]) : Et(t, e, s)
            }) : (o === i && (o = s), e[s] !== i && (t[o] = e[s]))
        }

        function Ft(t, e, i) {
            var s, o;
            for (o in e) e.hasOwnProperty(o) && (s = e[o], n.isPlainObject(s) ? (n.isPlainObject(t[o]) || (t[o] = {}), n.extend(!0, t[o], s)) : t[o] = i && "data" !== o && "aaData" !== o && n.isArray(s) ? s.slice() : s);
            return t
        }

        function jt(t, e, i) {
            n(t).bind("click.DT", e, function(e) {
                t.blur(), i(e)
            }).bind("keypress.DT", e, function(t) {
                13 === t.which && (t.preventDefault(), i(t))
            }).bind("selectstart.DT", function() {
                return !1
            })
        }

        function Lt(t, e, i, n) {
            i && t[e].push({
                fn: i,
                sName: n
            })
        }

        function zt(t, e, i, s) {
            var o = [];
            return e && (o = n.map(t[e].slice().reverse(), function(e) {
                return e.fn.apply(t.oInstance, s)
            })), null !== i && (e = n.Event(i + ".dt"), n(t.nTable).trigger(e, s), o.push(e.result)), o
        }

        function Ht(t) {
            var e = t._iDisplayStart,
                i = t.fnDisplayEnd(),
                n = t._iDisplayLength;
            e >= i && (e = i - n), e -= e % n, (-1 === n || 0 > e) && (e = 0), t._iDisplayStart = e
        }

        function Rt(t, e) {
            var i = t.renderer,
                s = Vt.ext.renderer[e];
            return n.isPlainObject(i) && i[e] ? s[i[e]] || s._ : "string" == typeof i && s[i] || s._
        }

        function Wt(t) {
            return t.oFeatures.bServerSide ? "ssp" : t.ajax || t.sAjaxSource ? "ajax" : "dom"
        }

        function Ut(t, e) {
            var i = [],
                n = (i = $e.numbers_length, Math.floor(i / 2));
            return e <= i ? i = de(0, e) : t <= n ? ((i = de(0, i - 2)).push("ellipsis"), i.push(e - 1)) : (t >= e - 1 - n ? i = de(e - (i - 2), e) : ((i = de(t - n + 2, t + n - 1)).push("ellipsis"), i.push(e - 1)), i.splice(0, 0, "ellipsis"), i.splice(0, 0, 0)), i.DT_el = "span", i
        }

        function Jt(t) {
            n.each({
                num: function(e) {
                    return Ee(e, t)
                },
                "num-fmt": function(e) {
                    return Ee(e, t, ne)
                },
                "html-num": function(e) {
                    return Ee(e, t, Zt)
                },
                "html-num-fmt": function(e) {
                    return Ee(e, t, Zt, ne)
                }
            }, function(e, i) {
                qt.type.order[e + t + "-pre"] = i, e.match(/^html\-/) && (qt.type.search[e + t] = qt.type.search.html)
            })
        }

        function Bt(t) {
            return function() {
                var e = [Nt(this[Vt.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
                return Vt.ext.internal[t].apply(this, e)
            }
        }
        var Vt, qt, Yt, Gt, Qt, Xt = {},
            Kt = /[\r\n]/g,
            Zt = /<.*?>/g,
            te = /^[\w\+\-]/,
            ee = /[\w\+\-]$/,
            ie = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
            ne = /[',$\u00a3\u20ac\u00a5%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
            se = function(t) {
                return !t || !0 === t || "-" === t
            },
            oe = function(t) {
                var e = parseInt(t, 10);
                return !isNaN(e) && isFinite(t) ? e : null
            },
            ae = function(t, e) {
                return Xt[e] || (Xt[e] = RegExp(K(e), "g")), "string" == typeof t && "." !== e ? t.replace(/\./g, "").replace(Xt[e], ".") : t
            },
            re = function(t, e, i) {
                var n = "string" == typeof t;
                return !!se(t) || (e && n && (t = ae(t, e)), i && n && (t = t.replace(ne, "")), !isNaN(parseFloat(t)) && isFinite(t))
            },
            le = function(t, e, i) {
                return !!se(t) || ((se(t) || "string" == typeof t) && !!re(t.replace(Zt, ""), e, i) || null)
            },
            he = function(t, e, n) {
                var s = [],
                    o = 0,
                    a = t.length;
                if (n !== i)
                    for (; o < a; o++) t[o] && t[o][e] && s.push(t[o][e][n]);
                else
                    for (; o < a; o++) t[o] && s.push(t[o][e]);
                return s
            },
            ce = function(t, e, n, s) {
                var o = [],
                    a = 0,
                    r = e.length;
                if (s !== i)
                    for (; a < r; a++) t[e[a]][n] && o.push(t[e[a]][n][s]);
                else
                    for (; a < r; a++) o.push(t[e[a]][n]);
                return o
            },
            de = function(t, e) {
                var n, s = [];
                e === i ? (e = 0, n = t) : (n = e, e = t);
                for (var o = e; o < n; o++) s.push(o);
                return s
            },
            ue = function(t) {
                for (var e = [], i = 0, n = t.length; i < n; i++) t[i] && e.push(t[i]);
                return e
            },
            pe = function(t) {
                var e, i, n, s = [],
                    o = t.length,
                    a = 0;
                i = 0;
                t: for (; i < o; i++) {
                    for (e = t[i], n = 0; n < a; n++)
                        if (s[n] === e) continue t;
                    s.push(e), a++
                }
                return s
            },
            fe = function(t, e, n) {
                t[e] !== i && (t[n] = t[e])
            },
            ge = /\[.*?\]$/,
            me = /\(\)$/,
            ve = n("<div>")[0],
            ye = ve.textContent !== i,
            be = /<.*?>/g;
        Vt = function(t) {
            this.$ = function(t, e) {
                return this.api(!0).$(t, e)
            }, this._ = function(t, e) {
                return this.api(!0).rows(t, e).data()
            }, this.api = function(t) {
                return new Yt(t ? Nt(this[qt.iApiIndex]) : this)
            }, this.fnAddData = function(t, e) {
                var s = this.api(!0),
                    o = n.isArray(t) && (n.isArray(t[0]) || n.isPlainObject(t[0])) ? s.rows.add(t) : s.row.add(t);
                return (e === i || e) && s.draw(), o.flatten().toArray()
            }, this.fnAdjustColumnSizing = function(t) {
                var e = this.api(!0).columns.adjust(),
                    n = e.settings()[0],
                    s = n.oScroll;
                t === i || t ? e.draw(!1) : ("" !== s.sX || "" !== s.sY) && ft(n)
            }, this.fnClearTable = function(t) {
                var e = this.api(!0).clear();
                (t === i || t) && e.draw()
            }, this.fnClose = function(t) {
                this.api(!0).row(t).child.hide()
            }, this.fnDeleteRow = function(t, e, n) {
                var s = this.api(!0),
                    o = (t = s.rows(t)).settings()[0],
                    a = o.aoData[t[0][0]];
                return t.remove(), e && e.call(this, o, a), (n === i || n) && s.draw(), a
            }, this.fnDestroy = function(t) {
                this.api(!0).destroy(t)
            }, this.fnDraw = function(t) {
                this.api(!0).draw(t)
            }, this.fnFilter = function(t, e, n, s, o, a) {
                o = this.api(!0), null === e || e === i ? o.search(t, n, s, a) : o.column(e).search(t, n, s, a), o.draw()
            }, this.fnGetData = function(t, e) {
                var n = this.api(!0);
                if (t !== i) {
                    var s = t.nodeName ? t.nodeName.toLowerCase() : "";
                    return e !== i || "td" == s || "th" == s ? n.cell(t, e).data() : n.row(t).data() || null
                }
                return n.data().toArray()
            }, this.fnGetNodes = function(t) {
                var e = this.api(!0);
                return t !== i ? e.row(t).node() : e.rows().nodes().flatten().toArray()
            }, this.fnGetPosition = function(t) {
                var e = this.api(!0),
                    i = t.nodeName.toUpperCase();
                return "TR" == i ? e.row(t).index() : "TD" == i || "TH" == i ? [(t = e.cell(t).index()).row, t.columnVisible, t.column] : null
            }, this.fnIsOpen = function(t) {
                return this.api(!0).row(t).child.isShown()
            }, this.fnOpen = function(t, e, i) {
                return this.api(!0).row(t).child(e, i).show().child()[0]
            }, this.fnPageChange = function(t, e) {
                var n = this.api(!0).page(t);
                (e === i || e) && n.draw(!1)
            }, this.fnSetColumnVis = function(t, e, n) {
                t = this.api(!0).column(t).visible(e), (n === i || n) && t.columns.adjust().draw()
            }, this.fnSettings = function() {
                return Nt(this[qt.iApiIndex])
            }, this.fnSort = function(t) {
                this.api(!0).order(t).draw()
            }, this.fnSortListener = function(t, e, i) {
                this.api(!0).order.listener(t, e, i)
            }, this.fnUpdate = function(t, e, n, s, o) {
                var a = this.api(!0);
                return n === i || null === n ? a.row(e).data(t) : a.cell(e, n).data(t), (o === i || o) && a.columns.adjust(), (s === i || s) && a.draw(), 0
            }, this.fnVersionCheck = qt.fnVersionCheck;
            var e = this,
                s = t === i,
                c = this.length;
            for (var p in s && (t = {}), this.oApi = this.internal = qt.internal, Vt.ext.internal) p && (this[p] = Bt(p));
            return this.each(function() {
                var p, f = {},
                    g = (f = 1 < c ? Ft(f, t, !0) : t, 0),
                    m = this.getAttribute("id"),
                    v = !1,
                    y = Vt.defaults,
                    S = n(this);
                if ("table" != this.nodeName.toLowerCase()) $t(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
                else {
                    r(y), l(y.column), o(y, y, !0), o(y.column, y.column, !0), o(y, n.extend(f, S.data()));
                    var k = Vt.settings;
                    g = 0;
                    for (p = k.length; g < p; g++) {
                        var D = k[g];
                        if (D.nTable == this || D.nTHead.parentNode == this || D.nTFoot && D.nTFoot.parentNode == this) {
                            if (g = f.bRetrieve !== i ? f.bRetrieve : y.bRetrieve, s || g) return D.oInstance;
                            if (f.bDestroy !== i ? f.bDestroy : y.bDestroy) {
                                D.oInstance.fnDestroy();
                                break
                            }
                            return void $t(D, 0, "Cannot reinitialise DataTable", 3)
                        }
                        if (D.sTableId == this.id) {
                            k.splice(g, 1);
                            break
                        }
                    }
                    null !== m && "" !== m || (this.id = m = "DataTables_Table_" + Vt.ext._unique++);
                    var C = n.extend(!0, {}, Vt.models.oSettings, {
                        sDestroyWidth: S[0].style.width,
                        sInstance: m,
                        sTableId: m
                    });
                    C.nTable = this, C.oApi = e.internal, C.oInit = f, k.push(C), C.oInstance = 1 === e.length ? e : S.dataTable(), r(f), f.oLanguage && a(f.oLanguage), f.aLengthMenu && !f.iDisplayLength && (f.iDisplayLength = n.isArray(f.aLengthMenu[0]) ? f.aLengthMenu[0][0] : f.aLengthMenu[0]), f = Ft(n.extend(!0, {}, y), f), Et(C.oFeatures, f, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" ")), Et(C, f, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", ["iCookieDuration", "iStateDuration"],
                        ["oSearch", "oPreviousSearch"],
                        ["aoSearchCols", "aoPreSearchCols"],
                        ["iDisplayLength", "_iDisplayLength"],
                        ["bJQueryUI", "bJUI"]
                    ]), Et(C.oScroll, f, [
                        ["sScrollX", "sX"],
                        ["sScrollXInner", "sXInner"],
                        ["sScrollY", "sY"],
                        ["bScrollCollapse", "bCollapse"]
                    ]), Et(C.oLanguage, f, "fnInfoCallback"), Lt(C, "aoDrawCallback", f.fnDrawCallback, "user"), Lt(C, "aoServerParams", f.fnServerParams, "user"), Lt(C, "aoStateSaveParams", f.fnStateSaveParams, "user"), Lt(C, "aoStateLoadParams", f.fnStateLoadParams, "user"), Lt(C, "aoStateLoaded", f.fnStateLoaded, "user"), Lt(C, "aoRowCallback", f.fnRowCallback, "user"), Lt(C, "aoRowCreatedCallback", f.fnCreatedRow, "user"), Lt(C, "aoHeaderCallback", f.fnHeaderCallback, "user"), Lt(C, "aoFooterCallback", f.fnFooterCallback, "user"), Lt(C, "aoInitComplete", f.fnInitComplete, "user"), Lt(C, "aoPreDrawCallback", f.fnPreDrawCallback, "user"), m = C.oClasses, f.bJQueryUI ? (n.extend(m, Vt.ext.oJUIClasses, f.oClasses), f.sDom === y.sDom && "lfrtip" === y.sDom && (C.sDom = '<"H"lfr>t<"F"ip>'), C.renderer ? n.isPlainObject(C.renderer) && !C.renderer.header && (C.renderer.header = "jqueryui") : C.renderer = "jqueryui") : n.extend(m, Vt.ext.classes, f.oClasses), S.addClass(m.sTable), "" === C.oScroll.sX && "" === C.oScroll.sY || (C.oScroll.iBarWidth = kt()), !0 === C.oScroll.sX && (C.oScroll.sX = "100%"), C.iInitDisplayStart === i && (C.iInitDisplayStart = f.iDisplayStart, C._iDisplayStart = f.iDisplayStart), null !== f.iDeferLoading && (C.bDeferLoading = !0, g = n.isArray(f.iDeferLoading), C._iRecordsDisplay = g ? f.iDeferLoading[0] : f.iDeferLoading, C._iRecordsTotal = g ? f.iDeferLoading[1] : f.iDeferLoading);
                    var T = C.oLanguage;
                    n.extend(!0, T, f.oLanguage), "" !== T.sUrl && (n.ajax({
                        dataType: "json",
                        url: T.sUrl,
                        success: function(t) {
                            a(t), o(y.oLanguage, t), n.extend(!0, T, t), ot(C)
                        },
                        error: function() {
                            ot(C)
                        }
                    }), v = !0), null === f.asStripeClasses && (C.asStripeClasses = [m.sStripeOdd, m.sStripeEven]);
                    g = C.asStripeClasses;
                    var _ = S.children("tbody").find("tr").eq(0);
                    if (-1 !== n.inArray(!0, n.map(g, function(t) {
                            return _.hasClass(t)
                        })) && (n("tbody tr", this).removeClass(g.join(" ")), C.asDestroyStripes = g.slice()), k = [], 0 !== (g = this.getElementsByTagName("thead")).length && (z(C.aoHeader, g[0]), k = H(C)), null === f.aoColumns)
                        for (D = [], g = 0, p = k.length; g < p; g++) D.push(null);
                    else D = f.aoColumns;
                    for (g = 0, p = D.length; g < p; g++) d(C, k ? k[g] : null);
                    if (b(C, f.aoColumnDefs, D, function(t, e) {
                            u(C, t, e)
                        }), _.length) {
                        var M = function(t, e) {
                            return null !== t.getAttribute("data-" + e) ? e : null
                        };
                        n.each(O(C, _[0]).cells, function(t, e) {
                            var n = C.aoColumns[t];
                            if (n.mData === t) {
                                var s = M(e, "sort") || M(e, "order"),
                                    o = M(e, "filter") || M(e, "search");
                                null === s && null === o || (n.mData = {
                                    _: t + ".display",
                                    sort: null !== s ? t + ".@data-" + s : i,
                                    type: null !== s ? t + ".@data-" + s : i,
                                    filter: null !== o ? t + ".@data-" + o : i
                                }, u(C, t))
                            }
                        })
                    }
                    var A = C.oFeatures;
                    if (f.bStateSave && (A.bStateSave = !0, It(C), Lt(C, "aoDrawCallback", Ot, "state_save")), f.aaSorting === i)
                        for (g = 0, p = (k = C.aaSorting).length; g < p; g++) k[g][1] = C.aoColumns[g].asSorting[0];
                    if (At(C), A.bSort && Lt(C, "aoDrawCallback", function() {
                            if (C.bSorted) {
                                var t = Dt(C),
                                    e = {};
                                n.each(t, function(t, i) {
                                    e[i.src] = i.dir
                                }), zt(C, null, "order", [C, t, e]), Tt(C)
                            }
                        }), Lt(C, "aoDrawCallback", function() {
                            (C.bSorted || "ssp" === Wt(C) || A.bDeferRender) && At(C)
                        }, "sc"), h(C), g = S.children("caption").each(function() {
                            this._captionSide = S.css("caption-side")
                        }), 0 === (p = S.children("thead")).length && (p = n("<thead/>").appendTo(this)), C.nTHead = p[0], 0 === (p = S.children("tbody")).length && (p = n("<tbody/>").appendTo(this)), C.nTBody = p[0], 0 === (p = S.children("tfoot")).length && 0 < g.length && ("" !== C.oScroll.sX || "" !== C.oScroll.sY) && (p = n("<tfoot/>").appendTo(this)), 0 === p.length || 0 === p.children().length ? S.addClass(m.sNoFooter) : 0 < p.length && (C.nTFoot = p[0], z(C.aoFooter, C.nTFoot)), f.aaData)
                        for (g = 0; g < f.aaData.length; g++) w(C, f.aaData[g]);
                    else(C.bDeferLoading || "dom" == Wt(C)) && x(C, n(C.nTBody).children("tr"));
                    C.aiDisplay = C.aiDisplayMaster.slice(), C.bInitialised = !0, !1 === v && ot(C)
                }
            }), e = null, this
        };
        var we = [],
            xe = Array.prototype;
        Yt = function(t, e) {
            if (!(this instanceof Yt)) return new Yt(t, e);
            var i = [],
                s = function(t) {
                    (t = function(t) {
                        var e, i, s = Vt.settings,
                            o = n.map(s, function(t) {
                                return t.nTable
                            });
                        return t ? t.nTable && t.oApi ? [t] : t.nodeName && "table" === t.nodeName.toLowerCase() ? -1 !== (e = n.inArray(t, o)) ? [s[e]] : null : t && "function" == typeof t.settings ? t.settings().toArray() : ("string" == typeof t ? i = n(t) : t instanceof n && (i = t), i ? i.map(function() {
                            return -1 !== (e = n.inArray(this, o)) ? s[e] : null
                        }).toArray() : void 0) : []
                    }(t)) && i.push.apply(i, t)
                };
            if (n.isArray(t))
                for (var o = 0, a = t.length; o < a; o++) s(t[o]);
            else s(t);
            this.context = pe(i), e && this.push.apply(this, e.toArray ? e.toArray() : e), this.selector = {
                rows: null,
                cols: null,
                opts: null
            }, Yt.extend(this, this, we)
        }, Vt.Api = Yt, Yt.prototype = {
            any: function() {
                return 0 !== this.flatten().length
            },
            concat: xe.concat,
            context: [],
            each: function(t) {
                for (var e = 0, i = this.length; e < i; e++) t.call(this, this[e], e, this);
                return this
            },
            eq: function(t) {
                var e = this.context;
                return e.length > t ? new Yt(e[t], this[t]) : null
            },
            filter: function(t) {
                var e = [];
                if (xe.filter) e = xe.filter.call(this, t, this);
                else
                    for (var i = 0, n = this.length; i < n; i++) t.call(this, this[i], i, this) && e.push(this[i]);
                return new Yt(this.context, e)
            },
            flatten: function() {
                var t = [];
                return new Yt(this.context, t.concat.apply(t, this.toArray()))
            },
            join: xe.join,
            indexOf: xe.indexOf || function(t, e) {
                for (var i = e || 0, n = this.length; i < n; i++)
                    if (this[i] === t) return i;
                return -1
            },
            iterator: function(t, e, n, s) {
                var o, a, r, l, h, c, d, u = [],
                    p = this.context,
                    f = this.selector;
                for ("string" == typeof t && (s = n, n = e, e = t, t = !1), a = 0, r = p.length; a < r; a++) {
                    var g = new Yt(p[a]);
                    if ("table" === e)(o = n.call(g, p[a], a)) !== i && u.push(o);
                    else if ("columns" === e || "rows" === e)(o = n.call(g, p[a], this[a], a)) !== i && u.push(o);
                    else if ("column" === e || "column-rows" === e || "row" === e || "cell" === e)
                        for (d = this[a], "column-rows" === e && (c = Te(p[a], f.opts)), l = 0, h = d.length; l < h; l++) o = d[l], (o = "cell" === e ? n.call(g, p[a], o.row, o.column, a, l) : n.call(g, p[a], o, a, l, c)) !== i && u.push(o)
                }
                return u.length || s ? ((e = (t = new Yt(p, t ? u.concat.apply([], u) : u)).selector).rows = f.rows, e.cols = f.cols, e.opts = f.opts, t) : this
            },
            lastIndexOf: xe.lastIndexOf || function(t, e) {
                return this.indexOf.apply(this.toArray.reverse(), arguments)
            },
            length: 0,
            map: function(t) {
                var e = [];
                if (xe.map) e = xe.map.call(this, t, this);
                else
                    for (var i = 0, n = this.length; i < n; i++) e.push(t.call(this, this[i], i));
                return new Yt(this.context, e)
            },
            pluck: function(t) {
                return this.map(function(e) {
                    return e[t]
                })
            },
            pop: xe.pop,
            push: xe.push,
            reduce: xe.reduce || function(t, e) {
                return c(this, t, e, 0, this.length, 1)
            },
            reduceRight: xe.reduceRight || function(t, e) {
                return c(this, t, e, this.length - 1, -1, -1)
            },
            reverse: xe.reverse,
            selector: null,
            shift: xe.shift,
            sort: xe.sort,
            splice: xe.splice,
            toArray: function() {
                return xe.slice.call(this)
            },
            to$: function() {
                return n(this)
            },
            toJQuery: function() {
                return n(this)
            },
            unique: function() {
                return new Yt(this.context, pe(this))
            },
            unshift: xe.unshift
        }, Yt.extend = function(t, e, i) {
            if (i.length && e && (e instanceof Yt || e.__dt_wrapper)) {
                var s, o, a, r = function(t, e, i) {
                    return function() {
                        var n = e.apply(t, arguments);
                        return Yt.extend(n, n, i.methodExt), n
                    }
                };
                for (s = 0, o = i.length; s < o; s++) e[(a = i[s]).name] = "function" == typeof a.val ? r(t, a.val, a) : n.isPlainObject(a.val) ? {} : a.val, e[a.name].__dt_wrapper = !0, Yt.extend(t, e[a.name], a.propExt)
            }
        }, Yt.register = Gt = function(t, e) {
            if (n.isArray(t))
                for (var i = 0, s = t.length; i < s; i++) Yt.register(t[i], e);
            else {
                var o, a, r = t.split("."),
                    l = we;
                for (i = 0, s = r.length; i < s; i++) {
                    var h;
                    o = (a = -1 !== r[i].indexOf("()")) ? r[i].replace("()", "") : r[i];
                    t: {
                        h = 0;
                        for (var c = l.length; h < c; h++)
                            if (l[h].name === o) {
                                h = l[h];
                                break t
                            } h = null
                    }
                    h || (h = {
                        name: o,
                        val: {},
                        methodExt: [],
                        propExt: []
                    }, l.push(h)), i === s - 1 ? h.val = e : l = a ? h.methodExt : h.propExt
                }
            }
        }, Yt.registerPlural = Qt = function(t, e, s) {
            Yt.register(t, s), Yt.register(e, function() {
                var t = s.apply(this, arguments);
                return t === this ? this : t instanceof Yt ? t.length ? n.isArray(t[0]) ? new Yt(t.context, t[0]) : t[0] : i : t
            })
        }, Gt("tables()", function(t) {
            var e;
            if (t) {
                e = Yt;
                var i = this.context;
                if ("number" == typeof t) t = [i[t]];
                else {
                    var s = n.map(i, function(t) {
                        return t.nTable
                    });
                    t = n(s).filter(t).map(function() {
                        var t = n.inArray(this, s);
                        return i[t]
                    }).toArray()
                }
                e = new e(t)
            } else e = this;
            return e
        }), Gt("table()", function(t) {
            var e = (t = this.tables(t)).context;
            return e.length ? new Yt(e[0]) : t
        }), Qt("tables().nodes()", "table().node()", function() {
            return this.iterator("table", function(t) {
                return t.nTable
            }, 1)
        }), Qt("tables().body()", "table().body()", function() {
            return this.iterator("table", function(t) {
                return t.nTBody
            }, 1)
        }), Qt("tables().header()", "table().header()", function() {
            return this.iterator("table", function(t) {
                return t.nTHead
            }, 1)
        }), Qt("tables().footer()", "table().footer()", function() {
            return this.iterator("table", function(t) {
                return t.nTFoot
            }, 1)
        }), Qt("tables().containers()", "table().container()", function() {
            return this.iterator("table", function(t) {
                return t.nTableWrapper
            }, 1)
        }), Gt("draw()", function(t) {
            return this.iterator("table", function(e) {
                j(e, !1 === t)
            })
        }), Gt("page()", function(t) {
            return t === i ? this.page.info().page : this.iterator("table", function(e) {
                ct(e, t)
            })
        }), Gt("page.info()", function() {
            if (0 === this.context.length) return i;
            var t = this.context[0],
                e = t._iDisplayStart,
                n = t._iDisplayLength,
                s = t.fnRecordsDisplay(),
                o = -1 === n;
            return {
                page: o ? 0 : Math.floor(e / n),
                pages: o ? 1 : Math.ceil(s / n),
                start: e,
                end: t.fnDisplayEnd(),
                length: n,
                recordsTotal: t.fnRecordsTotal(),
                recordsDisplay: s
            }
        }), Gt("page.len()", function(t) {
            return t === i ? 0 !== this.context.length ? this.context[0]._iDisplayLength : i : this.iterator("table", function(e) {
                rt(e, t)
            })
        });
        var Se = function(t, e, i) {
            if (i) {
                var n = new Yt(t);
                n.one("draw", function() {
                    i(n.ajax.json())
                })
            }
            "ssp" == Wt(t) ? j(t, e) : (ut(t, !0), R(t, [], function(i) {
                M(t);
                for (var n = 0, s = (i = B(t, i)).length; n < s; n++) w(t, i[n]);
                j(t, e), ut(t, !1)
            }))
        };
        Gt("ajax.json()", function() {
            var t = this.context;
            if (0 < t.length) return t[0].json
        }), Gt("ajax.params()", function() {
            var t = this.context;
            if (0 < t.length) return t[0].oAjaxData
        }), Gt("ajax.reload()", function(t, e) {
            return this.iterator("table", function(i) {
                Se(i, !1 === e, t)
            })
        }), Gt("ajax.url()", function(t) {
            var e = this.context;
            return t === i ? 0 === e.length ? i : (e = e[0]).ajax ? n.isPlainObject(e.ajax) ? e.ajax.url : e.ajax : e.sAjaxSource : this.iterator("table", function(e) {
                n.isPlainObject(e.ajax) ? e.ajax.url = t : e.ajax = t
            })
        }), Gt("ajax.url().load()", function(t, e) {
            return this.iterator("table", function(i) {
                Se(i, !1 === e, t)
            })
        });
        var ke = function(t, e, s, o, a) {
                var r, l, h, c, d, u, p = [];
                for (h = typeof e, e && "string" !== h && "function" !== h && e.length !== i || (e = [e]), h = 0, c = e.length; h < c; h++)
                    for (d = 0, u = (l = e[h] && e[h].split ? e[h].split(",") : [e[h]]).length; d < u; d++)(r = s("string" == typeof l[d] ? n.trim(l[d]) : l[d])) && r.length && p.push.apply(p, r);
                if ((t = qt.selector[t]).length)
                    for (h = 0, c = t.length; h < c; h++) p = t[h](o, a, p);
                return p
            },
            De = function(t) {
                return t || (t = {}), t.filter && t.search === i && (t.search = t.filter), n.extend({
                    search: "none",
                    order: "current",
                    page: "all"
                }, t)
            },
            Ce = function(t) {
                for (var e = 0, i = t.length; e < i; e++)
                    if (0 < t[e].length) return t[0] = t[e], t[0].length = 1, t.length = 1, t.context = [t.context[e]], t;
                return t.length = 0, t
            },
            Te = function(t, e) {
                var i, s, o, a = [],
                    r = t.aiDisplay;
                i = t.aiDisplayMaster;
                var l = e.search;
                if (s = e.order, o = e.page, "ssp" == Wt(t)) return "removed" === l ? [] : de(0, i.length);
                if ("current" == o)
                    for (i = t._iDisplayStart, s = t.fnDisplayEnd(); i < s; i++) a.push(r[i]);
                else if ("current" == s || "applied" == s) a = "none" == l ? i.slice() : "applied" == l ? r.slice() : n.map(i, function(t) {
                    return -1 === n.inArray(t, r) ? t : null
                });
                else if ("index" == s || "original" == s)
                    for (i = 0, s = t.aoData.length; i < s; i++) "none" == l ? a.push(i) : (-1 === (o = n.inArray(i, r)) && "removed" == l || 0 <= o && "applied" == l) && a.push(i);
                return a
            };
        Gt("rows()", function(t, e) {
            t === i ? t = "" : n.isPlainObject(t) && (e = t, t = "");
            e = De(e);
            var s = this.iterator("table", function(i) {
                var s = e;
                return ke("row", t, function(t) {
                    var e = oe(t);
                    if (null !== e && !s) return [e];
                    var o = Te(i, s);
                    return null !== e && -1 !== n.inArray(e, o) ? [e] : t ? "function" == typeof t ? n.map(o, function(e) {
                        var n = i.aoData[e];
                        return t(e, n._aData, n.nTr) ? e : null
                    }) : (e = ue(ce(i.aoData, o, "nTr")), t.nodeName && -1 !== n.inArray(t, e) ? [t._DT_RowIndex] : n(e).filter(t).map(function() {
                        return this._DT_RowIndex
                    }).toArray()) : o
                }, i, s)
            }, 1);
            return s.selector.rows = t, s.selector.opts = e, s
        }), Gt("rows().nodes()", function() {
            return this.iterator("row", function(t, e) {
                return t.aoData[e].nTr || i
            }, 1)
        }), Gt("rows().data()", function() {
            return this.iterator(!0, "rows", function(t, e) {
                return ce(t.aoData, e, "_aData")
            }, 1)
        }), Qt("rows().cache()", "row().cache()", function(t) {
            return this.iterator("row", function(e, i) {
                var n = e.aoData[i];
                return "search" === t ? n._aFilterData : n._aSortData
            }, 1)
        }), Qt("rows().invalidate()", "row().invalidate()", function(t) {
            return this.iterator("row", function(e, i) {
                P(e, i, t)
            })
        }), Qt("rows().indexes()", "row().index()", function() {
            return this.iterator("row", function(t, e) {
                return e
            }, 1)
        }), Qt("rows().remove()", "row().remove()", function() {
            var t = this;
            return this.iterator("row", function(e, i, s) {
                var o = e.aoData;
                o.splice(i, 1);
                for (var a = 0, r = o.length; a < r; a++) null !== o[a].nTr && (o[a].nTr._DT_RowIndex = a);
                n.inArray(i, e.aiDisplay), A(e.aiDisplayMaster, i), A(e.aiDisplay, i), A(t[s], i, !1), Ht(e)
            })
        }), Gt("rows.add()", function(t) {
            var e = this.iterator("table", function(e) {
                    var i, n, s, o = [];
                    for (n = 0, s = t.length; n < s; n++)(i = t[n]).nodeName && "TR" === i.nodeName.toUpperCase() ? o.push(x(e, i)[0]) : o.push(w(e, i));
                    return o
                }, 1),
                i = this.rows(-1);
            return i.pop(), i.push.apply(i, e.toArray()), i
        }), Gt("row()", function(t, e) {
            return Ce(this.rows(t, e))
        }), Gt("row().data()", function(t) {
            var e = this.context;
            return t === i ? e.length && this.length ? e[0].aoData[this[0]]._aData : i : (e[0].aoData[this[0]]._aData = t, P(e[0], this[0], "data"), this)
        }), Gt("row().node()", function() {
            var t = this.context;
            return t.length && this.length && t[0].aoData[this[0]].nTr || null
        }), Gt("row.add()", function(t) {
            t instanceof n && t.length && (t = t[0]);
            var e = this.iterator("table", function(e) {
                return t.nodeName && "TR" === t.nodeName.toUpperCase() ? x(e, t)[0] : w(e, t)
            });
            return this.row(e[0])
        });
        var _e = function(t, e) {
                var n = t.context;
                n.length && ((n = n[0].aoData[e !== i ? e : t[0]])._details && (n._details.remove(), n._detailsShow = i, n._details = i))
            },
            Me = function(t, e) {
                var i = t.context;
                if (i.length && t.length) {
                    var n = i[0].aoData[t[0]];
                    if (n._details) {
                        (n._detailsShow = e) ? n._details.insertAfter(n.nTr): n._details.detach();
                        var s = i[0],
                            o = new Yt(s),
                            a = s.aoData;
                        o.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"), 0 < he(a, "_details").length && (o.on("draw.dt.DT_details", function(t, e) {
                            s === e && o.rows({
                                page: "current"
                            }).eq(0).each(function(t) {
                                (t = a[t])._detailsShow && t._details.insertAfter(t.nTr)
                            })
                        }), o.on("column-visibility.dt.DT_details", function(t, e) {
                            if (s === e)
                                for (var i, n = m(e), o = 0, r = a.length; o < r; o++)(i = a[o])._details && i._details.children("td[colspan]").attr("colspan", n)
                        }), o.on("destroy.dt.DT_details", function(t, e) {
                            if (s === e)
                                for (var i = 0, n = a.length; i < n; i++) a[i]._details && _e(o, i)
                        }))
                    }
                }
            };
        Gt("row().child()", function(t, e) {
            var s = this.context;
            if (t === i) return s.length && this.length ? s[0].aoData[this[0]]._details : i;
            if (!0 === t) this.child.show();
            else if (!1 === t) _e(this);
            else if (s.length && this.length) {
                var o = s[0],
                    a = (s = s[0].aoData[this[0]], []),
                    r = function(t, e) {
                        if (n.isArray(t) || t instanceof n)
                            for (var i = 0, s = t.length; i < s; i++) r(t[i], e);
                        else t.nodeName && "tr" === t.nodeName.toLowerCase() ? a.push(t) : (i = n("<tr><td/></tr>").addClass(e), n("td", i).addClass(e).html(t)[0].colSpan = m(o), a.push(i[0]))
                    };
                r(t, e), s._details && s._details.remove(), s._details = n(a), s._detailsShow && s._details.insertAfter(s.nTr)
            }
            return this
        }), Gt(["row().child.show()", "row().child().show()"], function() {
            return Me(this, !0), this
        }), Gt(["row().child.hide()", "row().child().hide()"], function() {
            return Me(this, !1), this
        }), Gt(["row().child.remove()", "row().child().remove()"], function() {
            return _e(this), this
        }), Gt("row().child.isShown()", function() {
            var t = this.context;
            return t.length && this.length && t[0].aoData[this[0]]._detailsShow || !1
        });
        var Ae = /^(.+):(name|visIdx|visible)$/,
            Pe = function(t, e, i, n, s) {
                i = [], n = 0;
                for (var o = s.length; n < o; n++) i.push(S(t, s[n], e));
                return i
            };
        Gt("columns()", function(t, e) {
            t === i ? t = "" : n.isPlainObject(t) && (e = t, t = "");
            e = De(e);
            var s = this.iterator("table", function(i) {
                var s = t,
                    o = e,
                    a = i.aoColumns,
                    r = he(a, "sName"),
                    l = he(a, "nTh");
                return ke("column", s, function(t) {
                    var e = oe(t);
                    if ("" === t) return de(a.length);
                    if (null !== e) return [e >= 0 ? e : a.length + e];
                    if ("function" == typeof t) {
                        var s = Te(i, o);
                        return n.map(a, function(e, n) {
                            return t(n, Pe(i, n, 0, 0, s), l[n]) ? n : null
                        })
                    }
                    var h = "string" == typeof t ? t.match(Ae) : "";
                    if (!h) return n(l).filter(t).map(function() {
                        return n.inArray(this, l)
                    }).toArray();
                    switch (h[2]) {
                        case "visIdx":
                        case "visible":
                            if ((e = parseInt(h[1], 10)) < 0) {
                                var c = n.map(a, function(t, e) {
                                    return t.bVisible ? e : null
                                });
                                return [c[c.length + e]]
                            }
                            return [f(i, e)];
                        case "name":
                            return n.map(r, function(t, e) {
                                return t === h[1] ? e : null
                            })
                    }
                }, i, o)
            }, 1);
            return s.selector.cols = t, s.selector.opts = e, s
        }), Qt("columns().header()", "column().header()", function() {
            return this.iterator("column", function(t, e) {
                return t.aoColumns[e].nTh
            }, 1)
        }), Qt("columns().footer()", "column().footer()", function() {
            return this.iterator("column", function(t, e) {
                return t.aoColumns[e].nTf
            }, 1)
        }), Qt("columns().data()", "column().data()", function() {
            return this.iterator("column-rows", Pe, 1)
        }), Qt("columns().dataSrc()", "column().dataSrc()", function() {
            return this.iterator("column", function(t, e) {
                return t.aoColumns[e].mData
            }, 1)
        }), Qt("columns().cache()", "column().cache()", function(t) {
            return this.iterator("column-rows", function(e, i, n, s, o) {
                return ce(e.aoData, o, "search" === t ? "_aFilterData" : "_aSortData", i)
            }, 1)
        }), Qt("columns().nodes()", "column().nodes()", function() {
            return this.iterator("column-rows", function(t, e, i, n, s) {
                return ce(t.aoData, s, "anCells", e)
            }, 1)
        }), Qt("columns().visible()", "column().visible()", function(t, e) {
            return this.iterator("column", function(s, o) {
                if (t === i) return s.aoColumns[o].bVisible;
                var a, r, l, h = s.aoColumns,
                    c = h[o],
                    d = s.aoData;
                if (t !== i && c.bVisible !== t) {
                    if (t) {
                        var u = n.inArray(!0, he(h, "bVisible"), o + 1);
                        for (a = 0, r = d.length; a < r; a++) l = d[a].nTr, h = d[a].anCells, l && l.insertBefore(h[o], h[u] || null)
                    } else n(he(s.aoData, "anCells", o)).detach();
                    c.bVisible = t, E(s, s.aoHeader), E(s, s.aoFooter), (e === i || e) && (p(s), (s.oScroll.sX || s.oScroll.sY) && ft(s)), zt(s, null, "column-visibility", [s, o, t]), Ot(s)
                }
            })
        }), Qt("columns().indexes()", "column().index()", function(t) {
            return this.iterator("column", function(e, i) {
                return "visible" === t ? g(e, i) : i
            }, 1)
        }), Gt("columns.adjust()", function() {
            return this.iterator("table", function(t) {
                p(t)
            }, 1)
        }), Gt("column.index()", function(t, e) {
            if (0 !== this.context.length) {
                var i = this.context[0];
                if ("fromVisible" === t || "toData" === t) return f(i, e);
                if ("fromData" === t || "toVisible" === t) return g(i, e)
            }
        }), Gt("column()", function(t, e) {
            return Ce(this.columns(t, e))
        }), Gt("cells()", function(t, e, s) {
            if (n.isPlainObject(t) && (t.row === i ? (s = t, t = null) : (s = e, e = null)), n.isPlainObject(e) && (s = e, e = null), null === e || e === i) return this.iterator("table", function(e) {
                var o, a, r, l, h, c, d, u = t,
                    p = De(s),
                    f = e.aoData,
                    g = Te(e, p),
                    m = ue(ce(f, g, "anCells")),
                    v = n([].concat.apply([], m)),
                    y = e.aoColumns.length;
                return ke("cell", u, function(t) {
                    var s = "function" == typeof t;
                    if (null === t || t === i || s) {
                        for (a = [], r = 0, l = g.length; r < l; r++)
                            for (o = g[r], h = 0; h < y; h++) c = {
                                row: o,
                                column: h
                            }, s ? (d = e.aoData[o], t(c, S(e, o, h), d.anCells ? d.anCells[h] : null) && a.push(c)) : a.push(c);
                        return a
                    }
                    return n.isPlainObject(t) ? [t] : v.filter(t).map(function(t, e) {
                        return {
                            row: o = e.parentNode._DT_RowIndex,
                            column: n.inArray(e, f[o].anCells)
                        }
                    }).toArray()
                }, e, p)
            });
            var o, a, r, l, h, c = this.columns(e, s),
                d = this.rows(t, s),
                u = this.iterator("table", function(t, e) {
                    for (o = [], a = 0, r = d[e].length; a < r; a++)
                        for (l = 0, h = c[e].length; l < h; l++) o.push({
                            row: d[e][a],
                            column: c[e][l]
                        });
                    return o
                }, 1);
            return n.extend(u.selector, {
                cols: e,
                rows: t,
                opts: s
            }), u
        }), Qt("cells().nodes()", "cell().node()", function() {
            return this.iterator("cell", function(t, e, n) {
                return (t = t.aoData[e].anCells) ? t[n] : i
            }, 1)
        }), Gt("cells().data()", function() {
            return this.iterator("cell", function(t, e, i) {
                return S(t, e, i)
            }, 1)
        }), Qt("cells().cache()", "cell().cache()", function(t) {
            return t = "search" === t ? "_aFilterData" : "_aSortData", this.iterator("cell", function(e, i, n) {
                return e.aoData[i][t][n]
            }, 1)
        }), Qt("cells().render()", "cell().render()", function(t) {
            return this.iterator("cell", function(e, i, n) {
                return S(e, i, n, t)
            }, 1)
        }), Qt("cells().indexes()", "cell().index()", function() {
            return this.iterator("cell", function(t, e, i) {
                return {
                    row: e,
                    column: i,
                    columnVisible: g(t, i)
                }
            }, 1)
        }), Qt("cells().invalidate()", "cell().invalidate()", function(t) {
            return this.iterator("cell", function(e, i, n) {
                P(e, i, t, n)
            })
        }), Gt("cell()", function(t, e, i) {
            return Ce(this.cells(t, e, i))
        }), Gt("cell().data()", function(t) {
            var e = this.context,
                n = this[0];
            return t === i ? e.length && n.length ? S(e[0], n[0].row, n[0].column) : i : (k(e[0], n[0].row, n[0].column, t), P(e[0], n[0].row, "data", n[0].column), this)
        }), Gt("order()", function(t, e) {
            var s = this.context;
            return t === i ? 0 !== s.length ? s[0].aaSorting : i : ("number" == typeof t ? t = [
                [t, e]
            ] : n.isArray(t[0]) || (t = Array.prototype.slice.call(arguments)), this.iterator("table", function(e) {
                e.aaSorting = t.slice()
            }))
        }), Gt("order.listener()", function(t, e, i) {
            return this.iterator("table", function(n) {
                Mt(n, t, e, i)
            })
        }), Gt(["columns().order()", "column().order()"], function(t) {
            var e = this;
            return this.iterator("table", function(i, s) {
                var o = [];
                n.each(e[s], function(e, i) {
                    o.push([i, t])
                }), i.aaSorting = o
            })
        }), Gt("search()", function(t, e, s, o) {
            var a = this.context;
            return t === i ? 0 !== a.length ? a[0].oPreviousSearch.sSearch : i : this.iterator("table", function(i) {
                i.oFeatures.bFilter && q(i, n.extend({}, i.oPreviousSearch, {
                    sSearch: t + "",
                    bRegex: null !== e && e,
                    bSmart: null === s || s,
                    bCaseInsensitive: null === o || o
                }), 1)
            })
        }), Qt("columns().search()", "column().search()", function(t, e, s, o) {
            return this.iterator("column", function(a, r) {
                var l = a.aoPreSearchCols;
                if (t === i) return l[r].sSearch;
                a.oFeatures.bFilter && (n.extend(l[r], {
                    sSearch: t + "",
                    bRegex: null !== e && e,
                    bSmart: null === s || s,
                    bCaseInsensitive: null === o || o
                }), q(a, a.oPreviousSearch, 1))
            })
        }), Gt("state()", function() {
            return this.context.length ? this.context[0].oSavedState : null
        }), Gt("state.clear()", function() {
            return this.iterator("table", function(t) {
                t.fnStateSaveCallback.call(t.oInstance, t, {})
            })
        }), Gt("state.loaded()", function() {
            return this.context.length ? this.context[0].oLoadedState : null
        }), Gt("state.save()", function() {
            return this.iterator("table", function(t) {
                Ot(t)
            })
        }), Vt.versionCheck = Vt.fnVersionCheck = function(t) {
            for (var e, i, n = Vt.version.split("."), s = 0, o = (t = t.split(".")).length; s < o; s++)
                if ((e = parseInt(n[s], 10) || 0) !== (i = parseInt(t[s], 10) || 0)) return e > i;
            return !0
        }, Vt.isDataTable = Vt.fnIsDataTable = function(t) {
            var e = n(t).get(0),
                i = !1;
            return n.each(Vt.settings, function(t, s) {
                var o = s.nScrollHead ? n("table", s.nScrollHead)[0] : null,
                    a = s.nScrollFoot ? n("table", s.nScrollFoot)[0] : null;
                s.nTable !== e && o !== e && a !== e || (i = !0)
            }), i
        }, Vt.tables = Vt.fnTables = function(t) {
            return n.map(Vt.settings, function(e) {
                if (!t || t && n(e.nTable).is(":visible")) return e.nTable
            })
        }, Vt.util = {
            throttle: vt,
            escapeRegex: K
        }, Vt.camelToHungarian = o, Gt("$()", function(t, e) {
            var i = this.rows(e).nodes();
            i = n(i);
            return n([].concat(i.filter(t).toArray(), i.find(t).toArray()))
        }), n.each(["on", "one", "off"], function(t, e) {
            Gt(e + "()", function() {
                var t = Array.prototype.slice.call(arguments);
                t[0].match(/\.dt\b/) || (t[0] += ".dt");
                var i = n(this.tables().nodes());
                return i[e].apply(i, t), this
            })
        }), Gt("clear()", function() {
            return this.iterator("table", function(t) {
                M(t)
            })
        }), Gt("settings()", function() {
            return new Yt(this.context, this.context)
        }), Gt("init()", function() {
            var t = this.context;
            return t.length ? t[0].oInit : null
        }), Gt("data()", function() {
            return this.iterator("table", function(t) {
                return he(t.aoData, "_aData")
            }).flatten()
        }), Gt("destroy()", function(e) {
            return e = e || !1, this.iterator("table", function(i) {
                var s, o = i.nTableWrapper.parentNode,
                    a = i.oClasses,
                    r = i.nTable,
                    l = i.nTBody,
                    h = i.nTHead,
                    c = i.nTFoot,
                    d = n(r),
                    u = (l = n(l), n(i.nTableWrapper)),
                    p = n.map(i.aoData, function(t) {
                        return t.nTr
                    });
                i.bDestroying = !0, zt(i, "aoDestroyCallback", "destroy", [i]), e || new Yt(i).columns().visible(!0), u.unbind(".DT").find(":not(tbody *)").unbind(".DT"), n(t).unbind(".DT-" + i.sInstance), r != h.parentNode && (d.children("thead").detach(), d.append(h)), c && r != c.parentNode && (d.children("tfoot").detach(), d.append(c)), d.detach(), u.detach(), i.aaSorting = [], i.aaSortingFixed = [], At(i), n(p).removeClass(i.asStripeClasses.join(" ")), n("th, td", h).removeClass(a.sSortable + " " + a.sSortableAsc + " " + a.sSortableDesc + " " + a.sSortableNone), i.bJUI && (n("th span." + a.sSortIcon + ", td span." + a.sSortIcon, h).detach(), n("th, td", h).each(function() {
                    var t = n("div." + a.sSortJUIWrapper, this);
                    n(this).append(t.contents()), t.detach()
                })), !e && o && o.insertBefore(r, i.nTableReinsertBefore), l.children().detach(), l.append(p), d.css("width", i.sDestroyWidth).removeClass(a.sTable), (s = i.asDestroyStripes.length) && l.children().each(function(t) {
                    n(this).addClass(i.asDestroyStripes[t % s])
                }), -1 !== (o = n.inArray(i, Vt.settings)) && Vt.settings.splice(o, 1)
            })
        }), n.each(["column", "row", "cell"], function(t, e) {
            Gt(e + "s().every()", function(t) {
                return this.iterator(e, function(i, n, s) {
                    t.call(new Yt(i)[e](n, s))
                })
            })
        }), Gt("i18n()", function(t, e, s) {
            var o = this.context[0];
            return (t = C(t)(o.oLanguage)) === i && (t = e), s !== i && n.isPlainObject(t) && (t = t[s] !== i ? t[s] : t._), t.replace("%d", s)
        }), Vt.version = "1.10.7", Vt.settings = [], Vt.models = {}, Vt.models.oSearch = {
            bCaseInsensitive: !0,
            sSearch: "",
            bRegex: !1,
            bSmart: !0
        }, Vt.models.oRow = {
            nTr: null,
            anCells: null,
            _aData: [],
            _aSortData: null,
            _aFilterData: null,
            _sFilterRow: null,
            _sRowStripe: "",
            src: null
        }, Vt.models.oColumn = {
            idx: null,
            aDataSort: null,
            asSorting: null,
            bSearchable: null,
            bSortable: null,
            bVisible: null,
            _sManualType: null,
            _bAttrSrc: !1,
            fnCreatedCell: null,
            fnGetData: null,
            fnSetData: null,
            mData: null,
            mRender: null,
            nTh: null,
            nTf: null,
            sClass: null,
            sContentPadding: null,
            sDefaultContent: null,
            sName: null,
            sSortDataType: "std",
            sSortingClass: null,
            sSortingClassJUI: null,
            sTitle: null,
            sType: null,
            sWidth: null,
            sWidthOrig: null
        }, Vt.defaults = {
            aaData: null,
            aaSorting: [
                [0, "asc"]
            ],
            aaSortingFixed: [],
            ajax: null,
            aLengthMenu: [10, 25, 50, 100],
            aoColumns: null,
            aoColumnDefs: null,
            aoSearchCols: [],
            asStripeClasses: null,
            bAutoWidth: !0,
            bDeferRender: !1,
            bDestroy: !1,
            bFilter: !0,
            bInfo: !0,
            bJQueryUI: !1,
            bLengthChange: !0,
            bPaginate: !0,
            bProcessing: !1,
            bRetrieve: !1,
            bScrollCollapse: !1,
            bServerSide: !1,
            bSort: !0,
            bSortMulti: !0,
            bSortCellsTop: !1,
            bSortClasses: !0,
            bStateSave: !1,
            fnCreatedRow: null,
            fnDrawCallback: null,
            fnFooterCallback: null,
            fnFormatNumber: function(t) {
                return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
            },
            fnHeaderCallback: null,
            fnInfoCallback: null,
            fnInitComplete: null,
            fnPreDrawCallback: null,
            fnRowCallback: null,
            fnServerData: null,
            fnServerParams: null,
            fnStateLoadCallback: function(t) {
                try {
                    return JSON.parse((-1 === t.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + t.sInstance + "_" + location.pathname))
                } catch (t) {}
            },
            fnStateLoadParams: null,
            fnStateLoaded: null,
            fnStateSaveCallback: function(t, e) {
                try {
                    (-1 === t.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + t.sInstance + "_" + location.pathname, JSON.stringify(e))
                } catch (t) {}
            },
            fnStateSaveParams: null,
            iStateDuration: 7200,
            iDeferLoading: null,
            iDisplayLength: 10,
            iDisplayStart: 0,
            iTabIndex: 0,
            oClasses: {},
            oLanguage: {
                oAria: {
                    sSortAscending: ": activate to sort column ascending",
                    sSortDescending: ": activate to sort column descending"
                },
                oPaginate: {
                    sFirst: "First",
                    sLast: "Last",
                    sNext: "Next",
                    sPrevious: "Previous"
                },
                sEmptyTable: "No data available in table",
                sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
                sInfoEmpty: "Showing 0 to 0 of 0 entries",
                sInfoFiltered: "(filtered from _MAX_ total entries)",
                sInfoPostFix: "",
                sDecimal: "",
                sThousands: ",",
                sLengthMenu: "Show _MENU_ entries",
                sLoadingRecords: "Loading...",
                sProcessing: "Processing...",
                sSearch: "Search:",
                sSearchPlaceholder: "",
                sUrl: "",
                sZeroRecords: "No matching records found"
            },
            oSearch: n.extend({}, Vt.models.oSearch),
            sAjaxDataProp: "data",
            sAjaxSource: null,
            sDom: "lfrtip",
            searchDelay: null,
            sPaginationType: "simple_numbers",
            sScrollX: "",
            sScrollXInner: "",
            sScrollY: "",
            sServerMethod: "GET",
            renderer: null
        }, s(Vt.defaults), Vt.defaults.column = {
            aDataSort: null,
            iDataSort: -1,
            asSorting: ["asc", "desc"],
            bSearchable: !0,
            bSortable: !0,
            bVisible: !0,
            fnCreatedCell: null,
            mData: null,
            mRender: null,
            sCellType: "td",
            sClass: "",
            sContentPadding: "",
            sDefaultContent: null,
            sName: "",
            sSortDataType: "std",
            sTitle: null,
            sType: null,
            sWidth: null
        }, s(Vt.defaults.column), Vt.models.oSettings = {
            oFeatures: {
                bAutoWidth: null,
                bDeferRender: null,
                bFilter: null,
                bInfo: null,
                bLengthChange: null,
                bPaginate: null,
                bProcessing: null,
                bServerSide: null,
                bSort: null,
                bSortMulti: null,
                bSortClasses: null,
                bStateSave: null
            },
            oScroll: {
                bCollapse: null,
                iBarWidth: 0,
                sX: null,
                sXInner: null,
                sY: null
            },
            oLanguage: {
                fnInfoCallback: null
            },
            oBrowser: {
                bScrollOversize: !1,
                bScrollbarLeft: !1
            },
            ajax: null,
            aanFeatures: [],
            aoData: [],
            aiDisplay: [],
            aiDisplayMaster: [],
            aoColumns: [],
            aoHeader: [],
            aoFooter: [],
            oPreviousSearch: {},
            aoPreSearchCols: [],
            aaSorting: null,
            aaSortingFixed: [],
            asStripeClasses: null,
            asDestroyStripes: [],
            sDestroyWidth: 0,
            aoRowCallback: [],
            aoHeaderCallback: [],
            aoFooterCallback: [],
            aoDrawCallback: [],
            aoRowCreatedCallback: [],
            aoPreDrawCallback: [],
            aoInitComplete: [],
            aoStateSaveParams: [],
            aoStateLoadParams: [],
            aoStateLoaded: [],
            sTableId: "",
            nTable: null,
            nTHead: null,
            nTFoot: null,
            nTBody: null,
            nTableWrapper: null,
            bDeferLoading: !1,
            bInitialised: !1,
            aoOpenRows: [],
            sDom: null,
            searchDelay: null,
            sPaginationType: "two_button",
            iStateDuration: 0,
            aoStateSave: [],
            aoStateLoad: [],
            oSavedState: null,
            oLoadedState: null,
            sAjaxSource: null,
            sAjaxDataProp: null,
            bAjaxDataGet: !0,
            jqXHR: null,
            json: i,
            oAjaxData: i,
            fnServerData: null,
            aoServerParams: [],
            sServerMethod: null,
            fnFormatNumber: null,
            aLengthMenu: null,
            iDraw: 0,
            bDrawing: !1,
            iDrawError: -1,
            _iDisplayLength: 10,
            _iDisplayStart: 0,
            _iRecordsTotal: 0,
            _iRecordsDisplay: 0,
            bJUI: null,
            oClasses: {},
            bFiltered: !1,
            bSorted: !1,
            bSortCellsTop: null,
            oInit: null,
            aoDestroyCallback: [],
            fnRecordsTotal: function() {
                return "ssp" == Wt(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
            },
            fnRecordsDisplay: function() {
                return "ssp" == Wt(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
            },
            fnDisplayEnd: function() {
                var t = this._iDisplayLength,
                    e = this._iDisplayStart,
                    i = e + t,
                    n = this.aiDisplay.length,
                    s = this.oFeatures,
                    o = s.bPaginate;
                return s.bServerSide ? !1 === o || -1 === t ? e + n : Math.min(e + t, this._iRecordsDisplay) : !o || i > n || -1 === t ? n : i
            },
            oInstance: null,
            sInstance: null,
            iTabIndex: 0,
            nScrollHead: null,
            nScrollFoot: null,
            aLastSort: [],
            oPlugins: {}
        }, Vt.ext = qt = {
            buttons: {},
            classes: {},
            errMode: "alert",
            feature: [],
            search: [],
            selector: {
                cell: [],
                column: [],
                row: []
            },
            internal: {},
            legacy: {
                ajax: null
            },
            pager: {},
            renderer: {
                pageButton: {},
                header: {}
            },
            order: {},
            type: {
                detect: [],
                search: {},
                order: {}
            },
            _unique: 0,
            fnVersionCheck: Vt.fnVersionCheck,
            iApiIndex: 0,
            oJUIClasses: {},
            sVersion: Vt.version
        }, n.extend(qt, {
            afnFiltering: qt.search,
            aTypes: qt.type.detect,
            ofnSearch: qt.type.search,
            oSort: qt.type.order,
            afnSortData: qt.order,
            aoFeatures: qt.feature,
            oApi: qt.internal,
            oStdClasses: qt.classes,
            oPagination: qt.pager
        }), n.extend(Vt.ext.classes, {
            sTable: "dataTable",
            sNoFooter: "no-footer",
            sPageButton: "paginate_button",
            sPageButtonActive: "current",
            sPageButtonDisabled: "disabled",
            sStripeOdd: "odd",
            sStripeEven: "even",
            sRowEmpty: "dataTables_empty",
            sWrapper: "dataTables_wrapper",
            sFilter: "dataTables_filter",
            sInfo: "dataTables_info",
            sPaging: "dataTables_paginate paging_",
            sLength: "dataTables_length",
            sProcessing: "dataTables_processing",
            sSortAsc: "sorting_asc",
            sSortDesc: "sorting_desc",
            sSortable: "sorting",
            sSortableAsc: "sorting_asc_disabled",
            sSortableDesc: "sorting_desc_disabled",
            sSortableNone: "sorting_disabled",
            sSortColumn: "sorting_",
            sFilterInput: "",
            sLengthSelect: "",
            sScrollWrapper: "dataTables_scroll",
            sScrollHead: "dataTables_scrollHead",
            sScrollHeadInner: "dataTables_scrollHeadInner",
            sScrollBody: "dataTables_scrollBody",
            sScrollFoot: "dataTables_scrollFoot",
            sScrollFootInner: "dataTables_scrollFootInner",
            sHeaderTH: "",
            sFooterTH: "",
            sSortJUIAsc: "",
            sSortJUIDesc: "",
            sSortJUI: "",
            sSortJUIAscAllowed: "",
            sSortJUIDescAllowed: "",
            sSortJUIWrapper: "",
            sSortIcon: "",
            sJUIHeader: "",
            sJUIFooter: ""
        });
        var Oe = "ui-state-default",
            Ie = "css_right ui-icon ui-icon-",
            Ne = "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
        n.extend(Vt.ext.oJUIClasses, Vt.ext.classes, {
            sPageButton: "fg-button ui-button " + Oe,
            sPageButtonActive: "ui-state-disabled",
            sPageButtonDisabled: "ui-state-disabled",
            sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
            sSortAsc: Oe + " sorting_asc",
            sSortDesc: Oe + " sorting_desc",
            sSortable: Oe + " sorting",
            sSortableAsc: Oe + " sorting_asc_disabled",
            sSortableDesc: Oe + " sorting_desc_disabled",
            sSortableNone: Oe + " sorting_disabled",
            sSortJUIAsc: Ie + "triangle-1-n",
            sSortJUIDesc: Ie + "triangle-1-s",
            sSortJUI: Ie + "carat-2-n-s",
            sSortJUIAscAllowed: Ie + "carat-1-n",
            sSortJUIDescAllowed: Ie + "carat-1-s",
            sSortJUIWrapper: "DataTables_sort_wrapper",
            sSortIcon: "DataTables_sort_icon",
            sScrollHead: "dataTables_scrollHead " + Oe,
            sScrollFoot: "dataTables_scrollFoot " + Oe,
            sHeaderTH: Oe,
            sFooterTH: Oe,
            sJUIHeader: Ne + " ui-corner-tl ui-corner-tr",
            sJUIFooter: Ne + " ui-corner-bl ui-corner-br"
        });
        var $e = Vt.ext.pager;
        n.extend($e, {
            simple: function() {
                return ["previous", "next"]
            },
            full: function() {
                return ["first", "previous", "next", "last"]
            },
            simple_numbers: function(t, e) {
                return ["previous", Ut(t, e), "next"]
            },
            full_numbers: function(t, e) {
                return ["first", "previous", Ut(t, e), "next", "last"]
            },
            _numbers: Ut,
            numbers_length: 7
        }), n.extend(!0, Vt.ext.renderer, {
            pageButton: {
                _: function(t, i, s, o, a, r) {
                    var l, h, c, d = t.oClasses,
                        u = t.oLanguage.oPaginate,
                        p = 0,
                        f = function(e, i) {
                            var o, c, g, m, v = function(e) {
                                ct(t, e.data.action, !0)
                            };
                            for (o = 0, c = i.length; o < c; o++)
                                if (m = i[o], n.isArray(m)) g = n("<" + (m.DT_el || "div") + "/>").appendTo(e), f(g, m);
                                else {
                                    switch (h = l = "", m) {
                                        case "ellipsis":
                                            e.append('<span class="ellipsis">&#x2026;</span>');
                                            break;
                                        case "first":
                                            l = u.sFirst, h = m + (a > 0 ? "" : " " + d.sPageButtonDisabled);
                                            break;
                                        case "previous":
                                            l = u.sPrevious, h = m + (a > 0 ? "" : " " + d.sPageButtonDisabled);
                                            break;
                                        case "next":
                                            l = u.sNext, h = m + (a < r - 1 ? "" : " " + d.sPageButtonDisabled);
                                            break;
                                        case "last":
                                            l = u.sLast, h = m + (a < r - 1 ? "" : " " + d.sPageButtonDisabled);
                                            break;
                                        default:
                                            l = m + 1, h = a === m ? d.sPageButtonActive : ""
                                    }
                                    l && (jt(g = n("<a>", {
                                        class: d.sPageButton + " " + h,
                                        "aria-controls": t.sTableId,
                                        "data-dt-idx": p,
                                        tabindex: t.iTabIndex,
                                        id: 0 === s && "string" == typeof m ? t.sTableId + "_" + m : null
                                    }).html(l).appendTo(e), {
                                        action: m
                                    }, v), p++)
                                }
                        };
                    try {
                        c = n(e.activeElement).data("dt-idx")
                    } catch (t) {}
                    f(n(i).empty(), o), c && n(i).find("[data-dt-idx=" + c + "]").focus()
                }
            }
        }), n.extend(Vt.ext.type.detect, [function(t, e) {
            var i = e.oLanguage.sDecimal;
            return re(t, i) ? "num" + i : null
        }, function(t) {
            if (t && !(t instanceof Date) && (!te.test(t) || !ee.test(t))) return null;
            var e = Date.parse(t);
            return null !== e && !isNaN(e) || se(t) ? "date" : null
        }, function(t, e) {
            var i = e.oLanguage.sDecimal;
            return re(t, i, !0) ? "num-fmt" + i : null
        }, function(t, e) {
            var i = e.oLanguage.sDecimal;
            return le(t, i) ? "html-num" + i : null
        }, function(t, e) {
            var i = e.oLanguage.sDecimal;
            return le(t, i, !0) ? "html-num-fmt" + i : null
        }, function(t) {
            return se(t) || "string" == typeof t && -1 !== t.indexOf("<") ? "html" : null
        }]), n.extend(Vt.ext.type.search, {
            html: function(t) {
                return se(t) ? t : "string" == typeof t ? t.replace(Kt, " ").replace(Zt, "") : ""
            },
            string: function(t) {
                return se(t) ? t : "string" == typeof t ? t.replace(Kt, " ") : t
            }
        });
        var Ee = function(t, e, i, n) {
            return 0 === t || t && "-" !== t ? (e && (t = ae(t, e)), t.replace && (i && (t = t.replace(i, "")), n && (t = t.replace(n, ""))), 1 * t) : -1 / 0
        };
        return n.extend(qt.type.order, {
            "date-pre": function(t) {
                return Date.parse(t) || 0
            },
            "html-pre": function(t) {
                return se(t) ? "" : t.replace ? t.replace(/<.*?>/g, "").toLowerCase() : t + ""
            },
            "string-pre": function(t) {
                return se(t) ? "" : "string" == typeof t ? t.toLowerCase() : t.toString ? t.toString() : ""
            },
            "string-asc": function(t, e) {
                return t < e ? -1 : t > e ? 1 : 0
            },
            "string-desc": function(t, e) {
                return t < e ? 1 : t > e ? -1 : 0
            }
        }), Jt(""), n.extend(!0, Vt.ext.renderer, {
            header: {
                _: function(t, e, i, s) {
                    n(t.nTable).on("order.dt.DT", function(n, o, a, r) {
                        t === o && (n = i.idx, e.removeClass(i.sSortingClass + " " + s.sSortAsc + " " + s.sSortDesc).addClass("asc" == r[n] ? s.sSortAsc : "desc" == r[n] ? s.sSortDesc : i.sSortingClass))
                    })
                },
                jqueryui: function(t, e, i, s) {
                    n("<div/>").addClass(s.sSortJUIWrapper).append(e.contents()).append(n("<span/>").addClass(s.sSortIcon + " " + i.sSortingClassJUI)).appendTo(e), n(t.nTable).on("order.dt.DT", function(n, o, a, r) {
                        t === o && (n = i.idx, e.removeClass(s.sSortAsc + " " + s.sSortDesc).addClass("asc" == r[n] ? s.sSortAsc : "desc" == r[n] ? s.sSortDesc : i.sSortingClass), e.find("span." + s.sSortIcon).removeClass(s.sSortJUIAsc + " " + s.sSortJUIDesc + " " + s.sSortJUI + " " + s.sSortJUIAscAllowed + " " + s.sSortJUIDescAllowed).addClass("asc" == r[n] ? s.sSortJUIAsc : "desc" == r[n] ? s.sSortJUIDesc : i.sSortingClassJUI))
                    })
                }
            }
        }), Vt.render = {
            number: function(t, e, i, n) {
                return {
                    display: function(s) {
                        if ("number" != typeof s && "string" != typeof s) return s;
                        var o = 0 > s ? "-" : "",
                            a = (s = Math.abs(parseFloat(s)), parseInt(s, 10));
                        s = i ? e + (s - a).toFixed(i).substring(2) : "";
                        return o + (n || "") + a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t) + s
                    }
                }
            }
        }, n.extend(Vt.ext.internal, {
            _fnExternApiFunc: Bt,
            _fnBuildAjax: R,
            _fnAjaxUpdate: W,
            _fnAjaxParameters: U,
            _fnAjaxUpdateDraw: J,
            _fnAjaxDataSrc: B,
            _fnAddColumn: d,
            _fnColumnOptions: u,
            _fnAdjustColumnSizing: p,
            _fnVisibleToColumnIndex: f,
            _fnColumnIndexToVisible: g,
            _fnVisbleColumns: m,
            _fnGetColumns: v,
            _fnColumnTypes: y,
            _fnApplyColumnDefs: b,
            _fnHungarianMap: s,
            _fnCamelToHungarian: o,
            _fnLanguageCompat: a,
            _fnBrowserDetect: h,
            _fnAddData: w,
            _fnAddTr: x,
            _fnNodeToDataIndex: function(t, e) {
                return e._DT_RowIndex !== i ? e._DT_RowIndex : null
            },
            _fnNodeToColumnIndex: function(t, e, i) {
                return n.inArray(i, t.aoData[e].anCells)
            },
            _fnGetCellData: S,
            _fnSetCellData: k,
            _fnSplitObjNotation: D,
            _fnGetObjectDataFn: C,
            _fnSetObjectDataFn: T,
            _fnGetDataMaster: _,
            _fnClearTable: M,
            _fnDeleteIndex: A,
            _fnInvalidate: P,
            _fnGetRowElements: O,
            _fnCreateTr: I,
            _fnBuildHead: $,
            _fnDrawHead: E,
            _fnDraw: F,
            _fnReDraw: j,
            _fnAddOptionsHtml: L,
            _fnDetectHeader: z,
            _fnGetUniqueThs: H,
            _fnFeatureHtmlFilter: V,
            _fnFilterComplete: q,
            _fnFilterCustom: Y,
            _fnFilterColumn: G,
            _fnFilter: Q,
            _fnFilterCreateSearch: X,
            _fnEscapeRegex: K,
            _fnFilterData: Z,
            _fnFeatureHtmlInfo: it,
            _fnUpdateInfo: nt,
            _fnInfoMacros: st,
            _fnInitialise: ot,
            _fnInitComplete: at,
            _fnLengthChange: rt,
            _fnFeatureHtmlLength: lt,
            _fnFeatureHtmlPaginate: ht,
            _fnPageChange: ct,
            _fnFeatureHtmlProcessing: dt,
            _fnProcessingDisplay: ut,
            _fnFeatureHtmlTable: pt,
            _fnScrollDraw: ft,
            _fnApplyToChildren: gt,
            _fnCalculateColumnWidths: mt,
            _fnThrottle: vt,
            _fnConvertToWidth: yt,
            _fnScrollingWidthAdjust: bt,
            _fnGetWidestNode: wt,
            _fnGetMaxLenString: xt,
            _fnStringToCss: St,
            _fnScrollBarWidth: kt,
            _fnSortFlatten: Dt,
            _fnSort: Ct,
            _fnSortAria: Tt,
            _fnSortListener: _t,
            _fnSortAttachListener: Mt,
            _fnSortingClasses: At,
            _fnSortData: Pt,
            _fnSaveState: Ot,
            _fnLoadState: It,
            _fnSettingsFromNode: Nt,
            _fnLog: $t,
            _fnMap: Et,
            _fnBindAction: jt,
            _fnCallbackReg: Lt,
            _fnCallbackFire: zt,
            _fnLengthOverflow: Ht,
            _fnRenderer: Rt,
            _fnDataSource: Wt,
            _fnRowAttributes: N,
            _fnCalculateEnd: function() {}
        }), n.fn.dataTable = Vt, n.fn.dataTableSettings = Vt.settings, n.fn.dataTableExt = Vt.ext, n.fn.DataTable = function(t) {
            return n(this).dataTable(t).api()
        }, n.each(Vt, function(t, e) {
            n.fn.DataTable[t] = e
        }), n.fn.dataTable
    };
    "function" == typeof define && define.amd ? define("datatables", ["jquery"], n) : "object" == typeof exports ? module.exports = n(require("jquery")) : jQuery && !jQuery.fn.dataTable && n(jQuery)
}(window, document),
function(t) {
    t.color = {}, t.color.make = function(e, i, n, s) {
        var o = {};
        return o.r = e || 0, o.g = i || 0, o.b = n || 0, o.a = null != s ? s : 1, o.add = function(t, e) {
            for (var i = 0; i < t.length; ++i) o[t.charAt(i)] += e;
            return o.normalize()
        }, o.scale = function(t, e) {
            for (var i = 0; i < t.length; ++i) o[t.charAt(i)] *= e;
            return o.normalize()
        }, o.toString = function() {
            return o.a >= 1 ? "rgb(" + [o.r, o.g, o.b].join(",") + ")" : "rgba(" + [o.r, o.g, o.b, o.a].join(",") + ")"
        }, o.normalize = function() {
            function t(t, e, i) {
                return e < t ? t : e > i ? i : e
            }
            return o.r = t(0, parseInt(o.r), 255), o.g = t(0, parseInt(o.g), 255), o.b = t(0, parseInt(o.b), 255), o.a = t(0, o.a, 1), o
        }, o.clone = function() {
            return t.color.make(o.r, o.b, o.g, o.a)
        }, o.normalize()
    }, t.color.extract = function(e, i) {
        var n;
        do {
            if ("" != (n = e.css(i).toLowerCase()) && "transparent" != n) break;
            e = e.parent()
        } while (e.length && !t.nodeName(e.get(0), "body"));
        return "rgba(0, 0, 0, 0)" == n && (n = "transparent"), t.color.parse(n)
    }, t.color.parse = function(i) {
        var n, s = t.color.make;
        if (n = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(i)) return s(parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10));
        if (n = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i)) return s(parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10), parseFloat(n[4]));
        if (n = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(i)) return s(2.55 * parseFloat(n[1]), 2.55 * parseFloat(n[2]), 2.55 * parseFloat(n[3]));
        if (n = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i)) return s(2.55 * parseFloat(n[1]), 2.55 * parseFloat(n[2]), 2.55 * parseFloat(n[3]), parseFloat(n[4]));
        if (n = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(i)) return s(parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16));
        if (n = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(i)) return s(parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16));
        var o = t.trim(i).toLowerCase();
        return "transparent" == o ? s(255, 255, 255, 0) : s((n = e[o] || [0, 0, 0])[0], n[1], n[2])
    };
    var e = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0]
    }
}(jQuery),
function(t) {
    var e = Object.prototype.hasOwnProperty;

    function i(e, i) {
        var n = i.children("." + e)[0];
        if (null == n && ((n = document.createElement("canvas")).className = e, t(n).css({
                direction: "ltr",
                position: "absolute",
                left: 0,
                top: 0
            }).appendTo(i), !n.getContext)) {
            if (!window.G_vmlCanvasManager) throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
            n = window.G_vmlCanvasManager.initElement(n)
        }
        this.element = n;
        var s = this.context = n.getContext("2d"),
            o = window.devicePixelRatio || 1,
            a = s.webkitBackingStorePixelRatio || s.mozBackingStorePixelRatio || s.msBackingStorePixelRatio || s.oBackingStorePixelRatio || s.backingStorePixelRatio || 1;
        this.pixelRatio = o / a, this.resize(i.width(), i.height()), this.textContainer = null, this.text = {}, this._textCache = {}
    }

    function n(e, n, s, o) {
        var a = [],
            r = {
                colors: ["rgba(76, 84, 84, 1)", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: !0,
                    noColumns: 1,
                    labelFormatter: null,
                    labelBoxBorderColor: "#ccc",
                    container: null,
                    position: "ne",
                    margin: 5,
                    backgroundColor: null,
                    backgroundOpacity: 1.85,
                    sorted: null
                },
                xaxis: {
                    show: null,
                    position: "bottom",
                    mode: null,
                    font: null,
                    color: null,
                    tickColor: null,
                    transform: null,
                    inverseTransform: null,
                    min: null,
                    max: null,
                    autoscaleMargin: null,
                    ticks: null,
                    tickFormatter: null,
                    labelWidth: null,
                    labelHeight: null,
                    reserveSpace: null,
                    tickLength: null,
                    alignTicksWithAxis: null,
                    tickDecimals: null,
                    tickSize: null,
                    minTickSize: null
                },
                yaxis: {
                    autoscaleMargin: .02,
                    position: "left"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: !1,
                        radius: 3,
                        lineWidth: 1,
                        fill: !0,
                        fillColor: "#ffffff",
                        symbol: "circle"
                    },
                    lines: {
                        lineWidth: 2,
                        fill: !1,
                        fillColor: null,
                        steps: !1
                    },
                    bars: {
                        show: !1,
                        lineWidth: 2,
                        barWidth: 1,
                        fill: !0,
                        fillColor: null,
                        align: "left",
                        horizontal: !1,
                        zero: !0
                    },
                    shadowSize: 3,
                    highlightColor: null
                },
                grid: {
                    show: !0,
                    aboveData: !1,
                    color: "#545454",
                    backgroundColor: null,
                    borderColor: null,
                    tickColor: null,
                    margin: 0,
                    labelMargin: 5,
                    axisMargin: 8,
                    borderWidth: 2,
                    minBorderMargin: null,
                    markings: null,
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    clickable: !1,
                    hoverable: !1,
                    autoHighlight: !0,
                    mouseActiveRadius: 10
                },
                interaction: {
                    redrawOverlayInterval: 1e3 / 60
                },
                hooks: {}
            },
            l = null,
            h = null,
            c = null,
            d = null,
            u = null,
            p = [],
            f = [],
            g = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            m = 0,
            v = 0,
            y = {
                processOptions: [],
                processRawData: [],
                processDatapoints: [],
                processOffset: [],
                drawBackground: [],
                drawSeries: [],
                draw: [],
                bindEvents: [],
                drawOverlay: [],
                shutdown: []
            },
            b = this;

        function w(t, e) {
            e = [b].concat(e);
            for (var i = 0; i < t.length; ++i) t[i].apply(this, e)
        }

        function x(e) {
            a = function(e) {
                    for (var i = [], n = 0; n < e.length; ++n) {
                        var s = t.extend(!0, {}, r.series);
                        null != e[n].data ? (s.data = e[n].data, delete e[n].data, t.extend(!0, s, e[n]), e[n].data = s.data) : s.data = e[n], i.push(s)
                    }
                    return i
                }(e),
                function() {
                    var e, i = a.length,
                        n = -1;
                    for (e = 0; e < a.length; ++e) {
                        var s = a[e].color;
                        null != s && (i--, "number" == typeof s && s > n && (n = s))
                    }
                    i <= n && (i = n + 1);
                    var o, l = [],
                        h = r.colors,
                        c = h.length,
                        d = 0;
                    for (e = 0; e < i; e++) o = t.color.parse(h[e % c] || "#666"), e % c == 0 && e && (d = d >= 0 ? d < .5 ? -d - .2 : 0 : -d), l[e] = o.scale("rgb", 1 + d);
                    var u, g = 0;
                    for (e = 0; e < a.length; ++e) {
                        if (null == (u = a[e]).color ? (u.color = l[g].toString(), ++g) : "number" == typeof u.color && (u.color = l[u.color].toString()), null == u.lines.show) {
                            var m, v = !0;
                            for (m in u)
                                if (u[m] && u[m].show) {
                                    v = !1;
                                    break
                                } v && (u.lines.show = !0)
                        }
                        null == u.lines.zero && (u.lines.zero = !!u.lines.fill), u.xaxis = C(p, S(u, "x")), u.yaxis = C(f, S(u, "y"))
                    }
                }(),
                function() {
                    var e, i, n, s, o, r, l, h, c, d, u, p, f = Number.POSITIVE_INFINITY,
                        g = Number.NEGATIVE_INFINITY,
                        m = Number.MAX_VALUE;

                    function v(t, e, i) {
                        e < t.datamin && e != -m && (t.datamin = e), i > t.datamax && i != m && (t.datamax = i)
                    }
                    for (t.each(k(), function(t, e) {
                            e.datamin = f, e.datamax = g, e.used = !1
                        }), e = 0; e < a.length; ++e)(o = a[e]).datapoints = {
                        points: []
                    }, w(y.processRawData, [o, o.data, o.datapoints]);
                    for (e = 0; e < a.length; ++e) {
                        if (o = a[e], u = o.data, !(p = o.datapoints.format)) {
                            if ((p = []).push({
                                    x: !0,
                                    number: !0,
                                    required: !0
                                }), p.push({
                                    y: !0,
                                    number: !0,
                                    required: !0
                                }), o.bars.show || o.lines.show && o.lines.fill) {
                                var b = !!(o.bars.show && o.bars.zero || o.lines.show && o.lines.zero);
                                p.push({
                                    y: !0,
                                    number: !0,
                                    required: !1,
                                    defaultValue: 0,
                                    autoscale: b
                                }), o.bars.horizontal && (delete p[p.length - 1].y, p[p.length - 1].x = !0)
                            }
                            o.datapoints.format = p
                        }
                        if (null == o.datapoints.pointsize) {
                            o.datapoints.pointsize = p.length, l = o.datapoints.pointsize, r = o.datapoints.points;
                            var x = o.lines.show && o.lines.steps;
                            for (o.xaxis.used = o.yaxis.used = !0, i = n = 0; i < u.length; ++i, n += l) {
                                var S = null == (d = u[i]);
                                if (!S)
                                    for (s = 0; s < l; ++s) h = d[s], (c = p[s]) && (c.number && null != h && (h = +h, isNaN(h) ? h = null : h == 1 / 0 ? h = m : h == -1 / 0 && (h = -m)), null == h && (c.required && (S = !0), null != c.defaultValue && (h = c.defaultValue))), r[n + s] = h;
                                if (S)
                                    for (s = 0; s < l; ++s) null != (h = r[n + s]) && !1 !== (c = p[s]).autoscale && (c.x && v(o.xaxis, h, h), c.y && v(o.yaxis, h, h)), r[n + s] = null;
                                else if (x && n > 0 && null != r[n - l] && r[n - l] != r[n] && r[n - l + 1] != r[n + 1]) {
                                    for (s = 0; s < l; ++s) r[n + l + s] = r[n + s];
                                    r[n + 1] = r[n - l + 1], n += l
                                }
                            }
                        }
                    }
                    for (e = 0; e < a.length; ++e) o = a[e], w(y.processDatapoints, [o, o.datapoints]);
                    for (e = 0; e < a.length; ++e) {
                        o = a[e], r = o.datapoints.points, l = o.datapoints.pointsize, p = o.datapoints.format;
                        var D = f,
                            C = f,
                            T = g,
                            _ = g;
                        for (i = 0; i < r.length; i += l)
                            if (null != r[i])
                                for (s = 0; s < l; ++s) h = r[i + s], (c = p[s]) && !1 !== c.autoscale && h != m && h != -m && (c.x && (h < D && (D = h), h > T && (T = h)), c.y && (h < C && (C = h), h > _ && (_ = h)));
                        if (o.bars.show) {
                            var M;
                            switch (o.bars.align) {
                                case "left":
                                    M = 0;
                                    break;
                                case "right":
                                    M = -o.bars.barWidth;
                                    break;
                                default:
                                    M = -o.bars.barWidth / 2
                            }
                            o.bars.horizontal ? (C += M, _ += M + o.bars.barWidth) : (D += M, T += M + o.bars.barWidth)
                        }
                        v(o.xaxis, D, T), v(o.yaxis, C, _)
                    }
                    t.each(k(), function(t, e) {
                        e.datamin == f && (e.datamin = null), e.datamax == g && (e.datamax = null)
                    })
                }()
        }

        function S(t, e) {
            var i = t[e + "axis"];
            return "object" == typeof i && (i = i.n), "number" != typeof i && (i = 1), i
        }

        function k() {
            return t.grep(p.concat(f), function(t) {
                return t
            })
        }

        function D(t) {
            var e, i, n = {};
            for (e = 0; e < p.length; ++e)(i = p[e]) && i.used && (n["x" + i.n] = i.c2p(t.left));
            for (e = 0; e < f.length; ++e)(i = f[e]) && i.used && (n["y" + i.n] = i.c2p(t.top));
            return void 0 !== n.x1 && (n.x = n.x1), void 0 !== n.y1 && (n.y = n.y1), n
        }

        function C(e, i) {
            return e[i - 1] || (e[i - 1] = {
                n: i,
                direction: e == p ? "x" : "y",
                options: t.extend(!0, {}, e == p ? r.xaxis : r.yaxis)
            }), e[i - 1]
        }

        function T() {
            F && clearTimeout(F), c.unbind("mousemove", j), c.unbind("mouseleave", L), c.unbind("click", z), w(y.shutdown, [c])
        }

        function _(e) {
            var i = e.labelWidth,
                n = e.labelHeight,
                s = e.options.position,
                o = "x" === e.direction,
                a = e.options.tickLength,
                h = r.grid.axisMargin,
                c = r.grid.labelMargin,
                d = !0,
                u = !0,
                m = !0,
                v = !1;
            t.each(o ? p : f, function(t, i) {
                i && (i.show || i.reserveSpace) && (i === e ? v = !0 : i.options.position === s && (v ? u = !1 : d = !1), v || (m = !1))
            }), u && (h = 0), null == a && (a = m ? "full" : 5), isNaN(+a) || (c += +a), o ? (n += c, "bottom" == s ? (g.bottom += n + h, e.box = {
                top: l.height - g.bottom,
                height: n
            }) : (e.box = {
                top: g.top + h,
                height: n
            }, g.top += n + h)) : (i += c, "left" == s ? (e.box = {
                left: g.left + h,
                width: i
            }, g.left += i + h) : (g.right += i + h, e.box = {
                left: l.width - g.right,
                width: i
            })), e.position = s, e.tickLength = a, e.box.padding = c, e.innermost = d
        }

        function M() {
            var i, n = k(),
                s = r.grid.show;
            for (var o in g) {
                var h = r.grid.margin || 0;
                g[o] = "number" == typeof h ? h : h[o] || 0
            }
            for (var o in w(y.processOffset, [g]), g) "object" == typeof r.grid.borderWidth ? g[o] += s ? r.grid.borderWidth[o] : 0 : g[o] += s ? r.grid.borderWidth : 0;
            if (t.each(n, function(t, e) {
                    var i = e.options;
                    e.show = null == i.show ? e.used : i.show, e.reserveSpace = null == i.reserveSpace ? e.show : i.reserveSpace,
                        function(t) {
                            var e = t.options,
                                i = +(null != e.min ? e.min : t.datamin),
                                n = +(null != e.max ? e.max : t.datamax),
                                s = n - i;
                            if (0 == s) {
                                var o = 0 == n ? 1 : .01;
                                null == e.min && (i -= o), null != e.max && null == e.min || (n += o)
                            } else {
                                var a = e.autoscaleMargin;
                                null != a && (null == e.min && (i -= s * a) < 0 && null != t.datamin && t.datamin >= 0 && (i = 0), null == e.max && (n += s * a) > 0 && null != t.datamax && t.datamax <= 0 && (n = 0))
                            }
                            t.min = i, t.max = n
                        }(e)
                }), s) {
                var c = t.grep(n, function(t) {
                    return t.show || t.reserveSpace
                });
                for (t.each(c, function(e, i) {
                        ! function(e) {
                            var i, n = e.options;
                            i = "number" == typeof n.ticks && n.ticks > 0 ? n.ticks : .3 * Math.sqrt("x" == e.direction ? l.width : l.height);
                            var s = (e.max - e.min) / i,
                                o = -Math.floor(Math.log(s) / Math.LN10),
                                a = n.tickDecimals;
                            null != a && o > a && (o = a);
                            var r, h = Math.pow(10, -o),
                                c = s / h;
                            c < 1.5 ? r = 1 : c < 3 ? (r = 2, c > 2.25 && (null == a || o + 1 <= a) && (r = 2.5, ++o)) : r = c < 7.5 ? 5 : 10;
                            r *= h, null != n.minTickSize && r < n.minTickSize && (r = n.minTickSize);
                            if (e.delta = s, e.tickDecimals = Math.max(0, null != a ? a : o), e.tickSize = n.tickSize || r, "time" == n.mode && !e.tickGenerator) throw new Error("Time mode requires the flot.time plugin.");
                            e.tickGenerator || (e.tickGenerator = function(t) {
                                var e, i, n, s = [],
                                    o = (i = t.min, (n = t.tickSize) * Math.floor(i / n)),
                                    a = 0,
                                    r = Number.NaN;
                                do {
                                    e = r, r = o + a * t.tickSize, s.push(r), ++a
                                } while (r < t.max && r != e);
                                return s
                            }, e.tickFormatter = function(t, e) {
                                var i = e.tickDecimals ? Math.pow(10, e.tickDecimals) : 1,
                                    n = "" + Math.round(t * i) / i;
                                if (null != e.tickDecimals) {
                                    var s = n.indexOf("."),
                                        o = -1 == s ? 0 : n.length - s - 1;
                                    if (o < e.tickDecimals) return (o ? n : n + ".") + ("" + i).substr(1, e.tickDecimals - o)
                                }
                                return n
                            });
                            t.isFunction(n.tickFormatter) && (e.tickFormatter = function(t, e) {
                                return "" + n.tickFormatter(t, e)
                            });
                            if (null != n.alignTicksWithAxis) {
                                var d = ("x" == e.direction ? p : f)[n.alignTicksWithAxis - 1];
                                if (d && d.used && d != e) {
                                    var u = e.tickGenerator(e);
                                    if (u.length > 0 && (null == n.min && (e.min = Math.min(e.min, u[0])), null == n.max && u.length > 1 && (e.max = Math.max(e.max, u[u.length - 1]))), e.tickGenerator = function(t) {
                                            var e, i, n = [];
                                            for (i = 0; i < d.ticks.length; ++i) e = (d.ticks[i].v - d.min) / (d.max - d.min), e = t.min + e * (t.max - t.min), n.push(e);
                                            return n
                                        }, !e.mode && null == n.tickDecimals) {
                                        var g = Math.max(0, 1 - Math.floor(Math.log(e.delta) / Math.LN10)),
                                            m = e.tickGenerator(e);
                                        m.length > 1 && /\..*0$/.test((m[1] - m[0]).toFixed(g)) || (e.tickDecimals = g)
                                    }
                                }
                            }
                        }(i),
                        function(e) {
                            var i, n, s = e.options.ticks,
                                o = [];
                            null == s || "number" == typeof s && s > 0 ? o = e.tickGenerator(e) : s && (o = t.isFunction(s) ? s(e) : s);
                            for (e.ticks = [], i = 0; i < o.length; ++i) {
                                var a = null,
                                    r = o[i];
                                "object" == typeof r ? (n = +r[0], r.length > 1 && (a = r[1])) : n = +r, null == a && (a = e.tickFormatter(n, e)), isNaN(n) || e.ticks.push({
                                    v: n,
                                    label: a
                                })
                            }
                        }(i),
                        function(t, e) {
                            t.options.autoscaleMargin && e.length > 0 && (null == t.options.min && (t.min = Math.min(t.min, e[0].v)), null == t.options.max && e.length > 1 && (t.max = Math.max(t.max, e[e.length - 1].v)))
                        }(i, i.ticks),
                        function(t) {
                            for (var e = t.options, i = t.ticks || [], n = e.labelWidth || 0, s = e.labelHeight || 0, o = n || ("x" == t.direction ? Math.floor(l.width / (i.length || 1)) : null), a = t.direction + "Axis " + t.direction + t.n + "Axis", r = "flot-" + t.direction + "-axis flot-" + t.direction + t.n + "-axis " + a, h = e.font || "flot-tick-label tickLabel", c = 0; c < i.length; ++c) {
                                var d = i[c];
                                if (d.label) {
                                    var u = l.getTextInfo(r, d.label, h, null, o);
                                    n = Math.max(n, u.width), s = Math.max(s, u.height)
                                }
                            }
                            t.labelWidth = e.labelWidth || n, t.labelHeight = e.labelHeight || s
                        }(i)
                    }), i = c.length - 1; i >= 0; --i) _(c[i]);
                ! function() {
                    var e, i = r.grid.minBorderMargin;
                    if (null == i)
                        for (i = 0, e = 0; e < a.length; ++e) i = Math.max(i, 2 * (a[e].points.radius + a[e].points.lineWidth / 2));
                    var n = {
                        left: i,
                        right: i,
                        top: i,
                        bottom: i
                    };
                    t.each(k(), function(t, e) {
                        e.reserveSpace && e.ticks && e.ticks.length && ("x" === e.direction ? (n.left = Math.max(n.left, e.labelWidth / 2), n.right = Math.max(n.right, e.labelWidth / 2)) : (n.bottom = Math.max(n.bottom, e.labelHeight / 2), n.top = Math.max(n.top, e.labelHeight / 2)))
                    }), g.left = Math.ceil(Math.max(n.left, g.left)), g.right = Math.ceil(Math.max(n.right, g.right)), g.top = Math.ceil(Math.max(n.top, g.top)), g.bottom = Math.ceil(Math.max(n.bottom, g.bottom))
                }(), t.each(c, function(t, e) {
                    ! function(t) {
                        "x" == t.direction ? (t.box.left = g.left - t.labelWidth / 2, t.box.width = l.width - g.left - g.right + t.labelWidth) : (t.box.top = g.top - t.labelHeight / 2, t.box.height = l.height - g.bottom - g.top + t.labelHeight)
                    }(e)
                })
            }
            m = l.width - g.left - g.right, v = l.height - g.bottom - g.top, t.each(n, function(t, e) {
                    ! function(t) {
                        function e(t) {
                            return t
                        }
                        var i, n, s = t.options.transform || e,
                            o = t.options.inverseTransform;
                        "x" == t.direction ? (i = t.scale = m / Math.abs(s(t.max) - s(t.min)), n = Math.min(s(t.max), s(t.min))) : (i = -(i = t.scale = v / Math.abs(s(t.max) - s(t.min))), n = Math.max(s(t.max), s(t.min))), t.p2c = s == e ? function(t) {
                            return (t - n) * i
                        } : function(t) {
                            return (s(t) - n) * i
                        }, t.c2p = o ? function(t) {
                            return o(n + t / i)
                        } : function(t) {
                            return n + t / i
                        }
                    }(e)
                }), s && t.each(k(), function(t, e) {
                    var i, n, s, o, a, r = e.box,
                        h = e.direction + "Axis " + e.direction + e.n + "Axis",
                        c = "flot-" + e.direction + "-axis flot-" + e.direction + e.n + "-axis " + h,
                        d = e.options.font || "flot-tick-label tickLabel";
                    if (l.removeText(c), e.show && 0 != e.ticks.length)
                        for (var u = 0; u < e.ticks.length; ++u) !(i = e.ticks[u]).label || i.v < e.min || i.v > e.max || ("x" == e.direction ? (o = "center", n = g.left + e.p2c(i.v), "bottom" == e.position ? s = r.top + r.padding : (s = r.top + r.height - r.padding, a = "bottom")) : (a = "middle", s = g.top + e.p2c(i.v), "left" == e.position ? (n = r.left + r.width - r.padding, o = "right") : n = r.left + r.padding), l.addText(c, n, s, i.label, d, null, null, o, a))
                }),
                function() {
                    null != r.legend.container ? t(r.legend.container).html("") : e.find(".legend").remove();
                    if (!r.legend.show) return;
                    for (var i, n, s = [], o = [], l = !1, h = r.legend.labelFormatter, c = 0; c < a.length; ++c)(i = a[c]).label && (n = h ? h(i.label, i) : i.label) && o.push({
                        label: n,
                        color: i.color
                    });
                    if (r.legend.sorted)
                        if (t.isFunction(r.legend.sorted)) o.sort(r.legend.sorted);
                        else if ("reverse" == r.legend.sorted) o.reverse();
                    else {
                        var d = "descending" != r.legend.sorted;
                        o.sort(function(t, e) {
                            return t.label == e.label ? 0 : t.label < e.label != d ? 1 : -1
                        })
                    }
                    for (var c = 0; c < o.length; ++c) {
                        var u = o[c];
                        c % r.legend.noColumns == 0 && (l && s.push("</tr>"), s.push("<tr>"), l = !0), s.push('<td class="legendColorBox"><div style="border:1px solid ' + r.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + u.color + ';overflow:hidden"></div></div></td><td class="legendLabel">' + u.label + "</td>")
                    }
                    l && s.push("</tr>");
                    if (0 == s.length) return;
                    var p = '<table style="font-size:smaller;color:' + r.grid.color + '">' + s.join("") + "</table>";
                    if (null != r.legend.container) t(r.legend.container).html(p);
                    else {
                        var f = "",
                            m = r.legend.position,
                            v = r.legend.margin;
                        null == v[0] && (v = [v, v]), "n" == m.charAt(0) ? f += "top:" + (v[1] + g.top) + "px;" : "s" == m.charAt(0) && (f += "bottom:" + (v[1] + g.bottom) + "px;"), "e" == m.charAt(1) ? f += "right:" + (v[0] + g.right) + "px;" : "w" == m.charAt(1) && (f += "left:" + (v[0] + g.left) + "px;");
                        var y = t('<div class="legend">' + p.replace('style="', 'style="position:absolute;' + f + ";") + "</div>").appendTo(e);
                        if (0 != r.legend.backgroundOpacity) {
                            var b = r.legend.backgroundColor;
                            null == b && ((b = (b = r.grid.backgroundColor) && "string" == typeof b ? t.color.parse(b) : t.color.extract(y, "background-color")).a = 1, b = b.toString());
                            var w = y.children();
                            t('<div style="position:absolute;width:' + w.width() + "px;height:" + w.height() + "px;" + f + "background-color:" + b + ';"> </div>').prependTo(y).css("opacity", r.legend.backgroundOpacity)
                        }
                    }
                }()
        }

        function A() {
            l.clear(), w(y.drawBackground, [d]);
            var t = r.grid;
            t.show && t.backgroundColor && (d.save(), d.translate(g.left, g.top), d.fillStyle = Y(r.grid.backgroundColor, v, 0, "rgba(255, 255, 255, 0)"), d.fillRect(0, 0, m, v), d.restore()), t.show && !t.aboveData && O();
            for (var e = 0; e < a.length; ++e) w(y.drawSeries, [d, a[e]]), I(a[e]);
            w(y.draw, [d]), t.show && t.aboveData && O(), l.render(), R()
        }

        function P(t, e) {
            for (var i, n, s, o, a = k(), r = 0; r < a.length; ++r)
                if ((i = a[r]).direction == e && (t[o = e + i.n + "axis"] || 1 != i.n || (o = e + "axis"), t[o])) {
                    n = t[o].from, s = t[o].to;
                    break
                } if (t[o] || (i = "x" == e ? p[0] : f[0], n = t[e + "1"], s = t[e + "2"]), null != n && null != s && n > s) {
                var l = n;
                n = s, s = l
            }
            return {
                from: n,
                to: s,
                axis: i
            }
        }

        function O() {
            var e, i, n, s;
            d.save(), d.translate(g.left, g.top);
            var o = r.grid.markings;
            if (o)
                for (t.isFunction(o) && ((i = b.getAxes()).xmin = i.xaxis.min, i.xmax = i.xaxis.max, i.ymin = i.yaxis.min, i.ymax = i.yaxis.max, o = o(i)), e = 0; e < o.length; ++e) {
                    var a = o[e],
                        l = P(a, "x"),
                        h = P(a, "y");
                    if (null == l.from && (l.from = l.axis.min), null == l.to && (l.to = l.axis.max), null == h.from && (h.from = h.axis.min), null == h.to && (h.to = h.axis.max), !(l.to < l.axis.min || l.from > l.axis.max || h.to < h.axis.min || h.from > h.axis.max)) {
                        l.from = Math.max(l.from, l.axis.min), l.to = Math.min(l.to, l.axis.max), h.from = Math.max(h.from, h.axis.min), h.to = Math.min(h.to, h.axis.max);
                        var c = l.from === l.to,
                            u = h.from === h.to;
                        if (!c || !u)
                            if (l.from = Math.floor(l.axis.p2c(l.from)), l.to = Math.floor(l.axis.p2c(l.to)), h.from = Math.floor(h.axis.p2c(h.from)), h.to = Math.floor(h.axis.p2c(h.to)), c || u) {
                                var p = a.lineWidth || r.grid.markingsLineWidth,
                                    f = p % 2 ? .5 : 0;
                                d.beginPath(), d.strokeStyle = a.color || r.grid.markingsColor, d.lineWidth = p, c ? (d.moveTo(l.to + f, h.from), d.lineTo(l.to + f, h.to)) : (d.moveTo(l.from, h.to + f), d.lineTo(l.to, h.to + f)), d.stroke()
                            } else d.fillStyle = a.color || r.grid.markingsColor, d.fillRect(l.from, h.to, l.to - l.from, h.from - h.to)
                    }
                }
            i = k(), n = r.grid.borderWidth;
            for (var y = 0; y < i.length; ++y) {
                var w, x, S, D, C = i[y],
                    T = C.box,
                    _ = C.tickLength;
                if (C.show && 0 != C.ticks.length) {
                    for (d.lineWidth = 1, "x" == C.direction ? (w = 0, x = "full" == _ ? "top" == C.position ? 0 : v : T.top - g.top + ("top" == C.position ? T.height : 0)) : (x = 0, w = "full" == _ ? "left" == C.position ? 0 : m : T.left - g.left + ("left" == C.position ? T.width : 0)), C.innermost || (d.strokeStyle = C.options.color, d.beginPath(), S = D = 0, "x" == C.direction ? S = m + 1 : D = v + 1, 1 == d.lineWidth && ("x" == C.direction ? x = Math.floor(x) + .5 : w = Math.floor(w) + .5), d.moveTo(w, x), d.lineTo(w + S, x + D), d.stroke()), d.strokeStyle = C.options.tickColor, d.beginPath(), e = 0; e < C.ticks.length; ++e) {
                        var M = C.ticks[e].v;
                        S = D = 0, isNaN(M) || M < C.min || M > C.max || "full" == _ && ("object" == typeof n && n[C.position] > 0 || n > 0) && (M == C.min || M == C.max) || ("x" == C.direction ? (w = C.p2c(M), D = "full" == _ ? -v : _, "top" == C.position && (D = -D)) : (x = C.p2c(M), S = "full" == _ ? -m : _, "left" == C.position && (S = -S)), 1 == d.lineWidth && ("x" == C.direction ? w = Math.floor(w) + .5 : x = Math.floor(x) + .5), d.moveTo(w, x), d.lineTo(w + S, x + D))
                    }
                    d.stroke()
                }
            }
            n && (s = r.grid.borderColor, "object" == typeof n || "object" == typeof s ? ("object" != typeof n && (n = {
                top: n,
                right: n,
                bottom: n,
                left: n
            }), "object" != typeof s && (s = {
                top: s,
                right: s,
                bottom: s,
                left: s
            }), n.top > 0 && (d.strokeStyle = s.top, d.lineWidth = n.top, d.beginPath(), d.moveTo(0 - n.left, 0 - n.top / 2), d.lineTo(m, 0 - n.top / 2), d.stroke()), n.right > 0 && (d.strokeStyle = s.right, d.lineWidth = n.right, d.beginPath(), d.moveTo(m + n.right / 2, 0 - n.top), d.lineTo(m + n.right / 2, v), d.stroke()), n.bottom > 0 && (d.strokeStyle = s.bottom, d.lineWidth = n.bottom, d.beginPath(), d.moveTo(m + n.right, v + n.bottom / 2), d.lineTo(0, v + n.bottom / 2), d.stroke()), n.left > 0 && (d.strokeStyle = s.left, d.lineWidth = n.left, d.beginPath(), d.moveTo(0 - n.left / 2, v + n.bottom), d.lineTo(0 - n.left / 2, 0), d.stroke())) : (d.lineWidth = n, d.strokeStyle = r.grid.borderColor, d.strokeRect(-n / 2, -n / 2, m + n, v + n))), d.restore()
        }

        function I(t) {
            t.lines.show && function(t) {
                function e(t, e, i, n, s) {
                    var o = t.points,
                        a = t.pointsize,
                        r = null,
                        l = null;
                    d.beginPath();
                    for (var h = a; h < o.length; h += a) {
                        var c = o[h - a],
                            u = o[h - a + 1],
                            p = o[h],
                            f = o[h + 1];
                        if (null != c && null != p) {
                            if (u <= f && u < s.min) {
                                if (f < s.min) continue;
                                c = (s.min - u) / (f - u) * (p - c) + c, u = s.min
                            } else if (f <= u && f < s.min) {
                                if (u < s.min) continue;
                                p = (s.min - u) / (f - u) * (p - c) + c, f = s.min
                            }
                            if (u >= f && u > s.max) {
                                if (f > s.max) continue;
                                c = (s.max - u) / (f - u) * (p - c) + c, u = s.max
                            } else if (f >= u && f > s.max) {
                                if (u > s.max) continue;
                                p = (s.max - u) / (f - u) * (p - c) + c, f = s.max
                            }
                            if (c <= p && c < n.min) {
                                if (p < n.min) continue;
                                u = (n.min - c) / (p - c) * (f - u) + u, c = n.min
                            } else if (p <= c && p < n.min) {
                                if (c < n.min) continue;
                                f = (n.min - c) / (p - c) * (f - u) + u, p = n.min
                            }
                            if (c >= p && c > n.max) {
                                if (p > n.max) continue;
                                u = (n.max - c) / (p - c) * (f - u) + u, c = n.max
                            } else if (p >= c && p > n.max) {
                                if (c > n.max) continue;
                                f = (n.max - c) / (p - c) * (f - u) + u, p = n.max
                            }
                            c == r && u == l || d.moveTo(n.p2c(c) + e, s.p2c(u) + i), r = p, l = f, d.lineTo(n.p2c(p) + e, s.p2c(f) + i)
                        }
                    }
                    d.stroke()
                }
                d.save(), d.translate(g.left, g.top), d.lineJoin = "round";
                var i = t.lines.lineWidth,
                    n = t.shadowSize;
                if (i > 0 && n > 0) {
                    d.lineWidth = n, d.strokeStyle = "rgba(0,0,0,0.1)";
                    var s = Math.PI / 18;
                    e(t.datapoints, Math.sin(s) * (i / 2 + n / 2), Math.cos(s) * (i / 2 + n / 2), t.xaxis, t.yaxis), d.lineWidth = n / 2, e(t.datapoints, Math.sin(s) * (i / 2 + n / 4), Math.cos(s) * (i / 2 + n / 4), t.xaxis, t.yaxis)
                }
                d.lineWidth = i, d.strokeStyle = t.color;
                var o = $(t.lines, t.color, 0, v);
                o && (d.fillStyle = o, function(t, e, i) {
                    var n = t.points,
                        s = t.pointsize,
                        o = Math.min(Math.max(0, i.min), i.max),
                        a = 0,
                        r = !1,
                        l = 1,
                        h = 0,
                        c = 0;
                    for (; !(s > 0 && a > n.length + s);) {
                        var u = n[(a += s) - s],
                            p = n[a - s + l],
                            f = n[a],
                            g = n[a + l];
                        if (r) {
                            if (s > 0 && null != u && null == f) {
                                c = a, s = -s, l = 2;
                                continue
                            }
                            if (s < 0 && a == h + s) {
                                d.fill(), r = !1, l = 1, a = h = c + (s = -s);
                                continue
                            }
                        }
                        if (null != u && null != f) {
                            if (u <= f && u < e.min) {
                                if (f < e.min) continue;
                                p = (e.min - u) / (f - u) * (g - p) + p, u = e.min
                            } else if (f <= u && f < e.min) {
                                if (u < e.min) continue;
                                g = (e.min - u) / (f - u) * (g - p) + p, f = e.min
                            }
                            if (u >= f && u > e.max) {
                                if (f > e.max) continue;
                                p = (e.max - u) / (f - u) * (g - p) + p, u = e.max
                            } else if (f >= u && f > e.max) {
                                if (u > e.max) continue;
                                g = (e.max - u) / (f - u) * (g - p) + p, f = e.max
                            }
                            if (r || (d.beginPath(), d.moveTo(e.p2c(u), i.p2c(o)), r = !0), p >= i.max && g >= i.max) d.lineTo(e.p2c(u), i.p2c(i.max)), d.lineTo(e.p2c(f), i.p2c(i.max));
                            else if (p <= i.min && g <= i.min) d.lineTo(e.p2c(u), i.p2c(i.min)), d.lineTo(e.p2c(f), i.p2c(i.min));
                            else {
                                var m = u,
                                    v = f;
                                p <= g && p < i.min && g >= i.min ? (u = (i.min - p) / (g - p) * (f - u) + u, p = i.min) : g <= p && g < i.min && p >= i.min && (f = (i.min - p) / (g - p) * (f - u) + u, g = i.min), p >= g && p > i.max && g <= i.max ? (u = (i.max - p) / (g - p) * (f - u) + u, p = i.max) : g >= p && g > i.max && p <= i.max && (f = (i.max - p) / (g - p) * (f - u) + u, g = i.max), u != m && d.lineTo(e.p2c(m), i.p2c(p)), d.lineTo(e.p2c(u), i.p2c(p)), d.lineTo(e.p2c(f), i.p2c(g)), f != v && (d.lineTo(e.p2c(f), i.p2c(g)), d.lineTo(e.p2c(v), i.p2c(g)))
                            }
                        }
                    }
                }(t.datapoints, t.xaxis, t.yaxis));
                i > 0 && e(t.datapoints, 0, 0, t.xaxis, t.yaxis);
                d.restore()
            }(t), t.bars.show && function(t) {
                var e;
                switch (d.save(), d.translate(g.left, g.top), d.lineWidth = t.bars.lineWidth, d.strokeStyle = t.color, t.bars.align) {
                    case "left":
                        e = 0;
                        break;
                    case "right":
                        e = -t.bars.barWidth;
                        break;
                    default:
                        e = -t.bars.barWidth / 2
                }
                var i = t.bars.fill ? function(e, i) {
                    return $(t.bars, t.color, e, i)
                } : null;
                (function(e, i, n, s, o, a) {
                    for (var r = e.points, l = e.pointsize, h = 0; h < r.length; h += l) null != r[h] && N(r[h], r[h + 1], r[h + 2], i, n, s, o, a, d, t.bars.horizontal, t.bars.lineWidth)
                })(t.datapoints, e, e + t.bars.barWidth, i, t.xaxis, t.yaxis), d.restore()
            }(t), t.points.show && function(t) {
                function e(t, e, i, n, s, o, a, r) {
                    for (var l = t.points, h = t.pointsize, c = 0; c < l.length; c += h) {
                        var u = l[c],
                            p = l[c + 1];
                        null == u || u < o.min || u > o.max || p < a.min || p > a.max || (d.beginPath(), u = o.p2c(u), p = a.p2c(p) + n, "circle" == r ? d.arc(u, p, e, 0, s ? Math.PI : 2 * Math.PI, !1) : r(d, u, p, e, s), d.closePath(), i && (d.fillStyle = i, d.fill()), d.stroke())
                    }
                }
                d.save(), d.translate(g.left, g.top);
                var i = t.points.lineWidth,
                    n = t.shadowSize,
                    s = t.points.radius,
                    o = t.points.symbol;
                0 == i && (i = 1e-4);
                if (i > 0 && n > 0) {
                    var a = n / 2;
                    d.lineWidth = a, d.strokeStyle = "rgba(0,0,0,0.1)", e(t.datapoints, s, null, a + a / 2, !0, t.xaxis, t.yaxis, o), d.strokeStyle = "rgba(0,0,0,0.2)", e(t.datapoints, s, null, a / 2, !0, t.xaxis, t.yaxis, o)
                }
                d.lineWidth = i, d.strokeStyle = t.color, e(t.datapoints, s, $(t.points, t.color), 0, !1, t.xaxis, t.yaxis, o), d.restore()
            }(t)
        }

        function N(t, e, i, n, s, o, a, r, l, h, c) {
            var d, u, p, f, g, m, v, y, b;
            h ? (y = m = v = !0, g = !1, f = e + n, p = e + s, (u = t) < (d = i) && (b = u, u = d, d = b, g = !0, m = !1)) : (g = m = v = !0, y = !1, d = t + n, u = t + s, (f = e) < (p = i) && (b = f, f = p, p = b, y = !0, v = !1)), u < a.min || d > a.max || f < r.min || p > r.max || (d < a.min && (d = a.min, g = !1), u > a.max && (u = a.max, m = !1), p < r.min && (p = r.min, y = !1), f > r.max && (f = r.max, v = !1), d = a.p2c(d), p = r.p2c(p), u = a.p2c(u), f = r.p2c(f), o && (l.fillStyle = o(p, f), l.fillRect(d, f, u - d, p - f)), c > 0 && (g || m || v || y) && (l.beginPath(), l.moveTo(d, p), g ? l.lineTo(d, f) : l.moveTo(d, f), v ? l.lineTo(u, f) : l.moveTo(u, f), m ? l.lineTo(u, p) : l.moveTo(u, p), y ? l.lineTo(d, p) : l.moveTo(d, p), l.stroke()))
        }

        function $(e, i, n, s) {
            var o = e.fill;
            if (!o) return null;
            if (e.fillColor) return Y(e.fillColor, n, s, i);
            var a = t.color.parse(i);
            return a.a = "number" == typeof o ? o : .4, a.normalize(), a.toString()
        }
        b.setData = x, b.setupGrid = M, b.draw = A, b.getPlaceholder = function() {
                return e
            }, b.getCanvas = function() {
                return l.element
            }, b.getPlotOffset = function() {
                return g
            }, b.width = function() {
                return m
            }, b.height = function() {
                return v
            }, b.offset = function() {
                var t = c.offset();
                return t.left += g.left, t.top += g.top, t
            }, b.getData = function() {
                return a
            }, b.getAxes = function() {
                var e = {};
                return t.each(p.concat(f), function(t, i) {
                    i && (e[i.direction + (1 != i.n ? i.n : "") + "axis"] = i)
                }), e
            }, b.getXAxes = function() {
                return p
            }, b.getYAxes = function() {
                return f
            }, b.c2p = D, b.p2c = function(t) {
                var e, i, n, s = {};
                for (e = 0; e < p.length; ++e)
                    if ((i = p[e]) && i.used && (n = "x" + i.n, null == t[n] && 1 == i.n && (n = "x"), null != t[n])) {
                        s.left = i.p2c(t[n]);
                        break
                    } for (e = 0; e < f.length; ++e)
                    if ((i = f[e]) && i.used && (n = "y" + i.n, null == t[n] && 1 == i.n && (n = "y"), null != t[n])) {
                        s.top = i.p2c(t[n]);
                        break
                    } return s
            }, b.getOptions = function() {
                return r
            }, b.highlight = U, b.unhighlight = J, b.triggerRedrawOverlay = R, b.pointOffset = function(t) {
                return {
                    left: parseInt(p[S(t, "x") - 1].p2c(+t.x) + g.left, 10),
                    top: parseInt(f[S(t, "y") - 1].p2c(+t.y) + g.top, 10)
                }
            }, b.shutdown = T, b.destroy = function() {
                T(), e.removeData("plot").empty(), a = [], r = null, l = null, h = null, c = null, d = null, u = null, p = [], f = [], y = null, E = [], b = null
            }, b.resize = function() {
                var t = e.width(),
                    i = e.height();
                l.resize(t, i), h.resize(t, i)
            }, b.hooks = y,
            function() {
                for (var e = {
                        Canvas: i
                    }, n = 0; n < o.length; ++n) {
                    var s = o[n];
                    s.init(b, e), s.options && t.extend(!0, r, s.options)
                }
            }(),
            function(i) {
                t.extend(!0, r, i), i && i.colors && (r.colors = i.colors);
                null == r.xaxis.color && (r.xaxis.color = t.color.parse(r.grid.color).scale("a", .22).toString());
                null == r.yaxis.color && (r.yaxis.color = t.color.parse(r.grid.color).scale("a", .22).toString());
                null == r.xaxis.tickColor && (r.xaxis.tickColor = r.grid.tickColor || r.xaxis.color);
                null == r.yaxis.tickColor && (r.yaxis.tickColor = r.grid.tickColor || r.yaxis.color);
                null == r.grid.borderColor && (r.grid.borderColor = r.grid.color);
                null == r.grid.tickColor && (r.grid.tickColor = t.color.parse(r.grid.color).scale("a", .22).toString());
                var n, s, o, a = e.css("font-size"),
                    l = a ? +a.replace("px", "") : 13,
                    h = {
                        style: e.css("font-style"),
                        size: Math.round(.8 * l),
                        variant: e.css("font-variant"),
                        weight: e.css("font-weight"),
                        family: e.css("font-family")
                    };
                for (o = r.xaxes.length || 1, n = 0; n < o; ++n)(s = r.xaxes[n]) && !s.tickColor && (s.tickColor = s.color), s = t.extend(!0, {}, r.xaxis, s), r.xaxes[n] = s, s.font && (s.font = t.extend({}, h, s.font), s.font.color || (s.font.color = s.color), s.font.lineHeight || (s.font.lineHeight = Math.round(1.15 * s.font.size)));
                for (o = r.yaxes.length || 1, n = 0; n < o; ++n)(s = r.yaxes[n]) && !s.tickColor && (s.tickColor = s.color), s = t.extend(!0, {}, r.yaxis, s), r.yaxes[n] = s, s.font && (s.font = t.extend({}, h, s.font), s.font.color || (s.font.color = s.color), s.font.lineHeight || (s.font.lineHeight = Math.round(1.15 * s.font.size)));
                r.xaxis.noTicks && null == r.xaxis.ticks && (r.xaxis.ticks = r.xaxis.noTicks);
                r.yaxis.noTicks && null == r.yaxis.ticks && (r.yaxis.ticks = r.yaxis.noTicks);
                r.x2axis && (r.xaxes[1] = t.extend(!0, {}, r.xaxis, r.x2axis), r.xaxes[1].position = "top", null == r.x2axis.min && (r.xaxes[1].min = null), null == r.x2axis.max && (r.xaxes[1].max = null));
                r.y2axis && (r.yaxes[1] = t.extend(!0, {}, r.yaxis, r.y2axis), r.yaxes[1].position = "right", null == r.y2axis.min && (r.yaxes[1].min = null), null == r.y2axis.max && (r.yaxes[1].max = null));
                r.grid.coloredAreas && (r.grid.markings = r.grid.coloredAreas);
                r.grid.coloredAreasColor && (r.grid.markingsColor = r.grid.coloredAreasColor);
                r.lines && t.extend(!0, r.series.lines, r.lines);
                r.points && t.extend(!0, r.series.points, r.points);
                r.bars && t.extend(!0, r.series.bars, r.bars);
                null != r.shadowSize && (r.series.shadowSize = r.shadowSize);
                null != r.highlightColor && (r.series.highlightColor = r.highlightColor);
                for (n = 0; n < r.xaxes.length; ++n) C(p, n + 1).options = r.xaxes[n];
                for (n = 0; n < r.yaxes.length; ++n) C(f, n + 1).options = r.yaxes[n];
                for (var c in y) r.hooks[c] && r.hooks[c].length && (y[c] = y[c].concat(r.hooks[c]));
                w(y.processOptions, [r])
            }(s),
            function() {
                e.css("padding", 0).children().filter(function() {
                    return !t(this).hasClass("flot-overlay") && !t(this).hasClass("flot-base")
                }).remove(), "static" == e.css("position") && e.css("position", "relative");
                l = new i("flot-base", e), h = new i("flot-overlay", e), d = l.context, u = h.context, c = t(h.element).unbind();
                var n = e.data("plot");
                n && (n.shutdown(), h.clear());
                e.data("plot", b)
            }(), x(n), M(), A(),
            function() {
                r.grid.hoverable && (c.mousemove(j), c.bind("mouseleave", L));
                r.grid.clickable && c.click(z);
                w(y.bindEvents, [c])
            }();
        var E = [],
            F = null;

        function j(t) {
            r.grid.hoverable && H("plothover", t, function(t) {
                return 0 != t.hoverable
            })
        }

        function L(t) {
            r.grid.hoverable && H("plothover", t, function(t) {
                return !1
            })
        }

        function z(t) {
            H("plotclick", t, function(t) {
                return 0 != t.clickable
            })
        }

        function H(t, i, n) {
            var s = c.offset(),
                o = i.pageX - s.left - g.left,
                l = i.pageY - s.top - g.top,
                h = D({
                    left: o,
                    top: l
                });
            h.pageX = i.pageX, h.pageY = i.pageY;
            var d = function(t, e, i) {
                var n, s, o, l = r.grid.mouseActiveRadius,
                    h = l * l + 1,
                    c = null;
                for (n = a.length - 1; n >= 0; --n)
                    if (i(a[n])) {
                        var d = a[n],
                            u = d.xaxis,
                            p = d.yaxis,
                            f = d.datapoints.points,
                            g = u.c2p(t),
                            m = p.c2p(e),
                            v = l / u.scale,
                            y = l / p.scale;
                        if (o = d.datapoints.pointsize, u.options.inverseTransform && (v = Number.MAX_VALUE), p.options.inverseTransform && (y = Number.MAX_VALUE), d.lines.show || d.points.show)
                            for (s = 0; s < f.length; s += o) {
                                var b = f[s],
                                    w = f[s + 1];
                                if (null != b && !(b - g > v || b - g < -v || w - m > y || w - m < -y)) {
                                    var x = Math.abs(u.p2c(b) - t),
                                        S = Math.abs(p.p2c(w) - e),
                                        k = x * x + S * S;
                                    k < h && (h = k, c = [n, s / o])
                                }
                            }
                        if (d.bars.show && !c) {
                            var D, C;
                            switch (d.bars.align) {
                                case "left":
                                    D = 0;
                                    break;
                                case "right":
                                    D = -d.bars.barWidth;
                                    break;
                                default:
                                    D = -d.bars.barWidth / 2
                            }
                            for (C = D + d.bars.barWidth, s = 0; s < f.length; s += o) {
                                b = f[s], w = f[s + 1];
                                var T = f[s + 2];
                                null != b && (a[n].bars.horizontal ? g <= Math.max(T, b) && g >= Math.min(T, b) && m >= w + D && m <= w + C : g >= b + D && g <= b + C && m >= Math.min(T, w) && m <= Math.max(T, w)) && (c = [n, s / o])
                            }
                        }
                    } return c ? (n = c[0], s = c[1], o = a[n].datapoints.pointsize, {
                    datapoint: a[n].datapoints.points.slice(s * o, (s + 1) * o),
                    dataIndex: s,
                    series: a[n],
                    seriesIndex: n
                }) : null
            }(o, l, n);
            if (d && (d.pageX = parseInt(d.series.xaxis.p2c(d.datapoint[0]) + s.left + g.left, 10), d.pageY = parseInt(d.series.yaxis.p2c(d.datapoint[1]) + s.top + g.top, 10)), r.grid.autoHighlight) {
                for (var u = 0; u < E.length; ++u) {
                    var p = E[u];
                    p.auto != t || d && p.series == d.series && p.point[0] == d.datapoint[0] && p.point[1] == d.datapoint[1] || J(p.series, p.point)
                }
                d && U(d.series, d.datapoint, t)
            }
            e.trigger(t, [h, d])
        }

        function R() {
            var t = r.interaction.redrawOverlayInterval; - 1 != t ? F || (F = setTimeout(W, t)) : W()
        }

        function W() {
            var t, e;
            for (F = null, u.save(), h.clear(), u.translate(g.left, g.top), t = 0; t < E.length; ++t)(e = E[t]).series.bars.show ? q(e.series, e.point) : V(e.series, e.point);
            u.restore(), w(y.drawOverlay, [u])
        }

        function U(t, e, i) {
            if ("number" == typeof t && (t = a[t]), "number" == typeof e) {
                var n = t.datapoints.pointsize;
                e = t.datapoints.points.slice(n * e, n * (e + 1))
            }
            var s = B(t, e); - 1 == s ? (E.push({
                series: t,
                point: e,
                auto: i
            }), R()) : i || (E[s].auto = !1)
        }

        function J(t, e) {
            if (null == t && null == e) return E = [], void R();
            if ("number" == typeof t && (t = a[t]), "number" == typeof e) {
                var i = t.datapoints.pointsize;
                e = t.datapoints.points.slice(i * e, i * (e + 1))
            }
            var n = B(t, e); - 1 != n && (E.splice(n, 1), R())
        }

        function B(t, e) {
            for (var i = 0; i < E.length; ++i) {
                var n = E[i];
                if (n.series == t && n.point[0] == e[0] && n.point[1] == e[1]) return i
            }
            return -1
        }

        function V(e, i) {
            var n = i[0],
                s = i[1],
                o = e.xaxis,
                a = e.yaxis,
                r = "string" == typeof e.highlightColor ? e.highlightColor : t.color.parse(e.color).scale("a", .5).toString();
            if (!(n < o.min || n > o.max || s < a.min || s > a.max)) {
                var l = e.points.radius + e.points.lineWidth / 2;
                u.lineWidth = l, u.strokeStyle = r;
                var h = 1.5 * l;
                n = o.p2c(n), s = a.p2c(s), u.beginPath(), "circle" == e.points.symbol ? u.arc(n, s, h, 0, 2 * Math.PI, !1) : e.points.symbol(u, n, s, h, !1), u.closePath(), u.stroke()
            }
        }

        function q(e, i) {
            var n, s = "string" == typeof e.highlightColor ? e.highlightColor : t.color.parse(e.color).scale("a", .5).toString(),
                o = s;
            switch (e.bars.align) {
                case "left":
                    n = 0;
                    break;
                case "right":
                    n = -e.bars.barWidth;
                    break;
                default:
                    n = -e.bars.barWidth / 2
            }
            u.lineWidth = e.bars.lineWidth, u.strokeStyle = s, N(i[0], i[1], i[2] || 0, n, n + e.bars.barWidth, function() {
                return o
            }, e.xaxis, e.yaxis, u, e.bars.horizontal, e.bars.lineWidth)
        }

        function Y(e, i, n, s) {
            if ("string" == typeof e) return e;
            for (var o = d.createLinearGradient(0, n, 0, i), a = 0, r = e.colors.length; a < r; ++a) {
                var l = e.colors[a];
                if ("string" != typeof l) {
                    var h = t.color.parse(s);
                    null != l.brightness && (h = h.scale("rgb", l.brightness)), null != l.opacity && (h.a *= l.opacity), l = h.toString()
                }
                o.addColorStop(a / (r - 1), l)
            }
            return o
        }
    }
    t.fn.detach || (t.fn.detach = function() {
        return this.each(function() {
            this.parentNode && this.parentNode.removeChild(this)
        })
    }), i.prototype.resize = function(t, e) {
        if (t <= 0 || e <= 0) throw new Error("Invalid dimensions for plot, width = " + t + ", height = " + e);
        var i = this.element,
            n = this.context,
            s = this.pixelRatio;
        this.width != t && (i.width = t * s, i.style.width = t + "px", this.width = t), this.height != e && (i.height = e * s, i.style.height = e + "px", this.height = e), n.restore(), n.save(), n.scale(s, s)
    }, i.prototype.clear = function() {
        this.context.clearRect(0, 0, this.width, this.height)
    }, i.prototype.render = function() {
        var t = this._textCache;
        for (var i in t)
            if (e.call(t, i)) {
                var n = this.getTextLayer(i),
                    s = t[i];
                for (var o in n.hide(), s)
                    if (e.call(s, o)) {
                        var a = s[o];
                        for (var r in a)
                            if (e.call(a, r)) {
                                for (var l, h = a[r].positions, c = 0; l = h[c]; c++) l.active ? l.rendered || (n.append(l.element), l.rendered = !0) : (h.splice(c--, 1), l.rendered && l.element.detach());
                                0 == h.length && delete a[r]
                            }
                    } n.show()
            }
    }, i.prototype.getTextLayer = function(e) {
        var i = this.text[e];
        return null == i && (null == this.textContainer && (this.textContainer = t("<div class='flot-text'></div>").css({
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            "font-size": "smaller",
            color: "#545454"
        }).insertAfter(this.element)), i = this.text[e] = t("<div></div>").addClass(e).css({
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }).appendTo(this.textContainer)), i
    }, i.prototype.getTextInfo = function(e, i, n, s, o) {
        var a, r, l, h;
        if (i = "" + i, a = "object" == typeof n ? n.style + " " + n.variant + " " + n.weight + " " + n.size + "px/" + n.lineHeight + "px " + n.family : n, null == (r = this._textCache[e]) && (r = this._textCache[e] = {}), null == (l = r[a]) && (l = r[a] = {}), null == (h = l[i])) {
            var c = t("<div></div>").html(i).css({
                position: "absolute",
                "max-width": o,
                top: -9999
            }).appendTo(this.getTextLayer(e));
            "object" == typeof n ? c.css({
                font: a,
                color: n.color
            }) : "string" == typeof n && c.addClass(n), h = l[i] = {
                width: c.outerWidth(!0),
                height: c.outerHeight(!0),
                element: c,
                positions: []
            }, c.detach()
        }
        return h
    }, i.prototype.addText = function(t, e, i, n, s, o, a, r, l) {
        var h = this.getTextInfo(t, n, s, o, a),
            c = h.positions;
        "center" == r ? e -= h.width / 2 : "right" == r && (e -= h.width), "middle" == l ? i -= h.height / 2 : "bottom" == l && (i -= h.height);
        for (var d, u = 0; d = c[u]; u++)
            if (d.x == e && d.y == i) return void(d.active = !0);
        d = {
            active: !0,
            rendered: !1,
            element: c.length ? h.element.clone() : h.element,
            x: e,
            y: i
        }, c.push(d), d.element.css({
            top: Math.round(i),
            left: Math.round(e),
            "text-align": r
        })
    }, i.prototype.removeText = function(t, i, n, s, o, a) {
        if (null == s) {
            var r = this._textCache[t];
            if (null != r)
                for (var l in r)
                    if (e.call(r, l)) {
                        var h = r[l];
                        for (var c in h)
                            if (e.call(h, c))
                                for (var d = h[c].positions, u = 0; p = d[u]; u++) p.active = !1
                    }
        } else {
            var p;
            for (d = this.getTextInfo(t, s, o, a).positions, u = 0; p = d[u]; u++) p.x == i && p.y == n && (p.active = !1)
        }
    }, t.plot = function(e, i, s) {
        return new n(t(e), i, s, t.plot.plugins)
    }, t.plot.version = "0.8.3", t.plot.plugins = [], t.fn.plot = function(e, i) {
        return this.each(function() {
            t.plot(this, e, i)
        })
    }
}(jQuery),
function(t) {
    var e, i, n, s = Object.prototype.hasOwnProperty;
    t.plot.plugins.push({
        init: function(o, a) {
            var r = a.Canvas;
            null == e && (i = r.prototype.getTextInfo, n = r.prototype.addText, e = r.prototype.render), r.prototype.render = function() {
                if (!o.getOptions().canvas) return e.call(this);
                var t = this.context,
                    i = this._textCache;
                for (var n in t.save(), t.textBaseline = "middle", i)
                    if (s.call(i, n)) {
                        var a = i[n];
                        for (var r in a)
                            if (s.call(a, r)) {
                                var l = a[r],
                                    h = !0;
                                for (var c in l)
                                    if (s.call(l, c)) {
                                        var d = l[c],
                                            u = d.positions,
                                            p = d.lines;
                                        h && (t.fillStyle = d.font.color, t.font = d.font.definition, h = !1);
                                        for (var f, g = 0; f = u[g]; g++)
                                            if (f.active)
                                                for (var m, v = 0; m = f.lines[v]; v++) t.fillText(p[v].text, m[0], m[1]);
                                            else u.splice(g--, 1);
                                        0 == u.length && delete l[c]
                                    }
                            }
                    } t.restore()
            }, r.prototype.getTextInfo = function(e, n, s, a, r) {
                if (!o.getOptions().canvas) return i.call(this, e, n, s, a, r);
                var l, h, c, d;
                if (n = "" + n, l = "object" == typeof s ? s.style + " " + s.variant + " " + s.weight + " " + s.size + "px " + s.family : s, null == (h = this._textCache[e]) && (h = this._textCache[e] = {}), null == (c = h[l]) && (c = h[l] = {}), null == (d = c[n])) {
                    var u = this.context;
                    if ("object" != typeof s) {
                        var p = t("<div>&nbsp;</div>").css("position", "absolute").addClass("string" == typeof s ? s : null).appendTo(this.getTextLayer(e));
                        (s = {
                            lineHeight: p.height(),
                            style: p.css("font-style"),
                            variant: p.css("font-variant"),
                            weight: p.css("font-weight"),
                            family: p.css("font-family"),
                            color: p.css("color")
                        }).size = p.css("line-height", 1).height(), p.remove()
                    }
                    l = s.style + " " + s.variant + " " + s.weight + " " + s.size + "px " + s.family, d = c[n] = {
                        width: 0,
                        height: 0,
                        positions: [],
                        lines: [],
                        font: {
                            definition: l,
                            color: s.color
                        }
                    }, u.save(), u.font = l;
                    for (var f = (n + "").replace(/<br ?\/?>|\r\n|\r/g, "\n").split("\n"), g = 0; g < f.length; ++g) {
                        var m = f[g],
                            v = u.measureText(m);
                        d.width = Math.max(v.width, d.width), d.height += s.lineHeight, d.lines.push({
                            text: m,
                            width: v.width,
                            height: s.lineHeight
                        })
                    }
                    u.restore()
                }
                return d
            }, r.prototype.addText = function(t, e, i, s, a, r, l, h, c) {
                if (!o.getOptions().canvas) return n.call(this, t, e, i, s, a, r, l, h, c);
                var d, u = this.getTextInfo(t, s, a, r, l),
                    p = u.positions,
                    f = u.lines;
                i += u.height / f.length / 2, i = "middle" == c ? Math.round(i - u.height / 2) : "bottom" == c ? Math.round(i - u.height) : Math.round(i), window.opera && window.opera.version().split(".")[0] < 12 && (i -= 2);
                for (var g, m = 0; g = p[m]; m++)
                    if (g.x == e && g.y == i) return void(g.active = !0);
                for (g = {
                        active: !0,
                        lines: [],
                        x: e,
                        y: i
                    }, p.push(g), m = 0; d = f[m]; m++) "center" == h ? g.lines.push([Math.round(e - d.width / 2), i]) : "right" == h ? g.lines.push([Math.round(e - d.width), i]) : g.lines.push([Math.round(e), i]), i += d.height
            }
        },
        options: {
            canvas: !0
        },
        name: "canvas",
        version: "1.0"
    })
}(jQuery),
function(t) {
    jQuery.plot.plugins.push({
        init: function(t) {
            var e = {
                x: -1,
                y: -1,
                locked: !1
            };

            function i(i) {
                e.locked || -1 != e.x && (e.x = -1, t.triggerRedrawOverlay())
            }

            function n(i) {
                if (!e.locked)
                    if (t.getSelection && t.getSelection()) e.x = -1;
                    else {
                        var n = t.offset();
                        e.x = Math.max(0, Math.min(i.pageX - n.left, t.width())), e.y = Math.max(0, Math.min(i.pageY - n.top, t.height())), t.triggerRedrawOverlay()
                    }
            }
            t.setCrosshair = function(i) {
                if (i) {
                    var n = t.p2c(i);
                    e.x = Math.max(0, Math.min(n.left, t.width())), e.y = Math.max(0, Math.min(n.top, t.height()))
                } else e.x = -1;
                t.triggerRedrawOverlay()
            }, t.clearCrosshair = t.setCrosshair, t.lockCrosshair = function(i) {
                i && t.setCrosshair(i), e.locked = !0
            }, t.unlockCrosshair = function() {
                e.locked = !1
            }, t.hooks.bindEvents.push(function(t, e) {
                t.getOptions().crosshair.mode && (e.mouseout(i), e.mousemove(n))
            }), t.hooks.drawOverlay.push(function(t, i) {
                var n = t.getOptions().crosshair;
                if (n.mode) {
                    var s = t.getPlotOffset();
                    if (i.save(), i.translate(s.left, s.top), -1 != e.x) {
                        var o = t.getOptions().crosshair.lineWidth % 2 ? .5 : 0;
                        if (i.strokeStyle = n.color, i.lineWidth = n.lineWidth, i.lineJoin = "round", i.beginPath(), -1 != n.mode.indexOf("x")) {
                            var a = Math.floor(e.x) + o;
                            i.moveTo(a, 0), i.lineTo(a, t.height())
                        }
                        if (-1 != n.mode.indexOf("y")) {
                            var r = Math.floor(e.y) + o;
                            i.moveTo(0, r), i.lineTo(t.width(), r)
                        }
                        i.stroke()
                    }
                    i.restore()
                }
            }), t.hooks.shutdown.push(function(t, e) {
                e.unbind("mouseout", i), e.unbind("mousemove", n)
            })
        },
        options: {
            crosshair: {
                mode: null,
                color: "rgba(170, 0, 0, 0.80)",
                lineWidth: 1
            }
        },
        name: "crosshair",
        version: "1.0"
    })
}(),
function(t) {
    function e(s) {
        var h, c = this,
            d = s.data || {};
        if (d.elem) c = s.dragTarget = d.elem, s.dragProxy = l.proxy || c, s.cursorOffsetX = d.pageX - d.left, s.cursorOffsetY = d.pageY - d.top, s.offsetX = s.pageX - s.cursorOffsetX, s.offsetY = s.pageY - s.cursorOffsetY;
        else if (l.dragging || d.which > 0 && s.which != d.which || t(s.target).is(d.not)) return;
        switch (s.type) {
            case "mousedown":
                return t.extend(d, t(c).offset(), {
                    elem: c,
                    target: s.target,
                    pageX: s.pageX,
                    pageY: s.pageY
                }), a.add(document, "mousemove mouseup", e, d), o(c, !1), l.dragging = null, !1;
            case !l.dragging && "mousemove":
                if (n(s.pageX - d.pageX) + n(s.pageY - d.pageY) < d.distance) break;
                s.target = d.target, !1 !== (h = i(s, "dragstart", c)) && (l.dragging = c, l.proxy = s.dragProxy = t(h || c)[0]);
            case "mousemove":
                if (l.dragging) {
                    if (h = i(s, "drag", c), r.drop && (r.drop.allowed = !1 !== h, r.drop.handler(s)), !1 !== h) break;
                    s.type = "mouseup"
                }
                case "mouseup":
                    a.remove(document, "mousemove mouseup", e), l.dragging && (r.drop && r.drop.handler(s), i(s, "dragend", c)), o(c, !0), l.dragging = l.proxy = d.elem = !1
        }
        return !0
    }

    function i(e, i, n) {
        e.type = i;
        var s = t.event.dispatch.call(n, e);
        return !1 !== s && (s || e.result)
    }

    function n(t) {
        return Math.pow(t, 2)
    }

    function s() {
        return !1 === l.dragging
    }

    function o(t, e) {
        t && (t.unselectable = e ? "off" : "on", t.onselectstart = function() {
            return e
        }, t.style && (t.style.MozUserSelect = e ? "" : "none"))
    }
    t.fn.drag = function(t, e, i) {
        return e && this.bind("dragstart", t), i && this.bind("dragend", i), t ? this.bind("drag", e || t) : this.trigger("drag")
    };
    var a = t.event,
        r = a.special,
        l = r.drag = {
            not: ":input",
            distance: 0,
            which: 1,
            dragging: !1,
            setup: function(i) {
                (i = t.extend({
                    distance: l.distance,
                    which: l.which,
                    not: l.not
                }, i || {})).distance = n(i.distance), a.add(this, "mousedown", e, i), this.attachEvent && this.attachEvent("ondragstart", s)
            },
            teardown: function() {
                a.remove(this, "mousedown", e), this === l.dragging && (l.dragging = l.proxy = !1), o(this, !0), this.detachEvent && this.detachEvent("ondragstart", s)
            }
        };
    r.dragstart = r.dragend = {
        setup: function() {},
        teardown: function() {}
    }
}(jQuery),
function(t) {
    function e(e) {
        var i = e || window.event,
            n = [].slice.call(arguments, 1),
            s = 0,
            o = 0,
            a = 0;
        return (e = t.event.fix(i)).type = "mousewheel", i.wheelDelta && (s = i.wheelDelta / 120), i.detail && (s = -i.detail / 3), a = s, void 0 !== i.axis && i.axis === i.HORIZONTAL_AXIS && (a = 0, o = -1 * s), void 0 !== i.wheelDeltaY && (a = i.wheelDeltaY / 120), void 0 !== i.wheelDeltaX && (o = -1 * i.wheelDeltaX / 120), n.unshift(e, s, o, a), (t.event.dispatch || t.event.handle).apply(this, n)
    }
    var i = ["DOMMouseScroll", "mousewheel"];
    if (t.event.fixHooks)
        for (var n = i.length; n;) t.event.fixHooks[i[--n]] = t.event.mouseHooks;
    t.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var t = i.length; t;) this.addEventListener(i[--t], e, !1);
            else this.onmousewheel = e
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var t = i.length; t;) this.removeEventListener(i[--t], e, !1);
            else this.onmousewheel = null
        }
    }, t.fn.extend({
        mousewheel: function(t) {
            return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
        },
        unmousewheel: function(t) {
            return this.unbind("mousewheel", t)
        }
    })
}(jQuery),
function(t) {
    t.plot.plugins.push({
        init: function(e) {
            function i(t, i) {
                var n = e.offset();
                n.left = t.pageX - n.left, n.top = t.pageY - n.top, i ? e.zoomOut({
                    center: n
                }) : e.zoom({
                    center: n
                })
            }

            function n(t, e) {
                return t.preventDefault(), i(t, e < 0), !1
            }
            var s = "default",
                o = 0,
                a = 0,
                r = null;

            function l(t) {
                if (1 != t.which) return !1;
                var i = e.getPlaceholder().css("cursor");
                i && (s = i), e.getPlaceholder().css("cursor", e.getOptions().pan.cursor), o = t.pageX, a = t.pageY
            }

            function h(t) {
                var i = e.getOptions().pan.frameRate;
                !r && i && (r = setTimeout(function() {
                    e.pan({
                        left: o - t.pageX,
                        top: a - t.pageY
                    }), o = t.pageX, a = t.pageY, r = null
                }, 1 / i * 1e3))
            }

            function c(t) {
                r && (clearTimeout(r), r = null), e.getPlaceholder().css("cursor", s), e.pan({
                    left: o - t.pageX,
                    top: a - t.pageY
                })
            }
            e.zoomOut = function(t) {
                t || (t = {}), t.amount || (t.amount = e.getOptions().zoom.amount), t.amount = 1 / t.amount, e.zoom(t)
            }, e.zoom = function(i) {
                i || (i = {});
                var n = i.center,
                    s = i.amount || e.getOptions().zoom.amount,
                    o = e.width(),
                    a = e.height();
                n || (n = {
                    left: o / 2,
                    top: a / 2
                });
                var r = n.left / o,
                    l = n.top / a,
                    h = {
                        x: {
                            min: n.left - r * o / s,
                            max: n.left + (1 - r) * o / s
                        },
                        y: {
                            min: n.top - l * a / s,
                            max: n.top + (1 - l) * a / s
                        }
                    };
                t.each(e.getAxes(), function(t, e) {
                    var i = e.options,
                        n = h[e.direction].min,
                        o = h[e.direction].max,
                        a = i.zoomRange,
                        r = i.panRange;
                    if (!1 !== a) {
                        if ((n = e.c2p(n)) > (o = e.c2p(o))) {
                            var l = n;
                            n = o, o = l
                        }
                        r && (null != r[0] && n < r[0] && (n = r[0]), null != r[1] && o > r[1] && (o = r[1]));
                        var c = o - n;
                        a && (null != a[0] && c < a[0] && s > 1 || null != a[1] && c > a[1] && s < 1) || (i.min = n, i.max = o)
                    }
                }), e.setupGrid(), e.draw(), i.preventEvent || e.getPlaceholder().trigger("plotzoom", [e, i])
            }, e.pan = function(i) {
                var n = {
                    x: +i.left,
                    y: +i.top
                };
                isNaN(n.x) && (n.x = 0), isNaN(n.y) && (n.y = 0), t.each(e.getAxes(), function(t, e) {
                    var i, s, o = e.options,
                        a = n[e.direction];
                    i = e.c2p(e.p2c(e.min) + a), s = e.c2p(e.p2c(e.max) + a);
                    var r = o.panRange;
                    !1 !== r && (r && (null != r[0] && r[0] > i && (i += a = r[0] - i, s += a), null != r[1] && r[1] < s && (i += a = r[1] - s, s += a)), o.min = i, o.max = s)
                }), e.setupGrid(), e.draw(), i.preventEvent || e.getPlaceholder().trigger("plotpan", [e, i])
            }, e.hooks.bindEvents.push(function(t, e) {
                var s = t.getOptions();
                s.zoom.interactive && (e[s.zoom.trigger](i), e.mousewheel(n)), s.pan.interactive && (e.bind("dragstart", {
                    distance: 10
                }, l), e.bind("drag", h), e.bind("dragend", c))
            }), e.hooks.shutdown.push(function(t, e) {
                e.unbind(t.getOptions().zoom.trigger, i), e.unbind("mousewheel", n), e.unbind("dragstart", l), e.unbind("drag", h), e.unbind("dragend", c), r && clearTimeout(r)
            })
        },
        options: {
            xaxis: {
                zoomRange: null,
                panRange: null
            },
            zoom: {
                interactive: !1,
                trigger: "dblclick",
                amount: 1.5
            },
            pan: {
                interactive: !1,
                cursor: "move",
                frameRate: 20
            }
        },
        name: "navigate",
        version: "1.3"
    })
}(jQuery),
function(t, e, i) {
    "$:nomunge";
    var n, s = [],
        o = t.resize = t.extend(t.resize, {}),
        a = !1,
        r = "setTimeout",
        l = "resize",
        h = l + "-special-event",
        c = "pendingDelay",
        d = "activeDelay",
        u = "throttleWindow";

    function p(i) {
        !0 === a && (a = i || 1);
        for (var r = s.length - 1; r >= 0; r--) {
            var d = t(s[r]);
            if (d[0] == e || d.is(":visible")) {
                var u = d.width(),
                    f = d.height(),
                    g = d.data(h);
                !g || u === g.w && f === g.h || (d.trigger(l, [g.w = u, g.h = f]), a = i || !0)
            } else(g = d.data(h)).w = 0, g.h = 0
        }
        null !== n && (a && (null == i || i - a < 1e3) ? n = e.requestAnimationFrame(p) : (n = setTimeout(p, o[c]), a = !1))
    }
    o[c] = 200, o[d] = 20, o[u] = !0, t.event.special[l] = {
        setup: function() {
            if (!o[u] && this[r]) return !1;
            var e = t(this);
            s.push(this), e.data(h, {
                w: e.width(),
                h: e.height()
            }), 1 === s.length && (n = i, p())
        },
        teardown: function() {
            if (!o[u] && this[r]) return !1;
            for (var e = t(this), i = s.length - 1; i >= 0; i--)
                if (s[i] == this) {
                    s.splice(i, 1);
                    break
                } e.removeData(h), s.length || (a ? cancelAnimationFrame(n) : clearTimeout(n), n = null)
        },
        add: function(e) {
            if (!o[u] && this[r]) return !1;
            var n;

            function s(e, s, o) {
                var a = t(this),
                    r = a.data(h) || {};
                r.w = s !== i ? s : a.width(), r.h = o !== i ? o : a.height(), n.apply(this, arguments)
            }
            if (t.isFunction(e)) return n = e, s;
            n = e.handler, e.handler = s
        }
    }, e.requestAnimationFrame || (e.requestAnimationFrame = e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t, i) {
        return e.setTimeout(function() {
            t((new Date).getTime())
        }, o[d])
    }), e.cancelAnimationFrame || (e.cancelAnimationFrame = e.webkitCancelRequestAnimationFrame || e.mozCancelRequestAnimationFrame || e.oCancelRequestAnimationFrame || e.msCancelRequestAnimationFrame || clearTimeout)
}(jQuery, this),
function(t) {
    jQuery.plot.plugins.push({
        init: function(t) {
            function e() {
                var e = t.getPlaceholder();
                0 != e.width() && 0 != e.height() && (t.resize(), t.setupGrid(), t.draw())
            }
            t.hooks.bindEvents.push(function(t, i) {
                t.getPlaceholder().resize(e)
            }), t.hooks.shutdown.push(function(t, i) {
                t.getPlaceholder().unbind("resize", e)
            })
        },
        options: {},
        name: "resize",
        version: "1.0"
    })
}(),
function(t) {
    t.plot.plugins.push({
        init: function(e) {
            var i = {
                    first: {
                        x: -1,
                        y: -1
                    },
                    second: {
                        x: -1,
                        y: -1
                    },
                    show: !1,
                    active: !1
                },
                n = {},
                s = null;

            function o(t) {
                i.active && (d(t), e.getPlaceholder().trigger("plotselecting", [r()]))
            }

            function a(o) {
                1 == o.which && (document.body.focus(), void 0 !== document.onselectstart && null == n.onselectstart && (n.onselectstart = document.onselectstart, document.onselectstart = function() {
                    return !1
                }), void 0 !== document.ondrag && null == n.ondrag && (n.ondrag = document.ondrag, document.ondrag = function() {
                    return !1
                }), c(i.first, o), i.active = !0, s = function(t) {
                    ! function(t) {
                        s = null, void 0 !== document.onselectstart && (document.onselectstart = n.onselectstart), void 0 !== document.ondrag && (document.ondrag = n.ondrag), i.active = !1, d(t), f() ? l() : (e.getPlaceholder().trigger("plotunselected", []), e.getPlaceholder().trigger("plotselecting", [null]))
                    }(t)
                }, t(document).one("mouseup", s))
            }

            function r() {
                if (!f()) return null;
                if (!i.show) return null;
                var n = {},
                    s = i.first,
                    o = i.second;
                return t.each(e.getAxes(), function(t, e) {
                    if (e.used) {
                        var i = e.c2p(s[e.direction]),
                            a = e.c2p(o[e.direction]);
                        n[t] = {
                            from: Math.min(i, a),
                            to: Math.max(i, a)
                        }
                    }
                }), n
            }

            function l() {
                var t = r();
                e.getPlaceholder().trigger("plotselected", [t]), t.xaxis && t.yaxis && e.getPlaceholder().trigger("selected", [{
                    x1: t.xaxis.from,
                    y1: t.yaxis.from,
                    x2: t.xaxis.to,
                    y2: t.yaxis.to
                }])
            }

            function h(t, e, i) {
                return e < t ? t : e > i ? i : e
            }

            function c(t, n) {
                var s = e.getOptions(),
                    o = e.getPlaceholder().offset(),
                    a = e.getPlotOffset();
                t.x = h(0, n.pageX - o.left - a.left, e.width()), t.y = h(0, n.pageY - o.top - a.top, e.height()), "y" == s.selection.mode && (t.x = t == i.first ? 0 : e.width()), "x" == s.selection.mode && (t.y = t == i.first ? 0 : e.height())
            }

            function d(t) {
                null != t.pageX && (c(i.second, t), f() ? (i.show = !0, e.triggerRedrawOverlay()) : u(!0))
            }

            function u(t) {
                i.show && (i.show = !1, e.triggerRedrawOverlay(), t || e.getPlaceholder().trigger("plotunselected", []))
            }

            function p(t, i) {
                var n, s, o, a, r = e.getAxes();
                for (var l in r)
                    if ((n = r[l]).direction == i && (t[a = i + n.n + "axis"] || 1 != n.n || (a = i + "axis"), t[a])) {
                        s = t[a].from, o = t[a].to;
                        break
                    } if (t[a] || (n = "x" == i ? e.getXAxes()[0] : e.getYAxes()[0], s = t[i + "1"], o = t[i + "2"]), null != s && null != o && s > o) {
                    var h = s;
                    s = o, o = h
                }
                return {
                    from: s,
                    to: o,
                    axis: n
                }
            }

            function f() {
                var t = e.getOptions().selection.minSize;
                return Math.abs(i.second.x - i.first.x) >= t && Math.abs(i.second.y - i.first.y) >= t
            }
            e.clearSelection = u, e.setSelection = function(t, n) {
                var s, o = e.getOptions();
                "y" == o.selection.mode ? (i.first.x = 0, i.second.x = e.width()) : (s = p(t, "x"), i.first.x = s.axis.p2c(s.from), i.second.x = s.axis.p2c(s.to)), "x" == o.selection.mode ? (i.first.y = 0, i.second.y = e.height()) : (s = p(t, "y"), i.first.y = s.axis.p2c(s.from), i.second.y = s.axis.p2c(s.to)), i.show = !0, e.triggerRedrawOverlay(), !n && f() && l()
            }, e.getSelection = r, e.hooks.bindEvents.push(function(t, e) {
                null != t.getOptions().selection.mode && (e.mousemove(o), e.mousedown(a))
            }), e.hooks.drawOverlay.push(function(e, n) {
                if (i.show && f()) {
                    var s = e.getPlotOffset(),
                        o = e.getOptions();
                    n.save(), n.translate(s.left, s.top);
                    var a = t.color.parse(o.selection.color);
                    n.strokeStyle = a.scale("a", .8).toString(), n.lineWidth = 1, n.lineJoin = o.selection.shape, n.fillStyle = a.scale("a", .4).toString();
                    var r = Math.min(i.first.x, i.second.x) + .5,
                        l = Math.min(i.first.y, i.second.y) + .5,
                        h = Math.abs(i.second.x - i.first.x) - 1,
                        c = Math.abs(i.second.y - i.first.y) - 1;
                    n.fillRect(r, l, h, c), n.strokeRect(r, l, h, c), n.restore()
                }
            }), e.hooks.shutdown.push(function(e, i) {
                i.unbind("mousemove", o), i.unbind("mousedown", a), s && t(document).unbind("mouseup", s)
            })
        },
        options: {
            selection: {
                mode: null,
                color: "#e8cfac",
                shape: "round",
                minSize: 5
            }
        },
        name: "selection",
        version: "1.1"
    })
}(jQuery),
function(t) {
    function e(t, e) {
        return e * Math.floor(t / e)
    }

    function i(t, e, i, n) {
        if ("function" == typeof t.strftime) return t.strftime(e);
        var s, o = function(t, e) {
                return t = "" + t, e = "" + (null == e ? "0" : e), 1 == t.length ? e + t : t
            },
            a = [],
            r = !1,
            l = t.getHours(),
            h = l < 12;
        null == i && (i = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]), null == n && (n = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]), s = l > 12 ? l - 12 : 0 == l ? 12 : l;
        for (var c = 0; c < e.length; ++c) {
            var d = e.charAt(c);
            if (r) {
                switch (d) {
                    case "a":
                        d = "" + n[t.getDay()];
                        break;
                    case "b":
                        d = "" + i[t.getMonth()];
                        break;
                    case "d":
                        d = o(t.getDate());
                        break;
                    case "e":
                        d = o(t.getDate(), " ");
                        break;
                    case "h":
                    case "H":
                        d = o(l);
                        break;
                    case "I":
                        d = o(s);
                        break;
                    case "l":
                        d = o(s, " ");
                        break;
                    case "m":
                        d = o(t.getMonth() + 1);
                        break;
                    case "M":
                        d = o(t.getMinutes());
                        break;
                    case "q":
                        d = "" + (Math.floor(t.getMonth() / 3) + 1);
                        break;
                    case "S":
                        d = o(t.getSeconds());
                        break;
                    case "y":
                        d = o(t.getFullYear() % 100);
                        break;
                    case "Y":
                        d = "" + t.getFullYear();
                        break;
                    case "p":
                        d = h ? "am" : "pm";
                        break;
                    case "P":
                        d = h ? "AM" : "PM";
                        break;
                    case "w":
                        d = "" + t.getDay()
                }
                a.push(d), r = !1
            } else "%" == d ? r = !0 : a.push(d)
        }
        return a.join("")
    }

    function n(t) {
        function e(t, e, i, n) {
            t[e] = function() {
                return i[n].apply(i, arguments)
            }
        }
        var i = {
            date: t
        };
        void 0 != t.strftime && e(i, "strftime", t, "strftime"), e(i, "getTime", t, "getTime"), e(i, "setTime", t, "setTime");
        for (var n = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"], s = 0; s < n.length; s++) e(i, "get" + n[s], t, "getUTC" + n[s]), e(i, "set" + n[s], t, "setUTC" + n[s]);
        return i
    }

    function s(t, e) {
        if ("browser" == e.timezone) return new Date(t);
        if (e.timezone && "utc" != e.timezone) {
            if ("undefined" != typeof timezoneJS && void 0 !== timezoneJS.Date) {
                var i = new timezoneJS.Date;
                return i.setTimezone(e.timezone), i.setTime(t), i
            }
            return n(new Date(t))
        }
        return n(new Date(t))
    }
    var o = {
            second: 1e3,
            minute: 6e4,
            hour: 36e5,
            day: 864e5,
            month: 2592e6,
            quarter: 7776e6,
            year: 525949.2 * 60 * 1e3
        },
        a = [
            [1, "second"],
            [2, "second"],
            [5, "second"],
            [10, "second"],
            [30, "second"],
            [1, "minute"],
            [2, "minute"],
            [5, "minute"],
            [10, "minute"],
            [30, "minute"],
            [1, "hour"],
            [2, "hour"],
            [4, "hour"],
            [8, "hour"],
            [12, "hour"],
            [1, "day"],
            [2, "day"],
            [3, "day"],
            [.25, "month"],
            [.5, "month"],
            [1, "month"],
            [2, "month"]
        ],
        r = a.concat([
            [3, "month"],
            [6, "month"],
            [1, "year"]
        ]),
        l = a.concat([
            [1, "quarter"],
            [2, "quarter"],
            [1, "year"]
        ]);
    t.plot.plugins.push({
        init: function(n) {
            n.hooks.processOptions.push(function(n, a) {
                t.each(n.getAxes(), function(t, n) {
                    var a = n.options;
                    "time" == a.mode && (n.tickGenerator = function(t) {
                        var i = [],
                            n = s(t.min, a),
                            h = 0,
                            c = a.tickSize && "quarter" === a.tickSize[1] || a.minTickSize && "quarter" === a.minTickSize[1] ? l : r;
                        null != a.minTickSize && (h = "number" == typeof a.tickSize ? a.tickSize : a.minTickSize[0] * o[a.minTickSize[1]]);
                        for (var d = 0; d < c.length - 1 && !(t.delta < (c[d][0] * o[c[d][1]] + c[d + 1][0] * o[c[d + 1][1]]) / 2 && c[d][0] * o[c[d][1]] >= h); ++d);
                        var u = c[d][0],
                            p = c[d][1];
                        if ("year" == p) {
                            if (null != a.minTickSize && "year" == a.minTickSize[1]) u = Math.floor(a.minTickSize[0]);
                            else {
                                var f = Math.pow(10, Math.floor(Math.log(t.delta / o.year) / Math.LN10)),
                                    g = t.delta / o.year / f;
                                u = g < 1.5 ? 1 : g < 3 ? 2 : g < 7.5 ? 5 : 10, u *= f
                            }
                            u < 1 && (u = 1)
                        }
                        t.tickSize = a.tickSize || [u, p];
                        var m = t.tickSize[0];
                        p = t.tickSize[1];
                        var v = m * o[p];
                        "second" == p ? n.setSeconds(e(n.getSeconds(), m)) : "minute" == p ? n.setMinutes(e(n.getMinutes(), m)) : "hour" == p ? n.setHours(e(n.getHours(), m)) : "month" == p ? n.setMonth(e(n.getMonth(), m)) : "quarter" == p ? n.setMonth(3 * e(n.getMonth() / 3, m)) : "year" == p && n.setFullYear(e(n.getFullYear(), m)), n.setMilliseconds(0), v >= o.minute && n.setSeconds(0), v >= o.hour && n.setMinutes(0), v >= o.day && n.setHours(0), v >= 4 * o.day && n.setDate(1), v >= 2 * o.month && n.setMonth(e(n.getMonth(), 3)), v >= 2 * o.quarter && n.setMonth(e(n.getMonth(), 6)), v >= o.year && n.setMonth(0);
                        var y, b = 0,
                            w = Number.NaN;
                        do {
                            if (y = w, w = n.getTime(), i.push(w), "month" == p || "quarter" == p)
                                if (m < 1) {
                                    n.setDate(1);
                                    var x = n.getTime();
                                    n.setMonth(n.getMonth() + ("quarter" == p ? 3 : 1));
                                    var S = n.getTime();
                                    n.setTime(w + b * o.hour + (S - x) * m), b = n.getHours(), n.setHours(0)
                                } else n.setMonth(n.getMonth() + m * ("quarter" == p ? 3 : 1));
                            else "year" == p ? n.setFullYear(n.getFullYear() + m) : n.setTime(w + v)
                        } while (w < t.max && w != y);
                        return i
                    }, n.tickFormatter = function(t, e) {
                        var n = s(t, e.options);
                        if (null != a.timeformat) return i(n, a.timeformat, a.monthNames, a.dayNames);
                        var r = e.options.tickSize && "quarter" == e.options.tickSize[1] || e.options.minTickSize && "quarter" == e.options.minTickSize[1],
                            l = e.tickSize[0] * o[e.tickSize[1]],
                            h = e.max - e.min,
                            c = a.twelveHourClock ? " %p" : "",
                            d = a.twelveHourClock ? "%I" : "%H";
                        return i(n, l < o.minute ? d + ":%M:%S" + c : l < o.day ? h < 2 * o.day ? d + ":%M" + c : "%b %d " + d + ":%M" + c : l < o.month ? "%b %d" : r && l < o.quarter || !r && l < o.year ? h < o.year ? "%b" : "%b %Y" : r && l < o.year ? h < o.year ? "Q%q" : "Q%q %Y" : "%Y", a.monthNames, a.dayNames)
                    })
                })
            })
        },
        options: {
            xaxis: {
                timezone: null,
                timeformat: null,
                twelveHourClock: !1,
                monthNames: null
            }
        },
        name: "time",
        version: "1.0"
    }), t.plot.formatDate = i, t.plot.dateGenerator = s
}(jQuery),
function(t) {
    var e = 10,
        i = .95;
    var n = {
        series: {
            pie: {
                show: !1,
                radius: "auto",
                innerRadius: 0,
                startAngle: 1.5,
                tilt: 1,
                shadow: {
                    left: 5,
                    top: 15,
                    alpha: .02
                },
                offset: {
                    top: 0,
                    left: "auto"
                },
                stroke: {
                    color: "#fff",
                    width: 1
                },
                label: {
                    show: "auto",
                    formatter: function(t, e) {
                        return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + e.color + ";'>" + t + "<br/>" + Math.round(e.percent) + "%</div>"
                    },
                    radius: 1,
                    background: {
                        color: null,
                        opacity: 0
                    },
                    threshold: 0
                },
                combine: {
                    threshold: -1,
                    color: null,
                    label: "Other"
                },
                highlight: {
                    opacity: .5
                }
            }
        }
    };
    t.plot.plugins.push({
        init: function(n) {
            var s = null,
                o = null,
                a = null,
                r = null,
                l = null,
                h = null,
                c = !1,
                d = null,
                u = [];

            function p(e, i, n) {
                c || (c = !0, s = e.getCanvas(), o = t(s).parent(), a = e.getOptions(), e.setData(function(e) {
                    for (var i = 0, n = 0, s = 0, o = a.series.pie.combine.color, r = [], l = 0; l < e.length; ++l) {
                        var h = e[l].data;
                        t.isArray(h) && 1 == h.length && (h = h[0]), t.isArray(h) ? !isNaN(parseFloat(h[1])) && isFinite(h[1]) ? h[1] = +h[1] : h[1] = 0 : h = !isNaN(parseFloat(h)) && isFinite(h) ? [1, +h] : [1, 0], e[l].data = [h]
                    }
                    for (var l = 0; l < e.length; ++l) i += e[l].data[0][1];
                    for (var l = 0; l < e.length; ++l) {
                        var h = e[l].data[0][1];
                        h / i <= a.series.pie.combine.threshold && (n += h, s++, o || (o = e[l].color))
                    }
                    for (var l = 0; l < e.length; ++l) {
                        var h = e[l].data[0][1];
                        (s < 2 || h / i > a.series.pie.combine.threshold) && r.push(t.extend(e[l], {
                            data: [
                                [1, h]
                            ],
                            color: e[l].color,
                            label: e[l].label,
                            angle: h * Math.PI * 2 / i,
                            percent: h / (i / 100)
                        }))
                    }
                    return s > 1 && r.push({
                        data: [
                            [1, n]
                        ],
                        color: o,
                        label: a.series.pie.combine.label,
                        angle: n * Math.PI * 2 / i,
                        percent: n / (i / 100)
                    }), r
                }(e.getData())))
            }

            function f(n, s) {
                if (o) {
                    var u = n.getPlaceholder().width(),
                        p = n.getPlaceholder().height(),
                        f = o.children().filter(".legend").children().width() || 0;
                    d = s, c = !1, r = Math.min(u, p / a.series.pie.tilt) / 2, h = p / 2 + a.series.pie.offset.top, l = u / 2, "auto" == a.series.pie.offset.left ? (a.legend.position.match("w") ? l += f / 2 : l -= f / 2, l < r ? l = r : l > u - r && (l = u - r)) : l += a.series.pie.offset.left;
                    var m = n.getData(),
                        v = 0;
                    do {
                        v > 0 && (r *= i), v += 1, y(), a.series.pie.tilt <= .8 && b()
                    } while (!w() && v < e);
                    v >= e && (y(), o.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")), n.setSeries && n.insertLegend && (n.setSeries(m), n.insertLegend())
                }

                function y() {
                    d.clearRect(0, 0, u, p), o.children().filter(".pieLabel, .pieLabelBackground").remove()
                }

                function b() {
                    var t = a.series.pie.shadow.left,
                        e = a.series.pie.shadow.top,
                        i = a.series.pie.shadow.alpha,
                        n = a.series.pie.radius > 1 ? a.series.pie.radius : r * a.series.pie.radius;
                    if (!(n >= u / 2 - t || n * a.series.pie.tilt >= p / 2 - e || n <= 10)) {
                        d.save(), d.translate(t, e), d.globalAlpha = i, d.fillStyle = "#000", d.translate(l, h), d.scale(1, a.series.pie.tilt);
                        for (var s = 1; s <= 10; s++) d.beginPath(), d.arc(0, 0, n, 0, 2 * Math.PI, !1), d.fill(), n -= s;
                        d.restore()
                    }
                }

                function w() {
                    var e = Math.PI * a.series.pie.startAngle,
                        i = a.series.pie.radius > 1 ? a.series.pie.radius : r * a.series.pie.radius;
                    d.save(), d.translate(l, h), d.scale(1, a.series.pie.tilt), d.save();
                    for (var n = e, s = 0; s < m.length; ++s) m[s].startAngle = n, c(m[s].angle, m[s].color, !0);
                    if (d.restore(), a.series.pie.stroke.width > 0) {
                        for (d.save(), d.lineWidth = a.series.pie.stroke.width, n = e, s = 0; s < m.length; ++s) c(m[s].angle, a.series.pie.stroke.color, !1);
                        d.restore()
                    }
                    return g(d), d.restore(), !a.series.pie.label.show || function() {
                        for (var i = e, n = a.series.pie.label.radius > 1 ? a.series.pie.label.radius : r * a.series.pie.label.radius, s = 0; s < m.length; ++s) {
                            if (m[s].percent >= 100 * a.series.pie.label.threshold && !c(m[s], i, s)) return !1;
                            i += m[s].angle
                        }
                        return !0;

                        function c(e, i, s) {
                            if (0 == e.data[0][1]) return !0;
                            var r, c = a.legend.labelFormatter,
                                d = a.series.pie.label.formatter;
                            r = c ? c(e.label, e) : e.label, d && (r = d(r, e));
                            var f = (i + e.angle + i) / 2,
                                g = l + Math.round(Math.cos(f) * n),
                                m = h + Math.round(Math.sin(f) * n) * a.series.pie.tilt,
                                v = "<span class='pieLabel' id='pieLabel" + s + "' style='position:absolute;top:" + m + "px;left:" + g + "px;'>" + r + "</span>";
                            o.append(v);
                            var y = o.children("#pieLabel" + s),
                                b = m - y.height() / 2,
                                w = g - y.width() / 2;
                            if (y.css("top", b), y.css("left", w), 0 - b > 0 || 0 - w > 0 || p - (b + y.height()) < 0 || u - (w + y.width()) < 0) return !1;
                            if (0 != a.series.pie.label.background.opacity) {
                                var x = a.series.pie.label.background.color;
                                null == x && (x = e.color);
                                var S = "top:" + b + "px;left:" + w + "px;";
                                t("<div class='pieLabelBackground' style='position:absolute;width:" + y.width() + "px;height:" + y.height() + "px;" + S + "background-color:" + x + ";'></div>").css("opacity", a.series.pie.label.background.opacity).insertBefore(y)
                            }
                            return !0
                        }
                    }();

                    function c(t, e, s) {
                        t <= 0 || isNaN(t) || (s ? d.fillStyle = e : (d.strokeStyle = e, d.lineJoin = "round"), d.beginPath(), Math.abs(t - 2 * Math.PI) > 1e-9 && d.moveTo(0, 0), d.arc(0, 0, i, n, n + t / 2, !1), d.arc(0, 0, i, n + t / 2, n + t, !1), d.closePath(), n += t, s ? d.fill() : d.stroke())
                    }
                }
            }

            function g(t) {
                if (a.series.pie.innerRadius > 0) {
                    t.save();
                    var e = a.series.pie.innerRadius > 1 ? a.series.pie.innerRadius : r * a.series.pie.innerRadius;
                    t.globalCompositeOperation = "destination-out", t.beginPath(), t.fillStyle = a.series.pie.stroke.color, t.arc(0, 0, e, 0, 2 * Math.PI, !1), t.fill(), t.closePath(), t.restore(), t.save(), t.beginPath(), t.strokeStyle = a.series.pie.stroke.color, t.arc(0, 0, e, 0, 2 * Math.PI, !1), t.stroke(), t.closePath(), t.restore()
                }
            }

            function m(t, e) {
                for (var i = !1, n = -1, s = t.length, o = s - 1; ++n < s; o = n)(t[n][1] <= e[1] && e[1] < t[o][1] || t[o][1] <= e[1] && e[1] < t[n][1]) && e[0] < (t[o][0] - t[n][0]) * (e[1] - t[n][1]) / (t[o][1] - t[n][1]) + t[n][0] && (i = !i);
                return i
            }

            function v(t) {
                b("plothover", t)
            }

            function y(t) {
                b("plotclick", t)
            }

            function b(t, e) {
                var i = n.offset(),
                    s = function(t, e) {
                        for (var i, s, o = n.getData(), a = n.getOptions(), c = a.series.pie.radius > 1 ? a.series.pie.radius : r * a.series.pie.radius, u = 0; u < o.length; ++u) {
                            var p = o[u];
                            if (p.pie.show) {
                                if (d.save(), d.beginPath(), d.moveTo(0, 0), d.arc(0, 0, c, p.startAngle, p.startAngle + p.angle / 2, !1), d.arc(0, 0, c, p.startAngle + p.angle / 2, p.startAngle + p.angle, !1), d.closePath(), i = t - l, s = e - h, d.isPointInPath) {
                                    if (d.isPointInPath(t - l, e - h)) return d.restore(), {
                                        datapoint: [p.percent, p.data],
                                        dataIndex: 0,
                                        series: p,
                                        seriesIndex: u
                                    }
                                } else if (m([
                                        [0, 0],
                                        [c * Math.cos(p.startAngle), c * Math.sin(p.startAngle)],
                                        [c * Math.cos(p.startAngle + p.angle / 4), c * Math.sin(p.startAngle + p.angle / 4)],
                                        [c * Math.cos(p.startAngle + p.angle / 2), c * Math.sin(p.startAngle + p.angle / 2)],
                                        [c * Math.cos(p.startAngle + p.angle / 1.5), c * Math.sin(p.startAngle + p.angle / 1.5)],
                                        [c * Math.cos(p.startAngle + p.angle), c * Math.sin(p.startAngle + p.angle)]
                                    ], [i, s])) return d.restore(), {
                                    datapoint: [p.percent, p.data],
                                    dataIndex: 0,
                                    series: p,
                                    seriesIndex: u
                                };
                                d.restore()
                            }
                        }
                        return null
                    }(parseInt(e.pageX - i.left), parseInt(e.pageY - i.top));
                if (a.grid.autoHighlight)
                    for (var c = 0; c < u.length; ++c) {
                        var p = u[c];
                        p.auto != t || s && p.series == s.series || w(p.series)
                    }
                s && function(t, e) {
                    var i = x(t); - 1 == i ? (u.push({
                        series: t,
                        auto: e
                    }), n.triggerRedrawOverlay()) : e || (u[i].auto = !1)
                }(s.series, t);
                var f = {
                    pageX: e.pageX,
                    pageY: e.pageY
                };
                o.trigger(t, [f, s])
            }

            function w(t) {
                null == t && (u = [], n.triggerRedrawOverlay());
                var e = x(t); - 1 != e && (u.splice(e, 1), n.triggerRedrawOverlay())
            }

            function x(t) {
                for (var e = 0; e < u.length; ++e)
                    if (u[e].series == t) return e;
                return -1
            }
            n.hooks.processOptions.push(function(t, e) {
                e.series.pie.show && (e.grid.show = !1, "auto" == e.series.pie.label.show && (e.legend.show ? e.series.pie.label.show = !1 : e.series.pie.label.show = !0), "auto" == e.series.pie.radius && (e.series.pie.label.show ? e.series.pie.radius = .75 : e.series.pie.radius = 1), e.series.pie.tilt > 1 ? e.series.pie.tilt = 1 : e.series.pie.tilt < 0 && (e.series.pie.tilt = 0))
            }), n.hooks.bindEvents.push(function(t, e) {
                var i = t.getOptions();
                i.series.pie.show && (i.grid.hoverable && e.unbind("mousemove").mousemove(v), i.grid.clickable && e.unbind("click").click(y))
            }), n.hooks.processDatapoints.push(function(t, e, i, n) {
                t.getOptions().series.pie.show && p(t)
            }), n.hooks.drawOverlay.push(function(t, e) {
                t.getOptions().series.pie.show && function(t, e) {
                    var i = t.getOptions(),
                        n = i.series.pie.radius > 1 ? i.series.pie.radius : r * i.series.pie.radius;
                    e.save(), e.translate(l, h), e.scale(1, i.series.pie.tilt);
                    for (var s = 0; s < u.length; ++s) o(u[s].series);

                    function o(t) {
                        t.angle <= 0 || isNaN(t.angle) || (e.fillStyle = "rgba(255, 255, 255, " + i.series.pie.highlight.opacity + ")", e.beginPath(), Math.abs(t.angle - 2 * Math.PI) > 1e-9 && e.moveTo(0, 0), e.arc(0, 0, n, t.startAngle, t.startAngle + t.angle / 2, !1), e.arc(0, 0, n, t.startAngle + t.angle / 2, t.startAngle + t.angle, !1), e.closePath(), e.fill())
                    }
                    g(e), e.restore()
                }(t, e)
            }), n.hooks.draw.push(function(t, e) {
                t.getOptions().series.pie.show && f(t, e)
            })
        },
        options: n,
        name: "pie",
        version: "1.1"
    })
}(jQuery),
function(t) {
    jQuery.plot.plugins.push({
        init: function(t) {
            var e, i, n, s, o = 1,
                a = !1;

            function r(t, e) {
                for (var i = new Array, n = 0; n < t.length; n++) i[0] = t[n].data[0][e], i[1] = t[n].data[t[n].data.length - 1][e];
                return i
            }

            function l(t, e) {
                var i = t.bars.order,
                    n = e.bars.order;
                return i < n ? -1 : i > n ? 1 : 0
            }

            function h(t, e, i) {
                for (var n = 0, o = e; o <= i; o++) n += t[o].bars.barWidth + 2 * s;
                return n
            }
            t.hooks.processDatapoints.push(function(t, c, d) {
                var u, p = null;
                if (function(t) {
                        return null != t.bars && t.bars.show && null != t.bars.order
                    }(c) && (function(t) {
                        t.bars.horizontal && (a = !0)
                    }(c), function(t) {
                        var e = a ? t.getPlaceholder().innerHeight() : t.getPlaceholder().innerWidth(),
                            i = r(t.getData(), a ? 1 : 0),
                            n = i[1] - i[0];
                        o = n / e
                    }(t), function(t) {
                        e = function(t) {
                            for (var e = new Array, i = 0; i < t.length; i++) null != t[i].bars.order && t[i].bars.show && e.push(t[i]);
                            return e.sort(l)
                        }(t.getData()), i = e.length
                    }(t), function(t) {
                        n = t.bars.lineWidth ? t.bars.lineWidth : 2, s = n * o
                    }(c), i >= 2)) {
                    var f = function(t) {
                            for (var i = 0, n = 0; n < e.length; ++n)
                                if (t == e[n]) {
                                    i = n;
                                    break
                                } return i + 1
                        }(c),
                        g = (u = 0, i % 2 != 0 && (u = e[Math.ceil(i / 2)].bars.barWidth / 2), u);
                    p = function(t, e, i) {
                        for (var n = t.pointsize, s = t.points, o = 0, r = a ? 1 : 0; r < s.length; r += n) s[r] += i, e.data[o][3] = s[r], o++;
                        return s
                    }(d, c, function(t) {
                        return t <= Math.ceil(i / 2)
                    }(f) ? -1 * h(e, f - 1, Math.floor(i / 2) - 1) - g : h(e, Math.ceil(i / 2), f - 2) + g + 2 * s), d.points = p
                }
                return p
            })
        },
        options: {
            series: {
                bars: {
                    order: null
                }
            }
        },
        name: "orderBars",
        version: "0.2"
    })
}(),
function(t) {
    var e = {
        tooltip: {
            show: !1,
            cssClass: "flotTip",
            content: "%s | X: %x | Y: %y",
            xDateFormat: null,
            yDateFormat: null,
            monthNames: null,
            dayNames: null,
            shifts: {
                x: 10,
                y: 20
            },
            defaultTheme: !0,
            snap: !0,
            lines: !1,
            clickTips: !1,
            onHover: function(t, e) {},
            $compat: !1
        }
    };
    e.tooltipOpts = e.tooltip;
    var i = function(t) {
        this.tipPosition = {
            x: 0,
            y: 0
        }, this.init(t)
    };
    i.prototype.init = function(e) {
        function i(t) {
            var i = {};
            i.x = t.pageX, i.y = t.pageY, e.setTooltipPosition(i)
        }

        function n(i, n, a) {
            o.clickmode ? (t(e.getPlaceholder()).bind("plothover", s), e.hideTooltip(), o.clickmode = !1) : (s(i, n, a), o.getDomElement().is(":visible") && (t(e.getPlaceholder()).unbind("plothover", s), o.clickmode = !0))
        }

        function s(i, n, s) {
            var a = function(t, e, i, n) {
                return Math.sqrt((i - t) * (i - t) + (n - e) * (n - e))
            };
            if (s) e.showTooltip(s, o.tooltipOptions.snap ? s : n);
            else if (o.plotOptions.series.lines.show && !0 === o.tooltipOptions.lines) {
                var r = o.plotOptions.grid.mouseActiveRadius,
                    l = {
                        distance: r + 1
                    },
                    h = n;
                t.each(e.getData(), function(t, i) {
                    for (var s = 0, r = -1, c = 1; c < i.data.length; c++) i.data[c - 1][0] <= n.x && i.data[c][0] >= n.x && (s = c - 1, r = c);
                    if (-1 !== r) {
                        var d = {
                                x: i.data[s][0],
                                y: i.data[s][1]
                            },
                            u = {
                                x: i.data[r][0],
                                y: i.data[r][1]
                            },
                            p = function(t, e, i, n, s, o, r) {
                                if (!r || (r = function(t, e, i, n, s, o) {
                                        if (void 0 !== i) return {
                                            x: i,
                                            y: e
                                        };
                                        if (void 0 !== n) return {
                                            x: t,
                                            y: n
                                        };
                                        var a, r = -1 / ((o - n) / (s - i));
                                        return {
                                            x: a = (s * (t * r - e + n) + i * (t * -r + e - o)) / (r * (s - i) + n - o),
                                            y: r * a - r * t + e
                                        }
                                    }(t, e, i, n, s, o)).x >= Math.min(i, s) && r.x <= Math.max(i, s) && r.y >= Math.min(n, o) && r.y <= Math.max(n, o)) {
                                    var l = n - o,
                                        h = s - i,
                                        c = i * o - n * s;
                                    return Math.abs(l * t + h * e + c) / Math.sqrt(l * l + h * h)
                                }
                                var d = a(t, e, i, n),
                                    u = a(t, e, s, o);
                                return d > u ? u : d
                            }(i.xaxis.p2c(n.x), i.yaxis.p2c(n.y), i.xaxis.p2c(d.x), i.yaxis.p2c(d.y), i.xaxis.p2c(u.x), i.yaxis.p2c(u.y), !1);
                        if (p < l.distance) {
                            var f = a(d.x, d.y, n.x, n.y) < a(n.x, n.y, u.x, u.y) ? s : r,
                                g = (i.datapoints.pointsize, [n.x, d.y + (u.y - d.y) * ((n.x - d.x) / (u.x - d.x))]);
                            l = {
                                distance: p,
                                item: {
                                    datapoint: g,
                                    dataIndex: f,
                                    series: i,
                                    seriesIndex: t
                                }
                            }, o.tooltipOptions.snap && (h = {
                                pageX: i.xaxis.p2c(g[0]),
                                pageY: i.yaxis.p2c(g[1])
                            })
                        }
                    } else e.hideTooltip()
                }), l.distance < r + 1 ? e.showTooltip(l.item, h) : e.hideTooltip()
            } else e.hideTooltip()
        }
        var o = this,
            a = t.plot.plugins.length;
        if (this.plotPlugins = [], a)
            for (var r = 0; a > r; r++) this.plotPlugins.push(t.plot.plugins[r].name);
        e.hooks.bindEvents.push(function(e, a) {
            o.plotOptions = e.getOptions(), "boolean" == typeof o.plotOptions.tooltip && (o.plotOptions.tooltipOpts.show = o.plotOptions.tooltip, o.plotOptions.tooltip = o.plotOptions.tooltipOpts, delete o.plotOptions.tooltipOpts), !1 !== o.plotOptions.tooltip.show && void 0 !== o.plotOptions.tooltip.show && (o.tooltipOptions = o.plotOptions.tooltip, o.tooltipOptions.$compat ? (o.wfunc = "width", o.hfunc = "height") : (o.wfunc = "innerWidth", o.hfunc = "innerHeight"), o.getDomElement(), t(e.getPlaceholder()).bind("plothover", s), o.tooltipOptions.clickTips && t(e.getPlaceholder()).bind("plotclick", n), o.clickmode = !1, t(a).bind("mousemove", i))
        }), e.hooks.shutdown.push(function(e, o) {
            t(e.getPlaceholder()).unbind("plothover", s), t(e.getPlaceholder()).unbind("plotclick", n), e.removeTooltip(), t(o).unbind("mousemove", i)
        }), e.setTooltipPosition = function(e) {
            var i = o.getDomElement(),
                n = i.outerWidth() + o.tooltipOptions.shifts.x,
                s = i.outerHeight() + o.tooltipOptions.shifts.y;
            e.x - t(window).scrollLeft() > t(window)[o.wfunc]() - n && (e.x -= n, e.x = Math.max(e.x, 0)), e.y - t(window).scrollTop() > t(window)[o.hfunc]() - s && (e.y -= s), isNaN(e.x) ? o.tipPosition.x = o.tipPosition.xPrev : (o.tipPosition.x = e.x, o.tipPosition.xPrev = e.x), isNaN(e.y) ? o.tipPosition.y = o.tipPosition.yPrev : (o.tipPosition.y = e.y, o.tipPosition.yPrev = e.y)
        }, e.showTooltip = function(t, i, n) {
            var s = o.getDomElement(),
                a = o.stringFormat(o.tooltipOptions.content, t);
            "" !== a && (s.html(a), e.setTooltipPosition({
                x: o.tipPosition.x,
                y: o.tipPosition.y
            }), s.css({
                left: o.tipPosition.x + o.tooltipOptions.shifts.x,
                top: o.tipPosition.y + o.tooltipOptions.shifts.y
            }).show(), "function" == typeof o.tooltipOptions.onHover && o.tooltipOptions.onHover(t, s))
        }, e.hideTooltip = function() {
            o.getDomElement().hide().html("")
        }, e.removeTooltip = function() {
            o.getDomElement().remove()
        }
    }, i.prototype.getDomElement = function() {
        var e = t("<div>");
        return this.tooltipOptions && this.tooltipOptions.cssClass && (0 === (e = t("." + this.tooltipOptions.cssClass)).length && ((e = t("<div />").addClass(this.tooltipOptions.cssClass)).appendTo("body").hide().css({
            position: "absolute"
        }), this.tooltipOptions.defaultTheme && e.css({
            background: "#fff",
            "z-index": "1040",
            padding: "0.4em 0.6em",
            "border-radius": "0.5em",
            "font-size": "0.8em",
            border: "1px solid #111",
            display: "none",
            "white-space": "nowrap"
        }))), e
    }, i.prototype.stringFormat = function(t, e) {
        var i, n, s, o, a, r = /%s/,
            l = /%c/,
            h = /%lx/,
            c = /%ly/,
            d = /%x\.{0,1}(\d{0,})/,
            u = /%y\.{0,1}(\d{0,})/;
        if (void 0 !== e.series.threshold ? (i = e.datapoint[0], n = e.datapoint[1], s = e.datapoint[2]) : void 0 !== e.series.curvedLines ? (i = e.datapoint[0], n = e.datapoint[1]) : void 0 !== e.series.lines && e.series.lines.steps ? (i = e.series.datapoints.points[2 * e.dataIndex], n = e.series.datapoints.points[2 * e.dataIndex + 1], s = "") : (i = e.series.data[e.dataIndex][0], n = e.series.data[e.dataIndex][1], s = e.series.data[e.dataIndex][2]), null === e.series.label && e.series.originSeries && (e.series.label = e.series.originSeries.label), "function" == typeof t && (t = t(e.series.label, i, n, e)), "boolean" == typeof t && !t) return "";
        if (s && (t = t.replace("%ct", s)), void 0 !== e.series.percent ? o = e.series.percent : void 0 !== e.series.percents && (o = e.series.percents[e.dataIndex]), "number" == typeof o && (t = this.adjustValPrecision(/%p\.{0,1}(\d{0,})/, t, o)), e.series.hasOwnProperty("pie") && void 0 !== e.series.data[0][1] && (a = e.series.data[0][1]), "number" == typeof a && (t = t.replace("%n", a)), t = void 0 !== e.series.label ? t.replace(r, e.series.label) : t.replace(r, ""), t = void 0 !== e.series.color ? t.replace(l, e.series.color) : t.replace(l, ""), t = this.hasAxisLabel("xaxis", e) ? t.replace(h, e.series.xaxis.options.axisLabel) : t.replace(h, ""), t = this.hasAxisLabel("yaxis", e) ? t.replace(c, e.series.yaxis.options.axisLabel) : t.replace(c, ""), this.isTimeMode("xaxis", e) && this.isXDateFormat(e) && (t = t.replace(d, this.timestampToDate(i, this.tooltipOptions.xDateFormat, e.series.xaxis.options))), this.isTimeMode("yaxis", e) && this.isYDateFormat(e) && (t = t.replace(u, this.timestampToDate(n, this.tooltipOptions.yDateFormat, e.series.yaxis.options))), "number" == typeof i && (t = this.adjustValPrecision(d, t, i)), "number" == typeof n && (t = this.adjustValPrecision(u, t, n)), void 0 !== e.series.xaxis.ticks) {
            var p;
            p = this.hasRotatedXAxisTicks(e) ? "rotatedTicks" : "ticks";
            var f = e.dataIndex + e.seriesIndex;
            for (var g in e.series.xaxis[p])
                if (e.series.xaxis[p].hasOwnProperty(f) && !this.isTimeMode("xaxis", e)) {
                    (this.isCategoriesMode("xaxis", e) ? e.series.xaxis[p][f].label : e.series.xaxis[p][f].v) === i && (t = t.replace(d, e.series.xaxis[p][f].label.replace(/\$/g, "$$$$")))
                }
        }
        if (void 0 !== e.series.yaxis.ticks)
            for (var m in e.series.yaxis.ticks)
                if (e.series.yaxis.ticks.hasOwnProperty(m)) {
                    (this.isCategoriesMode("yaxis", e) ? e.series.yaxis.ticks[m].label : e.series.yaxis.ticks[m].v) === n && (t = t.replace(u, e.series.yaxis.ticks[m].label.replace(/\$/g, "$$$$")))
                } return void 0 !== e.series.xaxis.tickFormatter && (t = t.replace("%x", e.series.xaxis.tickFormatter(i, e.series.xaxis).replace(/\$/g, "$$"))), void 0 !== e.series.yaxis.tickFormatter && (t = t.replace("%y", e.series.yaxis.tickFormatter(n, e.series.yaxis).replace(/\$/g, "$$"))), t
    }, i.prototype.isTimeMode = function(t, e) {
        return void 0 !== e.series[t].options.mode && "time" === e.series[t].options.mode
    }, i.prototype.isXDateFormat = function(t) {
        return void 0 !== this.tooltipOptions.xDateFormat && null !== this.tooltipOptions.xDateFormat
    }, i.prototype.isYDateFormat = function(t) {
        return void 0 !== this.tooltipOptions.yDateFormat && null !== this.tooltipOptions.yDateFormat
    }, i.prototype.isCategoriesMode = function(t, e) {
        return void 0 !== e.series[t].options.mode && "categories" === e.series[t].options.mode
    }, i.prototype.timestampToDate = function(e, i, n) {
        var s = t.plot.dateGenerator(e, n);
        return t.plot.formatDate(s, i, this.tooltipOptions.monthNames, this.tooltipOptions.dayNames)
    }, i.prototype.adjustValPrecision = function(t, e, i) {
        var n;
        return null !== e.match(t) && "" !== RegExp.$1 && (n = RegExp.$1, i = i.toFixed(n), e = e.replace(t, i)), e
    }, i.prototype.hasAxisLabel = function(e, i) {
        return -1 !== t.inArray("axisLabels", this.plotPlugins) && void 0 !== i.series[e].options.axisLabel && i.series[e].options.axisLabel.length > 0
    }, i.prototype.hasRotatedXAxisTicks = function(e) {
        return -1 !== t.inArray("tickRotor", this.plotPlugins) && void 0 !== e.series.xaxis.rotatedTicks
    };
    t.plot.plugins.push({
        init: function(t) {
            new i(t)
        },
        options: e,
        name: "tooltip",
        version: "0.8.5"
    })
}(jQuery);
var decodeHtmlEntity = function(t) {
    return t.replace(/&#(\d+);/g, function(t, e) {
        return String.fromCharCode(e)
    })
},
encodeHtmlEntity = function(t) {
    for (var e = [], i = t.length - 1; i >= 0; i--) e.unshift(["&#", t[i].charCodeAt(), ";"].join(""));
    return e.join("")
};

function handlerFail(t, e, i) {
return dd(t, e, i), 401 == t.status ? window.location.reload() : 503 == t.status ? window.location.reload() : void 0
}

function handlerFailTarget(t, e, i, n) {
handlerFail(t, e, i);
var s = t.responseText,
    o = $(s);
o.find(".modal-body").length && (s = o.find(".modal-body").html()), n.html(s)
}

function handlerFailModal(t, e, i) {
handlerFail(t, e, i), modal = $modal.initModal("error-modal"), modal.find(".contents").html(t.responseText), modal.modal("show"), initComponents(modal)
}

function handlerFailNotice(t, e, i) {
handlerFail(t, e, i), t.responseJSON.errors, $.each(t.responseJSON.errors, function(t, e) {
    app.notice.error(e)
})
}

function fetchFromObject(t, e) {
if (void 0 === t) return !1;
var i = e.indexOf(".");
return i > -1 ? fetchFromObject(t[e.substring(0, i)], e.substr(i + 1)) : t[e]
}

function dialogWindow(t, e, i) {
t.preventDefault(), i = i || "dialog-window-" + Date.now();
var n = $(t.target).attr("href");
$("#" + i).length || ($("body").append('<div id="' + i + '"><iframe src="' + n + '" style="border: 0; width: 100%; height: 100%;"></iframe></div>'), $("#" + i).dialog({
    autoOpen: !1,
    height: 364,
    width: 500,
    resizable: !0,
    draggable: !0,
    title: e,
    close: function(t, e) {
        $(this).remove()
    },
    open: function() {
        $('div[aria-describedby="' + i + '"]').find(".ui-dialog-titlebar-close").html("<span>×</span>")
    }
}).dialog("open"), dialogMoveToTop($container.parent(".ui-dialog.ui-widget.ui-widget-content"), !0))
}

function dialogMoveToTop(t, e) {
var i = parseInt(t.css("z-index")),
    n = parseInt(t.css("z-index"));
$.each($(".ui-dialog.ui-widget.ui-widget-content"), function(t, e) {
    n < parseInt($(this).css("z-index")) && (n = parseInt($(this).css("z-index")))
}), (i < n && void 0 === e || void 0 !== e) && t.css("z-index", n + 2)
}

function convertHex(t, e) {
return t = t.replace("#", ""), r = parseInt(t.substring(0, 2), 16), g = parseInt(t.substring(2, 4), 16), b = parseInt(t.substring(4, 6), 16), result = "rgba(" + r + "," + g + "," + b + "," + e / 100 + ")", result
}

function degToLatLng(t) {
var e = t.split(":"),
    i = parseFloat(e[0]),
    n = parseInt(e[1]),
    s = parseFloat(e[2]),
    o = Math.abs(i) + n / 60 + s / 3600;
return i < 0 && (o = 0 - o), o.toFixed(6)
}

function placesRouteLatLngsToPointsString(t) {
if (t.length > 0) {
    for (var e = [], i = 0; i < t.length; i++) {
        var n = t[i],
            s = n.lat,
            o = n.lng;
        e.push({
            lat: parseFloat(s).toFixed(6),
            lng: parseFloat(o).toFixed(6)
        })
    }
    return JSON.stringify(e)
}
return ""
}

function isNumeric(t) {
return !isNaN(parseFloat(t)) && isFinite(t)
}
sidebarSearch = function(t, e, i, n) {
dd("sidebarSearch");
var s, o = $(n);
dd("sidebarSearch.hide.complete"), "" !== t ? ($(".group .group-heading", o).hide(), $("li[" + i + "]", o).addClass("hidden"), $("tr[" + i + "]", o).addClass("hidden"), s = e.filter(function(e) {
    return e.searchValue.indexOf(t) >= 0
}), $.each(s, function(t, e) {
    $("li[" + i + '="' + e.id() + '"]', o).removeClass("hidden"), $("tr[" + i + '="' + e.id() + '"]', o).removeClass("hidden")
})) : ($("li[" + i + "]", o).removeClass("hidden"), $("tr[" + i + "]", o).removeClass("hidden")), $(".group", o).each(function() {
    var t = $(this);
    $(".group-list li[" + i + "]:not(.hidden)", t).length && ($(".group-heading", t).show(), $(".collapse", t).addClass("in"), $(".group-title", t).removeClass("collapsed"))
}), "" === t && ($('.group-title[aria-expanded="false"]', o).addClass("collapsed"), $('.collapse[aria-expanded="false"]', o).removeClass("in"))
};
var DateDiff = {
inDays: function(t, e) {
    var i = e.getTime(),
        n = t.getTime();
    return parseInt((i - n) / 864e5)
},
inWeeks: function(t, e) {
    var i = e.getTime(),
        n = t.getTime();
    return parseInt((i - n) / 6048e5)
},
inMonths: function(t, e) {
    var i = t.getFullYear(),
        n = e.getFullYear(),
        s = t.getMonth();
    return e.getMonth() + 12 * n - (s + 12 * i)
},
inYears: function(t, e) {
    return e.getFullYear() - t.getFullYear()
}
};

function momentCalendar(t, e) {
var i = $(e).find('input[name="date_from"]'),
    n = $(e).find('input[name="date_to"]'),
    s = void 0 !== app.settings.weekStart ? app.settings.weekStart : 1,
    o = moment(),
    a = moment();
switch (t) {
    case "1":
        a = a.add(1, "days");
        break;
    case "2":
        o = o.subtract(1, "days");
        break;
    case "3":
        o = o.subtract(2, "days"), a = a.subtract(1, "days");
        break;
    case "4":
        o = o.subtract(3, "days"), a = a.subtract(2, "days");
        break;
    case "5":
        var r = s > 1 ? 1 : 0;
        o = o.startOf("isoWeek").isoWeekday(s).subtract(r, "week"), a = a.startOf("isoWeek").isoWeekday(s).subtract(r, "week").add(1, "week");
        break;
    case "6":
        r = s > 1 ? 2 : 1;
        o = o.startOf("isoWeek").isoWeekday(s).subtract(r, "week"), a = a.startOf("isoWeek").isoWeekday(s).subtract(r, "week").add(1, "week");
        break;
    case "7":
        o = o.startOf("month"), a = a.startOf("month").add(1, "month");
        break;
    case "8":
        o = o.startOf("month").subtract(1, "month"), a = a.startOf("month");
        break;
    case "9":
        o = o.startOf("month").subtract(3, "month"), a = a.startOf("month")
}
i.val(o.minute(0).hour(0).format("YYYY-MM-DD")), n.val(a.minute(0).hour(0).format("YYYY-MM-DD"))
}

function secondsToTime(t) {
var e = Math.floor(t / 3600),
    i = t % 3600,
    n = Math.floor(i / 60),
    s = i % 60;
return time_lrt(Math.ceil(s), n, e)
}

function time_lrt(t, e, i) {
return i < 0 || e < 0 || t < 0 ? "0" + window.lang.short_s : (i ? i + window.lang.short_h + " " : "") + (e ? e + window.lang.short_m + " " : "") + t + window.lang.short_s
}

function time_rtl(t, e, i) {
return i < 0 || e < 0 || t < 0 ? window.lang.short_s + "0" : window.lang.short_s + t + (e ? " " + window.lang.short_m + e : "") + (i ? " " + window.lang.short_h + i : "")
}

function checkPerm(t) {
if (t.hasClass("perm_edit") || t.hasClass("perm_remove")) {
    var e = t.closest("tr"),
        i = e.find(".perm_view"),
        n = e.find(".perm_edit").prop("checked"),
        s = e.find(".perm_remove").prop("checked");
    n || s ? (i.prop("checked") || i.trigger("click"), i.prop("disabled", !0).closest("div").addClass("disabled")) : i.prop("disabled", !1).closest("div").removeClass("disabled")
}
}

function checkPerms() {
$.each($(".perm_edit, .perm_remove"), function(t, e) {
    checkPerm($(this))
})
}

function readImage(t, e) {
if (t.files && t.files[0]) {
    var i = new FileReader;
    i.onload = function(t) {
        $(e).attr("src", t.target.result)
    }, i.readAsDataURL(t.files[0])
}
}

function formBuilder(t, e, i) {
(t = $(t)).html(""), i && $.each(i, function(t, i) {
    $.each(e, function(n, s) {
        if (s.name !== t) return !0;
        e[n].default = i
    })
}), $.each(e, function(i, n) {
    var s = $('<div class="form-group"></div>'),
        o = n.default ? n.default : "";
    switch (s.append('<label for="' + n.name + '">' + n.title + ":</label>"), n.type) {
        case "integer":
        case "string":
            s.append('<input type="text" class="form-control" name="' + n.name + '" value="' + o + '" />');
            break;
        case "text":
            s.append('<textarea class="form-control" name="' + n.name + '">' + o + "</textarea>");
            break;
    }
    n.description && s.append("<small>" + n.description + "</small>");
    var r = $('<div class="col-sm-12"></div>');
    e.length > 1 && "text" != n.type && (r = $('<div class="col-sm-6"></div>')), r.append(s), t.append(r)
})
}

function updateUrlParameter(t, e, i) {
var n = t.indexOf("#"),
    s = -1 === n ? "" : t.substr(n);
t = -1 === n ? t : t.substr(0, n);
var o = new RegExp("([?&])" + e + "=.*?(&|$)", "i"),
    a = -1 !== t.indexOf("?") ? "&" : "?";
return i ? t = t.match(o) ? t.replace(o, "$1" + e + "=" + i + "$2") : t + a + e + "=" + i : ("?" === (t = t.replace(new RegExp("([?&]?)" + e + "=[^&]*", "i"), "")).slice(-1) && (t = t.slice(0, -1)), -1 === t.indexOf("?") && (t = t.replace(/&/, "?"))), t + s
}
$.fn.outerHTML = function() {
    return this.length ? this[0].outerHTML || function(t) {
        var e = document.createElement("div");
        e.appendChild(t.cloneNode(!0));
        var i = e.innerHTML;
        return e = null, i
    }(this[0]) : this
},
function(t) {
    "use strict";
    t.databox = function(e, i) {
        var n = this,
            s = t(e),
            o = t.extend({
                onBeforeLoad: function() {},
                onAfterLoad: function() {},
                onComplete: function() {},
                onError: function() {}
            }, i);
        n.init = function() {
            dd("databox.init"), n.url = s.attr("data-url"), n.box = t(s.attr("data-target")), a()
        };
        var a = function() {
            s.on("click", function(t) {
                dd("databox.click"), n.load()
            })
        };
        n.beforeLoad = function() {
            o.onBeforeLoad(n, n.box)
        }, n.afterLoad = function() {
            o.onAfterLoad(n, n.box)
        }, n.complete = function() {
            o.onComplete(n, n.box)
        }, n.setContent = function(t) {
            n.box.html(t)
        }, n.load = function(e) {
            void 0 === e && (e = n.url), dd("databox.load: " + e), t.ajax({
                url: e,
                success: function(t) {
                    n.setContent(t), n.afterLoad()
                },
                beforeSend: function() {
                    n.beforeLoad()
                },
                complete: function() {
                    n.complete()
                },
                error: function(t, e, i) {
                    n.onError(t, e, i)
                }
            })
        }, n.reload = function() {
            n.load(n.url)
        }, n.init()
    }, t.fn.databox = function(e) {
        return this.each(function() {
            if (void 0 === t(this).data("databox")) {
                var i = new t.databox(this, e);
                t(this).data("databox", i)
            }
        })
    }
}(jQuery);
var loader = {
template: '<div class="loading"><div class="backdrop"></div><div class="outter"><div class="middle"><div class="inner"><i class="loader"></i></div></div></div></div>',
add: function(t) {
    dd("loader.add", t = $(t)), $(".loading", t).length || (t.css("position", "relative"), t.append(loader.template))
},
remove: function(t) {
    dd("loader.remove", t = $(t)), $(".loading", t).remove()
}
};
$(document).ready(function() {
$(document).on("hidden", ".modal", function() {}), $(document).on("click", "[data-modal]", function() {
    var t = $(this).data(),
        e = void 0 === t.method ? "GET" : t.method,
        i = $modal.initModal(t.modal);
    $(this).tooltip("hide"), i.on("hidden", function() {
        i.remove()
    }), $modal.getModalContent(t, e, i)
}), $(document).on("click", '[data-submit="modal"],.modal .update:visible, .modal .update_hidden', function() {
    var t = $(this).closest(".modal"),
        e = t.find("form"),
        i = e.attr("action"),
        n = e.find('input[name="_method"]').val(),
        s = e.serializeArray();
    n = void 0 !== n ? n : "POST", $modal.postData(i, n, t, s)
}), $(document).on("click", ".modal .update_with_files:visible", function() {
    var t = $(this).closest(".modal"),
        e = t.find("form"),
        i = e.attr("action"),
        n = e.find('input[name="_method"]').val(),
        s = new FormData(e[0]);
    n = void 0 !== n ? n : "POST", $modal.postData(i, n, t, s, !0)
})
});
var $modal = {
initModal: function(t) {
    var e = $("#" + t);
    return e.length || ($("body").append('<div class="modal fade" id="' + t + '"><div class="contents"></div></div>'), e = $("#" + t)), e
},
getModalContent: function(t, e, i) {
    $.each(t, function(e, i) {
        i instanceof Array || "object" == typeof i && delete t[e]
    }), $.ajax({
        type: e,
        dataType: "html",
        url: t.url,
        data: t,
        beforeSend: function() {
            loader.add($("body"))
        },
        success: function(t) {
            i.find(".contents").html(t), i.modal("show"), initComponents(i), $modal.initEvent(i, "content-success")
        },
        complete: function() {
            loader.remove($("body"))
        },
        error: function(t, e, n) {
            $modal.initEvent(i, "content-error"), handlerFailModal(t, e, n)
        }
    })
},
postData: function(t, e, i, n, s) {
    "PUT" != e && "DELETE" != e || (e = "POST");
    var o = i.find(".modal-content").length ? i.find(".modal-content") : i,
        a = {
            type: e,
            dataType: "json",
            url: t + "?_=" + $.now(),
            data: n,
            beforeSend: function() {
                i.find(".help-block.error").remove(), i.find(".has-error").removeClass("has-error"), loader.add(o)
            },
            success: function(t) {
                0 != t.status && (1 == t.status && i.modal("hide"), $modal.initEvent(i, "post-success"), $modal.initCallback(t, i.attr("id"))), t.trigger && $(document).trigger(t.trigger, t)
            },
            complete: function(t, e) {
                loader.remove(o), t.responseJSON.errors, $modal.initEvent(i, "post-error"), $modal.parseErrors(t.responseJSON.errors, i), $modal.initErrorCallback(t.responseJSON, i.attr("id")), void 0 !== t.responseJSON.warnings && ($modal.initEvent(i, "post-warning"), $modal.parseWarnings(t.responseJSON.warnings, i))
            },
            error: function(t, e, n) {
                $modal.initEvent(i, "post-error"), handlerFail(t, e, n)
            }
        };
    void 0 !== s && $.extend(a, {
        processData: !1,
        contentType: !1
    }), $.ajax(a)
},
parseErrors: function(t, e) {
    $modal.defaultParseErrors(t, e)
},
parseWarnings: function(t, e) {
    var i = e.find(".alert-warning");
    i.length < 1 ? (e.find(".modal-body").append('<div class="alert alert-warning main-alert" role="alert" style="display: none;">\n   <div id="warnings_accordion" role="tablist" aria-multiselectable="true" hidden>\n      <a class="icon ico-arrow-down pull-right" role="button" data-toggle-map="collapse" data-parent="#warnings_accordion" href="#collapse_warnings" aria-controls="collapse_warnings"></a>\n      <div id="collapse_warnings" class="collapse out" role="tabpanel" hidden></div>\n   </div>\n</div>'), i = e.find(".alert-warning")) : (i.children().not("#warnings_accordion").remove(), i.find("#collapse_warnings").empty()), $.each(t, function(t, n) {
        3 == t && (i = e.find("#collapse_warnings"), e.find("#warnings_accordion").show()), i.append($("<span class='warning'>" + n + "<br></span>"))
    })
},
defaultParseErrors: function(t, e) {
    if ($.each(t, function(t, i) {
            var n = t,
                s = t.split(".");
            s.length > 1 && (n = s.shift() + "[" + s.join("][") + "]");
            var o = '<span class="help-block error input_error_' + n + '">' + i + "</span>",
                a = e.find('input[name="' + n + '"]:not([type="radio"]), select[name="' + n + '"], select[name="' + n + '[]"], textarea[name="' + n + '"], input[name="' + n + '_fake"]:not([type="radio"]), select[name="' + n + '_fake"], textarea[name="' + n + '_fake"]');
            if (a.length > 0) {
                if (a.is(":visible") && "hidden" != a.attr("type")) a.after(o), a.closest(".form-group").addClass("has-error");
                else {
                    var r = a.closest(".form-group");
                    r.length > 0 ? r.append(o).addClass("has-error") : a.after(o)
                }
                var l = a.closest(".tab-pane").attr("id");
                void 0 !== l && e.find('a[href="#' + l + '"]').addClass("has-error")
            } else $(".modal-body", e).prepend(o)
        }), e.find(".help-block.error").length > 0) {
        var i = e.find(".help-block.error").first().position().top;
        0 == i && (i = e.find(".help-block.error").first().offsetParent().position().top)
    }
},
initCallback: function(t, e) {
    var i = e.replace("-", "_") + "_modal_callback",
        n = window[i];
    "function" == typeof n && n(t)
},
initErrorCallback: function(t, e) {
    var i = e.replace("-", "_") + "_modal_error_callback",
        n = window[i];
    "function" == typeof n && n(t)
},
initEvent: function(t, e) {
    $(document).trigger("modal-" + t.attr("id").replace("_", "-") + "-" + e)
}
};
$.ajaxSetup({
cache: !1
});
var tables = {
loader: "",
config: {},
items_arr: {},
getFilters: function(t) {
    var e = $("#" + t),
        i = $("[data-filter]", e),
        n = {};
    return i.length && i.each(function(t) {
        switch ($(this).attr("type")) {
            case "checkbox":
            case "radio":
                if (!$(this).is(":checked")) return !0
        }
        n[$(this).attr("name")] = $(this).val()
    }), n
},
get: function(t, e) {
    var i = tables.config[t];
    void 0 === i && alert('"' + t + '" configs is not defined!'), void 0 === e && (e = i.url);
    var n, s = $("#" + t),
        o = $("[data-table]", s);
    n = tables.getFilters(t), $.ajax({
        type: "GET",
        dataType: "html",
        url: e,
        cache: !1,
        data: n,
        beforeSend: function() {
            loader.add(s)
        },
        success: function(e) {
            o.html(e), tables.check_checkboxes(t), initComponents(o)
        },
        complete: function() {
            loader.remove(s)
        },
        error: function(t, e, i) {
            dd("table.get.fail", t), handlerFailTarget(t, e, i, o)
        }
    })
},
set_config: function(t, e) {
    if (dd("tables.set_config"), void 0 === tables.config[t]) tables.config[t] = e;
    else
        for (var i in e) e.hasOwnProperty(i) && (tables.config[t][i] = e[i]);
    tables.events(t)
},
check_checkboxes: function(t) {
    void 0 === tables.items_arr[t] && (tables.items_arr[t] = []), $("#" + t + " input:checkbox").not(":disabled").each(function() {
        var e = $(this).val();
        e && "on" != e && (tables.items_arr[t].indexOf(e) > -1 ? $(this).is(":checked") || $(this).prop("checked", !0) : $(this).is(":checked") && $(this).prop("checked", !1))
    })
},
events: function(t) {
    dd("tables.events");
    var e = $("#" + t);
    $("[data-filter]", e);
    e.off("keyup", 'input[type="text"][data-filter]:not(.datetimepicker)'), e.on("keyup", 'input[type="text"][data-filter]:not(.datetimepicker)', $.debounce(500, function() {
        tables.get(t)
    })), e.off("change", '[data-filter]:not(input[type="text"])'), e.on("change", '[data-filter]:not(input[type="text"])', function() {
        tables.get(t)
    }), e.off("changeDate", ".datetimepicker[data-filter]"), e.on("changeDate", ".datetimepicker[data-filter]", function() {
        tables.get(t)
    }), e.off("click", ".pagination a"), e.on("click", ".pagination a", function(i) {
        i.preventDefault(), "#" == $(this).attr("href") || $(this).hasClass("disabled") || $(this).hasClass("active") || (e.animate({
            scrollTop: 0
        }, "fast"), tables.get(t, $(this).attr("href")))
    }), e.off("click", "table th:not(.sorting_disabled)"), e.on("click", "table th:not(.sorting_disabled)", function() {
        var t = "desc";
        $(this).closest("table");
        $(this).hasClass("sorting_asc") || $(this).hasClass("sorting_desc") ? $(this).hasClass("sorting_desc") ? ($(this).removeClass("sorting_desc").addClass("sorting_asc"), t = "asc") : ($(this).removeClass("sorting_asc").addClass("sorting_desc"), t = "desc") : ($(this).removeClass("sorting_desc").addClass("sorting_asc"), t = "asc"), e.find('input[name="sorting[sort_by]"]').val($(this).attr("data-id")), e.find('input[name="sorting[sort]"]').val(t), e.find("th:not(.sorting_disabled)").not(this).removeClass("sorting_asc").removeClass("sorting_desc").addClass("sorting"), tables.get(e.attr("id"))
    }), e.off("change", 'input[type="checkbox"]'), e.on("change", 'input[type="checkbox"]', function() {
        var t = e.attr("id"),
            i = $(this).val(),
            n = $(this).is(":checked");
        if (void 0 === tables.items_arr[t] && (tables.items_arr[t] = []), i && "on" != i)
            if (n) - 1 == tables.items_arr[t].indexOf(i) && tables.items_arr[t].push(i);
            else {
                var s = tables.items_arr[t].indexOf(i);
                s > -1 && delete tables.items_arr[t][s]
            }
    }), e.off("multichanged"), e.on("multichanged", function(t, e) {
        dd("$tableContainer.multichanged", e), $.each(e.items, function() {
            $(this).trigger("change")
        })
    }), e.off("click", "[data-multi]"), e.on("click", "[data-multi]", function() {
        var t, i, n, s = e.attr("id"),
            o = tables.config[s],
            a = $(this).attr("data-multi");
        void 0 === o && alert('"' + s + '" configs is not defined!'), void 0 === tables.config[s][a] && alert('"' + s + '" configs "' + a + '" is not defined!'), "string" == typeof tables.config[s][a] ? (t = tables.config[s][a], n = "DELETE") : (t = tables.config[s][a].url, n = tables.config[s][a].method, i = tables.config[s][a].modal);
        var r = tables.getFilters(s);
        if (r.id = tables.items_arr[s], "DELETE" === n && (r._method = "DELETE"), "GET" === n) return $modal.getModalContent({
            url: t,
            id: r.id
        }, n, $modal.initModal(i));
        $.ajax({
            type: "POST",
            dataType: "json",
            url: t,
            data: r,
            beforeSend: function() {
                e.find(".table_error").html("")
            },
            success: function(t) {
                dd(t), void 0 !== t.error && e.find(".table_error").html('<div class="alert alert-danger" style="margin-top: 20px;">' + t.error + "</div>"), tables.items_arr[s] = [], tables.get(s), t.trigger && $(document).trigger(t.trigger, t)
            },
            error: function(t, i, n) {
                handlerFailTarget(t, i, n, e.find(".table_error"))
            }
        })
    }), e.off("click", "td[data-editable-field]"), e.on("click", "td[data-editable-field]", function() {
        var t = $(this),
            i = t.html(),
            n = t.data("editable-field");
        if (!t.find(".input-group").length) {
            var s = $('<div class="input-group input-group-sm">      <input type="text" class="form-control" value="' + i + '">      <i class="input-group-btn">        <button class="btn btn-primary" type="button"><i class="icon check"></i> </button>      </span>    </div>'),
                o = function() {
                    var i = {};
                    i[n] = s.find("input").val(), $.ajax({
                        type: "POST",
                        url: t.data("submit-url"),
                        data: i,
                        dataType: "json",
                        beforeSend: function() {
                            e.find(".table_error").html("")
                        },
                        success: function(e) {
                            t.html(i[n]), s.find("button").off("click")
                        },
                        error: function(t, i, n) {
                            handlerFailTarget(t, i, n, e.find(".table_error"))
                        }
                    })
                };
            t.html(s), s.find("input").focus(), $(document).mouseup(function(e) {
                t.find(s).length && (t.is(e.target) || 0 !== t.has(e.target).length || t.html(i))
            }), s.find("button").on("click", function() {
                o()
            }), s.find("input").keydown(function(t) {
                13 == t.keyCode && o()
            })
        }
    })
}
};
$(document).ready(function() {
    $(document).on("click", ".js-confirm-link", function(e) {
        var url = $(this).attr("href"),
            text = $(this).data("confirm");
        $("#js-confirm-link .modal-body").html(text);
        var method = $(this).data("method"),
            data = $(this).data(),
            table = $(this).closest("[data-table]").closest("[id]"),
            callback = $(this).data("callback");
        e.preventDefault(), $("#js-confirm-link").modal({
            backdrop: "static",
            keyboard: !1
        }).one("click", ".js-confirm-link-yes", function(e) {
            "DELETE" == method || "POST" == method ? ("DELETE" == method && (data._method = "DELETE"), $.ajax({
                type: "POST",
                dataType: "json",
                url: url,
                cache: !1,
                data: data,
                success: function(res) {
                    $("#js-confirm-link").modal("hide"), table.length && tables.get(table.attr("id")), void 0 !== callback && eval(callback)
                }
            })) : window.location = url
        })
    })
}),
function(t) {
    "use strict";
    t.multiCheckbox = function(e, i) {
        var n, s, o = {
                item: t(e).find('[data-toggle-map="checkbox"]')
            },
            a = this;
        t(e);
        a.init = function() {
            o = t.extend({}, o, i), n = o.item, a.setItems(), r(), l()
        }, a.setItems = function() {
            s = t(e).find('input[type="checkbox"]').not(n)
        }, a.refresh = function() {
            a.setItems(), r()
        };
        var r = function() {
                n.off("change"), n.on("change", function() {
                    dd("multiCheckbox parent changed");
                    var e = n.is(":checked"),
                        i = [],
                        o = [];
                    s.each(function() {
                        t(this).is(":checked") != e && (i.push(t(this)), o.push(t(this).val()), t(this).prop("checked", e))
                    }), t(this).trigger("multichanged", {
                        items: i,
                        values: o
                    }), l()
                }), s.on("multichange"), s.on("multichange", function() {
                    a.disableChecking = !0, t(this).trigger("change"), a.disableChecking = !1
                }), s.off("change"), s.on("change", function(t) {
                    dd("multiCheckbox child changed", t), l()
                })
            },
            l = function() {
                a.disableChecking || (dd("multiCheckbox._checkParent"), 0 != s.length && n.prop("checked", s.length == s.filter(":checked").length))
            };
        a.init()
    }, t.fn.multiCheckbox = function(e) {
        return this.each(function() {
            if (void 0 === t(this).data("multiCheckbox")) {
                var i = new t.multiCheckbox(this, e);
                t(this).data("multiCheckbox", i)
            } else t(this).data("multiCheckbox").refresh()
        })
    }
}(jQuery),
function(t) {
    function e(e, s, o, a) {
        t.each(t(s), function(s, r) {
            e.includes("hide") && function(e, i) {
                i ? t(e).show() : t(e).hide()
            }(r, a), e.includes("disable") && (n(r) ? i(r, o, a) : t.each(t(r).find("input, select, textarea"), function(t, e) {
                i(e, o, a)
            }))
        })
    }

    function i(e, i, n) {
        t(i).uniqueId();
        var o, a, r = "disabler-disabled-" + i.attr("id"),
            l = s(t(e));
        (function(e, i) {
            var n = function(t) {
                return t.replace(/-([a-z])/gi, function(t, e) {
                    return e.toUpperCase()
                })
            }(e);
            return -1 != t.inArray(n, i)
        })(r, l) || t(e).data(r, !!t(e).prop("disabled")), t(e).prop("disabled") || n ? t(e).prop("disabled") && n && (t(e).data(r, !1), l = s(t(e)), o = l, a = !0, t.each(o, function(t, e) {
            if (1 == e) return a = !1, !1
        }), a && t(e).prop("disabled", !1)) : t(e).prop("disabled", !0).data(r, !0)
    }

    function n(e, i) {
        return i = i || !1, t(e).is("select") || t(e).is("textarea") || t(e).is("input" + (i ? ":not([type=button], [type=submit])" : ""))
    }

    function s(e) {
        var i = {};
        return t.each(t(e).data(), function(t, e) {
            t.includes("disablerDisabled") && (i[t] = e)
        }), i
    }
    t.fn.disabler = function() {
        var i = [];
        return this.length > 0 && t.each(t(this), function(e, n) {
            var s = t(n).is("[data-disabler]"),
                o = (s ? t(n).data("disabler") : t(n).data("disablable")).split(";");
            if (o.length > 0) {
                var a = {
                        selector: o[0],
                        action: o[1]
                    },
                    r = function(e, i, n) {
                        var s;
                        e ? s = t(i) : (s = t(n.selector), t.extend(n, {
                            selector: i
                        }));
                        return s
                    }(s, n, a);
                ! function(t, e) {
                    2 in t && (t[2].includes("@attr:") ? e.triggerAttribute = t[2].replace("@attr:", "") : e.triggerValue = t[2])
                }(o, a),
                function(e, i, n) {
                    var s = !1;
                    t.each(e, function(t, e) {
                        if (e.trigger.is(i)) return s = t, !1
                    }), !1 === s ? e.push({
                        trigger: i,
                        targets: [n]
                    }) : e[s].targets.push(n)
                }(i, r, a)
            }
        }), t.each(i, function(i, s) {
            ! function(i, s) {
                var o = "click.disabler";
                n(i, !0) && (o = "change.disabler");
                t(i).off(o).on(o, {
                    trigger: i,
                    targets: s
                }, function(i) {
                    var n = i.data.trigger,
                        s = i.data.targets;
                    t.each(s, function(i, s) {
                        var o = s.action,
                            a = t(s.selector),
                            r = s.triggerAttribute,
                            l = s.triggerValue;
                        ! function(e) {
                            return t(e).is("select") || t(e).is("input:radio")
                        }(n) ? function(i, n, s) {
                            t.each(i, function(o, a) {
                                t(n).is("input:checkbox") ? e(s, i, n, t(n).prop("checked")) : e(s, a, n, t(a).data("disabler-disabled"))
                            })
                        }(a, n, o) : function(i, n, s, o, a) {
                            if (void 0 !== o || void 0 !== a) {
                                var r = function(e) {
                                    var i = [];
                                    return t(e).find(":selected").each(function(e, n) {
                                        i.push(t(n).val())
                                    }), i
                                }(s);
                                t.each(i, function(i, l) {
                                    t.each(r, function(i, r) {
                                        e(n, l, s, function(e, i, n, s) {
                                            return (void 0 === n || 0 == n.length || n.length > 0 && n.split(" ").includes(i)) && (void 0 === s || 0 == s.length || s.length > 0 && t(e).attr(s).split(" ").includes(i))
                                        }(l, r, o, a))
                                    })
                                })
                            }
                        }(a, o, n, l, r)
                    })
                }).trigger(o)
            }(s.trigger, s.targets)
        }), this
    }
}(jQuery), $(document).on("click", "#table_checklist .upload-btn", function() {
    $(this).closest(".checklist-row").find(".checklist-file-upload").trigger("click")
}), $(document).on("change", "#table_checklist .checklist-checkbox", function() {
    var t = $(this),
        e = t.closest(".checklist-row"),
        i = t.is(":checked") ? 1 : 0,
        n = e.data("id"),
        s = app.urls.checklistUpdateRow;
    $.ajax({
        type: "POST",
        url: s + n,
        data: {
            completed: i
        },
        beforeSend: function() {
            loader.add(e), $checklist.removeErrorRow(e)
        },
        success: function(i) {
            i.status || (t.prop("checked", !1), $checklist.addErrorRow(e, i.error))
        },
        error: function(t) {},
        complete: function() {
            loader.remove(e)
        }
    }), $checklist.showSignatureField(e.closest(".group"))
}), $(document).on("change", "#table_checklist .checklist-file-upload", function() {
    var t = $(this).closest(".checklist-row"),
        e = (t.data("id"), new FormData),
        i = app.urls.checklistUploadFile,
        n = $(this)[0].files[0];
    $checklist.removeErrorRow(t), n ? (e.append("file", n, n.name), $.ajax({
        type: "POST",
        dataType: "json",
        url: i + t.data("id"),
        data: e,
        beforeSend: function() {
            loader.add(t)
        },
        success: function(t) {},
        error: function(e, i, n) {
            void 0 !== e.responseJSON.errors && Object.keys(e.responseJSON.errors).length && $checklist.addErrors(t, e.responseJSON.errors)
        },
        complete: function() {
            loader.remove(t), $checklist.refreshRow(t)
        },
        async: !0,
        cache: !1,
        contentType: !1,
        processData: !1
    }), $checklist.enableFileDelete(t)) : $checklist.addErrorRow(t, "{{ trans('front.please_upload_image') }}")
}), $(document).on("click", "#table_checklist .signature-wrapper .btn.sign", function() {
    var t = $(this).closest(".group"),
        e = t.data("id"),
        i = app.urls.checklistSign + e,
        n = t.find(".signature").val(),
        s = t.find(".signature-wrapper");
    t.find("input:checkbox:not(:checked)").length ? s.addClass("hidden") : $.ajax({
        type: "POST",
        url: i,
        data: {
            signature: n
        },
        beforeSend: function() {
            loader.add(t), t.find(".signature").removeClass("alert-success alert-danger")
        },
        success: function(e) {
            e.status ? (t.find(".signature").addClass("alert-success"), t.find(".group-heading .time_completed").text(e.completed_at), t.find(".status").removeClass("incomplete").addClass("complete")) : (t.find(".signature").addClass("alert-danger"), t.find(".status").removeClass("complete").addClass("incomplete"))
        },
        error: function(t) {},
        complete: function() {
            loader.remove(t)
        }
    })
}), $(document).on("mouseover", ".thumbnail-preview", function() {
    var t = $(this);
    t.hasClass("empty") && t.find(".full-preview img").attr("src", t.data("url"))
});
var $checklist = {
enableFileDelete: function(t) {
    t.find(".icon.delete").removeClass("hidden")
},
refreshRow: function(t) {
    var e = app.urls.checklistGetRow + t.data("id");
    $.ajax({
        type: "GET",
        url: e,
        success: function(e) {
            t.html($(e).html())
        }
    })
},
addErrorRow: function(t, e) {
    t.after('<tr class="danger text-center err-message"><td colspan="3">' + e + "</td></tr>"), t.addClass("danger")
},
addErrors: function(t, e) {
    this.addErrorRow(t, Object.values(e).map(function(t) {
        return t.join("<br>")
    }).join("<br>"))
},
removeErrorRow: function(t) {
    var e = t.next(".err-message");
    e.length && e.remove(), t.removeClass("danger")
},
showSignatureFields: function() {
    $("#table_checklist").find(".group-collapse").each(function() {
        $checklist.showSignatureField($(this))
    })
},
showSignatureField: function(t) {
    var e = t.find(".signature-wrapper");
    t.find("input:checkbox:not(:checked)").length ? (e.addClass("hidden"), t.find(".status").removeClass("complete").addClass("incomplete")) : e.removeClass("hidden")
}
};