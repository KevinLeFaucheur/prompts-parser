import { Prompt } from "./components/Prompt";
import { Widgets } from "./layout/Widgets";

const App = () => {
  return (
    <div className="App">
      <div className="prompts-buttons"></div>
      <div className="prompts-wrapper">

        <Widgets></Widgets>
        <Prompt></Prompt>

        <Widgets></Widgets>
        <Prompt></Prompt>
        
      </div>
    </div>
  );
}

export default App;