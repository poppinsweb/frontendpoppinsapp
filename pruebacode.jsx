import React, { useEffect, useState } from 'react';
import { useLatestChild } from "../../context/ChildContext";
import { useScores } from "../../context/ScoresContext";

// Definir las categorías y sus valores iniciales
const initialCategoryData = {
  "Independencia en el Baño": "",
  "Independencia en el Vestido": "",
  "Independencia en la Alimentación": "",
  "Independencia del Sueño": "",
  "Habilidades de Aseo Personal": "",
  "Habilidades del Vestido": "",
  "Habilidades en la Alimentación": "",
  "Habitos de alimentación": "",
  "Habitos de sueño": "",
  "Responsabilidades Personales y Escolares": "",
};

export const FinalScoreCard = () => {
  const [childAge, setChildAge] = useState({ years: 0, months: 0 });
  const { latestChild, updateLatestChild } = useLatestChild();
  const { independenceScores, getIndependenceScores } = useScores();
  const [categoryData, setCategoryData] = useState(initialCategoryData);

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

  useEffect(() => {
    if (latestChild) {
      // Aquí utilizamos la variable childId para obtener los scores de independencia
      getIndependenceScores(latestChild.id);
    }
  }, [latestChild]);

  useEffect(() => {
    // Actualizar los datos de las categorías cuando se obtengan los scores de independencia
    if (independenceScores) {
      setCategoryData({
        ...initialCategoryData,
        ...independenceScores,
      });
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
          {childAge.years}años {childAge.months} meses
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
              <td className="table-primary">{value}</td>
              <td className="table-success"></td>
              <td className="table-warning"></td>
              <td className="table-danger"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
