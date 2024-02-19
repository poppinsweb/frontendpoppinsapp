import React, { useEffect, useState, useContext } from 'react';
import { useScores } from './useScores'; // Importa el contexto useScores

const YourComponent = () => {
  const { independenceScores, getIndependenceScores, latestChild } = useScores(); // Desestructura independenceScores y getIndependenceScores desde el contexto

  const [categoryData, setCategoryData] = useState({}); // Define el estado para categoryData

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
    }
  }, [latestChild, getIndependenceScores]);

  // Actualiza initialCategoryData con independenceScores
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
          {Object.entries(categoryData).map(([category, value], index) => (
            <tr key={index}>
              <td>{category}</td>
              {value === 4 ? (
                <td className="table-primary">{value}</td>
              ) : <td className="table-primary"></td>}
              {value === 3 ? (
              <td className="table-success">{value}</td>
              ) : <td className="table-success"></td>}
              {value === 2 ? (
              <td className="table-warning">{value}</td>
              ) : <td className="table-warning"></td>}
              {value === 1 || value === 0 ? (
              <td className="table-danger">{value}</td>
              ) : <td className="table-danger"></td>}
            </tr>
          ))}
        </tbody>
      </table>
      DESCARGAR___ ___ IMPRIMIR
    </div>
  );
};

export default YourComponent;

  
// HAY QUE SUMAR Y PROMEDIAR LOS PUNTAJES DE CADA CARD!!!!
// LA PETICION SE ESTA ENVIANDO MIENTRAS EL CODIGO CORRE, POR LA LINEA 65