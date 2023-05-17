import { createContext, useState } from "react";
import { Prompt } from "./components/Prompt";
import { Widgets } from "./layout/Widgets";
import styled from "styled-components";

const Main = styled.main`
  margin: 0 10%;
`

export const PromptContext = createContext(null);

const App = () => {
  const [prompt, setPrompt] = useState([]);

  return (
    <div className="App">
      <div className="prompts-buttons"></div>
      <Main>

        <PromptContext.Provider value={{ prompt, setPrompt }}>
          <Widgets></Widgets>
          <Prompt></Prompt>

        {/* <Widgets></Widgets>
        <Prompt></Prompt> */}
        
        </PromptContext.Provider>

      </Main>
    </div>
  );
}

export default App;