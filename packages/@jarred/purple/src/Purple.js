// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in 📦 /Users/jarred/Code/codeblog/jarred-components-4/Purple.package.js
import React from "react";
import { css } from "@emotion/core";

// This is the React component that is shown your pad.
// This example will render text in uppercase. SHOUTING ON THE INTERNET
export default ({ children, color, ...otherProps }) => (
  // Since this is an inline component, it should be a `span` (or at least, `display: inline;`)
  <span
    {...otherProps}
    // Webthing uses Emotion (https://emotion.sh) for CSS.
    // This makes it easy to have styles that apply per component instead of to the whole page
    css={css`
      letter-spacing: -0.01em;
      font-family: Impact, Haettenschweiler, Franklin Gothic Bold, Charcoal,
        Helvetica Inserat, Bitstream Vera Sans Bold, Arial Black, sans-serif;
      background: #4222be;
      background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJod…IgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWQtdWNnZy1nZW5lcmF0ZWQpIiAvPgo8L3N2Zz4=);
      background: linear-gradient(to bottom, #4222be 0%, #a62cc1 73%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#4222be', endColorstr='#a62cc1', GradientType=0);
      -webkit-text-stroke: 0.01em #b28ffd;
      text-stroke: 0.01em #b28ffd;
      filter: progid:DXImageTransform.Microsoft.Glow(Color=#b28ffd, Strength=1);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
    `}
  >
    {/* Don't forget to render children! If you forget, typing in your component won't work */}
    {children}
  </span>
);

// If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/jarred-components-4/Purple.package.js
