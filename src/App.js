import { useState } from 'react';
import './App.css';
import OrderNameInput from './OrderNameInput/OrderNameInput';
import OrderImages from './OrderImages/OrderImages';
import InstructionsForm from './InstructionsForm/InstructionsForm';
import InstructionsList from './InstructionsList/InstructionsList';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [instructions, setInstructions] = useState([]);
  const [orderName, setOrderName] = useState('');
  return (
    <div className="App">
      <OrderNameInput setOrderName={ setOrderName } orderName={orderName}/>
      <OrderImages foodId={ foodId } sideId={ sideId } drinkId={ drinkId } setFoodId={ setFoodId } setSideId={ setSideId } setDrinkId={ setDrinkId }/>
      <InstructionsForm instructions={ instructions } setInstructions={ setInstructions }/>
      <InstructionsList instructions={ instructions }/>

    </div>
  );
}

export default App;
