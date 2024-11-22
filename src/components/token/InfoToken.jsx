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
            <div className="btn-info-text">
              <p><strong>PRIMEROS PASOS:</strong></p>
              <ol>
                <li>Elija el TOKEN que tenga disponible</li>
                <li>Presione el botón "Datos del Niño"</li>
                <li>Diligencie todos los datos personales del niño</li>
                <li>
                  Acepte la autorización para el tratamiento de datos personales
                </li>
                <li>
                  Al presionar "Enviar" será redirigido de nuevo a esta página,
                  entonces siga las instrucciones siguientes
                </li>
              </ol>
              <p><strong>
                PARA USUARIOS QUE YA DILIGENCIARON LOS DATOS PERSONALES DEL
                NIÑO:
              </strong></p>
              <ol>
                <li>Elija el TOKEN que ya contiene los datos del niño</li>
                <li>
                  Si es la primera vez que llena la encuesta con este TOKEN,
                  podrá presionar el botón "Ir a Encuesta", lo cual le llevará
                  al inicio de ésta.
                </li>
                <li>
                  Por favor disponga de aproximadamente 20 a 30 minutos para
                  diligenciar todas las preguntas (51 en total)
                </li>
              </ol>
              <p><strong>PARA USUARIOS QUE YA DILIGENCIARON LA PRIMERA ENCUESTA:</strong></p>
              <ol>
                <li>
                  Para diligenciar la segunda aplicación de la encuesta,
                  presione el botón "Ir a Encuesta", al finalizar se activarán
                  los resultados de esta
                </li>
                <li>
                  Recuerde que tiene un plazo máximo de 6 meses para esta
                  segunda aplicación de la encuesta
                </li>
              </ol>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
