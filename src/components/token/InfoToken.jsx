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
    <>
      <div className="btn-info-container">
        <div className="info-btninfo">
          <button
            onClick={handleToggleCollapse}
            className="btn btn-outline-secondary btn-info-token">
            Instrucciones
          </button>
          {collapsed ? null : (
            <>
              <p className='btn-info-text'>
                Elija la opción adecuada para su caso: Si es la primera vez que
                diligencia la encuesta, haga click en crear usuario, de lo
                contrario, elija el token al que quiere acceder y a continuación,
                click en Aplicar test.
              </p>
            </>
          )}
        </div>
        
        <div className="info-btninfo">
          <button
            onClick={handleToggleCollapse2}
            className="btn btn-outline-secondary btn-info-token">
            Información del Token
          </button>
          {collapsed2 ? null : (
            <>
              <p className='btn-info-text'>
                Cada token tiene acceso a dos aplicaciones de la encuesta, por
                favor verifique en qué fase de aplicación se encuentra. Recuerde
                que la segunda aplicación se adjunta a los datos que se crearon en
                la primera.
              </p>
            </>
          )}
        </div>

        <div className="info-btninfo">
          <button
            onClick={handleToggleCollapse3}
            className="btn btn-outline-secondary btn-info-token">
            Encuestas Diligenciadas
          </button>
            {collapsed3 ? null : (
            <>
              <p className='btn-info-text'>
                Para acceder a la o las encuestas que ya diligenció, por favor
                elija el token y haga click en Ver resultados..
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};
