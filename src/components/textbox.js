import React from "react";
import styled from "styled-components";

const TextBox = (props) => {
  return <StyledTextBox {...props} />;
};

export default TextBox;

const StyledTextBox = styled.textarea`
  width: 100%;
  border: 1px solid grey;
  box-shadow: 0px 4px 4px rgba(black, 0.5);
  background: transparent;
  color: black;
  font-size: 16px;
  padding: 12px;
  border-radius: 4px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  &::-webkit-input-placeholder {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
