// A handful of common packages are included for you automatically.
// If you want to add dependencies, add it in "dependencies" in 📦 /Users/jarred/Code/codeblog/jarred-components-4/WebthingLogo.package.js
import React from "react";
import { css } from "@emotion/core";

// This is the React component that is shown your pad.
// This example will render text in uppercase. SHOUTING ON THE INTERNET
export default ({ children, color, ...otherProps }) => (
  // Since this is an inline component, it should be a `span` (or at least, `display: inline;`)
  <>
    <span
      css={css`
        display: inline-flex;
        align-items: center;
        span {
          margin-left: 10px;
        }
      `}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="4" fill="#924AFF" />
        <g clip-path="url(#prefix__clip0)" fill="#fff">
          <path d="M16.8 17.21h6.367c3.113 0 5.66-2.562 5.66-5.693 0-3.13-2.547-5.692-5.659-5.692h-6.367c-3.114 0-5.66 2.562-5.66 5.693s2.547 5.693 5.66 5.693zm.842-8.599h4.684c.766.003 1.5.31 2.043.854a2.92 2.92 0 0 1 .849 2.052c0 1.6-1.302 2.908-2.892 2.908h-4.684a2.895 2.895 0 0 1-2.042-.854 2.92 2.92 0 0 1-.848-2.052c0-.77.306-1.508.847-2.053a2.894 2.894 0 0 1 2.043-.855z" />
          <path d="M17.175 12.706a1.189 1.189 0 0 0 0-2.378c-.314 0-.616.125-.838.348a1.192 1.192 0 0 0 0 1.682c.222.223.524.348.838.348zm5.617 0c.314 0 .616-.125.838-.348a1.192 1.192 0 0 0 0-1.682 1.182 1.182 0 0 0-2.022.841c0 .316.125.618.347.841.222.223.523.348.837.348zm3.759 11.872H13.416v.871c.002.784.313 1.535.865 2.09.551.554 1.3.867 2.08.87h2.546v2.015a1.833 1.833 0 0 0-.753 1.48c0 .487.193.955.536 1.3.343.346.808.54 1.293.542a1.824 1.824 0 0 0 2.81-.92 1.843 1.843 0 0 0-.904-2.201 1.821 1.821 0 0 0-.829-.202V28.41h2.549a2.948 2.948 0 0 0 2.078-.87 2.973 2.973 0 0 0 .863-2.089v-.872zm0-6.42H13.416v5.55h13.135v-5.55zM12.552 26.251v-8.094a3.046 3.046 0 0 0-1.956.991 3.07 3.07 0 0 0-.79 2.053 3.066 3.066 0 0 0 1.266 2.475v2.526a1.84 1.84 0 0 0-1.14 1.702c0 .488.193.955.536 1.3.343.345.808.54 1.293.541a1.833 1.833 0 0 0 1.295-.54c.343-.346.537-.813.537-1.301a1.848 1.848 0 0 0-1.041-1.654v.001zm16.378-.05v-2.527a3.055 3.055 0 0 0 .473-4.524 3.048 3.048 0 0 0-1.956-.991v8.092a1.835 1.835 0 0 0-1.04 1.653c0 .488.193.956.537 1.3.343.346.809.54 1.294.541a1.83 1.83 0 0 0 1.295-.54 1.845 1.845 0 0 0-.603-3.003z" />
        </g>
        <defs>
          <clipPath id="prefix__clip0">
            <path
              fill="#fff"
              transform="translate(7.767 5.825)"
              d="M0 0h24.466v28.349H0z"
            />
          </clipPath>
        </defs>
      </svg>
      <span
        css={css`
          font-size: 1.6em;
          font-weight: bold;
          font-family: var(--system-font);
        `}
      >
        Webthing
      </span>
    </span>{" "}
    {children}
  </>
);

// If you want to...
// - Supply default props
// - 🔎 Change how your component appears in search
// - 🎨 Change the props you can edit from the editor (e.g. accept a URL or a color)
// Edit this file:
// 📦/Users/jarred/Code/codeblog/jarred-components-4/WebthingLogo.package.js
