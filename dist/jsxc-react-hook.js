import './style.css';
import Pe, { useEffect as dr } from "react";
var ne = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function vr() {
  if (Oe)
    return L;
  Oe = 1;
  var w = Pe, j = Symbol.for("react.element"), S = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, P = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(E, f, R) {
    var d, y = {}, _ = null, x = null;
    R !== void 0 && (_ = "" + R), f.key !== void 0 && (_ = "" + f.key), f.ref !== void 0 && (x = f.ref);
    for (d in f)
      b.call(f, d) && !k.hasOwnProperty(d) && (y[d] = f[d]);
    if (E && E.defaultProps)
      for (d in f = E.defaultProps, f)
        y[d] === void 0 && (y[d] = f[d]);
    return { $$typeof: j, type: E, key: _, ref: x, props: y, _owner: P.current };
  }
  return L.Fragment = S, L.jsx = T, L.jsxs = T, L;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function pr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var w = Pe, j = Symbol.for("react.element"), S = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), E = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), M = Symbol.iterator, I = "@@iterator";
    function A(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = M && e[M] || e[I];
      return typeof r == "function" ? r : null;
    }
    var g = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function l(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = g.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ae = !1, De = !1, Fe = !1, Ie = !1, We = !1, ae;
    ae = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === k || We || e === P || e === R || e === d || Ie || e === x || Ae || De || Fe || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === y || e.$$typeof === T || e.$$typeof === E || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function m(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case S:
          return "Portal";
        case k:
          return "Profiler";
        case P:
          return "StrictMode";
        case R:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            var r = e;
            return oe(r) + ".Consumer";
          case T:
            var t = e;
            return oe(t._context) + ".Provider";
          case f:
            return Ye(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : m(e.type) || "Memo";
          case _: {
            var i = e, s = i._payload, o = i._init;
            try {
              return m(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, W = 0, ie, se, ue, ce, le, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Le() {
      {
        if (W === 0) {
          ie = console.log, se = console.info, ue = console.warn, ce = console.error, le = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function Ue() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: ie
            }),
            info: C({}, e, {
              value: se
            }),
            warn: C({}, e, {
              value: ue
            }),
            error: C({}, e, {
              value: ce
            }),
            group: C({}, e, {
              value: le
            }),
            groupCollapsed: C({}, e, {
              value: fe
            }),
            groupEnd: C({}, e, {
              value: de
            })
          });
        }
        W < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = g.ReactCurrentDispatcher, G;
    function V(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            G = n && n[1] || "";
          }
        return `
` + G + e;
      }
    }
    var X = !1, N;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Me();
    }
    function pe(e, r) {
      if (!e || X)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      X = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = z.current, z.current = null, Le();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (p) {
              n = p;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (p) {
              n = p;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (p) {
            n = p;
          }
          e();
        }
      } catch (p) {
        if (p && n && typeof p.stack == "string") {
          for (var a = p.stack.split(`
`), v = n.stack.split(`
`), u = a.length - 1, c = v.length - 1; u >= 1 && c >= 0 && a[u] !== v[c]; )
            c--;
          for (; u >= 1 && c >= 0; u--, c--)
            if (a[u] !== v[c]) {
              if (u !== 1 || c !== 1)
                do
                  if (u--, c--, c < 0 || a[u] !== v[c]) {
                    var h = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, h), h;
                  }
                while (u >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        X = !1, z.current = s, Ue(), Error.prepareStackTrace = i;
      }
      var F = e ? e.displayName || e.name : "", O = F ? V(F) : "";
      return typeof e == "function" && N.set(e, O), O;
    }
    function Ve(e, r, t) {
      return pe(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ne(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case R:
          return V("Suspense");
        case d:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Ve(e.render);
          case y:
            return J(e.type, r, t);
          case _: {
            var n = e, i = n._payload, s = n._init;
            try {
              return J(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var $ = Object.prototype.hasOwnProperty, ge = {}, he = g.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, i) {
      {
        var s = Function.call.bind($);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (q(i), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), q(null)), a instanceof Error && !(a.message in ge) && (ge[a.message] = !0, q(i), l("Failed %s type: %s", t, a.message), q(null));
          }
      }
    }
    var qe = Array.isArray;
    function H(e) {
      return qe(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function me(e) {
      if (Ke(e))
        return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), ye(e);
    }
    var Y = g.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, Ee, Z;
    Z = {};
    function Ge(e) {
      if ($.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if ($.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = m(Y.current.type);
        Z[t] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', m(Y.current.type), e.ref), Z[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          be || (be = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: j,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, v = null;
        t !== void 0 && (me(t), a = "" + t), Xe(r) && (me(r.key), a = "" + r.key), Ge(r) && (v = r.ref, He(r, i));
        for (s in r)
          $.call(r, s) && !ze.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (a || v) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, c), v && Qe(o, c);
        }
        return er(e, a, v, i, n, Y.current, o);
      }
    }
    var Q = g.ReactCurrentOwner, Re = g.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    function _e() {
      {
        if (Q.current) {
          var e = m(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var we = {};
    function nr(e) {
      {
        var r = _e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (we[t])
          return;
        we[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Q.current && (n = " It was passed a child from " + m(e._owner.type) + "."), D(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (H(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            re(n) && je(n, r);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = A(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              re(o.value) && je(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = m(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var i = m(r);
          l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var Te = {};
    function Ce(e, r, t, n, i, s) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = tr();
          v ? a += v : a += _e();
          var u;
          e === null ? u = "null" : H(e) ? u = "array" : e !== void 0 && e.$$typeof === j ? (u = "<" + (m(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, l("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var c = rr(e, r, t, i, s);
        if (c == null)
          return c;
        if (o) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (H(h)) {
                for (var F = 0; F < h.length; F++)
                  xe(h[F], e);
                Object.freeze && Object.freeze(h);
              } else
                l("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(h, e);
        }
        if ($.call(r, "key")) {
          var O = m(e), p = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), te = p.length > 0 ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[O + te]) {
            var lr = p.length > 0 ? "{" + p.join(": ..., ") + ": ...}" : "{}";
            l(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, te, O, lr, O), Te[O + te] = !0;
          }
        }
        return e === b ? or(c) : ar(c), c;
      }
    }
    function ir(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var ur = sr, cr = ir;
    U.Fragment = b, U.jsx = ur, U.jsxs = cr;
  }()), U;
}
process.env.NODE_ENV === "production" ? ne.exports = vr() : ne.exports = pr();
var B = ne.exports;
let K = "";
async function hr(w) {
  if (!K)
    throw "user jid is empty, please initialize jsxc";
  await window.jsxc.getAccount(K).account.getConnection().getRosterService().addContact(new window.jsxc.JID(w), ""), window.jsxc.getAccount(K).getContact(w).openChatWindow();
}
function yr(w) {
  const j = "roster-append", S = "windowlist-append", b = "dialog-append", {
    jqueryUrl: P = "https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.js",
    marginTop: k = "40px",
    marginLeft: T = "40px",
    marginBottom: E = "40px",
    marginRight: f = "40px",
    contactId: R = null,
    showMenu: d,
    fullscreen: y,
    boshUrl: _,
    id: x,
    pw: M
  } = w;
  return K = x, dr(() => {
    if (window.jsxc) {
      R && window.jsxc.getAccount(x).getContact(R).openChatWindow();
      return;
    }
    y && (document.getElementsByTagName("body")[0].className = "jsxc-fullscreen");
    const I = document.createElement("script");
    I.type = "text/javascript", I.src = P, document.head.appendChild(I);
    let A = document.createElement("script");
    A.type = "text/javascript", A.src = "/jsxc.bundle.js", document.head.appendChild(A);
    const g = document.documentElement;
    g.style.setProperty("--jsxc-margin-top", k), g.style.setProperty("--jsxc-margin-left", T), g.style.setProperty("--jsxc-margin-bottom", E), g.style.setProperty("--jsxc-margin-right", f), A.onload = () => {
      localStorage.removeItem("jsxc2:accounts");
      let l = new window.JSXC({
        /*  loadConnectionOptions: function(username: any, password: any) {
              return Promise.resolve({
                  xmpp: {
              //    url: 'https://localhost:5443/bosh',
              //    domain: 'localhost',
                  }
              });
          },*/
        rosterAppend: "#" + j,
        dialogAppend: "#" + b,
        windowListAppend: "#" + S
      });
      window.jsxc = l, l.start(_, x, M);
    }, d === "yes" && (g.style.setProperty("--jsxc-show-menu", "none"), console.log("not show jsxc menu"));
  }, []), //  <Keepalive>
  /* @__PURE__ */ B.jsxs("div", { id: "jsxc-containers", style: { width: "100%", height: "100%" }, children: [
    /* @__PURE__ */ B.jsx("div", { style: { width: "100%", height: "100%" }, id: j }),
    /* @__PURE__ */ B.jsx("div", { style: { width: "100%", height: "100%" }, id: b }),
    /* @__PURE__ */ B.jsx("div", { style: { width: "100%", height: "100%" }, id: S })
  ] });
}
export {
  yr as Jsxc,
  hr as directOpenChatWindow
};
