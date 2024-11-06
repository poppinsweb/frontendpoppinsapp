import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/users/cart.css"

export const Materiales = () => {
  const [Items, setItems] = useState([
    {
      id: 1,
      nombre: "Token de Evaluación",
      cantidad: 0,
      precio: 20000,
      descripcion: "Permite aplicar la encuesta",
      imgSrc: "src/styles/images/token.png",
    },
    {
      id: 2,
      nombre: "Reloj Indigo",
      cantidad: 0,
      descripcion:
        "Reloj índigo con marcas de segundos y cambios de color para enseñar a los niños a leer la hora",
      precio: 40000,
      imgSrc: "src/styles/images/reloj-indigo.jpg",
    },
    {
      id: 3,
      nombre: "Reloj Cielo",
      cantidad: 0,
      descripcion:
        "Reloj cielo con marcas de segundos y cambios de color para enseñar a los niños a leer la hora",
      precio: 40000,
      imgSrc: "src/styles/images/reloj-cielo.jpg",
    },
    {
      id: 4,
      nombre: "Reloj Rojo",
      cantidad: 0,
      descripcion:
        "Reloj rojo con marcas de segundos y cambios de color para enseñar a los niños a leer la hora",
      precio: 40000,
      imgSrc: "src/styles/images/reloj-rojo.jpg",
    },
    {
      id: 5,
      nombre: "Reloj Verde",
      cantidad: 0,
      descripcion:
        "Reloj verde con marcas de segundos y cambios de color para enseñar a los niños a leer la hora",
      precio: 40000,
      imgSrc: "src/styles/images/reloj-verde.jpg",
    },
    {
      id: 6,
      nombre: "Brújula: Rutina para preescolares",
      cantidad: 0,
      descripcion:
        "Dividida en mañana, tarde y noche, contiene imágenes para ayudar a organizarse a los más pequeños",
      precio: 50000,
      imgSrc: "src/styles/images/brujula.jpg",
    },
    {
      id: 7,
      nombre: "Ruta de Navegación",
      cantidad: 0,
      descripcion: "Tablero borrable para organizar la rutina de las tardes",
      precio: 50000,
      imgSrc: "src/styles/images/ruta-de-navegacion.jpg",
    },
    {
      id: 8,
      nombre: "El Juego de los Acuerdos",
      cantidad: 0,
      descripcion:
        "Juego para motivar a los niños y niñas en tareas del hogar que les permitirán ir asumiendo responsabilidades familiares",
      precio: 50000,
      imgSrc: "src/styles/images/el-juego-de-los-acuerdos.jpg",
    },
    {
      id: 9,
      nombre: "Misión a la Independencia",
      cantidad: 0,
      descripcion:
        "Juego para niños entre 4 y 7 años, con 6 misiones a la independencia y sus insignias, para convertirse en un GRAN ASTRONAUTA",
      precio: 50000,
      imgSrc: "src/styles/images/misiones.jpg",
    },

    {
      id: 10,
      nombre: "Planeador Mensual",
      cantidad: 0,
      descripcion: "Planeador mensual con 100 stickers incluidos",
      precio: 50000,
      imgSrc: "src/styles/images/planeador-mensual.jpg",
    },
    {
      id: 11,
      nombre: "Combinación Perfecta!",
      cantidad: 0,
      descripcion:
        "Adquiere el Planeador mensual y la Rutina para las tardes, con un descuento especial",
      precio: 90000,
      imgSrc: "src/styles/images/combinacion-perfecta.jpg",
    },
  ]);
   
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/carrito")
  };

  return (
    <>
      <div className="main-cart main-cart-green">
        <div>
          <h1 className="title-cart">Material Educativo</h1>
          <img
            src="src/styles/images/UmbrellaFirst.png"
            className="logo-cart"
            alt="umbrella-logo"
          />
        </div>
        <div className="main-cart-items">
          {Items.map((item) => (
            <div key={item.id} className="product">
              <h2>{item.nombre}</h2>
              {item.imgSrc && (
                <img
                  className="img-products"
                  src={item.imgSrc}
                  alt={item.nombre}
                />
              )}
              <p className="description">{item.descripcion}</p>
              <p className="price">Precio: ${item.precio}</p>
              <button className="btn-color" onClick={ handleNavigate }>Comprar</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
