"use strict";

var _registry = require("/Users/jarred/Code/codeblog/codeblog//dist/registry");

// This file will eventually be compiled into a package.json by codeblog cli
module.exports = {
  name: "@jarred/social-image",
  version: "1.0.0",
  license: "MIT",
  codeblog: {
    // These will appear when you search for a component
    title: "External Image",
    description: "An image that links elsewhere",
    // This is optional but recommended. If the file doesn't exist, it will be ignored.
    screenshot: "./social-image.png",
    // If you use CategoryType.text, the component will be used on existing text, e.g. Glitter or Highlight. This is an inline.
    // if you use CategoryType.header, the component will be used on a new block, e.g. the Fancy Header or Quote.
    category: _registry.CategoryType.embed,
    // Optional: This lets you visually edit the props of a component in the editor
    editableProps: {
      url: _registry.EditableProps.url({
        label: "Image URL",
        required: true
      })
    },
    // This lets you set default props if you want
    defaultProps: {}
  },
  // To add a dependency from npm, run:
  // codeblog add social-image dependency-name
  //
  // For example:
  // codeblog add social-image lodash
  dependencies: {}
};