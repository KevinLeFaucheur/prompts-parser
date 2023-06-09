import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Swatch } from './Swatch';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  border-radius: 5px;
  padding: 10px;
  margin-right: 5px;

  .widget__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
  }

  i {
    padding: 0 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1rem;
    margin: 0;
    padding: 0 0.5rem;
  }

  .widget--close {
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    border-radius: 2px;
    background-color: transparent;
    cursor: pointer;
    padding: 5px;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Option = styled.div`
  display: flex;
  justify-content: space-between;
`

const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: black;
  margin: 10px 0;
  opacity: 0.2;
`

const SwatchButton = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: white;
  border: none;
  border-radius: 5px;
`

export const Widget = ({ promptData }) => {
  const [isOpen, setIsOpen] = useState();
  const [isSwatchOpen, setIsSwatchOpen] = useState();
  
  const colorRef = useRef('');
  
  const { prompt, weight, color } = promptData;
  const [promptInput, setPrompt] = useState(prompt);
  const [weightInput, setWeight] = useState(weight);
  const [colorInput, setColor] = useState(color);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setPrompt(prompt);
    setWeight(weight);
    setColor(color);
  }, [color, prompt, weight])

  const handleWeight = (e) => {
    setWeight((Math.pow(e.target.value, 2) / 10).toFixed(2));
  }

  return (
    <Wrapper ref={colorRef} backgroundColor={color}>
      <Container>
        <div className='widget__header' onClick={handleIsOpen}>
          <i className="fa-solid fa-angle-up" />
          <p>{promptInput}</p>
          <button className="widget--close fa-solid fa-xmark" />
        </div>
        {isOpen ?
        <div className='widget__body'>
          <Separator />
          <Option><p>Weight: {weightInput}</p><input onChange={handleWeight} defaultValue={weightInput} type="range" min={0} max={10} step={0.1} /></Option>
          <Option><p>Color:</p><SwatchButton onClick={() => setIsSwatchOpen(!isSwatchOpen)} /></Option>
          {/* <Option><p>Color:</p><input defaultValue={color} type="color" onBlur={(event) => handleColor(event.target.value)} /></Option> */}
        </div> : ''}
      </Container>
      <Swatch colorRef={colorRef} open={isSwatchOpen} backgroundColor={colorInput}/>
    </Wrapper>
  )
}
