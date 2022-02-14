import "./App.css";
import Header from "./components/header";
import Input from "./components/input";
import TextBox from "./components/textbox";
import MainContainer from "./containers/mainContainer";

function App() {
  return (
    <MainContainer>
      <Header>Chillipharm Note Pad</Header>
      <Input />
      <TextBox />
    </MainContainer>
  );
}

export default App;
