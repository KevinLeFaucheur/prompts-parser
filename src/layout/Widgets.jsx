import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Widget } from '../components/Widget';

const WidgetsWrapper = styled.div`
  display: flex;
  min-height: 55px;
` 

export const Widgets = ({ prompts }) => {

  // useEffect(() => {

  // }, [prompts])

  return (
    <WidgetsWrapper>
      {prompts 
      ? 
      prompts.map((prompt, index) => {
        return <Widget key={index} prompt={prompt} />
      }) 
      : ''}
    </WidgetsWrapper>
  )
}
