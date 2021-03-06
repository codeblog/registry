// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in 📦 /Users/jarred/Code/codeblog/jarred-components-4/Rainbow.package.js
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
      background: linear-gradient(
        to right,
        #b306a9,
        #ef2667,
        #f42e2c,
        #ffa509,
        #fdfc00,
        #55ac2f,
        #0b13fd,
        #a804af
      );
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
// 📦/Users/jarred/Code/codeblog/jarred-components-4/Rainbow.package.js
