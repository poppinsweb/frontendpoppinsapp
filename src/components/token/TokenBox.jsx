import "../../styles/users/token.css";

export const TokenBox= () => {

  const handleChange = () => {
    console.log("probando input de token")
  }

  const token = "########"; // CREAR EL MECANISMO DE TOKEN/TRAER TOKEN DE FIREBASE Y ASOCIAR A ENCUESTA X2
  return (
      <div className="box-tokens-container">
        <h2>Códigos disponibles</h2>
        <form className="radio-token-container">
          {/* TODO: CHECKEAR UNA SOLA OPCION */}
          <label>
            <input
              type="radio"
              id="cbox1"
            />
            Token: { token }
          </label>
          <label>
            <input
              type="radio"
              id="cbox2"
            />
            Token: { token }
          </label>
        </form>
        {/*DAR FUNCION AL BOTON DE CREAR TOKEN O ELIMINAR BOTON*/}
        <button className="btn btn-color btn-add">+ Agregar Token</button>
      </div>
  );
}
