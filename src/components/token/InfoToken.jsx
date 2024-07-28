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
          Instrucciones abrir/cerrar
        </button>
        {collapsed ? null : (
          <>
            <p className="btn-info-text">
            PARA USUARIOS NUEVOS:
              <ol>
                <li>Elija el TOKEN que tenga disponible</li>
                <li>Presione el botón "Datos del Niño"</li> 
                <li>Diligencie todos los datos personales del niño</li>
                <li>Acepte la autorización para el tratamiento de datos personales</li>
                <li>Al presionar "Enviar" será redirigido de nuevo a esta página, entonces siga las instrucciones del 6 al 11</li>
              </ol>
              <p>PARA USUARIOS QUE YA DILIGENCIARON LOS DATOS PERSONALES DEL NIÑO:</p>
              <ol start={6}>
                <li>Elija el TOKEN que ya contiene los datos del niño</li>
                <li>Si es la primera vez que llena la encuesta con este TOKEN, podrá presionar el botón "Ir a Encuesta", lo cual le llevará al inicio de ésta.</li>
                <li>Por favor disponga de aproximadamente 20 a 30 minutos para diligenciar todas las preguntas (51 en total)</li>
                <li>Es MUY IMPORTANTE que la persona que diligencia la encuesta conozca bien al niño y sea honesta con las respuestas</li>
                <li>Al finalizar el diligenciamiento será redirigido de nuevo a esta página, y se activará el botón "Consultar Resultados #1"</li>
                <li>Por favor esté pendiente para diligenciar la encuesta de seguimiento en un tiempo entre 5 y 6 meses. Para ello, siga las instrucciones de la 12 a la 15</li>
              </ol>
            </p>
          </>
        )}
      </div>
    </div>
  );
};
