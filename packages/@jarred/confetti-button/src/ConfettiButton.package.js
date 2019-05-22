import { CategoryType, EditableProps } from "codeblog/dist/registry";

// This file will eventually be compiled into a package.json by codeblog cli
module.exports = {
  name: "@jarred/confetti-button",
  version: "1.0.0",
  license: "MIT",
  codeblog: {
    // These will appear when you search for a component
    title: "Confetti Button",
    description: "Press for Confetti.",
    // This is optional but recommended. If the file doesn't exist, it will be ignored.
    screenshot: "./confetti-button.png",

    // If you use CategoryType.text, the component will be used on existing text, e.g. Glitter or Highlight. This is an inline.
    // if you use CategoryType.header, the component will be used on a new block, e.g. the Fancy Header or Quote.
    category: CategoryType.block,

    // Optional: This lets you visually edit the props of a component in the editor
    editableProps: {
      firstColor: EditableProps.color({
        label: "Color #1",
        presets: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
      }),
      secondColor: EditableProps.color({
        label: "Color #2",
        presets: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
      }),
      thirdColor: EditableProps.color({
        label: "Color #3",
        presets: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
      })
    },

    // This lets you set default props if you want
    defaultProps: {
      firstColor: "#a864fd",
      secondColor: "#29cdff",
      thirdColor: "#78ff44"
    }
  },

  // To add a dependency from npm, run:
  // codeblog add confetti-button dependency-name
  //
  // For example:
  // codeblog add confetti-button lodash
  dependencies: {
    "react-dom-confetti": "0.1.1"
  }
};
