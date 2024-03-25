import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Cart(props) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {props.items.map((item, index) => (
        <div key={index} className="cart-item">
          {item}
        </div>
      ))}
    </div>
  );
}

function App() {
  const [cartItems, setCartItem] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addProductToKart = () => {
    if (inputValue.trim() !== '') {
      setCartItem([...cartItems, inputValue]);
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Shopping Cart</h1>
      </header>
      <div className="content">
        <Cart items={cartItems} />
        <div className="input-container">
          <input
            type='text'
            placeholder='Product ?'
            value={inputValue}
            onChange={handleInputChange}
          />
          <button onClick={addProductToKart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;