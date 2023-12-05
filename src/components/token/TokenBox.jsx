import "../../styles/token.css";
// import generateToken from "./GenerateToken";

function TokenBox() {
  // const token = generateToken(); comento el codigo para trabajarlo provisionalmente harcodeado
  const token = "########"; // TODO: CREAR EL MECANISMO DE TOKEN
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-md-10 umbrella-container">
          <img
            src="src/styles/images/UmbrellaFirst.png"
            alt="paraguas"
            className="logo-tokens"
          />
        </div>
      </div>
      <div className="row content-container">
        <div className="col-12 col-md-6 ">
          <div className="box-information-container">
            <h2>Códigos disponibles</h2>

            <form className="radio-token p-4">
              <label className="check-token">
                <input
                  className="input-token"
                  type="radio"
                  id="cbox1"
                  // value="first_checkbox"
                />
                Token: {token}
              </label>
              <label className="check-token">
                <input
                  className="input-token"
                  type="radio"
                  id="cbox2"
                  // value="second_checkbox"
                />
                Token: {token}
              </label>
            </form>
            {/* TODO: DAR FUNCION AL BOTON DE CREAR TOKEN */}
            <button className="btn btn-color btn-add">+ Agregar Token</button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="btn-token-container">
            <a href="/personales">
              <button className="btn btn-outline  btn-token">
                Crear Usuario
              </button>
            </a>
            <br />
            <a href="/independencia">
              <button className="btn btn-outline btn-token"> Aplicar Test</button>
            </a>
            <br />
            <a href="/resultados">
              <button className="btn btn-outline btn-token">
                Ver Resultados / Imprimir
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenBox;

/*pendiente el routeado de los botones y la generacion de los token por backend*/
