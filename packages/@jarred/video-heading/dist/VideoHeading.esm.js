import { jsx, css } from '@emotion/core';
import React from 'react';
import tinycolor from 'tinycolor2';
import { WebthingContext } from '@webthing/core';

// Since this is a Block component, be sure to render children. If you don't, things will break.

var VideoHeading = (function (_ref) {
  var children = _ref.children,
      fill = _ref.fill,
      url = _ref.url;

  var _React$useContext = React.useContext(WebthingContext),
      post = _React$useContext.post;

  return jsx("a", {
    href: post.url,
    target: "_blank" // Webthing uses Emotion (https://emotion.sh) for CSS.
    // This makes it easy to have styles that apply per component instead of to the whole page
    ,
    css:
    /*#__PURE__*/
    css("position:relative;box-sizing:content-box;text-decoration:none;margin-left:calc((100vw - var(--blog-post-width)) / -2);margin-right:calc((100vw - var(--blog-post-width)) / -2);padding-left:calc((100vw - var(--blog-post-width)) / 2);padding-right:calc((100vw - var(--blog-post-width)) / 2);background-size:100vw auto;font-size:1.75em;background-color:transparent;flex-direction:column;border-top:1px solid ", fill, ";border-bottom:1px solid ", fill, ";width:100%;margin-block-start:var(--offset-medium);padding-top:var(--offset-normal);padding-bottom:var(--offset-normal);margin-block-end:var(--offset-medium);font-weight:500;font-family:var(--headings-font);overflow-x:hidden;flex-direction:column;max-width:100vw;min-height:150px;display:flex;align-items:center;justify-content:center;&::before{content:\"\";display:block;position:absolute;top:0;left:0;bottom:0;right:0;opacity:0.5;background:linear-gradient( rgba(18,16,16,1) 50%,rgba(10,8,8,0.75) 50% ),linear-gradient( 90deg,rgba(255,0,0,0.94),rgba(0,255,0,0.98),rgba(0,0,255,0.94) );z-index:1;background-size:100% 2px,3px 100%;pointer-events:none;}.Text{z-index:2;position:relative;width:100%;height:100%;display:flex;flex:1;align-items:center;font-size:1.8em;text-align:left;color:", fill, ";text-shadow:0 0 1px ", tinycolor(fill).isDark() ? "#fff" : "#000", ";}@media (max-width:670px){&{margin-left:calc(-1 * var(--offset-normal));margin-right:calc(-1 * var(--offset-normal));padding-left:0;padding-right:0;width:auto;max-width:auto;}.Text{padding-left:var(--offset-normal);padding-right:var(--offset-normal);}}video{position:absolute;z-index:-1;width:100vw;height:100%;object-fit:cover;top:0;bottom:0;left:0;right:0;pointer-events:none;}" + (""))
  }, jsx("video", {
    playsInline: true,
    width: "100%",
    muted: true,
    autoPlay: true,
    loop: true,
    className: "VideoContainer"
  }, jsx("source", {
    src: url,
    type: "video/mp4"
  })), jsx("div", {
    className: "Text"
  }, children));
}); // If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/jarred-components-word/VideoHeading.package.js

export default VideoHeading;
