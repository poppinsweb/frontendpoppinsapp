import { useState } from "react";

export function NavToken() {
  const [collapsed, setCollapsed] = useState(true);
  const [collapsed2, setCollapsed2] = useState(true);
  const [collapsed3, setCollapsed3] = useState(true);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleCollapse2 = () => {
    setCollapsed2(!collapsed2);
  };

  const handleToggleCollapse3 = () => {
    setCollapsed3(!collapsed3);
  };

  return (
    <>
      <div className="btn-nav-container">
        <button
          onClick={handleToggleCollapse}
          className="btn btn-outline-secondary btn-nav-token"
        >
          Instrucciones
        </button>
        <button
          onClick={handleToggleCollapse2}
          className="btn btn-outline-secondary btn-nav-token"
        >
          Información del Token
        </button>
        <button
          onClick={handleToggleCollapse3}
          className="btn btn-outline-secondary btn-nav-token"
        >
          Encuestas Diligenciadas
        </button>

        {collapsed ? null : (
          <>
            <div className="target-token" id="multiCollapseExample1">
              <p className="btn-token-option">
                Elija la opción adecuada para su caso: Si es la primera vez que
                diligencia la encuesta, haga click en crear usuario, de lo
                contrario, elija el token al que quiere acceder y a continuación, click en Aplicar test.
              </p>
            </div>
          </>
        )}
        {collapsed2 ? null : (
          <>
            <div className="target-token2" id="multiCollapseExample2">
              <p className="btn-token-option">Cada token tiene acceso a dos aplicaciones de la encuesta, por favor verifique en qué fase de aplicación se encuentra. Recuerde que la segunda aplicación se adjunta a los datos que se crearon en la primera.</p>
            </div>
          </>
        )}
        {collapsed3 ? null : (
          <>
            <div className="target-token3" id="multiCollapseExample3">
              <p className="btn-token-option">Para acceder a la o las encuestas que ya diligenció, por favor elija el token y haga click en Ver resultados..</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default NavToken;
