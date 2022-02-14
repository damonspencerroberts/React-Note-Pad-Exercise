import React from "react";
import Note from "./note";
import styled from "styled-components";

const Notes = () => {
  return (
    <Note
      note={{ name: "Damon", date: "02-02-2022", note: "this is a note" }}
    />
  );
};

export default Notes;
