import React from "react";
import styled from "@emotion/styled";
import tinycolor from "tinycolor2";

export default ({ url }) => (
  <p>
    <a target="_blank" href={url}>
      <img src={url} />
    </a>
  </p>
);
