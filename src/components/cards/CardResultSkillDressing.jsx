// import { IoCheckmarkDoneSharp } from "react-icons/io5";
// import { IoCheckmarkSharp } from "react-icons/io5";
// import { IoWarningOutline } from "react-icons/io5";
// import { useFetchData } from "../../services/hooks/useFetchData";
// // import { useEvaluation } from "../../context/EvaluationProvider";
// import { useAuth } from "../../context/AuthProvider";

// export const CardResultSkillDressing = () => {
//   const { user } = useAuth();
//   const { data: skillDressingData, loading: skillDressingLoading,error: skillDressingError } = useFetchData("http://localhost:3000/api/evaluationresponses");
  
//   if (skillDressingLoading) return <p>Loading...</p>;
//   if (skillDressingError) return <p>Error loading skillDressing data: {skillDressingData.message}</p>;

//   const skillDressingD = skillDressingData.find((data) => data.evaluationtoken === user.evaluationtoken);
//   if (!skillDressingD) {
//     return <p>No skillDressing data found</p>;
//   }
//   console.log(user.evaluationtoken);
//   console.log(skillDressingData[5].responses);

//   const buttonUpSkillDressing = skillDressingData[5].responses[0].optionId;
//   const shoeLaceSkillDressing = skillDressingData[5].responses[1].optionId;
//   const stockingSkillDressing = skillDressingData[5].responses[2].optionId;
//   const shoeSkillDressing = skillDressingData[5].responses[3].optionId;
//   const zipperSkillDressing = skillDressingData[5].responses[4].optionId;

//   return (
//     <div>
//       <h2>Habilidades del Vestido</h2>
//       <table className="table table-hover results-container">
//       <thead className="result-titles">
//           <tr>
//             <th>HABILIDAD</th>
//             <th className="table-primary">CON HABILIDAD</th>
//             <th className="table-success">
//               EN PROCESO AVANZADO DE APRENDIZAJE
//             </th>
//             <th className="table-warning">EN PROCESO INICIAL DE APRENDIZAJE</th>
//             <th className="table-danger">NO LO HA INTENTADO</th>
//           </tr>
//         </thead>
//         <tbody className="result-titles">
//           <tr>
//             <td>Abotonarse</td>
//             {buttonUpSkillDressing && buttonUpSkillDressing == 4 ? (
//               <td className="table-primary">
//                 <IoCheckmarkDoneSharp />
//               </td>
//             ) : (
//               <td className="table-primary"></td>
//             )}
//             {buttonUpSkillDressing && buttonUpSkillDressing == 3 ? (
//               <td className="table-success"><IoCheckmarkSharp /></td>
//             ) : (
//               <td className="table-success"></td>
//             )}
//             {buttonUpSkillDressing && buttonUpSkillDressing == 2 ? (
//               <td className="table-warning">
//                 <IoWarningOutline />
//                 <div></div>
//               </td>
//             ) : (
//               <td className="table-warning"></td>
//             )}
//             {buttonUpSkillDressing && buttonUpSkillDressing == 1 ? (
//               <td className="table-danger">
//                 <IoWarningOutline /><IoWarningOutline />
//                 <div></div>
//               </td>
//             ) : (
//               <td className="table-danger"></td>
//             )}
//           </tr>
//           <tr>
//             <td>Amarrarse los Cordones</td>
//             {shoeLaceSkillDressing == 4 ? (
//               <td className="table-primary"><IoCheckmarkDoneSharp /></td>
//             ) : (
//               <td className="table-primary"></td>
//             )}
//             {shoeLaceSkillDressing == 3 ? (
//               <td className="table-success"><IoCheckmarkSharp /></td>
//             ) : (
//               <td className="table-success"></td>
//             )}
//             {shoeLaceSkillDressing == 2 ? (
//               <td className="table-warning">
//                 <div style={{ color: "red", textWrap: "wrap" }}>
//                 <IoWarningOutline />
//                 </div>
//               </td>
//             ) : (
//               <td className="table-warning"></td>
//             )}
//             {shoeLaceSkillDressing == 1 ? (
//               <td className="table-danger">
//                 <IoWarningOutline /><IoWarningOutline />
//                 <div></div>
//               </td>
//             ) : (
//               <td className="table-danger"></td>
//             )}
//           </tr>
//           <tr>
//             <td>Ponerse las Medias</td>
//             {stockingSkillDressing == 4 ? (
//               <td className="table-primary"><IoCheckmarkDoneSharp /></td>
//             ) : (
//               <td className="table-primary"></td>
//             )}
//             {stockingSkillDressing == 3 ? (
//               <td className="table-success">
//                 <IoCheckmarkSharp />
//               </td>
//             ) : (
//               <td className="table-success"></td>
//             )}
//             {stockingSkillDressing == 2 ? (
//               <td className="table-warning">
//                 <IoWarningOutline />
//                 <div></div>
//               </td>
//             ) : (
//               <td className="table-warning"></td>
//             )}
//             {stockingSkillDressing == 1 ? (
//               <td className="table-danger">
//                 <IoWarningOutline /><IoWarningOutline />
//                 <div></div>
//               </td>
//             ) : (
//               <td className="table-danger"></td>
//             )}
//           </tr>
//           <tr>
//             <td>Ponerse los Zapatos</td>
//             {shoeSkillDressing == 4 ? (
//               <td className="table-primary">
//                 <IoCheckmarkDoneSharp />
//               </td>
//             ) : (
//               <td className="table-primary"></td>
//             )}
//             {shoeSkillDressing == 3 ? (
//               <td className="table-success"><IoCheckmarkSharp /></td>
//             ) : (
//               <td className="table-success"></td>
//             )}
//             {shoeSkillDressing == 2 ? (
//               <td className="table-warning">
//                 <IoWarningOutline />
//                 <div></div>
//               </td>
//             ) : (
//               <td className="table-warning"></td>
//             )}
//             {shoeSkillDressing == 1 ? (
//               <td className="table-danger">
//                 <div style={{ color: "red", textWrap: "wrap" }}>
//                 <IoWarningOutline /><IoWarningOutline />
//                 </div>
//               </td>
//             ) : (
//               <td className="table-danger"></td>
//             )}
//           </tr>
//           <tr>
//             <td>Subir y Bajar Cremalleras</td>
//             {zipperSkillDressing == 4 ? (
//               <td className="table-primary">
//                 <IoCheckmarkDoneSharp />
//               </td>
//             ) : (
//               <td className="table-primary"></td>
//             )}
//             {zipperSkillDressing == 3 ? (
//               <td className="table-success">
//                 <IoCheckmarkSharp />
//               </td>
//             ) : (
//               <td className="table-success"></td>
//             )}
//             {zipperSkillDressing == 2 ? (
//               <td className="table-warning">
//                 <IoWarningOutline />
//                 <div></div>
//               </td>
//             ) : (
//               <td className="table-warning"></td>
//             )}
//             {zipperSkillDressing == 1 ? (
//                <td className="table-danger">
//                <IoWarningOutline /><IoWarningOutline />
//                 <div></div>
//               </td>
//             ) : (
//               <td className="table-danger"></td>
//             )}
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };
