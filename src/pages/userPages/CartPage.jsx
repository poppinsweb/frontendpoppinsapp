import React, { useState } from "react";
import "../../styles/users/cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      nombre: "Token de Evaluación",
      cantidad: 0,
      precio: 20000,
      imgSrc: "src/styles/images/token.png"
    },
    {
      id: 2,
      nombre: "El Juego de las Misiones",
      cantidad: 0,
      precio: 150000,
      imgSrc: "src/styles/images/mision1.png",
    },
    {
      id: 3,
      nombre: "El Juego de los Acuerdos",
      cantidad: 0,
      precio: 150000,
      imgSrc: "src/styles/images/mision1.png",
    },
  ]);
  const [error, setError] = useState(null);

  const addToCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.cantidad > 0
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  const handleInputChange = (id, e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, cantidad: value } : item
        )
      );
    }
  };

  const handleCheckout = () => {
    window.location.href = "/register";
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.cantidad * item.precio,
    0
  );

  return (
    <>
      
      <div className="main-cart">
        <div className="main-cart-title"><h1>Carrito de Compras</h1></div>
        <div className="main-cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="product">
            <h2>{item.nombre}</h2>
            {item.imgSrc && (
              <img
                className="img-missions"
                src={item.imgSrc}
                alt={item.nombre}
              />
            )}
            <p>Precio: ${item.precio}</p>
            <div className="controls">
              <button className="controls-button" onClick={() => removeFromCart(item.id)}>-</button>
              <input
                className="controls-input"
                type="number"
                value={item.cantidad}
                onChange={(e) => handleInputChange(item.id, e)}
              />
              <button className="controls-button" onClick={() => addToCart(item.id)}>+</button>
            </div>
          </div>
        ))}
      </div></div>
      <div className="cart">
        <h2>Resumen de mi Compra:</h2>
        {cartItems.map((item) => (
          <p key={item.id}>
            {item.nombre}: {item.cantidad} unidades
          </p>
        ))}
        <p>Total: ${total}</p>

        <button className="btn btn-outline-primary" onClick={handleCheckout}>
          Pagar
        </button>
      </div>
    </>
  );
};

export default Cart;
