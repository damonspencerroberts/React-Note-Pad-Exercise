import React, { useContext } from "react";
import styled from "styled-components";
import NoteContext from "../context/NoteContext";
import Button from "./button";

const Note = (props) => {
  const { notes, setNotes } = useContext(NoteContext);
  const { name, date, note, id } = props.note;

  const handleDeleteNote = (event, id) => {
    event.preventDefault();
    const noteIndex = notes.findIndex((note) => note.id === id);
    const dupNotes = [...notes];
    dupNotes.splice(noteIndex, 1);
    setNotes(dupNotes);
  };  

  return (
    <StyledNote id={id}>
      <Header>
        <Name>{name}</Name>
        <Date>{date}</Date>
      </Header>
      <Content>{note}</Content>
      <Footer>
        <Button
          style={{
            background: "purple",
            width: 50,
            height: 10,
            color: "white",
            margin: 2,
          }}
        >
          Edit
        </Button>
        <Button
          style={{ background: "red", width: 50, height: 10, margin: 2 }}
          onClick={(e) => handleDeleteNote(e, id)}
        >
          Delete
        </Button>
      </Footer>
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
  padding: 20px 10px 20px 0;
`;

const Footer = styled.div`
  border-top: 1px solid grey;
  padding: 5px;
  display: flex;
  align-items: center;
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
