import "../../styles/users/token.css";

export const TokenBox= () => {
  const token = "########"; // TODO: CREAR EL MECANISMO DE TOKEN
  return (
    // <div className="container-fluid">
      <div className="box-tokens-container">
        <h2>Códigos disponibles</h2>
        <form className="radio-token-container">
          {/* TODO: CHECKEAR UNA SOLA OPCION */}
          <label>
            <input
              // className="input-token"
              type="radio"
              id="cbox1"
              // value="first_checkbox"
            />
            Token: { token }
          </label>
          <label>
            <input
              // className="input-token"
              type="radio"
              id="cbox2"
              // value="second_checkbox"
            />
            Token: { token }
          </label>
        </form>
        {/* TODO: DAR FUNCION AL BOTON DE CREAR TOKEN */}
        <button className="btn btn-color btn-add">+ Agregar Token</button>
      </div>
    // </div>
  );
}
