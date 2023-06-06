import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import { Widgets } from '../layout/Widgets';
import { Controller } from './Controller';
import { PromptContext } from '../App';
import { promptParser, validatePrompt } from '../utils';

const PromptWrapper = styled.div`
  display: flex;
  flex-direction: column;
` 

export const Prompt = () => {
  const textareaRef = useRef('');
  const { prompts, setPrompts } = useContext(PromptContext);

  const handlePrompt = () => {
    const prompt = document.getElementById('positive').value;

    setPrompts(promptParser(prompt));
  };

  return (
    <PromptWrapper>

      <Controller />

      <Widgets />

      <label htmlFor="positive">Prompts</label>
      <textarea 
        id="positive" name="positive" 
        rows={5} cols={100} 
        placeholder="Enter prompts"
        ref={textareaRef}
        style={{ resize: 'none' }}
      >
      </textarea>

      <button onClick={handlePrompt}>Generate</button>

    </PromptWrapper>
  )
}

