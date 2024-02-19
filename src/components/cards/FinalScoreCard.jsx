import "../../styles/users/result.css";
import { useLatestChild } from "../../context/ChildContext";
import { useEffect, useState } from "react";
import { useScores } from "../../context/ScoresContext";

const initialCategoryData = {
  0: "Independencia en el Baño",
  1: "Independencia en el Vestido",
  2: "Independencia en la Alimentación",
  3: "Independencia del Sueño",
  4: "Habilidades de Aseo Personal",
  5: "Habilidades del Vestido",
  6: "Habilidades en la Alimentación",
  7: "Habitos de alimentación",
  8: "Habitos de sueño",
  9: "Responsabilidades Personales y Escolares",
};

const categoryArray = Object.values(initialCategoryData);

export const FinalScoreCard = () => {
  const [childAge, setChildAge] = useState({ years: 0, months: 0 });
  const { latestChild, updateLatestChild } = useLatestChild();
  const { independenceScores, getIndependenceScores } = useScores();
  const [categoryData, setCategoryData] = useState({});

  // EVITA ERRORES CUANDO NO HAY DATOS MIENTRAS SE COMPLETA LA FUNC ASINCRONA
  useEffect(() => {
    const loadInitialData = async () => {
      await updateLatestChild();
    };
    loadInitialData();
  }, []);

  // CALCULA LA EDAD EN ANIOS Y MESES
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

  // TRAE LOS SCORES DE INDEPENDENCIA
  useEffect(() => {
    if (latestChild) {
      getIndependenceScores(latestChild.id);
      setCategoryData({
        ...categoryData,
      });
    }
  }, [latestChild, getIndependenceScores]);

  useEffect(() => {
    if (independenceScores) {
      setCategoryData(independenceScores);
    }
  }, [independenceScores]);

  return (
    <div className="results-container">
      <h1 className="main-title">Poppins Resultados</h1>
      <div className="header-container">
        <p>
          <strong>Nombre: </strong>
          {latestChild?.nombres} {latestChild?.apellidos}
        </p>
        <p>
          <strong>Edad: </strong>
          {childAge.years} años {childAge.months} meses
        </p>
        <p>
          <strong>Sexo: </strong>
          {latestChild?.sexo}
        </p>
        <p>
          <strong>Grado: </strong>
          {latestChild?.grado}
        </p>
        <p>
          <strong>Código: </strong>
          {latestChild?.codigo_identificador}
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
          {/* {Object.entries(categoryData).map(([category, value], index) => ( */}
          {Object.entries(categoryData).map(([categoryIndex, value], index) => {
            const category = initialCategoryData[categoryIndex];
            return (
              <tr key={index}>
                <td>{category}</td>
                {value === 4 ? (
                  <td className="table-primary">{value}</td>
                ) : (
                  <td className="table-primary"></td>
                )}
                {value === 3 ? (
                  <td className="table-success">{value}</td>
                ) : (
                  <td className="table-success"></td>
                )}
                {value === 2 ? (
                  <td className="table-warning">{value}</td>
                ) : (
                  <td className="table-warning"></td>
                )}
                {value === 1 || value === 0 ? (
                  <td className="table-danger">{value}</td>
                ) : (
                  <td className="table-danger"></td>
                )}
              </tr>
            );
          })}
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
