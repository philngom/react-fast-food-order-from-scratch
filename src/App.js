import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import OrderNameInput from './OrderNameInput/OrderNameInput';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setFideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [instructions, setInstructionsId] = useState('');
  const [orderName, setOrderName] = useState('');
  return (
    <div className="App">
      <OrderNameInput setOrderName={ setOrderName } orderName={orderName}/>
    </div>
  );
}

export default App;
