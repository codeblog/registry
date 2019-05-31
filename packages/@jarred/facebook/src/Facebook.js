// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in 📦 /Users/jarred/Code/codeblog/jarred-components-4/Facebook.package.js
import React from "react";
import { css } from "@emotion/core";

// This is the React component that is shown your pad.
// This example will render text in uppercase. SHOUTING ON THE INTERNET
export default ({ children, ...otherProps }) => (
  // Since this is an inline component, it should be a `span` (or at least, `display: inline;`)
  <span
    {...otherProps}
    // Webthing uses Emotion (https://emotion.sh) for CSS.
    // This makes it easy to have styles that apply per component instead of to the whole page
    css={css`
      svg {
        width: 1em;
        height: 1em;
      }

      vertical-align: middle;s
    `}
  >
    <svg viewBox="0 0 266.893 266.895">
      <path
        d="M252.164 266.895c8.134 0 14.729-6.596 14.729-14.73V14.73c0-8.137-6.596-14.73-14.729-14.73H14.73C6.593 0 0 6.594 0 14.73v237.434c0 8.135 6.593 14.73 14.73 14.73h237.434z"
        fill="#485a96"
      />
      <path
        d="M184.152 266.895V163.539h34.692l5.194-40.28h-39.887V97.542c0-11.662 3.238-19.609 19.962-19.609l21.329-.01V41.897c-3.689-.49-16.351-1.587-31.08-1.587-30.753 0-51.807 18.771-51.807 53.244v29.705h-34.781v40.28h34.781v103.355h41.597z"
        fill="#fff"
      />
    </svg>{" "}
    {/* Don't forget to render children! If you forget, typing in your component won't work */}
    {children}
  </span>
);

// If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/jarred-components-4/Facebook.package.js
