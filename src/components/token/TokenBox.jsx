import "../../styles/users/token.css";
import { useAuth } from "../../context/AuthProvider";

export const TokenBox = () => {
  const { user, allUsers } = useAuth();

  // CREAR EL MECANISMO DE ASOCIAR A ENCUESTA X2
  return (
    <div className="box-tokens-container">
      <h2 className="code-title">Código de la Encuesta</h2>
      <form className="radio-token-container">
        {allUsers && allUsers.map((userData, index) => (
        <label key={index} className="token-lable">
          <input
            type="radio"
            className="radio-button"
            name="testCode"
            value={userData.codigoEncuesta}
          />
          Código: {userData.codigoEncuesta}
        </label>
        ))}
      </form>
      {user && user.rol === "admin" ? (
        <button className="btn btn-color btn-add">+ Agregar Token</button>
      ) : (
        // AGREGAR FUNCIONALIDAD AL BOTON PARA AGREGAR TOKENS SEGUN ID DE USER
        <></>
      )}
    </div>
  );
};
