import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { Widgets } from '../layout/Widgets';
import { Controller } from './Controller';
import { PromptContext } from '../App';

const PromptWrapper = styled.div`
  display: flex;
  flex-direction: column;
` 

export const Prompt = () => {
  const textareaRef = useRef('');
  const [prompts, setPrompts] = useState([]);
  const { prompt, setPrompt } = useContext(PromptContext);

  const handlePrompt = (prompt) => {

    if(prompt.slice(-1) === ',') {
      const prompts = prompt.split(',');
      const newPrompts = [];

      prompts.forEach(prompt => {
        const newPrompt = prompt.trim();
        if(newPrompt !== '') newPrompts.push({ prompt, weight: 1, color: '#9EE' });
      });

      console.log(newPrompts);

      setPrompts(newPrompts);

      setPrompt(newPrompts);
    }
  }

  return (
    <PromptWrapper>

      <Controller />

      <Widgets prompts={prompts} />

      <label htmlFor="positive">Prompts</label>
      <textarea 
        id="positive" name="positive" 
        rows={5} cols={100} 
        placeholder="Enter prompts"
        ref={textareaRef}
        style={{ resize: 'none' }}
        onChange={(event) => handlePrompt(event.target.value)}
      >
      </textarea>

    </PromptWrapper>
  )
}

