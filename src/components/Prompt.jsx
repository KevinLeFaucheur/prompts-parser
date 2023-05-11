import React, { useRef } from 'react';
import styled from 'styled-components';

const PromptWrapper = styled.div`
  display: flex;
  flex-direction: column;
` 

export const Prompt = () => {
  const textareaRef = useRef('');
  const widgetsRef = useRef('');

  const handlePrompt = (prompt) => {
    console.log(prompt.split(','));

    if(prompt.slice(-1) === ',') {
      const prompts = prompt.split(',');

      widgetsRef.current.innerHTML = '';

      prompts.forEach(prompt => {
        const newPrompt = prompt.trim();
        if(newPrompt === '') return;
        
        const newButton = document.createElement('button');
        newButton.innerText = newPrompt;
        widgetsRef.current.append(newButton);
      });
    }
  }

  return (
    <PromptWrapper>
      <div ref={widgetsRef}></div>
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

