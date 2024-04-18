import "../../styles/users/token.css";
import { useAuth } from "../../context/AuthProvider";
import { useState, useEffect } from "react";

export const TokenBox = () => {
  const [radio, setRadio] = useState(null);
  const { user } = useAuth();

  console.log(user);

  useEffect(() => {
    setRadio(user.usuario_token);
  }, []);
  console.log(user);

  // CREAR EL MECANISMO DE ASOCIAR A ENCUESTA X2
  return (
    <>
      {user.rol === "admin" ? <div className="box-tokens-container-admin"> 
        <h2 className="code-title">Token</h2>
        <div>
          Usuario: {user.usuario_token}
        </div>     
        <button className="btn btn-color">Crear Token</button>
      </div> 
      :
      <div className="box-tokens-container">
      <h2 className="code-title">Token</h2>
      <form className="radio-token-container">
        <label key={user.id} className="token-lable">
          <input
            type="radio"
            className="radio-button"
            name="testCode"
            value={user.usario_token}
          />
          {user.usuario_token}
        </label>
        <button className="btn btn-color">Datos del Niño</button>
      </form>
    </div>
      }
    </>
  );
};
