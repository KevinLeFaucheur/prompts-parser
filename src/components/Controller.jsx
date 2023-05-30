import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { PromptContext } from '../App';
import { validatePrompt } from '../utils';

const Wrapper = styled.div`
  background-color: #EEE;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 1rem;

  button {
    width: 150px;
    padding: 5px 10px;
  }
`

export const Controller = () => {
  const { prompts, setPrompts } = useContext(PromptContext);
  const promptRef = useRef('');
  const weightRef = useRef('');
  const colorRef = useRef('');

  const addWidget = () => {

    const newPrompts = [...prompts, 
      validatePrompt({
        prompt: promptRef.current.value, 
        weight: weightRef.current.value, 
        color: colorRef.current.value })
    ];

    setPrompts(newPrompts);
  }

  return (
    <Wrapper>
      <div>Add a prompt:</div>   
      <div>
        <div>
          <label>Prompt: </label>
          <input type='text' ref={promptRef}/>
        </div> 
        <div>
          <label>Weight: </label>
          <input type="range" ref={weightRef} min={0} max={10} step={0.1} />
        </div>
        <div>
          <label>Color: </label>
          <input type="color" ref={colorRef} />
        </div>
        <button onClick={() => addWidget()} >Add</button>
      </div>
    </Wrapper>
  )
}
