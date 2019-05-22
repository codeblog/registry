import * as React from "react";
import { css } from "@emotion/core";
import SyntaxHighlighter from "react-syntax-highlighter";

const Language = {
  css: "css",
  javascript: "javascript",
  js: "js",
  jsx: "jsx",
  markdown: "markdown",
  md: "md",
  mdx: "mdx",
  plain: "plain",
  py: "py",
  python: "python",
  rb: "ruby",
  ruby: "ruby",
  style: "style",
  stylesheet: "stylesheet",
  ts: "ts",
  typescript: "typescript"
};

const CodeBlockCSS = css`
  .hljs {
    direction: ltr;
    text-align: left;
    word-spacing: normal;
    word-break: normal;
    white-space: pre;
    overflow: auto;
    max-height: 500px;
    line-height: 1.2;

    tab-size: 2;
    padding: var(--offset-medium);
    background-color: var(--text-dark-color);
    color: var(--page-background);
    hyphens: none;
    border-radius: var(--border-radius);
    font-size: 16px;
    font-family: var(--monospace-font);

    -webkit-mask-image: radial-gradient(
      circle,
      var(--page-background) 100%,
      var(--text-dark-color) 100%
    );
    -moz-mask-image: radial-gradient(
      circle,
      var(--page-background) 100%,
      var(--text-dark-color) 100%
    );
  }

  @media (max-width: 500px) {
    .hls {
      max-height: 800px;
    }
  }

  .hljs::-webkit-scrollbar-track {
    background-color: #222;
  }

  .hljs::-webkit-scrollbar {
    height: 12px;
    width: 12px;

    opacity: 0.5;
  }

  .hljs::-webkit-scrollbar-thumb {
    background-color: var(--page-background);
    border: 3px solid #222;
    border-radius: 10px;
  }

  .hljs * {
    background: unset !important;
  }

  .hljs code:first-of-type {
    user-select: none;
    -webkit-user-select: none;
  }

  .hljs code + code {
    margin-left: var(--offset-medium);
    display: block;
  }

  .react-syntax-highlighter-line-number {
    color: #827d82;
  }

  /* ---- Syntax highlighting ---- */

  .hljs .tag,
  .hljs .string,
  .hljs .meta,
  .hljs .symbol,
  .hljs .template-tag,
  .hljs .template-variable,
  .hljs .addition {
    color: #769fff;
    font-weight: normal;
  }

  .hljs .punctuation,
  .hljs .comment,
  .hljs .quote {
    color: #827d82;
  }

  .hljs .number,
  .hljs .regexp,
  .hljs .literal,
  .hljs .link {
    color: #31a354;
  }

  .hljs .deletion,
  .hljs .variable {
    color: #7e9eff;
    font-weight: normal;
  }

  .hljs .keyword,
  .hljs .operator {
    color: #ff6c6c;
  }

  .hljs .function {
    color: #d46dff;
  }

  .hljs .title,
  .hljs .bold,
  .hljs .strong,
  .hljs .tag,
  .hljs .section {
    font-weight: 600;
  }

  .hljs .link,
  .hljs .url {
    color: var(--color-primary);
  }

  .hljs .emphasis {
    font-style: italic;
  }

  .hljs .attr {
    font-weight: normal;
  }

  .hljs .attribute {
    color: #e6550d;
  }
`;

const focusedCSSBlock = css``;
const unfocusedCSSBlock = css`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

// // @ts-ignore
// SyntaxHighlighter.registerLanguage(Language.jsx, jsx);
// // @ts-ignore
// SyntaxHighlighter.registerLanguage(Language.js, jsx);
// // @ts-ignore
// SyntaxHighlighter.registerLanguage(Language.javascript, jsx);
// // @ts-ignore
// SyntaxHighlighter.registerLanguage(Language.md, markdown);
// // @ts-ignore
// SyntaxHighlighter.registerLanguage(Language.markdown, markdown);
// // @ts-ignore
// SyntaxHighlighter.registerLanguage(Language.mdx, markdown);
// // @ts-ignore
// SyntaxHighlighter.registerLanguage(Language.ruby, ruby);
// // @ts-ignore
// SyntaxHighlighter.registerLanguage(Language.rb, ruby);
// // @ts-ignore
// SyntaxHighlighter.registerLanguage(Language.python, python);
// // @ts-ignore
// SyntaxHighlighter.registerLanguage(Language.py, python);
// // @ts-ignore
// SyntaxHighlighter.registerLanguage(Language.css, css);
// // @ts-ignore
// SyntaxHighlighter.registerLanguage(Language.stylesheet, css);
// // @ts-ignore
// SyntaxHighlighter.registerLanguage(Language.style, css);
// // @ts-ignore
// SyntaxHighlighter.registerLanguage(Language.ts, typescript);
// // @ts-ignore
// SyntaxHighlighter.registerLanguage(Language.typescript, typescript);

export class CodeBlock extends React.Component {
  render() {
    const {
      showLineNumbers,
      disableStyles,
      language,
      truncateLength,
      isInEditor,
      isSelected,
      isFocused,
      data,
      ...otherProps
    } = this.props;

    if (isInEditor) {
      return (
        <div css={CodeBlockCSS}>
          <pre className="hljs">
            <code />
            <code>{this.props.children}</code>
          </pre>
        </div>
      );
    } else {
      return (
        <div css={CodeBlockCSS}>
          <SyntaxHighlighter
            {...otherProps}
            showLineNumbers={showLineNumbers}
            wrapLines
            useInlineStyles={false}
            language={undefined}
          >
            {this.props.text || ""}
          </SyntaxHighlighter>
          <div
            style={{ opacity: 0, pointerEvents: "none", position: "absolute" }}
          >
            {this.props.children}
          </div>
        </div>
      );
    }
  }
}

export default CodeBlock;
