"use strict";

// This file will eventually be compiled into a package.json by webthing cli
module.exports = {
  name: "@jarred/codeblogsby",
  version: "1.0.0",
  license: "MIT",
  webthing: {
    // These will appear when you search for a component
    title: "Codeblogsby",
    description: "TODO: Description",
    // This is optional but recommended. If the file doesn't exist, it will be ignored.
    screenshot: "./codeblogsby.png",
    // If you use CategoryType.text, the component will be used on existing text, e.g. Glitter or Highlight. This is an inline.
    // if you use CategoryType.header, the component will be used on a new block, e.g. the Fancy Header or Quote.
    category: "embed",
    // Optional: This lets you visually edit the props of a component in the editor
    editableProps: {},
    // This lets you set default props if you want
    defaultProps: {}
  },
  // To add a dependency from npm, run:
  // webthing add codeblogsby dependency-name
  //
  // For example:
  // webthing add codeblogsby lodash
  dependencies: {
    "@webthing/registry": "latest"
  }
};