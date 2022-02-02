import './InstructionsList.css';
import Instruction from '../Instruction/Instruction';

export default function InstructionsList({ instructions }) {
  return (
    <div>
      {
        instructions.map((instruction, i) =>
          <Instruction key={instruction + i} instruction={instruction}/>
        )
      }
    </div>
  );
}