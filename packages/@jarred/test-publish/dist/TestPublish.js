(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@emotion/styled-base'), require('@emotion/core'), require('react'), require('tinycolor2')) :
  typeof define === 'function' && define.amd ? define(['@emotion/styled-base', '@emotion/core', 'react', 'tinycolor2'], factory) :
  (global = global || self, global['@jarred/test-publish'] = factory(global['@emotion/styled-base'], global['@emotion/core'], global.react, global.tinycolor2));
}(this, function (_styled, core, React, tinycolor) { 'use strict';

  _styled = _styled && _styled.hasOwnProperty('default') ? _styled['default'] : _styled;
  React = React && React.hasOwnProperty('default') ? React['default'] : React;
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

  var TestPublishComponent = _styled("div", {
    target: "el7iwp10",
    label: "TestPublishComponent"
  })("background-color:", function (props) {
    return props.background;
  }, ";color:", function (props) {
    return tinycolor(props.background).isDark() ? "var(--color-white)" : "var(--color-black)";
  }, ";padding-top:var(--offset-normal);padding-bottom:var(--offset-normal);font-family:var(--headings-font);font-size:24px;text-align:center;font-weight:bold;width:100%;display:flex;" + ("/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRlc3RQdWJsaXNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUl1QyIsImZpbGUiOiJUZXN0UHVibGlzaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHRpbnljb2xvciBmcm9tIFwidGlueWNvbG9yMlwiO1xuXG5jb25zdCBUZXN0UHVibGlzaENvbXBvbmVudCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYmFja2dyb3VuZH07XG4gIGNvbG9yOiAke3Byb3BzID0+XG4gICAgdGlueWNvbG9yKHByb3BzLmJhY2tncm91bmQpLmlzRGFyaygpXG4gICAgICA/IFwidmFyKC0tY29sb3Itd2hpdGUpXCJcbiAgICAgIDogXCJ2YXIoLS1jb2xvci1ibGFjaylcIn07XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1vZmZzZXQtbm9ybWFsKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLW9mZnNldC1ub3JtYWwpO1xuXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5ncy1mb250KTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWYoXG4gICh7IGNoaWxkcmVuLCBiYWNrZ3JvdW5kLCAuLi5vdGhlclByb3BzIH0sIHJlZikgPT4gKFxuICAgIDxUZXN0UHVibGlzaENvbXBvbmVudCByZWY9e3JlZn0gey4uLm90aGVyUHJvcHN9IGJhY2tncm91bmQ9e2JhY2tncm91bmR9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvVGVzdFB1Ymxpc2hDb21wb25lbnQ+XG4gIClcbik7XG4iXX0= */"));

  var TestPublish = React.forwardRef(function (_ref, ref) {
    var children = _ref.children,
        background = _ref.background,
        otherProps = _objectWithoutProperties(_ref, ["children", "background"]);

    return core.jsx(TestPublishComponent, _extends({
      ref: ref
    }, otherProps, {
      background: background
    }), children);
  });

  return TestPublish;

}));
