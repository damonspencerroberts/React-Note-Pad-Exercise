import React, { useContext, useEffect, useState } from "react";
import Note from "./note";
import styled from "styled-components";
import NoteContext from "../context/NoteContext";

const Notes = () => {
  const { notes, sortNotes } = useContext(NoteContext);
  const [sortedNotes, setSortedNotes] = useState(notes);
  const notesLength = notes.length;
  console.log(notes);
  useEffect(() => {
    if (sortNotes) {
      const dupSortedNotes = [...notes];
      const sortedDupSortedNotes = dupSortedNotes.sort(
        (note1, note2) => new Date(note2.date) - new Date(note1.date)
      );
      setSortedNotes(sortedDupSortedNotes);
    } else {
      setSortedNotes(notes);
    }
  }, [sortNotes, notes]);

  return (
    <>
      {notesLength > 0 ? (
        <>
          {sortedNotes.map((note, index) => {
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
