// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in /Users/jarred/Code/codeblog/codeblog-video/EmojiBackground.package.js
import React from "react";
import { css } from "@emotion/core";
import tinycolor from "tinycolor2"; // This is a popular color library

// This is the React component that is shown your pad.
// Since this is a Block component, be sure to render children. If you don't, things will break.
export default ({ children, background, ...otherProps }) => (
  <div
    {...otherProps}
    // Codeblog uses Emotion (https://emotion.sh) for CSS.
    // This makes it easy to have styles that apply per component instead of to the whole page
    css={css`
      box-sizing: content-box;

      &:after,
      &:before {
        display: block;
        position: absolute;
        z-index: -1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        content: "";
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      &:after {
        background-image: url(https://storage.googleapis.com/codeblog-public/emoji.png);
        background-position: center right;
        background-repeat: space;
        background-size: 200px 200px;
        opacity: 0.45;
        filter: hue-rotate(200deg);
        mix-blend-mode: difference;
      }

      &:before {
        background-color: ${background};
      }

      font-size: 48px;
      text-shadow: 1px 1px 0 #ccc;
      align-items: center;
      justify-content: center;

      @media (max-width: 670px) {
        & {
          margin-left: calc(-1 * var(--offset-normal));
          margin-right: calc(-1 * var(--offset-normal));
          padding-left: 0;
          padding-right: 0;
          width: 100vw;
        }
      }



      /* The text color should be readable on any background you choose */
      /* So we check if the background is dark and, when it is, we make the text color light */
      color: ${tinycolor(background).isDark()
        ? "var(--color-white)"
        : "var(--color-black)"};

      text-align: center;
      font-weight: 500;
      width: 100%;
      height: 300px;
      display: flex;
      flex-direction: column;
      position: relative;

      margin-top: calc(-1 * var(--offset-large));
      margin-left: calc((100vw - var(--blog-post-width)) / -2);
      margin-right: calc((100vw - var(--blog-post-width)) / -2);
      padding-left: calc((100vw - var(--blog-post-width)) / 2);
      padding-right: calc((100vw - var(--blog-post-width)) / 2);
      width: 100%;
      overflow-x: hidden;
      font-family: var(--headings-font);
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
// 📦/Users/jarred/Code/codeblog/codeblog-video/EmojiBackground.package.js
