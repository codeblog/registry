(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@emotion/core'), require('react'), require('@emotion/styled'), require('tinycolor2')) :
  typeof define === 'function' && define.amd ? define(['@emotion/core', 'react', '@emotion/styled', 'tinycolor2'], factory) :
  (global = global || self, global['@jarred/social-image'] = factory(global['@emotion/core'], global.react, global['@emotion/styled'], global.tinycolor2));
}(this, function (core, react, styled, tinycolor2) { 'use strict';

  react = react && react.hasOwnProperty('default') ? react['default'] : react;
  styled = styled && styled.hasOwnProperty('default') ? styled['default'] : styled;
  tinycolor2 = tinycolor2 && tinycolor2.hasOwnProperty('default') ? tinycolor2['default'] : tinycolor2;

  var SocialImage = (function (_ref) {
    var url = _ref.url;
    return core.jsx("p", null, core.jsx("a", {
      target: "_blank",
      href: url
    }, core.jsx("img", {
      src: url
    })));
  });

  return SocialImage;

}));
