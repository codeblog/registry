// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in /Users/jarred/Code/codeblog/jarred-components-word/You wouldnt.package.js
import React from "react";
import { css } from "@emotion/core";
import tinycolor from "tinycolor2"; // This is a popular color library

// This is the React component that is shown your pad.
// Since this is a Block component, be sure to render children. If you don't, things will break.
export default ({ children, background, ...otherProps }) => (
  <div
    // Webthing uses Emotion (https://emotion.sh) for CSS.
    // This makes it easy to have styles that apply per component instead of to the whole page
    css={css`
      @font-face {
        font-family: "XBANDRough";
        src: url("https://js.webthing.co/nonjs/fonts/XBANDRough.eot"); /* IE9 Compat Modes */
        src: url("https://js.webthing.co/nonjs/fonts/XBANDRough.eot?#iefix")
            format("embedded-opentype"),
          /* IE6-IE8 */ url("https://js.webthing.co/nonjs/fonts/XBANDRough.otf")
            format("opentype"),
          /* Open Type Font */
            url("https://js.webthing.co/nonjs/fonts/XBANDRough.svg")
            format("svg"),
          /* Legacy iOS */
            url("https://js.webthing.co/nonjs/fonts/XBANDRough.ttf")
            format("truetype"),
          /* Safari, Android, iOS */
            url("https://js.webthing.co/nonjs/fonts/XBANDRough.woff")
            format("woff"),
          /* Modern Browsers */
            url("https://js.webthing.co/nonjs/fonts/XBANDRough.woff2")
            format("woff2"); /* Modern Browsers */
        font-weight: normal;
        font-style: normal;
      }

      background-color: #111;
      color: var(--color-white);
      box-sizing: content-box;
      margin-left: calc((100vw - var(--blog-post-width)) / -2);
      margin-right: calc((100vw - var(--blog-post-width)) / -2);
      padding-left: calc((100vw - var(--blog-post-width)) / 2);
      padding-right: calc((100vw - var(--blog-post-width)) / 2);
      background-size: 100vw auto;
      font-size: 3.5em;
      text-align: center;
      width: 100%;
      word-spacing: 0.15em;
      margin-block-start: var(--offset-medium);
      padding-top: var(--offset-medium);
      padding-bottom: var(--offset-medium);
      margin-block-end: var(--offset-medium);
      overflow-x: hidden;

      &:first-line {
        font-size: 0.65em;
        text-align: center;
      }

      font-family: "XBANDRough", var(--headings-font);

      @media (max-width: 670px) {
        margin-left: calc(-1 * var(--offset-normal));
        margin-right: calc(-1 * var(--offset-normal));
        padding-left: var(--offset-normal);
        padding-right: var(--offset-normal);
        width: auto;
        max-width: auto;

        font-size: 2.5em;
      }
    `}
  >
    {/* Don't forget to render children! If you forget, typing in your component won't work */}
    {children}
  </div>
);

// If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/jarred-components-word/You wouldnt.package.js
