import { jsx, css } from '@emotion/core';
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

var Pen = (function (_ref) {
  var children = _ref.children,
      color = _ref.color,
      otherProps = _objectWithoutProperties(_ref, ["children", "color"]);

  return (// Since this is an inline component, it should be a `span` (or at least, `display: inline;`)
    jsx("span", _extends({}, otherProps, {
      // Webthing uses Emotion (https://emotion.sh) for CSS.
      // This makes it easy to have styles that apply per component instead of to the whole page
      css:
      /*#__PURE__*/
      css("@import url(\"https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap\");color:", color, ";font-family:\"Nanum Pen Script\",sans-serif;font-size:1.3em;line-height:1;vertical-align:middle;" + (""))
    }), children)
  );
}); // If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/jarred-components-4/Pen.package.js

export default Pen;
