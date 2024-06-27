// import { IoCheckmarkDoneSharp, IoCheckmarkSharp, IoWarningOutline } from "react-icons/io5";
// import { useFetchData } from "../../services/hooks/useFetchData";
// import { useAuth } from "../../context/AuthProvider";

// const SkillRow = ({ skillName, skillValue }) => {
//   const renderIcon = (value, className, icon) => (skillValue === value ? <td className={className}>{icon}</td> : <td className={className}></td>);

//   return (
//     <tr>
//       <td>{skillName}</td>
//       {renderIcon(4, "table-primary", <IoCheckmarkDoneSharp />)}
//       {renderIcon(3, "table-success", <IoCheckmarkSharp />)}
//       {renderIcon(2, "table-warning", <IoWarningOutline />)}
//       {renderIcon(1, "table-danger", <><IoWarningOutline /><IoWarningOutline /></>)}
//     </tr>
//   );
// };

// export const CardResultSkillGrooming = () => {
//   const { user } = useAuth();
//   const { data: skillGroomingData, loading: skillGroomingLoading, error: skillGroomingError } = useFetchData("http://localhost:3000/api/evaluationresponses");

//   if (skillGroomingLoading) return <p>Loading...</p>;
//   if (skillGroomingError) return <p>Error loading skillGrooming data: {skillGroomingError.message}</p>;

//   const skillGroomingResponses = skillGroomingData[4]?.responses || [];
//   const skills = [
//     "Secarse el cuerpo",
//     "Peinarse el cabello",
//     "Limpiarse la Nariz",
//     "Aseo íntimo al defecar",
//     "Lavarse las manos luego de usar el baño",
//     "Cepillarse los Dientes",
//     "Control de Esfínteres en el Día",
//     "Control de Esfínteres en la Noche",
//     "Descargar o Vaciar el Baño al Usarlo",
//   ];

//   return (
//     <div>
//       <h2>Habilidades del Aseo Personal</h2>
//       <table className="table table-hover results-container">
//         <thead className="result-titles">
//           <tr>
//             <th>HABILIDAD</th>
//             <th className="table-primary">CON HABILIDAD</th>
//             <th className="table-success">EN PROCESO AVANZADO DE APRENDIZAJE</th>
//             <th className="table-warning">EN PROCESO INICIAL DE APRENDIZAJE</th>
//             <th className="table-danger">NO LO HA INTENTADO</th>
//           </tr>
//         </thead>
//         <tbody className="result-titles">
//           {skills.map((skill, index) => {
//             const skillValue = skillGroomingResponses[index]?.optionId || 0;
//             return skillValue < 3 ? (
//               <SkillRow key={index} skillName={skill} skillValue={skillValue} />
//             ) : null;
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

