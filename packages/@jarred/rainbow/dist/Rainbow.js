(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@emotion/core'), require('react')) :
  typeof define === 'function' && define.amd ? define(['@emotion/core', 'react'], factory) :
  (global = global || self, global['@jarred/rainbow'] = factory(global['@emotion/core'], global.react));
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
    name: "1k8m5rp",
    styles: "background:linear-gradient( to right,#b306a9,#ef2667,#f42e2c,#ffa509,#fdfc00,#55ac2f,#0b13fd,#a804af );background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-fill-color:transparent;"
  };

  var Rainbow = (function (_ref2) {
    var children = _ref2.children,
        color = _ref2.color,
        otherProps = _objectWithoutProperties(_ref2, ["children", "color"]);

    return (// Since this is an inline component, it should be a `span` (or at least, `display: inline;`)
      core.jsx("span", _extends({}, otherProps, {
        // Webthing uses Emotion (https://emotion.sh) for CSS.
        // This makes it easy to have styles that apply per component instead of to the whole page
        css: _ref
      }), children)
    );
  }); // If you want to...
  // - Supply default props
  // - 🔎 Change how your component appears in search
  // - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
  // Edit this file:
  // 📦/Users/jarred/Code/codeblog/jarred-components-4/Rainbow.package.js

  return Rainbow;

}));
