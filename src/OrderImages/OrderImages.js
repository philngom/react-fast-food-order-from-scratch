import './OrderImages.css';

export default function OrderImages({ foodId, sideId, drinkId, setFoodId, setSideId, setDrinkId }) {

  function handleDrinkSelection(e) {
    setDrinkId(e.target.value);
  }
  function handleFoodSelection(e) {
    setFoodId(e.target.value);
  }
  function handleSideSelection(e) {
    setSideId(e.target.value);
  }

  return (
    <div className="menu">
      <div className="selections">
        <select className="selection" onChange={ handleFoodSelection }>
          <option value='1'>Burger</option>
          <option value='2'>Chicken Strips</option>
          <option value='3'>Club Sandwich</option>
        </select>
        <select className="selection" onChange={ handleSideSelection }>
          <option value='1'>French Fries</option>
          <option value='2'>Tater Tots</option>
          <option value='3'>Sweet Potato Fries</option>
        </select>
        <select className="selection" onChange={ handleDrinkSelection }>
          <option value='1'>Diet Coke</option>
          <option value='2'>Fanta</option>
          <option value='3'>Bottled Water</option>
        </select>
      </div>
      <div className="menu-images">
        <img src={`./images/food-${foodId}.jpg`} />
        <img src={`./images/side-${sideId}.jpg`} />
        <img src={`./images/drink-${drinkId}.jpg`} />
      </div>
    </div>
  );
}