// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in /Users/jarred/Code/codeblog/jarred-components-4/Webthingium.package.js
import React from "react";
import { css } from "@emotion/core";
import tinycolor from "tinycolor2"; // This is a popular color library

// This is the React component that is shown your pad.
// Since this is a Block component, be sure to render children. If you don't, things will break.
export default ({ children, background, ...otherProps }) => (
  <div
    {...otherProps}
    // Webthing uses Emotion (https://emotion.sh) for CSS.
    // This makes it easy to have styles that apply per component instead of to the whole page
    css={css`
      color: rgba(0, 0, 0, 0.88);
      display: block;
      font-family: "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva,
        Arial, sans-serif;
      font-size: 22px;
      font-style: normal;
      font-weight: 300;
      letter-spacing: normal;
      line-height: 30.8px;
      margin-block-end: var(--offset-large);
      margin-inline-end: 0px;
      margin-inline-start: 0px;
      margin-left: 0px;
      margin-right: 0px;
      text-align: center;
      text-rendering: optimizelegibility;
      text-size-adjust: 100%;
      visibility: visible;
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
// 📦/Users/jarred/Code/codeblog/jarred-components-4/Webthingium.package.js
