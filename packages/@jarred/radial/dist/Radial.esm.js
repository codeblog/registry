import { jsx } from '@emotion/core';
import 'react';

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
  name: "7ma8k9",
  styles: "background:-o-radial-gradient(center,ellipse,#fffa28 0%,#ec8a39 100%);background:radial-gradient(ellipse at center,#fffa28 0%,#ec8a39 100%);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffa28',endColorstr='#ec8a39',GradientType=1);font-family:Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans-serif;font-weight:bold;"
};

var Radial = (function (_ref2) {
  var children = _ref2.children,
      color = _ref2.color,
      otherProps = _objectWithoutProperties(_ref2, ["children", "color"]);

  return (// Since this is an inline component, it should be a `span` (or at least, `display: inline;`)
    jsx("span", _extends({}, otherProps, {
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
// 📦/Users/jarred/Code/codeblog/jarred-components-4/Radial.package.js

export default Radial;
