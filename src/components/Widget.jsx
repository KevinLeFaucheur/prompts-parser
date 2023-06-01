import React, { useState } from 'react';
import styled from 'styled-components';
import { Swatch } from './Swatch';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const Option = styled.div`
  display: flex;
  justify-content: space-between;
`

const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: black;
  margin: 10px 0;
`

const SwatchButton = styled.button`
  width: 2rem;
  height: 1rem;
  background-color: white;
  border: none;
  border-radius: 5px;
`

export const Widget = ({ promptData }) => {
  const [isOpen, setIsOpen] = useState();
  const [isSwatchOpen, setIsSwatchOpen] = useState();
  const [categoryColor, setCategoryColor] = useState('#eee');

  const { prompt, weight, color } = promptData;

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
    // setCategoryColor(value);
  }

  const handleColor = (value) => {
    setCategoryColor(value);
  }

  return (
    <Wrapper backgroundColor={color}>
      <div className='widget__header' onClick={handleIsOpen}>
        <i className="fa-solid fa-angle-up" />
        <p>{prompt}</p>
        <button className="widget--close fa-solid fa-xmark" />
      </div>
      {isOpen ?
      <div className='widget__body'>
        <Separator />
        <Option><p>Weight: {weight}</p><input defaultValue={weight} type="range" min={0} max={10} step={0.1} /></Option>
        <Option><p>Color:</p><SwatchButton onClick={() => setIsSwatchOpen(!isSwatchOpen)} /><Swatch open={isSwatchOpen}/></Option>
        {/* <Option><p>Color:</p><input defaultValue={color} type="color" onBlur={(event) => handleColor(event.target.value)} /></Option> */}
      </div> : ''}
    </Wrapper>
  )
}
