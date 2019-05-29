import { jsx } from '@emotion/core';
import 'react';
import 'tinycolor2';

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
  name: "vd1m67",
  styles: "color:rgba(0,0,0,0.88);display:block;font-family:\"Lucida Grande\",\"Lucida Sans Unicode\",\"Lucida Sans\",Geneva,Arial,sans-serif;font-size:22px;font-style:normal;font-weight:300;letter-spacing:normal;line-height:30.8px;margin-block-end:var(--offset-large);margin-inline-end:0px;margin-inline-start:0px;margin-left:0px;margin-right:0px;text-align:center;text-rendering:optimizelegibility;text-size-adjust:100%;visibility:visible;"
};

var Webthingium = (function (_ref2) {
  var children = _ref2.children,
      background = _ref2.background,
      otherProps = _objectWithoutProperties(_ref2, ["children", "background"]);

  return jsx("div", _extends({}, otherProps, {
    // Webthing uses Emotion (https://emotion.sh) for CSS.
    // This makes it easy to have styles that apply per component instead of to the whole page
    css: _ref
  }), children);
}); // If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/jarred-components-4/Webthingium.package.js

export default Webthingium;
