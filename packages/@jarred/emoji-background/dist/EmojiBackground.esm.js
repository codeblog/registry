import { jsx, css } from '@emotion/core';
import 'react';
import tinycolor from 'tinycolor2';

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

var EmojiBackground = (function (_ref) {
  var children = _ref.children,
      background = _ref.background,
      otherProps = _objectWithoutProperties(_ref, ["children", "background"]);

  return jsx("div", _extends({}, otherProps, {
    // Codeblog uses Emotion (https://emotion.sh) for CSS.
    // This makes it easy to have styles that apply per component instead of to the whole page
    css:
    /*#__PURE__*/
    css("box-sizing:content-box;&:after,&:before{display:block;position:absolute;z-index:-1;top:0;bottom:0;left:0;right:0;content:\"\";width:100%;height:100%;pointer-events:none;}&:after{background-image:url(https://storage.googleapis.com/codeblog-public/emoji.png);background-position:center right;background-repeat:space;background-size:200px 200px;opacity:0.45;filter:hue-rotate(200deg);mix-blend-mode:difference;}&:before{background-color:", background, ";}font-size:48px;text-shadow:1px 1px 0 #ccc;align-items:center;justify-content:center;@media (max-width:670px){&{margin-left:calc(-1 * var(--offset-normal));margin-right:calc(-1 * var(--offset-normal));padding-left:0;padding-right:0;width:100vw;}}color:", tinycolor(background).isDark() ? "var(--color-white)" : "var(--color-black)", ";text-align:center;font-weight:500;width:100%;height:300px;display:flex;flex-direction:column;position:relative;margin-top:calc(-1 * var(--offset-large));margin-left:calc((100vw - var(--blog-post-width)) / -2);margin-right:calc((100vw - var(--blog-post-width)) / -2);padding-left:calc((100vw - var(--blog-post-width)) / 2);padding-right:calc((100vw - var(--blog-post-width)) / 2);width:100%;overflow-x:hidden;font-family:var(--headings-font);" + (""))
  }), children);
}); // If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/codeblog-video/EmojiBackground.package.js

export default EmojiBackground;
