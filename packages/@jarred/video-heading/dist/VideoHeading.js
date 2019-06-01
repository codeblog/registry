(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@emotion/core'), require('react'), require('tinycolor2')) :
  typeof define === 'function' && define.amd ? define(['@emotion/core', 'react', 'tinycolor2'], factory) :
  (global = global || self, global['@jarred/video-heading'] = factory(global['@emotion/core'], global.react, global.tinycolor2));
}(this, function (core, react, tinycolor) { 'use strict';

  react = react && react.hasOwnProperty('default') ? react['default'] : react;
  tinycolor = tinycolor && tinycolor.hasOwnProperty('default') ? tinycolor['default'] : tinycolor;

  // This is the React component that is shown your pad.
  // Since this is a Block component, be sure to render children. If you don't, things will break.

  var VideoHeading = (function (_ref) {
    var children = _ref.children,
        fill = _ref.fill,
        url = _ref.url;
    return core.jsx("div", {
      // Webthing uses Emotion (https://emotion.sh) for CSS.
      // This makes it easy to have styles that apply per component instead of to the whole page
      css:
      /*#__PURE__*/
      core.css("position:relative;box-sizing:content-box;margin-left:calc((100vw - var(--blog-post-width)) / -2);margin-right:calc((100vw - var(--blog-post-width)) / -2);padding-left:calc((100vw - var(--blog-post-width)) / 2);padding-right:calc((100vw - var(--blog-post-width)) / 2);background-size:100vw auto;font-size:1.75em;font-family:var(--headings-font);background-color:transparent;border-top:1px solid ", fill, ";border-bottom:1px solid ", fill, ";width:100%;margin-block-start:var(--offset-medium);padding-top:var(--offset-normal);padding-bottom:var(--offset-normal);margin-block-end:var(--offset-medium);overflow-x:hidden;max-width:100vw;&::before{content:\"\";display:block;position:absolute;top:0;left:0;bottom:0;right:0;opacity:0.5;background:linear-gradient( rgba(18,16,16,1) 50%,rgba(10,8,8,0.75) 50% ),linear-gradient( 90deg,rgba(255,0,0,0.94),rgba(0,255,0,0.98),rgba(0,0,255,0.94) );z-index:1;background-size:100% 2px,3px 100%;pointer-events:none;}.Text{z-index:2;position:relative;--stroke-color:", tinycolor(fill).isDark() ? "var(--color-white)" : "var(--color-black)", ";-webkit-text-stroke:2px var(--stroke-color);-moz-text-stroke:2px var(--stroke-color);text-stroke:2px var(--stroke-color);-webkit-background-clip:text;-moz-background-clip:text;background-clip:text;-webkit-text-fill-color:", fill, ";text-fill-color:", fill, ";font-size:1.8em;}@media (max-width:670px){&{margin-left:calc(-1 * var(--offset-normal));margin-right:calc(-1 * var(--offset-normal));padding-left:0;padding-right:0;width:auto;max-width:auto;}.Text{padding-left:var(--offset-normal);padding-right:var(--offset-normal);}}video{position:absolute;z-index:-1;width:100vw;height:100%;object-fit:cover;top:0;bottom:0;left:0;right:0;pointer-events:none;}" + (""))
    }, core.jsx("video", {
      playsInline: true,
      width: "100%",
      muted: true,
      autoPlay: true,
      loop: true,
      className: "VideoContainer"
    }, core.jsx("source", {
      src: url,
      type: "video/mp4"
    })), core.jsx("div", {
      className: "Text"
    }, children));
  }); // If you want to...
  // - Supply default props
  // - 🔎 Change how your component appears in search
  // - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
  // Edit this file:
  // 📦/Users/jarred/Code/codeblog/jarred-components-word/VideoHeading.package.js

  return VideoHeading;

}));
