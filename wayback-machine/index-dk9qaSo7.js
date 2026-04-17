var _____WB$wombat$assign$function_____ = function (name) {
  return (
    (self._wb_wombat &&
      self._wb_wombat.local_init &&
      self._wb_wombat.local_init(name)) ||
    self[name]
  );
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function (obj) {
    this.__WB_source = obj;
    return this;
  };
}
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opens = _____WB$wombat$assign$function_____("opens");
  var dS = Object.defineProperty;
  var ep = (e) => {
    throw TypeError(e);
  };
  var fS = (e, t, n) =>
    t in e
      ? dS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  var hS = (e, t) => () => (
    t || e((t = { exports: {} }).exports, t),
    t.exports
  );
  var J = (e, t, n) => fS(e, typeof t != "symbol" ? t + "" : t, n),
    mu = (e, t, n) => t.has(e) || ep("Cannot " + n);
  var A = (e, t, n) => (
      mu(e, t, "read from private field"),
      n ? n.call(e) : t.get(e)
    ),
    ne = (e, t, n) =>
      t.has(e)
        ? ep("Cannot add the same private member more than once")
        : t instanceof WeakSet
          ? t.add(e)
          : t.set(e, n),
    q = (e, t, n, r) => (
      mu(e, t, "write to private field"),
      r ? r.call(e, n) : t.set(e, n),
      n
    ),
    Le = (e, t, n) => (mu(e, t, "access private method"), n);
  var Ko = (e, t, n, r) => ({
    set _(s) {
      q(e, t, s, n);
    },
    get _() {
      return A(e, t, r);
    },
  });
  var XD = hS((oL, ef) => {
    function pS(e, t) {
      for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
          for (const s in r)
            if (s !== "default" && !(s in e)) {
              const i = Object.getOwnPropertyDescriptor(r, s);
              i &&
                Object.defineProperty(
                  e,
                  s,
                  i.get ? i : { enumerable: !0, get: () => r[s] },
                );
            }
        }
      }
      return Object.freeze(
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
      );
    }
    (function () {
      const t = document.createElement("link").relList;
      if (t && t.supports && t.supports("modulepreload")) return;
      for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        r(s);
      new MutationObserver((s) => {
        for (const i of s)
          if (i.type === "childList")
            for (const o of i.addedNodes)
              o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
      }).observe(document, { childList: !0, subtree: !0 });
      function n(s) {
        const i = {};
        return (
          s.integrity && (i.integrity = s.integrity),
          s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
          s.crossOrigin === "use-credentials"
            ? (i.credentials = "include")
            : s.crossOrigin === "anonymous"
              ? (i.credentials = "omit")
              : (i.credentials = "same-origin"),
          i
        );
      }
      function r(s) {
        if (s.ep) return;
        s.ep = !0;
        const i = n(s);
        fetch(s.href, i);
      }
    })();
    function Ay(e) {
      return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, "default")
        ? e.default
        : e;
    }
    var Oy = { exports: {} },
      _l = {},
      My = { exports: {} },
      ee = {};
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var _o = Symbol.for("react.element"),
      mS = Symbol.for("react.portal"),
      gS = Symbol.for("react.fragment"),
      yS = Symbol.for("react.strict_mode"),
      vS = Symbol.for("react.profiler"),
      xS = Symbol.for("react.provider"),
      wS = Symbol.for("react.context"),
      bS = Symbol.for("react.forward_ref"),
      SS = Symbol.for("react.suspense"),
      TS = Symbol.for("react.memo"),
      ES = Symbol.for("react.lazy"),
      tp = Symbol.iterator;
    function CS(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (tp && e[tp]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var jy = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      Dy = Object.assign,
      Ly = {};
    function ri(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = Ly),
        (this.updater = n || jy));
    }
    ri.prototype.isReactComponent = {};
    ri.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    };
    ri.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function Iy() {}
    Iy.prototype = ri.prototype;
    function tf(e, t, n) {
      ((this.props = e),
        (this.context = t),
        (this.refs = Ly),
        (this.updater = n || jy));
    }
    var nf = (tf.prototype = new Iy());
    nf.constructor = tf;
    Dy(nf, ri.prototype);
    nf.isPureReactComponent = !0;
    var np = Array.isArray,
      Fy = Object.prototype.hasOwnProperty,
      rf = { current: null },
      Vy = { key: !0, ref: !0, __self: !0, __source: !0 };
    function $y(e, t, n) {
      var r,
        s = {},
        i = null,
        o = null;
      if (t != null)
        for (r in (t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t))
          Fy.call(t, r) && !Vy.hasOwnProperty(r) && (s[r] = t[r]);
      var a = arguments.length - 2;
      if (a === 1) s.children = n;
      else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        s.children = l;
      }
      if (e && e.defaultProps)
        for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
      return {
        $$typeof: _o,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: rf.current,
      };
    }
    function PS(e, t) {
      return {
        $$typeof: _o,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
      };
    }
    function sf(e) {
      return typeof e == "object" && e !== null && e.$$typeof === _o;
    }
    function kS(e) {
      var t = { "=": "=0", ":": "=2" };
      return (
        "$" +
        e.replace(/[=:]/g, function (n) {
          return t[n];
        })
      );
    }
    var rp = /\/+/g;
    function gu(e, t) {
      return typeof e == "object" && e !== null && e.key != null
        ? kS("" + e.key)
        : t.toString(36);
    }
    function Ca(e, t, n, r, s) {
      var i = typeof e;
      (i === "undefined" || i === "boolean") && (e = null);
      var o = !1;
      if (e === null) o = !0;
      else
        switch (i) {
          case "string":
          case "number":
            o = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case _o:
              case mS:
                o = !0;
            }
        }
      if (o)
        return (
          (o = e),
          (s = s(o)),
          (e = r === "" ? "." + gu(o, 0) : r),
          np(s)
            ? ((n = ""),
              e != null && (n = e.replace(rp, "$&/") + "/"),
              Ca(s, t, n, "", function (u) {
                return u;
              }))
            : s != null &&
              (sf(s) &&
                (s = PS(
                  s,
                  n +
                    (!s.key || (o && o.key === s.key)
                      ? ""
                      : ("" + s.key).replace(rp, "$&/") + "/") +
                    e,
                )),
              t.push(s)),
          1
        );
      if (((o = 0), (r = r === "" ? "." : r + ":"), np(e)))
        for (var a = 0; a < e.length; a++) {
          i = e[a];
          var l = r + gu(i, a);
          o += Ca(i, t, n, l, s);
        }
      else if (((l = CS(e)), typeof l == "function"))
        for (e = l.call(e), a = 0; !(i = e.next()).done; )
          ((i = i.value), (l = r + gu(i, a++)), (o += Ca(i, t, n, l, s)));
      else if (i === "object")
        throw (
          (t = String(e)),
          Error(
            "Objects are not valid as a React child (found: " +
              (t === "[object Object]"
                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                : t) +
              "). If you meant to render a collection of children, use an array instead.",
          )
        );
      return o;
    }
    function Go(e, t, n) {
      if (e == null) return e;
      var r = [],
        s = 0;
      return (
        Ca(e, r, "", "", function (i) {
          return t.call(n, i, s++);
        }),
        r
      );
    }
    function RS(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (n) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = n));
            },
            function (n) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = n));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var qe = { current: null },
      Pa = { transition: null },
      _S = {
        ReactCurrentDispatcher: qe,
        ReactCurrentBatchConfig: Pa,
        ReactCurrentOwner: rf,
      };
    function zy() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    ee.Children = {
      map: Go,
      forEach: function (e, t, n) {
        Go(
          e,
          function () {
            t.apply(this, arguments);
          },
          n,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          Go(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          Go(e, function (t) {
            return t;
          }) || []
        );
      },
      only: function (e) {
        if (!sf(e))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return e;
      },
    };
    ee.Component = ri;
    ee.Fragment = gS;
    ee.Profiler = vS;
    ee.PureComponent = tf;
    ee.StrictMode = yS;
    ee.Suspense = SS;
    ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _S;
    ee.act = zy;
    ee.cloneElement = function (e, t, n) {
      if (e == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            ".",
        );
      var r = Dy({}, e.props),
        s = e.key,
        i = e.ref,
        o = e._owner;
      if (t != null) {
        if (
          (t.ref !== void 0 && ((i = t.ref), (o = rf.current)),
          t.key !== void 0 && (s = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var a = e.type.defaultProps;
        for (l in t)
          Fy.call(t, l) &&
            !Vy.hasOwnProperty(l) &&
            (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
      }
      var l = arguments.length - 2;
      if (l === 1) r.children = n;
      else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a;
      }
      return {
        $$typeof: _o,
        type: e.type,
        key: s,
        ref: i,
        props: r,
        _owner: o,
      };
    };
    ee.createContext = function (e) {
      return (
        (e = {
          $$typeof: wS,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (e.Provider = { $$typeof: xS, _context: e }),
        (e.Consumer = e)
      );
    };
    ee.createElement = $y;
    ee.createFactory = function (e) {
      var t = $y.bind(null, e);
      return ((t.type = e), t);
    };
    ee.createRef = function () {
      return { current: null };
    };
    ee.forwardRef = function (e) {
      return { $$typeof: bS, render: e };
    };
    ee.isValidElement = sf;
    ee.lazy = function (e) {
      return { $$typeof: ES, _payload: { _status: -1, _result: e }, _init: RS };
    };
    ee.memo = function (e, t) {
      return { $$typeof: TS, type: e, compare: t === void 0 ? null : t };
    };
    ee.startTransition = function (e) {
      var t = Pa.transition;
      Pa.transition = {};
      try {
        e();
      } finally {
        Pa.transition = t;
      }
    };
    ee.unstable_act = zy;
    ee.useCallback = function (e, t) {
      return qe.current.useCallback(e, t);
    };
    ee.useContext = function (e) {
      return qe.current.useContext(e);
    };
    ee.useDebugValue = function () {};
    ee.useDeferredValue = function (e) {
      return qe.current.useDeferredValue(e);
    };
    ee.useEffect = function (e, t) {
      return qe.current.useEffect(e, t);
    };
    ee.useId = function () {
      return qe.current.useId();
    };
    ee.useImperativeHandle = function (e, t, n) {
      return qe.current.useImperativeHandle(e, t, n);
    };
    ee.useInsertionEffect = function (e, t) {
      return qe.current.useInsertionEffect(e, t);
    };
    ee.useLayoutEffect = function (e, t) {
      return qe.current.useLayoutEffect(e, t);
    };
    ee.useMemo = function (e, t) {
      return qe.current.useMemo(e, t);
    };
    ee.useReducer = function (e, t, n) {
      return qe.current.useReducer(e, t, n);
    };
    ee.useRef = function (e) {
      return qe.current.useRef(e);
    };
    ee.useState = function (e) {
      return qe.current.useState(e);
    };
    ee.useSyncExternalStore = function (e, t, n) {
      return qe.current.useSyncExternalStore(e, t, n);
    };
    ee.useTransition = function () {
      return qe.current.useTransition();
    };
    ee.version = "18.3.1";
    My.exports = ee;
    var x = My.exports;
    const O = Ay(x),
      By = pS({ __proto__: null, default: O }, [x]);
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var NS = x,
      AS = Symbol.for("react.element"),
      OS = Symbol.for("react.fragment"),
      MS = Object.prototype.hasOwnProperty,
      jS =
        NS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      DS = { key: !0, ref: !0, __self: !0, __source: !0 };
    function Uy(e, t, n) {
      var r,
        s = {},
        i = null,
        o = null;
      (n !== void 0 && (i = "" + n),
        t.key !== void 0 && (i = "" + t.key),
        t.ref !== void 0 && (o = t.ref));
      for (r in t) MS.call(t, r) && !DS.hasOwnProperty(r) && (s[r] = t[r]);
      if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
      return {
        $$typeof: AS,
        type: e,
        key: i,
        ref: o,
        props: s,
        _owner: jS.current,
      };
    }
    _l.Fragment = OS;
    _l.jsx = Uy;
    _l.jsxs = Uy;
    Oy.exports = _l;
    var v = Oy.exports,
      Wy = { exports: {} },
      mt = {},
      Hy = { exports: {} },
      Ky = {};
    /**
     * @license React
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ (function (e) {
      function t(_, N) {
        var I = _.length;
        _.push(N);
        e: for (; 0 < I; ) {
          var V = (I - 1) >>> 1,
            F = _[V];
          if (0 < s(F, N)) ((_[V] = N), (_[I] = F), (I = V));
          else break e;
        }
      }
      function n(_) {
        return _.length === 0 ? null : _[0];
      }
      function r(_) {
        if (_.length === 0) return null;
        var N = _[0],
          I = _.pop();
        if (I !== N) {
          _[0] = I;
          e: for (var V = 0, F = _.length, G = F >>> 1; V < G; ) {
            var X = 2 * (V + 1) - 1,
              oe = _[X],
              De = X + 1,
              re = _[De];
            if (0 > s(oe, I))
              De < F && 0 > s(re, oe)
                ? ((_[V] = re), (_[De] = I), (V = De))
                : ((_[V] = oe), (_[X] = I), (V = X));
            else if (De < F && 0 > s(re, I))
              ((_[V] = re), (_[De] = I), (V = De));
            else break e;
          }
        }
        return N;
      }
      function s(_, N) {
        var I = _.sortIndex - N.sortIndex;
        return I !== 0 ? I : _.id - N.id;
      }
      if (
        typeof performance == "object" &&
        typeof performance.now == "function"
      ) {
        var i = performance;
        e.unstable_now = function () {
          return i.now();
        };
      } else {
        var o = Date,
          a = o.now();
        e.unstable_now = function () {
          return o.now() - a;
        };
      }
      var l = [],
        u = [],
        c = 1,
        d = null,
        f = 3,
        h = !1,
        b = !1,
        g = !1,
        w = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function y(_) {
        for (var N = n(u); N !== null; ) {
          if (N.callback === null) r(u);
          else if (N.startTime <= _)
            (r(u), (N.sortIndex = N.expirationTime), t(l, N));
          else break;
          N = n(u);
        }
      }
      function S(_) {
        if (((g = !1), y(_), !b))
          if (n(l) !== null) ((b = !0), z(T));
          else {
            var N = n(u);
            N !== null && B(S, N.startTime - _);
          }
      }
      function T(_, N) {
        ((b = !1), g && ((g = !1), m(P), (P = -1)), (h = !0));
        var I = f;
        try {
          for (
            y(N), d = n(l);
            d !== null && (!(d.expirationTime > N) || (_ && !$()));
          ) {
            var V = d.callback;
            if (typeof V == "function") {
              ((d.callback = null), (f = d.priorityLevel));
              var F = V(d.expirationTime <= N);
              ((N = e.unstable_now()),
                typeof F == "function" ? (d.callback = F) : d === n(l) && r(l),
                y(N));
            } else r(l);
            d = n(l);
          }
          if (d !== null) var G = !0;
          else {
            var X = n(u);
            (X !== null && B(S, X.startTime - N), (G = !1));
          }
          return G;
        } finally {
          ((d = null), (f = I), (h = !1));
        }
      }
      var E = !1,
        C = null,
        P = -1,
        R = 5,
        k = -1;
      function $() {
        return !(e.unstable_now() - k < R);
      }
      function L() {
        if (C !== null) {
          var _ = e.unstable_now();
          k = _;
          var N = !0;
          try {
            N = C(!0, _);
          } finally {
            N ? Y() : ((E = !1), (C = null));
          }
        } else E = !1;
      }
      var Y;
      if (typeof p == "function")
        Y = function () {
          p(L);
        };
      else if (typeof MessageChannel < "u") {
        var j = new MessageChannel(),
          D = j.port2;
        ((j.port1.onmessage = L),
          (Y = function () {
            D.postMessage(null);
          }));
      } else
        Y = function () {
          w(L, 0);
        };
      function z(_) {
        ((C = _), E || ((E = !0), Y()));
      }
      function B(_, N) {
        P = w(function () {
          _(e.unstable_now());
        }, N);
      }
      ((e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (_) {
          _.callback = null;
        }),
        (e.unstable_continueExecution = function () {
          b || h || ((b = !0), z(T));
        }),
        (e.unstable_forceFrameRate = function (_) {
          0 > _ || 125 < _
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
              )
            : (R = 0 < _ ? Math.floor(1e3 / _) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
          return f;
        }),
        (e.unstable_getFirstCallbackNode = function () {
          return n(l);
        }),
        (e.unstable_next = function (_) {
          switch (f) {
            case 1:
            case 2:
            case 3:
              var N = 3;
              break;
            default:
              N = f;
          }
          var I = f;
          f = N;
          try {
            return _();
          } finally {
            f = I;
          }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (_, N) {
          switch (_) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              _ = 3;
          }
          var I = f;
          f = _;
          try {
            return N();
          } finally {
            f = I;
          }
        }),
        (e.unstable_scheduleCallback = function (_, N, I) {
          var V = e.unstable_now();
          switch (
            (typeof I == "object" && I !== null
              ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? V + I : V))
              : (I = V),
            _)
          ) {
            case 1:
              var F = -1;
              break;
            case 2:
              F = 250;
              break;
            case 5:
              F = 1073741823;
              break;
            case 4:
              F = 1e4;
              break;
            default:
              F = 5e3;
          }
          return (
            (F = I + F),
            (_ = {
              id: c++,
              callback: N,
              priorityLevel: _,
              startTime: I,
              expirationTime: F,
              sortIndex: -1,
            }),
            I > V
              ? ((_.sortIndex = I),
                t(u, _),
                n(l) === null &&
                  _ === n(u) &&
                  (g ? (m(P), (P = -1)) : (g = !0), B(S, I - V)))
              : ((_.sortIndex = F), t(l, _), b || h || ((b = !0), z(T))),
            _
          );
        }),
        (e.unstable_shouldYield = $),
        (e.unstable_wrapCallback = function (_) {
          var N = f;
          return function () {
            var I = f;
            f = N;
            try {
              return _.apply(this, arguments);
            } finally {
              f = I;
            }
          };
        }));
    })(Ky);
    Hy.exports = Ky;
    var LS = Hy.exports;
    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var IS = x,
      pt = LS;
    function M(e) {
      for (
        var t =
            "https://web.archive.org/web/20260129190221/https://reactjs.org/docs/error-decoder.html?invariant=" +
            e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += "&args[]=" + encodeURIComponent(arguments[n]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var Gy = new Set(),
      Ji = {};
    function Zr(e, t) {
      (Ks(e, t), Ks(e + "Capture", t));
    }
    function Ks(e, t) {
      for (Ji[e] = t, e = 0; e < t.length; e++) Gy.add(t[e]);
    }
    var xn = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      gc = Object.prototype.hasOwnProperty,
      FS =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      sp = {},
      ip = {};
    function VS(e) {
      return gc.call(ip, e)
        ? !0
        : gc.call(sp, e)
          ? !1
          : FS.test(e)
            ? (ip[e] = !0)
            : ((sp[e] = !0), !1);
    }
    function $S(e, t, n, r) {
      if (n !== null && n.type === 0) return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean":
          return r
            ? !1
            : n !== null
              ? !n.acceptsBooleans
              : ((e = e.toLowerCase().slice(0, 5)),
                e !== "data-" && e !== "aria-");
        default:
          return !1;
      }
    }
    function zS(e, t, n, r) {
      if (t === null || typeof t > "u" || $S(e, t, n, r)) return !0;
      if (r) return !1;
      if (n !== null)
        switch (n.type) {
          case 3:
            return !t;
          case 4:
            return t === !1;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    }
    function Xe(e, t, n, r, s, i, o) {
      ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = s),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = o));
    }
    var je = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (e) {
        je[e] = new Xe(e, 0, !1, e, null, !1, !1);
      });
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      je[t] = new Xe(t, 1, !1, e[1], null, !1, !1);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        je[e] = new Xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    );
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      je[e] = new Xe(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        je[e] = new Xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
      });
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      je[e] = new Xe(e, 3, !0, e, null, !1, !1);
    });
    ["capture", "download"].forEach(function (e) {
      je[e] = new Xe(e, 4, !1, e, null, !1, !1);
    });
    ["cols", "rows", "size", "span"].forEach(function (e) {
      je[e] = new Xe(e, 6, !1, e, null, !1, !1);
    });
    ["rowSpan", "start"].forEach(function (e) {
      je[e] = new Xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var of = /[\-:]([a-z])/g;
    function af(e) {
      return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(of, af);
        je[t] = new Xe(t, 1, !1, e, null, !1, !1);
      });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(of, af);
        je[t] = new Xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      });
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(of, af);
      je[t] = new Xe(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1,
      );
    });
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      je[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    je.xlinkHref = new Xe(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    );
    ["src", "href", "action", "formAction"].forEach(function (e) {
      je[e] = new Xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function lf(e, t, n, r) {
      var s = je.hasOwnProperty(t) ? je[t] : null;
      (s !== null
        ? s.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (zS(t, n, s, r) && (n = null),
        r || s === null
          ? VS(t) &&
            (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
          : s.mustUseProperty
            ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
            : ((t = s.attributeName),
              (r = s.attributeNamespace),
              n === null
                ? e.removeAttribute(t)
                : ((s = s.type),
                  (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
    }
    var Pn = IS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      Yo = Symbol.for("react.element"),
      ds = Symbol.for("react.portal"),
      fs = Symbol.for("react.fragment"),
      uf = Symbol.for("react.strict_mode"),
      yc = Symbol.for("react.profiler"),
      Yy = Symbol.for("react.provider"),
      Qy = Symbol.for("react.context"),
      cf = Symbol.for("react.forward_ref"),
      vc = Symbol.for("react.suspense"),
      xc = Symbol.for("react.suspense_list"),
      df = Symbol.for("react.memo"),
      Fn = Symbol.for("react.lazy"),
      qy = Symbol.for("react.offscreen"),
      op = Symbol.iterator;
    function pi(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (op && e[op]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var xe = Object.assign,
      yu;
    function Pi(e) {
      if (yu === void 0)
        try {
          throw Error();
        } catch (n) {
          var t = n.stack.trim().match(/\n( *(at )?)/);
          yu = (t && t[1]) || "";
        }
      return (
        `
` +
        yu +
        e
      );
    }
    var vu = !1;
    function xu(e, t) {
      if (!e || vu) return "";
      vu = !0;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t)
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == "object" && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (u) {
              var r = u;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (u) {
              r = u;
            }
            e.call(t.prototype);
          }
        else {
          try {
            throw Error();
          } catch (u) {
            r = u;
          }
          e();
        }
      } catch (u) {
        if (u && r && typeof u.stack == "string") {
          for (
            var s = u.stack.split(`
`),
              i = r.stack.split(`
`),
              o = s.length - 1,
              a = i.length - 1;
            1 <= o && 0 <= a && s[o] !== i[a];
          )
            a--;
          for (; 1 <= o && 0 <= a; o--, a--)
            if (s[o] !== i[a]) {
              if (o !== 1 || a !== 1)
                do
                  if ((o--, a--, 0 > a || s[o] !== i[a])) {
                    var l =
                      `
` + s[o].replace(" at new ", " at ");
                    return (
                      e.displayName &&
                        l.includes("<anonymous>") &&
                        (l = l.replace("<anonymous>", e.displayName)),
                      l
                    );
                  }
                while (1 <= o && 0 <= a);
              break;
            }
        }
      } finally {
        ((vu = !1), (Error.prepareStackTrace = n));
      }
      return (e = e ? e.displayName || e.name : "") ? Pi(e) : "";
    }
    function BS(e) {
      switch (e.tag) {
        case 5:
          return Pi(e.type);
        case 16:
          return Pi("Lazy");
        case 13:
          return Pi("Suspense");
        case 19:
          return Pi("SuspenseList");
        case 0:
        case 2:
        case 15:
          return ((e = xu(e.type, !1)), e);
        case 11:
          return ((e = xu(e.type.render, !1)), e);
        case 1:
          return ((e = xu(e.type, !0)), e);
        default:
          return "";
      }
    }
    function wc(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case fs:
          return "Fragment";
        case ds:
          return "Portal";
        case yc:
          return "Profiler";
        case uf:
          return "StrictMode";
        case vc:
          return "Suspense";
        case xc:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Qy:
            return (e.displayName || "Context") + ".Consumer";
          case Yy:
            return (e._context.displayName || "Context") + ".Provider";
          case cf:
            var t = e.render;
            return (
              (e = e.displayName),
              e ||
                ((e = t.displayName || t.name || ""),
                (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
              e
            );
          case df:
            return (
              (t = e.displayName || null),
              t !== null ? t : wc(e.type) || "Memo"
            );
          case Fn:
            ((t = e._payload), (e = e._init));
            try {
              return wc(e(t));
            } catch {}
        }
      return null;
    }
    function US(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (t.displayName || "Context") + ".Consumer";
        case 10:
          return (t._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return (
            (e = t.render),
            (e = e.displayName || e.name || ""),
            t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
          );
        case 7:
          return "Fragment";
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return wc(t);
        case 8:
          return t === uf ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof t == "function") return t.displayName || t.name || null;
          if (typeof t == "string") return t;
      }
      return null;
    }
    function or(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function Xy(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
      );
    }
    function WS(e) {
      var t = Xy(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
      if (
        !e.hasOwnProperty(t) &&
        typeof n < "u" &&
        typeof n.get == "function" &&
        typeof n.set == "function"
      ) {
        var s = n.get,
          i = n.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return s.call(this);
            },
            set: function (o) {
              ((r = "" + o), i.call(this, o));
            },
          }),
          Object.defineProperty(e, t, { enumerable: n.enumerable }),
          {
            getValue: function () {
              return r;
            },
            setValue: function (o) {
              r = "" + o;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function Qo(e) {
      e._valueTracker || (e._valueTracker = WS(e));
    }
    function Zy(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var n = t.getValue(),
        r = "";
      return (
        e && (r = Xy(e) ? (e.checked ? "true" : "false") : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
      );
    }
    function Wa(e) {
      if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function bc(e, t) {
      var n = t.checked;
      return xe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
      });
    }
    function ap(e, t) {
      var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
      ((n = or(t.value != null ? t.value : n)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            t.type === "checkbox" || t.type === "radio"
              ? t.checked != null
              : t.value != null,
        }));
    }
    function Jy(e, t) {
      ((t = t.checked), t != null && lf(e, "checked", t, !1));
    }
    function Sc(e, t) {
      Jy(e, t);
      var n = or(t.value),
        r = t.type;
      if (n != null)
        r === "number"
          ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
          : e.value !== "" + n && (e.value = "" + n);
      else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
      }
      (t.hasOwnProperty("value")
        ? Tc(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Tc(e, t.type, or(t.defaultValue)),
        t.checked == null &&
          t.defaultChecked != null &&
          (e.defaultChecked = !!t.defaultChecked));
    }
    function lp(e, t, n) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (
          !(
            (r !== "submit" && r !== "reset") ||
            (t.value !== void 0 && t.value !== null)
          )
        )
          return;
        ((t = "" + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n));
    }
    function Tc(e, t, n) {
      (t !== "number" || Wa(e.ownerDocument) !== e) &&
        (n == null
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
    }
    var ki = Array.isArray;
    function Rs(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {};
        for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
        for (n = 0; n < e.length; n++)
          ((s = t.hasOwnProperty("$" + e[n].value)),
            e[n].selected !== s && (e[n].selected = s),
            s && r && (e[n].defaultSelected = !0));
      } else {
        for (n = "" + or(n), t = null, s = 0; s < e.length; s++) {
          if (e[s].value === n) {
            ((e[s].selected = !0), r && (e[s].defaultSelected = !0));
            return;
          }
          t !== null || e[s].disabled || (t = e[s]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Ec(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
      return xe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
      });
    }
    function up(e, t) {
      var n = t.value;
      if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
          if (t != null) throw Error(M(92));
          if (ki(n)) {
            if (1 < n.length) throw Error(M(93));
            n = n[0];
          }
          t = n;
        }
        (t == null && (t = ""), (n = t));
      }
      e._wrapperState = { initialValue: or(n) };
    }
    function ev(e, t) {
      var n = or(t.value),
        r = or(t.defaultValue);
      (n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r));
    }
    function cp(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
    }
    function tv(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function Cc(e, t) {
      return e == null || e === "http://www.w3.org/1999/xhtml"
        ? tv(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : e;
    }
    var qo,
      nv = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
          ? function (t, n, r, s) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, n, r, s);
              });
            }
          : e;
      })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
          e.innerHTML = t;
        else {
          for (
            qo = qo || document.createElement("div"),
              qo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
              t = qo.firstChild;
            e.firstChild;
          )
            e.removeChild(e.firstChild);
          for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
      });
    function eo(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var Di = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      HS = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Di).forEach(function (e) {
      HS.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Di[t] = Di[e]));
      });
    });
    function rv(e, t, n) {
      return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n ||
            typeof t != "number" ||
            t === 0 ||
            (Di.hasOwnProperty(e) && Di[e])
          ? ("" + t).trim()
          : t + "px";
    }
    function sv(e, t) {
      e = e.style;
      for (var n in t)
        if (t.hasOwnProperty(n)) {
          var r = n.indexOf("--") === 0,
            s = rv(n, t[n], r);
          (n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, s) : (e[n] = s));
        }
    }
    var KS = xe(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      },
    );
    function Pc(e, t) {
      if (t) {
        if (KS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(M(137, e));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(M(60));
          if (
            typeof t.dangerouslySetInnerHTML != "object" ||
            !("__html" in t.dangerouslySetInnerHTML)
          )
            throw Error(M(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(M(62));
      }
    }
    function kc(e, t) {
      if (e.indexOf("-") === -1) return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Rc = null;
    function ff(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var _c = null,
      _s = null,
      Ns = null;
    function dp(e) {
      if ((e = Oo(e))) {
        if (typeof _c != "function") throw Error(M(280));
        var t = e.stateNode;
        t && ((t = jl(t)), _c(e.stateNode, e.type, t));
      }
    }
    function iv(e) {
      _s ? (Ns ? Ns.push(e) : (Ns = [e])) : (_s = e);
    }
    function ov() {
      if (_s) {
        var e = _s,
          t = Ns;
        if (((Ns = _s = null), dp(e), t))
          for (e = 0; e < t.length; e++) dp(t[e]);
      }
    }
    function av(e, t) {
      return e(t);
    }
    function lv() {}
    var wu = !1;
    function uv(e, t, n) {
      if (wu) return e(t, n);
      wu = !0;
      try {
        return av(e, t, n);
      } finally {
        ((wu = !1), (_s !== null || Ns !== null) && (lv(), ov()));
      }
    }
    function to(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = jl(n);
      if (r === null) return null;
      n = r[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          ((r = !r.disabled) ||
            ((e = e.type),
            (r = !(
              e === "button" ||
              e === "input" ||
              e === "select" ||
              e === "textarea"
            ))),
            (e = !r));
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (n && typeof n != "function") throw Error(M(231, t, typeof n));
      return n;
    }
    var Nc = !1;
    if (xn)
      try {
        var mi = {};
        (Object.defineProperty(mi, "passive", {
          get: function () {
            Nc = !0;
          },
        }),
          window.addEventListener("test", mi, mi),
          window.removeEventListener("test", mi, mi));
      } catch {
        Nc = !1;
      }
    function GS(e, t, n, r, s, i, o, a, l) {
      var u = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, u);
      } catch (c) {
        this.onError(c);
      }
    }
    var Li = !1,
      Ha = null,
      Ka = !1,
      Ac = null,
      YS = {
        onError: function (e) {
          ((Li = !0), (Ha = e));
        },
      };
    function QS(e, t, n, r, s, i, o, a, l) {
      ((Li = !1), (Ha = null), GS.apply(YS, arguments));
    }
    function qS(e, t, n, r, s, i, o, a, l) {
      if ((QS.apply(this, arguments), Li)) {
        if (Li) {
          var u = Ha;
          ((Li = !1), (Ha = null));
        } else throw Error(M(198));
        Ka || ((Ka = !0), (Ac = u));
      }
    }
    function Jr(e) {
      var t = e,
        n = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? n : null;
    }
    function cv(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function fp(e) {
      if (Jr(e) !== e) throw Error(M(188));
    }
    function XS(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = Jr(e)), t === null)) throw Error(M(188));
        return t !== e ? null : e;
      }
      for (var n = e, r = t; ; ) {
        var s = n.return;
        if (s === null) break;
        var i = s.alternate;
        if (i === null) {
          if (((r = s.return), r !== null)) {
            n = r;
            continue;
          }
          break;
        }
        if (s.child === i.child) {
          for (i = s.child; i; ) {
            if (i === n) return (fp(s), e);
            if (i === r) return (fp(s), t);
            i = i.sibling;
          }
          throw Error(M(188));
        }
        if (n.return !== r.return) ((n = s), (r = i));
        else {
          for (var o = !1, a = s.child; a; ) {
            if (a === n) {
              ((o = !0), (n = s), (r = i));
              break;
            }
            if (a === r) {
              ((o = !0), (r = s), (n = i));
              break;
            }
            a = a.sibling;
          }
          if (!o) {
            for (a = i.child; a; ) {
              if (a === n) {
                ((o = !0), (n = i), (r = s));
                break;
              }
              if (a === r) {
                ((o = !0), (r = i), (n = s));
                break;
              }
              a = a.sibling;
            }
            if (!o) throw Error(M(189));
          }
        }
        if (n.alternate !== r) throw Error(M(190));
      }
      if (n.tag !== 3) throw Error(M(188));
      return n.stateNode.current === n ? e : t;
    }
    function dv(e) {
      return ((e = XS(e)), e !== null ? fv(e) : null);
    }
    function fv(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null; ) {
        var t = fv(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var hv = pt.unstable_scheduleCallback,
      hp = pt.unstable_cancelCallback,
      ZS = pt.unstable_shouldYield,
      JS = pt.unstable_requestPaint,
      Se = pt.unstable_now,
      eT = pt.unstable_getCurrentPriorityLevel,
      hf = pt.unstable_ImmediatePriority,
      pv = pt.unstable_UserBlockingPriority,
      Ga = pt.unstable_NormalPriority,
      tT = pt.unstable_LowPriority,
      mv = pt.unstable_IdlePriority,
      Nl = null,
      nn = null;
    function nT(e) {
      if (nn && typeof nn.onCommitFiberRoot == "function")
        try {
          nn.onCommitFiberRoot(Nl, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
    }
    var Bt = Math.clz32 ? Math.clz32 : iT,
      rT = Math.log,
      sT = Math.LN2;
    function iT(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((rT(e) / sT) | 0)) | 0);
    }
    var Xo = 64,
      Zo = 4194304;
    function Ri(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function Ya(e, t) {
      var n = e.pendingLanes;
      if (n === 0) return 0;
      var r = 0,
        s = e.suspendedLanes,
        i = e.pingedLanes,
        o = n & 268435455;
      if (o !== 0) {
        var a = o & ~s;
        a !== 0 ? (r = Ri(a)) : ((i &= o), i !== 0 && (r = Ri(i)));
      } else ((o = n & ~s), o !== 0 ? (r = Ri(o)) : i !== 0 && (r = Ri(i)));
      if (r === 0) return 0;
      if (
        t !== 0 &&
        t !== r &&
        !(t & s) &&
        ((s = r & -r),
        (i = t & -t),
        s >= i || (s === 16 && (i & 4194240) !== 0))
      )
        return t;
      if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
          ((n = 31 - Bt(t)), (s = 1 << n), (r |= e[n]), (t &= ~s));
      return r;
    }
    function oT(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function aT(e, t) {
      for (
        var n = e.suspendedLanes,
          r = e.pingedLanes,
          s = e.expirationTimes,
          i = e.pendingLanes;
        0 < i;
      ) {
        var o = 31 - Bt(i),
          a = 1 << o,
          l = s[o];
        (l === -1
          ? (!(a & n) || a & r) && (s[o] = oT(a, t))
          : l <= t && (e.expiredLanes |= a),
          (i &= ~a));
      }
    }
    function Oc(e) {
      return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
      );
    }
    function gv() {
      var e = Xo;
      return ((Xo <<= 1), !(Xo & 4194240) && (Xo = 64), e);
    }
    function bu(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function No(e, t, n) {
      ((e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Bt(t)),
        (e[t] = n));
    }
    function lT(e, t) {
      var n = e.pendingLanes & ~t;
      ((e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements));
      var r = e.eventTimes;
      for (e = e.expirationTimes; 0 < n; ) {
        var s = 31 - Bt(n),
          i = 1 << s;
        ((t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i));
      }
    }
    function pf(e, t) {
      var n = (e.entangledLanes |= t);
      for (e = e.entanglements; n; ) {
        var r = 31 - Bt(n),
          s = 1 << r;
        ((s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s));
      }
    }
    var se = 0;
    function yv(e) {
      return (
        (e &= -e),
        1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
      );
    }
    var vv,
      mf,
      xv,
      wv,
      bv,
      Mc = !1,
      Jo = [],
      Xn = null,
      Zn = null,
      Jn = null,
      no = new Map(),
      ro = new Map(),
      $n = [],
      uT =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " ",
        );
    function pp(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Xn = null;
          break;
        case "dragenter":
        case "dragleave":
          Zn = null;
          break;
        case "mouseover":
        case "mouseout":
          Jn = null;
          break;
        case "pointerover":
        case "pointerout":
          no.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          ro.delete(t.pointerId);
      }
    }
    function gi(e, t, n, r, s, i) {
      return e === null || e.nativeEvent !== i
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: i,
            targetContainers: [s],
          }),
          t !== null && ((t = Oo(t)), t !== null && mf(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          s !== null && t.indexOf(s) === -1 && t.push(s),
          e);
    }
    function cT(e, t, n, r, s) {
      switch (t) {
        case "focusin":
          return ((Xn = gi(Xn, e, t, n, r, s)), !0);
        case "dragenter":
          return ((Zn = gi(Zn, e, t, n, r, s)), !0);
        case "mouseover":
          return ((Jn = gi(Jn, e, t, n, r, s)), !0);
        case "pointerover":
          var i = s.pointerId;
          return (no.set(i, gi(no.get(i) || null, e, t, n, r, s)), !0);
        case "gotpointercapture":
          return (
            (i = s.pointerId),
            ro.set(i, gi(ro.get(i) || null, e, t, n, r, s)),
            !0
          );
      }
      return !1;
    }
    function Sv(e) {
      var t = Ar(e.target);
      if (t !== null) {
        var n = Jr(t);
        if (n !== null) {
          if (((t = n.tag), t === 13)) {
            if (((t = cv(n)), t !== null)) {
              ((e.blockedOn = t),
                bv(e.priority, function () {
                  xv(n);
                }));
              return;
            }
          } else if (
            t === 3 &&
            n.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function ka(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = jc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          ((Rc = r), n.target.dispatchEvent(r), (Rc = null));
        } else return ((t = Oo(n)), t !== null && mf(t), (e.blockedOn = n), !1);
        t.shift();
      }
      return !0;
    }
    function mp(e, t, n) {
      ka(e) && n.delete(t);
    }
    function dT() {
      ((Mc = !1),
        Xn !== null && ka(Xn) && (Xn = null),
        Zn !== null && ka(Zn) && (Zn = null),
        Jn !== null && ka(Jn) && (Jn = null),
        no.forEach(mp),
        ro.forEach(mp));
    }
    function yi(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        Mc ||
          ((Mc = !0),
          pt.unstable_scheduleCallback(pt.unstable_NormalPriority, dT)));
    }
    function so(e) {
      function t(s) {
        return yi(s, e);
      }
      if (0 < Jo.length) {
        yi(Jo[0], e);
        for (var n = 1; n < Jo.length; n++) {
          var r = Jo[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
      }
      for (
        Xn !== null && yi(Xn, e),
          Zn !== null && yi(Zn, e),
          Jn !== null && yi(Jn, e),
          no.forEach(t),
          ro.forEach(t),
          n = 0;
        n < $n.length;
        n++
      )
        ((r = $n[n]), r.blockedOn === e && (r.blockedOn = null));
      for (; 0 < $n.length && ((n = $n[0]), n.blockedOn === null); )
        (Sv(n), n.blockedOn === null && $n.shift());
    }
    var As = Pn.ReactCurrentBatchConfig,
      Qa = !0;
    function fT(e, t, n, r) {
      var s = se,
        i = As.transition;
      As.transition = null;
      try {
        ((se = 1), gf(e, t, n, r));
      } finally {
        ((se = s), (As.transition = i));
      }
    }
    function hT(e, t, n, r) {
      var s = se,
        i = As.transition;
      As.transition = null;
      try {
        ((se = 4), gf(e, t, n, r));
      } finally {
        ((se = s), (As.transition = i));
      }
    }
    function gf(e, t, n, r) {
      if (Qa) {
        var s = jc(e, t, n, r);
        if (s === null) (Au(e, t, r, qa, n), pp(e, r));
        else if (cT(s, e, t, n, r)) r.stopPropagation();
        else if ((pp(e, r), t & 4 && -1 < uT.indexOf(e))) {
          for (; s !== null; ) {
            var i = Oo(s);
            if (
              (i !== null && vv(i),
              (i = jc(e, t, n, r)),
              i === null && Au(e, t, r, qa, n),
              i === s)
            )
              break;
            s = i;
          }
          s !== null && r.stopPropagation();
        } else Au(e, t, r, null, n);
      }
    }
    var qa = null;
    function jc(e, t, n, r) {
      if (((qa = null), (e = ff(r)), (e = Ar(e)), e !== null))
        if (((t = Jr(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
          if (((e = cv(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      return ((qa = e), null);
    }
    function Tv(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (eT()) {
            case hf:
              return 1;
            case pv:
              return 4;
            case Ga:
            case tT:
              return 16;
            case mv:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var Gn = null,
      yf = null,
      Ra = null;
    function Ev() {
      if (Ra) return Ra;
      var e,
        t = yf,
        n = t.length,
        r,
        s = "value" in Gn ? Gn.value : Gn.textContent,
        i = s.length;
      for (e = 0; e < n && t[e] === s[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === s[i - r]; r++);
      return (Ra = s.slice(e, 1 < r ? 1 - r : void 0));
    }
    function _a(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function ea() {
      return !0;
    }
    function gp() {
      return !1;
    }
    function gt(e) {
      function t(n, r, s, i, o) {
        ((this._reactName = n),
          (this._targetInst = s),
          (this.type = r),
          (this.nativeEvent = i),
          (this.target = o),
          (this.currentTarget = null));
        for (var a in e)
          e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
        return (
          (this.isDefaultPrevented = (
            i.defaultPrevented != null
              ? i.defaultPrevented
              : i.returnValue === !1
          )
            ? ea
            : gp),
          (this.isPropagationStopped = gp),
          this
        );
      }
      return (
        xe(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n &&
              (n.preventDefault
                ? n.preventDefault()
                : typeof n.returnValue != "unknown" && (n.returnValue = !1),
              (this.isDefaultPrevented = ea));
          },
          stopPropagation: function () {
            var n = this.nativeEvent;
            n &&
              (n.stopPropagation
                ? n.stopPropagation()
                : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
              (this.isPropagationStopped = ea));
          },
          persist: function () {},
          isPersistent: ea,
        }),
        t
      );
    }
    var si = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      vf = gt(si),
      Ao = xe({}, si, { view: 0, detail: 0 }),
      pT = gt(Ao),
      Su,
      Tu,
      vi,
      Al = xe({}, Ao, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: xf,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== vi &&
                (vi && e.type === "mousemove"
                  ? ((Su = e.screenX - vi.screenX),
                    (Tu = e.screenY - vi.screenY))
                  : (Tu = Su = 0),
                (vi = e)),
              Su);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : Tu;
        },
      }),
      yp = gt(Al),
      mT = xe({}, Al, { dataTransfer: 0 }),
      gT = gt(mT),
      yT = xe({}, Ao, { relatedTarget: 0 }),
      Eu = gt(yT),
      vT = xe({}, si, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      xT = gt(vT),
      wT = xe({}, si, {
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      }),
      bT = gt(wT),
      ST = xe({}, si, { data: 0 }),
      vp = gt(ST),
      TT = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      ET = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      CT = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function PT(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = CT[e])
          ? !!t[e]
          : !1;
    }
    function xf() {
      return PT;
    }
    var kT = xe({}, Ao, {
        key: function (e) {
          if (e.key) {
            var t = TT[e.key] || e.key;
            if (t !== "Unidentified") return t;
          }
          return e.type === "keypress"
            ? ((e = _a(e)), e === 13 ? "Enter" : String.fromCharCode(e))
            : e.type === "keydown" || e.type === "keyup"
              ? ET[e.keyCode] || "Unidentified"
              : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: xf,
        charCode: function (e) {
          return e.type === "keypress" ? _a(e) : 0;
        },
        keyCode: function (e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
          return e.type === "keypress"
            ? _a(e)
            : e.type === "keydown" || e.type === "keyup"
              ? e.keyCode
              : 0;
        },
      }),
      RT = gt(kT),
      _T = xe({}, Al, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      xp = gt(_T),
      NT = xe({}, Ao, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: xf,
      }),
      AT = gt(NT),
      OT = xe({}, si, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      MT = gt(OT),
      jT = xe({}, Al, {
        deltaX: function (e) {
          return "deltaX" in e
            ? e.deltaX
            : "wheelDeltaX" in e
              ? -e.wheelDeltaX
              : 0;
        },
        deltaY: function (e) {
          return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
              ? -e.wheelDeltaY
              : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      DT = gt(jT),
      LT = [9, 13, 27, 32],
      wf = xn && "CompositionEvent" in window,
      Ii = null;
    xn && "documentMode" in document && (Ii = document.documentMode);
    var IT = xn && "TextEvent" in window && !Ii,
      Cv = xn && (!wf || (Ii && 8 < Ii && 11 >= Ii)),
      wp = " ",
      bp = !1;
    function Pv(e, t) {
      switch (e) {
        case "keyup":
          return LT.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function kv(e) {
      return (
        (e = e.detail),
        typeof e == "object" && "data" in e ? e.data : null
      );
    }
    var hs = !1;
    function FT(e, t) {
      switch (e) {
        case "compositionend":
          return kv(t);
        case "keypress":
          return t.which !== 32 ? null : ((bp = !0), wp);
        case "textInput":
          return ((e = t.data), e === wp && bp ? null : e);
        default:
          return null;
      }
    }
    function VT(e, t) {
      if (hs)
        return e === "compositionend" || (!wf && Pv(e, t))
          ? ((e = Ev()), (Ra = yf = Gn = null), (hs = !1), e)
          : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Cv && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var $T = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function Sp(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!$T[e.type] : t === "textarea";
    }
    function Rv(e, t, n, r) {
      (iv(r),
        (t = Xa(t, "onChange")),
        0 < t.length &&
          ((n = new vf("onChange", "change", null, n, r)),
          e.push({ event: n, listeners: t })));
    }
    var Fi = null,
      io = null;
    function zT(e) {
      Vv(e, 0);
    }
    function Ol(e) {
      var t = gs(e);
      if (Zy(t)) return e;
    }
    function BT(e, t) {
      if (e === "change") return t;
    }
    var _v = !1;
    if (xn) {
      var Cu;
      if (xn) {
        var Pu = "oninput" in document;
        if (!Pu) {
          var Tp = document.createElement("div");
          (Tp.setAttribute("oninput", "return;"),
            (Pu = typeof Tp.oninput == "function"));
        }
        Cu = Pu;
      } else Cu = !1;
      _v = Cu && (!document.documentMode || 9 < document.documentMode);
    }
    function Ep() {
      Fi && (Fi.detachEvent("onpropertychange", Nv), (io = Fi = null));
    }
    function Nv(e) {
      if (e.propertyName === "value" && Ol(io)) {
        var t = [];
        (Rv(t, io, e, ff(e)), uv(zT, t));
      }
    }
    function UT(e, t, n) {
      e === "focusin"
        ? (Ep(), (Fi = t), (io = n), Fi.attachEvent("onpropertychange", Nv))
        : e === "focusout" && Ep();
    }
    function WT(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ol(io);
    }
    function HT(e, t) {
      if (e === "click") return Ol(t);
    }
    function KT(e, t) {
      if (e === "input" || e === "change") return Ol(t);
    }
    function GT(e, t) {
      return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var Wt = typeof Object.is == "function" ? Object.is : GT;
    function oo(e, t) {
      if (Wt(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (r = 0; r < n.length; r++) {
        var s = n[r];
        if (!gc.call(t, s) || !Wt(e[s], t[s])) return !1;
      }
      return !0;
    }
    function Cp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Pp(e, t) {
      var n = Cp(e);
      e = 0;
      for (var r; n; ) {
        if (n.nodeType === 3) {
          if (((r = e + n.textContent.length), e <= t && r >= t))
            return { node: n, offset: t - e };
          e = r;
        }
        e: {
          for (; n; ) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break e;
            }
            n = n.parentNode;
          }
          n = void 0;
        }
        n = Cp(n);
      }
    }
    function Av(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? Av(e, t.parentNode)
              : "contains" in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function Ov() {
      for (var e = window, t = Wa(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = typeof t.contentWindow.location.href == "string";
        } catch {
          n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Wa(e.document);
      }
      return t;
    }
    function bf(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === "input" &&
          (e.type === "text" ||
            e.type === "search" ||
            e.type === "tel" ||
            e.type === "url" ||
            e.type === "password")) ||
          t === "textarea" ||
          e.contentEditable === "true")
      );
    }
    function YT(e) {
      var t = Ov(),
        n = e.focusedElem,
        r = e.selectionRange;
      if (
        t !== n &&
        n &&
        n.ownerDocument &&
        Av(n.ownerDocument.documentElement, n)
      ) {
        if (r !== null && bf(n)) {
          if (
            ((t = r.start),
            (e = r.end),
            e === void 0 && (e = t),
            "selectionStart" in n)
          )
            ((n.selectionStart = t),
              (n.selectionEnd = Math.min(e, n.value.length)));
          else if (
            ((e =
              ((t = n.ownerDocument || document) && t.defaultView) || window),
            e.getSelection)
          ) {
            e = e.getSelection();
            var s = n.textContent.length,
              i = Math.min(r.start, s);
            ((r = r.end === void 0 ? i : Math.min(r.end, s)),
              !e.extend && i > r && ((s = r), (r = i), (i = s)),
              (s = Pp(n, i)));
            var o = Pp(n, r);
            s &&
              o &&
              (e.rangeCount !== 1 ||
                e.anchorNode !== s.node ||
                e.anchorOffset !== s.offset ||
                e.focusNode !== o.node ||
                e.focusOffset !== o.offset) &&
              ((t = t.createRange()),
              t.setStart(s.node, s.offset),
              e.removeAllRanges(),
              i > r
                ? (e.addRange(t), e.extend(o.node, o.offset))
                : (t.setEnd(o.node, o.offset), e.addRange(t)));
          }
        }
        for (t = [], e = n; (e = e.parentNode); )
          e.nodeType === 1 &&
            t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
          typeof n.focus == "function" && n.focus(), n = 0;
          n < t.length;
          n++
        )
          ((e = t[n]),
            (e.element.scrollLeft = e.left),
            (e.element.scrollTop = e.top));
      }
    }
    var QT = xn && "documentMode" in document && 11 >= document.documentMode,
      ps = null,
      Dc = null,
      Vi = null,
      Lc = !1;
    function kp(e, t, n) {
      var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Lc ||
        ps == null ||
        ps !== Wa(r) ||
        ((r = ps),
        "selectionStart" in r && bf(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : ((r = (
              (r.ownerDocument && r.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (r = {
              anchorNode: r.anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            })),
        (Vi && oo(Vi, r)) ||
          ((Vi = r),
          (r = Xa(Dc, "onSelect")),
          0 < r.length &&
            ((t = new vf("onSelect", "select", null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = ps))));
    }
    function ta(e, t) {
      var n = {};
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n["Webkit" + e] = "webkit" + t),
        (n["Moz" + e] = "moz" + t),
        n
      );
    }
    var ms = {
        animationend: ta("Animation", "AnimationEnd"),
        animationiteration: ta("Animation", "AnimationIteration"),
        animationstart: ta("Animation", "AnimationStart"),
        transitionend: ta("Transition", "TransitionEnd"),
      },
      ku = {},
      Mv = {};
    xn &&
      ((Mv = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete ms.animationend.animation,
        delete ms.animationiteration.animation,
        delete ms.animationstart.animation),
      "TransitionEvent" in window || delete ms.transitionend.transition);
    function Ml(e) {
      if (ku[e]) return ku[e];
      if (!ms[e]) return e;
      var t = ms[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in Mv) return (ku[e] = t[n]);
      return e;
    }
    var jv = Ml("animationend"),
      Dv = Ml("animationiteration"),
      Lv = Ml("animationstart"),
      Iv = Ml("transitionend"),
      Fv = new Map(),
      Rp =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " ",
        );
    function mr(e, t) {
      (Fv.set(e, t), Zr(t, [e]));
    }
    for (var Ru = 0; Ru < Rp.length; Ru++) {
      var _u = Rp[Ru],
        qT = _u.toLowerCase(),
        XT = _u[0].toUpperCase() + _u.slice(1);
      mr(qT, "on" + XT);
    }
    mr(jv, "onAnimationEnd");
    mr(Dv, "onAnimationIteration");
    mr(Lv, "onAnimationStart");
    mr("dblclick", "onDoubleClick");
    mr("focusin", "onFocus");
    mr("focusout", "onBlur");
    mr(Iv, "onTransitionEnd");
    Ks("onMouseEnter", ["mouseout", "mouseover"]);
    Ks("onMouseLeave", ["mouseout", "mouseover"]);
    Ks("onPointerEnter", ["pointerout", "pointerover"]);
    Ks("onPointerLeave", ["pointerout", "pointerover"]);
    Zr(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    );
    Zr(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    );
    Zr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    Zr(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    );
    Zr(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    );
    Zr(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
    var _i =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " ",
        ),
      ZT = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(_i),
      );
    function _p(e, t, n) {
      var r = e.type || "unknown-event";
      ((e.currentTarget = n), qS(r, t, void 0, e), (e.currentTarget = null));
    }
    function Vv(e, t) {
      t = (t & 4) !== 0;
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          s = r.event;
        r = r.listeners;
        e: {
          var i = void 0;
          if (t)
            for (var o = r.length - 1; 0 <= o; o--) {
              var a = r[o],
                l = a.instance,
                u = a.currentTarget;
              if (((a = a.listener), l !== i && s.isPropagationStopped()))
                break e;
              (_p(s, a, u), (i = l));
            }
          else
            for (o = 0; o < r.length; o++) {
              if (
                ((a = r[o]),
                (l = a.instance),
                (u = a.currentTarget),
                (a = a.listener),
                l !== i && s.isPropagationStopped())
              )
                break e;
              (_p(s, a, u), (i = l));
            }
        }
      }
      if (Ka) throw ((e = Ac), (Ka = !1), (Ac = null), e);
    }
    function ue(e, t) {
      var n = t[zc];
      n === void 0 && (n = t[zc] = new Set());
      var r = e + "__bubble";
      n.has(r) || ($v(t, e, 2, !1), n.add(r));
    }
    function Nu(e, t, n) {
      var r = 0;
      (t && (r |= 4), $v(n, e, r, t));
    }
    var na = "_reactListening" + Math.random().toString(36).slice(2);
    function ao(e) {
      if (!e[na]) {
        ((e[na] = !0),
          Gy.forEach(function (n) {
            n !== "selectionchange" &&
              (ZT.has(n) || Nu(n, !1, e), Nu(n, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[na] || ((t[na] = !0), Nu("selectionchange", !1, t));
      }
    }
    function $v(e, t, n, r) {
      switch (Tv(t)) {
        case 1:
          var s = fT;
          break;
        case 4:
          s = hT;
          break;
        default:
          s = gf;
      }
      ((n = s.bind(null, t, n, e)),
        (s = void 0),
        !Nc ||
          (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
          (s = !0),
        r
          ? s !== void 0
            ? e.addEventListener(t, n, { capture: !0, passive: s })
            : e.addEventListener(t, n, !0)
          : s !== void 0
            ? e.addEventListener(t, n, { passive: s })
            : e.addEventListener(t, n, !1));
    }
    function Au(e, t, n, r, s) {
      var i = r;
      if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
          if (r === null) return;
          var o = r.tag;
          if (o === 3 || o === 4) {
            var a = r.stateNode.containerInfo;
            if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
            if (o === 4)
              for (o = r.return; o !== null; ) {
                var l = o.tag;
                if (
                  (l === 3 || l === 4) &&
                  ((l = o.stateNode.containerInfo),
                  l === s || (l.nodeType === 8 && l.parentNode === s))
                )
                  return;
                o = o.return;
              }
            for (; a !== null; ) {
              if (((o = Ar(a)), o === null)) return;
              if (((l = o.tag), l === 5 || l === 6)) {
                r = i = o;
                continue e;
              }
              a = a.parentNode;
            }
          }
          r = r.return;
        }
      uv(function () {
        var u = i,
          c = ff(n),
          d = [];
        e: {
          var f = Fv.get(e);
          if (f !== void 0) {
            var h = vf,
              b = e;
            switch (e) {
              case "keypress":
                if (_a(n) === 0) break e;
              case "keydown":
              case "keyup":
                h = RT;
                break;
              case "focusin":
                ((b = "focus"), (h = Eu));
                break;
              case "focusout":
                ((b = "blur"), (h = Eu));
                break;
              case "beforeblur":
              case "afterblur":
                h = Eu;
                break;
              case "click":
                if (n.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                h = yp;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                h = gT;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                h = AT;
                break;
              case jv:
              case Dv:
              case Lv:
                h = xT;
                break;
              case Iv:
                h = MT;
                break;
              case "scroll":
                h = pT;
                break;
              case "wheel":
                h = DT;
                break;
              case "copy":
              case "cut":
              case "paste":
                h = bT;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                h = xp;
            }
            var g = (t & 4) !== 0,
              w = !g && e === "scroll",
              m = g ? (f !== null ? f + "Capture" : null) : f;
            g = [];
            for (var p = u, y; p !== null; ) {
              y = p;
              var S = y.stateNode;
              if (
                (y.tag === 5 &&
                  S !== null &&
                  ((y = S),
                  m !== null &&
                    ((S = to(p, m)), S != null && g.push(lo(p, S, y)))),
                w)
              )
                break;
              p = p.return;
            }
            0 < g.length &&
              ((f = new h(f, b, null, n, c)),
              d.push({ event: f, listeners: g }));
          }
        }
        if (!(t & 7)) {
          e: {
            if (
              ((f = e === "mouseover" || e === "pointerover"),
              (h = e === "mouseout" || e === "pointerout"),
              f &&
                n !== Rc &&
                (b = n.relatedTarget || n.fromElement) &&
                (Ar(b) || b[wn]))
            )
              break e;
            if (
              (h || f) &&
              ((f =
                c.window === c
                  ? c
                  : (f = c.ownerDocument)
                    ? f.defaultView || f.parentWindow
                    : window),
              h
                ? ((b = n.relatedTarget || n.toElement),
                  (h = u),
                  (b = b ? Ar(b) : null),
                  b !== null &&
                    ((w = Jr(b)), b !== w || (b.tag !== 5 && b.tag !== 6)) &&
                    (b = null))
                : ((h = null), (b = u)),
              h !== b)
            ) {
              if (
                ((g = yp),
                (S = "onMouseLeave"),
                (m = "onMouseEnter"),
                (p = "mouse"),
                (e === "pointerout" || e === "pointerover") &&
                  ((g = xp),
                  (S = "onPointerLeave"),
                  (m = "onPointerEnter"),
                  (p = "pointer")),
                (w = h == null ? f : gs(h)),
                (y = b == null ? f : gs(b)),
                (f = new g(S, p + "leave", h, n, c)),
                (f.target = w),
                (f.relatedTarget = y),
                (S = null),
                Ar(c) === u &&
                  ((g = new g(m, p + "enter", b, n, c)),
                  (g.target = y),
                  (g.relatedTarget = w),
                  (S = g)),
                (w = S),
                h && b)
              )
                t: {
                  for (g = h, m = b, p = 0, y = g; y; y = as(y)) p++;
                  for (y = 0, S = m; S; S = as(S)) y++;
                  for (; 0 < p - y; ) ((g = as(g)), p--);
                  for (; 0 < y - p; ) ((m = as(m)), y--);
                  for (; p--; ) {
                    if (g === m || (m !== null && g === m.alternate)) break t;
                    ((g = as(g)), (m = as(m)));
                  }
                  g = null;
                }
              else g = null;
              (h !== null && Np(d, f, h, g, !1),
                b !== null && w !== null && Np(d, w, b, g, !0));
            }
          }
          e: {
            if (
              ((f = u ? gs(u) : window),
              (h = f.nodeName && f.nodeName.toLowerCase()),
              h === "select" || (h === "input" && f.type === "file"))
            )
              var T = BT;
            else if (Sp(f))
              if (_v) T = KT;
              else {
                T = WT;
                var E = UT;
              }
            else
              (h = f.nodeName) &&
                h.toLowerCase() === "input" &&
                (f.type === "checkbox" || f.type === "radio") &&
                (T = HT);
            if (T && (T = T(e, u))) {
              Rv(d, T, n, c);
              break e;
            }
            (E && E(e, f, u),
              e === "focusout" &&
                (E = f._wrapperState) &&
                E.controlled &&
                f.type === "number" &&
                Tc(f, "number", f.value));
          }
          switch (((E = u ? gs(u) : window), e)) {
            case "focusin":
              (Sp(E) || E.contentEditable === "true") &&
                ((ps = E), (Dc = u), (Vi = null));
              break;
            case "focusout":
              Vi = Dc = ps = null;
              break;
            case "mousedown":
              Lc = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              ((Lc = !1), kp(d, n, c));
              break;
            case "selectionchange":
              if (QT) break;
            case "keydown":
            case "keyup":
              kp(d, n, c);
          }
          var C;
          if (wf)
            e: {
              switch (e) {
                case "compositionstart":
                  var P = "onCompositionStart";
                  break e;
                case "compositionend":
                  P = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  P = "onCompositionUpdate";
                  break e;
              }
              P = void 0;
            }
          else
            hs
              ? Pv(e, n) && (P = "onCompositionEnd")
              : e === "keydown" &&
                n.keyCode === 229 &&
                (P = "onCompositionStart");
          (P &&
            (Cv &&
              n.locale !== "ko" &&
              (hs || P !== "onCompositionStart"
                ? P === "onCompositionEnd" && hs && (C = Ev())
                : ((Gn = c),
                  (yf = "value" in Gn ? Gn.value : Gn.textContent),
                  (hs = !0))),
            (E = Xa(u, P)),
            0 < E.length &&
              ((P = new vp(P, e, null, n, c)),
              d.push({ event: P, listeners: E }),
              C ? (P.data = C) : ((C = kv(n)), C !== null && (P.data = C)))),
            (C = IT ? FT(e, n) : VT(e, n)) &&
              ((u = Xa(u, "onBeforeInput")),
              0 < u.length &&
                ((c = new vp("onBeforeInput", "beforeinput", null, n, c)),
                d.push({ event: c, listeners: u }),
                (c.data = C))));
        }
        Vv(d, t);
      });
    }
    function lo(e, t, n) {
      return { instance: e, listener: t, currentTarget: n };
    }
    function Xa(e, t) {
      for (var n = t + "Capture", r = []; e !== null; ) {
        var s = e,
          i = s.stateNode;
        (s.tag === 5 &&
          i !== null &&
          ((s = i),
          (i = to(e, n)),
          i != null && r.unshift(lo(e, i, s)),
          (i = to(e, t)),
          i != null && r.push(lo(e, i, s))),
          (e = e.return));
      }
      return r;
    }
    function as(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function Np(e, t, n, r, s) {
      for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n,
          l = a.alternate,
          u = a.stateNode;
        if (l !== null && l === r) break;
        (a.tag === 5 &&
          u !== null &&
          ((a = u),
          s
            ? ((l = to(n, i)), l != null && o.unshift(lo(n, l, a)))
            : s || ((l = to(n, i)), l != null && o.push(lo(n, l, a)))),
          (n = n.return));
      }
      o.length !== 0 && e.push({ event: t, listeners: o });
    }
    var JT = /\r\n?/g,
      eE = /\u0000|\uFFFD/g;
    function Ap(e) {
      return (typeof e == "string" ? e : "" + e)
        .replace(
          JT,
          `
`,
        )
        .replace(eE, "");
    }
    function ra(e, t, n) {
      if (((t = Ap(t)), Ap(e) !== t && n)) throw Error(M(425));
    }
    function Za() {}
    var Ic = null,
      Fc = null;
    function Vc(e, t) {
      return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var $c = typeof setTimeout == "function" ? setTimeout : void 0,
      tE = typeof clearTimeout == "function" ? clearTimeout : void 0,
      Op = typeof Promise == "function" ? Promise : void 0,
      nE =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof Op < "u"
            ? function (e) {
                return Op.resolve(null).then(e).catch(rE);
              }
            : $c;
    function rE(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Ou(e, t) {
      var n = t,
        r = 0;
      do {
        var s = n.nextSibling;
        if ((e.removeChild(n), s && s.nodeType === 8))
          if (((n = s.data), n === "/$")) {
            if (r === 0) {
              (e.removeChild(s), so(t));
              return;
            }
            r--;
          } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = s;
      } while (n);
      so(t);
    }
    function er(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
          if (t === "/$") return null;
        }
      }
      return e;
    }
    function Mp(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "$" || n === "$!" || n === "$?") {
            if (t === 0) return e;
            t--;
          } else n === "/$" && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var ii = Math.random().toString(36).slice(2),
      en = "__reactFiber$" + ii,
      uo = "__reactProps$" + ii,
      wn = "__reactContainer$" + ii,
      zc = "__reactEvents$" + ii,
      sE = "__reactListeners$" + ii,
      iE = "__reactHandles$" + ii;
    function Ar(e) {
      var t = e[en];
      if (t) return t;
      for (var n = e.parentNode; n; ) {
        if ((t = n[wn] || n[en])) {
          if (
            ((n = t.alternate),
            t.child !== null || (n !== null && n.child !== null))
          )
            for (e = Mp(e); e !== null; ) {
              if ((n = e[en])) return n;
              e = Mp(e);
            }
          return t;
        }
        ((e = n), (n = e.parentNode));
      }
      return null;
    }
    function Oo(e) {
      return (
        (e = e[en] || e[wn]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
          ? null
          : e
      );
    }
    function gs(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(M(33));
    }
    function jl(e) {
      return e[uo] || null;
    }
    var Bc = [],
      ys = -1;
    function gr(e) {
      return { current: e };
    }
    function ce(e) {
      0 > ys || ((e.current = Bc[ys]), (Bc[ys] = null), ys--);
    }
    function ae(e, t) {
      (ys++, (Bc[ys] = e.current), (e.current = t));
    }
    var ar = {},
      Ue = gr(ar),
      tt = gr(!1),
      Hr = ar;
    function Gs(e, t) {
      var n = e.type.contextTypes;
      if (!n) return ar;
      var r = e.stateNode;
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
      var s = {},
        i;
      for (i in n) s[i] = t[i];
      return (
        r &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = s)),
        s
      );
    }
    function nt(e) {
      return ((e = e.childContextTypes), e != null);
    }
    function Ja() {
      (ce(tt), ce(Ue));
    }
    function jp(e, t, n) {
      if (Ue.current !== ar) throw Error(M(168));
      (ae(Ue, t), ae(tt, n));
    }
    function zv(e, t, n) {
      var r = e.stateNode;
      if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
        return n;
      r = r.getChildContext();
      for (var s in r)
        if (!(s in t)) throw Error(M(108, US(e) || "Unknown", s));
      return xe({}, n, r);
    }
    function el(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          ar),
        (Hr = Ue.current),
        ae(Ue, e),
        ae(tt, tt.current),
        !0
      );
    }
    function Dp(e, t, n) {
      var r = e.stateNode;
      if (!r) throw Error(M(169));
      (n
        ? ((e = zv(e, t, Hr)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          ce(tt),
          ce(Ue),
          ae(Ue, e))
        : ce(tt),
        ae(tt, n));
    }
    var pn = null,
      Dl = !1,
      Mu = !1;
    function Bv(e) {
      pn === null ? (pn = [e]) : pn.push(e);
    }
    function oE(e) {
      ((Dl = !0), Bv(e));
    }
    function yr() {
      if (!Mu && pn !== null) {
        Mu = !0;
        var e = 0,
          t = se;
        try {
          var n = pn;
          for (se = 1; e < n.length; e++) {
            var r = n[e];
            do r = r(!0);
            while (r !== null);
          }
          ((pn = null), (Dl = !1));
        } catch (s) {
          throw (pn !== null && (pn = pn.slice(e + 1)), hv(hf, yr), s);
        } finally {
          ((se = t), (Mu = !1));
        }
      }
      return null;
    }
    var vs = [],
      xs = 0,
      tl = null,
      nl = 0,
      bt = [],
      St = 0,
      Kr = null,
      gn = 1,
      yn = "";
    function kr(e, t) {
      ((vs[xs++] = nl), (vs[xs++] = tl), (tl = e), (nl = t));
    }
    function Uv(e, t, n) {
      ((bt[St++] = gn), (bt[St++] = yn), (bt[St++] = Kr), (Kr = e));
      var r = gn;
      e = yn;
      var s = 32 - Bt(r) - 1;
      ((r &= ~(1 << s)), (n += 1));
      var i = 32 - Bt(t) + s;
      if (30 < i) {
        var o = s - (s % 5);
        ((i = (r & ((1 << o) - 1)).toString(32)),
          (r >>= o),
          (s -= o),
          (gn = (1 << (32 - Bt(t) + s)) | (n << s) | r),
          (yn = i + e));
      } else ((gn = (1 << i) | (n << s) | r), (yn = e));
    }
    function Sf(e) {
      e.return !== null && (kr(e, 1), Uv(e, 1, 0));
    }
    function Tf(e) {
      for (; e === tl; )
        ((tl = vs[--xs]), (vs[xs] = null), (nl = vs[--xs]), (vs[xs] = null));
      for (; e === Kr; )
        ((Kr = bt[--St]),
          (bt[St] = null),
          (yn = bt[--St]),
          (bt[St] = null),
          (gn = bt[--St]),
          (bt[St] = null));
    }
    var dt = null,
      ct = null,
      pe = !1,
      zt = null;
    function Wv(e, t) {
      var n = Tt(5, null, null, 0);
      ((n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
    }
    function Lp(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type;
          return (
            (t =
              t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t),
            t !== null
              ? ((e.stateNode = t), (dt = e), (ct = er(t.firstChild)), !0)
              : !1
          );
        case 6:
          return (
            (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
            t !== null ? ((e.stateNode = t), (dt = e), (ct = null), !0) : !1
          );
        case 13:
          return (
            (t = t.nodeType !== 8 ? null : t),
            t !== null
              ? ((n = Kr !== null ? { id: gn, overflow: yn } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                (n = Tt(18, null, null, 0)),
                (n.stateNode = t),
                (n.return = e),
                (e.child = n),
                (dt = e),
                (ct = null),
                !0)
              : !1
          );
        default:
          return !1;
      }
    }
    function Uc(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function Wc(e) {
      if (pe) {
        var t = ct;
        if (t) {
          var n = t;
          if (!Lp(e, t)) {
            if (Uc(e)) throw Error(M(418));
            t = er(n.nextSibling);
            var r = dt;
            t && Lp(e, t)
              ? Wv(r, n)
              : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (dt = e));
          }
        } else {
          if (Uc(e)) throw Error(M(418));
          ((e.flags = (e.flags & -4097) | 2), (pe = !1), (dt = e));
        }
      }
    }
    function Ip(e) {
      for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
      )
        e = e.return;
      dt = e;
    }
    function sa(e) {
      if (e !== dt) return !1;
      if (!pe) return (Ip(e), (pe = !0), !1);
      var t;
      if (
        ((t = e.tag !== 3) &&
          !(t = e.tag !== 5) &&
          ((t = e.type),
          (t = t !== "head" && t !== "body" && !Vc(e.type, e.memoizedProps))),
        t && (t = ct))
      ) {
        if (Uc(e)) throw (Hv(), Error(M(418)));
        for (; t; ) (Wv(e, t), (t = er(t.nextSibling)));
      }
      if ((Ip(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
          throw Error(M(317));
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
              var n = e.data;
              if (n === "/$") {
                if (t === 0) {
                  ct = er(e.nextSibling);
                  break e;
                }
                t--;
              } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
            }
            e = e.nextSibling;
          }
          ct = null;
        }
      } else ct = dt ? er(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Hv() {
      for (var e = ct; e; ) e = er(e.nextSibling);
    }
    function Ys() {
      ((ct = dt = null), (pe = !1));
    }
    function Ef(e) {
      zt === null ? (zt = [e]) : zt.push(e);
    }
    var aE = Pn.ReactCurrentBatchConfig;
    function xi(e, t, n) {
      if (
        ((e = n.ref),
        e !== null && typeof e != "function" && typeof e != "object")
      ) {
        if (n._owner) {
          if (((n = n._owner), n)) {
            if (n.tag !== 1) throw Error(M(309));
            var r = n.stateNode;
          }
          if (!r) throw Error(M(147, e));
          var s = r,
            i = "" + e;
          return t !== null &&
            t.ref !== null &&
            typeof t.ref == "function" &&
            t.ref._stringRef === i
            ? t.ref
            : ((t = function (o) {
                var a = s.refs;
                o === null ? delete a[i] : (a[i] = o);
              }),
              (t._stringRef = i),
              t);
        }
        if (typeof e != "string") throw Error(M(284));
        if (!n._owner) throw Error(M(290, e));
      }
      return e;
    }
    function ia(e, t) {
      throw (
        (e = Object.prototype.toString.call(t)),
        Error(
          M(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        )
      );
    }
    function Fp(e) {
      var t = e._init;
      return t(e._payload);
    }
    function Kv(e) {
      function t(m, p) {
        if (e) {
          var y = m.deletions;
          y === null ? ((m.deletions = [p]), (m.flags |= 16)) : y.push(p);
        }
      }
      function n(m, p) {
        if (!e) return null;
        for (; p !== null; ) (t(m, p), (p = p.sibling));
        return null;
      }
      function r(m, p) {
        for (m = new Map(); p !== null; )
          (p.key !== null ? m.set(p.key, p) : m.set(p.index, p),
            (p = p.sibling));
        return m;
      }
      function s(m, p) {
        return ((m = sr(m, p)), (m.index = 0), (m.sibling = null), m);
      }
      function i(m, p, y) {
        return (
          (m.index = y),
          e
            ? ((y = m.alternate),
              y !== null
                ? ((y = y.index), y < p ? ((m.flags |= 2), p) : y)
                : ((m.flags |= 2), p))
            : ((m.flags |= 1048576), p)
        );
      }
      function o(m) {
        return (e && m.alternate === null && (m.flags |= 2), m);
      }
      function a(m, p, y, S) {
        return p === null || p.tag !== 6
          ? ((p = $u(y, m.mode, S)), (p.return = m), p)
          : ((p = s(p, y)), (p.return = m), p);
      }
      function l(m, p, y, S) {
        var T = y.type;
        return T === fs
          ? c(m, p, y.props.children, S, y.key)
          : p !== null &&
              (p.elementType === T ||
                (typeof T == "object" &&
                  T !== null &&
                  T.$$typeof === Fn &&
                  Fp(T) === p.type))
            ? ((S = s(p, y.props)), (S.ref = xi(m, p, y)), (S.return = m), S)
            : ((S = La(y.type, y.key, y.props, null, m.mode, S)),
              (S.ref = xi(m, p, y)),
              (S.return = m),
              S);
      }
      function u(m, p, y, S) {
        return p === null ||
          p.tag !== 4 ||
          p.stateNode.containerInfo !== y.containerInfo ||
          p.stateNode.implementation !== y.implementation
          ? ((p = zu(y, m.mode, S)), (p.return = m), p)
          : ((p = s(p, y.children || [])), (p.return = m), p);
      }
      function c(m, p, y, S, T) {
        return p === null || p.tag !== 7
          ? ((p = Ur(y, m.mode, S, T)), (p.return = m), p)
          : ((p = s(p, y)), (p.return = m), p);
      }
      function d(m, p, y) {
        if ((typeof p == "string" && p !== "") || typeof p == "number")
          return ((p = $u("" + p, m.mode, y)), (p.return = m), p);
        if (typeof p == "object" && p !== null) {
          switch (p.$$typeof) {
            case Yo:
              return (
                (y = La(p.type, p.key, p.props, null, m.mode, y)),
                (y.ref = xi(m, null, p)),
                (y.return = m),
                y
              );
            case ds:
              return ((p = zu(p, m.mode, y)), (p.return = m), p);
            case Fn:
              var S = p._init;
              return d(m, S(p._payload), y);
          }
          if (ki(p) || pi(p))
            return ((p = Ur(p, m.mode, y, null)), (p.return = m), p);
          ia(m, p);
        }
        return null;
      }
      function f(m, p, y, S) {
        var T = p !== null ? p.key : null;
        if ((typeof y == "string" && y !== "") || typeof y == "number")
          return T !== null ? null : a(m, p, "" + y, S);
        if (typeof y == "object" && y !== null) {
          switch (y.$$typeof) {
            case Yo:
              return y.key === T ? l(m, p, y, S) : null;
            case ds:
              return y.key === T ? u(m, p, y, S) : null;
            case Fn:
              return ((T = y._init), f(m, p, T(y._payload), S));
          }
          if (ki(y) || pi(y)) return T !== null ? null : c(m, p, y, S, null);
          ia(m, y);
        }
        return null;
      }
      function h(m, p, y, S, T) {
        if ((typeof S == "string" && S !== "") || typeof S == "number")
          return ((m = m.get(y) || null), a(p, m, "" + S, T));
        if (typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
            case Yo:
              return (
                (m = m.get(S.key === null ? y : S.key) || null),
                l(p, m, S, T)
              );
            case ds:
              return (
                (m = m.get(S.key === null ? y : S.key) || null),
                u(p, m, S, T)
              );
            case Fn:
              var E = S._init;
              return h(m, p, y, E(S._payload), T);
          }
          if (ki(S) || pi(S))
            return ((m = m.get(y) || null), c(p, m, S, T, null));
          ia(p, S);
        }
        return null;
      }
      function b(m, p, y, S) {
        for (
          var T = null, E = null, C = p, P = (p = 0), R = null;
          C !== null && P < y.length;
          P++
        ) {
          C.index > P ? ((R = C), (C = null)) : (R = C.sibling);
          var k = f(m, C, y[P], S);
          if (k === null) {
            C === null && (C = R);
            break;
          }
          (e && C && k.alternate === null && t(m, C),
            (p = i(k, p, P)),
            E === null ? (T = k) : (E.sibling = k),
            (E = k),
            (C = R));
        }
        if (P === y.length) return (n(m, C), pe && kr(m, P), T);
        if (C === null) {
          for (; P < y.length; P++)
            ((C = d(m, y[P], S)),
              C !== null &&
                ((p = i(C, p, P)),
                E === null ? (T = C) : (E.sibling = C),
                (E = C)));
          return (pe && kr(m, P), T);
        }
        for (C = r(m, C); P < y.length; P++)
          ((R = h(C, m, P, y[P], S)),
            R !== null &&
              (e &&
                R.alternate !== null &&
                C.delete(R.key === null ? P : R.key),
              (p = i(R, p, P)),
              E === null ? (T = R) : (E.sibling = R),
              (E = R)));
        return (
          e &&
            C.forEach(function ($) {
              return t(m, $);
            }),
          pe && kr(m, P),
          T
        );
      }
      function g(m, p, y, S) {
        var T = pi(y);
        if (typeof T != "function") throw Error(M(150));
        if (((y = T.call(y)), y == null)) throw Error(M(151));
        for (
          var E = (T = null), C = p, P = (p = 0), R = null, k = y.next();
          C !== null && !k.done;
          P++, k = y.next()
        ) {
          C.index > P ? ((R = C), (C = null)) : (R = C.sibling);
          var $ = f(m, C, k.value, S);
          if ($ === null) {
            C === null && (C = R);
            break;
          }
          (e && C && $.alternate === null && t(m, C),
            (p = i($, p, P)),
            E === null ? (T = $) : (E.sibling = $),
            (E = $),
            (C = R));
        }
        if (k.done) return (n(m, C), pe && kr(m, P), T);
        if (C === null) {
          for (; !k.done; P++, k = y.next())
            ((k = d(m, k.value, S)),
              k !== null &&
                ((p = i(k, p, P)),
                E === null ? (T = k) : (E.sibling = k),
                (E = k)));
          return (pe && kr(m, P), T);
        }
        for (C = r(m, C); !k.done; P++, k = y.next())
          ((k = h(C, m, P, k.value, S)),
            k !== null &&
              (e &&
                k.alternate !== null &&
                C.delete(k.key === null ? P : k.key),
              (p = i(k, p, P)),
              E === null ? (T = k) : (E.sibling = k),
              (E = k)));
        return (
          e &&
            C.forEach(function (L) {
              return t(m, L);
            }),
          pe && kr(m, P),
          T
        );
      }
      function w(m, p, y, S) {
        if (
          (typeof y == "object" &&
            y !== null &&
            y.type === fs &&
            y.key === null &&
            (y = y.props.children),
          typeof y == "object" && y !== null)
        ) {
          switch (y.$$typeof) {
            case Yo:
              e: {
                for (var T = y.key, E = p; E !== null; ) {
                  if (E.key === T) {
                    if (((T = y.type), T === fs)) {
                      if (E.tag === 7) {
                        (n(m, E.sibling),
                          (p = s(E, y.props.children)),
                          (p.return = m),
                          (m = p));
                        break e;
                      }
                    } else if (
                      E.elementType === T ||
                      (typeof T == "object" &&
                        T !== null &&
                        T.$$typeof === Fn &&
                        Fp(T) === E.type)
                    ) {
                      (n(m, E.sibling),
                        (p = s(E, y.props)),
                        (p.ref = xi(m, E, y)),
                        (p.return = m),
                        (m = p));
                      break e;
                    }
                    n(m, E);
                    break;
                  } else t(m, E);
                  E = E.sibling;
                }
                y.type === fs
                  ? ((p = Ur(y.props.children, m.mode, S, y.key)),
                    (p.return = m),
                    (m = p))
                  : ((S = La(y.type, y.key, y.props, null, m.mode, S)),
                    (S.ref = xi(m, p, y)),
                    (S.return = m),
                    (m = S));
              }
              return o(m);
            case ds:
              e: {
                for (E = y.key; p !== null; ) {
                  if (p.key === E)
                    if (
                      p.tag === 4 &&
                      p.stateNode.containerInfo === y.containerInfo &&
                      p.stateNode.implementation === y.implementation
                    ) {
                      (n(m, p.sibling),
                        (p = s(p, y.children || [])),
                        (p.return = m),
                        (m = p));
                      break e;
                    } else {
                      n(m, p);
                      break;
                    }
                  else t(m, p);
                  p = p.sibling;
                }
                ((p = zu(y, m.mode, S)), (p.return = m), (m = p));
              }
              return o(m);
            case Fn:
              return ((E = y._init), w(m, p, E(y._payload), S));
          }
          if (ki(y)) return b(m, p, y, S);
          if (pi(y)) return g(m, p, y, S);
          ia(m, y);
        }
        return (typeof y == "string" && y !== "") || typeof y == "number"
          ? ((y = "" + y),
            p !== null && p.tag === 6
              ? (n(m, p.sibling), (p = s(p, y)), (p.return = m), (m = p))
              : (n(m, p), (p = $u(y, m.mode, S)), (p.return = m), (m = p)),
            o(m))
          : n(m, p);
      }
      return w;
    }
    var Qs = Kv(!0),
      Gv = Kv(!1),
      rl = gr(null),
      sl = null,
      ws = null,
      Cf = null;
    function Pf() {
      Cf = ws = sl = null;
    }
    function kf(e) {
      var t = rl.current;
      (ce(rl), (e._currentValue = t));
    }
    function Hc(e, t, n) {
      for (; e !== null; ) {
        var r = e.alternate;
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
            : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
          e === n)
        )
          break;
        e = e.return;
      }
    }
    function Os(e, t) {
      ((sl = e),
        (Cf = ws = null),
        (e = e.dependencies),
        e !== null &&
          e.firstContext !== null &&
          (e.lanes & t && (et = !0), (e.firstContext = null)));
    }
    function kt(e) {
      var t = e._currentValue;
      if (Cf !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), ws === null)) {
          if (sl === null) throw Error(M(308));
          ((ws = e), (sl.dependencies = { lanes: 0, firstContext: e }));
        } else ws = ws.next = e;
      return t;
    }
    var Or = null;
    function Rf(e) {
      Or === null ? (Or = [e]) : Or.push(e);
    }
    function Yv(e, t, n, r) {
      var s = t.interleaved;
      return (
        s === null ? ((n.next = n), Rf(t)) : ((n.next = s.next), (s.next = n)),
        (t.interleaved = n),
        bn(e, r)
      );
    }
    function bn(e, t) {
      e.lanes |= t;
      var n = e.alternate;
      for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        ((e.childLanes |= t),
          (n = e.alternate),
          n !== null && (n.childLanes |= t),
          (n = e),
          (e = e.return));
      return n.tag === 3 ? n.stateNode : null;
    }
    var Vn = !1;
    function _f(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function Qv(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          }));
    }
    function vn(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function tr(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (((r = r.shared), te & 2)) {
        var s = r.pending;
        return (
          s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
          (r.pending = t),
          bn(e, n)
        );
      }
      return (
        (s = r.interleaved),
        s === null ? ((t.next = t), Rf(r)) : ((t.next = s.next), (s.next = t)),
        (r.interleaved = t),
        bn(e, n)
      );
    }
    function Na(e, t, n) {
      if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
      ) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), pf(e, n));
      }
    }
    function Vp(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && ((r = r.updateQueue), n === r)) {
        var s = null,
          i = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
          do {
            var o = {
              eventTime: n.eventTime,
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: n.callback,
              next: null,
            };
            (i === null ? (s = i = o) : (i = i.next = o), (n = n.next));
          } while (n !== null);
          i === null ? (s = i = t) : (i = i.next = t);
        } else s = i = t;
        ((n = {
          baseState: r.baseState,
          firstBaseUpdate: s,
          lastBaseUpdate: i,
          shared: r.shared,
          effects: r.effects,
        }),
          (e.updateQueue = n));
        return;
      }
      ((e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t));
    }
    function il(e, t, n, r) {
      var s = e.updateQueue;
      Vn = !1;
      var i = s.firstBaseUpdate,
        o = s.lastBaseUpdate,
        a = s.shared.pending;
      if (a !== null) {
        s.shared.pending = null;
        var l = a,
          u = l.next;
        ((l.next = null), o === null ? (i = u) : (o.next = u), (o = l));
        var c = e.alternate;
        c !== null &&
          ((c = c.updateQueue),
          (a = c.lastBaseUpdate),
          a !== o &&
            (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
            (c.lastBaseUpdate = l)));
      }
      if (i !== null) {
        var d = s.baseState;
        ((o = 0), (c = u = l = null), (a = i));
        do {
          var f = a.lane,
            h = a.eventTime;
          if ((r & f) === f) {
            c !== null &&
              (c = c.next =
                {
                  eventTime: h,
                  lane: 0,
                  tag: a.tag,
                  payload: a.payload,
                  callback: a.callback,
                  next: null,
                });
            e: {
              var b = e,
                g = a;
              switch (((f = t), (h = n), g.tag)) {
                case 1:
                  if (((b = g.payload), typeof b == "function")) {
                    d = b.call(h, d, f);
                    break e;
                  }
                  d = b;
                  break e;
                case 3:
                  b.flags = (b.flags & -65537) | 128;
                case 0:
                  if (
                    ((b = g.payload),
                    (f = typeof b == "function" ? b.call(h, d, f) : b),
                    f == null)
                  )
                    break e;
                  d = xe({}, d, f);
                  break e;
                case 2:
                  Vn = !0;
              }
            }
            a.callback !== null &&
              a.lane !== 0 &&
              ((e.flags |= 64),
              (f = s.effects),
              f === null ? (s.effects = [a]) : f.push(a));
          } else
            ((h = {
              eventTime: h,
              lane: f,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            }),
              c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
              (o |= f));
          if (((a = a.next), a === null)) {
            if (((a = s.shared.pending), a === null)) break;
            ((f = a),
              (a = f.next),
              (f.next = null),
              (s.lastBaseUpdate = f),
              (s.shared.pending = null));
          }
        } while (!0);
        if (
          (c === null && (l = d),
          (s.baseState = l),
          (s.firstBaseUpdate = u),
          (s.lastBaseUpdate = c),
          (t = s.shared.interleaved),
          t !== null)
        ) {
          s = t;
          do ((o |= s.lane), (s = s.next));
          while (s !== t);
        } else i === null && (s.shared.lanes = 0);
        ((Yr |= o), (e.lanes = o), (e.memoizedState = d));
      }
    }
    function $p(e, t, n) {
      if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
          var r = e[t],
            s = r.callback;
          if (s !== null) {
            if (((r.callback = null), (r = n), typeof s != "function"))
              throw Error(M(191, s));
            s.call(r);
          }
        }
    }
    var Mo = {},
      rn = gr(Mo),
      co = gr(Mo),
      fo = gr(Mo);
    function Mr(e) {
      if (e === Mo) throw Error(M(174));
      return e;
    }
    function Nf(e, t) {
      switch ((ae(fo, t), ae(co, e), ae(rn, Mo), (e = t.nodeType), e)) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Cc(null, "");
          break;
        default:
          ((e = e === 8 ? t.parentNode : t),
            (t = e.namespaceURI || null),
            (e = e.tagName),
            (t = Cc(t, e)));
      }
      (ce(rn), ae(rn, t));
    }
    function qs() {
      (ce(rn), ce(co), ce(fo));
    }
    function qv(e) {
      Mr(fo.current);
      var t = Mr(rn.current),
        n = Cc(t, e.type);
      t !== n && (ae(co, e), ae(rn, n));
    }
    function Af(e) {
      co.current === e && (ce(rn), ce(co));
    }
    var ge = gr(0);
    function ol(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (
            n !== null &&
            ((n = n.dehydrated),
            n === null || n.data === "$?" || n.data === "$!")
          )
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var ju = [];
    function Of() {
      for (var e = 0; e < ju.length; e++)
        ju[e]._workInProgressVersionPrimary = null;
      ju.length = 0;
    }
    var Aa = Pn.ReactCurrentDispatcher,
      Du = Pn.ReactCurrentBatchConfig,
      Gr = 0,
      ve = null,
      Pe = null,
      _e = null,
      al = !1,
      $i = !1,
      ho = 0,
      lE = 0;
    function Ie() {
      throw Error(M(321));
    }
    function Mf(e, t) {
      if (t === null) return !1;
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Wt(e[n], t[n])) return !1;
      return !0;
    }
    function jf(e, t, n, r, s, i) {
      if (
        ((Gr = i),
        (ve = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Aa.current = e === null || e.memoizedState === null ? fE : hE),
        (e = n(r, s)),
        $i)
      ) {
        i = 0;
        do {
          if ((($i = !1), (ho = 0), 25 <= i)) throw Error(M(301));
          ((i += 1),
            (_e = Pe = null),
            (t.updateQueue = null),
            (Aa.current = pE),
            (e = n(r, s)));
        } while ($i);
      }
      if (
        ((Aa.current = ll),
        (t = Pe !== null && Pe.next !== null),
        (Gr = 0),
        (_e = Pe = ve = null),
        (al = !1),
        t)
      )
        throw Error(M(300));
      return e;
    }
    function Df() {
      var e = ho !== 0;
      return ((ho = 0), e);
    }
    function Qt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        _e === null ? (ve.memoizedState = _e = e) : (_e = _e.next = e),
        _e
      );
    }
    function Rt() {
      if (Pe === null) {
        var e = ve.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Pe.next;
      var t = _e === null ? ve.memoizedState : _e.next;
      if (t !== null) ((_e = t), (Pe = e));
      else {
        if (e === null) throw Error(M(310));
        ((Pe = e),
          (e = {
            memoizedState: Pe.memoizedState,
            baseState: Pe.baseState,
            baseQueue: Pe.baseQueue,
            queue: Pe.queue,
            next: null,
          }),
          _e === null ? (ve.memoizedState = _e = e) : (_e = _e.next = e));
      }
      return _e;
    }
    function po(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Lu(e) {
      var t = Rt(),
        n = t.queue;
      if (n === null) throw Error(M(311));
      n.lastRenderedReducer = e;
      var r = Pe,
        s = r.baseQueue,
        i = n.pending;
      if (i !== null) {
        if (s !== null) {
          var o = s.next;
          ((s.next = i.next), (i.next = o));
        }
        ((r.baseQueue = s = i), (n.pending = null));
      }
      if (s !== null) {
        ((i = s.next), (r = r.baseState));
        var a = (o = null),
          l = null,
          u = i;
        do {
          var c = u.lane;
          if ((Gr & c) === c)
            (l !== null &&
              (l = l.next =
                {
                  lane: 0,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                }),
              (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
          else {
            var d = {
              lane: c,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            };
            (l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
              (ve.lanes |= c),
              (Yr |= c));
          }
          u = u.next;
        } while (u !== null && u !== i);
        (l === null ? (o = r) : (l.next = a),
          Wt(r, t.memoizedState) || (et = !0),
          (t.memoizedState = r),
          (t.baseState = o),
          (t.baseQueue = l),
          (n.lastRenderedState = r));
      }
      if (((e = n.interleaved), e !== null)) {
        s = e;
        do ((i = s.lane), (ve.lanes |= i), (Yr |= i), (s = s.next));
        while (s !== e);
      } else s === null && (n.lanes = 0);
      return [t.memoizedState, n.dispatch];
    }
    function Iu(e) {
      var t = Rt(),
        n = t.queue;
      if (n === null) throw Error(M(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        s = n.pending,
        i = t.memoizedState;
      if (s !== null) {
        n.pending = null;
        var o = (s = s.next);
        do ((i = e(i, o.action)), (o = o.next));
        while (o !== s);
        (Wt(i, t.memoizedState) || (et = !0),
          (t.memoizedState = i),
          t.baseQueue === null && (t.baseState = i),
          (n.lastRenderedState = i));
      }
      return [i, r];
    }
    function Xv() {}
    function Zv(e, t) {
      var n = ve,
        r = Rt(),
        s = t(),
        i = !Wt(r.memoizedState, s);
      if (
        (i && ((r.memoizedState = s), (et = !0)),
        (r = r.queue),
        Lf(t0.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (_e !== null && _e.memoizedState.tag & 1))
      ) {
        if (
          ((n.flags |= 2048),
          mo(9, e0.bind(null, n, r, s, t), void 0, null),
          Ne === null)
        )
          throw Error(M(349));
        Gr & 30 || Jv(n, t, s);
      }
      return s;
    }
    function Jv(e, t, n) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = ve.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (ve.updateQueue = t),
            (t.stores = [e]))
          : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
    }
    function e0(e, t, n, r) {
      ((t.value = n), (t.getSnapshot = r), n0(t) && r0(e));
    }
    function t0(e, t, n) {
      return n(function () {
        n0(t) && r0(e);
      });
    }
    function n0(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Wt(e, n);
      } catch {
        return !0;
      }
    }
    function r0(e) {
      var t = bn(e, 1);
      t !== null && Ut(t, e, 1, -1);
    }
    function zp(e) {
      var t = Qt();
      return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: po,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = dE.bind(null, ve, e)),
        [t.memoizedState, e]
      );
    }
    function mo(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = ve.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (ve.updateQueue = t),
            (t.lastEffect = e.next = e))
          : ((n = t.lastEffect),
            n === null
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
      );
    }
    function s0() {
      return Rt().memoizedState;
    }
    function Oa(e, t, n, r) {
      var s = Qt();
      ((ve.flags |= e),
        (s.memoizedState = mo(1 | t, n, void 0, r === void 0 ? null : r)));
    }
    function Ll(e, t, n, r) {
      var s = Rt();
      r = r === void 0 ? null : r;
      var i = void 0;
      if (Pe !== null) {
        var o = Pe.memoizedState;
        if (((i = o.destroy), r !== null && Mf(r, o.deps))) {
          s.memoizedState = mo(t, n, i, r);
          return;
        }
      }
      ((ve.flags |= e), (s.memoizedState = mo(1 | t, n, i, r)));
    }
    function Bp(e, t) {
      return Oa(8390656, 8, e, t);
    }
    function Lf(e, t) {
      return Ll(2048, 8, e, t);
    }
    function i0(e, t) {
      return Ll(4, 2, e, t);
    }
    function o0(e, t) {
      return Ll(4, 4, e, t);
    }
    function a0(e, t) {
      if (typeof t == "function")
        return (
          (e = e()),
          t(e),
          function () {
            t(null);
          }
        );
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function l0(e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ll(4, 4, a0.bind(null, t, e), n)
      );
    }
    function If() {}
    function u0(e, t) {
      var n = Rt();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && Mf(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
    }
    function c0(e, t) {
      var n = Rt();
      t = t === void 0 ? null : t;
      var r = n.memoizedState;
      return r !== null && t !== null && Mf(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
    }
    function d0(e, t, n) {
      return Gr & 21
        ? (Wt(n, t) ||
            ((n = gv()), (ve.lanes |= n), (Yr |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (et = !0)),
          (e.memoizedState = n));
    }
    function uE(e, t) {
      var n = se;
      ((se = n !== 0 && 4 > n ? n : 4), e(!0));
      var r = Du.transition;
      Du.transition = {};
      try {
        (e(!1), t());
      } finally {
        ((se = n), (Du.transition = r));
      }
    }
    function f0() {
      return Rt().memoizedState;
    }
    function cE(e, t, n) {
      var r = rr(e);
      if (
        ((n = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        h0(e))
      )
        p0(t, n);
      else if (((n = Yv(e, t, n, r)), n !== null)) {
        var s = Qe();
        (Ut(n, e, r, s), m0(n, t, r));
      }
    }
    function dE(e, t, n) {
      var r = rr(e),
        s = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (h0(e)) p0(t, s);
      else {
        var i = e.alternate;
        if (
          e.lanes === 0 &&
          (i === null || i.lanes === 0) &&
          ((i = t.lastRenderedReducer), i !== null)
        )
          try {
            var o = t.lastRenderedState,
              a = i(o, n);
            if (((s.hasEagerState = !0), (s.eagerState = a), Wt(a, o))) {
              var l = t.interleaved;
              (l === null
                ? ((s.next = s), Rf(t))
                : ((s.next = l.next), (l.next = s)),
                (t.interleaved = s));
              return;
            }
          } catch {
          } finally {
          }
        ((n = Yv(e, t, s, r)),
          n !== null && ((s = Qe()), Ut(n, e, r, s), m0(n, t, r)));
      }
    }
    function h0(e) {
      var t = e.alternate;
      return e === ve || (t !== null && t === ve);
    }
    function p0(e, t) {
      $i = al = !0;
      var n = e.pending;
      (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t));
    }
    function m0(e, t, n) {
      if (n & 4194240) {
        var r = t.lanes;
        ((r &= e.pendingLanes), (n |= r), (t.lanes = n), pf(e, n));
      }
    }
    var ll = {
        readContext: kt,
        useCallback: Ie,
        useContext: Ie,
        useEffect: Ie,
        useImperativeHandle: Ie,
        useInsertionEffect: Ie,
        useLayoutEffect: Ie,
        useMemo: Ie,
        useReducer: Ie,
        useRef: Ie,
        useState: Ie,
        useDebugValue: Ie,
        useDeferredValue: Ie,
        useTransition: Ie,
        useMutableSource: Ie,
        useSyncExternalStore: Ie,
        useId: Ie,
        unstable_isNewReconciler: !1,
      },
      fE = {
        readContext: kt,
        useCallback: function (e, t) {
          return ((Qt().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: kt,
        useEffect: Bp,
        useImperativeHandle: function (e, t, n) {
          return (
            (n = n != null ? n.concat([e]) : null),
            Oa(4194308, 4, a0.bind(null, t, e), n)
          );
        },
        useLayoutEffect: function (e, t) {
          return Oa(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return Oa(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = Qt();
          return (
            (t = t === void 0 ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, n) {
          var r = Qt();
          return (
            (t = n !== void 0 ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (r.queue = e),
            (e = e.dispatch = cE.bind(null, ve, e)),
            [r.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Qt();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: zp,
        useDebugValue: If,
        useDeferredValue: function (e) {
          return (Qt().memoizedState = e);
        },
        useTransition: function () {
          var e = zp(!1),
            t = e[0];
          return ((e = uE.bind(null, e[1])), (Qt().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
          var r = ve,
            s = Qt();
          if (pe) {
            if (n === void 0) throw Error(M(407));
            n = n();
          } else {
            if (((n = t()), Ne === null)) throw Error(M(349));
            Gr & 30 || Jv(r, t, n);
          }
          s.memoizedState = n;
          var i = { value: n, getSnapshot: t };
          return (
            (s.queue = i),
            Bp(t0.bind(null, r, i, e), [e]),
            (r.flags |= 2048),
            mo(9, e0.bind(null, r, i, n, t), void 0, null),
            n
          );
        },
        useId: function () {
          var e = Qt(),
            t = Ne.identifierPrefix;
          if (pe) {
            var n = yn,
              r = gn;
            ((n = (r & ~(1 << (32 - Bt(r) - 1))).toString(32) + n),
              (t = ":" + t + "R" + n),
              (n = ho++),
              0 < n && (t += "H" + n.toString(32)),
              (t += ":"));
          } else ((n = lE++), (t = ":" + t + "r" + n.toString(32) + ":"));
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      hE = {
        readContext: kt,
        useCallback: u0,
        useContext: kt,
        useEffect: Lf,
        useImperativeHandle: l0,
        useInsertionEffect: i0,
        useLayoutEffect: o0,
        useMemo: c0,
        useReducer: Lu,
        useRef: s0,
        useState: function () {
          return Lu(po);
        },
        useDebugValue: If,
        useDeferredValue: function (e) {
          var t = Rt();
          return d0(t, Pe.memoizedState, e);
        },
        useTransition: function () {
          var e = Lu(po)[0],
            t = Rt().memoizedState;
          return [e, t];
        },
        useMutableSource: Xv,
        useSyncExternalStore: Zv,
        useId: f0,
        unstable_isNewReconciler: !1,
      },
      pE = {
        readContext: kt,
        useCallback: u0,
        useContext: kt,
        useEffect: Lf,
        useImperativeHandle: l0,
        useInsertionEffect: i0,
        useLayoutEffect: o0,
        useMemo: c0,
        useReducer: Iu,
        useRef: s0,
        useState: function () {
          return Iu(po);
        },
        useDebugValue: If,
        useDeferredValue: function (e) {
          var t = Rt();
          return Pe === null
            ? (t.memoizedState = e)
            : d0(t, Pe.memoizedState, e);
        },
        useTransition: function () {
          var e = Iu(po)[0],
            t = Rt().memoizedState;
          return [e, t];
        },
        useMutableSource: Xv,
        useSyncExternalStore: Zv,
        useId: f0,
        unstable_isNewReconciler: !1,
      };
    function Lt(e, t) {
      if (e && e.defaultProps) {
        ((t = xe({}, t)), (e = e.defaultProps));
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
      }
      return t;
    }
    function Kc(e, t, n, r) {
      ((t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : xe({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n));
    }
    var Il = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? Jr(e) === e : !1;
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Qe(),
          s = rr(e),
          i = vn(r, s);
        ((i.payload = t),
          n != null && (i.callback = n),
          (t = tr(e, i, s)),
          t !== null && (Ut(t, e, s, r), Na(t, e, s)));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Qe(),
          s = rr(e),
          i = vn(r, s);
        ((i.tag = 1),
          (i.payload = t),
          n != null && (i.callback = n),
          (t = tr(e, i, s)),
          t !== null && (Ut(t, e, s, r), Na(t, e, s)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Qe(),
          r = rr(e),
          s = vn(n, r);
        ((s.tag = 2),
          t != null && (s.callback = t),
          (t = tr(e, s, r)),
          t !== null && (Ut(t, e, r, n), Na(t, e, r)));
      },
    };
    function Up(e, t, n, r, s, i, o) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
          ? e.shouldComponentUpdate(r, i, o)
          : t.prototype && t.prototype.isPureReactComponent
            ? !oo(n, r) || !oo(s, i)
            : !0
      );
    }
    function g0(e, t, n) {
      var r = !1,
        s = ar,
        i = t.contextType;
      return (
        typeof i == "object" && i !== null
          ? (i = kt(i))
          : ((s = nt(t) ? Hr : Ue.current),
            (r = t.contextTypes),
            (i = (r = r != null) ? Gs(e, s) : ar)),
        (t = new t(n, i)),
        (e.memoizedState =
          t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Il),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = s),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
      );
    }
    function Wp(e, t, n, r) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
          t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Il.enqueueReplaceState(t, t.state, null));
    }
    function Gc(e, t, n, r) {
      var s = e.stateNode;
      ((s.props = n), (s.state = e.memoizedState), (s.refs = {}), _f(e));
      var i = t.contextType;
      (typeof i == "object" && i !== null
        ? (s.context = kt(i))
        : ((i = nt(t) ? Hr : Ue.current), (s.context = Gs(e, i))),
        (s.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == "function" && (Kc(e, t, i, n), (s.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof s.getSnapshotBeforeUpdate == "function" ||
          (typeof s.UNSAFE_componentWillMount != "function" &&
            typeof s.componentWillMount != "function") ||
          ((t = s.state),
          typeof s.componentWillMount == "function" && s.componentWillMount(),
          typeof s.UNSAFE_componentWillMount == "function" &&
            s.UNSAFE_componentWillMount(),
          t !== s.state && Il.enqueueReplaceState(s, s.state, null),
          il(e, n, s, r),
          (s.state = e.memoizedState)),
        typeof s.componentDidMount == "function" && (e.flags |= 4194308));
    }
    function Xs(e, t) {
      try {
        var n = "",
          r = t;
        do ((n += BS(r)), (r = r.return));
        while (r);
        var s = n;
      } catch (i) {
        s =
          `
Error generating stack: ` +
          i.message +
          `
` +
          i.stack;
      }
      return { value: e, source: t, stack: s, digest: null };
    }
    function Fu(e, t, n) {
      return { value: e, source: null, stack: n ?? null, digest: t ?? null };
    }
    function Yc(e, t) {
      try {
        console.error(t.value);
      } catch (n) {
        setTimeout(function () {
          throw n;
        });
      }
    }
    var mE = typeof WeakMap == "function" ? WeakMap : Map;
    function y0(e, t, n) {
      ((n = vn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
      var r = t.value;
      return (
        (n.callback = function () {
          (cl || ((cl = !0), (sd = r)), Yc(e, t));
        }),
        n
      );
    }
    function v0(e, t, n) {
      ((n = vn(-1, n)), (n.tag = 3));
      var r = e.type.getDerivedStateFromError;
      if (typeof r == "function") {
        var s = t.value;
        ((n.payload = function () {
          return r(s);
        }),
          (n.callback = function () {
            Yc(e, t);
          }));
      }
      var i = e.stateNode;
      return (
        i !== null &&
          typeof i.componentDidCatch == "function" &&
          (n.callback = function () {
            (Yc(e, t),
              typeof r != "function" &&
                (nr === null ? (nr = new Set([this])) : nr.add(this)));
            var o = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: o !== null ? o : "",
            });
          }),
        n
      );
    }
    function Hp(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new mE();
        var s = new Set();
        r.set(t, s);
      } else ((s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s)));
      s.has(n) || (s.add(n), (e = _E.bind(null, e, t, n)), t.then(e, e));
    }
    function Kp(e) {
      do {
        var t;
        if (
          ((t = e.tag === 13) &&
            ((t = e.memoizedState),
            (t = t !== null ? t.dehydrated !== null : !0)),
          t)
        )
          return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function Gp(e, t, n, r, s) {
      return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = s), e)
        : (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (n.flags |= 131072),
              (n.flags &= -52805),
              n.tag === 1 &&
                (n.alternate === null
                  ? (n.tag = 17)
                  : ((t = vn(-1, 1)), (t.tag = 2), tr(n, t, 1))),
              (n.lanes |= 1)),
          e);
    }
    var gE = Pn.ReactCurrentOwner,
      et = !1;
    function He(e, t, n, r) {
      t.child = e === null ? Gv(t, null, n, r) : Qs(t, e.child, n, r);
    }
    function Yp(e, t, n, r, s) {
      n = n.render;
      var i = t.ref;
      return (
        Os(t, s),
        (r = jf(e, t, n, r, i, s)),
        (n = Df()),
        e !== null && !et
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~s),
            Sn(e, t, s))
          : (pe && n && Sf(t), (t.flags |= 1), He(e, t, r, s), t.child)
      );
    }
    function Qp(e, t, n, r, s) {
      if (e === null) {
        var i = n.type;
        return typeof i == "function" &&
          !Hf(i) &&
          i.defaultProps === void 0 &&
          n.compare === null &&
          n.defaultProps === void 0
          ? ((t.tag = 15), (t.type = i), x0(e, t, i, r, s))
          : ((e = La(n.type, null, r, t, t.mode, s)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((i = e.child), !(e.lanes & s))) {
        var o = i.memoizedProps;
        if (
          ((n = n.compare),
          (n = n !== null ? n : oo),
          n(o, r) && e.ref === t.ref)
        )
          return Sn(e, t, s);
      }
      return (
        (t.flags |= 1),
        (e = sr(i, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function x0(e, t, n, r, s) {
      if (e !== null) {
        var i = e.memoizedProps;
        if (oo(i, r) && e.ref === t.ref)
          if (((et = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0))
            e.flags & 131072 && (et = !0);
          else return ((t.lanes = e.lanes), Sn(e, t, s));
      }
      return Qc(e, t, n, r, s);
    }
    function w0(e, t, n) {
      var r = t.pendingProps,
        s = r.children,
        i = e !== null ? e.memoizedState : null;
      if (r.mode === "hidden")
        if (!(t.mode & 1))
          ((t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            ae(Ss, at),
            (at |= n));
        else {
          if (!(n & 1073741824))
            return (
              (e = i !== null ? i.baseLanes | n : n),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null,
              }),
              (t.updateQueue = null),
              ae(Ss, at),
              (at |= e),
              null
            );
          ((t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (r = i !== null ? i.baseLanes : n),
            ae(Ss, at),
            (at |= r));
        }
      else
        (i !== null
          ? ((r = i.baseLanes | n), (t.memoizedState = null))
          : (r = n),
          ae(Ss, at),
          (at |= r));
      return (He(e, t, s, n), t.child);
    }
    function b0(e, t) {
      var n = t.ref;
      ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function Qc(e, t, n, r, s) {
      var i = nt(n) ? Hr : Ue.current;
      return (
        (i = Gs(t, i)),
        Os(t, s),
        (n = jf(e, t, n, r, i, s)),
        (r = Df()),
        e !== null && !et
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~s),
            Sn(e, t, s))
          : (pe && r && Sf(t), (t.flags |= 1), He(e, t, n, s), t.child)
      );
    }
    function qp(e, t, n, r, s) {
      if (nt(n)) {
        var i = !0;
        el(t);
      } else i = !1;
      if ((Os(t, s), t.stateNode === null))
        (Ma(e, t), g0(t, n, r), Gc(t, n, r, s), (r = !0));
      else if (e === null) {
        var o = t.stateNode,
          a = t.memoizedProps;
        o.props = a;
        var l = o.context,
          u = n.contextType;
        typeof u == "object" && u !== null
          ? (u = kt(u))
          : ((u = nt(n) ? Hr : Ue.current), (u = Gs(t, u)));
        var c = n.getDerivedStateFromProps,
          d =
            typeof c == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function";
        (d ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((a !== r || l !== u) && Wp(t, o, r, u)),
          (Vn = !1));
        var f = t.memoizedState;
        ((o.state = f),
          il(t, r, o, s),
          (l = t.memoizedState),
          a !== r || f !== l || tt.current || Vn
            ? (typeof c == "function" &&
                (Kc(t, n, c, r), (l = t.memoizedState)),
              (a = Vn || Up(t, n, a, r, f, l, u))
                ? (d ||
                    (typeof o.UNSAFE_componentWillMount != "function" &&
                      typeof o.componentWillMount != "function") ||
                    (typeof o.componentWillMount == "function" &&
                      o.componentWillMount(),
                    typeof o.UNSAFE_componentWillMount == "function" &&
                      o.UNSAFE_componentWillMount()),
                  typeof o.componentDidMount == "function" &&
                    (t.flags |= 4194308))
                : (typeof o.componentDidMount == "function" &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = l)),
              (o.props = r),
              (o.state = l),
              (o.context = u),
              (r = a))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (r = !1)));
      } else {
        ((o = t.stateNode),
          Qv(e, t),
          (a = t.memoizedProps),
          (u = t.type === t.elementType ? a : Lt(t.type, a)),
          (o.props = u),
          (d = t.pendingProps),
          (f = o.context),
          (l = n.contextType),
          typeof l == "object" && l !== null
            ? (l = kt(l))
            : ((l = nt(n) ? Hr : Ue.current), (l = Gs(t, l))));
        var h = n.getDerivedStateFromProps;
        ((c =
          typeof h == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((a !== d || f !== l) && Wp(t, o, r, l)),
          (Vn = !1),
          (f = t.memoizedState),
          (o.state = f),
          il(t, r, o, s));
        var b = t.memoizedState;
        a !== d || f !== b || tt.current || Vn
          ? (typeof h == "function" && (Kc(t, n, h, r), (b = t.memoizedState)),
            (u = Vn || Up(t, n, u, r, f, b, l) || !1)
              ? (c ||
                  (typeof o.UNSAFE_componentWillUpdate != "function" &&
                    typeof o.componentWillUpdate != "function") ||
                  (typeof o.componentWillUpdate == "function" &&
                    o.componentWillUpdate(r, b, l),
                  typeof o.UNSAFE_componentWillUpdate == "function" &&
                    o.UNSAFE_componentWillUpdate(r, b, l)),
                typeof o.componentDidUpdate == "function" && (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate == "function" &&
                  (t.flags |= 1024))
              : (typeof o.componentDidUpdate != "function" ||
                  (a === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate != "function" ||
                  (a === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = b)),
            (o.props = r),
            (o.state = b),
            (o.context = l),
            (r = u))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1));
      }
      return qc(e, t, n, r, i, s);
    }
    function qc(e, t, n, r, s, i) {
      b0(e, t);
      var o = (t.flags & 128) !== 0;
      if (!r && !o) return (s && Dp(t, n, !1), Sn(e, t, i));
      ((r = t.stateNode), (gE.current = t));
      var a =
        o && typeof n.getDerivedStateFromError != "function"
          ? null
          : r.render();
      return (
        (t.flags |= 1),
        e !== null && o
          ? ((t.child = Qs(t, e.child, null, i)), (t.child = Qs(t, null, a, i)))
          : He(e, t, a, i),
        (t.memoizedState = r.state),
        s && Dp(t, n, !0),
        t.child
      );
    }
    function S0(e) {
      var t = e.stateNode;
      (t.pendingContext
        ? jp(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && jp(e, t.context, !1),
        Nf(e, t.containerInfo));
    }
    function Xp(e, t, n, r, s) {
      return (Ys(), Ef(s), (t.flags |= 256), He(e, t, n, r), t.child);
    }
    var Xc = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Zc(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function T0(e, t, n) {
      var r = t.pendingProps,
        s = ge.current,
        i = !1,
        o = (t.flags & 128) !== 0,
        a;
      if (
        ((a = o) ||
          (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
        a
          ? ((i = !0), (t.flags &= -129))
          : (e === null || e.memoizedState !== null) && (s |= 1),
        ae(ge, s & 1),
        e === null)
      )
        return (
          Wc(t),
          (e = t.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)
            ? (t.mode & 1
                ? e.data === "$!"
                  ? (t.lanes = 8)
                  : (t.lanes = 1073741824)
                : (t.lanes = 1),
              null)
            : ((o = r.children),
              (e = r.fallback),
              i
                ? ((r = t.mode),
                  (i = t.child),
                  (o = { mode: "hidden", children: o }),
                  !(r & 1) && i !== null
                    ? ((i.childLanes = 0), (i.pendingProps = o))
                    : (i = $l(o, r, 0, null)),
                  (e = Ur(e, r, n, null)),
                  (i.return = t),
                  (e.return = t),
                  (i.sibling = e),
                  (t.child = i),
                  (t.child.memoizedState = Zc(n)),
                  (t.memoizedState = Xc),
                  e)
                : Ff(t, o))
        );
      if (
        ((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null))
      )
        return yE(e, t, o, r, a, s, n);
      if (i) {
        ((i = r.fallback), (o = t.mode), (s = e.child), (a = s.sibling));
        var l = { mode: "hidden", children: r.children };
        return (
          !(o & 1) && t.child !== s
            ? ((r = t.child),
              (r.childLanes = 0),
              (r.pendingProps = l),
              (t.deletions = null))
            : ((r = sr(s, l)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
          a !== null
            ? (i = sr(a, i))
            : ((i = Ur(i, o, n, null)), (i.flags |= 2)),
          (i.return = t),
          (r.return = t),
          (r.sibling = i),
          (t.child = r),
          (r = i),
          (i = t.child),
          (o = e.child.memoizedState),
          (o =
            o === null
              ? Zc(n)
              : {
                  baseLanes: o.baseLanes | n,
                  cachePool: null,
                  transitions: o.transitions,
                }),
          (i.memoizedState = o),
          (i.childLanes = e.childLanes & ~n),
          (t.memoizedState = Xc),
          r
        );
      }
      return (
        (i = e.child),
        (e = i.sibling),
        (r = sr(i, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
          ((n = t.deletions),
          n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
      );
    }
    function Ff(e, t) {
      return (
        (t = $l({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
      );
    }
    function oa(e, t, n, r) {
      return (
        r !== null && Ef(r),
        Qs(t, e.child, null, n),
        (e = Ff(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function yE(e, t, n, r, s, i, o) {
      if (n)
        return t.flags & 256
          ? ((t.flags &= -257), (r = Fu(Error(M(422)))), oa(e, t, o, r))
          : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((i = r.fallback),
              (s = t.mode),
              (r = $l({ mode: "visible", children: r.children }, s, 0, null)),
              (i = Ur(i, s, o, null)),
              (i.flags |= 2),
              (r.return = t),
              (i.return = t),
              (r.sibling = i),
              (t.child = r),
              t.mode & 1 && Qs(t, e.child, null, o),
              (t.child.memoizedState = Zc(o)),
              (t.memoizedState = Xc),
              i);
      if (!(t.mode & 1)) return oa(e, t, o, null);
      if (s.data === "$!") {
        if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
        return (
          (r = a),
          (i = Error(M(419))),
          (r = Fu(i, r, void 0)),
          oa(e, t, o, r)
        );
      }
      if (((a = (o & e.childLanes) !== 0), et || a)) {
        if (((r = Ne), r !== null)) {
          switch (o & -o) {
            case 4:
              s = 2;
              break;
            case 16:
              s = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              s = 32;
              break;
            case 536870912:
              s = 268435456;
              break;
            default:
              s = 0;
          }
          ((s = s & (r.suspendedLanes | o) ? 0 : s),
            s !== 0 &&
              s !== i.retryLane &&
              ((i.retryLane = s), bn(e, s), Ut(r, e, s, -1)));
        }
        return (Wf(), (r = Fu(Error(M(421)))), oa(e, t, o, r));
      }
      return s.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = NE.bind(null, e)),
          (s._reactRetry = t),
          null)
        : ((e = i.treeContext),
          (ct = er(s.nextSibling)),
          (dt = t),
          (pe = !0),
          (zt = null),
          e !== null &&
            ((bt[St++] = gn),
            (bt[St++] = yn),
            (bt[St++] = Kr),
            (gn = e.id),
            (yn = e.overflow),
            (Kr = t)),
          (t = Ff(t, r.children)),
          (t.flags |= 4096),
          t);
    }
    function Zp(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      (r !== null && (r.lanes |= t), Hc(e.return, t, n));
    }
    function Vu(e, t, n, r, s) {
      var i = e.memoizedState;
      i === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: s,
          })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = s));
    }
    function E0(e, t, n) {
      var r = t.pendingProps,
        s = r.revealOrder,
        i = r.tail;
      if ((He(e, t, r.children, n), (r = ge.current), r & 2))
        ((r = (r & 1) | 2), (t.flags |= 128));
      else {
        if (e !== null && e.flags & 128)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && Zp(e, n, t);
            else if (e.tag === 19) Zp(e, n, t);
            else if (e.child !== null) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break e;
              e = e.return;
            }
            ((e.sibling.return = e.return), (e = e.sibling));
          }
        r &= 1;
      }
      if ((ae(ge, r), !(t.mode & 1))) t.memoizedState = null;
      else
        switch (s) {
          case "forwards":
            for (n = t.child, s = null; n !== null; )
              ((e = n.alternate),
                e !== null && ol(e) === null && (s = n),
                (n = n.sibling));
            ((n = s),
              n === null
                ? ((s = t.child), (t.child = null))
                : ((s = n.sibling), (n.sibling = null)),
              Vu(t, !1, s, n, i));
            break;
          case "backwards":
            for (n = null, s = t.child, t.child = null; s !== null; ) {
              if (((e = s.alternate), e !== null && ol(e) === null)) {
                t.child = s;
                break;
              }
              ((e = s.sibling), (s.sibling = n), (n = s), (s = e));
            }
            Vu(t, !0, n, null, i);
            break;
          case "together":
            Vu(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Ma(e, t) {
      !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function Sn(e, t, n) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Yr |= t.lanes),
        !(n & t.childLanes))
      )
        return null;
      if (e !== null && t.child !== e.child) throw Error(M(153));
      if (t.child !== null) {
        for (
          e = t.child, n = sr(e, e.pendingProps), t.child = n, n.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (n = n.sibling = sr(e, e.pendingProps)),
            (n.return = t));
        n.sibling = null;
      }
      return t.child;
    }
    function vE(e, t, n) {
      switch (t.tag) {
        case 3:
          (S0(t), Ys());
          break;
        case 5:
          qv(t);
          break;
        case 1:
          nt(t.type) && el(t);
          break;
        case 4:
          Nf(t, t.stateNode.containerInfo);
          break;
        case 10:
          var r = t.type._context,
            s = t.memoizedProps.value;
          (ae(rl, r._currentValue), (r._currentValue = s));
          break;
        case 13:
          if (((r = t.memoizedState), r !== null))
            return r.dehydrated !== null
              ? (ae(ge, ge.current & 1), (t.flags |= 128), null)
              : n & t.child.childLanes
                ? T0(e, t, n)
                : (ae(ge, ge.current & 1),
                  (e = Sn(e, t, n)),
                  e !== null ? e.sibling : null);
          ae(ge, ge.current & 1);
          break;
        case 19:
          if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
            if (r) return E0(e, t, n);
            t.flags |= 128;
          }
          if (
            ((s = t.memoizedState),
            s !== null &&
              ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
            ae(ge, ge.current),
            r)
          )
            break;
          return null;
        case 22:
        case 23:
          return ((t.lanes = 0), w0(e, t, n));
      }
      return Sn(e, t, n);
    }
    var C0, Jc, P0, k0;
    C0 = function (e, t) {
      for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
          ((n.child.return = n), (n = n.child));
          continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    };
    Jc = function () {};
    P0 = function (e, t, n, r) {
      var s = e.memoizedProps;
      if (s !== r) {
        ((e = t.stateNode), Mr(rn.current));
        var i = null;
        switch (n) {
          case "input":
            ((s = bc(e, s)), (r = bc(e, r)), (i = []));
            break;
          case "select":
            ((s = xe({}, s, { value: void 0 })),
              (r = xe({}, r, { value: void 0 })),
              (i = []));
            break;
          case "textarea":
            ((s = Ec(e, s)), (r = Ec(e, r)), (i = []));
            break;
          default:
            typeof s.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Za);
        }
        Pc(n, r);
        var o;
        n = null;
        for (u in s)
          if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
            if (u === "style") {
              var a = s[u];
              for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
            } else
              u !== "dangerouslySetInnerHTML" &&
                u !== "children" &&
                u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                u !== "autoFocus" &&
                (Ji.hasOwnProperty(u)
                  ? i || (i = [])
                  : (i = i || []).push(u, null));
        for (u in r) {
          var l = r[u];
          if (
            ((a = s != null ? s[u] : void 0),
            r.hasOwnProperty(u) && l !== a && (l != null || a != null))
          )
            if (u === "style")
              if (a) {
                for (o in a)
                  !a.hasOwnProperty(o) ||
                    (l && l.hasOwnProperty(o)) ||
                    (n || (n = {}), (n[o] = ""));
                for (o in l)
                  l.hasOwnProperty(o) &&
                    a[o] !== l[o] &&
                    (n || (n = {}), (n[o] = l[o]));
              } else (n || (i || (i = []), i.push(u, n)), (n = l));
            else
              u === "dangerouslySetInnerHTML"
                ? ((l = l ? l.__html : void 0),
                  (a = a ? a.__html : void 0),
                  l != null && a !== l && (i = i || []).push(u, l))
                : u === "children"
                  ? (typeof l != "string" && typeof l != "number") ||
                    (i = i || []).push(u, "" + l)
                  : u !== "suppressContentEditableWarning" &&
                    u !== "suppressHydrationWarning" &&
                    (Ji.hasOwnProperty(u)
                      ? (l != null && u === "onScroll" && ue("scroll", e),
                        i || a === l || (i = []))
                      : (i = i || []).push(u, l));
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4);
      }
    };
    k0 = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    };
    function wi(e, t) {
      if (!pe)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
              (t.alternate !== null && (n = t), (t = t.sibling));
            n === null ? (e.tail = null) : (n.sibling = null);
            break;
          case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
              (n.alternate !== null && (r = n), (n = n.sibling));
            r === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null);
        }
    }
    function Fe(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t)
        for (var s = e.child; s !== null; )
          ((n |= s.lanes | s.childLanes),
            (r |= s.subtreeFlags & 14680064),
            (r |= s.flags & 14680064),
            (s.return = e),
            (s = s.sibling));
      else
        for (s = e.child; s !== null; )
          ((n |= s.lanes | s.childLanes),
            (r |= s.subtreeFlags),
            (r |= s.flags),
            (s.return = e),
            (s = s.sibling));
      return ((e.subtreeFlags |= r), (e.childLanes = n), t);
    }
    function xE(e, t, n) {
      var r = t.pendingProps;
      switch ((Tf(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (Fe(t), null);
        case 1:
          return (nt(t.type) && Ja(), Fe(t), null);
        case 3:
          return (
            (r = t.stateNode),
            qs(),
            ce(tt),
            ce(Ue),
            Of(),
            r.pendingContext &&
              ((r.context = r.pendingContext), (r.pendingContext = null)),
            (e === null || e.child === null) &&
              (sa(t)
                ? (t.flags |= 4)
                : e === null ||
                  (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                  ((t.flags |= 1024), zt !== null && (ad(zt), (zt = null)))),
            Jc(e, t),
            Fe(t),
            null
          );
        case 5:
          Af(t);
          var s = Mr(fo.current);
          if (((n = t.type), e !== null && t.stateNode != null))
            (P0(e, t, n, r, s),
              e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
          else {
            if (!r) {
              if (t.stateNode === null) throw Error(M(166));
              return (Fe(t), null);
            }
            if (((e = Mr(rn.current)), sa(t))) {
              ((r = t.stateNode), (n = t.type));
              var i = t.memoizedProps;
              switch (((r[en] = t), (r[uo] = i), (e = (t.mode & 1) !== 0), n)) {
                case "dialog":
                  (ue("cancel", r), ue("close", r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ue("load", r);
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < _i.length; s++) ue(_i[s], r);
                  break;
                case "source":
                  ue("error", r);
                  break;
                case "img":
                case "image":
                case "link":
                  (ue("error", r), ue("load", r));
                  break;
                case "details":
                  ue("toggle", r);
                  break;
                case "input":
                  (ap(r, i), ue("invalid", r));
                  break;
                case "select":
                  ((r._wrapperState = { wasMultiple: !!i.multiple }),
                    ue("invalid", r));
                  break;
                case "textarea":
                  (up(r, i), ue("invalid", r));
              }
              (Pc(n, i), (s = null));
              for (var o in i)
                if (i.hasOwnProperty(o)) {
                  var a = i[o];
                  o === "children"
                    ? typeof a == "string"
                      ? r.textContent !== a &&
                        (i.suppressHydrationWarning !== !0 &&
                          ra(r.textContent, a, e),
                        (s = ["children", a]))
                      : typeof a == "number" &&
                        r.textContent !== "" + a &&
                        (i.suppressHydrationWarning !== !0 &&
                          ra(r.textContent, a, e),
                        (s = ["children", "" + a]))
                    : Ji.hasOwnProperty(o) &&
                      a != null &&
                      o === "onScroll" &&
                      ue("scroll", r);
                }
              switch (n) {
                case "input":
                  (Qo(r), lp(r, i, !0));
                  break;
                case "textarea":
                  (Qo(r), cp(r));
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof i.onClick == "function" && (r.onclick = Za);
              }
              ((r = s), (t.updateQueue = r), r !== null && (t.flags |= 4));
            } else {
              ((o = s.nodeType === 9 ? s : s.ownerDocument),
                e === "http://www.w3.org/1999/xhtml" && (e = tv(n)),
                e === "http://www.w3.org/1999/xhtml"
                  ? n === "script"
                    ? ((e = o.createElement("div")),
                      (e.innerHTML = "<script><\/script>"),
                      (e = e.removeChild(e.firstChild)))
                    : typeof r.is == "string"
                      ? (e = o.createElement(n, { is: r.is }))
                      : ((e = o.createElement(n)),
                        n === "select" &&
                          ((o = e),
                          r.multiple
                            ? (o.multiple = !0)
                            : r.size && (o.size = r.size)))
                  : (e = o.createElementNS(e, n)),
                (e[en] = t),
                (e[uo] = r),
                C0(e, t, !1, !1),
                (t.stateNode = e));
              e: {
                switch (((o = kc(n, r)), n)) {
                  case "dialog":
                    (ue("cancel", e), ue("close", e), (s = r));
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    (ue("load", e), (s = r));
                    break;
                  case "video":
                  case "audio":
                    for (s = 0; s < _i.length; s++) ue(_i[s], e);
                    s = r;
                    break;
                  case "source":
                    (ue("error", e), (s = r));
                    break;
                  case "img":
                  case "image":
                  case "link":
                    (ue("error", e), ue("load", e), (s = r));
                    break;
                  case "details":
                    (ue("toggle", e), (s = r));
                    break;
                  case "input":
                    (ap(e, r), (s = bc(e, r)), ue("invalid", e));
                    break;
                  case "option":
                    s = r;
                    break;
                  case "select":
                    ((e._wrapperState = { wasMultiple: !!r.multiple }),
                      (s = xe({}, r, { value: void 0 })),
                      ue("invalid", e));
                    break;
                  case "textarea":
                    (up(e, r), (s = Ec(e, r)), ue("invalid", e));
                    break;
                  default:
                    s = r;
                }
                (Pc(n, s), (a = s));
                for (i in a)
                  if (a.hasOwnProperty(i)) {
                    var l = a[i];
                    i === "style"
                      ? sv(e, l)
                      : i === "dangerouslySetInnerHTML"
                        ? ((l = l ? l.__html : void 0), l != null && nv(e, l))
                        : i === "children"
                          ? typeof l == "string"
                            ? (n !== "textarea" || l !== "") && eo(e, l)
                            : typeof l == "number" && eo(e, "" + l)
                          : i !== "suppressContentEditableWarning" &&
                            i !== "suppressHydrationWarning" &&
                            i !== "autoFocus" &&
                            (Ji.hasOwnProperty(i)
                              ? l != null && i === "onScroll" && ue("scroll", e)
                              : l != null && lf(e, i, l, o));
                  }
                switch (n) {
                  case "input":
                    (Qo(e), lp(e, r, !1));
                    break;
                  case "textarea":
                    (Qo(e), cp(e));
                    break;
                  case "option":
                    r.value != null &&
                      e.setAttribute("value", "" + or(r.value));
                    break;
                  case "select":
                    ((e.multiple = !!r.multiple),
                      (i = r.value),
                      i != null
                        ? Rs(e, !!r.multiple, i, !1)
                        : r.defaultValue != null &&
                          Rs(e, !!r.multiple, r.defaultValue, !0));
                    break;
                  default:
                    typeof s.onClick == "function" && (e.onclick = Za);
                }
                switch (n) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    r = !!r.autoFocus;
                    break e;
                  case "img":
                    r = !0;
                    break e;
                  default:
                    r = !1;
                }
              }
              r && (t.flags |= 4);
            }
            t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
          }
          return (Fe(t), null);
        case 6:
          if (e && t.stateNode != null) k0(e, t, e.memoizedProps, r);
          else {
            if (typeof r != "string" && t.stateNode === null)
              throw Error(M(166));
            if (((n = Mr(fo.current)), Mr(rn.current), sa(t))) {
              if (
                ((r = t.stateNode),
                (n = t.memoizedProps),
                (r[en] = t),
                (i = r.nodeValue !== n) && ((e = dt), e !== null))
              )
                switch (e.tag) {
                  case 3:
                    ra(r.nodeValue, n, (e.mode & 1) !== 0);
                    break;
                  case 5:
                    e.memoizedProps.suppressHydrationWarning !== !0 &&
                      ra(r.nodeValue, n, (e.mode & 1) !== 0);
                }
              i && (t.flags |= 4);
            } else
              ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
                (r[en] = t),
                (t.stateNode = r));
          }
          return (Fe(t), null);
        case 13:
          if (
            (ce(ge),
            (r = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (pe && ct !== null && t.mode & 1 && !(t.flags & 128))
              (Hv(), Ys(), (t.flags |= 98560), (i = !1));
            else if (((i = sa(t)), r !== null && r.dehydrated !== null)) {
              if (e === null) {
                if (!i) throw Error(M(318));
                if (
                  ((i = t.memoizedState),
                  (i = i !== null ? i.dehydrated : null),
                  !i)
                )
                  throw Error(M(317));
                i[en] = t;
              } else
                (Ys(),
                  !(t.flags & 128) && (t.memoizedState = null),
                  (t.flags |= 4));
              (Fe(t), (i = !1));
            } else (zt !== null && (ad(zt), (zt = null)), (i = !0));
            if (!i) return t.flags & 65536 ? t : null;
          }
          return t.flags & 128
            ? ((t.lanes = n), t)
            : ((r = r !== null),
              r !== (e !== null && e.memoizedState !== null) &&
                r &&
                ((t.child.flags |= 8192),
                t.mode & 1 &&
                  (e === null || ge.current & 1 ? Re === 0 && (Re = 3) : Wf())),
              t.updateQueue !== null && (t.flags |= 4),
              Fe(t),
              null);
        case 4:
          return (
            qs(),
            Jc(e, t),
            e === null && ao(t.stateNode.containerInfo),
            Fe(t),
            null
          );
        case 10:
          return (kf(t.type._context), Fe(t), null);
        case 17:
          return (nt(t.type) && Ja(), Fe(t), null);
        case 19:
          if ((ce(ge), (i = t.memoizedState), i === null)) return (Fe(t), null);
          if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
            if (r) wi(i, !1);
            else {
              if (Re !== 0 || (e !== null && e.flags & 128))
                for (e = t.child; e !== null; ) {
                  if (((o = ol(e)), o !== null)) {
                    for (
                      t.flags |= 128,
                        wi(i, !1),
                        r = o.updateQueue,
                        r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                        t.subtreeFlags = 0,
                        r = n,
                        n = t.child;
                      n !== null;
                    )
                      ((i = n),
                        (e = r),
                        (i.flags &= 14680066),
                        (o = i.alternate),
                        o === null
                          ? ((i.childLanes = 0),
                            (i.lanes = e),
                            (i.child = null),
                            (i.subtreeFlags = 0),
                            (i.memoizedProps = null),
                            (i.memoizedState = null),
                            (i.updateQueue = null),
                            (i.dependencies = null),
                            (i.stateNode = null))
                          : ((i.childLanes = o.childLanes),
                            (i.lanes = o.lanes),
                            (i.child = o.child),
                            (i.subtreeFlags = 0),
                            (i.deletions = null),
                            (i.memoizedProps = o.memoizedProps),
                            (i.memoizedState = o.memoizedState),
                            (i.updateQueue = o.updateQueue),
                            (i.type = o.type),
                            (e = o.dependencies),
                            (i.dependencies =
                              e === null
                                ? null
                                : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext,
                                  })),
                        (n = n.sibling));
                    return (ae(ge, (ge.current & 1) | 2), t.child);
                  }
                  e = e.sibling;
                }
              i.tail !== null &&
                Se() > Zs &&
                ((t.flags |= 128), (r = !0), wi(i, !1), (t.lanes = 4194304));
            }
          else {
            if (!r)
              if (((e = ol(o)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (r = !0),
                  (n = e.updateQueue),
                  n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                  wi(i, !0),
                  i.tail === null &&
                    i.tailMode === "hidden" &&
                    !o.alternate &&
                    !pe)
                )
                  return (Fe(t), null);
              } else
                2 * Se() - i.renderingStartTime > Zs &&
                  n !== 1073741824 &&
                  ((t.flags |= 128), (r = !0), wi(i, !1), (t.lanes = 4194304));
            i.isBackwards
              ? ((o.sibling = t.child), (t.child = o))
              : ((n = i.last),
                n !== null ? (n.sibling = o) : (t.child = o),
                (i.last = o));
          }
          return i.tail !== null
            ? ((t = i.tail),
              (i.rendering = t),
              (i.tail = t.sibling),
              (i.renderingStartTime = Se()),
              (t.sibling = null),
              (n = ge.current),
              ae(ge, r ? (n & 1) | 2 : n & 1),
              t)
            : (Fe(t), null);
        case 22:
        case 23:
          return (
            Uf(),
            (r = t.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
            r && t.mode & 1
              ? at & 1073741824 &&
                (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : Fe(t),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(M(156, t.tag));
    }
    function wE(e, t) {
      switch ((Tf(t), t.tag)) {
        case 1:
          return (
            nt(t.type) && Ja(),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            qs(),
            ce(tt),
            ce(Ue),
            Of(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 5:
          return (Af(t), null);
        case 13:
          if (
            (ce(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(M(340));
            Ys();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (ce(ge), null);
        case 4:
          return (qs(), null);
        case 10:
          return (kf(t.type._context), null);
        case 22:
        case 23:
          return (Uf(), null);
        case 24:
          return null;
        default:
          return null;
      }
    }
    var aa = !1,
      $e = !1,
      bE = typeof WeakSet == "function" ? WeakSet : Set,
      W = null;
    function bs(e, t) {
      var n = e.ref;
      if (n !== null)
        if (typeof n == "function")
          try {
            n(null);
          } catch (r) {
            be(e, t, r);
          }
        else n.current = null;
    }
    function ed(e, t, n) {
      try {
        n();
      } catch (r) {
        be(e, t, r);
      }
    }
    var Jp = !1;
    function SE(e, t) {
      if (((Ic = Qa), (e = Ov()), bf(e))) {
        if ("selectionStart" in e)
          var n = { start: e.selectionStart, end: e.selectionEnd };
        else
          e: {
            n = ((n = e.ownerDocument) && n.defaultView) || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
              n = r.anchorNode;
              var s = r.anchorOffset,
                i = r.focusNode;
              r = r.focusOffset;
              try {
                (n.nodeType, i.nodeType);
              } catch {
                n = null;
                break e;
              }
              var o = 0,
                a = -1,
                l = -1,
                u = 0,
                c = 0,
                d = e,
                f = null;
              t: for (;;) {
                for (
                  var h;
                  d !== n || (s !== 0 && d.nodeType !== 3) || (a = o + s),
                    d !== i || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                    d.nodeType === 3 && (o += d.nodeValue.length),
                    (h = d.firstChild) !== null;
                )
                  ((f = d), (d = h));
                for (;;) {
                  if (d === e) break t;
                  if (
                    (f === n && ++u === s && (a = o),
                    f === i && ++c === r && (l = o),
                    (h = d.nextSibling) !== null)
                  )
                    break;
                  ((d = f), (f = d.parentNode));
                }
                d = h;
              }
              n = a === -1 || l === -1 ? null : { start: a, end: l };
            } else n = null;
          }
        n = n || { start: 0, end: 0 };
      } else n = null;
      for (
        Fc = { focusedElem: e, selectionRange: n }, Qa = !1, W = t;
        W !== null;
      )
        if (
          ((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
          ((e.return = t), (W = e));
        else
          for (; W !== null; ) {
            t = W;
            try {
              var b = t.alternate;
              if (t.flags & 1024)
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (b !== null) {
                      var g = b.memoizedProps,
                        w = b.memoizedState,
                        m = t.stateNode,
                        p = m.getSnapshotBeforeUpdate(
                          t.elementType === t.type ? g : Lt(t.type, g),
                          w,
                        );
                      m.__reactInternalSnapshotBeforeUpdate = p;
                    }
                    break;
                  case 3:
                    var y = t.stateNode.containerInfo;
                    y.nodeType === 1
                      ? (y.textContent = "")
                      : y.nodeType === 9 &&
                        y.documentElement &&
                        y.removeChild(y.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(M(163));
                }
            } catch (S) {
              be(t, t.return, S);
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (W = e));
              break;
            }
            W = t.return;
          }
      return ((b = Jp), (Jp = !1), b);
    }
    function zi(e, t, n) {
      var r = t.updateQueue;
      if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var s = (r = r.next);
        do {
          if ((s.tag & e) === e) {
            var i = s.destroy;
            ((s.destroy = void 0), i !== void 0 && ed(t, n, i));
          }
          s = s.next;
        } while (s !== r);
      }
    }
    function Fl(e, t) {
      if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        var n = (t = t.next);
        do {
          if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
          }
          n = n.next;
        } while (n !== t);
      }
    }
    function td(e) {
      var t = e.ref;
      if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
          case 5:
            e = n;
            break;
          default:
            e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
      }
    }
    function R0(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), R0(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
          ((t = e.stateNode),
          t !== null &&
            (delete t[en],
            delete t[uo],
            delete t[zc],
            delete t[sE],
            delete t[iE])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    function _0(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function em(e) {
      e: for (;;) {
        for (; e.sibling === null; ) {
          if (e.return === null || _0(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function nd(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode),
          t
            ? n.nodeType === 8
              ? n.parentNode.insertBefore(e, t)
              : n.insertBefore(e, t)
            : (n.nodeType === 8
                ? ((t = n.parentNode), t.insertBefore(e, n))
                : ((t = n), t.appendChild(e)),
              (n = n._reactRootContainer),
              n != null || t.onclick !== null || (t.onclick = Za)));
      else if (r !== 4 && ((e = e.child), e !== null))
        for (nd(e, t, n), e = e.sibling; e !== null; )
          (nd(e, t, n), (e = e.sibling));
    }
    function rd(e, t, n) {
      var r = e.tag;
      if (r === 5 || r === 6)
        ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
      else if (r !== 4 && ((e = e.child), e !== null))
        for (rd(e, t, n), e = e.sibling; e !== null; )
          (rd(e, t, n), (e = e.sibling));
    }
    var Ae = null,
      $t = !1;
    function Mn(e, t, n) {
      for (n = n.child; n !== null; ) (N0(e, t, n), (n = n.sibling));
    }
    function N0(e, t, n) {
      if (nn && typeof nn.onCommitFiberUnmount == "function")
        try {
          nn.onCommitFiberUnmount(Nl, n);
        } catch {}
      switch (n.tag) {
        case 5:
          $e || bs(n, t);
        case 6:
          var r = Ae,
            s = $t;
          ((Ae = null),
            Mn(e, t, n),
            (Ae = r),
            ($t = s),
            Ae !== null &&
              ($t
                ? ((e = Ae),
                  (n = n.stateNode),
                  e.nodeType === 8
                    ? e.parentNode.removeChild(n)
                    : e.removeChild(n))
                : Ae.removeChild(n.stateNode)));
          break;
        case 18:
          Ae !== null &&
            ($t
              ? ((e = Ae),
                (n = n.stateNode),
                e.nodeType === 8
                  ? Ou(e.parentNode, n)
                  : e.nodeType === 1 && Ou(e, n),
                so(e))
              : Ou(Ae, n.stateNode));
          break;
        case 4:
          ((r = Ae),
            (s = $t),
            (Ae = n.stateNode.containerInfo),
            ($t = !0),
            Mn(e, t, n),
            (Ae = r),
            ($t = s));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !$e &&
            ((r = n.updateQueue),
            r !== null && ((r = r.lastEffect), r !== null))
          ) {
            s = r = r.next;
            do {
              var i = s,
                o = i.destroy;
              ((i = i.tag),
                o !== void 0 && (i & 2 || i & 4) && ed(n, t, o),
                (s = s.next));
            } while (s !== r);
          }
          Mn(e, t, n);
          break;
        case 1:
          if (
            !$e &&
            (bs(n, t),
            (r = n.stateNode),
            typeof r.componentWillUnmount == "function")
          )
            try {
              ((r.props = n.memoizedProps),
                (r.state = n.memoizedState),
                r.componentWillUnmount());
            } catch (a) {
              be(n, t, a);
            }
          Mn(e, t, n);
          break;
        case 21:
          Mn(e, t, n);
          break;
        case 22:
          n.mode & 1
            ? (($e = (r = $e) || n.memoizedState !== null),
              Mn(e, t, n),
              ($e = r))
            : Mn(e, t, n);
          break;
        default:
          Mn(e, t, n);
      }
    }
    function tm(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        (n === null && (n = e.stateNode = new bE()),
          t.forEach(function (r) {
            var s = AE.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(s, s));
          }));
      }
    }
    function Ot(e, t) {
      var n = t.deletions;
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var s = n[r];
          try {
            var i = e,
              o = t,
              a = o;
            e: for (; a !== null; ) {
              switch (a.tag) {
                case 5:
                  ((Ae = a.stateNode), ($t = !1));
                  break e;
                case 3:
                  ((Ae = a.stateNode.containerInfo), ($t = !0));
                  break e;
                case 4:
                  ((Ae = a.stateNode.containerInfo), ($t = !0));
                  break e;
              }
              a = a.return;
            }
            if (Ae === null) throw Error(M(160));
            (N0(i, o, s), (Ae = null), ($t = !1));
            var l = s.alternate;
            (l !== null && (l.return = null), (s.return = null));
          } catch (u) {
            be(s, t, u);
          }
        }
      if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) (A0(t, e), (t = t.sibling));
    }
    function A0(e, t) {
      var n = e.alternate,
        r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((Ot(t, e), Yt(e), r & 4)) {
            try {
              (zi(3, e, e.return), Fl(3, e));
            } catch (g) {
              be(e, e.return, g);
            }
            try {
              zi(5, e, e.return);
            } catch (g) {
              be(e, e.return, g);
            }
          }
          break;
        case 1:
          (Ot(t, e), Yt(e), r & 512 && n !== null && bs(n, n.return));
          break;
        case 5:
          if (
            (Ot(t, e),
            Yt(e),
            r & 512 && n !== null && bs(n, n.return),
            e.flags & 32)
          ) {
            var s = e.stateNode;
            try {
              eo(s, "");
            } catch (g) {
              be(e, e.return, g);
            }
          }
          if (r & 4 && ((s = e.stateNode), s != null)) {
            var i = e.memoizedProps,
              o = n !== null ? n.memoizedProps : i,
              a = e.type,
              l = e.updateQueue;
            if (((e.updateQueue = null), l !== null))
              try {
                (a === "input" &&
                  i.type === "radio" &&
                  i.name != null &&
                  Jy(s, i),
                  kc(a, o));
                var u = kc(a, i);
                for (o = 0; o < l.length; o += 2) {
                  var c = l[o],
                    d = l[o + 1];
                  c === "style"
                    ? sv(s, d)
                    : c === "dangerouslySetInnerHTML"
                      ? nv(s, d)
                      : c === "children"
                        ? eo(s, d)
                        : lf(s, c, d, u);
                }
                switch (a) {
                  case "input":
                    Sc(s, i);
                    break;
                  case "textarea":
                    ev(s, i);
                    break;
                  case "select":
                    var f = s._wrapperState.wasMultiple;
                    s._wrapperState.wasMultiple = !!i.multiple;
                    var h = i.value;
                    h != null
                      ? Rs(s, !!i.multiple, h, !1)
                      : f !== !!i.multiple &&
                        (i.defaultValue != null
                          ? Rs(s, !!i.multiple, i.defaultValue, !0)
                          : Rs(s, !!i.multiple, i.multiple ? [] : "", !1));
                }
                s[uo] = i;
              } catch (g) {
                be(e, e.return, g);
              }
          }
          break;
        case 6:
          if ((Ot(t, e), Yt(e), r & 4)) {
            if (e.stateNode === null) throw Error(M(162));
            ((s = e.stateNode), (i = e.memoizedProps));
            try {
              s.nodeValue = i;
            } catch (g) {
              be(e, e.return, g);
            }
          }
          break;
        case 3:
          if (
            (Ot(t, e),
            Yt(e),
            r & 4 && n !== null && n.memoizedState.isDehydrated)
          )
            try {
              so(t.containerInfo);
            } catch (g) {
              be(e, e.return, g);
            }
          break;
        case 4:
          (Ot(t, e), Yt(e));
          break;
        case 13:
          (Ot(t, e),
            Yt(e),
            (s = e.child),
            s.flags & 8192 &&
              ((i = s.memoizedState !== null),
              (s.stateNode.isHidden = i),
              !i ||
                (s.alternate !== null && s.alternate.memoizedState !== null) ||
                (zf = Se())),
            r & 4 && tm(e));
          break;
        case 22:
          if (
            ((c = n !== null && n.memoizedState !== null),
            e.mode & 1 ? (($e = (u = $e) || c), Ot(t, e), ($e = u)) : Ot(t, e),
            Yt(e),
            r & 8192)
          ) {
            if (
              ((u = e.memoizedState !== null),
              (e.stateNode.isHidden = u) && !c && e.mode & 1)
            )
              for (W = e, c = e.child; c !== null; ) {
                for (d = W = c; W !== null; ) {
                  switch (((f = W), (h = f.child), f.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      zi(4, f, f.return);
                      break;
                    case 1:
                      bs(f, f.return);
                      var b = f.stateNode;
                      if (typeof b.componentWillUnmount == "function") {
                        ((r = f), (n = f.return));
                        try {
                          ((t = r),
                            (b.props = t.memoizedProps),
                            (b.state = t.memoizedState),
                            b.componentWillUnmount());
                        } catch (g) {
                          be(r, n, g);
                        }
                      }
                      break;
                    case 5:
                      bs(f, f.return);
                      break;
                    case 22:
                      if (f.memoizedState !== null) {
                        rm(d);
                        continue;
                      }
                  }
                  h !== null ? ((h.return = f), (W = h)) : rm(d);
                }
                c = c.sibling;
              }
            e: for (c = null, d = e; ; ) {
              if (d.tag === 5) {
                if (c === null) {
                  c = d;
                  try {
                    ((s = d.stateNode),
                      u
                        ? ((i = s.style),
                          typeof i.setProperty == "function"
                            ? i.setProperty("display", "none", "important")
                            : (i.display = "none"))
                        : ((a = d.stateNode),
                          (l = d.memoizedProps.style),
                          (o =
                            l != null && l.hasOwnProperty("display")
                              ? l.display
                              : null),
                          (a.style.display = rv("display", o))));
                  } catch (g) {
                    be(e, e.return, g);
                  }
                }
              } else if (d.tag === 6) {
                if (c === null)
                  try {
                    d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                  } catch (g) {
                    be(e, e.return, g);
                  }
              } else if (
                ((d.tag !== 22 && d.tag !== 23) ||
                  d.memoizedState === null ||
                  d === e) &&
                d.child !== null
              ) {
                ((d.child.return = d), (d = d.child));
                continue;
              }
              if (d === e) break e;
              for (; d.sibling === null; ) {
                if (d.return === null || d.return === e) break e;
                (c === d && (c = null), (d = d.return));
              }
              (c === d && (c = null),
                (d.sibling.return = d.return),
                (d = d.sibling));
            }
          }
          break;
        case 19:
          (Ot(t, e), Yt(e), r & 4 && tm(e));
          break;
        case 21:
          break;
        default:
          (Ot(t, e), Yt(e));
      }
    }
    function Yt(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          e: {
            for (var n = e.return; n !== null; ) {
              if (_0(n)) {
                var r = n;
                break e;
              }
              n = n.return;
            }
            throw Error(M(160));
          }
          switch (r.tag) {
            case 5:
              var s = r.stateNode;
              r.flags & 32 && (eo(s, ""), (r.flags &= -33));
              var i = em(e);
              rd(e, i, s);
              break;
            case 3:
            case 4:
              var o = r.stateNode.containerInfo,
                a = em(e);
              nd(e, a, o);
              break;
            default:
              throw Error(M(161));
          }
        } catch (l) {
          be(e, e.return, l);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function TE(e, t, n) {
      ((W = e), O0(e));
    }
    function O0(e, t, n) {
      for (var r = (e.mode & 1) !== 0; W !== null; ) {
        var s = W,
          i = s.child;
        if (s.tag === 22 && r) {
          var o = s.memoizedState !== null || aa;
          if (!o) {
            var a = s.alternate,
              l = (a !== null && a.memoizedState !== null) || $e;
            a = aa;
            var u = $e;
            if (((aa = o), ($e = l) && !u))
              for (W = s; W !== null; )
                ((o = W),
                  (l = o.child),
                  o.tag === 22 && o.memoizedState !== null
                    ? sm(s)
                    : l !== null
                      ? ((l.return = o), (W = l))
                      : sm(s));
            for (; i !== null; ) ((W = i), O0(i), (i = i.sibling));
            ((W = s), (aa = a), ($e = u));
          }
          nm(e);
        } else
          s.subtreeFlags & 8772 && i !== null
            ? ((i.return = s), (W = i))
            : nm(e);
      }
    }
    function nm(e) {
      for (; W !== null; ) {
        var t = W;
        if (t.flags & 8772) {
          var n = t.alternate;
          try {
            if (t.flags & 8772)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  $e || Fl(5, t);
                  break;
                case 1:
                  var r = t.stateNode;
                  if (t.flags & 4 && !$e)
                    if (n === null) r.componentDidMount();
                    else {
                      var s =
                        t.elementType === t.type
                          ? n.memoizedProps
                          : Lt(t.type, n.memoizedProps);
                      r.componentDidUpdate(
                        s,
                        n.memoizedState,
                        r.__reactInternalSnapshotBeforeUpdate,
                      );
                    }
                  var i = t.updateQueue;
                  i !== null && $p(t, i, r);
                  break;
                case 3:
                  var o = t.updateQueue;
                  if (o !== null) {
                    if (((n = null), t.child !== null))
                      switch (t.child.tag) {
                        case 5:
                          n = t.child.stateNode;
                          break;
                        case 1:
                          n = t.child.stateNode;
                      }
                    $p(t, o, n);
                  }
                  break;
                case 5:
                  var a = t.stateNode;
                  if (n === null && t.flags & 4) {
                    n = a;
                    var l = t.memoizedProps;
                    switch (t.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        l.autoFocus && n.focus();
                        break;
                      case "img":
                        l.src && (n.src = l.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (t.memoizedState === null) {
                    var u = t.alternate;
                    if (u !== null) {
                      var c = u.memoizedState;
                      if (c !== null) {
                        var d = c.dehydrated;
                        d !== null && so(d);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(M(163));
              }
            $e || (t.flags & 512 && td(t));
          } catch (f) {
            be(t, t.return, f);
          }
        }
        if (t === e) {
          W = null;
          break;
        }
        if (((n = t.sibling), n !== null)) {
          ((n.return = t.return), (W = n));
          break;
        }
        W = t.return;
      }
    }
    function rm(e) {
      for (; W !== null; ) {
        var t = W;
        if (t === e) {
          W = null;
          break;
        }
        var n = t.sibling;
        if (n !== null) {
          ((n.return = t.return), (W = n));
          break;
        }
        W = t.return;
      }
    }
    function sm(e) {
      for (; W !== null; ) {
        var t = W;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var n = t.return;
              try {
                Fl(4, t);
              } catch (l) {
                be(t, n, l);
              }
              break;
            case 1:
              var r = t.stateNode;
              if (typeof r.componentDidMount == "function") {
                var s = t.return;
                try {
                  r.componentDidMount();
                } catch (l) {
                  be(t, s, l);
                }
              }
              var i = t.return;
              try {
                td(t);
              } catch (l) {
                be(t, i, l);
              }
              break;
            case 5:
              var o = t.return;
              try {
                td(t);
              } catch (l) {
                be(t, o, l);
              }
          }
        } catch (l) {
          be(t, t.return, l);
        }
        if (t === e) {
          W = null;
          break;
        }
        var a = t.sibling;
        if (a !== null) {
          ((a.return = t.return), (W = a));
          break;
        }
        W = t.return;
      }
    }
    var EE = Math.ceil,
      ul = Pn.ReactCurrentDispatcher,
      Vf = Pn.ReactCurrentOwner,
      Ct = Pn.ReactCurrentBatchConfig,
      te = 0,
      Ne = null,
      Ee = null,
      Me = 0,
      at = 0,
      Ss = gr(0),
      Re = 0,
      go = null,
      Yr = 0,
      Vl = 0,
      $f = 0,
      Bi = null,
      Je = null,
      zf = 0,
      Zs = 1 / 0,
      hn = null,
      cl = !1,
      sd = null,
      nr = null,
      la = !1,
      Yn = null,
      dl = 0,
      Ui = 0,
      id = null,
      ja = -1,
      Da = 0;
    function Qe() {
      return te & 6 ? Se() : ja !== -1 ? ja : (ja = Se());
    }
    function rr(e) {
      return e.mode & 1
        ? te & 2 && Me !== 0
          ? Me & -Me
          : aE.transition !== null
            ? (Da === 0 && (Da = gv()), Da)
            : ((e = se),
              e !== 0 ||
                ((e = window.event), (e = e === void 0 ? 16 : Tv(e.type))),
              e)
        : 1;
    }
    function Ut(e, t, n, r) {
      if (50 < Ui) throw ((Ui = 0), (id = null), Error(M(185)));
      (No(e, n, r),
        (!(te & 2) || e !== Ne) &&
          (e === Ne && (!(te & 2) && (Vl |= n), Re === 4 && zn(e, Me)),
          rt(e, r),
          n === 1 &&
            te === 0 &&
            !(t.mode & 1) &&
            ((Zs = Se() + 500), Dl && yr())));
    }
    function rt(e, t) {
      var n = e.callbackNode;
      aT(e, t);
      var r = Ya(e, e === Ne ? Me : 0);
      if (r === 0)
        (n !== null && hp(n),
          (e.callbackNode = null),
          (e.callbackPriority = 0));
      else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && hp(n), t === 1))
          (e.tag === 0 ? oE(im.bind(null, e)) : Bv(im.bind(null, e)),
            nE(function () {
              !(te & 6) && yr();
            }),
            (n = null));
        else {
          switch (yv(r)) {
            case 1:
              n = hf;
              break;
            case 4:
              n = pv;
              break;
            case 16:
              n = Ga;
              break;
            case 536870912:
              n = mv;
              break;
            default:
              n = Ga;
          }
          n = $0(n, M0.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = n));
      }
    }
    function M0(e, t) {
      if (((ja = -1), (Da = 0), te & 6)) throw Error(M(327));
      var n = e.callbackNode;
      if (Ms() && e.callbackNode !== n) return null;
      var r = Ya(e, e === Ne ? Me : 0);
      if (r === 0) return null;
      if (r & 30 || r & e.expiredLanes || t) t = fl(e, r);
      else {
        t = r;
        var s = te;
        te |= 2;
        var i = D0();
        (Ne !== e || Me !== t) && ((hn = null), (Zs = Se() + 500), Br(e, t));
        do
          try {
            kE();
            break;
          } catch (a) {
            j0(e, a);
          }
        while (!0);
        (Pf(),
          (ul.current = i),
          (te = s),
          Ee !== null ? (t = 0) : ((Ne = null), (Me = 0), (t = Re)));
      }
      if (t !== 0) {
        if (
          (t === 2 && ((s = Oc(e)), s !== 0 && ((r = s), (t = od(e, s)))),
          t === 1)
        )
          throw ((n = go), Br(e, 0), zn(e, r), rt(e, Se()), n);
        if (t === 6) zn(e, r);
        else {
          if (
            ((s = e.current.alternate),
            !(r & 30) &&
              !CE(s) &&
              ((t = fl(e, r)),
              t === 2 && ((i = Oc(e)), i !== 0 && ((r = i), (t = od(e, i)))),
              t === 1))
          )
            throw ((n = go), Br(e, 0), zn(e, r), rt(e, Se()), n);
          switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
            case 0:
            case 1:
              throw Error(M(345));
            case 2:
              Rr(e, Je, hn);
              break;
            case 3:
              if (
                (zn(e, r),
                (r & 130023424) === r && ((t = zf + 500 - Se()), 10 < t))
              ) {
                if (Ya(e, 0) !== 0) break;
                if (((s = e.suspendedLanes), (s & r) !== r)) {
                  (Qe(), (e.pingedLanes |= e.suspendedLanes & s));
                  break;
                }
                e.timeoutHandle = $c(Rr.bind(null, e, Je, hn), t);
                break;
              }
              Rr(e, Je, hn);
              break;
            case 4:
              if ((zn(e, r), (r & 4194240) === r)) break;
              for (t = e.eventTimes, s = -1; 0 < r; ) {
                var o = 31 - Bt(r);
                ((i = 1 << o), (o = t[o]), o > s && (s = o), (r &= ~i));
              }
              if (
                ((r = s),
                (r = Se() - r),
                (r =
                  (120 > r
                    ? 120
                    : 480 > r
                      ? 480
                      : 1080 > r
                        ? 1080
                        : 1920 > r
                          ? 1920
                          : 3e3 > r
                            ? 3e3
                            : 4320 > r
                              ? 4320
                              : 1960 * EE(r / 1960)) - r),
                10 < r)
              ) {
                e.timeoutHandle = $c(Rr.bind(null, e, Je, hn), r);
                break;
              }
              Rr(e, Je, hn);
              break;
            case 5:
              Rr(e, Je, hn);
              break;
            default:
              throw Error(M(329));
          }
        }
      }
      return (rt(e, Se()), e.callbackNode === n ? M0.bind(null, e) : null);
    }
    function od(e, t) {
      var n = Bi;
      return (
        e.current.memoizedState.isDehydrated && (Br(e, t).flags |= 256),
        (e = fl(e, t)),
        e !== 2 && ((t = Je), (Je = n), t !== null && ad(t)),
        e
      );
    }
    function ad(e) {
      Je === null ? (Je = e) : Je.push.apply(Je, e);
    }
    function CE(e) {
      for (var t = e; ; ) {
        if (t.flags & 16384) {
          var n = t.updateQueue;
          if (n !== null && ((n = n.stores), n !== null))
            for (var r = 0; r < n.length; r++) {
              var s = n[r],
                i = s.getSnapshot;
              s = s.value;
              try {
                if (!Wt(i(), s)) return !1;
              } catch {
                return !1;
              }
            }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
          ((n.return = t), (t = n));
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function zn(e, t) {
      for (
        t &= ~$f,
          t &= ~Vl,
          e.suspendedLanes |= t,
          e.pingedLanes &= ~t,
          e = e.expirationTimes;
        0 < t;
      ) {
        var n = 31 - Bt(t),
          r = 1 << n;
        ((e[n] = -1), (t &= ~r));
      }
    }
    function im(e) {
      if (te & 6) throw Error(M(327));
      Ms();
      var t = Ya(e, 0);
      if (!(t & 1)) return (rt(e, Se()), null);
      var n = fl(e, t);
      if (e.tag !== 0 && n === 2) {
        var r = Oc(e);
        r !== 0 && ((t = r), (n = od(e, r)));
      }
      if (n === 1) throw ((n = go), Br(e, 0), zn(e, t), rt(e, Se()), n);
      if (n === 6) throw Error(M(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Rr(e, Je, hn),
        rt(e, Se()),
        null
      );
    }
    function Bf(e, t) {
      var n = te;
      te |= 1;
      try {
        return e(t);
      } finally {
        ((te = n), te === 0 && ((Zs = Se() + 500), Dl && yr()));
      }
    }
    function Qr(e) {
      Yn !== null && Yn.tag === 0 && !(te & 6) && Ms();
      var t = te;
      te |= 1;
      var n = Ct.transition,
        r = se;
      try {
        if (((Ct.transition = null), (se = 1), e)) return e();
      } finally {
        ((se = r), (Ct.transition = n), (te = t), !(te & 6) && yr());
      }
    }
    function Uf() {
      ((at = Ss.current), ce(Ss));
    }
    function Br(e, t) {
      ((e.finishedWork = null), (e.finishedLanes = 0));
      var n = e.timeoutHandle;
      if ((n !== -1 && ((e.timeoutHandle = -1), tE(n)), Ee !== null))
        for (n = Ee.return; n !== null; ) {
          var r = n;
          switch ((Tf(r), r.tag)) {
            case 1:
              ((r = r.type.childContextTypes), r != null && Ja());
              break;
            case 3:
              (qs(), ce(tt), ce(Ue), Of());
              break;
            case 5:
              Af(r);
              break;
            case 4:
              qs();
              break;
            case 13:
              ce(ge);
              break;
            case 19:
              ce(ge);
              break;
            case 10:
              kf(r.type._context);
              break;
            case 22:
            case 23:
              Uf();
          }
          n = n.return;
        }
      if (
        ((Ne = e),
        (Ee = e = sr(e.current, null)),
        (Me = at = t),
        (Re = 0),
        (go = null),
        ($f = Vl = Yr = 0),
        (Je = Bi = null),
        Or !== null)
      ) {
        for (t = 0; t < Or.length; t++)
          if (((n = Or[t]), (r = n.interleaved), r !== null)) {
            n.interleaved = null;
            var s = r.next,
              i = n.pending;
            if (i !== null) {
              var o = i.next;
              ((i.next = s), (r.next = o));
            }
            n.pending = r;
          }
        Or = null;
      }
      return e;
    }
    function j0(e, t) {
      do {
        var n = Ee;
        try {
          if ((Pf(), (Aa.current = ll), al)) {
            for (var r = ve.memoizedState; r !== null; ) {
              var s = r.queue;
              (s !== null && (s.pending = null), (r = r.next));
            }
            al = !1;
          }
          if (
            ((Gr = 0),
            (_e = Pe = ve = null),
            ($i = !1),
            (ho = 0),
            (Vf.current = null),
            n === null || n.return === null)
          ) {
            ((Re = 1), (go = t), (Ee = null));
            break;
          }
          e: {
            var i = e,
              o = n.return,
              a = n,
              l = t;
            if (
              ((t = Me),
              (a.flags |= 32768),
              l !== null && typeof l == "object" && typeof l.then == "function")
            ) {
              var u = l,
                c = a,
                d = c.tag;
              if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                var f = c.alternate;
                f
                  ? ((c.updateQueue = f.updateQueue),
                    (c.memoizedState = f.memoizedState),
                    (c.lanes = f.lanes))
                  : ((c.updateQueue = null), (c.memoizedState = null));
              }
              var h = Kp(o);
              if (h !== null) {
                ((h.flags &= -257),
                  Gp(h, o, a, i, t),
                  h.mode & 1 && Hp(i, u, t),
                  (t = h),
                  (l = u));
                var b = t.updateQueue;
                if (b === null) {
                  var g = new Set();
                  (g.add(l), (t.updateQueue = g));
                } else b.add(l);
                break e;
              } else {
                if (!(t & 1)) {
                  (Hp(i, u, t), Wf());
                  break e;
                }
                l = Error(M(426));
              }
            } else if (pe && a.mode & 1) {
              var w = Kp(o);
              if (w !== null) {
                (!(w.flags & 65536) && (w.flags |= 256),
                  Gp(w, o, a, i, t),
                  Ef(Xs(l, a)));
                break e;
              }
            }
            ((i = l = Xs(l, a)),
              Re !== 4 && (Re = 2),
              Bi === null ? (Bi = [i]) : Bi.push(i),
              (i = o));
            do {
              switch (i.tag) {
                case 3:
                  ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                  var m = y0(i, l, t);
                  Vp(i, m);
                  break e;
                case 1:
                  a = l;
                  var p = i.type,
                    y = i.stateNode;
                  if (
                    !(i.flags & 128) &&
                    (typeof p.getDerivedStateFromError == "function" ||
                      (y !== null &&
                        typeof y.componentDidCatch == "function" &&
                        (nr === null || !nr.has(y))))
                  ) {
                    ((i.flags |= 65536), (t &= -t), (i.lanes |= t));
                    var S = v0(i, a, t);
                    Vp(i, S);
                    break e;
                  }
              }
              i = i.return;
            } while (i !== null);
          }
          I0(n);
        } catch (T) {
          ((t = T), Ee === n && n !== null && (Ee = n = n.return));
          continue;
        }
        break;
      } while (!0);
    }
    function D0() {
      var e = ul.current;
      return ((ul.current = ll), e === null ? ll : e);
    }
    function Wf() {
      ((Re === 0 || Re === 3 || Re === 2) && (Re = 4),
        Ne === null || (!(Yr & 268435455) && !(Vl & 268435455)) || zn(Ne, Me));
    }
    function fl(e, t) {
      var n = te;
      te |= 2;
      var r = D0();
      (Ne !== e || Me !== t) && ((hn = null), Br(e, t));
      do
        try {
          PE();
          break;
        } catch (s) {
          j0(e, s);
        }
      while (!0);
      if ((Pf(), (te = n), (ul.current = r), Ee !== null)) throw Error(M(261));
      return ((Ne = null), (Me = 0), Re);
    }
    function PE() {
      for (; Ee !== null; ) L0(Ee);
    }
    function kE() {
      for (; Ee !== null && !ZS(); ) L0(Ee);
    }
    function L0(e) {
      var t = V0(e.alternate, e, at);
      ((e.memoizedProps = e.pendingProps),
        t === null ? I0(e) : (Ee = t),
        (Vf.current = null));
    }
    function I0(e) {
      var t = e;
      do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
          if (((n = wE(n, t)), n !== null)) {
            ((n.flags &= 32767), (Ee = n));
            return;
          }
          if (e !== null)
            ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
          else {
            ((Re = 6), (Ee = null));
            return;
          }
        } else if (((n = xE(n, t, at)), n !== null)) {
          Ee = n;
          return;
        }
        if (((t = t.sibling), t !== null)) {
          Ee = t;
          return;
        }
        Ee = t = e;
      } while (t !== null);
      Re === 0 && (Re = 5);
    }
    function Rr(e, t, n) {
      var r = se,
        s = Ct.transition;
      try {
        ((Ct.transition = null), (se = 1), RE(e, t, n, r));
      } finally {
        ((Ct.transition = s), (se = r));
      }
      return null;
    }
    function RE(e, t, n, r) {
      do Ms();
      while (Yn !== null);
      if (te & 6) throw Error(M(327));
      n = e.finishedWork;
      var s = e.finishedLanes;
      if (n === null) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(M(177));
      ((e.callbackNode = null), (e.callbackPriority = 0));
      var i = n.lanes | n.childLanes;
      if (
        (lT(e, i),
        e === Ne && ((Ee = Ne = null), (Me = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
          la ||
          ((la = !0),
          $0(Ga, function () {
            return (Ms(), null);
          })),
        (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
      ) {
        ((i = Ct.transition), (Ct.transition = null));
        var o = se;
        se = 1;
        var a = te;
        ((te |= 4),
          (Vf.current = null),
          SE(e, n),
          A0(n, e),
          YT(Fc),
          (Qa = !!Ic),
          (Fc = Ic = null),
          (e.current = n),
          TE(n),
          JS(),
          (te = a),
          (se = o),
          (Ct.transition = i));
      } else e.current = n;
      if (
        (la && ((la = !1), (Yn = e), (dl = s)),
        (i = e.pendingLanes),
        i === 0 && (nr = null),
        nT(n.stateNode),
        rt(e, Se()),
        t !== null)
      )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
          ((s = t[n]),
            r(s.value, { componentStack: s.stack, digest: s.digest }));
      if (cl) throw ((cl = !1), (e = sd), (sd = null), e);
      return (
        dl & 1 && e.tag !== 0 && Ms(),
        (i = e.pendingLanes),
        i & 1 ? (e === id ? Ui++ : ((Ui = 0), (id = e))) : (Ui = 0),
        yr(),
        null
      );
    }
    function Ms() {
      if (Yn !== null) {
        var e = yv(dl),
          t = Ct.transition,
          n = se;
        try {
          if (((Ct.transition = null), (se = 16 > e ? 16 : e), Yn === null))
            var r = !1;
          else {
            if (((e = Yn), (Yn = null), (dl = 0), te & 6)) throw Error(M(331));
            var s = te;
            for (te |= 4, W = e.current; W !== null; ) {
              var i = W,
                o = i.child;
              if (W.flags & 16) {
                var a = i.deletions;
                if (a !== null) {
                  for (var l = 0; l < a.length; l++) {
                    var u = a[l];
                    for (W = u; W !== null; ) {
                      var c = W;
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          zi(8, c, i);
                      }
                      var d = c.child;
                      if (d !== null) ((d.return = c), (W = d));
                      else
                        for (; W !== null; ) {
                          c = W;
                          var f = c.sibling,
                            h = c.return;
                          if ((R0(c), c === u)) {
                            W = null;
                            break;
                          }
                          if (f !== null) {
                            ((f.return = h), (W = f));
                            break;
                          }
                          W = h;
                        }
                    }
                  }
                  var b = i.alternate;
                  if (b !== null) {
                    var g = b.child;
                    if (g !== null) {
                      b.child = null;
                      do {
                        var w = g.sibling;
                        ((g.sibling = null), (g = w));
                      } while (g !== null);
                    }
                  }
                  W = i;
                }
              }
              if (i.subtreeFlags & 2064 && o !== null)
                ((o.return = i), (W = o));
              else
                e: for (; W !== null; ) {
                  if (((i = W), i.flags & 2048))
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        zi(9, i, i.return);
                    }
                  var m = i.sibling;
                  if (m !== null) {
                    ((m.return = i.return), (W = m));
                    break e;
                  }
                  W = i.return;
                }
            }
            var p = e.current;
            for (W = p; W !== null; ) {
              o = W;
              var y = o.child;
              if (o.subtreeFlags & 2064 && y !== null)
                ((y.return = o), (W = y));
              else
                e: for (o = p; W !== null; ) {
                  if (((a = W), a.flags & 2048))
                    try {
                      switch (a.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Fl(9, a);
                      }
                    } catch (T) {
                      be(a, a.return, T);
                    }
                  if (a === o) {
                    W = null;
                    break e;
                  }
                  var S = a.sibling;
                  if (S !== null) {
                    ((S.return = a.return), (W = S));
                    break e;
                  }
                  W = a.return;
                }
            }
            if (
              ((te = s),
              yr(),
              nn && typeof nn.onPostCommitFiberRoot == "function")
            )
              try {
                nn.onPostCommitFiberRoot(Nl, e);
              } catch {}
            r = !0;
          }
          return r;
        } finally {
          ((se = n), (Ct.transition = t));
        }
      }
      return !1;
    }
    function om(e, t, n) {
      ((t = Xs(n, t)),
        (t = y0(e, t, 1)),
        (e = tr(e, t, 1)),
        (t = Qe()),
        e !== null && (No(e, 1, t), rt(e, t)));
    }
    function be(e, t, n) {
      if (e.tag === 3) om(e, e, n);
      else
        for (; t !== null; ) {
          if (t.tag === 3) {
            om(t, e, n);
            break;
          } else if (t.tag === 1) {
            var r = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == "function" ||
              (typeof r.componentDidCatch == "function" &&
                (nr === null || !nr.has(r)))
            ) {
              ((e = Xs(n, e)),
                (e = v0(t, e, 1)),
                (t = tr(t, e, 1)),
                (e = Qe()),
                t !== null && (No(t, 1, e), rt(t, e)));
              break;
            }
          }
          t = t.return;
        }
    }
    function _E(e, t, n) {
      var r = e.pingCache;
      (r !== null && r.delete(t),
        (t = Qe()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Ne === e &&
          (Me & n) === n &&
          (Re === 4 || (Re === 3 && (Me & 130023424) === Me && 500 > Se() - zf)
            ? Br(e, 0)
            : ($f |= n)),
        rt(e, t));
    }
    function F0(e, t) {
      t === 0 &&
        (e.mode & 1
          ? ((t = Zo), (Zo <<= 1), !(Zo & 130023424) && (Zo = 4194304))
          : (t = 1));
      var n = Qe();
      ((e = bn(e, t)), e !== null && (No(e, t, n), rt(e, n)));
    }
    function NE(e) {
      var t = e.memoizedState,
        n = 0;
      (t !== null && (n = t.retryLane), F0(e, n));
    }
    function AE(e, t) {
      var n = 0;
      switch (e.tag) {
        case 13:
          var r = e.stateNode,
            s = e.memoizedState;
          s !== null && (n = s.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        default:
          throw Error(M(314));
      }
      (r !== null && r.delete(t), F0(e, n));
    }
    var V0;
    V0 = function (e, t, n) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || tt.current) et = !0;
        else {
          if (!(e.lanes & n) && !(t.flags & 128))
            return ((et = !1), vE(e, t, n));
          et = !!(e.flags & 131072);
        }
      else ((et = !1), pe && t.flags & 1048576 && Uv(t, nl, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var r = t.type;
          (Ma(e, t), (e = t.pendingProps));
          var s = Gs(t, Ue.current);
          (Os(t, n), (s = jf(null, t, r, e, s, n)));
          var i = Df();
          return (
            (t.flags |= 1),
            typeof s == "object" &&
            s !== null &&
            typeof s.render == "function" &&
            s.$$typeof === void 0
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                nt(r) ? ((i = !0), el(t)) : (i = !1),
                (t.memoizedState =
                  s.state !== null && s.state !== void 0 ? s.state : null),
                _f(t),
                (s.updater = Il),
                (t.stateNode = s),
                (s._reactInternals = t),
                Gc(t, r, e, n),
                (t = qc(null, t, r, !0, i, n)))
              : ((t.tag = 0),
                pe && i && Sf(t),
                He(null, t, s, n),
                (t = t.child)),
            t
          );
        case 16:
          r = t.elementType;
          e: {
            switch (
              (Ma(e, t),
              (e = t.pendingProps),
              (s = r._init),
              (r = s(r._payload)),
              (t.type = r),
              (s = t.tag = ME(r)),
              (e = Lt(r, e)),
              s)
            ) {
              case 0:
                t = Qc(null, t, r, e, n);
                break e;
              case 1:
                t = qp(null, t, r, e, n);
                break e;
              case 11:
                t = Yp(null, t, r, e, n);
                break e;
              case 14:
                t = Qp(null, t, r, Lt(r.type, e), n);
                break e;
            }
            throw Error(M(306, r, ""));
          }
          return t;
        case 0:
          return (
            (r = t.type),
            (s = t.pendingProps),
            (s = t.elementType === r ? s : Lt(r, s)),
            Qc(e, t, r, s, n)
          );
        case 1:
          return (
            (r = t.type),
            (s = t.pendingProps),
            (s = t.elementType === r ? s : Lt(r, s)),
            qp(e, t, r, s, n)
          );
        case 3:
          e: {
            if ((S0(t), e === null)) throw Error(M(387));
            ((r = t.pendingProps),
              (i = t.memoizedState),
              (s = i.element),
              Qv(e, t),
              il(t, r, null, n));
            var o = t.memoizedState;
            if (((r = o.element), i.isDehydrated))
              if (
                ((i = {
                  element: r,
                  isDehydrated: !1,
                  cache: o.cache,
                  pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                  transitions: o.transitions,
                }),
                (t.updateQueue.baseState = i),
                (t.memoizedState = i),
                t.flags & 256)
              ) {
                ((s = Xs(Error(M(423)), t)), (t = Xp(e, t, r, n, s)));
                break e;
              } else if (r !== s) {
                ((s = Xs(Error(M(424)), t)), (t = Xp(e, t, r, n, s)));
                break e;
              } else
                for (
                  ct = er(t.stateNode.containerInfo.firstChild),
                    dt = t,
                    pe = !0,
                    zt = null,
                    n = Gv(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            else {
              if ((Ys(), r === s)) {
                t = Sn(e, t, n);
                break e;
              }
              He(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            qv(t),
            e === null && Wc(t),
            (r = t.type),
            (s = t.pendingProps),
            (i = e !== null ? e.memoizedProps : null),
            (o = s.children),
            Vc(r, s) ? (o = null) : i !== null && Vc(r, i) && (t.flags |= 32),
            b0(e, t),
            He(e, t, o, n),
            t.child
          );
        case 6:
          return (e === null && Wc(t), null);
        case 13:
          return T0(e, t, n);
        case 4:
          return (
            Nf(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            e === null ? (t.child = Qs(t, null, r, n)) : He(e, t, r, n),
            t.child
          );
        case 11:
          return (
            (r = t.type),
            (s = t.pendingProps),
            (s = t.elementType === r ? s : Lt(r, s)),
            Yp(e, t, r, s, n)
          );
        case 7:
          return (He(e, t, t.pendingProps, n), t.child);
        case 8:
          return (He(e, t, t.pendingProps.children, n), t.child);
        case 12:
          return (He(e, t, t.pendingProps.children, n), t.child);
        case 10:
          e: {
            if (
              ((r = t.type._context),
              (s = t.pendingProps),
              (i = t.memoizedProps),
              (o = s.value),
              ae(rl, r._currentValue),
              (r._currentValue = o),
              i !== null)
            )
              if (Wt(i.value, o)) {
                if (i.children === s.children && !tt.current) {
                  t = Sn(e, t, n);
                  break e;
                }
              } else
                for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                  var a = i.dependencies;
                  if (a !== null) {
                    o = i.child;
                    for (var l = a.firstContext; l !== null; ) {
                      if (l.context === r) {
                        if (i.tag === 1) {
                          ((l = vn(-1, n & -n)), (l.tag = 2));
                          var u = i.updateQueue;
                          if (u !== null) {
                            u = u.shared;
                            var c = u.pending;
                            (c === null
                              ? (l.next = l)
                              : ((l.next = c.next), (c.next = l)),
                              (u.pending = l));
                          }
                        }
                        ((i.lanes |= n),
                          (l = i.alternate),
                          l !== null && (l.lanes |= n),
                          Hc(i.return, n, t),
                          (a.lanes |= n));
                        break;
                      }
                      l = l.next;
                    }
                  } else if (i.tag === 10)
                    o = i.type === t.type ? null : i.child;
                  else if (i.tag === 18) {
                    if (((o = i.return), o === null)) throw Error(M(341));
                    ((o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Hc(o, n, t),
                      (o = i.sibling));
                  } else o = i.child;
                  if (o !== null) o.return = i;
                  else
                    for (o = i; o !== null; ) {
                      if (o === t) {
                        o = null;
                        break;
                      }
                      if (((i = o.sibling), i !== null)) {
                        ((i.return = o.return), (o = i));
                        break;
                      }
                      o = o.return;
                    }
                  i = o;
                }
            (He(e, t, s.children, n), (t = t.child));
          }
          return t;
        case 9:
          return (
            (s = t.type),
            (r = t.pendingProps.children),
            Os(t, n),
            (s = kt(s)),
            (r = r(s)),
            (t.flags |= 1),
            He(e, t, r, n),
            t.child
          );
        case 14:
          return (
            (r = t.type),
            (s = Lt(r, t.pendingProps)),
            (s = Lt(r.type, s)),
            Qp(e, t, r, s, n)
          );
        case 15:
          return x0(e, t, t.type, t.pendingProps, n);
        case 17:
          return (
            (r = t.type),
            (s = t.pendingProps),
            (s = t.elementType === r ? s : Lt(r, s)),
            Ma(e, t),
            (t.tag = 1),
            nt(r) ? ((e = !0), el(t)) : (e = !1),
            Os(t, n),
            g0(t, r, s),
            Gc(t, r, s, n),
            qc(null, t, r, !0, e, n)
          );
        case 19:
          return E0(e, t, n);
        case 22:
          return w0(e, t, n);
      }
      throw Error(M(156, t.tag));
    };
    function $0(e, t) {
      return hv(e, t);
    }
    function OE(e, t, n, r) {
      ((this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function Tt(e, t, n, r) {
      return new OE(e, t, n, r);
    }
    function Hf(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function ME(e) {
      if (typeof e == "function") return Hf(e) ? 1 : 0;
      if (e != null) {
        if (((e = e.$$typeof), e === cf)) return 11;
        if (e === df) return 14;
      }
      return 2;
    }
    function sr(e, t) {
      var n = e.alternate;
      return (
        n === null
          ? ((n = Tt(e.tag, t, e.key, e.mode)),
            (n.elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      );
    }
    function La(e, t, n, r, s, i) {
      var o = 2;
      if (((r = e), typeof e == "function")) Hf(e) && (o = 1);
      else if (typeof e == "string") o = 5;
      else
        e: switch (e) {
          case fs:
            return Ur(n.children, s, i, t);
          case uf:
            ((o = 8), (s |= 8));
            break;
          case yc:
            return (
              (e = Tt(12, n, t, s | 2)),
              (e.elementType = yc),
              (e.lanes = i),
              e
            );
          case vc:
            return (
              (e = Tt(13, n, t, s)),
              (e.elementType = vc),
              (e.lanes = i),
              e
            );
          case xc:
            return (
              (e = Tt(19, n, t, s)),
              (e.elementType = xc),
              (e.lanes = i),
              e
            );
          case qy:
            return $l(n, s, i, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Yy:
                  o = 10;
                  break e;
                case Qy:
                  o = 9;
                  break e;
                case cf:
                  o = 11;
                  break e;
                case df:
                  o = 14;
                  break e;
                case Fn:
                  ((o = 16), (r = null));
                  break e;
              }
            throw Error(M(130, e == null ? e : typeof e, ""));
        }
      return (
        (t = Tt(o, n, t, s)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = i),
        t
      );
    }
    function Ur(e, t, n, r) {
      return ((e = Tt(7, e, r, t)), (e.lanes = n), e);
    }
    function $l(e, t, n, r) {
      return (
        (e = Tt(22, e, r, t)),
        (e.elementType = qy),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function $u(e, t, n) {
      return ((e = Tt(6, e, null, t)), (e.lanes = n), e);
    }
    function zu(e, t, n) {
      return (
        (t = Tt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function jE(e, t, n, r, s) {
      ((this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = bu(0)),
        (this.expirationTimes = bu(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = bu(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = s),
        (this.mutableSourceEagerHydrationData = null));
    }
    function Kf(e, t, n, r, s, i, o, a, l) {
      return (
        (e = new jE(e, t, n, a, l)),
        t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
        (i = Tt(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        _f(i),
        e
      );
    }
    function DE(e, t, n) {
      var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: ds,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n,
      };
    }
    function z0(e) {
      if (!e) return ar;
      e = e._reactInternals;
      e: {
        if (Jr(e) !== e || e.tag !== 1) throw Error(M(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (nt(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          t = t.return;
        } while (t !== null);
        throw Error(M(171));
      }
      if (e.tag === 1) {
        var n = e.type;
        if (nt(n)) return zv(e, n, t);
      }
      return t;
    }
    function B0(e, t, n, r, s, i, o, a, l) {
      return (
        (e = Kf(n, r, !0, e, s, i, o, a, l)),
        (e.context = z0(null)),
        (n = e.current),
        (r = Qe()),
        (s = rr(n)),
        (i = vn(r, s)),
        (i.callback = t ?? null),
        tr(n, i, s),
        (e.current.lanes = s),
        No(e, s, r),
        rt(e, r),
        e
      );
    }
    function zl(e, t, n, r) {
      var s = t.current,
        i = Qe(),
        o = rr(s);
      return (
        (n = z0(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = vn(i, o)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = tr(s, t, o)),
        e !== null && (Ut(e, s, o, i), Na(e, s, o)),
        o
      );
    }
    function hl(e) {
      if (((e = e.current), !e.child)) return null;
      switch (e.child.tag) {
        case 5:
          return e.child.stateNode;
        default:
          return e.child.stateNode;
      }
    }
    function am(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function Gf(e, t) {
      (am(e, t), (e = e.alternate) && am(e, t));
    }
    function LE() {
      return null;
    }
    var U0 =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            console.error(e);
          };
    function Yf(e) {
      this._internalRoot = e;
    }
    Bl.prototype.render = Yf.prototype.render = function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(M(409));
      zl(e, t, null, null);
    };
    Bl.prototype.unmount = Yf.prototype.unmount = function () {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (Qr(function () {
          zl(null, e, null, null);
        }),
          (t[wn] = null));
      }
    };
    function Bl(e) {
      this._internalRoot = e;
    }
    Bl.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = wv();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < $n.length && t !== 0 && t < $n[n].priority; n++);
        ($n.splice(n, 0, e), n === 0 && Sv(e));
      }
    };
    function Qf(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function Ul(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
      );
    }
    function lm() {}
    function IE(e, t, n, r, s) {
      if (s) {
        if (typeof r == "function") {
          var i = r;
          r = function () {
            var u = hl(o);
            i.call(u);
          };
        }
        var o = B0(t, r, e, 0, null, !1, !1, "", lm);
        return (
          (e._reactRootContainer = o),
          (e[wn] = o.current),
          ao(e.nodeType === 8 ? e.parentNode : e),
          Qr(),
          o
        );
      }
      for (; (s = e.lastChild); ) e.removeChild(s);
      if (typeof r == "function") {
        var a = r;
        r = function () {
          var u = hl(l);
          a.call(u);
        };
      }
      var l = Kf(e, 0, !1, null, null, !1, !1, "", lm);
      return (
        (e._reactRootContainer = l),
        (e[wn] = l.current),
        ao(e.nodeType === 8 ? e.parentNode : e),
        Qr(function () {
          zl(t, l, n, r);
        }),
        l
      );
    }
    function Wl(e, t, n, r, s) {
      var i = n._reactRootContainer;
      if (i) {
        var o = i;
        if (typeof s == "function") {
          var a = s;
          s = function () {
            var l = hl(o);
            a.call(l);
          };
        }
        zl(t, o, e, s);
      } else o = IE(n, t, e, s, r);
      return hl(o);
    }
    vv = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var n = Ri(t.pendingLanes);
            n !== 0 &&
              (pf(t, n | 1),
              rt(t, Se()),
              !(te & 6) && ((Zs = Se() + 500), yr()));
          }
          break;
        case 13:
          (Qr(function () {
            var r = bn(e, 1);
            if (r !== null) {
              var s = Qe();
              Ut(r, e, 1, s);
            }
          }),
            Gf(e, 1));
      }
    };
    mf = function (e) {
      if (e.tag === 13) {
        var t = bn(e, 134217728);
        if (t !== null) {
          var n = Qe();
          Ut(t, e, 134217728, n);
        }
        Gf(e, 134217728);
      }
    };
    xv = function (e) {
      if (e.tag === 13) {
        var t = rr(e),
          n = bn(e, t);
        if (n !== null) {
          var r = Qe();
          Ut(n, e, t, r);
        }
        Gf(e, t);
      }
    };
    wv = function () {
      return se;
    };
    bv = function (e, t) {
      var n = se;
      try {
        return ((se = e), t());
      } finally {
        se = n;
      }
    };
    _c = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Sc(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var s = jl(r);
                if (!s) throw Error(M(90));
                (Zy(r), Sc(r, s));
              }
            }
          }
          break;
        case "textarea":
          ev(e, n);
          break;
        case "select":
          ((t = n.value), t != null && Rs(e, !!n.multiple, t, !1));
      }
    };
    av = Bf;
    lv = Qr;
    var FE = { usingClientEntryPoint: !1, Events: [Oo, gs, jl, iv, ov, Bf] },
      bi = {
        findFiberByHostInstance: Ar,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom",
      },
      VE = {
        bundleType: bi.bundleType,
        version: bi.version,
        rendererPackageName: bi.rendererPackageName,
        rendererConfig: bi.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Pn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return ((e = dv(e)), e === null ? null : e.stateNode);
        },
        findFiberByHostInstance: bi.findFiberByHostInstance || LE,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
      };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var ua = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!ua.isDisabled && ua.supportsFiber)
        try {
          ((Nl = ua.inject(VE)), (nn = ua));
        } catch {}
    }
    mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = FE;
    mt.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Qf(t)) throw Error(M(200));
      return DE(e, t, null, n);
    };
    mt.createRoot = function (e, t) {
      if (!Qf(e)) throw Error(M(299));
      var n = !1,
        r = "",
        s = U0;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
        (t = Kf(e, 1, !1, null, null, n, !1, r, s)),
        (e[wn] = t.current),
        ao(e.nodeType === 8 ? e.parentNode : e),
        new Yf(t)
      );
    };
    mt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(M(188))
          : ((e = Object.keys(e).join(",")), Error(M(268, e)));
      return ((e = dv(t)), (e = e === null ? null : e.stateNode), e);
    };
    mt.flushSync = function (e) {
      return Qr(e);
    };
    mt.hydrate = function (e, t, n) {
      if (!Ul(t)) throw Error(M(200));
      return Wl(null, e, t, !0, n);
    };
    mt.hydrateRoot = function (e, t, n) {
      if (!Qf(e)) throw Error(M(405));
      var r = (n != null && n.hydratedSources) || null,
        s = !1,
        i = "",
        o = U0;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (s = !0),
          n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = B0(t, null, e, 1, n ?? null, s, !1, i, o)),
        (e[wn] = t.current),
        ao(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (s = n._getVersion),
            (s = s(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, s])
              : t.mutableSourceEagerHydrationData.push(n, s));
      return new Bl(t);
    };
    mt.render = function (e, t, n) {
      if (!Ul(t)) throw Error(M(200));
      return Wl(null, e, t, !1, n);
    };
    mt.unmountComponentAtNode = function (e) {
      if (!Ul(e)) throw Error(M(40));
      return e._reactRootContainer
        ? (Qr(function () {
            Wl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[wn] = null));
            });
          }),
          !0)
        : !1;
    };
    mt.unstable_batchedUpdates = Bf;
    mt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!Ul(n)) throw Error(M(200));
      if (e == null || e._reactInternals === void 0) throw Error(M(38));
      return Wl(e, t, n, !1, r);
    };
    mt.version = "18.3.1-next-f1338f8080-20240426";
    function W0() {
      if (
        !(
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
        )
      )
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(W0);
        } catch (e) {
          console.error(e);
        }
    }
    (W0(), (Wy.exports = mt));
    var jo = Wy.exports;
    const H0 = Ay(jo);
    var K0,
      um = jo;
    ((K0 = um.createRoot), um.hydrateRoot);
    const $E = 1,
      zE = 1e6;
    let Bu = 0;
    function BE() {
      return ((Bu = (Bu + 1) % Number.MAX_SAFE_INTEGER), Bu.toString());
    }
    const Uu = new Map(),
      cm = (e) => {
        if (Uu.has(e)) return;
        const t = setTimeout(() => {
          (Uu.delete(e), Wi({ type: "REMOVE_TOAST", toastId: e }));
        }, zE);
        Uu.set(e, t);
      },
      UE = (e, t) => {
        switch (t.type) {
          case "ADD_TOAST":
            return { ...e, toasts: [t.toast, ...e.toasts].slice(0, $E) };
          case "UPDATE_TOAST":
            return {
              ...e,
              toasts: e.toasts.map((n) =>
                n.id === t.toast.id ? { ...n, ...t.toast } : n,
              ),
            };
          case "DISMISS_TOAST": {
            const { toastId: n } = t;
            return (
              n
                ? cm(n)
                : e.toasts.forEach((r) => {
                    cm(r.id);
                  }),
              {
                ...e,
                toasts: e.toasts.map((r) =>
                  r.id === n || n === void 0 ? { ...r, open: !1 } : r,
                ),
              }
            );
          }
          case "REMOVE_TOAST":
            return t.toastId === void 0
              ? { ...e, toasts: [] }
              : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
        }
      },
      Ia = [];
    let Fa = { toasts: [] };
    function Wi(e) {
      ((Fa = UE(Fa, e)),
        Ia.forEach((t) => {
          t(Fa);
        }));
    }
    function WE({ ...e }) {
      const t = BE(),
        n = (s) => Wi({ type: "UPDATE_TOAST", toast: { ...s, id: t } }),
        r = () => Wi({ type: "DISMISS_TOAST", toastId: t });
      return (
        Wi({
          type: "ADD_TOAST",
          toast: {
            ...e,
            id: t,
            open: !0,
            onOpenChange: (s) => {
              s || r();
            },
          },
        }),
        { id: t, dismiss: r, update: n }
      );
    }
    function HE() {
      const [e, t] = x.useState(Fa);
      return (
        x.useEffect(
          () => (
            Ia.push(t),
            () => {
              const n = Ia.indexOf(t);
              n > -1 && Ia.splice(n, 1);
            }
          ),
          [e],
        ),
        {
          ...e,
          toast: WE,
          dismiss: (n) => Wi({ type: "DISMISS_TOAST", toastId: n }),
        }
      );
    }
    function ke(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
      return function (s) {
        if ((e == null || e(s), n === !1 || !s.defaultPrevented))
          return t == null ? void 0 : t(s);
      };
    }
    function dm(e, t) {
      if (typeof e == "function") return e(t);
      e != null && (e.current = t);
    }
    function G0(...e) {
      return (t) => {
        let n = !1;
        const r = e.map((s) => {
          const i = dm(s, t);
          return (!n && typeof i == "function" && (n = !0), i);
        });
        if (n)
          return () => {
            for (let s = 0; s < r.length; s++) {
              const i = r[s];
              typeof i == "function" ? i() : dm(e[s], null);
            }
          };
      };
    }
    function Ht(...e) {
      return x.useCallback(G0(...e), e);
    }
    function Hl(e, t = []) {
      let n = [];
      function r(i, o) {
        const a = x.createContext(o),
          l = n.length;
        n = [...n, o];
        const u = (d) => {
          var m;
          const { scope: f, children: h, ...b } = d,
            g = ((m = f == null ? void 0 : f[e]) == null ? void 0 : m[l]) || a,
            w = x.useMemo(() => b, Object.values(b));
          return v.jsx(g.Provider, { value: w, children: h });
        };
        u.displayName = i + "Provider";
        function c(d, f) {
          var g;
          const h =
              ((g = f == null ? void 0 : f[e]) == null ? void 0 : g[l]) || a,
            b = x.useContext(h);
          if (b) return b;
          if (o !== void 0) return o;
          throw new Error(`\`${d}\` must be used within \`${i}\``);
        }
        return [u, c];
      }
      const s = () => {
        const i = n.map((o) => x.createContext(o));
        return function (a) {
          const l = (a == null ? void 0 : a[e]) || i;
          return x.useMemo(
            () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
            [a, l],
          );
        };
      };
      return ((s.scopeName = e), [r, KE(s, ...t)]);
    }
    function KE(...e) {
      const t = e[0];
      if (e.length === 1) return t;
      const n = () => {
        const r = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
        return function (i) {
          const o = r.reduce((a, { useScope: l, scopeName: u }) => {
            const d = l(i)[`__scope${u}`];
            return { ...a, ...d };
          }, {});
          return x.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
        };
      };
      return ((n.scopeName = t.scopeName), n);
    }
    function ld(e) {
      const t = GE(e),
        n = x.forwardRef((r, s) => {
          const { children: i, ...o } = r,
            a = x.Children.toArray(i),
            l = a.find(QE);
          if (l) {
            const u = l.props.children,
              c = a.map((d) =>
                d === l
                  ? x.Children.count(u) > 1
                    ? x.Children.only(null)
                    : x.isValidElement(u)
                      ? u.props.children
                      : null
                  : d,
              );
            return v.jsx(t, {
              ...o,
              ref: s,
              children: x.isValidElement(u)
                ? x.cloneElement(u, void 0, c)
                : null,
            });
          }
          return v.jsx(t, { ...o, ref: s, children: i });
        });
      return ((n.displayName = `${e}.Slot`), n);
    }
    function GE(e) {
      const t = x.forwardRef((n, r) => {
        const { children: s, ...i } = n;
        if (x.isValidElement(s)) {
          const o = XE(s),
            a = qE(i, s.props);
          return (
            s.type !== x.Fragment && (a.ref = r ? G0(r, o) : o),
            x.cloneElement(s, a)
          );
        }
        return x.Children.count(s) > 1 ? x.Children.only(null) : null;
      });
      return ((t.displayName = `${e}.SlotClone`), t);
    }
    var Y0 = Symbol("radix.slottable");
    function YE(e) {
      const t = ({ children: n }) => v.jsx(v.Fragment, { children: n });
      return ((t.displayName = `${e}.Slottable`), (t.__radixId = Y0), t);
    }
    function QE(e) {
      return (
        x.isValidElement(e) &&
        typeof e.type == "function" &&
        "__radixId" in e.type &&
        e.type.__radixId === Y0
      );
    }
    function qE(e, t) {
      const n = { ...t };
      for (const r in t) {
        const s = e[r],
          i = t[r];
        /^on[A-Z]/.test(r)
          ? s && i
            ? (n[r] = (...a) => {
                const l = i(...a);
                return (s(...a), l);
              })
            : s && (n[r] = s)
          : r === "style"
            ? (n[r] = { ...s, ...i })
            : r === "className" && (n[r] = [s, i].filter(Boolean).join(" "));
      }
      return { ...e, ...n };
    }
    function XE(e) {
      var r, s;
      let t =
          (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
            ? void 0
            : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
      return n
        ? e.ref
        : ((t =
            (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
              ? void 0
              : s.get),
          (n = t && "isReactWarning" in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
    }
    function ZE(e) {
      const t = e + "CollectionProvider",
        [n, r] = Hl(t),
        [s, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
        o = (g) => {
          const { scope: w, children: m } = g,
            p = O.useRef(null),
            y = O.useRef(new Map()).current;
          return v.jsx(s, {
            scope: w,
            itemMap: y,
            collectionRef: p,
            children: m,
          });
        };
      o.displayName = t;
      const a = e + "CollectionSlot",
        l = ld(a),
        u = O.forwardRef((g, w) => {
          const { scope: m, children: p } = g,
            y = i(a, m),
            S = Ht(w, y.collectionRef);
          return v.jsx(l, { ref: S, children: p });
        });
      u.displayName = a;
      const c = e + "CollectionItemSlot",
        d = "data-radix-collection-item",
        f = ld(c),
        h = O.forwardRef((g, w) => {
          const { scope: m, children: p, ...y } = g,
            S = O.useRef(null),
            T = Ht(w, S),
            E = i(c, m);
          return (
            O.useEffect(
              () => (
                E.itemMap.set(S, { ref: S, ...y }),
                () => void E.itemMap.delete(S)
              ),
            ),
            v.jsx(f, { [d]: "", ref: T, children: p })
          );
        });
      h.displayName = c;
      function b(g) {
        const w = i(e + "CollectionConsumer", g);
        return O.useCallback(() => {
          const p = w.collectionRef.current;
          if (!p) return [];
          const y = Array.from(p.querySelectorAll(`[${d}]`));
          return Array.from(w.itemMap.values()).sort(
            (E, C) => y.indexOf(E.ref.current) - y.indexOf(C.ref.current),
          );
        }, [w.collectionRef, w.itemMap]);
      }
      return [{ Provider: o, Slot: u, ItemSlot: h }, b, r];
    }
    var JE = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "select",
        "span",
        "svg",
        "ul",
      ],
      it = JE.reduce((e, t) => {
        const n = ld(`Primitive.${t}`),
          r = x.forwardRef((s, i) => {
            const { asChild: o, ...a } = s,
              l = o ? n : t;
            return (
              typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
              v.jsx(l, { ...a, ref: i })
            );
          });
        return ((r.displayName = `Primitive.${t}`), { ...e, [t]: r });
      }, {});
    function Q0(e, t) {
      e && jo.flushSync(() => e.dispatchEvent(t));
    }
    function lr(e) {
      const t = x.useRef(e);
      return (
        x.useEffect(() => {
          t.current = e;
        }),
        x.useMemo(
          () =>
            (...n) => {
              var r;
              return (r = t.current) == null ? void 0 : r.call(t, ...n);
            },
          [],
        )
      );
    }
    function eC(e, t = globalThis == null ? void 0 : globalThis.document) {
      const n = lr(e);
      x.useEffect(() => {
        const r = (s) => {
          s.key === "Escape" && n(s);
        };
        return (
          t.addEventListener("keydown", r, { capture: !0 }),
          () => t.removeEventListener("keydown", r, { capture: !0 })
        );
      }, [n, t]);
    }
    var tC = "DismissableLayer",
      ud = "dismissableLayer.update",
      nC = "dismissableLayer.pointerDownOutside",
      rC = "dismissableLayer.focusOutside",
      fm,
      q0 = x.createContext({
        layers: new Set(),
        layersWithOutsidePointerEventsDisabled: new Set(),
        branches: new Set(),
      }),
      qf = x.forwardRef((e, t) => {
        const {
            disableOutsidePointerEvents: n = !1,
            onEscapeKeyDown: r,
            onPointerDownOutside: s,
            onFocusOutside: i,
            onInteractOutside: o,
            onDismiss: a,
            ...l
          } = e,
          u = x.useContext(q0),
          [c, d] = x.useState(null),
          f =
            (c == null ? void 0 : c.ownerDocument) ??
            (globalThis == null ? void 0 : globalThis.document),
          [, h] = x.useState({}),
          b = Ht(t, (C) => d(C)),
          g = Array.from(u.layers),
          [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
          m = g.indexOf(w),
          p = c ? g.indexOf(c) : -1,
          y = u.layersWithOutsidePointerEventsDisabled.size > 0,
          S = p >= m,
          T = iC((C) => {
            const P = C.target,
              R = [...u.branches].some((k) => k.contains(P));
            !S ||
              R ||
              (s == null || s(C),
              o == null || o(C),
              C.defaultPrevented || a == null || a());
          }, f),
          E = oC((C) => {
            const P = C.target;
            [...u.branches].some((k) => k.contains(P)) ||
              (i == null || i(C),
              o == null || o(C),
              C.defaultPrevented || a == null || a());
          }, f);
        return (
          eC((C) => {
            p === u.layers.size - 1 &&
              (r == null || r(C),
              !C.defaultPrevented && a && (C.preventDefault(), a()));
          }, f),
          x.useEffect(() => {
            if (c)
              return (
                n &&
                  (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                    ((fm = f.body.style.pointerEvents),
                    (f.body.style.pointerEvents = "none")),
                  u.layersWithOutsidePointerEventsDisabled.add(c)),
                u.layers.add(c),
                hm(),
                () => {
                  n &&
                    u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                    (f.body.style.pointerEvents = fm);
                }
              );
          }, [c, f, n, u]),
          x.useEffect(
            () => () => {
              c &&
                (u.layers.delete(c),
                u.layersWithOutsidePointerEventsDisabled.delete(c),
                hm());
            },
            [c, u],
          ),
          x.useEffect(() => {
            const C = () => h({});
            return (
              document.addEventListener(ud, C),
              () => document.removeEventListener(ud, C)
            );
          }, []),
          v.jsx(it.div, {
            ...l,
            ref: b,
            style: {
              pointerEvents: y ? (S ? "auto" : "none") : void 0,
              ...e.style,
            },
            onFocusCapture: ke(e.onFocusCapture, E.onFocusCapture),
            onBlurCapture: ke(e.onBlurCapture, E.onBlurCapture),
            onPointerDownCapture: ke(
              e.onPointerDownCapture,
              T.onPointerDownCapture,
            ),
          })
        );
      });
    qf.displayName = tC;
    var sC = "DismissableLayerBranch",
      X0 = x.forwardRef((e, t) => {
        const n = x.useContext(q0),
          r = x.useRef(null),
          s = Ht(t, r);
        return (
          x.useEffect(() => {
            const i = r.current;
            if (i)
              return (
                n.branches.add(i),
                () => {
                  n.branches.delete(i);
                }
              );
          }, [n.branches]),
          v.jsx(it.div, { ...e, ref: s })
        );
      });
    X0.displayName = sC;
    function iC(e, t = globalThis == null ? void 0 : globalThis.document) {
      const n = lr(e),
        r = x.useRef(!1),
        s = x.useRef(() => {});
      return (
        x.useEffect(() => {
          const i = (a) => {
              if (a.target && !r.current) {
                let l = function () {
                  Z0(nC, n, u, { discrete: !0 });
                };
                const u = { originalEvent: a };
                a.pointerType === "touch"
                  ? (t.removeEventListener("click", s.current),
                    (s.current = l),
                    t.addEventListener("click", s.current, { once: !0 }))
                  : l();
              } else t.removeEventListener("click", s.current);
              r.current = !1;
            },
            o = window.setTimeout(() => {
              t.addEventListener("pointerdown", i);
            }, 0);
          return () => {
            (window.clearTimeout(o),
              t.removeEventListener("pointerdown", i),
              t.removeEventListener("click", s.current));
          };
        }, [t, n]),
        { onPointerDownCapture: () => (r.current = !0) }
      );
    }
    function oC(e, t = globalThis == null ? void 0 : globalThis.document) {
      const n = lr(e),
        r = x.useRef(!1);
      return (
        x.useEffect(() => {
          const s = (i) => {
            i.target &&
              !r.current &&
              Z0(rC, n, { originalEvent: i }, { discrete: !1 });
          };
          return (
            t.addEventListener("focusin", s),
            () => t.removeEventListener("focusin", s)
          );
        }, [t, n]),
        {
          onFocusCapture: () => (r.current = !0),
          onBlurCapture: () => (r.current = !1),
        }
      );
    }
    function hm() {
      const e = new CustomEvent(ud);
      document.dispatchEvent(e);
    }
    function Z0(e, t, n, { discrete: r }) {
      const s = n.originalEvent.target,
        i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
      (t && s.addEventListener(e, t, { once: !0 }),
        r ? Q0(s, i) : s.dispatchEvent(i));
    }
    var aC = qf,
      lC = X0,
      ur =
        globalThis != null && globalThis.document
          ? x.useLayoutEffect
          : () => {},
      uC = "Portal",
      J0 = x.forwardRef((e, t) => {
        var a;
        const { container: n, ...r } = e,
          [s, i] = x.useState(!1);
        ur(() => i(!0), []);
        const o =
          n ||
          (s &&
            ((a = globalThis == null ? void 0 : globalThis.document) == null
              ? void 0
              : a.body));
        return o ? H0.createPortal(v.jsx(it.div, { ...r, ref: t }), o) : null;
      });
    J0.displayName = uC;
    function cC(e, t) {
      return x.useReducer((n, r) => t[n][r] ?? n, e);
    }
    var Xf = (e) => {
      const { present: t, children: n } = e,
        r = dC(t),
        s =
          typeof n == "function"
            ? n({ present: r.isPresent })
            : x.Children.only(n),
        i = Ht(r.ref, fC(s));
      return typeof n == "function" || r.isPresent
        ? x.cloneElement(s, { ref: i })
        : null;
    };
    Xf.displayName = "Presence";
    function dC(e) {
      const [t, n] = x.useState(),
        r = x.useRef(null),
        s = x.useRef(e),
        i = x.useRef("none"),
        o = e ? "mounted" : "unmounted",
        [a, l] = cC(o, {
          mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
          unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
          unmounted: { MOUNT: "mounted" },
        });
      return (
        x.useEffect(() => {
          const u = ca(r.current);
          i.current = a === "mounted" ? u : "none";
        }, [a]),
        ur(() => {
          const u = r.current,
            c = s.current;
          if (c !== e) {
            const f = i.current,
              h = ca(u);
            (e
              ? l("MOUNT")
              : h === "none" || (u == null ? void 0 : u.display) === "none"
                ? l("UNMOUNT")
                : l(c && f !== h ? "ANIMATION_OUT" : "UNMOUNT"),
              (s.current = e));
          }
        }, [e, l]),
        ur(() => {
          if (t) {
            let u;
            const c = t.ownerDocument.defaultView ?? window,
              d = (h) => {
                const g = ca(r.current).includes(h.animationName);
                if (h.target === t && g && (l("ANIMATION_END"), !s.current)) {
                  const w = t.style.animationFillMode;
                  ((t.style.animationFillMode = "forwards"),
                    (u = c.setTimeout(() => {
                      t.style.animationFillMode === "forwards" &&
                        (t.style.animationFillMode = w);
                    })));
                }
              },
              f = (h) => {
                h.target === t && (i.current = ca(r.current));
              };
            return (
              t.addEventListener("animationstart", f),
              t.addEventListener("animationcancel", d),
              t.addEventListener("animationend", d),
              () => {
                (c.clearTimeout(u),
                  t.removeEventListener("animationstart", f),
                  t.removeEventListener("animationcancel", d),
                  t.removeEventListener("animationend", d));
              }
            );
          } else l("ANIMATION_END");
        }, [t, l]),
        {
          isPresent: ["mounted", "unmountSuspended"].includes(a),
          ref: x.useCallback((u) => {
            ((r.current = u ? getComputedStyle(u) : null), n(u));
          }, []),
        }
      );
    }
    function ca(e) {
      return (e == null ? void 0 : e.animationName) || "none";
    }
    function fC(e) {
      var r, s;
      let t =
          (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
            ? void 0
            : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
      return n
        ? e.ref
        : ((t =
            (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
              ? void 0
              : s.get),
          (n = t && "isReactWarning" in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
    }
    var hC = By[" useInsertionEffect ".trim().toString()] || ur;
    function pC({
      prop: e,
      defaultProp: t,
      onChange: n = () => {},
      caller: r,
    }) {
      const [s, i, o] = mC({ defaultProp: t, onChange: n }),
        a = e !== void 0,
        l = a ? e : s;
      {
        const c = x.useRef(e !== void 0);
        x.useEffect(() => {
          const d = c.current;
          (d !== a &&
            console.warn(
              `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
            ),
            (c.current = a));
        }, [a, r]);
      }
      const u = x.useCallback(
        (c) => {
          var d;
          if (a) {
            const f = gC(c) ? c(e) : c;
            f !== e && ((d = o.current) == null || d.call(o, f));
          } else i(c);
        },
        [a, e, i, o],
      );
      return [l, u];
    }
    function mC({ defaultProp: e, onChange: t }) {
      const [n, r] = x.useState(e),
        s = x.useRef(n),
        i = x.useRef(t);
      return (
        hC(() => {
          i.current = t;
        }, [t]),
        x.useEffect(() => {
          var o;
          s.current !== n &&
            ((o = i.current) == null || o.call(i, n), (s.current = n));
        }, [n, s]),
        [n, r, i]
      );
    }
    function gC(e) {
      return typeof e == "function";
    }
    var yC = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
      }),
      vC = "VisuallyHidden",
      Kl = x.forwardRef((e, t) =>
        v.jsx(it.span, { ...e, ref: t, style: { ...yC, ...e.style } }),
      );
    Kl.displayName = vC;
    var xC = Kl,
      Zf = "ToastProvider",
      [Jf, wC, bC] = ZE("Toast"),
      [ex, JD] = Hl("Toast", [bC]),
      [SC, Gl] = ex(Zf),
      tx = (e) => {
        const {
            __scopeToast: t,
            label: n = "Notification",
            duration: r = 5e3,
            swipeDirection: s = "right",
            swipeThreshold: i = 50,
            children: o,
          } = e,
          [a, l] = x.useState(null),
          [u, c] = x.useState(0),
          d = x.useRef(!1),
          f = x.useRef(!1);
        return (
          n.trim() ||
            console.error(
              `Invalid prop \`label\` supplied to \`${Zf}\`. Expected non-empty \`string\`.`,
            ),
          v.jsx(Jf.Provider, {
            scope: t,
            children: v.jsx(SC, {
              scope: t,
              label: n,
              duration: r,
              swipeDirection: s,
              swipeThreshold: i,
              toastCount: u,
              viewport: a,
              onViewportChange: l,
              onToastAdd: x.useCallback(() => c((h) => h + 1), []),
              onToastRemove: x.useCallback(() => c((h) => h - 1), []),
              isFocusedToastEscapeKeyDownRef: d,
              isClosePausedRef: f,
              children: o,
            }),
          })
        );
      };
    tx.displayName = Zf;
    var nx = "ToastViewport",
      TC = ["F8"],
      cd = "toast.viewportPause",
      dd = "toast.viewportResume",
      rx = x.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            hotkey: r = TC,
            label: s = "Notifications ({hotkey})",
            ...i
          } = e,
          o = Gl(nx, n),
          a = wC(n),
          l = x.useRef(null),
          u = x.useRef(null),
          c = x.useRef(null),
          d = x.useRef(null),
          f = Ht(t, d, o.onViewportChange),
          h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
          b = o.toastCount > 0;
        (x.useEffect(() => {
          const w = (m) => {
            var y;
            r.length !== 0 &&
              r.every((S) => m[S] || m.code === S) &&
              ((y = d.current) == null || y.focus());
          };
          return (
            document.addEventListener("keydown", w),
            () => document.removeEventListener("keydown", w)
          );
        }, [r]),
          x.useEffect(() => {
            const w = l.current,
              m = d.current;
            if (b && w && m) {
              const p = () => {
                  if (!o.isClosePausedRef.current) {
                    const E = new CustomEvent(cd);
                    (m.dispatchEvent(E), (o.isClosePausedRef.current = !0));
                  }
                },
                y = () => {
                  if (o.isClosePausedRef.current) {
                    const E = new CustomEvent(dd);
                    (m.dispatchEvent(E), (o.isClosePausedRef.current = !1));
                  }
                },
                S = (E) => {
                  !w.contains(E.relatedTarget) && y();
                },
                T = () => {
                  w.contains(document.activeElement) || y();
                };
              return (
                w.addEventListener("focusin", p),
                w.addEventListener("focusout", S),
                w.addEventListener("pointermove", p),
                w.addEventListener("pointerleave", T),
                window.addEventListener("blur", p),
                window.addEventListener("focus", y),
                () => {
                  (w.removeEventListener("focusin", p),
                    w.removeEventListener("focusout", S),
                    w.removeEventListener("pointermove", p),
                    w.removeEventListener("pointerleave", T),
                    window.removeEventListener("blur", p),
                    window.removeEventListener("focus", y));
                }
              );
            }
          }, [b, o.isClosePausedRef]));
        const g = x.useCallback(
          ({ tabbingDirection: w }) => {
            const p = a().map((y) => {
              const S = y.ref.current,
                T = [S, ...LC(S)];
              return w === "forwards" ? T : T.reverse();
            });
            return (w === "forwards" ? p.reverse() : p).flat();
          },
          [a],
        );
        return (
          x.useEffect(() => {
            const w = d.current;
            if (w) {
              const m = (p) => {
                var T, E, C;
                const y = p.altKey || p.ctrlKey || p.metaKey;
                if (p.key === "Tab" && !y) {
                  const P = document.activeElement,
                    R = p.shiftKey;
                  if (p.target === w && R) {
                    (T = u.current) == null || T.focus();
                    return;
                  }
                  const L = g({
                      tabbingDirection: R ? "backwards" : "forwards",
                    }),
                    Y = L.findIndex((j) => j === P);
                  Wu(L.slice(Y + 1))
                    ? p.preventDefault()
                    : R
                      ? (E = u.current) == null || E.focus()
                      : (C = c.current) == null || C.focus();
                }
              };
              return (
                w.addEventListener("keydown", m),
                () => w.removeEventListener("keydown", m)
              );
            }
          }, [a, g]),
          v.jsxs(lC, {
            ref: l,
            role: "region",
            "aria-label": s.replace("{hotkey}", h),
            tabIndex: -1,
            style: { pointerEvents: b ? void 0 : "none" },
            children: [
              b &&
                v.jsx(fd, {
                  ref: u,
                  onFocusFromOutsideViewport: () => {
                    const w = g({ tabbingDirection: "forwards" });
                    Wu(w);
                  },
                }),
              v.jsx(Jf.Slot, {
                scope: n,
                children: v.jsx(it.ol, { tabIndex: -1, ...i, ref: f }),
              }),
              b &&
                v.jsx(fd, {
                  ref: c,
                  onFocusFromOutsideViewport: () => {
                    const w = g({ tabbingDirection: "backwards" });
                    Wu(w);
                  },
                }),
            ],
          })
        );
      });
    rx.displayName = nx;
    var sx = "ToastFocusProxy",
      fd = x.forwardRef((e, t) => {
        const { __scopeToast: n, onFocusFromOutsideViewport: r, ...s } = e,
          i = Gl(sx, n);
        return v.jsx(Kl, {
          "aria-hidden": !0,
          tabIndex: 0,
          ...s,
          ref: t,
          style: { position: "fixed" },
          onFocus: (o) => {
            var u;
            const a = o.relatedTarget;
            !((u = i.viewport) != null && u.contains(a)) && r();
          },
        });
      });
    fd.displayName = sx;
    var Do = "Toast",
      EC = "toast.swipeStart",
      CC = "toast.swipeMove",
      PC = "toast.swipeCancel",
      kC = "toast.swipeEnd",
      ix = x.forwardRef((e, t) => {
        const {
            forceMount: n,
            open: r,
            defaultOpen: s,
            onOpenChange: i,
            ...o
          } = e,
          [a, l] = pC({
            prop: r,
            defaultProp: s ?? !0,
            onChange: i,
            caller: Do,
          });
        return v.jsx(Xf, {
          present: n || a,
          children: v.jsx(NC, {
            open: a,
            ...o,
            ref: t,
            onClose: () => l(!1),
            onPause: lr(e.onPause),
            onResume: lr(e.onResume),
            onSwipeStart: ke(e.onSwipeStart, (u) => {
              u.currentTarget.setAttribute("data-swipe", "start");
            }),
            onSwipeMove: ke(e.onSwipeMove, (u) => {
              const { x: c, y: d } = u.detail.delta;
              (u.currentTarget.setAttribute("data-swipe", "move"),
                u.currentTarget.style.setProperty(
                  "--radix-toast-swipe-move-x",
                  `${c}px`,
                ),
                u.currentTarget.style.setProperty(
                  "--radix-toast-swipe-move-y",
                  `${d}px`,
                ));
            }),
            onSwipeCancel: ke(e.onSwipeCancel, (u) => {
              (u.currentTarget.setAttribute("data-swipe", "cancel"),
                u.currentTarget.style.removeProperty(
                  "--radix-toast-swipe-move-x",
                ),
                u.currentTarget.style.removeProperty(
                  "--radix-toast-swipe-move-y",
                ),
                u.currentTarget.style.removeProperty(
                  "--radix-toast-swipe-end-x",
                ),
                u.currentTarget.style.removeProperty(
                  "--radix-toast-swipe-end-y",
                ));
            }),
            onSwipeEnd: ke(e.onSwipeEnd, (u) => {
              const { x: c, y: d } = u.detail.delta;
              (u.currentTarget.setAttribute("data-swipe", "end"),
                u.currentTarget.style.removeProperty(
                  "--radix-toast-swipe-move-x",
                ),
                u.currentTarget.style.removeProperty(
                  "--radix-toast-swipe-move-y",
                ),
                u.currentTarget.style.setProperty(
                  "--radix-toast-swipe-end-x",
                  `${c}px`,
                ),
                u.currentTarget.style.setProperty(
                  "--radix-toast-swipe-end-y",
                  `${d}px`,
                ),
                l(!1));
            }),
          }),
        });
      });
    ix.displayName = Do;
    var [RC, _C] = ex(Do, { onClose() {} }),
      NC = x.forwardRef((e, t) => {
        const {
            __scopeToast: n,
            type: r = "foreground",
            duration: s,
            open: i,
            onClose: o,
            onEscapeKeyDown: a,
            onPause: l,
            onResume: u,
            onSwipeStart: c,
            onSwipeMove: d,
            onSwipeCancel: f,
            onSwipeEnd: h,
            ...b
          } = e,
          g = Gl(Do, n),
          [w, m] = x.useState(null),
          p = Ht(t, (j) => m(j)),
          y = x.useRef(null),
          S = x.useRef(null),
          T = s || g.duration,
          E = x.useRef(0),
          C = x.useRef(T),
          P = x.useRef(0),
          { onToastAdd: R, onToastRemove: k } = g,
          $ = lr(() => {
            var D;
            ((w == null ? void 0 : w.contains(document.activeElement)) &&
              ((D = g.viewport) == null || D.focus()),
              o());
          }),
          L = x.useCallback(
            (j) => {
              !j ||
                j === 1 / 0 ||
                (window.clearTimeout(P.current),
                (E.current = new Date().getTime()),
                (P.current = window.setTimeout($, j)));
            },
            [$],
          );
        (x.useEffect(() => {
          const j = g.viewport;
          if (j) {
            const D = () => {
                (L(C.current), u == null || u());
              },
              z = () => {
                const B = new Date().getTime() - E.current;
                ((C.current = C.current - B),
                  window.clearTimeout(P.current),
                  l == null || l());
              };
            return (
              j.addEventListener(cd, z),
              j.addEventListener(dd, D),
              () => {
                (j.removeEventListener(cd, z), j.removeEventListener(dd, D));
              }
            );
          }
        }, [g.viewport, T, l, u, L]),
          x.useEffect(() => {
            i && !g.isClosePausedRef.current && L(T);
          }, [i, T, g.isClosePausedRef, L]),
          x.useEffect(() => (R(), () => k()), [R, k]));
        const Y = x.useMemo(() => (w ? fx(w) : null), [w]);
        return g.viewport
          ? v.jsxs(v.Fragment, {
              children: [
                Y &&
                  v.jsx(AC, {
                    __scopeToast: n,
                    role: "status",
                    "aria-live": r === "foreground" ? "assertive" : "polite",
                    "aria-atomic": !0,
                    children: Y,
                  }),
                v.jsx(RC, {
                  scope: n,
                  onClose: $,
                  children: jo.createPortal(
                    v.jsx(Jf.ItemSlot, {
                      scope: n,
                      children: v.jsx(aC, {
                        asChild: !0,
                        onEscapeKeyDown: ke(a, () => {
                          (g.isFocusedToastEscapeKeyDownRef.current || $(),
                            (g.isFocusedToastEscapeKeyDownRef.current = !1));
                        }),
                        children: v.jsx(it.li, {
                          role: "status",
                          "aria-live": "off",
                          "aria-atomic": !0,
                          tabIndex: 0,
                          "data-state": i ? "open" : "closed",
                          "data-swipe-direction": g.swipeDirection,
                          ...b,
                          ref: p,
                          style: {
                            userSelect: "none",
                            touchAction: "none",
                            ...e.style,
                          },
                          onKeyDown: ke(e.onKeyDown, (j) => {
                            j.key === "Escape" &&
                              (a == null || a(j.nativeEvent),
                              j.nativeEvent.defaultPrevented ||
                                ((g.isFocusedToastEscapeKeyDownRef.current =
                                  !0),
                                $()));
                          }),
                          onPointerDown: ke(e.onPointerDown, (j) => {
                            j.button === 0 &&
                              (y.current = { x: j.clientX, y: j.clientY });
                          }),
                          onPointerMove: ke(e.onPointerMove, (j) => {
                            if (!y.current) return;
                            const D = j.clientX - y.current.x,
                              z = j.clientY - y.current.y,
                              B = !!S.current,
                              _ = ["left", "right"].includes(g.swipeDirection),
                              N = ["left", "up"].includes(g.swipeDirection)
                                ? Math.min
                                : Math.max,
                              I = _ ? N(0, D) : 0,
                              V = _ ? 0 : N(0, z),
                              F = j.pointerType === "touch" ? 10 : 2,
                              G = { x: I, y: V },
                              X = { originalEvent: j, delta: G };
                            B
                              ? ((S.current = G),
                                da(CC, d, X, { discrete: !1 }))
                              : pm(G, g.swipeDirection, F)
                                ? ((S.current = G),
                                  da(EC, c, X, { discrete: !1 }),
                                  j.target.setPointerCapture(j.pointerId))
                                : (Math.abs(D) > F || Math.abs(z) > F) &&
                                  (y.current = null);
                          }),
                          onPointerUp: ke(e.onPointerUp, (j) => {
                            const D = S.current,
                              z = j.target;
                            if (
                              (z.hasPointerCapture(j.pointerId) &&
                                z.releasePointerCapture(j.pointerId),
                              (S.current = null),
                              (y.current = null),
                              D)
                            ) {
                              const B = j.currentTarget,
                                _ = { originalEvent: j, delta: D };
                              (pm(D, g.swipeDirection, g.swipeThreshold)
                                ? da(kC, h, _, { discrete: !0 })
                                : da(PC, f, _, { discrete: !0 }),
                                B.addEventListener(
                                  "click",
                                  (N) => N.preventDefault(),
                                  { once: !0 },
                                ));
                            }
                          }),
                        }),
                      }),
                    }),
                    g.viewport,
                  ),
                }),
              ],
            })
          : null;
      }),
      AC = (e) => {
        const { __scopeToast: t, children: n, ...r } = e,
          s = Gl(Do, t),
          [i, o] = x.useState(!1),
          [a, l] = x.useState(!1);
        return (
          jC(() => o(!0)),
          x.useEffect(() => {
            const u = window.setTimeout(() => l(!0), 1e3);
            return () => window.clearTimeout(u);
          }, []),
          a
            ? null
            : v.jsx(J0, {
                asChild: !0,
                children: v.jsx(Kl, {
                  ...r,
                  children:
                    i && v.jsxs(v.Fragment, { children: [s.label, " ", n] }),
                }),
              })
        );
      },
      OC = "ToastTitle",
      ox = x.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return v.jsx(it.div, { ...r, ref: t });
      });
    ox.displayName = OC;
    var MC = "ToastDescription",
      ax = x.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return v.jsx(it.div, { ...r, ref: t });
      });
    ax.displayName = MC;
    var lx = "ToastAction",
      ux = x.forwardRef((e, t) => {
        const { altText: n, ...r } = e;
        return n.trim()
          ? v.jsx(dx, {
              altText: n,
              asChild: !0,
              children: v.jsx(eh, { ...r, ref: t }),
            })
          : (console.error(
              `Invalid prop \`altText\` supplied to \`${lx}\`. Expected non-empty \`string\`.`,
            ),
            null);
      });
    ux.displayName = lx;
    var cx = "ToastClose",
      eh = x.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e,
          s = _C(cx, n);
        return v.jsx(dx, {
          asChild: !0,
          children: v.jsx(it.button, {
            type: "button",
            ...r,
            ref: t,
            onClick: ke(e.onClick, s.onClose),
          }),
        });
      });
    eh.displayName = cx;
    var dx = x.forwardRef((e, t) => {
      const { __scopeToast: n, altText: r, ...s } = e;
      return v.jsx(it.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...s,
        ref: t,
      });
    });
    function fx(e) {
      const t = [];
      return (
        Array.from(e.childNodes).forEach((r) => {
          if (
            (r.nodeType === r.TEXT_NODE &&
              r.textContent &&
              t.push(r.textContent),
            DC(r))
          ) {
            const s = r.ariaHidden || r.hidden || r.style.display === "none",
              i = r.dataset.radixToastAnnounceExclude === "";
            if (!s)
              if (i) {
                const o = r.dataset.radixToastAnnounceAlt;
                o && t.push(o);
              } else t.push(...fx(r));
          }
        }),
        t
      );
    }
    function da(e, t, n, { discrete: r }) {
      const s = n.originalEvent.currentTarget,
        i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
      (t && s.addEventListener(e, t, { once: !0 }),
        r ? Q0(s, i) : s.dispatchEvent(i));
    }
    var pm = (e, t, n = 0) => {
      const r = Math.abs(e.x),
        s = Math.abs(e.y),
        i = r > s;
      return t === "left" || t === "right" ? i && r > n : !i && s > n;
    };
    function jC(e = () => {}) {
      const t = lr(e);
      ur(() => {
        let n = 0,
          r = 0;
        return (
          (n = window.requestAnimationFrame(
            () => (r = window.requestAnimationFrame(t)),
          )),
          () => {
            (window.cancelAnimationFrame(n), window.cancelAnimationFrame(r));
          }
        );
      }, [t]);
    }
    function DC(e) {
      return e.nodeType === e.ELEMENT_NODE;
    }
    function LC(e) {
      const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
          acceptNode: (r) => {
            const s = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || s
              ? NodeFilter.FILTER_SKIP
              : r.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
          },
        });
      for (; n.nextNode(); ) t.push(n.currentNode);
      return t;
    }
    function Wu(e) {
      const t = document.activeElement;
      return e.some((n) =>
        n === t ? !0 : (n.focus(), document.activeElement !== t),
      );
    }
    var IC = tx,
      hx = rx,
      px = ix,
      mx = ox,
      gx = ax,
      yx = ux,
      vx = eh;
    function xx(e) {
      var t,
        n,
        r = "";
      if (typeof e == "string" || typeof e == "number") r += e;
      else if (typeof e == "object")
        if (Array.isArray(e)) {
          var s = e.length;
          for (t = 0; t < s; t++)
            e[t] && (n = xx(e[t])) && (r && (r += " "), (r += n));
        } else for (n in e) e[n] && (r && (r += " "), (r += n));
      return r;
    }
    function wx() {
      for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
        (e = arguments[n]) && (t = xx(e)) && (r && (r += " "), (r += t));
      return r;
    }
    const mm = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
      gm = wx,
      FC = (e, t) => (n) => {
        var r;
        if ((t == null ? void 0 : t.variants) == null)
          return gm(
            e,
            n == null ? void 0 : n.class,
            n == null ? void 0 : n.className,
          );
        const { variants: s, defaultVariants: i } = t,
          o = Object.keys(s).map((u) => {
            const c = n == null ? void 0 : n[u],
              d = i == null ? void 0 : i[u];
            if (c === null) return null;
            const f = mm(c) || mm(d);
            return s[u][f];
          }),
          a =
            n &&
            Object.entries(n).reduce((u, c) => {
              let [d, f] = c;
              return (f === void 0 || (u[d] = f), u);
            }, {}),
          l =
            t == null || (r = t.compoundVariants) === null || r === void 0
              ? void 0
              : r.reduce((u, c) => {
                  let { class: d, className: f, ...h } = c;
                  return Object.entries(h).every((b) => {
                    let [g, w] = b;
                    return Array.isArray(w)
                      ? w.includes({ ...i, ...a }[g])
                      : { ...i, ...a }[g] === w;
                  })
                    ? [...u, d, f]
                    : u;
                }, []);
        return gm(
          e,
          o,
          l,
          n == null ? void 0 : n.class,
          n == null ? void 0 : n.className,
        );
      };
    /**
     * @license lucide-react v0.462.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ const VC = (e) =>
        e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
      bx = (...e) =>
        e
          .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
          .join(" ")
          .trim();
    /**
     * @license lucide-react v0.462.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ var $C = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    /**
     * @license lucide-react v0.462.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ const zC = x.forwardRef(
      (
        {
          color: e = "currentColor",
          size: t = 24,
          strokeWidth: n = 2,
          absoluteStrokeWidth: r,
          className: s = "",
          children: i,
          iconNode: o,
          ...a
        },
        l,
      ) =>
        x.createElement(
          "svg",
          {
            ref: l,
            ...$C,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
            className: bx("lucide", s),
            ...a,
          },
          [
            ...o.map(([u, c]) => x.createElement(u, c)),
            ...(Array.isArray(i) ? i : [i]),
          ],
        ),
    );
    /**
     * @license lucide-react v0.462.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ const yt = (e, t) => {
      const n = x.forwardRef(({ className: r, ...s }, i) =>
        x.createElement(zC, {
          ref: i,
          iconNode: t,
          className: bx(`lucide-${VC(e)}`, r),
          ...s,
        }),
      );
      return ((n.displayName = `${e}`), n);
    };
    /**
     * @license lucide-react v0.462.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ const BC = yt("Check", [
      ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
    ]);
    /**
     * @license lucide-react v0.462.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ const UC = yt("Copy", [
      [
        "rect",
        {
          width: "14",
          height: "14",
          x: "8",
          y: "8",
          rx: "2",
          ry: "2",
          key: "17jyea",
        },
      ],
      [
        "path",
        {
          d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
          key: "zix9uf",
        },
      ],
    ]);
    /**
     * @license lucide-react v0.462.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ const WC = yt("Crown", [
      [
        "path",
        {
          d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",
          key: "1vdc57",
        },
      ],
      ["path", { d: "M5 21h14", key: "11awu3" }],
    ]);
    /**
     * @license lucide-react v0.462.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ const HC = yt("Mail", [
      [
        "rect",
        { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
      ],
      [
        "path",
        { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
      ],
    ]);
    /**
     * @license lucide-react v0.462.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ const KC = yt("Maximize", [
      ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
      ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
      ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
      ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }],
    ]);
    /**
     * @license lucide-react v0.462.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ const GC = yt("Minimize", [
      ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3", key: "hohbtr" }],
      ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3", key: "5jw1f3" }],
      ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3", key: "198tvr" }],
      ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3", key: "ph8mxp" }],
    ]);
    /**
     * @license lucide-react v0.462.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ const YC = yt("Play", [
      ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
    ]);
    /**
     * @license lucide-react v0.462.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ const QC = yt("Send", [
      [
        "path",
        {
          d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
          key: "1ffxy3",
        },
      ],
      ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
    ]);
    /**
     * @license lucide-react v0.462.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ const qC = yt("Skull", [
      ["path", { d: "m12.5 17-.5-1-.5 1h1z", key: "3me087" }],
      [
        "path",
        {
          d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z",
          key: "1o5pge",
        },
      ],
      ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
      ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
    ]);
    /**
     * @license lucide-react v0.462.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ const XC = yt("TriangleAlert", [
      [
        "path",
        {
          d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
          key: "wmoenq",
        },
      ],
      ["path", { d: "M12 9v4", key: "juzpu7" }],
      ["path", { d: "M12 17h.01", key: "p32p05" }],
    ]);
    /**
     * @license lucide-react v0.462.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ const ZC = yt("Trophy", [
      ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
      ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
      ["path", { d: "M4 22h16", key: "57wxv0" }],
      [
        "path",
        {
          d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
          key: "1nw9bq",
        },
      ],
      [
        "path",
        {
          d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
          key: "1np0yb",
        },
      ],
      ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }],
    ]);
    /**
     * @license lucide-react v0.462.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ const hd = yt("Users", [
      [
        "path",
        { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
      ],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
      ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
      ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
    ]);
    /**
     * @license lucide-react v0.462.0 - ISC
     *
     * This source code is licensed under the ISC license.
     * See the LICENSE file in the root directory of this source tree.
     */ const Sx = yt("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]),
      th = "-",
      JC = (e) => {
        const t = tP(e),
          { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
          getClassGroupId: (o) => {
            const a = o.split(th);
            return (
              a[0] === "" && a.length !== 1 && a.shift(),
              Tx(a, t) || eP(o)
            );
          },
          getConflictingClassGroupIds: (o, a) => {
            const l = n[o] || [];
            return a && r[o] ? [...l, ...r[o]] : l;
          },
        };
      },
      Tx = (e, t) => {
        var o;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
          r = t.nextPart.get(n),
          s = r ? Tx(e.slice(1), r) : void 0;
        if (s) return s;
        if (t.validators.length === 0) return;
        const i = e.join(th);
        return (o = t.validators.find(({ validator: a }) => a(i))) == null
          ? void 0
          : o.classGroupId;
      },
      ym = /^\[(.+)\]$/,
      eP = (e) => {
        if (ym.test(e)) {
          const t = ym.exec(e)[1],
            n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
          if (n) return "arbitrary.." + n;
        }
      },
      tP = (e) => {
        const { theme: t, prefix: n } = e,
          r = { nextPart: new Map(), validators: [] };
        return (
          rP(Object.entries(e.classGroups), n).forEach(([i, o]) => {
            pd(o, r, i, t);
          }),
          r
        );
      },
      pd = (e, t, n, r) => {
        e.forEach((s) => {
          if (typeof s == "string") {
            const i = s === "" ? t : vm(t, s);
            i.classGroupId = n;
            return;
          }
          if (typeof s == "function") {
            if (nP(s)) {
              pd(s(r), t, n, r);
              return;
            }
            t.validators.push({ validator: s, classGroupId: n });
            return;
          }
          Object.entries(s).forEach(([i, o]) => {
            pd(o, vm(t, i), n, r);
          });
        });
      },
      vm = (e, t) => {
        let n = e;
        return (
          t.split(th).forEach((r) => {
            (n.nextPart.has(r) ||
              n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
              (n = n.nextPart.get(r)));
          }),
          n
        );
      },
      nP = (e) => e.isThemeGetter,
      rP = (e, t) =>
        t
          ? e.map(([n, r]) => {
              const s = r.map((i) =>
                typeof i == "string"
                  ? t + i
                  : typeof i == "object"
                    ? Object.fromEntries(
                        Object.entries(i).map(([o, a]) => [t + o, a]),
                      )
                    : i,
              );
              return [n, s];
            })
          : e,
      sP = (e) => {
        if (e < 1) return { get: () => {}, set: () => {} };
        let t = 0,
          n = new Map(),
          r = new Map();
        const s = (i, o) => {
          (n.set(i, o), t++, t > e && ((t = 0), (r = n), (n = new Map())));
        };
        return {
          get(i) {
            let o = n.get(i);
            if (o !== void 0) return o;
            if ((o = r.get(i)) !== void 0) return (s(i, o), o);
          },
          set(i, o) {
            n.has(i) ? n.set(i, o) : s(i, o);
          },
        };
      },
      Ex = "!",
      iP = (e) => {
        const { separator: t, experimentalParseClassName: n } = e,
          r = t.length === 1,
          s = t[0],
          i = t.length,
          o = (a) => {
            const l = [];
            let u = 0,
              c = 0,
              d;
            for (let w = 0; w < a.length; w++) {
              let m = a[w];
              if (u === 0) {
                if (m === s && (r || a.slice(w, w + i) === t)) {
                  (l.push(a.slice(c, w)), (c = w + i));
                  continue;
                }
                if (m === "/") {
                  d = w;
                  continue;
                }
              }
              m === "[" ? u++ : m === "]" && u--;
            }
            const f = l.length === 0 ? a : a.substring(c),
              h = f.startsWith(Ex),
              b = h ? f.substring(1) : f,
              g = d && d > c ? d - c : void 0;
            return {
              modifiers: l,
              hasImportantModifier: h,
              baseClassName: b,
              maybePostfixModifierPosition: g,
            };
          };
        return n ? (a) => n({ className: a, parseClassName: o }) : o;
      },
      oP = (e) => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return (
          e.forEach((r) => {
            r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
          }),
          t.push(...n.sort()),
          t
        );
      },
      aP = (e) => ({ cache: sP(e.cacheSize), parseClassName: iP(e), ...JC(e) }),
      lP = /\s+/,
      uP = (e, t) => {
        const {
            parseClassName: n,
            getClassGroupId: r,
            getConflictingClassGroupIds: s,
          } = t,
          i = [],
          o = e.trim().split(lP);
        let a = "";
        for (let l = o.length - 1; l >= 0; l -= 1) {
          const u = o[l],
            {
              modifiers: c,
              hasImportantModifier: d,
              baseClassName: f,
              maybePostfixModifierPosition: h,
            } = n(u);
          let b = !!h,
            g = r(b ? f.substring(0, h) : f);
          if (!g) {
            if (!b) {
              a = u + (a.length > 0 ? " " + a : a);
              continue;
            }
            if (((g = r(f)), !g)) {
              a = u + (a.length > 0 ? " " + a : a);
              continue;
            }
            b = !1;
          }
          const w = oP(c).join(":"),
            m = d ? w + Ex : w,
            p = m + g;
          if (i.includes(p)) continue;
          i.push(p);
          const y = s(g, b);
          for (let S = 0; S < y.length; ++S) {
            const T = y[S];
            i.push(m + T);
          }
          a = u + (a.length > 0 ? " " + a : a);
        }
        return a;
      };
    function cP() {
      let e = 0,
        t,
        n,
        r = "";
      for (; e < arguments.length; )
        (t = arguments[e++]) && (n = Cx(t)) && (r && (r += " "), (r += n));
      return r;
    }
    const Cx = (e) => {
      if (typeof e == "string") return e;
      let t,
        n = "";
      for (let r = 0; r < e.length; r++)
        e[r] && (t = Cx(e[r])) && (n && (n += " "), (n += t));
      return n;
    };
    function dP(e, ...t) {
      let n,
        r,
        s,
        i = o;
      function o(l) {
        const u = t.reduce((c, d) => d(c), e());
        return (
          (n = aP(u)),
          (r = n.cache.get),
          (s = n.cache.set),
          (i = a),
          a(l)
        );
      }
      function a(l) {
        const u = r(l);
        if (u) return u;
        const c = uP(l, n);
        return (s(l, c), c);
      }
      return function () {
        return i(cP.apply(null, arguments));
      };
    }
    const le = (e) => {
        const t = (n) => n[e] || [];
        return ((t.isThemeGetter = !0), t);
      },
      Px = /^\[(?:([a-z-]+):)?(.+)\]$/i,
      fP = /^\d+\/\d+$/,
      hP = new Set(["px", "full", "screen"]),
      pP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
      mP =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
      gP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
      yP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
      vP =
        /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
      dn = (e) => js(e) || hP.has(e) || fP.test(e),
      jn = (e) => oi(e, "length", PP),
      js = (e) => !!e && !Number.isNaN(Number(e)),
      Hu = (e) => oi(e, "number", js),
      Si = (e) => !!e && Number.isInteger(Number(e)),
      xP = (e) => e.endsWith("%") && js(e.slice(0, -1)),
      Z = (e) => Px.test(e),
      Dn = (e) => pP.test(e),
      wP = new Set(["length", "size", "percentage"]),
      bP = (e) => oi(e, wP, kx),
      SP = (e) => oi(e, "position", kx),
      TP = new Set(["image", "url"]),
      EP = (e) => oi(e, TP, RP),
      CP = (e) => oi(e, "", kP),
      Ti = () => !0,
      oi = (e, t, n) => {
        const r = Px.exec(e);
        return r
          ? r[1]
            ? typeof t == "string"
              ? r[1] === t
              : t.has(r[1])
            : n(r[2])
          : !1;
      },
      PP = (e) => mP.test(e) && !gP.test(e),
      kx = () => !1,
      kP = (e) => yP.test(e),
      RP = (e) => vP.test(e),
      _P = () => {
        const e = le("colors"),
          t = le("spacing"),
          n = le("blur"),
          r = le("brightness"),
          s = le("borderColor"),
          i = le("borderRadius"),
          o = le("borderSpacing"),
          a = le("borderWidth"),
          l = le("contrast"),
          u = le("grayscale"),
          c = le("hueRotate"),
          d = le("invert"),
          f = le("gap"),
          h = le("gradientColorStops"),
          b = le("gradientColorStopPositions"),
          g = le("inset"),
          w = le("margin"),
          m = le("opacity"),
          p = le("padding"),
          y = le("saturate"),
          S = le("scale"),
          T = le("sepia"),
          E = le("skew"),
          C = le("space"),
          P = le("translate"),
          R = () => ["auto", "contain", "none"],
          k = () => ["auto", "hidden", "clip", "visible", "scroll"],
          $ = () => ["auto", Z, t],
          L = () => [Z, t],
          Y = () => ["", dn, jn],
          j = () => ["auto", js, Z],
          D = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          z = () => ["solid", "dashed", "dotted", "double", "none"],
          B = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          _ = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          N = () => ["", "0", Z],
          I = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          V = () => [js, Z];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [Ti],
            spacing: [dn, jn],
            blur: ["none", "", Dn, Z],
            brightness: V(),
            borderColor: [e],
            borderRadius: ["none", "", "full", Dn, Z],
            borderSpacing: L(),
            borderWidth: Y(),
            contrast: V(),
            grayscale: N(),
            hueRotate: V(),
            invert: N(),
            gap: L(),
            gradientColorStops: [e],
            gradientColorStopPositions: [xP, jn],
            inset: $(),
            margin: $(),
            opacity: V(),
            padding: L(),
            saturate: V(),
            scale: V(),
            sepia: N(),
            skew: V(),
            space: L(),
            translate: L(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", Z] }],
            container: ["container"],
            columns: [{ columns: [Dn] }],
            "break-after": [{ "break-after": I() }],
            "break-before": [{ "break-before": I() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...D(), Z] }],
            overflow: [{ overflow: k() }],
            "overflow-x": [{ "overflow-x": k() }],
            "overflow-y": [{ "overflow-y": k() }],
            overscroll: [{ overscroll: R() }],
            "overscroll-x": [{ "overscroll-x": R() }],
            "overscroll-y": [{ "overscroll-y": R() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [g] }],
            "inset-x": [{ "inset-x": [g] }],
            "inset-y": [{ "inset-y": [g] }],
            start: [{ start: [g] }],
            end: [{ end: [g] }],
            top: [{ top: [g] }],
            right: [{ right: [g] }],
            bottom: [{ bottom: [g] }],
            left: [{ left: [g] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", Si, Z] }],
            basis: [{ basis: $() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", Z] }],
            grow: [{ grow: N() }],
            shrink: [{ shrink: N() }],
            order: [{ order: ["first", "last", "none", Si, Z] }],
            "grid-cols": [{ "grid-cols": [Ti] }],
            "col-start-end": [{ col: ["auto", { span: ["full", Si, Z] }, Z] }],
            "col-start": [{ "col-start": j() }],
            "col-end": [{ "col-end": j() }],
            "grid-rows": [{ "grid-rows": [Ti] }],
            "row-start-end": [{ row: ["auto", { span: [Si, Z] }, Z] }],
            "row-start": [{ "row-start": j() }],
            "row-end": [{ "row-end": j() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Z] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Z] }],
            gap: [{ gap: [f] }],
            "gap-x": [{ "gap-x": [f] }],
            "gap-y": [{ "gap-y": [f] }],
            "justify-content": [{ justify: ["normal", ..._()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ..._(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [..._(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [p] }],
            px: [{ px: [p] }],
            py: [{ py: [p] }],
            ps: [{ ps: [p] }],
            pe: [{ pe: [p] }],
            pt: [{ pt: [p] }],
            pr: [{ pr: [p] }],
            pb: [{ pb: [p] }],
            pl: [{ pl: [p] }],
            m: [{ m: [w] }],
            mx: [{ mx: [w] }],
            my: [{ my: [w] }],
            ms: [{ ms: [w] }],
            me: [{ me: [w] }],
            mt: [{ mt: [w] }],
            mr: [{ mr: [w] }],
            mb: [{ mb: [w] }],
            ml: [{ ml: [w] }],
            "space-x": [{ "space-x": [C] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [C] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Z, t] },
            ],
            "min-w": [{ "min-w": [Z, t, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  Z,
                  t,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [Dn] },
                  Dn,
                ],
              },
            ],
            h: [
              { h: [Z, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [Z, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [Z, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [Z, t, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", Dn, jn] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  Hu,
                ],
              },
            ],
            "font-family": [{ font: [Ti] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  Z,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", js, Hu] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  dn,
                  Z,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", Z] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", Z] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [m] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [m] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...z(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", dn, jn] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", dn, Z] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: L() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  Z,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", Z] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [m] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...D(), SP] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", bP] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  EP,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [b] }],
            "gradient-via-pos": [{ via: [b] }],
            "gradient-to-pos": [{ to: [b] }],
            "gradient-from": [{ from: [h] }],
            "gradient-via": [{ via: [h] }],
            "gradient-to": [{ to: [h] }],
            rounded: [{ rounded: [i] }],
            "rounded-s": [{ "rounded-s": [i] }],
            "rounded-e": [{ "rounded-e": [i] }],
            "rounded-t": [{ "rounded-t": [i] }],
            "rounded-r": [{ "rounded-r": [i] }],
            "rounded-b": [{ "rounded-b": [i] }],
            "rounded-l": [{ "rounded-l": [i] }],
            "rounded-ss": [{ "rounded-ss": [i] }],
            "rounded-se": [{ "rounded-se": [i] }],
            "rounded-ee": [{ "rounded-ee": [i] }],
            "rounded-es": [{ "rounded-es": [i] }],
            "rounded-tl": [{ "rounded-tl": [i] }],
            "rounded-tr": [{ "rounded-tr": [i] }],
            "rounded-br": [{ "rounded-br": [i] }],
            "rounded-bl": [{ "rounded-bl": [i] }],
            "border-w": [{ border: [a] }],
            "border-w-x": [{ "border-x": [a] }],
            "border-w-y": [{ "border-y": [a] }],
            "border-w-s": [{ "border-s": [a] }],
            "border-w-e": [{ "border-e": [a] }],
            "border-w-t": [{ "border-t": [a] }],
            "border-w-r": [{ "border-r": [a] }],
            "border-w-b": [{ "border-b": [a] }],
            "border-w-l": [{ "border-l": [a] }],
            "border-opacity": [{ "border-opacity": [m] }],
            "border-style": [{ border: [...z(), "hidden"] }],
            "divide-x": [{ "divide-x": [a] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [a] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [m] }],
            "divide-style": [{ divide: z() }],
            "border-color": [{ border: [s] }],
            "border-color-x": [{ "border-x": [s] }],
            "border-color-y": [{ "border-y": [s] }],
            "border-color-s": [{ "border-s": [s] }],
            "border-color-e": [{ "border-e": [s] }],
            "border-color-t": [{ "border-t": [s] }],
            "border-color-r": [{ "border-r": [s] }],
            "border-color-b": [{ "border-b": [s] }],
            "border-color-l": [{ "border-l": [s] }],
            "divide-color": [{ divide: [s] }],
            "outline-style": [{ outline: ["", ...z()] }],
            "outline-offset": [{ "outline-offset": [dn, Z] }],
            "outline-w": [{ outline: [dn, jn] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: Y() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [m] }],
            "ring-offset-w": [{ "ring-offset": [dn, jn] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", Dn, CP] }],
            "shadow-color": [{ shadow: [Ti] }],
            opacity: [{ opacity: [m] }],
            "mix-blend": [
              { "mix-blend": [...B(), "plus-lighter", "plus-darker"] },
            ],
            "bg-blend": [{ "bg-blend": B() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [n] }],
            brightness: [{ brightness: [r] }],
            contrast: [{ contrast: [l] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", Dn, Z] }],
            grayscale: [{ grayscale: [u] }],
            "hue-rotate": [{ "hue-rotate": [c] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [y] }],
            sepia: [{ sepia: [T] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [n] }],
            "backdrop-brightness": [{ "backdrop-brightness": [r] }],
            "backdrop-contrast": [{ "backdrop-contrast": [l] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
            "backdrop-invert": [{ "backdrop-invert": [d] }],
            "backdrop-opacity": [{ "backdrop-opacity": [m] }],
            "backdrop-saturate": [{ "backdrop-saturate": [y] }],
            "backdrop-sepia": [{ "backdrop-sepia": [T] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [o] }],
            "border-spacing-x": [{ "border-spacing-x": [o] }],
            "border-spacing-y": [{ "border-spacing-y": [o] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  Z,
                ],
              },
            ],
            duration: [{ duration: V() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", Z] }],
            delay: [{ delay: V() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", Z] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [S] }],
            "scale-x": [{ "scale-x": [S] }],
            "scale-y": [{ "scale-y": [S] }],
            rotate: [{ rotate: [Si, Z] }],
            "translate-x": [{ "translate-x": [P] }],
            "translate-y": [{ "translate-y": [P] }],
            "skew-x": [{ "skew-x": [E] }],
            "skew-y": [{ "skew-y": [E] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  Z,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  Z,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": L() }],
            "scroll-mx": [{ "scroll-mx": L() }],
            "scroll-my": [{ "scroll-my": L() }],
            "scroll-ms": [{ "scroll-ms": L() }],
            "scroll-me": [{ "scroll-me": L() }],
            "scroll-mt": [{ "scroll-mt": L() }],
            "scroll-mr": [{ "scroll-mr": L() }],
            "scroll-mb": [{ "scroll-mb": L() }],
            "scroll-ml": [{ "scroll-ml": L() }],
            "scroll-p": [{ "scroll-p": L() }],
            "scroll-px": [{ "scroll-px": L() }],
            "scroll-py": [{ "scroll-py": L() }],
            "scroll-ps": [{ "scroll-ps": L() }],
            "scroll-pe": [{ "scroll-pe": L() }],
            "scroll-pt": [{ "scroll-pt": L() }],
            "scroll-pr": [{ "scroll-pr": L() }],
            "scroll-pb": [{ "scroll-pb": L() }],
            "scroll-pl": [{ "scroll-pl": L() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", Z] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [dn, jn, Hu] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-s",
              "border-color-e",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      },
      NP = dP(_P);
    function es(...e) {
      return NP(wx(e));
    }
    const AP = IC,
      Rx = x.forwardRef(({ className: e, ...t }, n) =>
        v.jsx(hx, {
          ref: n,
          className: es(
            "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
            e,
          ),
          ...t,
        }),
      );
    Rx.displayName = hx.displayName;
    const OP = FC(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
        {
          variants: {
            variant: {
              default: "border bg-background text-foreground",
              destructive:
                "destructive group border-destructive bg-destructive text-destructive-foreground",
            },
          },
          defaultVariants: { variant: "default" },
        },
      ),
      _x = x.forwardRef(({ className: e, variant: t, ...n }, r) =>
        v.jsx(px, { ref: r, className: es(OP({ variant: t }), e), ...n }),
      );
    _x.displayName = px.displayName;
    const MP = x.forwardRef(({ className: e, ...t }, n) =>
      v.jsx(yx, {
        ref: n,
        className: es(
          "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
          e,
        ),
        ...t,
      }),
    );
    MP.displayName = yx.displayName;
    const Nx = x.forwardRef(({ className: e, ...t }, n) =>
      v.jsx(vx, {
        ref: n,
        className: es(
          "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
          e,
        ),
        "toast-close": "",
        ...t,
        children: v.jsx(Sx, { className: "h-4 w-4" }),
      }),
    );
    Nx.displayName = vx.displayName;
    const Ax = x.forwardRef(({ className: e, ...t }, n) =>
      v.jsx(mx, { ref: n, className: es("text-sm font-semibold", e), ...t }),
    );
    Ax.displayName = mx.displayName;
    const Ox = x.forwardRef(({ className: e, ...t }, n) =>
      v.jsx(gx, { ref: n, className: es("text-sm opacity-90", e), ...t }),
    );
    Ox.displayName = gx.displayName;
    function jP() {
      const { toasts: e } = HE();
      return v.jsxs(AP, {
        children: [
          e.map(function ({
            id: t,
            title: n,
            description: r,
            action: s,
            ...i
          }) {
            return v.jsxs(
              _x,
              {
                ...i,
                children: [
                  v.jsxs("div", {
                    className: "grid gap-1",
                    children: [
                      n && v.jsx(Ax, { children: n }),
                      r && v.jsx(Ox, { children: r }),
                    ],
                  }),
                  s,
                  v.jsx(Nx, {}),
                ],
              },
              t,
            );
          }),
          v.jsx(Rx, {}),
        ],
      });
    }
    var xm = ["light", "dark"],
      DP = "(prefers-color-scheme: dark)",
      LP = x.createContext(void 0),
      IP = { setTheme: (e) => {}, themes: [] },
      FP = () => {
        var e;
        return (e = x.useContext(LP)) != null ? e : IP;
      };
    x.memo(
      ({
        forcedTheme: e,
        storageKey: t,
        attribute: n,
        enableSystem: r,
        enableColorScheme: s,
        defaultTheme: i,
        value: o,
        attrs: a,
        nonce: l,
      }) => {
        let u = i === "system",
          c =
            n === "class"
              ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((b) => `'${b}'`).join(",")})`};`
              : `var d=document.documentElement,n='${n}',s='setAttribute';`,
          d = s
            ? xm.includes(i) && i
              ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
              : "if(e==='light'||e==='dark')d.style.colorScheme=e"
            : "",
          f = (b, g = !1, w = !0) => {
            let m = o ? o[b] : b,
              p = g ? b + "|| ''" : `'${m}'`,
              y = "";
            return (
              s &&
                w &&
                !g &&
                xm.includes(b) &&
                (y += `d.style.colorScheme = '${b}';`),
              n === "class"
                ? g || m
                  ? (y += `c.add(${p})`)
                  : (y += "null")
                : m && (y += `d[s](n,${p})`),
              y
            );
          },
          h = e
            ? `!function(){${c}${f(e)}}()`
            : r
              ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${DP}',m=window.matchMedia(t);if(m.media!==t||m.matches){${f("dark")}}else{${f("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}${u ? "" : "else{" + f(i, !1, !1) + "}"}${d}}catch(e){}}()`
              : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${f(o ? "x[e]" : "e", !0)}}else{${f(i, !1, !1)};}${d}}catch(t){}}();`;
        return x.createElement("script", {
          nonce: l,
          dangerouslySetInnerHTML: { __html: h },
        });
      },
    );
    var VP = (e) => {
        switch (e) {
          case "success":
            return BP;
          case "info":
            return WP;
          case "warning":
            return UP;
          case "error":
            return HP;
          default:
            return null;
        }
      },
      $P = Array(12).fill(0),
      zP = ({ visible: e, className: t }) =>
        O.createElement(
          "div",
          {
            className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
            "data-visible": e,
          },
          O.createElement(
            "div",
            { className: "sonner-spinner" },
            $P.map((n, r) =>
              O.createElement("div", {
                className: "sonner-loading-bar",
                key: `spinner-bar-${r}`,
              }),
            ),
          ),
        ),
      BP = O.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          height: "20",
          width: "20",
        },
        O.createElement("path", {
          fillRule: "evenodd",
          d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
          clipRule: "evenodd",
        }),
      ),
      UP = O.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          height: "20",
          width: "20",
        },
        O.createElement("path", {
          fillRule: "evenodd",
          d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
          clipRule: "evenodd",
        }),
      ),
      WP = O.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          height: "20",
          width: "20",
        },
        O.createElement("path", {
          fillRule: "evenodd",
          d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
          clipRule: "evenodd",
        }),
      ),
      HP = O.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          height: "20",
          width: "20",
        },
        O.createElement("path", {
          fillRule: "evenodd",
          d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
          clipRule: "evenodd",
        }),
      ),
      KP = O.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "12",
          height: "12",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        },
        O.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        O.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
      ),
      GP = () => {
        let [e, t] = O.useState(document.hidden);
        return (
          O.useEffect(() => {
            let n = () => {
              t(document.hidden);
            };
            return (
              document.addEventListener("visibilitychange", n),
              () => window.removeEventListener("visibilitychange", n)
            );
          }, []),
          e
        );
      },
      md = 1,
      YP = class {
        constructor() {
          ((this.subscribe = (e) => (
            this.subscribers.push(e),
            () => {
              let t = this.subscribers.indexOf(e);
              this.subscribers.splice(t, 1);
            }
          )),
            (this.publish = (e) => {
              this.subscribers.forEach((t) => t(e));
            }),
            (this.addToast = (e) => {
              (this.publish(e), (this.toasts = [...this.toasts, e]));
            }),
            (this.create = (e) => {
              var t;
              let { message: n, ...r } = e,
                s =
                  typeof (e == null ? void 0 : e.id) == "number" ||
                  ((t = e.id) == null ? void 0 : t.length) > 0
                    ? e.id
                    : md++,
                i = this.toasts.find((a) => a.id === s),
                o = e.dismissible === void 0 ? !0 : e.dismissible;
              return (
                this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
                i
                  ? (this.toasts = this.toasts.map((a) =>
                      a.id === s
                        ? (this.publish({ ...a, ...e, id: s, title: n }),
                          { ...a, ...e, id: s, dismissible: o, title: n })
                        : a,
                    ))
                  : this.addToast({ title: n, ...r, dismissible: o, id: s }),
                s
              );
            }),
            (this.dismiss = (e) => (
              this.dismissedToasts.add(e),
              e ||
                this.toasts.forEach((t) => {
                  this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
                }),
              this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
              e
            )),
            (this.message = (e, t) => this.create({ ...t, message: e })),
            (this.error = (e, t) =>
              this.create({ ...t, message: e, type: "error" })),
            (this.success = (e, t) =>
              this.create({ ...t, type: "success", message: e })),
            (this.info = (e, t) =>
              this.create({ ...t, type: "info", message: e })),
            (this.warning = (e, t) =>
              this.create({ ...t, type: "warning", message: e })),
            (this.loading = (e, t) =>
              this.create({ ...t, type: "loading", message: e })),
            (this.promise = (e, t) => {
              if (!t) return;
              let n;
              t.loading !== void 0 &&
                (n = this.create({
                  ...t,
                  promise: e,
                  type: "loading",
                  message: t.loading,
                  description:
                    typeof t.description != "function" ? t.description : void 0,
                }));
              let r = e instanceof Promise ? e : e(),
                s = n !== void 0,
                i,
                o = r
                  .then(async (l) => {
                    if (((i = ["resolve", l]), O.isValidElement(l)))
                      ((s = !1),
                        this.create({ id: n, type: "default", message: l }));
                    else if (qP(l) && !l.ok) {
                      s = !1;
                      let u =
                          typeof t.error == "function"
                            ? await t.error(`HTTP error! status: ${l.status}`)
                            : t.error,
                        c =
                          typeof t.description == "function"
                            ? await t.description(
                                `HTTP error! status: ${l.status}`,
                              )
                            : t.description;
                      this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c,
                      });
                    } else if (t.success !== void 0) {
                      s = !1;
                      let u =
                          typeof t.success == "function"
                            ? await t.success(l)
                            : t.success,
                        c =
                          typeof t.description == "function"
                            ? await t.description(l)
                            : t.description;
                      this.create({
                        id: n,
                        type: "success",
                        message: u,
                        description: c,
                      });
                    }
                  })
                  .catch(async (l) => {
                    if (((i = ["reject", l]), t.error !== void 0)) {
                      s = !1;
                      let u =
                          typeof t.error == "function"
                            ? await t.error(l)
                            : t.error,
                        c =
                          typeof t.description == "function"
                            ? await t.description(l)
                            : t.description;
                      this.create({
                        id: n,
                        type: "error",
                        message: u,
                        description: c,
                      });
                    }
                  })
                  .finally(() => {
                    var l;
                    (s && (this.dismiss(n), (n = void 0)),
                      (l = t.finally) == null || l.call(t));
                  }),
                a = () =>
                  new Promise((l, u) =>
                    o
                      .then(() => (i[0] === "reject" ? u(i[1]) : l(i[1])))
                      .catch(u),
                  );
              return typeof n != "string" && typeof n != "number"
                ? { unwrap: a }
                : Object.assign(n, { unwrap: a });
            }),
            (this.custom = (e, t) => {
              let n = (t == null ? void 0 : t.id) || md++;
              return (this.create({ jsx: e(n), id: n, ...t }), n);
            }),
            (this.getActiveToasts = () =>
              this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
            (this.subscribers = []),
            (this.toasts = []),
            (this.dismissedToasts = new Set()));
        }
      },
      Ze = new YP(),
      QP = (e, t) => {
        let n = (t == null ? void 0 : t.id) || md++;
        return (Ze.addToast({ title: e, ...t, id: n }), n);
      },
      qP = (e) =>
        e &&
        typeof e == "object" &&
        "ok" in e &&
        typeof e.ok == "boolean" &&
        "status" in e &&
        typeof e.status == "number",
      XP = QP,
      ZP = () => Ze.toasts,
      JP = () => Ze.getActiveToasts(),
      ek = Object.assign(
        XP,
        {
          success: Ze.success,
          info: Ze.info,
          warning: Ze.warning,
          error: Ze.error,
          custom: Ze.custom,
          message: Ze.message,
          promise: Ze.promise,
          dismiss: Ze.dismiss,
          loading: Ze.loading,
        },
        { getHistory: ZP, getToasts: JP },
      );
    function tk(e, { insertAt: t } = {}) {
      if (typeof document > "u") return;
      let n = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
      ((r.type = "text/css"),
        t === "top" && n.firstChild
          ? n.insertBefore(r, n.firstChild)
          : n.appendChild(r),
        r.styleSheet
          ? (r.styleSheet.cssText = e)
          : r.appendChild(document.createTextNode(e)));
    }
    tk(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
    function fa(e) {
      return e.label !== void 0;
    }
    var nk = 3,
      rk = "32px",
      sk = "16px",
      wm = 4e3,
      ik = 356,
      ok = 14,
      ak = 20,
      lk = 200;
    function Mt(...e) {
      return e.filter(Boolean).join(" ");
    }
    function uk(e) {
      let [t, n] = e.split("-"),
        r = [];
      return (t && r.push(t), n && r.push(n), r);
    }
    var ck = (e) => {
      var t, n, r, s, i, o, a, l, u, c, d;
      let {
          invert: f,
          toast: h,
          unstyled: b,
          interacting: g,
          setHeights: w,
          visibleToasts: m,
          heights: p,
          index: y,
          toasts: S,
          expanded: T,
          removeToast: E,
          defaultRichColors: C,
          closeButton: P,
          style: R,
          cancelButtonStyle: k,
          actionButtonStyle: $,
          className: L = "",
          descriptionClassName: Y = "",
          duration: j,
          position: D,
          gap: z,
          loadingIcon: B,
          expandByDefault: _,
          classNames: N,
          icons: I,
          closeButtonAriaLabel: V = "Close toast",
          pauseWhenPageIsHidden: F,
        } = e,
        [G, X] = O.useState(null),
        [oe, De] = O.useState(null),
        [re, ts] = O.useState(!1),
        [kn, xr] = O.useState(!1),
        [Rn, ns] = O.useState(!1),
        [_n, Uo] = O.useState(!1),
        [du, Wo] = O.useState(!1),
        [fu, fi] = O.useState(0),
        [rs, Yh] = O.useState(0),
        hi = O.useRef(h.duration || j || wm),
        Qh = O.useRef(null),
        wr = O.useRef(null),
        nS = y === 0,
        rS = y + 1 <= m,
        vt = h.type,
        ss = h.dismissible !== !1,
        sS = h.className || "",
        iS = h.descriptionClassName || "",
        Ho = O.useMemo(
          () => p.findIndex((Q) => Q.toastId === h.id) || 0,
          [p, h.id],
        ),
        oS = O.useMemo(() => {
          var Q;
          return (Q = h.closeButton) != null ? Q : P;
        }, [h.closeButton, P]),
        qh = O.useMemo(() => h.duration || j || wm, [h.duration, j]),
        hu = O.useRef(0),
        is = O.useRef(0),
        Xh = O.useRef(0),
        os = O.useRef(null),
        [aS, lS] = D.split("-"),
        Zh = O.useMemo(
          () => p.reduce((Q, ie, fe) => (fe >= Ho ? Q : Q + ie.height), 0),
          [p, Ho],
        ),
        Jh = GP(),
        uS = h.invert || f,
        pu = vt === "loading";
      ((is.current = O.useMemo(() => Ho * z + Zh, [Ho, Zh])),
        O.useEffect(() => {
          hi.current = qh;
        }, [qh]),
        O.useEffect(() => {
          ts(!0);
        }, []),
        O.useEffect(() => {
          let Q = wr.current;
          if (Q) {
            let ie = Q.getBoundingClientRect().height;
            return (
              Yh(ie),
              w((fe) => [
                { toastId: h.id, height: ie, position: h.position },
                ...fe,
              ]),
              () => w((fe) => fe.filter((_t) => _t.toastId !== h.id))
            );
          }
        }, [w, h.id]),
        O.useLayoutEffect(() => {
          if (!re) return;
          let Q = wr.current,
            ie = Q.style.height;
          Q.style.height = "auto";
          let fe = Q.getBoundingClientRect().height;
          ((Q.style.height = ie),
            Yh(fe),
            w((_t) =>
              _t.find((Nt) => Nt.toastId === h.id)
                ? _t.map((Nt) =>
                    Nt.toastId === h.id ? { ...Nt, height: fe } : Nt,
                  )
                : [{ toastId: h.id, height: fe, position: h.position }, ..._t],
            ));
        }, [re, h.title, h.description, w, h.id]));
      let Nn = O.useCallback(() => {
        (xr(!0),
          fi(is.current),
          w((Q) => Q.filter((ie) => ie.toastId !== h.id)),
          setTimeout(() => {
            E(h);
          }, lk));
      }, [h, E, w, is]);
      (O.useEffect(() => {
        if (
          (h.promise && vt === "loading") ||
          h.duration === 1 / 0 ||
          h.type === "loading"
        )
          return;
        let Q;
        return (
          T || g || (F && Jh)
            ? (() => {
                if (Xh.current < hu.current) {
                  let ie = new Date().getTime() - hu.current;
                  hi.current = hi.current - ie;
                }
                Xh.current = new Date().getTime();
              })()
            : hi.current !== 1 / 0 &&
              ((hu.current = new Date().getTime()),
              (Q = setTimeout(() => {
                var ie;
                ((ie = h.onAutoClose) == null || ie.call(h, h), Nn());
              }, hi.current))),
          () => clearTimeout(Q)
        );
      }, [T, g, h, vt, F, Jh, Nn]),
        O.useEffect(() => {
          h.delete && Nn();
        }, [Nn, h.delete]));
      function cS() {
        var Q, ie, fe;
        return I != null && I.loading
          ? O.createElement(
              "div",
              {
                className: Mt(
                  N == null ? void 0 : N.loader,
                  (Q = h == null ? void 0 : h.classNames) == null
                    ? void 0
                    : Q.loader,
                  "sonner-loader",
                ),
                "data-visible": vt === "loading",
              },
              I.loading,
            )
          : B
            ? O.createElement(
                "div",
                {
                  className: Mt(
                    N == null ? void 0 : N.loader,
                    (ie = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : ie.loader,
                    "sonner-loader",
                  ),
                  "data-visible": vt === "loading",
                },
                B,
              )
            : O.createElement(zP, {
                className: Mt(
                  N == null ? void 0 : N.loader,
                  (fe = h == null ? void 0 : h.classNames) == null
                    ? void 0
                    : fe.loader,
                ),
                visible: vt === "loading",
              });
      }
      return O.createElement(
        "li",
        {
          tabIndex: 0,
          ref: wr,
          className: Mt(
            L,
            sS,
            N == null ? void 0 : N.toast,
            (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast,
            N == null ? void 0 : N.default,
            N == null ? void 0 : N[vt],
            (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[vt],
          ),
          "data-sonner-toast": "",
          "data-rich-colors": (r = h.richColors) != null ? r : C,
          "data-styled": !(h.jsx || h.unstyled || b),
          "data-mounted": re,
          "data-promise": !!h.promise,
          "data-swiped": du,
          "data-removed": kn,
          "data-visible": rS,
          "data-y-position": aS,
          "data-x-position": lS,
          "data-index": y,
          "data-front": nS,
          "data-swiping": Rn,
          "data-dismissible": ss,
          "data-type": vt,
          "data-invert": uS,
          "data-swipe-out": _n,
          "data-swipe-direction": oe,
          "data-expanded": !!(T || (_ && re)),
          style: {
            "--index": y,
            "--toasts-before": y,
            "--z-index": S.length - y,
            "--offset": `${kn ? fu : is.current}px`,
            "--initial-height": _ ? "auto" : `${rs}px`,
            ...R,
            ...h.style,
          },
          onDragEnd: () => {
            (ns(!1), X(null), (os.current = null));
          },
          onPointerDown: (Q) => {
            pu ||
              !ss ||
              ((Qh.current = new Date()),
              fi(is.current),
              Q.target.setPointerCapture(Q.pointerId),
              Q.target.tagName !== "BUTTON" &&
                (ns(!0), (os.current = { x: Q.clientX, y: Q.clientY })));
          },
          onPointerUp: () => {
            var Q, ie, fe, _t;
            if (_n || !ss) return;
            os.current = null;
            let Nt = Number(
                ((Q = wr.current) == null
                  ? void 0
                  : Q.style
                      .getPropertyValue("--swipe-amount-x")
                      .replace("px", "")) || 0,
              ),
              An = Number(
                ((ie = wr.current) == null
                  ? void 0
                  : ie.style
                      .getPropertyValue("--swipe-amount-y")
                      .replace("px", "")) || 0,
              ),
              br =
                new Date().getTime() -
                ((fe = Qh.current) == null ? void 0 : fe.getTime()),
              At = G === "x" ? Nt : An,
              On = Math.abs(At) / br;
            if (Math.abs(At) >= ak || On > 0.11) {
              (fi(is.current),
                (_t = h.onDismiss) == null || _t.call(h, h),
                De(
                  G === "x"
                    ? Nt > 0
                      ? "right"
                      : "left"
                    : An > 0
                      ? "down"
                      : "up",
                ),
                Nn(),
                Uo(!0),
                Wo(!1));
              return;
            }
            (ns(!1), X(null));
          },
          onPointerMove: (Q) => {
            var ie, fe, _t, Nt;
            if (
              !os.current ||
              !ss ||
              ((ie = window.getSelection()) == null
                ? void 0
                : ie.toString().length) > 0
            )
              return;
            let An = Q.clientY - os.current.y,
              br = Q.clientX - os.current.x,
              At = (fe = e.swipeDirections) != null ? fe : uk(D);
            !G &&
              (Math.abs(br) > 1 || Math.abs(An) > 1) &&
              X(Math.abs(br) > Math.abs(An) ? "x" : "y");
            let On = { x: 0, y: 0 };
            (G === "y"
              ? (At.includes("top") || At.includes("bottom")) &&
                ((At.includes("top") && An < 0) ||
                  (At.includes("bottom") && An > 0)) &&
                (On.y = An)
              : G === "x" &&
                (At.includes("left") || At.includes("right")) &&
                ((At.includes("left") && br < 0) ||
                  (At.includes("right") && br > 0)) &&
                (On.x = br),
              (Math.abs(On.x) > 0 || Math.abs(On.y) > 0) && Wo(!0),
              (_t = wr.current) == null ||
                _t.style.setProperty("--swipe-amount-x", `${On.x}px`),
              (Nt = wr.current) == null ||
                Nt.style.setProperty("--swipe-amount-y", `${On.y}px`));
          },
        },
        oS && !h.jsx
          ? O.createElement(
              "button",
              {
                "aria-label": V,
                "data-disabled": pu,
                "data-close-button": !0,
                onClick:
                  pu || !ss
                    ? () => {}
                    : () => {
                        var Q;
                        (Nn(), (Q = h.onDismiss) == null || Q.call(h, h));
                      },
                className: Mt(
                  N == null ? void 0 : N.closeButton,
                  (s = h == null ? void 0 : h.classNames) == null
                    ? void 0
                    : s.closeButton,
                ),
              },
              (i = I == null ? void 0 : I.close) != null ? i : KP,
            )
          : null,
        h.jsx || x.isValidElement(h.title)
          ? h.jsx
            ? h.jsx
            : typeof h.title == "function"
              ? h.title()
              : h.title
          : O.createElement(
              O.Fragment,
              null,
              vt || h.icon || h.promise
                ? O.createElement(
                    "div",
                    {
                      "data-icon": "",
                      className: Mt(
                        N == null ? void 0 : N.icon,
                        (o = h == null ? void 0 : h.classNames) == null
                          ? void 0
                          : o.icon,
                      ),
                    },
                    h.promise || (h.type === "loading" && !h.icon)
                      ? h.icon || cS()
                      : null,
                    h.type !== "loading"
                      ? h.icon || (I == null ? void 0 : I[vt]) || VP(vt)
                      : null,
                  )
                : null,
              O.createElement(
                "div",
                {
                  "data-content": "",
                  className: Mt(
                    N == null ? void 0 : N.content,
                    (a = h == null ? void 0 : h.classNames) == null
                      ? void 0
                      : a.content,
                  ),
                },
                O.createElement(
                  "div",
                  {
                    "data-title": "",
                    className: Mt(
                      N == null ? void 0 : N.title,
                      (l = h == null ? void 0 : h.classNames) == null
                        ? void 0
                        : l.title,
                    ),
                  },
                  typeof h.title == "function" ? h.title() : h.title,
                ),
                h.description
                  ? O.createElement(
                      "div",
                      {
                        "data-description": "",
                        className: Mt(
                          Y,
                          iS,
                          N == null ? void 0 : N.description,
                          (u = h == null ? void 0 : h.classNames) == null
                            ? void 0
                            : u.description,
                        ),
                      },
                      typeof h.description == "function"
                        ? h.description()
                        : h.description,
                    )
                  : null,
              ),
              x.isValidElement(h.cancel)
                ? h.cancel
                : h.cancel && fa(h.cancel)
                  ? O.createElement(
                      "button",
                      {
                        "data-button": !0,
                        "data-cancel": !0,
                        style: h.cancelButtonStyle || k,
                        onClick: (Q) => {
                          var ie, fe;
                          fa(h.cancel) &&
                            ss &&
                            ((fe = (ie = h.cancel).onClick) == null ||
                              fe.call(ie, Q),
                            Nn());
                        },
                        className: Mt(
                          N == null ? void 0 : N.cancelButton,
                          (c = h == null ? void 0 : h.classNames) == null
                            ? void 0
                            : c.cancelButton,
                        ),
                      },
                      h.cancel.label,
                    )
                  : null,
              x.isValidElement(h.action)
                ? h.action
                : h.action && fa(h.action)
                  ? O.createElement(
                      "button",
                      {
                        "data-button": !0,
                        "data-action": !0,
                        style: h.actionButtonStyle || $,
                        onClick: (Q) => {
                          var ie, fe;
                          fa(h.action) &&
                            ((fe = (ie = h.action).onClick) == null ||
                              fe.call(ie, Q),
                            !Q.defaultPrevented && Nn());
                        },
                        className: Mt(
                          N == null ? void 0 : N.actionButton,
                          (d = h == null ? void 0 : h.classNames) == null
                            ? void 0
                            : d.actionButton,
                        ),
                      },
                      h.action.label,
                    )
                  : null,
            ),
      );
    };
    function bm() {
      if (typeof window > "u" || typeof document > "u") return "ltr";
      let e = document.documentElement.getAttribute("dir");
      return e === "auto" || !e
        ? window.getComputedStyle(document.documentElement).direction
        : e;
    }
    function dk(e, t) {
      let n = {};
      return (
        [e, t].forEach((r, s) => {
          let i = s === 1,
            o = i ? "--mobile-offset" : "--offset",
            a = i ? sk : rk;
          function l(u) {
            ["top", "right", "bottom", "left"].forEach((c) => {
              n[`${o}-${c}`] = typeof u == "number" ? `${u}px` : u;
            });
          }
          typeof r == "number" || typeof r == "string"
            ? l(r)
            : typeof r == "object"
              ? ["top", "right", "bottom", "left"].forEach((u) => {
                  r[u] === void 0
                    ? (n[`${o}-${u}`] = a)
                    : (n[`${o}-${u}`] =
                        typeof r[u] == "number" ? `${r[u]}px` : r[u]);
                })
              : l(a);
        }),
        n
      );
    }
    var fk = x.forwardRef(function (e, t) {
      let {
          invert: n,
          position: r = "bottom-right",
          hotkey: s = ["altKey", "KeyT"],
          expand: i,
          closeButton: o,
          className: a,
          offset: l,
          mobileOffset: u,
          theme: c = "light",
          richColors: d,
          duration: f,
          style: h,
          visibleToasts: b = nk,
          toastOptions: g,
          dir: w = bm(),
          gap: m = ok,
          loadingIcon: p,
          icons: y,
          containerAriaLabel: S = "Notifications",
          pauseWhenPageIsHidden: T,
        } = e,
        [E, C] = O.useState([]),
        P = O.useMemo(
          () =>
            Array.from(
              new Set(
                [r].concat(E.filter((F) => F.position).map((F) => F.position)),
              ),
            ),
          [E, r],
        ),
        [R, k] = O.useState([]),
        [$, L] = O.useState(!1),
        [Y, j] = O.useState(!1),
        [D, z] = O.useState(
          c !== "system"
            ? c
            : typeof window < "u" &&
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light",
        ),
        B = O.useRef(null),
        _ = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        N = O.useRef(null),
        I = O.useRef(!1),
        V = O.useCallback((F) => {
          C((G) => {
            var X;
            return (
              ((X = G.find((oe) => oe.id === F.id)) != null && X.delete) ||
                Ze.dismiss(F.id),
              G.filter(({ id: oe }) => oe !== F.id)
            );
          });
        }, []);
      return (
        O.useEffect(
          () =>
            Ze.subscribe((F) => {
              if (F.dismiss) {
                C((G) =>
                  G.map((X) => (X.id === F.id ? { ...X, delete: !0 } : X)),
                );
                return;
              }
              setTimeout(() => {
                H0.flushSync(() => {
                  C((G) => {
                    let X = G.findIndex((oe) => oe.id === F.id);
                    return X !== -1
                      ? [...G.slice(0, X), { ...G[X], ...F }, ...G.slice(X + 1)]
                      : [F, ...G];
                  });
                });
              });
            }),
          [],
        ),
        O.useEffect(() => {
          if (c !== "system") {
            z(c);
            return;
          }
          if (
            (c === "system" &&
              (window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
                ? z("dark")
                : z("light")),
            typeof window > "u")
          )
            return;
          let F = window.matchMedia("(prefers-color-scheme: dark)");
          try {
            F.addEventListener("change", ({ matches: G }) => {
              z(G ? "dark" : "light");
            });
          } catch {
            F.addListener(({ matches: X }) => {
              try {
                z(X ? "dark" : "light");
              } catch (oe) {
                console.error(oe);
              }
            });
          }
        }, [c]),
        O.useEffect(() => {
          E.length <= 1 && L(!1);
        }, [E]),
        O.useEffect(() => {
          let F = (G) => {
            var X, oe;
            (s.every((De) => G[De] || G.code === De) &&
              (L(!0), (X = B.current) == null || X.focus()),
              G.code === "Escape" &&
                (document.activeElement === B.current ||
                  ((oe = B.current) != null &&
                    oe.contains(document.activeElement))) &&
                L(!1));
          };
          return (
            document.addEventListener("keydown", F),
            () => document.removeEventListener("keydown", F)
          );
        }, [s]),
        O.useEffect(() => {
          if (B.current)
            return () => {
              N.current &&
                (N.current.focus({ preventScroll: !0 }),
                (N.current = null),
                (I.current = !1));
            };
        }, [B.current]),
        O.createElement(
          "section",
          {
            ref: t,
            "aria-label": `${S} ${_}`,
            tabIndex: -1,
            "aria-live": "polite",
            "aria-relevant": "additions text",
            "aria-atomic": "false",
            suppressHydrationWarning: !0,
          },
          P.map((F, G) => {
            var X;
            let [oe, De] = F.split("-");
            return E.length
              ? O.createElement(
                  "ol",
                  {
                    key: F,
                    dir: w === "auto" ? bm() : w,
                    tabIndex: -1,
                    ref: B,
                    className: a,
                    "data-sonner-toaster": !0,
                    "data-theme": D,
                    "data-y-position": oe,
                    "data-lifted": $ && E.length > 1 && !i,
                    "data-x-position": De,
                    style: {
                      "--front-toast-height": `${((X = R[0]) == null ? void 0 : X.height) || 0}px`,
                      "--width": `${ik}px`,
                      "--gap": `${m}px`,
                      ...h,
                      ...dk(l, u),
                    },
                    onBlur: (re) => {
                      I.current &&
                        !re.currentTarget.contains(re.relatedTarget) &&
                        ((I.current = !1),
                        N.current &&
                          (N.current.focus({ preventScroll: !0 }),
                          (N.current = null)));
                    },
                    onFocus: (re) => {
                      (re.target instanceof HTMLElement &&
                        re.target.dataset.dismissible === "false") ||
                        I.current ||
                        ((I.current = !0), (N.current = re.relatedTarget));
                    },
                    onMouseEnter: () => L(!0),
                    onMouseMove: () => L(!0),
                    onMouseLeave: () => {
                      Y || L(!1);
                    },
                    onDragEnd: () => L(!1),
                    onPointerDown: (re) => {
                      (re.target instanceof HTMLElement &&
                        re.target.dataset.dismissible === "false") ||
                        j(!0);
                    },
                    onPointerUp: () => j(!1),
                  },
                  E.filter(
                    (re) => (!re.position && G === 0) || re.position === F,
                  ).map((re, ts) => {
                    var kn, xr;
                    return O.createElement(ck, {
                      key: re.id,
                      icons: y,
                      index: ts,
                      toast: re,
                      defaultRichColors: d,
                      duration:
                        (kn = g == null ? void 0 : g.duration) != null ? kn : f,
                      className: g == null ? void 0 : g.className,
                      descriptionClassName:
                        g == null ? void 0 : g.descriptionClassName,
                      invert: n,
                      visibleToasts: b,
                      closeButton:
                        (xr = g == null ? void 0 : g.closeButton) != null
                          ? xr
                          : o,
                      interacting: Y,
                      position: F,
                      style: g == null ? void 0 : g.style,
                      unstyled: g == null ? void 0 : g.unstyled,
                      classNames: g == null ? void 0 : g.classNames,
                      cancelButtonStyle:
                        g == null ? void 0 : g.cancelButtonStyle,
                      actionButtonStyle:
                        g == null ? void 0 : g.actionButtonStyle,
                      removeToast: V,
                      toasts: E.filter((Rn) => Rn.position == re.position),
                      heights: R.filter((Rn) => Rn.position == re.position),
                      setHeights: k,
                      expandByDefault: i,
                      gap: m,
                      loadingIcon: p,
                      expanded: $,
                      pauseWhenPageIsHidden: T,
                      swipeDirections: e.swipeDirections,
                    });
                  }),
                )
              : null;
          }),
        )
      );
    });
    const hk = ({ ...e }) => {
        const { theme: t = "system" } = FP();
        return v.jsx(fk, {
          theme: t,
          className: "toaster group",
          toastOptions: {
            classNames: {
              toast:
                "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
              description: "group-[.toast]:text-muted-foreground",
              actionButton:
                "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
              cancelButton:
                "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
            },
          },
          ...e,
        });
      },
      pk = ["top", "right", "bottom", "left"],
      cr = Math.min,
      ut = Math.max,
      pl = Math.round,
      ha = Math.floor,
      sn = (e) => ({ x: e, y: e }),
      mk = { left: "right", right: "left", bottom: "top", top: "bottom" },
      gk = { start: "end", end: "start" };
    function gd(e, t, n) {
      return ut(e, cr(t, n));
    }
    function Tn(e, t) {
      return typeof e == "function" ? e(t) : e;
    }
    function En(e) {
      return e.split("-")[0];
    }
    function ai(e) {
      return e.split("-")[1];
    }
    function nh(e) {
      return e === "x" ? "y" : "x";
    }
    function rh(e) {
      return e === "y" ? "height" : "width";
    }
    const yk = new Set(["top", "bottom"]);
    function tn(e) {
      return yk.has(En(e)) ? "y" : "x";
    }
    function sh(e) {
      return nh(tn(e));
    }
    function vk(e, t, n) {
      n === void 0 && (n = !1);
      const r = ai(e),
        s = sh(e),
        i = rh(s);
      let o =
        s === "x"
          ? r === (n ? "end" : "start")
            ? "right"
            : "left"
          : r === "start"
            ? "bottom"
            : "top";
      return (t.reference[i] > t.floating[i] && (o = ml(o)), [o, ml(o)]);
    }
    function xk(e) {
      const t = ml(e);
      return [yd(e), t, yd(t)];
    }
    function yd(e) {
      return e.replace(/start|end/g, (t) => gk[t]);
    }
    const Sm = ["left", "right"],
      Tm = ["right", "left"],
      wk = ["top", "bottom"],
      bk = ["bottom", "top"];
    function Sk(e, t, n) {
      switch (e) {
        case "top":
        case "bottom":
          return n ? (t ? Tm : Sm) : t ? Sm : Tm;
        case "left":
        case "right":
          return t ? wk : bk;
        default:
          return [];
      }
    }
    function Tk(e, t, n, r) {
      const s = ai(e);
      let i = Sk(En(e), n === "start", r);
      return (
        s && ((i = i.map((o) => o + "-" + s)), t && (i = i.concat(i.map(yd)))),
        i
      );
    }
    function ml(e) {
      return e.replace(/left|right|bottom|top/g, (t) => mk[t]);
    }
    function Ek(e) {
      return { top: 0, right: 0, bottom: 0, left: 0, ...e };
    }
    function Mx(e) {
      return typeof e != "number"
        ? Ek(e)
        : { top: e, right: e, bottom: e, left: e };
    }
    function gl(e) {
      const { x: t, y: n, width: r, height: s } = e;
      return {
        width: r,
        height: s,
        top: n,
        left: t,
        right: t + r,
        bottom: n + s,
        x: t,
        y: n,
      };
    }
    function Em(e, t, n) {
      let { reference: r, floating: s } = e;
      const i = tn(t),
        o = sh(t),
        a = rh(o),
        l = En(t),
        u = i === "y",
        c = r.x + r.width / 2 - s.width / 2,
        d = r.y + r.height / 2 - s.height / 2,
        f = r[a] / 2 - s[a] / 2;
      let h;
      switch (l) {
        case "top":
          h = { x: c, y: r.y - s.height };
          break;
        case "bottom":
          h = { x: c, y: r.y + r.height };
          break;
        case "right":
          h = { x: r.x + r.width, y: d };
          break;
        case "left":
          h = { x: r.x - s.width, y: d };
          break;
        default:
          h = { x: r.x, y: r.y };
      }
      switch (ai(t)) {
        case "start":
          h[o] -= f * (n && u ? -1 : 1);
          break;
        case "end":
          h[o] += f * (n && u ? -1 : 1);
          break;
      }
      return h;
    }
    const Ck = async (e, t, n) => {
      const {
          placement: r = "bottom",
          strategy: s = "absolute",
          middleware: i = [],
          platform: o,
        } = n,
        a = i.filter(Boolean),
        l = await (o.isRTL == null ? void 0 : o.isRTL(t));
      let u = await o.getElementRects({
          reference: e,
          floating: t,
          strategy: s,
        }),
        { x: c, y: d } = Em(u, r, l),
        f = r,
        h = {},
        b = 0;
      for (let g = 0; g < a.length; g++) {
        const { name: w, fn: m } = a[g],
          {
            x: p,
            y,
            data: S,
            reset: T,
          } = await m({
            x: c,
            y: d,
            initialPlacement: r,
            placement: f,
            strategy: s,
            middlewareData: h,
            rects: u,
            platform: o,
            elements: { reference: e, floating: t },
          });
        ((c = p ?? c),
          (d = y ?? d),
          (h = { ...h, [w]: { ...h[w], ...S } }),
          T &&
            b <= 50 &&
            (b++,
            typeof T == "object" &&
              (T.placement && (f = T.placement),
              T.rects &&
                (u =
                  T.rects === !0
                    ? await o.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: s,
                      })
                    : T.rects),
              ({ x: c, y: d } = Em(u, f, l))),
            (g = -1)));
      }
      return { x: c, y: d, placement: f, strategy: s, middlewareData: h };
    };
    async function yo(e, t) {
      var n;
      t === void 0 && (t = {});
      const { x: r, y: s, platform: i, rects: o, elements: a, strategy: l } = e,
        {
          boundary: u = "clippingAncestors",
          rootBoundary: c = "viewport",
          elementContext: d = "floating",
          altBoundary: f = !1,
          padding: h = 0,
        } = Tn(t, e),
        b = Mx(h),
        w = a[f ? (d === "floating" ? "reference" : "floating") : d],
        m = gl(
          await i.getClippingRect({
            element:
              (n = await (i.isElement == null ? void 0 : i.isElement(w))) ==
                null || n
                ? w
                : w.contextElement ||
                  (await (i.getDocumentElement == null
                    ? void 0
                    : i.getDocumentElement(a.floating))),
            boundary: u,
            rootBoundary: c,
            strategy: l,
          }),
        ),
        p =
          d === "floating"
            ? { x: r, y: s, width: o.floating.width, height: o.floating.height }
            : o.reference,
        y = await (i.getOffsetParent == null
          ? void 0
          : i.getOffsetParent(a.floating)),
        S = (await (i.isElement == null ? void 0 : i.isElement(y)))
          ? (await (i.getScale == null ? void 0 : i.getScale(y))) || {
              x: 1,
              y: 1,
            }
          : { x: 1, y: 1 },
        T = gl(
          i.convertOffsetParentRelativeRectToViewportRelativeRect
            ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                elements: a,
                rect: p,
                offsetParent: y,
                strategy: l,
              })
            : p,
        );
      return {
        top: (m.top - T.top + b.top) / S.y,
        bottom: (T.bottom - m.bottom + b.bottom) / S.y,
        left: (m.left - T.left + b.left) / S.x,
        right: (T.right - m.right + b.right) / S.x,
      };
    }
    const Pk = (e) => ({
        name: "arrow",
        options: e,
        async fn(t) {
          const {
              x: n,
              y: r,
              placement: s,
              rects: i,
              platform: o,
              elements: a,
              middlewareData: l,
            } = t,
            { element: u, padding: c = 0 } = Tn(e, t) || {};
          if (u == null) return {};
          const d = Mx(c),
            f = { x: n, y: r },
            h = sh(s),
            b = rh(h),
            g = await o.getDimensions(u),
            w = h === "y",
            m = w ? "top" : "left",
            p = w ? "bottom" : "right",
            y = w ? "clientHeight" : "clientWidth",
            S = i.reference[b] + i.reference[h] - f[h] - i.floating[b],
            T = f[h] - i.reference[h],
            E = await (o.getOffsetParent == null
              ? void 0
              : o.getOffsetParent(u));
          let C = E ? E[y] : 0;
          (!C || !(await (o.isElement == null ? void 0 : o.isElement(E)))) &&
            (C = a.floating[y] || i.floating[b]);
          const P = S / 2 - T / 2,
            R = C / 2 - g[b] / 2 - 1,
            k = cr(d[m], R),
            $ = cr(d[p], R),
            L = k,
            Y = C - g[b] - $,
            j = C / 2 - g[b] / 2 + P,
            D = gd(L, j, Y),
            z =
              !l.arrow &&
              ai(s) != null &&
              j !== D &&
              i.reference[b] / 2 - (j < L ? k : $) - g[b] / 2 < 0,
            B = z ? (j < L ? j - L : j - Y) : 0;
          return {
            [h]: f[h] + B,
            data: {
              [h]: D,
              centerOffset: j - D - B,
              ...(z && { alignmentOffset: B }),
            },
            reset: z,
          };
        },
      }),
      kk = function (e) {
        return (
          e === void 0 && (e = {}),
          {
            name: "flip",
            options: e,
            async fn(t) {
              var n, r;
              const {
                  placement: s,
                  middlewareData: i,
                  rects: o,
                  initialPlacement: a,
                  platform: l,
                  elements: u,
                } = t,
                {
                  mainAxis: c = !0,
                  crossAxis: d = !0,
                  fallbackPlacements: f,
                  fallbackStrategy: h = "bestFit",
                  fallbackAxisSideDirection: b = "none",
                  flipAlignment: g = !0,
                  ...w
                } = Tn(e, t);
              if ((n = i.arrow) != null && n.alignmentOffset) return {};
              const m = En(s),
                p = tn(a),
                y = En(a) === a,
                S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
                T = f || (y || !g ? [ml(a)] : xk(a)),
                E = b !== "none";
              !f && E && T.push(...Tk(a, g, b, S));
              const C = [a, ...T],
                P = await yo(t, w),
                R = [];
              let k = ((r = i.flip) == null ? void 0 : r.overflows) || [];
              if ((c && R.push(P[m]), d)) {
                const j = vk(s, o, S);
                R.push(P[j[0]], P[j[1]]);
              }
              if (
                ((k = [...k, { placement: s, overflows: R }]),
                !R.every((j) => j <= 0))
              ) {
                var $, L;
                const j = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1,
                  D = C[j];
                if (
                  D &&
                  (!(d === "alignment" ? p !== tn(D) : !1) ||
                    k.every((_) => _.overflows[0] > 0 && tn(_.placement) === p))
                )
                  return {
                    data: { index: j, overflows: k },
                    reset: { placement: D },
                  };
                let z =
                  (L = k
                    .filter((B) => B.overflows[0] <= 0)
                    .sort((B, _) => B.overflows[1] - _.overflows[1])[0]) == null
                    ? void 0
                    : L.placement;
                if (!z)
                  switch (h) {
                    case "bestFit": {
                      var Y;
                      const B =
                        (Y = k
                          .filter((_) => {
                            if (E) {
                              const N = tn(_.placement);
                              return N === p || N === "y";
                            }
                            return !0;
                          })
                          .map((_) => [
                            _.placement,
                            _.overflows
                              .filter((N) => N > 0)
                              .reduce((N, I) => N + I, 0),
                          ])
                          .sort((_, N) => _[1] - N[1])[0]) == null
                          ? void 0
                          : Y[0];
                      B && (z = B);
                      break;
                    }
                    case "initialPlacement":
                      z = a;
                      break;
                  }
                if (s !== z) return { reset: { placement: z } };
              }
              return {};
            },
          }
        );
      };
    function Cm(e, t) {
      return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width,
      };
    }
    function Pm(e) {
      return pk.some((t) => e[t] >= 0);
    }
    const Rk = function (e) {
        return (
          e === void 0 && (e = {}),
          {
            name: "hide",
            options: e,
            async fn(t) {
              const { rects: n } = t,
                { strategy: r = "referenceHidden", ...s } = Tn(e, t);
              switch (r) {
                case "referenceHidden": {
                  const i = await yo(t, { ...s, elementContext: "reference" }),
                    o = Cm(i, n.reference);
                  return {
                    data: { referenceHiddenOffsets: o, referenceHidden: Pm(o) },
                  };
                }
                case "escaped": {
                  const i = await yo(t, { ...s, altBoundary: !0 }),
                    o = Cm(i, n.floating);
                  return { data: { escapedOffsets: o, escaped: Pm(o) } };
                }
                default:
                  return {};
              }
            },
          }
        );
      },
      jx = new Set(["left", "top"]);
    async function _k(e, t) {
      const { placement: n, platform: r, elements: s } = e,
        i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)),
        o = En(n),
        a = ai(n),
        l = tn(n) === "y",
        u = jx.has(o) ? -1 : 1,
        c = i && l ? -1 : 1,
        d = Tn(t, e);
      let {
        mainAxis: f,
        crossAxis: h,
        alignmentAxis: b,
      } = typeof d == "number"
        ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
        : {
            mainAxis: d.mainAxis || 0,
            crossAxis: d.crossAxis || 0,
            alignmentAxis: d.alignmentAxis,
          };
      return (
        a && typeof b == "number" && (h = a === "end" ? b * -1 : b),
        l ? { x: h * c, y: f * u } : { x: f * u, y: h * c }
      );
    }
    const Nk = function (e) {
        return (
          e === void 0 && (e = 0),
          {
            name: "offset",
            options: e,
            async fn(t) {
              var n, r;
              const { x: s, y: i, placement: o, middlewareData: a } = t,
                l = await _k(t, e);
              return o === ((n = a.offset) == null ? void 0 : n.placement) &&
                (r = a.arrow) != null &&
                r.alignmentOffset
                ? {}
                : { x: s + l.x, y: i + l.y, data: { ...l, placement: o } };
            },
          }
        );
      },
      Ak = function (e) {
        return (
          e === void 0 && (e = {}),
          {
            name: "shift",
            options: e,
            async fn(t) {
              const { x: n, y: r, placement: s } = t,
                {
                  mainAxis: i = !0,
                  crossAxis: o = !1,
                  limiter: a = {
                    fn: (w) => {
                      let { x: m, y: p } = w;
                      return { x: m, y: p };
                    },
                  },
                  ...l
                } = Tn(e, t),
                u = { x: n, y: r },
                c = await yo(t, l),
                d = tn(En(s)),
                f = nh(d);
              let h = u[f],
                b = u[d];
              if (i) {
                const w = f === "y" ? "top" : "left",
                  m = f === "y" ? "bottom" : "right",
                  p = h + c[w],
                  y = h - c[m];
                h = gd(p, h, y);
              }
              if (o) {
                const w = d === "y" ? "top" : "left",
                  m = d === "y" ? "bottom" : "right",
                  p = b + c[w],
                  y = b - c[m];
                b = gd(p, b, y);
              }
              const g = a.fn({ ...t, [f]: h, [d]: b });
              return {
                ...g,
                data: { x: g.x - n, y: g.y - r, enabled: { [f]: i, [d]: o } },
              };
            },
          }
        );
      },
      Ok = function (e) {
        return (
          e === void 0 && (e = {}),
          {
            options: e,
            fn(t) {
              const {
                  x: n,
                  y: r,
                  placement: s,
                  rects: i,
                  middlewareData: o,
                } = t,
                {
                  offset: a = 0,
                  mainAxis: l = !0,
                  crossAxis: u = !0,
                } = Tn(e, t),
                c = { x: n, y: r },
                d = tn(s),
                f = nh(d);
              let h = c[f],
                b = c[d];
              const g = Tn(a, t),
                w =
                  typeof g == "number"
                    ? { mainAxis: g, crossAxis: 0 }
                    : { mainAxis: 0, crossAxis: 0, ...g };
              if (l) {
                const y = f === "y" ? "height" : "width",
                  S = i.reference[f] - i.floating[y] + w.mainAxis,
                  T = i.reference[f] + i.reference[y] - w.mainAxis;
                h < S ? (h = S) : h > T && (h = T);
              }
              if (u) {
                var m, p;
                const y = f === "y" ? "width" : "height",
                  S = jx.has(En(s)),
                  T =
                    i.reference[d] -
                    i.floating[y] +
                    ((S && ((m = o.offset) == null ? void 0 : m[d])) || 0) +
                    (S ? 0 : w.crossAxis),
                  E =
                    i.reference[d] +
                    i.reference[y] +
                    (S ? 0 : ((p = o.offset) == null ? void 0 : p[d]) || 0) -
                    (S ? w.crossAxis : 0);
                b < T ? (b = T) : b > E && (b = E);
              }
              return { [f]: h, [d]: b };
            },
          }
        );
      },
      Mk = function (e) {
        return (
          e === void 0 && (e = {}),
          {
            name: "size",
            options: e,
            async fn(t) {
              var n, r;
              const { placement: s, rects: i, platform: o, elements: a } = t,
                { apply: l = () => {}, ...u } = Tn(e, t),
                c = await yo(t, u),
                d = En(s),
                f = ai(s),
                h = tn(s) === "y",
                { width: b, height: g } = i.floating;
              let w, m;
              d === "top" || d === "bottom"
                ? ((w = d),
                  (m =
                    f ===
                    ((await (o.isRTL == null ? void 0 : o.isRTL(a.floating)))
                      ? "start"
                      : "end")
                      ? "left"
                      : "right"))
                : ((m = d), (w = f === "end" ? "top" : "bottom"));
              const p = g - c.top - c.bottom,
                y = b - c.left - c.right,
                S = cr(g - c[w], p),
                T = cr(b - c[m], y),
                E = !t.middlewareData.shift;
              let C = S,
                P = T;
              if (
                ((n = t.middlewareData.shift) != null && n.enabled.x && (P = y),
                (r = t.middlewareData.shift) != null && r.enabled.y && (C = p),
                E && !f)
              ) {
                const k = ut(c.left, 0),
                  $ = ut(c.right, 0),
                  L = ut(c.top, 0),
                  Y = ut(c.bottom, 0);
                h
                  ? (P =
                      b -
                      2 * (k !== 0 || $ !== 0 ? k + $ : ut(c.left, c.right)))
                  : (C =
                      g -
                      2 * (L !== 0 || Y !== 0 ? L + Y : ut(c.top, c.bottom)));
              }
              await l({ ...t, availableWidth: P, availableHeight: C });
              const R = await o.getDimensions(a.floating);
              return b !== R.width || g !== R.height
                ? { reset: { rects: !0 } }
                : {};
            },
          }
        );
      };
    function Yl() {
      return typeof window < "u";
    }
    function li(e) {
      return Dx(e) ? (e.nodeName || "").toLowerCase() : "#document";
    }
    function ft(e) {
      var t;
      return (
        (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
        window
      );
    }
    function cn(e) {
      var t;
      return (t = (Dx(e) ? e.ownerDocument : e.document) || window.document) ==
        null
        ? void 0
        : t.documentElement;
    }
    function Dx(e) {
      return Yl() ? e instanceof Node || e instanceof ft(e).Node : !1;
    }
    function Kt(e) {
      return Yl() ? e instanceof Element || e instanceof ft(e).Element : !1;
    }
    function ln(e) {
      return Yl()
        ? e instanceof HTMLElement || e instanceof ft(e).HTMLElement
        : !1;
    }
    function km(e) {
      return !Yl() || typeof ShadowRoot > "u"
        ? !1
        : e instanceof ShadowRoot || e instanceof ft(e).ShadowRoot;
    }
    const jk = new Set(["inline", "contents"]);
    function Lo(e) {
      const { overflow: t, overflowX: n, overflowY: r, display: s } = Gt(e);
      return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !jk.has(s);
    }
    const Dk = new Set(["table", "td", "th"]);
    function Lk(e) {
      return Dk.has(li(e));
    }
    const Ik = [":popover-open", ":modal"];
    function Ql(e) {
      return Ik.some((t) => {
        try {
          return e.matches(t);
        } catch {
          return !1;
        }
      });
    }
    const Fk = ["transform", "translate", "scale", "rotate", "perspective"],
      Vk = [
        "transform",
        "translate",
        "scale",
        "rotate",
        "perspective",
        "filter",
      ],
      $k = ["paint", "layout", "strict", "content"];
    function ih(e) {
      const t = oh(),
        n = Kt(e) ? Gt(e) : e;
      return (
        Fk.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
        (n.containerType ? n.containerType !== "normal" : !1) ||
        (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
        (!t && (n.filter ? n.filter !== "none" : !1)) ||
        Vk.some((r) => (n.willChange || "").includes(r)) ||
        $k.some((r) => (n.contain || "").includes(r))
      );
    }
    function zk(e) {
      let t = dr(e);
      for (; ln(t) && !Js(t); ) {
        if (ih(t)) return t;
        if (Ql(t)) return null;
        t = dr(t);
      }
      return null;
    }
    function oh() {
      return typeof CSS > "u" || !CSS.supports
        ? !1
        : CSS.supports("-webkit-backdrop-filter", "none");
    }
    const Bk = new Set(["html", "body", "#document"]);
    function Js(e) {
      return Bk.has(li(e));
    }
    function Gt(e) {
      return ft(e).getComputedStyle(e);
    }
    function ql(e) {
      return Kt(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
    }
    function dr(e) {
      if (li(e) === "html") return e;
      const t = e.assignedSlot || e.parentNode || (km(e) && e.host) || cn(e);
      return km(t) ? t.host : t;
    }
    function Lx(e) {
      const t = dr(e);
      return Js(t)
        ? e.ownerDocument
          ? e.ownerDocument.body
          : e.body
        : ln(t) && Lo(t)
          ? t
          : Lx(t);
    }
    function vo(e, t, n) {
      var r;
      (t === void 0 && (t = []), n === void 0 && (n = !0));
      const s = Lx(e),
        i = s === ((r = e.ownerDocument) == null ? void 0 : r.body),
        o = ft(s);
      if (i) {
        const a = vd(o);
        return t.concat(
          o,
          o.visualViewport || [],
          Lo(s) ? s : [],
          a && n ? vo(a) : [],
        );
      }
      return t.concat(s, vo(s, [], n));
    }
    function vd(e) {
      return e.parent && Object.getPrototypeOf(e.parent)
        ? e.frameElement
        : null;
    }
    function Ix(e) {
      const t = Gt(e);
      let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
      const s = ln(e),
        i = s ? e.offsetWidth : n,
        o = s ? e.offsetHeight : r,
        a = pl(n) !== i || pl(r) !== o;
      return (a && ((n = i), (r = o)), { width: n, height: r, $: a });
    }
    function ah(e) {
      return Kt(e) ? e : e.contextElement;
    }
    function Ds(e) {
      const t = ah(e);
      if (!ln(t)) return sn(1);
      const n = t.getBoundingClientRect(),
        { width: r, height: s, $: i } = Ix(t);
      let o = (i ? pl(n.width) : n.width) / r,
        a = (i ? pl(n.height) : n.height) / s;
      return (
        (!o || !Number.isFinite(o)) && (o = 1),
        (!a || !Number.isFinite(a)) && (a = 1),
        { x: o, y: a }
      );
    }
    const Uk = sn(0);
    function Fx(e) {
      const t = ft(e);
      return !oh() || !t.visualViewport
        ? Uk
        : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
    }
    function Wk(e, t, n) {
      return (t === void 0 && (t = !1), !n || (t && n !== ft(e)) ? !1 : t);
    }
    function qr(e, t, n, r) {
      (t === void 0 && (t = !1), n === void 0 && (n = !1));
      const s = e.getBoundingClientRect(),
        i = ah(e);
      let o = sn(1);
      t && (r ? Kt(r) && (o = Ds(r)) : (o = Ds(e)));
      const a = Wk(i, n, r) ? Fx(i) : sn(0);
      let l = (s.left + a.x) / o.x,
        u = (s.top + a.y) / o.y,
        c = s.width / o.x,
        d = s.height / o.y;
      if (i) {
        const f = ft(i),
          h = r && Kt(r) ? ft(r) : r;
        let b = f,
          g = vd(b);
        for (; g && r && h !== b; ) {
          const w = Ds(g),
            m = g.getBoundingClientRect(),
            p = Gt(g),
            y = m.left + (g.clientLeft + parseFloat(p.paddingLeft)) * w.x,
            S = m.top + (g.clientTop + parseFloat(p.paddingTop)) * w.y;
          ((l *= w.x),
            (u *= w.y),
            (c *= w.x),
            (d *= w.y),
            (l += y),
            (u += S),
            (b = ft(g)),
            (g = vd(b)));
        }
      }
      return gl({ width: c, height: d, x: l, y: u });
    }
    function lh(e, t) {
      const n = ql(e).scrollLeft;
      return t ? t.left + n : qr(cn(e)).left + n;
    }
    function Vx(e, t, n) {
      n === void 0 && (n = !1);
      const r = e.getBoundingClientRect(),
        s = r.left + t.scrollLeft - (n ? 0 : lh(e, r)),
        i = r.top + t.scrollTop;
      return { x: s, y: i };
    }
    function Hk(e) {
      let { elements: t, rect: n, offsetParent: r, strategy: s } = e;
      const i = s === "fixed",
        o = cn(r),
        a = t ? Ql(t.floating) : !1;
      if (r === o || (a && i)) return n;
      let l = { scrollLeft: 0, scrollTop: 0 },
        u = sn(1);
      const c = sn(0),
        d = ln(r);
      if (
        (d || (!d && !i)) &&
        ((li(r) !== "body" || Lo(o)) && (l = ql(r)), ln(r))
      ) {
        const h = qr(r);
        ((u = Ds(r)), (c.x = h.x + r.clientLeft), (c.y = h.y + r.clientTop));
      }
      const f = o && !d && !i ? Vx(o, l, !0) : sn(0);
      return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y + f.y,
      };
    }
    function Kk(e) {
      return Array.from(e.getClientRects());
    }
    function Gk(e) {
      const t = cn(e),
        n = ql(e),
        r = e.ownerDocument.body,
        s = ut(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        i = ut(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
      let o = -n.scrollLeft + lh(e);
      const a = -n.scrollTop;
      return (
        Gt(r).direction === "rtl" &&
          (o += ut(t.clientWidth, r.clientWidth) - s),
        { width: s, height: i, x: o, y: a }
      );
    }
    function Yk(e, t) {
      const n = ft(e),
        r = cn(e),
        s = n.visualViewport;
      let i = r.clientWidth,
        o = r.clientHeight,
        a = 0,
        l = 0;
      if (s) {
        ((i = s.width), (o = s.height));
        const u = oh();
        (!u || (u && t === "fixed")) && ((a = s.offsetLeft), (l = s.offsetTop));
      }
      return { width: i, height: o, x: a, y: l };
    }
    const Qk = new Set(["absolute", "fixed"]);
    function qk(e, t) {
      const n = qr(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        s = n.left + e.clientLeft,
        i = ln(e) ? Ds(e) : sn(1),
        o = e.clientWidth * i.x,
        a = e.clientHeight * i.y,
        l = s * i.x,
        u = r * i.y;
      return { width: o, height: a, x: l, y: u };
    }
    function Rm(e, t, n) {
      let r;
      if (t === "viewport") r = Yk(e, n);
      else if (t === "document") r = Gk(cn(e));
      else if (Kt(t)) r = qk(t, n);
      else {
        const s = Fx(e);
        r = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
      }
      return gl(r);
    }
    function $x(e, t) {
      const n = dr(e);
      return n === t || !Kt(n) || Js(n)
        ? !1
        : Gt(n).position === "fixed" || $x(n, t);
    }
    function Xk(e, t) {
      const n = t.get(e);
      if (n) return n;
      let r = vo(e, [], !1).filter((a) => Kt(a) && li(a) !== "body"),
        s = null;
      const i = Gt(e).position === "fixed";
      let o = i ? dr(e) : e;
      for (; Kt(o) && !Js(o); ) {
        const a = Gt(o),
          l = ih(o);
        (!l && a.position === "fixed" && (s = null),
          (
            i
              ? !l && !s
              : (!l && a.position === "static" && !!s && Qk.has(s.position)) ||
                (Lo(o) && !l && $x(e, o))
          )
            ? (r = r.filter((c) => c !== o))
            : (s = a),
          (o = dr(o)));
      }
      return (t.set(e, r), r);
    }
    function Zk(e) {
      let { element: t, boundary: n, rootBoundary: r, strategy: s } = e;
      const o = [
          ...(n === "clippingAncestors"
            ? Ql(t)
              ? []
              : Xk(t, this._c)
            : [].concat(n)),
          r,
        ],
        a = o[0],
        l = o.reduce(
          (u, c) => {
            const d = Rm(t, c, s);
            return (
              (u.top = ut(d.top, u.top)),
              (u.right = cr(d.right, u.right)),
              (u.bottom = cr(d.bottom, u.bottom)),
              (u.left = ut(d.left, u.left)),
              u
            );
          },
          Rm(t, a, s),
        );
      return {
        width: l.right - l.left,
        height: l.bottom - l.top,
        x: l.left,
        y: l.top,
      };
    }
    function Jk(e) {
      const { width: t, height: n } = Ix(e);
      return { width: t, height: n };
    }
    function eR(e, t, n) {
      const r = ln(t),
        s = cn(t),
        i = n === "fixed",
        o = qr(e, !0, i, t);
      let a = { scrollLeft: 0, scrollTop: 0 };
      const l = sn(0);
      function u() {
        l.x = lh(s);
      }
      if (r || (!r && !i))
        if (((li(t) !== "body" || Lo(s)) && (a = ql(t)), r)) {
          const h = qr(t, !0, i, t);
          ((l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop));
        } else s && u();
      i && !r && s && u();
      const c = s && !r && !i ? Vx(s, a) : sn(0),
        d = o.left + a.scrollLeft - l.x - c.x,
        f = o.top + a.scrollTop - l.y - c.y;
      return { x: d, y: f, width: o.width, height: o.height };
    }
    function Ku(e) {
      return Gt(e).position === "static";
    }
    function _m(e, t) {
      if (!ln(e) || Gt(e).position === "fixed") return null;
      if (t) return t(e);
      let n = e.offsetParent;
      return (cn(e) === n && (n = n.ownerDocument.body), n);
    }
    function zx(e, t) {
      const n = ft(e);
      if (Ql(e)) return n;
      if (!ln(e)) {
        let s = dr(e);
        for (; s && !Js(s); ) {
          if (Kt(s) && !Ku(s)) return s;
          s = dr(s);
        }
        return n;
      }
      let r = _m(e, t);
      for (; r && Lk(r) && Ku(r); ) r = _m(r, t);
      return r && Js(r) && Ku(r) && !ih(r) ? n : r || zk(e) || n;
    }
    const tR = async function (e) {
      const t = this.getOffsetParent || zx,
        n = this.getDimensions,
        r = await n(e.floating);
      return {
        reference: eR(e.reference, await t(e.floating), e.strategy),
        floating: { x: 0, y: 0, width: r.width, height: r.height },
      };
    };
    function nR(e) {
      return Gt(e).direction === "rtl";
    }
    const rR = {
      convertOffsetParentRelativeRectToViewportRelativeRect: Hk,
      getDocumentElement: cn,
      getClippingRect: Zk,
      getOffsetParent: zx,
      getElementRects: tR,
      getClientRects: Kk,
      getDimensions: Jk,
      getScale: Ds,
      isElement: Kt,
      isRTL: nR,
    };
    function Bx(e, t) {
      return (
        e.x === t.x &&
        e.y === t.y &&
        e.width === t.width &&
        e.height === t.height
      );
    }
    function sR(e, t) {
      let n = null,
        r;
      const s = cn(e);
      function i() {
        var a;
        (clearTimeout(r), (a = n) == null || a.disconnect(), (n = null));
      }
      function o(a, l) {
        (a === void 0 && (a = !1), l === void 0 && (l = 1), i());
        const u = e.getBoundingClientRect(),
          { left: c, top: d, width: f, height: h } = u;
        if ((a || t(), !f || !h)) return;
        const b = ha(d),
          g = ha(s.clientWidth - (c + f)),
          w = ha(s.clientHeight - (d + h)),
          m = ha(c),
          y = {
            rootMargin: -b + "px " + -g + "px " + -w + "px " + -m + "px",
            threshold: ut(0, cr(1, l)) || 1,
          };
        let S = !0;
        function T(E) {
          const C = E[0].intersectionRatio;
          if (C !== l) {
            if (!S) return o();
            C
              ? o(!1, C)
              : (r = setTimeout(() => {
                  o(!1, 1e-7);
                }, 1e3));
          }
          (C === 1 && !Bx(u, e.getBoundingClientRect()) && o(), (S = !1));
        }
        try {
          n = new IntersectionObserver(T, { ...y, root: s.ownerDocument });
        } catch {
          n = new IntersectionObserver(T, y);
        }
        n.observe(e);
      }
      return (o(!0), i);
    }
    function iR(e, t, n, r) {
      r === void 0 && (r = {});
      const {
          ancestorScroll: s = !0,
          ancestorResize: i = !0,
          elementResize: o = typeof ResizeObserver == "function",
          layoutShift: a = typeof IntersectionObserver == "function",
          animationFrame: l = !1,
        } = r,
        u = ah(e),
        c = s || i ? [...(u ? vo(u) : []), ...vo(t)] : [];
      c.forEach((m) => {
        (s && m.addEventListener("scroll", n, { passive: !0 }),
          i && m.addEventListener("resize", n));
      });
      const d = u && a ? sR(u, n) : null;
      let f = -1,
        h = null;
      o &&
        ((h = new ResizeObserver((m) => {
          let [p] = m;
          (p &&
            p.target === u &&
            h &&
            (h.unobserve(t),
            cancelAnimationFrame(f),
            (f = requestAnimationFrame(() => {
              var y;
              (y = h) == null || y.observe(t);
            }))),
            n());
        })),
        u && !l && h.observe(u),
        h.observe(t));
      let b,
        g = l ? qr(e) : null;
      l && w();
      function w() {
        const m = qr(e);
        (g && !Bx(g, m) && n(), (g = m), (b = requestAnimationFrame(w)));
      }
      return (
        n(),
        () => {
          var m;
          (c.forEach((p) => {
            (s && p.removeEventListener("scroll", n),
              i && p.removeEventListener("resize", n));
          }),
            d == null || d(),
            (m = h) == null || m.disconnect(),
            (h = null),
            l && cancelAnimationFrame(b));
        }
      );
    }
    const oR = Nk,
      aR = Ak,
      lR = kk,
      uR = Mk,
      cR = Rk,
      Nm = Pk,
      dR = Ok,
      fR = (e, t, n) => {
        const r = new Map(),
          s = { platform: rR, ...n },
          i = { ...s.platform, _c: r };
        return Ck(e, t, { ...s, platform: i });
      };
    var hR = typeof document < "u",
      pR = function () {},
      Va = hR ? x.useLayoutEffect : pR;
    function yl(e, t) {
      if (e === t) return !0;
      if (typeof e != typeof t) return !1;
      if (typeof e == "function" && e.toString() === t.toString()) return !0;
      let n, r, s;
      if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
          if (((n = e.length), n !== t.length)) return !1;
          for (r = n; r-- !== 0; ) if (!yl(e[r], t[r])) return !1;
          return !0;
        }
        if (((s = Object.keys(e)), (n = s.length), n !== Object.keys(t).length))
          return !1;
        for (r = n; r-- !== 0; )
          if (!{}.hasOwnProperty.call(t, s[r])) return !1;
        for (r = n; r-- !== 0; ) {
          const i = s[r];
          if (!(i === "_owner" && e.$$typeof) && !yl(e[i], t[i])) return !1;
        }
        return !0;
      }
      return e !== e && t !== t;
    }
    function Ux(e) {
      return typeof window > "u"
        ? 1
        : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
    }
    function Am(e, t) {
      const n = Ux(e);
      return Math.round(t * n) / n;
    }
    function Gu(e) {
      const t = x.useRef(e);
      return (
        Va(() => {
          t.current = e;
        }),
        t
      );
    }
    function mR(e) {
      e === void 0 && (e = {});
      const {
          placement: t = "bottom",
          strategy: n = "absolute",
          middleware: r = [],
          platform: s,
          elements: { reference: i, floating: o } = {},
          transform: a = !0,
          whileElementsMounted: l,
          open: u,
        } = e,
        [c, d] = x.useState({
          x: 0,
          y: 0,
          strategy: n,
          placement: t,
          middlewareData: {},
          isPositioned: !1,
        }),
        [f, h] = x.useState(r);
      yl(f, r) || h(r);
      const [b, g] = x.useState(null),
        [w, m] = x.useState(null),
        p = x.useCallback((_) => {
          _ !== E.current && ((E.current = _), g(_));
        }, []),
        y = x.useCallback((_) => {
          _ !== C.current && ((C.current = _), m(_));
        }, []),
        S = i || b,
        T = o || w,
        E = x.useRef(null),
        C = x.useRef(null),
        P = x.useRef(c),
        R = l != null,
        k = Gu(l),
        $ = Gu(s),
        L = Gu(u),
        Y = x.useCallback(() => {
          if (!E.current || !C.current) return;
          const _ = { placement: t, strategy: n, middleware: f };
          ($.current && (_.platform = $.current),
            fR(E.current, C.current, _).then((N) => {
              const I = { ...N, isPositioned: L.current !== !1 };
              j.current &&
                !yl(P.current, I) &&
                ((P.current = I),
                jo.flushSync(() => {
                  d(I);
                }));
            }));
        }, [f, t, n, $, L]);
      Va(() => {
        u === !1 &&
          P.current.isPositioned &&
          ((P.current.isPositioned = !1),
          d((_) => ({ ..._, isPositioned: !1 })));
      }, [u]);
      const j = x.useRef(!1);
      (Va(
        () => (
          (j.current = !0),
          () => {
            j.current = !1;
          }
        ),
        [],
      ),
        Va(() => {
          if ((S && (E.current = S), T && (C.current = T), S && T)) {
            if (k.current) return k.current(S, T, Y);
            Y();
          }
        }, [S, T, Y, k, R]));
      const D = x.useMemo(
          () => ({
            reference: E,
            floating: C,
            setReference: p,
            setFloating: y,
          }),
          [p, y],
        ),
        z = x.useMemo(() => ({ reference: S, floating: T }), [S, T]),
        B = x.useMemo(() => {
          const _ = { position: n, left: 0, top: 0 };
          if (!z.floating) return _;
          const N = Am(z.floating, c.x),
            I = Am(z.floating, c.y);
          return a
            ? {
                ..._,
                transform: "translate(" + N + "px, " + I + "px)",
                ...(Ux(z.floating) >= 1.5 && { willChange: "transform" }),
              }
            : { position: n, left: N, top: I };
        }, [n, a, z.floating, c.x, c.y]);
      return x.useMemo(
        () => ({ ...c, update: Y, refs: D, elements: z, floatingStyles: B }),
        [c, Y, D, z, B],
      );
    }
    const gR = (e) => {
        function t(n) {
          return {}.hasOwnProperty.call(n, "current");
        }
        return {
          name: "arrow",
          options: e,
          fn(n) {
            const { element: r, padding: s } =
              typeof e == "function" ? e(n) : e;
            return r && t(r)
              ? r.current != null
                ? Nm({ element: r.current, padding: s }).fn(n)
                : {}
              : r
                ? Nm({ element: r, padding: s }).fn(n)
                : {};
          },
        };
      },
      yR = (e, t) => ({ ...oR(e), options: [e, t] }),
      vR = (e, t) => ({ ...aR(e), options: [e, t] }),
      xR = (e, t) => ({ ...dR(e), options: [e, t] }),
      wR = (e, t) => ({ ...lR(e), options: [e, t] }),
      bR = (e, t) => ({ ...uR(e), options: [e, t] }),
      SR = (e, t) => ({ ...cR(e), options: [e, t] }),
      TR = (e, t) => ({ ...gR(e), options: [e, t] });
    var ER = "Arrow",
      Wx = x.forwardRef((e, t) => {
        const { children: n, width: r = 10, height: s = 5, ...i } = e;
        return v.jsx(it.svg, {
          ...i,
          ref: t,
          width: r,
          height: s,
          viewBox: "0 0 30 10",
          preserveAspectRatio: "none",
          children: e.asChild
            ? n
            : v.jsx("polygon", { points: "0,0 30,0 15,10" }),
        });
      });
    Wx.displayName = ER;
    var CR = Wx;
    function PR(e) {
      const [t, n] = x.useState(void 0);
      return (
        ur(() => {
          if (e) {
            n({ width: e.offsetWidth, height: e.offsetHeight });
            const r = new ResizeObserver((s) => {
              if (!Array.isArray(s) || !s.length) return;
              const i = s[0];
              let o, a;
              if ("borderBoxSize" in i) {
                const l = i.borderBoxSize,
                  u = Array.isArray(l) ? l[0] : l;
                ((o = u.inlineSize), (a = u.blockSize));
              } else ((o = e.offsetWidth), (a = e.offsetHeight));
              n({ width: o, height: a });
            });
            return (r.observe(e, { box: "border-box" }), () => r.unobserve(e));
          } else n(void 0);
        }, [e]),
        t
      );
    }
    var Hx = "Popper",
      [Kx, Gx] = Hl(Hx),
      [eL, Yx] = Kx(Hx),
      Qx = "PopperAnchor",
      qx = x.forwardRef((e, t) => {
        const { __scopePopper: n, virtualRef: r, ...s } = e,
          i = Yx(Qx, n),
          o = x.useRef(null),
          a = Ht(t, o);
        return (
          x.useEffect(() => {
            i.onAnchorChange((r == null ? void 0 : r.current) || o.current);
          }),
          r ? null : v.jsx(it.div, { ...s, ref: a })
        );
      });
    qx.displayName = Qx;
    var uh = "PopperContent",
      [kR, RR] = Kx(uh),
      Xx = x.forwardRef((e, t) => {
        var re, ts, kn, xr, Rn, ns;
        const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: s = 0,
            align: i = "center",
            alignOffset: o = 0,
            arrowPadding: a = 0,
            avoidCollisions: l = !0,
            collisionBoundary: u = [],
            collisionPadding: c = 0,
            sticky: d = "partial",
            hideWhenDetached: f = !1,
            updatePositionStrategy: h = "optimized",
            onPlaced: b,
            ...g
          } = e,
          w = Yx(uh, n),
          [m, p] = x.useState(null),
          y = Ht(t, (_n) => p(_n)),
          [S, T] = x.useState(null),
          E = PR(S),
          C = (E == null ? void 0 : E.width) ?? 0,
          P = (E == null ? void 0 : E.height) ?? 0,
          R = r + (i !== "center" ? "-" + i : ""),
          k =
            typeof c == "number"
              ? c
              : { top: 0, right: 0, bottom: 0, left: 0, ...c },
          $ = Array.isArray(u) ? u : [u],
          L = $.length > 0,
          Y = { padding: k, boundary: $.filter(NR), altBoundary: L },
          {
            refs: j,
            floatingStyles: D,
            placement: z,
            isPositioned: B,
            middlewareData: _,
          } = mR({
            strategy: "fixed",
            placement: R,
            whileElementsMounted: (..._n) =>
              iR(..._n, { animationFrame: h === "always" }),
            elements: { reference: w.anchor },
            middleware: [
              yR({ mainAxis: s + P, alignmentAxis: o }),
              l &&
                vR({
                  mainAxis: !0,
                  crossAxis: !1,
                  limiter: d === "partial" ? xR() : void 0,
                  ...Y,
                }),
              l && wR({ ...Y }),
              bR({
                ...Y,
                apply: ({
                  elements: _n,
                  rects: Uo,
                  availableWidth: du,
                  availableHeight: Wo,
                }) => {
                  const { width: fu, height: fi } = Uo.reference,
                    rs = _n.floating.style;
                  (rs.setProperty("--radix-popper-available-width", `${du}px`),
                    rs.setProperty(
                      "--radix-popper-available-height",
                      `${Wo}px`,
                    ),
                    rs.setProperty("--radix-popper-anchor-width", `${fu}px`),
                    rs.setProperty("--radix-popper-anchor-height", `${fi}px`));
                },
              }),
              S && TR({ element: S, padding: a }),
              AR({ arrowWidth: C, arrowHeight: P }),
              f && SR({ strategy: "referenceHidden", ...Y }),
            ],
          }),
          [N, I] = ew(z),
          V = lr(b);
        ur(() => {
          B && (V == null || V());
        }, [B, V]);
        const F = (re = _.arrow) == null ? void 0 : re.x,
          G = (ts = _.arrow) == null ? void 0 : ts.y,
          X = ((kn = _.arrow) == null ? void 0 : kn.centerOffset) !== 0,
          [oe, De] = x.useState();
        return (
          ur(() => {
            m && De(window.getComputedStyle(m).zIndex);
          }, [m]),
          v.jsx("div", {
            ref: j.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...D,
              transform: B ? D.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: oe,
              "--radix-popper-transform-origin": [
                (xr = _.transformOrigin) == null ? void 0 : xr.x,
                (Rn = _.transformOrigin) == null ? void 0 : Rn.y,
              ].join(" "),
              ...(((ns = _.hide) == null ? void 0 : ns.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none",
              }),
            },
            dir: e.dir,
            children: v.jsx(kR, {
              scope: n,
              placedSide: N,
              onArrowChange: T,
              arrowX: F,
              arrowY: G,
              shouldHideArrow: X,
              children: v.jsx(it.div, {
                "data-side": N,
                "data-align": I,
                ...g,
                ref: y,
                style: { ...g.style, animation: B ? void 0 : "none" },
              }),
            }),
          })
        );
      });
    Xx.displayName = uh;
    var Zx = "PopperArrow",
      _R = { top: "bottom", right: "left", bottom: "top", left: "right" },
      Jx = x.forwardRef(function (t, n) {
        const { __scopePopper: r, ...s } = t,
          i = RR(Zx, r),
          o = _R[i.placedSide];
        return v.jsx("span", {
          ref: i.onArrowChange,
          style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [o]: 0,
            transformOrigin: {
              top: "",
              right: "0 0",
              bottom: "center 0",
              left: "100% 0",
            }[i.placedSide],
            transform: {
              top: "translateY(100%)",
              right: "translateY(50%) rotate(90deg) translateX(-50%)",
              bottom: "rotate(180deg)",
              left: "translateY(50%) rotate(-90deg) translateX(50%)",
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0,
          },
          children: v.jsx(CR, {
            ...s,
            ref: n,
            style: { ...s.style, display: "block" },
          }),
        });
      });
    Jx.displayName = Zx;
    function NR(e) {
      return e !== null;
    }
    var AR = (e) => ({
      name: "transformOrigin",
      options: e,
      fn(t) {
        var w, m, p;
        const { placement: n, rects: r, middlewareData: s } = t,
          o = ((w = s.arrow) == null ? void 0 : w.centerOffset) !== 0,
          a = o ? 0 : e.arrowWidth,
          l = o ? 0 : e.arrowHeight,
          [u, c] = ew(n),
          d = { start: "0%", center: "50%", end: "100%" }[c],
          f = (((m = s.arrow) == null ? void 0 : m.x) ?? 0) + a / 2,
          h = (((p = s.arrow) == null ? void 0 : p.y) ?? 0) + l / 2;
        let b = "",
          g = "";
        return (
          u === "bottom"
            ? ((b = o ? d : `${f}px`), (g = `${-l}px`))
            : u === "top"
              ? ((b = o ? d : `${f}px`), (g = `${r.floating.height + l}px`))
              : u === "right"
                ? ((b = `${-l}px`), (g = o ? d : `${h}px`))
                : u === "left" &&
                  ((b = `${r.floating.width + l}px`), (g = o ? d : `${h}px`)),
          { data: { x: b, y: g } }
        );
      },
    });
    function ew(e) {
      const [t, n = "center"] = e.split("-");
      return [t, n];
    }
    var OR = qx,
      MR = Xx,
      jR = Jx,
      [Xl, tL] = Hl("Tooltip", [Gx]),
      ch = Gx(),
      tw = "TooltipProvider",
      DR = 700,
      Om = "tooltip.open",
      [LR, nw] = Xl(tw),
      rw = (e) => {
        const {
            __scopeTooltip: t,
            delayDuration: n = DR,
            skipDelayDuration: r = 300,
            disableHoverableContent: s = !1,
            children: i,
          } = e,
          o = x.useRef(!0),
          a = x.useRef(!1),
          l = x.useRef(0);
        return (
          x.useEffect(() => {
            const u = l.current;
            return () => window.clearTimeout(u);
          }, []),
          v.jsx(LR, {
            scope: t,
            isOpenDelayedRef: o,
            delayDuration: n,
            onOpen: x.useCallback(() => {
              (window.clearTimeout(l.current), (o.current = !1));
            }, []),
            onClose: x.useCallback(() => {
              (window.clearTimeout(l.current),
                (l.current = window.setTimeout(() => (o.current = !0), r)));
            }, [r]),
            isPointerInTransitRef: a,
            onPointerInTransitChange: x.useCallback((u) => {
              a.current = u;
            }, []),
            disableHoverableContent: s,
            children: i,
          })
        );
      };
    rw.displayName = tw;
    var sw = "Tooltip",
      [nL, Zl] = Xl(sw),
      xd = "TooltipTrigger",
      IR = x.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
          s = Zl(xd, n),
          i = nw(xd, n),
          o = ch(n),
          a = x.useRef(null),
          l = Ht(t, a, s.onTriggerChange),
          u = x.useRef(!1),
          c = x.useRef(!1),
          d = x.useCallback(() => (u.current = !1), []);
        return (
          x.useEffect(
            () => () => document.removeEventListener("pointerup", d),
            [d],
          ),
          v.jsx(OR, {
            asChild: !0,
            ...o,
            children: v.jsx(it.button, {
              "aria-describedby": s.open ? s.contentId : void 0,
              "data-state": s.stateAttribute,
              ...r,
              ref: l,
              onPointerMove: ke(e.onPointerMove, (f) => {
                f.pointerType !== "touch" &&
                  !c.current &&
                  !i.isPointerInTransitRef.current &&
                  (s.onTriggerEnter(), (c.current = !0));
              }),
              onPointerLeave: ke(e.onPointerLeave, () => {
                (s.onTriggerLeave(), (c.current = !1));
              }),
              onPointerDown: ke(e.onPointerDown, () => {
                (s.open && s.onClose(),
                  (u.current = !0),
                  document.addEventListener("pointerup", d, { once: !0 }));
              }),
              onFocus: ke(e.onFocus, () => {
                u.current || s.onOpen();
              }),
              onBlur: ke(e.onBlur, s.onClose),
              onClick: ke(e.onClick, s.onClose),
            }),
          })
        );
      });
    IR.displayName = xd;
    var FR = "TooltipPortal",
      [rL, VR] = Xl(FR, { forceMount: void 0 }),
      ei = "TooltipContent",
      iw = x.forwardRef((e, t) => {
        const n = VR(ei, e.__scopeTooltip),
          { forceMount: r = n.forceMount, side: s = "top", ...i } = e,
          o = Zl(ei, e.__scopeTooltip);
        return v.jsx(Xf, {
          present: r || o.open,
          children: o.disableHoverableContent
            ? v.jsx(ow, { side: s, ...i, ref: t })
            : v.jsx($R, { side: s, ...i, ref: t }),
        });
      }),
      $R = x.forwardRef((e, t) => {
        const n = Zl(ei, e.__scopeTooltip),
          r = nw(ei, e.__scopeTooltip),
          s = x.useRef(null),
          i = Ht(t, s),
          [o, a] = x.useState(null),
          { trigger: l, onClose: u } = n,
          c = s.current,
          { onPointerInTransitChange: d } = r,
          f = x.useCallback(() => {
            (a(null), d(!1));
          }, [d]),
          h = x.useCallback(
            (b, g) => {
              const w = b.currentTarget,
                m = { x: b.clientX, y: b.clientY },
                p = HR(m, w.getBoundingClientRect()),
                y = KR(m, p),
                S = GR(g.getBoundingClientRect()),
                T = QR([...y, ...S]);
              (a(T), d(!0));
            },
            [d],
          );
        return (
          x.useEffect(() => () => f(), [f]),
          x.useEffect(() => {
            if (l && c) {
              const b = (w) => h(w, c),
                g = (w) => h(w, l);
              return (
                l.addEventListener("pointerleave", b),
                c.addEventListener("pointerleave", g),
                () => {
                  (l.removeEventListener("pointerleave", b),
                    c.removeEventListener("pointerleave", g));
                }
              );
            }
          }, [l, c, h, f]),
          x.useEffect(() => {
            if (o) {
              const b = (g) => {
                const w = g.target,
                  m = { x: g.clientX, y: g.clientY },
                  p =
                    (l == null ? void 0 : l.contains(w)) ||
                    (c == null ? void 0 : c.contains(w)),
                  y = !YR(m, o);
                p ? f() : y && (f(), u());
              };
              return (
                document.addEventListener("pointermove", b),
                () => document.removeEventListener("pointermove", b)
              );
            }
          }, [l, c, o, u, f]),
          v.jsx(ow, { ...e, ref: i })
        );
      }),
      [zR, BR] = Xl(sw, { isInside: !1 }),
      UR = YE("TooltipContent"),
      ow = x.forwardRef((e, t) => {
        const {
            __scopeTooltip: n,
            children: r,
            "aria-label": s,
            onEscapeKeyDown: i,
            onPointerDownOutside: o,
            ...a
          } = e,
          l = Zl(ei, n),
          u = ch(n),
          { onClose: c } = l;
        return (
          x.useEffect(
            () => (
              document.addEventListener(Om, c),
              () => document.removeEventListener(Om, c)
            ),
            [c],
          ),
          x.useEffect(() => {
            if (l.trigger) {
              const d = (f) => {
                const h = f.target;
                h != null && h.contains(l.trigger) && c();
              };
              return (
                window.addEventListener("scroll", d, { capture: !0 }),
                () => window.removeEventListener("scroll", d, { capture: !0 })
              );
            }
          }, [l.trigger, c]),
          v.jsx(qf, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: i,
            onPointerDownOutside: o,
            onFocusOutside: (d) => d.preventDefault(),
            onDismiss: c,
            children: v.jsxs(MR, {
              "data-state": l.stateAttribute,
              ...u,
              ...a,
              ref: t,
              style: {
                ...a.style,
                "--radix-tooltip-content-transform-origin":
                  "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width":
                  "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height":
                  "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width":
                  "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height":
                  "var(--radix-popper-anchor-height)",
              },
              children: [
                v.jsx(UR, { children: r }),
                v.jsx(zR, {
                  scope: n,
                  isInside: !0,
                  children: v.jsx(xC, {
                    id: l.contentId,
                    role: "tooltip",
                    children: s || r,
                  }),
                }),
              ],
            }),
          })
        );
      });
    iw.displayName = ei;
    var aw = "TooltipArrow",
      WR = x.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
          s = ch(n);
        return BR(aw, n).isInside ? null : v.jsx(jR, { ...s, ...r, ref: t });
      });
    WR.displayName = aw;
    function HR(e, t) {
      const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        s = Math.abs(t.right - e.x),
        i = Math.abs(t.left - e.x);
      switch (Math.min(n, r, s, i)) {
        case i:
          return "left";
        case s:
          return "right";
        case n:
          return "top";
        case r:
          return "bottom";
        default:
          throw new Error("unreachable");
      }
    }
    function KR(e, t, n = 5) {
      const r = [];
      switch (t) {
        case "top":
          r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
          break;
        case "bottom":
          r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
          break;
        case "left":
          r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
          break;
        case "right":
          r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
          break;
      }
      return r;
    }
    function GR(e) {
      const { top: t, right: n, bottom: r, left: s } = e;
      return [
        { x: s, y: t },
        { x: n, y: t },
        { x: n, y: r },
        { x: s, y: r },
      ];
    }
    function YR(e, t) {
      const { x: n, y: r } = e;
      let s = !1;
      for (let i = 0, o = t.length - 1; i < t.length; o = i++) {
        const a = t[i],
          l = t[o],
          u = a.x,
          c = a.y,
          d = l.x,
          f = l.y;
        c > r != f > r && n < ((d - u) * (r - c)) / (f - c) + u && (s = !s);
      }
      return s;
    }
    function QR(e) {
      const t = e.slice();
      return (
        t.sort((n, r) =>
          n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
        ),
        qR(t)
      );
    }
    function qR(e) {
      if (e.length <= 1) return e.slice();
      const t = [];
      for (let r = 0; r < e.length; r++) {
        const s = e[r];
        for (; t.length >= 2; ) {
          const i = t[t.length - 1],
            o = t[t.length - 2];
          if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) t.pop();
          else break;
        }
        t.push(s);
      }
      t.pop();
      const n = [];
      for (let r = e.length - 1; r >= 0; r--) {
        const s = e[r];
        for (; n.length >= 2; ) {
          const i = n[n.length - 1],
            o = n[n.length - 2];
          if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) n.pop();
          else break;
        }
        n.push(s);
      }
      return (
        n.pop(),
        t.length === 1 &&
        n.length === 1 &&
        t[0].x === n[0].x &&
        t[0].y === n[0].y
          ? t
          : t.concat(n)
      );
    }
    var XR = rw,
      lw = iw;
    const ZR = XR,
      JR = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
        v.jsx(lw, {
          ref: r,
          sideOffset: t,
          className: es(
            "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            e,
          ),
          ...n,
        }),
      );
    JR.displayName = lw.displayName;
    var Jl = class {
        constructor() {
          ((this.listeners = new Set()),
            (this.subscribe = this.subscribe.bind(this)));
        }
        subscribe(e) {
          return (
            this.listeners.add(e),
            this.onSubscribe(),
            () => {
              (this.listeners.delete(e), this.onUnsubscribe());
            }
          );
        }
        hasListeners() {
          return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
      },
      eu = typeof window > "u" || "Deno" in globalThis;
    function It() {}
    function e_(e, t) {
      return typeof e == "function" ? e(t) : e;
    }
    function t_(e) {
      return typeof e == "number" && e >= 0 && e !== 1 / 0;
    }
    function n_(e, t) {
      return Math.max(e + (t || 0) - Date.now(), 0);
    }
    function wd(e, t) {
      return typeof e == "function" ? e(t) : e;
    }
    function r_(e, t) {
      return typeof e == "function" ? e(t) : e;
    }
    function Mm(e, t) {
      const {
        type: n = "all",
        exact: r,
        fetchStatus: s,
        predicate: i,
        queryKey: o,
        stale: a,
      } = e;
      if (o) {
        if (r) {
          if (t.queryHash !== dh(o, t.options)) return !1;
        } else if (!wo(t.queryKey, o)) return !1;
      }
      if (n !== "all") {
        const l = t.isActive();
        if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
      }
      return !(
        (typeof a == "boolean" && t.isStale() !== a) ||
        (s && s !== t.state.fetchStatus) ||
        (i && !i(t))
      );
    }
    function jm(e, t) {
      const { exact: n, status: r, predicate: s, mutationKey: i } = e;
      if (i) {
        if (!t.options.mutationKey) return !1;
        if (n) {
          if (xo(t.options.mutationKey) !== xo(i)) return !1;
        } else if (!wo(t.options.mutationKey, i)) return !1;
      }
      return !((r && t.state.status !== r) || (s && !s(t)));
    }
    function dh(e, t) {
      return ((t == null ? void 0 : t.queryKeyHashFn) || xo)(e);
    }
    function xo(e) {
      return JSON.stringify(e, (t, n) =>
        bd(n)
          ? Object.keys(n)
              .sort()
              .reduce((r, s) => ((r[s] = n[s]), r), {})
          : n,
      );
    }
    function wo(e, t) {
      return e === t
        ? !0
        : typeof e != typeof t
          ? !1
          : e && t && typeof e == "object" && typeof t == "object"
            ? Object.keys(t).every((n) => wo(e[n], t[n]))
            : !1;
    }
    function uw(e, t) {
      if (e === t) return e;
      const n = Dm(e) && Dm(t);
      if (n || (bd(e) && bd(t))) {
        const r = n ? e : Object.keys(e),
          s = r.length,
          i = n ? t : Object.keys(t),
          o = i.length,
          a = n ? [] : {},
          l = new Set(r);
        let u = 0;
        for (let c = 0; c < o; c++) {
          const d = n ? c : i[c];
          ((!n && l.has(d)) || n) && e[d] === void 0 && t[d] === void 0
            ? ((a[d] = void 0), u++)
            : ((a[d] = uw(e[d], t[d])),
              a[d] === e[d] && e[d] !== void 0 && u++);
        }
        return s === o && u === s ? e : a;
      }
      return t;
    }
    function Dm(e) {
      return Array.isArray(e) && e.length === Object.keys(e).length;
    }
    function bd(e) {
      if (!Lm(e)) return !1;
      const t = e.constructor;
      if (t === void 0) return !0;
      const n = t.prototype;
      return !(
        !Lm(n) ||
        !n.hasOwnProperty("isPrototypeOf") ||
        Object.getPrototypeOf(e) !== Object.prototype
      );
    }
    function Lm(e) {
      return Object.prototype.toString.call(e) === "[object Object]";
    }
    function s_(e) {
      return new Promise((t) => {
        setTimeout(t, e);
      });
    }
    function i_(e, t, n) {
      return typeof n.structuralSharing == "function"
        ? n.structuralSharing(e, t)
        : n.structuralSharing !== !1
          ? uw(e, t)
          : t;
    }
    function o_(e, t, n = 0) {
      const r = [...e, t];
      return n && r.length > n ? r.slice(1) : r;
    }
    function a_(e, t, n = 0) {
      const r = [t, ...e];
      return n && r.length > n ? r.slice(0, -1) : r;
    }
    var fh = Symbol();
    function cw(e, t) {
      return !e.queryFn && t != null && t.initialPromise
        ? () => t.initialPromise
        : !e.queryFn || e.queryFn === fh
          ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
          : e.queryFn;
    }
    var Lr,
      Bn,
      Fs,
      Sy,
      l_ =
        ((Sy = class extends Jl {
          constructor() {
            super();
            ne(this, Lr);
            ne(this, Bn);
            ne(this, Fs);
            q(this, Fs, (t) => {
              if (!eu && window.addEventListener) {
                const n = () => t();
                return (
                  window.addEventListener("visibilitychange", n, !1),
                  () => {
                    window.removeEventListener("visibilitychange", n);
                  }
                );
              }
            });
          }
          onSubscribe() {
            A(this, Bn) || this.setEventListener(A(this, Fs));
          }
          onUnsubscribe() {
            var t;
            this.hasListeners() ||
              ((t = A(this, Bn)) == null || t.call(this), q(this, Bn, void 0));
          }
          setEventListener(t) {
            var n;
            (q(this, Fs, t),
              (n = A(this, Bn)) == null || n.call(this),
              q(
                this,
                Bn,
                t((r) => {
                  typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
                }),
              ));
          }
          setFocused(t) {
            A(this, Lr) !== t && (q(this, Lr, t), this.onFocus());
          }
          onFocus() {
            const t = this.isFocused();
            this.listeners.forEach((n) => {
              n(t);
            });
          }
          isFocused() {
            var t;
            return typeof A(this, Lr) == "boolean"
              ? A(this, Lr)
              : ((t = globalThis.document) == null
                  ? void 0
                  : t.visibilityState) !== "hidden";
          }
        }),
        (Lr = new WeakMap()),
        (Bn = new WeakMap()),
        (Fs = new WeakMap()),
        Sy),
      dw = new l_(),
      Vs,
      Un,
      $s,
      Ty,
      u_ =
        ((Ty = class extends Jl {
          constructor() {
            super();
            ne(this, Vs, !0);
            ne(this, Un);
            ne(this, $s);
            q(this, $s, (t) => {
              if (!eu && window.addEventListener) {
                const n = () => t(!0),
                  r = () => t(!1);
                return (
                  window.addEventListener("online", n, !1),
                  window.addEventListener("offline", r, !1),
                  () => {
                    (window.removeEventListener("online", n),
                      window.removeEventListener("offline", r));
                  }
                );
              }
            });
          }
          onSubscribe() {
            A(this, Un) || this.setEventListener(A(this, $s));
          }
          onUnsubscribe() {
            var t;
            this.hasListeners() ||
              ((t = A(this, Un)) == null || t.call(this), q(this, Un, void 0));
          }
          setEventListener(t) {
            var n;
            (q(this, $s, t),
              (n = A(this, Un)) == null || n.call(this),
              q(this, Un, t(this.setOnline.bind(this))));
          }
          setOnline(t) {
            A(this, Vs) !== t &&
              (q(this, Vs, t),
              this.listeners.forEach((r) => {
                r(t);
              }));
          }
          isOnline() {
            return A(this, Vs);
          }
        }),
        (Vs = new WeakMap()),
        (Un = new WeakMap()),
        ($s = new WeakMap()),
        Ty),
      vl = new u_();
    function c_() {
      let e, t;
      const n = new Promise((s, i) => {
        ((e = s), (t = i));
      });
      ((n.status = "pending"), n.catch(() => {}));
      function r(s) {
        (Object.assign(n, s), delete n.resolve, delete n.reject);
      }
      return (
        (n.resolve = (s) => {
          (r({ status: "fulfilled", value: s }), e(s));
        }),
        (n.reject = (s) => {
          (r({ status: "rejected", reason: s }), t(s));
        }),
        n
      );
    }
    function d_(e) {
      return Math.min(1e3 * 2 ** e, 3e4);
    }
    function fw(e) {
      return (e ?? "online") === "online" ? vl.isOnline() : !0;
    }
    var hw = class extends Error {
      constructor(e) {
        (super("CancelledError"),
          (this.revert = e == null ? void 0 : e.revert),
          (this.silent = e == null ? void 0 : e.silent));
      }
    };
    function Yu(e) {
      return e instanceof hw;
    }
    function pw(e) {
      let t = !1,
        n = 0,
        r = !1,
        s;
      const i = c_(),
        o = (g) => {
          var w;
          r || (f(new hw(g)), (w = e.abort) == null || w.call(e));
        },
        a = () => {
          t = !0;
        },
        l = () => {
          t = !1;
        },
        u = () =>
          dw.isFocused() &&
          (e.networkMode === "always" || vl.isOnline()) &&
          e.canRun(),
        c = () => fw(e.networkMode) && e.canRun(),
        d = (g) => {
          var w;
          r ||
            ((r = !0),
            (w = e.onSuccess) == null || w.call(e, g),
            s == null || s(),
            i.resolve(g));
        },
        f = (g) => {
          var w;
          r ||
            ((r = !0),
            (w = e.onError) == null || w.call(e, g),
            s == null || s(),
            i.reject(g));
        },
        h = () =>
          new Promise((g) => {
            var w;
            ((s = (m) => {
              (r || u()) && g(m);
            }),
              (w = e.onPause) == null || w.call(e));
          }).then(() => {
            var g;
            ((s = void 0), r || (g = e.onContinue) == null || g.call(e));
          }),
        b = () => {
          if (r) return;
          let g;
          const w = n === 0 ? e.initialPromise : void 0;
          try {
            g = w ?? e.fn();
          } catch (m) {
            g = Promise.reject(m);
          }
          Promise.resolve(g)
            .then(d)
            .catch((m) => {
              var E;
              if (r) return;
              const p = e.retry ?? (eu ? 0 : 3),
                y = e.retryDelay ?? d_,
                S = typeof y == "function" ? y(n, m) : y,
                T =
                  p === !0 ||
                  (typeof p == "number" && n < p) ||
                  (typeof p == "function" && p(n, m));
              if (t || !T) {
                f(m);
                return;
              }
              (n++,
                (E = e.onFail) == null || E.call(e, n, m),
                s_(S)
                  .then(() => (u() ? void 0 : h()))
                  .then(() => {
                    t ? f(m) : b();
                  }));
            });
        };
      return {
        promise: i,
        cancel: o,
        continue: () => (s == null || s(), i),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? b() : h().then(b), i),
      };
    }
    var f_ = (e) => setTimeout(e, 0);
    function h_() {
      let e = [],
        t = 0,
        n = (a) => {
          a();
        },
        r = (a) => {
          a();
        },
        s = f_;
      const i = (a) => {
          t
            ? e.push(a)
            : s(() => {
                n(a);
              });
        },
        o = () => {
          const a = e;
          ((e = []),
            a.length &&
              s(() => {
                r(() => {
                  a.forEach((l) => {
                    n(l);
                  });
                });
              }));
        };
      return {
        batch: (a) => {
          let l;
          t++;
          try {
            l = a();
          } finally {
            (t--, t || o());
          }
          return l;
        },
        batchCalls:
          (a) =>
          (...l) => {
            i(() => {
              a(...l);
            });
          },
        schedule: i,
        setNotifyFunction: (a) => {
          n = a;
        },
        setBatchNotifyFunction: (a) => {
          r = a;
        },
        setScheduler: (a) => {
          s = a;
        },
      };
    }
    var Ke = h_(),
      Ir,
      Ey,
      mw =
        ((Ey = class {
          constructor() {
            ne(this, Ir);
          }
          destroy() {
            this.clearGcTimeout();
          }
          scheduleGc() {
            (this.clearGcTimeout(),
              t_(this.gcTime) &&
                q(
                  this,
                  Ir,
                  setTimeout(() => {
                    this.optionalRemove();
                  }, this.gcTime),
                ));
          }
          updateGcTime(e) {
            this.gcTime = Math.max(
              this.gcTime || 0,
              e ?? (eu ? 1 / 0 : 5 * 60 * 1e3),
            );
          }
          clearGcTimeout() {
            A(this, Ir) && (clearTimeout(A(this, Ir)), q(this, Ir, void 0));
          }
        }),
        (Ir = new WeakMap()),
        Ey),
      zs,
      Fr,
      wt,
      Vr,
      Ve,
      ko,
      $r,
      Ft,
      fn,
      Cy,
      p_ =
        ((Cy = class extends mw {
          constructor(t) {
            super();
            ne(this, Ft);
            ne(this, zs);
            ne(this, Fr);
            ne(this, wt);
            ne(this, Vr);
            ne(this, Ve);
            ne(this, ko);
            ne(this, $r);
            (q(this, $r, !1),
              q(this, ko, t.defaultOptions),
              this.setOptions(t.options),
              (this.observers = []),
              q(this, Vr, t.client),
              q(this, wt, A(this, Vr).getQueryCache()),
              (this.queryKey = t.queryKey),
              (this.queryHash = t.queryHash),
              q(this, zs, g_(this.options)),
              (this.state = t.state ?? A(this, zs)),
              this.scheduleGc());
          }
          get meta() {
            return this.options.meta;
          }
          get promise() {
            var t;
            return (t = A(this, Ve)) == null ? void 0 : t.promise;
          }
          setOptions(t) {
            ((this.options = { ...A(this, ko), ...t }),
              this.updateGcTime(this.options.gcTime));
          }
          optionalRemove() {
            !this.observers.length &&
              this.state.fetchStatus === "idle" &&
              A(this, wt).remove(this);
          }
          setData(t, n) {
            const r = i_(this.state.data, t, this.options);
            return (
              Le(this, Ft, fn).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual,
              }),
              r
            );
          }
          setState(t, n) {
            Le(this, Ft, fn).call(this, {
              type: "setState",
              state: t,
              setStateOptions: n,
            });
          }
          cancel(t) {
            var r, s;
            const n = (r = A(this, Ve)) == null ? void 0 : r.promise;
            return (
              (s = A(this, Ve)) == null || s.cancel(t),
              n ? n.then(It).catch(It) : Promise.resolve()
            );
          }
          destroy() {
            (super.destroy(), this.cancel({ silent: !0 }));
          }
          reset() {
            (this.destroy(), this.setState(A(this, zs)));
          }
          isActive() {
            return this.observers.some(
              (t) => r_(t.options.enabled, this) !== !1,
            );
          }
          isDisabled() {
            return this.getObserversCount() > 0
              ? !this.isActive()
              : this.options.queryFn === fh ||
                  this.state.dataUpdateCount + this.state.errorUpdateCount ===
                    0;
          }
          isStatic() {
            return this.getObserversCount() > 0
              ? this.observers.some(
                  (t) => wd(t.options.staleTime, this) === "static",
                )
              : !1;
          }
          isStale() {
            return this.getObserversCount() > 0
              ? this.observers.some((t) => t.getCurrentResult().isStale)
              : this.state.data === void 0 || this.state.isInvalidated;
          }
          isStaleByTime(t = 0) {
            return this.state.data === void 0
              ? !0
              : t === "static"
                ? !1
                : this.state.isInvalidated
                  ? !0
                  : !n_(this.state.dataUpdatedAt, t);
          }
          onFocus() {
            var n;
            const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
            (t == null || t.refetch({ cancelRefetch: !1 }),
              (n = A(this, Ve)) == null || n.continue());
          }
          onOnline() {
            var n;
            const t = this.observers.find((r) => r.shouldFetchOnReconnect());
            (t == null || t.refetch({ cancelRefetch: !1 }),
              (n = A(this, Ve)) == null || n.continue());
          }
          addObserver(t) {
            this.observers.includes(t) ||
              (this.observers.push(t),
              this.clearGcTimeout(),
              A(this, wt).notify({
                type: "observerAdded",
                query: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            this.observers.includes(t) &&
              ((this.observers = this.observers.filter((n) => n !== t)),
              this.observers.length ||
                (A(this, Ve) &&
                  (A(this, $r)
                    ? A(this, Ve).cancel({ revert: !0 })
                    : A(this, Ve).cancelRetry()),
                this.scheduleGc()),
              A(this, wt).notify({
                type: "observerRemoved",
                query: this,
                observer: t,
              }));
          }
          getObserversCount() {
            return this.observers.length;
          }
          invalidate() {
            this.state.isInvalidated ||
              Le(this, Ft, fn).call(this, { type: "invalidate" });
          }
          fetch(t, n) {
            var u, c, d;
            if (this.state.fetchStatus !== "idle") {
              if (this.state.data !== void 0 && n != null && n.cancelRefetch)
                this.cancel({ silent: !0 });
              else if (A(this, Ve))
                return (A(this, Ve).continueRetry(), A(this, Ve).promise);
            }
            if ((t && this.setOptions(t), !this.options.queryFn)) {
              const f = this.observers.find((h) => h.options.queryFn);
              f && this.setOptions(f.options);
            }
            const r = new AbortController(),
              s = (f) => {
                Object.defineProperty(f, "signal", {
                  enumerable: !0,
                  get: () => (q(this, $r, !0), r.signal),
                });
              },
              i = () => {
                const f = cw(this.options, n),
                  b = (() => {
                    const g = {
                      client: A(this, Vr),
                      queryKey: this.queryKey,
                      meta: this.meta,
                    };
                    return (s(g), g);
                  })();
                return (
                  q(this, $r, !1),
                  this.options.persister
                    ? this.options.persister(f, b, this)
                    : f(b)
                );
              },
              a = (() => {
                const f = {
                  fetchOptions: n,
                  options: this.options,
                  queryKey: this.queryKey,
                  client: A(this, Vr),
                  state: this.state,
                  fetchFn: i,
                };
                return (s(f), f);
              })();
            ((u = this.options.behavior) == null || u.onFetch(a, this),
              q(this, Fr, this.state),
              (this.state.fetchStatus === "idle" ||
                this.state.fetchMeta !==
                  ((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
                Le(this, Ft, fn).call(this, {
                  type: "fetch",
                  meta: (d = a.fetchOptions) == null ? void 0 : d.meta,
                }));
            const l = (f) => {
              var h, b, g, w;
              ((Yu(f) && f.silent) ||
                Le(this, Ft, fn).call(this, { type: "error", error: f }),
                Yu(f) ||
                  ((b = (h = A(this, wt).config).onError) == null ||
                    b.call(h, f, this),
                  (w = (g = A(this, wt).config).onSettled) == null ||
                    w.call(g, this.state.data, f, this)),
                this.scheduleGc());
            };
            return (
              q(
                this,
                Ve,
                pw({
                  initialPromise: n == null ? void 0 : n.initialPromise,
                  fn: a.fetchFn,
                  abort: r.abort.bind(r),
                  onSuccess: (f) => {
                    var h, b, g, w;
                    if (f === void 0) {
                      l(new Error(`${this.queryHash} data is undefined`));
                      return;
                    }
                    try {
                      this.setData(f);
                    } catch (m) {
                      l(m);
                      return;
                    }
                    ((b = (h = A(this, wt).config).onSuccess) == null ||
                      b.call(h, f, this),
                      (w = (g = A(this, wt).config).onSettled) == null ||
                        w.call(g, f, this.state.error, this),
                      this.scheduleGc());
                  },
                  onError: l,
                  onFail: (f, h) => {
                    Le(this, Ft, fn).call(this, {
                      type: "failed",
                      failureCount: f,
                      error: h,
                    });
                  },
                  onPause: () => {
                    Le(this, Ft, fn).call(this, { type: "pause" });
                  },
                  onContinue: () => {
                    Le(this, Ft, fn).call(this, { type: "continue" });
                  },
                  retry: a.options.retry,
                  retryDelay: a.options.retryDelay,
                  networkMode: a.options.networkMode,
                  canRun: () => !0,
                }),
              ),
              A(this, Ve).start()
            );
          }
        }),
        (zs = new WeakMap()),
        (Fr = new WeakMap()),
        (wt = new WeakMap()),
        (Vr = new WeakMap()),
        (Ve = new WeakMap()),
        (ko = new WeakMap()),
        ($r = new WeakMap()),
        (Ft = new WeakSet()),
        (fn = function (t) {
          const n = (r) => {
            switch (t.type) {
              case "failed":
                return {
                  ...r,
                  fetchFailureCount: t.failureCount,
                  fetchFailureReason: t.error,
                };
              case "pause":
                return { ...r, fetchStatus: "paused" };
              case "continue":
                return { ...r, fetchStatus: "fetching" };
              case "fetch":
                return {
                  ...r,
                  ...m_(r.data, this.options),
                  fetchMeta: t.meta ?? null,
                };
              case "success":
                return (
                  q(this, Fr, void 0),
                  {
                    ...r,
                    data: t.data,
                    dataUpdateCount: r.dataUpdateCount + 1,
                    dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...(!t.manual && {
                      fetchStatus: "idle",
                      fetchFailureCount: 0,
                      fetchFailureReason: null,
                    }),
                  }
                );
              case "error":
                const s = t.error;
                return Yu(s) && s.revert && A(this, Fr)
                  ? { ...A(this, Fr), fetchStatus: "idle" }
                  : {
                      ...r,
                      error: s,
                      errorUpdateCount: r.errorUpdateCount + 1,
                      errorUpdatedAt: Date.now(),
                      fetchFailureCount: r.fetchFailureCount + 1,
                      fetchFailureReason: s,
                      fetchStatus: "idle",
                      status: "error",
                    };
              case "invalidate":
                return { ...r, isInvalidated: !0 };
              case "setState":
                return { ...r, ...t.state };
            }
          };
          ((this.state = n(this.state)),
            Ke.batch(() => {
              (this.observers.forEach((r) => {
                r.onQueryUpdate();
              }),
                A(this, wt).notify({
                  query: this,
                  type: "updated",
                  action: t,
                }));
            }));
        }),
        Cy);
    function m_(e, t) {
      return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: fw(t.networkMode) ? "fetching" : "paused",
        ...(e === void 0 && { error: null, status: "pending" }),
      };
    }
    function g_(e) {
      const t =
          typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n
          ? typeof e.initialDataUpdatedAt == "function"
            ? e.initialDataUpdatedAt()
            : e.initialDataUpdatedAt
          : 0;
      return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? (r ?? Date.now()) : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle",
      };
    }
    var Xt,
      Py,
      y_ =
        ((Py = class extends Jl {
          constructor(t = {}) {
            super();
            ne(this, Xt);
            ((this.config = t), q(this, Xt, new Map()));
          }
          build(t, n, r) {
            const s = n.queryKey,
              i = n.queryHash ?? dh(s, n);
            let o = this.get(i);
            return (
              o ||
                ((o = new p_({
                  client: t,
                  queryKey: s,
                  queryHash: i,
                  options: t.defaultQueryOptions(n),
                  state: r,
                  defaultOptions: t.getQueryDefaults(s),
                })),
                this.add(o)),
              o
            );
          }
          add(t) {
            A(this, Xt).has(t.queryHash) ||
              (A(this, Xt).set(t.queryHash, t),
              this.notify({ type: "added", query: t }));
          }
          remove(t) {
            const n = A(this, Xt).get(t.queryHash);
            n &&
              (t.destroy(),
              n === t && A(this, Xt).delete(t.queryHash),
              this.notify({ type: "removed", query: t }));
          }
          clear() {
            Ke.batch(() => {
              this.getAll().forEach((t) => {
                this.remove(t);
              });
            });
          }
          get(t) {
            return A(this, Xt).get(t);
          }
          getAll() {
            return [...A(this, Xt).values()];
          }
          find(t) {
            const n = { exact: !0, ...t };
            return this.getAll().find((r) => Mm(n, r));
          }
          findAll(t = {}) {
            const n = this.getAll();
            return Object.keys(t).length > 0 ? n.filter((r) => Mm(t, r)) : n;
          }
          notify(t) {
            Ke.batch(() => {
              this.listeners.forEach((n) => {
                n(t);
              });
            });
          }
          onFocus() {
            Ke.batch(() => {
              this.getAll().forEach((t) => {
                t.onFocus();
              });
            });
          }
          onOnline() {
            Ke.batch(() => {
              this.getAll().forEach((t) => {
                t.onOnline();
              });
            });
          }
        }),
        (Xt = new WeakMap()),
        Py),
      Zt,
      We,
      zr,
      Jt,
      Ln,
      ky,
      v_ =
        ((ky = class extends mw {
          constructor(t) {
            super();
            ne(this, Jt);
            ne(this, Zt);
            ne(this, We);
            ne(this, zr);
            ((this.mutationId = t.mutationId),
              q(this, We, t.mutationCache),
              q(this, Zt, []),
              (this.state = t.state || x_()),
              this.setOptions(t.options),
              this.scheduleGc());
          }
          setOptions(t) {
            ((this.options = t), this.updateGcTime(this.options.gcTime));
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(t) {
            A(this, Zt).includes(t) ||
              (A(this, Zt).push(t),
              this.clearGcTimeout(),
              A(this, We).notify({
                type: "observerAdded",
                mutation: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            (q(
              this,
              Zt,
              A(this, Zt).filter((n) => n !== t),
            ),
              this.scheduleGc(),
              A(this, We).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t,
              }));
          }
          optionalRemove() {
            A(this, Zt).length ||
              (this.state.status === "pending"
                ? this.scheduleGc()
                : A(this, We).remove(this));
          }
          continue() {
            var t;
            return (
              ((t = A(this, zr)) == null ? void 0 : t.continue()) ??
              this.execute(this.state.variables)
            );
          }
          async execute(t) {
            var i, o, a, l, u, c, d, f, h, b, g, w, m, p, y, S, T, E, C, P;
            const n = () => {
              Le(this, Jt, Ln).call(this, { type: "continue" });
            };
            q(
              this,
              zr,
              pw({
                fn: () =>
                  this.options.mutationFn
                    ? this.options.mutationFn(t)
                    : Promise.reject(new Error("No mutationFn found")),
                onFail: (R, k) => {
                  Le(this, Jt, Ln).call(this, {
                    type: "failed",
                    failureCount: R,
                    error: k,
                  });
                },
                onPause: () => {
                  Le(this, Jt, Ln).call(this, { type: "pause" });
                },
                onContinue: n,
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: () => A(this, We).canRun(this),
              }),
            );
            const r = this.state.status === "pending",
              s = !A(this, zr).canStart();
            try {
              if (r) n();
              else {
                (Le(this, Jt, Ln).call(this, {
                  type: "pending",
                  variables: t,
                  isPaused: s,
                }),
                  await ((o = (i = A(this, We).config).onMutate) == null
                    ? void 0
                    : o.call(i, t, this)));
                const k = await ((l = (a = this.options).onMutate) == null
                  ? void 0
                  : l.call(a, t));
                k !== this.state.context &&
                  Le(this, Jt, Ln).call(this, {
                    type: "pending",
                    context: k,
                    variables: t,
                    isPaused: s,
                  });
              }
              const R = await A(this, zr).start();
              return (
                await ((c = (u = A(this, We).config).onSuccess) == null
                  ? void 0
                  : c.call(u, R, t, this.state.context, this)),
                await ((f = (d = this.options).onSuccess) == null
                  ? void 0
                  : f.call(d, R, t, this.state.context)),
                await ((b = (h = A(this, We).config).onSettled) == null
                  ? void 0
                  : b.call(
                      h,
                      R,
                      null,
                      this.state.variables,
                      this.state.context,
                      this,
                    )),
                await ((w = (g = this.options).onSettled) == null
                  ? void 0
                  : w.call(g, R, null, t, this.state.context)),
                Le(this, Jt, Ln).call(this, { type: "success", data: R }),
                R
              );
            } catch (R) {
              try {
                throw (
                  await ((p = (m = A(this, We).config).onError) == null
                    ? void 0
                    : p.call(m, R, t, this.state.context, this)),
                  await ((S = (y = this.options).onError) == null
                    ? void 0
                    : S.call(y, R, t, this.state.context)),
                  await ((E = (T = A(this, We).config).onSettled) == null
                    ? void 0
                    : E.call(
                        T,
                        void 0,
                        R,
                        this.state.variables,
                        this.state.context,
                        this,
                      )),
                  await ((P = (C = this.options).onSettled) == null
                    ? void 0
                    : P.call(C, void 0, R, t, this.state.context)),
                  R
                );
              } finally {
                Le(this, Jt, Ln).call(this, { type: "error", error: R });
              }
            } finally {
              A(this, We).runNext(this);
            }
          }
        }),
        (Zt = new WeakMap()),
        (We = new WeakMap()),
        (zr = new WeakMap()),
        (Jt = new WeakSet()),
        (Ln = function (t) {
          const n = (r) => {
            switch (t.type) {
              case "failed":
                return {
                  ...r,
                  failureCount: t.failureCount,
                  failureReason: t.error,
                };
              case "pause":
                return { ...r, isPaused: !0 };
              case "continue":
                return { ...r, isPaused: !1 };
              case "pending":
                return {
                  ...r,
                  context: t.context,
                  data: void 0,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  isPaused: t.isPaused,
                  status: "pending",
                  variables: t.variables,
                  submittedAt: Date.now(),
                };
              case "success":
                return {
                  ...r,
                  data: t.data,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  status: "success",
                  isPaused: !1,
                };
              case "error":
                return {
                  ...r,
                  data: void 0,
                  error: t.error,
                  failureCount: r.failureCount + 1,
                  failureReason: t.error,
                  isPaused: !1,
                  status: "error",
                };
            }
          };
          ((this.state = n(this.state)),
            Ke.batch(() => {
              (A(this, Zt).forEach((r) => {
                r.onMutationUpdate(t);
              }),
                A(this, We).notify({
                  mutation: this,
                  type: "updated",
                  action: t,
                }));
            }));
        }),
        ky);
    function x_() {
      return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0,
      };
    }
    var mn,
      Vt,
      Ro,
      Ry,
      w_ =
        ((Ry = class extends Jl {
          constructor(t = {}) {
            super();
            ne(this, mn);
            ne(this, Vt);
            ne(this, Ro);
            ((this.config = t),
              q(this, mn, new Set()),
              q(this, Vt, new Map()),
              q(this, Ro, 0));
          }
          build(t, n, r) {
            const s = new v_({
              mutationCache: this,
              mutationId: ++Ko(this, Ro)._,
              options: t.defaultMutationOptions(n),
              state: r,
            });
            return (this.add(s), s);
          }
          add(t) {
            A(this, mn).add(t);
            const n = pa(t);
            if (typeof n == "string") {
              const r = A(this, Vt).get(n);
              r ? r.push(t) : A(this, Vt).set(n, [t]);
            }
            this.notify({ type: "added", mutation: t });
          }
          remove(t) {
            if (A(this, mn).delete(t)) {
              const n = pa(t);
              if (typeof n == "string") {
                const r = A(this, Vt).get(n);
                if (r)
                  if (r.length > 1) {
                    const s = r.indexOf(t);
                    s !== -1 && r.splice(s, 1);
                  } else r[0] === t && A(this, Vt).delete(n);
              }
            }
            this.notify({ type: "removed", mutation: t });
          }
          canRun(t) {
            const n = pa(t);
            if (typeof n == "string") {
              const r = A(this, Vt).get(n),
                s =
                  r == null
                    ? void 0
                    : r.find((i) => i.state.status === "pending");
              return !s || s === t;
            } else return !0;
          }
          runNext(t) {
            var r;
            const n = pa(t);
            if (typeof n == "string") {
              const s =
                (r = A(this, Vt).get(n)) == null
                  ? void 0
                  : r.find((i) => i !== t && i.state.isPaused);
              return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
            } else return Promise.resolve();
          }
          clear() {
            Ke.batch(() => {
              (A(this, mn).forEach((t) => {
                this.notify({ type: "removed", mutation: t });
              }),
                A(this, mn).clear(),
                A(this, Vt).clear());
            });
          }
          getAll() {
            return Array.from(A(this, mn));
          }
          find(t) {
            const n = { exact: !0, ...t };
            return this.getAll().find((r) => jm(n, r));
          }
          findAll(t = {}) {
            return this.getAll().filter((n) => jm(t, n));
          }
          notify(t) {
            Ke.batch(() => {
              this.listeners.forEach((n) => {
                n(t);
              });
            });
          }
          resumePausedMutations() {
            const t = this.getAll().filter((n) => n.state.isPaused);
            return Ke.batch(() =>
              Promise.all(t.map((n) => n.continue().catch(It))),
            );
          }
        }),
        (mn = new WeakMap()),
        (Vt = new WeakMap()),
        (Ro = new WeakMap()),
        Ry);
    function pa(e) {
      var t;
      return (t = e.options.scope) == null ? void 0 : t.id;
    }
    function Im(e) {
      return {
        onFetch: (t, n) => {
          var c, d, f, h, b;
          const r = t.options,
            s =
              (f =
                (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null
                  ? void 0
                  : d.fetchMore) == null
                ? void 0
                : f.direction,
            i = ((h = t.state.data) == null ? void 0 : h.pages) || [],
            o = ((b = t.state.data) == null ? void 0 : b.pageParams) || [];
          let a = { pages: [], pageParams: [] },
            l = 0;
          const u = async () => {
            let g = !1;
            const w = (y) => {
                Object.defineProperty(y, "signal", {
                  enumerable: !0,
                  get: () => (
                    t.signal.aborted
                      ? (g = !0)
                      : t.signal.addEventListener("abort", () => {
                          g = !0;
                        }),
                    t.signal
                  ),
                });
              },
              m = cw(t.options, t.fetchOptions),
              p = async (y, S, T) => {
                if (g) return Promise.reject();
                if (S == null && y.pages.length) return Promise.resolve(y);
                const C = (() => {
                    const $ = {
                      client: t.client,
                      queryKey: t.queryKey,
                      pageParam: S,
                      direction: T ? "backward" : "forward",
                      meta: t.options.meta,
                    };
                    return (w($), $);
                  })(),
                  P = await m(C),
                  { maxPages: R } = t.options,
                  k = T ? a_ : o_;
                return {
                  pages: k(y.pages, P, R),
                  pageParams: k(y.pageParams, S, R),
                };
              };
            if (s && i.length) {
              const y = s === "backward",
                S = y ? b_ : Fm,
                T = { pages: i, pageParams: o },
                E = S(r, T);
              a = await p(T, E, y);
            } else {
              const y = e ?? i.length;
              do {
                const S = l === 0 ? (o[0] ?? r.initialPageParam) : Fm(r, a);
                if (l > 0 && S == null) break;
                ((a = await p(a, S)), l++);
              } while (l < y);
            }
            return a;
          };
          t.options.persister
            ? (t.fetchFn = () => {
                var g, w;
                return (w = (g = t.options).persister) == null
                  ? void 0
                  : w.call(
                      g,
                      u,
                      {
                        client: t.client,
                        queryKey: t.queryKey,
                        meta: t.options.meta,
                        signal: t.signal,
                      },
                      n,
                    );
              })
            : (t.fetchFn = u);
        },
      };
    }
    function Fm(e, { pages: t, pageParams: n }) {
      const r = t.length - 1;
      return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
    }
    function b_(e, { pages: t, pageParams: n }) {
      var r;
      return t.length > 0
        ? (r = e.getPreviousPageParam) == null
          ? void 0
          : r.call(e, t[0], t, n[0], n)
        : void 0;
    }
    var we,
      Wn,
      Hn,
      Bs,
      Us,
      Kn,
      Ws,
      Hs,
      _y,
      S_ =
        ((_y = class {
          constructor(e = {}) {
            ne(this, we);
            ne(this, Wn);
            ne(this, Hn);
            ne(this, Bs);
            ne(this, Us);
            ne(this, Kn);
            ne(this, Ws);
            ne(this, Hs);
            (q(this, we, e.queryCache || new y_()),
              q(this, Wn, e.mutationCache || new w_()),
              q(this, Hn, e.defaultOptions || {}),
              q(this, Bs, new Map()),
              q(this, Us, new Map()),
              q(this, Kn, 0));
          }
          mount() {
            (Ko(this, Kn)._++,
              A(this, Kn) === 1 &&
                (q(
                  this,
                  Ws,
                  dw.subscribe(async (e) => {
                    e &&
                      (await this.resumePausedMutations(),
                      A(this, we).onFocus());
                  }),
                ),
                q(
                  this,
                  Hs,
                  vl.subscribe(async (e) => {
                    e &&
                      (await this.resumePausedMutations(),
                      A(this, we).onOnline());
                  }),
                )));
          }
          unmount() {
            var e, t;
            (Ko(this, Kn)._--,
              A(this, Kn) === 0 &&
                ((e = A(this, Ws)) == null || e.call(this),
                q(this, Ws, void 0),
                (t = A(this, Hs)) == null || t.call(this),
                q(this, Hs, void 0)));
          }
          isFetching(e) {
            return A(this, we).findAll({ ...e, fetchStatus: "fetching" })
              .length;
          }
          isMutating(e) {
            return A(this, Wn).findAll({ ...e, status: "pending" }).length;
          }
          getQueryData(e) {
            var n;
            const t = this.defaultQueryOptions({ queryKey: e });
            return (n = A(this, we).get(t.queryHash)) == null
              ? void 0
              : n.state.data;
          }
          ensureQueryData(e) {
            const t = this.defaultQueryOptions(e),
              n = A(this, we).build(this, t),
              r = n.state.data;
            return r === void 0
              ? this.fetchQuery(e)
              : (e.revalidateIfStale &&
                  n.isStaleByTime(wd(t.staleTime, n)) &&
                  this.prefetchQuery(t),
                Promise.resolve(r));
          }
          getQueriesData(e) {
            return A(this, we)
              .findAll(e)
              .map(({ queryKey: t, state: n }) => {
                const r = n.data;
                return [t, r];
              });
          }
          setQueryData(e, t, n) {
            const r = this.defaultQueryOptions({ queryKey: e }),
              s = A(this, we).get(r.queryHash),
              i = s == null ? void 0 : s.state.data,
              o = e_(t, i);
            if (o !== void 0)
              return A(this, we)
                .build(this, r)
                .setData(o, { ...n, manual: !0 });
          }
          setQueriesData(e, t, n) {
            return Ke.batch(() =>
              A(this, we)
                .findAll(e)
                .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)]),
            );
          }
          getQueryState(e) {
            var n;
            const t = this.defaultQueryOptions({ queryKey: e });
            return (n = A(this, we).get(t.queryHash)) == null
              ? void 0
              : n.state;
          }
          removeQueries(e) {
            const t = A(this, we);
            Ke.batch(() => {
              t.findAll(e).forEach((n) => {
                t.remove(n);
              });
            });
          }
          resetQueries(e, t) {
            const n = A(this, we);
            return Ke.batch(
              () => (
                n.findAll(e).forEach((r) => {
                  r.reset();
                }),
                this.refetchQueries({ type: "active", ...e }, t)
              ),
            );
          }
          cancelQueries(e, t = {}) {
            const n = { revert: !0, ...t },
              r = Ke.batch(() =>
                A(this, we)
                  .findAll(e)
                  .map((s) => s.cancel(n)),
              );
            return Promise.all(r).then(It).catch(It);
          }
          invalidateQueries(e, t = {}) {
            return Ke.batch(
              () => (
                A(this, we)
                  .findAll(e)
                  .forEach((n) => {
                    n.invalidate();
                  }),
                (e == null ? void 0 : e.refetchType) === "none"
                  ? Promise.resolve()
                  : this.refetchQueries(
                      {
                        ...e,
                        type:
                          (e == null ? void 0 : e.refetchType) ??
                          (e == null ? void 0 : e.type) ??
                          "active",
                      },
                      t,
                    )
              ),
            );
          }
          refetchQueries(e, t = {}) {
            const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
              r = Ke.batch(() =>
                A(this, we)
                  .findAll(e)
                  .filter((s) => !s.isDisabled() && !s.isStatic())
                  .map((s) => {
                    let i = s.fetch(void 0, n);
                    return (
                      n.throwOnError || (i = i.catch(It)),
                      s.state.fetchStatus === "paused" ? Promise.resolve() : i
                    );
                  }),
              );
            return Promise.all(r).then(It);
          }
          fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            t.retry === void 0 && (t.retry = !1);
            const n = A(this, we).build(this, t);
            return n.isStaleByTime(wd(t.staleTime, n))
              ? n.fetch(t)
              : Promise.resolve(n.state.data);
          }
          prefetchQuery(e) {
            return this.fetchQuery(e).then(It).catch(It);
          }
          fetchInfiniteQuery(e) {
            return ((e.behavior = Im(e.pages)), this.fetchQuery(e));
          }
          prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(It).catch(It);
          }
          ensureInfiniteQueryData(e) {
            return ((e.behavior = Im(e.pages)), this.ensureQueryData(e));
          }
          resumePausedMutations() {
            return vl.isOnline()
              ? A(this, Wn).resumePausedMutations()
              : Promise.resolve();
          }
          getQueryCache() {
            return A(this, we);
          }
          getMutationCache() {
            return A(this, Wn);
          }
          getDefaultOptions() {
            return A(this, Hn);
          }
          setDefaultOptions(e) {
            q(this, Hn, e);
          }
          setQueryDefaults(e, t) {
            A(this, Bs).set(xo(e), { queryKey: e, defaultOptions: t });
          }
          getQueryDefaults(e) {
            const t = [...A(this, Bs).values()],
              n = {};
            return (
              t.forEach((r) => {
                wo(e, r.queryKey) && Object.assign(n, r.defaultOptions);
              }),
              n
            );
          }
          setMutationDefaults(e, t) {
            A(this, Us).set(xo(e), { mutationKey: e, defaultOptions: t });
          }
          getMutationDefaults(e) {
            const t = [...A(this, Us).values()],
              n = {};
            return (
              t.forEach((r) => {
                wo(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
              }),
              n
            );
          }
          defaultQueryOptions(e) {
            if (e._defaulted) return e;
            const t = {
              ...A(this, Hn).queries,
              ...this.getQueryDefaults(e.queryKey),
              ...e,
              _defaulted: !0,
            };
            return (
              t.queryHash || (t.queryHash = dh(t.queryKey, t)),
              t.refetchOnReconnect === void 0 &&
                (t.refetchOnReconnect = t.networkMode !== "always"),
              t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
              !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
              t.queryFn === fh && (t.enabled = !1),
              t
            );
          }
          defaultMutationOptions(e) {
            return e != null && e._defaulted
              ? e
              : {
                  ...A(this, Hn).mutations,
                  ...((e == null ? void 0 : e.mutationKey) &&
                    this.getMutationDefaults(e.mutationKey)),
                  ...e,
                  _defaulted: !0,
                };
          }
          clear() {
            (A(this, we).clear(), A(this, Wn).clear());
          }
        }),
        (we = new WeakMap()),
        (Wn = new WeakMap()),
        (Hn = new WeakMap()),
        (Bs = new WeakMap()),
        (Us = new WeakMap()),
        (Kn = new WeakMap()),
        (Ws = new WeakMap()),
        (Hs = new WeakMap()),
        _y),
      T_ = x.createContext(void 0),
      E_ = ({ client: e, children: t }) => (
        x.useEffect(
          () => (
            e.mount(),
            () => {
              e.unmount();
            }
          ),
          [e],
        ),
        v.jsx(T_.Provider, { value: e, children: t })
      );
    /**
     * @remix-run/router v1.23.0
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */ function xl() {
      return (
        (xl = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        xl.apply(this, arguments)
      );
    }
    var Qn;
    (function (e) {
      ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
    })(Qn || (Qn = {}));
    const Vm = "popstate";
    function C_(e) {
      e === void 0 && (e = {});
      function t(r, s) {
        let { pathname: i, search: o, hash: a } = r.location;
        return Sd(
          "",
          { pathname: i, search: o, hash: a },
          (s.state && s.state.usr) || null,
          (s.state && s.state.key) || "default",
        );
      }
      function n(r, s) {
        return typeof s == "string" ? s : yw(s);
      }
      return k_(t, n, null, e);
    }
    function st(e, t) {
      if (e === !1 || e === null || typeof e > "u") throw new Error(t);
    }
    function gw(e, t) {
      if (!e) {
        typeof console < "u" && console.warn(t);
        try {
          throw new Error(t);
        } catch {}
      }
    }
    function P_() {
      return Math.random().toString(36).substr(2, 8);
    }
    function $m(e, t) {
      return { usr: e.state, key: e.key, idx: t };
    }
    function Sd(e, t, n, r) {
      return (
        n === void 0 && (n = null),
        xl(
          {
            pathname: typeof e == "string" ? e : e.pathname,
            search: "",
            hash: "",
          },
          typeof t == "string" ? tu(t) : t,
          { state: n, key: (t && t.key) || r || P_() },
        )
      );
    }
    function yw(e) {
      let { pathname: t = "/", search: n = "", hash: r = "" } = e;
      return (
        n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
      );
    }
    function tu(e) {
      let t = {};
      if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
          e && (t.pathname = e));
      }
      return t;
    }
    function k_(e, t, n, r) {
      r === void 0 && (r = {});
      let { window: s = document.defaultView, v5Compat: i = !1 } = r,
        o = s.history,
        a = Qn.Pop,
        l = null,
        u = c();
      u == null && ((u = 0), o.replaceState(xl({}, o.state, { idx: u }), ""));
      function c() {
        return (o.state || { idx: null }).idx;
      }
      function d() {
        a = Qn.Pop;
        let w = c(),
          m = w == null ? null : w - u;
        ((u = w), l && l({ action: a, location: g.location, delta: m }));
      }
      function f(w, m) {
        a = Qn.Push;
        let p = Sd(g.location, w, m);
        u = c() + 1;
        let y = $m(p, u),
          S = g.createHref(p);
        try {
          o.pushState(y, "", S);
        } catch (T) {
          if (T instanceof DOMException && T.name === "DataCloneError") throw T;
          s.location.assign(S);
        }
        i && l && l({ action: a, location: g.location, delta: 1 });
      }
      function h(w, m) {
        a = Qn.Replace;
        let p = Sd(g.location, w, m);
        u = c();
        let y = $m(p, u),
          S = g.createHref(p);
        (o.replaceState(y, "", S),
          i && l && l({ action: a, location: g.location, delta: 0 }));
      }
      function b(w) {
        let m =
            s.location.origin !== "null" ? s.location.origin : s.location.href,
          p = typeof w == "string" ? w : yw(w);
        return (
          (p = p.replace(/ $/, "%20")),
          st(
            m,
            "No window.location.(origin|href) available to create URL for href: " +
              p,
          ),
          new URL(p, m)
        );
      }
      let g = {
        get action() {
          return a;
        },
        get location() {
          return e(s, o);
        },
        listen(w) {
          if (l) throw new Error("A history only accepts one active listener");
          return (
            s.addEventListener(Vm, d),
            (l = w),
            () => {
              (s.removeEventListener(Vm, d), (l = null));
            }
          );
        },
        createHref(w) {
          return t(s, w);
        },
        createURL: b,
        encodeLocation(w) {
          let m = b(w);
          return { pathname: m.pathname, search: m.search, hash: m.hash };
        },
        push: f,
        replace: h,
        go(w) {
          return o.go(w);
        },
      };
      return g;
    }
    var zm;
    (function (e) {
      ((e.data = "data"),
        (e.deferred = "deferred"),
        (e.redirect = "redirect"),
        (e.error = "error"));
    })(zm || (zm = {}));
    function R_(e, t, n) {
      return (n === void 0 && (n = "/"), __(e, t, n, !1));
    }
    function __(e, t, n, r) {
      let s = typeof t == "string" ? tu(t) : t,
        i = ww(s.pathname || "/", n);
      if (i == null) return null;
      let o = vw(e);
      N_(o);
      let a = null;
      for (let l = 0; a == null && l < o.length; ++l) {
        let u = z_(i);
        a = V_(o[l], u, r);
      }
      return a;
    }
    function vw(e, t, n, r) {
      (t === void 0 && (t = []),
        n === void 0 && (n = []),
        r === void 0 && (r = ""));
      let s = (i, o, a) => {
        let l = {
          relativePath: a === void 0 ? i.path || "" : a,
          caseSensitive: i.caseSensitive === !0,
          childrenIndex: o,
          route: i,
        };
        l.relativePath.startsWith("/") &&
          (st(
            l.relativePath.startsWith(r),
            'Absolute route path "' +
              l.relativePath +
              '" nested under path ' +
              ('"' + r + '" is not valid. An absolute child route path ') +
              "must start with the combined path of all its parent routes.",
          ),
          (l.relativePath = l.relativePath.slice(r.length)));
        let u = Ls([r, l.relativePath]),
          c = n.concat(l);
        (i.children &&
          i.children.length > 0 &&
          (st(
            i.index !== !0,
            "Index routes must not have child routes. Please remove " +
              ('all child routes from route path "' + u + '".'),
          ),
          vw(i.children, t, c, u)),
          !(i.path == null && !i.index) &&
            t.push({ path: u, score: I_(u, i.index), routesMeta: c }));
      };
      return (
        e.forEach((i, o) => {
          var a;
          if (i.path === "" || !((a = i.path) != null && a.includes("?")))
            s(i, o);
          else for (let l of xw(i.path)) s(i, o, l);
        }),
        t
      );
    }
    function xw(e) {
      let t = e.split("/");
      if (t.length === 0) return [];
      let [n, ...r] = t,
        s = n.endsWith("?"),
        i = n.replace(/\?$/, "");
      if (r.length === 0) return s ? [i, ""] : [i];
      let o = xw(r.join("/")),
        a = [];
      return (
        a.push(...o.map((l) => (l === "" ? i : [i, l].join("/")))),
        s && a.push(...o),
        a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
      );
    }
    function N_(e) {
      e.sort((t, n) =>
        t.score !== n.score
          ? n.score - t.score
          : F_(
              t.routesMeta.map((r) => r.childrenIndex),
              n.routesMeta.map((r) => r.childrenIndex),
            ),
      );
    }
    const A_ = /^:[\w-]+$/,
      O_ = 3,
      M_ = 2,
      j_ = 1,
      D_ = 10,
      L_ = -2,
      Bm = (e) => e === "*";
    function I_(e, t) {
      let n = e.split("/"),
        r = n.length;
      return (
        n.some(Bm) && (r += L_),
        t && (r += M_),
        n
          .filter((s) => !Bm(s))
          .reduce((s, i) => s + (A_.test(i) ? O_ : i === "" ? j_ : D_), r)
      );
    }
    function F_(e, t) {
      return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s])
        ? e[e.length - 1] - t[t.length - 1]
        : 0;
    }
    function V_(e, t, n) {
      let { routesMeta: r } = e,
        s = {},
        i = "/",
        o = [];
      for (let a = 0; a < r.length; ++a) {
        let l = r[a],
          u = a === r.length - 1,
          c = i === "/" ? t : t.slice(i.length) || "/",
          d = Um(
            { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
            c,
          ),
          f = l.route;
        if (
          (!d &&
            u &&
            n &&
            !r[r.length - 1].route.index &&
            (d = Um(
              { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
              c,
            )),
          !d)
        )
          return null;
        (Object.assign(s, d.params),
          o.push({
            params: s,
            pathname: Ls([i, d.pathname]),
            pathnameBase: B_(Ls([i, d.pathnameBase])),
            route: f,
          }),
          d.pathnameBase !== "/" && (i = Ls([i, d.pathnameBase])));
      }
      return o;
    }
    function Um(e, t) {
      typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
      let [n, r] = $_(e.path, e.caseSensitive, e.end),
        s = t.match(n);
      if (!s) return null;
      let i = s[0],
        o = i.replace(/(.)\/+$/, "$1"),
        a = s.slice(1);
      return {
        params: r.reduce((u, c, d) => {
          let { paramName: f, isOptional: h } = c;
          if (f === "*") {
            let g = a[d] || "";
            o = i.slice(0, i.length - g.length).replace(/(.)\/+$/, "$1");
          }
          const b = a[d];
          return (
            h && !b ? (u[f] = void 0) : (u[f] = (b || "").replace(/%2F/g, "/")),
            u
          );
        }, {}),
        pathname: i,
        pathnameBase: o,
        pattern: e,
      };
    }
    function $_(e, t, n) {
      (t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        gw(
          e === "*" || !e.endsWith("*") || e.endsWith("/*"),
          'Route path "' +
            e +
            '" will be treated as if it were ' +
            ('"' +
              e.replace(/\*$/, "/*") +
              '" because the `*` character must ') +
            "always follow a `/` in the pattern. To get rid of this warning, " +
            ('please change the route path to "' +
              e.replace(/\*$/, "/*") +
              '".'),
        ));
      let r = [],
        s =
          "^" +
          e
            .replace(/\/*\*?$/, "")
            .replace(/^\/*/, "/")
            .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
            .replace(
              /\/:([\w-]+)(\?)?/g,
              (o, a, l) => (
                r.push({ paramName: a, isOptional: l != null }),
                l ? "/?([^\\/]+)?" : "/([^\\/]+)"
              ),
            );
      return (
        e.endsWith("*")
          ? (r.push({ paramName: "*" }),
            (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
          : n
            ? (s += "\\/*$")
            : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
        [new RegExp(s, t ? void 0 : "i"), r]
      );
    }
    function z_(e) {
      try {
        return e
          .split("/")
          .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
          .join("/");
      } catch (t) {
        return (
          gw(
            !1,
            'The URL path "' +
              e +
              '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
              ("encoding (" + t + ")."),
          ),
          e
        );
      }
    }
    function ww(e, t) {
      if (t === "/") return e;
      if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
      let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
      return r && r !== "/" ? null : e.slice(n) || "/";
    }
    const Ls = (e) => e.join("/").replace(/\/\/+/g, "/"),
      B_ = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
    function U_(e) {
      return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.internal == "boolean" &&
        "data" in e
      );
    }
    const bw = ["post", "put", "patch", "delete"];
    new Set(bw);
    const W_ = ["get", ...bw];
    new Set(W_);
    /**
     * React Router v6.30.1
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */ function wl() {
      return (
        (wl = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
        wl.apply(this, arguments)
      );
    }
    const H_ = x.createContext(null),
      K_ = x.createContext(null),
      Sw = x.createContext(null),
      nu = x.createContext(null),
      ru = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
      Tw = x.createContext(null);
    function hh() {
      return x.useContext(nu) != null;
    }
    function Ew() {
      return (hh() || st(!1), x.useContext(nu).location);
    }
    function G_(e, t) {
      return Y_(e, t);
    }
    function Y_(e, t, n, r) {
      hh() || st(!1);
      let { navigator: s } = x.useContext(Sw),
        { matches: i } = x.useContext(ru),
        o = i[i.length - 1],
        a = o ? o.params : {};
      o && o.pathname;
      let l = o ? o.pathnameBase : "/";
      o && o.route;
      let u = Ew(),
        c;
      if (t) {
        var d;
        let w = typeof t == "string" ? tu(t) : t;
        (l === "/" || ((d = w.pathname) != null && d.startsWith(l)) || st(!1),
          (c = w));
      } else c = u;
      let f = c.pathname || "/",
        h = f;
      if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        h = "/" + f.replace(/^\//, "").split("/").slice(w.length).join("/");
      }
      let b = R_(e, { pathname: h }),
        g = J_(
          b &&
            b.map((w) =>
              Object.assign({}, w, {
                params: Object.assign({}, a, w.params),
                pathname: Ls([
                  l,
                  s.encodeLocation
                    ? s.encodeLocation(w.pathname).pathname
                    : w.pathname,
                ]),
                pathnameBase:
                  w.pathnameBase === "/"
                    ? l
                    : Ls([
                        l,
                        s.encodeLocation
                          ? s.encodeLocation(w.pathnameBase).pathname
                          : w.pathnameBase,
                      ]),
              }),
            ),
          i,
          n,
          r,
        );
      return t && g
        ? x.createElement(
            nu.Provider,
            {
              value: {
                location: wl(
                  {
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default",
                  },
                  c,
                ),
                navigationType: Qn.Pop,
              },
            },
            g,
          )
        : g;
    }
    function Q_() {
      let e = r2(),
        t = U_(e)
          ? e.status + " " + e.statusText
          : e instanceof Error
            ? e.message
            : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
      return x.createElement(
        x.Fragment,
        null,
        x.createElement("h2", null, "Unexpected Application Error!"),
        x.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? x.createElement("pre", { style: s }, n) : null,
        null,
      );
    }
    const q_ = x.createElement(Q_, null);
    class X_ extends x.Component {
      constructor(t) {
        (super(t),
          (this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error,
          }));
      }
      static getDerivedStateFromError(t) {
        return { error: t };
      }
      static getDerivedStateFromProps(t, n) {
        return n.location !== t.location ||
          (n.revalidation !== "idle" && t.revalidation === "idle")
          ? {
              error: t.error,
              location: t.location,
              revalidation: t.revalidation,
            }
          : {
              error: t.error !== void 0 ? t.error : n.error,
              location: n.location,
              revalidation: t.revalidation || n.revalidation,
            };
      }
      componentDidCatch(t, n) {
        console.error(
          "React Router caught the following error during render",
          t,
          n,
        );
      }
      render() {
        return this.state.error !== void 0
          ? x.createElement(
              ru.Provider,
              { value: this.props.routeContext },
              x.createElement(Tw.Provider, {
                value: this.state.error,
                children: this.props.component,
              }),
            )
          : this.props.children;
      }
    }
    function Z_(e) {
      let { routeContext: t, match: n, children: r } = e,
        s = x.useContext(H_);
      return (
        s &&
          s.static &&
          s.staticContext &&
          (n.route.errorElement || n.route.ErrorBoundary) &&
          (s.staticContext._deepestRenderedBoundaryId = n.route.id),
        x.createElement(ru.Provider, { value: t }, r)
      );
    }
    function J_(e, t, n, r) {
      var s;
      if (
        (t === void 0 && (t = []),
        n === void 0 && (n = null),
        r === void 0 && (r = null),
        e == null)
      ) {
        var i;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if (
          (i = r) != null &&
          i.v7_partialHydration &&
          t.length === 0 &&
          !n.initialized &&
          n.matches.length > 0
        )
          e = n.matches;
        else return null;
      }
      let o = e,
        a = (s = n) == null ? void 0 : s.errors;
      if (a != null) {
        let c = o.findIndex(
          (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0,
        );
        (c >= 0 || st(!1), (o = o.slice(0, Math.min(o.length, c + 1))));
      }
      let l = !1,
        u = -1;
      if (n && r && r.v7_partialHydration)
        for (let c = 0; c < o.length; c++) {
          let d = o[c];
          if (
            ((d.route.HydrateFallback || d.route.hydrateFallbackElement) &&
              (u = c),
            d.route.id)
          ) {
            let { loaderData: f, errors: h } = n,
              b =
                d.route.loader &&
                f[d.route.id] === void 0 &&
                (!h || h[d.route.id] === void 0);
            if (d.route.lazy || b) {
              ((l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]));
              break;
            }
          }
        }
      return o.reduceRight((c, d, f) => {
        let h,
          b = !1,
          g = null,
          w = null;
        n &&
          ((h = a && d.route.id ? a[d.route.id] : void 0),
          (g = d.route.errorElement || q_),
          l &&
            (u < 0 && f === 0
              ? ((b = !0), (w = null))
              : u === f &&
                ((b = !0), (w = d.route.hydrateFallbackElement || null))));
        let m = t.concat(o.slice(0, f + 1)),
          p = () => {
            let y;
            return (
              h
                ? (y = g)
                : b
                  ? (y = w)
                  : d.route.Component
                    ? (y = x.createElement(d.route.Component, null))
                    : d.route.element
                      ? (y = d.route.element)
                      : (y = c),
              x.createElement(Z_, {
                match: d,
                routeContext: { outlet: c, matches: m, isDataRoute: n != null },
                children: y,
              })
            );
          };
        return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
          ? x.createElement(X_, {
              location: n.location,
              revalidation: n.revalidation,
              component: g,
              error: h,
              children: p(),
              routeContext: { outlet: null, matches: m, isDataRoute: !0 },
            })
          : p();
      }, null);
    }
    var Td = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId"),
        e
      );
    })(Td || {});
    function e2(e) {
      let t = x.useContext(K_);
      return (t || st(!1), t);
    }
    function t2(e) {
      let t = x.useContext(ru);
      return (t || st(!1), t);
    }
    function n2(e) {
      let t = t2(),
        n = t.matches[t.matches.length - 1];
      return (n.route.id || st(!1), n.route.id);
    }
    function r2() {
      var e;
      let t = x.useContext(Tw),
        n = e2(Td.UseRouteError),
        r = n2(Td.UseRouteError);
      return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
    }
    function s2(e, t) {
      (e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath);
    }
    function Ed(e) {
      st(!1);
    }
    function i2(e) {
      let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: s = Qn.Pop,
        navigator: i,
        static: o = !1,
        future: a,
      } = e;
      hh() && st(!1);
      let l = t.replace(/^\/*/, "/"),
        u = x.useMemo(
          () => ({
            basename: l,
            navigator: i,
            static: o,
            future: wl({ v7_relativeSplatPath: !1 }, a),
          }),
          [l, a, i, o],
        );
      typeof r == "string" && (r = tu(r));
      let {
          pathname: c = "/",
          search: d = "",
          hash: f = "",
          state: h = null,
          key: b = "default",
        } = r,
        g = x.useMemo(() => {
          let w = ww(c, l);
          return w == null
            ? null
            : {
                location: { pathname: w, search: d, hash: f, state: h, key: b },
                navigationType: s,
              };
        }, [l, c, d, f, h, b, s]);
      return g == null
        ? null
        : x.createElement(
            Sw.Provider,
            { value: u },
            x.createElement(nu.Provider, { children: n, value: g }),
          );
    }
    function o2(e) {
      let { children: t, location: n } = e;
      return G_(Cd(t), n);
    }
    new Promise(() => {});
    function Cd(e, t) {
      t === void 0 && (t = []);
      let n = [];
      return (
        x.Children.forEach(e, (r, s) => {
          if (!x.isValidElement(r)) return;
          let i = [...t, s];
          if (r.type === x.Fragment) {
            n.push.apply(n, Cd(r.props.children, i));
            return;
          }
          (r.type !== Ed && st(!1),
            !r.props.index || !r.props.children || st(!1));
          let o = {
            id: r.props.id || i.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary:
              r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy,
          };
          (r.props.children && (o.children = Cd(r.props.children, i)),
            n.push(o));
        }),
        n
      );
    }
    /**
     * React Router DOM v6.30.1
     *
     * Copyright (c) Remix Software Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.md file in the root directory of this source tree.
     *
     * @license MIT
     */ const a2 = "6";
    try {
      window.__reactRouterVersion = a2;
    } catch {}
    const l2 = "startTransition",
      Wm = By[l2];
    function u2(e) {
      let { basename: t, children: n, future: r, window: s } = e,
        i = x.useRef();
      i.current == null && (i.current = C_({ window: s, v5Compat: !0 }));
      let o = i.current,
        [a, l] = x.useState({ action: o.action, location: o.location }),
        { v7_startTransition: u } = r || {},
        c = x.useCallback(
          (d) => {
            u && Wm ? Wm(() => l(d)) : l(d);
          },
          [l, u],
        );
      return (
        x.useLayoutEffect(() => o.listen(c), [o, c]),
        x.useEffect(() => s2(r), [r]),
        x.createElement(i2, {
          basename: t,
          children: n,
          location: a.location,
          navigationType: a.action,
          navigator: o,
          future: r,
        })
      );
    }
    var Hm;
    (function (e) {
      ((e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmit = "useSubmit"),
        (e.UseSubmitFetcher = "useSubmitFetcher"),
        (e.UseFetcher = "useFetcher"),
        (e.useViewTransitionState = "useViewTransitionState"));
    })(Hm || (Hm = {}));
    var Km;
    (function (e) {
      ((e.UseFetcher = "useFetcher"),
        (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration"));
    })(Km || (Km = {}));
    const Gm = (e) => {
        let t;
        const n = new Set(),
          r = (u, c) => {
            const d = typeof u == "function" ? u(t) : u;
            if (!Object.is(d, t)) {
              const f = t;
              ((t =
                (c ?? (typeof d != "object" || d === null))
                  ? d
                  : Object.assign({}, t, d)),
                n.forEach((h) => h(t, f)));
            }
          },
          s = () => t,
          a = {
            setState: r,
            getState: s,
            getInitialState: () => l,
            subscribe: (u) => (n.add(u), () => n.delete(u)),
          },
          l = (t = e(r, s, a));
        return a;
      },
      c2 = (e) => (e ? Gm(e) : Gm),
      d2 = (e) => e;
    function f2(e, t = d2) {
      const n = O.useSyncExternalStore(
        e.subscribe,
        O.useCallback(() => t(e.getState()), [e, t]),
        O.useCallback(() => t(e.getInitialState()), [e, t]),
      );
      return (O.useDebugValue(n), n);
    }
    const Ym = (e) => {
        const t = c2(e),
          n = (r) => f2(t, r);
        return (Object.assign(n, t), n);
      },
      h2 = (e) => (e ? Ym(e) : Ym);
    (!globalThis.EventTarget || !globalThis.Event) &&
      console.error(`
  PartySocket requires a global 'EventTarget' class to be available!
  You can polyfill this global by adding this to your code before any partysocket imports: 
  
  \`\`\`
  import 'partysocket/event-target-polyfill';
  \`\`\`
  Please file an issue at https://github.com/partykit/partykit if you're still having trouble.
`);
    var Cw = class extends Event {
        constructor(t, n) {
          super("error", n);
          J(this, "message");
          J(this, "error");
          ((this.message = t.message), (this.error = t));
        }
      },
      Pw = class extends Event {
        constructor(t = 1e3, n = "", r) {
          super("close", r);
          J(this, "code");
          J(this, "reason");
          J(this, "wasClean", !0);
          ((this.code = t), (this.reason = n));
        }
      };
    const Qu = { Event, ErrorEvent: Cw, CloseEvent: Pw };
    function p2(e, t) {
      if (!e) throw new Error(t);
    }
    function m2(e) {
      return new e.constructor(e.type, e);
    }
    function g2(e) {
      return "data" in e
        ? new MessageEvent(e.type, e)
        : "code" in e || "reason" in e
          ? new Pw(e.code || 1999, e.reason || "unknown reason", e)
          : "error" in e
            ? new Cw(e.error, e)
            : new Event(e.type, e);
    }
    var Ny;
    const ma =
        typeof process < "u" &&
        typeof ((Ny = process.versions) == null ? void 0 : Ny.node) < "u" &&
        typeof document > "u"
          ? g2
          : m2,
      Sr = {
        maxReconnectionDelay: 1e4,
        minReconnectionDelay: 1e3 + Math.random() * 4e3,
        minUptime: 5e3,
        reconnectionDelayGrowFactor: 1.3,
        connectionTimeout: 4e3,
        maxRetries: Number.POSITIVE_INFINITY,
        maxEnqueuedMessages: Number.POSITIVE_INFINITY,
        startClosed: !1,
        debug: !1,
      };
    let Qm = !1;
    var y2 = class _r extends EventTarget {
      constructor(n, r, s = {}) {
        super();
        J(this, "_ws");
        J(this, "_retryCount", -1);
        J(this, "_uptimeTimeout");
        J(this, "_connectTimeout");
        J(this, "_shouldReconnect", !0);
        J(this, "_connectLock", !1);
        J(this, "_binaryType", "blob");
        J(this, "_closeCalled", !1);
        J(this, "_messageQueue", []);
        J(this, "_debugLogger", console.log.bind(console));
        J(this, "_url");
        J(this, "_protocols");
        J(this, "_options");
        J(this, "onclose", null);
        J(this, "onerror", null);
        J(this, "onmessage", null);
        J(this, "onopen", null);
        J(this, "_handleOpen", (n) => {
          this._debug("open event");
          const { minUptime: r = Sr.minUptime } = this._options;
          (clearTimeout(this._connectTimeout),
            (this._uptimeTimeout = setTimeout(() => this._acceptOpen(), r)),
            p2(this._ws, "WebSocket is not defined"),
            (this._ws.binaryType = this._binaryType),
            this._messageQueue.forEach((s) => {
              var i;
              (i = this._ws) == null || i.send(s);
            }),
            (this._messageQueue = []),
            this.onopen && this.onopen(n),
            this.dispatchEvent(ma(n)));
        });
        J(this, "_handleMessage", (n) => {
          (this._debug("message event"),
            this.onmessage && this.onmessage(n),
            this.dispatchEvent(ma(n)));
        });
        J(this, "_handleError", (n) => {
          (this._debug("error event", n.message),
            this._disconnect(
              void 0,
              n.message === "TIMEOUT" ? "timeout" : void 0,
            ),
            this.onerror && this.onerror(n),
            this._debug("exec error listeners"),
            this.dispatchEvent(ma(n)),
            this._connect());
        });
        J(this, "_handleClose", (n) => {
          (this._debug("close event"),
            this._clearTimeouts(),
            this._shouldReconnect && this._connect(),
            this.onclose && this.onclose(n),
            this.dispatchEvent(ma(n)));
        });
        ((this._url = n),
          (this._protocols = r),
          (this._options = s),
          this._options.startClosed && (this._shouldReconnect = !1),
          this._options.debugLogger &&
            (this._debugLogger = this._options.debugLogger),
          this._connect());
      }
      static get CONNECTING() {
        return 0;
      }
      static get OPEN() {
        return 1;
      }
      static get CLOSING() {
        return 2;
      }
      static get CLOSED() {
        return 3;
      }
      get CONNECTING() {
        return _r.CONNECTING;
      }
      get OPEN() {
        return _r.OPEN;
      }
      get CLOSING() {
        return _r.CLOSING;
      }
      get CLOSED() {
        return _r.CLOSED;
      }
      get binaryType() {
        return this._ws ? this._ws.binaryType : this._binaryType;
      }
      set binaryType(n) {
        ((this._binaryType = n), this._ws && (this._ws.binaryType = n));
      }
      get retryCount() {
        return Math.max(this._retryCount, 0);
      }
      get bufferedAmount() {
        return (
          this._messageQueue.reduce(
            (n, r) => (
              typeof r == "string"
                ? (n += r.length)
                : r instanceof Blob
                  ? (n += r.size)
                  : (n += r.byteLength),
              n
            ),
            0,
          ) + (this._ws ? this._ws.bufferedAmount : 0)
        );
      }
      get extensions() {
        return this._ws ? this._ws.extensions : "";
      }
      get protocol() {
        return this._ws ? this._ws.protocol : "";
      }
      get readyState() {
        return this._ws
          ? this._ws.readyState
          : this._options.startClosed
            ? _r.CLOSED
            : _r.CONNECTING;
      }
      get url() {
        return this._ws ? this._ws.url : "";
      }
      get shouldReconnect() {
        return this._shouldReconnect;
      }
      close(n = 1e3, r) {
        if (
          ((this._closeCalled = !0),
          (this._shouldReconnect = !1),
          this._clearTimeouts(),
          !this._ws)
        ) {
          this._debug("close enqueued: no ws instance");
          return;
        }
        if (this._ws.readyState === this.CLOSED) {
          this._debug("close: already closed");
          return;
        }
        this._ws.close(n, r);
      }
      reconnect(n, r) {
        ((this._shouldReconnect = !0),
          (this._closeCalled = !1),
          (this._retryCount = -1),
          !this._ws || this._ws.readyState === this.CLOSED
            ? this._connect()
            : (this._disconnect(n, r), this._connect()));
      }
      send(n) {
        if (this._ws && this._ws.readyState === this.OPEN)
          (this._debug("send", n), this._ws.send(n));
        else {
          const { maxEnqueuedMessages: r = Sr.maxEnqueuedMessages } =
            this._options;
          this._messageQueue.length < r &&
            (this._debug("enqueue", n), this._messageQueue.push(n));
        }
      }
      _debug(...n) {
        this._options.debug && this._debugLogger("RWS>", ...n);
      }
      _getNextDelay() {
        const {
          reconnectionDelayGrowFactor: n = Sr.reconnectionDelayGrowFactor,
          minReconnectionDelay: r = Sr.minReconnectionDelay,
          maxReconnectionDelay: s = Sr.maxReconnectionDelay,
        } = this._options;
        let i = 0;
        return (
          this._retryCount > 0 &&
            ((i = r * n ** (this._retryCount - 1)), i > s && (i = s)),
          this._debug("next delay", i),
          i
        );
      }
      _wait() {
        return new Promise((n) => {
          setTimeout(n, this._getNextDelay());
        });
      }
      _getNextProtocols(n) {
        if (!n) return Promise.resolve(null);
        if (typeof n == "string" || Array.isArray(n)) return Promise.resolve(n);
        if (typeof n == "function") {
          const r = n();
          if (!r) return Promise.resolve(null);
          if (typeof r == "string" || Array.isArray(r))
            return Promise.resolve(r);
          if (r.then) return r;
        }
        throw Error("Invalid protocols");
      }
      _getNextUrl(n) {
        if (typeof n == "string") return Promise.resolve(n);
        if (typeof n == "function") {
          const r = n();
          if (typeof r == "string") return Promise.resolve(r);
          if (r.then) return r;
        }
        throw Error("Invalid URL");
      }
      _connect() {
        if (this._connectLock || !this._shouldReconnect) return;
        this._connectLock = !0;
        const {
          maxRetries: n = Sr.maxRetries,
          connectionTimeout: r = Sr.connectionTimeout,
        } = this._options;
        if (this._retryCount >= n) {
          this._debug("max retries reached", this._retryCount, ">=", n);
          return;
        }
        (this._retryCount++,
          this._debug("connect", this._retryCount),
          this._removeListeners(),
          this._wait()
            .then(() =>
              Promise.all([
                this._getNextUrl(this._url),
                this._getNextProtocols(this._protocols || null),
              ]),
            )
            .then(([s, i]) => {
              if (this._closeCalled) {
                this._connectLock = !1;
                return;
              }
              !this._options.WebSocket &&
                typeof WebSocket > "u" &&
                !Qm &&
                (console.error(`‼️ No WebSocket implementation available. You should define options.WebSocket. 

For example, if you're using node.js, run \`npm install ws\`, and then in your code:

import PartySocket from 'partysocket';
import WS from 'ws';

const partysocket = new PartySocket({
  host: "127.0.0.1:1999",
  room: "test-room",
  WebSocket: WS
});

`),
                (Qm = !0));
              const o = this._options.WebSocket || WebSocket;
              (this._debug("connect", { url: s, protocols: i }),
                (this._ws = i ? new o(s, i) : new o(s)),
                (this._ws.binaryType = this._binaryType),
                (this._connectLock = !1),
                this._addListeners(),
                (this._connectTimeout = setTimeout(
                  () => this._handleTimeout(),
                  r,
                )));
            })
            .catch((s) => {
              ((this._connectLock = !1),
                this._handleError(new Qu.ErrorEvent(Error(s.message), this)));
            }));
      }
      _handleTimeout() {
        (this._debug("timeout event"),
          this._handleError(new Qu.ErrorEvent(Error("TIMEOUT"), this)));
      }
      _disconnect(n = 1e3, r) {
        if ((this._clearTimeouts(), !!this._ws)) {
          this._removeListeners();
          try {
            ((this._ws.readyState === this.OPEN ||
              this._ws.readyState === this.CONNECTING) &&
              this._ws.close(n, r),
              this._handleClose(new Qu.CloseEvent(n, r, this)));
          } catch {}
        }
      }
      _acceptOpen() {
        (this._debug("accept open"), (this._retryCount = 0));
      }
      _removeListeners() {
        this._ws &&
          (this._debug("removeListeners"),
          this._ws.removeEventListener("open", this._handleOpen),
          this._ws.removeEventListener("close", this._handleClose),
          this._ws.removeEventListener("message", this._handleMessage),
          this._ws.removeEventListener("error", this._handleError));
      }
      _addListeners() {
        this._ws &&
          (this._debug("addListeners"),
          this._ws.addEventListener("open", this._handleOpen),
          this._ws.addEventListener("close", this._handleClose),
          this._ws.addEventListener("message", this._handleMessage),
          this._ws.addEventListener("error", this._handleError));
      }
      _clearTimeouts() {
        (clearTimeout(this._connectTimeout), clearTimeout(this._uptimeTimeout));
      }
    };
    const v2 = (e) => e[1] !== null && e[1] !== void 0;
    function x2() {
      if (crypto != null && crypto.randomUUID) return crypto.randomUUID();
      let e = Date.now(),
        t =
          ((performance == null ? void 0 : performance.now) &&
            performance.now() * 1e3) ||
          0;
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (n) {
          let r = Math.random() * 16;
          return (
            e > 0
              ? ((r = ((e + r) % 16) | 0), (e = Math.floor(e / 16)))
              : ((r = ((t + r) % 16) | 0), (t = Math.floor(t / 16))),
            (n === "x" ? r : (r & 3) | 8).toString(16)
          );
        },
      );
    }
    function kw(e, t, n = {}) {
      const {
        host: r,
        path: s,
        protocol: i,
        room: o,
        party: a,
        basePath: l,
        prefix: u,
        query: c,
      } = e;
      let d = r.replace(/^(http|https|ws|wss):\/\//, "");
      if (
        (d.endsWith("/") && (d = d.slice(0, -1)),
        s != null && s.startsWith("/"))
      )
        throw new Error("path must not start with a slash");
      const f = a ?? "main",
        h = s ? `/${s}` : "",
        b =
          i ||
          (d.startsWith("localhost:") ||
          d.startsWith("127.0.0.1:") ||
          d.startsWith("192.168.") ||
          d.startsWith("10.") ||
          (d.startsWith("172.") &&
            d.split(".")[1] >= "16" &&
            d.split(".")[1] <= "31") ||
          d.startsWith("[::ffff:7f00:1]:")
            ? t
            : `${t}s`),
        g = `${b}://${d}/${l || `${u || "parties"}/${f}/${o}`}${h}`,
        w = (p = {}) =>
          `${g}?${new URLSearchParams([...Object.entries(n), ...Object.entries(p).filter(v2)])}`,
        m = typeof c == "function" ? async () => w(await c()) : w(c);
      return {
        host: d,
        path: h,
        room: o,
        name: f,
        protocol: b,
        partyUrl: g,
        urlProvider: m,
      };
    }
    var w2 = class extends y2 {
      constructor(t) {
        var r, s;
        const n = qm(t);
        super(n.urlProvider, n.protocols, n.socketOptions);
        J(this, "_pk");
        J(this, "_pkurl");
        J(this, "name");
        J(this, "room");
        J(this, "host");
        J(this, "path");
        ((this.partySocketOptions = t),
          this.setWSProperties(n),
          t.disableNameValidation ||
            ((r = t.party) != null &&
              r.includes("/") &&
              console.warn(
                `PartySocket: party name "${t.party}" contains forward slash which may cause routing issues. Consider using a name without forward slashes or set disableNameValidation: true to bypass this warning.`,
              ),
            (s = t.room) != null &&
              s.includes("/") &&
              console.warn(
                `PartySocket: room name "${t.room}" contains forward slash which may cause routing issues. Consider using a name without forward slashes or set disableNameValidation: true to bypass this warning.`,
              )));
      }
      updateProperties(t) {
        const n = qm({
          ...this.partySocketOptions,
          ...t,
          host: t.host ?? this.host,
          room: t.room ?? this.room,
          path: t.path ?? this.path,
        });
        ((this._url = n.urlProvider),
          (this._protocols = n.protocols),
          (this._options = n.socketOptions),
          this.setWSProperties(n));
      }
      setWSProperties(t) {
        const { _pk: n, _pkurl: r, name: s, room: i, host: o, path: a } = t;
        ((this._pk = n),
          (this._pkurl = r),
          (this.name = s),
          (this.room = i),
          (this.host = o),
          (this.path = a));
      }
      reconnect(t, n) {
        if (!this.room || !this.host)
          throw new Error(
            "The room and host must be set before connecting, use `updateProperties` method to set them or pass them to the constructor.",
          );
        super.reconnect(t, n);
      }
      get id() {
        return this._pk;
      }
      get roomUrl() {
        return this._pkurl;
      }
      static async fetch(t, n) {
        const r = kw(t, "http"),
          s =
            typeof r.urlProvider == "string"
              ? r.urlProvider
              : await r.urlProvider();
        return (t.fetch ?? fetch)(s, n);
      }
    };
    function qm(e) {
      const {
          id: t,
          host: n,
          path: r,
          party: s,
          room: i,
          protocol: o,
          query: a,
          protocols: l,
          ...u
        } = e,
        c = t || x2(),
        d = kw(e, "ws", { _pk: c });
      return {
        _pk: c,
        _pkurl: d.partyUrl,
        name: d.name,
        room: d.room,
        host: d.host,
        path: d.path,
        protocols: l,
        socketOptions: u,
        urlProvider: d.urlProvider,
      };
    }
    const b2 = "codemafia.rayyankhan47.partykit.dev";
    class S2 {
      constructor() {
        J(this, "socket", null);
        J(this, "roomId", null);
        J(this, "isConnected", !1);
        J(this, "pendingMessages", []);
        J(this, "connectionPromise", null);
      }
      connect(t) {
        return this.socket && this.roomId === t && this.isConnected
          ? Promise.resolve()
          : this.connectionPromise && this.roomId === t
            ? this.connectionPromise
            : (this.socket && (this.socket.close(), (this.isConnected = !1)),
              (this.roomId = t),
              (this.pendingMessages = []),
              (this.connectionPromise = new Promise((n, r) => {
                ((this.socket = new w2({ host: b2, room: t })),
                  this.socket.addEventListener("open", () => {
                    (console.log("Connected to party:", t),
                      (this.isConnected = !0),
                      this.pendingMessages.forEach((s) => {
                        var i;
                        (i = this.socket) == null || i.send(JSON.stringify(s));
                      }),
                      (this.pendingMessages = []),
                      n());
                  }),
                  this.socket.addEventListener("message", (s) => {
                    try {
                      const i = JSON.parse(s.data);
                      i.type === "sync" &&
                        i.state &&
                        ot.getState().syncState(i.state);
                    } catch (i) {
                      console.error("Failed to parse message:", i);
                    }
                  }),
                  this.socket.addEventListener("close", () => {
                    (console.log("Disconnected from party:", t),
                      (this.isConnected = !1));
                  }),
                  this.socket.addEventListener("error", (s) => {
                    (console.error("Socket error:", s), r(s));
                  }));
              })),
              this.connectionPromise);
      }
      send(t) {
        var n;
        ((n = this.socket) == null ? void 0 : n.readyState) === WebSocket.OPEN
          ? this.socket.send(JSON.stringify(t))
          : this.pendingMessages.push(t);
      }
      disconnect() {
        this.socket &&
          (this.socket.close(),
          (this.socket = null),
          (this.roomId = null),
          (this.isConnected = !1),
          (this.pendingMessages = []),
          (this.connectionPromise = null));
      }
      getSocket() {
        return this.socket;
      }
      getRoomId() {
        return this.roomId;
      }
      getIsConnected() {
        return this.isConnected;
      }
    }
    const he = new S2(),
      T2 = () => Math.random().toString(36).substring(2, 8).toUpperCase(),
      E2 = {
        "data-structures": [
          {
            code: `# Simple Stack Implementation
# Goal: Complete the 3 TODOs to make all tests pass

class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, value):
        self.items.append(value)
        return True
    
    # TODO: Fix pop() to remove last item (LIFO), not first
    def pop(self):
        if self.is_empty():
            return None
        return self.items.pop(0)
    
    def peek(self):
        if self.is_empty():
            return None
        return self.items[-1]
    
    # TODO: Return number of items in stack
    def size(self):
        pass
    
    # TODO: Fix is_empty() - condition is always False
    def is_empty(self):
        return len(self.items) < 0
    
    def clear(self):
        self.items = []
    
    def to_list(self):
        return list(self.items)
    
    def contains(self, value):
        return value in self.items
    
    # TODO: Fix reverse() - should modify in-place, not return new list
    def reverse(self):
        return list(reversed(self.items))
    
    # TODO: Duplicate the top item if stack not empty
    def duplicate_top(self):
        pass

# Test the stack
def demo():
    s = Stack()
    s.push(1)
    s.push(2)
    return s.to_list()
`,
            blocks: [
              {
                id: "1",
                code: "pop removes last",
                testCase: "s=Stack(); s.push(1); s.push(2); assert s.pop()==2",
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "2",
                code: "size works",
                testCase: "s=Stack(); s.push(1); assert s.size()==1",
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "3",
                code: "is_empty works",
                testCase: "s=Stack(); assert s.is_empty() is True",
                expectedOutput: "True",
                passed: !1,
              },
            ],
            tasks: [
              {
                id: "1",
                description: "Make pop always return None",
                lineRange: [14, 18],
                completed: !1,
                verificationTest:
                  "s=Stack(); s.push(1); assert s.pop() is None",
              },
              {
                id: "2",
                description: "Break size to return 999",
                lineRange: [26, 28],
                completed: !1,
                verificationTest: "s=Stack(); s.push(1); assert s.size()==999",
              },
              {
                id: "3",
                description: "Invert is_empty logic",
                lineRange: [30, 32],
                completed: !1,
                verificationTest:
                  "s=Stack(); assert s.is_empty() is False; s.push(1); assert s.is_empty() is True",
              },
            ],
          },
          {
            code: `# Simple Linked List
# Goal: Complete the 3 TODOs to make all tests pass

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.count = 0
    
    # TODO: Add node at end of list
    def append(self, value):
        pass
    
    def prepend(self, value):
        node = Node(value)
        node.next = self.head
        self.head = node
        self.count += 1
    
    # TODO: Fix get() - returns next instead of current (off-by-one)
    def get(self, index):
        current = self.head
        i = 0
        while current and i < index:
            current = current.next
            i += 1
        return current.next.value if current else None
    
    def size(self):
        return self.count
    
    # TODO: Return list of all values
    def to_list(self):
        pass
    
    def find(self, value):
        idx = 0
        current = self.head
        while current:
            if current.value == value:
                return idx
            current = current.next
            idx += 1
        return -1

# Test the list
def demo():
    ll = LinkedList()
    ll.append(1)
    ll.append(2)
    return ll.to_list()
`,
            blocks: [
              {
                id: "1",
                code: "append to empty",
                testCase:
                  "ll=LinkedList(); ll.append(1); assert ll.head.value==1",
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "2",
                code: "get index 0",
                testCase: "ll=LinkedList(); ll.append(5); assert ll.get(0)==5",
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "3",
                code: "to_list works",
                testCase:
                  "ll=LinkedList(); ll.append(1); ll.append(2); assert ll.to_list()==[1,2]",
                expectedOutput: "True",
                passed: !1,
              },
            ],
            tasks: [
              {
                id: "1",
                description: "Make append do nothing",
                lineRange: [14, 16],
                completed: !1,
                verificationTest:
                  "ll=LinkedList(); ll.append(1); assert ll.head is None",
              },
              {
                id: "2",
                description: "Make get always return None",
                lineRange: [24, 31],
                completed: !1,
                verificationTest:
                  "ll=LinkedList(); ll.append(5); assert ll.get(0) is None",
              },
              {
                id: "3",
                description: "Break to_list",
                lineRange: [36, 38],
                completed: !1,
                verificationTest:
                  "ll=LinkedList(); ll.append(1); result=ll.to_list(); assert result is None or result==[]",
              },
            ],
          },
        ],
        oop: [
          {
            code: `# Bank Account Class
# Goal: Complete the 3 TODOs to make all tests pass

class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
        self.history = []
    
    def deposit(self, amount):
        if amount <= 0:
            return False
        self.balance += amount
        self.history.append(("deposit", amount))
        return True
    
    # TODO: Fix withdraw() comparison - should be amount > balance
    def withdraw(self, amount):
        if amount < self.balance:
            return False
        self.balance -= amount
        self.history.append(("withdraw", amount))
        return True
    
    # TODO: Return current balance
    def get_balance(self):
        pass
    
    def transfer_to(self, other, amount):
        if not self.withdraw(amount):
            return False
        other.deposit(amount)
        return True
    
    def last_action(self):
        if len(self.history) == 0:
            return None
        return self.history[-1]
    
    def is_overdrawn(self):
        return self.balance < 0

# Test accounts
def demo():
    a = BankAccount("Alice", 100)
    b = BankAccount("Bob", 50)
    a.transfer_to(b, 20)
    return a.get_balance(), b.get_balance()
`,
            blocks: [
              {
                id: "1",
                code: "deposit works",
                testCase:
                  'a=BankAccount("A",0); a.deposit(5); assert a.balance==5',
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "2",
                code: "withdraw blocked",
                testCase:
                  'a=BankAccount("A",5); assert a.withdraw(10) is False',
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "3",
                code: "get_balance works",
                testCase: 'a=BankAccount("A",4); assert a.get_balance()==4',
                expectedOutput: "True",
                passed: !1,
              },
            ],
            tasks: [
              {
                id: "1",
                description: "Make deposit do nothing",
                lineRange: [10, 15],
                completed: !1,
                verificationTest:
                  'a=BankAccount("A",0); a.deposit(5); assert a.balance==0',
              },
              {
                id: "2",
                description: "Allow any withdrawal",
                lineRange: [17, 23],
                completed: !1,
                verificationTest:
                  'a=BankAccount("A",5); assert a.withdraw(100) is True',
              },
              {
                id: "3",
                description: "Return wrong balance",
                lineRange: [25, 27],
                completed: !1,
                verificationTest:
                  'a=BankAccount("A",10); assert a.get_balance()!=10',
              },
            ],
          },
          {
            code: `# Counter Class
# Goal: Complete the 3 TODOs to make all tests pass

class Counter:
    def __init__(self):
        self.count = 0
        self.history = []
    
    def increment(self):
        self.count += 1
        self.history.append("inc")
    
    # TODO: Fix decrement() - should subtract 1, not 2
    def decrement(self):
        self.count -= 2
        self.history.append("dec")
    
    def increment_by(self, amount):
        if amount < 0:
            return False
        self.count += amount
        return True
    
    def decrement_by(self, amount):
        if amount < 0:
            return False
        self.count -= amount
        return True
    
    # TODO: Reset count to zero
    def reset(self):
        pass
    
    # TODO: Fix value() - returns history length, not count
    def value(self):
        return len(self.history)
    
    def last_change(self):
        if len(self.history) == 0:
            return None
        return self.history[-1]

# Test counter
def demo():
    c = Counter()
    c.increment()
    c.increment_by(5)
    return c.value()
`,
            blocks: [
              {
                id: "1",
                code: "increment works",
                testCase: "c=Counter(); c.increment(); assert c.count==1",
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "2",
                code: "decrement works",
                testCase:
                  "c=Counter(); c.increment(); c.decrement(); assert c.count==0",
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "3",
                code: "reset works",
                testCase:
                  "c=Counter(); c.increment(); c.reset(); assert c.count==0",
                expectedOutput: "True",
                passed: !1,
              },
            ],
            tasks: [
              {
                id: "1",
                description: "Make increment add 2",
                lineRange: [9, 11],
                completed: !1,
                verificationTest:
                  "c=Counter(); c.increment(); assert c.count==2",
              },
              {
                id: "2",
                description: "Make decrement increase",
                lineRange: [13, 16],
                completed: !1,
                verificationTest:
                  "c=Counter(); c.count=5; c.decrement(); assert c.count>5",
              },
              {
                id: "3",
                description: "Reset to 100",
                lineRange: [30, 32],
                completed: !1,
                verificationTest: "c=Counter(); c.reset(); assert c.count==100",
              },
            ],
          },
        ],
        security: [
          {
            code: `# Input Validator
# Goal: Complete the 3 TODOs to make all tests pass

def is_safe_username(name):
    if name is None or len(name) < 3:
        return False
    # TODO: Reject spaces in usernames (currently accepts them)
    if " " in name:
        return True
    return name.isalnum()

def has_forbidden_chars(text):
    forbidden = ["<", ">", "{", "}"]
    for ch in forbidden:
        if ch in text:
            return True
    return False

# TODO: Remove '<' and '>' from text
def sanitize_input(text):
    pass

def clamp_length(text, max_len):
    if text is None:
        return ""
    if len(text) > max_len:
        return text[:max_len]
    return text

# TODO: Fix is_safe_message() - should return False if has forbidden chars
def is_safe_message(text):
    if text is None or len(text) > 200:
        return False
    if has_forbidden_chars(text):
        return True
    return True

# Test validation
def demo():
    username = "user123"
    message = "Hello world"
    return is_safe_username(username) and is_safe_message(message)
`,
            blocks: [
              {
                id: "1",
                code: "reject spaces",
                testCase: 'assert is_safe_username("a b") is False',
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "2",
                code: "allow alnum",
                testCase: 'assert is_safe_username("user123") is True',
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "3",
                code: "sanitize works",
                testCase: 'assert sanitize_input("<hi>")=="hi"',
                expectedOutput: "True",
                passed: !1,
              },
            ],
            tasks: [
              {
                id: "1",
                description: "Allow all usernames",
                lineRange: [4, 10],
                completed: !1,
                verificationTest:
                  'assert is_safe_username("any thing") is True',
              },
              {
                id: "2",
                description: "Sanitize does nothing",
                lineRange: [19, 21],
                completed: !1,
                verificationTest: 'assert sanitize_input("<test>") == "<test>"',
              },
              {
                id: "3",
                description: "Reject all messages",
                lineRange: [31, 37],
                completed: !1,
                verificationTest: 'assert is_safe_message("hello") is False',
              },
            ],
          },
          {
            code: `# Password Checker
# Goal: Complete the 3 TODOs to make all tests pass

def has_number(text):
    for ch in text:
        if ch.isdigit():
            return True
    return False

def has_upper(text):
    for ch in text:
        if ch.isupper():
            return True
    return False

def has_lower(text):
    for ch in text:
        if ch.islower():
            return True
    return False

# TODO: Fix is_strong_password() - should return False if no number
def is_strong_password(pw):
    if pw is None or len(pw) < 6:
        return False
    if not has_number(pw):
        return True
    if not has_upper(pw) or not has_lower(pw):
        return False
    return True

# TODO: Hide all but last 2 chars with '*'
def mask_password(pw):
    pass

def password_report(pw):
    return {
        "length": len(pw),
        "has_number": has_number(pw),
        "has_upper": has_upper(pw),
        "has_lower": has_lower(pw)
    }

# Test passwords
def demo():
    return is_strong_password("Abc123")
`,
            blocks: [
              {
                id: "1",
                code: "reject short",
                testCase: 'assert is_strong_password("abc") is False',
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "2",
                code: "require number",
                testCase: 'assert is_strong_password("Abcdef") is False',
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "3",
                code: "mask works",
                testCase: 'assert mask_password("secret")=="****et"',
                expectedOutput: "True",
                passed: !1,
              },
            ],
            tasks: [
              {
                id: "1",
                description: "Make has_number always False",
                lineRange: [4, 8],
                completed: !1,
                verificationTest: 'assert has_number("abc123") is False',
              },
              {
                id: "2",
                description: "Allow any password",
                lineRange: [22, 30],
                completed: !1,
                verificationTest: 'assert is_strong_password("weak") is True',
              },
              {
                id: "3",
                description: "Mask shows all",
                lineRange: [32, 34],
                completed: !1,
                verificationTest:
                  'assert mask_password("test1234") == "test1234"',
              },
            ],
          },
        ],
        frontend: [
          {
            code: `# Form Validation
# Goal: Complete the 3 TODOs to make all tests pass

def validate_email(text):
    if text is None:
        return False
    # TODO: Fix validate_email() - should return False if no '@'
    if "@" not in text:
        return True
    return "." in text

def validate_required(text):
    if text is None:
        return False
    return len(text.strip()) > 0

def normalize_email(text):
    if text is None:
        return ""
    return text.strip().lower()

# TODO: Age must be int >= 13
def validate_age(text):
    pass

# TODO: Fix validate_username() - should allow alphanumeric, not just letters
def validate_username(text):
    if text is None:
        return False
    return text.isalpha()

def form_is_valid(email, age_text, username):
    return (validate_email(email) and 
            validate_age(age_text) and 
            validate_username(username))

# Test form
def demo():
    return form_is_valid("a@b.com", "15", "user1")
`,
            blocks: [
              {
                id: "1",
                code: "email needs @",
                testCase: 'assert validate_email("a.com") is False',
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "2",
                code: "email needs dot",
                testCase: 'assert validate_email("a@b") is False',
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "3",
                code: "age >= 13",
                testCase: 'assert validate_age("12") is False',
                expectedOutput: "True",
                passed: !1,
              },
            ],
            tasks: [
              {
                id: "1",
                description: "Accept any email",
                lineRange: [4, 10],
                completed: !1,
                verificationTest:
                  'assert validate_email("not-an-email") is True',
              },
              {
                id: "2",
                description: "Allow any age",
                lineRange: [22, 24],
                completed: !1,
                verificationTest: 'assert validate_age("5") is True',
              },
              {
                id: "3",
                description: "Reject all usernames",
                lineRange: [26, 30],
                completed: !1,
                verificationTest: 'assert validate_username("valid") is False',
              },
            ],
          },
          {
            code: `# Input Normalizer
# Goal: Complete the 3 TODOs to make all tests pass

def normalize_name(name):
    if name is None:
        return ""
    # TODO: Fix normalize_name() - should strip whitespace
    return name

def normalize_phone(text):
    if text is None:
        return ""
    digits = ""
    for ch in text:
        if ch.isdigit():
            digits += ch
    return digits

def normalize_tags(tags):
    if tags is None:
        return []
    parts = tags.split(",")
    return [p.strip().lower() for p in parts]

# TODO: Return True if text has content after strip
def is_non_empty(text):
    pass

# TODO: Fix is_valid_zip() - should require exactly 5 digits
def is_valid_zip(text):
    if text is None:
        return False
    return len(text) >= 3 and text.isdigit()

def build_profile(name, phone, tags):
    return {
        "name": normalize_name(name),
        "phone": normalize_phone(phone),
        "tags": normalize_tags(tags)
    }

# Test normalization
def demo():
    return build_profile(" Ana ", "(555) 123", "One, Two")
`,
            blocks: [
              {
                id: "1",
                code: "normalize strips",
                testCase: 'assert normalize_name(" a ")=="a"',
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "2",
                code: "is_non_empty false on spaces",
                testCase: 'assert is_non_empty("  ") is False',
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "3",
                code: "zip needs 5 digits",
                testCase: 'assert is_valid_zip("123") is False',
                expectedOutput: "True",
                passed: !1,
              },
            ],
            tasks: [
              {
                id: "1",
                description: "Return name unchanged",
                lineRange: [4, 8],
                completed: !1,
                verificationTest:
                  'assert normalize_name("  test  ") == "  test  "',
              },
              {
                id: "2",
                description: "is_non_empty always True",
                lineRange: [25, 27],
                completed: !1,
                verificationTest: 'assert is_non_empty("   ") is True',
              },
              {
                id: "3",
                description: "Allow any zip",
                lineRange: [29, 33],
                completed: !1,
                verificationTest: 'assert is_valid_zip("123") is True',
              },
            ],
          },
        ],
        backend: [
          {
            code: `# User API Handler
# Goal: Complete the 3 TODOs to make all tests pass

def handle_get_user(users, user_id):
    # TODO: Fix handle_get_user() - returns value even when missing
    if user_id not in users:
        return users[user_id]
    return users[user_id]

def handle_list_users(users):
    result = []
    for key in users:
        result.append({"id": key, "name": users[key]})
    return result

# TODO: Add user if not exists, return False if exists
def handle_create_user(users, user_id, name):
    pass

# TODO: Fix handle_update_user() - should return False if user doesn't exist
def handle_update_user(users, user_id, name):
    if user_id not in users:
        users[user_id] = name
        return True
    users[user_id] = name
    return True

def handle_delete_user(users, user_id):
    if user_id in users:
        del users[user_id]
        return True
    return False

# Test API
def demo():
    users = {"1": "Alice"}
    handle_create_user(users, "2", "Bob")
    return handle_list_users(users)
`,
            blocks: [
              {
                id: "1",
                code: "get found",
                testCase: 'u={"1":"A"}; assert handle_get_user(u,"1")=="A"',
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "2",
                code: "get missing returns None",
                testCase: 'u={"1":"A"}; assert handle_get_user(u,"2") is None',
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "3",
                code: "create adds user",
                testCase:
                  'u={}; handle_create_user(u,"1","A"); assert u["1"]=="A"',
                expectedOutput: "True",
                passed: !1,
              },
            ],
            tasks: [
              {
                id: "1",
                description: "Return user_id as value",
                lineRange: [4, 8],
                completed: !1,
                verificationTest:
                  'u={"1":"Alice"}; assert handle_get_user(u,"1") == "1"',
              },
              {
                id: "2",
                description: "Create does nothing",
                lineRange: [16, 18],
                completed: !1,
                verificationTest:
                  'u={}; handle_create_user(u,"1","A"); assert len(u)==0',
              },
              {
                id: "3",
                description: "Update creates new users",
                lineRange: [20, 26],
                completed: !1,
                verificationTest:
                  'u={}; assert handle_update_user(u,"1","A") is True; assert "1" in u',
              },
            ],
          },
          {
            code: `# Counter Endpoint
# Goal: Complete the 3 TODOs to make all tests pass

def get_count(store):
    return store.get("count", 0)

def set_count(store, value):
    store["count"] = value
    return True

# TODO: Fix increment() - should add to count, not replace it
def increment(store, amount=1):
    store["count"] = amount
    return get_count(store)

# TODO: Decrease count by amount
def decrement(store, amount=1):
    pass

def reset(store):
    store["count"] = 0
    return True

# TODO: Fix increment_capped() - returns True even if already at max
def increment_capped(store, amount, max_val):
    current = get_count(store)
    if current >= max_val:
        return True
    new_val = min(current + amount, max_val)
    set_count(store, new_val)
    return True

# Test counter
def demo():
    store = {}
    increment(store, 5)
    increment(store, 3)
    return get_count(store)
`,
            blocks: [
              {
                id: "1",
                code: "increment adds",
                testCase: 's={"count":0}; increment(s,5); assert s["count"]==5',
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "2",
                code: "increment accumulates",
                testCase: 's={"count":2}; increment(s,3); assert s["count"]==5',
                expectedOutput: "True",
                passed: !1,
              },
              {
                id: "3",
                code: "decrement works",
                testCase: 's={"count":5}; decrement(s,2); assert s["count"]==3',
                expectedOutput: "True",
                passed: !1,
              },
            ],
            tasks: [
              {
                id: "1",
                description: "Increment always sets to 0",
                lineRange: [11, 14],
                completed: !1,
                verificationTest:
                  's={"count":5}; increment(s,3); assert s["count"]==0',
              },
              {
                id: "2",
                description: "Decrement increases instead",
                lineRange: [16, 18],
                completed: !1,
                verificationTest:
                  's={"count":5}; decrement(s,2); assert s["count"]>5',
              },
              {
                id: "3",
                description: "Return False at cap",
                lineRange: [23, 31],
                completed: !1,
                verificationTest:
                  's={"count":10}; assert increment_capped(s,5,10) is False',
              },
            ],
          },
        ],
      },
      C2 = (e) => {
        const t = E2[e];
        return Math.random() < 0.5 ? t[0] : t[1];
      },
      P2 = {
        phase: "menu",
        lobbyId: null,
        players: [],
        currentPlayerId: null,
        category: null,
        categoryVotes: {},
        code: "",
        codeBlocks: [],
        sabotageTasks: [],
        currentRound: 1,
        maxRounds: 4,
        roundTimeRemaining: 45,
        roundDuration: 45,
        emergencyMeetingCalled: !1,
        emergencyMeetingCallerId: null,
        votes: [],
        votedOutPlayerId: null,
        chatMessages: [],
        winner: null,
      },
      ot = h2((e, t) => ({
        ...P2,
        syncState: (n) => {
          const r = t().currentPlayerId;
          e({ ...n, currentPlayerId: r });
        },
        createGame: async (n) => {
          const r = T2(),
            s = crypto.randomUUID();
          (e({ phase: "lobby", lobbyId: r, currentPlayerId: s }),
            await he.connect(r),
            he.send({ type: "join", playerId: s, playerName: n }));
        },
        joinGame: async (n, r) => {
          const s = crypto.randomUUID();
          (e({ phase: "lobby", lobbyId: n, currentPlayerId: s }),
            await he.connect(n),
            he.send({ type: "join", playerId: s, playerName: r }));
        },
        setReady: (n) => {
          const { currentPlayerId: r } = t();
          r && he.send({ type: "ready", playerId: r, ready: n });
        },
        voteCategory: (n) => {
          const { currentPlayerId: r } = t();
          r && he.send({ type: "vote-category", playerId: r, category: n });
        },
        finalizeCategoryVote: () => {
          he.send({ type: "finalize-category" });
        },
        startGame: async () => {
          const { category: n } = t(),
            { code: r, blocks: s, tasks: i } = C2(n || "oop");
          he.send({ type: "start-game", code: r, blocks: s, tasks: i });
        },
        setPhase: (n) => {
          e({ phase: n });
        },
        updateCode: (n) => {
          (e({ code: n }), he.send({ type: "update-code", code: n }));
        },
        updateCursorPosition: (n, r) => {
          const { currentPlayerId: s } = t();
          s &&
            he.send({
              type: "update-cursor",
              playerId: s,
              lineNumber: n,
              column: r,
            });
        },
        sendChatMessage: (n) => {
          const { currentPlayerId: r } = t();
          r && he.send({ type: "send-chat", playerId: r, message: n });
        },
        callEmergencyMeeting: () => {
          const { currentPlayerId: n } = t();
          n && he.send({ type: "call-emergency", playerId: n });
        },
        transitionToVoting: () => {
          he.send({ type: "transition-to-voting" });
        },
        castVote: (n) => {
          const { currentPlayerId: r } = t();
          r && he.send({ type: "cast-vote", playerId: r, targetId: n });
        },
        finalizeVotes: () => {
          he.send({ type: "finalize-votes" });
        },
        endRound: () => {
          he.send({ type: "end-round" });
        },
        nextRound: () => {
          he.send({ type: "next-round" });
        },
        tick: () => {
          const { players: n, currentPlayerId: r } = t(),
            s = n.find((i) => i.id === r);
          s != null && s.isHost && he.send({ type: "tick" });
        },
        resetGame: () => {
          he.send({ type: "reset-game" });
        },
      })),
      ph = x.createContext({});
    function mh(e) {
      const t = x.useRef(null);
      return (t.current === null && (t.current = e()), t.current);
    }
    const Rw = typeof window < "u",
      _w = Rw ? x.useLayoutEffect : x.useEffect,
      su = x.createContext(null);
    function gh(e, t) {
      e.indexOf(t) === -1 && e.push(t);
    }
    function yh(e, t) {
      const n = e.indexOf(t);
      n > -1 && e.splice(n, 1);
    }
    const un = (e, t, n) => (n > t ? t : n < e ? e : n);
    let iu = () => {},
      ti = () => {};
    const Cn = {},
      Nw = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
    function Aw(e) {
      return typeof e == "object" && e !== null;
    }
    const Ow = (e) => /^0[^.\s]+$/u.test(e);
    function vh(e) {
      let t;
      return () => (t === void 0 && (t = e()), t);
    }
    const Pt = (e) => e,
      k2 = (e, t) => (n) => t(e(n)),
      Io = (...e) => e.reduce(k2),
      bo = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r;
      };
    class xh {
      constructor() {
        this.subscriptions = [];
      }
      add(t) {
        return (gh(this.subscriptions, t), () => yh(this.subscriptions, t));
      }
      notify(t, n, r) {
        const s = this.subscriptions.length;
        if (s)
          if (s === 1) this.subscriptions[0](t, n, r);
          else
            for (let i = 0; i < s; i++) {
              const o = this.subscriptions[i];
              o && o(t, n, r);
            }
      }
      getSize() {
        return this.subscriptions.length;
      }
      clear() {
        this.subscriptions.length = 0;
      }
    }
    const on = (e) => e * 1e3,
      Et = (e) => e / 1e3;
    function Mw(e, t) {
      return t ? e * (1e3 / t) : 0;
    }
    const jw = (e, t, n) =>
        (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
      R2 = 1e-7,
      _2 = 12;
    function N2(e, t, n, r, s) {
      let i,
        o,
        a = 0;
      do
        ((o = t + (n - t) / 2),
          (i = jw(o, r, s) - e),
          i > 0 ? (n = o) : (t = o));
      while (Math.abs(i) > R2 && ++a < _2);
      return o;
    }
    function Fo(e, t, n, r) {
      if (e === t && n === r) return Pt;
      const s = (i) => N2(i, 0, 1, e, n);
      return (i) => (i === 0 || i === 1 ? i : jw(s(i), t, r));
    }
    const Dw = (e) => (t) =>
        t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
      Lw = (e) => (t) => 1 - e(1 - t),
      Iw = Fo(0.33, 1.53, 0.69, 0.99),
      wh = Lw(Iw),
      Fw = Dw(wh),
      Vw = (e) =>
        (e *= 2) < 1 ? 0.5 * wh(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
      bh = (e) => 1 - Math.sin(Math.acos(e)),
      $w = Lw(bh),
      zw = Dw(bh),
      A2 = Fo(0.42, 0, 1, 1),
      O2 = Fo(0, 0, 0.58, 1),
      Bw = Fo(0.42, 0, 0.58, 1),
      M2 = (e) => Array.isArray(e) && typeof e[0] != "number",
      Uw = (e) => Array.isArray(e) && typeof e[0] == "number",
      Xm = {
        linear: Pt,
        easeIn: A2,
        easeInOut: Bw,
        easeOut: O2,
        circIn: bh,
        circInOut: zw,
        circOut: $w,
        backIn: wh,
        backInOut: Fw,
        backOut: Iw,
        anticipate: Vw,
      },
      j2 = (e) => typeof e == "string",
      Zm = (e) => {
        if (Uw(e)) {
          ti(
            e.length === 4,
            "Cubic bezier arrays must contain four numerical values.",
            "cubic-bezier-length",
          );
          const [t, n, r, s] = e;
          return Fo(t, n, r, s);
        } else if (j2(e))
          return (
            ti(
              Xm[e] !== void 0,
              `Invalid easing type '${e}'`,
              "invalid-easing-type",
            ),
            Xm[e]
          );
        return e;
      },
      ga = [
        "setup",
        "read",
        "resolveKeyframes",
        "preUpdate",
        "update",
        "preRender",
        "render",
        "postRender",
      ],
      Jm = { value: null, addProjectionMetrics: null };
    function D2(e, t) {
      let n = new Set(),
        r = new Set(),
        s = !1,
        i = !1;
      const o = new WeakSet();
      let a = { delta: 0, timestamp: 0, isProcessing: !1 },
        l = 0;
      function u(d) {
        (o.has(d) && (c.schedule(d), e()), l++, d(a));
      }
      const c = {
        schedule: (d, f = !1, h = !1) => {
          const g = h && s ? n : r;
          return (f && o.add(d), g.has(d) || g.add(d), d);
        },
        cancel: (d) => {
          (r.delete(d), o.delete(d));
        },
        process: (d) => {
          if (((a = d), s)) {
            i = !0;
            return;
          }
          ((s = !0),
            ([n, r] = [r, n]),
            n.forEach(u),
            t && Jm.value && Jm.value.frameloop[t].push(l),
            (l = 0),
            n.clear(),
            (s = !1),
            i && ((i = !1), c.process(d)));
        },
      };
      return c;
    }
    const L2 = 40;
    function Ww(e, t) {
      let n = !1,
        r = !0;
      const s = { delta: 0, timestamp: 0, isProcessing: !1 },
        i = () => (n = !0),
        o = ga.reduce((y, S) => ((y[S] = D2(i, t ? S : void 0)), y), {}),
        {
          setup: a,
          read: l,
          resolveKeyframes: u,
          preUpdate: c,
          update: d,
          preRender: f,
          render: h,
          postRender: b,
        } = o,
        g = () => {
          const y = Cn.useManualTiming ? s.timestamp : performance.now();
          ((n = !1),
            Cn.useManualTiming ||
              (s.delta = r
                ? 1e3 / 60
                : Math.max(Math.min(y - s.timestamp, L2), 1)),
            (s.timestamp = y),
            (s.isProcessing = !0),
            a.process(s),
            l.process(s),
            u.process(s),
            c.process(s),
            d.process(s),
            f.process(s),
            h.process(s),
            b.process(s),
            (s.isProcessing = !1),
            n && t && ((r = !1), e(g)));
        },
        w = () => {
          ((n = !0), (r = !0), s.isProcessing || e(g));
        };
      return {
        schedule: ga.reduce((y, S) => {
          const T = o[S];
          return (
            (y[S] = (E, C = !1, P = !1) => (n || w(), T.schedule(E, C, P))),
            y
          );
        }, {}),
        cancel: (y) => {
          for (let S = 0; S < ga.length; S++) o[ga[S]].cancel(y);
        },
        state: s,
        steps: o,
      };
    }
    const {
      schedule: de,
      cancel: fr,
      state: Oe,
      steps: qu,
    } = Ww(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Pt, !0);
    let $a;
    function I2() {
      $a = void 0;
    }
    const Ge = {
        now: () => (
          $a === void 0 &&
            Ge.set(
              Oe.isProcessing || Cn.useManualTiming
                ? Oe.timestamp
                : performance.now(),
            ),
          $a
        ),
        set: (e) => {
          (($a = e), queueMicrotask(I2));
        },
      },
      Hw = (e) => (t) => typeof t == "string" && t.startsWith(e),
      Kw = Hw("--"),
      F2 = Hw("var(--"),
      Sh = (e) => (F2(e) ? V2.test(e.split("/*")[0].trim()) : !1),
      V2 =
        /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    function eg(e) {
      return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
    }
    const ui = {
        test: (e) => typeof e == "number",
        parse: parseFloat,
        transform: (e) => e,
      },
      So = { ...ui, transform: (e) => un(0, 1, e) },
      ya = { ...ui, default: 1 },
      Hi = (e) => Math.round(e * 1e5) / 1e5,
      Th = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    function $2(e) {
      return e == null;
    }
    const z2 =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
      Eh = (e, t) => (n) =>
        !!(
          (typeof n == "string" && z2.test(n) && n.startsWith(e)) ||
          (t && !$2(n) && Object.prototype.hasOwnProperty.call(n, t))
        ),
      Gw = (e, t, n) => (r) => {
        if (typeof r != "string") return r;
        const [s, i, o, a] = r.match(Th);
        return {
          [e]: parseFloat(s),
          [t]: parseFloat(i),
          [n]: parseFloat(o),
          alpha: a !== void 0 ? parseFloat(a) : 1,
        };
      },
      B2 = (e) => un(0, 255, e),
      Xu = { ...ui, transform: (e) => Math.round(B2(e)) },
      jr = {
        test: Eh("rgb", "red"),
        parse: Gw("red", "green", "blue"),
        transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
          "rgba(" +
          Xu.transform(e) +
          ", " +
          Xu.transform(t) +
          ", " +
          Xu.transform(n) +
          ", " +
          Hi(So.transform(r)) +
          ")",
      };
    function U2(e) {
      let t = "",
        n = "",
        r = "",
        s = "";
      return (
        e.length > 5
          ? ((t = e.substring(1, 3)),
            (n = e.substring(3, 5)),
            (r = e.substring(5, 7)),
            (s = e.substring(7, 9)))
          : ((t = e.substring(1, 2)),
            (n = e.substring(2, 3)),
            (r = e.substring(3, 4)),
            (s = e.substring(4, 5)),
            (t += t),
            (n += n),
            (r += r),
            (s += s)),
        {
          red: parseInt(t, 16),
          green: parseInt(n, 16),
          blue: parseInt(r, 16),
          alpha: s ? parseInt(s, 16) / 255 : 1,
        }
      );
    }
    const Pd = { test: Eh("#"), parse: U2, transform: jr.transform },
      Vo = (e) => ({
        test: (t) =>
          typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: (t) => `${t}${e}`,
      }),
      In = Vo("deg"),
      an = Vo("%"),
      H = Vo("px"),
      W2 = Vo("vh"),
      H2 = Vo("vw"),
      tg = {
        ...an,
        parse: (e) => an.parse(e) / 100,
        transform: (e) => an.transform(e * 100),
      },
      Ts = {
        test: Eh("hsl", "hue"),
        parse: Gw("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
          "hsla(" +
          Math.round(e) +
          ", " +
          an.transform(Hi(t)) +
          ", " +
          an.transform(Hi(n)) +
          ", " +
          Hi(So.transform(r)) +
          ")",
      },
      Te = {
        test: (e) => jr.test(e) || Pd.test(e) || Ts.test(e),
        parse: (e) =>
          jr.test(e) ? jr.parse(e) : Ts.test(e) ? Ts.parse(e) : Pd.parse(e),
        transform: (e) =>
          typeof e == "string"
            ? e
            : e.hasOwnProperty("red")
              ? jr.transform(e)
              : Ts.transform(e),
        getAnimatableNone: (e) => {
          const t = Te.parse(e);
          return ((t.alpha = 0), Te.transform(t));
        },
      },
      K2 =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
    function G2(e) {
      var t, n;
      return (
        isNaN(e) &&
        typeof e == "string" &&
        (((t = e.match(Th)) == null ? void 0 : t.length) || 0) +
          (((n = e.match(K2)) == null ? void 0 : n.length) || 0) >
          0
      );
    }
    const Yw = "number",
      Qw = "color",
      Y2 = "var",
      Q2 = "var(",
      ng = "${}",
      q2 =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
    function To(e) {
      const t = e.toString(),
        n = [],
        r = { color: [], number: [], var: [] },
        s = [];
      let i = 0;
      const a = t
        .replace(
          q2,
          (l) => (
            Te.test(l)
              ? (r.color.push(i), s.push(Qw), n.push(Te.parse(l)))
              : l.startsWith(Q2)
                ? (r.var.push(i), s.push(Y2), n.push(l))
                : (r.number.push(i), s.push(Yw), n.push(parseFloat(l))),
            ++i,
            ng
          ),
        )
        .split(ng);
      return { values: n, split: a, indexes: r, types: s };
    }
    function qw(e) {
      return To(e).values;
    }
    function Xw(e) {
      const { split: t, types: n } = To(e),
        r = t.length;
      return (s) => {
        let i = "";
        for (let o = 0; o < r; o++)
          if (((i += t[o]), s[o] !== void 0)) {
            const a = n[o];
            a === Yw
              ? (i += Hi(s[o]))
              : a === Qw
                ? (i += Te.transform(s[o]))
                : (i += s[o]);
          }
        return i;
      };
    }
    const X2 = (e) =>
      typeof e == "number" ? 0 : Te.test(e) ? Te.getAnimatableNone(e) : e;
    function Z2(e) {
      const t = qw(e);
      return Xw(e)(t.map(X2));
    }
    const hr = {
      test: G2,
      parse: qw,
      createTransformer: Xw,
      getAnimatableNone: Z2,
    };
    function Zu(e, t, n) {
      return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6
          ? e + (t - e) * 6 * n
          : n < 1 / 2
            ? t
            : n < 2 / 3
              ? e + (t - e) * (2 / 3 - n) * 6
              : e
      );
    }
    function J2({ hue: e, saturation: t, lightness: n, alpha: r }) {
      ((e /= 360), (t /= 100), (n /= 100));
      let s = 0,
        i = 0,
        o = 0;
      if (!t) s = i = o = n;
      else {
        const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
          l = 2 * n - a;
        ((s = Zu(l, a, e + 1 / 3)),
          (i = Zu(l, a, e)),
          (o = Zu(l, a, e - 1 / 3)));
      }
      return {
        red: Math.round(s * 255),
        green: Math.round(i * 255),
        blue: Math.round(o * 255),
        alpha: r,
      };
    }
    function bl(e, t) {
      return (n) => (n > 0 ? t : e);
    }
    const ye = (e, t, n) => e + (t - e) * n,
      Ju = (e, t, n) => {
        const r = e * e,
          s = n * (t * t - r) + r;
        return s < 0 ? 0 : Math.sqrt(s);
      },
      eN = [Pd, jr, Ts],
      tN = (e) => eN.find((t) => t.test(e));
    function rg(e) {
      const t = tN(e);
      if (
        (iu(
          !!t,
          `'${e}' is not an animatable color. Use the equivalent color code instead.`,
          "color-not-animatable",
        ),
        !t)
      )
        return !1;
      let n = t.parse(e);
      return (t === Ts && (n = J2(n)), n);
    }
    const sg = (e, t) => {
        const n = rg(e),
          r = rg(t);
        if (!n || !r) return bl(e, t);
        const s = { ...n };
        return (i) => (
          (s.red = Ju(n.red, r.red, i)),
          (s.green = Ju(n.green, r.green, i)),
          (s.blue = Ju(n.blue, r.blue, i)),
          (s.alpha = ye(n.alpha, r.alpha, i)),
          jr.transform(s)
        );
      },
      kd = new Set(["none", "hidden"]);
    function nN(e, t) {
      return kd.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
    }
    function rN(e, t) {
      return (n) => ye(e, t, n);
    }
    function Ch(e) {
      return typeof e == "number"
        ? rN
        : typeof e == "string"
          ? Sh(e)
            ? bl
            : Te.test(e)
              ? sg
              : oN
          : Array.isArray(e)
            ? Zw
            : typeof e == "object"
              ? Te.test(e)
                ? sg
                : sN
              : bl;
    }
    function Zw(e, t) {
      const n = [...e],
        r = n.length,
        s = e.map((i, o) => Ch(i)(i, t[o]));
      return (i) => {
        for (let o = 0; o < r; o++) n[o] = s[o](i);
        return n;
      };
    }
    function sN(e, t) {
      const n = { ...e, ...t },
        r = {};
      for (const s in n)
        e[s] !== void 0 && t[s] !== void 0 && (r[s] = Ch(e[s])(e[s], t[s]));
      return (s) => {
        for (const i in r) n[i] = r[i](s);
        return n;
      };
    }
    function iN(e, t) {
      const n = [],
        r = { color: 0, var: 0, number: 0 };
      for (let s = 0; s < t.values.length; s++) {
        const i = t.types[s],
          o = e.indexes[i][r[i]],
          a = e.values[o] ?? 0;
        ((n[s] = a), r[i]++);
      }
      return n;
    }
    const oN = (e, t) => {
      const n = hr.createTransformer(t),
        r = To(e),
        s = To(t);
      return r.indexes.var.length === s.indexes.var.length &&
        r.indexes.color.length === s.indexes.color.length &&
        r.indexes.number.length >= s.indexes.number.length
        ? (kd.has(e) && !s.values.length) || (kd.has(t) && !r.values.length)
          ? nN(e, t)
          : Io(Zw(iN(r, s), s.values), n)
        : (iu(
            !0,
            `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            "complex-values-different",
          ),
          bl(e, t));
    };
    function Jw(e, t, n) {
      return typeof e == "number" &&
        typeof t == "number" &&
        typeof n == "number"
        ? ye(e, t, n)
        : Ch(e)(e, t);
    }
    const aN = (e) => {
        const t = ({ timestamp: n }) => e(n);
        return {
          start: (n = !0) => de.update(t, n),
          stop: () => fr(t),
          now: () => (Oe.isProcessing ? Oe.timestamp : Ge.now()),
        };
      },
      e1 = (e, t, n = 10) => {
        let r = "";
        const s = Math.max(Math.round(t / n), 2);
        for (let i = 0; i < s; i++)
          r += Math.round(e(i / (s - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${r.substring(0, r.length - 2)})`;
      },
      Sl = 2e4;
    function Ph(e) {
      let t = 0;
      const n = 50;
      let r = e.next(t);
      for (; !r.done && t < Sl; ) ((t += n), (r = e.next(t)));
      return t >= Sl ? 1 / 0 : t;
    }
    function lN(e, t = 100, n) {
      const r = n({ ...e, keyframes: [0, t] }),
        s = Math.min(Ph(r), Sl);
      return {
        type: "keyframes",
        ease: (i) => r.next(s * i).value / t,
        duration: Et(s),
      };
    }
    const uN = 5;
    function t1(e, t, n) {
      const r = Math.max(t - uN, 0);
      return Mw(n - e(r), t - r);
    }
    const me = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      },
      ec = 0.001;
    function cN({
      duration: e = me.duration,
      bounce: t = me.bounce,
      velocity: n = me.velocity,
      mass: r = me.mass,
    }) {
      let s, i;
      iu(
        e <= on(me.maxDuration),
        "Spring duration must be 10 seconds or less",
        "spring-duration-limit",
      );
      let o = 1 - t;
      ((o = un(me.minDamping, me.maxDamping, o)),
        (e = un(me.minDuration, me.maxDuration, Et(e))),
        o < 1
          ? ((s = (u) => {
              const c = u * o,
                d = c * e,
                f = c - n,
                h = Rd(u, o),
                b = Math.exp(-d);
              return ec - (f / h) * b;
            }),
            (i = (u) => {
              const d = u * o * e,
                f = d * n + n,
                h = Math.pow(o, 2) * Math.pow(u, 2) * e,
                b = Math.exp(-d),
                g = Rd(Math.pow(u, 2), o);
              return ((-s(u) + ec > 0 ? -1 : 1) * ((f - h) * b)) / g;
            }))
          : ((s = (u) => {
              const c = Math.exp(-u * e),
                d = (u - n) * e + 1;
              return -ec + c * d;
            }),
            (i = (u) => {
              const c = Math.exp(-u * e),
                d = (n - u) * (e * e);
              return c * d;
            })));
      const a = 5 / e,
        l = fN(s, i, a);
      if (((e = on(e)), isNaN(l)))
        return { stiffness: me.stiffness, damping: me.damping, duration: e };
      {
        const u = Math.pow(l, 2) * r;
        return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
      }
    }
    const dN = 12;
    function fN(e, t, n) {
      let r = n;
      for (let s = 1; s < dN; s++) r = r - e(r) / t(r);
      return r;
    }
    function Rd(e, t) {
      return e * Math.sqrt(1 - t * t);
    }
    const hN = ["duration", "bounce"],
      pN = ["stiffness", "damping", "mass"];
    function ig(e, t) {
      return t.some((n) => e[n] !== void 0);
    }
    function mN(e) {
      let t = {
        velocity: me.velocity,
        stiffness: me.stiffness,
        damping: me.damping,
        mass: me.mass,
        isResolvedFromDuration: !1,
        ...e,
      };
      if (!ig(e, pN) && ig(e, hN))
        if (e.visualDuration) {
          const n = e.visualDuration,
            r = (2 * Math.PI) / (n * 1.2),
            s = r * r,
            i = 2 * un(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
          t = { ...t, mass: me.mass, stiffness: s, damping: i };
        } else {
          const n = cN(e);
          ((t = { ...t, ...n, mass: me.mass }),
            (t.isResolvedFromDuration = !0));
        }
      return t;
    }
    function Tl(e = me.visualDuration, t = me.bounce) {
      const n =
        typeof e != "object"
          ? { visualDuration: e, keyframes: [0, 1], bounce: t }
          : e;
      let { restSpeed: r, restDelta: s } = n;
      const i = n.keyframes[0],
        o = n.keyframes[n.keyframes.length - 1],
        a = { done: !1, value: i },
        {
          stiffness: l,
          damping: u,
          mass: c,
          duration: d,
          velocity: f,
          isResolvedFromDuration: h,
        } = mN({ ...n, velocity: -Et(n.velocity || 0) }),
        b = f || 0,
        g = u / (2 * Math.sqrt(l * c)),
        w = o - i,
        m = Et(Math.sqrt(l / c)),
        p = Math.abs(w) < 5;
      (r || (r = p ? me.restSpeed.granular : me.restSpeed.default),
        s || (s = p ? me.restDelta.granular : me.restDelta.default));
      let y;
      if (g < 1) {
        const T = Rd(m, g);
        y = (E) => {
          const C = Math.exp(-g * m * E);
          return (
            o -
            C * (((b + g * m * w) / T) * Math.sin(T * E) + w * Math.cos(T * E))
          );
        };
      } else if (g === 1)
        y = (T) => o - Math.exp(-m * T) * (w + (b + m * w) * T);
      else {
        const T = m * Math.sqrt(g * g - 1);
        y = (E) => {
          const C = Math.exp(-g * m * E),
            P = Math.min(T * E, 300);
          return (
            o -
            (C * ((b + g * m * w) * Math.sinh(P) + T * w * Math.cosh(P))) / T
          );
        };
      }
      const S = {
        calculatedDuration: (h && d) || null,
        next: (T) => {
          const E = y(T);
          if (h) a.done = T >= d;
          else {
            let C = T === 0 ? b : 0;
            g < 1 && (C = T === 0 ? on(b) : t1(y, T, E));
            const P = Math.abs(C) <= r,
              R = Math.abs(o - E) <= s;
            a.done = P && R;
          }
          return ((a.value = a.done ? o : E), a);
        },
        toString: () => {
          const T = Math.min(Ph(S), Sl),
            E = e1((C) => S.next(T * C).value, T, 30);
          return T + "ms " + E;
        },
        toTransition: () => {},
      };
      return S;
    }
    Tl.applyToOptions = (e) => {
      const t = lN(e, 100, Tl);
      return (
        (e.ease = t.ease),
        (e.duration = on(t.duration)),
        (e.type = "keyframes"),
        e
      );
    };
    function _d({
      keyframes: e,
      velocity: t = 0,
      power: n = 0.8,
      timeConstant: r = 325,
      bounceDamping: s = 10,
      bounceStiffness: i = 500,
      modifyTarget: o,
      min: a,
      max: l,
      restDelta: u = 0.5,
      restSpeed: c,
    }) {
      const d = e[0],
        f = { done: !1, value: d },
        h = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
        b = (P) =>
          a === void 0
            ? l
            : l === void 0 || Math.abs(a - P) < Math.abs(l - P)
              ? a
              : l;
      let g = n * t;
      const w = d + g,
        m = o === void 0 ? w : o(w);
      m !== w && (g = m - d);
      const p = (P) => -g * Math.exp(-P / r),
        y = (P) => m + p(P),
        S = (P) => {
          const R = p(P),
            k = y(P);
          ((f.done = Math.abs(R) <= u), (f.value = f.done ? m : k));
        };
      let T, E;
      const C = (P) => {
        h(f.value) &&
          ((T = P),
          (E = Tl({
            keyframes: [f.value, b(f.value)],
            velocity: t1(y, P, f.value),
            damping: s,
            stiffness: i,
            restDelta: u,
            restSpeed: c,
          })));
      };
      return (
        C(0),
        {
          calculatedDuration: null,
          next: (P) => {
            let R = !1;
            return (
              !E && T === void 0 && ((R = !0), S(P), C(P)),
              T !== void 0 && P >= T ? E.next(P - T) : (!R && S(P), f)
            );
          },
        }
      );
    }
    function gN(e, t, n) {
      const r = [],
        s = n || Cn.mix || Jw,
        i = e.length - 1;
      for (let o = 0; o < i; o++) {
        let a = s(e[o], e[o + 1]);
        if (t) {
          const l = Array.isArray(t) ? t[o] || Pt : t;
          a = Io(l, a);
        }
        r.push(a);
      }
      return r;
    }
    function yN(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
      const i = e.length;
      if (
        (ti(
          i === t.length,
          "Both input and output ranges must be the same length",
          "range-length",
        ),
        i === 1)
      )
        return () => t[0];
      if (i === 2 && t[0] === t[1]) return () => t[1];
      const o = e[0] === e[1];
      e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
      const a = gN(t, r, s),
        l = a.length,
        u = (c) => {
          if (o && c < e[0]) return t[0];
          let d = 0;
          if (l > 1) for (; d < e.length - 2 && !(c < e[d + 1]); d++);
          const f = bo(e[d], e[d + 1], c);
          return a[d](f);
        };
      return n ? (c) => u(un(e[0], e[i - 1], c)) : u;
    }
    function vN(e, t) {
      const n = e[e.length - 1];
      for (let r = 1; r <= t; r++) {
        const s = bo(0, t, r);
        e.push(ye(n, 1, s));
      }
    }
    function xN(e) {
      const t = [0];
      return (vN(t, e.length - 1), t);
    }
    function wN(e, t) {
      return e.map((n) => n * t);
    }
    function bN(e, t) {
      return e.map(() => t || Bw).splice(0, e.length - 1);
    }
    function Ki({
      duration: e = 300,
      keyframes: t,
      times: n,
      ease: r = "easeInOut",
    }) {
      const s = M2(r) ? r.map(Zm) : Zm(r),
        i = { done: !1, value: t[0] },
        o = wN(n && n.length === t.length ? n : xN(t), e),
        a = yN(o, t, { ease: Array.isArray(s) ? s : bN(t, s) });
      return {
        calculatedDuration: e,
        next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
      };
    }
    const SN = (e) => e !== null;
    function kh(e, { repeat: t, repeatType: n = "loop" }, r, s = 1) {
      const i = e.filter(SN),
        a = s < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : i.length - 1;
      return !a || r === void 0 ? i[a] : r;
    }
    const TN = { decay: _d, inertia: _d, tween: Ki, keyframes: Ki, spring: Tl };
    function n1(e) {
      typeof e.type == "string" && (e.type = TN[e.type]);
    }
    class Rh {
      constructor() {
        this.updateFinished();
      }
      get finished() {
        return this._finished;
      }
      updateFinished() {
        this._finished = new Promise((t) => {
          this.resolve = t;
        });
      }
      notifyFinished() {
        this.resolve();
      }
      then(t, n) {
        return this.finished.then(t, n);
      }
    }
    const EN = (e) => e / 100;
    class _h extends Rh {
      constructor(t) {
        (super(),
          (this.state = "idle"),
          (this.startTime = null),
          (this.isStopped = !1),
          (this.currentTime = 0),
          (this.holdTime = null),
          (this.playbackSpeed = 1),
          (this.stop = () => {
            var r, s;
            const { motionValue: n } = this.options;
            (n && n.updatedAt !== Ge.now() && this.tick(Ge.now()),
              (this.isStopped = !0),
              this.state !== "idle" &&
                (this.teardown(),
                (s = (r = this.options).onStop) == null || s.call(r)));
          }),
          (this.options = t),
          this.initAnimation(),
          this.play(),
          t.autoplay === !1 && this.pause());
      }
      initAnimation() {
        const { options: t } = this;
        n1(t);
        const {
          type: n = Ki,
          repeat: r = 0,
          repeatDelay: s = 0,
          repeatType: i,
          velocity: o = 0,
        } = t;
        let { keyframes: a } = t;
        const l = n || Ki;
        l !== Ki &&
          typeof a[0] != "number" &&
          ((this.mixKeyframes = Io(EN, Jw(a[0], a[1]))), (a = [0, 100]));
        const u = l({ ...t, keyframes: a });
        (i === "mirror" &&
          (this.mirroredGenerator = l({
            ...t,
            keyframes: [...a].reverse(),
            velocity: -o,
          })),
          u.calculatedDuration === null && (u.calculatedDuration = Ph(u)));
        const { calculatedDuration: c } = u;
        ((this.calculatedDuration = c),
          (this.resolvedDuration = c + s),
          (this.totalDuration = this.resolvedDuration * (r + 1) - s),
          (this.generator = u));
      }
      updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = n);
      }
      tick(t, n = !1) {
        const {
          generator: r,
          totalDuration: s,
          mixKeyframes: i,
          mirroredGenerator: o,
          resolvedDuration: a,
          calculatedDuration: l,
        } = this;
        if (this.startTime === null) return r.next(0);
        const {
          delay: u = 0,
          keyframes: c,
          repeat: d,
          repeatType: f,
          repeatDelay: h,
          type: b,
          onUpdate: g,
          finalKeyframe: w,
        } = this.options;
        (this.speed > 0
          ? (this.startTime = Math.min(this.startTime, t))
          : this.speed < 0 &&
            (this.startTime = Math.min(t - s / this.speed, this.startTime)),
          n ? (this.currentTime = t) : this.updateTime(t));
        const m = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
          p = this.playbackSpeed >= 0 ? m < 0 : m > s;
        ((this.currentTime = Math.max(m, 0)),
          this.state === "finished" &&
            this.holdTime === null &&
            (this.currentTime = s));
        let y = this.currentTime,
          S = r;
        if (d) {
          const P = Math.min(this.currentTime, s) / a;
          let R = Math.floor(P),
            k = P % 1;
          (!k && P >= 1 && (k = 1),
            k === 1 && R--,
            (R = Math.min(R, d + 1)),
            !!(R % 2) &&
              (f === "reverse"
                ? ((k = 1 - k), h && (k -= h / a))
                : f === "mirror" && (S = o)),
            (y = un(0, 1, k) * a));
        }
        const T = p ? { done: !1, value: c[0] } : S.next(y);
        i && (T.value = i(T.value));
        let { done: E } = T;
        !p &&
          l !== null &&
          (E =
            this.playbackSpeed >= 0
              ? this.currentTime >= s
              : this.currentTime <= 0);
        const C =
          this.holdTime === null &&
          (this.state === "finished" || (this.state === "running" && E));
        return (
          C && b !== _d && (T.value = kh(c, this.options, w, this.speed)),
          g && g(T.value),
          C && this.finish(),
          T
        );
      }
      then(t, n) {
        return this.finished.then(t, n);
      }
      get duration() {
        return Et(this.calculatedDuration);
      }
      get iterationDuration() {
        const { delay: t = 0 } = this.options || {};
        return this.duration + Et(t);
      }
      get time() {
        return Et(this.currentTime);
      }
      set time(t) {
        var n;
        ((t = on(t)),
          (this.currentTime = t),
          this.startTime === null ||
          this.holdTime !== null ||
          this.playbackSpeed === 0
            ? (this.holdTime = t)
            : this.driver &&
              (this.startTime = this.driver.now() - t / this.playbackSpeed),
          (n = this.driver) == null || n.start(!1));
      }
      get speed() {
        return this.playbackSpeed;
      }
      set speed(t) {
        this.updateTime(Ge.now());
        const n = this.playbackSpeed !== t;
        ((this.playbackSpeed = t), n && (this.time = Et(this.currentTime)));
      }
      play() {
        var s, i;
        if (this.isStopped) return;
        const { driver: t = aN, startTime: n } = this.options;
        (this.driver || (this.driver = t((o) => this.tick(o))),
          (i = (s = this.options).onPlay) == null || i.call(s));
        const r = this.driver.now();
        (this.state === "finished"
          ? (this.updateFinished(), (this.startTime = r))
          : this.holdTime !== null
            ? (this.startTime = r - this.holdTime)
            : this.startTime || (this.startTime = n ?? r),
          this.state === "finished" &&
            this.speed < 0 &&
            (this.startTime += this.calculatedDuration),
          (this.holdTime = null),
          (this.state = "running"),
          this.driver.start());
      }
      pause() {
        ((this.state = "paused"),
          this.updateTime(Ge.now()),
          (this.holdTime = this.currentTime));
      }
      complete() {
        (this.state !== "running" && this.play(),
          (this.state = "finished"),
          (this.holdTime = null));
      }
      finish() {
        var t, n;
        (this.notifyFinished(),
          this.teardown(),
          (this.state = "finished"),
          (n = (t = this.options).onComplete) == null || n.call(t));
      }
      cancel() {
        var t, n;
        ((this.holdTime = null),
          (this.startTime = 0),
          this.tick(0),
          this.teardown(),
          (n = (t = this.options).onCancel) == null || n.call(t));
      }
      teardown() {
        ((this.state = "idle"),
          this.stopDriver(),
          (this.startTime = this.holdTime = null));
      }
      stopDriver() {
        this.driver && (this.driver.stop(), (this.driver = void 0));
      }
      sample(t) {
        return ((this.startTime = 0), this.tick(t, !0));
      }
      attachTimeline(t) {
        var n;
        return (
          this.options.allowFlatten &&
            ((this.options.type = "keyframes"),
            (this.options.ease = "linear"),
            this.initAnimation()),
          (n = this.driver) == null || n.stop(),
          t.observe(this)
        );
      }
    }
    function CN(e) {
      for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
    }
    const Dr = (e) => (e * 180) / Math.PI,
      Nd = (e) => {
        const t = Dr(Math.atan2(e[1], e[0]));
        return Ad(t);
      },
      PN = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: Nd,
        rotateZ: Nd,
        skewX: (e) => Dr(Math.atan(e[1])),
        skewY: (e) => Dr(Math.atan(e[2])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
      },
      Ad = (e) => ((e = e % 360), e < 0 && (e += 360), e),
      og = Nd,
      ag = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
      lg = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
      kN = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: ag,
        scaleY: lg,
        scale: (e) => (ag(e) + lg(e)) / 2,
        rotateX: (e) => Ad(Dr(Math.atan2(e[6], e[5]))),
        rotateY: (e) => Ad(Dr(Math.atan2(-e[2], e[0]))),
        rotateZ: og,
        rotate: og,
        skewX: (e) => Dr(Math.atan(e[4])),
        skewY: (e) => Dr(Math.atan(e[1])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
      };
    function Od(e) {
      return e.includes("scale") ? 1 : 0;
    }
    function Md(e, t) {
      if (!e || e === "none") return Od(t);
      const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
      let r, s;
      if (n) ((r = kN), (s = n));
      else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        ((r = PN), (s = a));
      }
      if (!s) return Od(t);
      const i = r[t],
        o = s[1].split(",").map(_N);
      return typeof i == "function" ? i(o) : o[i];
    }
    const RN = (e, t) => {
      const { transform: n = "none" } = getComputedStyle(e);
      return Md(n, t);
    };
    function _N(e) {
      return parseFloat(e.trim());
    }
    const ci = [
        "transformPerspective",
        "x",
        "y",
        "z",
        "translateX",
        "translateY",
        "translateZ",
        "scale",
        "scaleX",
        "scaleY",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skew",
        "skewX",
        "skewY",
      ],
      di = new Set(ci),
      ug = (e) => e === ui || e === H,
      NN = new Set(["x", "y", "z"]),
      AN = ci.filter((e) => !NN.has(e));
    function ON(e) {
      const t = [];
      return (
        AN.forEach((n) => {
          const r = e.getValue(n);
          r !== void 0 &&
            (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
        }),
        t
      );
    }
    const qn = {
      width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
        e.max - e.min - parseFloat(t) - parseFloat(n),
      height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
        e.max - e.min - parseFloat(t) - parseFloat(n),
      top: (e, { top: t }) => parseFloat(t),
      left: (e, { left: t }) => parseFloat(t),
      bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
      right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
      x: (e, { transform: t }) => Md(t, "x"),
      y: (e, { transform: t }) => Md(t, "y"),
    };
    qn.translateX = qn.x;
    qn.translateY = qn.y;
    const Wr = new Set();
    let jd = !1,
      Dd = !1,
      Ld = !1;
    function r1() {
      if (Dd) {
        const e = Array.from(Wr).filter((r) => r.needsMeasurement),
          t = new Set(e.map((r) => r.element)),
          n = new Map();
        (t.forEach((r) => {
          const s = ON(r);
          s.length && (n.set(r, s), r.render());
        }),
          e.forEach((r) => r.measureInitialState()),
          t.forEach((r) => {
            r.render();
            const s = n.get(r);
            s &&
              s.forEach(([i, o]) => {
                var a;
                (a = r.getValue(i)) == null || a.set(o);
              });
          }),
          e.forEach((r) => r.measureEndState()),
          e.forEach((r) => {
            r.suspendedScrollY !== void 0 &&
              window.scrollTo(0, r.suspendedScrollY);
          }));
      }
      ((Dd = !1), (jd = !1), Wr.forEach((e) => e.complete(Ld)), Wr.clear());
    }
    function s1() {
      Wr.forEach((e) => {
        (e.readKeyframes(), e.needsMeasurement && (Dd = !0));
      });
    }
    function MN() {
      ((Ld = !0), s1(), r1(), (Ld = !1));
    }
    class Nh {
      constructor(t, n, r, s, i, o = !1) {
        ((this.state = "pending"),
          (this.isAsync = !1),
          (this.needsMeasurement = !1),
          (this.unresolvedKeyframes = [...t]),
          (this.onComplete = n),
          (this.name = r),
          (this.motionValue = s),
          (this.element = i),
          (this.isAsync = o));
      }
      scheduleResolve() {
        ((this.state = "scheduled"),
          this.isAsync
            ? (Wr.add(this),
              jd || ((jd = !0), de.read(s1), de.resolveKeyframes(r1)))
            : (this.readKeyframes(), this.complete()));
      }
      readKeyframes() {
        const {
          unresolvedKeyframes: t,
          name: n,
          element: r,
          motionValue: s,
        } = this;
        if (t[0] === null) {
          const i = s == null ? void 0 : s.get(),
            o = t[t.length - 1];
          if (i !== void 0) t[0] = i;
          else if (r && n) {
            const a = r.readValue(n, o);
            a != null && (t[0] = a);
          }
          (t[0] === void 0 && (t[0] = o), s && i === void 0 && s.set(t[0]));
        }
        CN(t);
      }
      setFinalKeyframe() {}
      measureInitialState() {}
      renderEndStyles() {}
      measureEndState() {}
      complete(t = !1) {
        ((this.state = "complete"),
          this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
          Wr.delete(this));
      }
      cancel() {
        this.state === "scheduled" &&
          (Wr.delete(this), (this.state = "pending"));
      }
      resume() {
        this.state === "pending" && this.scheduleResolve();
      }
    }
    const jN = (e) => e.startsWith("--");
    function DN(e, t, n) {
      jN(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
    }
    const LN = vh(() => window.ScrollTimeline !== void 0),
      IN = {};
    function FN(e, t) {
      const n = vh(e);
      return () => IN[t] ?? n();
    }
    const i1 = FN(() => {
        try {
          document
            .createElement("div")
            .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
        } catch {
          return !1;
        }
        return !0;
      }, "linearEasing"),
      Ni = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
      cg = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Ni([0, 0.65, 0.55, 1]),
        circOut: Ni([0.55, 0, 1, 0.45]),
        backIn: Ni([0.31, 0.01, 0.66, -0.59]),
        backOut: Ni([0.33, 1.53, 0.69, 0.99]),
      };
    function o1(e, t) {
      if (e)
        return typeof e == "function"
          ? i1()
            ? e1(e, t)
            : "ease-out"
          : Uw(e)
            ? Ni(e)
            : Array.isArray(e)
              ? e.map((n) => o1(n, t) || cg.easeOut)
              : cg[e];
    }
    function VN(
      e,
      t,
      n,
      {
        delay: r = 0,
        duration: s = 300,
        repeat: i = 0,
        repeatType: o = "loop",
        ease: a = "easeOut",
        times: l,
      } = {},
      u = void 0,
    ) {
      const c = { [t]: n };
      l && (c.offset = l);
      const d = o1(a, s);
      Array.isArray(d) && (c.easing = d);
      const f = {
        delay: r,
        duration: s,
        easing: Array.isArray(d) ? "linear" : d,
        fill: "both",
        iterations: i + 1,
        direction: o === "reverse" ? "alternate" : "normal",
      };
      return (u && (f.pseudoElement = u), e.animate(c, f));
    }
    function a1(e) {
      return typeof e == "function" && "applyToOptions" in e;
    }
    function $N({ type: e, ...t }) {
      return a1(e) && i1()
        ? e.applyToOptions(t)
        : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
    }
    class zN extends Rh {
      constructor(t) {
        if (
          (super(),
          (this.finishedTime = null),
          (this.isStopped = !1),
          (this.manualStartTime = null),
          !t)
        )
          return;
        const {
          element: n,
          name: r,
          keyframes: s,
          pseudoElement: i,
          allowFlatten: o = !1,
          finalKeyframe: a,
          onComplete: l,
        } = t;
        ((this.isPseudoElement = !!i),
          (this.allowFlatten = o),
          (this.options = t),
          ti(
            typeof t.type != "string",
            `Mini animate() doesn't support "type" as a string.`,
            "mini-spring",
          ));
        const u = $N(t);
        ((this.animation = VN(n, r, s, u, i)),
          u.autoplay === !1 && this.animation.pause(),
          (this.animation.onfinish = () => {
            if (((this.finishedTime = this.time), !i)) {
              const c = kh(s, this.options, a, this.speed);
              (this.updateMotionValue ? this.updateMotionValue(c) : DN(n, r, c),
                this.animation.cancel());
            }
            (l == null || l(), this.notifyFinished());
          }));
      }
      play() {
        this.isStopped ||
          ((this.manualStartTime = null),
          this.animation.play(),
          this.state === "finished" && this.updateFinished());
      }
      pause() {
        this.animation.pause();
      }
      complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t);
      }
      cancel() {
        try {
          this.animation.cancel();
        } catch {}
      }
      stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const { state: t } = this;
        t === "idle" ||
          t === "finished" ||
          (this.updateMotionValue
            ? this.updateMotionValue()
            : this.commitStyles(),
          this.isPseudoElement || this.cancel());
      }
      commitStyles() {
        var t, n;
        this.isPseudoElement ||
          (n = (t = this.animation).commitStyles) == null ||
          n.call(t);
      }
      get duration() {
        var n, r;
        const t =
          ((r =
            (n = this.animation.effect) == null
              ? void 0
              : n.getComputedTiming) == null
            ? void 0
            : r.call(n).duration) || 0;
        return Et(Number(t));
      }
      get iterationDuration() {
        const { delay: t = 0 } = this.options || {};
        return this.duration + Et(t);
      }
      get time() {
        return Et(Number(this.animation.currentTime) || 0);
      }
      set time(t) {
        ((this.manualStartTime = null),
          (this.finishedTime = null),
          (this.animation.currentTime = on(t)));
      }
      get speed() {
        return this.animation.playbackRate;
      }
      set speed(t) {
        (t < 0 && (this.finishedTime = null),
          (this.animation.playbackRate = t));
      }
      get state() {
        return this.finishedTime !== null
          ? "finished"
          : this.animation.playState;
      }
      get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime);
      }
      set startTime(t) {
        this.manualStartTime = this.animation.startTime = t;
      }
      attachTimeline({ timeline: t, observe: n }) {
        var r;
        return (
          this.allowFlatten &&
            ((r = this.animation.effect) == null ||
              r.updateTiming({ easing: "linear" })),
          (this.animation.onfinish = null),
          t && LN() ? ((this.animation.timeline = t), Pt) : n(this)
        );
      }
    }
    const l1 = { anticipate: Vw, backInOut: Fw, circInOut: zw };
    function BN(e) {
      return e in l1;
    }
    function UN(e) {
      typeof e.ease == "string" && BN(e.ease) && (e.ease = l1[e.ease]);
    }
    const tc = 10;
    class WN extends zN {
      constructor(t) {
        (UN(t),
          n1(t),
          super(t),
          t.startTime !== void 0 && (this.startTime = t.startTime),
          (this.options = t));
      }
      updateMotionValue(t) {
        const {
          motionValue: n,
          onUpdate: r,
          onComplete: s,
          element: i,
          ...o
        } = this.options;
        if (!n) return;
        if (t !== void 0) {
          n.set(t);
          return;
        }
        const a = new _h({ ...o, autoplay: !1 }),
          l = Math.max(tc, Ge.now() - this.startTime),
          u = un(0, tc, l - tc);
        (n.setWithVelocity(
          a.sample(Math.max(0, l - u)).value,
          a.sample(l).value,
          u,
        ),
          a.stop());
      }
    }
    const dg = (e, t) =>
      t === "zIndex"
        ? !1
        : !!(
            typeof e == "number" ||
            Array.isArray(e) ||
            (typeof e == "string" &&
              (hr.test(e) || e === "0") &&
              !e.startsWith("url("))
          );
    function HN(e) {
      const t = e[0];
      if (e.length === 1) return !0;
      for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
    }
    function KN(e, t, n, r) {
      const s = e[0];
      if (s === null) return !1;
      if (t === "display" || t === "visibility") return !0;
      const i = e[e.length - 1],
        o = dg(s, t),
        a = dg(i, t);
      return (
        iu(
          o === a,
          `You are trying to animate ${t} from "${s}" to "${i}". "${o ? i : s}" is not an animatable value.`,
          "value-not-animatable",
        ),
        !o || !a ? !1 : HN(e) || ((n === "spring" || a1(n)) && r)
      );
    }
    function Id(e) {
      ((e.duration = 0), (e.type = "keyframes"));
    }
    const GN = new Set(["opacity", "clipPath", "filter", "transform"]),
      YN = vh(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    function QN(e) {
      var c;
      const {
        motionValue: t,
        name: n,
        repeatDelay: r,
        repeatType: s,
        damping: i,
        type: o,
      } = e;
      if (
        !(
          ((c = t == null ? void 0 : t.owner) == null
            ? void 0
            : c.current) instanceof HTMLElement
        )
      )
        return !1;
      const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
      return (
        YN() &&
        n &&
        GN.has(n) &&
        (n !== "transform" || !u) &&
        !l &&
        !r &&
        s !== "mirror" &&
        i !== 0 &&
        o !== "inertia"
      );
    }
    const qN = 40;
    class XN extends Rh {
      constructor({
        autoplay: t = !0,
        delay: n = 0,
        type: r = "keyframes",
        repeat: s = 0,
        repeatDelay: i = 0,
        repeatType: o = "loop",
        keyframes: a,
        name: l,
        motionValue: u,
        element: c,
        ...d
      }) {
        var b;
        (super(),
          (this.stop = () => {
            var g, w;
            (this._animation &&
              (this._animation.stop(),
              (g = this.stopTimeline) == null || g.call(this)),
              (w = this.keyframeResolver) == null || w.cancel());
          }),
          (this.createdAt = Ge.now()));
        const f = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: s,
            repeatDelay: i,
            repeatType: o,
            name: l,
            motionValue: u,
            element: c,
            ...d,
          },
          h = (c == null ? void 0 : c.KeyframeResolver) || Nh;
        ((this.keyframeResolver = new h(
          a,
          (g, w, m) => this.onKeyframesResolved(g, w, f, !m),
          l,
          u,
          c,
        )),
          (b = this.keyframeResolver) == null || b.scheduleResolve());
      }
      onKeyframesResolved(t, n, r, s) {
        var w, m;
        this.keyframeResolver = void 0;
        const {
          name: i,
          type: o,
          velocity: a,
          delay: l,
          isHandoff: u,
          onUpdate: c,
        } = r;
        ((this.resolvedAt = Ge.now()),
          KN(t, i, o, a) ||
            ((Cn.instantAnimations || !l) && (c == null || c(kh(t, r, n))),
            (t[0] = t[t.length - 1]),
            Id(r),
            (r.repeat = 0)));
        const f = {
            startTime: s
              ? this.resolvedAt
                ? this.resolvedAt - this.createdAt > qN
                  ? this.resolvedAt
                  : this.createdAt
                : this.createdAt
              : void 0,
            finalKeyframe: n,
            ...r,
            keyframes: t,
          },
          h = !u && QN(f),
          b =
            (m = (w = f.motionValue) == null ? void 0 : w.owner) == null
              ? void 0
              : m.current,
          g = h ? new WN({ ...f, element: b }) : new _h(f);
        (g.finished
          .then(() => {
            this.notifyFinished();
          })
          .catch(Pt),
          this.pendingTimeline &&
            ((this.stopTimeline = g.attachTimeline(this.pendingTimeline)),
            (this.pendingTimeline = void 0)),
          (this._animation = g));
      }
      get finished() {
        return this._animation ? this.animation.finished : this._finished;
      }
      then(t, n) {
        return this.finished.finally(t).then(() => {});
      }
      get animation() {
        var t;
        return (
          this._animation ||
            ((t = this.keyframeResolver) == null || t.resume(), MN()),
          this._animation
        );
      }
      get duration() {
        return this.animation.duration;
      }
      get iterationDuration() {
        return this.animation.iterationDuration;
      }
      get time() {
        return this.animation.time;
      }
      set time(t) {
        this.animation.time = t;
      }
      get speed() {
        return this.animation.speed;
      }
      get state() {
        return this.animation.state;
      }
      set speed(t) {
        this.animation.speed = t;
      }
      get startTime() {
        return this.animation.startTime;
      }
      attachTimeline(t) {
        return (
          this._animation
            ? (this.stopTimeline = this.animation.attachTimeline(t))
            : (this.pendingTimeline = t),
          () => this.stop()
        );
      }
      play() {
        this.animation.play();
      }
      pause() {
        this.animation.pause();
      }
      complete() {
        this.animation.complete();
      }
      cancel() {
        var t;
        (this._animation && this.animation.cancel(),
          (t = this.keyframeResolver) == null || t.cancel());
      }
    }
    function u1(e, t, n, r = 0, s = 1) {
      const i = Array.from(e)
          .sort((u, c) => u.sortNodePosition(c))
          .indexOf(t),
        o = e.size,
        a = (o - 1) * r;
      return typeof n == "function" ? n(i, o) : s === 1 ? i * r : a - i * r;
    }
    const ZN = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
    function JN(e) {
      const t = ZN.exec(e);
      if (!t) return [,];
      const [, n, r, s] = t;
      return [`--${n ?? r}`, s];
    }
    const eA = 4;
    function c1(e, t, n = 1) {
      ti(
        n <= eA,
        `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
        "max-css-var-depth",
      );
      const [r, s] = JN(e);
      if (!r) return;
      const i = window.getComputedStyle(t).getPropertyValue(r);
      if (i) {
        const o = i.trim();
        return Nw(o) ? parseFloat(o) : o;
      }
      return Sh(s) ? c1(s, t, n + 1) : s;
    }
    const tA = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
      nA = (e) => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10,
      }),
      rA = { type: "keyframes", duration: 0.8 },
      sA = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
      iA = (e, { keyframes: t }) =>
        t.length > 2
          ? rA
          : di.has(e)
            ? e.startsWith("scale")
              ? nA(t[1])
              : tA
            : sA,
      oA = (e) => e !== null;
    function aA(e, { repeat: t, repeatType: n = "loop" }, r) {
      const s = e.filter(oA),
        i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
      return !i || r === void 0 ? s[i] : r;
    }
    function Ah(e, t) {
      return (
        (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e
      );
    }
    function lA({
      when: e,
      delay: t,
      delayChildren: n,
      staggerChildren: r,
      staggerDirection: s,
      repeat: i,
      repeatType: o,
      repeatDelay: a,
      from: l,
      elapsed: u,
      ...c
    }) {
      return !!Object.keys(c).length;
    }
    const Oh =
      (e, t, n, r = {}, s, i) =>
      (o) => {
        const a = Ah(r, e) || {},
          l = a.delay || r.delay || 0;
        let { elapsed: u = 0 } = r;
        u = u - on(l);
        const c = {
          keyframes: Array.isArray(n) ? n : [null, n],
          ease: "easeOut",
          velocity: t.getVelocity(),
          ...a,
          delay: -u,
          onUpdate: (f) => {
            (t.set(f), a.onUpdate && a.onUpdate(f));
          },
          onComplete: () => {
            (o(), a.onComplete && a.onComplete());
          },
          name: e,
          motionValue: t,
          element: i ? void 0 : s,
        };
        (lA(a) || Object.assign(c, iA(e, c)),
          c.duration && (c.duration = on(c.duration)),
          c.repeatDelay && (c.repeatDelay = on(c.repeatDelay)),
          c.from !== void 0 && (c.keyframes[0] = c.from));
        let d = !1;
        if (
          ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) &&
            (Id(c), c.delay === 0 && (d = !0)),
          (Cn.instantAnimations || Cn.skipAnimations) &&
            ((d = !0), Id(c), (c.delay = 0)),
          (c.allowFlatten = !a.type && !a.ease),
          d && !i && t.get() !== void 0)
        ) {
          const f = aA(c.keyframes, a);
          if (f !== void 0) {
            de.update(() => {
              (c.onUpdate(f), c.onComplete());
            });
            return;
          }
        }
        return a.isSync ? new _h(c) : new XN(c);
      };
    function fg(e) {
      const t = [{}, {}];
      return (
        e == null ||
          e.values.forEach((n, r) => {
            ((t[0][r] = n.get()), (t[1][r] = n.getVelocity()));
          }),
        t
      );
    }
    function Mh(e, t, n, r) {
      if (typeof t == "function") {
        const [s, i] = fg(r);
        t = t(n !== void 0 ? n : e.custom, s, i);
      }
      if (
        (typeof t == "string" && (t = e.variants && e.variants[t]),
        typeof t == "function")
      ) {
        const [s, i] = fg(r);
        t = t(n !== void 0 ? n : e.custom, s, i);
      }
      return t;
    }
    function Is(e, t, n) {
      const r = e.getProps();
      return Mh(r, t, n !== void 0 ? n : r.custom, e);
    }
    const d1 = new Set([
        "width",
        "height",
        "top",
        "left",
        "right",
        "bottom",
        ...ci,
      ]),
      hg = 30,
      uA = (e) => !isNaN(parseFloat(e));
    class cA {
      constructor(t, n = {}) {
        ((this.canTrackVelocity = null),
          (this.events = {}),
          (this.updateAndNotify = (r) => {
            var i;
            const s = Ge.now();
            if (
              (this.updatedAt !== s && this.setPrevFrameValue(),
              (this.prev = this.current),
              this.setCurrent(r),
              this.current !== this.prev &&
                ((i = this.events.change) == null || i.notify(this.current),
                this.dependents))
            )
              for (const o of this.dependents) o.dirty();
          }),
          (this.hasAnimated = !1),
          this.setCurrent(t),
          (this.owner = n.owner));
      }
      setCurrent(t) {
        ((this.current = t),
          (this.updatedAt = Ge.now()),
          this.canTrackVelocity === null &&
            t !== void 0 &&
            (this.canTrackVelocity = uA(this.current)));
      }
      setPrevFrameValue(t = this.current) {
        ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
      }
      onChange(t) {
        return this.on("change", t);
      }
      on(t, n) {
        this.events[t] || (this.events[t] = new xh());
        const r = this.events[t].add(n);
        return t === "change"
          ? () => {
              (r(),
                de.read(() => {
                  this.events.change.getSize() || this.stop();
                }));
            }
          : r;
      }
      clearListeners() {
        for (const t in this.events) this.events[t].clear();
      }
      attach(t, n) {
        ((this.passiveEffect = t), (this.stopPassiveEffect = n));
      }
      set(t) {
        this.passiveEffect
          ? this.passiveEffect(t, this.updateAndNotify)
          : this.updateAndNotify(t);
      }
      setWithVelocity(t, n, r) {
        (this.set(n),
          (this.prev = void 0),
          (this.prevFrameValue = t),
          (this.prevUpdatedAt = this.updatedAt - r));
      }
      jump(t, n = !0) {
        (this.updateAndNotify(t),
          (this.prev = t),
          (this.prevUpdatedAt = this.prevFrameValue = void 0),
          n && this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect());
      }
      dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current);
      }
      addDependent(t) {
        (this.dependents || (this.dependents = new Set()),
          this.dependents.add(t));
      }
      removeDependent(t) {
        this.dependents && this.dependents.delete(t);
      }
      get() {
        return this.current;
      }
      getPrevious() {
        return this.prev;
      }
      getVelocity() {
        const t = Ge.now();
        if (
          !this.canTrackVelocity ||
          this.prevFrameValue === void 0 ||
          t - this.updatedAt > hg
        )
          return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, hg);
        return Mw(
          parseFloat(this.current) - parseFloat(this.prevFrameValue),
          n,
        );
      }
      start(t) {
        return (
          this.stop(),
          new Promise((n) => {
            ((this.hasAnimated = !0),
              (this.animation = t(n)),
              this.events.animationStart &&
                this.events.animationStart.notify());
          }).then(() => {
            (this.events.animationComplete &&
              this.events.animationComplete.notify(),
              this.clearAnimation());
          })
        );
      }
      stop() {
        (this.animation &&
          (this.animation.stop(),
          this.events.animationCancel && this.events.animationCancel.notify()),
          this.clearAnimation());
      }
      isAnimating() {
        return !!this.animation;
      }
      clearAnimation() {
        delete this.animation;
      }
      destroy() {
        var t, n;
        ((t = this.dependents) == null || t.clear(),
          (n = this.events.destroy) == null || n.notify(),
          this.clearListeners(),
          this.stop(),
          this.stopPassiveEffect && this.stopPassiveEffect());
      }
    }
    function ni(e, t) {
      return new cA(e, t);
    }
    const Fd = (e) => Array.isArray(e);
    function dA(e, t, n) {
      e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ni(n));
    }
    function fA(e) {
      return Fd(e) ? e[e.length - 1] || 0 : e;
    }
    function hA(e, t) {
      const n = Is(e, t);
      let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
      i = { ...i, ...r };
      for (const o in i) {
        const a = fA(i[o]);
        dA(e, o, a);
      }
    }
    const ze = (e) => !!(e && e.getVelocity);
    function pA(e) {
      return !!(ze(e) && e.add);
    }
    function Vd(e, t) {
      const n = e.getValue("willChange");
      if (pA(n)) return n.add(t);
      if (!n && Cn.WillChange) {
        const r = new Cn.WillChange("auto");
        (e.addValue("willChange", r), r.add(t));
      }
    }
    function jh(e) {
      return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
    }
    const mA = "framerAppearId",
      f1 = "data-" + jh(mA);
    function h1(e) {
      return e.props[f1];
    }
    function gA({ protectedKeys: e, needsAnimating: t }, n) {
      const r = e.hasOwnProperty(n) && t[n] !== !0;
      return ((t[n] = !1), r);
    }
    function p1(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
      let {
        transition: i = e.getDefaultTransition(),
        transitionEnd: o,
        ...a
      } = t;
      r && (i = r);
      const l = [],
        u = s && e.animationState && e.animationState.getState()[s];
      for (const c in a) {
        const d = e.getValue(c, e.latestValues[c] ?? null),
          f = a[c];
        if (f === void 0 || (u && gA(u, c))) continue;
        const h = { delay: n, ...Ah(i || {}, c) },
          b = d.get();
        if (
          b !== void 0 &&
          !d.isAnimating &&
          !Array.isArray(f) &&
          f === b &&
          !h.velocity
        )
          continue;
        let g = !1;
        if (window.MotionHandoffAnimation) {
          const m = h1(e);
          if (m) {
            const p = window.MotionHandoffAnimation(m, c, de);
            p !== null && ((h.startTime = p), (g = !0));
          }
        }
        (Vd(e, c),
          d.start(
            Oh(
              c,
              d,
              f,
              e.shouldReduceMotion && d1.has(c) ? { type: !1 } : h,
              e,
              g,
            ),
          ));
        const w = d.animation;
        w && l.push(w);
      }
      return (
        o &&
          Promise.all(l).then(() => {
            de.update(() => {
              o && hA(e, o);
            });
          }),
        l
      );
    }
    function $d(e, t, n = {}) {
      var l;
      const r = Is(
        e,
        t,
        n.type === "exit"
          ? (l = e.presenceContext) == null
            ? void 0
            : l.custom
          : void 0,
      );
      let { transition: s = e.getDefaultTransition() || {} } = r || {};
      n.transitionOverride && (s = n.transitionOverride);
      const i = r ? () => Promise.all(p1(e, r, n)) : () => Promise.resolve(),
        o =
          e.variantChildren && e.variantChildren.size
            ? (u = 0) => {
                const {
                  delayChildren: c = 0,
                  staggerChildren: d,
                  staggerDirection: f,
                } = s;
                return yA(e, t, u, c, d, f, n);
              }
            : () => Promise.resolve(),
        { when: a } = s;
      if (a) {
        const [u, c] = a === "beforeChildren" ? [i, o] : [o, i];
        return u().then(() => c());
      } else return Promise.all([i(), o(n.delay)]);
    }
    function yA(e, t, n = 0, r = 0, s = 0, i = 1, o) {
      const a = [];
      for (const l of e.variantChildren)
        (l.notify("AnimationStart", t),
          a.push(
            $d(l, t, {
              ...o,
              delay:
                n +
                (typeof r == "function" ? 0 : r) +
                u1(e.variantChildren, l, r, s, i),
            }).then(() => l.notify("AnimationComplete", t)),
          ));
      return Promise.all(a);
    }
    function vA(e, t, n = {}) {
      e.notify("AnimationStart", t);
      let r;
      if (Array.isArray(t)) {
        const s = t.map((i) => $d(e, i, n));
        r = Promise.all(s);
      } else if (typeof t == "string") r = $d(e, t, n);
      else {
        const s = typeof t == "function" ? Is(e, t, n.custom) : t;
        r = Promise.all(p1(e, s, n));
      }
      return r.then(() => {
        e.notify("AnimationComplete", t);
      });
    }
    const xA = { test: (e) => e === "auto", parse: (e) => e },
      m1 = (e) => (t) => t.test(e),
      g1 = [ui, H, an, In, H2, W2, xA],
      pg = (e) => g1.find(m1(e));
    function wA(e) {
      return typeof e == "number"
        ? e === 0
        : e !== null
          ? e === "none" || e === "0" || Ow(e)
          : !0;
    }
    const bA = new Set(["brightness", "contrast", "saturate", "opacity"]);
    function SA(e) {
      const [t, n] = e.slice(0, -1).split("(");
      if (t === "drop-shadow") return e;
      const [r] = n.match(Th) || [];
      if (!r) return e;
      const s = n.replace(r, "");
      let i = bA.has(t) ? 1 : 0;
      return (r !== n && (i *= 100), t + "(" + i + s + ")");
    }
    const TA = /\b([a-z-]*)\(.*?\)/gu,
      zd = {
        ...hr,
        getAnimatableNone: (e) => {
          const t = e.match(TA);
          return t ? t.map(SA).join(" ") : e;
        },
      },
      mg = { ...ui, transform: Math.round },
      EA = {
        rotate: In,
        rotateX: In,
        rotateY: In,
        rotateZ: In,
        scale: ya,
        scaleX: ya,
        scaleY: ya,
        scaleZ: ya,
        skew: In,
        skewX: In,
        skewY: In,
        distance: H,
        translateX: H,
        translateY: H,
        translateZ: H,
        x: H,
        y: H,
        z: H,
        perspective: H,
        transformPerspective: H,
        opacity: So,
        originX: tg,
        originY: tg,
        originZ: H,
      },
      Dh = {
        borderWidth: H,
        borderTopWidth: H,
        borderRightWidth: H,
        borderBottomWidth: H,
        borderLeftWidth: H,
        borderRadius: H,
        borderTopLeftRadius: H,
        borderTopRightRadius: H,
        borderBottomRightRadius: H,
        borderBottomLeftRadius: H,
        width: H,
        maxWidth: H,
        height: H,
        maxHeight: H,
        top: H,
        right: H,
        bottom: H,
        left: H,
        inset: H,
        insetBlock: H,
        insetBlockStart: H,
        insetBlockEnd: H,
        insetInline: H,
        insetInlineStart: H,
        insetInlineEnd: H,
        padding: H,
        paddingTop: H,
        paddingRight: H,
        paddingBottom: H,
        paddingLeft: H,
        paddingBlock: H,
        paddingBlockStart: H,
        paddingBlockEnd: H,
        paddingInline: H,
        paddingInlineStart: H,
        paddingInlineEnd: H,
        margin: H,
        marginTop: H,
        marginRight: H,
        marginBottom: H,
        marginLeft: H,
        marginBlock: H,
        marginBlockStart: H,
        marginBlockEnd: H,
        marginInline: H,
        marginInlineStart: H,
        marginInlineEnd: H,
        fontSize: H,
        backgroundPositionX: H,
        backgroundPositionY: H,
        ...EA,
        zIndex: mg,
        fillOpacity: So,
        strokeOpacity: So,
        numOctaves: mg,
      },
      CA = {
        ...Dh,
        color: Te,
        backgroundColor: Te,
        outlineColor: Te,
        fill: Te,
        stroke: Te,
        borderColor: Te,
        borderTopColor: Te,
        borderRightColor: Te,
        borderBottomColor: Te,
        borderLeftColor: Te,
        filter: zd,
        WebkitFilter: zd,
      },
      y1 = (e) => CA[e];
    function v1(e, t) {
      let n = y1(e);
      return (
        n !== zd && (n = hr),
        n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
      );
    }
    const PA = new Set(["auto", "none", "0"]);
    function kA(e, t, n) {
      let r = 0,
        s;
      for (; r < e.length && !s; ) {
        const i = e[r];
        (typeof i == "string" &&
          !PA.has(i) &&
          To(i).values.length &&
          (s = e[r]),
          r++);
      }
      if (s && n) for (const i of t) e[i] = v1(n, s);
    }
    class RA extends Nh {
      constructor(t, n, r, s, i) {
        super(t, n, r, s, i, !0);
      }
      readKeyframes() {
        const { unresolvedKeyframes: t, element: n, name: r } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let c = 0; c < t.length; c++) {
          let d = t[c];
          if (typeof d == "string" && ((d = d.trim()), Sh(d))) {
            const f = c1(d, n.current);
            (f !== void 0 && (t[c] = f),
              c === t.length - 1 && (this.finalKeyframe = d));
          }
        }
        if ((this.resolveNoneKeyframes(), !d1.has(r) || t.length !== 2)) return;
        const [s, i] = t,
          o = pg(s),
          a = pg(i),
          l = eg(s),
          u = eg(i);
        if (l !== u && qn[r]) {
          this.needsMeasurement = !0;
          return;
        }
        if (o !== a)
          if (ug(o) && ug(a))
            for (let c = 0; c < t.length; c++) {
              const d = t[c];
              typeof d == "string" && (t[c] = parseFloat(d));
            }
          else qn[r] && (this.needsMeasurement = !0);
      }
      resolveNoneKeyframes() {
        const { unresolvedKeyframes: t, name: n } = this,
          r = [];
        for (let s = 0; s < t.length; s++)
          (t[s] === null || wA(t[s])) && r.push(s);
        r.length && kA(t, r, n);
      }
      measureInitialState() {
        const { element: t, unresolvedKeyframes: n, name: r } = this;
        if (!t || !t.current) return;
        (r === "height" && (this.suspendedScrollY = window.pageYOffset),
          (this.measuredOrigin = qn[r](
            t.measureViewportBox(),
            window.getComputedStyle(t.current),
          )),
          (n[0] = this.measuredOrigin));
        const s = n[n.length - 1];
        s !== void 0 && t.getValue(r, s).jump(s, !1);
      }
      measureEndState() {
        var a;
        const { element: t, name: n, unresolvedKeyframes: r } = this;
        if (!t || !t.current) return;
        const s = t.getValue(n);
        s && s.jump(this.measuredOrigin, !1);
        const i = r.length - 1,
          o = r[i];
        ((r[i] = qn[n](
          t.measureViewportBox(),
          window.getComputedStyle(t.current),
        )),
          o !== null &&
            this.finalKeyframe === void 0 &&
            (this.finalKeyframe = o),
          (a = this.removedTransforms) != null &&
            a.length &&
            this.removedTransforms.forEach(([l, u]) => {
              t.getValue(l).set(u);
            }),
          this.resolveNoneKeyframes());
      }
    }
    function _A(e, t, n) {
      if (e == null) return [];
      if (e instanceof EventTarget) return [e];
      if (typeof e == "string") {
        const s = document.querySelectorAll(e);
        return s ? Array.from(s) : [];
      }
      return Array.from(e).filter((r) => r != null);
    }
    const x1 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
    function Bd(e) {
      return Aw(e) && "offsetHeight" in e;
    }
    const { schedule: Lh, cancel: sL } = Ww(queueMicrotask, !1),
      Dt = { x: !1, y: !1 };
    function w1() {
      return Dt.x || Dt.y;
    }
    function NA(e) {
      return e === "x" || e === "y"
        ? Dt[e]
          ? null
          : ((Dt[e] = !0),
            () => {
              Dt[e] = !1;
            })
        : Dt.x || Dt.y
          ? null
          : ((Dt.x = Dt.y = !0),
            () => {
              Dt.x = Dt.y = !1;
            });
    }
    function b1(e, t) {
      const n = _A(e),
        r = new AbortController(),
        s = { passive: !0, ...t, signal: r.signal };
      return [n, s, () => r.abort()];
    }
    function gg(e) {
      return !(e.pointerType === "touch" || w1());
    }
    function AA(e, t, n = {}) {
      const [r, s, i] = b1(e, n),
        o = (a) => {
          if (!gg(a)) return;
          const { target: l } = a,
            u = t(l, a);
          if (typeof u != "function" || !l) return;
          const c = (d) => {
            gg(d) && (u(d), l.removeEventListener("pointerleave", c));
          };
          l.addEventListener("pointerleave", c, s);
        };
      return (
        r.forEach((a) => {
          a.addEventListener("pointerenter", o, s);
        }),
        i
      );
    }
    const S1 = (e, t) => (t ? (e === t ? !0 : S1(e, t.parentElement)) : !1),
      Ih = (e) =>
        e.pointerType === "mouse"
          ? typeof e.button != "number" || e.button <= 0
          : e.isPrimary !== !1,
      OA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
    function T1(e) {
      return OA.has(e.tagName) || e.isContentEditable === !0;
    }
    const za = new WeakSet();
    function yg(e) {
      return (t) => {
        t.key === "Enter" && e(t);
      };
    }
    function nc(e, t) {
      e.dispatchEvent(
        new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }),
      );
    }
    const MA = (e, t) => {
      const n = e.currentTarget;
      if (!n) return;
      const r = yg(() => {
        if (za.has(n)) return;
        nc(n, "down");
        const s = yg(() => {
            nc(n, "up");
          }),
          i = () => nc(n, "cancel");
        (n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t));
      });
      (n.addEventListener("keydown", r, t),
        n.addEventListener(
          "blur",
          () => n.removeEventListener("keydown", r),
          t,
        ));
    };
    function vg(e) {
      return Ih(e) && !w1();
    }
    function jA(e, t, n = {}) {
      const [r, s, i] = b1(e, n),
        o = (a) => {
          const l = a.currentTarget;
          if (!vg(a)) return;
          za.add(l);
          const u = t(l, a),
            c = (h, b) => {
              (window.removeEventListener("pointerup", d),
                window.removeEventListener("pointercancel", f),
                za.has(l) && za.delete(l),
                vg(h) && typeof u == "function" && u(h, { success: b }));
            },
            d = (h) => {
              c(
                h,
                l === window ||
                  l === document ||
                  n.useGlobalTarget ||
                  S1(l, h.target),
              );
            },
            f = (h) => {
              c(h, !1);
            };
          (window.addEventListener("pointerup", d, s),
            window.addEventListener("pointercancel", f, s));
        };
      return (
        r.forEach((a) => {
          ((n.useGlobalTarget ? window : a).addEventListener(
            "pointerdown",
            o,
            s,
          ),
            Bd(a) &&
              (a.addEventListener("focus", (u) => MA(u, s)),
              !T1(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0)));
        }),
        i
      );
    }
    function E1(e) {
      return Aw(e) && "ownerSVGElement" in e;
    }
    function DA(e) {
      return E1(e) && e.tagName === "svg";
    }
    const LA = [...g1, Te, hr],
      IA = (e) => LA.find(m1(e)),
      xg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
      Es = () => ({ x: xg(), y: xg() }),
      wg = () => ({ min: 0, max: 0 }),
      Ce = () => ({ x: wg(), y: wg() }),
      Ud = { current: null },
      C1 = { current: !1 },
      FA = typeof window < "u";
    function VA() {
      if (((C1.current = !0), !!FA))
        if (window.matchMedia) {
          const e = window.matchMedia("(prefers-reduced-motion)"),
            t = () => (Ud.current = e.matches);
          (e.addEventListener("change", t), t());
        } else Ud.current = !1;
    }
    const $A = new WeakMap();
    function ou(e) {
      return e !== null && typeof e == "object" && typeof e.start == "function";
    }
    function Eo(e) {
      return typeof e == "string" || Array.isArray(e);
    }
    const Fh = [
        "animate",
        "whileInView",
        "whileFocus",
        "whileHover",
        "whileTap",
        "whileDrag",
        "exit",
      ],
      Vh = ["initial", ...Fh];
    function au(e) {
      return ou(e.animate) || Vh.some((t) => Eo(e[t]));
    }
    function P1(e) {
      return !!(au(e) || e.variants);
    }
    function zA(e, t, n) {
      for (const r in t) {
        const s = t[r],
          i = n[r];
        if (ze(s)) e.addValue(r, s);
        else if (ze(i)) e.addValue(r, ni(s, { owner: e }));
        else if (i !== s)
          if (e.hasValue(r)) {
            const o = e.getValue(r);
            o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
          } else {
            const o = e.getStaticValue(r);
            e.addValue(r, ni(o !== void 0 ? o : s, { owner: e }));
          }
      }
      for (const r in n) t[r] === void 0 && e.removeValue(r);
      return t;
    }
    const bg = [
      "AnimationStart",
      "AnimationComplete",
      "Update",
      "BeforeLayoutMeasure",
      "LayoutMeasure",
      "LayoutAnimationStart",
      "LayoutAnimationComplete",
    ];
    let El = {};
    function k1(e) {
      El = e;
    }
    function BA() {
      return El;
    }
    class UA {
      scrapeMotionValuesFromProps(t, n, r) {
        return {};
      }
      constructor(
        {
          parent: t,
          props: n,
          presenceContext: r,
          reducedMotionConfig: s,
          blockInitialAnimation: i,
          visualState: o,
        },
        a = {},
      ) {
        ((this.current = null),
          (this.children = new Set()),
          (this.isVariantNode = !1),
          (this.isControllingVariants = !1),
          (this.shouldReduceMotion = null),
          (this.values = new Map()),
          (this.KeyframeResolver = Nh),
          (this.features = {}),
          (this.valueSubscriptions = new Map()),
          (this.prevMotionValues = {}),
          (this.events = {}),
          (this.propEventSubscriptions = {}),
          (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
          (this.render = () => {
            this.current &&
              (this.triggerBuild(),
              this.renderInstance(
                this.current,
                this.renderState,
                this.props.style,
                this.projection,
              ));
          }),
          (this.renderScheduledAt = 0),
          (this.scheduleRender = () => {
            const f = Ge.now();
            this.renderScheduledAt < f &&
              ((this.renderScheduledAt = f), de.render(this.render, !1, !0));
          }));
        const { latestValues: l, renderState: u } = o;
        ((this.latestValues = l),
          (this.baseTarget = { ...l }),
          (this.initialValues = n.initial ? { ...l } : {}),
          (this.renderState = u),
          (this.parent = t),
          (this.props = n),
          (this.presenceContext = r),
          (this.depth = t ? t.depth + 1 : 0),
          (this.reducedMotionConfig = s),
          (this.options = a),
          (this.blockInitialAnimation = !!i),
          (this.isControllingVariants = au(n)),
          (this.isVariantNode = P1(n)),
          this.isVariantNode && (this.variantChildren = new Set()),
          (this.manuallyAnimateOnMount = !!(t && t.current)));
        const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(
          n,
          {},
          this,
        );
        for (const f in d) {
          const h = d[f];
          l[f] !== void 0 && ze(h) && h.set(l[f]);
        }
      }
      mount(t) {
        var n;
        ((this.current = t),
          $A.set(t, this),
          this.projection &&
            !this.projection.instance &&
            this.projection.mount(t),
          this.parent &&
            this.isVariantNode &&
            !this.isControllingVariants &&
            (this.removeFromVariantTree = this.parent.addVariantChild(this)),
          this.values.forEach((r, s) => this.bindToMotionValue(s, r)),
          this.reducedMotionConfig === "never"
            ? (this.shouldReduceMotion = !1)
            : this.reducedMotionConfig === "always"
              ? (this.shouldReduceMotion = !0)
              : (C1.current || VA(), (this.shouldReduceMotion = Ud.current)),
          (n = this.parent) == null || n.addChild(this),
          this.update(this.props, this.presenceContext));
      }
      unmount() {
        var t;
        (this.projection && this.projection.unmount(),
          fr(this.notifyUpdate),
          fr(this.render),
          this.valueSubscriptions.forEach((n) => n()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          (t = this.parent) == null || t.removeChild(this));
        for (const n in this.events) this.events[n].clear();
        for (const n in this.features) {
          const r = this.features[n];
          r && (r.unmount(), (r.isMounted = !1));
        }
        this.current = null;
      }
      addChild(t) {
        (this.children.add(t),
          this.enteringChildren ?? (this.enteringChildren = new Set()),
          this.enteringChildren.add(t));
      }
      removeChild(t) {
        (this.children.delete(t),
          this.enteringChildren && this.enteringChildren.delete(t));
      }
      bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = di.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const s = n.on("change", (o) => {
          ((this.latestValues[t] = o),
            this.props.onUpdate && de.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0),
            this.scheduleRender());
        });
        let i;
        (typeof window < "u" &&
          window.MotionCheckAppearSync &&
          (i = window.MotionCheckAppearSync(this, t, n)),
          this.valueSubscriptions.set(t, () => {
            (s(), i && i(), n.owner && n.stop());
          }));
      }
      sortNodePosition(t) {
        return !this.current ||
          !this.sortInstanceNodePosition ||
          this.type !== t.type
          ? 0
          : this.sortInstanceNodePosition(this.current, t.current);
      }
      updateFeatures() {
        let t = "animation";
        for (t in El) {
          const n = El[t];
          if (!n) continue;
          const { isEnabled: r, Feature: s } = n;
          if (
            (!this.features[t] &&
              s &&
              r(this.props) &&
              (this.features[t] = new s(this)),
            this.features[t])
          ) {
            const i = this.features[t];
            i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
          }
        }
      }
      triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
      }
      measureViewportBox() {
        return this.current
          ? this.measureInstanceViewportBox(this.current, this.props)
          : Ce();
      }
      getStaticValue(t) {
        return this.latestValues[t];
      }
      setStaticValue(t, n) {
        this.latestValues[t] = n;
      }
      update(t, n) {
        ((t.transformTemplate || this.props.transformTemplate) &&
          this.scheduleRender(),
          (this.prevProps = this.props),
          (this.props = t),
          (this.prevPresenceContext = this.presenceContext),
          (this.presenceContext = n));
        for (let r = 0; r < bg.length; r++) {
          const s = bg[r];
          this.propEventSubscriptions[s] &&
            (this.propEventSubscriptions[s](),
            delete this.propEventSubscriptions[s]);
          const i = "on" + s,
            o = t[i];
          o && (this.propEventSubscriptions[s] = this.on(s, o));
        }
        ((this.prevMotionValues = zA(
          this,
          this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
          this.prevMotionValues,
        )),
          this.handleChildMotionValue && this.handleChildMotionValue());
      }
      getProps() {
        return this.props;
      }
      getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0;
      }
      getDefaultTransition() {
        return this.props.transition;
      }
      getTransformPagePoint() {
        return this.props.transformPagePoint;
      }
      getClosestVariantNode() {
        return this.isVariantNode
          ? this
          : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
      }
      addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
          return (
            n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
          );
      }
      addValue(t, n) {
        const r = this.values.get(t);
        n !== r &&
          (r && this.removeValue(t),
          this.bindToMotionValue(t, n),
          this.values.set(t, n),
          (this.latestValues[t] = n.get()));
      }
      removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        (n && (n(), this.valueSubscriptions.delete(t)),
          delete this.latestValues[t],
          this.removeValueFromRenderState(t, this.renderState));
      }
      hasValue(t) {
        return this.values.has(t);
      }
      getValue(t, n) {
        if (this.props.values && this.props.values[t])
          return this.props.values[t];
        let r = this.values.get(t);
        return (
          r === void 0 &&
            n !== void 0 &&
            ((r = ni(n === null ? void 0 : n, { owner: this })),
            this.addValue(t, r)),
          r
        );
      }
      readValue(t, n) {
        let r =
          this.latestValues[t] !== void 0 || !this.current
            ? this.latestValues[t]
            : (this.getBaseTargetFromProps(this.props, t) ??
              this.readValueFromInstance(this.current, t, this.options));
        return (
          r != null &&
            (typeof r == "string" && (Nw(r) || Ow(r))
              ? (r = parseFloat(r))
              : !IA(r) && hr.test(n) && (r = v1(t, n)),
            this.setBaseTarget(t, ze(r) ? r.get() : r)),
          ze(r) ? r.get() : r
        );
      }
      setBaseTarget(t, n) {
        this.baseTarget[t] = n;
      }
      getBaseTarget(t) {
        var i;
        const { initial: n } = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
          const o = Mh(
            this.props,
            n,
            (i = this.presenceContext) == null ? void 0 : i.custom,
          );
          o && (r = o[t]);
        }
        if (n && r !== void 0) return r;
        const s = this.getBaseTargetFromProps(this.props, t);
        return s !== void 0 && !ze(s)
          ? s
          : this.initialValues[t] !== void 0 && r === void 0
            ? void 0
            : this.baseTarget[t];
      }
      on(t, n) {
        return (
          this.events[t] || (this.events[t] = new xh()),
          this.events[t].add(n)
        );
      }
      notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n);
      }
      scheduleRenderMicrotask() {
        Lh.render(this.render);
      }
    }
    class R1 extends UA {
      constructor() {
        (super(...arguments), (this.KeyframeResolver = RA));
      }
      sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1;
      }
      getBaseTargetFromProps(t, n) {
        const r = t.style;
        return r ? r[n] : void 0;
      }
      removeValueFromRenderState(t, { vars: n, style: r }) {
        (delete n[t], delete r[t]);
      }
      handleChildMotionValue() {
        this.childSubscription &&
          (this.childSubscription(), delete this.childSubscription);
        const { children: t } = this.props;
        ze(t) &&
          (this.childSubscription = t.on("change", (n) => {
            this.current && (this.current.textContent = `${n}`);
          }));
      }
    }
    class vr {
      constructor(t) {
        ((this.isMounted = !1), (this.node = t));
      }
      update() {}
    }
    function _1({ top: e, left: t, right: n, bottom: r }) {
      return { x: { min: t, max: n }, y: { min: e, max: r } };
    }
    function WA({ x: e, y: t }) {
      return { top: t.min, right: e.max, bottom: t.max, left: e.min };
    }
    function HA(e, t) {
      if (!t) return e;
      const n = t({ x: e.left, y: e.top }),
        r = t({ x: e.right, y: e.bottom });
      return { top: n.y, left: n.x, bottom: r.y, right: r.x };
    }
    function rc(e) {
      return e === void 0 || e === 1;
    }
    function Wd({ scale: e, scaleX: t, scaleY: n }) {
      return !rc(e) || !rc(t) || !rc(n);
    }
    function Nr(e) {
      return (
        Wd(e) ||
        N1(e) ||
        e.z ||
        e.rotate ||
        e.rotateX ||
        e.rotateY ||
        e.skewX ||
        e.skewY
      );
    }
    function N1(e) {
      return Sg(e.x) || Sg(e.y);
    }
    function Sg(e) {
      return e && e !== "0%";
    }
    function Cl(e, t, n) {
      const r = e - n,
        s = t * r;
      return n + s;
    }
    function Tg(e, t, n, r, s) {
      return (s !== void 0 && (e = Cl(e, s, r)), Cl(e, n, r) + t);
    }
    function Hd(e, t = 0, n = 1, r, s) {
      ((e.min = Tg(e.min, t, n, r, s)), (e.max = Tg(e.max, t, n, r, s)));
    }
    function A1(e, { x: t, y: n }) {
      (Hd(e.x, t.translate, t.scale, t.originPoint),
        Hd(e.y, n.translate, n.scale, n.originPoint));
    }
    const Eg = 0.999999999999,
      Cg = 1.0000000000001;
    function KA(e, t, n, r = !1) {
      const s = n.length;
      if (!s) return;
      t.x = t.y = 1;
      let i, o;
      for (let a = 0; a < s; a++) {
        ((i = n[a]), (o = i.projectionDelta));
        const { visualElement: l } = i.options;
        (l && l.props.style && l.props.style.display === "contents") ||
          (r &&
            i.options.layoutScroll &&
            i.scroll &&
            i !== i.root &&
            Ps(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
          o && ((t.x *= o.x.scale), (t.y *= o.y.scale), A1(e, o)),
          r && Nr(i.latestValues) && Ps(e, i.latestValues));
      }
      (t.x < Cg && t.x > Eg && (t.x = 1), t.y < Cg && t.y > Eg && (t.y = 1));
    }
    function Cs(e, t) {
      ((e.min = e.min + t), (e.max = e.max + t));
    }
    function Pg(e, t, n, r, s = 0.5) {
      const i = ye(e.min, e.max, s);
      Hd(e, t, n, i, r);
    }
    function Ps(e, t) {
      (Pg(e.x, t.x, t.scaleX, t.scale, t.originX),
        Pg(e.y, t.y, t.scaleY, t.scale, t.originY));
    }
    function O1(e, t) {
      return _1(HA(e.getBoundingClientRect(), t));
    }
    function GA(e, t, n) {
      const r = O1(e, n),
        { scroll: s } = t;
      return (s && (Cs(r.x, s.offset.x), Cs(r.y, s.offset.y)), r);
    }
    const YA = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
      },
      QA = ci.length;
    function qA(e, t, n) {
      let r = "",
        s = !0;
      for (let i = 0; i < QA; i++) {
        const o = ci[i],
          a = e[o];
        if (a === void 0) continue;
        let l = !0;
        if (typeof a == "number") l = a === (o.startsWith("scale") ? 1 : 0);
        else {
          const u = parseFloat(a);
          l = o.startsWith("scale") ? u === 1 : u === 0;
        }
        if (!l || n) {
          const u = x1(a, Dh[o]);
          if (!l) {
            s = !1;
            const c = YA[o] || o;
            r += `${c}(${u}) `;
          }
          n && (t[o] = u);
        }
      }
      return (
        (r = r.trim()),
        n ? (r = n(t, s ? "" : r)) : s && (r = "none"),
        r
      );
    }
    function $h(e, t, n) {
      const { style: r, vars: s, transformOrigin: i } = e;
      let o = !1,
        a = !1;
      for (const l in t) {
        const u = t[l];
        if (di.has(l)) {
          o = !0;
          continue;
        } else if (Kw(l)) {
          s[l] = u;
          continue;
        } else {
          const c = x1(u, Dh[l]);
          l.startsWith("origin") ? ((a = !0), (i[l] = c)) : (r[l] = c);
        }
      }
      if (
        (t.transform ||
          (o || n
            ? (r.transform = qA(t, e.transform, n))
            : r.transform && (r.transform = "none")),
        a)
      ) {
        const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
        r.transformOrigin = `${l} ${u} ${c}`;
      }
    }
    function M1(e, { style: t, vars: n }, r, s) {
      const i = e.style;
      let o;
      for (o in t) i[o] = t[o];
      s == null || s.applyProjectionStyles(i, r);
      for (o in n) i.setProperty(o, n[o]);
    }
    function kg(e, t) {
      return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
    }
    const Ei = {
        correct: (e, t) => {
          if (!t.target) return e;
          if (typeof e == "string")
            if (H.test(e)) e = parseFloat(e);
            else return e;
          const n = kg(e, t.target.x),
            r = kg(e, t.target.y);
          return `${n}% ${r}%`;
        },
      },
      XA = {
        correct: (e, { treeScale: t, projectionDelta: n }) => {
          const r = e,
            s = hr.parse(e);
          if (s.length > 5) return r;
          const i = hr.createTransformer(e),
            o = typeof s[0] != "number" ? 1 : 0,
            a = n.x.scale * t.x,
            l = n.y.scale * t.y;
          ((s[0 + o] /= a), (s[1 + o] /= l));
          const u = ye(a, l, 0.5);
          return (
            typeof s[2 + o] == "number" && (s[2 + o] /= u),
            typeof s[3 + o] == "number" && (s[3 + o] /= u),
            i(s)
          );
        },
      },
      Kd = {
        borderRadius: {
          ...Ei,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: Ei,
        borderTopRightRadius: Ei,
        borderBottomLeftRadius: Ei,
        borderBottomRightRadius: Ei,
        boxShadow: XA,
      };
    function j1(e, { layout: t, layoutId: n }) {
      return (
        di.has(e) ||
        e.startsWith("origin") ||
        ((t || n !== void 0) && (!!Kd[e] || e === "opacity"))
      );
    }
    function zh(e, t, n) {
      var o;
      const r = e.style,
        s = t == null ? void 0 : t.style,
        i = {};
      if (!r) return i;
      for (const a in r)
        (ze(r[a]) ||
          (s && ze(s[a])) ||
          j1(a, e) ||
          ((o = n == null ? void 0 : n.getValue(a)) == null
            ? void 0
            : o.liveStyle) !== void 0) &&
          (i[a] = r[a]);
      return i;
    }
    function ZA(e) {
      return window.getComputedStyle(e);
    }
    class JA extends R1 {
      constructor() {
        (super(...arguments), (this.type = "html"), (this.renderInstance = M1));
      }
      readValueFromInstance(t, n) {
        var r;
        if (di.has(n))
          return (r = this.projection) != null && r.isProjecting
            ? Od(n)
            : RN(t, n);
        {
          const s = ZA(t),
            i = (Kw(n) ? s.getPropertyValue(n) : s[n]) || 0;
          return typeof i == "string" ? i.trim() : i;
        }
      }
      measureInstanceViewportBox(t, { transformPagePoint: n }) {
        return O1(t, n);
      }
      build(t, n, r) {
        $h(t, n, r.transformTemplate);
      }
      scrapeMotionValuesFromProps(t, n, r) {
        return zh(t, n, r);
      }
    }
    const eO = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
      tO = { offset: "strokeDashoffset", array: "strokeDasharray" };
    function nO(e, t, n = 1, r = 0, s = !0) {
      e.pathLength = 1;
      const i = s ? eO : tO;
      ((e[i.offset] = `${-r}`), (e[i.array] = `${t} ${n}`));
    }
    const rO = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
    function D1(
      e,
      {
        attrX: t,
        attrY: n,
        attrScale: r,
        pathLength: s,
        pathSpacing: i = 1,
        pathOffset: o = 0,
        ...a
      },
      l,
      u,
      c,
    ) {
      if (($h(e, a, u), l)) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return;
      }
      ((e.attrs = e.style), (e.style = {}));
      const { attrs: d, style: f } = e;
      (d.transform && ((f.transform = d.transform), delete d.transform),
        (f.transform || d.transformOrigin) &&
          ((f.transformOrigin = d.transformOrigin ?? "50% 50%"),
          delete d.transformOrigin),
        f.transform &&
          ((f.transformBox =
            (c == null ? void 0 : c.transformBox) ?? "fill-box"),
          delete d.transformBox));
      for (const h of rO) d[h] !== void 0 && ((f[h] = d[h]), delete d[h]);
      (t !== void 0 && (d.x = t),
        n !== void 0 && (d.y = n),
        r !== void 0 && (d.scale = r),
        s !== void 0 && nO(d, s, i, o, !1));
    }
    const L1 = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]),
      I1 = (e) => typeof e == "string" && e.toLowerCase() === "svg";
    function sO(e, t, n, r) {
      M1(e, t, void 0, r);
      for (const s in t.attrs)
        e.setAttribute(L1.has(s) ? s : jh(s), t.attrs[s]);
    }
    function F1(e, t, n) {
      const r = zh(e, t, n);
      for (const s in e)
        if (ze(e[s]) || ze(t[s])) {
          const i =
            ci.indexOf(s) !== -1
              ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
              : s;
          r[i] = e[s];
        }
      return r;
    }
    class iO extends R1 {
      constructor() {
        (super(...arguments),
          (this.type = "svg"),
          (this.isSVGTag = !1),
          (this.measureInstanceViewportBox = Ce));
      }
      getBaseTargetFromProps(t, n) {
        return t[n];
      }
      readValueFromInstance(t, n) {
        if (di.has(n)) {
          const r = y1(n);
          return (r && r.default) || 0;
        }
        return ((n = L1.has(n) ? n : jh(n)), t.getAttribute(n));
      }
      scrapeMotionValuesFromProps(t, n, r) {
        return F1(t, n, r);
      }
      build(t, n, r) {
        D1(t, n, this.isSVGTag, r.transformTemplate, r.style);
      }
      renderInstance(t, n, r, s) {
        sO(t, n, r, s);
      }
      mount(t) {
        ((this.isSVGTag = I1(t.tagName)), super.mount(t));
      }
    }
    const oO = Vh.length;
    function V1(e) {
      if (!e) return;
      if (!e.isControllingVariants) {
        const n = e.parent ? V1(e.parent) || {} : {};
        return (e.props.initial !== void 0 && (n.initial = e.props.initial), n);
      }
      const t = {};
      for (let n = 0; n < oO; n++) {
        const r = Vh[n],
          s = e.props[r];
        (Eo(s) || s === !1) && (t[r] = s);
      }
      return t;
    }
    function $1(e, t) {
      if (!Array.isArray(t)) return !1;
      const n = t.length;
      if (n !== e.length) return !1;
      for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
      return !0;
    }
    const aO = [...Fh].reverse(),
      lO = Fh.length;
    function uO(e) {
      return (t) =>
        Promise.all(t.map(({ animation: n, options: r }) => vA(e, n, r)));
    }
    function cO(e) {
      let t = uO(e),
        n = Rg(),
        r = !0;
      const s = (l) => (u, c) => {
        var f;
        const d = Is(
          e,
          c,
          l === "exit"
            ? (f = e.presenceContext) == null
              ? void 0
              : f.custom
            : void 0,
        );
        if (d) {
          const { transition: h, transitionEnd: b, ...g } = d;
          u = { ...u, ...g, ...b };
        }
        return u;
      };
      function i(l) {
        t = l(e);
      }
      function o(l) {
        const { props: u } = e,
          c = V1(e.parent) || {},
          d = [],
          f = new Set();
        let h = {},
          b = 1 / 0;
        for (let w = 0; w < lO; w++) {
          const m = aO[w],
            p = n[m],
            y = u[m] !== void 0 ? u[m] : c[m],
            S = Eo(y),
            T = m === l ? p.isActive : null;
          T === !1 && (b = w);
          let E = y === c[m] && y !== u[m] && S;
          if (
            (E && r && e.manuallyAnimateOnMount && (E = !1),
            (p.protectedKeys = { ...h }),
            (!p.isActive && T === null) ||
              (!y && !p.prevProp) ||
              ou(y) ||
              typeof y == "boolean")
          )
            continue;
          const C = dO(p.prevProp, y);
          let P = C || (m === l && p.isActive && !E && S) || (w > b && S),
            R = !1;
          const k = Array.isArray(y) ? y : [y];
          let $ = k.reduce(s(m), {});
          T === !1 && ($ = {});
          const { prevResolvedValues: L = {} } = p,
            Y = { ...L, ...$ },
            j = (B) => {
              ((P = !0),
                f.has(B) && ((R = !0), f.delete(B)),
                (p.needsAnimating[B] = !0));
              const _ = e.getValue(B);
              _ && (_.liveStyle = !1);
            };
          for (const B in Y) {
            const _ = $[B],
              N = L[B];
            if (h.hasOwnProperty(B)) continue;
            let I = !1;
            (Fd(_) && Fd(N) ? (I = !$1(_, N)) : (I = _ !== N),
              I
                ? _ != null
                  ? j(B)
                  : f.add(B)
                : _ !== void 0 && f.has(B)
                  ? j(B)
                  : (p.protectedKeys[B] = !0));
          }
          ((p.prevProp = y),
            (p.prevResolvedValues = $),
            p.isActive && (h = { ...h, ...$ }),
            r && e.blockInitialAnimation && (P = !1));
          const D = E && C;
          P &&
            (!D || R) &&
            d.push(
              ...k.map((B) => {
                const _ = { type: m };
                if (
                  typeof B == "string" &&
                  r &&
                  !D &&
                  e.manuallyAnimateOnMount &&
                  e.parent
                ) {
                  const { parent: N } = e,
                    I = Is(N, B);
                  if (N.enteringChildren && I) {
                    const { delayChildren: V } = I.transition || {};
                    _.delay = u1(N.enteringChildren, e, V);
                  }
                }
                return { animation: B, options: _ };
              }),
            );
        }
        if (f.size) {
          const w = {};
          if (typeof u.initial != "boolean") {
            const m = Is(
              e,
              Array.isArray(u.initial) ? u.initial[0] : u.initial,
            );
            m && m.transition && (w.transition = m.transition);
          }
          (f.forEach((m) => {
            const p = e.getBaseTarget(m),
              y = e.getValue(m);
            (y && (y.liveStyle = !0), (w[m] = p ?? null));
          }),
            d.push({ animation: w }));
        }
        let g = !!d.length;
        return (
          r &&
            (u.initial === !1 || u.initial === u.animate) &&
            !e.manuallyAnimateOnMount &&
            (g = !1),
          (r = !1),
          g ? t(d) : Promise.resolve()
        );
      }
      function a(l, u) {
        var d;
        if (n[l].isActive === u) return Promise.resolve();
        ((d = e.variantChildren) == null ||
          d.forEach((f) => {
            var h;
            return (h = f.animationState) == null ? void 0 : h.setActive(l, u);
          }),
          (n[l].isActive = u));
        const c = o(l);
        for (const f in n) n[f].protectedKeys = {};
        return c;
      }
      return {
        animateChanges: o,
        setActive: a,
        setAnimateFunction: i,
        getState: () => n,
        reset: () => {
          n = Rg();
        },
      };
    }
    function dO(e, t) {
      return typeof t == "string" ? t !== e : Array.isArray(t) ? !$1(t, e) : !1;
    }
    function Tr(e = !1) {
      return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
      };
    }
    function Rg() {
      return {
        animate: Tr(!0),
        whileInView: Tr(),
        whileHover: Tr(),
        whileTap: Tr(),
        whileDrag: Tr(),
        whileFocus: Tr(),
        exit: Tr(),
      };
    }
    function _g(e, t) {
      ((e.min = t.min), (e.max = t.max));
    }
    function jt(e, t) {
      (_g(e.x, t.x), _g(e.y, t.y));
    }
    function Ng(e, t) {
      ((e.translate = t.translate),
        (e.scale = t.scale),
        (e.originPoint = t.originPoint),
        (e.origin = t.origin));
    }
    const z1 = 1e-4,
      fO = 1 - z1,
      hO = 1 + z1,
      B1 = 0.01,
      pO = 0 - B1,
      mO = 0 + B1;
    function Ye(e) {
      return e.max - e.min;
    }
    function gO(e, t, n) {
      return Math.abs(e - t) <= n;
    }
    function Ag(e, t, n, r = 0.5) {
      ((e.origin = r),
        (e.originPoint = ye(t.min, t.max, e.origin)),
        (e.scale = Ye(n) / Ye(t)),
        (e.translate = ye(n.min, n.max, e.origin) - e.originPoint),
        ((e.scale >= fO && e.scale <= hO) || isNaN(e.scale)) && (e.scale = 1),
        ((e.translate >= pO && e.translate <= mO) || isNaN(e.translate)) &&
          (e.translate = 0));
    }
    function Gi(e, t, n, r) {
      (Ag(e.x, t.x, n.x, r ? r.originX : void 0),
        Ag(e.y, t.y, n.y, r ? r.originY : void 0));
    }
    function Og(e, t, n) {
      ((e.min = n.min + t.min), (e.max = e.min + Ye(t)));
    }
    function yO(e, t, n) {
      (Og(e.x, t.x, n.x), Og(e.y, t.y, n.y));
    }
    function Mg(e, t, n) {
      ((e.min = t.min - n.min), (e.max = e.min + Ye(t)));
    }
    function Pl(e, t, n) {
      (Mg(e.x, t.x, n.x), Mg(e.y, t.y, n.y));
    }
    function jg(e, t, n, r, s) {
      return (
        (e -= t),
        (e = Cl(e, 1 / n, r)),
        s !== void 0 && (e = Cl(e, 1 / s, r)),
        e
      );
    }
    function vO(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
      if (
        (an.test(t) &&
          ((t = parseFloat(t)), (t = ye(o.min, o.max, t / 100) - o.min)),
        typeof t != "number")
      )
        return;
      let a = ye(i.min, i.max, r);
      (e === i && (a -= t),
        (e.min = jg(e.min, t, n, a, s)),
        (e.max = jg(e.max, t, n, a, s)));
    }
    function Dg(e, t, [n, r, s], i, o) {
      vO(e, t[n], t[r], t[s], t.scale, i, o);
    }
    const xO = ["x", "scaleX", "originX"],
      wO = ["y", "scaleY", "originY"];
    function Lg(e, t, n, r) {
      (Dg(e.x, t, xO, n ? n.x : void 0, r ? r.x : void 0),
        Dg(e.y, t, wO, n ? n.y : void 0, r ? r.y : void 0));
    }
    function Ig(e) {
      return e.translate === 0 && e.scale === 1;
    }
    function U1(e) {
      return Ig(e.x) && Ig(e.y);
    }
    function Fg(e, t) {
      return e.min === t.min && e.max === t.max;
    }
    function bO(e, t) {
      return Fg(e.x, t.x) && Fg(e.y, t.y);
    }
    function Vg(e, t) {
      return (
        Math.round(e.min) === Math.round(t.min) &&
        Math.round(e.max) === Math.round(t.max)
      );
    }
    function W1(e, t) {
      return Vg(e.x, t.x) && Vg(e.y, t.y);
    }
    function $g(e) {
      return Ye(e.x) / Ye(e.y);
    }
    function zg(e, t) {
      return (
        e.translate === t.translate &&
        e.scale === t.scale &&
        e.originPoint === t.originPoint
      );
    }
    function xt(e) {
      return [e("x"), e("y")];
    }
    function SO(e, t, n) {
      let r = "";
      const s = e.x.translate / t.x,
        i = e.y.translate / t.y,
        o = (n == null ? void 0 : n.z) || 0;
      if (
        ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
        (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
        n)
      ) {
        const {
          transformPerspective: u,
          rotate: c,
          rotateX: d,
          rotateY: f,
          skewX: h,
          skewY: b,
        } = n;
        (u && (r = `perspective(${u}px) ${r}`),
          c && (r += `rotate(${c}deg) `),
          d && (r += `rotateX(${d}deg) `),
          f && (r += `rotateY(${f}deg) `),
          h && (r += `skewX(${h}deg) `),
          b && (r += `skewY(${b}deg) `));
      }
      const a = e.x.scale * t.x,
        l = e.y.scale * t.y;
      return ((a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none");
    }
    const H1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
      TO = H1.length,
      Bg = (e) => (typeof e == "string" ? parseFloat(e) : e),
      Ug = (e) => typeof e == "number" || H.test(e);
    function EO(e, t, n, r, s, i) {
      s
        ? ((e.opacity = ye(0, n.opacity ?? 1, CO(r))),
          (e.opacityExit = ye(t.opacity ?? 1, 0, PO(r))))
        : i && (e.opacity = ye(t.opacity ?? 1, n.opacity ?? 1, r));
      for (let o = 0; o < TO; o++) {
        const a = `border${H1[o]}Radius`;
        let l = Wg(t, a),
          u = Wg(n, a);
        if (l === void 0 && u === void 0) continue;
        (l || (l = 0),
          u || (u = 0),
          l === 0 || u === 0 || Ug(l) === Ug(u)
            ? ((e[a] = Math.max(ye(Bg(l), Bg(u), r), 0)),
              (an.test(u) || an.test(l)) && (e[a] += "%"))
            : (e[a] = u));
      }
      (t.rotate || n.rotate) &&
        (e.rotate = ye(t.rotate || 0, n.rotate || 0, r));
    }
    function Wg(e, t) {
      return e[t] !== void 0 ? e[t] : e.borderRadius;
    }
    const CO = K1(0, 0.5, $w),
      PO = K1(0.5, 0.95, Pt);
    function K1(e, t, n) {
      return (r) => (r < e ? 0 : r > t ? 1 : n(bo(e, t, r)));
    }
    function kO(e, t, n) {
      const r = ze(e) ? e : ni(e);
      return (r.start(Oh("", r, t, n)), r.animation);
    }
    function Co(e, t, n, r = { passive: !0 }) {
      return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
    }
    const RO = (e, t) => e.depth - t.depth;
    class _O {
      constructor() {
        ((this.children = []), (this.isDirty = !1));
      }
      add(t) {
        (gh(this.children, t), (this.isDirty = !0));
      }
      remove(t) {
        (yh(this.children, t), (this.isDirty = !0));
      }
      forEach(t) {
        (this.isDirty && this.children.sort(RO),
          (this.isDirty = !1),
          this.children.forEach(t));
      }
    }
    function NO(e, t) {
      const n = Ge.now(),
        r = ({ timestamp: s }) => {
          const i = s - n;
          i >= t && (fr(r), e(i - t));
        };
      return (de.setup(r, !0), () => fr(r));
    }
    function Ba(e) {
      return ze(e) ? e.get() : e;
    }
    class AO {
      constructor() {
        this.members = [];
      }
      add(t) {
        (gh(this.members, t), t.scheduleRender());
      }
      remove(t) {
        if (
          (yh(this.members, t),
          t === this.prevLead && (this.prevLead = void 0),
          t === this.lead)
        ) {
          const n = this.members[this.members.length - 1];
          n && this.promote(n);
        }
      }
      relegate(t) {
        const n = this.members.findIndex((s) => t === s);
        if (n === 0) return !1;
        let r;
        for (let s = n; s >= 0; s--) {
          const i = this.members[s];
          if (i.isPresent !== !1) {
            r = i;
            break;
          }
        }
        return r ? (this.promote(r), !0) : !1;
      }
      promote(t, n) {
        const r = this.lead;
        if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
          (r.instance && r.scheduleRender(), t.scheduleRender());
          const s = r.options.layoutDependency,
            i = t.options.layoutDependency;
          (s !== void 0 && i !== void 0 && s === i) ||
            ((t.resumeFrom = r),
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot &&
              ((t.snapshot = r.snapshot),
              (t.snapshot.latestValues = r.animationValues || r.latestValues)),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
          const { crossfade: a } = t.options;
          a === !1 && r.hide();
        }
      }
      exitAnimationComplete() {
        this.members.forEach((t) => {
          const { options: n, resumingFrom: r } = t;
          (n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete());
        });
      }
      scheduleRender() {
        this.members.forEach((t) => {
          t.instance && t.scheduleRender(!1);
        });
      }
      removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
      }
    }
    const Ua = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
      sc = ["", "X", "Y", "Z"],
      OO = 1e3;
    let MO = 0;
    function ic(e, t, n, r) {
      const { latestValues: s } = t;
      s[e] && ((n[e] = s[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
    }
    function G1(e) {
      if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
      const { visualElement: t } = e.options;
      if (!t) return;
      const n = h1(t);
      if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const { layout: s, layoutId: i } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", de, !(s || i));
      }
      const { parent: r } = e;
      r && !r.hasCheckedOptimisedAppear && G1(r);
    }
    function Y1({
      attachResizeListener: e,
      defaultParent: t,
      measureScroll: n,
      checkIsScrollRoot: r,
      resetTransform: s,
    }) {
      return class {
        constructor(o = {}, a = t == null ? void 0 : t()) {
          ((this.id = MO++),
            (this.animationId = 0),
            (this.animationCommitId = 0),
            (this.children = new Set()),
            (this.options = {}),
            (this.isTreeAnimating = !1),
            (this.isAnimationBlocked = !1),
            (this.isLayoutDirty = !1),
            (this.isProjectionDirty = !1),
            (this.isSharedProjectionDirty = !1),
            (this.isTransformDirty = !1),
            (this.updateManuallyBlocked = !1),
            (this.updateBlockedByResize = !1),
            (this.isUpdating = !1),
            (this.isSVG = !1),
            (this.needsReset = !1),
            (this.shouldResetTransform = !1),
            (this.hasCheckedOptimisedAppear = !1),
            (this.treeScale = { x: 1, y: 1 }),
            (this.eventHandlers = new Map()),
            (this.hasTreeAnimated = !1),
            (this.layoutVersion = 0),
            (this.updateScheduled = !1),
            (this.scheduleUpdate = () => this.update()),
            (this.projectionUpdateScheduled = !1),
            (this.checkUpdateFailed = () => {
              this.isUpdating &&
                ((this.isUpdating = !1), this.clearAllSnapshots());
            }),
            (this.updateProjection = () => {
              ((this.projectionUpdateScheduled = !1),
                this.nodes.forEach(LO),
                this.nodes.forEach($O),
                this.nodes.forEach(zO),
                this.nodes.forEach(IO));
            }),
            (this.resolvedRelativeTargetAt = 0),
            (this.linkedParentVersion = 0),
            (this.hasProjected = !1),
            (this.isVisible = !0),
            (this.animationProgress = 0),
            (this.sharedNodes = new Map()),
            (this.latestValues = o),
            (this.root = a ? a.root || a : this),
            (this.path = a ? [...a.path, a] : []),
            (this.parent = a),
            (this.depth = a ? a.depth + 1 : 0));
          for (let l = 0; l < this.path.length; l++)
            this.path[l].shouldResetTransform = !0;
          this.root === this && (this.nodes = new _O());
        }
        addEventListener(o, a) {
          return (
            this.eventHandlers.has(o) || this.eventHandlers.set(o, new xh()),
            this.eventHandlers.get(o).add(a)
          );
        }
        notifyListeners(o, ...a) {
          const l = this.eventHandlers.get(o);
          l && l.notify(...a);
        }
        hasListeners(o) {
          return this.eventHandlers.has(o);
        }
        mount(o) {
          if (this.instance) return;
          ((this.isSVG = E1(o) && !DA(o)), (this.instance = o));
          const { layoutId: a, layout: l, visualElement: u } = this.options;
          if (
            (u && !u.current && u.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
            e)
          ) {
            let c,
              d = 0;
            const f = () => (this.root.updateBlockedByResize = !1);
            (de.read(() => {
              d = window.innerWidth;
            }),
              e(o, () => {
                const h = window.innerWidth;
                h !== d &&
                  ((d = h),
                  (this.root.updateBlockedByResize = !0),
                  c && c(),
                  (c = NO(f, 250)),
                  Ua.hasAnimatedSinceResize &&
                    ((Ua.hasAnimatedSinceResize = !1), this.nodes.forEach(Gg)));
              }));
          }
          (a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 &&
              u &&
              (a || l) &&
              this.addEventListener(
                "didUpdate",
                ({
                  delta: c,
                  hasLayoutChanged: d,
                  hasRelativeLayoutChanged: f,
                  layout: h,
                }) => {
                  if (this.isTreeAnimationBlocked()) {
                    ((this.target = void 0), (this.relativeTarget = void 0));
                    return;
                  }
                  const b =
                      this.options.transition || u.getDefaultTransition() || KO,
                    {
                      onLayoutAnimationStart: g,
                      onLayoutAnimationComplete: w,
                    } = u.getProps(),
                    m = !this.targetLayout || !W1(this.targetLayout, h),
                    p = !d && f;
                  if (
                    this.options.layoutRoot ||
                    this.resumeFrom ||
                    p ||
                    (d && (m || !this.currentAnimation))
                  ) {
                    this.resumeFrom &&
                      ((this.resumingFrom = this.resumeFrom),
                      (this.resumingFrom.resumingFrom = void 0));
                    const y = { ...Ah(b, "layout"), onPlay: g, onComplete: w };
                    ((u.shouldReduceMotion || this.options.layoutRoot) &&
                      ((y.delay = 0), (y.type = !1)),
                      this.startAnimation(y),
                      this.setAnimationOrigin(c, p));
                  } else
                    (d || Gg(this),
                      this.isLead() &&
                        this.options.onExitComplete &&
                        this.options.onExitComplete());
                  this.targetLayout = h;
                },
              ));
        }
        unmount() {
          (this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this));
          const o = this.getStack();
          (o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            (this.instance = void 0),
            this.eventHandlers.clear(),
            fr(this.updateProjection));
        }
        blockUpdate() {
          this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
          this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
          return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
          return (
            this.isAnimationBlocked ||
            (this.parent && this.parent.isTreeAnimationBlocked()) ||
            !1
          );
        }
        startUpdate() {
          this.isUpdateBlocked() ||
            ((this.isUpdating = !0),
            this.nodes && this.nodes.forEach(BO),
            this.animationId++);
        }
        getTransformTemplate() {
          const { visualElement: o } = this.options;
          return o && o.getProps().transformTemplate;
        }
        willUpdate(o = !0) {
          if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
            this.options.onExitComplete && this.options.onExitComplete();
            return;
          }
          if (
            (window.MotionCancelOptimisedAnimation &&
              !this.hasCheckedOptimisedAppear &&
              G1(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
          )
            return;
          this.isLayoutDirty = !0;
          for (let c = 0; c < this.path.length; c++) {
            const d = this.path[c];
            ((d.shouldResetTransform = !0),
              d.updateScroll("snapshot"),
              d.options.layoutRoot && d.willUpdate(!1));
          }
          const { layoutId: a, layout: l } = this.options;
          if (a === void 0 && !l) return;
          const u = this.getTransformTemplate();
          ((this.prevTransformTemplateValue = u
            ? u(this.latestValues, "")
            : void 0),
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate"));
        }
        update() {
          if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
            (this.unblockUpdate(),
              this.clearAllSnapshots(),
              this.nodes.forEach(Hg));
            return;
          }
          if (this.animationId <= this.animationCommitId) {
            this.nodes.forEach(Kg);
            return;
          }
          ((this.animationCommitId = this.animationId),
            this.isUpdating
              ? ((this.isUpdating = !1),
                this.nodes.forEach(VO),
                this.nodes.forEach(jO),
                this.nodes.forEach(DO))
              : this.nodes.forEach(Kg),
            this.clearAllSnapshots());
          const a = Ge.now();
          ((Oe.delta = un(0, 1e3 / 60, a - Oe.timestamp)),
            (Oe.timestamp = a),
            (Oe.isProcessing = !0),
            qu.update.process(Oe),
            qu.preRender.process(Oe),
            qu.render.process(Oe),
            (Oe.isProcessing = !1));
        }
        didUpdate() {
          this.updateScheduled ||
            ((this.updateScheduled = !0), Lh.read(this.scheduleUpdate));
        }
        clearAllSnapshots() {
          (this.nodes.forEach(FO), this.sharedNodes.forEach(UO));
        }
        scheduleUpdateProjection() {
          this.projectionUpdateScheduled ||
            ((this.projectionUpdateScheduled = !0),
            de.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
          de.postRender(() => {
            this.isLayoutDirty
              ? this.root.didUpdate()
              : this.root.checkUpdateFailed();
          });
        }
        updateSnapshot() {
          this.snapshot ||
            !this.instance ||
            ((this.snapshot = this.measure()),
            this.snapshot &&
              !Ye(this.snapshot.measuredBox.x) &&
              !Ye(this.snapshot.measuredBox.y) &&
              (this.snapshot = void 0));
        }
        updateLayout() {
          if (
            !this.instance ||
            (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) &&
              !this.isLayoutDirty)
          )
            return;
          if (this.resumeFrom && !this.resumeFrom.instance)
            for (let l = 0; l < this.path.length; l++)
              this.path[l].updateScroll();
          const o = this.layout;
          ((this.layout = this.measure(!1)),
            this.layoutVersion++,
            (this.layoutCorrected = Ce()),
            (this.isLayoutDirty = !1),
            (this.projectionDelta = void 0),
            this.notifyListeners("measure", this.layout.layoutBox));
          const { visualElement: a } = this.options;
          a &&
            a.notify(
              "LayoutMeasure",
              this.layout.layoutBox,
              o ? o.layoutBox : void 0,
            );
        }
        updateScroll(o = "measure") {
          let a = !!(this.options.layoutScroll && this.instance);
          if (
            (this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === o &&
              (a = !1),
            a && this.instance)
          ) {
            const l = r(this.instance);
            this.scroll = {
              animationId: this.root.animationId,
              phase: o,
              isRoot: l,
              offset: n(this.instance),
              wasRoot: this.scroll ? this.scroll.isRoot : l,
            };
          }
        }
        resetTransform() {
          if (!s) return;
          const o =
              this.isLayoutDirty ||
              this.shouldResetTransform ||
              this.options.alwaysMeasureLayout,
            a = this.projectionDelta && !U1(this.projectionDelta),
            l = this.getTransformTemplate(),
            u = l ? l(this.latestValues, "") : void 0,
            c = u !== this.prevTransformTemplateValue;
          o &&
            this.instance &&
            (a || Nr(this.latestValues) || c) &&
            (s(this.instance, u),
            (this.shouldResetTransform = !1),
            this.scheduleRender());
        }
        measure(o = !0) {
          const a = this.measurePageBox();
          let l = this.removeElementScroll(a);
          return (
            o && (l = this.removeTransform(l)),
            GO(l),
            {
              animationId: this.root.animationId,
              measuredBox: a,
              layoutBox: l,
              latestValues: {},
              source: this.id,
            }
          );
        }
        measurePageBox() {
          var u;
          const { visualElement: o } = this.options;
          if (!o) return Ce();
          const a = o.measureViewportBox();
          if (
            !(
              ((u = this.scroll) == null ? void 0 : u.wasRoot) ||
              this.path.some(YO)
            )
          ) {
            const { scroll: c } = this.root;
            c && (Cs(a.x, c.offset.x), Cs(a.y, c.offset.y));
          }
          return a;
        }
        removeElementScroll(o) {
          var l;
          const a = Ce();
          if ((jt(a, o), (l = this.scroll) != null && l.wasRoot)) return a;
          for (let u = 0; u < this.path.length; u++) {
            const c = this.path[u],
              { scroll: d, options: f } = c;
            c !== this.root &&
              d &&
              f.layoutScroll &&
              (d.wasRoot && jt(a, o), Cs(a.x, d.offset.x), Cs(a.y, d.offset.y));
          }
          return a;
        }
        applyTransform(o, a = !1) {
          const l = Ce();
          jt(l, o);
          for (let u = 0; u < this.path.length; u++) {
            const c = this.path[u];
            (!a &&
              c.options.layoutScroll &&
              c.scroll &&
              c !== c.root &&
              Ps(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
              Nr(c.latestValues) && Ps(l, c.latestValues));
          }
          return (Nr(this.latestValues) && Ps(l, this.latestValues), l);
        }
        removeTransform(o) {
          const a = Ce();
          jt(a, o);
          for (let l = 0; l < this.path.length; l++) {
            const u = this.path[l];
            if (!u.instance || !Nr(u.latestValues)) continue;
            Wd(u.latestValues) && u.updateSnapshot();
            const c = Ce(),
              d = u.measurePageBox();
            (jt(c, d),
              Lg(
                a,
                u.latestValues,
                u.snapshot ? u.snapshot.layoutBox : void 0,
                c,
              ));
          }
          return (Nr(this.latestValues) && Lg(a, this.latestValues), a);
        }
        setTargetDelta(o) {
          ((this.targetDelta = o),
            this.root.scheduleUpdateProjection(),
            (this.isProjectionDirty = !0));
        }
        setOptions(o) {
          this.options = {
            ...this.options,
            ...o,
            crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
          };
        }
        clearMeasurements() {
          ((this.scroll = void 0),
            (this.layout = void 0),
            (this.snapshot = void 0),
            (this.prevTransformTemplateValue = void 0),
            (this.targetDelta = void 0),
            (this.target = void 0),
            (this.isLayoutDirty = !1));
        }
        forceRelativeParentToResolveTarget() {
          this.relativeParent &&
            this.relativeParent.resolvedRelativeTargetAt !== Oe.timestamp &&
            this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(o = !1) {
          var h;
          const a = this.getLead();
          (this.isProjectionDirty ||
            (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty ||
              (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty ||
              (this.isSharedProjectionDirty = a.isSharedProjectionDirty));
          const l = !!this.resumingFrom || this !== a;
          if (
            !(
              o ||
              (l && this.isSharedProjectionDirty) ||
              this.isProjectionDirty ||
              ((h = this.parent) != null && h.isProjectionDirty) ||
              this.attemptToResolveRelativeTarget ||
              this.root.updateBlockedByResize
            )
          )
            return;
          const { layout: c, layoutId: d } = this.options;
          if (!this.layout || !(c || d)) return;
          this.resolvedRelativeTargetAt = Oe.timestamp;
          const f = this.getClosestProjectingParent();
          (f &&
            this.linkedParentVersion !== f.layoutVersion &&
            !f.options.layoutRoot &&
            this.removeRelativeTarget(),
            !this.targetDelta &&
              !this.relativeTarget &&
              (f && f.layout
                ? this.createRelativeTarget(
                    f,
                    this.layout.layoutBox,
                    f.layout.layoutBox,
                  )
                : this.removeRelativeTarget()),
            !(!this.relativeTarget && !this.targetDelta) &&
              (this.target ||
                ((this.target = Ce()), (this.targetWithTransforms = Ce())),
              this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.relativeParent &&
              this.relativeParent.target
                ? (this.forceRelativeParentToResolveTarget(),
                  yO(
                    this.target,
                    this.relativeTarget,
                    this.relativeParent.target,
                  ))
                : this.targetDelta
                  ? (this.resumingFrom
                      ? (this.target = this.applyTransform(
                          this.layout.layoutBox,
                        ))
                      : jt(this.target, this.layout.layoutBox),
                    A1(this.target, this.targetDelta))
                  : jt(this.target, this.layout.layoutBox),
              this.attemptToResolveRelativeTarget &&
                ((this.attemptToResolveRelativeTarget = !1),
                f &&
                !!f.resumingFrom == !!this.resumingFrom &&
                !f.options.layoutScroll &&
                f.target &&
                this.animationProgress !== 1
                  ? this.createRelativeTarget(f, this.target, f.target)
                  : (this.relativeParent = this.relativeTarget = void 0))));
        }
        getClosestProjectingParent() {
          if (
            !(
              !this.parent ||
              Wd(this.parent.latestValues) ||
              N1(this.parent.latestValues)
            )
          )
            return this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
        }
        isProjecting() {
          return !!(
            (this.relativeTarget ||
              this.targetDelta ||
              this.options.layoutRoot) &&
            this.layout
          );
        }
        createRelativeTarget(o, a, l) {
          ((this.relativeParent = o),
            (this.linkedParentVersion = o.layoutVersion),
            this.forceRelativeParentToResolveTarget(),
            (this.relativeTarget = Ce()),
            (this.relativeTargetOrigin = Ce()),
            Pl(this.relativeTargetOrigin, a, l),
            jt(this.relativeTarget, this.relativeTargetOrigin));
        }
        removeRelativeTarget() {
          this.relativeParent = this.relativeTarget = void 0;
        }
        calcProjection() {
          var b;
          const o = this.getLead(),
            a = !!this.resumingFrom || this !== o;
          let l = !0;
          if (
            ((this.isProjectionDirty ||
              ((b = this.parent) != null && b.isProjectionDirty)) &&
              (l = !1),
            a &&
              (this.isSharedProjectionDirty || this.isTransformDirty) &&
              (l = !1),
            this.resolvedRelativeTargetAt === Oe.timestamp && (l = !1),
            l)
          )
            return;
          const { layout: u, layoutId: c } = this.options;
          if (
            ((this.isTreeAnimating = !!(
              (this.parent && this.parent.isTreeAnimating) ||
              this.currentAnimation ||
              this.pendingAnimation
            )),
            this.isTreeAnimating ||
              (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(u || c))
          )
            return;
          jt(this.layoutCorrected, this.layout.layoutBox);
          const d = this.treeScale.x,
            f = this.treeScale.y;
          (KA(this.layoutCorrected, this.treeScale, this.path, a),
            o.layout &&
              !o.target &&
              (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
              ((o.target = o.layout.layoutBox),
              (o.targetWithTransforms = Ce())));
          const { target: h } = o;
          if (!h) {
            this.prevProjectionDelta &&
              (this.createProjectionDeltas(), this.scheduleRender());
            return;
          }
          (!this.projectionDelta || !this.prevProjectionDelta
            ? this.createProjectionDeltas()
            : (Ng(this.prevProjectionDelta.x, this.projectionDelta.x),
              Ng(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Gi(
              this.projectionDelta,
              this.layoutCorrected,
              h,
              this.latestValues,
            ),
            (this.treeScale.x !== d ||
              this.treeScale.y !== f ||
              !zg(this.projectionDelta.x, this.prevProjectionDelta.x) ||
              !zg(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
              ((this.hasProjected = !0),
              this.scheduleRender(),
              this.notifyListeners("projectionUpdate", h)));
        }
        hide() {
          this.isVisible = !1;
        }
        show() {
          this.isVisible = !0;
        }
        scheduleRender(o = !0) {
          var a;
          if (
            ((a = this.options.visualElement) == null || a.scheduleRender(), o)
          ) {
            const l = this.getStack();
            l && l.scheduleRender();
          }
          this.resumingFrom &&
            !this.resumingFrom.instance &&
            (this.resumingFrom = void 0);
        }
        createProjectionDeltas() {
          ((this.prevProjectionDelta = Es()),
            (this.projectionDelta = Es()),
            (this.projectionDeltaWithTransform = Es()));
        }
        setAnimationOrigin(o, a = !1) {
          const l = this.snapshot,
            u = l ? l.latestValues : {},
            c = { ...this.latestValues },
            d = Es();
          ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
            (this.relativeTarget = this.relativeTargetOrigin = void 0),
            (this.attemptToResolveRelativeTarget = !a));
          const f = Ce(),
            h = l ? l.source : void 0,
            b = this.layout ? this.layout.source : void 0,
            g = h !== b,
            w = this.getStack(),
            m = !w || w.members.length <= 1,
            p = !!(
              g &&
              !m &&
              this.options.crossfade === !0 &&
              !this.path.some(HO)
            );
          this.animationProgress = 0;
          let y;
          ((this.mixTargetDelta = (S) => {
            const T = S / 1e3;
            (Yg(d.x, o.x, T),
              Yg(d.y, o.y, T),
              this.setTargetDelta(d),
              this.relativeTarget &&
                this.relativeTargetOrigin &&
                this.layout &&
                this.relativeParent &&
                this.relativeParent.layout &&
                (Pl(
                  f,
                  this.layout.layoutBox,
                  this.relativeParent.layout.layoutBox,
                ),
                WO(this.relativeTarget, this.relativeTargetOrigin, f, T),
                y &&
                  bO(this.relativeTarget, y) &&
                  (this.isProjectionDirty = !1),
                y || (y = Ce()),
                jt(y, this.relativeTarget)),
              g &&
                ((this.animationValues = c),
                EO(c, u, this.latestValues, T, p, m)),
              this.root.scheduleUpdateProjection(),
              this.scheduleRender(),
              (this.animationProgress = T));
          }),
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
        }
        startAnimation(o) {
          var a, l, u;
          (this.notifyListeners("animationStart"),
            (a = this.currentAnimation) == null || a.stop(),
            (u =
              (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
              null || u.stop(),
            this.pendingAnimation &&
              (fr(this.pendingAnimation), (this.pendingAnimation = void 0)),
            (this.pendingAnimation = de.update(() => {
              ((Ua.hasAnimatedSinceResize = !0),
                this.motionValue || (this.motionValue = ni(0)),
                (this.currentAnimation = kO(this.motionValue, [0, 1e3], {
                  ...o,
                  velocity: 0,
                  isSync: !0,
                  onUpdate: (c) => {
                    (this.mixTargetDelta(c), o.onUpdate && o.onUpdate(c));
                  },
                  onStop: () => {},
                  onComplete: () => {
                    (o.onComplete && o.onComplete(), this.completeAnimation());
                  },
                })),
                this.resumingFrom &&
                  (this.resumingFrom.currentAnimation = this.currentAnimation),
                (this.pendingAnimation = void 0));
            })));
        }
        completeAnimation() {
          this.resumingFrom &&
            ((this.resumingFrom.currentAnimation = void 0),
            (this.resumingFrom.preserveOpacity = void 0));
          const o = this.getStack();
          (o && o.exitAnimationComplete(),
            (this.resumingFrom =
              this.currentAnimation =
              this.animationValues =
                void 0),
            this.notifyListeners("animationComplete"));
        }
        finishAnimation() {
          (this.currentAnimation &&
            (this.mixTargetDelta && this.mixTargetDelta(OO),
            this.currentAnimation.stop()),
            this.completeAnimation());
        }
        applyTransformsToTarget() {
          const o = this.getLead();
          let {
            targetWithTransforms: a,
            target: l,
            layout: u,
            latestValues: c,
          } = o;
          if (!(!a || !l || !u)) {
            if (
              this !== o &&
              this.layout &&
              u &&
              Q1(this.options.animationType, this.layout.layoutBox, u.layoutBox)
            ) {
              l = this.target || Ce();
              const d = Ye(this.layout.layoutBox.x);
              ((l.x.min = o.target.x.min), (l.x.max = l.x.min + d));
              const f = Ye(this.layout.layoutBox.y);
              ((l.y.min = o.target.y.min), (l.y.max = l.y.min + f));
            }
            (jt(a, l),
              Ps(a, c),
              Gi(
                this.projectionDeltaWithTransform,
                this.layoutCorrected,
                a,
                c,
              ));
          }
        }
        registerSharedNode(o, a) {
          (this.sharedNodes.has(o) || this.sharedNodes.set(o, new AO()),
            this.sharedNodes.get(o).add(a));
          const u = a.options.initialPromotionConfig;
          a.promote({
            transition: u ? u.transition : void 0,
            preserveFollowOpacity:
              u && u.shouldPreserveFollowOpacity
                ? u.shouldPreserveFollowOpacity(a)
                : void 0,
          });
        }
        isLead() {
          const o = this.getStack();
          return o ? o.lead === this : !0;
        }
        getLead() {
          var a;
          const { layoutId: o } = this.options;
          return o
            ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
            : this;
        }
        getPrevLead() {
          var a;
          const { layoutId: o } = this.options;
          return o
            ? (a = this.getStack()) == null
              ? void 0
              : a.prevLead
            : void 0;
        }
        getStack() {
          const { layoutId: o } = this.options;
          if (o) return this.root.sharedNodes.get(o);
        }
        promote({
          needsReset: o,
          transition: a,
          preserveFollowOpacity: l,
        } = {}) {
          const u = this.getStack();
          (u && u.promote(this, l),
            o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
            a && this.setOptions({ transition: a }));
        }
        relegate() {
          const o = this.getStack();
          return o ? o.relegate(this) : !1;
        }
        resetSkewAndRotation() {
          const { visualElement: o } = this.options;
          if (!o) return;
          let a = !1;
          const { latestValues: l } = o;
          if (
            ((l.z ||
              l.rotate ||
              l.rotateX ||
              l.rotateY ||
              l.rotateZ ||
              l.skewX ||
              l.skewY) &&
              (a = !0),
            !a)
          )
            return;
          const u = {};
          l.z && ic("z", o, u, this.animationValues);
          for (let c = 0; c < sc.length; c++)
            (ic(`rotate${sc[c]}`, o, u, this.animationValues),
              ic(`skew${sc[c]}`, o, u, this.animationValues));
          o.render();
          for (const c in u)
            (o.setStaticValue(c, u[c]),
              this.animationValues && (this.animationValues[c] = u[c]));
          o.scheduleRender();
        }
        applyProjectionStyles(o, a) {
          if (!this.instance || this.isSVG) return;
          if (!this.isVisible) {
            o.visibility = "hidden";
            return;
          }
          const l = this.getTransformTemplate();
          if (this.needsReset) {
            ((this.needsReset = !1),
              (o.visibility = ""),
              (o.opacity = ""),
              (o.pointerEvents =
                Ba(a == null ? void 0 : a.pointerEvents) || ""),
              (o.transform = l ? l(this.latestValues, "") : "none"));
            return;
          }
          const u = this.getLead();
          if (!this.projectionDelta || !this.layout || !u.target) {
            (this.options.layoutId &&
              ((o.opacity =
                this.latestValues.opacity !== void 0
                  ? this.latestValues.opacity
                  : 1),
              (o.pointerEvents =
                Ba(a == null ? void 0 : a.pointerEvents) || "")),
              this.hasProjected &&
                !Nr(this.latestValues) &&
                ((o.transform = l ? l({}, "") : "none"),
                (this.hasProjected = !1)));
            return;
          }
          o.visibility = "";
          const c = u.animationValues || u.latestValues;
          this.applyTransformsToTarget();
          let d = SO(this.projectionDeltaWithTransform, this.treeScale, c);
          (l && (d = l(c, d)), (o.transform = d));
          const { x: f, y: h } = this.projectionDelta;
          ((o.transformOrigin = `${f.origin * 100}% ${h.origin * 100}% 0`),
            u.animationValues
              ? (o.opacity =
                  u === this
                    ? (c.opacity ?? this.latestValues.opacity ?? 1)
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : c.opacityExit)
              : (o.opacity =
                  u === this
                    ? c.opacity !== void 0
                      ? c.opacity
                      : ""
                    : c.opacityExit !== void 0
                      ? c.opacityExit
                      : 0));
          for (const b in Kd) {
            if (c[b] === void 0) continue;
            const { correct: g, applyTo: w, isCSSVariable: m } = Kd[b],
              p = d === "none" ? c[b] : g(c[b], u);
            if (w) {
              const y = w.length;
              for (let S = 0; S < y; S++) o[w[S]] = p;
            } else
              m
                ? (this.options.visualElement.renderState.vars[b] = p)
                : (o[b] = p);
          }
          this.options.layoutId &&
            (o.pointerEvents =
              u === this
                ? Ba(a == null ? void 0 : a.pointerEvents) || ""
                : "none");
        }
        clearSnapshot() {
          this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
          (this.root.nodes.forEach((o) => {
            var a;
            return (a = o.currentAnimation) == null ? void 0 : a.stop();
          }),
            this.root.nodes.forEach(Hg),
            this.root.sharedNodes.clear());
        }
      };
    }
    function jO(e) {
      e.updateLayout();
    }
    function DO(e) {
      var n;
      const t =
        ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
      if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const { layoutBox: r, measuredBox: s } = e.layout,
          { animationType: i } = e.options,
          o = t.source !== e.layout.source;
        i === "size"
          ? xt((d) => {
              const f = o ? t.measuredBox[d] : t.layoutBox[d],
                h = Ye(f);
              ((f.min = r[d].min), (f.max = f.min + h));
            })
          : Q1(i, t.layoutBox, r) &&
            xt((d) => {
              const f = o ? t.measuredBox[d] : t.layoutBox[d],
                h = Ye(r[d]);
              ((f.max = f.min + h),
                e.relativeTarget &&
                  !e.currentAnimation &&
                  ((e.isProjectionDirty = !0),
                  (e.relativeTarget[d].max = e.relativeTarget[d].min + h)));
            });
        const a = Es();
        Gi(a, r, t.layoutBox);
        const l = Es();
        o
          ? Gi(l, e.applyTransform(s, !0), t.measuredBox)
          : Gi(l, r, t.layoutBox);
        const u = !U1(a);
        let c = !1;
        if (!e.resumeFrom) {
          const d = e.getClosestProjectingParent();
          if (d && !d.resumeFrom) {
            const { snapshot: f, layout: h } = d;
            if (f && h) {
              const b = Ce();
              Pl(b, t.layoutBox, f.layoutBox);
              const g = Ce();
              (Pl(g, r, h.layoutBox),
                W1(b, g) || (c = !0),
                d.options.layoutRoot &&
                  ((e.relativeTarget = g),
                  (e.relativeTargetOrigin = b),
                  (e.relativeParent = d)));
            }
          }
        }
        e.notifyListeners("didUpdate", {
          layout: r,
          snapshot: t,
          delta: l,
          layoutDelta: a,
          hasLayoutChanged: u,
          hasRelativeLayoutChanged: c,
        });
      } else if (e.isLead()) {
        const { onExitComplete: r } = e.options;
        r && r();
      }
      e.options.transition = void 0;
    }
    function LO(e) {
      e.parent &&
        (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
        e.isSharedProjectionDirty ||
          (e.isSharedProjectionDirty = !!(
            e.isProjectionDirty ||
            e.parent.isProjectionDirty ||
            e.parent.isSharedProjectionDirty
          )),
        e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
    }
    function IO(e) {
      e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
    }
    function FO(e) {
      e.clearSnapshot();
    }
    function Hg(e) {
      e.clearMeasurements();
    }
    function Kg(e) {
      e.isLayoutDirty = !1;
    }
    function VO(e) {
      const { visualElement: t } = e.options;
      (t &&
        t.getProps().onBeforeLayoutMeasure &&
        t.notify("BeforeLayoutMeasure"),
        e.resetTransform());
    }
    function Gg(e) {
      (e.finishAnimation(),
        (e.targetDelta = e.relativeTarget = e.target = void 0),
        (e.isProjectionDirty = !0));
    }
    function $O(e) {
      e.resolveTargetDelta();
    }
    function zO(e) {
      e.calcProjection();
    }
    function BO(e) {
      e.resetSkewAndRotation();
    }
    function UO(e) {
      e.removeLeadSnapshot();
    }
    function Yg(e, t, n) {
      ((e.translate = ye(t.translate, 0, n)),
        (e.scale = ye(t.scale, 1, n)),
        (e.origin = t.origin),
        (e.originPoint = t.originPoint));
    }
    function Qg(e, t, n, r) {
      ((e.min = ye(t.min, n.min, r)), (e.max = ye(t.max, n.max, r)));
    }
    function WO(e, t, n, r) {
      (Qg(e.x, t.x, n.x, r), Qg(e.y, t.y, n.y, r));
    }
    function HO(e) {
      return e.animationValues && e.animationValues.opacityExit !== void 0;
    }
    const KO = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
      qg = (e) =>
        typeof navigator < "u" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().includes(e),
      Xg = qg("applewebkit/") && !qg("chrome/") ? Math.round : Pt;
    function Zg(e) {
      ((e.min = Xg(e.min)), (e.max = Xg(e.max)));
    }
    function GO(e) {
      (Zg(e.x), Zg(e.y));
    }
    function Q1(e, t, n) {
      return (
        e === "position" || (e === "preserve-aspect" && !gO($g(t), $g(n), 0.2))
      );
    }
    function YO(e) {
      var t;
      return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
    }
    const QO = Y1({
        attachResizeListener: (e, t) => Co(e, "resize", t),
        measureScroll: () => {
          var e, t;
          return {
            x:
              document.documentElement.scrollLeft ||
              ((e = document.body) == null ? void 0 : e.scrollLeft) ||
              0,
            y:
              document.documentElement.scrollTop ||
              ((t = document.body) == null ? void 0 : t.scrollTop) ||
              0,
          };
        },
        checkIsScrollRoot: () => !0,
      }),
      oc = { current: void 0 },
      q1 = Y1({
        measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
        defaultParent: () => {
          if (!oc.current) {
            const e = new QO({});
            (e.mount(window),
              e.setOptions({ layoutScroll: !0 }),
              (oc.current = e));
          }
          return oc.current;
        },
        resetTransform: (e, t) => {
          e.style.transform = t !== void 0 ? t : "none";
        },
        checkIsScrollRoot: (e) =>
          window.getComputedStyle(e).position === "fixed",
      }),
      Bh = x.createContext({
        transformPagePoint: (e) => e,
        isStatic: !1,
        reducedMotion: "never",
      });
    function Jg(e, t) {
      if (typeof e == "function") return e(t);
      e != null && (e.current = t);
    }
    function qO(...e) {
      return (t) => {
        let n = !1;
        const r = e.map((s) => {
          const i = Jg(s, t);
          return (!n && typeof i == "function" && (n = !0), i);
        });
        if (n)
          return () => {
            for (let s = 0; s < r.length; s++) {
              const i = r[s];
              typeof i == "function" ? i() : Jg(e[s], null);
            }
          };
      };
    }
    function XO(...e) {
      return x.useCallback(qO(...e), e);
    }
    class ZO extends x.Component {
      getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
          const r = n.offsetParent,
            s = (Bd(r) && r.offsetWidth) || 0,
            i = (Bd(r) && r.offsetHeight) || 0,
            o = this.props.sizeRef.current;
          ((o.height = n.offsetHeight || 0),
            (o.width = n.offsetWidth || 0),
            (o.top = n.offsetTop),
            (o.left = n.offsetLeft),
            (o.right = s - o.width - o.left),
            (o.bottom = i - o.height - o.top));
        }
        return null;
      }
      componentDidUpdate() {}
      render() {
        return this.props.children;
      }
    }
    function JO({
      children: e,
      isPresent: t,
      anchorX: n,
      anchorY: r,
      root: s,
    }) {
      var d;
      const i = x.useId(),
        o = x.useRef(null),
        a = x.useRef({
          width: 0,
          height: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }),
        { nonce: l } = x.useContext(Bh),
        u =
          ((d = e.props) == null ? void 0 : d.ref) ??
          (e == null ? void 0 : e.ref),
        c = XO(o, u);
      return (
        x.useInsertionEffect(() => {
          const {
            width: f,
            height: h,
            top: b,
            left: g,
            right: w,
            bottom: m,
          } = a.current;
          if (t || !o.current || !f || !h) return;
          const p = n === "left" ? `left: ${g}` : `right: ${w}`,
            y = r === "bottom" ? `bottom: ${m}` : `top: ${b}`;
          o.current.dataset.motionPopId = i;
          const S = document.createElement("style");
          l && (S.nonce = l);
          const T = s ?? document.head;
          return (
            T.appendChild(S),
            S.sheet &&
              S.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${h}px !important;
            ${p}px !important;
            ${y}px !important;
          }
        `),
            () => {
              T.contains(S) && T.removeChild(S);
            }
          );
        }, [t]),
        v.jsx(ZO, {
          isPresent: t,
          childRef: o,
          sizeRef: a,
          children: x.cloneElement(e, { ref: c }),
        })
      );
    }
    const eM = ({
      children: e,
      initial: t,
      isPresent: n,
      onExitComplete: r,
      custom: s,
      presenceAffectsLayout: i,
      mode: o,
      anchorX: a,
      anchorY: l,
      root: u,
    }) => {
      const c = mh(tM),
        d = x.useId();
      let f = !0,
        h = x.useMemo(
          () => (
            (f = !1),
            {
              id: d,
              initial: t,
              isPresent: n,
              custom: s,
              onExitComplete: (b) => {
                c.set(b, !0);
                for (const g of c.values()) if (!g) return;
                r && r();
              },
              register: (b) => (c.set(b, !1), () => c.delete(b)),
            }
          ),
          [n, c, r],
        );
      return (
        i && f && (h = { ...h }),
        x.useMemo(() => {
          c.forEach((b, g) => c.set(g, !1));
        }, [n]),
        x.useEffect(() => {
          !n && !c.size && r && r();
        }, [n]),
        o === "popLayout" &&
          (e = v.jsx(JO, {
            isPresent: n,
            anchorX: a,
            anchorY: l,
            root: u,
            children: e,
          })),
        v.jsx(su.Provider, { value: h, children: e })
      );
    };
    function tM() {
      return new Map();
    }
    function X1(e = !0) {
      const t = x.useContext(su);
      if (t === null) return [!0, null];
      const { isPresent: n, onExitComplete: r, register: s } = t,
        i = x.useId();
      x.useEffect(() => {
        if (e) return s(i);
      }, [e]);
      const o = x.useCallback(() => e && r && r(i), [i, r, e]);
      return !n && r ? [!1, o] : [!0];
    }
    const va = (e) => e.key || "";
    function ey(e) {
      const t = [];
      return (
        x.Children.forEach(e, (n) => {
          x.isValidElement(n) && t.push(n);
        }),
        t
      );
    }
    const nM = ({
        children: e,
        custom: t,
        initial: n = !0,
        onExitComplete: r,
        presenceAffectsLayout: s = !0,
        mode: i = "sync",
        propagate: o = !1,
        anchorX: a = "left",
        anchorY: l = "top",
        root: u,
      }) => {
        const [c, d] = X1(o),
          f = x.useMemo(() => ey(e), [e]),
          h = o && !c ? [] : f.map(va),
          b = x.useRef(!0),
          g = x.useRef(f),
          w = mh(() => new Map()),
          m = x.useRef(new Set()),
          [p, y] = x.useState(f),
          [S, T] = x.useState(f);
        _w(() => {
          ((b.current = !1), (g.current = f));
          for (let P = 0; P < S.length; P++) {
            const R = va(S[P]);
            h.includes(R)
              ? (w.delete(R), m.current.delete(R))
              : w.get(R) !== !0 && w.set(R, !1);
          }
        }, [S, h.length, h.join("-")]);
        const E = [];
        if (f !== p) {
          let P = [...f];
          for (let R = 0; R < S.length; R++) {
            const k = S[R],
              $ = va(k);
            h.includes($) || (P.splice(R, 0, k), E.push(k));
          }
          return (i === "wait" && E.length && (P = E), T(ey(P)), y(f), null);
        }
        const { forceRender: C } = x.useContext(ph);
        return v.jsx(v.Fragment, {
          children: S.map((P) => {
            const R = va(P),
              k = o && !c ? !1 : f === S || h.includes(R),
              $ = () => {
                if (m.current.has(R)) return;
                if ((m.current.add(R), w.has(R))) w.set(R, !0);
                else return;
                let L = !0;
                (w.forEach((Y) => {
                  Y || (L = !1);
                }),
                  L &&
                    (C == null || C(),
                    T(g.current),
                    o && (d == null || d()),
                    r && r()));
              };
            return v.jsx(
              eM,
              {
                isPresent: k,
                initial: !b.current || n ? void 0 : !1,
                custom: t,
                presenceAffectsLayout: s,
                mode: i,
                root: u,
                onExitComplete: k ? void 0 : $,
                anchorX: a,
                anchorY: l,
                children: P,
              },
              R,
            );
          }),
        });
      },
      Z1 = x.createContext({ strict: !1 }),
      ty = {
        animation: [
          "animate",
          "variants",
          "whileHover",
          "whileTap",
          "exit",
          "whileInView",
          "whileFocus",
          "whileDrag",
        ],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"],
      };
    let ny = !1;
    function rM() {
      if (ny) return;
      const e = {};
      for (const t in ty)
        e[t] = { isEnabled: (n) => ty[t].some((r) => !!n[r]) };
      (k1(e), (ny = !0));
    }
    function J1() {
      return (rM(), BA());
    }
    function sM(e) {
      const t = J1();
      for (const n in e) t[n] = { ...t[n], ...e[n] };
      k1(t);
    }
    const iM = new Set([
      "animate",
      "exit",
      "variants",
      "initial",
      "style",
      "values",
      "variants",
      "transition",
      "transformTemplate",
      "custom",
      "inherit",
      "onBeforeLayoutMeasure",
      "onAnimationStart",
      "onAnimationComplete",
      "onUpdate",
      "onDragStart",
      "onDrag",
      "onDragEnd",
      "onMeasureDragConstraints",
      "onDirectionLock",
      "onDragTransitionEnd",
      "_dragX",
      "_dragY",
      "onHoverStart",
      "onHoverEnd",
      "onViewportEnter",
      "onViewportLeave",
      "globalTapTarget",
      "ignoreStrict",
      "viewport",
    ]);
    function kl(e) {
      return (
        e.startsWith("while") ||
        (e.startsWith("drag") && e !== "draggable") ||
        e.startsWith("layout") ||
        e.startsWith("onTap") ||
        e.startsWith("onPan") ||
        e.startsWith("onLayout") ||
        iM.has(e)
      );
    }
    let eb = (e) => !kl(e);
    function oM(e) {
      typeof e == "function" &&
        (eb = (t) => (t.startsWith("on") ? !kl(t) : e(t)));
    }
    try {
      oM(require("@emotion/is-prop-valid").default);
    } catch {}
    function aM(e, t, n) {
      const r = {};
      for (const s in e)
        (s === "values" && typeof e.values == "object") ||
          ((eb(s) ||
            (n === !0 && kl(s)) ||
            (!t && !kl(s)) ||
            (e.draggable && s.startsWith("onDrag"))) &&
            (r[s] = e[s]));
      return r;
    }
    const lu = x.createContext({});
    function lM(e, t) {
      if (au(e)) {
        const { initial: n, animate: r } = e;
        return {
          initial: n === !1 || Eo(n) ? n : void 0,
          animate: Eo(r) ? r : void 0,
        };
      }
      return e.inherit !== !1 ? t : {};
    }
    function uM(e) {
      const { initial: t, animate: n } = lM(e, x.useContext(lu));
      return x.useMemo(() => ({ initial: t, animate: n }), [ry(t), ry(n)]);
    }
    function ry(e) {
      return Array.isArray(e) ? e.join(" ") : e;
    }
    const Uh = () => ({
      style: {},
      transform: {},
      transformOrigin: {},
      vars: {},
    });
    function tb(e, t, n) {
      for (const r in t) !ze(t[r]) && !j1(r, n) && (e[r] = t[r]);
    }
    function cM({ transformTemplate: e }, t) {
      return x.useMemo(() => {
        const n = Uh();
        return ($h(n, t, e), Object.assign({}, n.vars, n.style));
      }, [t]);
    }
    function dM(e, t) {
      const n = e.style || {},
        r = {};
      return (tb(r, n, e), Object.assign(r, cM(e, t)), r);
    }
    function fM(e, t) {
      const n = {},
        r = dM(e, t);
      return (
        e.drag &&
          e.dragListener !== !1 &&
          ((n.draggable = !1),
          (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
          (r.touchAction =
            e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
        e.tabIndex === void 0 &&
          (e.onTap || e.onTapStart || e.whileTap) &&
          (n.tabIndex = 0),
        (n.style = r),
        n
      );
    }
    const nb = () => ({ ...Uh(), attrs: {} });
    function hM(e, t, n, r) {
      const s = x.useMemo(() => {
        const i = nb();
        return (
          D1(i, t, I1(r), e.transformTemplate, e.style),
          { ...i.attrs, style: { ...i.style } }
        );
      }, [t]);
      if (e.style) {
        const i = {};
        (tb(i, e.style, e), (s.style = { ...i, ...s.style }));
      }
      return s;
    }
    const pM = [
      "animate",
      "circle",
      "defs",
      "desc",
      "ellipse",
      "g",
      "image",
      "line",
      "filter",
      "marker",
      "mask",
      "metadata",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "rect",
      "stop",
      "switch",
      "symbol",
      "svg",
      "text",
      "tspan",
      "use",
      "view",
    ];
    function Wh(e) {
      return typeof e != "string" || e.includes("-")
        ? !1
        : !!(pM.indexOf(e) > -1 || /[A-Z]/u.test(e));
    }
    function mM(e, t, n, { latestValues: r }, s, i = !1, o) {
      const l = ((o ?? Wh(e)) ? hM : fM)(t, r, s, e),
        u = aM(t, typeof e == "string", i),
        c = e !== x.Fragment ? { ...u, ...l, ref: n } : {},
        { children: d } = t,
        f = x.useMemo(() => (ze(d) ? d.get() : d), [d]);
      return x.createElement(e, { ...c, children: f });
    }
    function gM(
      { scrapeMotionValuesFromProps: e, createRenderState: t },
      n,
      r,
      s,
    ) {
      return { latestValues: yM(n, r, s, e), renderState: t() };
    }
    function yM(e, t, n, r) {
      const s = {},
        i = r(e, {});
      for (const f in i) s[f] = Ba(i[f]);
      let { initial: o, animate: a } = e;
      const l = au(e),
        u = P1(e);
      t &&
        u &&
        !l &&
        e.inherit !== !1 &&
        (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
      let c = n ? n.initial === !1 : !1;
      c = c || o === !1;
      const d = c ? a : o;
      if (d && typeof d != "boolean" && !ou(d)) {
        const f = Array.isArray(d) ? d : [d];
        for (let h = 0; h < f.length; h++) {
          const b = Mh(e, f[h]);
          if (b) {
            const { transitionEnd: g, transition: w, ...m } = b;
            for (const p in m) {
              let y = m[p];
              if (Array.isArray(y)) {
                const S = c ? y.length - 1 : 0;
                y = y[S];
              }
              y !== null && (s[p] = y);
            }
            for (const p in g) s[p] = g[p];
          }
        }
      }
      return s;
    }
    const rb = (e) => (t, n) => {
        const r = x.useContext(lu),
          s = x.useContext(su),
          i = () => gM(e, t, r, s);
        return n ? i() : mh(i);
      },
      vM = rb({ scrapeMotionValuesFromProps: zh, createRenderState: Uh }),
      xM = rb({ scrapeMotionValuesFromProps: F1, createRenderState: nb }),
      wM = Symbol.for("motionComponentSymbol");
    function bM(e, t, n) {
      const r = x.useRef(n);
      x.useInsertionEffect(() => {
        r.current = n;
      });
      const s = x.useRef(null);
      return x.useCallback(
        (i) => {
          var a;
          (i && ((a = e.onMount) == null || a.call(e, i)),
            t && (i ? t.mount(i) : t.unmount()));
          const o = r.current;
          if (typeof o == "function")
            if (i) {
              const l = o(i);
              typeof l == "function" && (s.current = l);
            } else s.current ? (s.current(), (s.current = null)) : o(i);
          else o && (o.current = i);
        },
        [t],
      );
    }
    const sb = x.createContext({});
    function Ai(e) {
      return (
        e &&
        typeof e == "object" &&
        Object.prototype.hasOwnProperty.call(e, "current")
      );
    }
    function SM(e, t, n, r, s, i) {
      var m, p;
      const { visualElement: o } = x.useContext(lu),
        a = x.useContext(Z1),
        l = x.useContext(su),
        u = x.useContext(Bh).reducedMotion,
        c = x.useRef(null),
        d = x.useRef(!1);
      ((r = r || a.renderer),
        !c.current &&
          r &&
          ((c.current = r(e, {
            visualState: t,
            parent: o,
            props: n,
            presenceContext: l,
            blockInitialAnimation: l ? l.initial === !1 : !1,
            reducedMotionConfig: u,
            isSVG: i,
          })),
          d.current && c.current && (c.current.manuallyAnimateOnMount = !0)));
      const f = c.current,
        h = x.useContext(sb);
      f &&
        !f.projection &&
        s &&
        (f.type === "html" || f.type === "svg") &&
        TM(c.current, n, s, h);
      const b = x.useRef(!1);
      x.useInsertionEffect(() => {
        f && b.current && f.update(n, l);
      });
      const g = n[f1],
        w = x.useRef(
          !!g &&
            !(
              (m = window.MotionHandoffIsComplete) != null && m.call(window, g)
            ) &&
            ((p = window.MotionHasOptimisedAnimation) == null
              ? void 0
              : p.call(window, g)),
        );
      return (
        _w(() => {
          ((d.current = !0),
            f &&
              ((b.current = !0),
              (window.MotionIsMounted = !0),
              f.updateFeatures(),
              f.scheduleRenderMicrotask(),
              w.current &&
                f.animationState &&
                f.animationState.animateChanges()));
        }),
        x.useEffect(() => {
          f &&
            (!w.current &&
              f.animationState &&
              f.animationState.animateChanges(),
            w.current &&
              (queueMicrotask(() => {
                var y;
                (y = window.MotionHandoffMarkAsComplete) == null ||
                  y.call(window, g);
              }),
              (w.current = !1)),
            (f.enteringChildren = void 0));
        }),
        f
      );
    }
    function TM(e, t, n, r) {
      const {
        layoutId: s,
        layout: i,
        drag: o,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: u,
        layoutCrossfade: c,
      } = t;
      ((e.projection = new n(
        e.latestValues,
        t["data-framer-portal-id"] ? void 0 : ib(e.parent),
      )),
        e.projection.setOptions({
          layoutId: s,
          layout: i,
          alwaysMeasureLayout: !!o || (a && Ai(a)),
          visualElement: e,
          animationType: typeof i == "string" ? i : "both",
          initialPromotionConfig: r,
          crossfade: c,
          layoutScroll: l,
          layoutRoot: u,
        }));
    }
    function ib(e) {
      if (e)
        return e.options.allowProjection !== !1 ? e.projection : ib(e.parent);
    }
    function ac(e, { forwardMotionProps: t = !1, type: n } = {}, r, s) {
      r && sM(r);
      const i = n ? n === "svg" : Wh(e),
        o = i ? xM : vM;
      function a(u, c) {
        let d;
        const f = { ...x.useContext(Bh), ...u, layoutId: EM(u) },
          { isStatic: h } = f,
          b = uM(u),
          g = o(u, h);
        if (!h && Rw) {
          CM();
          const w = PM(f);
          ((d = w.MeasureLayout),
            (b.visualElement = SM(e, g, f, s, w.ProjectionNode, i)));
        }
        return v.jsxs(lu.Provider, {
          value: b,
          children: [
            d && b.visualElement
              ? v.jsx(d, { visualElement: b.visualElement, ...f })
              : null,
            mM(e, u, bM(g, b.visualElement, c), g, h, t, i),
          ],
        });
      }
      a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
      const l = x.forwardRef(a);
      return ((l[wM] = e), l);
    }
    function EM({ layoutId: e }) {
      const t = x.useContext(ph).id;
      return t && e !== void 0 ? t + "-" + e : e;
    }
    function CM(e, t) {
      x.useContext(Z1).strict;
    }
    function PM(e) {
      const t = J1(),
        { drag: n, layout: r } = t;
      if (!n && !r) return {};
      const s = { ...n, ...r };
      return {
        MeasureLayout:
          (n != null && n.isEnabled(e)) || (r != null && r.isEnabled(e))
            ? s.MeasureLayout
            : void 0,
        ProjectionNode: s.ProjectionNode,
      };
    }
    function kM(e, t) {
      if (typeof Proxy > "u") return ac;
      const n = new Map(),
        r = (i, o) => ac(i, o, e, t),
        s = (i, o) => r(i, o);
      return new Proxy(s, {
        get: (i, o) =>
          o === "create"
            ? r
            : (n.has(o) || n.set(o, ac(o, void 0, e, t)), n.get(o)),
      });
    }
    const RM = (e, t) =>
      (t.isSVG ?? Wh(e))
        ? new iO(t)
        : new JA(t, { allowProjection: e !== x.Fragment });
    class _M extends vr {
      constructor(t) {
        (super(t), t.animationState || (t.animationState = cO(t)));
      }
      updateAnimationControlsSubscription() {
        const { animate: t } = this.node.getProps();
        ou(t) && (this.unmountControls = t.subscribe(this.node));
      }
      mount() {
        this.updateAnimationControlsSubscription();
      }
      update() {
        const { animate: t } = this.node.getProps(),
          { animate: n } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription();
      }
      unmount() {
        var t;
        (this.node.animationState.reset(),
          (t = this.unmountControls) == null || t.call(this));
      }
    }
    let NM = 0;
    class AM extends vr {
      constructor() {
        (super(...arguments), (this.id = NM++));
      }
      update() {
        if (!this.node.presenceContext) return;
        const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
          { isPresent: r } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r) return;
        const s = this.node.animationState.setActive("exit", !t);
        n &&
          !t &&
          s.then(() => {
            n(this.id);
          });
      }
      mount() {
        const { register: t, onExitComplete: n } =
          this.node.presenceContext || {};
        (n && n(this.id), t && (this.unmount = t(this.id)));
      }
      unmount() {}
    }
    const OM = { animation: { Feature: _M }, exit: { Feature: AM } };
    function $o(e) {
      return { point: { x: e.pageX, y: e.pageY } };
    }
    const MM = (e) => (t) => Ih(t) && e(t, $o(t));
    function Yi(e, t, n, r) {
      return Co(e, t, MM(n), r);
    }
    const ob = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
      sy = (e, t) => Math.abs(e - t);
    function jM(e, t) {
      const n = sy(e.x, t.x),
        r = sy(e.y, t.y);
      return Math.sqrt(n ** 2 + r ** 2);
    }
    const iy = new Set(["auto", "scroll"]);
    class ab {
      constructor(
        t,
        n,
        {
          transformPagePoint: r,
          contextWindow: s = window,
          dragSnapToOrigin: i = !1,
          distanceThreshold: o = 3,
          element: a,
        } = {},
      ) {
        if (
          ((this.startEvent = null),
          (this.lastMoveEvent = null),
          (this.lastMoveEventInfo = null),
          (this.handlers = {}),
          (this.contextWindow = window),
          (this.scrollPositions = new Map()),
          (this.removeScrollListeners = null),
          (this.onElementScroll = (h) => {
            this.handleScroll(h.target);
          }),
          (this.onWindowScroll = () => {
            this.handleScroll(window);
          }),
          (this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
            const h = uc(this.lastMoveEventInfo, this.history),
              b = this.startEvent !== null,
              g = jM(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
            if (!b && !g) return;
            const { point: w } = h,
              { timestamp: m } = Oe;
            this.history.push({ ...w, timestamp: m });
            const { onStart: p, onMove: y } = this.handlers;
            (b ||
              (p && p(this.lastMoveEvent, h),
              (this.startEvent = this.lastMoveEvent)),
              y && y(this.lastMoveEvent, h));
          }),
          (this.handlePointerMove = (h, b) => {
            ((this.lastMoveEvent = h),
              (this.lastMoveEventInfo = lc(b, this.transformPagePoint)),
              de.update(this.updatePoint, !0));
          }),
          (this.handlePointerUp = (h, b) => {
            this.end();
            const {
              onEnd: g,
              onSessionEnd: w,
              resumeAnimation: m,
            } = this.handlers;
            if (
              ((this.dragSnapToOrigin || !this.startEvent) && m && m(),
              !(this.lastMoveEvent && this.lastMoveEventInfo))
            )
              return;
            const p = uc(
              h.type === "pointercancel"
                ? this.lastMoveEventInfo
                : lc(b, this.transformPagePoint),
              this.history,
            );
            (this.startEvent && g && g(h, p), w && w(h, p));
          }),
          !Ih(t))
        )
          return;
        ((this.dragSnapToOrigin = i),
          (this.handlers = n),
          (this.transformPagePoint = r),
          (this.distanceThreshold = o),
          (this.contextWindow = s || window));
        const l = $o(t),
          u = lc(l, this.transformPagePoint),
          { point: c } = u,
          { timestamp: d } = Oe;
        this.history = [{ ...c, timestamp: d }];
        const { onSessionStart: f } = n;
        (f && f(t, uc(u, this.history)),
          (this.removeListeners = Io(
            Yi(this.contextWindow, "pointermove", this.handlePointerMove),
            Yi(this.contextWindow, "pointerup", this.handlePointerUp),
            Yi(this.contextWindow, "pointercancel", this.handlePointerUp),
          )),
          a && this.startScrollTracking(a));
      }
      startScrollTracking(t) {
        let n = t.parentElement;
        for (; n; ) {
          const r = getComputedStyle(n);
          ((iy.has(r.overflowX) || iy.has(r.overflowY)) &&
            this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
            (n = n.parentElement));
        }
        (this.scrollPositions.set(window, {
          x: window.scrollX,
          y: window.scrollY,
        }),
          window.addEventListener("scroll", this.onElementScroll, {
            capture: !0,
            passive: !0,
          }),
          window.addEventListener("scroll", this.onWindowScroll, {
            passive: !0,
          }),
          (this.removeScrollListeners = () => {
            (window.removeEventListener("scroll", this.onElementScroll, {
              capture: !0,
            }),
              window.removeEventListener("scroll", this.onWindowScroll));
          }));
      }
      handleScroll(t) {
        const n = this.scrollPositions.get(t);
        if (!n) return;
        const r = t === window,
          s = r
            ? { x: window.scrollX, y: window.scrollY }
            : { x: t.scrollLeft, y: t.scrollTop },
          i = { x: s.x - n.x, y: s.y - n.y };
        (i.x === 0 && i.y === 0) ||
          (r
            ? this.lastMoveEventInfo &&
              ((this.lastMoveEventInfo.point.x += i.x),
              (this.lastMoveEventInfo.point.y += i.y))
            : this.history.length > 0 &&
              ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
          this.scrollPositions.set(t, s),
          de.update(this.updatePoint, !0));
      }
      updateHandlers(t) {
        this.handlers = t;
      }
      end() {
        (this.removeListeners && this.removeListeners(),
          this.removeScrollListeners && this.removeScrollListeners(),
          this.scrollPositions.clear(),
          fr(this.updatePoint));
      }
    }
    function lc(e, t) {
      return t ? { point: t(e.point) } : e;
    }
    function oy(e, t) {
      return { x: e.x - t.x, y: e.y - t.y };
    }
    function uc({ point: e }, t) {
      return {
        point: e,
        delta: oy(e, lb(t)),
        offset: oy(e, DM(t)),
        velocity: LM(t, 0.1),
      };
    }
    function DM(e) {
      return e[0];
    }
    function lb(e) {
      return e[e.length - 1];
    }
    function LM(e, t) {
      if (e.length < 2) return { x: 0, y: 0 };
      let n = e.length - 1,
        r = null;
      const s = lb(e);
      for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > on(t))); )
        n--;
      if (!r) return { x: 0, y: 0 };
      const i = Et(s.timestamp - r.timestamp);
      if (i === 0) return { x: 0, y: 0 };
      const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
      return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
    }
    function IM(e, { min: t, max: n }, r) {
      return (
        t !== void 0 && e < t
          ? (e = r ? ye(t, e, r.min) : Math.max(e, t))
          : n !== void 0 && e > n && (e = r ? ye(n, e, r.max) : Math.min(e, n)),
        e
      );
    }
    function ay(e, t, n) {
      return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
      };
    }
    function FM(e, { top: t, left: n, bottom: r, right: s }) {
      return { x: ay(e.x, n, s), y: ay(e.y, t, r) };
    }
    function ly(e, t) {
      let n = t.min - e.min,
        r = t.max - e.max;
      return (
        t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
        { min: n, max: r }
      );
    }
    function VM(e, t) {
      return { x: ly(e.x, t.x), y: ly(e.y, t.y) };
    }
    function $M(e, t) {
      let n = 0.5;
      const r = Ye(e),
        s = Ye(t);
      return (
        s > r
          ? (n = bo(t.min, t.max - r, e.min))
          : r > s && (n = bo(e.min, e.max - s, t.min)),
        un(0, 1, n)
      );
    }
    function zM(e, t) {
      const n = {};
      return (
        t.min !== void 0 && (n.min = t.min - e.min),
        t.max !== void 0 && (n.max = t.max - e.min),
        n
      );
    }
    const Gd = 0.35;
    function BM(e = Gd) {
      return (
        e === !1 ? (e = 0) : e === !0 && (e = Gd),
        { x: uy(e, "left", "right"), y: uy(e, "top", "bottom") }
      );
    }
    function uy(e, t, n) {
      return { min: cy(e, t), max: cy(e, n) };
    }
    function cy(e, t) {
      return typeof e == "number" ? e : e[t] || 0;
    }
    const UM = new WeakMap();
    class WM {
      constructor(t) {
        ((this.openDragLock = null),
          (this.isDragging = !1),
          (this.currentDirection = null),
          (this.originPoint = { x: 0, y: 0 }),
          (this.constraints = !1),
          (this.hasMutatedConstraints = !1),
          (this.elastic = Ce()),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null),
          (this.visualElement = t));
      }
      start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
        const { presenceContext: s } = this.visualElement;
        if (s && s.isPresent === !1) return;
        const i = (d) => {
            n
              ? (this.stopAnimation(), this.snapToCursor($o(d).point))
              : this.pauseAnimation();
          },
          o = (d, f) => {
            this.stopAnimation();
            const {
              drag: h,
              dragPropagation: b,
              onDragStart: g,
            } = this.getProps();
            if (
              h &&
              !b &&
              (this.openDragLock && this.openDragLock(),
              (this.openDragLock = NA(h)),
              !this.openDragLock)
            )
              return;
            ((this.latestPointerEvent = d),
              (this.latestPanInfo = f),
              (this.isDragging = !0),
              (this.currentDirection = null),
              this.resolveConstraints(),
              this.visualElement.projection &&
                ((this.visualElement.projection.isAnimationBlocked = !0),
                (this.visualElement.projection.target = void 0)),
              xt((m) => {
                let p = this.getAxisMotionValue(m).get() || 0;
                if (an.test(p)) {
                  const { projection: y } = this.visualElement;
                  if (y && y.layout) {
                    const S = y.layout.layoutBox[m];
                    S && (p = Ye(S) * (parseFloat(p) / 100));
                  }
                }
                this.originPoint[m] = p;
              }),
              g && de.postRender(() => g(d, f)),
              Vd(this.visualElement, "transform"));
            const { animationState: w } = this.visualElement;
            w && w.setActive("whileDrag", !0);
          },
          a = (d, f) => {
            ((this.latestPointerEvent = d), (this.latestPanInfo = f));
            const {
              dragPropagation: h,
              dragDirectionLock: b,
              onDirectionLock: g,
              onDrag: w,
            } = this.getProps();
            if (!h && !this.openDragLock) return;
            const { offset: m } = f;
            if (b && this.currentDirection === null) {
              ((this.currentDirection = HM(m)),
                this.currentDirection !== null &&
                  g &&
                  g(this.currentDirection));
              return;
            }
            (this.updateAxis("x", f.point, m),
              this.updateAxis("y", f.point, m),
              this.visualElement.render(),
              w && w(d, f));
          },
          l = (d, f) => {
            ((this.latestPointerEvent = d),
              (this.latestPanInfo = f),
              this.stop(d, f),
              (this.latestPointerEvent = null),
              (this.latestPanInfo = null));
          },
          u = () =>
            xt((d) => {
              var f;
              return (
                this.getAnimationState(d) === "paused" &&
                ((f = this.getAxisMotionValue(d).animation) == null
                  ? void 0
                  : f.play())
              );
            }),
          { dragSnapToOrigin: c } = this.getProps();
        this.panSession = new ab(
          t,
          {
            onSessionStart: i,
            onStart: o,
            onMove: a,
            onSessionEnd: l,
            resumeAnimation: u,
          },
          {
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: c,
            distanceThreshold: r,
            contextWindow: ob(this.visualElement),
            element: this.visualElement.current,
          },
        );
      }
      stop(t, n) {
        const r = t || this.latestPointerEvent,
          s = n || this.latestPanInfo,
          i = this.isDragging;
        if ((this.cancel(), !i || !s || !r)) return;
        const { velocity: o } = s;
        this.startAnimation(o);
        const { onDragEnd: a } = this.getProps();
        a && de.postRender(() => a(r, s));
      }
      cancel() {
        this.isDragging = !1;
        const { projection: t, animationState: n } = this.visualElement;
        (t && (t.isAnimationBlocked = !1), this.endPanSession());
        const { dragPropagation: r } = this.getProps();
        (!r &&
          this.openDragLock &&
          (this.openDragLock(), (this.openDragLock = null)),
          n && n.setActive("whileDrag", !1));
      }
      endPanSession() {
        (this.panSession && this.panSession.end(), (this.panSession = void 0));
      }
      updateAxis(t, n, r) {
        const { drag: s } = this.getProps();
        if (!r || !xa(t, s, this.currentDirection)) return;
        const i = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        (this.constraints &&
          this.constraints[t] &&
          (o = IM(o, this.constraints[t], this.elastic[t])),
          i.set(o));
      }
      resolveConstraints() {
        var i;
        const { dragConstraints: t, dragElastic: n } = this.getProps(),
          r =
            this.visualElement.projection &&
            !this.visualElement.projection.layout
              ? this.visualElement.projection.measure(!1)
              : (i = this.visualElement.projection) == null
                ? void 0
                : i.layout,
          s = this.constraints;
        (t && Ai(t)
          ? this.constraints ||
            (this.constraints = this.resolveRefConstraints())
          : t && r
            ? (this.constraints = FM(r.layoutBox, t))
            : (this.constraints = !1),
          (this.elastic = BM(n)),
          s !== this.constraints &&
            r &&
            this.constraints &&
            !this.hasMutatedConstraints &&
            xt((o) => {
              this.constraints !== !1 &&
                this.getAxisMotionValue(o) &&
                (this.constraints[o] = zM(r.layoutBox[o], this.constraints[o]));
            }));
      }
      resolveRefConstraints() {
        const { dragConstraints: t, onMeasureDragConstraints: n } =
          this.getProps();
        if (!t || !Ai(t)) return !1;
        const r = t.current;
        ti(
          r !== null,
          "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          "drag-constraints-ref",
        );
        const { projection: s } = this.visualElement;
        if (!s || !s.layout) return !1;
        const i = GA(r, s.root, this.visualElement.getTransformPagePoint());
        let o = VM(s.layout.layoutBox, i);
        if (n) {
          const a = n(WA(o));
          ((this.hasMutatedConstraints = !!a), a && (o = _1(a)));
        }
        return o;
      }
      startAnimation(t) {
        const {
            drag: n,
            dragMomentum: r,
            dragElastic: s,
            dragTransition: i,
            dragSnapToOrigin: o,
            onDragTransitionEnd: a,
          } = this.getProps(),
          l = this.constraints || {},
          u = xt((c) => {
            if (!xa(c, n, this.currentDirection)) return;
            let d = (l && l[c]) || {};
            o && (d = { min: 0, max: 0 });
            const f = s ? 200 : 1e6,
              h = s ? 40 : 1e7,
              b = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: f,
                bounceDamping: h,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...d,
              };
            return this.startAxisValueAnimation(c, b);
          });
        return Promise.all(u).then(a);
      }
      startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return (
          Vd(this.visualElement, t),
          r.start(Oh(t, r, 0, n, this.visualElement, !1))
        );
      }
      stopAnimation() {
        xt((t) => this.getAxisMotionValue(t).stop());
      }
      pauseAnimation() {
        xt((t) => {
          var n;
          return (n = this.getAxisMotionValue(t).animation) == null
            ? void 0
            : n.pause();
        });
      }
      getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) == null
          ? void 0
          : n.state;
      }
      getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`,
          r = this.visualElement.getProps(),
          s = r[n];
        return (
          s ||
          this.visualElement.getValue(
            t,
            (r.initial ? r.initial[t] : void 0) || 0,
          )
        );
      }
      snapToCursor(t) {
        xt((n) => {
          const { drag: r } = this.getProps();
          if (!xa(n, r, this.currentDirection)) return;
          const { projection: s } = this.visualElement,
            i = this.getAxisMotionValue(n);
          if (s && s.layout) {
            const { min: o, max: a } = s.layout.layoutBox[n],
              l = i.get() || 0;
            i.set(t[n] - ye(o, a, 0.5) + l);
          }
        });
      }
      scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const { drag: t, dragConstraints: n } = this.getProps(),
          { projection: r } = this.visualElement;
        if (!Ai(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const s = { x: 0, y: 0 };
        xt((o) => {
          const a = this.getAxisMotionValue(o);
          if (a && this.constraints !== !1) {
            const l = a.get();
            s[o] = $M({ min: l, max: l }, this.constraints[o]);
          }
        });
        const { transformTemplate: i } = this.visualElement.getProps();
        ((this.visualElement.current.style.transform = i ? i({}, "") : "none"),
          r.root && r.root.updateScroll(),
          r.updateLayout(),
          this.resolveConstraints(),
          xt((o) => {
            if (!xa(o, t, null)) return;
            const a = this.getAxisMotionValue(o),
              { min: l, max: u } = this.constraints[o];
            a.set(ye(l, u, s[o]));
          }));
      }
      addListeners() {
        if (!this.visualElement.current) return;
        UM.set(this.visualElement, this);
        const t = this.visualElement.current,
          n = Yi(t, "pointerdown", (l) => {
            const { drag: u, dragListener: c = !0 } = this.getProps(),
              d = l.target,
              f = d !== t && T1(d);
            u && c && !f && this.start(l);
          }),
          r = () => {
            const { dragConstraints: l } = this.getProps();
            Ai(l) &&
              l.current &&
              (this.constraints = this.resolveRefConstraints());
          },
          { projection: s } = this.visualElement,
          i = s.addEventListener("measure", r);
        (s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
          de.read(r));
        const o = Co(window, "resize", () =>
            this.scalePositionWithinConstraints(),
          ),
          a = s.addEventListener(
            "didUpdate",
            ({ delta: l, hasLayoutChanged: u }) => {
              this.isDragging &&
                u &&
                (xt((c) => {
                  const d = this.getAxisMotionValue(c);
                  d &&
                    ((this.originPoint[c] += l[c].translate),
                    d.set(d.get() + l[c].translate));
                }),
                this.visualElement.render());
            },
          );
        return () => {
          (o(), n(), i(), a && a());
        };
      }
      getProps() {
        const t = this.visualElement.getProps(),
          {
            drag: n = !1,
            dragDirectionLock: r = !1,
            dragPropagation: s = !1,
            dragConstraints: i = !1,
            dragElastic: o = Gd,
            dragMomentum: a = !0,
          } = t;
        return {
          ...t,
          drag: n,
          dragDirectionLock: r,
          dragPropagation: s,
          dragConstraints: i,
          dragElastic: o,
          dragMomentum: a,
        };
      }
    }
    function xa(e, t, n) {
      return (t === !0 || t === e) && (n === null || n === e);
    }
    function HM(e, t = 10) {
      let n = null;
      return (
        Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"),
        n
      );
    }
    class KM extends vr {
      constructor(t) {
        (super(t),
          (this.removeGroupControls = Pt),
          (this.removeListeners = Pt),
          (this.controls = new WM(t)));
      }
      mount() {
        const { dragControls: t } = this.node.getProps();
        (t && (this.removeGroupControls = t.subscribe(this.controls)),
          (this.removeListeners = this.controls.addListeners() || Pt));
      }
      update() {
        const { dragControls: t } = this.node.getProps(),
          { dragControls: n } = this.node.prevProps || {};
        t !== n &&
          (this.removeGroupControls(),
          t && (this.removeGroupControls = t.subscribe(this.controls)));
      }
      unmount() {
        (this.removeGroupControls(),
          this.removeListeners(),
          this.controls.isDragging || this.controls.endPanSession());
      }
    }
    const dy = (e) => (t, n) => {
      e && de.postRender(() => e(t, n));
    };
    class GM extends vr {
      constructor() {
        (super(...arguments), (this.removePointerDownListener = Pt));
      }
      onPointerDown(t) {
        this.session = new ab(t, this.createPanHandlers(), {
          transformPagePoint: this.node.getTransformPagePoint(),
          contextWindow: ob(this.node),
        });
      }
      createPanHandlers() {
        const {
          onPanSessionStart: t,
          onPanStart: n,
          onPan: r,
          onPanEnd: s,
        } = this.node.getProps();
        return {
          onSessionStart: dy(t),
          onStart: dy(n),
          onMove: r,
          onEnd: (i, o) => {
            (delete this.session, s && de.postRender(() => s(i, o)));
          },
        };
      }
      mount() {
        this.removePointerDownListener = Yi(
          this.node.current,
          "pointerdown",
          (t) => this.onPointerDown(t),
        );
      }
      update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
      }
      unmount() {
        (this.removePointerDownListener(), this.session && this.session.end());
      }
    }
    let cc = !1;
    class YM extends x.Component {
      componentDidMount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
            layoutId: s,
          } = this.props,
          { projection: i } = t;
        (i &&
          (n.group && n.group.add(i),
          r && r.register && s && r.register(i),
          cc && i.root.didUpdate(),
          i.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          i.setOptions({
            ...i.options,
            layoutDependency: this.props.layoutDependency,
            onExitComplete: () => this.safeToRemove(),
          })),
          (Ua.hasEverUpdated = !0));
      }
      getSnapshotBeforeUpdate(t) {
        const {
            layoutDependency: n,
            visualElement: r,
            drag: s,
            isPresent: i,
          } = this.props,
          { projection: o } = r;
        return (
          o &&
            ((o.isPresent = i),
            t.layoutDependency !== n &&
              o.setOptions({ ...o.options, layoutDependency: n }),
            (cc = !0),
            s || t.layoutDependency !== n || n === void 0 || t.isPresent !== i
              ? o.willUpdate()
              : this.safeToRemove(),
            t.isPresent !== i &&
              (i
                ? o.promote()
                : o.relegate() ||
                  de.postRender(() => {
                    const a = o.getStack();
                    (!a || !a.members.length) && this.safeToRemove();
                  }))),
          null
        );
      }
      componentDidUpdate() {
        const { projection: t } = this.props.visualElement;
        t &&
          (t.root.didUpdate(),
          Lh.postRender(() => {
            !t.currentAnimation && t.isLead() && this.safeToRemove();
          }));
      }
      componentWillUnmount() {
        const {
            visualElement: t,
            layoutGroup: n,
            switchLayoutGroup: r,
          } = this.props,
          { projection: s } = t;
        ((cc = !0),
          s &&
            (s.scheduleCheckAfterUnmount(),
            n && n.group && n.group.remove(s),
            r && r.deregister && r.deregister(s)));
      }
      safeToRemove() {
        const { safeToRemove: t } = this.props;
        t && t();
      }
      render() {
        return null;
      }
    }
    function ub(e) {
      const [t, n] = X1(),
        r = x.useContext(ph);
      return v.jsx(YM, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: x.useContext(sb),
        isPresent: t,
        safeToRemove: n,
      });
    }
    const QM = {
      pan: { Feature: GM },
      drag: { Feature: KM, ProjectionNode: q1, MeasureLayout: ub },
    };
    function fy(e, t, n) {
      const { props: r } = e;
      e.animationState &&
        r.whileHover &&
        e.animationState.setActive("whileHover", n === "Start");
      const s = "onHover" + n,
        i = r[s];
      i && de.postRender(() => i(t, $o(t)));
    }
    class qM extends vr {
      mount() {
        const { current: t } = this.node;
        t &&
          (this.unmount = AA(
            t,
            (n, r) => (
              fy(this.node, r, "Start"),
              (s) => fy(this.node, s, "End")
            ),
          ));
      }
      unmount() {}
    }
    class XM extends vr {
      constructor() {
        (super(...arguments), (this.isActive = !1));
      }
      onFocus() {
        let t = !1;
        try {
          t = this.node.current.matches(":focus-visible");
        } catch {
          t = !0;
        }
        !t ||
          !this.node.animationState ||
          (this.node.animationState.setActive("whileFocus", !0),
          (this.isActive = !0));
      }
      onBlur() {
        !this.isActive ||
          !this.node.animationState ||
          (this.node.animationState.setActive("whileFocus", !1),
          (this.isActive = !1));
      }
      mount() {
        this.unmount = Io(
          Co(this.node.current, "focus", () => this.onFocus()),
          Co(this.node.current, "blur", () => this.onBlur()),
        );
      }
      unmount() {}
    }
    function hy(e, t, n) {
      const { props: r } = e;
      if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
      e.animationState &&
        r.whileTap &&
        e.animationState.setActive("whileTap", n === "Start");
      const s = "onTap" + (n === "End" ? "" : n),
        i = r[s];
      i && de.postRender(() => i(t, $o(t)));
    }
    class ZM extends vr {
      mount() {
        const { current: t } = this.node;
        t &&
          (this.unmount = jA(
            t,
            (n, r) => (
              hy(this.node, r, "Start"),
              (s, { success: i }) => hy(this.node, s, i ? "End" : "Cancel")
            ),
            { useGlobalTarget: this.node.props.globalTapTarget },
          ));
      }
      unmount() {}
    }
    const Yd = new WeakMap(),
      dc = new WeakMap(),
      JM = (e) => {
        const t = Yd.get(e.target);
        t && t(e);
      },
      ej = (e) => {
        e.forEach(JM);
      };
    function tj({ root: e, ...t }) {
      const n = e || document;
      dc.has(n) || dc.set(n, {});
      const r = dc.get(n),
        s = JSON.stringify(t);
      return (
        r[s] || (r[s] = new IntersectionObserver(ej, { root: e, ...t })),
        r[s]
      );
    }
    function nj(e, t, n) {
      const r = tj(t);
      return (
        Yd.set(e, n),
        r.observe(e),
        () => {
          (Yd.delete(e), r.unobserve(e));
        }
      );
    }
    const rj = { some: 0, all: 1 };
    class sj extends vr {
      constructor() {
        (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
      }
      startObserver() {
        this.unmount();
        const { viewport: t = {} } = this.node.getProps(),
          { root: n, margin: r, amount: s = "some", once: i } = t,
          o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof s == "number" ? s : rj[s],
          },
          a = (l) => {
            const { isIntersecting: u } = l;
            if (
              this.isInView === u ||
              ((this.isInView = u), i && !u && this.hasEnteredView)
            )
              return;
            (u && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", u));
            const { onViewportEnter: c, onViewportLeave: d } =
                this.node.getProps(),
              f = u ? c : d;
            f && f(l);
          };
        return nj(this.node.current, o, a);
      }
      mount() {
        this.startObserver();
      }
      update() {
        if (typeof IntersectionObserver > "u") return;
        const { props: t, prevProps: n } = this.node;
        ["amount", "margin", "root"].some(ij(t, n)) && this.startObserver();
      }
      unmount() {}
    }
    function ij({ viewport: e = {} }, { viewport: t = {} } = {}) {
      return (n) => e[n] !== t[n];
    }
    const oj = {
        inView: { Feature: sj },
        tap: { Feature: ZM },
        focus: { Feature: XM },
        hover: { Feature: qM },
      },
      aj = { layout: { ProjectionNode: q1, MeasureLayout: ub } },
      lj = { ...OM, ...oj, ...QM, ...aj },
      K = kM(lj, RM),
      uj = () =>
        v.jsxs(K.div, {
          className: "text-center pixel-float",
          initial: { scale: 0.8, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { duration: 0.5, ease: "easeOut" },
          children: [
            v.jsx("h1", {
              className:
                "text-4xl md:text-6xl font-pixel text-primary logo-glow tracking-wider",
              children: "CODE",
            }),
            v.jsx("h1", {
              className:
                "text-4xl md:text-6xl font-pixel text-accent logo-glow tracking-wider mt-2",
              children: "MAFIA",
            }),
            v.jsx(K.div, {
              className: "mt-4 text-sm font-pixel text-foreground/70",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 0.5 },
              children: "Sabotage or Survive",
            }),
          ],
        }),
      Ci = ({ className: e = "", size: t = "md" }) => {
        const n = { sm: "w-16 h-8", md: "w-24 h-12", lg: "w-32 h-16" };
        return v.jsx(K.div, {
          className: `${n[t]} ${e}`,
          animate: { x: [0, 10, 0] },
          transition: { duration: 8, repeat: 1 / 0, ease: "easeInOut" },
          children: v.jsxs("div", {
            className: "relative w-full h-full",
            children: [
              v.jsx("div", {
                className: "absolute top-1/2 left-0 w-full h-1/2 bg-white",
              }),
              v.jsx("div", {
                className: "absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white",
              }),
              v.jsx("div", {
                className: "absolute top-0 left-1/3 w-1/3 h-1/2 bg-white",
              }),
            ],
          }),
        });
      },
      zo = ({ children: e }) =>
        v.jsxs("div", {
          className: "min-h-screen sky-bg relative overflow-hidden",
          children: [
            v.jsx(Ci, {
              className: "absolute top-10 left-10 opacity-90",
              size: "lg",
            }),
            v.jsx(Ci, {
              className: "absolute top-20 right-20 opacity-80",
              size: "md",
            }),
            v.jsx(Ci, {
              className: "absolute top-32 left-1/3 opacity-70",
              size: "sm",
            }),
            v.jsx(Ci, {
              className: "absolute top-16 right-1/3 opacity-85",
              size: "lg",
            }),
            v.jsx(Ci, {
              className: "absolute top-40 left-1/4 opacity-75",
              size: "md",
            }),
            v.jsx("div", { className: "relative z-10", children: e }),
            v.jsx("div", {
              className:
                "absolute bottom-0 left-0 right-0 h-8 bg-secondary opacity-50",
            }),
          ],
        }),
      cj = () =>
        v.jsx(K.div, {
          className: "w-full max-w-2xl",
          initial: { y: 50, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { duration: 0.6, delay: 0.3 },
          children: v.jsxs("div", {
            className: "pixel-box overflow-hidden bg-card",
            children: [
              v.jsxs("div", {
                className:
                  "bg-primary px-4 py-2 flex items-center justify-between border-b-4 border-border",
                children: [
                  v.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      v.jsx(HC, {
                        className: "w-4 h-4 text-primary-foreground",
                      }),
                      v.jsx("span", {
                        className: "font-pixel text-sm text-primary-foreground",
                        children: "Message from Developers",
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className: "flex gap-2",
                    children: [
                      v.jsx("button", {
                        className:
                          "w-5 h-5 bg-muted hover:brightness-110 flex items-center justify-center",
                        children: v.jsx(GC, { className: "w-3 h-3" }),
                      }),
                      v.jsx("button", {
                        className:
                          "w-5 h-5 bg-muted hover:brightness-110 flex items-center justify-center",
                        children: v.jsx(KC, { className: "w-3 h-3" }),
                      }),
                      v.jsx("button", {
                        className:
                          "w-5 h-5 bg-destructive hover:brightness-110 flex items-center justify-center",
                        children: v.jsx(Sx, {
                          className: "w-3 h-3 text-white",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "p-6",
                children: [
                  v.jsxs("div", {
                    className: "mb-4 pb-3 border-b-2 border-border",
                    children: [
                      v.jsx("span", {
                        className: "font-pixel text-xs text-muted-foreground",
                        children: "Subject:",
                      }),
                      v.jsx("h2", {
                        className:
                          "font-pixel text-base font-bold text-foreground mt-1",
                        children:
                          "Message from the devs -- Ahmad J. & Rayyan K.",
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      v.jsx(K.p, {
                        className:
                          "font-pixel text-sm leading-relaxed text-foreground",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.5 },
                        children:
                          "Hi everyone! Thank you all so much for your support as we are working hard to release the first version of CodeMafia!",
                      }),
                      v.jsxs(K.p, {
                        className:
                          "font-pixel text-sm leading-relaxed text-foreground",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 0.7 },
                        children: [
                          "CodeMafia is a game about 4-5 developers who work together to write some code, but amongst them...there is an",
                          " ",
                          v.jsx("span", {
                            className: "text-destructive font-bold",
                            children: "impostor",
                          }),
                          ".",
                        ],
                      }),
                      v.jsxs(K.div, {
                        className:
                          "bg-primary/10 border-2 border-primary p-4 rounded",
                        initial: { opacity: 0, scale: 0.95 },
                        animate: { opacity: 1, scale: 1 },
                        transition: { delay: 0.9 },
                        children: [
                          v.jsx("p", {
                            className:
                              "font-pixel text-sm leading-relaxed text-foreground mb-3",
                            children:
                              "If you're interested in staying in the loop, fill out this form and we'll get back to you:",
                          }),
                          v.jsx("a", {
                            href: "https://web.archive.org/web/20260129190221/https://tally.so/r/aQ2kq9",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "font-pixel text-sm text-primary hover:brightness-110 underline break-all",
                            children:
                              "https://web.archive.org/web/20260129190221/https://tally.so/r/aQ2kq9",
                          }),
                        ],
                      }),
                      v.jsx(K.p, {
                        className:
                          "font-pixel text-sm leading-relaxed text-foreground",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 1.1 },
                        children: "Thanks, and see you soon!",
                      }),
                      v.jsx(K.p, {
                        className:
                          "font-pixel text-sm leading-relaxed text-foreground font-bold",
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 1.3 },
                        children: "R.K & A.J",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      dj = () =>
        v.jsx(zo, {
          children: v.jsxs("div", {
            className:
              "min-h-screen flex flex-col items-center justify-center p-4",
            children: [
              v.jsx(K.div, {
                initial: { y: -50, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { duration: 0.6 },
                children: v.jsx(uj, {}),
              }),
              v.jsx(K.div, {
                className: "mt-12 w-full flex justify-center",
                initial: { y: 50, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { duration: 0.6, delay: 0.3 },
                children: v.jsx(cj, {}),
              }),
            ],
          }),
        }),
      Qd = {
        "data-structures": "Data Structures & Algorithms",
        oop: "Object-Oriented Programming",
        security: "Security",
        frontend: "Front-End",
        backend: "Back-End",
      },
      Xr = {
        red: "#e53935",
        blue: "#1e88e5",
        green: "#43a047",
        orange: "#fb8c00",
        yellow: "#fdd835",
        purple: "#8e24aa",
        pink: "#ec407a",
      },
      cb = ({
        player: e,
        isCurrentPlayer: t = !1,
        showVoteCount: n,
        isVotable: r = !1,
        onVote: s,
        isVoted: i = !1,
      }) => {
        const o = Xr[e.color];
        return v.jsxs(K.div, {
          className: `pixel-box p-3 flex items-center gap-3 ${r ? "cursor-pointer hover:brightness-110" : ""} ${i ? "ring-4 ring-primary" : ""} ${e.isAlive ? "" : "opacity-50 grayscale"}`,
          whileHover: r ? { scale: 1.02 } : {},
          whileTap: r ? { scale: 0.98 } : {},
          onClick: r ? s : void 0,
          initial: { x: -20, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          children: [
            v.jsx("div", {
              className: "w-8 h-8 border-2 border-border",
              style: { backgroundColor: o },
            }),
            v.jsx("div", {
              className: "flex-1 min-w-0",
              children: v.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  v.jsx("span", {
                    className: "font-pixel text-xs truncate",
                    style: { color: o },
                    children: e.name,
                  }),
                  t &&
                    v.jsx("span", {
                      className: "text-xs font-pixel text-muted-foreground",
                      children: "(You)",
                    }),
                ],
              }),
            }),
            v.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.isHost && v.jsx(WC, { className: "w-4 h-4 text-warning" }),
                e.isReady &&
                  v.jsx("div", {
                    className:
                      "w-5 h-5 bg-success flex items-center justify-center",
                    children: v.jsx(BC, { className: "w-3 h-3 text-white" }),
                  }),
                n !== void 0 &&
                  n > 0 &&
                  v.jsx("div", {
                    className:
                      "px-2 py-1 bg-destructive text-destructive-foreground font-pixel text-xs",
                    children: n,
                  }),
                !e.isAlive &&
                  v.jsx("span", {
                    className: "font-pixel text-xs text-destructive",
                    children: "OUT",
                  }),
              ],
            }),
          ],
        });
      },
      fj = ({ color: e, size: t = "md" }) => {
        const n = Xr[e],
          r = { sm: "w-4 h-4", md: "w-6 h-6", lg: "w-8 h-8" };
        return v.jsx("div", {
          className: `${r[t]} border-2 border-border`,
          style: { backgroundColor: n },
        });
      },
      hj = () => {
        const {
            lobbyId: e,
            players: t,
            currentPlayerId: n,
            setReady: r,
          } = ot(),
          s = t.find((a) => a.id === n),
          i = t.length >= 2 && t.every((a) => a.isReady),
          o = () => {
            e &&
              (navigator.clipboard.writeText(e),
              ek.success("Lobby ID copied!"));
          };
        return v.jsx(zo, {
          children: v.jsxs("div", {
            className: "min-h-screen flex flex-col items-center p-4 pt-8",
            children: [
              v.jsx(K.div, {
                className: "text-center mb-6",
                initial: { y: -20, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                children: v.jsx("h1", {
                  className:
                    "text-2xl md:text-3xl font-pixel text-primary pixel-text-shadow",
                  children: "LOBBY",
                }),
              }),
              v.jsxs(K.div, {
                className: "pixel-box p-4 mb-6 flex items-center gap-4",
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                children: [
                  v.jsxs("div", {
                    children: [
                      v.jsx("p", {
                        className:
                          "text-xs font-pixel text-muted-foreground mb-1",
                        children: "Lobby Code:",
                      }),
                      v.jsx("p", {
                        className:
                          "text-xl font-pixel text-primary tracking-widest",
                        children: e,
                      }),
                    ],
                  }),
                  v.jsx("button", {
                    onClick: o,
                    className: "pixel-btn-ghost p-2",
                    title: "Copy lobby ID",
                    children: v.jsx(UC, { className: "w-5 h-5" }),
                  }),
                ],
              }),
              v.jsxs(K.div, {
                className: "w-full max-w-md pixel-box p-4 mb-6",
                initial: { y: 20, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { delay: 0.2 },
                children: [
                  v.jsxs("div", {
                    className: "flex items-center gap-2 mb-4",
                    children: [
                      v.jsx(hd, { className: "w-5 h-5 text-primary" }),
                      v.jsxs("h2", {
                        className: "font-pixel text-sm text-foreground",
                        children: ["Players (", t.length, "/5)"],
                      }),
                    ],
                  }),
                  v.jsx("div", {
                    className: "space-y-2",
                    children: t.map((a, l) =>
                      v.jsx(
                        K.div,
                        {
                          initial: { x: -20, opacity: 0 },
                          animate: { x: 0, opacity: 1 },
                          transition: { delay: l * 0.1 },
                          children: v.jsx(cb, {
                            player: a,
                            isCurrentPlayer: a.id === n,
                          }),
                        },
                        a.id,
                      ),
                    ),
                  }),
                  t.length < 2 &&
                    v.jsx("p", {
                      className:
                        "text-xs font-pixel text-muted-foreground text-center mt-4",
                      children: "Waiting for more players...",
                    }),
                ],
              }),
              v.jsx(K.div, {
                initial: { y: 20, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { delay: 0.4 },
                children: v.jsx("button", {
                  onClick: () => r(!(s != null && s.isReady)),
                  className: `${s != null && s.isReady ? "pixel-btn-ghost" : "pixel-btn-secondary"} text-sm px-8 py-4`,
                  children: s != null && s.isReady ? "Not Ready" : "Ready!",
                }),
              }),
              i &&
                v.jsx(K.p, {
                  className: "mt-4 text-xs font-pixel text-success",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  children: "All players ready! Starting...",
                }),
            ],
          }),
        });
      },
      pj = "modulepreload",
      mj = function (e) {
        return "/" + e;
      },
      py = {},
      qt = function (t, n, r) {
        let s = Promise.resolve();
        if (n && n.length > 0) {
          document.getElementsByTagName("link");
          const o = document.querySelector("meta[property=csp-nonce]"),
            a =
              (o == null ? void 0 : o.nonce) ||
              (o == null ? void 0 : o.getAttribute("nonce"));
          s = Promise.allSettled(
            n.map((l) => {
              if (((l = mj(l)), l in py)) return;
              py[l] = !0;
              const u = l.endsWith(".css"),
                c = u ? '[rel="stylesheet"]' : "";
              if (document.querySelector(`link[href="${l}"]${c}`)) return;
              const d = document.createElement("link");
              if (
                ((d.rel = u ? "stylesheet" : pj),
                u || (d.as = "script"),
                (d.crossOrigin = ""),
                (d.href = l),
                a && d.setAttribute("nonce", a),
                document.head.appendChild(d),
                u)
              )
                return new Promise((f, h) => {
                  (d.addEventListener("load", f),
                    d.addEventListener("error", () =>
                      h(new Error(`Unable to preload CSS for ${l}`)),
                    ));
                });
            }),
          );
        }
        function i(o) {
          const a = new Event("vite:preloadError", { cancelable: !0 });
          if (((a.payload = o), window.dispatchEvent(a), !a.defaultPrevented))
            throw o;
        }
        return s.then((o) => {
          for (const a of o || []) a.status === "rejected" && i(a.reason);
          return t().catch(i);
        });
      };
    var gj = Object.defineProperty,
      U = (e, t) => gj(e, "name", { value: t, configurable: !0 }),
      db = ((e) =>
        typeof require < "u"
          ? require
          : typeof Proxy < "u"
            ? new Proxy(e, {
                get: (t, n) => (typeof require < "u" ? require : t)[n],
              })
            : e)(function (e) {
        if (typeof require < "u") return require.apply(this, arguments);
        throw Error('Dynamic require of "' + e + '" is not supported');
      }),
      yj = (() => {
        for (var e = new Uint8Array(128), t = 0; t < 64; t++)
          e[t < 26 ? t + 65 : t < 52 ? t + 71 : t < 62 ? t - 4 : t * 4 - 205] =
            t;
        return (n) => {
          for (
            var r = n.length,
              s = new Uint8Array(
                (((r - (n[r - 1] == "=") - (n[r - 2] == "=")) * 3) / 4) | 0,
              ),
              i = 0,
              o = 0;
            i < r;
          ) {
            var a = e[n.charCodeAt(i++)],
              l = e[n.charCodeAt(i++)],
              u = e[n.charCodeAt(i++)],
              c = e[n.charCodeAt(i++)];
            ((s[o++] = (a << 2) | (l >> 4)),
              (s[o++] = (l << 4) | (u >> 2)),
              (s[o++] = (u << 6) | c));
          }
          return s;
        };
      })();
    function fb(e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    }
    U(fb, "_isNumber");
    function pr(e) {
      return e.charAt(0).toUpperCase() + e.substring(1);
    }
    U(pr, "_capitalize");
    function uu(e) {
      return function () {
        return this[e];
      };
    }
    U(uu, "_getter");
    var ls = ["isConstructor", "isEval", "isNative", "isToplevel"],
      us = ["columnNumber", "lineNumber"],
      cs = ["fileName", "functionName", "source"],
      vj = ["args"],
      xj = ["evalOrigin"],
      wa = ls.concat(us, cs, vj, xj);
    function ht(e) {
      if (e)
        for (var t = 0; t < wa.length; t++)
          e[wa[t]] !== void 0 && this["set" + pr(wa[t])](e[wa[t]]);
    }
    U(ht, "StackFrame");
    ht.prototype = {
      getArgs: U(function () {
        return this.args;
      }, "getArgs"),
      setArgs: U(function (e) {
        if (Object.prototype.toString.call(e) !== "[object Array]")
          throw new TypeError("Args must be an Array");
        this.args = e;
      }, "setArgs"),
      getEvalOrigin: U(function () {
        return this.evalOrigin;
      }, "getEvalOrigin"),
      setEvalOrigin: U(function (e) {
        if (e instanceof ht) this.evalOrigin = e;
        else if (e instanceof Object) this.evalOrigin = new ht(e);
        else throw new TypeError("Eval Origin must be an Object or StackFrame");
      }, "setEvalOrigin"),
      toString: U(function () {
        var e = this.getFileName() || "",
          t = this.getLineNumber() || "",
          n = this.getColumnNumber() || "",
          r = this.getFunctionName() || "";
        return this.getIsEval()
          ? e
            ? "[eval] (" + e + ":" + t + ":" + n + ")"
            : "[eval]:" + t + ":" + n
          : r
            ? r + " (" + e + ":" + t + ":" + n + ")"
            : e + ":" + t + ":" + n;
      }, "toString"),
    };
    ht.fromString = U(function (e) {
      var t = e.indexOf("("),
        n = e.lastIndexOf(")"),
        r = e.substring(0, t),
        s = e.substring(t + 1, n).split(","),
        i = e.substring(n + 1);
      if (i.indexOf("@") === 0)
        var o = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i, ""),
          a = o[1],
          l = o[2],
          u = o[3];
      return new ht({
        functionName: r,
        args: s || void 0,
        fileName: a,
        lineNumber: l || void 0,
        columnNumber: u || void 0,
      });
    }, "StackFrame$$fromString");
    for (Er = 0; Er < ls.length; Er++)
      ((ht.prototype["get" + pr(ls[Er])] = uu(ls[Er])),
        (ht.prototype["set" + pr(ls[Er])] = (function (e) {
          return function (t) {
            this[e] = !!t;
          };
        })(ls[Er])));
    var Er;
    for (Cr = 0; Cr < us.length; Cr++)
      ((ht.prototype["get" + pr(us[Cr])] = uu(us[Cr])),
        (ht.prototype["set" + pr(us[Cr])] = (function (e) {
          return function (t) {
            if (!fb(t)) throw new TypeError(e + " must be a Number");
            this[e] = Number(t);
          };
        })(us[Cr])));
    var Cr;
    for (Pr = 0; Pr < cs.length; Pr++)
      ((ht.prototype["get" + pr(cs[Pr])] = uu(cs[Pr])),
        (ht.prototype["set" + pr(cs[Pr])] = (function (e) {
          return function (t) {
            this[e] = String(t);
          };
        })(cs[Pr])));
    var Pr,
      fc = ht;
    function hb() {
      var e = /^\s*at .*(\S+:\d+|\(native\))/m,
        t = /^(eval@)?(\[native code])?$/;
      return {
        parse: U(function (n) {
          if (n.stack && n.stack.match(e)) return this.parseV8OrIE(n);
          if (n.stack) return this.parseFFOrSafari(n);
          throw new Error("Cannot parse given Error object");
        }, "ErrorStackParser$$parse"),
        extractLocation: U(function (n) {
          if (n.indexOf(":") === -1) return [n];
          var r = /(.+?)(?::(\d+))?(?::(\d+))?$/,
            s = r.exec(n.replace(/[()]/g, ""));
          return [s[1], s[2] || void 0, s[3] || void 0];
        }, "ErrorStackParser$$extractLocation"),
        parseV8OrIE: U(function (n) {
          var r = n.stack
            .split(
              `
`,
            )
            .filter(function (s) {
              return !!s.match(e);
            }, this);
          return r.map(function (s) {
            s.indexOf("(eval ") > -1 &&
              (s = s
                .replace(/eval code/g, "eval")
                .replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
            var i = s
                .replace(/^\s+/, "")
                .replace(/\(eval code/g, "(")
                .replace(/^.*?\s+/, ""),
              o = i.match(/ (\(.+\)$)/);
            i = o ? i.replace(o[0], "") : i;
            var a = this.extractLocation(o ? o[1] : i),
              l = (o && i) || void 0,
              u = ["eval", "<anonymous>"].indexOf(a[0]) > -1 ? void 0 : a[0];
            return new fc({
              functionName: l,
              fileName: u,
              lineNumber: a[1],
              columnNumber: a[2],
              source: s,
            });
          }, this);
        }, "ErrorStackParser$$parseV8OrIE"),
        parseFFOrSafari: U(function (n) {
          var r = n.stack
            .split(
              `
`,
            )
            .filter(function (s) {
              return !s.match(t);
            }, this);
          return r.map(function (s) {
            if (
              (s.indexOf(" > eval") > -1 &&
                (s = s.replace(
                  / line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,
                  ":$1",
                )),
              s.indexOf("@") === -1 && s.indexOf(":") === -1)
            )
              return new fc({ functionName: s });
            var i = /((.*".+"[^@]*)?[^@]*)(?:@)/,
              o = s.match(i),
              a = o && o[1] ? o[1] : void 0,
              l = this.extractLocation(s.replace(i, ""));
            return new fc({
              functionName: a,
              fileName: l[0],
              lineNumber: l[1],
              columnNumber: l[2],
              source: s,
            });
          }, this);
        }, "ErrorStackParser$$parseFFOrSafari"),
      };
    }
    U(hb, "ErrorStackParser");
    var wj = new hb(),
      bj = wj;
    function pb() {
      if (typeof API < "u" && API !== globalThis.API) return API.runtimeEnv;
      let e = typeof Bun < "u",
        t = typeof Deno < "u",
        n =
          typeof process == "object" &&
          typeof process.versions == "object" &&
          typeof process.versions.node == "string" &&
          !process.browser,
        r =
          typeof navigator == "object" &&
          typeof navigator.userAgent == "string" &&
          navigator.userAgent.indexOf("Chrome") === -1 &&
          navigator.userAgent.indexOf("Safari") > -1;
      return mb({
        IN_BUN: e,
        IN_DENO: t,
        IN_NODE: n,
        IN_SAFARI: r,
        IN_SHELL: typeof read == "function" && typeof load == "function",
      });
    }
    U(pb, "getGlobalRuntimeEnv");
    var Be = pb();
    function mb(e) {
      let t =
          e.IN_NODE &&
          typeof ef < "u" &&
          ef.exports &&
          typeof db == "function" &&
          typeof __dirname == "string",
        n = e.IN_NODE && !t,
        r = !e.IN_NODE && !e.IN_DENO && !e.IN_BUN,
        s =
          r &&
          typeof window < "u" &&
          typeof window.document < "u" &&
          typeof document.createElement == "function" &&
          "sessionStorage" in window &&
          typeof globalThis.importScripts != "function",
        i =
          r &&
          typeof globalThis.WorkerGlobalScope < "u" &&
          typeof globalThis.self < "u" &&
          globalThis.self instanceof globalThis.WorkerGlobalScope;
      return {
        ...e,
        IN_BROWSER: r,
        IN_BROWSER_MAIN_THREAD: s,
        IN_BROWSER_WEB_WORKER: i,
        IN_NODE_COMMONJS: t,
        IN_NODE_ESM: n,
      };
    }
    U(mb, "calculateDerivedFlags");
    var gb, qd, yb, my, Hh;
    async function Kh() {
      if (
        !Be.IN_NODE ||
        ((gb = (
          await qt(async () => {
            const { default: i } =
              await import("./__vite-browser-external-BIHI7g3E.js");
            return { default: i };
          }, [])
        ).default),
        (my = await qt(
          () => import("./__vite-browser-external-BIHI7g3E.js"),
          [],
        )),
        (Hh = await qt(
          () => import("./__vite-browser-external-BIHI7g3E.js"),
          [],
        )),
        (yb = (
          await qt(async () => {
            const { default: i } =
              await import("./__vite-browser-external-BIHI7g3E.js");
            return { default: i };
          }, [])
        ).default),
        (qd = await qt(
          () => import("./__vite-browser-external-BIHI7g3E.js"),
          [],
        )),
        (Gh = qd.sep),
        typeof db < "u")
      )
        return;
      let e = my,
        t = await qt(() => import("./__vite-browser-external-BIHI7g3E.js"), []),
        n = await qt(() => import("./__vite-browser-external-BIHI7g3E.js"), []),
        r = await qt(() => import("./__vite-browser-external-BIHI7g3E.js"), []),
        s = { fs: e, crypto: t, ws: n, child_process: r };
      globalThis.require = function (i) {
        return s[i];
      };
    }
    U(Kh, "initNodeModules");
    function vb(e, t) {
      return qd.resolve(t || ".", e);
    }
    U(vb, "node_resolvePath");
    function xb(e, t) {
      return (t === void 0 && (t = location), new URL(e, t).toString());
    }
    U(xb, "browser_resolvePath");
    var Qi;
    Be.IN_NODE
      ? (Qi = vb)
      : Be.IN_SHELL
        ? (Qi = U((e) => e, "resolvePath"))
        : (Qi = xb);
    var Gh;
    Be.IN_NODE || (Gh = "/");
    function wb(e, t) {
      return (
        e.startsWith("file://") && (e = e.slice(7)),
        e.includes("://")
          ? { response: fetch(e) }
          : {
              binary: Hh.readFile(e).then(
                (n) => new Uint8Array(n.buffer, n.byteOffset, n.byteLength),
              ),
            }
      );
    }
    U(wb, "node_getBinaryResponse");
    function bb(e, t) {
      if ((e.startsWith("file://") && (e = e.slice(7)), e.includes("://")))
        throw new Error("Shell cannot fetch urls");
      return { binary: Promise.resolve(new Uint8Array(readbuffer(e))) };
    }
    U(bb, "shell_getBinaryResponse");
    function Sb(e, t) {
      let n = new URL(e, location);
      return { response: fetch(n, t ? { integrity: t } : {}) };
    }
    U(Sb, "browser_getBinaryResponse");
    var qi;
    Be.IN_NODE ? (qi = wb) : Be.IN_SHELL ? (qi = bb) : (qi = Sb);
    async function Tb(e, t) {
      let { response: n, binary: r } = qi(e, t);
      if (r) return r;
      let s = await n;
      if (!s.ok) throw new Error(`Failed to load '${e}': request failed.`);
      return new Uint8Array(await s.arrayBuffer());
    }
    U(Tb, "loadBinaryFile");
    var Oi;
    if (Be.IN_BROWSER_MAIN_THREAD)
      Oi = U(async (e) => await import(e), "loadScript");
    else if (Be.IN_BROWSER_WEB_WORKER)
      Oi = U(async (e) => {
        try {
          globalThis.importScripts(e);
        } catch (t) {
          if (t instanceof TypeError) await import(e);
          else throw t;
        }
      }, "loadScript");
    else if (Be.IN_NODE) Oi = Eb;
    else if (Be.IN_SHELL) Oi = load;
    else throw new Error("Cannot determine runtime environment");
    async function Eb(e) {
      (e.startsWith("file://") && (e = e.slice(7)),
        e.includes("://")
          ? yb.runInThisContext(await (await fetch(e)).text())
          : await import(gb.pathToFileURL(e).href));
    }
    U(Eb, "nodeLoadScript");
    async function Cb(e) {
      if (Be.IN_NODE) {
        await Kh();
        let t = await Hh.readFile(e, { encoding: "utf8" });
        return JSON.parse(t);
      } else if (Be.IN_SHELL) {
        let t = read(e);
        return JSON.parse(t);
      } else return await (await fetch(e)).json();
    }
    U(Cb, "loadLockFile");
    async function Pb() {
      if (Be.IN_NODE_COMMONJS) return __dirname;
      let e;
      try {
        throw new Error();
      } catch (r) {
        e = r;
      }
      let t = bj.parse(e)[0].fileName;
      if (
        (Be.IN_NODE && !t.startsWith("file://") && (t = `file://${t}`),
        Be.IN_NODE_ESM)
      ) {
        let r = await qt(
          () => import("./__vite-browser-external-BIHI7g3E.js"),
          [],
        );
        return (
          await qt(async () => {
            const { fileURLToPath: s } =
              await import("./__vite-browser-external-BIHI7g3E.js");
            return { fileURLToPath: s };
          }, [])
        ).fileURLToPath(r.dirname(t));
      }
      let n = t.lastIndexOf(Gh);
      if (n === -1)
        throw new Error(
          "Could not extract indexURL path from pyodide module location. Please pass the indexURL explicitly to loadPyodide.",
        );
      return t.slice(0, n);
    }
    U(Pb, "calculateDirname");
    function kb(e) {
      var t;
      return (
        e.substring(0, e.lastIndexOf("/") + 1) ||
        ((t = globalThis.location) == null ? void 0 : t.toString()) ||
        "."
      );
    }
    U(kb, "calculateInstallBaseUrl");
    function Rb(e) {
      let t = e.FS,
        n = e.FS.filesystems.MEMFS,
        r = e.PATH,
        s = {
          DIR_MODE: 16895,
          FILE_MODE: 33279,
          mount: U(function (i) {
            if (!i.opts.fileSystemHandle)
              throw new Error("opts.fileSystemHandle is required");
            return n.mount.apply(null, arguments);
          }, "mount"),
          syncfs: U(async (i, o, a) => {
            try {
              let l = s.getLocalSet(i),
                u = await s.getRemoteSet(i),
                c = o ? u : l,
                d = o ? l : u;
              (await s.reconcile(i, c, d), a(null));
            } catch (l) {
              a(l);
            }
          }, "syncfs"),
          getLocalSet: U((i) => {
            let o = Object.create(null);
            function a(c) {
              return c !== "." && c !== "..";
            }
            U(a, "isRealDir");
            function l(c) {
              return (d) => r.join2(c, d);
            }
            U(l, "toAbsolute");
            let u = t.readdir(i.mountpoint).filter(a).map(l(i.mountpoint));
            for (; u.length; ) {
              let c = u.pop(),
                d = t.stat(c);
              (t.isDir(d.mode) &&
                u.push.apply(u, t.readdir(c).filter(a).map(l(c))),
                (o[c] = { timestamp: d.mtime, mode: d.mode }));
            }
            return { type: "local", entries: o };
          }, "getLocalSet"),
          getRemoteSet: U(async (i) => {
            let o = Object.create(null),
              a = await Sj(i.opts.fileSystemHandle);
            for (let [l, u] of a)
              l !== "." &&
                (o[r.join2(i.mountpoint, l)] = {
                  timestamp:
                    u.kind === "file"
                      ? new Date((await u.getFile()).lastModified)
                      : new Date(),
                  mode: u.kind === "file" ? s.FILE_MODE : s.DIR_MODE,
                });
            return { type: "remote", entries: o, handles: a };
          }, "getRemoteSet"),
          loadLocalEntry: U((i) => {
            let o = t.lookupPath(i, {}).node,
              a = t.stat(i);
            if (t.isDir(a.mode)) return { timestamp: a.mtime, mode: a.mode };
            if (t.isFile(a.mode))
              return (
                (o.contents = n.getFileDataAsTypedArray(o)),
                { timestamp: a.mtime, mode: a.mode, contents: o.contents }
              );
            throw new Error("node type not supported");
          }, "loadLocalEntry"),
          storeLocalEntry: U((i, o) => {
            if (t.isDir(o.mode)) t.mkdirTree(i, o.mode);
            else if (t.isFile(o.mode))
              t.writeFile(i, o.contents, { canOwn: !0 });
            else throw new Error("node type not supported");
            (t.chmod(i, o.mode), t.utime(i, o.timestamp, o.timestamp));
          }, "storeLocalEntry"),
          removeLocalEntry: U((i) => {
            var o = t.stat(i);
            t.isDir(o.mode) ? t.rmdir(i) : t.isFile(o.mode) && t.unlink(i);
          }, "removeLocalEntry"),
          loadRemoteEntry: U(async (i) => {
            if (i.kind === "file") {
              let o = await i.getFile();
              return {
                contents: new Uint8Array(await o.arrayBuffer()),
                mode: s.FILE_MODE,
                timestamp: new Date(o.lastModified),
              };
            } else {
              if (i.kind === "directory")
                return { mode: s.DIR_MODE, timestamp: new Date() };
              throw new Error("unknown kind: " + i.kind);
            }
          }, "loadRemoteEntry"),
          storeRemoteEntry: U(async (i, o, a) => {
            let l = i.get(r.dirname(o)),
              u = t.isFile(a.mode)
                ? await l.getFileHandle(r.basename(o), { create: !0 })
                : await l.getDirectoryHandle(r.basename(o), { create: !0 });
            if (u.kind === "file") {
              let c = await u.createWritable();
              (await c.write(a.contents), await c.close());
            }
            i.set(o, u);
          }, "storeRemoteEntry"),
          removeRemoteEntry: U(async (i, o) => {
            (await i.get(r.dirname(o)).removeEntry(r.basename(o)), i.delete(o));
          }, "removeRemoteEntry"),
          reconcile: U(async (i, o, a) => {
            let l = 0,
              u = [];
            (Object.keys(o.entries).forEach(function (f) {
              let h = o.entries[f],
                b = a.entries[f];
              (!b ||
                (t.isFile(h.mode) &&
                  h.timestamp.getTime() > b.timestamp.getTime())) &&
                (u.push(f), l++);
            }),
              u.sort());
            let c = [];
            if (
              (Object.keys(a.entries).forEach(function (f) {
                o.entries[f] || (c.push(f), l++);
              }),
              c.sort().reverse(),
              !l)
            )
              return;
            let d = o.type === "remote" ? o.handles : a.handles;
            for (let f of u) {
              let h = r.normalize(f.replace(i.mountpoint, "/")).substring(1);
              if (a.type === "local") {
                let b = d.get(h),
                  g = await s.loadRemoteEntry(b);
                s.storeLocalEntry(f, g);
              } else {
                let b = s.loadLocalEntry(f);
                await s.storeRemoteEntry(d, h, b);
              }
            }
            for (let f of c)
              if (a.type === "local") s.removeLocalEntry(f);
              else {
                let h = r.normalize(f.replace(i.mountpoint, "/")).substring(1);
                await s.removeRemoteEntry(d, h);
              }
          }, "reconcile"),
        };
      e.FS.filesystems.NATIVEFS_ASYNC = s;
    }
    U(Rb, "initializeNativeFS");
    var Sj = U(async (e) => {
        let t = [];
        async function n(s) {
          for await (let i of s.values())
            (t.push(i), i.kind === "directory" && (await n(i)));
        }
        (U(n, "collect"), await n(e));
        let r = new Map();
        r.set(".", e);
        for (let s of t) {
          let i = (await e.resolve(s)).join("/");
          r.set(i, s);
        }
        return r;
      }, "getFsHandles"),
      Tj = yj(
        "AGFzbQEAAAABDANfAGAAAW9gAW8BfwMDAgECByECD2NyZWF0ZV9zZW50aW5lbAAAC2lzX3NlbnRpbmVsAAEKEwIHAPsBAPsbCwkAIAD7GvsUAAs=",
      ),
      Ej = (async function () {
        if (
          !(
            globalThis.navigator &&
            (/iPad|iPhone|iPod/.test(navigator.userAgent) ||
              (navigator.platform === "MacIntel" &&
                typeof navigator.maxTouchPoints < "u" &&
                navigator.maxTouchPoints > 1))
          )
        )
          try {
            let e = await WebAssembly.compile(Tj);
            return await WebAssembly.instantiate(e);
          } catch (e) {
            if (e instanceof WebAssembly.CompileError) return;
            throw e;
          }
      })();
    async function _b() {
      let e = await Ej;
      if (e) return e.exports;
      let t = Symbol("error marker");
      return {
        create_sentinel: U(() => t, "create_sentinel"),
        is_sentinel: U((n) => n === t, "is_sentinel"),
      };
    }
    U(_b, "getSentinelImport");
    function Nb(e) {
      let t = { config: e, runtimeEnv: Be },
        n = {
          noImageDecoding: !0,
          noAudioDecoding: !0,
          noWasmDecoding: !1,
          preRun: Lb(e),
          print: e.stdout,
          printErr: e.stderr,
          onExit(r) {
            n.exitCode = r;
          },
          thisProgram: e._sysExecutable,
          arguments: e.args,
          API: t,
          locateFile: U((r) => e.indexURL + r, "locateFile"),
          instantiateWasm: Ib(e.indexURL),
        };
      return n;
    }
    U(Nb, "createSettings");
    function Ab(e) {
      return function (t) {
        let n = "/";
        try {
          t.FS.mkdirTree(e);
        } catch (r) {
          (console.error(
            `Error occurred while making a home directory '${e}':`,
          ),
            console.error(r),
            console.error(`Using '${n}' for a home directory instead`),
            (e = n));
        }
        t.FS.chdir(e);
      };
    }
    U(Ab, "createHomeDirectory");
    function Ob(e) {
      return function (t) {
        Object.assign(t.ENV, e);
      };
    }
    U(Ob, "setEnvironment");
    function Mb(e) {
      return e
        ? [
            async (t) => {
              t.addRunDependency("fsInitHook");
              try {
                await e(t.FS, { sitePackages: t.API.sitePackages });
              } finally {
                t.removeRunDependency("fsInitHook");
              }
            },
          ]
        : [];
    }
    U(Mb, "callFsInitHook");
    function jb(e) {
      let t = e.HEAPU32[e._Py_Version >>> 2],
        n = (t >>> 24) & 255,
        r = (t >>> 16) & 255,
        s = (t >>> 8) & 255;
      return [n, r, s];
    }
    U(jb, "computeVersionTuple");
    function Db(e) {
      let t = Tb(e);
      return async (n) => {
        n.API.pyVersionTuple = jb(n);
        let [r, s] = n.API.pyVersionTuple;
        (n.FS.mkdirTree("/lib"),
          (n.API.sitePackages = `/lib/python${r}.${s}/site-packages`),
          n.FS.mkdirTree(n.API.sitePackages),
          n.addRunDependency("install-stdlib"));
        try {
          let i = await t;
          n.FS.writeFile(`/lib/python${r}${s}.zip`, i);
        } catch (i) {
          (console.error(
            "Error occurred while installing the standard library:",
          ),
            console.error(i));
        } finally {
          n.removeRunDependency("install-stdlib");
        }
      };
    }
    U(Db, "installStdlib");
    function Lb(e) {
      let t;
      return (
        e.stdLibURL != null
          ? (t = e.stdLibURL)
          : (t = e.indexURL + "python_stdlib.zip"),
        [Db(t), Ab(e.env.HOME), Ob(e.env), Rb, ...Mb(e.fsInit)]
      );
    }
    U(Lb, "getFileSystemInitializationFuncs");
    function Ib(e) {
      if (typeof WasmOffsetConverter < "u") return;
      let { binary: t, response: n } = qi(e + "pyodide.asm.wasm"),
        r = _b();
      return function (s, i) {
        return (
          (async function () {
            s.sentinel = await r;
            try {
              let o;
              n
                ? (o = await WebAssembly.instantiateStreaming(n, s))
                : (o = await WebAssembly.instantiate(await t, s));
              let { instance: a, module: l } = o;
              i(a, l);
            } catch (o) {
              (console.warn("wasm instantiation failed!"), console.warn(o));
            }
          })(),
          {}
        );
      };
    }
    U(Ib, "getInstantiateWasmFunc");
    var Cj = "0.29.2";
    function Mi(e) {
      return e === void 0 || e.endsWith("/") ? e : e + "/";
    }
    U(Mi, "withTrailingSlash");
    var Xd = Cj;
    async function Fb(e = {}) {
      var s, i;
      if ((await Kh(), e.lockFileContents && e.lockFileURL))
        throw new Error("Can't pass both lockFileContents and lockFileURL");
      let t = e.indexURL || (await Pb());
      if (
        ((t = Mi(Qi(t))),
        (e.packageBaseUrl = Mi(e.packageBaseUrl)),
        (e.cdnUrl = Mi(
          e.packageBaseUrl ??
            `https://web.archive.org/web/20260129190221/https://cdn.jsdelivr.net/pyodide/v${Xd}/full/`,
        )),
        !e.lockFileContents)
      ) {
        let o = e.lockFileURL ?? t + "pyodide-lock.json";
        ((e.lockFileContents = Cb(o)),
          e.packageBaseUrl ?? (e.packageBaseUrl = kb(o)));
      }
      ((e.indexURL = t),
        e.packageCacheDir && (e.packageCacheDir = Mi(Qi(e.packageCacheDir))));
      let n = {
          fullStdLib: !1,
          jsglobals: globalThis,
          stdin: globalThis.prompt ? () => globalThis.prompt() : void 0,
          args: [],
          env: {},
          packages: [],
          packageCacheDir: e.packageBaseUrl,
          enableRunUntilComplete: !0,
          checkAPIVersion: !0,
          BUILD_ID:
            "02af97d1069c4309880e46f2948861ea1faae5dbb49c20d5d5970aa9ae912fd4",
        },
        r = Object.assign(n, e);
      return (
        (s = r.env).HOME ?? (s.HOME = "/home/pyodide"),
        (i = r.env).PYTHONINSPECT ?? (i.PYTHONINSPECT = "1"),
        r
      );
    }
    U(Fb, "initializeConfiguration");
    function Vb(e) {
      let t = Nb(e),
        n = t.API;
      return ((n.lockFilePromise = Promise.resolve(e.lockFileContents)), t);
    }
    U(Vb, "createEmscriptenSettings");
    async function $b(e) {
      if (typeof _createPyodideModule != "function") {
        let t = `${e.indexURL}pyodide.asm.js`;
        await Oi(t);
      }
    }
    U($b, "loadWasmScript");
    async function zb(e, t) {
      if (!e._loadSnapshot) return;
      let n = await e._loadSnapshot,
        r = ArrayBuffer.isView(n) ? n : new Uint8Array(n);
      return ((t.noInitialRun = !0), (t.INITIAL_MEMORY = r.length), r);
    }
    U(zb, "prepareSnapshot");
    async function Bb(e) {
      let t = await _createPyodideModule(e);
      if (e.exitCode !== void 0) throw new t.ExitStatus(e.exitCode);
      return t;
    }
    U(Bb, "createPyodideModule");
    function Ub(e, t) {
      let n = e.API;
      if (
        (t.pyproxyToStringRepr && n.setPyProxyToStringMethod(!0),
        t.convertNullToNone && n.setCompatNullToNone(!0),
        t.toJsLiteralMap && n.setCompatToJsLiteralMap(!0),
        n.version !== Xd && t.checkAPIVersion)
      )
        throw new Error(
          `Pyodide version does not match: '${Xd}' <==> '${n.version}'. If you updated the Pyodide version, make sure you also updated the 'indexURL' parameter passed to loadPyodide.`,
        );
      e.locateFile = (r) => {
        throw r.endsWith(".so")
          ? new Error(`Failed to find dynamic library "${r}"`)
          : new Error(`Unexpected call to locateFile("${r}")`);
      };
    }
    U(Ub, "configureAPI");
    function Wb(e, t, n) {
      let r = e.API,
        s;
      return (
        t && (s = r.restoreSnapshot(t)),
        r.finalizeBootstrap(s, n._snapshotDeserializer)
      );
    }
    U(Wb, "bootstrapPyodide");
    async function Hb(e, t) {
      let n = e._api;
      return (
        n.sys.path.insert(0, ""),
        n._pyodide.set_excepthook(),
        await n.packageIndexReady,
        n.initializeStreams(t.stdin, t.stdout, t.stderr),
        e
      );
    }
    U(Hb, "finalizeSetup");
    async function Kb(e = {}) {
      let t = await Fb(e),
        n = Vb(t);
      await $b(t);
      let r = await zb(t, n),
        s = await Bb(n);
      Ub(s, t);
      let i = Wb(s, r, t);
      return await Hb(i, t);
    }
    U(Kb, "loadPyodide");
    let Xi = null,
      ba = !1;
    async function Gb() {
      if (!(Xi || ba)) {
        ba = !0;
        try {
          (console.log("[PythonRunner] Loading Pyodide v0.29.2..."),
            (Xi = await Kb({
              indexURL:
                "https://web.archive.org/web/20260129190221/https://cdn.jsdelivr.net/pyodide/v0.29.2/full/",
            })),
            console.log("[PythonRunner] Pyodide loaded successfully"));
        } catch (e) {
          throw (
            console.error("[PythonRunner] Failed to load Pyodide:", e),
            (ba = !1),
            e
          );
        }
        ba = !1;
      }
    }
    async function Pj(e, t) {
      if ((Xi || (await Gb()), !Xi))
        return { passed: !1, error: "Python runtime not loaded" };
      try {
        const n = `
${e}

# Run test
${t}
`;
        return (
          console.log("[PythonRunner] Executing test:", t),
          console.log("[PythonRunner] Full script length:", n.length, "chars"),
          await Xi.runPythonAsync(n),
          console.log("[PythonRunner] ✓ Test PASSED"),
          { passed: !0 }
        );
      } catch (n) {
        return (
          console.log("[PythonRunner] ✗ Test FAILED:", n.message),
          { passed: !1, error: n.message || "Test failed" }
        );
      }
    }
    async function Zd(e, t) {
      const n = {};
      for (const r of t)
        (console.log(`[PythonRunner] Running test ${r.id}...`),
          (n[r.id] = await Pj(e, r.testCase)));
      return n;
    }
    const kj = 10,
      Rj = () => {
        const [e, t] = x.useState(kj),
          {
            categoryVotes: n,
            currentPlayerId: r,
            players: s,
            voteCategory: i,
            finalizeCategoryVote: o,
            startGame: a,
          } = ot(),
          l = s.find((h) => h.id === r),
          u = (l == null ? void 0 : l.isHost) || !1,
          c = r ? n[r] : null,
          d = Object.keys(Qd);
        (x.useEffect(() => {
          (console.log("[CategoryVote] Pre-loading Python runtime..."),
            Gb().catch((h) =>
              console.error("[CategoryVote] Failed to pre-load Python:", h),
            ));
        }, []),
          x.useEffect(() => {
            const h = setInterval(() => {
              t((b) =>
                b <= 1
                  ? (clearInterval(h),
                    u &&
                      (o(),
                      setTimeout(() => {
                        (console.log("[HOST] Starting game..."),
                          a(),
                          setTimeout(() => {
                            (console.log(
                              "[HOST] Sending set-phase to playing...",
                            ),
                              he.send({ type: "set-phase", phase: "playing" }));
                          }, 6e3));
                      }, 500)),
                    0)
                  : b - 1,
              );
            }, 1e3);
            return () => clearInterval(h);
          }, [u]));
        const f = (h) => Object.values(n).filter((b) => b === h).length;
        return v.jsx(zo, {
          children: v.jsxs("div", {
            className:
              "min-h-screen flex flex-col items-center justify-center p-4",
            children: [
              v.jsxs(K.div, {
                className: "text-center mb-8",
                initial: { y: -30, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                children: [
                  v.jsx("h1", {
                    className:
                      "text-2xl md:text-3xl font-pixel text-primary pixel-text-shadow mb-4",
                    children: "VOTE CATEGORY",
                  }),
                  v.jsx(K.div, {
                    className: "inline-block pixel-box p-3",
                    animate: { scale: e <= 3 ? [1, 1.1, 1] : 1 },
                    transition: { duration: 0.5, repeat: e <= 3 ? 1 / 0 : 0 },
                    children: v.jsxs("span", {
                      className: `font-pixel text-xl ${e <= 3 ? "text-destructive" : "text-foreground"}`,
                      children: [e, "s"],
                    }),
                  }),
                ],
              }),
              v.jsx("div", {
                className:
                  "w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-4",
                children: d.map((h, b) => {
                  const g = c === h,
                    w = f(h);
                  return v.jsx(
                    K.button,
                    {
                      className: `pixel-box p-4 text-left transition-all ${g ? "ring-4 ring-primary bg-primary/20" : "hover:brightness-110"}`,
                      onClick: () => i(h),
                      initial: { x: b % 2 === 0 ? -30 : 30, opacity: 0 },
                      animate: { x: 0, opacity: 1 },
                      transition: { delay: b * 0.1 },
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      children: v.jsxs("div", {
                        className: "flex justify-between items-start",
                        children: [
                          v.jsx("span", {
                            className:
                              "font-pixel text-xs text-foreground leading-relaxed",
                            children: Qd[h],
                          }),
                          w > 0 &&
                            v.jsx("span", {
                              className:
                                "px-2 py-1 bg-secondary text-secondary-foreground font-pixel text-xs",
                              children: w,
                            }),
                        ],
                      }),
                    },
                    h,
                  );
                }),
              }),
              v.jsx(K.p, {
                className:
                  "mt-8 text-xs font-pixel text-muted-foreground text-center",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.5 },
                children: c
                  ? "Vote recorded! Waiting for others..."
                  : "Click to select a category",
              }),
            ],
          }),
        });
      },
      _j = () => {
        const [e, t] = x.useState(!1),
          { players: n, currentPlayerId: r, phase: s } = ot(),
          i = n.find((a) => a.id === r),
          o = (i == null ? void 0 : i.isImpostor) || !1;
        return (
          x.useEffect(() => {
            const a = setTimeout(() => t(!0), 1500);
            return () => clearTimeout(a);
          }, []),
          s !== "role-reveal"
            ? (console.log("[RoleReveal] Phase is now:", s), null)
            : (console.log("[RoleReveal] Still showing, phase:", s),
              v.jsx("div", {
                className:
                  "fixed inset-0 bg-black/90 flex items-center justify-center z-50",
                children: v.jsx(K.div, {
                  className: "text-center p-8",
                  initial: { scale: 0.5, opacity: 0 },
                  animate: { scale: 1, opacity: 1 },
                  children: e
                    ? v.jsxs(v.Fragment, {
                        children: [
                          v.jsx(K.div, {
                            initial: { scale: 0, rotate: -180 },
                            animate: { scale: 1, rotate: 0 },
                            transition: { type: "spring", duration: 0.8 },
                            children: v.jsx("h1", {
                              className: `text-4xl md:text-6xl font-pixel mb-4 ${o ? "impostor-text" : "civilian-text"}`,
                              children: o ? "IMPOSTOR" : "CIVILIAN",
                            }),
                          }),
                          v.jsxs(K.div, {
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { delay: 0.5 },
                            children: [
                              v.jsx("p", {
                                className:
                                  "font-pixel text-sm text-white/80 mb-8 max-w-md mx-auto",
                                children: o
                                  ? "Sabotage the code without getting caught! Make the code fail by round 4."
                                  : "Fix the bugs and complete the code before round 4 ends!",
                              }),
                              v.jsx("p", {
                                className:
                                  "font-pixel text-xs text-white/60 animate-pulse",
                                children: "Game starting soon...",
                              }),
                            ],
                          }),
                        ],
                      })
                    : v.jsx(K.div, {
                        animate: { scale: [1, 1.1, 1] },
                        transition: { duration: 1, repeat: 1 / 0 },
                        children: v.jsx("p", {
                          className: "font-pixel text-xl text-white",
                          children: "Assigning roles...",
                        }),
                      }),
                }),
              }))
        );
      };
    function gy(e, t) {
      (t == null || t > e.length) && (t = e.length);
      for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function Nj(e) {
      if (Array.isArray(e)) return e;
    }
    function Aj(e, t, n) {
      return (
        (t = Fj(t)) in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function Oj(e, t) {
      var n =
        e == null
          ? null
          : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
      if (n != null) {
        var r,
          s,
          i,
          o,
          a = [],
          l = !0,
          u = !1;
        try {
          if (((i = (n = n.call(e)).next), t !== 0))
            for (
              ;
              !(l = (r = i.call(n)).done) && (a.push(r.value), a.length !== t);
              l = !0
            );
        } catch (c) {
          ((u = !0), (s = c));
        } finally {
          try {
            if (!l && n.return != null && ((o = n.return()), Object(o) !== o))
              return;
          } finally {
            if (u) throw s;
          }
        }
        return a;
      }
    }
    function Mj() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function yy(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
          (r = r.filter(function (s) {
            return Object.getOwnPropertyDescriptor(e, s).enumerable;
          })),
          n.push.apply(n, r));
      }
      return n;
    }
    function vy(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
          ? yy(Object(n), !0).forEach(function (r) {
              Aj(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : yy(Object(n)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(n, r),
                );
              });
      }
      return e;
    }
    function jj(e, t) {
      if (e == null) return {};
      var n,
        r,
        s = Dj(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (r = 0; r < i.length; r++)
          ((n = i[r]),
            t.indexOf(n) === -1 &&
              {}.propertyIsEnumerable.call(e, n) &&
              (s[n] = e[n]));
      }
      return s;
    }
    function Dj(e, t) {
      if (e == null) return {};
      var n = {};
      for (var r in e)
        if ({}.hasOwnProperty.call(e, r)) {
          if (t.indexOf(r) !== -1) continue;
          n[r] = e[r];
        }
      return n;
    }
    function Lj(e, t) {
      return Nj(e) || Oj(e, t) || Vj(e, t) || Mj();
    }
    function Ij(e, t) {
      if (typeof e != "object" || !e) return e;
      var n = e[Symbol.toPrimitive];
      if (n !== void 0) {
        var r = n.call(e, t);
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }
    function Fj(e) {
      var t = Ij(e, "string");
      return typeof t == "symbol" ? t : t + "";
    }
    function Vj(e, t) {
      if (e) {
        if (typeof e == "string") return gy(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return (
          n === "Object" && e.constructor && (n = e.constructor.name),
          n === "Map" || n === "Set"
            ? Array.from(e)
            : n === "Arguments" ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? gy(e, t)
              : void 0
        );
      }
    }
    function $j(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function xy(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
          (r = r.filter(function (s) {
            return Object.getOwnPropertyDescriptor(e, s).enumerable;
          })),
          n.push.apply(n, r));
      }
      return n;
    }
    function wy(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2
          ? xy(Object(n), !0).forEach(function (r) {
              $j(e, r, n[r]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : xy(Object(n)).forEach(function (r) {
                Object.defineProperty(
                  e,
                  r,
                  Object.getOwnPropertyDescriptor(n, r),
                );
              });
      }
      return e;
    }
    function zj() {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      return function (r) {
        return t.reduceRight(function (s, i) {
          return i(s);
        }, r);
      };
    }
    function ji(e) {
      return function t() {
        for (
          var n = this, r = arguments.length, s = new Array(r), i = 0;
          i < r;
          i++
        )
          s[i] = arguments[i];
        return s.length >= e.length
          ? e.apply(this, s)
          : function () {
              for (
                var o = arguments.length, a = new Array(o), l = 0;
                l < o;
                l++
              )
                a[l] = arguments[l];
              return t.apply(n, [].concat(s, a));
            };
      };
    }
    function Rl(e) {
      return {}.toString.call(e).includes("Object");
    }
    function Bj(e) {
      return !Object.keys(e).length;
    }
    function Po(e) {
      return typeof e == "function";
    }
    function Uj(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function Wj(e, t) {
      return (
        Rl(t) || ir("changeType"),
        Object.keys(t).some(function (n) {
          return !Uj(e, n);
        }) && ir("changeField"),
        t
      );
    }
    function Hj(e) {
      Po(e) || ir("selectorType");
    }
    function Kj(e) {
      (Po(e) || Rl(e) || ir("handlerType"),
        Rl(e) &&
          Object.values(e).some(function (t) {
            return !Po(t);
          }) &&
          ir("handlersType"));
    }
    function Gj(e) {
      (e || ir("initialIsRequired"),
        Rl(e) || ir("initialType"),
        Bj(e) && ir("initialContent"));
    }
    function Yj(e, t) {
      throw new Error(e[t] || e.default);
    }
    var Qj = {
        initialIsRequired: "initial state is required",
        initialType: "initial state should be an object",
        initialContent: "initial state shouldn't be an empty object",
        handlerType: "handler should be an object or a function",
        handlersType: "all handlers should be a functions",
        selectorType: "selector should be a function",
        changeType: "provided value of changes should be an object",
        changeField:
          'it seams you want to change a field in the state which is not specified in the "initial" state',
        default: "an unknown error accured in `state-local` package",
      },
      ir = ji(Yj)(Qj),
      Sa = { changes: Wj, selector: Hj, handler: Kj, initial: Gj };
    function qj(e) {
      var t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      (Sa.initial(e), Sa.handler(t));
      var n = { current: e },
        r = ji(Jj)(n, t),
        s = ji(Zj)(n),
        i = ji(Sa.changes)(e),
        o = ji(Xj)(n);
      function a() {
        var u =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : function (c) {
                return c;
              };
        return (Sa.selector(u), u(n.current));
      }
      function l(u) {
        zj(r, s, i, o)(u);
      }
      return [a, l];
    }
    function Xj(e, t) {
      return Po(t) ? t(e.current) : t;
    }
    function Zj(e, t) {
      return ((e.current = wy(wy({}, e.current), t)), t);
    }
    function Jj(e, t, n) {
      return (
        Po(t)
          ? t(e.current)
          : Object.keys(n).forEach(function (r) {
              var s;
              return (s = t[r]) === null || s === void 0
                ? void 0
                : s.call(t, e.current[r]);
            }),
        n
      );
    }
    var eD = { create: qj },
      tD = {
        paths: {
          vs: "https://web.archive.org/web/20260129190221/https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs",
        },
      };
    function nD(e) {
      return function t() {
        for (
          var n = this, r = arguments.length, s = new Array(r), i = 0;
          i < r;
          i++
        )
          s[i] = arguments[i];
        return s.length >= e.length
          ? e.apply(this, s)
          : function () {
              for (
                var o = arguments.length, a = new Array(o), l = 0;
                l < o;
                l++
              )
                a[l] = arguments[l];
              return t.apply(n, [].concat(s, a));
            };
      };
    }
    function rD(e) {
      return {}.toString.call(e).includes("Object");
    }
    function sD(e) {
      return (
        e || by("configIsRequired"),
        rD(e) || by("configType"),
        e.urls ? (iD(), { paths: { vs: e.urls.monacoBase } }) : e
      );
    }
    function iD() {
      console.warn(Yb.deprecation);
    }
    function oD(e, t) {
      throw new Error(e[t] || e.default);
    }
    var Yb = {
        configIsRequired: "the configuration object is required",
        configType: "the configuration object should be an object",
        default: "an unknown error accured in `@monaco-editor/loader` package",
        deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `,
      },
      by = nD(oD)(Yb),
      aD = { config: sD },
      lD = function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
        return function (s) {
          return n.reduceRight(function (i, o) {
            return o(i);
          }, s);
        };
      };
    function Qb(e, t) {
      return (
        Object.keys(t).forEach(function (n) {
          t[n] instanceof Object && e[n] && Object.assign(t[n], Qb(e[n], t[n]));
        }),
        vy(vy({}, e), t)
      );
    }
    var uD = { type: "cancelation", msg: "operation is manually canceled" };
    function hc(e) {
      var t = !1,
        n = new Promise(function (r, s) {
          (e.then(function (i) {
            return t ? s(uD) : r(i);
          }),
            e.catch(s));
        });
      return (
        (n.cancel = function () {
          return (t = !0);
        }),
        n
      );
    }
    var cD = ["monaco"],
      dD = eD.create({
        config: tD,
        isInitialized: !1,
        resolve: null,
        reject: null,
        monaco: null,
      }),
      qb = Lj(dD, 2),
      Bo = qb[0],
      cu = qb[1];
    function fD(e) {
      var t = aD.config(e),
        n = t.monaco,
        r = jj(t, cD);
      cu(function (s) {
        return { config: Qb(s.config, r), monaco: n };
      });
    }
    function hD() {
      var e = Bo(function (t) {
        var n = t.monaco,
          r = t.isInitialized,
          s = t.resolve;
        return { monaco: n, isInitialized: r, resolve: s };
      });
      if (!e.isInitialized) {
        if ((cu({ isInitialized: !0 }), e.monaco))
          return (e.resolve(e.monaco), hc(pc));
        if (window.monaco && window.monaco.editor)
          return (Xb(window.monaco), e.resolve(window.monaco), hc(pc));
        lD(pD, gD)(yD);
      }
      return hc(pc);
    }
    function pD(e) {
      return document.body.appendChild(e);
    }
    function mD(e) {
      var t = document.createElement("script");
      return (e && (t.src = e), t);
    }
    function gD(e) {
      var t = Bo(function (r) {
          var s = r.config,
            i = r.reject;
          return { config: s, reject: i };
        }),
        n = mD("".concat(t.config.paths.vs, "/loader.js"));
      return (
        (n.onload = function () {
          return e();
        }),
        (n.onerror = t.reject),
        n
      );
    }
    function yD() {
      var e = Bo(function (n) {
          var r = n.config,
            s = n.resolve,
            i = n.reject;
          return { config: r, resolve: s, reject: i };
        }),
        t = window.require;
      (t.config(e.config),
        t(
          ["vs/editor/editor.main"],
          function (n) {
            var r = n.m || n;
            (Xb(r), e.resolve(r));
          },
          function (n) {
            e.reject(n);
          },
        ));
    }
    function Xb(e) {
      Bo().monaco || cu({ monaco: e });
    }
    function vD() {
      return Bo(function (e) {
        var t = e.monaco;
        return t;
      });
    }
    var pc = new Promise(function (e, t) {
        return cu({ resolve: e, reject: t });
      }),
      Zb = { config: fD, init: hD, __getMonacoInstance: vD },
      xD = {
        wrapper: {
          display: "flex",
          position: "relative",
          textAlign: "initial",
        },
        fullWidth: { width: "100%" },
        hide: { display: "none" },
      },
      mc = xD,
      wD = {
        container: {
          display: "flex",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
      },
      bD = wD;
    function SD({ children: e }) {
      return O.createElement("div", { style: bD.container }, e);
    }
    var TD = SD,
      ED = TD;
    function CD({
      width: e,
      height: t,
      isEditorReady: n,
      loading: r,
      _ref: s,
      className: i,
      wrapperProps: o,
    }) {
      return O.createElement(
        "section",
        { style: { ...mc.wrapper, width: e, height: t }, ...o },
        !n && O.createElement(ED, null, r),
        O.createElement("div", {
          ref: s,
          style: { ...mc.fullWidth, ...(!n && mc.hide) },
          className: i,
        }),
      );
    }
    var PD = CD,
      Jb = x.memo(PD);
    function kD(e) {
      x.useEffect(e, []);
    }
    var eS = kD;
    function RD(e, t, n = !0) {
      let r = x.useRef(!0);
      x.useEffect(
        r.current || !n
          ? () => {
              r.current = !1;
            }
          : e,
        t,
      );
    }
    var lt = RD;
    function Zi() {}
    function ks(e, t, n, r) {
      return _D(e, r) || ND(e, t, n, r);
    }
    function _D(e, t) {
      return e.editor.getModel(tS(e, t));
    }
    function ND(e, t, n, r) {
      return e.editor.createModel(t, n, r ? tS(e, r) : void 0);
    }
    function tS(e, t) {
      return e.Uri.parse(t);
    }
    function AD({
      original: e,
      modified: t,
      language: n,
      originalLanguage: r,
      modifiedLanguage: s,
      originalModelPath: i,
      modifiedModelPath: o,
      keepCurrentOriginalModel: a = !1,
      keepCurrentModifiedModel: l = !1,
      theme: u = "light",
      loading: c = "Loading...",
      options: d = {},
      height: f = "100%",
      width: h = "100%",
      className: b,
      wrapperProps: g = {},
      beforeMount: w = Zi,
      onMount: m = Zi,
    }) {
      let [p, y] = x.useState(!1),
        [S, T] = x.useState(!0),
        E = x.useRef(null),
        C = x.useRef(null),
        P = x.useRef(null),
        R = x.useRef(m),
        k = x.useRef(w),
        $ = x.useRef(!1);
      (eS(() => {
        let D = Zb.init();
        return (
          D.then((z) => (C.current = z) && T(!1)).catch(
            (z) =>
              (z == null ? void 0 : z.type) !== "cancelation" &&
              console.error("Monaco initialization: error:", z),
          ),
          () => (E.current ? j() : D.cancel())
        );
      }),
        lt(
          () => {
            if (E.current && C.current) {
              let D = E.current.getOriginalEditor(),
                z = ks(C.current, e || "", r || n || "text", i || "");
              z !== D.getModel() && D.setModel(z);
            }
          },
          [i],
          p,
        ),
        lt(
          () => {
            if (E.current && C.current) {
              let D = E.current.getModifiedEditor(),
                z = ks(C.current, t || "", s || n || "text", o || "");
              z !== D.getModel() && D.setModel(z);
            }
          },
          [o],
          p,
        ),
        lt(
          () => {
            let D = E.current.getModifiedEditor();
            D.getOption(C.current.editor.EditorOption.readOnly)
              ? D.setValue(t || "")
              : t !== D.getValue() &&
                (D.executeEdits("", [
                  {
                    range: D.getModel().getFullModelRange(),
                    text: t || "",
                    forceMoveMarkers: !0,
                  },
                ]),
                D.pushUndoStop());
          },
          [t],
          p,
        ),
        lt(
          () => {
            var D, z;
            (z = (D = E.current) == null ? void 0 : D.getModel()) == null ||
              z.original.setValue(e || "");
          },
          [e],
          p,
        ),
        lt(
          () => {
            let { original: D, modified: z } = E.current.getModel();
            (C.current.editor.setModelLanguage(D, r || n || "text"),
              C.current.editor.setModelLanguage(z, s || n || "text"));
          },
          [n, r, s],
          p,
        ),
        lt(
          () => {
            var D;
            (D = C.current) == null || D.editor.setTheme(u);
          },
          [u],
          p,
        ),
        lt(
          () => {
            var D;
            (D = E.current) == null || D.updateOptions(d);
          },
          [d],
          p,
        ));
      let L = x.useCallback(() => {
          var B;
          if (!C.current) return;
          k.current(C.current);
          let D = ks(C.current, e || "", r || n || "text", i || ""),
            z = ks(C.current, t || "", s || n || "text", o || "");
          (B = E.current) == null || B.setModel({ original: D, modified: z });
        }, [n, t, s, e, r, i, o]),
        Y = x.useCallback(() => {
          var D;
          !$.current &&
            P.current &&
            ((E.current = C.current.editor.createDiffEditor(P.current, {
              automaticLayout: !0,
              ...d,
            })),
            L(),
            (D = C.current) == null || D.editor.setTheme(u),
            y(!0),
            ($.current = !0));
        }, [d, u, L]);
      (x.useEffect(() => {
        p && R.current(E.current, C.current);
      }, [p]),
        x.useEffect(() => {
          !S && !p && Y();
        }, [S, p, Y]));
      function j() {
        var z, B, _, N;
        let D = (z = E.current) == null ? void 0 : z.getModel();
        (a || (B = D == null ? void 0 : D.original) == null || B.dispose(),
          l || (_ = D == null ? void 0 : D.modified) == null || _.dispose(),
          (N = E.current) == null || N.dispose());
      }
      return O.createElement(Jb, {
        width: h,
        height: f,
        isEditorReady: p,
        loading: c,
        _ref: P,
        className: b,
        wrapperProps: g,
      });
    }
    var OD = AD;
    x.memo(OD);
    function MD(e) {
      let t = x.useRef();
      return (
        x.useEffect(() => {
          t.current = e;
        }, [e]),
        t.current
      );
    }
    var jD = MD,
      Ta = new Map();
    function DD({
      defaultValue: e,
      defaultLanguage: t,
      defaultPath: n,
      value: r,
      language: s,
      path: i,
      theme: o = "light",
      line: a,
      loading: l = "Loading...",
      options: u = {},
      overrideServices: c = {},
      saveViewState: d = !0,
      keepCurrentModel: f = !1,
      width: h = "100%",
      height: b = "100%",
      className: g,
      wrapperProps: w = {},
      beforeMount: m = Zi,
      onMount: p = Zi,
      onChange: y,
      onValidate: S = Zi,
    }) {
      let [T, E] = x.useState(!1),
        [C, P] = x.useState(!0),
        R = x.useRef(null),
        k = x.useRef(null),
        $ = x.useRef(null),
        L = x.useRef(p),
        Y = x.useRef(m),
        j = x.useRef(),
        D = x.useRef(r),
        z = jD(i),
        B = x.useRef(!1),
        _ = x.useRef(!1);
      (eS(() => {
        let V = Zb.init();
        return (
          V.then((F) => (R.current = F) && P(!1)).catch(
            (F) =>
              (F == null ? void 0 : F.type) !== "cancelation" &&
              console.error("Monaco initialization: error:", F),
          ),
          () => (k.current ? I() : V.cancel())
        );
      }),
        lt(
          () => {
            var F, G, X, oe;
            let V = ks(R.current, e || r || "", t || s || "", i || n || "");
            V !== ((F = k.current) == null ? void 0 : F.getModel()) &&
              (d &&
                Ta.set(z, (G = k.current) == null ? void 0 : G.saveViewState()),
              (X = k.current) == null || X.setModel(V),
              d &&
                ((oe = k.current) == null || oe.restoreViewState(Ta.get(i))));
          },
          [i],
          T,
        ),
        lt(
          () => {
            var V;
            (V = k.current) == null || V.updateOptions(u);
          },
          [u],
          T,
        ),
        lt(
          () => {
            !k.current ||
              r === void 0 ||
              (k.current.getOption(R.current.editor.EditorOption.readOnly)
                ? k.current.setValue(r)
                : r !== k.current.getValue() &&
                  ((_.current = !0),
                  k.current.executeEdits("", [
                    {
                      range: k.current.getModel().getFullModelRange(),
                      text: r,
                      forceMoveMarkers: !0,
                    },
                  ]),
                  k.current.pushUndoStop(),
                  (_.current = !1)));
          },
          [r],
          T,
        ),
        lt(
          () => {
            var F, G;
            let V = (F = k.current) == null ? void 0 : F.getModel();
            V &&
              s &&
              ((G = R.current) == null || G.editor.setModelLanguage(V, s));
          },
          [s],
          T,
        ),
        lt(
          () => {
            var V;
            a !== void 0 && ((V = k.current) == null || V.revealLine(a));
          },
          [a],
          T,
        ),
        lt(
          () => {
            var V;
            (V = R.current) == null || V.editor.setTheme(o);
          },
          [o],
          T,
        ));
      let N = x.useCallback(() => {
        var V;
        if (!(!$.current || !R.current) && !B.current) {
          Y.current(R.current);
          let F = i || n,
            G = ks(R.current, r || e || "", t || s || "", F || "");
          ((k.current =
            (V = R.current) == null
              ? void 0
              : V.editor.create(
                  $.current,
                  { model: G, automaticLayout: !0, ...u },
                  c,
                )),
            d && k.current.restoreViewState(Ta.get(F)),
            R.current.editor.setTheme(o),
            a !== void 0 && k.current.revealLine(a),
            E(!0),
            (B.current = !0));
        }
      }, [e, t, n, r, s, i, u, c, d, o, a]);
      (x.useEffect(() => {
        T && L.current(k.current, R.current);
      }, [T]),
        x.useEffect(() => {
          !C && !T && N();
        }, [C, T, N]),
        (D.current = r),
        x.useEffect(() => {
          var V, F;
          T &&
            y &&
            ((V = j.current) == null || V.dispose(),
            (j.current =
              (F = k.current) == null
                ? void 0
                : F.onDidChangeModelContent((G) => {
                    _.current || y(k.current.getValue(), G);
                  })));
        }, [T, y]),
        x.useEffect(() => {
          if (T) {
            let V = R.current.editor.onDidChangeMarkers((F) => {
              var X;
              let G = (X = k.current.getModel()) == null ? void 0 : X.uri;
              if (G && F.find((oe) => oe.path === G.path)) {
                let oe = R.current.editor.getModelMarkers({ resource: G });
                S == null || S(oe);
              }
            });
            return () => {
              V == null || V.dispose();
            };
          }
          return () => {};
        }, [T, S]));
      function I() {
        var V, F;
        ((V = j.current) == null || V.dispose(),
          f
            ? d && Ta.set(i, k.current.saveViewState())
            : (F = k.current.getModel()) == null || F.dispose(),
          k.current.dispose());
      }
      return O.createElement(Jb, {
        width: h,
        height: b,
        isEditorReady: T,
        loading: l,
        _ref: $,
        className: g,
        wrapperProps: w,
      });
    }
    var LD = DD,
      ID = x.memo(LD),
      FD = ID;
    const VD = () => {
        const e = x.useRef(null),
          t = x.useRef([]),
          n = x.useRef(null),
          r = x.useRef(!1),
          s = x.useRef(!1),
          i = x.useRef(0),
          {
            code: o,
            players: a,
            currentPlayerId: l,
            updateCode: u,
            updateCursorPosition: c,
          } = ot(),
          d = a.find((w) => w.id === l),
          f = (d == null ? void 0 : d.color) || "blue",
          h = Xr[f] || "#ffffff",
          b = (w, m) => {
            ((e.current = w),
              (n.current = m),
              r.current || (w.setValue(o), (r.current = !0)),
              w.onDidChangeCursorPosition((p) => {
                c(p.position.lineNumber, p.position.column);
              }),
              w.addCommand(m.KeyMod.CtrlCmd | m.KeyCode.KeyA, () => {}),
              m.editor.defineTheme("codemafia", {
                base: "vs-dark",
                inherit: !0,
                rules: [
                  {
                    token: "comment",
                    foreground: "6a9955",
                    fontStyle: "italic",
                  },
                  { token: "keyword", foreground: "569cd6", fontStyle: "bold" },
                  { token: "string", foreground: "ce9178" },
                  { token: "number", foreground: "b5cea8" },
                  { token: "type", foreground: "4ec9b0" },
                  { token: "function", foreground: "dcdcaa" },
                  { token: "variable", foreground: "9cdcfe" },
                ],
                colors: {
                  "editor.background": "#1e1e2e",
                  "editor.foreground": "#cdd6f4",
                  "editor.lineHighlightBackground": "#2a2a3e",
                  "editorCursor.foreground": h,
                  "editor.selectionBackground": "#45475a",
                  "editorLineNumber.foreground": "#6c7086",
                  "editorLineNumber.activeForeground": "#cdd6f4",
                },
              }),
              w.updateOptions({ theme: "codemafia" }));
          };
        (x.useEffect(() => {
          !e.current ||
            !n.current ||
            (n.current.editor.defineTheme("codemafia", {
              base: "vs-dark",
              inherit: !0,
              rules: [
                { token: "comment", foreground: "6a9955", fontStyle: "italic" },
                { token: "keyword", foreground: "569cd6", fontStyle: "bold" },
                { token: "string", foreground: "ce9178" },
                { token: "number", foreground: "b5cea8" },
                { token: "type", foreground: "4ec9b0" },
                { token: "function", foreground: "dcdcaa" },
                { token: "variable", foreground: "9cdcfe" },
              ],
              colors: {
                "editor.background": "#1e1e2e",
                "editor.foreground": "#cdd6f4",
                "editor.lineHighlightBackground": "#2a2a3e",
                "editorCursor.foreground": h,
                "editor.selectionBackground": "#45475a",
                "editorLineNumber.foreground": "#6c7086",
                "editorLineNumber.activeForeground": "#cdd6f4",
              },
            }),
            e.current.updateOptions({ theme: "codemafia" }));
        }, [h]),
          x.useEffect(() => {
            if (!e.current) return;
            const m = a
              .filter((p) => p.id !== l && p.cursorPosition && p.isAlive)
              .filter((p) => p.cursorPosition)
              .map((p) => {
                const y = p.cursorPosition;
                return {
                  range: {
                    startLineNumber: y.lineNumber,
                    startColumn: y.column,
                    endLineNumber: y.lineNumber,
                    endColumn: y.column + 1,
                  },
                  options: {
                    className: `cursor-${p.color}`,
                    beforeContentClassName: `cursor-indicator-${p.color}`,
                    hoverMessage: { value: p.color.toUpperCase() },
                    stickiness: 1,
                  },
                };
              });
            t.current = e.current.deltaDecorations(t.current, m);
          }, [a, l]));
        const g = (w) => {
          w !== void 0 &&
            ((s.current = !0),
            u(w),
            setTimeout(() => {
              s.current = !1;
            }, 300));
        };
        return (
          x.useEffect(() => {
            if (!e.current || !r.current || s.current) return;
            const w = Date.now();
            if (w - i.current < 200) return;
            if (e.current.getValue() !== o) {
              i.current = w;
              const p = e.current.getPosition(),
                y = e.current.getSelection();
              (e.current.setValue(o),
                p && e.current.setPosition(p),
                y && e.current.setSelection(y));
            }
          }, [o]),
          v.jsxs("div", {
            className: "h-full w-full pixel-box overflow-hidden",
            children: [
              v.jsx("style", {
                children: `
        ${Object.entries(Xr).map(
          ([w, m]) => `
          .cursor-${w} {
            background-color: ${m}40;
            border-left: 2px solid ${m};
          }
          .cursor-indicator-${w}::before {
            content: '';
            position: absolute;
            top: -12px;
            left: -4px;
            width: 10px;
            height: 10px;
            background-color: ${m};
            border: 2px solid #333;
            border-radius: 50%;
          }
        `,
        ).join(`
`)}
      `,
              }),
              v.jsx(FD, {
                height: "100%",
                defaultLanguage: "python",
                defaultValue: o,
                onChange: g,
                onMount: b,
                options: {
                  fontSize: 16,
                  fontFamily: '"Courier New", monospace',
                  minimap: { enabled: !1 },
                  lineNumbers: "on",
                  wordWrap: "on",
                  scrollBeyondLastLine: !1,
                  automaticLayout: !0,
                  tabSize: 2,
                  renderWhitespace: "none",
                  lineHeight: 24,
                  padding: { top: 16, bottom: 16 },
                  cursorBlinking: "blink",
                  cursorStyle: "line",
                  cursorWidth: 2,
                },
                loading: v.jsx("div", {
                  className: "flex items-center justify-center h-full bg-card",
                  children: v.jsx("p", {
                    className:
                      "font-pixel text-sm text-muted-foreground animate-pulse",
                    children: "Loading editor...",
                  }),
                }),
              }),
            ],
          })
        );
      },
      Jd = () => {
        const [e, t] = x.useState(""),
          { chatMessages: n, players: r, sendChatMessage: s } = ot(),
          i = () => {
            e.trim() && (s(e.trim()), t(""));
          },
          o = (l) => {
            l.key === "Enter" && !l.shiftKey && (l.preventDefault(), i());
          },
          a = (l) => {
            const u = r.find((c) => c.id === l);
            return (u == null ? void 0 : u.color) || "red";
          };
        return v.jsxs("div", {
          className: "pixel-box h-full flex flex-col",
          children: [
            v.jsx("div", {
              className: "p-3 border-b-4 border-border",
              children: v.jsx("h3", {
                className: "font-pixel text-sm font-bold text-foreground",
                children: "Chat",
              }),
            }),
            v.jsx("div", {
              className: "flex-1 overflow-y-auto p-3 space-y-2.5 min-h-0",
              children:
                n.length === 0
                  ? v.jsx("p", {
                      className:
                        "font-pixel text-sm text-muted-foreground text-center py-4",
                      children: "No messages yet...",
                    })
                  : n.map((l, u) => {
                      const c = a(l.playerId),
                        d = Xr[c];
                      return v.jsxs(
                        K.div,
                        {
                          className: "text-lg leading-relaxed",
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          children: [
                            v.jsxs("span", {
                              className:
                                "font-pixel capitalize font-bold text-lg",
                              style: { color: d },
                              children: [c, ":"],
                            }),
                            v.jsx("span", {
                              className:
                                "font-mono ml-2 text-foreground break-words font-bold text-lg",
                              children: l.message,
                            }),
                          ],
                        },
                        l.id,
                      );
                    }),
            }),
            v.jsxs("div", {
              className: "p-3 border-t-4 border-border flex gap-2",
              children: [
                v.jsx("input", {
                  type: "text",
                  value: e,
                  onChange: (l) => t(l.target.value),
                  onKeyDown: o,
                  placeholder: "Type...",
                  className: "pixel-input flex-1 text-sm py-2",
                  maxLength: 100,
                }),
                v.jsx("button", {
                  onClick: i,
                  className: "pixel-btn-primary p-2",
                  disabled: !e.trim(),
                  children: v.jsx(QC, { className: "w-4 h-4" }),
                }),
              ],
            }),
          ],
        });
      },
      $D = () => {
        const { sabotageTasks: e, players: t, currentPlayerId: n } = ot(),
          r = t.find((a) => a.id === n);
        if (!((r == null ? void 0 : r.isImpostor) || !1)) return null;
        const i = e.filter((a) => a.completed).length,
          o = e.length;
        return v.jsxs(K.div, {
          className: "pixel-box p-4 bg-destructive/10 border-destructive",
          initial: { x: 20, opacity: 0 },
          animate: { x: 0, opacity: 1 },
          children: [
            v.jsxs("h3", {
              className: "font-pixel text-base font-bold text-destructive mb-3",
              children: ["🔪 Sabotage (", i, "/", o, ")"],
            }),
            v.jsx("div", {
              className: "space-y-1.5",
              children: e.map((a, l) =>
                v.jsx(
                  K.div,
                  {
                    className: `p-3 border-2 text-base ${a.completed ? "border-destructive bg-destructive/20" : "border-destructive/30 bg-card"}`,
                    initial: { opacity: 0, x: -10 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: l * 0.05 },
                    children: v.jsxs("div", {
                      className: "flex items-start gap-2",
                      children: [
                        v.jsx("span", {
                          className:
                            "font-pixel text-2xl leading-none text-destructive",
                          children: a.completed ? "✓" : "○",
                        }),
                        v.jsxs("div", {
                          className: "flex-1",
                          children: [
                            v.jsx("p", {
                              className: `font-mono leading-tight font-semibold ${a.completed ? "line-through text-muted-foreground" : "text-foreground"}`,
                              children: a.description,
                            }),
                            v.jsxs("p", {
                              className:
                                "font-pixel text-sm text-destructive/70 mt-1 font-medium",
                              children: [
                                "Lines ",
                                a.lineRange[0],
                                "-",
                                a.lineRange[1],
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  a.id,
                ),
              ),
            }),
            v.jsx("p", {
              className:
                "font-pixel text-sm text-destructive/80 mt-3 font-medium",
              children: "Tip: Be sneaky! Blend in with fixes.",
            }),
          ],
        });
      },
      Ea = ({ showChatOnly: e = !1 }) => {
        const {
            phase: t,
            players: n,
            currentPlayerId: r,
            category: s,
            currentRound: i,
            maxRounds: o,
            roundTimeRemaining: a,
            emergencyMeetingCalled: l,
            codeBlocks: u,
            code: c,
            callEmergencyMeeting: d,
            tick: f,
          } = ot(),
          [h, b] = x.useState(!1),
          [g, w] = x.useState({}),
          m = n.find((E) => E.id === r),
          p = n.filter((E) => E.isAlive);
        m != null && m.isImpostor;
        const y = async () => {
          (b(!0),
            console.log(
              "[GameScreen] Running tests manually with current code...",
            ),
            console.log("[GameScreen] Code length:", c.length),
            console.log(
              "[GameScreen] Test cases:",
              u.map((E) => E.testCase),
            ));
          try {
            const E = await Zd(
                c,
                u.map((P) => ({ id: P.id, testCase: P.testCase })),
              ),
              C = {};
            (Object.entries(E).forEach(([P, R]) => {
              ((C[P] = R.passed),
                console.log(
                  `[GameScreen] Test ${P}: ${R.passed ? "PASSED ✓" : "FAILED ✗"}`,
                  R.error || "",
                ));
            }),
              w(C));
          } catch (E) {
            console.error("[GameScreen] Test execution failed:", E);
          } finally {
            b(!1);
          }
        };
        x.useEffect(() => {
          if (e || t !== "playing") return;
          const E = setInterval(f, 1e3);
          return () => clearInterval(E);
        }, [e, t, f]);
        const S = u.filter((E) => E.passed).length,
          T = u.length;
        return e
          ? v.jsxs("div", {
              className: "h-screen flex flex-col bg-background",
              children: [
                v.jsxs(K.div, {
                  className:
                    "flex items-center justify-between p-3 border-b-4 border-border bg-card",
                  initial: { y: -50 },
                  animate: { y: 0 },
                  children: [
                    v.jsx("div", {
                      className: "flex items-center gap-4",
                      children: v.jsx("div", {
                        className: "pixel-box p-2 bg-primary",
                        children: v.jsxs("span", {
                          className:
                            "font-pixel text-xs text-primary-foreground",
                          children: ["Round ", i, "/", o],
                        }),
                      }),
                    }),
                    v.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        v.jsx(hd, {
                          className: "w-4 h-4 text-muted-foreground",
                        }),
                        v.jsxs("span", {
                          className: "font-pixel text-xs text-muted-foreground",
                          children: [p.length, " alive"],
                        }),
                      ],
                    }),
                  ],
                }),
                v.jsx(K.div, {
                  className:
                    "absolute bottom-0 left-0 right-0 h-64 border-t-4 border-border z-40",
                  initial: { y: 100 },
                  animate: { y: 0 },
                  children: v.jsx(Jd, {}),
                }),
              ],
            })
          : v.jsxs("div", {
              className: "h-screen flex flex-col bg-background",
              children: [
                v.jsxs(K.div, {
                  className:
                    "flex items-center justify-between p-3 border-b-4 border-border bg-card",
                  initial: { y: -50 },
                  animate: { y: 0 },
                  children: [
                    v.jsxs("div", {
                      className: "flex items-center gap-4",
                      children: [
                        v.jsx("div", {
                          className: "pixel-box p-2 bg-primary",
                          children: v.jsxs("span", {
                            className:
                              "font-pixel text-xs text-primary-foreground",
                            children: ["Round ", i, "/", o],
                          }),
                        }),
                        v.jsx("span", {
                          className:
                            "font-pixel text-xs text-muted-foreground hidden md:block",
                          children: s && Qd[s],
                        }),
                      ],
                    }),
                    v.jsx(K.div, {
                      className: `pixel-box p-2 ${a <= 10 ? "bg-destructive" : "bg-card"}`,
                      animate: a <= 10 ? { scale: [1, 1.05, 1] } : {},
                      transition: {
                        duration: 0.5,
                        repeat: a <= 10 ? 1 / 0 : 0,
                      },
                      children: v.jsxs("span", {
                        className: `font-pixel text-lg ${a <= 10 ? "text-destructive-foreground" : "text-foreground"}`,
                        children: [a, "s"],
                      }),
                    }),
                    v.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        v.jsx(hd, {
                          className: "w-4 h-4 text-muted-foreground",
                        }),
                        v.jsxs("span", {
                          className: "font-pixel text-xs text-muted-foreground",
                          children: [p.length, " alive"],
                        }),
                      ],
                    }),
                  ],
                }),
                v.jsxs("div", {
                  className: "flex-1 flex overflow-hidden",
                  children: [
                    v.jsxs(K.div, {
                      className:
                        "w-72 border-r-4 border-border bg-card p-4 hidden lg:flex lg:flex-col overflow-y-auto",
                      initial: { x: -50 },
                      animate: { x: 0 },
                      children: [
                        v.jsx("h3", {
                          className:
                            "font-pixel text-base font-bold text-foreground mb-3",
                          children: "Players",
                        }),
                        v.jsx("div", {
                          className: "space-y-2",
                          children: n.map((E) =>
                            v.jsxs(
                              "div",
                              {
                                className: `flex items-center gap-2 p-2 ${E.isAlive ? "" : "opacity-40 line-through"}`,
                                children: [
                                  v.jsx(fj, { color: E.color, size: "sm" }),
                                  v.jsx("span", {
                                    className:
                                      "font-pixel text-sm font-semibold capitalize",
                                    style: { color: Xr[E.color] },
                                    children: E.color,
                                  }),
                                  E.id === r &&
                                    v.jsx("span", {
                                      className:
                                        "font-pixel text-sm text-muted-foreground font-semibold",
                                      children: "(You)",
                                    }),
                                ],
                              },
                              E.id,
                            ),
                          ),
                        }),
                        v.jsxs("div", {
                          className: "mt-6",
                          children: [
                            v.jsxs("div", {
                              className:
                                "flex items-center justify-between mb-2",
                              children: [
                                v.jsxs("h3", {
                                  className:
                                    "font-pixel text-base font-bold text-foreground",
                                  children: ["Test Cases (", S, "/", T, ")"],
                                }),
                                v.jsxs("button", {
                                  onClick: y,
                                  disabled: h,
                                  className:
                                    "flex items-center gap-1 px-2 py-1 text-xs font-pixel bg-primary text-primary-foreground hover:brightness-110 disabled:opacity-50",
                                  children: [
                                    v.jsx(YC, { className: "w-3 h-3" }),
                                    h ? "Testing..." : "Test",
                                  ],
                                }),
                              ],
                            }),
                            v.jsx("div", {
                              className: "space-y-1.5",
                              children: u.map((E, C) => {
                                const P = g[E.id],
                                  R = P !== void 0,
                                  k = E.passed || (R && P);
                                return v.jsx(
                                  K.div,
                                  {
                                    className: `pixel-box p-3 text-base ${k ? "bg-success/20 border-success" : R && !P ? "bg-destructive/20 border-destructive" : "bg-card border-border"}`,
                                    initial: { opacity: 0, x: -10 },
                                    animate: { opacity: 1, x: 0 },
                                    transition: { delay: C * 0.05 },
                                    children: v.jsxs("div", {
                                      className: "flex items-start gap-2",
                                      children: [
                                        v.jsx("span", {
                                          className: `font-pixel text-2xl leading-none ${k ? "text-success" : R && !P ? "text-destructive" : "text-foreground"}`,
                                          children: k
                                            ? "✓"
                                            : R && !P
                                              ? "✗"
                                              : "○",
                                        }),
                                        v.jsx("span", {
                                          className: `font-mono leading-tight font-semibold ${k ? "text-success" : R && !P ? "text-destructive" : "text-foreground"}`,
                                          children: E.code,
                                        }),
                                      ],
                                    }),
                                  },
                                  E.id,
                                );
                              }),
                            }),
                            v.jsx("p", {
                              className:
                                "font-pixel text-sm text-foreground/70 mt-2 font-medium",
                              children: "Tests lock once passed ✓",
                            }),
                          ],
                        }),
                        v.jsx("div", {
                          className: "mt-4",
                          children: v.jsx($D, {}),
                        }),
                      ],
                    }),
                    v.jsxs("div", {
                      className: "flex-1 flex flex-col min-w-0",
                      children: [
                        v.jsx("div", {
                          className: "flex-1 p-2",
                          children: v.jsx(VD, {}),
                        }),
                        v.jsx("div", {
                          className:
                            "flex items-center justify-center p-3 border-t-4 border-border bg-card",
                          children: v.jsxs("button", {
                            onClick: d,
                            disabled: l,
                            className: `pixel-btn ${l ? "pixel-btn-ghost opacity-50 cursor-not-allowed" : "pixel-btn-danger animate-emergency-pulse"}`,
                            children: [
                              v.jsx(XC, { className: "w-4 h-4 mr-2 inline" }),
                              "Emergency",
                            ],
                          }),
                        }),
                      ],
                    }),
                    v.jsx(K.div, {
                      className:
                        "w-64 border-l-4 border-border hidden md:block",
                      initial: { x: 50 },
                      animate: { x: 0 },
                      children: v.jsx(Jd, {}),
                    }),
                  ],
                }),
              ],
            });
      },
      zD = () => {
        const {
            emergencyMeetingCallerId: e,
            players: t,
            currentPlayerId: n,
            transitionToVoting: r,
          } = ot(),
          s = t.find((a) => a.id === e),
          i = t.find((a) => a.id === n),
          o = (i == null ? void 0 : i.isHost) || !1;
        return (
          x.useEffect(() => {
            if (!o) return;
            const a = setTimeout(() => {
              r();
            }, 3e3);
            return () => clearTimeout(a);
          }, [o, r]),
          v.jsx(K.div, {
            className:
              "fixed inset-0 bg-black/80 flex items-center justify-center z-50",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            children: v.jsxs(K.div, {
              className: "text-center",
              initial: { scale: 0, rotate: -10 },
              animate: { scale: 1, rotate: 0 },
              transition: { type: "spring", damping: 15 },
              children: [
                v.jsxs(K.div, {
                  className: "pixel-box bg-destructive p-8 mb-4",
                  animate: {
                    boxShadow: [
                      "0 0 0 0 rgba(229, 57, 53, 0.7)",
                      "0 0 0 20px rgba(229, 57, 53, 0)",
                    ],
                  },
                  transition: { duration: 1, repeat: 1 / 0 },
                  children: [
                    v.jsx("h1", {
                      className: "font-pixel text-3xl md:text-5xl text-white",
                      children: "EMERGENCY",
                    }),
                    v.jsx("h1", {
                      className:
                        "font-pixel text-3xl md:text-5xl text-white mt-2",
                      children: "MEETING!",
                    }),
                  ],
                }),
                v.jsxs(K.p, {
                  className: "font-pixel text-sm text-white/80",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.5 },
                  children: [
                    "Called by ",
                    (s == null ? void 0 : s.color.toUpperCase()) || "Unknown",
                  ],
                }),
                v.jsx(K.p, {
                  className: "font-pixel text-xs text-white/60 mt-4",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 1 },
                  children: "Voting will begin shortly...",
                }),
              ],
            }),
          })
        );
      },
      BD = () => {
        const {
            players: e,
            currentPlayerId: t,
            votes: n,
            castVote: r,
            finalizeVotes: s,
          } = ot(),
          i = e.filter((d) => d.isAlive),
          o = e.find((d) => d.id === t),
          a = (o == null ? void 0 : o.isHost) || !1,
          l = n.find((d) => d.voterId === t),
          u = n.length >= i.length;
        x.useEffect(() => {
          if (!a || !u) return;
          const d = setTimeout(() => {
            s();
          }, 1e3);
          return () => clearTimeout(d);
        }, [a, u, s]);
        const c = (d) => n.filter((f) => f.targetId === d).length;
        return v.jsx(K.div, {
          className:
            "fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          children: v.jsxs("div", {
            className: "w-full h-full max-w-6xl flex gap-4 items-center",
            children: [
              v.jsxs(K.div, {
                className: "flex-1 max-w-lg",
                initial: { scale: 0.9, y: 20 },
                animate: { scale: 1, y: 0 },
                children: [
                  v.jsxs("div", {
                    className: "text-center mb-6",
                    children: [
                      v.jsx("h1", {
                        className: "font-pixel text-2xl text-white mb-2",
                        children: "WHO IS THE IMPOSTOR?",
                      }),
                      v.jsx("p", {
                        className: "font-pixel text-xs text-white/60",
                        children: "Vote to eliminate a player or skip",
                      }),
                    ],
                  }),
                  v.jsx("div", {
                    className: "space-y-2 mb-6",
                    children: i.map((d) => {
                      const f = d.id === t,
                        h = (l == null ? void 0 : l.targetId) === d.id;
                      return v.jsx(
                        cb,
                        {
                          player: d,
                          isCurrentPlayer: f,
                          isVotable: !f && (o == null ? void 0 : o.isAlive),
                          isVoted: h,
                          onVote: () => r(d.id),
                          showVoteCount: c(d.id),
                        },
                        d.id,
                      );
                    }),
                  }),
                  v.jsx(K.button, {
                    className: `pixel-btn w-full ${(l == null ? void 0 : l.targetId) === null ? "pixel-btn-ghost ring-4 ring-muted" : "pixel-btn-ghost"}`,
                    onClick: () => r(null),
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    children: "Skip Vote",
                  }),
                  l &&
                    v.jsx("p", {
                      className:
                        "font-pixel text-xs text-success text-center mt-4",
                      children: "Vote recorded! Waiting for others...",
                    }),
                ],
              }),
              v.jsx(K.div, {
                className: "w-80 h-[600px] hidden md:block",
                initial: { x: 50, opacity: 0 },
                animate: { x: 0, opacity: 1 },
                transition: { delay: 0.2 },
                children: v.jsx(Jd, {}),
              }),
            ],
          }),
        });
      },
      UD = () => {
        const {
            votedOutPlayerId: e,
            players: t,
            currentPlayerId: n,
            phase: r,
          } = ot(),
          s = t.find((l) => l.id === e),
          i = s == null ? void 0 : s.isImpostor,
          o = t.find((l) => l.id === n),
          a = (o == null ? void 0 : o.isHost) || !1;
        return (
          x.useEffect(() => {
            if (!a || r !== "vote-result") return;
            const l = setTimeout(() => {
              r === "vote-result" &&
                he.send({ type: "set-phase", phase: "playing" });
            }, 4e3);
            return () => clearTimeout(l);
          }, [a, r]),
          v.jsx(K.div, {
            className:
              "fixed inset-0 bg-black/90 flex items-center justify-center z-50",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            children: v.jsx(K.div, {
              className: "text-center p-8",
              initial: { scale: 0.5 },
              animate: { scale: 1 },
              transition: { type: "spring", delay: 0.3 },
              children: s
                ? v.jsxs(v.Fragment, {
                    children: [
                      v.jsxs(K.h1, {
                        className: "font-pixel text-3xl text-white mb-4",
                        initial: { opacity: 0, y: -20 },
                        animate: { opacity: 1, y: 0 },
                        children: [s.color.toUpperCase(), " was ejected"],
                      }),
                      v.jsx(K.div, {
                        className: `font-pixel text-2xl ${i ? "text-success" : "text-destructive"}`,
                        initial: { opacity: 0, scale: 0.5 },
                        animate: { opacity: 1, scale: 1 },
                        transition: { delay: 1.5 },
                        children: i
                          ? v.jsx(v.Fragment, {
                              children: "They were the Impostor!",
                            })
                          : v.jsx(v.Fragment, {
                              children: "They were NOT the Impostor...",
                            }),
                      }),
                    ],
                  })
                : v.jsx(K.h1, {
                    className: "font-pixel text-2xl text-white",
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    children: "No one was ejected (Skipped)",
                  }),
            }),
          })
        );
      },
      WD = () => {
        const {
            currentRound: e,
            maxRounds: t,
            players: n,
            currentPlayerId: r,
            nextRound: s,
            code: i,
            codeBlocks: o,
            sabotageTasks: a,
          } = ot(),
          [l, u] = x.useState({}),
          [c, d] = x.useState(!0),
          f = x.useRef(!1),
          h = e >= t,
          b = n.find((p) => p.id === r),
          g = (b == null ? void 0 : b.isHost) || !1;
        (x.useEffect(() => {
          if (f.current) {
            console.log("[RoundEnd] Tests already ran, skipping...");
            return;
          }
          ((f.current = !0),
            (async () => {
              (d(!0), console.log("[RoundEnd] Running tests once..."));
              try {
                const y = i,
                  S = o,
                  T = await Zd(
                    y,
                    S.map((C) => ({ id: C.id, testCase: C.testCase })),
                  ),
                  E = {};
                if (
                  (Object.entries(T).forEach(([C, P]) => {
                    ((E[C] = P.passed),
                      console.log(
                        `[RoundEnd] Test ${C}: ${P.passed ? "PASSED" : "FAILED"}`,
                        P.error || "",
                      ));
                  }),
                  u(E),
                  g)
                ) {
                  const C = S.map((k) => ({
                    ...k,
                    passed: k.passed || E[k.id] || !1,
                  }));
                  (console.log(
                    "[RoundEnd] Host updating permanent test results...",
                  ),
                    he.send({ type: "update-test-results", results: C }));
                  const P = C.every((k) => k.passed);
                  (console.log(
                    `[RoundEnd] All tests passed? ${P} (${C.filter((k) => k.passed).length}/${C.length})`,
                  ),
                    P &&
                      (console.log(
                        "[RoundEnd] All tests passed! Sending game over - Civilians win!",
                      ),
                      setTimeout(() => {
                        he.send({
                          type: "game-over",
                          winner: "civilians",
                          reason: "All tests passed!",
                        });
                      }, 500)));
                  let R = a;
                  if (a && a.length > 0) {
                    console.log(
                      "[RoundEnd] Running sabotage verification tests...",
                    );
                    try {
                      const k = await Zd(
                        y,
                        a.map(($) => ({
                          id: $.id,
                          testCase: $.verificationTest,
                        })),
                      );
                      R = a.map(($) => {
                        var Y;
                        const L =
                          ((Y = k[$.id]) == null ? void 0 : Y.passed) || !1;
                        return (
                          console.log(
                            `[RoundEnd] Sabotage "${$.description}": ${L ? "COMPLETED ✓" : "NOT DONE ✗"}`,
                          ),
                          { ...$, completed: $.completed || L }
                        );
                      });
                    } catch (k) {
                      (console.error(
                        "[RoundEnd] Sabotage verification failed:",
                        k,
                      ),
                        (R = a.map(($) => ({ ...$ }))));
                    }
                    (console.log(
                      "[RoundEnd] Sending sabotage results to server...",
                    ),
                      he.send({ type: "update-sabotage-results", results: R }));
                  } else
                    console.log(
                      "[RoundEnd] No sabotage tasks to verify (civilians game)",
                    );
                }
              } catch (y) {
                console.error("[RoundEnd] Test execution failed:", y);
              } finally {
                d(!1);
              }
            })());
        }, []),
          x.useEffect(() => {
            if (!g || c) return;
            const p = setTimeout(() => {
              s();
            }, 3e3);
            return () => clearTimeout(p);
          }, [g, c, s]));
        const w = o.filter((p) => p.passed).length,
          m = o.length;
        return v.jsx(zo, {
          children: v.jsx("div", {
            className: "min-h-screen flex items-center justify-center",
            children: v.jsxs(K.div, {
              className: "text-center",
              initial: { scale: 0.5, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              children: [
                v.jsxs(K.div, {
                  className: "pixel-box p-8 bg-card max-w-md",
                  initial: { y: -20 },
                  animate: { y: 0 },
                  children: [
                    c
                      ? v.jsxs(v.Fragment, {
                          children: [
                            v.jsx("h1", {
                              className:
                                "font-pixel text-2xl text-primary mb-4",
                              children: "TESTING CODE...",
                            }),
                            v.jsx("div", {
                              className: "flex justify-center",
                              children: v.jsx("div", {
                                className:
                                  "animate-spin rounded-full h-8 w-8 border-b-2 border-primary",
                              }),
                            }),
                          ],
                        })
                      : h
                        ? v.jsxs(v.Fragment, {
                            children: [
                              v.jsxs("h1", {
                                className:
                                  "font-pixel text-2xl text-destructive mb-4",
                                children: ["ROUND ", e, " COMPLETE"],
                              }),
                              v.jsxs("p", {
                                className:
                                  "font-pixel text-sm text-foreground mb-2",
                                children: ["Tests: ", w, "/", m, " passed"],
                              }),
                              v.jsx("p", {
                                className:
                                  "font-pixel text-xs text-muted-foreground",
                                children: "Final round! Checking results...",
                              }),
                            ],
                          })
                        : v.jsxs(v.Fragment, {
                            children: [
                              v.jsxs("h1", {
                                className:
                                  "font-pixel text-2xl text-warning mb-4",
                                children: ["ROUND ", e, " COMPLETE"],
                              }),
                              v.jsxs("p", {
                                className:
                                  "font-pixel text-sm text-foreground mb-2",
                                children: ["Tests: ", w, "/", m, " passed"],
                              }),
                              v.jsxs("p", {
                                className:
                                  "font-pixel text-xs text-muted-foreground",
                                children: [
                                  w < m
                                    ? "Code still has bugs!"
                                    : "All tests passed!",
                                  " Next round starting...",
                                ],
                              }),
                            ],
                          }),
                    !c &&
                      v.jsx("div", {
                        className: "mt-4 space-y-1",
                        children: o.map((p) => {
                          const y = !p.passed && l[p.id];
                          return v.jsxs(
                            "div",
                            {
                              className:
                                "flex items-center gap-2 text-xs font-mono",
                              children: [
                                v.jsx("span", {
                                  className:
                                    p.passed || l[p.id]
                                      ? "text-success"
                                      : "text-destructive",
                                  children: p.passed || l[p.id] ? "✓" : "✗",
                                }),
                                v.jsx("span", {
                                  className:
                                    "text-left text-muted-foreground flex-1",
                                  children: p.code,
                                }),
                                y &&
                                  v.jsx("span", {
                                    className:
                                      "text-success text-xs animate-pulse",
                                    children: "NEW!",
                                  }),
                              ],
                            },
                            p.id,
                          );
                        }),
                      }),
                  ],
                }),
                v.jsx(K.div, {
                  className: "mt-6 flex justify-center gap-2",
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { delay: 0.5 },
                  children: [...Array(t)].map((p, y) =>
                    v.jsx(
                      "div",
                      {
                        className: `w-4 h-4 border-2 border-border ${y < e ? "bg-warning" : "bg-muted"}`,
                      },
                      y,
                    ),
                  ),
                }),
              ],
            }),
          }),
        });
      },
      HD = () => {
        const { winner: e, players: t, resetGame: n } = ot(),
          r = t.find((i) => i.isImpostor);
        t.filter((i) => !i.isImpostor);
        const s = e === "civilians";
        return v.jsx(zo, {
          children: v.jsxs("div", {
            className:
              "min-h-screen flex flex-col items-center justify-center p-4",
            children: [
              v.jsxs(K.div, {
                className: "text-center",
                initial: { scale: 0, rotate: -180 },
                animate: { scale: 1, rotate: 0 },
                transition: { type: "spring", duration: 1 },
                children: [
                  s
                    ? v.jsx(ZC, {
                        className: "w-24 h-24 text-warning mx-auto mb-6",
                      })
                    : v.jsx(qC, {
                        className: "w-24 h-24 text-destructive mx-auto mb-6",
                      }),
                  v.jsx("h1", {
                    className: `font-pixel text-3xl md:text-5xl mb-4 ${s ? "text-success" : "text-destructive"}`,
                    children: s ? "CIVILIANS WIN!" : "IMPOSTOR WINS!",
                  }),
                ],
              }),
              v.jsxs(K.div, {
                className: "pixel-box p-6 mt-8 text-center",
                initial: { y: 50, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { delay: 0.5 },
                children: [
                  v.jsx("p", {
                    className: "font-pixel text-sm text-muted-foreground mb-2",
                    children: "The impostor was:",
                  }),
                  v.jsxs("p", {
                    className: "font-pixel text-2xl",
                    style: { color: r ? Xr[r.color] : "#fff" },
                    children: [
                      (r == null ? void 0 : r.name) || "Unknown",
                      " (",
                      r == null ? void 0 : r.color.toUpperCase(),
                      ")",
                    ],
                  }),
                ],
              }),
              v.jsx(K.button, {
                className: "pixel-btn-primary mt-8 text-sm",
                onClick: n,
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 1 },
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                children: "Play Again",
              }),
            ],
          }),
        });
      },
      KD = () => {
        const e = ot((t) => t.phase);
        return v.jsx(nM, {
          mode: "wait",
          children: v.jsxs(
            K.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.3 },
              children: [
                e === "menu" && v.jsx(dj, {}),
                e === "lobby" && v.jsx(hj, {}),
                e === "category-vote" && v.jsx(Rj, {}),
                e === "role-reveal" && v.jsx(_j, {}),
                e === "playing" && v.jsx(Ea, {}),
                e === "emergency-meeting" &&
                  v.jsxs(v.Fragment, {
                    children: [v.jsx(Ea, { showChatOnly: !0 }), v.jsx(zD, {})],
                  }),
                e === "voting" &&
                  v.jsxs(v.Fragment, {
                    children: [v.jsx(Ea, { showChatOnly: !0 }), v.jsx(BD, {})],
                  }),
                e === "vote-result" &&
                  v.jsxs(v.Fragment, {
                    children: [v.jsx(Ea, { showChatOnly: !0 }), v.jsx(UD, {})],
                  }),
                e === "round-end" && v.jsx(WD, {}),
                e === "game-over" && v.jsx(HD, {}),
              ],
            },
            e,
          ),
        });
      },
      GD = () => v.jsx(KD, {}),
      YD = () => {
        const e = Ew();
        return (
          x.useEffect(() => {
            console.error(
              "404 Error: User attempted to access non-existent route:",
              e.pathname,
            );
          }, [e.pathname]),
          v.jsx("div", {
            className: "flex min-h-screen items-center justify-center bg-muted",
            children: v.jsxs("div", {
              className: "text-center",
              children: [
                v.jsx("h1", {
                  className: "mb-4 text-4xl font-bold",
                  children: "404",
                }),
                v.jsx("p", {
                  className: "mb-4 text-xl text-muted-foreground",
                  children: "Oops! Page not found",
                }),
                v.jsx("a", {
                  href: "/",
                  className: "text-primary underline hover:text-primary/90",
                  children: "Return to Home",
                }),
              ],
            }),
          })
        );
      },
      QD = new S_(),
      qD = () =>
        v.jsx(E_, {
          client: QD,
          children: v.jsxs(ZR, {
            children: [
              v.jsx(jP, {}),
              v.jsx(hk, {}),
              v.jsx(u2, {
                children: v.jsxs(o2, {
                  children: [
                    v.jsx(Ed, { path: "/", element: v.jsx(GD, {}) }),
                    v.jsx(Ed, { path: "*", element: v.jsx(YD, {}) }),
                  ],
                }),
              }),
            ],
          }),
        });
    K0(document.getElementById("root")).render(v.jsx(qD, {}));
  });
  export default XD();
}
