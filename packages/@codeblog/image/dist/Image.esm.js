import { jsx } from '@emotion/core';
import React from 'react';
import 'lodash';

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function getBase64File(file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
}

function getImageDimensions(file) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = function () {
      resolve({
        width: img.naturalWidth / (window.devicePixelRatio || 1),
        height: img.naturalHeight / (window.devicePixelRatio || 1)
      });
      URL.revokeObjectURL(img.src);
    };

    img.onerror = reject;
  });
}

var ImageCSS = {
  name: "1iucz9",
  styles: "margin-block-start:var(--offset-normal);margin-block-end:var(--offset-normal);max-width 100%;height:auto;text-decoration:none;width:auto;object-fit:contain;max-height:400px;border-radius:2px;object-fit:contain;@media (max-width:670px){max-width:100vw;margin-left:calc(-1 * var(--offset-normal));margin-right:calc(-1 * var(--offset-normal));}"
};
var HiddenInputCSS = {
  name: "1piuz33",
  styles: "width:100%;height:100%;display:block;opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;"
};

var _ref = {
  name: "3v4y9r",
  styles: "position:relative;height:auto;width:auto;"
};

var EditableImage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EditableImage, _React$Component);

  function EditableImage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, EditableImage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EditableImage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChangeFile", function (evt) {
      var file = event.target.files[0];
      var filesize = (file.size / 1024 / 1024).toFixed(4);

      if (filesize >= 10) {
        window.alert("Please choose a photo under 10 MB", {
          appearance: "error"
        });
        return;
      }

      _this.idleCallback = window.requestIdleCallback(function () {
        Promise.all([getBase64File(file), getImageDimensions(file)]).then(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              img = _ref3[0],
              _ref3$ = _ref3[1],
              width = _ref3$.width,
              height = _ref3$.height;

          if (_this.props.onSave) {
            _this.props.onSave({
              file: img,
              width: width,
              height: height
            });
          }
        });
      });
    });

    return _this;
  }

  _createClass(EditableImage, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.cancelAnimationFrame(this.idleCallback);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onSave = _this$props.onSave,
          _this$props$data = _this$props.data,
          width = _this$props$data.width,
          height = _this$props$data.height,
          file = _this$props$data.file,
          isInEditor = _this$props.isInEditor,
          otherProps = _objectWithoutProperties(_this$props, ["children", "onSave", "data", "isInEditor"]);

      return jsx("div", {
        css: _ref,
        className: "Container"
      }, file && jsx("img", {
        // Codeblog uses Emotion (https://emotion.sh) for CSS.
        // This makes it easy to have styles that apply per component instead of to the whole page
        css: ImageCSS,
        src: file,
        width: width,
        height: height
      }), jsx("input", {
        type: "file",
        accept: "image/*",
        css: file && width && height ? HiddenInputCSS : undefined,
        onChange: this.handleChangeFile
      }));
    }
  }]);

  return EditableImage;
}(React.Component);

var Image$1 = (function (props) {
  if (props.isInEditor) {
    return jsx(EditableImage, props);
  } else {
    var _props$data = props.data,
        file = _props$data.file,
        width = _props$data.width,
        height = _props$data.height;
    return jsx("img", {
      width: width,
      height: height // Codeblog uses Emotion (https://emotion.sh) for CSS.
      // This makes it easy to have styles that apply per component instead of to the whole page
      ,
      css: imageCSS,
      src: file
    });
  }
});

export default Image$1;
