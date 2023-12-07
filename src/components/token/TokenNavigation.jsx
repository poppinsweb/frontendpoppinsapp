import "../../styles/users/token.css";

export const TokenNavigation = () => {
  return (
    <div className="col-12 col-md-6">
      <div className="btn-token-navigation-container">
        <a href="/personales">
          <button className="btn btn-outline btn-token-navigation">Crear Usuario</button>
        </a>
        <br />
        <a href="/independencia">
          <button className="btn btn-outline btn-token-navigation"> Aplicar Test</button>
        </a>
        <br />
        <a href="/resultados">
          <button className="btn btn-outline btn-token-navigation">
            Ver Resultados / Imprimir
          </button>
        </a>
      </div>
    </div>
  );
};
