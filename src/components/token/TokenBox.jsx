import "../../styles/users/token.css";
import { useLatestChild } from "../../context/ChildContext";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";

export const TokenBox = () => {
  const { userChildren } = useLatestChild();
  const { user } = useAuth();

  const arrayPosition = (userChildren, userId) => {
    if (!userChildren) {
      return -1;
    }
    const position = userChildren.findIndex(
      (child) => child.usuario_id === userId
    );
    return position;
  };

  const findPosition = arrayPosition(userChildren, user.id);
  // console.log(findPosition);

  let tokenNumber;

  if (findPosition >= 0) {
    tokenNumber = userChildren[findPosition]?.codigo_identificador;
  } else {
    tokenNumber = null;
  }

  const token1 = { tokenNumber }; // ASOCIAR A ENCUESTA X2
  const token2 = "########"; // CREAR EL MECANISMO DE TOKEN/TRAER TOKEN DE DATABASE Y ASOCIAR A ENCUESTA X2
  return (
    <div className="box-tokens-container">
      <h2 className="code-title">Códigos Disponibles</h2>

      <form className="radio-token-container">
        <label className="token-lable">
          <input
            type="radio"
            id="cbox1"
            className="radio-button"
            name="token"
            value={token1}
          />
          Token: {tokenNumber}
        </label>

        {/* <label className="token-lable">
          <input
            type="radio"
            id="cbox2"
            className="radio-button"
            name="token"
            value={token2}
          />
          Token: **************
        </label> */}
      </form>
      {/*DAR FUNCION AL BOTON DE CREAR TOKEN O ELIMINAR BOTON*/}
      {user && user.rol === "admin" ? (
        <button className="btn btn-color btn-add">+ Agregar Token</button>
        // AGREGAR FUNCIONALIDAD AL BOTON PARA AGREGAR TOKENS SEGUN ID DE USER
      ) : (
        <></>
      )}
    </div>
  );
};
