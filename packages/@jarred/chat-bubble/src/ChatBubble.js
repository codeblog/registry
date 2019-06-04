// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in /Users/jarred/Code/codeblog/jarred-components-word/ChatBubble.package.js
import styled from "@emotion/styled";
import { Webthing } from "@webthing/core";
import classNames from "classnames";
import React from "react";
import tinycolor from "tinycolor2"; // This is a popular color library

const ChatBubble = styled.div`
  display: flex;
  position: relative;
  margin-block-end: 2px;
  p {
    border-top-right-radius: 24px;
    border-top-left-radius: 8px;

    border-bottom-right-radius: 24px;
    border-bottom-left-radius: 8px;
  }

  &.ChatBubble img {
    visibility: hidden;
  }

  &.ChatBubble--last img {
    visibility: visible;
  }

  &.ChatBubble--first p {
    border-top-left-radius: 24px;
  }

  &.ChatBubble--last p {
    border-bottom-left-radius: 24px;
  }

  &.ChatBubble--last p {
  }

  &.ChatBubble--last {
    margin-block-end: var(--offset-normal);
  }
`;

const Paragraph = styled.p`
  margin-block-start: 0em;
  margin-block-end: 0em;
  word-wrap: break-word;
  line-height: 24px;
  position: relative;
  padding: 10px 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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

  @media (max-width: 670px) {
    max-width: 300px;
  }

  @media (max-width: 400px) {
    max-width: auto;
    padding: 10px;
  }

  align-self: flex-end;
`;

const Photo = styled.img`
  border-radius: 50%;
  margin-top: auto;
  margin-right: var(--offset-small, 4px);
  z-index: 2;

  @media (min-width: 670px) {
    margin-left: -24px;
  }
`;

const isChatBubbleNode = node => {
  return !!(node && node.dataset["componentId"] === "@jarred/chat-bubble");
};

const ChatBubbleNode = React.memo(
  ({ isFirst, isLast, face, background, children }) => (
    <ChatBubble
      className={classNames("ChatBubble", {
        "ChatBubble--first": isFirst,
        "ChatBubble--last": isLast
      })}
      // Webthing uses Emotion (https://emotion.sh) for CSS.
      // This makes it easy to have styles that apply per component instead of to the whole page
    >
      {face && (
        <Photo
          src={face}
          width={24}
          height={24}
          key={face}
          contentEditable={false}
        />
      )}
      <Paragraph
        style={{
          color: tinycolor(background).isDark()
            ? "var(--color-white, #eee)"
            : "var(--color-black, #111)",
          background
        }}
      >
        {/* Don't forget to render children! If you forget, typing in your component won't work */}
        {children}
      </Paragraph>
    </ChatBubble>
  )
);

// This is the React component that is shown your pad.
// Since this is a Block component, be sure to render children. If you don't, things will break.
export default ({
  children,
  background,
  isSelected,
  isFocused,
  groupOffset = 0,
  face,
  isFirst = true,
  isLast = true,
  isInEditor,
  ...otherProps
}) => {
  return (
    <Webthing>
      {({ post } = { post }) => {
        let _face = face;

        if (!_face && post && post.blog && post.blog.photo_url) {
          _face = post.blog.photo_url;
        }

        return (
          <ChatBubbleNode
            isFirst={isFirst}
            isLast={isLast}
            face={_face}
            background={background}
          >
            {children}
          </ChatBubbleNode>
        );
      }}
    </Webthing>
  );
};

// If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/jarred-components-word/ChatBubble.package.js
