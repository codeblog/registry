"use strict";

// This file will eventually be compiled into a package.json by webthing cli
module.exports = {
  name: "@jarred/big-words",
  version: "1.0.0",
  license: "MIT",
  webthing: {
    // These will appear when you search for a component
    title: "Big Words",
    description: "When regular words won't do.",
    // This is optional but recommended. If the file doesn't exist, it will be ignored.
    screenshot: "./big-emoji.png",
    // If you use CategoryType.text, the component will be used on existing text, e.g. Glitter or Highlight. This is an inline.
    // if you use CategoryType.header, the component will be used on a new block, e.g. the Fancy Header or Quote.
    category: "header",
    // Optional: This lets you visually edit the props of a component in the editor
    editableProps: {},
    // This lets you set default props if you want
    defaultProps: {}
  },
  // To add a dependency from npm, run:
  // webthing add big-emoji dependency-name
  //
  // For example:
  // webthing add big-emoji lodash
  dependencies: {
    "@webthing/registry": "latest"
  }
};