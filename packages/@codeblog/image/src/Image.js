// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in /Users/jarred/Code/codeblog/some-components/Image.package.js
import React from "react";
import { css } from "@emotion/core";
import { throttle } from "lodash";

function getBase64File(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

function getImageDimensions(file) {
  return new Promise((resolve, reject) => {
    var img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      resolve({
        width: img.naturalWidth / (window.devicePixelRatio || 1),
        height: img.naturalHeight / (window.devicePixelRatio || 1)
      });
      URL.revokeObjectURL(img.src);
    };
    img.onerror = reject;
  });
}

const ImageCSS = css`
margin-block-start: var(--offset-normal);
margin-block-end: var(--offset-normal);
max-width 100%;
height: auto;
text-decoration: none;
width: auto;
object-fit: contain;
max-height: 400px;
border-radius: 2px;
object-fit: contain;

@media (max-width: 670px) {
  max-width: 100vw;
  margin-left: calc(-1 * var(--offset-normal));
  margin-right: calc(-1 * var(--offset-normal));
}
`;

const HiddenInputCSS = css`
  width: 100%;
  height: 100%;
  display: block;
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

class EditableImage extends React.Component {
  handleChangeFile = evt => {
    const file = event.target.files[0];
    const filesize = (file.size / 1024 / 1024).toFixed(4);
    if (filesize >= 10) {
      window.alert("Please choose a photo under 10 MB", {
        appearance: "error"
      });
      return;
    }

    this.idleCallback = window.requestIdleCallback(() => {
      Promise.all([getBase64File(file), getImageDimensions(file)]).then(
        ([img, { width, height }]) => {
          if (this.props.onSave) {
            this.props.onSave({ file: img, width, height });
          }
        }
      );
    });
  };

  componentWillUnmount() {
    window.cancelAnimationFrame(this.idleCallback);
  }

  render() {
    const {
      children,
      onSave,
      data: { width, height, file },
      isInEditor,
      ...otherProps
    } = this.props;

    return (
      <div
        css={css`
          position: relative;
          height: auto;
          width: auto;
        `}
        className="Container"
      >
        {file && (
          <img
            // Codeblog uses Emotion (https://emotion.sh) for CSS.
            // This makes it easy to have styles that apply per component instead of to the whole page
            css={ImageCSS}
            src={file}
            width={width}
            height={height}
          />
        )}
        <input
          type="file"
          accept="image/*"
          css={file && width && height ? HiddenInputCSS : undefined}
          onChange={this.handleChangeFile}
        />
      </div>
    );
  }
}

export default props => {
  if (props.isInEditor) {
    return <EditableImage {...props} />;
  } else {
    const { file, width, height } = props.data;
    return (
      <img
        width={width}
        height={height}
        // Codeblog uses Emotion (https://emotion.sh) for CSS.
        // This makes it easy to have styles that apply per component instead of to the whole page
        css={imageCSS}
        src={file}
      />
    );
  }
};
