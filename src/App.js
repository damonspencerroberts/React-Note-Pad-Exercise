import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Form from "./components/form";
import Header from "./components/header";
import MainContainer from "./containers/mainContainer";
import NoteContext from "./context/NoteContext";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState([]);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      <MainContainer>
        <Header>Chillipharm Note Pad</Header>
        {showForm ? (
          <Form handleExitClick={() => setShowForm(false)} />
        ) : (
          <Button
            style={{ background: "#6EE5F5" }}
            onClick={() => setShowForm(true)}
          >
            Add a note
          </Button>
        )}
      </MainContainer>
    </NoteContext.Provider>
  );
}

export default App;
