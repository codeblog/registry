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

var SpeechBubble = (function (_ref) {
  var children = _ref.children,
      background = _ref.background,
      text = _ref.text,
      otherProps = _objectWithoutProperties(_ref, ["children", "background", "text"]);

  return jsx("div", _extends({}, otherProps, {
    key: background // Webthing uses Emotion (https://emotion.sh) for CSS.
    // This makes it easy to have styles that apply per component instead of to the whole page
    ,
    css:
    /*#__PURE__*/
    css("--text-color:", background, ";--background-color:", tinycolor(background).isDark() ? "var(--color-white)" : "var(--color-black)", ";font-family:\"Comic Sans\",\"Comic Sans MS\",\"Chalkboard\",\"ChalkboardSE-Regular\",sans-serif;background-color:var(--text-color);border:solid 2px var(--background-color);border-radius:12px;display:inline-block;color:var(--background-color);padding:0.2em 1em;position:relative;font-size:24px;&:before{border:solid 12px transparent;border-left:solid 12px var(--background-color);border-bottom:solid 12px var(--background-color);top:-24px;content:\"\";height:0;left:32px;position:absolute;transform:skew(15deg);width:0;}&:after{border:solid 10px transparent;border-left:solid 10px var(--text-color);border-bottom:solid 10px var(--text-color);top:-19px;content:\"\";height:0;left:35px;position:absolute;transform:skew(15deg);width:0;}" + (""))
  }), children);
}); // If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/jarred-components-3/WoahMan.package.js

export default SpeechBubble;
