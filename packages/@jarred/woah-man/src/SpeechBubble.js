// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in /Users/jarred/Code/codeblog/jarred-components-3/WoahMan.package.js
import { css } from "@emotion/core";
import React from "react";
import tinycolor from "tinycolor2"; // This is a popular color library
// This is the React component that is shown your pad.
// Since this is a Block component, be sure to render children. If you don't, things will break.
export default ({ children, background, text, ...otherProps }) => (
  <div
    {...otherProps}
    key={background}
    // Webthing uses Emotion (https://emotion.sh) for CSS.
    // This makes it easy to have styles that apply per component instead of to the whole page
    css={css`
      --text-color: ${background};
      --background-color: ${tinycolor(background).isDark()
        ? "var(--color-white)"
        : "var(--color-black)"};
      font-family: "Comic Sans", "Comic Sans MS", "Chalkboard",
        "ChalkboardSE-Regular", sans-serif;

      background-color: var(--text-color);
      border: solid 2px var(--background-color);
      border-radius: 12px;
      display: inline-block;
      color: var(--background-color);
      padding: 0.2em 1em;
      position: relative;
      font-size: 24px;

      &:before {
        border: solid 12px transparent;
        border-left: solid 12px var(--background-color);
        border-bottom: solid 12px var(--background-color);
        top: -24px;
        content: "";
        height: 0;
        left: 32px;
        position: absolute;
        transform: skew(15deg);
        width: 0;
      }

      &:after {
        border: solid 10px transparent;
        border-left: solid 10px var(--text-color);
        border-bottom: solid 10px var(--text-color);
        top: -19px;
        content: "";
        height: 0;
        left: 35px;
        position: absolute;
        transform: skew(15deg);
        width: 0;
      }
    `}
  >
    {children}
    {/* Don't forget to render children! If you forget, typing in your component won't work */}
  </div>
);

// If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/jarred-components-3/WoahMan.package.js
