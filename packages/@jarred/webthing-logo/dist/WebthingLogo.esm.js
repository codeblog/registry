import { jsx } from '@emotion/core';
import React from 'react';

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
  name: "5ezauw",
  styles: "display:inline-flex;align-items:center;span{margin-left:10px;}"
};

var _ref2 = {
  name: "d7wf3j",
  styles: "font-size:1.6em;font-weight:bold;font-family:var(--system-font);"
};

var _ref3 = {
  name: "1hyfx7x",
  styles: "display:none;"
};

var WebthingLogo = (function (_ref4) {
  var children = _ref4.children,
      color = _ref4.color,
      otherProps = _objectWithoutProperties(_ref4, ["children", "color"]);

  return (// Since this is an inline component, it should be a `span` (or at least, `display: inline;`)
    jsx(React.Fragment, null, jsx("span", {
      css: _ref
    }, jsx("svg", {
      width: "40",
      height: "40",
      viewBox: "0 0 40 40",
      fill: "none"
    }, jsx("rect", {
      width: "40",
      height: "40",
      rx: "4",
      fill: "#924AFF"
    }), jsx("g", {
      "clip-path": "url(#prefix__clip0)",
      fill: "#fff"
    }, jsx("path", {
      d: "M16.8 17.21h6.367c3.113 0 5.66-2.562 5.66-5.693 0-3.13-2.547-5.692-5.659-5.692h-6.367c-3.114 0-5.66 2.562-5.66 5.693s2.547 5.693 5.66 5.693zm.842-8.599h4.684c.766.003 1.5.31 2.043.854a2.92 2.92 0 0 1 .849 2.052c0 1.6-1.302 2.908-2.892 2.908h-4.684a2.895 2.895 0 0 1-2.042-.854 2.92 2.92 0 0 1-.848-2.052c0-.77.306-1.508.847-2.053a2.894 2.894 0 0 1 2.043-.855z"
    }), jsx("path", {
      d: "M17.175 12.706a1.189 1.189 0 0 0 0-2.378c-.314 0-.616.125-.838.348a1.192 1.192 0 0 0 0 1.682c.222.223.524.348.838.348zm5.617 0c.314 0 .616-.125.838-.348a1.192 1.192 0 0 0 0-1.682 1.182 1.182 0 0 0-2.022.841c0 .316.125.618.347.841.222.223.523.348.837.348zm3.759 11.872H13.416v.871c.002.784.313 1.535.865 2.09.551.554 1.3.867 2.08.87h2.546v2.015a1.833 1.833 0 0 0-.753 1.48c0 .487.193.955.536 1.3.343.346.808.54 1.293.542a1.824 1.824 0 0 0 2.81-.92 1.843 1.843 0 0 0-.904-2.201 1.821 1.821 0 0 0-.829-.202V28.41h2.549a2.948 2.948 0 0 0 2.078-.87 2.973 2.973 0 0 0 .863-2.089v-.872zm0-6.42H13.416v5.55h13.135v-5.55zM12.552 26.251v-8.094a3.046 3.046 0 0 0-1.956.991 3.07 3.07 0 0 0-.79 2.053 3.066 3.066 0 0 0 1.266 2.475v2.526a1.84 1.84 0 0 0-1.14 1.702c0 .488.193.955.536 1.3.343.345.808.54 1.293.541a1.833 1.833 0 0 0 1.295-.54c.343-.346.537-.813.537-1.301a1.848 1.848 0 0 0-1.041-1.654v.001zm16.378-.05v-2.527a3.055 3.055 0 0 0 .473-4.524 3.048 3.048 0 0 0-1.956-.991v8.092a1.835 1.835 0 0 0-1.04 1.653c0 .488.193.956.537 1.3.343.346.809.54 1.294.541a1.83 1.83 0 0 0 1.295-.54 1.845 1.845 0 0 0-.603-3.003z"
    })), jsx("defs", null, jsx("clipPath", {
      id: "prefix__clip0"
    }, jsx("path", {
      fill: "#fff",
      transform: "translate(7.767 5.825)",
      d: "M0 0h24.466v28.349H0z"
    })))), jsx("span", {
      css: _ref2
    }, "Webthing"), jsx("span", {
      css: _ref3
    }, children)))
  );
}); // If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/jarred-components-4/WebthingLogo.package.js

export default WebthingLogo;
