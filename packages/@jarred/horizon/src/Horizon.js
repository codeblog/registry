// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in 📦 /Users/jarred/Code/codeblog/jarred-components-4/Horizon.package.js
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
      font-family: Arial, sans-serif;
      font-weight: bold;
      background: #7286a7;
      background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJod…EiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
      background: linear-gradient(
        to bottom,
        #7286a7 0%,
        #7286a7 13%,
        var(--text-color) 50%,
        #812f30 56%,
        var(--text-color) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#7286a7', endColorstr='#ffffff', GradientType=0);
      background-clip: text;
      text-fill-color: transparent;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
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
// 📦/Users/jarred/Code/codeblog/jarred-components-4/Horizon.package.js
