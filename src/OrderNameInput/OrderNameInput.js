import './OrderNameInput.css';

export default function OrderNameInput({ setOrderName, orderName }) {

  function handleOnChange(e) {
    setOrderName(e.target.value);
  }

  return (
    <div className='name'>
      <label>
        Name on order:
        <input onChange={ handleOnChange }/>
      </label>
      <p>{ orderName }</p>
    </div>
  );
}