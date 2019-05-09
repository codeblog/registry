import React from "react";
import _Switch from "react-switch";
import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";

const Switch = _Switch.default;

const ThemeStyles = ({ theme }) => {
  if (theme === "dark") {
    return (
      <Global
        styles={css`
          :root {
            --page-background: rgb(34, 34, 34);
            --text-dark-color: rgb(240, 240, 240);
            --text-color: rgb(240, 240, 240);
          }
        `}
      />
    );
  } else {
    return null;
  }
};

const ThemeEditor = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0;

  label {
    display: flex;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
    font-family: var(--headings-font);
  }

  span {
    margin-left: 6px;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export default class DarkModeToggle extends React.Component {
  static defaultProps = {
    themes: ["dark", "light"],
    label: "Dark Mode"
  };

  state = {
    theme: "light"
  };

  handleChange = evt => {
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark"
    });
  };

  render() {
    const { children, ...otherProps } = this.props;

    return (
      <ThemeEditor className="ThemeEditor" {...otherProps}>
        <label
          onClick={this.handleChange}
          className="SystemFont"
          htmlFor="theme-switch"
        >
          <Switch
            onChange={this.handleChange}
            checked={this.state.theme === "dark"}
            id="theme-switch"
          />
          <span>{this.props.label}</span>
        </label>
        <ThemeStyles theme={this.state.theme} themes={["dark", "light"]} />
      </ThemeEditor>
    );
  }
}
