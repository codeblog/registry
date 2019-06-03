// This file will eventually be compiled into a package.json by webthing cli
module.exports = {
  name: "@jarred/chat-bubble",
  version: "1.0.0",
  license: "MIT",
  webthing: {
    // These will appear when you search for a component
    title: "Chat Bubble",
    description: "Why paragraph when you can chat?",
    // This is optional but recommended. If the file doesn't exist, it will be ignored.
    screenshot: "./chat-bubble.png",

    // If you use CategoryType.text, the component will be used on existing text, e.g. Glitter or Highlight. This is an inline.
    // if you use CategoryType.header, the component will be used on a new block, e.g. the Fancy Header or Quote.
    category: "block",

    // Optional: This lets you visually edit the props of a component in the editor
    editableProps: {
      background: {
        type: "color",
        label: "Fill color",
        required: true,
        presets: ["rgb(25, 25, 25)", "rgb(136,85,246)", "#E3C4F7"]
      }
    },

    // This lets you set default props if you want
    defaultProps: {
      background: "rgb(136,85,246)"
    }
  },

  // To add a dependency from npm, run:
  // webthing add chat-bubble dependency-name
  //
  // For example:
  // webthing add chat-bubble lodash
  dependencies: {}
};
