import React from "react";
import styled from 'styled-components';


const MainContainer = (props) => {
  return <StyledMainContainer>{props.children}</StyledMainContainer>;
};

export default MainContainer;

const StyledMainContainer = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
