// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in 📦 /Users/jarred/Code/codeblog/jarred-components-4/Tweet.package.js
import React from "react";
import { css } from "@emotion/core";
import ScriptJS from "scriptjs";

// This is the React component that is shown your pad.
// This example will render text in uppercase. SHOUTING ON THE INTERNET
class Tweet extends React.Component {
  shouldComponentUpdate(props, state) {
    return this.props.id !== props.id;
  }
  containerRef = React.createRef();

  componentDidMount() {
    this.mounted = true;

    if (window.twttr) {
      this.renderTweet();
    } else {
      ScriptJS(
        "https://platform.twitter.com/widgets.js",
        "tw",
        this.renderTweet
      );
    }
  }

  renderTweet = () => {
    if (!this.mounted) return;
    if (!window.twttr) {
      // tslint:disable-next-line
      console.error("Failed to load Twitter lib.");
      return;
    }

    if (this.containerRef.current) {
      window.twttr.widgets.createTweet(
        this.props.id,
        this.containerRef.current
      );
    }
  };

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return <span ref={this.containerRef} />;
  }
}

export default class TweetEmbed extends React.Component {
  render() {
    const tweetID = this.props.url.split("status/")[1];
    return (
      <>
        <Tweet key={tweetID} id={tweetID} />
        <span
          css={css`
            opacity: 0;
          `}
        >
          {this.props.children}>
        </span>
      </>
    );
  }
}

// If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/jarred-components-4/Tweet.package.js
