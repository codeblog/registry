import _styled from '@emotion/styled-base';
import { jsx } from '@emotion/core';
import React, { PureComponent } from 'react';

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
    module.exports = reactIs_production_min;
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

var has = Function.call.bind(Object.prototype.hasOwnProperty);

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function factoryWithThrowingShims() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
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
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
});

var Point_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Point =
  /**
   *
   * @param {number} x
   * @param {number} y
   */
  function Point(x, y) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  };

  exports.default = Point;
});
unwrapExports(Point_1);

var LazyPoint_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _Point3 = _interopRequireDefault(Point_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var LazyPoint = function (_Point) {
    _inherits(LazyPoint, _Point);

    function LazyPoint() {
      _classCallCheck(this, LazyPoint);

      return _possibleConstructorReturn(this, (LazyPoint.__proto__ || Object.getPrototypeOf(LazyPoint)).apply(this, arguments));
    }

    _createClass(LazyPoint, [{
      key: 'update',

      /**
       * Update the x and y values
       *
       * @param {Point} point
       */
      value: function update(point) {
        this.x = point.x;
        this.y = point.y;
      }
      /**
       * Move the point to another position using an angle and distance
       *
       * @param {number} angle The angle in radians
       * @param {number} distance How much the point should be moved
       */

    }, {
      key: 'moveByAngle',
      value: function moveByAngle(angle, distance) {
        // Rotate the angle based on the browser coordinate system ([0,0] in the top left)
        var angleRotated = angle + Math.PI / 2;
        this.x = this.x + Math.sin(angleRotated) * distance, this.y = this.y - Math.cos(angleRotated) * distance;
      }
      /**
       * Check if this point is the same as another point
       *
       * @param {Point} point
       * @returns {boolean}
       */

    }, {
      key: 'equalsTo',
      value: function equalsTo(point) {
        return this.x === point.x && this.y === point.y;
      }
      /**
       * Get the difference for x and y axis to another point
       *
       * @param {Point} point
       * @returns {Point}
       */

    }, {
      key: 'getDifferenceTo',
      value: function getDifferenceTo(point) {
        return new _Point3.default(this.x - point.x, this.y - point.y);
      }
      /**
       * Calculate distance to another point
       *
       * @param {Point} point
       * @returns {Point}
       */

    }, {
      key: 'getDistanceTo',
      value: function getDistanceTo(point) {
        var diff = this.getDifferenceTo(point);
        return Math.sqrt(Math.pow(diff.x, 2) + Math.pow(diff.y, 2));
      }
      /**
       * Calculate the angle to another point
       *
       * @param {Point} point
       * @returns {Point}
       */

    }, {
      key: 'getAngleTo',
      value: function getAngleTo(point) {
        var diff = this.getDifferenceTo(point);
        return Math.atan2(diff.y, diff.x);
      }
      /**
       * Return a simple object with x and y properties
       *
       * @returns {object}
       */

    }, {
      key: 'toObject',
      value: function toObject() {
        return {
          x: this.x,
          y: this.y
        };
      }
    }]);

    return LazyPoint;
  }(_Point3.default);

  exports.default = LazyPoint;
});
unwrapExports(LazyPoint_1);

var LazyBrush_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _LazyPoint2 = _interopRequireDefault(LazyPoint_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var RADIUS_DEFAULT = 30;

  var LazyBrush = function () {
    /**
     * constructor
     *
     * @param {object} settings
     * @param {number} settings.radius The radius for the lazy area
     * @param {boolean} settings.enabled
     */
    function LazyBrush() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$radius = _ref.radius,
          radius = _ref$radius === undefined ? RADIUS_DEFAULT : _ref$radius,
          _ref$enabled = _ref.enabled,
          enabled = _ref$enabled === undefined ? true : _ref$enabled,
          _ref$initialPoint = _ref.initialPoint,
          initialPoint = _ref$initialPoint === undefined ? {
        x: 0,
        y: 0
      } : _ref$initialPoint;

      _classCallCheck(this, LazyBrush);

      this.radius = radius;
      this._isEnabled = enabled;
      this.pointer = new _LazyPoint2.default(initialPoint.x, initialPoint.y);
      this.brush = new _LazyPoint2.default(initialPoint.x, initialPoint.y);
      this.angle = 0;
      this.distance = 0;
      this._hasMoved = false;
    }
    /**
     * Enable lazy brush calculations.
     *
     */


    _createClass(LazyBrush, [{
      key: 'enable',
      value: function enable() {
        this._isEnabled = true;
      }
      /**
       * Disable lazy brush calculations.
       *
       */

    }, {
      key: 'disable',
      value: function disable() {
        this._isEnabled = false;
      }
      /**
       * @returns {boolean}
       */

    }, {
      key: 'isEnabled',
      value: function isEnabled() {
        return this._isEnabled;
      }
      /**
       * Update the radius
       *
       * @param {number} radius
       */

    }, {
      key: 'setRadius',
      value: function setRadius(radius) {
        this.radius = radius;
      }
      /**
       * Return the current radius
       *
       * @returns {number}
       */

    }, {
      key: 'getRadius',
      value: function getRadius() {
        return this.radius;
      }
      /**
       * Return the brush coordinates as a simple object
       *
       * @returns {object}
       */

    }, {
      key: 'getBrushCoordinates',
      value: function getBrushCoordinates() {
        return this.brush.toObject();
      }
      /**
       * Return the pointer coordinates as a simple object
       *
       * @returns {object}
       */

    }, {
      key: 'getPointerCoordinates',
      value: function getPointerCoordinates() {
        return this.pointer.toObject();
      }
      /**
       * Return the brush as a LazyPoint
       *
       * @returns {LazyPoint}
       */

    }, {
      key: 'getBrush',
      value: function getBrush() {
        return this.brush;
      }
      /**
       * Return the pointer as a LazyPoint
       *
       * @returns {LazyPoint}
       */

    }, {
      key: 'getPointer',
      value: function getPointer() {
        return this.pointer;
      }
      /**
       * Return the angle between pointer and brush
       *
       * @returns {number} Angle in radians
       */

    }, {
      key: 'getAngle',
      value: function getAngle() {
        return this.angle;
      }
      /**
       * Return the distance between pointer and brush
       *
       * @returns {number} Distance in pixels
       */

    }, {
      key: 'getDistance',
      value: function getDistance() {
        return this.distance;
      }
      /**
       * Return if the previous update has moved the brush.
       *
       * @returns {boolean} Whether the brush moved previously.
       */

    }, {
      key: 'brushHasMoved',
      value: function brushHasMoved() {
        return this._hasMoved;
      }
      /**
       * Updates the pointer point and calculates the new brush point.
       *
       * @param {Point} newPointerPoint
       * @param {Object} options
       * @param {Boolean} options.both Force update pointer and brush
       * @returns {Boolean} Whether any of the two points changed
       */

    }, {
      key: 'update',
      value: function update(newPointerPoint) {
        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref2$both = _ref2.both,
            both = _ref2$both === undefined ? false : _ref2$both;

        this._hasMoved = false;

        if (this.pointer.equalsTo(newPointerPoint) && !both) {
          return false;
        }

        this.pointer.update(newPointerPoint);

        if (both) {
          this._hasMoved = true;
          this.brush.update(newPointerPoint);
          return true;
        }

        if (this._isEnabled) {
          this.distance = this.pointer.getDistanceTo(this.brush);
          this.angle = this.pointer.getAngleTo(this.brush);

          if (this.distance > this.radius) {
            this.brush.moveByAngle(this.angle, this.distance - this.radius);
            this._hasMoved = true;
          }
        } else {
          this.distance = 0;
          this.angle = 0;
          this.brush.update(newPointerPoint);
          this._hasMoved = true;
        }

        return true;
      }
    }]);

    return LazyBrush;
  }();

  exports.default = LazyBrush;
});
unwrapExports(LazyBrush_1);

var lib = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LazyPoint = exports.Point = exports.LazyBrush = undefined;

  var _LazyBrush2 = _interopRequireDefault(LazyBrush_1);

  var _Point2 = _interopRequireDefault(Point_1);

  var _LazyPoint2 = _interopRequireDefault(LazyPoint_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.LazyBrush = _LazyBrush2.default;
  exports.Point = _Point2.default;
  exports.LazyPoint = _LazyPoint2.default;
});
unwrapExports(lib);
var lib_1 = lib.LazyPoint;
var lib_2 = lib.Point;
var lib_3 = lib.LazyBrush;

var Point_1$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Point = function () {
    /**
     *
     * @param {number} x
     * @param {number} y
     */
    function Point(x, y) {
      _classCallCheck(this, Point);

      this.x = x;
      this.y = y;
    }
    /**
     * Update the x and y values
     *
     * @param {Point} point
     */


    _createClass(Point, [{
      key: "update",
      value: function update(point) {
        this.x = point.x;
        this.y = point.y;
      }
      /**
       * Get the difference for x and y axis to another point
       *
       * @param {Point} point
       * @returns {Point}
       */

    }, {
      key: "getDifferenceTo",
      value: function getDifferenceTo(point) {
        return new Point(this.x - point.x, this.y - point.y);
      }
      /**
       * Calculate distance to another point
       *
       * @param {Point} point
       * @returns {Point}
       */

    }, {
      key: "getDistanceTo",
      value: function getDistanceTo(point) {
        var diff = this.getDifferenceTo(point);
        return Math.sqrt(Math.pow(diff.x, 2) + Math.pow(diff.y, 2));
      }
    }]);

    return Point;
  }();

  exports.default = Point;
});
unwrapExports(Point_1$1);

var Catenary_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  /**
   * Given two points and a length, calculate and draw the catenary.
   * 
   * JavaScript implementation:
   * Copyright (c) 2018 Jan Hug <me@dulnan.net>
   * Released under the MIT license.
   * 
   * ----------------------------------------------------------------------------
   * 
   * Original ActionScript implementation:
   * Copyright poiasd ( http://wonderfl.net/user/poiasd )
   * MIT License ( http://www.opensource.org/licenses/mit-license.php )
   * Downloaded from: http://wonderfl.net/c/8Bnl
   * 
   * ----------------------------------------------------------------------------
   * 
   * Archived by and downloaded from:
   * http://wa.zozuar.org/code.php?c=8Bnl
   */


  var _Point2 = _interopRequireDefault(Point_1$1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var EPSILON = 1e-6;

  var Catenary = function () {
    /**
     * constructor
     *
     * @param {Object} settings
     * @param {Number} settings.segments Number of segments of the chain.
     * @param {Number} settings.iterationLimit Maximum amount iterations for getting catenary parameters.
     */
    function Catenary() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$segments = _ref.segments,
          segments = _ref$segments === undefined ? 50 : _ref$segments,
          _ref$iterationLimit = _ref.iterationLimit,
          iterationLimit = _ref$iterationLimit === undefined ? 100 : _ref$iterationLimit;

      _classCallCheck(this, Catenary);

      this.p1 = new _Point2.default();
      this.p2 = new _Point2.default();
      this.segments = segments;
      this.iterationLimit = iterationLimit;
    }
    /**
     * Draws a catenary given two coordinates, a length and a context.
     * 
     * @param {CanvasRenderingContext2D} context The canvas context to draw the catenary on to.
     * @param {Point} p1 First point
     * @param {Point} p2 Second point
     * @param {Number} chainLength The length of the catenary
     */


    _createClass(Catenary, [{
      key: 'drawToCanvas',
      value: function drawToCanvas(context, point1, point2, chainLength) {
        this.p1.update(point1);
        this.p2.update(point2);
        var isFlipped = this.p1.x > this.p2.x;
        var p1 = isFlipped ? this.p2 : this.p1;
        var p2 = isFlipped ? this.p1 : this.p2;
        var distance = p1.getDistanceTo(p2);
        var curveData = [];
        var isStraight = true; // Prevent "expensive" catenary calculations if it would only result
        // in a straight line.

        if (distance < chainLength) {
          var diff = p2.x - p1.x; // If the distance on the x axis of both points is too small, don't
          // calculate a catenary.

          if (diff > 0.01) {
            var h = p2.x - p1.x;
            var v = p2.y - p1.y;
            var a = -this.getCatenaryParameter(h, v, chainLength, this.iterationLimit);
            var x = (a * Math.log((chainLength + v) / (chainLength - v)) - h) * 0.5;
            var y = a * Math.cosh(x / a);
            var offsetX = p1.x - x;
            var offsetY = p1.y - y;
            curveData = this.getCurve(a, p1, p2, offsetX, offsetY, this.segments);
            isStraight = false;
          } else {
            var mx = (p1.x + p2.x) * 0.5;
            var my = (p1.y + p2.y + chainLength) * 0.5;
            curveData = [[p1.x, p1.y], [mx, my], [p2.x, p2.y]];
          }
        } else {
          curveData = [[p1.x, p1.y], [p2.x, p2.y]];
        }

        if (isStraight) {
          this.drawLine(curveData, context);
        } else {
          this.drawCurve(curveData, context);
        }

        return curveData;
      }
      /**
       * Determines catenary parameter.
       * 
       * @param {Number} h Horizontal distance of both points.
       * @param {Number} v Vertical distance of both points.
       * @param {Number} length The catenary length.
       * @param {Number} limit Maximum amount of iterations to find parameter.
       */

    }, {
      key: 'getCatenaryParameter',
      value: function getCatenaryParameter(h, v, length, limit) {
        var m = Math.sqrt(length * length - v * v) / h;
        var x = Math.acosh(m) + 1;
        var prevx = -1;
        var count = 0;

        while (Math.abs(x - prevx) > EPSILON && count < limit) {
          prevx = x;
          x = x - (Math.sinh(x) - m * x) / (Math.cosh(x) - m);
          count++;
        }

        return h / (2 * x);
      }
      /**
       * Calculate the catenary curve.
       * Increasing the segments value will produce a catenary closer
       * to reality, but will require more calcluations.
       * 
       * @param {Number} a The catenary parameter.
       * @param {Point} p1 First point
       * @param {Point} p2 Second point
       * @param {Number} offsetX The calculated offset on the x axis.
       * @param {Number} offsetY The calculated offset on the y axis.
       * @param {Number} segments How many "parts" the chain should be made of.
       */

    }, {
      key: 'getCurve',
      value: function getCurve(a, p1, p2, offsetX, offsetY, segments) {
        var data = [p1.x, a * Math.cosh((p1.x - offsetX) / a) + offsetY];
        var d = p2.x - p1.x;
        var length = segments - 1;

        for (var i = 0; i < length; i++) {
          var x = p1.x + d * (i + 0.5) / length;
          var y = a * Math.cosh((x - offsetX) / a) + offsetY;
          data.push(x, y);
        }

        data.push(p2.x, a * Math.cosh((p2.x - offsetX) / a) + offsetY);
        return data;
      }
      /**
       * Draws a straight line between two points.
       *
       * @param {Array} data Even indices are x, odd are y.
       * @param {CanvasRenderingContext2D} context The context to draw to.
       */

    }, {
      key: 'drawLine',
      value: function drawLine(data, context) {
        context.moveTo(data[0][0], data[0][1]);
        context.lineTo(data[1][0], data[1][1]);
      }
      /**
       * Draws a quadratic curve between every calculated catenary segment,
       * so that the segments don't look like straight lines.
       *
       * @param {Array} data Even indices are x, odd are y.
       * @param {CanvasRenderingContext2D} context The context to draw to.
       * 
       * @returns {Array} The original segment coordinates.
       */

    }, {
      key: 'drawCurve',
      value: function drawCurve(data, context) {
        var length = data.length * 0.5 - 1;
        var ox = data[2];
        var oy = data[3];
        var temp = [];
        context.moveTo(data[0], data[1]);

        for (var i = 2; i < length; i++) {
          var x = data[i * 2];
          var y = data[i * 2 + 1];
          var mx = (x + ox) * 0.5;
          var my = (y + oy) * 0.5;
          temp.push([ox, oy, mx, my]);
          context.quadraticCurveTo(ox, oy, mx, my);
          ox = x;
          oy = y;
        }

        length = data.length;
        context.quadraticCurveTo(data[length - 4], data[length - 3], data[length - 2], data[length - 1]);
        return temp;
      }
    }]);

    return Catenary;
  }();

  exports.default = Catenary;
});
unwrapExports(Catenary_1);

var lib$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Point = exports.Catenary = undefined;

  var _Catenary2 = _interopRequireDefault(Catenary_1);

  var _Point2 = _interopRequireDefault(Point_1$1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.Catenary = _Catenary2.default;
  exports.Point = _Point2.default;
});
unwrapExports(lib$1);
var lib_1$1 = lib$1.Point;
var lib_2$1 = lib$1.Catenary;

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */

/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = function () {
  if (typeof Map !== 'undefined') {
    return Map;
  }
  /**
   * Returns index in provided array that matches the specified key.
   *
   * @param {Array<Array>} arr
   * @param {*} key
   * @returns {number}
   */


  function getIndex(arr, key) {
    var result = -1;
    arr.some(function (entry, index) {
      if (entry[0] === key) {
        result = index;
        return true;
      }

      return false;
    });
    return result;
  }

  return (
    /** @class */
    function () {
      function class_1() {
        this.__entries__ = [];
      }

      Object.defineProperty(class_1.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function get() {
          return this.__entries__.length;
        },
        enumerable: true,
        configurable: true
      });
      /**
       * @param {*} key
       * @returns {*}
       */

      class_1.prototype.get = function (key) {
        var index = getIndex(this.__entries__, key);
        var entry = this.__entries__[index];
        return entry && entry[1];
      };
      /**
       * @param {*} key
       * @param {*} value
       * @returns {void}
       */


      class_1.prototype.set = function (key, value) {
        var index = getIndex(this.__entries__, key);

        if (~index) {
          this.__entries__[index][1] = value;
        } else {
          this.__entries__.push([key, value]);
        }
      };
      /**
       * @param {*} key
       * @returns {void}
       */


      class_1.prototype.delete = function (key) {
        var entries = this.__entries__;
        var index = getIndex(entries, key);

        if (~index) {
          entries.splice(index, 1);
        }
      };
      /**
       * @param {*} key
       * @returns {void}
       */


      class_1.prototype.has = function (key) {
        return !!~getIndex(this.__entries__, key);
      };
      /**
       * @returns {void}
       */


      class_1.prototype.clear = function () {
        this.__entries__.splice(0);
      };
      /**
       * @param {Function} callback
       * @param {*} [ctx=null]
       * @returns {void}
       */


      class_1.prototype.forEach = function (callback, ctx) {
        if (ctx === void 0) {
          ctx = null;
        }

        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i];
          callback.call(ctx, entry[1], entry[0]);
        }
      };

      return class_1;
    }()
  );
}();
/**
 * Detects whether window and document objects are available in current environment.
 */


var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document; // Returns global object of a current environment.

var global$1 = function () {
  if (typeof global !== 'undefined' && global.Math === Math) {
    return global;
  }

  if (typeof self !== 'undefined' && self.Math === Math) {
    return self;
  }

  if (typeof window !== 'undefined' && window.Math === Math) {
    return window;
  } // eslint-disable-next-line no-new-func


  return Function('return this')();
}();
/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */


var requestAnimationFrame$1 = function () {
  if (typeof requestAnimationFrame === 'function') {
    // It's required to use a bounded function because IE sometimes throws
    // an "Invalid calling object" error if rAF is invoked without the global
    // object on the left hand side.
    return requestAnimationFrame.bind(global$1);
  }

  return function (callback) {
    return setTimeout(function () {
      return callback(Date.now());
    }, 1000 / 60);
  };
}(); // Defines minimum timeout before adding a trailing call.


var trailingTimeout = 2;
/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */

function throttle(callback, delay) {
  var leadingCall = false,
      trailingCall = false,
      lastCallTime = 0;
  /**
   * Invokes the original callback function and schedules new invocation if
   * the "proxy" was called during current request.
   *
   * @returns {void}
   */

  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }

    if (trailingCall) {
      proxy();
    }
  }
  /**
   * Callback invoked after the specified delay. It will further postpone
   * invocation of the original function delegating it to the
   * requestAnimationFrame.
   *
   * @returns {void}
   */


  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  /**
   * Schedules invocation of the original function.
   *
   * @returns {void}
   */


  function proxy() {
    var timeStamp = Date.now();

    if (leadingCall) {
      // Reject immediately following calls.
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      } // Schedule new call to be in invoked when the pending one is resolved.
      // This is important for "transitions" which never actually start
      // immediately so there is a chance that we might miss one if change
      // happens amids the pending invocation.


      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }

    lastCallTime = timeStamp;
  }

  return proxy;
} // Minimum delay before invoking the update of observers.


var REFRESH_DELAY = 20; // A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.

var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight']; // Check if MutationObserver is available.

var mutationObserverSupported = typeof MutationObserver !== 'undefined';
/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */

var ResizeObserverController =
/** @class */
function () {
  /**
   * Creates a new instance of ResizeObserverController.
   *
   * @private
   */
  function ResizeObserverController() {
    /**
     * Indicates whether DOM listeners have been added.
     *
     * @private {boolean}
     */
    this.connected_ = false;
    /**
     * Tells that controller has subscribed for Mutation Events.
     *
     * @private {boolean}
     */

    this.mutationEventsAdded_ = false;
    /**
     * Keeps reference to the instance of MutationObserver.
     *
     * @private {MutationObserver}
     */

    this.mutationsObserver_ = null;
    /**
     * A list of connected observers.
     *
     * @private {Array<ResizeObserverSPI>}
     */

    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  /**
   * Adds observer to observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be added.
   * @returns {void}
   */


  ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    } // Add listeners if they haven't been added yet.


    if (!this.connected_) {
      this.connect_();
    }
  };
  /**
   * Removes observer from observers list.
   *
   * @param {ResizeObserverSPI} observer - Observer to be removed.
   * @returns {void}
   */


  ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer); // Remove observer if it's present in registry.

    if (~index) {
      observers.splice(index, 1);
    } // Remove listeners if controller has no connected observers.


    if (!observers.length && this.connected_) {
      this.disconnect_();
    }
  };
  /**
   * Invokes the update of observers. It will continue running updates insofar
   * it detects changes.
   *
   * @returns {void}
   */


  ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_(); // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.

    if (changesDetected) {
      this.refresh();
    }
  };
  /**
   * Updates every observer from observers list and notifies them of queued
   * entries.
   *
   * @private
   * @returns {boolean} Returns "true" if any observer has detected changes in
   *      dimensions of it's elements.
   */


  ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
      return observer.gatherActive(), observer.hasActive();
    }); // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.

    activeObservers.forEach(function (observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  /**
   * Initializes DOM listeners.
   *
   * @private
   * @returns {void}
   */


  ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
      return;
    } // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.


    document.addEventListener('transitionend', this.onTransitionEnd_);
    window.addEventListener('resize', this.refresh);

    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    } else {
      document.addEventListener('DOMSubtreeModified', this.refresh);
      this.mutationEventsAdded_ = true;
    }

    this.connected_ = true;
  };
  /**
   * Removes DOM listeners.
   *
   * @private
   * @returns {void}
   */


  ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
      return;
    }

    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);

    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }

    if (this.mutationEventsAdded_) {
      document.removeEventListener('DOMSubtreeModified', this.refresh);
    }

    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  /**
   * "Transitionend" event handler.
   *
   * @private
   * @param {TransitionEvent} event
   * @returns {void}
   */


  ResizeObserverController.prototype.onTransitionEnd_ = function (_a) {
    var _b = _a.propertyName,
        propertyName = _b === void 0 ? '' : _b; // Detect whether transition may affect dimensions of an element.

    var isReflowProperty = transitionKeys.some(function (key) {
      return !!~propertyName.indexOf(key);
    });

    if (isReflowProperty) {
      this.refresh();
    }
  };
  /**
   * Returns instance of the ResizeObserverController.
   *
   * @returns {ResizeObserverController}
   */


  ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController();
    }

    return this.instance_;
  };
  /**
   * Holds reference to the controller's instance.
   *
   * @private {ResizeObserverController}
   */


  ResizeObserverController.instance_ = null;
  return ResizeObserverController;
}();
/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */


var defineConfigurable = function defineConfigurable(target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }

  return target;
};
/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */


var getWindowOf = function getWindowOf(target) {
  // Assume that the element is an instance of Node, which means that it
  // has the "ownerDocument" property from which we can retrieve a
  // corresponding global object.
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView; // Return the local global object if it's not possible extract one from
  // provided element.

  return ownerGlobal || global$1;
}; // Placeholder of an empty content rectangle.


var emptyRect = createRectInit(0, 0, 0, 0);
/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */

function toFloat(value) {
  return parseFloat(value) || 0;
}
/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */


function getBordersSize(styles) {
  var positions = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }

  return positions.reduce(function (size, position) {
    var value = styles['border-' + position + '-width'];
    return size + toFloat(value);
  }, 0);
}
/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */


function getPaddings(styles) {
  var positions = ['top', 'right', 'bottom', 'left'];
  var paddings = {};

  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles['padding-' + position];
    paddings[position] = toFloat(value);
  }

  return paddings;
}
/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */


function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */


function getHTMLElementContentRect(target) {
  // Client width & height properties can't be
  // used exclusively as they provide rounded values.
  var clientWidth = target.clientWidth,
      clientHeight = target.clientHeight; // By this condition we can catch all non-replaced inline, hidden and
  // detached elements. Though elements with width & height properties less
  // than 0.5 will be discarded as well.
  //
  // Without it we would need to implement separate methods for each of
  // those cases and it's not possible to perform a precise and performance
  // effective test for hidden elements. E.g. even jQuery's ':visible' filter
  // gives wrong results for elements with width & height less than 0.5.

  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }

  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom; // Computed styles of width & height are being used because they are the
  // only dimensions available to JS that contain non-rounded values. It could
  // be possible to utilize the getBoundingClientRect if only it's data wasn't
  // affected by CSS transformations let alone paddings, borders and scroll bars.

  var width = toFloat(styles.width),
      height = toFloat(styles.height); // Width & height include paddings and borders when the 'border-box' box
  // model is applied (except for IE).

  if (styles.boxSizing === 'border-box') {
    // Following conditions are required to handle Internet Explorer which
    // doesn't include paddings and borders to computed CSS dimensions.
    //
    // We can say that if CSS dimensions + paddings are equal to the "client"
    // properties then it's either IE, and thus we don't need to subtract
    // anything, or an element merely doesn't have paddings/borders styles.
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, 'left', 'right') + horizPad;
    }

    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
    }
  } // Following steps can't be applied to the document's root element as its
  // client[Width/Height] properties represent viewport area of the window.
  // Besides, it's as well not necessary as the <html> itself neither has
  // rendered scroll bars nor it can be clipped.


  if (!isDocumentElement(target)) {
    // In some browsers (only in Firefox, actually) CSS width & height
    // include scroll bars size which can be removed at this step as scroll
    // bars are the only difference between rounded dimensions + paddings
    // and "client" properties, though that is not always true in Chrome.
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight; // Chrome has a rather weird rounding of "client" properties.
    // E.g. for an element with content width of 314.2px it sometimes gives
    // the client width of 315px and for the width of 314.7px it may give
    // 314px. And it doesn't happen all the time. So just ignore this delta
    // as a non-relevant.

    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }

    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }

  return createRectInit(paddings.left, paddings.top, width, height);
}
/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */


var isSVGGraphicsElement = function () {
  // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
  // interface.
  if (typeof SVGGraphicsElement !== 'undefined') {
    return function (target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  } // If it's so, then check that element is at least an instance of the
  // SVGElement and that it has the "getBBox" method.
  // eslint-disable-next-line no-extra-parens


  return function (target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function';
  };
}();
/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */


function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */


function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }

  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }

  return getHTMLElementContentRect(target);
}
/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */


function createReadOnlyRect(_a) {
  var x = _a.x,
      y = _a.y,
      width = _a.width,
      height = _a.height; // If DOMRectReadOnly is available use it as a prototype for the rectangle.

  var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype); // Rectangle's properties are not writable and non-enumerable.

  defineConfigurable(rect, {
    x: x,
    y: y,
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */


function createRectInit(x, y, width, height) {
  return {
    x: x,
    y: y,
    width: width,
    height: height
  };
}
/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */


var ResizeObservation =
/** @class */
function () {
  /**
   * Creates an instance of ResizeObservation.
   *
   * @param {Element} target - Element to be observed.
   */
  function ResizeObservation(target) {
    /**
     * Broadcasted width of content rectangle.
     *
     * @type {number}
     */
    this.broadcastWidth = 0;
    /**
     * Broadcasted height of content rectangle.
     *
     * @type {number}
     */

    this.broadcastHeight = 0;
    /**
     * Reference to the last observed content rectangle.
     *
     * @private {DOMRectInit}
     */

    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target;
  }
  /**
   * Updates content rectangle and tells whether it's width or height properties
   * have changed since the last broadcast.
   *
   * @returns {boolean}
   */


  ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };
  /**
   * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
   * from the corresponding properties of the last observed content rectangle.
   *
   * @returns {DOMRectInit} Last observed content rectangle.
   */


  ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };

  return ResizeObservation;
}();

var ResizeObserverEntry =
/** @class */
function () {
  /**
   * Creates an instance of ResizeObserverEntry.
   *
   * @param {Element} target - Element that is being observed.
   * @param {DOMRectInit} rectInit - Data of the element's content rectangle.
   */
  function ResizeObserverEntry(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit); // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.

    defineConfigurable(this, {
      target: target,
      contentRect: contentRect
    });
  }

  return ResizeObserverEntry;
}();

var ResizeObserverSPI =
/** @class */
function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback function that is invoked
   *      when one of the observed elements changes it's content dimensions.
   * @param {ResizeObserverController} controller - Controller instance which
   *      is responsible for the updates of observer.
   * @param {ResizeObserver} callbackCtx - Reference to the public
   *      ResizeObserver instance which will be passed to callback function.
   */
  function ResizeObserverSPI(callback, controller, callbackCtx) {
    /**
     * Collection of resize observations that have detected changes in dimensions
     * of elements.
     *
     * @private {Array<ResizeObservation>}
     */
    this.activeObservations_ = [];
    /**
     * Registry of the ResizeObservation instances.
     *
     * @private {Map<Element, ResizeObservation>}
     */

    this.observations_ = new MapShim();

    if (typeof callback !== 'function') {
      throw new TypeError('The callback provided as parameter 1 is not a function.');
    }

    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  /**
   * Starts observing provided element.
   *
   * @param {Element} target - Element to be observed.
   * @returns {void}
   */


  ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    } // Do nothing if current environment doesn't have the Element interface.


    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_; // Do nothing if element is already being observed.

    if (observations.has(target)) {
      return;
    }

    observations.set(target, new ResizeObservation(target));
    this.controller_.addObserver(this); // Force the update of observations.

    this.controller_.refresh();
  };
  /**
   * Stops observing provided element.
   *
   * @param {Element} target - Element to stop observing.
   * @returns {void}
   */


  ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    } // Do nothing if current environment doesn't have the Element interface.


    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
      return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_; // Do nothing if element is not being observed.

    if (!observations.has(target)) {
      return;
    }

    observations.delete(target);

    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  /**
   * Stops observing all elements.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  /**
   * Collects observation instances the associated element of which has changed
   * it's content rectangle.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.gatherActive = function () {
    var _this = this;

    this.clearActive();
    this.observations_.forEach(function (observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  /**
   * Invokes initial callback function with a list of ResizeObserverEntry
   * instances collected from active resize observations.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
      return;
    }

    var ctx = this.callbackCtx_; // Create ResizeObserverEntry instance for every active observation.

    var entries = this.activeObservations_.map(function (observation) {
      return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });
    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
  };
  /**
   * Clears the collection of active observations.
   *
   * @returns {void}
   */


  ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
  };
  /**
   * Tells whether observer has active observations.
   *
   * @returns {boolean}
   */


  ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
  };

  return ResizeObserverSPI;
}(); // Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.


var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();
/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */

var ResizeObserver =
/** @class */
function () {
  /**
   * Creates a new instance of ResizeObserver.
   *
   * @param {ResizeObserverCallback} callback - Callback that is invoked when
   *      dimensions of the observed elements change.
   */
  function ResizeObserver(callback) {
    if (!(this instanceof ResizeObserver)) {
      throw new TypeError('Cannot call a class as a function.');
    }

    if (!arguments.length) {
      throw new TypeError('1 argument required, but only 0 present.');
    }

    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }

  return ResizeObserver;
}(); // Expose public methods of ResizeObserver.


['observe', 'unobserve', 'disconnect'].forEach(function (method) {
  ResizeObserver.prototype[method] = function () {
    var _a;

    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});

var index = function () {
  // Export existing implementation if available.
  if (typeof global$1.ResizeObserver !== 'undefined') {
    return global$1.ResizeObserver;
  }

  return ResizeObserver;
}();

/** 
 * Original from: https://stackoverflow.com/questions/21961839/simulation-background-size-cover-in-canvas
 * Original By Ken Fyrstenberg Nilsen
 * 
 * Note: img must be fully loaded or have correct width & height set.
 */
function drawImageProp() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      ctx = _ref.ctx,
      img = _ref.img,
      x = _ref.x,
      y = _ref.y,
      w = _ref.w,
      h = _ref.h,
      offsetX = _ref.offsetX,
      offsetY = _ref.offsetY; // Defaults


  if (typeof x !== "number") x = 0;
  if (typeof y !== "number") y = 0;
  if (typeof w !== "number") w = ctx.canvas.width;
  if (typeof h !== "number") h = ctx.canvas.height;
  if (typeof offsetX !== "number") offsetX = 0.5;
  if (typeof offsetY !== "number") offsetY = 0.5; // keep bounds [0.0, 1.0]

  if (offsetX < 0) offsetX = 0;
  if (offsetY < 0) offsetY = 0;
  if (offsetX > 1) offsetX = 1;
  if (offsetY > 1) offsetY = 1;
  var iw = img.width,
      ih = img.height,
      r = Math.min(w / iw, h / ih),
      nw = iw * r,
      // new prop. width
  nh = ih * r,
      // new prop. height
  cx,
      cy,
      cw,
      ch,
      ar = 1; // decide which gap to fill

  if (nw < w) ar = w / nw;
  if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh; // updated

  nw *= ar;
  nh *= ar; // calc source rectangle

  cw = iw / (nw / w);
  ch = ih / (nh / h);
  cx = (iw - cw) * offsetX;
  cy = (ih - ch) * offsetY; // make sure source rectangle is valid

  if (cx < 0) cx = 0;
  if (cy < 0) cy = 0;
  if (cw > iw) cw = iw;
  if (ch > ih) ch = ih; // fill image in dest. rectangle

  ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
}

var _extends$1 = Object.assign || function (target) {
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

var _class, _temp;

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function midPointBtw(p1, p2) {
  return {
    x: p1.x + (p2.x - p1.x) / 2,
    y: p1.y + (p2.y - p1.y) / 2
  };
}

var canvasStyle = {
  display: "block",
  position: "absolute"
};
var canvasTypes = [{
  name: "interface",
  zIndex: 15
}, {
  name: "drawing",
  zIndex: 11
}, {
  name: "temp",
  zIndex: 12
}, {
  name: "grid",
  zIndex: 10
}];
var dimensionsPropTypes = propTypes.oneOfType([propTypes.number, propTypes.string]);

var _default = (_temp = _class = function (_PureComponent) {
  _inherits$1(_default, _PureComponent);

  function _default(props) {
    _classCallCheck$1(this, _default);

    var _this = _possibleConstructorReturn$1(this, _PureComponent.call(this, props));

    _this.componentWillUnmount = function () {
      _this.canvasObserver.unobserve(_this.canvasContainer);
    };

    _this.drawImage = function () {
      if (!_this.props.imgSrc) return; // Load the image

      _this.image = new Image();
      _this.image.src = _this.props.imgSrc; // Draw the image once loaded

      _this.image.onload = function () {
        return drawImageProp({
          ctx: _this.ctx.grid,
          img: _this.image
        });
      };
    };

    _this.undo = function () {
      var lines = _this.lines.slice(0, -1);

      _this.clear();

      _this.simulateDrawingLines({
        lines: lines,
        immediate: true
      });
    };

    _this.getSaveData = function () {
      // Construct and return the stringified saveData object
      return JSON.stringify({
        lines: _this.lines,
        width: _this.props.canvasWidth,
        height: _this.props.canvasHeight
      });
    };

    _this.loadSaveData = function (saveData) {
      var immediate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.immediateLoading;

      if (typeof saveData !== "string") {
        throw new Error("saveData needs to be of type string!");
      }

      var _JSON$parse = JSON.parse(saveData),
          lines = _JSON$parse.lines,
          width = _JSON$parse.width,
          height = _JSON$parse.height;

      if (!lines || typeof lines.push !== "function") {
        throw new Error("saveData.lines needs to be an array!");
      }

      _this.clear();

      if (width === _this.props.canvasWidth && height === _this.props.canvasHeight) {
        _this.simulateDrawingLines({
          lines: lines,
          immediate: immediate
        });
      } else {
        // we need to rescale the lines based on saved & current dimensions
        var scaleX = _this.props.canvasWidth / width;
        var scaleY = _this.props.canvasHeight / height;
        var scaleAvg = (scaleX + scaleY) / 2;

        _this.simulateDrawingLines({
          lines: lines.map(function (line) {
            return _extends$1({}, line, {
              points: line.points.map(function (p) {
                return {
                  x: p.x * scaleX,
                  y: p.y * scaleY
                };
              }),
              brushRadius: line.brushRadius * scaleAvg
            });
          }),
          immediate: immediate
        });
      }
    };

    _this.simulateDrawingLines = function (_ref) {
      var lines = _ref.lines,
          immediate = _ref.immediate; // Simulate live-drawing of the loaded lines
      // TODO use a generator

      var curTime = 0;
      var timeoutGap = immediate ? 0 : _this.props.loadTimeOffset;
      lines.forEach(function (line) {
        var points = line.points,
            brushColor = line.brushColor,
            brushRadius = line.brushRadius;

        var _loop = function _loop(i) {
          curTime += timeoutGap;
          window.setTimeout(function () {
            _this.drawPoints({
              points: points.slice(0, i + 1),
              brushColor: brushColor,
              brushRadius: brushRadius
            });
          }, curTime);
        };

        for (var i = 1; i < points.length; i++) {
          _loop(i);
        }

        curTime += timeoutGap;
        window.setTimeout(function () {
          // Save this line with its props instead of this.props
          _this.points = points;

          _this.saveLine({
            brushColor: brushColor,
            brushRadius: brushRadius
          });
        }, curTime);
      });
    };

    _this.handleTouchStart = function (e) {
      var _this$getPointerPos = _this.getPointerPos(e),
          x = _this$getPointerPos.x,
          y = _this$getPointerPos.y;

      _this.lazy.update({
        x: x,
        y: y
      }, {
        both: true
      });

      _this.handleMouseDown(e);

      _this.mouseHasMoved = true;
    };

    _this.handleTouchMove = function (e) {
      e.preventDefault();

      var _this$getPointerPos2 = _this.getPointerPos(e),
          x = _this$getPointerPos2.x,
          y = _this$getPointerPos2.y;

      _this.handlePointerMove(x, y);
    };

    _this.handleTouchEnd = function (e) {
      _this.handleMouseUp(e);

      var brush = _this.lazy.getBrushCoordinates();

      _this.lazy.update({
        x: brush.x,
        y: brush.y
      }, {
        both: true
      });

      _this.mouseHasMoved = true;
    };

    _this.handleMouseDown = function (e) {
      e.preventDefault();
      _this.isPressing = true;
    };

    _this.handleMouseMove = function (e) {
      var _this$getPointerPos3 = _this.getPointerPos(e),
          x = _this$getPointerPos3.x,
          y = _this$getPointerPos3.y;

      _this.handlePointerMove(x, y);
    };

    _this.handleMouseUp = function (e) {
      e.preventDefault();
      _this.isDrawing = false;
      _this.isPressing = false;

      _this.saveLine();
    };

    _this.handleCanvasResize = function (entries, observer) {
      var saveData = _this.getSaveData();

      for (var _iterator = entries, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref2 = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref2 = _i.value;
        }

        var entry = _ref2;
        var _entry$contentRect = entry.contentRect,
            width = _entry$contentRect.width,
            height = _entry$contentRect.height;

        _this.setCanvasSize(_this.canvas.interface, width, height);

        _this.setCanvasSize(_this.canvas.drawing, width, height);

        _this.setCanvasSize(_this.canvas.temp, width, height);

        _this.setCanvasSize(_this.canvas.grid, width, height);

        _this.drawGrid(_this.ctx.grid);

        _this.loop({
          once: true
        });
      }

      _this.loadSaveData(saveData, true);
    };

    _this.setCanvasSize = function (canvas, width, height) {
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = width;
      canvas.style.height = height;
    };

    _this.getPointerPos = function (e) {
      var rect = _this.canvas.interface.getBoundingClientRect(); // use cursor pos as default


      var clientX = e.clientX;
      var clientY = e.clientY; // use first touch if available

      if (e.changedTouches && e.changedTouches.length > 0) {
        clientX = e.changedTouches[0].clientX;
        clientY = e.changedTouches[0].clientY;
      } // return mouse/touch position inside canvas


      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    _this.handlePointerMove = function (x, y) {
      if (_this.props.disabled) return;

      var hasChanged = _this.lazy.update({
        x: x,
        y: y
      });

      var isDisabled = !_this.lazy.isEnabled();

      if (_this.isPressing && hasChanged && !_this.isDrawing || isDisabled && _this.isPressing) {
        // Start drawing and add point
        _this.isDrawing = true;

        _this.points.push(_this.lazy.brush.toObject());
      }

      if (_this.isDrawing && (_this.lazy.brushHasMoved() || isDisabled)) {
        // Add new point
        _this.points.push(_this.lazy.brush.toObject()); // Draw current points


        _this.drawPoints({
          points: _this.points,
          brushColor: _this.props.brushColor,
          brushRadius: _this.props.brushRadius
        });
      }

      _this.mouseHasMoved = true;
    };

    _this.drawPoints = function (_ref3) {
      var points = _ref3.points,
          brushColor = _ref3.brushColor,
          brushRadius = _ref3.brushRadius;
      _this.ctx.temp.lineJoin = "round";
      _this.ctx.temp.lineCap = "round";
      _this.ctx.temp.strokeStyle = brushColor;

      _this.ctx.temp.clearRect(0, 0, _this.ctx.temp.canvas.width, _this.ctx.temp.canvas.height);

      _this.ctx.temp.lineWidth = brushRadius * 2;
      var p1 = points[0];
      var p2 = points[1];

      _this.ctx.temp.moveTo(p2.x, p2.y);

      _this.ctx.temp.beginPath();

      for (var i = 1, len = points.length; i < len; i++) {
        // we pick the point between pi+1 & pi+2 as the
        // end point and p1 as our control point
        var midPoint = midPointBtw(p1, p2);

        _this.ctx.temp.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);

        p1 = points[i];
        p2 = points[i + 1];
      } // Draw last line as a straight line while
      // we wait for the next point to be able to calculate
      // the bezier control point


      _this.ctx.temp.lineTo(p1.x, p1.y);

      _this.ctx.temp.stroke();
    };

    _this.saveLine = function () {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          brushColor = _ref4.brushColor,
          brushRadius = _ref4.brushRadius;

      if (_this.points.length < 2) return; // Save as new line

      _this.lines.push({
        points: [].concat(_this.points),
        brushColor: brushColor || _this.props.brushColor,
        brushRadius: brushRadius || _this.props.brushRadius
      }); // Reset points array


      _this.points.length = 0;
      var width = _this.canvas.temp.width;
      var height = _this.canvas.temp.height; // Copy the line to the drawing canvas

      _this.ctx.drawing.drawImage(_this.canvas.temp, 0, 0, width, height); // Clear the temporary line-drawing canvas


      _this.ctx.temp.clearRect(0, 0, width, height);
    };

    _this.clear = function () {
      _this.lines = [];
      _this.valuesChanged = true;

      _this.ctx.drawing.clearRect(0, 0, _this.canvas.drawing.width, _this.canvas.drawing.height);

      _this.ctx.temp.clearRect(0, 0, _this.canvas.temp.width, _this.canvas.temp.height);
    };

    _this.loop = function () {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref5$once = _ref5.once,
          once = _ref5$once === undefined ? false : _ref5$once;

      if (_this.mouseHasMoved || _this.valuesChanged) {
        var pointer = _this.lazy.getPointerCoordinates();

        var brush = _this.lazy.getBrushCoordinates();

        _this.drawInterface(_this.ctx.interface, pointer, brush);

        _this.mouseHasMoved = false;
        _this.valuesChanged = false;
      }

      if (!once) {
        window.requestAnimationFrame(function () {
          _this.loop();
        });
      }
    };

    _this.drawGrid = function (ctx) {
      if (_this.props.hideGrid) return;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.beginPath();
      ctx.setLineDash([5, 1]);
      ctx.setLineDash([]);
      ctx.strokeStyle = _this.props.gridColor;
      ctx.lineWidth = 0.5;
      var gridSize = 25;
      var countX = 0;

      while (countX < ctx.canvas.width) {
        countX += gridSize;
        ctx.moveTo(countX, 0);
        ctx.lineTo(countX, ctx.canvas.height);
      }

      ctx.stroke();
      var countY = 0;

      while (countY < ctx.canvas.height) {
        countY += gridSize;
        ctx.moveTo(0, countY);
        ctx.lineTo(ctx.canvas.width, countY);
      }

      ctx.stroke();
    };

    _this.drawInterface = function (ctx, pointer, brush) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Draw brush preview

      ctx.beginPath();
      ctx.fillStyle = _this.props.brushColor;
      ctx.arc(brush.x, brush.y, _this.props.brushRadius, 0, Math.PI * 2, true);
      ctx.fill(); // Draw mouse point (the one directly at the cursor)

      ctx.beginPath();
      ctx.fillStyle = _this.props.catenaryColor;
      ctx.arc(pointer.x, pointer.y, 4, 0, Math.PI * 2, true);
      ctx.fill(); // Draw catenary

      if (_this.lazy.isEnabled()) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.setLineDash([2, 4]);
        ctx.strokeStyle = _this.props.catenaryColor;

        _this.catenary.drawToCanvas(_this.ctx.interface, brush, pointer, _this.chainLength);

        ctx.stroke();
      } // Draw brush point (the one in the middle of the brush preview)


      ctx.beginPath();
      ctx.fillStyle = _this.props.catenaryColor;
      ctx.arc(brush.x, brush.y, 2, 0, Math.PI * 2, true);
      ctx.fill();
    };

    _this.canvas = {};
    _this.ctx = {};
    _this.catenary = new lib_2$1();
    _this.points = [];
    _this.lines = [];
    _this.mouseHasMoved = true;
    _this.valuesChanged = true;
    _this.isDrawing = false;
    _this.isPressing = false;
    return _this;
  }

  _default.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.lazy = new lib_3({
      radius: this.props.lazyRadius * window.devicePixelRatio,
      enabled: true,
      initialPoint: {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      }
    });
    this.chainLength = this.props.lazyRadius * window.devicePixelRatio;
    this.canvasObserver = new index(function (entries, observer) {
      return _this2.handleCanvasResize(entries, observer);
    });
    this.canvasObserver.observe(this.canvasContainer);
    this.drawImage();
    this.loop();
    window.setTimeout(function () {
      var initX = window.innerWidth / 2;
      var initY = window.innerHeight / 2;

      _this2.lazy.update({
        x: initX - _this2.chainLength / 4,
        y: initY
      }, {
        both: true
      });

      _this2.lazy.update({
        x: initX + _this2.chainLength / 4,
        y: initY
      }, {
        both: false
      });

      _this2.mouseHasMoved = true;
      _this2.valuesChanged = true;

      _this2.clear(); // Load saveData from prop if it exists


      if (_this2.props.saveData) {
        _this2.loadSaveData(_this2.props.saveData);
      }
    }, 100);
  };

  _default.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.lazyRadius !== this.props.lazyRadius) {
      // Set new lazyRadius values
      this.chainLength = this.props.lazyRadius * window.devicePixelRatio;
      this.lazy.setRadius(this.props.lazyRadius * window.devicePixelRatio);
    }

    if (prevProps.saveData !== this.props.saveData) {
      this.loadSaveData(this.props.saveData);
    }

    if (JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      // Signal this.loop function that values changed
      this.valuesChanged = true;
    }
  };

  _default.prototype.render = function render() {
    var _this3 = this;

    return React.createElement("div", {
      className: this.props.className,
      style: _extends$1({
        display: "block",
        background: this.props.backgroundColor,
        touchAction: "none",
        width: this.props.canvasWidth,
        height: this.props.canvasHeight
      }, this.props.style),
      ref: function ref(container) {
        if (container) {
          _this3.canvasContainer = container;
        }
      }
    }, canvasTypes.map(function (_ref6) {
      var name = _ref6.name,
          zIndex = _ref6.zIndex;
      var isInterface = name === "interface";
      return React.createElement("canvas", {
        key: name,
        ref: function ref(canvas) {
          if (canvas) {
            _this3.canvas[name] = canvas;
            _this3.ctx[name] = canvas.getContext("2d");
          }
        },
        style: _extends$1({}, canvasStyle, {
          zIndex: zIndex
        }),
        onMouseDown: isInterface ? _this3.handleMouseDown : undefined,
        onMouseMove: isInterface ? _this3.handleMouseMove : undefined,
        onMouseUp: isInterface ? _this3.handleMouseUp : undefined,
        onMouseOut: isInterface ? _this3.handleMouseUp : undefined,
        onTouchStart: isInterface ? _this3.handleTouchStart : undefined,
        onTouchMove: isInterface ? _this3.handleTouchMove : undefined,
        onTouchEnd: isInterface ? _this3.handleTouchEnd : undefined,
        onTouchCancel: isInterface ? _this3.handleTouchEnd : undefined
      });
    }));
  };

  return _default;
}(PureComponent), _class.propTypes = {
  loadTimeOffset: propTypes.number,
  lazyRadius: propTypes.number,
  brushRadius: propTypes.number,
  brushColor: propTypes.string,
  catenaryColor: propTypes.string,
  gridColor: propTypes.string,
  backgroundColor: propTypes.string,
  hideGrid: propTypes.bool,
  canvasWidth: dimensionsPropTypes,
  canvasHeight: dimensionsPropTypes,
  disabled: propTypes.bool,
  imgSrc: propTypes.string,
  saveData: propTypes.string,
  immediateLoading: propTypes.bool
}, _class.defaultProps = {
  loadTimeOffset: 5,
  lazyRadius: 12,
  brushRadius: 10,
  brushColor: "#444",
  catenaryColor: "#0a0302",
  gridColor: "rgba(150,150,150,0.17)",
  backgroundColor: "#FFF",
  hideGrid: false,
  canvasWidth: 400,
  canvasHeight: 400,
  disabled: false,
  imgSrc: "",
  saveData: "",
  immediateLoading: false
}, _temp);

