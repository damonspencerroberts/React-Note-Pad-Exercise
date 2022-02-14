import React from "react";

const Header = (props) => {
  return <StyledHeader>{props.children}</StyledHeader>;
};

export default Header;

const StyledHeader = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: black;
`;
