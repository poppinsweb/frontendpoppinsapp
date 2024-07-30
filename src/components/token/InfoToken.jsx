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
          className="btn btn-outline-secondary btn-token-navigation"
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
                <li>Al presionar "Enviar" será redirigido de nuevo a esta página, entonces siga las instrucciones siguientes</li>
              </ol>
              <p>PARA USUARIOS QUE YA DILIGENCIARON LOS DATOS PERSONALES DEL NIÑO:</p>
              <ol>
                <li>Elija el TOKEN que ya contiene los datos del niño</li>
                <li>Si es la primera vez que llena la encuesta con este TOKEN, podrá presionar el botón "Ir a Encuesta", lo cual le llevará al inicio de ésta.</li>
                <li>Por favor disponga de aproximadamente 20 a 30 minutos para diligenciar todas las preguntas (51 en total)</li>
                <li>Es MUY IMPORTANTE que la persona que diligencia la encuesta conozca bien al niño y sea honesta con las respuestas</li>
                <li>Al finalizar el diligenciamiento encontrará los resultados en la pestaña: consultar los resultados -primera aplicación</li>
                <li>Para diligenciar la segunda aplicación, o seguimiento, tiene un plazo máximo de 6 meses</li>
              </ol>
            </p>
          </>
        )}
      </div>
    </div>
  );
};
