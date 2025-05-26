import { Construction } from "../../components/home/Construction";

import React from 'react'

export const CartPage = () => {
  return (
    <div><Construction /></div>
  )
}


// import React, { useState } from "react";
// import "../../styles/users/cart.css";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([
//     {
//       id: 1,
//       nombre: "Token de Evaluación",
//       cantidad: 0,
//       precio: 20000,
//       descripcion: "Permite aplicar la encuesta",
//       imgSrc: "src/styles/images/token.png",
//     },
//     {
//       id: 2,
//       nombre: "Reloj Indigo",
//       cantidad: 0,
//       descripcion:
//         "Reloj índigo con marcas de segundos y cambios de color para enseñar a los niños a leer la hora",
//       precio: 40000,
//       imgSrc: "src/styles/images/reloj-indigo.jpg",
//     },
//     {
//       id: 3,
//       nombre: "Reloj Cielo",
//       cantidad: 0,
//       descripcion:
//         "Reloj cielo con marcas de segundos y cambios de color para enseñar a los niños a leer la hora",
//       precio: 40000,
//       imgSrc: "src/styles/images/reloj-cielo.jpg",
//     },
//     {
//       id: 4,
//       nombre: "Reloj Rojo",
//       cantidad: 0,
//       descripcion:
//         "Reloj rojo con marcas de segundos y cambios de color para enseñar a los niños a leer la hora",
//       precio: 40000,
//       imgSrc: "src/styles/images/reloj-rojo.jpg",
//     },
//     {
//       id: 5,
//       nombre: "Reloj Verde",
//       cantidad: 0,
//       descripcion:
//         "Reloj verde con marcas de segundos y cambios de color para enseñar a los niños a leer la hora",
//       precio: 40000,
//       imgSrc: "src/styles/images/reloj-verde.jpg",
//     },
//     {
//       id: 6,
//       nombre: "Brújula: Rutina para preescolares",
//       cantidad: 0,
//       descripcion:
//         "Dividida en mañana, tarde y noche, contiene imágenes para ayudar a organizarse a los más pequeños",
//       precio: 50000,
//       imgSrc: "src/styles/images/brujula.jpg",
//     },
//     {
//       id: 7,
//       nombre: "Ruta de Navegación",
//       cantidad: 0,
//       descripcion: "Tablero borrable para organizar la rutina de las tardes",
//       precio: 50000,
//       imgSrc: "src/styles/images/ruta-de-navegacion.jpg",
//     },
//     {
//       id: 8,
//       nombre: "El Juego de los Acuerdos",
//       cantidad: 0,
//       descripcion:
//         "Juego para motivar a los niños y niñas en tareas del hogar que les permitirán ir asumiendo responsabilidades familiares",
//       precio: 50000,
//       imgSrc: "src/styles/images/el-juego-de-los-acuerdos.jpg",
//     },
//     {
//       id: 9,
//       nombre: "Misión a la Independencia",
//       cantidad: 0,
//       descripcion:
//         "Juego para niños entre 4 y 7 años, con 6 misiones a la independencia y sus insignias, para convertirse en un GRAN ASTRONAUTA",
//       precio: 50000,
//       imgSrc: "src/styles/images/misiones.jpg",
//     },

//     {
//       id: 10,
//       nombre: "Planeador Mensual",
//       cantidad: 0,
//       descripcion: "Planeador mensual con 100 stickers incluidos",
//       precio: 50000,
//       imgSrc: "src/styles/images/planeador-mensual.jpg",
//     },
//     {
//       id: 11,
//       nombre: "Combinación Perfecta!",
//       cantidad: 0,
//       descripcion:
//         "Adquiere el Planeador mensual y la Rutina para las tardes, con un descuento especial",
//       precio: 90000,
//       imgSrc: "src/styles/images/combinacion-perfecta.jpg",
//     },
//   ]);
//   const [error, setError] = useState(null);

//   const addToCart = (id) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
//       )
//     );
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id && item.cantidad > 0
//           ? { ...item, cantidad: item.cantidad - 1 }
//           : item
//       )
//     );
//   };

//   const handleInputChange = (id, e) => {
//     const value = parseInt(e.target.value, 10);
//     if (!isNaN(value) && value >= 0) {
//       setCartItems((prevItems) =>
//         prevItems.map((item) =>
//           item.id === id ? { ...item, cantidad: value } : item
//         )
//       );
//     }
//   };

//   const handleCheckout = () => {
//     // Check if any item has a quantity greater than zero
//     const hasItems = cartItems.some((item) => item.cantidad > 0);

//     if (!hasItems) {
//       // If no items have been selected, show an error message
//       setError("Por favor, seleccione al menos un producto antes de proceder.");
//       alert(error);
//       return;
//     }

//     // If items are selected, proceed to checkout
//     setError(null);
//     window.location.href = "/register";
//   };

//   const total = cartItems.reduce(
//     (acc, item) => acc + item.cantidad * item.precio,
//     0
//   );

//   return (
//     <>
//       <div className="main-cart">
//         <div >
//           <h1 className="title-cart">Material Educativo</h1>
//           <img
//             src="src/styles/images/UmbrellaFirst.png"
//             className="logo-cart"
//             alt="umbrella-logo"
//           />
//         </div>
//         <div className="main-cart-items">
//           {cartItems.map((item) => (
//             <div key={item.id} className="product">
//               <h2>{item.nombre}</h2>
//               {item.imgSrc && (
//                 <img
//                   className="img-products"
//                   src={item.imgSrc}
//                   alt={item.nombre}
//                 />
//               )}
//               <p className="description">{item.descripcion}</p>
//               <p className="price">Precio: ${item.precio}</p>
//               <div className="controls">
//                 <button
//                   className="controls-button"
//                   onClick={() => removeFromCart(item.id)}
//                 >
//                   -
//                 </button>
//                 <input
//                   className="controls-input"
//                   type="number"
//                   value={item.cantidad}
//                   onChange={(e) => handleInputChange(item.id, e)}
//                 />
//                 <button
//                   className="controls-button"
//                   onClick={() => addToCart(item.id)}
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="cart">
//         <h2>Resumen de mi Compra:</h2>
//         {cartItems
//           .filter((item) => item.cantidad > 0)
//           .map((item) => (
//             <p key={item.id}>
//               {item.nombre}: {item.cantidad} unidades
//             </p>
//           ))}
//         <p>Total: ${total}</p>

//         <button className="btn btn-outline-primary btn-pay" onClick={handleCheckout}>
//           Pagar
//         </button>
//       </div>
//     </>
//   );
// };

// export default Cart;
