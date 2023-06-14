import { lighten } from 'polished'
import { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { PromptContext } from '../App';
import { validatePrompt } from '../utils';
import { Swatch } from './Swatch';

const Wrapper = styled.div`
  background-color: #95b9fc;
  border-radius: 5px;
  padding: 10px 10%;
  margin-bottom: 1rem;
`

const Header = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
`
const ControllerRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
`

const Label = styled.label`
  margin-right: 1rem;
`

const Prompt = styled.input`
  border: none;
  border-radius: 3px;
  width: 50%;
`

const Weight = styled.input`
  width: 50%;
`

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 5px 10px;
  border: none;
  background-color: ${lighten(0.1, '#95b9fc')};
  margin-top: 1rem;
  &:hover {
    background-color: ${lighten(0.05, '#95b9fc')};
  }
`

const Option = styled.div`
  display: flex;
  justify-content: space-between;
`

const SwatchButton = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: white;
  border: none;
  border-radius: 5px;
`

export const Controller = () => {
  const [isSwatchOpen, setIsSwatchOpen] = useState();
  const [weightInput, setWeight] = useState(1);
  const { prompts, setPrompts } = useContext(PromptContext);
  const promptRef = useRef('');
  const weightRef = useRef('');
  const colorRef = useRef('');

  const addWidget = () => {
    if(validatePrompt(promptRef.current.value)) {

      setPrompts([...prompts, {
          prompt: promptRef.current.value, 
          weight: weightRef.current.value, 
          color: '#9EE'
        }]
      );
    }
  }
  
  const handleWeight = (e) => {
    setWeight((Math.pow(e.target.value, 2) / 10).toFixed(2));
  }

  return (
    <Wrapper>
      <Header>Add a prompt:</Header>   
      <div>
        <ControllerRow>
          <Label>Prompt: </Label>
          <Prompt type='text' ref={promptRef}/>
        </ControllerRow> 
        <ControllerRow>
          <Label>Weight: {weightInput}</Label>
          <Weight onChange={handleWeight} ref={weightRef} defaultValue={3} type="range" min={0} max={10} step={0.1} />
        </ControllerRow>
        <ControllerRow>
          <Label>Color: </Label>
          <Option><SwatchButton onClick={() => setIsSwatchOpen(!isSwatchOpen)} /></Option>
        </ControllerRow>
        <Button onClick={() => addWidget()} >Add</Button>
      </div>
      <Swatch colorRef={colorRef} open={isSwatchOpen} backgroundColor={'#95b9fc'}/>
    </Wrapper>
  )
}
