(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@emotion/core'), require('react'), require('tinycolor2'), require('@webthing/core'), require('moment'), require('lodash')) :
  typeof define === 'function' && define.amd ? define(['@emotion/core', 'react', 'tinycolor2', '@webthing/core', 'moment', 'lodash'], factory) :
  (global = global || self, global['@jarred/video-heading'] = factory(global['@emotion/core'], global.react, global.tinycolor2, global['@webthing/core'], global.moment, global.lodash));
}(this, function (core, react, tinycolor, core$1, moment, lodash) { 'use strict';

  react = react && react.hasOwnProperty('default') ? react['default'] : react;
  tinycolor = tinycolor && tinycolor.hasOwnProperty('default') ? tinycolor['default'] : tinycolor;
  moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

  var VideoHeading = function VideoHeading(_ref) {
    var children = _ref.children,
        fill = _ref.fill,
        url = _ref.url,
        showDate = _ref.showDate,
        href = _ref.href,
        date = _ref.date;
    return core.jsx("a", {
      href: href,
      target: "_blank" // Webthing uses Emotion (https://emotion.sh) for CSS.
      // This makes it easy to have styles that apply per component instead of to the whole page
      ,
      css:
      /*#__PURE__*/
      core.css("@font-face{font-family:\"ProFontWindows\";src:url(\"https://js.webthing.co/nonjs/fonts/ProFontWindows.eot\");src:url(\"https://js.webthing.co/nonjs/fonts/ProFontWindows.eot?#iefix\") format(\"embedded-opentype\"),url(\"https://js.webthing.co/nonjs/fonts/ProFontWindows.otf\") format(\"opentype\"),url(\"https://js.webthing.co/nonjs/fonts/ProFontWindows.svg\") format(\"svg\"),url(\"https://js.webthing.co/nonjs/fonts/ProFontWindows.ttf\") format(\"truetype\"),url(\"https://js.webthing.co/nonjs/fonts/ProFontWindows.woff\") format(\"woff\"),url(\"https://js.webthing.co/nonjs/fonts/ProFontWindows.woff2\") format(\"woff2\");font-weight:normal;font-style:normal;}position:relative;box-sizing:content-box;text-decoration:none;margin-left:calc((100vw - var(--blog-post-width)) / -2);margin-right:calc((100vw - var(--blog-post-width)) / -2);padding-left:calc((100vw - var(--blog-post-width)) / 2);padding-right:calc((100vw - var(--blog-post-width)) / 2);background-size:100vw auto;font-size:1.75em;background-color:transparent;flex-direction:column;border-top:1px solid ", fill, ";border-bottom:1px solid ", fill, ";width:100%;margin-block-start:var(--offset-medium);padding-top:calc(var(--offset-normal) + 40px);padding-bottom:calc(var(--offset-normal) + 40px);margin-block-end:var(--offset-medium);font-weight:500;font-family:var(--headings-font);overflow-x:hidden;flex-direction:column;max-width:100vw;min-height:150px;display:flex;align-items:center;justify-content:center;&::before{content:\"\";display:block;position:absolute;top:0;left:0;bottom:0;right:0;background:linear-gradient( rgba(18,16,16,1) 50%,rgba(10,8,8,0.75) 50% ),linear-gradient( 90deg,rgba(255,0,0,0.94),rgba(0,255,0,0.98),rgba(0,0,255,0.94) );z-index:1;background-size:100% 2px,3px 100%;pointer-events:none;background-blend-mode:lighten;opacity:0.1;}.VCRStatic{width:100%;height:100%;position:absolute;top:0;left:0;bottom:0;right:0;display:block;z-index:1;opacity:0.1;pointer-events:none;}.Text{z-index:2;position:relative;width:100%;height:100%;display:flex;line-height:1;flex:1;align-items:center;font-size:1.8em;line-height:1.2;text-align:left;color:", fill, ";text-shadow:0 0 1px ", tinycolor(fill).isDark() ? "#fff" : "#000", ";}@media (max-width:670px){&{margin-left:calc(-1 * var(--offset-normal));margin-right:calc(-1 * var(--offset-normal));padding-left:0;padding-right:0;width:auto;max-width:auto;}.Text{padding-left:var(--offset-normal);padding-right:var(--offset-normal);}.HomeVideo{left:48px;}}video{position:absolute;z-index:-1;width:100vw;height:100%;object-fit:cover;top:0;bottom:0;left:0;right:0;pointer-events:none;}.HomeVideo{position:absolute;pointer-events:none;width:var(--blog-post-width);left:0;right:0;margin-left:auto;margin-right:auto;bottom:40px;white-space:nowrap;display:grid;grid-row-gap:5px;grid-template-rows:22px 22px;z-index:0;opacity:0.8;}.Row{color:white;font-size:24px;line-height:24px;font-family:\"ProFontWindows\";text-transform:uppercase;display:flex;}.Left{text-align:right;width:50px;margin-right:20px;}" + (""))
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
    })), core.jsx("img", {
      src: "https://storage.googleapis.com/codeblog-shrinecache/vcr-static.gif",
      className: "VCRStatic"
    }), showDate && core.jsx("div", {
      className: "HomeVideo"
    }, core.jsx("div", {
      className: "Row"
    }, core.jsx("div", {
      className: "Left"
    }, date.format("a")), core.jsx("div", {
      className: "Right"
    }, date.format("HH:mm"))), core.jsx("div", {
      className: "Row"
    }, core.jsx("div", {
      className: "Left"
    }, date.format("MMM")), core.jsx("div", {
      className: "Right"
    }, date.format("DD YYYY")))), core.jsx("div", {
      className: "Text"
    }, children));
  }; // This is the React component that is shown your pad.
  // Since this is a Block component, be sure to render children. If you don't, things will break.


  var VideoHeading$1 = (function (_ref2) {
    var children = _ref2.children,
        text = _ref2.text,
        fill = _ref2.fill,
        url = _ref2.url;
    return core.jsx(core$1.Webthing, null, function (_ref3) {
      var _ref3$post = _ref3.post,
          href = _ref3$post.url,
          _ref3$post$updatedAt = _ref3$post.updatedAt,
          updatedAt = _ref3$post$updatedAt === void 0 ? new Date() : _ref3$post$updatedAt;
      return core.jsx(VideoHeading, {
        date: moment(updatedAt || new Date()).subtract(25, "years"),
        url: url,
        href: href,
        showDate: !text || lodash.trim(text).length === 0,
        fill: fill
      }, children);
    });
  }); // If you want to...
  // - Supply default props
  // - 🔎 Change how your component appears in search
  // - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
  // Edit this file:
  // 📦/Users/jarred/Code/codeblog/jarred-components-word/VideoHeading.package.js

  return VideoHeading$1;

}));
