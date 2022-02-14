import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Form from "./components/form";
import Header from "./components/header";
import Notes from "./components/notes";
import MainContainer from "./containers/mainContainer";
import NotesContainer from "./containers/notesContainer";
import NoteContext from "./context/NoteContext";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState([]);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      <div
        style={{
          padding: 10,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <MainContainer>
          <Header>Note Pad React Challenge</Header>
          {showForm ? (
            <Form handleExitClick={() => setShowForm(false)} />
          ) : (
            <Button
              style={{ background: "#6EE5F5", width: 300 }}
              onClick={() => setShowForm(true)}
            >
              Add a note
            </Button>
          )}
        </MainContainer>
        <NotesContainer>
          <Notes />
        </NotesContainer>
      </div>
    </NoteContext.Provider>
  );
}

export default App;
