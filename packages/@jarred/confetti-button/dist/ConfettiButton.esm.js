import { jsx, css } from '@emotion/core';
import react from 'react';
import _ from 'lodash';
import tinycolor from 'tinycolor2';

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

var main = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.confetti = confetti;
  var defaultColors = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"];

  function createElements(root, elementCount, colors, width, height) {
    return Array.from({
      length: elementCount
    }).map(function (_, index) {
      var element = document.createElement("div");
      var color = colors[index % colors.length];
      element.style["background-color"] = color; // eslint-disable-line space-infix-ops

      element.style.width = width;
      element.style.height = height;
      element.style.position = "absolute";
      element.style.willChange = "transform, opacity";
      element.style.visibility = "hidden";
      root.appendChild(element);
      return element;
    });
  }

  function randomPhysics(angle, spread, startVelocity, random) {
    var radAngle = angle * (Math.PI / 180);
    var radSpread = spread * (Math.PI / 180);
    return {
      x: 0,
      y: 0,
      wobble: random() * 10,
      wobbleSpeed: 0.1 + random() * 0.1,
      velocity: startVelocity * 0.5 + random() * startVelocity,
      angle2D: -radAngle + (0.5 * radSpread - random() * radSpread),
      angle3D: -(Math.PI / 4) + random() * (Math.PI / 2),
      tiltAngle: random() * Math.PI,
      tiltAngleSpeed: 0.1 + random() * 0.3
    };
  }

  function updateFetti(fetti, progress, dragFriction, decay) {
    /* eslint-disable no-param-reassign */
    fetti.physics.x += Math.cos(fetti.physics.angle2D) * fetti.physics.velocity;
    fetti.physics.y += Math.sin(fetti.physics.angle2D) * fetti.physics.velocity;
    fetti.physics.z += Math.sin(fetti.physics.angle3D) * fetti.physics.velocity;
    fetti.physics.wobble += fetti.physics.wobbleSpeed; // Backward compatibility

    if (decay) {
      fetti.physics.velocity *= decay;
    } else {
      fetti.physics.velocity -= fetti.physics.velocity * dragFriction;
    }

    fetti.physics.y += 3;
    fetti.physics.tiltAngle += fetti.physics.tiltAngleSpeed;
    var _fetti$physics = fetti.physics,
        x = _fetti$physics.x,
        y = _fetti$physics.y,
        tiltAngle = _fetti$physics.tiltAngle,
        wobble = _fetti$physics.wobble;
    var wobbleX = x + 10 * Math.cos(wobble);
    var wobbleY = y + 10 * Math.sin(wobble);
    var transform = "translate3d(" + wobbleX + "px, " + wobbleY + "px, 0) rotate3d(1, 1, 1, " + tiltAngle + "rad)";
    fetti.element.style.visibility = "visible";
    fetti.element.style.transform = transform;
    fetti.element.style.opacity = 1 - progress;
    /* eslint-enable */
  }

  function animate(root, fettis, dragFriction, decay, duration, stagger) {
    var startTime = void 0;
    return new Promise(function (resolve) {
      function update(time) {
        if (!startTime) startTime = time;
        var elapsed = time - startTime;
        var progress = startTime === time ? 0 : (time - startTime) / duration;
        fettis.slice(0, Math.ceil(elapsed / stagger)).forEach(function (fetti) {
          updateFetti(fetti, progress, dragFriction, decay);
        });

        if (time - startTime < duration) {
          requestAnimationFrame(update);
        } else {
          fettis.forEach(function (fetti) {
            if (fetti.element.parentNode === root) {
              return root.removeChild(fetti.element);
            }
          });
          resolve();
        }
      }

      requestAnimationFrame(update);
    });
  }

  var defaults = {
    angle: 90,
    spread: 45,
    startVelocity: 45,
    elementCount: 50,
    width: "10px",
    height: "10px",
    colors: defaultColors,
    duration: 3000,
    stagger: 0,
    dragFriction: 0.1,
    random: Math.random
  };

  function backwardPatch(config) {
    if (!config.stagger && config.delay) {
      config.stagger = config.delay;
    }

    return config;
  }

  function confetti(root) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _Object$assign = Object.assign({}, defaults, backwardPatch(config)),
        elementCount = _Object$assign.elementCount,
        colors = _Object$assign.colors,
        width = _Object$assign.width,
        height = _Object$assign.height,
        angle = _Object$assign.angle,
        spread = _Object$assign.spread,
        startVelocity = _Object$assign.startVelocity,
        decay = _Object$assign.decay,
        dragFriction = _Object$assign.dragFriction,
        duration = _Object$assign.duration,
        stagger = _Object$assign.stagger,
        random = _Object$assign.random;

    var elements = createElements(root, elementCount, colors, width, height);
    var fettis = elements.map(function (element) {
      return {
        element: element,
        physics: randomPhysics(angle, spread, startVelocity, random)
      };
    });
    return animate(root, fettis, dragFriction, decay, duration, stagger);
  }
});
unwrapExports(main);
var main_1 = main.confetti;

