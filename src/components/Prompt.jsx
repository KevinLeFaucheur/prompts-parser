import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Widgets } from '../layout/Widgets';

const PromptWrapper = styled.div`
  display: flex;
  flex-direction: column;
` 

export const Prompt = () => {
  const textareaRef = useRef('');
  const [prompts, setPrompts] = useState([]);

  const handlePrompt = (prompt) => {
    console.log(prompt.split(','));

    if(prompt.slice(-1) === ',') {
      const prompts = prompt.split(',');
      const newPrompts = [];

      prompts.forEach(prompt => {
        const newPrompt = prompt.trim();
        if(newPrompt !== '') newPrompts.push(prompt);
      });
      setPrompts(newPrompts);
    }
  }

  return (
    <PromptWrapper>

      <Widgets prompts={prompts} />

      <label htmlFor="positive">Prompts</label>
      <textarea 
        id="positive" name="positive" 
        rows={5} cols={150} 
        placeholder="Enter prompts"
        ref={textareaRef}
        onChange={(event) => handlePrompt(event.target.value)}
      >
      </textarea>

    </PromptWrapper>
  )
}

