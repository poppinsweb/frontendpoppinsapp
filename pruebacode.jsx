import "../../styles/users/result.css";
import { useLatestChild } from "../../context/ChildContext";
import { useEffect, useState } from "react";
import { useScores } from "../../context/ScoresContext";

const initialindependenceData = {
  0: "id",
  1: "Independencia en el Baño",
  2: "Independencia en el Vestido",
  3: "Independencia en la Alimentación",
  4: "Independencia del Sueño",
  // 5: "Habilidades de Aseo Personal",
  // 6: "Habilidades del Vestido",
  // 7: "Habilidades en la Alimentación",
  // 8: "Habitos de alimentación",
  // 9: "Habitos de sueño",
  // 10: "Responsabilidades Personales y Escolares",
};

const initialskillGroomData = {
  0: "id",
  1: "Habilidades de Aseo Personal"
}

// const categoryArray = Object.values(initialindependenceData);

export const FinalScoreCard = () => {
  const { latestChild, updateLatestChild } = useLatestChild();
  const {
    independenceScores,
    getIndependenceScores,
    getSkillsGroomingScores,
    skillGroomingScores,
  } = useScores();
  const [independenceData, setIndependenceData] = useState({});
  const [skillGroomData, setSkillGroomData] = useState({});

  // console.log(independenceScores);
  // console.log(skillGroomingScores);

  // EVITA ERRORES CUANDO NO HAY DATOS MIENTRAS SE COMPLETA LA FUNC ASINCRONA
  useEffect(() => {
    const loadInitialData = async () => {
      await updateLatestChild();
    };
    loadInitialData();
  }, []);

  // TRAE LOS SCORES DE INDEPENDENCIA
  useEffect(() => {
    if (latestChild && !independenceScores) {
      getIndependenceScores(latestChild.id);
    }
  }, [latestChild, getIndependenceScores]); // 

  useEffect(() => {
    if (independenceScores) {
      setIndependenceData(independenceScores);
    }
  }, [independenceScores]);


  // TRAE LOS SCORES DE habilaseo
  useEffect(() => {
    if (latestChild && !skillGroomingScores) {
      getSkillsGroomingScores(latestChild.id);
    }
  }, [latestChild, getSkillsGroomingScores]); // 

  useEffect(() => {
    if (skillGroomingScores) {
      setIndependenceData((prevData) => ({
        ...prevData,
        skillGroomingScores,
      }));
    }
  }, [skillGroomingScores]);

  console.log(skillGroomingScores);

  return (
    <>
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
          {Object.entries(independenceData).map(([categoryIndex, value], index) => {
            const category = initialindependenceData[categoryIndex];
            if (index !== 0 && index != 5)
              return (
                <tr key={categoryIndex}>
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
    </>
  );
};

// LISTADO DE ITEMS EVALUADOS **
// UBICACION DE LOS PUNTAJES EN UNA DE TRES COLUMNAS (TABLA) SEGUN CONVENCION DE COLORES **
// ESPECIFICAR SI ES PRIMERA O SEGUNDA ENCUESTA
// BOTON PARA IMPRIMIR Y/O BOTON PARA DESCARGAR
// LINK A RECOMENDACIONES ESPECIFICAS?
// CODIGO PARA CONDICIONAR LA APARICION DE LOS SIMBOLOS EN LA CASILLA CORRESPONDIENTE A LA PUNTUACION
// TRAER LA TABLA DE RESPUESTAS Y TRANSFORMAR EL DATO NUMERICO EN UN SIMBOLO QUE SE UBIQUE EL EL COLOR CORRESPONDIENTE
// HAY QUE PROMEDIAR LOS PUNTAJES? sipi
