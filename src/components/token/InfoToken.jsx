import { useState } from "react";

export const InfoToken = () => {
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
    <div className="infotoken-main-container">
      <div className="btn-token-container">
        <button
          onClick={handleToggleCollapse}
          className="btn btn-outline btn-token-navigation"
        >
          Instrucciones
        </button>
        {collapsed ? null : (
          <>
            <p className="btn-info-text">
              Elija la opción adecuada para su caso: Si es la primera vez que
              diligencia la encuesta, haga click en crear usuario, de lo
              contrario, elija el token al que quiere acceder y a continuación,
              click en Aplicar test.
            </p>
          </>
        )}
      </div>

      <div className="btn-token-container">
        <button
          onClick={handleToggleCollapse2}
          className="btn btn-outline btn-token-navigation"
        >
          Información del Token
        </button>
        {collapsed2 ? null : (
          <>
            <p className="btn-info-text">
              Cada token tiene acceso a dos aplicaciones de la encuesta, por
              favor verifique en qué fase de aplicación se encuentra. Recuerde
              que la segunda aplicación se adjunta a los datos que se crearon en
              la primera.
            </p>
          </>
        )}
      </div>

      <div className="btn-token-container">
        <button
          onClick={handleToggleCollapse3}
          className="btn btn-outline btn-token-navigation"
        >
          Encuestas Diligenciadas
        </button>
        {collapsed3 ? null : (
          <>
            <p className="btn-info-text">
              Para acceder a la o las encuestas que ya diligenció, por favor
              elija el token y haga click en Ver resultados..
            </p>
          </>
        )}
      </div>
    </div>
  );
};
