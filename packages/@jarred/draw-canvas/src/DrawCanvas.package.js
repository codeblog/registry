import { CategoryType, EditableProps } from "codeblog/dist/registry";

// This file will eventually be compiled into a package.json by codeblog cli
module.exports = {
  name: "@jarred/draw-canvas",
  version: "1.0.0",
  license: "MIT",
  codeblog: {
    // These will appear when you search for a component
    title: "Paint 🎨",
    description: "Draw something. Show it to people.",
    // This is optional but recommended. If the file doesn't exist, it will be ignored.
    screenshot: {
      "1x": "https://storage.googleapis.com/codeblog-public/DrawCanvas.png",
      "2x": "https://storage.googleapis.com/codeblog-public/DrawCanvas@2x.png",
      "3x": "https://storage.googleapis.com/codeblog-public/DrawCanvas@3x.png"
    },

    // If you use CategoryType.text, the component will be used on existing text, e.g. Glitter or Highlight. This is an inline.
    // if you use CategoryType.header, the component will be used on a new block, e.g. the Fancy Header or Quote.
    category: CategoryType.block,
    isVoid: true,

    // Optional: This lets you visually edit the props of a component in the editor
    editableProps: {
      brushColor: EditableProps.color({
        label: "Background",
        presets: ["red", "blue", "orange"]
      })
    },

    // This lets you set default props if you want
    defaultProps: {
      brushColor: "rgb(114, 84, 233)"
    }
  },

  // To add a dependency from npm, run:
  // codeblog add draw-canvas dependency-name
  //
  // For example:
  // codeblog add draw-canvas lodash
  dependencies: {
    "react-canvas-draw": "1.0.1-hotfix.4"
  }
};
