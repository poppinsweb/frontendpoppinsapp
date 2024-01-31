import "../../styles/users/result.css";
import { useLatestChild } from "../../context/ChildContext";
import { useEffect, useState } from "react";

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
  const [childAge, setChildAge] = useState({ years: 0, months: 0 });
  const { latestChild, updateLatestChild } = useLatestChild();

  useEffect(() => {
    const loadInitialData = async () => {
      await updateLatestChild();
    };
    loadInitialData();
  }, []);

  useEffect(() => {
    const yearsMonthsCalc = (birthDay, todaysDay) => {
      const birthDayObj = new Date(birthDay);
      const todaysDayObj = new Date(todaysDay);

      const milisecsDiff = todaysDayObj - birthDayObj;

      const years = Math.floor(milisecsDiff / (365.25 * 24 * 60 * 60 * 1000));
      const remainingMilisecs = milisecsDiff % (365.25 * 24 * 60 * 60 * 1000);
      const months = Math.floor(
        remainingMilisecs / (30.44 * 24 * 60 * 60 * 1000)
      );
      setChildAge({ years, months });
    };

    if (latestChild?.fecha_nacimiento && latestChild?.fecha_actual) {
      yearsMonthsCalc(latestChild.fecha_nacimiento, latestChild.fecha_actual);
    }
  }, [latestChild]);

  const childName = latestChild?.nombres || "null";
  const childLastName = latestChild?.apellidos || "null";
  const childGender = latestChild?.sexo || "null";
  const childGrade = latestChild?.grado || "null";
  const childCode = latestChild?.codigo_identificador || "null";
  // console.log(childAge);
  // console.log(latestChild);
  return (
    <div className="results-container">
      <h1 className="main-title">Poppins Resultados</h1>
      <div className="header-container">
        <p>
          <strong>Nombre: </strong>
          {childName} {childLastName}
        </p>
        <p>
          <strong>Edad: </strong>
          {childAge.years}años {childAge.months} meses
        </p>
        <p>
          <strong>Sexo: </strong>
          {childGender}
        </p>
        <p>
          <strong>Grado: </strong>
          {childGrade}
        </p>
        <p>
          <strong>Código: </strong>
          {childCode}
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
      DESCARGAR___ ___ IMPRIMIR
    </div>
  );
};

// LISTADO DE ITEMS EVALUADOS **
// UBICACION DE LOS PUNTAJES EN UNA DE TRES COLUMNAS (TABLA) SEGUN CONVENCION DE COLORES
// ESPECIFICAR SI ES PRIMERA O SEGUNDA ENCUESTA
// BOTON PARA IMPRIMIR Y/O BOTON PARA DESCARGAR
// LINK A RECOMENDACIONES ESPECIFICAS?
// CODIGO PARA CONDICIONAR LA APARICION DE LOS SIMBOLOS EN LA CASILLA CORRESPONDIENTE A LA PUNTUACION
// TRAER LA TABLA DE RESPUESTAS Y TRANSFORMAR EL DATO NUMERICO EN UN SIMBOLO QUE SE UBIQUE EL EL COLOR CORRESPONDIENTE
// HAY QUE PROMEDIAR LOS PUNTAJES? sipi
