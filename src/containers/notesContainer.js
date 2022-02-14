import React from "react";
import styled from "styled-components";

const NotesContainer = (props) => {
  return <StyledNotesContainer>{props.children}</StyledNotesContainer>;
};

export default NotesContainer;

const StyledNotesContainer = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
