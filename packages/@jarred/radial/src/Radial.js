// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in 📦 /Users/jarred/Code/codeblog/jarred-components-4/Radial.package.js
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
      background: -o-radial-gradient(center, ellipse, #fffa28 0%, #ec8a39 100%);
      background: radial-gradient(ellipse at center, #fffa28 0%, #ec8a39 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fffa28', endColorstr='#ec8a39', GradientType=1);
      font-family: Impact, Haettenschweiler, Franklin Gothic Bold, Charcoal,
        Helvetica Inserat, Bitstream Vera Sans Bold, Arial Black, sans-serif;
      font-weight: bold;
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
// 📦/Users/jarred/Code/codeblog/jarred-components-4/Radial.package.js
