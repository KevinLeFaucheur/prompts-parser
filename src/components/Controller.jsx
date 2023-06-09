import { lighten } from 'polished'
import { useContext, useRef } from 'react';
import styled from 'styled-components';
import { PromptContext } from '../App';
import { validatePrompt } from '../utils';

const Wrapper = styled.div`
  background-color: #95b9fc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 1rem;
  width: 50%;

  button {
    width: 100%;
    padding: 5px 10px;
    border: none;
    background-color: ${lighten(0.1, '#95b9fc')};
  }
`

const Header = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
`
const ControllerRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const Label = styled.label`
  margin-right: 1rem;
`

const Prompt = styled.input`
  width: 50%;
`

const Weight = styled.input`
  width: 50%;
`

const Color = styled.input`
  width: 50%;
`

const Button = styled.button`
  margin-top: 1rem;
`

export const Controller = () => {
  const { prompts, setPrompts } = useContext(PromptContext);
  const promptRef = useRef('');
  const weightRef = useRef('');
  const colorRef = useRef('');

  const addWidget = () => {

    const newPrompts = [...prompts, 
      validatePrompt({
        prompt: promptRef.current.value, 
        weight: weightRef.current.value, 
        color: colorRef.current.value })
    ];

    setPrompts(newPrompts);
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
          <Label>Weight: </Label>
          <Weight type="range" ref={weightRef} min={0} max={10} step={0.1} />
        </ControllerRow>
        <ControllerRow>
          <Label>Color: </Label>
          <Color type="color" ref={colorRef} />
        </ControllerRow>
        <Button onClick={() => addWidget()} >Add</Button>
      </div>
    </Wrapper>
  )
}
