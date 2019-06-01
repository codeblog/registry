"use strict";

// This file will eventually be compiled into a package.json by webthing cli
module.exports = {
  name: "@jarred/video-heading",
  version: "1.0.0",
  license: "MIT",
  webthing: {
    // These will appear when you search for a component
    title: "VCR Video Header",
    description: "",
    // This is optional but recommended. If the file doesn't exist, it will be ignored.
    screenshot: "./video-heading.png",
    // If you use CategoryType.text, the component will be used on existing text, e.g. Glitter or Highlight. This is an inline.
    // if you use CategoryType.header, the component will be used on a new block, e.g. the Fancy Header or Quote.
    category: "header",
    // Optional: This lets you visually edit the props of a component in the editor
    editableProps: {
      url: {
        type: "url",
        label: "Video URL",
        required: true
      },
      fill: {
        type: "color",
        label: "Fill color",
        required: true,
        presets: ["rgb(147, 74, 255)", "purple", "darkgreen"]
      }
    },
    // This lets you set default props if you want
    defaultProps: {
      fill: "rgb(147, 74, 255)"
    }
  },
  // To add a dependency from npm, run:
  // webthing add video-heading dependency-name
  //
  // For example:
  // webthing add video-heading lodash
  dependencies: {}
};