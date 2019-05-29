"use strict";

var _registry = require("@webthing/registry");

// This file will eventually be compiled into a package.json by webthing cli
module.exports = {
  name: "@jarred/hi-hello",
  version: "1.0.0",
  license: "MIT",
  webthing: {
    // These will appear when you search for a component
    title: "Hi Hello",
    description: "TODO: Description",
    // This is optional but recommended. If the file doesn't exist, it will be ignored.
    screenshot: "./hi-hello.png",
    // If you use CategoryType.text, the component will be used on existing text, e.g. Glitter or Highlight. This is an inline.
    // if you use CategoryType.header, the component will be used on a new block, e.g. the Fancy Header or Quote.
    category: _registry.CategoryType.header,
    // Optional: This lets you visually edit the props of a component in the editor
    editableProps: {
      background: _registry.EditableProps.color({
        label: "Background",
        presets: ["#333", "pink", "blue"]
      })
    },
    // This lets you set default props if you want
    defaultProps: {
      background: "#333"
    }
  },
  // To add a dependency from npm, run:
  // webthing add hi-hello dependency-name
  //
  // For example:
  // webthing add hi-hello lodash
  dependencies: {}
};