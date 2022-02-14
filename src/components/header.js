import React from "react";
import styled from 'styled-components';


const Header = (props) => {
  return <StyledHeader {...props}>{props.children}</StyledHeader>;
};

export default Header;

const StyledHeader = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: black;
`;
