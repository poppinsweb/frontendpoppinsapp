import "../../styles/users/result.css";

const categories = [
  "Independencia en el Baño",
  "Independencia en el Vestido",
  "Independencia en la Alimentación",
  "Independencia del Sueño",
  "Habilidades de Aseo Personal",
  "Habilidades del Vestido",
  "Habilidades en la Alimentación",
  "Habitos de alimentación",
  "Habitos de sueño",
  "Responsabilidades Personales y Escolares",
];

export const FinalScoreCard = () => {
  // TRAER LA TABLA DE RESPUESTAS Y TRANSFORMAR EL DATO NUMERICO EN UN SIMBOLO QUE SE UBIQUE EL EL COLOR CORRESPONDIENTE
  // HAY QUE PROMEDIAR LOS PUNTAJES?
  return (
    <div className="results-container">
      <h1 className="main-title">Poppins Resultados</h1>
      <div className="header-container">
        <p>
          <strong>Nombre:</strong>
        </p>
        <p>
          <strong>Edad:</strong>
        </p>
        <p>
          <strong>Sexo:</strong>
        </p>
        <p>
          <strong>Grado:</strong>
        </p>
        <p>
          <strong>Código:</strong>
        </p>
      </div>
      <table className="table table-hover">
        <thead className="result-titles">
          <tr>
            <th>CATEGORIA</th>
            <th className="table-primary">ESPERADO</th>
            <th className="table-success">ACEPTABLE</th>
            <th className="table-warning">INSUFICIENTE</th>
            <th className="table-danger">DEFICIENTE</th>
          </tr>
        </thead>
        <tbody className="result-titles">
          {categories.map((category, index) => (
            <tr key={index}>
              <td>{category}</td>
              <td className="table-primary"></td>
              <td className="table-success"></td>
              <td className="table-warning"></td>
              <td className="table-danger"></td>
            </tr>
          ))}
        </tbody>
      </table>
      DESCARGAR IMPRIMIR
    </div>
  );
};


// TRAER NOMBRES, APELLIDOS, EDAD, SEXO, GRADO Y EL CODIGO DEL NIÑO COMO ENCABEZADO
// LISTADO DE ITEMS EVALUADOS **
// UBICACION DE LOS PUNTAJES EN UNA DE TRES COLUMNAS (TABLA) SEGUN CONVENCION DE COLORES
// ESPECIFICAR SI ES PRIMERA O SEGUNDA ENCUESTA
// BOTON PARA IMPRIMIR Y/O BOTON PARA DESCARGAR
// LINK A RECOMENDACIONES ESPECIFICAS?
// CODIGO PARA CONDICIONAR LA APARICION DE LOS SIMBOLOS EN LA CASILLA CORRESPONDIENTE A LA PUNTUACION
