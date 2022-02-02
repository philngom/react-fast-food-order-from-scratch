import { useState } from 'react';
import './App.css';
import OrderNameInput from './OrderNameInput/OrderNameInput';
import OrderImages from './OrderImages/OrderImages';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [instructions, setInstructionsId] = useState('');
  const [orderName, setOrderName] = useState('');
  return (
    <div className="App">
      <OrderNameInput setOrderName={ setOrderName } orderName={orderName}/>
      <OrderImages foodId={ foodId } sideId={ sideId } drinkId={ drinkId } setFoodId={ setFoodId } setSideId={ setSideId } setDrinkId={ setDrinkId }/>
    </div>
  );
}

export default App;
