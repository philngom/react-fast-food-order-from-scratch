import './InstructionsForm.css';
import { useState } from 'react';

export default function InstructionsForm({ setInstructions, instructions }) {
  const [instruction, setInstruction] = useState('');

  function handleInputChange(e) {
    setInstruction(e.target.value);
  }

  function handleInstructionSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, instruction]);
    setInstruction('');
  }

  return (
    <div>
      <label>
        Special instructions:
        <form onSubmit={ handleInstructionSubmit }>
          <input value={ instruction } onChange={ handleInputChange }/>
          <button type="submit">Submit</button>
        </form>
      </label>
    </div>
  );
}