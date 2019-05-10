import _styled from '@emotion/styled-base';
import { jsx, Global } from '@emotion/core';
import react from 'react';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var reactSwitch_min = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: !0
  });

  function _extends() {
    return (_extends = Object.assign || function (t) {
      for (var i = 1; i < arguments.length; i++) {
        var o = arguments[i];

        for (var s in o) {
          Object.prototype.hasOwnProperty.call(o, s) && (t[s] = o[s]);
        }
      }

      return t;
    }).apply(this, arguments);
  }

  var uncheckedIcon = react.createElement("svg", {
    viewBox: "-2 -5 14 20",
    height: "100%",
    width: "100%",
    style: {
      position: "absolute",
      top: 0
    }
  }, react.createElement("path", {
    d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",
    fill: "#fff",
    fillRule: "evenodd"
  })),
      checkedIcon = react.createElement("svg", {
    height: "100%",
    width: "100%",
    viewBox: "-2 -5 17 21",
    style: {
      position: "absolute",
      top: 0
    }
  }, react.createElement("path", {
    d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",
    fill: "#fff",
    fillRule: "evenodd"
  }));

  function createBackgroundColor(t, i, o, s, n) {
    var e = (t - o) / (i - o);
    if (0 === e) return s;
    if (1 === e) return n;

    for (var h = "#", r = 1; r < 6; r += 2) {
      var a = parseInt(s.substr(r, 2), 16),
          c = parseInt(n.substr(r, 2), 16),
          l = Math.round((1 - e) * a + e * c).toString(16);
      1 === l.length && (l = "0" + l), h += l;
    }

    return h;
  }

  function convertShorthandColor(t) {
    if (7 === t.length) return t;

    for (var i = "#", o = 1; o < 4; o += 1) {
      i += t[o] + t[o];
    }

    return i;
  }

  function getBackgroundColor(t, i, o, s, n) {
    return createBackgroundColor(t, i, o, convertShorthandColor(s), convertShorthandColor(n));
  }

  function objectWithoutProperties(t, i) {
    var o = {};

    for (var s in t) {
      Object.prototype.hasOwnProperty.call(t, s) && -1 === i.indexOf(s) && (o[s] = t[s]);
    }

    return o;
  }

  var ReactSwitch = function (n) {
    function t(t) {
      n.call(this, t);
      var i = t.height,
          o = t.width,
          s = t.checked;
      this.t = t.handleDiameter || i - 2, this.i = Math.max(o - i, o - (i + this.t) / 2), this.o = Math.max(0, (i - this.t) / 2), this.state = {
        s: s ? this.i : this.o
      }, this.n = 0, this.e = 0, this.h = this.h.bind(this), this.r = this.r.bind(this), this.a = this.a.bind(this), this.c = this.c.bind(this), this.l = this.l.bind(this), this.u = this.u.bind(this), this.f = this.f.bind(this), this.p = this.p.bind(this), this.b = this.b.bind(this), this.g = this.g.bind(this), this.v = this.v.bind(this), this.w = this.w.bind(this);
    }

    return n && (t.__proto__ = n), ((t.prototype = Object.create(n && n.prototype)).constructor = t).prototype.componentDidUpdate = function (t) {
      t.checked !== this.props.checked && this.setState({
        s: this.props.checked ? this.i : this.o
      });
    }, t.prototype.k = function (t) {
      this.y.focus(), this.setState({
        C: t,
        M: !0,
        m: Date.now()
      });
    }, t.prototype.x = function (t) {
      var i = this.state,
          o = i.C,
          s = i.s,
          n = (this.props.checked ? this.i : this.o) + t - o;
      i.R || t === o || this.setState({
        R: !0
      });
      var e = Math.min(this.i, Math.max(this.o, n));
      e !== s && this.setState({
        s: e
      });
    }, t.prototype.S = function (t) {
      var i = this.state,
          o = i.s,
          s = i.R,
          n = i.m,
          e = this.props.checked,
          h = (this.i + this.o) / 2,
          r = Date.now() - n;
      !s || r < 250 ? this.T(t) : e ? h < o ? this.setState({
        s: this.i
      }) : this.T(t) : o < h ? this.setState({
        s: this.o
      }) : this.T(t), this.setState({
        R: !1,
        M: !1
      }), this.n = Date.now();
    }, t.prototype.h = function (t) {
      t.preventDefault(), "number" == typeof t.button && 0 !== t.button || (this.k(t.clientX), window.addEventListener("mousemove", this.r), window.addEventListener("mouseup", this.a));
    }, t.prototype.r = function (t) {
      t.preventDefault(), this.x(t.clientX);
    }, t.prototype.a = function (t) {
      this.S(t), window.removeEventListener("mousemove", this.r), window.removeEventListener("mouseup", this.a);
    }, t.prototype.c = function (t) {
      this.$ = null, this.k(t.touches[0].clientX);
    }, t.prototype.l = function (t) {
      this.x(t.touches[0].clientX);
    }, t.prototype.u = function (t) {
      t.preventDefault(), this.S(t);
    }, t.prototype.p = function (t) {
      50 < Date.now() - this.n && (this.T(t), 50 < Date.now() - this.e && this.setState({
        M: !1
      }));
    }, t.prototype.b = function () {
      this.e = Date.now();
    }, t.prototype.g = function () {
      this.setState({
        M: !0
      });
    }, t.prototype.v = function () {
      this.setState({
        M: !1
      });
    }, t.prototype.w = function (t) {
      this.y = t;
    }, t.prototype.f = function (t) {
      t.preventDefault(), this.y.focus(), this.T(t), this.setState({
        M: !1
      });
    }, t.prototype.T = function (t) {
      var i = this.props;
      (0, i.onChange)(!i.checked, t, i.id);
    }, t.prototype.render = function () {
      var t = this.props,
          i = t.disabled,
          o = t.className,
          s = t.offColor,
          n = t.onColor,
          e = t.offHandleColor,
          h = t.onHandleColor,
          r = t.checkedIcon,
          a = t.uncheckedIcon,
          c = t.boxShadow,
          l = t.activeBoxShadow,
          u = t.height,
          d = t.width,
          f = objectWithoutProperties(t, ["disabled", "className", "offColor", "onColor", "offHandleColor", "onHandleColor", "checkedIcon", "uncheckedIcon", "boxShadow", "activeBoxShadow", "height", "width", "handleDiameter"]),
          p = this.state,
          b = p.s,
          g = p.R,
          v = p.M,
          w = {
        position: "relative",
        display: "inline-block",
        textAlign: "left",
        opacity: i ? .5 : 1,
        direction: "ltr",
        borderRadius: u / 2,
        WebkitTransition: "opacity 0.25s",
        MozTransition: "opacity 0.25s",
        transition: "opacity 0.25s",
        touchAction: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none"
      },
          k = {
        height: u,
        width: d,
        margin: Math.max(0, (this.t - u) / 2),
        position: "relative",
        background: getBackgroundColor(b, this.i, this.o, s, n),
        borderRadius: u / 2,
        cursor: i ? "default" : "pointer",
        WebkitTransition: g ? null : "background 0.25s",
        MozTransition: g ? null : "background 0.25s",
        transition: g ? null : "background 0.25s"
      },
          y = {
        height: u,
        width: Math.min(1.5 * u, d - (this.t + u) / 2 + 1),
        position: "relative",
        opacity: (b - this.o) / (this.i - this.o),
        pointerEvents: "none",
        WebkitTransition: g ? null : "opacity 0.25s",
        MozTransition: g ? null : "opacity 0.25s",
        transition: g ? null : "opacity 0.25s"
      },
          C = {
        height: u,
        width: Math.min(1.5 * u, d - (this.t + u) / 2 + 1),
        position: "absolute",
        opacity: 1 - (b - this.o) / (this.i - this.o),
        right: 0,
        top: 0,
        pointerEvents: "none",
        WebkitTransition: g ? null : "opacity 0.25s",
        MozTransition: g ? null : "opacity 0.25s",
        transition: g ? null : "opacity 0.25s"
      },
          M = {
        height: this.t,
        width: this.t,
        background: getBackgroundColor(b, this.i, this.o, e, h),
        display: "inline-block",
        cursor: i ? "default" : "pointer",
        borderRadius: "50%",
        position: "absolute",
        transform: "translateX(" + b + "px)",
        top: Math.max(0, (u - this.t) / 2),
        outline: 0,
        boxShadow: v ? l : c,
        border: 0,
        WebkitTransition: g ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
        MozTransition: g ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
        transition: g ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s"
      };
      return react.createElement("div", {
        className: o,
        style: w
      }, react.createElement("div", {
        className: "react-switch-bg",
        style: k,
        onClick: i ? null : this.f,
        onMouseDown: function onMouseDown(t) {
          return t.preventDefault();
        }
      }, r && react.createElement("div", {
        style: y
      }, r), a && react.createElement("div", {
        style: C
      }, a)), react.createElement("div", {
        className: "react-switch-handle",
        style: M,
        onClick: function onClick(t) {
          return t.preventDefault();
        },
        onMouseDown: i ? null : this.h,
        onTouchStart: i ? null : this.c,
        onTouchMove: i ? null : this.l,
        onTouchEnd: i ? null : this.u,
        onTouchCancel: i ? null : this.v
      }), react.createElement("input", _extends({}, {
        type: "checkbox",
        role: "switch",
        disabled: i,
        style: {
          border: 0,
          clip: "rect(0 0 0 0)",
          height: 1,
          margin: -1,
          overflow: "hidden",
          padding: 0,
          position: "absolute",
          width: 1
        }
      }, f, {
        ref: this.w,
        onFocus: this.g,
        onBlur: this.v,
        onKeyUp: this.b,
        onChange: this.p
      })));
    }, t;
  }(react.Component);

  ReactSwitch.defaultProps = {
    disabled: !1,
    offColor: "#888",
    onColor: "#080",
    offHandleColor: "#fff",
    onHandleColor: "#fff",
    uncheckedIcon: uncheckedIcon,
    checkedIcon: checkedIcon,
    boxShadow: null,
    activeBoxShadow: "0 0 2px 3px #3bf",
    height: 28,
    width: 56
  }, exports.default = ReactSwitch;
});
unwrapExports(reactSwitch_min);

