// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLatestChild } from "../../context/ChildContext";
// import { habitResponsabilityQuestions } from "../constants/habitResponsabilityQuestions";
// import "../../styles/users/questions.css";
// import { postHabitsResponsabilityScore } from "../../services/testAxiosAPI";

// export const HabitsResponsability = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [resultsSent, setResultsSent] = useState(false);
//   const [userResponses, setUserResponses] = useState(
//     Array(habitResponsabilityQuestions.questions.length).fill(null)
//   );
//   const { latestChild, updateLatestChild } = useLatestChild();

//   const navigate = useNavigate();

//   useEffect(() => {
//     const loadInitialData = async () => {
//       await updateLatestChild();
//     };
//     loadInitialData();
//   }, []);

//   const handleAnswer = (choice) => {
//     setUserResponses((prevResponses) => [
//       ...prevResponses.slice(0, currentQuestion),
//       choice,
//       ...prevResponses.slice(currentQuestion + 1),
//     ]);
//   };

//   const handleBeforeQuestion = () => {
//     setCurrentQuestion((prev) => Math.max(prev - 1, 0));
//   };

//   const handleNextQuestion = async() => {
//     const nextQuestion = currentQuestion + 1;

//     if (nextQuestion < habitResponsabilityQuestions.questions.length) {
//       setCurrentQuestion(nextQuestion);
//       setResultsSent(false);
//     } else {
//       if (userResponses.includes(null)) {
//         alert("Responde todas las preguntas antes de enviar los resultados");
//       } else {
//         const fieldMap = {
//           uniforme_listo: "Ayuda a dejar listo su uniforme en las noches",
//           prepara_maletin: "Ayuda a preparar su maleta para el colegio",
//           organiza_juguetes: "Recoge y organiza sus juguetes",
//           recoge_suropa_sucia: "Recoge y lleva a su lugar ropa sucia y zapatos",
//           recoge_suplato: "Recoge el plato de la mesa después de las comidas",
//           tieneoficios_asignados: "Tiene asignados oficios en casa que beneficien a toda la familia",
//           tienehorarios_rutinas: "Tiene horarios y rutinas establecidos",
//           cumple_acuerdos: "Cumple con los horarios y rutinas que se han acordado",
//         };

//         const dataToSend = {
//           ...Object.fromEntries(
//             habitResponsabilityQuestions.questions.map((_, index) => [
//               Object.keys(fieldMap)[index],
//               userResponses[index],
//             ])
//           ),
//           datos_infante_id: latestChild.id,
//         };

//         setResultsSent(true);

//         try {
//           const res = await postHabitsResponsabilityScore(dataToSend);

//           console.log("Puntaje enviado a la API:", res);

//           if (res) {
//             navigate("/resultados");
//           }
//         } catch (error) {
//           console.error("Error al enviar resultados a la API: ", error);
//         }
//       }
//     }
//   };
//   return (
//     <div className="question-main-container">
//       <div className="question-container">
//         <h2 className="main-question-title">Responsabilidades y Cumplimiento de Acuerdos</h2>
//         <>
//           <h2 className="secoundary-question-title">
//             {habitResponsabilityQuestions.questions[currentQuestion].question}
//           </h2>
//           <ul className="question-section-ability">
//             {habitResponsabilityQuestions.questions[currentQuestion].choices.map(
//               (choice, index) => (
//                 <div key={index} className="question-li">
//                   <li
//                     onClick={() => handleAnswer(index + 1)}
//                     className={
//                       userResponses[currentQuestion] === index + 1
//                         ? "selected-answer question-text"
//                         : null
//                     }
//                   >
//                     {choice}
//                   </li>
//                 </div>
//               )
//             )}
//           </ul>
//           <span className="active-question-no">{currentQuestion + 1}</span>
//           <span className="total-question">
//             /{habitResponsabilityQuestions.questions.length}
//           </span>
//         </>
//       </div>
//       <div className="btn-container">
//         <button
//           onClick={handleBeforeQuestion}
//           className="btn-color"
//           disabled={currentQuestion === 0 || resultsSent}
//         >
//           {resultsSent || currentQuestion === 0 ? "Inactivo" : "Anterior"}
//         </button>
//         <button
//           onClick={handleNextQuestion}
//           disabled={resultsSent}
//           className="btn-color"
//         >
//           {resultsSent ? "Siguiente Sección" : "Siguiente"}
//         </button>
//       </div>
//     </div>
//   );
// };
