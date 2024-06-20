import "../../styles/users/token.css";
import { useAuth } from "../../context/AuthProvider";
// import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const TokenBox = () => {
  const { user } = useAuth();

  const navigate = useNavigate();

  // TODO: CONDICIONAR ESTA NAVEGACION SI YA HAY UN USUARIO CHILD ASOCIADO AL TOKEN
  const handleNavigate = () => {
    navigate("/personales");
  };

  console.log(user);

  // TODO: CREAR EL MECANISMO DE ASOCIAR A ENCUESTA X2
  return (
    <>
      {user.rol === "admin" ? (
        <div className="box-tokens-container-admin">
          <h2 className="code-title">Token</h2>
          {/* LISTAR TODOS LOS TOKENS? */}
          <div>Encuesta: {user.usuario_token}</div>
          <button className="btn btn-color">Crear Token</button>
        </div>
      ) : (
        <div className="box-tokens-container">
          <h2 className="code-title">Token</h2>
          <div className="radio-token-container">
            <label key={user.id} className="token-lable">
              {user.evaluationtoken}
            </label>
            <button className="btn btn-color" onClick={handleNavigate}>
              Datos del Niño
            </button>
          </div>
        </div>
      )}
    </>
  );
};
