import "../../styles/users/token.css";
import { useAuth } from "../../context/AuthProvider";
import { useState, useEffect } from "react";

export const TokenBox = () => {
  const [radio, setRadio] = useState(null);
  const { user } = useAuth();

  const alert = () => {
    console.log("click");
  };

  useEffect(() => {
    setRadio(user.usuario_token);
  }, []);
  console.log(user);

  // CREAR EL MECANISMO DE ASOCIAR A ENCUESTA X2
  return (
    <div className="box-tokens-container">
      {user && user.rol === "admin" ? (
        <button className="btn btn-color btn-add" onClick={alert}>
          + Crear Token
        </button>
      ) : (
        <>
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
            <button className="btn btn-outline btn-token-navigation">
            Encuesta Final
          </button>
          </form>
        </>
      )}
    </div>
  );
};
