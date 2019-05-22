// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in /Users/jarred/Code/codeblog/some-components/Image.package.js
import React from "react";
import { css } from "@emotion/core";

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
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
      URL.revokeObjectURL(img.src);
    };
    img.onerror = reject;
  });
}

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

// This is the React component that is shown your pad.
// Since this is a Block component, be sure to render children. If you don't, things will break.
export default ({
  children,
  onSave,
  data: { width, height, file },
  isInEditor,
  ...otherProps
}) => {
  const handleChangeFile = React.useCallback(
    evt => {
      const file = event.target.files[0];
      const filesize = (file.size / 1024 / 1024).toFixed(4);
      if (filesize >= 10) {
        window.alert("Please choose a photo under 10 MB", {
          appearance: "error"
        });
        return;
      }

      window.requestIdleCallback(() => {
        Promise.all([getBase64File(file), getImageDimensions(file)]).then(
          ([img, { width, height }]) => {
            if (onSave) {
              onSave({ file: img, width, height });
            }
          }
        );
      });
    },
    [onSave]
  );

  if (isInEditor) {
    return (
      <div
        css={css`
          position: relative;
        `}
        className="Container"
      >
        {file && (
          <img
            // Codeblog uses Emotion (https://emotion.sh) for CSS.
            // This makes it easy to have styles that apply per component instead of to the whole page
            css={css`
              border-radius: 2px;
              width: auto;
              max-width: var(--blog-post-width);
              height: auto;
              object-fit: contain;
            `}
            src={file}
            width={width}
            height={height}
          />
        )}
        <input
          type="file"
          accept="image/*"
          css={file && width && height ? HiddenInputCSS : undefined}
          onChange={handleChangeFile}
        />
      </div>
    );
  } else {
    return (
      <img
        {...otherProps}
        width={width}
        height={height}
        // Codeblog uses Emotion (https://emotion.sh) for CSS.
        // This makes it easy to have styles that apply per component instead of to the whole page
        css={css`
          border-radius: 2px;
          width: ${width || "auto"};
          height: ${height || "auto"};
          max-width: 100%;
          object-fit: contain;
        `}
        src={file}
      />
    );
  }
};

// If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/some-components/Image.package.js
