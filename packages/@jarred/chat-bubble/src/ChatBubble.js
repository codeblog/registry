// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in /Users/jarred/Code/codeblog/jarred-components-word/ChatBubble.package.js
import React from "react";
import { css } from "@emotion/core";
import { WebthingContext } from "@webthing/core";
import tinycolor from "tinycolor2"; // This is a popular color library

// This is the React component that is shown your pad.
// Since this is a Block component, be sure to render children. If you don't, things will break.
export default ({ children, background, ...otherProps }) => {
  const { post } = React.useContext(WebthingContext);
  return (
    <div
      // Webthing uses Emotion (https://emotion.sh) for CSS.
      // This makes it easy to have styles that apply per component instead of to the whole page
      css={css`
        display: flex;
        position: relative;
      `}
    >
      {post.blog.photo_url && (
        <img
          src={post.blog.photo_url}
          width={24}
          height={24}
          key={post.blog.photo_url}
          style={{
            borderRadius: "50%",
            marginTop: "auto",
            marginRight: "var(--offset-small, 4px)",
            zIndex: 2
          }}
          contentEditable={false}
        />
      )}
      <p
        css={css`
          margin-block-start: 0em;
          margin-block-end: 0em;
          word-wrap: break-word;
          line-height: 24px;
          position: relative;
          padding: 10px 20px;
          border-radius: 16px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
          font-size: 0.9em;

          &:before,
          &:after {
            content: "";
            position: absolute;
            bottom: 0px;
            height: 20px;
          }

          @media (min-width: 670px) {
            max-width: 400px;
          }

          color: ${tinycolor(background).isDark()
            ? "var(--color-white, #eee)"
            : "var(--color-black, #111)"};
          background: ${background};
          align-self: flex-end;
        `}
        className="ChatBubble"
      >
        {/* Don't forget to render children! If you forget, typing in your component won't work */}
        {children}
      </p>
    </div>
  );
};

// If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/jarred-components-word/ChatBubble.package.js
