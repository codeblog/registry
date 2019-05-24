(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@emotion/core'), require('react'), require('tinycolor2')) :
  typeof define === 'function' && define.amd ? define(['@emotion/core', 'react', 'tinycolor2'], factory) :
  (global = global || self, global['@jarred/caption'] = factory(global['@emotion/core'], global.react, global.tinycolor2));
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

  var ArrowIcon = function ArrowIcon(props) {
    return core.jsx("svg", _extends({
      viewBox: "0 0 30.669 85"
    }, props), core.jsx("path", {
      d: "M19.913.174L1.847 6.823a2.82 2.82 0 0 0 1.948 5.293v-.001l12.048-4.433C7.351 21.933 4.267 34.568 4.271 45.263c-.002 12.568 4.231 22.343 8.453 28.924 4.227 6.592 8.438 10.044 8.598 10.179a2.823 2.823 0 0 0 3.968-.401 2.81 2.81 0 0 0 .635-1.782c0-.817-.354-1.629-1.037-2.186h-.001l-.014-.013c-.311-.258-4.097-3.509-7.756-9.4-3.662-5.9-7.205-14.389-7.206-25.32.003-9.633 2.743-21.244 10.844-34.808l4.455 11.806a2.821 2.821 0 0 0 5.459-.997c0-.33-.06-.667-.183-.995L23.523 1.825a2.817 2.817 0 0 0-3.61-1.651z"
    }));
  }; // This is the React component that is shown your pad.
  // Since this is a Block component, be sure to render children. If you don't, things will break.


  var _ref = {
    name: "18o60jx",
    styles: "@import url(\"https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap\");font-weight:normal;width:100%;display:block;margin-block-start:0;margin-block-end:0;margin-top:calc(-2 * var(--offset-normal));font-family:\"Permanent Marker\";font-size:0.8em;opacity:0.7;padding-left:32px;padding-right:32px;svg{position:absolute;left:0;transform:translateX(10px) translateY(-25%) skewY(-14deg);}"
  };

  var Caption = (function (_ref2) {
    var children = _ref2.children,
        otherProps = _objectWithoutProperties(_ref2, ["children"]);

    return core.jsx("div", _extends({}, otherProps, {
      // Codeblog uses Emotion (https://emotion.sh) for CSS.
      // This makes it easy to have styles that apply per component instead of to the whole page
      css: _ref
    }), core.jsx(ArrowIcon, {
      height: "1.5em"
    }), children);
  }); // If you want to...
  // - Supply default props
  // - 🔎 Change how your component appears in search
  // - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
  // Edit this file:
  // 📦/Users/jarred/Code/codeblog/some-components/Caption.package.js

  return Caption;

}));
