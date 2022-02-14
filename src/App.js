import "./App.css";
import Form from "./components/form";
import Header from "./components/header";
import MainContainer from "./containers/mainContainer";

function App() {
  return (
    <MainContainer>
      <Header>Chillipharm Note Pad</Header>
      <Form />
    </MainContainer>
  );
}

export default App;
