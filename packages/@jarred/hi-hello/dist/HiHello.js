(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@emotion/core'), require('react'), require('tinycolor2')) :
  typeof define === 'function' && define.amd ? define(['@emotion/core', 'react', 'tinycolor2'], factory) :
  (global = global || self, global['@jarred/hi-hello'] = factory(global['@emotion/core'], global.react, global.tinycolor2));
}(this, function (core, react, tinycolor) { 'use strict';

  react = react && react.hasOwnProperty('default') ? react['default'] : react;
  tinycolor = tinycolor && tinycolor.hasOwnProperty('default') ? tinycolor['default'] : tinycolor;

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

  var HiHello = (function (_ref) {
    var children = _ref.children,
        background = _ref.background,
        otherProps = _objectWithoutProperties(_ref, ["children", "background"]);

    return core.jsx("div", _extends({}, otherProps, {
      // Webthing uses Emotion (https://emotion.sh) for CSS.
      // This makes it easy to have styles that apply per component instead of to the whole page
      css:
      /*#__PURE__*/
      core.css("background-color:", background, ";color:", tinycolor(background).isDark() ? "var(--color-white)" : "var(--color-black)", ";font-size:24px;text-align:center;font-weight:500;width:100%;display:block;padding-top:var(--offset-normal);padding-bottom:var(--offset-normal);font-family:var(--headings-font);" + ("/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhpSGVsbG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYVkiLCJmaWxlIjoiSGlIZWxsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEEgaGFuZGZ1bCBvZiBjb21tb24gcGFja2FnZXMgYXJlIGluY2x1ZGVkIGZvciB5b3UgYXV0b21hdGljYWxseS5cbi8vIElmIHlvdSB3YW50IHRvIGFkZCBkZXBlbmRlbmNpZXMsIGFkZCBpdCBpbiBcImRlcGVuZGVuY2llc1wiIGluIC9Vc2Vycy9qYXJyZWQvQ29kZS9jb2RlYmxvZy9qYXJyZWQtY29tcG9uZW50cy0zL0hpSGVsbG8ucGFja2FnZS5qc1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcbmltcG9ydCB0aW55Y29sb3IgZnJvbSBcInRpbnljb2xvcjJcIjsgLy8gVGhpcyBpcyBhIHBvcHVsYXIgY29sb3IgbGlicmFyeVxuXG4vLyBUaGlzIGlzIHRoZSBSZWFjdCBjb21wb25lbnQgdGhhdCBpcyBzaG93biB5b3VyIHBhZC5cbi8vIFNpbmNlIHRoaXMgaXMgYSBCbG9jayBjb21wb25lbnQsIGJlIHN1cmUgdG8gcmVuZGVyIGNoaWxkcmVuLiBJZiB5b3UgZG9uJ3QsIHRoaW5ncyB3aWxsIGJyZWFrLlxuZXhwb3J0IGRlZmF1bHQgKHsgY2hpbGRyZW4sIGJhY2tncm91bmQsIC4uLm90aGVyUHJvcHMgfSkgPT4gKFxuICA8ZGl2XG4gICAgey4uLm90aGVyUHJvcHN9XG4gICAgLy8gV2VidGhpbmcgdXNlcyBFbW90aW9uIChodHRwczovL2Vtb3Rpb24uc2gpIGZvciBDU1MuXG4gICAgLy8gVGhpcyBtYWtlcyBpdCBlYXN5IHRvIGhhdmUgc3R5bGVzIHRoYXQgYXBwbHkgcGVyIGNvbXBvbmVudCBpbnN0ZWFkIG9mIHRvIHRoZSB3aG9sZSBwYWdlXG4gICAgY3NzPXtjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2JhY2tncm91bmR9O1xuICAgICAgLyogVGhlIHRleHQgY29sb3Igc2hvdWxkIGJlIHJlYWRhYmxlIG9uIGFueSBiYWNrZ3JvdW5kIHlvdSBjaG9vc2UgKi9cbiAgICAgIC8qIFNvIHdlIGNoZWNrIGlmIHRoZSBiYWNrZ3JvdW5kIGlzIGRhcmsgYW5kLCB3aGVuIGl0IGlzLCB3ZSBtYWtlIHRoZSB0ZXh0IGNvbG9yIGxpZ2h0ICovXG4gICAgICBjb2xvcjogJHt0aW55Y29sb3IoYmFja2dyb3VuZCkuaXNEYXJrKClcbiAgICAgICAgPyBcInZhcigtLWNvbG9yLXdoaXRlKVwiXG4gICAgICAgIDogXCJ2YXIoLS1jb2xvci1ibGFjaylcIn07XG5cbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICBwYWRkaW5nLXRvcDogdmFyKC0tb2Zmc2V0LW5vcm1hbCk7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tb2Zmc2V0LW5vcm1hbCk7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0taGVhZGluZ3MtZm9udCk7XG4gICAgYH1cbiAgPlxuICAgIHsvKiBEb24ndCBmb3JnZXQgdG8gcmVuZGVyIGNoaWxkcmVuISBJZiB5b3UgZm9yZ2V0LCB0eXBpbmcgaW4geW91ciBjb21wb25lbnQgd29uJ3Qgd29yayAqL31cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuLy8gSWYgeW91IHdhbnQgdG8uLi5cbi8vIC0gU3VwcGx5IGRlZmF1bHQgcHJvcHNcbi8vIC0g8J+UjiBDaGFuZ2UgaG93IHlvdXIgY29tcG9uZW50IGFwcGVhcnMgaW4gc2VhcmNoXG4vLyAtIPCfjqggQ2hhbmdlIHRoZSBwcm9wcyB5b3UgY2FuIGVkaXQgZnJvbSB0aGUgZWRpdG9yIChlLmcuIGFjY2VwdCBhIFVSTCBvciBhIGNvbG9yKVxuLy8gRWRpdCB0aGlzIGZpbGU6XG4vLyDwn5OmL1VzZXJzL2phcnJlZC9Db2RlL2NvZGVibG9nL2phcnJlZC1jb21wb25lbnRzLTMvSGlIZWxsby5wYWNrYWdlLmpzXG4iXX0= */"))
    }), children);
  }); // If you want to...
  // - Supply default props
  // - 🔎 Change how your component appears in search
  // - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
  // Edit this file:
  // 📦/Users/jarred/Code/codeblog/jarred-components-3/HiHello.package.js

  return HiHello;

}));
