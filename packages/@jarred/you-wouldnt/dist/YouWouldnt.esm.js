import { jsx } from '@emotion/core';
import 'react';
import 'tinycolor2';

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
  name: "nrlodf",
  styles: "@font-face{font-family:\"XBANDRough\";src:url(\"https://js.webthing.co/nonjs/fonts/XBANDRough.eot\");src:url(\"https://js.webthing.co/nonjs/fonts/XBANDRough.eot?#iefix\") format(\"embedded-opentype\"),url(\"https://js.webthing.co/nonjs/fonts/XBANDRough.otf\") format(\"opentype\"),url(\"https://js.webthing.co/nonjs/fonts/XBANDRough.svg\") format(\"svg\"),url(\"https://js.webthing.co/nonjs/fonts/XBANDRough.ttf\") format(\"truetype\"),url(\"https://js.webthing.co/nonjs/fonts/XBANDRough.woff\") format(\"woff\"),url(\"https://js.webthing.co/nonjs/fonts/XBANDRough.woff2\") format(\"woff2\");font-weight:normal;font-style:normal;}background-color:#111;color:var(--color-white);box-sizing:content-box;margin-left:calc((100vw - var(--blog-post-width)) / -2);margin-right:calc((100vw - var(--blog-post-width)) / -2);padding-left:calc((100vw - var(--blog-post-width)) / 2);padding-right:calc((100vw - var(--blog-post-width)) / 2);background-size:100vw auto;font-size:3.5em;text-align:center;width:100%;word-spacing:0.15em;margin-block-start:var(--offset-medium);padding-top:var(--offset-medium);padding-bottom:var(--offset-medium);margin-block-end:var(--offset-medium);overflow-x:hidden;&:first-line{font-size:0.65em;text-align:center;}font-family:\"XBANDRough\",var(--headings-font);@media (max-width:670px){margin-left:calc(-1 * var(--offset-normal));margin-right:calc(-1 * var(--offset-normal));padding-left:var(--offset-normal);padding-right:var(--offset-normal);width:auto;max-width:auto;font-size:2.5em;}"
};

var YouWouldnt = (function (_ref2) {
  var children = _ref2.children,
      background = _ref2.background,
      otherProps = _objectWithoutProperties(_ref2, ["children", "background"]);

  return jsx("div", {
    // Webthing uses Emotion (https://emotion.sh) for CSS.
    // This makes it easy to have styles that apply per component instead of to the whole page
    css: _ref
  }, children);
}); // If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/jarred-components-word/You wouldnt.package.js

export default YouWouldnt;
