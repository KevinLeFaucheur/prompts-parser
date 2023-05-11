import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 7rem;
  background-color: #eee;
  border-radius: 5px;
  padding: 10px;
  margin-right: 5px;

  .widget__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  p {
    font-size: 1rem;
    line-height: 1rem;
    margin: 0;
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

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  }

  const handleColor = (value) => {
    // console.log(value);
  }

  return (
    <Button >
      <div className='widget__header' onClick={handleIsOpen}>
        <i className="fa-solid fa-angle-up" />
        <p>{prompt}</p>
        <button className="fa-solid fa-xmark" />
      </div>
      {isOpen ?
      <div>
        <Option><p>Weight:</p><input type="range" min={0} max={10} step={0.1} /></Option>
        <Option><p>Color:</p><input type="color" onChange={(event) => handleColor(event.target.value)} /></Option>
      </div> : ''}
    </Button>
  )
}
