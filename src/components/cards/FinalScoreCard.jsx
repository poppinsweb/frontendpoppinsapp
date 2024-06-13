// import "../../styles/users/result.css";
// import { useLatestChild } from "../../context/ChildContext";
// import { useEffect, useState } from "react";
// import { useScores } from "../../context/ScoresContext";

// export const FinalScoreCard = () => {
//   const { latestChild, updateLatestChild } = useLatestChild();
//   const {
//     independenceScores,
//     getIndependenceScores,
//     skillGroomingScores,
//     getSkillsGroomingScores,
//     skillDressingScores,
//     getSkillsDressingScores,
//     skillFeedingScores,
//     getSkillsFeedingScores,
//     habitFeedingScores,
//     getHabitsFeedingScores,
//     habitSleepingScores,
//     getHabitsSleepingScores,
//     responsabilityScores,
//     getResponsabilitiesScores,
//   } = useScores();
//   const [independenceData, setIndependenceData] = useState({});
//   const [skillGroomingData, setSkillGromingData] = useState({});
//   const [skillDressingData, setSkillDressingData] = useState({});
//   const [skillFeedingData, setSkillFeedingData] = useState({});
//   const [habitFeedingData, setHabitFeedingData] = useState({});
//   const [habitSleepingData, setHabitSleepingData] = useState({});
//   const [responsabilityData, setResponsabilityData] = useState({});

//   // console.log(independenceScores);
//   // console.log(skillGroomingScores);

//   // EVITA ERRORES CUANDO NO HAY DATOS MIENTRAS SE COMPLETA LA FUNC ASINCRONA
//   useEffect(() => {
//     const loadInitialData = async () => {
//       await updateLatestChild();
//     };
//     loadInitialData();
//   }, []);

//   // TRAE LOS SCORES DE INDEPENDENCIA
//   useEffect(() => {
//     if (
//       latestChild &&
//       !independenceScores &&
//       !skillGroomingScores &&
//       !skillDressingScores &&
//       !skillFeedingScores &&
//       !habitFeedingScores &&
//       !habitSleepingScores &&
//       !responsabilityScores
//     ) {
//       getIndependenceScores(latestChild.id);
//       getSkillsGroomingScores(latestChild.id);
//       getSkillsDressingScores(latestChild.id);
//       getSkillsFeedingScores(latestChild.id);
//       getHabitsFeedingScores(latestChild.id);
//       getHabitsSleepingScores(latestChild.id);
//       getResponsabilitiesScores(latestChild.id);
//     }
//   }, [
//     latestChild,
//     getIndependenceScores,
//     getSkillsGroomingScores,
//     getSkillsDressingScores,
//     getSkillsFeedingScores,
//     getHabitsFeedingScores,
//     getHabitsSleepingScores,
//     getResponsabilitiesScores,
//   ]);

//   useEffect(() => {
//     if (
//       independenceScores ||
//       skillGroomingScores ||
//       skillDressingScores ||
//       skillFeedingScores ||
//       habitFeedingScores ||
//       habitSleepingScores ||
//       responsabilityScores
//     ) {
//       setIndependenceData(independenceScores);
//       setSkillGromingData(skillGroomingScores);
//       setSkillDressingData(skillDressingScores);
//       setSkillFeedingData(skillFeedingScores);
//       setHabitFeedingData(habitFeedingScores);
//       setHabitSleepingData(habitSleepingScores);
//       setResponsabilityData(responsabilityScores);
//     }
//   }, [
//     independenceScores,
//     skillGroomingScores,
//     skillDressingScores,
//     skillFeedingScores,
//     habitFeedingScores,
//     habitSleepingScores,
//     responsabilityScores,
//   ]);

//   // console.log(independenceData[5]);
//   // console.log(skillFeedingData[4]);
//   // console.log(skillGromingScore);

