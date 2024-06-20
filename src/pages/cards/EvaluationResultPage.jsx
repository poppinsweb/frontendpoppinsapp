import React from "react";
import { useFetchData } from "../../services/hooks/useFetchData";
import { useEvaluation } from "../../context/EvaluationProvider";
import { useAuth } from "../../context/AuthProvider";
import "../../styles/users/result.css";

const EvaluationResultPage = () => {
  const {
    data: childrenData,
    loading: childrenLoading,
    error: childrenError,
  } = useFetchData("http://localhost:3000/api/childrenres");
  const {
    independenceData,
    loading: evaluationLoading,
    error: evaluationError,
  } = useEvaluation();
  const { user } = useAuth();

  if (childrenLoading || evaluationLoading) return <p>Loading...</p>;
  if (childrenError) return <p>Error loading children data: {childrenError.message}</p>;
  if (evaluationError) return <p>Error loading evaluation data: {evaluationError.message}</p>;

  const childData = childrenData.find(
    (child) => child.evaluationtoken === user.evaluationtoken
  );
  if (!childData) {
    return <p>No matching child data found</p>;
  }

  const getIndependenceResponse = (questionId) => {
    if (!independenceData || !independenceData.responses) return null;
    return independenceData.responses.find(res => res.questionId === questionId);
  };

  const showerIndependence = getIndependenceResponse(1);
  const dressingIndependence = getIndependenceResponse(2);
  const feedingIndependence = getIndependenceResponse(3);
  const sleepingIndependence = getIndependenceResponse(4);

  const responses = childData.responses;
  const sexo = responses.find(response => response.category === "Sexo")?.value;
  const estrato = responses.find(response => response.category === "Estrato")?.value;
  const tipoInstitucion = responses.find(response => response.category === "Tipo de Institución Educativa")?.value;
  const nivelEscolar = responses.find(response => response.category === "Nivel Escolar")?.value;
  const aniosEdad = responses.find(response => response.category === "Años de edad")?.value;
  const mesesEdad = responses.find(response => response.category === "Meses")?.value;

  const {
    firstName,
    lastName,
    skillGromingScore,
    skillDressingScore,
    skillFeedingScore,
    habitFeedingScore,
    habitSleepingScore,
    responsabilityScore,
  } = childData;

  const renderIndependenceRow = (independenceData, label) => {
    if (!independenceData) {
      return (
        <tr key={label}>
          <td>{label}</td>
          <td colSpan="4">No data available</td>
        </tr>
      );
    }

    return (
      <tr key={label}>
        <td>{label}</td>
        <td className={independenceData.optionId == 4 ? "table-primary" : ""}>
          {independenceData.optionId == 4 ? independenceData.optionId : ""}
        </td>
        <td className={independenceData.optionId == 3 ? "table-success" : ""}>
          {independenceData.optionId == 3 ? independenceData.optionId : ""}
        </td>
        <td className={independenceData.optionId == 2 ? "table-warning" : ""}>
          {independenceData.optionId == 2 ? independenceData.optionId : ""}
          {independenceData.optionId == 2 && (
            <div>
              <a href="#">aqui hay algo para decir acerca del puntaje</a>
            </div>
          )}
        </td>
        <td className={independenceData.optionId == 1 ? "table-danger" : ""}>
          {independenceData.optionId == 1 ? independenceData.optionId : ""}
          {independenceData.optionId == 1 && (
            <div>
              <a href="#">aqui hay algo para decir acerca del puntaje</a>
            </div>
          )}
        </td>
      </tr>
    );
  };

  return (
    <>
      <h1 className="main-title">Poppins Resultados</h1>
      <div className="header-container">
        <p>
          <strong>Nombre: </strong>
          {firstName + " " + lastName}
        </p>
        <p>
          <strong>Edad: </strong>
          años: {aniosEdad} meses: {mesesEdad}
        </p>
        <p>
          <strong>Sexo:</strong> {sexo}
        </p>
        <p>
          <strong>Grado: </strong>
          {nivelEscolar}
        </p>
      </div>
      <table className="table table-hover results-container">
        <thead className="result-titles">
          <tr>
            <th>CATEGORIA</th>
            <th className="table-primary">ESPERADO</th>
            <th className="table-success">AUMENTANDO</th>
            <th className="table-warning">REFORZAR</th>
            <th className="table-danger">INICIAR</th>
          </tr>
        </thead>
        <tbody className="result-titles">
          {renderIndependenceRow(showerIndependence, "Independencia para bañarse")}
          {renderIndependenceRow(dressingIndependence, "Independencia para vestirse")}
          {renderIndependenceRow(feedingIndependence, "Independencia para alimentarse")}
          {renderIndependenceRow(sleepingIndependence, "Independencia para dormir")}
          {/* Agrega las filas restantes */}
        </tbody>
      </table>
      DESCARGAR
      {/* REACT PDF LIBRARY */}
    </>
  );
};

