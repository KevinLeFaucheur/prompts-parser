import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 7rem;
  height: 30px;
  background-color: #73aabd;
  border-radius: 5px;
  padding: 20px;
  margin-right: 5px;

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

export const Widget = ({ prompt }) => {
  return (
    <Button>
      <i className="fa-solid fa-angle-up" />
      <p>{prompt}</p>
      <button className="fa-solid fa-xmark" />
    </Button>
  )
}