var reactIs_production_min = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var b = "function" === typeof Symbol && Symbol.for,
      c = b ? Symbol.for("react.element") : 60103,
      d = b ? Symbol.for("react.portal") : 60106,
      e = b ? Symbol.for("react.fragment") : 60107,
      f = b ? Symbol.for("react.strict_mode") : 60108,
      g = b ? Symbol.for("react.profiler") : 60114,
      h = b ? Symbol.for("react.provider") : 60109,
      k = b ? Symbol.for("react.context") : 60110,
      l = b ? Symbol.for("react.async_mode") : 60111,
      m = b ? Symbol.for("react.concurrent_mode") : 60111,
      n = b ? Symbol.for("react.forward_ref") : 60112,
      p = b ? Symbol.for("react.suspense") : 60113,
      q = b ? Symbol.for("react.memo") : 60115,
      r = b ? Symbol.for("react.lazy") : 60116;

  function t(a) {
    if ("object" === _typeof(a) && null !== a) {
      var u = a.$$typeof;

      switch (u) {
        case c:
          switch (a = a.type, a) {
            case l:
            case m:
            case e:
            case g:
            case f:
            case p:
              return a;

            default:
              switch (a = a && a.$$typeof, a) {
                case k:
                case n:
                case h:
                  return a;

                default:
                  return u;
              }

          }

        case r:
        case q:
        case d:
          return u;
      }
    }
  }

  function v(a) {
    return t(a) === m;
  }

  exports.typeOf = t;
  exports.AsyncMode = l;
  exports.ConcurrentMode = m;
  exports.ContextConsumer = k;
  exports.ContextProvider = h;
  exports.Element = c;
  exports.ForwardRef = n;
  exports.Fragment = e;
  exports.Lazy = r;
  exports.Memo = q;
  exports.Portal = d;
  exports.Profiler = g;
  exports.StrictMode = f;
  exports.Suspense = p;

  exports.isValidElementType = function (a) {
    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || "object" === _typeof(a) && null !== a && (a.$$typeof === r || a.$$typeof === q || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n);
  };

  exports.isAsyncMode = function (a) {
    return v(a) || t(a) === l;
  };

  exports.isConcurrentMode = v;

  exports.isContextConsumer = function (a) {
    return t(a) === k;
  };

  exports.isContextProvider = function (a) {
    return t(a) === h;
  };

  exports.isElement = function (a) {
    return "object" === _typeof(a) && null !== a && a.$$typeof === c;
  };

  exports.isForwardRef = function (a) {
    return t(a) === n;
  };

  exports.isFragment = function (a) {
    return t(a) === e;
  };

  exports.isLazy = function (a) {
    return t(a) === r;
  };

  exports.isMemo = function (a) {
    return t(a) === q;
  };

  exports.isPortal = function (a) {
    return t(a) === d;
  };

  exports.isProfiler = function (a) {
    return t(a) === g;
  };

  exports.isStrictMode = function (a) {
    return t(a) === f;
  };

  exports.isSuspense = function (a) {
    return t(a) === p;
  };
});
unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {

  {
    (function () {

      Object.defineProperty(exports, '__esModule', {
        value: true
      }); // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.

      var hasSymbol = typeof Symbol === 'function' && Symbol.for;
      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
      var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
      var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
      var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
      var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
      var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
      var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
      var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
      var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
      var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
      var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

      function isValidElementType(type) {
        return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
        type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
      }
      /**
       * Forked from fbjs/warning:
       * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
       *
       * Only change is we use console.warn instead of console.error,
       * and do nothing when 'console' is not supported.
       * This really simplifies the code.
       * ---
       * Similar to invariant but only logs a warning if the condition is not met.
       * This can be used to log issues in development environments in critical
       * paths. Removing the logging code for production environments will keep the
       * same logic and follow the same code paths.
       */


      var lowPriorityWarning = function lowPriorityWarning() {};

      {
        var printWarning = function printWarning(format) {
          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });

          if (typeof console !== 'undefined') {
            console.warn(message);
          }

          try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
          } catch (x) {}
        };

        lowPriorityWarning = function lowPriorityWarning(condition, format) {
          if (format === undefined) {
            throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
          }

          if (!condition) {
            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              args[_key2 - 2] = arguments[_key2];
            }

            printWarning.apply(undefined, [format].concat(args));
          }
        };
      }
      var lowPriorityWarning$1 = lowPriorityWarning;

      function typeOf(object) {
        if (_typeof(object) === 'object' && object !== null) {
          var $$typeof = object.$$typeof;

          switch ($$typeof) {
            case REACT_ELEMENT_TYPE:
              var type = object.type;

              switch (type) {
                case REACT_ASYNC_MODE_TYPE:
                case REACT_CONCURRENT_MODE_TYPE:
                case REACT_FRAGMENT_TYPE:
                case REACT_PROFILER_TYPE:
                case REACT_STRICT_MODE_TYPE:
                case REACT_SUSPENSE_TYPE:
                  return type;

                default:
                  var $$typeofType = type && type.$$typeof;

                  switch ($$typeofType) {
                    case REACT_CONTEXT_TYPE:
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_PROVIDER_TYPE:
                      return $$typeofType;

                    default:
                      return $$typeof;
                  }

              }

            case REACT_LAZY_TYPE:
            case REACT_MEMO_TYPE:
            case REACT_PORTAL_TYPE:
              return $$typeof;
          }
        }

        return undefined;
      } // AsyncMode is deprecated along with isAsyncMode


      var AsyncMode = REACT_ASYNC_MODE_TYPE;
      var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
      var ContextConsumer = REACT_CONTEXT_TYPE;
      var ContextProvider = REACT_PROVIDER_TYPE;
      var Element = REACT_ELEMENT_TYPE;
      var ForwardRef = REACT_FORWARD_REF_TYPE;
      var Fragment = REACT_FRAGMENT_TYPE;
      var Lazy = REACT_LAZY_TYPE;
      var Memo = REACT_MEMO_TYPE;
      var Portal = REACT_PORTAL_TYPE;
      var Profiler = REACT_PROFILER_TYPE;
      var StrictMode = REACT_STRICT_MODE_TYPE;
      var Suspense = REACT_SUSPENSE_TYPE;
      var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

      function isAsyncMode(object) {
        {
          if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true;
            lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
          }
        }
        return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
      }

      function isConcurrentMode(object) {
        return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
      }

      function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
      }

      function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
      }

      function isElement(object) {
        return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
      }

      function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
      }

      function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
      }

      function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
      }

      function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
      }

      function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
      }

      function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
      }

      function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
      }

      exports.typeOf = typeOf;
      exports.AsyncMode = AsyncMode;
      exports.ConcurrentMode = ConcurrentMode;
      exports.ContextConsumer = ContextConsumer;
      exports.ContextProvider = ContextProvider;
      exports.Element = Element;
      exports.ForwardRef = ForwardRef;
      exports.Fragment = Fragment;
      exports.Lazy = Lazy;
      exports.Memo = Memo;
      exports.Portal = Portal;
      exports.Profiler = Profiler;
      exports.StrictMode = StrictMode;
      exports.Suspense = Suspense;
      exports.isValidElementType = isValidElementType;
      exports.isAsyncMode = isAsyncMode;
      exports.isConcurrentMode = isConcurrentMode;
      exports.isContextConsumer = isContextConsumer;
      exports.isContextProvider = isContextProvider;
      exports.isElement = isElement;
      exports.isForwardRef = isForwardRef;
      exports.isFragment = isFragment;
      exports.isLazy = isLazy;
      exports.isMemo = isMemo;
      exports.isPortal = isPortal;
      exports.isProfiler = isProfiler;
      exports.isStrictMode = isStrictMode;
      exports.isSuspense = isSuspense;
    })();
  }
});
unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_development;
  }
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function printWarning() {};