export default EvaluationResultPage;












// import { useFetchData } from "../../services/hooks/useFetchData";
// import { useEvaluation } from "../../context/EvaluationProvider";
// import { useAuth } from "../../context/AuthProvider";
// import "../../styles/users/result.css";

// const EvaluationResultPage = () => {
//   const {
//     data: childrenData,
//     loading: childrenLoading,
//     error: childrenError,
//   } = useFetchData("http://localhost:3000/api/childrenres");
//   const {
//     independenceData,
//     loading: evaluationLoading,
//     error: evaluationError,
//   } = useEvaluation();
//   const { user } = useAuth();

//   // if (independenceData) console.log(independenceData);

//   if (childrenLoading || evaluationLoading) return <p>Loading...</p>;
//   if (childrenError)
//     return <p>Error loading children data: {childrenError.message}</p>;
//   if (evaluationError)
//     return <p>Error loading evaluation data: {evaluationError.message}</p>;

//   const childData = childrenData.find(
//     (child) => child.evaluationtoken === user.evaluationtoken
//   );
//   if (!childData) {
//     return <p>No matching child data found</p>;
//   }
  
//   const showerIndependence = independenceData.responses[0];
//   const dressingIndependence = independenceData.responses[1];
//   const feedingIndependence = independenceData.responses[2];
//   const sleepingIndependence = independenceData.responses[3];


//   const responses = childData.responses;
//   const sexo = responses.find(
//     (response) => response.category === "Sexo"
//   )?.value;
//   const estrato = responses.find(
//     (response) => response.category === "Estrato"
//   )?.value;
//   const tipoInstitucion = responses.find(
//     (response) => response.category === "Tipo de Institución Educativa"
//   )?.value;
//   const nivelEscolar = responses.find(
//     (response) => response.category === "Nivel Escolar"
//   )?.value;
//   const aniosEdad = responses.find(
//     (response) => response.category === "Años de edad"
//   )?.value;
//   const mesesEdad = responses.find(
//     (response) => response.category === "Meses"
//   )?.value;

//   const {
//     firstName,
//     lastName,
//     skillGromingScore,
//     skillDressingScore,
//     skillFeedingScore,
//     habitFeedingScore,
//     habitSleepingScore,
//     responsabilityScore,
//   } = childData;

