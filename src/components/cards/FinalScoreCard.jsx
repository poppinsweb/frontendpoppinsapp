import "../../styles/users/result.css";

export default function FinalScoreCard() {
  
  // TRAER LA TABLA DE RESPUESTAS Y TRANSFORMAR EL DATO NUMERICO EN UN SIMBOLO QUE SE UBIQUE EL EL COLOR CORRESPONDIENTE
  // HAY QUE PROMEDIAR LOS PUNTAJES?

  
  return (
    <div className='question-container'>
      <h1 className="main-title">Poppins Resultados</h1>
      <div className="header-container">
        <p>Nombre: Cosme Fulanita</p>
        <p>Edad: 2 años 3 meses</p>
        <p>Sexo: Femenino</p>
        <p>Grado: Maternal</p>
        <p>Código: CF20211012</p>
      </div>
      <table className="table table-hover ">
        <thead className="result-titles">
          <tr>
            <th>CATEGORIA</th>
            <th className="table-primary">AZUL </th>
            <th className="table-success">VERDE </th>
            <th className="table-warning">NARANJA </th>
            <th className="table-danger">ROJO </th>
          </tr>
        </thead>
        <tbody className="result-titles">
          <tr >
            <td>Independencia</td>
            <td className="table-primary">*</td>
            <td className="table-success"></td>
            <td className="table-warning"></td>
            <td className="table-danger"></td>
          </tr>
          <tr>
            <td>Habilidades de aseo</td>
            <td className="table-primary"></td>
            <td className="table-success">*</td>
            <td className="table-warning"></td>
            <td className="table-danger"></td>
          </tr>
          <tr>
            <td>Habilidades de vestido</td>
            <td className="table-primary"></td>
            <td className="table-success">*</td>
            <td className="table-warning"></td>
            <td className="table-danger"></td>
          </tr>
          <tr>
            <td>Habilidades de alimentación</td>
            <td className="table-primary"></td>
            <td className="table-success"></td>
            <td className="table-warning">*</td>
            <td className="table-danger"></td>
          </tr>
          <tr>
            <td>Habitos de alimentación</td>
            <td className="table-primary"></td>
            <td className="table-success"></td>
            <td className="table-warning"></td>
            <td className="table-danger">*</td>
          </tr>
          <tr>
            <td>Habitos de sueño</td>
            <td className="table-primary"></td>
            <td className="table-success"></td>
            <td className="table-warning">*</td>
            <td className="table-danger"></td>
          </tr>
          <tr>
            <td>Responsabilidades</td>
            <td className="table-primary"></td>
            <td className="table-success">*</td>
            <td className="table-warning"></td>
            <td className="table-danger"></td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
}


// TRAER NOMBRES, APELLIDOS, EDAD, SEXO, GRADO Y EL CODIGO DEL NIÑO COMO ENCABEZADO
// LISTADO DE ITEMS EVALUADOS
// UBICACION DE LOS PUNTAJES EN UNA DE TRES COLUMNAS (TABLA) SEGUN CONVENCION DE COLORES
// ESPECIFICAR SI ES PRIMERA O SEGUNDA ENCUESTA
// BOTON PARA IMPRIMIR Y/O BOTON PARA DESCARGAR
// LINK A RECOMENDACIONES ESPECIFICAS?
// CODIGO PARA CONDICIONAR LA APARICION DE LOS SIMBOLOS EN LA CASILLA CORRESPONDIENTE A LA PUNTUACION


// {
//   dataChildren.map( ({idinfantes, name, lastName}) => {
//     return(
//       <tr key={idinfantes}>
//         <td>{idinfantes}</td> 
//         <td>{name}</td> 
//         <td>{lastName}</td> 
//       </tr>
//     )
//   } )
// }