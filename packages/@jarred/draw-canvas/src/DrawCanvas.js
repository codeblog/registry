// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in /Users/jarred/Code/codeblog/some-components/DrawCanvas.package.js
import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import tinycolor from "tinycolor2"; // This is a popular color library
import DrawCanvas from "react-canvas-draw";

const DRAW_CANVAS_DEFAULTS = {
  loadTimeOffset: 5,
  lazyRadius: 30,
  brushRadius: 4,
  brushColor: "#444",
  catenaryColor: "#0a0302",
  hideGrid: true,
  canvasWidth: 550,
  canvasHeight: 200,
  disabled: false,
  imgSrc: "",
  saveData: null,
  immediateLoading: false
};

const Container = styled.div`
  position: relative;
  height: ${props => props.height || 200}px;
  width: ${props => (props.width ? props.width + "px" : "100%")};
`;

const GridLines = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: block;
  content: "";
  pointer-events: none;
  background-size: 40px 40px;
  background-image: linear-gradient(
      to right,
      rgba(150, 150, 150, 0.1) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(150, 150, 150, 0.1) 1px, transparent 1px);
`;

// This is the React component that is shown your pad.
// Since this is a Block component, be sure to render children. If you don't, things will break.
export default class DrawSomething extends React.Component {
  saveData = () => {
    console.log("CALL");
    const saveData = this.canvasRef.getSaveData();
    if (this.props.data.saveData !== saveData) {
      this.props.onSave({
        saveData
      });
    }
  };

  setCanvasRef = canvasRef => (this.canvasRef = canvasRef);

  render() {
    const {
      isInEditor,
      onSave,
      data: { saveData = undefined },
      brushColor,
      isFocused,
      isSelected
    } = this.props;

    let width = 650;
    if (document.body.clientWidth < 600) {
      width = document.body.clientWidth - 2;
    }

    if (isInEditor) {
      return (
        <Container
          onMouseOut={this.saveData}
          width={width}
          ref={this.containerRef}
        >
          <DrawCanvas
            {...DRAW_CANVAS_DEFAULTS}
            ref={this.setCanvasRef}
            saveData={saveData}
            canvasWidth={width}
            brushColor={brushColor}
            immediateLoading
          />
          <GridLines />
          {this.props.children}
        </Container>
      );
    } else {
      return (
        <Container width={width}>
          <DrawCanvas
            {...DRAW_CANVAS_DEFAULTS}
            ref={this.setCanvasRef}
            disabled={false}
            saveData={saveData}
            canvasWidth={width}
            brushColor={brushColor}
          />
          <GridLines />
          {this.props.children}
        </Container>
      );
    }
  }
}
// If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/some-components/DrawCanvas.package.js
