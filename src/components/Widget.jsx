import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  background-color: lightgreen;
  border-radius: 3px;
  padding: 10px;
  margin-right: 5px;

  p {
    font-size: 1rem;
    line-height: 1rem;
    margin: 0;
  }
`

export const Widget = ({ prompt }) => {
  return (
    <Button>
      <p>{prompt}</p>
    </Button>
  )
}
