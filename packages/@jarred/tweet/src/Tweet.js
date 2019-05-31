// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in 📦 /Users/jarred/Code/codeblog/jarred-components-4/Tweet.package.js
import React from "react";
import { css } from "@emotion/core";
import ScriptJS from "scriptjs";

// This is the React component that is shown your pad.
// This example will render text in uppercase. SHOUTING ON THE INTERNET
class Tweet extends React.Component {
  constructor(props) {
    super(props);

    this.mounted = true;
  }

  shouldComponentUpdate(props) {
    return this.props.id !== props.id;
  }

  componentDidMount() {
    if (window.twttr) {
      this.renderTweet();
    } else {
      ScriptJS("https://platform.twitter.com/widgets.js", "tw", () =>
        this.renderTweet()
      );
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.renderTweet();
    }
  }

  renderTweet = () => {
    if (!this.mounted) return;
    if (!window.twttr) {
      // tslint:disable-next-line
      console.error("Failed to load Twitter lib.");
      return;
    }

    if (
      this.containerRef &&
      this.containerRef.childElementCount === 1 &&
      this.lastMountedID !== this.props.id
    ) {
      window.twttr.widgets.createTweet(this.props.id, this.containerRef);
      this.lastMountedID = this.props.id;
    }
  };

  setContainerRef = containerRef => {
    this.containerRef = containerRef;

    if (this.props.id && containerRef) {
      this.renderTweet();
    }
  };

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return <span key={this.props.id} ref={this.setContainerRef} />;
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
            height: 0;
            visibility: hidden;
            position: absolute;
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
