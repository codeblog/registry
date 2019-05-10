import { jsx } from '@emotion/core';
import 'react';
import '@emotion/styled';
import 'tinycolor2';

var SocialImage = (function (_ref) {
  var url = _ref.url;
  return jsx("p", null, jsx("a", {
    target: "_blank",
    href: url
  }, jsx("img", {
    src: url
  })));
});

export default SocialImage;
