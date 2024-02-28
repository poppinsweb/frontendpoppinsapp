import "../../styles/users/result.css";
import { useLatestChild } from "../../context/ChildContext";
import { useEffect, useState } from "react";
import { useScores } from "../../context/ScoresContext";

export const FinalScoreCard = () => {
  const { latestChild, updateLatestChild } = useLatestChild();
  const {
    independenceScores,
    getIndependenceScores,
    skillGroomingScores,
    getSkillsGroomingScores,
  } = useScores();
  const [independenceData, setIndependenceData] = useState({});
  const [skillGroomingData, setSkillGromingData] = useState({});

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
    if (latestChild && !independenceScores && !skillGroomingScores) {
      getIndependenceScores(latestChild.id);
      getSkillsGroomingScores(latestChild.id);
    }
  }, [latestChild, getIndependenceScores, getSkillsGroomingScores]); //

  useEffect(() => {
    if (independenceScores || skillGroomingScores) {
      setIndependenceData(independenceScores);
      setSkillGromingData(skillGroomingScores);
    }
  }, [independenceScores, skillGroomingScores]);

  // console.log(independenceData[5]);
  // console.log(skillGroomingData[10]);
  // console.log(skillGromingScore);

  const independenceScore = independenceData && independenceData[5] ? independenceData[5] / 4 : 0;
  const rawSkillGromingScore = skillGroomingData && skillGroomingData[10] ? skillGroomingData[10] / 9 : 0;
  const skillGromingScore = rawSkillGromingScore.toFixed(0);

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
          <tr>
            <td>Independencia</td>
            {independenceScore == 4 ? (
              <td className="table-primary">{independenceScore}</td>
            ) : (
              <td className="table-primary"></td>
            )}
            {independenceScore == 3 ? (
              <td className="table-success">{independenceScore}</td>
            ) : (
              <td className="table-success"></td>
            )}
            {independenceScore == 2 ? (
              <td className="table-warning">{independenceScore}</td>
            ) : (
              <td className="table-warning"></td>
            )}
            {independenceScore == 1 ? (
              <td className="table-danger">{independenceScore}</td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Habilidades del Aseo Personal</td>
            {skillGromingScore == 4 ? (
              <td className="table-primary">{skillGromingScore}</td>
            ) : (
              <td className="table-primary"></td>
            )}
            {skillGromingScore == 3 ? (
              <td className="table-success">{skillGromingScore}</td>
            ) : (
              <td className="table-success"></td>
            )}
            {skillGromingScore == 2 ? (
              <td className="table-warning">{skillGromingScore}</td>
            ) : (
              <td className="table-warning"></td>
            )}
            {skillGromingScore == 1 ? (
              <td className="table-danger">{skillGromingScore}</td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Habilidades del Vestido</td>
            {independenceScore == 4 ? (
              <td className="table-primary">{}</td>
            ) : (
              <td className="table-primary"></td>
            )}
            {independenceScore == 3 ? (
              <td className="table-success">{}</td>
            ) : (
              <td className="table-success"></td>
            )}
            {independenceScore == 2 ? (
              <td className="table-warning">{}</td>
            ) : (
              <td className="table-warning"></td>
            )}
            {independenceScore == 1 ? (
              <td className="table-danger">{}</td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Habilidades de la Alimentación</td>
            {independenceScore == 4 ? (
              <td className="table-primary">{}</td>
            ) : (
              <td className="table-primary"></td>
            )}
            {independenceScore == 3 ? (
              <td className="table-success">{}</td>
            ) : (
              <td className="table-success"></td>
            )}
            {independenceScore == 2 ? (
              <td className="table-warning">{}</td>
            ) : (
              <td className="table-warning"></td>
            )}
            {independenceScore == 1 ? (
              <td className="table-danger">{}</td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Hábitos de Alimentación</td>
            {independenceScore == 4 ? (
              <td className="table-primary">{}</td>
            ) : (
              <td className="table-primary"></td>
            )}
            {independenceScore == 3 ? (
              <td className="table-success">{}</td>
            ) : (
              <td className="table-success"></td>
            )}
            {independenceScore == 2 ? (
              <td className="table-warning">{}</td>
            ) : (
              <td className="table-warning"></td>
            )}
            {independenceScore == 1 ? (
              <td className="table-danger">{}</td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Hábitos de Sueño</td>
            {independenceScore == 4 ? (
              <td className="table-primary">{}</td>
            ) : (
              <td className="table-primary"></td>
            )}
            {independenceScore == 3 ? (
              <td className="table-success">{}</td>
            ) : (
              <td className="table-success"></td>
            )}
            {independenceScore == 2 ? (
              <td className="table-warning">{}</td>
            ) : (
              <td className="table-warning"></td>
            )}
            {independenceScore == 1 ? (
              <td className="table-danger">{}</td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Responsabilidades Personales y Escolares</td>
            {independenceScore == 4 ? (
              <td className="table-primary">{}</td>
            ) : (
              <td className="table-primary"></td>
            )}
            {independenceScore == 3 ? (
              <td className="table-success">{}</td>
            ) : (
              <td className="table-success"></td>
            )}
            {independenceScore == 2 ? (
              <td className="table-warning">{}</td>
            ) : (
              <td className="table-warning"></td>
            )}
            {independenceScore == 1 ? (
              <td className="table-danger">{}</td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
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
