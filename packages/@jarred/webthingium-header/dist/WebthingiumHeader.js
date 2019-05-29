(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@emotion/core'), require('react'), require('tinycolor2')) :
  typeof define === 'function' && define.amd ? define(['@emotion/core', 'react', 'tinycolor2'], factory) :
  (global = global || self, global['@jarred/webthingium-header'] = factory(global['@emotion/core'], global.react, global.tinycolor2));
}(this, function (core, react, tinycolor2) { 'use strict';

  react = react && react.hasOwnProperty('default') ? react['default'] : react;
  tinycolor2 = tinycolor2 && tinycolor2.hasOwnProperty('default') ? tinycolor2['default'] : tinycolor2;

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

  // This is the React component that is shown your pad.
  // Since this is a Block component, be sure to render children. If you don't, things will break.

  var _ref = {
    name: "lpi7re",
    styles: "font-family:Georgia,Cambria,\"Times New Roman\",Times,serif !important;font-style:normal;font-weight:500;font-size:52px;line-height:1.2em;margin-bottom:20px;text-align:center;margin-block-start:var(--offset-large);margin-block-end:20px;"
  };

  var WebthingiumHeader = (function (_ref2) {
    var children = _ref2.children,
        background = _ref2.background,
        otherProps = _objectWithoutProperties(_ref2, ["children", "background"]);

    return core.jsx("div", _extends({}, otherProps, {
      // Webthing uses Emotion (https://emotion.sh) for CSS.
      // This makes it easy to have styles that apply per component instead of to the whole page
      css: _ref
    }), children);
  }); // If you want to...
  // - Supply default props
  // - 🔎 Change how your component appears in search
  // - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
  // Edit this file:
  // 📦/Users/jarred/Code/codeblog/jarred-components-4/Webthingium (Header).package.js

  return WebthingiumHeader;

}));
