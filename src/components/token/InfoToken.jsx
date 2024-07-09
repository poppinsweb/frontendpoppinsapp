import { useState } from "react";

export const InfoToken = () => {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
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
              1. Elija la opción adecuada para su caso: Si es la primera vez que
              diligencia la encuesta, llene los datos del niño, de lo
              contrario, elija el token al que quiere acceder y a continuación,
              click en Encuesta Inicial.
            </p>
            <p className="btn-info-text">
              2. Cada token tiene acceso a dos aplicaciones de la encuesta, por
              favor verifique en qué fase de aplicación se encuentra. Recuerde
              que la segunda aplicación se adjunta a los datos que se crearon en
              la primera.
            </p>
            <p className="btn-info-text">
              3. Son alrededor de 50 preguntas, por favor tómese su tiempo para responder y verifique que cada pregunta tuvo respuesta antes de oprimir el botón Siguiente.
            </p>
          </>
        )}
      </div>
    </div>
  );
};
