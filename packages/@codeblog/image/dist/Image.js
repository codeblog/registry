(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@emotion/core'), require('react'), require('lodash')) :
  typeof define === 'function' && define.amd ? define(['exports', '@emotion/core', 'react', 'lodash'], factory) :
  (global = global || self, factory(global['@codeblog/image'] = {}, global['@emotion/core'], global.react, global.lodash));
}(this, function (exports, core, React, lodash) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

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

  var isVerticalPhoto = function isVerticalPhoto(_ref) {
    var width = _ref.width,
        height = _ref.height;
    return height > width;
  };
  var isHorizontalPhoto = function isHorizontalPhoto(_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width > height;
  };
  var isSquarePhoto = function isSquarePhoto(_ref3) {
    var width = _ref3.width,
        height = _ref3.height;
    return width === height;
  };
  var calculateDimensions = function calculateDimensions(_ref4) {
    var photo = _ref4.photo,
        maxWidth = _ref4.maxWidth,
        maxHeight = _ref4.maxHeight,
        _ref4$totalPhotoCount = _ref4.totalPhotoCount,
        totalPhotoCount = _ref4$totalPhotoCount === void 0 ? 1 : _ref4$totalPhotoCount,
        defaultSpacing = _ref4.defaultSpacing;
    var MAX_COLUMN_COUNT = Math.min(totalPhotoCount, 3);
    var spacing = totalPhotoCount > 1 ? defaultSpacing : 0;
    var width,
        height = 0;

    if (photo.width > photo.height) {
      var MAX_SIZE = maxWidth / MAX_COLUMN_COUNT - spacing * MAX_COLUMN_COUNT;
      width = Math.min(photo.width, MAX_SIZE) - spacing;
      height = photo.height * (width / photo.width);
    } else if (photo.height > photo.width) {
      var _MAX_SIZE = maxHeight / MAX_COLUMN_COUNT - spacing * MAX_COLUMN_COUNT;

      height = Math.min(photo.height, _MAX_SIZE);
      width = photo.width * (height / photo.height);
    } else {
      var _MAX_SIZE2 = maxHeight / MAX_COLUMN_COUNT - spacing * MAX_COLUMN_COUNT;

      width = Math.min(photo.width, _MAX_SIZE2) - spacing;
      height = Math.min(photo.height, _MAX_SIZE2) - spacing;
    }

    return {
      width: width,
      height: height,
      spacing: spacing
    };
  };

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

  var HiddenInputCSS = {
    name: "1piuz33",
    styles: "width:100%;height:100%;display:block;opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;"
  }; // This is the React component that is shown your pad.
  // Since this is a Block component, be sure to render children. If you don't, things will break.

  var Image$1 = (function (_ref5) {
    var children = _ref5.children,
        onSave = _ref5.onSave,
        _ref5$data = _ref5.data,
        width = _ref5$data.width,
        height = _ref5$data.height,
        file = _ref5$data.file,
        isInEditor = _ref5.isInEditor,
        otherProps = _objectWithoutProperties(_ref5, ["children", "onSave", "data", "isInEditor"]);

    var handleChangeFile = React.useCallback(function (evt) {
      var file = event.target.files[0];
      var filesize = (file.size / 1024 / 1024).toFixed(4);

      if (filesize >= 10) {
        window.alert("Please choose a photo under 10 MB", {
          appearance: "error"
        });
        return;
      }

      window.requestIdleCallback(function () {
        Promise.all([getBase64File(file), getImageDimensions(file)]).then(function (_ref6) {
          var _ref7 = _slicedToArray(_ref6, 2),
              img = _ref7[0],
              _ref7$ = _ref7[1],
              width = _ref7$.width,
              height = _ref7$.height;

          if (onSave) {
            onSave({
              file: img,
              width: width,
              height: height
            });
          }
        });
      });
    }, [onSave]);

    var _React$useState = React.useState({
      width: width,
      height: height
    }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        dimensions = _React$useState2[0],
        setDimensions = _React$useState2[1];

    var getDimensions = function getDimensions() {
      var maxWidth;
      var docWidth = document.body.clientWidth;

      if (docWidth < 700) {
        maxWidth = docWidth;
      } else {
        maxWidth = 670;
      }

      setDimensions(calculateDimensions({
        photo: {
          width: width,
          height: height
        },
        totalPhotoCount: 1,
        maxHeight: 400,
        maxWidth: maxWidth
      }));
    };

    React.useEffect(function () {
      var frame;
      var handleResize = lodash.throttle(function () {
        console.log("RESIZE");
        frame = window.requestAnimationFrame(getDimensions);
      }, 50);
      window.addEventListener("resize", handleResize);
      return function () {
        window.removeEventListener("resize", handleResize);
        window.cancelAnimationFrame(frame);
      };
    }, []);
    React.useLayoutEffect(function () {
      getDimensions();
    }, [file, width, height, setDimensions]);

    if (isInEditor) {
      return core.jsx("div", {
        css:
        /*#__PURE__*/
        core.css("position:relative;margin-block-start:var(--offset-normal);margin-block-end:var(--offset-normal);width:", file ? dimensions.width + "px" : "auto", ";height:", file ? dimensions.height + "px" : "auto", ";@media (max-width:670px){max-width:100vw;margin-left:calc(-1 * var(--offset-normal));margin-right:calc(-1 * var(--offset-normal));}max-width:100%;" + ("")),
        className: "Container"
      }, file && core.jsx("img", {
        // Codeblog uses Emotion (https://emotion.sh) for CSS.
        // This makes it easy to have styles that apply per component instead of to the whole page
        css:
        /*#__PURE__*/
        core.css("border-radius:2px;max-width:100%;width:", file ? dimensions.width + "px" : "auto", ";height:", file ? dimensions.height + "px" : "auto", ";@media (max-width:670px){max-width:100vw;width:100%;}" + ("")),
        src: file,
        width: dimensions.width,
        height: dimensions.height
      }), core.jsx("input", {
        type: "file",
        accept: "image/*",
        css: file && width && height ? HiddenInputCSS : undefined,
        onChange: handleChangeFile,
        width: dimensions.width,
        height: dimensions.height
      }));
    } else {
      return core.jsx("img", {
        width: dimensions.width,
        height: dimensions.height // Codeblog uses Emotion (https://emotion.sh) for CSS.
        // This makes it easy to have styles that apply per component instead of to the whole page
        ,
        css:
        /*#__PURE__*/
        core.css("margin-block-start:var(--offset-normal);margin-block-end:var(--offset-normal);width:", file ? dimensions.width + "px" : "auto", ";height:", file ? dimensions.height + "px" : "auto", ";border-radius:2px;max-width:100%;object-fit:contain;@media (max-width:670px){max-width:100vw;margin-left:calc(-1 * var(--offset-normal));margin-right:calc(-1 * var(--offset-normal));}" + ("")),
        src: file
      });
    }
  }); // If you want to...
  // - Supply default props
  // - 🔎 Change how your component appears in search
  // - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
  // Edit this file:
  // 📦/Users/jarred/Code/codeblog/some-components/Image.package.js

  exports.calculateDimensions = calculateDimensions;
  exports.default = Image$1;
  exports.isHorizontalPhoto = isHorizontalPhoto;
  exports.isSquarePhoto = isSquarePhoto;
  exports.isVerticalPhoto = isVerticalPhoto;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
