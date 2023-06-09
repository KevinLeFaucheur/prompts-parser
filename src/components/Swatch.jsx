import { lighten } from 'polished'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../utils'

const Dialog = styled.dialog`
  position: relative;
  width: 140px;
  height: 100%;
  padding: 10px;
  margin: 0;
  margin-left: 1rem;
  border: none;
  border-radius: 5px;
  background-color: ${ props => lighten(0.1, props.backgroundColor) };
  animation: slide-out 0.35s ease-out;

  @keyframes slide-out {
    from {
      transform: translate(-100%);
      opacity: 0;
    }
    to {
      transform: translate(0);
      opacity: 1;
    }
  }
`

const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 1.1rem;
  width: 1.1rem;
  border: none;
  background: transparent;

  text-align: center; 
  vertical-align: middle;
  padding: 0;
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

export const Swatch = ({ colorRef, open, backgroundColor }) => {  
  const dialog = useRef('');
  const [swatchColor, setSwatchColor] = useState(backgroundColor);

  const onColorSelect = (color) => {
    colorRef.current.style.backgroundColor = color;
    setSwatchColor(color);
  }
  
  // document
  // .querySelectorAll(``)
  // .forEach(element => element.onclick = () => {

  //   const color = window.getComputedStyle(element).getPropertyValue("background-color");

  //   document.getElementById(``).style.backgroundColor = color;

  // });
  
  // document.querySelector('.close').onclick = () => document.querySelector(``).close();

  return (
    <Dialog ref={dialog} open={open} backgroundColor={swatchColor}>
      <Header>
        <p>Colors:</p>
      </Header>
      <Button className="fa-solid fa-angle-left" onClick={(e) => e.target.parentElement.close()} backgroundColor={swatchColor} />
      <Palette>
        {colors.map(color => <Color onClick={() => onColorSelect(color)} key={color} style={{ backgroundColor: `${color}` }}>&nbsp;</Color> )}
      </Palette>
    </Dialog>
  )
}