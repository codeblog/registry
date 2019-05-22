(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@emotion/core'), require('react')) :
  typeof define === 'function' && define.amd ? define(['@emotion/core', 'react'], factory) :
  (global = global || self, global['@codeblog/image'] = factory(global['@emotion/core'], global.react));
}(this, function (core, React) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;

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
          width: img.naturalWidth,
          height: img.naturalHeight
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

  var _ref = {
    name: "79elbk",
    styles: "position:relative;"
  };

  var _ref2 = {
    name: "xei093",
    styles: "border-radius:2px;width:auto;max-width:var(--blog-post-width);height:auto;object-fit:contain;"
  };

  var Image$1 = (function (_ref3) {
    var children = _ref3.children,
        onSave = _ref3.onSave,
        _ref3$data = _ref3.data,
        width = _ref3$data.width,
        height = _ref3$data.height,
        file = _ref3$data.file,
        isInEditor = _ref3.isInEditor,
        otherProps = _objectWithoutProperties(_ref3, ["children", "onSave", "data", "isInEditor"]);

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
        Promise.all([getBase64File(file), getImageDimensions(file)]).then(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
              img = _ref5[0],
              _ref5$ = _ref5[1],
              width = _ref5$.width,
              height = _ref5$.height;

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

    if (isInEditor) {
      return core.jsx("div", {
        css: _ref,
        className: "Container"
      }, file && core.jsx("img", {
        // Codeblog uses Emotion (https://emotion.sh) for CSS.
        // This makes it easy to have styles that apply per component instead of to the whole page
        css: _ref2,
        src: file,
        width: width,
        height: height
      }), core.jsx("input", {
        type: "file",
        accept: "image/*",
        css: file && width && height ? HiddenInputCSS : undefined,
        onChange: handleChangeFile
      }));
    } else {
      return core.jsx("img", _extends({}, otherProps, {
        width: width,
        height: height // Codeblog uses Emotion (https://emotion.sh) for CSS.
        // This makes it easy to have styles that apply per component instead of to the whole page
        ,
        css:
        /*#__PURE__*/
        core.css("border-radius:2px;width:", width || "auto", ";height:", height || "auto", ";max-width:100%;object-fit:contain;" + ("")),
        src: file
      }));
    }
  }); // If you want to...
  // - Supply default props
  // - 🔎 Change how your component appears in search
  // - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
  // Edit this file:
  // 📦/Users/jarred/Code/codeblog/some-components/Image.package.js

  return Image$1;

}));
