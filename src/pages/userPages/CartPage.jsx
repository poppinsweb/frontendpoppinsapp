import React, { useState } from 'react';
import '../../styles/users/cart.css';

const Cart = () => {
  const [numTokens, setNumTokens] = useState(1);
  const [error, setError] = useState(null);

  const addToCart = () => {
    setNumTokens(numTokens + 1);
  };

  const removeFromCart = () => {
    if (numTokens > 0) {
      setNumTokens(numTokens - 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setNumTokens(value);
    }
  };

  const handleCheckout = () => {
    window.location.href = '/pago'
  };

  return (
    <div className="main-cart">
      <h1>Carrito de Compras</h1>
      <div className="product">
        <h2>Token de Evaluación</h2>
        <p>Precio: $50.000</p>
        <div className="controls">
          <button onClick={removeFromCart}>-</button>
          <input type="number" value={numTokens} onChange={handleInputChange} />
          <button onClick={addToCart}>+</button>
        </div>
      </div>
      <div className="cart">
        <h2>Carrito</h2>
        <p>Tokens: {numTokens} unidades</p>
        <p>Total: ${numTokens * 50000}</p>
      </div>
      <button className="btn btn-outline-primary" onClick={handleCheckout}>
        Pagar
      </button>
    </div>
  );
};

export default Cart;