{
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */


function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + _typeof(error) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }

        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;
          var stack = getStack ? getStack() : '';
          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning$1 = function printWarning() {};

{
  printWarning$1 = function printWarning(text) {
    var message = 'Warning: ' + text;

    if (typeof console !== 'undefined') {
      console.error(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */

  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);

    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */


  var ANONYMOUS = '<<anonymous>>'; // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.

  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };
  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */

  /*eslint-disable no-self-compare*/

  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */


  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning$1('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }

      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }

          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }

        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }

      var propValue = props[propName];

      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }

      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

        if (error instanceof Error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      {
        if (arguments.length > 1) {
          printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }

      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }

      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

          if (error instanceof Error) {
            return error;
          }
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning$1('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }

    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }

      for (var key in shapeTypes) {
        var checker = shapeTypes[key];

        if (!checker) {
          continue;
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);

      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = objectAssign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;

      case 'boolean':
        return !propValue;

      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }

        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);

        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;

          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;

              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;

      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = _typeof(propValue);

    if (Array.isArray(propValue)) {
      return 'array';
    }

    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }

    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }

    return propType;
  } // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.


  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }

    var propType = getPropType(propValue);

    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }

    return propType;
  } // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"


  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);

    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;

      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;

      default:
        return type;
    }
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  {
    var ReactIs = reactIs; // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod

    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
  }
});

