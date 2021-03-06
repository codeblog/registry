// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in 📦 /Users/jarred/Code/codeblog/jarred-components-4/Reddit.package.js
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
      svg {
        width: 1em;
        height: 1em;
        display: inline-block;
      }

      vertical-align: middle;
    `}
  >
    <svg viewBox="0 0 78 78" fill="none">
      <path
        d="M39.15 78C60.606 78 78 60.606 78 39.15 78 17.694 60.606.3 39.15.3 17.694.3.3 17.694.3 39.15.3 60.606 17.694 78 39.15 78z"
        fill="#FF4500"
      />
      <path
        d="M65.06 39.15a5.683 5.683 0 0 0-5.881-5.466 5.693 5.693 0 0 0-3.718 1.574 27.62 27.62 0 0 0-14.959-4.78l2.52-12.12 8.315 1.748a3.884 3.884 0 0 0 4.278 3.448 3.884 3.884 0 0 0 3.448-4.278 3.884 3.884 0 0 0-4.278-3.448 3.845 3.845 0 0 0-2.936 1.903l-9.522-1.903a1.204 1.204 0 0 0-1.439.918v.02l-2.868 13.48a27.828 27.828 0 0 0-15.152 4.78 5.665 5.665 0 0 0-8.015.252 5.665 5.665 0 0 0 .251 8.015c.444.415.956.772 1.526 1.023-.039.57-.039 1.14 0 1.71 0 8.7 10.14 15.78 22.646 15.78 12.505 0 22.645-7.07 22.645-15.78.039-.57.039-1.14 0-1.71a5.67 5.67 0 0 0 3.139-5.166zm-38.85 3.892A3.899 3.899 0 0 1 30.1 39.15a3.899 3.899 0 0 1 3.892 3.892 3.899 3.899 0 0 1-3.892 3.892c-2.153-.02-3.891-1.748-3.891-3.892zm22.568 10.68a14.917 14.917 0 0 1-9.599 2.994 14.917 14.917 0 0 1-9.599-2.994 1.048 1.048 0 1 1 1.478-1.477 12.691 12.691 0 0 0 8.082 2.443 12.787 12.787 0 0 0 8.122-2.366 1.093 1.093 0 0 1 1.535.02c.416.424.406 1.12-.019 1.535v-.155zm-.695-6.653a3.899 3.899 0 0 1-3.892-3.892 3.899 3.899 0 0 1 3.892-3.892 3.899 3.899 0 0 1 3.892 3.892 3.885 3.885 0 0 1-3.728 4.037h-.193l.029-.145z"
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
// 📦/Users/jarred/Code/codeblog/jarred-components-4/Reddit.package.js
