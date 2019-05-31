(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@emotion/core'), require('react'), require('tinycolor2')) :
  typeof define === 'function' && define.amd ? define(['@emotion/core', 'react', 'tinycolor2'], factory) :
  (global = global || self, global['@jarred/word-document'] = factory(global['@emotion/core'], global.react, global.tinycolor2));
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
    name: "gpghem",
    styles: "background-color:#f5f7fa;box-sizing:content-box;margin-left:calc((100vw - var(--blog-post-width)) / -2);margin-right:calc((100vw - var(--blog-post-width)) / -2);padding-left:calc((100vw - var(--blog-post-width)) / 2);padding-right:calc((100vw - var(--blog-post-width)) / 2);background-size:100vw auto;margin-block-start:var(--offset-medium);padding-top:calc(var(--offset-normal) + 2in);padding-bottom:calc(var(--offset-normal) + 2in);margin-block-end:var(--offset-medium);max-width:100vw;span[data-slate-content]{font-family:\"Times New Roman\" !important;line-height:2 !important;text-indent:0.5in;}span[data-component-id=\"@jarred/small-heading\"] span[data-slate-content]{font-family:\"Calibri\",\"Cambria\",\"Times New Roman\" !important;font-size:1.5em !important;margin-block-start:var(--offset-large) !important;margin-block-end:var(--offset-medium) !important;line-height:2 !important;}.Document{box-shadow:0 0 5px 0 rgba(0,0,0,0.17);background-color:#fff;border-radius:1px;margin:-1in;font-size:16pt;max-width:8.5in;width:100%;line-height:2;padding:1in;padding-top:1in;padding-bottom:1in;box-sizing:content-box;}@media (max-width:8.5in){.Document{max-width:var(--blog-post-width);}}@media (max-width:670px){&{margin-left:calc(-1 * var(--offset-normal));margin-right:calc(-1 * var(--offset-normal));padding-left:0;padding-right:0;width:100vw;}.Document{max-width:auto;box-sizing:border-box;padding-left:1em;padding-right:1em;margin-left:1em;margin-right:1em;padding-top:1in;padding-bottom:1in;width:auto;}}"
  };

  var WordDocument = (function (_ref2) {
    var children = _ref2.children,
        background = _ref2.background,
        otherProps = _objectWithoutProperties(_ref2, ["children", "background"]);

    return core.jsx("div", _extends({}, otherProps, {
      // Webthing uses Emotion (https://emotion.sh) for CSS.
      // This makes it easy to have styles that apply per component instead of to the whole page
      css: _ref
    }), core.jsx("div", {
      className: "Document"
    }, children));
  }); // If you want to...
  // - Supply default props
  // - 🔎 Change how your component appears in search
  // - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
  // Edit this file:
  // 📦/Users/jarred/Code/codeblog/jarred-components-4/WordDocument.package.js

  return WordDocument;

}));
