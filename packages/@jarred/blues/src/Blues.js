// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in /Users/jarred/Code/codeblog/jarred-components-4/Blues.package.js
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
      font-family: Impact, sans-serif;
      font-size: 4em;
      font-weight: bold;
      position: relative;
      z-index: 1;
      display: inline-flex;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      color: #24c0fd;
      text-stroke: 0.01em #0000aa;
      filter: progid:DXImageTransform.Microsoft.Glow(Color=#0000aa,Strength=1);
      text-shadow: 0.13em -0.13em 0px #0000aa;
      letter-spacing: -0.05em;
      text-align: center;
    `}
  >
    {children}
  </div>
);

// If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/jarred-components-4/Blues.package.js
