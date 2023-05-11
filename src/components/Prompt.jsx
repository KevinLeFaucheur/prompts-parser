import React, { useRef } from 'react';
import styled from 'styled-components';

const PromptWrapper = styled.div`
  display: flex;
  flex-direction: column;
` 

const handlePrompt = (event) => {
  
}

export const Prompt = () => {
  const textareaRef = useRef('');
  const widgetsRef = useRef('');

  return (
    <PromptWrapper>
      <div ref={widgetsRef}></div>
      <label htmlFor="positive">Prompts</label>
      <textarea 
        id="positive" name="positive" 
        rows={5} cols={150} 
        placeholder="Enter prompts"
        ref={textareaRef}
        onChange={handlePrompt}
      >
      </textarea>
    </PromptWrapper>
  )
}