var DRAW_CANVAS_DEFAULTS = {
  loadTimeOffset: 5,
  lazyRadius: 10,
  brushRadius: 4,
  brushColor: "#444",
  catenaryColor: "#0a0302",
  hideGrid: true,
  canvasWidth: 550,
  canvasHeight: 200,
  disabled: false,
  imgSrc: "",
  saveData: null,
  immediateLoading: false
};

var Container = _styled("div", {
  target: "e5i1odf0"
})("position:relative;height:", function (props) {
  return props.height || 200;
}, "px;width:", function (props) {
  return props.width ? props.width + "px" : "100%";
}, ";" + (""));

var GridLines = _styled("div", {
  target: "e5i1odf1"
})({
  name: "m60tkr",
  styles: "position:absolute;width:100%;height:100%;top:0;bottom:0;left:0;right:0;z-index:10;display:block;content:\"\";pointer-events:none;background-size:40px 40px;background-image:linear-gradient( to right,rgba(150,150,150,0.1) 1px,transparent 1px ),linear-gradient(to bottom,rgba(150,150,150,0.1) 1px,transparent 1px);"
}); // This is the React component that is shown your pad.
// Since this is a Block component, be sure to render children. If you don't, things will break.


var DrawSomething =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DrawSomething, _React$Component);

  function DrawSomething() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DrawSomething);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DrawSomething)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "saveData", function () {
      console.log("CALL");

      var saveData = _this.canvasRef.getSaveData();

      if (_this.props.data.saveData !== saveData) {
        _this.props.onSave({
          saveData: saveData
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setCanvasRef", function (canvasRef) {
      return _this.canvasRef = canvasRef;
    });

    return _this;
  }

  _createClass(DrawSomething, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isInEditor = _this$props.isInEditor,
          onSave = _this$props.onSave,
          _this$props$data$save = _this$props.data.saveData,
          saveData = _this$props$data$save === void 0 ? undefined : _this$props$data$save,
          brushColor = _this$props.brushColor,
          isFocused = _this$props.isFocused,
          isSelected = _this$props.isSelected;
      var width = 650;

      if (document.body.clientWidth < 600) {
        width = document.body.clientWidth - 2;
      }

      if (isInEditor) {
        return jsx(Container, {
          onMouseOut: this.saveData,
          width: width,
          ref: this.containerRef
        }, jsx(_default, _extends({}, DRAW_CANVAS_DEFAULTS, {
          ref: this.setCanvasRef,
          saveData: saveData,
          canvasWidth: width,
          brushColor: brushColor,
          immediateLoading: true
        })), jsx(GridLines, null), this.props.children);
      } else {
        return jsx(Container, {
          width: width
        }, jsx(_default, _extends({}, DRAW_CANVAS_DEFAULTS, {
          ref: this.setCanvasRef,
          disabled: false,
          saveData: saveData,
          canvasWidth: width,
          brushColor: brushColor
        })), jsx(GridLines, null), this.props.children);
      }
    }
  }]);

  return DrawSomething;
}(React.Component); // If you want to...

export default DrawSomething;
