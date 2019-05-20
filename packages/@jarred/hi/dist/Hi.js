(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@emotion/core'), require('react'), require('tinycolor2')) :
  typeof define === 'function' && define.amd ? define(['@emotion/core', 'react', 'tinycolor2'], factory) :
  (global = global || self, global['@jarred/hi'] = factory(global['@emotion/core'], global.react, global.tinycolor2));
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

  var Hi = (function (_ref) {
    var children = _ref.children,
        background = _ref.background,
        otherProps = _objectWithoutProperties(_ref, ["children", "background"]);

    return core.jsx("div", _extends({}, otherProps, {
      // Codeblog uses Emotion (https://emotion.sh) for CSS.
      // This makes it easy to have styles that apply per component instead of to the whole page
      css:
      /*#__PURE__*/
      core.css("background-color:", background, ";color:", tinycolor(background).isDark() ? "var(--color-white)" : "var(--color-black)", ";font-size:24px;text-align:center;font-weight:500;width:100%;display:block;padding-top:var(--offset-normal);padding-bottom:var(--offset-normal);font-family:var(--headings-font);" + ("/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlZIiwiZmlsZSI6IkhpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQSBoYW5kZnVsIG9mIGNvbW1vbiBwYWNrYWdlcyBhcmUgaW5jbHVkZWQgZm9yIHlvdSBhdXRvbWF0aWNhbGx5LlxuLy8gSWYgeW91IHdhbnQgdG8gYWRkIGRlcGVuZGVuY2llcywgYWRkIGl0IGluIFwiZGVwZW5kZW5jaWVzXCIgaW4gL1VzZXJzL2phcnJlZC9Db2RlL2NvZGVibG9nL2phcnJlZC1jb21wb25lbnRzL0hpLnBhY2thZ2UuanNcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgdGlueWNvbG9yIGZyb20gXCJ0aW55Y29sb3IyXCI7IC8vIFRoaXMgaXMgYSBwb3B1bGFyIGNvbG9yIGxpYnJhcnlcbi8vIFRoaXMgaXMgdGhlIFJlYWN0IGNvbXBvbmVudCB0aGF0IGlzIHNob3duIHlvdXIgcGFkLlxuLy8gU2luY2UgdGhpcyBpcyBhIEJsb2NrIGNvbXBvbmVudCwgYmUgc3VyZSB0byByZW5kZXIgY2hpbGRyZW4uIElmIHlvdSBkb24ndCwgdGhpbmdzIHdpbGwgYnJlYWsuXG5leHBvcnQgZGVmYXVsdCAoeyBjaGlsZHJlbiwgYmFja2dyb3VuZCwgLi4ub3RoZXJQcm9wcyB9KSA9PiAoXG4gIDxkaXZcbiAgICB7Li4ub3RoZXJQcm9wc31cbiAgICAvLyBDb2RlYmxvZyB1c2VzIEVtb3Rpb24gKGh0dHBzOi8vZW1vdGlvbi5zaCkgZm9yIENTUy5cbiAgICAvLyBUaGlzIG1ha2VzIGl0IGVhc3kgdG8gaGF2ZSBzdHlsZXMgdGhhdCBhcHBseSBwZXIgY29tcG9uZW50IGluc3RlYWQgb2YgdG8gdGhlIHdob2xlIHBhZ2VcbiAgICBjc3M9e2Nzc2BcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YmFja2dyb3VuZH07XG4gICAgICAvKiBUaGUgdGV4dCBjb2xvciBzaG91bGQgYmUgcmVhZGFibGUgb24gYW55IGJhY2tncm91bmQgeW91IGNob29zZSAqL1xuICAgICAgLyogU28gd2UgY2hlY2sgaWYgdGhlIGJhY2tncm91bmQgaXMgZGFyayBhbmQsIHdoZW4gaXQgaXMsIHdlIG1ha2UgdGhlIHRleHQgY29sb3IgbGlnaHQgKi9cbiAgICAgIGNvbG9yOiAke3Rpbnljb2xvcihiYWNrZ3JvdW5kKS5pc0RhcmsoKVxuICAgICAgICA/IFwidmFyKC0tY29sb3Itd2hpdGUpXCJcbiAgICAgICAgOiBcInZhcigtLWNvbG9yLWJsYWNrKVwifTtcblxuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1vZmZzZXQtbm9ybWFsKTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1vZmZzZXQtbm9ybWFsKTtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5ncy1mb250KTtcbiAgICBgfVxuICA+XG4gICAgey8qIERvbid0IGZvcmdldCB0byByZW5kZXIgY2hpbGRyZW4hIElmIHlvdSBmb3JnZXQsIHR5cGluZyBpbiB5b3VyIGNvbXBvbmVudCB3b24ndCB3b3JrICovfVxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG4vLyBpZiB5b3Ugd2FudCB0byBjaGFuZ2UgaG93IHlvdXIgY29tcG9uZW50IGFwcGVhcnMgaW4gc2VhcmNoLCBlZGl0IHRoaXMgZmlsZTpcbi8vIC9Vc2Vycy9qYXJyZWQvQ29kZS9jb2RlYmxvZy9qYXJyZWQtY29tcG9uZW50cy9IaS5wYWNrYWdlLmpzXG4iXX0= */"))
    }), children);
  }); // if you want to change how your component appears in search, edit this file:
  // /Users/jarred/Code/codeblog/jarred-components/Hi.package.js

  return Hi;

}));
