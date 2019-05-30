(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@emotion/core'), require('react')) :
  typeof define === 'function' && define.amd ? define(['@emotion/core', 'react'], factory) :
  (global = global || self, global['@jarred/reddit'] = factory(global['@emotion/core'], global.react));
}(this, function (core, react) { 'use strict';

  react = react && react.hasOwnProperty('default') ? react['default'] : react;

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

  // This example will render text in uppercase. SHOUTING ON THE INTERNET

  var _ref = {
    name: "ghgrln",
    styles: "svg{width:1em;height:1em;display:inline-block;}"
  };

  var Reddit = (function (_ref2) {
    var children = _ref2.children,
        color = _ref2.color,
        otherProps = _objectWithoutProperties(_ref2, ["children", "color"]);

    return (// Since this is an inline component, it should be a `span` (or at least, `display: inline;`)
      core.jsx("span", _extends({}, otherProps, {
        // Webthing uses Emotion (https://emotion.sh) for CSS.
        // This makes it easy to have styles that apply per component instead of to the whole page
        css: _ref
      }), core.jsx("svg", {
        viewBox: "0 0 78 78",
        fill: "none"
      }, core.jsx("path", {
        d: "M39.15 78C60.606 78 78 60.606 78 39.15 78 17.694 60.606.3 39.15.3 17.694.3.3 17.694.3 39.15.3 60.606 17.694 78 39.15 78z",
        fill: "#FF4500"
      }), core.jsx("path", {
        d: "M65.06 39.15a5.683 5.683 0 0 0-5.881-5.466 5.693 5.693 0 0 0-3.718 1.574 27.62 27.62 0 0 0-14.959-4.78l2.52-12.12 8.315 1.748a3.884 3.884 0 0 0 4.278 3.448 3.884 3.884 0 0 0 3.448-4.278 3.884 3.884 0 0 0-4.278-3.448 3.845 3.845 0 0 0-2.936 1.903l-9.522-1.903a1.204 1.204 0 0 0-1.439.918v.02l-2.868 13.48a27.828 27.828 0 0 0-15.152 4.78 5.665 5.665 0 0 0-8.015.252 5.665 5.665 0 0 0 .251 8.015c.444.415.956.772 1.526 1.023-.039.57-.039 1.14 0 1.71 0 8.7 10.14 15.78 22.646 15.78 12.505 0 22.645-7.07 22.645-15.78.039-.57.039-1.14 0-1.71a5.67 5.67 0 0 0 3.139-5.166zm-38.85 3.892A3.899 3.899 0 0 1 30.1 39.15a3.899 3.899 0 0 1 3.892 3.892 3.899 3.899 0 0 1-3.892 3.892c-2.153-.02-3.891-1.748-3.891-3.892zm22.568 10.68a14.917 14.917 0 0 1-9.599 2.994 14.917 14.917 0 0 1-9.599-2.994 1.048 1.048 0 1 1 1.478-1.477 12.691 12.691 0 0 0 8.082 2.443 12.787 12.787 0 0 0 8.122-2.366 1.093 1.093 0 0 1 1.535.02c.416.424.406 1.12-.019 1.535v-.155zm-.695-6.653a3.899 3.899 0 0 1-3.892-3.892 3.899 3.899 0 0 1 3.892-3.892 3.899 3.899 0 0 1 3.892 3.892 3.885 3.885 0 0 1-3.728 4.037h-.193l.029-.145z",
        fill: "#fff"
      })), " ", children)
    );
  }); // If you want to...
  // - Supply default props
  // - 🔎 Change how your component appears in search
  // - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
  // Edit this file:
  // 📦/Users/jarred/Code/codeblog/jarred-components-4/Reddit.package.js

  return Reddit;

}));