var reactSwitch_dev = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }
  /*
  The MIT License (MIT)
  
  Copyright (c) 2015 instructure-react
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
  */


  var uncheckedIcon = react.createElement('svg', {
    viewBox: "-2 -5 14 20",
    height: "100%",
    width: "100%",
    style: {
      position: "absolute",
      top: 0
    }
  }, react.createElement('path', {
    d: "M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",
    fill: "#fff",
    fillRule: "evenodd"
  }));
  var checkedIcon = react.createElement('svg', {
    height: "100%",
    width: "100%",
    viewBox: "-2 -5 17 21",
    style: {
      position: "absolute",
      top: 0
    }
  }, react.createElement('path', {
    d: "M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",
    fill: "#fff",
    fillRule: "evenodd"
  }));

  function createBackgroundColor(pos, checkedPos, uncheckedPos, offColor, onColor) {
    var relativePos = (pos - uncheckedPos) / (checkedPos - uncheckedPos);

    if (relativePos === 0) {
      return offColor;
    }

    if (relativePos === 1) {
      return onColor;
    }

    var newColor = "#";

    for (var i = 1; i < 6; i += 2) {
      var offComponent = parseInt(offColor.substr(i, 2), 16);
      var onComponent = parseInt(onColor.substr(i, 2), 16);
      var weightedValue = Math.round((1 - relativePos) * offComponent + relativePos * onComponent);
      var newComponent = weightedValue.toString(16);

      if (newComponent.length === 1) {
        newComponent = "0" + newComponent;
      }

      newColor += newComponent;
    }

    return newColor;
  }

  function convertShorthandColor(color) {
    if (color.length === 7) {
      return color;
    }

    var sixDigitColor = "#";

    for (var i = 1; i < 4; i += 1) {
      sixDigitColor += color[i] + color[i];
    }

    return sixDigitColor;
  }

  function getBackgroundColor(pos, checkedPos, uncheckedPos, offColor, onColor) {
    var sixDigitOffColor = convertShorthandColor(offColor);
    var sixDigitOnColor = convertShorthandColor(onColor);
    return createBackgroundColor(pos, checkedPos, uncheckedPos, sixDigitOffColor, sixDigitOnColor);
  } // Make sure color props are strings that start with "#" since other ways to write colors are not supported.


  var hexColorPropType = function hexColorPropType(props, propName, componentName) {
    var prop = props[propName];

    if (typeof prop !== "string" || prop[0] !== "#" || prop.length !== 4 && prop.length !== 7) {
      return new Error("Invalid prop '" + propName + "' supplied to '" + componentName + "'. '" + propName + "' has to be either a 3-digit or 6-digit hex-color string. Valid examples: '#abc', '#123456'");
    }

    return null;
  };

  function objectWithoutProperties(obj, exclude) {
    var target = {};

    for (var k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];
    }

    return target;
  }

  var ReactSwitch =
  /*@__PURE__*/
  function (Component) {
    function ReactSwitch(props) {
      Component.call(this, props);
      var height = props.height;
      var width = props.width;
      var handleDiameter = props.handleDiameter;
      var checked = props.checked;
      this.$handleDiameter = handleDiameter || height - 2;
      this.$checkedPos = Math.max(width - height, width - (height + this.$handleDiameter) / 2);
      this.$uncheckedPos = Math.max(0, (height - this.$handleDiameter) / 2);
      this.state = {
        $pos: checked ? this.$checkedPos : this.$uncheckedPos
      };
      this.$lastDragAt = 0;
      this.$lastKeyUpAt = 0;
      this.$onMouseDown = this.$onMouseDown.bind(this);
      this.$onMouseMove = this.$onMouseMove.bind(this);
      this.$onMouseUp = this.$onMouseUp.bind(this);
      this.$onTouchStart = this.$onTouchStart.bind(this);
      this.$onTouchMove = this.$onTouchMove.bind(this);
      this.$onTouchEnd = this.$onTouchEnd.bind(this);
      this.$onClick = this.$onClick.bind(this);
      this.$onInputChange = this.$onInputChange.bind(this);
      this.$onKeyUp = this.$onKeyUp.bind(this);
      this.$setHasOutline = this.$setHasOutline.bind(this);
      this.$unsetHasOutline = this.$unsetHasOutline.bind(this);
      this.$getInputRef = this.$getInputRef.bind(this);
    }

    if (Component) ReactSwitch.__proto__ = Component;
    ReactSwitch.prototype = Object.create(Component && Component.prototype);
    ReactSwitch.prototype.constructor = ReactSwitch;

    ReactSwitch.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (prevProps.checked === this.props.checked) {
        return;
      }

      var $pos = this.props.checked ? this.$checkedPos : this.$uncheckedPos;
      this.setState({
        $pos: $pos
      });
    };

    ReactSwitch.prototype.$onDragStart = function $onDragStart(clientX) {
      this.$inputRef.focus();
      this.setState({
        $startX: clientX,
        $hasOutline: true,
        $dragStartingTime: Date.now()
      });
    };

    ReactSwitch.prototype.$onDrag = function $onDrag(clientX) {
      var ref = this.state;
      var $startX = ref.$startX;
      var $isDragging = ref.$isDragging;
      var $pos = ref.$pos;
      var ref$1 = this.props;
      var checked = ref$1.checked;
      var startPos = checked ? this.$checkedPos : this.$uncheckedPos;
      var mousePos = startPos + clientX - $startX; // We need this check to fix a windows glitch where onDrag is triggered onMouseDown in some cases

      if (!$isDragging && clientX !== $startX) {
        this.setState({
          $isDragging: true
        });
      }

      var newPos = Math.min(this.$checkedPos, Math.max(this.$uncheckedPos, mousePos)); // Prevent unnecessary rerenders

      if (newPos !== $pos) {
        this.setState({
          $pos: newPos
        });
      }
    };

    ReactSwitch.prototype.$onDragStop = function $onDragStop(event) {
      var ref = this.state;
      var $pos = ref.$pos;
      var $isDragging = ref.$isDragging;
      var $dragStartingTime = ref.$dragStartingTime;
      var ref$1 = this.props;
      var checked = ref$1.checked;
      var halfwayCheckpoint = (this.$checkedPos + this.$uncheckedPos) / 2; // Simulate clicking the handle

      var timeSinceStart = Date.now() - $dragStartingTime;

      if (!$isDragging || timeSinceStart < 250) {
        this.$onChange(event); // Handle dragging from checked position
      } else if (checked) {
        if ($pos > halfwayCheckpoint) {
          this.setState({
            $pos: this.$checkedPos
          });
        } else {
          this.$onChange(event);
        } // Handle dragging from unchecked position

      } else if ($pos < halfwayCheckpoint) {
        this.setState({
          $pos: this.$uncheckedPos
        });
      } else {
        this.$onChange(event);
      }

      this.setState({
        $isDragging: false,
        $hasOutline: false
      });
      this.$lastDragAt = Date.now();
    };

    ReactSwitch.prototype.$onMouseDown = function $onMouseDown(event) {
      event.preventDefault(); // Ignore right click and scroll

      if (typeof event.button === "number" && event.button !== 0) {
        return;
      }

      this.$onDragStart(event.clientX);
      window.addEventListener("mousemove", this.$onMouseMove);
      window.addEventListener("mouseup", this.$onMouseUp);
    };

    ReactSwitch.prototype.$onMouseMove = function $onMouseMove(event) {
      event.preventDefault();
      this.$onDrag(event.clientX);
    };

    ReactSwitch.prototype.$onMouseUp = function $onMouseUp(event) {
      this.$onDragStop(event);
      window.removeEventListener("mousemove", this.$onMouseMove);
      window.removeEventListener("mouseup", this.$onMouseUp);
    };

    ReactSwitch.prototype.$onTouchStart = function $onTouchStart(event) {
      this.$checkedStateFromDragging = null;
      this.$onDragStart(event.touches[0].clientX);
    };

    ReactSwitch.prototype.$onTouchMove = function $onTouchMove(event) {
      this.$onDrag(event.touches[0].clientX);
    };

    ReactSwitch.prototype.$onTouchEnd = function $onTouchEnd(event) {
      event.preventDefault();
      this.$onDragStop(event);
    };

    ReactSwitch.prototype.$onInputChange = function $onInputChange(event) {
      // This condition is unfortunately needed in some browsers where the input's change event might get triggered
      // right after the dragstop event is triggered (occurs when dropping over a label element)
      if (Date.now() - this.$lastDragAt > 50) {
        this.$onChange(event); // Prevent clicking label, but not key activation from setting outline to true - yes, this is absurd

        if (Date.now() - this.$lastKeyUpAt > 50) {
          this.setState({
            $hasOutline: false
          });
        }
      }
    };

    ReactSwitch.prototype.$onKeyUp = function $onKeyUp() {
      this.$lastKeyUpAt = Date.now();
    };

    ReactSwitch.prototype.$setHasOutline = function $setHasOutline() {
      this.setState({
        $hasOutline: true
      });
    };

    ReactSwitch.prototype.$unsetHasOutline = function $unsetHasOutline() {
      this.setState({
        $hasOutline: false
      });
    };

    ReactSwitch.prototype.$getInputRef = function $getInputRef(el) {
      this.$inputRef = el;
    };

    ReactSwitch.prototype.$onClick = function $onClick(event) {
      event.preventDefault();
      this.$inputRef.focus();
      this.$onChange(event);
      this.setState({
        $hasOutline: false
      });
    };

    ReactSwitch.prototype.$onChange = function $onChange(event) {
      var ref = this.props;
      var checked = ref.checked;
      var onChange = ref.onChange;
      var id = ref.id;
      onChange(!checked, event, id);
    };

    ReactSwitch.prototype.render = function render() {
      var ref = this.props;
      var disabled = ref.disabled;
      var className = ref.className;
      var offColor = ref.offColor;
      var onColor = ref.onColor;
      var offHandleColor = ref.offHandleColor;
      var onHandleColor = ref.onHandleColor;
      var checkedIcon$$1 = ref.checkedIcon;
      var uncheckedIcon$$1 = ref.uncheckedIcon;
      var boxShadow = ref.boxShadow;
      var activeBoxShadow = ref.activeBoxShadow;
      var height = ref.height;
      var width = ref.width;
      var handleDiameter = ref.handleDiameter;
      var rest$1 = objectWithoutProperties(ref, ["disabled", "className", "offColor", "onColor", "offHandleColor", "onHandleColor", "checkedIcon", "uncheckedIcon", "boxShadow", "activeBoxShadow", "height", "width", "handleDiameter"]);
      var rest = rest$1;
      var ref$1 = this.state;
      var $pos = ref$1.$pos;
      var $isDragging = ref$1.$isDragging;
      var $hasOutline = ref$1.$hasOutline;
      var rootStyle = {
        position: "relative",
        display: "inline-block",
        textAlign: "left",
        opacity: disabled ? 0.5 : 1,
        direction: "ltr",
        borderRadius: height / 2,
        WebkitTransition: "opacity 0.25s",
        MozTransition: "opacity 0.25s",
        transition: "opacity 0.25s",
        touchAction: "none",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none"
      };
      var backgroundStyle = {
        height: height,
        width: width,
        margin: Math.max(0, (this.$handleDiameter - height) / 2),
        position: "relative",
        background: getBackgroundColor($pos, this.$checkedPos, this.$uncheckedPos, offColor, onColor),
        borderRadius: height / 2,
        cursor: disabled ? "default" : "pointer",
        WebkitTransition: $isDragging ? null : "background 0.25s",
        MozTransition: $isDragging ? null : "background 0.25s",
        transition: $isDragging ? null : "background 0.25s"
      };
      var checkedIconStyle = {
        height: height,
        width: Math.min(height * 1.5, width - (this.$handleDiameter + height) / 2 + 1),
        position: "relative",
        opacity: ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
        pointerEvents: "none",
        WebkitTransition: $isDragging ? null : "opacity 0.25s",
        MozTransition: $isDragging ? null : "opacity 0.25s",
        transition: $isDragging ? null : "opacity 0.25s"
      };
      var uncheckedIconStyle = {
        height: height,
        width: Math.min(height * 1.5, width - (this.$handleDiameter + height) / 2 + 1),
        position: "absolute",
        opacity: 1 - ($pos - this.$uncheckedPos) / (this.$checkedPos - this.$uncheckedPos),
        right: 0,
        top: 0,
        pointerEvents: "none",
        WebkitTransition: $isDragging ? null : "opacity 0.25s",
        MozTransition: $isDragging ? null : "opacity 0.25s",
        transition: $isDragging ? null : "opacity 0.25s"
      };
      var handleStyle = {
        height: this.$handleDiameter,
        width: this.$handleDiameter,
        background: getBackgroundColor($pos, this.$checkedPos, this.$uncheckedPos, offHandleColor, onHandleColor),
        display: "inline-block",
        cursor: disabled ? "default" : "pointer",
        borderRadius: "50%",
        position: "absolute",
        transform: "translateX(" + $pos + "px)",
        top: Math.max(0, (height - this.$handleDiameter) / 2),
        outline: 0,
        boxShadow: $hasOutline ? activeBoxShadow : boxShadow,
        border: 0,
        WebkitTransition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
        MozTransition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s",
        transition: $isDragging ? null : "background-color 0.25s, transform 0.25s, box-shadow 0.15s"
      };
      var inputStyle = {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        width: 1
      };
      return react.createElement('div', {
        className: className,
        style: rootStyle
      }, react.createElement('div', {
        className: "react-switch-bg",
        style: backgroundStyle,
        onClick: disabled ? null : this.$onClick,
        onMouseDown: function onMouseDown(e) {
          return e.preventDefault();
        }
      }, checkedIcon$$1 && react.createElement('div', {
        style: checkedIconStyle
      }, checkedIcon$$1), uncheckedIcon$$1 && react.createElement('div', {
        style: uncheckedIconStyle
      }, uncheckedIcon$$1)), react.createElement('div', {
        className: "react-switch-handle",
        style: handleStyle,
        onClick: function onClick(e) {
          return e.preventDefault();
        },
        onMouseDown: disabled ? null : this.$onMouseDown,
        onTouchStart: disabled ? null : this.$onTouchStart,
        onTouchMove: disabled ? null : this.$onTouchMove,
        onTouchEnd: disabled ? null : this.$onTouchEnd,
        onTouchCancel: disabled ? null : this.$unsetHasOutline
      }), react.createElement('input', _extends({}, {
        type: "checkbox",
        role: "switch",
        disabled: disabled,
        style: inputStyle
      }, rest, {
        ref: this.$getInputRef,
        onFocus: this.$setHasOutline,
        onBlur: this.$unsetHasOutline,
        onKeyUp: this.$onKeyUp,
        onChange: this.$onInputChange
      })));
    };

    return ReactSwitch;
  }(react.Component);

  ReactSwitch.propTypes = {
    checked: propTypes.bool.isRequired,
    onChange: propTypes.func.isRequired,
    disabled: propTypes.bool,
    offColor: hexColorPropType,
    onColor: hexColorPropType,
    offHandleColor: hexColorPropType,
    onHandleColor: hexColorPropType,
    handleDiameter: propTypes.number,
    uncheckedIcon: propTypes.oneOfType([propTypes.bool, propTypes.element]),
    checkedIcon: propTypes.oneOfType([propTypes.bool, propTypes.element]),
    boxShadow: propTypes.string,
    activeBoxShadow: propTypes.string,
    height: propTypes.number,
    width: propTypes.number,
    id: propTypes.string,
    className: propTypes.string
  };
  ReactSwitch.defaultProps = {
    disabled: false,
    offColor: "#888",
    onColor: "#080",
    offHandleColor: "#fff",
    onHandleColor: "#fff",
    uncheckedIcon: uncheckedIcon,
    checkedIcon: checkedIcon,
    boxShadow: null,
    activeBoxShadow: "0 0 2px 3px #3bf",
    height: 28,
    width: 56
  };
  exports.default = ReactSwitch;
});
unwrapExports(reactSwitch_dev);

