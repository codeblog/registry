import Confetti from "react-dom-confetti";
import React from "react";
import _ from "lodash";
import { css } from "@emotion/core";

export default class ConfettiButton extends React.Component {
  confettiTimer = null;
  state = {
    showConfetti: false
  };

  _handleShowConfetti = () => {
    if (this.state.showConfetti) {
      return;
    }

    this.setState({ showConfetti: true }, () => {
      this.confettiTimer = window.setTimeout(() => {
        this.setState({ showConfetti: false });
      }, 10);
    });
  };

  handleShowConfetti = _.debounce(this._handleShowConfetti, 10);

  componentWillUnmount() {
    window.clearTimeout(this.confettiTimer);
  }

  render() {
    const {
      children,
      firstColor,
      secondColor,
      thirdColor,
      ...otherProps
    } = this.props;
    return (
      <div
        css={css`
          display: flex;
          margin-bottom: 1em;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--color-primary);
          color: var(--color-primary);
          background-color: var(--page-background);
          font-weight: 500;
          font-family: var(--headings-font);
          font-weight: 500;
          font-size: 14px;
          align-self: flex-start;
          max-width: 200px;
          border-radius: 4px;
          cursor: pointer;
          padding: 6px 8px;

          &:hover {
            opacity: 0.9;
          }
          &:active {
            opacity: 0.8;
          }
        `}
        onMouseUp={this.handleShowConfetti}
      >
        🎉 Confetti me
        <Confetti
          active={this.state.showConfetti}
          threshold={1}
          rootMargin="0 300px 0 0"
          config={{
            angle: 86,
            spread: 30,
            startVelocity: 17,
            elementCount: 30,
            decay: 0.96,
            colors: [firstColor, secondColor, thirdColor]
          }}
        />
      </div>
    );
  }
}
