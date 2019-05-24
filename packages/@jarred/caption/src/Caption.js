// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in /Users/jarred/Code/codeblog/some-components/Caption.package.js
import React from "react";
import { css } from "@emotion/core";
import tinycolor from "tinycolor2"; // This is a popular color library

const ArrowIcon = props => (
  <svg viewBox="0 0 30.669 85" {...props}>
    <path d="M19.913.174L1.847 6.823a2.82 2.82 0 0 0 1.948 5.293v-.001l12.048-4.433C7.351 21.933 4.267 34.568 4.271 45.263c-.002 12.568 4.231 22.343 8.453 28.924 4.227 6.592 8.438 10.044 8.598 10.179a2.823 2.823 0 0 0 3.968-.401 2.81 2.81 0 0 0 .635-1.782c0-.817-.354-1.629-1.037-2.186h-.001l-.014-.013c-.311-.258-4.097-3.509-7.756-9.4-3.662-5.9-7.205-14.389-7.206-25.32.003-9.633 2.743-21.244 10.844-34.808l4.455 11.806a2.821 2.821 0 0 0 5.459-.997c0-.33-.06-.667-.183-.995L23.523 1.825a2.817 2.817 0 0 0-3.61-1.651z" />
  </svg>
);

// This is the React component that is shown your pad.
// Since this is a Block component, be sure to render children. If you don't, things will break.
export default ({ children, ...otherProps }) => (
  <div
    {...otherProps}
    // Codeblog uses Emotion (https://emotion.sh) for CSS.
    // This makes it easy to have styles that apply per component instead of to the whole page
    css={css`
      @import url("https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap");

      font-weight: normal;
      width: 100%;

      display: block;

      margin-block-start: 0;
      margin-block-end: 0;
      margin-top: calc(-2 * var(--offset-normal));
      font-family: "Permanent Marker";
      font-size: 0.8em;
      opacity: 0.7;
      padding-left: 32px;
      padding-right: 32px;
      svg {
        position: absolute;
        left: 0;

        transform: translateX(10px) translateY(-25%) skewY(-14deg);
      }
    `}
  >
    <ArrowIcon height="1.5em" />
    {/* Don't forget to render children! If you forget, typing in your component won't work */}
    {children}
  </div>
);

// If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/some-components/Caption.package.js
