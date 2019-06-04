import _styled from '@emotion/styled-base';
import { jsx } from '@emotion/core';
import { Webthing } from '@webthing/core';
import classNames from 'classnames';
import React from 'react';
import tinycolor from 'tinycolor2';

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

var ChatBubble = _styled("div", {
  target: "e5i1odf0"
})({
  name: "1qu2hqo",
  styles: "display:flex;position:relative;margin-block-end:2px;p{border-top-right-radius:24px;border-top-left-radius:8px;border-bottom-right-radius:24px;border-bottom-left-radius:8px;}&.ChatBubble img{visibility:hidden;}&.ChatBubble--last img{visibility:visible;}&.ChatBubble--first p{border-top-left-radius:24px;}&.ChatBubble--last p{border-bottom-left-radius:24px;}&.ChatBubble--last p{}&.ChatBubble--last{margin-block-end:var(--offset-normal);}"
});

var Paragraph = _styled("p", {
  target: "e5i1odf1"
})({
  name: "106p0e4",
  styles: "margin-block-start:0em;margin-block-end:0em;word-wrap:break-word;line-height:24px;position:relative;padding:10px 20px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";font-size:0.9em;&:before,&:after{content:\"\";position:absolute;bottom:0px;height:20px;}@media (min-width:670px){max-width:400px;}@media (max-width:670px){max-width:300px;}@media (max-width:400px){max-width:auto;padding:10px;}align-self:flex-end;"
});

var Photo = _styled("img", {
  target: "e5i1odf2"
})({
  name: "1du7lp0",
  styles: "border-radius:50%;margin-top:auto;margin-right:var(--offset-small,4px);z-index:2;@media (min-width:670px){margin-left:-24px;}"
});

var ChatBubbleNode = React.memo(function (_ref) {
  var isFirst = _ref.isFirst,
      isLast = _ref.isLast,
      face = _ref.face,
      background = _ref.background,
      children = _ref.children;
  return jsx(ChatBubble, {
    className: classNames("ChatBubble", {
      "ChatBubble--first": isFirst,
      "ChatBubble--last": isLast
    }) // Webthing uses Emotion (https://emotion.sh) for CSS.
    // This makes it easy to have styles that apply per component instead of to the whole page

  }, face && jsx(Photo, {
    src: face,
    width: 24,
    height: 24,
    key: face,
    contentEditable: false
  }), jsx(Paragraph, {
    style: {
      color: tinycolor(background).isDark() ? "var(--color-white, #eee)" : "var(--color-black, #111)",
      background: background
    }
  }, children));
}); // This is the React component that is shown your pad.
// Since this is a Block component, be sure to render children. If you don't, things will break.

var ChatBubble$1 = (function (_ref2) {
  var children = _ref2.children,
      background = _ref2.background,
      isSelected = _ref2.isSelected,
      isFocused = _ref2.isFocused,
      _ref2$groupOffset = _ref2.groupOffset,
      face = _ref2.face,
      _ref2$isFirst = _ref2.isFirst,
      isFirst = _ref2$isFirst === void 0 ? true : _ref2$isFirst,
      _ref2$isLast = _ref2.isLast,
      isLast = _ref2$isLast === void 0 ? true : _ref2$isLast,
      isInEditor = _ref2.isInEditor,
      otherProps = _objectWithoutProperties(_ref2, ["children", "background", "isSelected", "isFocused", "groupOffset", "face", "isFirst", "isLast", "isInEditor"]);

  return jsx(Webthing, null, function () {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      post: post
    },
        post = _ref3.post;

    var _face = face;

    if (!_face && post && post.blog && post.blog.photo_url) {
      _face = post.blog.photo_url;
    }

    return jsx(ChatBubbleNode, {
      isFirst: isFirst,
      isLast: isLast,
      face: _face,
      background: background
    }, children);
  });
}); // If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/jarred-components-word/ChatBubble.package.js

export default ChatBubble$1;
