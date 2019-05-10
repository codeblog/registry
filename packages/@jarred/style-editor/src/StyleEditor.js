import React from "react";
import classNames from "classnames";
import _ from "lodash";
import { isBrowser } from "react-device-detect";
import styled from "@emotion/styled";

const VSCODE_THEME = {
  light: "vs-dark",
  dark: "vs-light"
};

const StyleEditorContainer = styled.div`
  border-radius: 2px;
  font-family: var(--headings-font);
  display: flex;
  flex-direction: column;

  #FakeTextArea {
    display: block;
    width: 100%;
    flex: 1;
    height: 100px;
    font-size: 14px;
    font-family: var(--monospace-font);
    border-top: 0;
  }

  @media (min-width: 550px) {
    & {
      min-height: 233px;
    }

    &.StyleEditor--focused {
      border-color: rgb(var(--link-color));
      box-shadow: inset 0px 0px 5px rgba(var(--link-color), 0.25);
    }

    &.StyleEditor--focused {
      outline: none !important;
    }
  }
`;

const PresetDiv = styled.div`
  padding: 8px 8px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.7em;
  height: 36px;
  max-height: 100%;
  justify-content: center;
  align-items: center;

  display: flex;
  border-right: 1px solid rgba(var(--link-color), 0.75);
  cursor: pointer;

  &.Preset--light {
    background-color: rgb(39, 40, 34);
    border-right-color: rgb(39, 40, 34);
    color: white;
  }
`;

const PresetList = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(var(--link-color), 0.75);
  border-bottom: 1px solid rgba(var(--link-color), 0.75);

  &.Presets--light {
    border-top-color: #1e1e1e;
    border-bottom-color: #1e1e1e;
    background-color: rgb(39, 40, 34);
  }
`;

const PRESETS = {
  Normal: `
  body {
    filter: invert(0%); /* Try 100% */
  }
  `,
  [isBrowser ? "📫 gmail invite code" : "do not click"]: `
  body:before {
    content: url(https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif);
    opacity: 0.95;
  }

  body:before {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    will-change: left, top;
    right: 0;
    pointer-events: none;
    display: block;
    z-index: 2;
    animation: moveX 5s ease-out 0s infinite alternate, moveY 6.3s linear 0s infinite alternate, stop-it 0.5s linear 30s none;
    animation-fill-mode: forwards;
  }

  @keyframes moveX {
    from { left: 0; } to { left: calc(100% - 200px); }
  }
  @keyframes moveY {
    from { top: calc(100% - 150px); } to { top: 0; }
  }

  #__codeblog:after{position:fixed;bottom:30px;right:60px;pointer-events:none;display:block;width:auto;height:60px;color:#222;font-size:32px;font-weight:600;text-overflow:none;white-space:nowrap;text-shadow:1px 1px 5px #ccc;opacity:.75;content:"We're no strangers to love. You know the rules and so do I. A full commitment's what I'm thinking of. You wouldn't get this from any other guy. I just wanna tell you how I'm feeling. Gotta make you understand. Never gonna give you up. Never gonna let you down. Never gonna run around and desert you. Never gonna make you cry. Never gonna say goodbye. Never gonna tell a lie and hurt you.";animation:scroll-text 30s linear infinite alternate,stop-it .5s linear 30s none;animation-fill-mode:forwards;transform-origin:bottom right}

  @keyframes scroll-text {
    to {
      transform: translateX(0%);
    }

    from {
      transform: translateX(100%);
    }
  }

  @keyframes stop-it {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

`,
  "🦉O RLY?": `
  body:before {
    background-image: url(https://i.kym-cdn.com/entries/icons/original/000/000/015/oreally.jpg);
    background-size: 120px;
    background-repeat: round space;
    opacity: 0.15;
  }

  body:before {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`,
  [isBrowser ? "❗️SHOUTING!!" : "LOUD"]: `
  * { text-transform: uppercase; }
`,
  [isBrowser ? "→ Tilt this" : "Tilt"]: `
body {
  animation: rotate 1s ease-in-out;
  animation-direction: alternate;
  animation-iteration-count: 2;
}

@keyframes rotate {
  to { transform: rotate(0.15turn) }
}`
};

const Preset = ({ value, theme, isSelected, onClick }) => {
  return (
    <PresetDiv
      className={classNames("Preset SystemFont", {
        "Preset--selected": isSelected,
        "Preset--dark": theme === "dark",
        "Preset--light": theme === "light"
      })}
      onClick={onClick}
    >
      {value}
    </PresetDiv>
  );
};

const PresetPicker = ({ value, presets, theme, onChange }) => (
  <PresetList
    className={classNames("Presets", {
      "Presets--light": theme === "light",
      "Presets--dark": theme === "dark"
    })}
  >
    {presets.map(preset => (
      <Preset
        key={preset}
        theme={theme}
        isSelected={value === preset}
        value={preset}
        onClick={() => onChange(preset)}
      />
    ))}
  </PresetList>
);

const TextEditor = props => <textarea id="FakeTextArea" {...props} />;

export default class StyleEditor extends React.PureComponent {
  state = {
    stylesheet: PRESETS["Normal"],
    preset: "Normal",
    loadedStylesheet: "",
    isFocused: false
  };

  handleChange = ({ target: { value: stylesheet } }) => {
    this.setState({ stylesheet });

    this.updateLoadedStylesheet(stylesheet);
  };

  updateLoadedStylesheet = _.debounce(loadedStylesheet => {
    this.setState({ loadedStylesheet });
  }, 25);

  onEditorMount = () => {};
  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  handleChangePreset = preset => {
    this.updateLoadedStylesheet.cancel();

    this.setState({
      stylesheet: _.trim(PRESETS[preset]),
      loadedStylesheet: _.trim(PRESETS[preset]),
      preset
    });
  };

  render() {
    const { className, innerRef, theme = "light", ...otherProps } = this.props;
    const { stylesheet, loadedStylesheet, preset, isFocused } = this.state;

    return (
      <StyleEditorContainer
        ref={innerRef}
        {...otherProps}
        className={classNames(className, "StyleEditor SystemFont", {
          "Theme--dark": theme === "dark",
          "Theme--light": theme === "light",
          "StyleEditor--focused": isFocused
        })}
      >
        <PresetPicker
          presets={_.keys(PRESETS)}
          value={preset}
          theme={theme}
          onChange={this.handleChangePreset}
        />
        {isBrowser && (
          <TextEditor
            theme={VSCODE_THEME[theme]}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            key={preset}
            value={stylesheet}
            onChange={this.handleChange}
          />
        )}

        <style>{`
          ${loadedStylesheet}
        `}</style>
        {this.props.children}
      </StyleEditorContainer>
    );
  }
}
