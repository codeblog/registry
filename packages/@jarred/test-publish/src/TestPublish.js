import React from "react";
import styled from "@emotion/styled";
import tinycolor from "tinycolor2";

const TestPublishComponent = styled.div`
  background-color: ${props => props.background};
  color: ${props =>
    tinycolor(props.background).isDark()
      ? "var(--color-white)"
      : "var(--color-black)"};
  padding-top: var(--offset-normal);
  padding-bottom: var(--offset-normal);

  font-family: var(--headings-font);
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  width: 100%;
  display: flex;
`;

export default React.forwardRef(
  ({ children, background, ...otherProps }, ref) => (
    <TestPublishComponent ref={ref} {...otherProps} background={background}>
      {children}
    </TestPublishComponent>
  )
);
