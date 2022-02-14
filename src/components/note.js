import React from "react";
import styled from "styled-components";

const Note = (props) => {
  const { name, date, note } = props.note;
  return (
    <StyledNote>
      <Header>
        <Name>{name}</Name>
        <Date>{date}</Date>
      </Header>
      <Content>{note}</Content>
    </StyledNote>
  );
};

export default Note;

const StyledNote = styled.div`
  padding: 5px;
  background: #fffe57;
  box-shadow: 0px 4px 4px black;
  min-width: calc(100% / 3);
  margin: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 300;
  color: black;
  padding-top: 10px;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: black;
`;

const Date = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: grey;
`;