var reactSwitch = createCommonjsModule(function (module) {
  {
    module.exports = reactSwitch_dev;
  }
});

var Switch = reactSwitch.default;

var _ref = {
  name: "2x20oh-ThemeStyles",
  styles: ":root{--page-background:rgb(34,34,34);--text-dark-color:rgb(240,240,240);--text-color:rgb(240,240,240);}label:ThemeStyles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRhcmtNb2RlVG9nZ2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdtQiIsImZpbGUiOiJEYXJrTW9kZVRvZ2dsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBfU3dpdGNoIGZyb20gXCJyZWFjdC1zd2l0Y2hcIjtcbmltcG9ydCB7IGNzcywgR2xvYmFsIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBTd2l0Y2ggPSBfU3dpdGNoLmRlZmF1bHQ7XG5cbmNvbnN0IFRoZW1lU3R5bGVzID0gKHsgdGhlbWUgfSkgPT4ge1xuICBpZiAodGhlbWUgPT09IFwiZGFya1wiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxHbG9iYWxcbiAgICAgICAgc3R5bGVzPXtjc3NgXG4gICAgICAgICAgOnJvb3Qge1xuICAgICAgICAgICAgLS1wYWdlLWJhY2tncm91bmQ6IHJnYigzNCwgMzQsIDM0KTtcbiAgICAgICAgICAgIC0tdGV4dC1kYXJrLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgICAgICAgICAtLXRleHQtY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAvPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmNvbnN0IFRoZW1lRWRpdG9yID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcblxuICBsYWJlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5ncy1mb250KTtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXJrTW9kZVRvZ2dsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgdGhlbWVzOiBbXCJkYXJrXCIsIFwibGlnaHRcIl0sXG4gICAgbGFiZWw6IFwiRGFyayBNb2RlXCJcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICB0aGVtZTogXCJsaWdodFwiXG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlID0gZXZ0ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRoZW1lOiB0aGlzLnN0YXRlLnRoZW1lID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIC4uLm90aGVyUHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lRWRpdG9yIGNsYXNzTmFtZT1cIlRoZW1lRWRpdG9yXCIgey4uLm90aGVyUHJvcHN9PlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJTeXN0ZW1Gb250XCJcbiAgICAgICAgICBodG1sRm9yPVwidGhlbWUtc3dpdGNoXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUudGhlbWUgPT09IFwiZGFya1wifVxuICAgICAgICAgICAgaWQ9XCJ0aGVtZS1zd2l0Y2hcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHNwYW4+e3RoaXMucHJvcHMubGFiZWx9PC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8VGhlbWVTdHlsZXMgdGhlbWU9e3RoaXMuc3RhdGUudGhlbWV9IHRoZW1lcz17W1wiZGFya1wiLCBcImxpZ2h0XCJdfSAvPlxuICAgICAgPC9UaGVtZUVkaXRvcj5cbiAgICApO1xuICB9XG59XG4iXX0= */"
};