//   return (
//     <>
//       <h1 className="main-title">Poppins Resultados</h1>
//       <div className="header-container">
//         <p>
//           <strong>Nombre: </strong>
//           {firstName + " " + lastName}
//         </p>
//         <p>
//           <strong>Edad: </strong>
//           años: {aniosEdad} meses: {mesesEdad}
//         </p>
//         <p>
//           <strong>Sexo:</strong> {sexo}
//         </p>
//         <p>
//           <strong>Grado: </strong>
//           {nivelEscolar}
//         </p>
//       </div>
//       <table className="table table-hover results-container">
//         <thead className="result-titles">
//           <tr>
//             <th>CATEGORIA</th>
//             <th className="table-primary">ESPERADO</th>
//             <th className="table-success">AUMENTANDO</th>
//             <th className="table-warning">REFORZAR</th>
//             <th className="table-danger">INICIAR</th>
//           </tr>
//         </thead>
//         <tbody className="result-titles">
//           <tr>
//             <td>Independencia para bañarse</td>
//             {showerIndependence.optionId == 4 ? (
//               <td className="table-primary">{showerIndependence.optionId}</td>
//             ) : (
//               <td className="table-primary"></td>
//             )}
//             {showerIndependence.optionId == 3 ? (
//               <td className="table-success">{showerIndependence.optionId}</td>
//             ) : (
//               <td className="table-success"></td>
//             )}
//             {showerIndependence.optionId == 2 ? (
//               <td className="table-warning">
//                 {showerIndependence.optionId}
//                 <div>
//                   <a href="#">aqui hay algo para decir acerca del puntaje</a>
//                 </div>
//               </td>
//             ) : (
//               <td className="table-warning"></td>
//             )}
//             {showerIndependence.optionId == 1 ? (
//               <td className="table-danger">
//                 {showerIndependence.optionId}
//                 <div>
//                   <a href="#">aqui hay algo para decir acerca del puntaje</a>
//                 </div>
//               </td>
//             ) : (
//               <td className="table-danger"></td>
//             )}
//           </tr>
//           <tr>
//             <td>Independencia para vestirse</td>
//             {dressingIndependence.optionId == 4 ? (
//               <td className="table-primary">{dressingIndependence.optionId}</td>
//             ) : (
//               <td className="table-primary"></td>
//             )}
//             {dressingIndependence.optionId == 3 ? (
//               <td className="table-success">{dressingIndependence.optionId}</td>
//             ) : (
//               <td className="table-success"></td>
//             )}
//             {dressingIndependence.optionId == 2 ? (
//               <td className="table-warning">
//                 {dressingIndependence.optionId}
//                 <div>
//                   <a href="#">aqui hay algo para decir acerca del puntaje</a>
//                 </div>
//               </td>
//             ) : (
//               <td className="table-warning"></td>
//             )}
//             {dressingIndependence.optionId == 1 ? (
//               <td className="table-danger">
//                 {dressingIndependence.optionId}
//                 <div>
//                   <a href="#">aqui hay algo para decir acerca del puntaje</a>
//                 </div>
//               </td>
//             ) : (
//               <td className="table-danger"></td>
//             )}
//           </tr>
//           <tr>
//             <td>Independencia para alimentarse</td>
//             {feedingIndependence.optionId == 4 ? (
//               <td className="table-primary">{feedingIndependence.optionId}</td>
//             ) : (
//               <td className="table-primary"></td>
//             )}
//             {feedingIndependence.optionId == 3 ? (
//               <td className="table-success">{feedingIndependence.optionId}</td>
//             ) : (
//               <td className="table-success"></td>
//             )}
//             {feedingIndependence.optionId == 2 ? (
//               <td className="table-warning">
//                 {feedingIndependence.optionId}
//                 <div>
//                   <a href="#">aqui hay algo para decir acerca del puntaje</a>
//                 </div>
//               </td>
//             ) : (
//               <td className="table-warning"></td>
//             )}
//             {feedingIndependence.optionId == 1 ? (
//               <td className="table-danger">
//                 {feedingIndependence.optionId}
//                 <div>
//                   <a href="#">aqui hay algo para decir acerca del puntaje</a>
//                 </div>
//               </td>
//             ) : (
//               <td className="table-danger"></td>
//             )}
//           </tr>
//           <tr>
//             <td>Independencia para dormir</td>
//             {sleepingIndependence.optionId == 4 ? (
//               <td className="table-primary">{sleepingIndependence.optionId}</td>
//             ) : (
//               <td className="table-primary"></td>
//             )}
//             {sleepingIndependence.optionId == 3 ? (
//               <td className="table-success">{sleepingIndependence.optionId}</td>
//             ) : (
//               <td className="table-success"></td>
//             )}
//             {sleepingIndependence.optionId === 2 ? (
//               <td className="table-warning">
//                 {sleepingIndependence.optionId}
//                 <div>
//                   <a href="">aqui hay algo para decir acerca puntaje</a>
//                 </div>
//               </td>
//             ) : (
//               <td className="table-warning"></td>
//             )}
//             {sleepingIndependence.optionId == 1 ? (
//               <td className="table-danger">
//                 {sleepingIndependence.optionId}
//                 <div>
//                   <a href="#">aqui hay algo para decir acerca del puntaje</a>
//                 </div>
//               </td>
//             ) : (
//               <td className="table-danger"></td>
//             )}
//           </tr>
//           <tr>
//             <td>Habilidades del Aseo Personal</td>
//             {skillGromingScore == 4 ? (
//               <td className="table-primary">{skillGromingScore}</td>
//             ) : (
//               <td className="table-primary"></td>
//             )}
//             {skillGromingScore == 3 ? (
//               <td className="table-success">{skillGromingScore}</td>
//             ) : (
//               <td className="table-success"></td>
//             )}
//             {skillGromingScore == 2 ? (
//               <td className="table-warning">{skillGromingScore}</td>
//             ) : (
//               <td className="table-warning"></td>
//             )}
//             {skillGromingScore == 1 ? (
//               <td className="table-danger">{skillGromingScore}</td>
//             ) : (
//               <td className="table-danger"></td>
//             )}
//           </tr>
//           <tr>
//             <td>Habilidades del Vestido</td>
//             {skillDressingScore == 4 ? (
//               <td className="table-primary">{skillDressingScore}</td>
//             ) : (
//               <td className="table-primary"></td>
//             )}
//             {skillDressingScore == 3 ? (
//               <td className="table-success">{skillDressingScore}</td>
//             ) : (
//               <td className="table-success"></td>
//             )}
//             {skillDressingScore == 2 ? (
//               <td className="table-warning">{skillDressingScore}</td>
//             ) : (
//               <td className="table-warning"></td>
//             )}
//             {skillDressingScore == 1 ? (
//               <td className="table-danger">{skillDressingScore}</td>
//             ) : (
//               <td className="table-danger"></td>
//             )}
//           </tr>
//           <tr>
//             <td>Habilidades de la Alimentación</td>
//             {skillFeedingScore == 4 ? (
//               <td className="table-primary">{skillFeedingScore}</td>
//             ) : (
//               <td className="table-primary"></td>
//             )}
//             {skillFeedingScore == 3 ? (
//               <td className="table-success">{skillFeedingScore}</td>
//             ) : (
//               <td className="table-success"></td>
//             )}
//             {skillFeedingScore == 2 ? (
//               <td className="table-warning">{skillFeedingScore}</td>
//             ) : (
//               <td className="table-warning"></td>
//             )}
//             {skillFeedingScore == 1 ? (
//               <td className="table-danger">{skillFeedingScore}</td>
//             ) : (
//               <td className="table-danger"></td>
//             )}
//           </tr>
//           <tr>
//             <td>Hábitos de Alimentación</td>
//             {habitFeedingScore == 4 ? (
//               <td className="table-primary">{habitFeedingScore}</td>
//             ) : (
//               <td className="table-primary"></td>
//             )}
//             {habitFeedingScore == 3 ? (
//               <td className="table-success">{habitFeedingScore}</td>
//             ) : (
//               <td className="table-success"></td>
//             )}
//             {habitFeedingScore == 2 ? (
//               <td className="table-warning">{habitFeedingScore}</td>
//             ) : (
//               <td className="table-warning"></td>
//             )}
//             {habitFeedingScore == 1 ? (
//               <td className="table-danger">{habitFeedingScore}</td>
//             ) : (
//               <td className="table-danger"></td>
//             )}
//           </tr>
//           <tr>
//             <td>Hábitos de Sueño</td>
//             {habitSleepingScore == 4 ? (
//               <td className="table-primary">{habitSleepingScore}</td>
//             ) : (
//               <td className="table-primary"></td>
//             )}
//             {habitSleepingScore == 3 ? (
//               <td className="table-success">{habitSleepingScore}</td>
//             ) : (
//               <td className="table-success"></td>
//             )}
//             {habitSleepingScore == 2 ? (
//               <td className="table-warning">{habitSleepingScore}</td>
//             ) : (
//               <td className="table-warning"></td>
//             )}
//             {habitSleepingScore == 1 ? (
//               <td className="table-danger">{habitSleepingScore}</td>
//             ) : (
//               <td className="table-danger"></td>
//             )}
//           </tr>
//           <tr>
//             <td>Responsabilidades Personales y Escolares</td>
//             {responsabilityScore == 4 ? (
//               <td className="table-primary">{responsabilityScore}</td>
//             ) : (
//               <td className="table-primary"></td>
//             )}
//             {responsabilityScore == 3 ? (
//               <td className="table-success">{responsabilityScore}</td>
//             ) : (
//               <td className="table-success"></td>
//             )}
//             {responsabilityScore == 2 ? (
//               <td className="table-warning">{responsabilityScore}</td>
//             ) : (
//               <td className="table-warning"></td>
//             )}
//             {responsabilityScore == 1 ? (
//               <td className="table-danger">{responsabilityScore}</td>
//             ) : (
//               <td className="table-danger"></td>
//             )}
//           </tr>
//         </tbody>
//       </table>
//       DESCARGAR
//       {/* REACT PDF LIBRARY */}
//     </>
//   );
// };

// export default EvaluationResultPage;
