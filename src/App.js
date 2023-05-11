import { Prompt } from "./components/Prompt";
import { Widgets } from "./layout/Widgets";
import styled from "styled-components";

const Main = styled.main`
  margin: 0 10%;
`

const App = () => {
  return (
    <div className="App">
      <div className="prompts-buttons"></div>
      <Main>

        <Widgets></Widgets>
        <Prompt></Prompt>

        <Widgets></Widgets>
        <Prompt></Prompt>
        
      </Main>
    </div>
  );
}

export default App;