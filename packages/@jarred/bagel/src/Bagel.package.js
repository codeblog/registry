import { CategoryType, EditableProps } from "codeblog/dist/registry";

// This file will eventually be compiled into a package.json by codeblog cli
module.exports = {
  name: "@jarred/bagel",
  version: "1.0.0",
  license: "MIT",
  codeblog: {
    // These will appear when you search for a component
    title: "Bagel",
    description: "TODO: Description",
    // This is optional but recommended. If the file doesn't exist, it will be ignored.
    screenshot: "./bagel.png",

    // If you use CategoryType.text, the component will be used on existing text, e.g. Glitter or Highlight. This is an inline.
    // if you use CategoryType.header, the component will be used on a new block, e.g. the Fancy Header or Quote.
    category: CategoryType.header,

    // Optional: This lets you visually edit the props of a component in the editor
    editableProps: {
      background: EditableProps.color({
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
  // codeblog add bagel dependency-name
  //
  // For example:
  // codeblog add bagel lodash
  dependencies: {}
};
