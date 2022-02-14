import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Form from "./components/form";
import Header from "./components/header";
import MainContainer from "./containers/mainContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <MainContainer>
      <Header>Chillipharm Note Pad</Header>
      {showForm ? (
        <Form onExitClick={() => setShowForm(false)} />
      ) : (
        <Button
          style={{ background: "#6EE5F5" }}
          onClick={() => setShowForm(true)}
        >
          Add a note
        </Button>
      )}
    </MainContainer>
  );
}

export default App;
