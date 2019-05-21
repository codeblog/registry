"use strict";

var _registry = require("/Users/jarred/code/codeblog/codeblog/dist/registry");

// This file will eventually be compiled into a package.json by codeblog cli
module.exports = {
  name: "@jarred/code-block",
  version: "1.0.0",
  license: "MIT",
  codeblog: {
    // These will appear when you search for a component
    title: "Code Block",
    description: "TODO: Description",
    // This is optional but recommended. If the file doesn't exist, it will be ignored.
    screenshot: "./code-block.png",
    // If you use CategoryType.text, the component will be used on existing text, e.g. Glitter or Highlight. This is an inline.
    // if you use CategoryType.header, the component will be used on a new block, e.g. the Fancy Header or Quote.
    category: _registry.CategoryType.header,
    // Optional: This lets you visually edit the props of a component in the editor
    editableProps: {},
    multiLine: true,
    isVoid: false,
    // This lets you set default props if you want
    defaultProps: {
      showLineNumbers: true,
      disableStyles: false,
      language: "plain",
      truncateLength: 20
    }
  },
  // To add a dependency from npm, run:
  // codeblog add code-block dependency-name
  //
  // For example:
  // codeblog add code-block lodash
  dependencies: {
    "react-syntax-highlighter": "10.2.1"
  }
};