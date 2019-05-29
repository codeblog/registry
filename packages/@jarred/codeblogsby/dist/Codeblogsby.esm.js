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
  name: "14g5qef",
  styles: "width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-block-start:var(--offset-large);margin-block-end:var(--offset-large);"
};

var Codeblogsby = (function (_ref2) {
  var children = _ref2.children,
      background = _ref2.background,
      otherProps = _objectWithoutProperties(_ref2, ["children", "background"]);

  return jsx("div", _extends({}, otherProps, {
    // Webthing uses Emotion (https://emotion.sh) for CSS.
    // This makes it easy to have styles that apply per component instead of to the whole page
    css: _ref
  }), jsx("svg", {
    width: 318,
    height: 70,
    fill: "none"
  }, jsx("path", {
    d: "M111.22 44.599c-2.436 2.878-5.87 4.567-9.741 4.567-6.994 0-14.112-5.005-14.112-14.265 0-7.696 5.432-14.578 13.8-14.578 1.498 0 6.244.313 10.053 4.693v-9.51c-3.809-2.065-7.306-2.565-10.241-2.565-5.932 0-11.114 1.564-15.298 5.505C82.122 21.762 79 27.206 79 34.776c0 6.131 1.873 11.324 6.681 15.954 3.497 3.316 7.93 5.819 15.236 5.819 4.496 0 7.805-1.127 10.303-2.44v-9.51zM129.172 27.643c-5.12 0-8.616 1.69-10.927 3.817-2.685 2.44-4.558 6.194-4.558 10.636 0 4.38 1.873 8.133 4.558 10.573 2.311 2.128 5.807 3.817 10.927 3.817 5.121 0 8.617-1.69 10.928-3.817 2.685-2.44 4.558-6.194 4.558-10.573 0-4.442-1.873-8.196-4.558-10.636-2.311-2.127-5.807-3.817-10.928-3.817zm0 22.086c-4.433 0-7.617-3.504-7.617-7.633 0-4.254 3.247-7.696 7.617-7.696 4.371 0 7.618 3.442 7.618 7.696 0 4.13-3.184 7.633-7.618 7.633zM168.783 32.023c-2.56-4.004-6.619-4.38-8.68-4.38-7.992 0-13.425 6.382-13.425 14.39 0 7.946 5.495 14.453 13.8 14.453 1.936 0 5.557-.438 8.305-4.38v3.504h7.617V10h-7.617v22.023zm-6.744 2.377c4.371 0 7.493 3.316 7.493 7.633s-3.122 7.696-7.493 7.696-7.493-3.379-7.493-7.696 3.122-7.633 7.493-7.633zM200.71 46.913c-1.249 2.19-3.435 3.567-6.307 3.567-2.935 0-4.621-1.44-5.432-2.566-.875-1.188-1.312-2.94-1.312-4.567h20.231v-.625c0-2.941-.374-7.195-3.247-10.636-1.873-2.253-5.057-4.443-10.552-4.443-3.247 0-6.994.689-10.178 3.817-1.936 1.94-4.121 5.255-4.121 10.636 0 4.254 1.249 7.758 4.246 10.573 2.685 2.566 5.994 3.817 10.365 3.817 9.429 0 12.488-6.444 13.3-8.446l-6.993-1.127zm-12.801-8.446c.625-3.629 3.559-5.443 6.369-5.443 2.81 0 5.807 1.752 6.432 5.443h-12.801zM218.909 10h-7.618v45.61h7.618v-3.504c2.934 4.067 6.868 4.38 8.617 4.38 7.992 0 13.487-6.194 13.487-14.453 0-8.196-5.308-14.39-13.3-14.39-2.31 0-6.119.626-8.804 4.38V10zm6.743 24.4c4.371 0 7.493 3.316 7.493 7.633s-3.122 7.696-7.493 7.696c-4.37 0-7.493-3.379-7.493-7.696s3.123-7.633 7.493-7.633zM244.404 10v45.61h7.618V10h-7.618zM270.897 27.643c-5.12 0-8.617 1.69-10.927 3.817-2.685 2.44-4.559 6.194-4.559 10.636 0 4.38 1.874 8.133 4.559 10.573 2.31 2.128 5.807 3.817 10.927 3.817 5.12 0 8.617-1.69 10.927-3.817 2.685-2.44 4.558-6.194 4.558-10.573 0-4.442-1.873-8.196-4.558-10.636-2.31-2.127-5.807-3.817-10.927-3.817zm0 22.086c-4.433 0-7.618-3.504-7.618-7.633 0-4.254 3.247-7.696 7.618-7.696s7.618 3.442 7.618 7.696c0 4.13-3.185 7.633-7.618 7.633zM310.382 32.023c-1.061-1.627-3.434-4.38-8.492-4.38-3.621 0-6.931 1.314-9.304 3.63-2.622 2.564-4.183 6.506-4.183 10.76 0 5.256 2.31 8.76 4.308 10.762 2.623 2.565 5.745 3.69 9.366 3.69 2.061 0 5.683-.5 8.305-4.504v3.817c0 2.19-.187 4.317-1.936 6.006-.999.938-2.435 1.69-4.62 1.69-1.062 0-3.122-.063-4.621-1.44-.874-.75-1.561-2.002-1.873-3.253h-8.242c.624 3.066 2.248 6.256 4.371 8.07 1.748 1.565 4.87 3.129 10.115 3.129 5.557 0 8.804-1.94 10.678-3.817C317.625 62.805 318 58.488 318 54.36v-25.84h-7.618v3.504zm-6.619 2.377c2.061 0 3.809.626 5.308 2.19 1.061 1.126 2.185 2.878 2.185 5.443 0 2.19-.874 4.38-2.435 5.819-1.311 1.189-3.184 1.877-5.058 1.877-1.81 0-3.871-.626-5.494-2.378-1.124-1.188-1.999-2.94-1.999-5.318 0-2.815 1.187-4.63 2.436-5.756.936-.876 2.622-1.877 5.057-1.877z",
    fill: "#000"
  }), jsx("path", {
    d: "M32 0C14.4 0 0 14.625 0 32.5S14.4 65 32 65s32-14.625 32-32.5S49.6 0 32 0zM14.172 50.609C9.37 45.732 6.857 39.234 6.857 32.967l24.913 25.07c-6.4-.23-12.798-2.553-17.6-7.428h.002zm23.312 6.75L7.543 26.928c2.515-11.374 12.57-19.963 24.476-19.963 8.456 0 15.769 4.179 20.343 10.446l-3.429 3.036c-3.886-5.34-10.057-8.823-16.914-8.823-8.913 0-16.457 5.802-19.428 13.928l26.285 26.695c6.629-2.32 11.659-8.125 13.256-15.09l1.073-4.658h3.94c0 12.069-8.457 22.285-19.656 24.858h-.005z",
    fill: "#639"
  })));
}); // If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/jarred-components-4/Codeblogsby.package.js

export default Codeblogsby;
