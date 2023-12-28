import "../../styles/users/token.css";

export const TokenNavigation = () => {
  return (
    <div className="navitoken-main-container">
      <div className="btn-token-container">
        <a href="/personales">
          <button className="btn btn-outline btn-token-navigation">
            Crear Usuario
          </button>
        </a>
      </div>
      <div className="btn-token-container">
        <a href="/independencia">
          <button className="btn btn-outline btn-token-navigation">
            Aplicar Test
          </button>
          {/* OJO QUE EL USUARIO YA DEBE ESTAR CREADO PARA ESCOGER ESTA OPCION */}
        </a>
      </div>
      <div className="btn-token-container">
        <a href="/resultados">
          <button className="btn btn-outline btn-token-navigation">
            Ver Resultados / Imprimir
            {/* OJO QUE LA ENCUESTA DEBE ESTAR COMPLETA PARA ESCOGER ESTA OPCION */}
          </button>
        </a>
      </div>
    </div>
  );
};
