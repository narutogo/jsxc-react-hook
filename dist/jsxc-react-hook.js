import './style.css';
import De, { useEffect as dr } from "react";
var ie = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function vr() {
  if (ke)
    return L;
  ke = 1;
  var w = De, j = Symbol.for("react.element"), S = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, k = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(E, f, R) {
    var d, h = {}, _ = null, x = null;
    R !== void 0 && (_ = "" + R), f.key !== void 0 && (_ = "" + f.key), f.ref !== void 0 && (x = f.ref);
    for (d in f)
      b.call(f, d) && !A.hasOwnProperty(d) && (h[d] = f[d]);
    if (E && E.defaultProps)
      for (d in f = E.defaultProps, f)
        h[d] === void 0 && (h[d] = f[d]);
    return { $$typeof: j, type: E, key: _, ref: x, props: h, _owner: k.current };
  }
  return L.Fragment = S, L.jsx = C, L.jsxs = C, L;
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
var Ae;
function pr() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var w = De, j = Symbol.for("react.element"), S = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), E = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), V = Symbol.iterator, G = "@@iterator";
    function X(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = V && e[V] || e[G];
      return typeof r == "function" ? r : null;
    }
    var T = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        D("error", e, t);
      }
    }
    function D(e, r, t) {
      {
        var n = T.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var y = !1, M = !1, Fe = !1, Ie = !1, We = !1, se;
    se = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === A || We || e === k || e === R || e === d || Ie || e === x || y || M || Fe || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === h || e.$$typeof === C || e.$$typeof === E || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function m(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case S:
          return "Portal";
        case A:
          return "Profiler";
        case k:
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
            return ue(r) + ".Consumer";
          case C:
            var t = e;
            return ue(t._context) + ".Provider";
          case f:
            return Ye(e, e.render, "ForwardRef");
          case h:
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
    var P = Object.assign, W = 0, ce, le, fe, de, ve, pe, ge;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Le() {
      {
        if (W === 0) {
          ce = console.log, le = console.info, fe = console.warn, de = console.error, ve = console.group, pe = console.groupCollapsed, ge = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
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
            log: P({}, e, {
              value: ce
            }),
            info: P({}, e, {
              value: le
            }),
            warn: P({}, e, {
              value: fe
            }),
            error: P({}, e, {
              value: de
            }),
            group: P({}, e, {
              value: ve
            }),
            groupCollapsed: P({}, e, {
              value: pe
            }),
            groupEnd: P({}, e, {
              value: ge
            })
          });
        }
        W < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = T.ReactCurrentDispatcher, Z;
    function N(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            Z = n && n[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var Q = !1, B;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ve();
    }
    function ye(e, r) {
      if (!e || Q)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Q = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = H.current, H.current = null, Le();
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
`), u = a.length - 1, l = v.length - 1; u >= 1 && l >= 0 && a[u] !== v[l]; )
            l--;
          for (; u >= 1 && l >= 0; u--, l--)
            if (a[u] !== v[l]) {
              if (u !== 1 || l !== 1)
                do
                  if (u--, l--, l < 0 || a[u] !== v[l]) {
                    var g = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, g), g;
                  }
                while (u >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        Q = !1, H.current = s, Ue(), Error.prepareStackTrace = i;
      }
      var I = e ? e.displayName || e.name : "", O = I ? N(I) : "";
      return typeof e == "function" && B.set(e, O), O;
    }
    function Me(e, r, t) {
      return ye(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ye(e, Ne(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case R:
          return N("Suspense");
        case d:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Me(e.render);
          case h:
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
    var $ = Object.prototype.hasOwnProperty, me = {}, be = T.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
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
            a && !(a instanceof Error) && (q(i), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), q(null)), a instanceof Error && !(a.message in me) && (me[a.message] = !0, q(i), c("Failed %s type: %s", t, a.message), q(null));
          }
      }
    }
    var Je = Array.isArray;
    function ee(e) {
      return Je(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function Re(e) {
      if (Ke(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), Ee(e);
    }
    var Y = T.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, we, re;
    re = {};
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
        re[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', m(Y.current.type), e.ref), re[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          _e || (_e = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          we || (we = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
        t !== void 0 && (Re(t), a = "" + t), Xe(r) && (Re(r.key), a = "" + r.key), Ge(r) && (v = r.ref, He(r, i));
        for (s in r)
          $.call(r, s) && !ze.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (a || v) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, l), v && Qe(o, l);
        }
        return er(e, a, v, i, n, Y.current, o);
      }
    }
    var te = T.ReactCurrentOwner, je = T.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        je.setExtraStackFrame(t);
      } else
        je.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    function xe() {
      {
        if (te.current) {
          var e = m(te.current.type);
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
    var Te = {};
    function nr(e) {
      {
        var r = xe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ce(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Te[t])
          return;
        Te[t] = !0;
        var n = "";
        e && e._owner && e._owner !== te.current && (n = " It was passed a child from " + m(e._owner.type) + "."), F(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), F(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ae(n) && Ce(n, r);
          }
        else if (ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = X(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              ae(o.value) && Ce(o.value, r);
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
        r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = m(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ne) {
          ne = !0;
          var i = m(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            F(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var Oe = {};
    function Se(e, r, t, n, i, s) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = tr();
          v ? a += v : a += xe();
          var u;
          e === null ? u = "null" : ee(e) ? u = "array" : e !== void 0 && e.$$typeof === j ? (u = "<" + (m(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var l = rr(e, r, t, i, s);
        if (l == null)
          return l;
        if (o) {
          var g = r.children;
          if (g !== void 0)
            if (n)
              if (ee(g)) {
                for (var I = 0; I < g.length; I++)
                  Pe(g[I], e);
                Object.freeze && Object.freeze(g);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(g, e);
        }
        if ($.call(r, "key")) {
          var O = m(e), p = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), oe = p.length > 0 ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Oe[O + oe]) {
            var lr = p.length > 0 ? "{" + p.join(": ..., ") + ": ...}" : "{}";
            c(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, oe, O, lr, O), Oe[O + oe] = !0;
          }
        }
        return e === b ? or(l) : ar(l), l;
      }
    }
    function ir(e, r, t) {
      return Se(e, r, t, !0);
    }
    function sr(e, r, t) {
      return Se(e, r, t, !1);
    }
    var ur = sr, cr = ir;
    U.Fragment = b, U.jsx = ur, U.jsxs = cr;
  }()), U;
}
process.env.NODE_ENV === "production" ? ie.exports = vr() : ie.exports = pr();
var K = ie.exports;
let z = "";
async function hr(w) {
  if (!z)
    throw "user jid is empty, please initialize jsxc";
  await window.jsxc.getAccount(z).account.getConnection().getRosterService().addContact(new window.jsxc.JID(w), ""), window.jsxc.getAccount(z).getContact(w).openChatWindow();
}
function yr(w) {
  const j = "roster-append", S = "windowlist-append", b = "dialog-append", {
    jqueryUrl: k = "https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.js",
    marginTop: A = "40px",
    marginLeft: C = "40px",
    marginBottom: E = "40px",
    marginRight: f = "40px",
    contactId: R = null,
    showMenu: d,
    fullscreen: h,
    boshUrl: _,
    id: x,
    pw: V,
    showAudioButton: G,
    showVideoButton: X,
    showOfflineButton: T
  } = w;
  return z = x, dr(() => {
    if (window.jsxc) {
      R && window.jsxc.getAccount(x).getContact(R).openChatWindow();
      return;
    }
    h && (document.getElementsByTagName("body")[0].className = "jsxc-fullscreen");
    const c = document.createElement("script");
    c.type = "text/javascript", c.src = k, document.head.appendChild(c);
    let D = document.createElement("script");
    D.type = "text/javascript", D.src = "/jsxc.bundle.js", document.head.appendChild(D);
    const y = document.documentElement;
    y.style.setProperty("--jsxc-margin-top", A), y.style.setProperty("--jsxc-margin-left", C), y.style.setProperty("--jsxc-margin-bottom", E), y.style.setProperty("--jsxc-margin-right", f), D.onload = () => {
      localStorage.removeItem("jsxc2:accounts");
      let M = new window.JSXC({
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
        windowListAppend: "#" + S,
        lang: "zh"
      });
      window.jsxc = M, M.start(_, x, V);
    }, d === "no" && y.style.setProperty("--jsxc-show-menu", "none"), G === "no" && y.style.setProperty("--jsxc-show-audio-button", "none"), X === "no" && y.style.setProperty("--jsxc-show-video-button", "none"), T === "no" && y.style.setProperty("--jsxc-show-offline-button", "none");
  }, []), //  <Keepalive>
  /* @__PURE__ */ K.jsxs("div", { id: "jsxc-containers", style: { width: "100%", height: "100%" }, children: [
    /* @__PURE__ */ K.jsx("div", { style: { width: "100%", height: "100%" }, id: j }),
    /* @__PURE__ */ K.jsx("div", { style: { width: "100%", height: "100%" }, id: b }),
    /* @__PURE__ */ K.jsx("div", { style: { width: "100%", height: "100%" }, id: S })
  ] });
}
export {
  yr as Jsxc,
  hr as directOpenChatWindow
};
