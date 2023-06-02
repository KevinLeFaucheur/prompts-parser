import React, { useRef } from 'react';
import styled from 'styled-components';

const colors = [
  "#ffe3d1", "#ffbe95", "#dda3a7", "#7792d6", 
  "#2acaea", "#20daa5", "#77d375", "#b0e0e6",
  "#c6e2ff", "#f0f8ff", "#cecece", "#bfaee6"
];

const Dialog = styled.dialog`
  width: 140px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: lightcyan;
`

const Button = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  height: 1.5rem;
  width: 1.5rem;
  border: none;
  border-radius: 5px;
  background-color: lightblue;
`

const Header = styled.div`
  position: relative;
  margin-bottom: 10px;
`

const Palette = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Color = styled.div`
  height: 20px;
  width: 20px;
`

export const Swatch = ({ colorRef, open }) => {  
  const dialog = useRef('');

  const onColorSelect = (color) => {
    colorRef.current.style.backgroundColor = color;
  }
  
  // document
  // .querySelectorAll(``)
  // .forEach(element => element.onclick = () => {

  //   const color = window.getComputedStyle(element).getPropertyValue("background-color");

  //   document.getElementById(``).style.backgroundColor = color;

  // });
  
  // document.querySelector('.close').onclick = () => document.querySelector(``).close();

  return (
    <Dialog ref={dialog} open={open}>
      <Header>
        <p>Colors:</p>
      </Header>
      <Button onClick={(e) => e.target.parentElement.close()}>x</Button>
      <Palette>
        {colors.map(color => <Color onClick={() => onColorSelect(color)} key={color} style={{ backgroundColor: `${color}` }}>&nbsp;</Color> )}
      </Palette>
    </Dialog>
  )
}