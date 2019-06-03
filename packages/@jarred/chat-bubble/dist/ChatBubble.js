(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@emotion/core'), require('react'), require('@webthing/core'), require('tinycolor2')) :
  typeof define === 'function' && define.amd ? define(['@emotion/core', 'react', '@webthing/core', 'tinycolor2'], factory) :
  (global = global || self, global['@jarred/chat-bubble'] = factory(global['@emotion/core'], global.react, global['@webthing/core'], global.tinycolor2));
}(this, function (core, React, core$1, tinycolor) { 'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  tinycolor = tinycolor && tinycolor.hasOwnProperty('default') ? tinycolor['default'] : tinycolor;

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
    name: "kjafn5",
    styles: "display:flex;position:relative;"
  };

  var ChatBubble = (function (_ref2) {
    var children = _ref2.children,
        background = _ref2.background,
        otherProps = _objectWithoutProperties(_ref2, ["children", "background"]);

    var _React$useContext = React.useContext(core$1.WebthingContext),
        post = _React$useContext.post;

    return core.jsx("div", {
      // Webthing uses Emotion (https://emotion.sh) for CSS.
      // This makes it easy to have styles that apply per component instead of to the whole page
      css: _ref
    }, post.blog.photo_url && core.jsx("img", {
      src: post.blog.photo_url,
      width: 24,
      height: 24,
      key: post.blog.photo_url,
      style: {
        borderRadius: "50%",
        marginTop: "auto",
        marginRight: "var(--offset-small, 4px)",
        zIndex: 2
      },
      contentEditable: false
    }), core.jsx("p", {
      css:
      /*#__PURE__*/
      core.css("margin-block-start:0em;margin-block-end:0em;word-wrap:break-word;line-height:24px;position:relative;padding:10px 20px;border-radius:16px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-family:var(--system-font);font-size:0.9em;&:before,&:after{content:\"\";position:absolute;bottom:0px;height:20px;}@media (min-width:670px){max-width:400px;}color:", tinycolor(background).isDark() ? "var(--color-white, #eee)" : "var(--color-black, #111)", ";background:", background, ";align-self:flex-end;" + ("")),
      className: "ChatBubble"
    }, children));
  }); // If you want to...
  // - Supply default props
  // - 🔎 Change how your component appears in search
  // - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
  // Edit this file:
  // 📦/Users/jarred/Code/codeblog/jarred-components-word/ChatBubble.package.js

  return ChatBubble;

}));
