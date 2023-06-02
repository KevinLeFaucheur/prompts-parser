import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Widget } from '../components/Widget';
import { PromptContext } from '../App';

const WidgetsWrapper = styled.div`
  display: flex;
  min-height: 55px;
  margin: 1rem 0;
` 

export const Widgets = () => {
  const { prompts, setPrompts } = useContext(PromptContext);

  console.log(prompts);

  return (
    <WidgetsWrapper className='widget__container'>
      {prompts 
      ? 
      prompts.map((prompt, index) => {
        return <Widget key={index} promptData={prompt} />
      }) 
      : ''}
    </WidgetsWrapper>
  )
}
