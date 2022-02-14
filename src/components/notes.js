import React, { useContext } from "react";
import Note from "./note";
import styled from "styled-components";
import NoteContext from "../context/NoteContext";

const Notes = () => {
  const { notes } = useContext(NoteContext);
  const notesLength = notes.length;
  return (
    <>
      {notesLength > 0 ? (
        <>
          {notes.map((note, index) => {
            return <Note key={index} note={note} />;
          })}
        </>
      ) : (
        <StyledEmptyNotes>Current no notes</StyledEmptyNotes>
      )}
    </>
  );
};

export default Notes;

const StyledEmptyNotes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 400;
  color: red;
`;
