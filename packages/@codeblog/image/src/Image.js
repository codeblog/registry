// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in /Users/jarred/Code/codeblog/some-components/Image.package.js
import React from "react";
import { css } from "@emotion/core";
import { throttle } from "lodash";

const calculateDimensions = ({
  photo,
  maxWidth,
  maxHeight,
  totalPhotoCount = 1,
  defaultSpacing
}) => {
  const MAX_COLUMN_COUNT = Math.min(totalPhotoCount, 3);
  const spacing = totalPhotoCount > 1 ? defaultSpacing : 0;
  let width,
    height = 0;
  if (photo.width > photo.height) {
    const MAX_SIZE = maxWidth / MAX_COLUMN_COUNT - spacing * MAX_COLUMN_COUNT;
    width = Math.min(photo.width, MAX_SIZE) - spacing;
    height = photo.height * (width / photo.width);
  } else if (photo.height > photo.width) {
    const MAX_SIZE = maxHeight / MAX_COLUMN_COUNT - spacing * MAX_COLUMN_COUNT;
    height = Math.min(photo.height, MAX_SIZE);
    width = photo.width * (height / photo.height);
  } else {
    const MAX_SIZE = maxHeight / MAX_COLUMN_COUNT - spacing * MAX_COLUMN_COUNT;
    width = Math.min(photo.width, MAX_SIZE) - spacing;
    height = Math.min(photo.height, MAX_SIZE) - spacing;
  }

  return { width, height, spacing };
};

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
const EditableImage = ({
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

  const [dimensions, setDimensions] = React.useState({ width: width, height });
  const getDimensions = () => {
    let maxWidth;
    const docWidth = document.body.clientWidth;

    if (docWidth < 700) {
      maxWidth = docWidth;
    } else {
      maxWidth = 670;
    }

    setDimensions(
      calculateDimensions({
        photo: { width, height },
        totalPhotoCount: 1,
        maxHeight: 400,
        maxWidth: maxWidth
      })
    );
  };

  React.useEffect(() => {
    let frame;
    const handleResize = throttle(() => {
      console.log("RESIZE");
      frame = window.requestAnimationFrame(getDimensions);
    }, 50);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  React.useLayoutEffect(() => {
    getDimensions();
  }, [file, width, height, setDimensions]);

  return (
    <div
      css={css`
        position: relative;
        margin-block-start: var(--offset-normal);
        margin-block-end: var(--offset-normal);
        width: ${file ? dimensions.width + "px" : "auto"};
        height: ${file ? dimensions.height + "px" : "auto"};

        @media (max-width: 670px) {
          max-width: 100vw;
          margin-left: calc(-1 * var(--offset-normal));
          margin-right: calc(-1 * var(--offset-normal));
        }

        max-width: 100%;
      `}
      className="Container"
    >
      {file && (
        <img
          // Codeblog uses Emotion (https://emotion.sh) for CSS.
          // This makes it easy to have styles that apply per component instead of to the whole page
          css={css`
            border-radius: 2px;
            max-width: 100%;
            width: ${file ? dimensions.width + "px" : "auto"};
            height: ${file ? dimensions.height + "px" : "auto"};

            @media (max-width: 670px) {
              max-width: 100vw;
              width: 100%;
            }
          `}
          src={file}
          width={dimensions.width}
          height={dimensions.height}
        />
      )}
      <input
        type="file"
        accept="image/*"
        css={file && width && height ? HiddenInputCSS : undefined}
        onChange={handleChangeFile}
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  );
};

export default props => {
  if (props.isInEditor) {
    return <EditableImage {...props} />;
  } else {
    const { file, width, height } = props.data;
    return (
      <a target="_blank" href={file}>
        <img
          width={width}
          height={height}
          // Codeblog uses Emotion (https://emotion.sh) for CSS.
          // This makes it easy to have styles that apply per component instead of to the whole page
          css={css`
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
        `}
          src={file}
        />
      </a>
    );
  }
};