var ThemeStyles = function ThemeStyles(_ref2) {
  var theme = _ref2.theme;

  if (theme === "dark") {
    return jsx(Global, {
      styles: _ref
    });
  } else {
    return null;
  }
};

var ThemeEditor = _styled("div", {
  target: "e5i1odf0",
  label: "ThemeEditor"
})({
  name: "1s2knkw",
  styles: "display:flex;align-items:center;margin-bottom:0;label{display:flex;align-items:center;font-weight:500;cursor:pointer;font-family:var(--headings-font);}span{margin-left:6px;margin-top:auto;margin-bottom:auto;}",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRhcmtNb2RlVG9nZ2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCOEIiLCJmaWxlIjoiRGFya01vZGVUb2dnbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgX1N3aXRjaCBmcm9tIFwicmVhY3Qtc3dpdGNoXCI7XG5pbXBvcnQgeyBjc3MsIEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcblxuY29uc3QgU3dpdGNoID0gX1N3aXRjaC5kZWZhdWx0O1xuXG5jb25zdCBUaGVtZVN0eWxlcyA9ICh7IHRoZW1lIH0pID0+IHtcbiAgaWYgKHRoZW1lID09PSBcImRhcmtcIikge1xuICAgIHJldHVybiAoXG4gICAgICA8R2xvYmFsXG4gICAgICAgIHN0eWxlcz17Y3NzYFxuICAgICAgICAgIDpyb290IHtcbiAgICAgICAgICAgIC0tcGFnZS1iYWNrZ3JvdW5kOiByZ2IoMzQsIDM0LCAzNCk7XG4gICAgICAgICAgICAtLXRleHQtZGFyay1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xuICAgICAgICAgICAgLS10ZXh0LWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgLz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5jb25zdCBUaGVtZUVkaXRvciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZ3MtZm9udCk7XG4gIH1cblxuICBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGFya01vZGVUb2dnbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHRoZW1lczogW1wiZGFya1wiLCBcImxpZ2h0XCJdLFxuICAgIGxhYmVsOiBcIkRhcmsgTW9kZVwiXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgdGhlbWU6IFwibGlnaHRcIlxuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IGV2dCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aGVtZTogdGhpcy5zdGF0ZS50aGVtZSA9PT0gXCJkYXJrXCIgPyBcImxpZ2h0XCIgOiBcImRhcmtcIlxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuLCAuLi5vdGhlclByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUaGVtZUVkaXRvciBjbGFzc05hbWU9XCJUaGVtZUVkaXRvclwiIHsuLi5vdGhlclByb3BzfT5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiU3lzdGVtRm9udFwiXG4gICAgICAgICAgaHRtbEZvcj1cInRoZW1lLXN3aXRjaFwiXG4gICAgICAgID5cbiAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnRoZW1lID09PSBcImRhcmtcIn1cbiAgICAgICAgICAgIGlkPVwidGhlbWUtc3dpdGNoXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPFRoZW1lU3R5bGVzIHRoZW1lPXt0aGlzLnN0YXRlLnRoZW1lfSB0aGVtZXM9e1tcImRhcmtcIiwgXCJsaWdodFwiXX0gLz5cbiAgICAgIDwvVGhlbWVFZGl0b3I+XG4gICAgKTtcbiAgfVxufVxuIl19 */"
});

var DarkModeToggle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DarkModeToggle, _React$Component);

  function DarkModeToggle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DarkModeToggle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DarkModeToggle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      theme: "light"
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (evt) {
      _this.setState({
        theme: _this.state.theme === "dark" ? "light" : "dark"
      });
    });

    return _this;
  }

  _createClass(DarkModeToggle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          otherProps = _objectWithoutProperties(_this$props, ["children"]);

      return jsx(ThemeEditor, _extends({
        className: "ThemeEditor"
      }, otherProps), jsx("label", {
        onClick: this.handleChange,
        className: "SystemFont",
        htmlFor: "theme-switch"
      }, jsx(Switch, {
        onChange: this.handleChange,
        checked: this.state.theme === "dark",
        id: "theme-switch"
      }), jsx("span", null, this.props.label)), jsx(ThemeStyles, {
        theme: this.state.theme,
        themes: ["dark", "light"]
      }));
    }
  }]);

  return DarkModeToggle;
}(react.Component);

_defineProperty(DarkModeToggle, "defaultProps", {
  themes: ["dark", "light"],
  label: "Dark Mode"
});

export default DarkModeToggle;
