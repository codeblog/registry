// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in /Users/jarred/Code/codeblog/jarred-components-word/VideoHeading.package.js
import React from "react";
import { css } from "@emotion/core";
import tinycolor from "tinycolor2"; // This is a popular color library
import { Webthing } from "@webthing/core";
import moment from "moment";
import { trim } from "lodash";

const VideoHeading = ({ children, fill, url, showDate, href, date }) => (
  <a
    href={href}
    target="_blank"
    // Webthing uses Emotion (https://emotion.sh) for CSS.
    // This makes it easy to have styles that apply per component instead of to the whole page
    css={css`
      /* font converted using font-converter.net. thank you! */
      @font-face {
        font-family: "ProFontWindows";
        src: url("https://js.webthing.co/nonjs/fonts/ProFontWindows.eot"); /* IE9 Compat Modes */
        src: url("https://js.webthing.co/nonjs/fonts/ProFontWindows.eot?#iefix")
            format("embedded-opentype"),
          /* IE6-IE8 */
            url("https://js.webthing.co/nonjs/fonts/ProFontWindows.otf")
            format("opentype"),
          /* Open Type Font */
            url("https://js.webthing.co/nonjs/fonts/ProFontWindows.svg")
            format("svg"),
          /* Legacy iOS */
            url("https://js.webthing.co/nonjs/fonts/ProFontWindows.ttf")
            format("truetype"),
          /* Safari, Android, iOS */
            url("https://js.webthing.co/nonjs/fonts/ProFontWindows.woff")
            format("woff"),
          /* Modern Browsers */
            url("https://js.webthing.co/nonjs/fonts/ProFontWindows.woff2")
            format("woff2"); /* Modern Browsers */
        font-weight: normal;
        font-style: normal;
      }

      position: relative;
      box-sizing: content-box;
      text-decoration: none;
      margin-left: calc((100vw - var(--blog-post-width)) / -2);
      margin-right: calc((100vw - var(--blog-post-width)) / -2);
      padding-left: calc((100vw - var(--blog-post-width)) / 2);
      padding-right: calc((100vw - var(--blog-post-width)) / 2);
      background-size: 100vw auto;
      font-size: 1.75em;
      background-color: transparent;
      flex-direction: column;
      border-top: 1px solid ${fill};
      border-bottom: 1px solid ${fill};
      width: 100%;
      margin-block-start: var(--offset-medium);
      padding-top: calc(var(--offset-normal) + 40px);
      padding-bottom: calc(var(--offset-normal) + 40px);
      margin-block-end: var(--offset-medium);
      font-weight: 500;
      font-family: var(--headings-font);
      overflow-x: hidden;
      flex-direction: column;
      max-width: 100vw;
      min-height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(
            rgba(18, 16, 16, 1) 50%,
            rgba(10, 8, 8, 0.75) 50%
          ),
          linear-gradient(
            90deg,
            rgba(255, 0, 0, 0.94),
            rgba(0, 255, 0, 0.98),
            rgba(0, 0, 255, 0.94)
          );

        z-index: 1;
        background-size: 100% 2px, 3px 100%;
        pointer-events: none;
        background-blend-mode: lighten;
        opacity: 0.1;
      }

      .VCRStatic {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: block;
        z-index: 1;
        opacity: 0.1;
        pointer-events: none;
      }

      .Text {
        z-index: 2;
        position: relative;

        width: 100%;
        height: 100%;
        display: flex;
        line-height: 1;
        flex: 1;
        align-items: center;

        font-size: 1.8em;
        line-height: 1.2;

        text-align: left;
        color: ${fill};

        text-shadow: 0 0 1px ${tinycolor(fill).isDark() ? "#fff" : "#000"};
      }

      @media (max-width: 670px) {
        & {
          margin-left: calc(-1 * var(--offset-normal));
          margin-right: calc(-1 * var(--offset-normal));
          padding-left: 0;
          padding-right: 0;
          width: auto;
          max-width: auto;
        }

        .Text {
          padding-left: var(--offset-normal);
          padding-right: var(--offset-normal);
        }

        .HomeVideo {
          left: 48px;
        }
      }

      video {
        position: absolute;
        z-index: -1;
        width: 100vw;
        height: 100%;
        object-fit: cover;

        top: 0;
        bottom: 0;
        left: 0;

        right: 0;
        pointer-events: none;
      }

      .HomeVideo {
        position: absolute;
        pointer-events: none;
        width: var(--blog-post-width);
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;

        bottom: 40px;
        white-space: nowrap;
        display: grid;
        grid-row-gap: 5px;
        grid-template-rows: 22px 22px;
        opacity: 0.8;
        z-index: 3;
        mix-blend-mode: color-burn;
      }

      .Row {
        color: white;
        font-size: 24px;
        line-height: 24px;
        font-family: "ProFontWindows";
        text-transform: uppercase;
        display: flex;
      }

      .Left {
        text-align: right;
        width: 50px;
        margin-right: 20px;
      }
    `}
  >
    <video
      playsInline
      width="100%"
      muted
      autoPlay
      loop
      className="VideoContainer"
    >
      <source src={url} type="video/mp4" />
    </video>
    <img
      src="https://storage.googleapis.com/codeblog-shrinecache/vcr-static.gif"
      className="VCRStatic"
    />
    {showDate && (
      <div className="HomeVideo">
        <div className="Row">
          <div className="Left">{date.format("a")}</div>
          <div className="Right">{date.format("HH:mm")}</div>
        </div>

        <div className="Row">
          <div className="Left">{date.format("MMM")}</div>
          <div className="Right">{date.format("DD YYYY")}</div>
        </div>
      </div>
    )}
    {/* Don't forget to render children! If you forget, typing in your component won't work */}
    <div className="Text">{children}</div>
  </a>
);

// This is the React component that is shown your pad.
// Since this is a Block component, be sure to render children. If you don't, things will break.
export default ({ children, text, fill, url }) => {
  return (
    <Webthing>
      {({ post: { url: href, updatedAt = new Date() } }) => (
        <VideoHeading
          date={moment(updatedAt || new Date()).subtract(25, "years")}
          url={url}
          href={href}
          showDate={!text || trim(text).length === 0}
          fill={fill}
        >
          {children}
        </VideoHeading>
      )}
    </Webthing>
  );
};

// If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/jarred-components-word/VideoHeading.package.js
