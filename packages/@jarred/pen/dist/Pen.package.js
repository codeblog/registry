"use strict";

// This file will eventually be compiled into a package.json by webthing cli
module.exports = {
  name: "@jarred/pen",
  version: "1.0.0",
  license: "MIT",
  webthing: {
    // These will appear when you search for a component
    title: "Pen",
    description: "TODO: Description",
    // This is optional but recommended. If the file doesn't exist, it will be ignored.
    screenshot: "./pen.png",
    // If you use CategoryType.text, the component will be used on existing text, e.g. Glitter or Highlight. This is an inline.
    // if you use CategoryType.header, the component will be used on a new block, e.g. the Fancy Header or Quote.
    category: "text",
    // Optional: This lets you visually edit the props of a component in the editor
    editableProps: {
      color: {
        type: "color",
        label: "Color",
        required: false,
        presets: ["blue", "#333", "green"]
      }
    },
    // This lets you set default props if you want
    defaultProps: {
      color: "darkblue"
    }
  },
  // To add a dependency from npm, run:
  // webthing add pen dependency-name
  //
  // For example:
  // webthing add pen lodash
  dependencies: {}
};