var confetti = createCommonjsModule(function (module, exports) {

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

  var _react2 = _interopRequireDefault(react);

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

  var style = {
    position: "relative"
  };

  var Confetti = function (_Component) {
    _inherits(Confetti, _Component);

    function Confetti(props) {
      _classCallCheck(this, Confetti);

      var _this = _possibleConstructorReturn(this, (Confetti.__proto__ || Object.getPrototypeOf(Confetti)).call(this, props));

      _this.setRef = _this.setRef.bind(_this);
      return _this;
    }

    _createClass(Confetti, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        if (nextProps.active && !this.props.active) {
          (0, main.confetti)(this.container, nextProps.config);
        }
      }
    }, {
      key: "setRef",
      value: function setRef(ref) {
        this.container = ref;
      }
    }, {
      key: "render",
      value: function render() {
        return _react2.default.createElement("div", {
          className: this.props.className,
          style: style,
          ref: this.setRef
        });
      }
    }]);

    return Confetti;
  }(react.Component);

  exports.default = Confetti;
});
var Confetti = unwrapExports(confetti);

var ConfettiButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConfettiButton, _React$Component);

  function ConfettiButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ConfettiButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ConfettiButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "confettiTimer", null);

    _defineProperty(_assertThisInitialized(_this), "state", {
      showConfetti: false
    });

    _defineProperty(_assertThisInitialized(_this), "_handleShowConfetti", function () {
      if (_this.state.showConfetti) {
        return;
      }

      _this.setState({
        showConfetti: true
      }, function () {
        _this.confettiTimer = window.setTimeout(function () {
          _this.setState({
            showConfetti: false
          });
        }, 10);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleShowConfetti", _.debounce(_this._handleShowConfetti, 10));

    return _this;
  }

  _createClass(ConfettiButton, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.clearTimeout(this.confettiTimer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          firstColor = _this$props.firstColor,
          secondColor = _this$props.secondColor,
          thirdColor = _this$props.thirdColor,
          otherProps = _objectWithoutProperties(_this$props, ["children", "firstColor", "secondColor", "thirdColor"]);

      return jsx("div", {
        css:
        /*#__PURE__*/
        css("display:flex;margin-bottom:1em;align-items:center;justify-content:center;border:1px solid var(--color-primary);color:var(--color-primary);background-color:", firstColor, ";color:", tinycolor(firstColor).isDark() ? "var(--color-white)" : "var(--color-black)", ";font-family:var(--headings-font);font-weight:500;font-size:16px;align-self:flex-start;width:75%;flex:0.75;border-radius:4px;cursor:pointer;padding:8px 10px;&:hover{background-color:", tinycolor(firstColor).setAlpha(0.9).toRgbString(), ";}&:active{background-color:", tinycolor(firstColor).setAlpha(0.8).toRgbString(), ";}" + ("")),
        onClick: this.handleShowConfetti
      }, "\uD83C\uDF89 Confetti me", jsx(Confetti, {
        active: this.state.showConfetti,
        threshold: 1,
        rootMargin: "0 300px 0 0",
        config: {
          angle: 86,
          spread: 30,
          startVelocity: 17,
          elementCount: 30,
          decay: 0.96,
          colors: [firstColor, secondColor, thirdColor]
        }
      }));
    }
  }]);

  return ConfettiButton;
}(react.Component);

export default ConfettiButton;
