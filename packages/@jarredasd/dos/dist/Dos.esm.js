import _styled from '@emotion/styled-base';
import { jsx } from '@emotion/core';
import React from 'react';
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

var DosComponent = _styled("div", {
  target: "e169gh9l0",
  label: "DosComponent"
})("background-color:", function (props) {
  return props.background;
}, ";color:", function (props) {
  return tinycolor(props.background).isDark() ? "var(--color-white)" : "var(--color-black)";
}, ";padding-top:var(--offset-normal);padding-bottom:var(--offset-normal);font-family:var(--headings-font);font-size:24px;text-align:center;font-weight:bold;width:100%;display:block;" + ("/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRvcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJK0IiLCJmaWxlIjoiRG9zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQgdGlueWNvbG9yIGZyb20gXCJ0aW55Y29sb3IyXCI7XG5cbmNvbnN0IERvc0NvbXBvbmVudCA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYmFja2dyb3VuZH07XG4gIGNvbG9yOiAke3Byb3BzID0+XG4gICAgdGlueWNvbG9yKHByb3BzLmJhY2tncm91bmQpLmlzRGFyaygpXG4gICAgICA/IFwidmFyKC0tY29sb3Itd2hpdGUpXCJcbiAgICAgIDogXCJ2YXIoLS1jb2xvci1ibGFjaylcIn07XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1vZmZzZXQtbm9ybWFsKTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLW9mZnNldC1ub3JtYWwpO1xuXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1oZWFkaW5ncy1mb250KTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5mb3J3YXJkUmVmKFxuICAoeyBjaGlsZHJlbiwgYmFja2dyb3VuZCwgLi4ub3RoZXJQcm9wcyB9LCByZWYpID0+IChcbiAgICA8RG9zQ29tcG9uZW50IHJlZj17cmVmfSB7Li4ub3RoZXJQcm9wc30gYmFja2dyb3VuZD17YmFja2dyb3VuZH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Eb3NDb21wb25lbnQ+XG4gIClcbik7XG4iXX0= */"));

var Dos = React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      background = _ref.background,
      otherProps = _objectWithoutProperties(_ref, ["children", "background"]);

  return jsx(DosComponent, _extends({
    ref: ref
  }, otherProps, {
    background: background
  }), children);
});

export default Dos;