//   const rawIndependenceScore =
//     independenceData && independenceData[5] ? independenceData[5] / 4 : 0;
//   const independenceScore = rawIndependenceScore.toFixed(0);
//   const rawSkillGromingScore =
//     skillGroomingData && skillGroomingData[10] ? skillGroomingData[10] / 9 : 0;
//   const skillGromingScore = rawSkillGromingScore.toFixed(0);
//   const rawSkillDressingScore =
//     skillDressingData && skillDressingData[6] ? skillDressingData[6] / 5 : 0;
//   const skillDressingScore = rawSkillDressingScore.toFixed(0);
//   const rawSkillFeedingScore =
//     skillFeedingData && skillFeedingData[4] ? skillFeedingData[4] / 3 : 0;
//   const skillFeedingScore = rawSkillFeedingScore.toFixed(0);
//   const rawHabitFeedingScore =
//     habitFeedingData && habitFeedingData[16] ? habitFeedingData[16] / 15 : 0;
//   const habitFeedingScore = rawHabitFeedingScore.toFixed(0);
//   const rawHabitSleepingScore =
//     habitSleepingData && habitSleepingData[5] ? habitSleepingData[5] / 4 : 0;
//   const habitSleepingScore = rawHabitSleepingScore.toFixed(0);
//   const rawResponsabilityScore =
//     responsabilityData && responsabilityData[9] ? responsabilityData[9] / 8 : 0;
//   const responsabilityScore = rawResponsabilityScore.toFixed(0);

