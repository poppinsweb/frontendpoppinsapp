import "../../styles/users/token.css";

export const TokenNavigation = () => {
  return (
    <div className="navitoken-main-container">
      <div className="btn-token-container">
        <a href="/independencia">
          <button className="btn btn-outline btn-token-navigation" disabled={true}>
            Encuesta Inicial
          </button>
        </a>
      </div>
      <div className="btn-token-container">
        <a href="/independencia">
          <button className="btn btn-outline btn-token-navigation" disabled={false}> 
            Encuesta Final
          </button>
          {/* HAY QUE CREAR CONDICIONAL PARA ACTIVAR BOTON SEGUN PRIMERA O SEGUNDA ENCUESTA */}
        </a>
      </div>
      <div className="btn-token-container">
        <a href="/resultados">
          <button className="btn btn-outline btn-token-navigation" disabled={false}>
            Ver Resultados / Imprimir
            {/* OJO QUE LA ENCUESTA DEBE ESTAR COMPLETA PARA ESCOGER ESTA OPCION */}
          </button>
        </a>
      </div>
    </div>
  );
};
