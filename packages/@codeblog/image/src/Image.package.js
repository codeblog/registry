import { CategoryType, EditableProps } from "codeblog/dist/registry";

// This file will eventually be compiled into a package.json by codeblog cli
module.exports = {
  name: "@codeblog/image",
  version: "1.0.0",
  license: "MIT",
  codeblog: {
    // These will appear when you search for a component
    title: "Photo",
    description: "An image. One of those picture things.",
    // This is optional but recommended. If the file doesn't exist, it will be ignored.
    screenshot: "./image.png",

    // If you use CategoryType.text, the component will be used on existing text, e.g. Glitter or Highlight. This is an inline.
    // if you use CategoryType.header, the component will be used on a new block, e.g. the Fancy Header or Quote.
    category: CategoryType.block,
    isVoid: true,

    // Optional: This lets you visually edit the props of a component in the editor
    editableProps: {},

    // This lets you set default props if you want
    defaultProps: {
      data: {
        file: null,
        width: null,
        height: null
      }
    }
  },

  // To add a dependency from npm, run:
  // codeblog add image dependency-name
  //
  // For example:
  // codeblog add image lodash
  dependencies: {}
};