//   return (
    // <>
    //   <table className="table table-hover">
    //     <thead className="result-titles">
    //       <tr>
    //         <th>CATEGORIA</th>
    //         <th className="table-primary">ESPERADO</th>
    //         <th className="table-success">ACEPTABLE</th>
    //         <th className="table-warning">INSUFICIENTE</th>
    //         <th className="table-danger">DEFICIENTE</th>
    //       </tr>
    //     </thead>
    //     <tbody className="result-titles">
    //       <tr>
    //         <td>Independencia</td>
    //         {independenceScore == 4 ? (
    //           <td className="table-primary">{independenceScore}</td>
    //         ) : (
    //           <td className="table-primary"></td>
    //         )}
    //         {independenceScore == 3 ? (
    //           <td className="table-success">{independenceScore}</td>
    //         ) : (
    //           <td className="table-success"></td>
    //         )}
    //         {independenceScore == 2 ? (
    //           <td className="table-warning">{independenceScore}</td>
    //         ) : (
    //           <td className="table-warning"></td>
    //         )}
    //         {independenceScore == 1 ? (
    //           <td className="table-danger">{independenceScore}</td>
    //         ) : (
    //           <td className="table-danger"></td>
    //         )}
    //       </tr>
    //       <tr>
    //         <td>Habilidades del Aseo Personal</td>
    //         {skillGromingScore == 4 ? (
    //           <td className="table-primary">{skillGromingScore}</td>
    //         ) : (
    //           <td className="table-primary"></td>
    //         )}
    //         {skillGromingScore == 3 ? (
    //           <td className="table-success">{skillGromingScore}</td>
    //         ) : (
    //           <td className="table-success"></td>
    //         )}
    //         {skillGromingScore == 2 ? (
    //           <td className="table-warning">{skillGromingScore}</td>
    //         ) : (
    //           <td className="table-warning"></td>
    //         )}
    //         {skillGromingScore == 1 ? (
    //           <td className="table-danger">{skillGromingScore}</td>
    //         ) : (
    //           <td className="table-danger"></td>
    //         )}
    //       </tr>
    //       <tr>
    //         <td>Habilidades del Vestido</td>
    //         {skillDressingScore == 4 ? (
    //           <td className="table-primary">{skillDressingScore}</td>
    //         ) : (
    //           <td className="table-primary"></td>
    //         )}
    //         {skillDressingScore == 3 ? (
    //           <td className="table-success">{skillDressingScore}</td>
    //         ) : (
    //           <td className="table-success"></td>
    //         )}
    //         {skillDressingScore == 2 ? (
    //           <td className="table-warning">{skillDressingScore}</td>
    //         ) : (
    //           <td className="table-warning"></td>
    //         )}
    //         {skillDressingScore == 1 ? (
    //           <td className="table-danger">{skillDressingScore}</td>
    //         ) : (
    //           <td className="table-danger"></td>
    //         )}
    //       </tr>
    //       <tr>
    //         <td>Habilidades de la Alimentación</td>
    //         {skillFeedingScore == 4 ? (
    //           <td className="table-primary">{skillFeedingScore}</td>
    //         ) : (
    //           <td className="table-primary"></td>
    //         )}
    //         {skillFeedingScore == 3 ? (
    //           <td className="table-success">{skillFeedingScore}</td>
    //         ) : (
    //           <td className="table-success"></td>
    //         )}
    //         {skillFeedingScore == 2 ? (
    //           <td className="table-warning">{skillFeedingScore}</td>
    //         ) : (
    //           <td className="table-warning"></td>
    //         )}
    //         {skillFeedingScore == 1 ? (
    //           <td className="table-danger">{skillFeedingScore}</td>
    //         ) : (
    //           <td className="table-danger"></td>
    //         )}
    //       </tr>
    //       <tr>
    //         <td>Hábitos de Alimentación</td>
    //         {habitFeedingScore == 4 ? (
    //           <td className="table-primary">{habitFeedingScore}</td>
    //         ) : (
    //           <td className="table-primary"></td>
    //         )}
    //         {habitFeedingScore == 3 ? (
    //           <td className="table-success">{habitFeedingScore}</td>
    //         ) : (
    //           <td className="table-success"></td>
    //         )}
    //         {habitFeedingScore == 2 ? (
    //           <td className="table-warning">{habitFeedingScore}</td>
    //         ) : (
    //           <td className="table-warning"></td>
    //         )}
    //         {habitFeedingScore == 1 ? (
    //           <td className="table-danger">{habitFeedingScore}</td>
    //         ) : (
    //           <td className="table-danger"></td>
    //         )}
    //       </tr>
    //       <tr>
    //         <td>Hábitos de Sueño</td>
    //         {habitSleepingScore == 4 ? (
    //           <td className="table-primary">{habitSleepingScore}</td>
    //         ) : (
    //           <td className="table-primary"></td>
    //         )}
    //         {habitSleepingScore == 3 ? (
    //           <td className="table-success">{habitSleepingScore}</td>
    //         ) : (
    //           <td className="table-success"></td>
    //         )}
    //         {habitSleepingScore == 2 ? (
    //           <td className="table-warning">{habitSleepingScore}</td>
    //         ) : (
    //           <td className="table-warning"></td>
    //         )}
    //         {habitSleepingScore == 1 ? (
    //           <td className="table-danger">{habitSleepingScore}</td>
    //         ) : (
    //           <td className="table-danger"></td>
    //         )}
    //       </tr>
    //       <tr>
    //         <td>Responsabilidades Personales y Escolares</td>
    //         {responsabilityScore == 4 ? (
    //           <td className="table-primary">{responsabilityScore}</td>
    //         ) : (
    //           <td className="table-primary"></td>
    //         )}
    //         {responsabilityScore == 3 ? (
    //           <td className="table-success">{responsabilityScore}</td>
    //         ) : (
    //           <td className="table-success"></td>
    //         )}
    //         {responsabilityScore == 2 ? (
    //           <td className="table-warning">{responsabilityScore}</td>
    //         ) : (
    //           <td className="table-warning"></td>
    //         )}
    //         {responsabilityScore == 1 ? (
    //           <td className="table-danger">{responsabilityScore}</td>
    //         ) : (
    //           <td className="table-danger"></td>
    //         )}
    //       </tr>
    //     </tbody>
    //   </table>
    //   DESCARGAR 
    //   {/* REACT PDF LIBRARY */}
    // </>
//   );
// };

// LISTADO DE ITEMS EVALUADOS **
// UBICACION DE LOS PUNTAJES EN UNA DE TRES COLUMNAS (TABLA) SEGUN CONVENCION DE COLORES **
// ESPECIFICAR SI ES PRIMERA O SEGUNDA ENCUESTA
// BOTON PARA IMPRIMIR Y/O BOTON PARA DESCARGAR
// LINK A RECOMENDACIONES ESPECIFICAS?
// CODIGO PARA CONDICIONAR LA APARICION DE LOS SIMBOLOS EN LA CASILLA CORRESPONDIENTE A LA PUNTUACION
// TRAER LA TABLA DE RESPUESTAS Y TRANSFORMAR EL DATO NUMERICO EN UN SIMBOLO QUE SE UBIQUE EL EL COLOR CORRESPONDIENTE
// HAY QUE PROMEDIAR LOS PUNTAJES? sipi
