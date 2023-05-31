import { createContext, useState } from "react";
import { Prompt } from "./components/Prompt";
import styled from "styled-components";

const Main = styled.main`
  margin: 0 10%;
  padding: 10% 0;
`

export const PromptContext = createContext(null);

const App = () => {
  const [prompts, setPrompts] = useState([]);

  return (
    <div className="App">
      <div className="prompts-buttons"></div>
      <Main>

        <PromptContext.Provider value={{ prompts, setPrompts }}>
          <Prompt></Prompt>
        {/*<Prompt></Prompt> */}
        
        </PromptContext.Provider>

      </Main>
    </div>
  );
}

export default App;