import React, { useContext } from 'react';
import styled from 'styled-components';
import { PromptContext } from '../App';

const Wrapper = styled.div`
  background-color: #EEE;
  border-radius: 5px;
  padding: 10px;
`

export const Controller = () => {
  const { prompt, setPrompt } = useContext(PromptContext);
  console.log(prompt);

  const widgets = document.querySelector('.widget__container');

  const addWidget = () => {
    // currentPrompt.push({ prompt: '', weight: '', color: '' });
    // setCurrentPrompt(currentPrompt);
  }

  return (
    <Wrapper>
      <div>Add a prompt:</div>   
      <div>
        <div>
          <label>Prompt: </label>
          <input type='text'/>
        </div> 
        <div>
          <label>Weight: </label>
          <input type="range" min={0} max={10} step={0.1} />
        </div>
        <div>
          <label>Color: </label>
          <input type="color" />
        </div>
        <button onClick={addWidget} >Add</button>
      </div>
    </Wrapper>
  )
}
