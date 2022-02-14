import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  padding: 16px 12px;
  width: 100%;
  background: #00ff5a;
  font-weight: 500;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  box-shadow: 0 4px 4px rgba(#000000, 0.5);
  cursor: pointer;
  opacity: 1;
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.4s;
  }
`;
