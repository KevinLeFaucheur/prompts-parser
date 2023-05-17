import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.div`
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

  button {
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

export const Widget = ({ prompt }) => {
  const [isOpen, setIsOpen] = useState();
  const [categoryColor, setCategoryColor] = useState('#eee');


  const handleIsOpen = () => {
    setIsOpen(!isOpen);
    // setCategoryColor(value);
  }

  const handleColor = (value) => {
    setCategoryColor(value);
  }

  return (
    <Button backgroundColor={categoryColor}>
      <div className='widget__header' onClick={handleIsOpen}>
        <i className="fa-solid fa-angle-up" />
        <p>{prompt}</p>
        <button className="fa-solid fa-xmark" />
      </div>
      {isOpen ?
      <div className='widget__body'>
        <Option><p>Weight:</p><input type="range" min={0} max={10} step={0.1} /></Option>
        <Option><p>Color:</p><input type="color" onBlur={(event) => handleColor(event.target.value)} /></Option>
      </div> : ''}
    </Button>
  )
}
