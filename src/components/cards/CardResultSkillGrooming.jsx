import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoWarningOutline } from "react-icons/io5";
import { useFetchData } from "../../services/hooks/useFetchData";
// import { useEvaluation } from "../../context/EvaluationProvider";
import { useAuth } from "../../context/AuthProvider";

export const CardResultSkillGrooming = () => {
  const { user } = useAuth();
  const { data: skillGroomingData, loading: skillGroomingLoading, error: skillGroomingError } = useFetchData("http://localhost:3000/api/evaluationresponses");

  if (skillGroomingLoading) return <p>Loading...</p>;
  if (skillGroomingError) return <p>Error loading skillGrooming data: {data.message}</p>;

  // ******* HAY QUE FILTRAR LAS RESPUESTAS PARA CADA TOKEN Y/O USER *******

  // const data1 = skillGroomingData[4].evaluationtoken
  // console.log(data1);
  // console.log(user.evaluationtoken);
  // try {
  //   const skillGroomingD = data1.find((data) => data.evaluationtoken === user.evaluationtoken);
  //   console.log(skillGroomingD);
  // } catch (error) {
  //   return <p>No skillGrooming data found</p>;
  // };
  
  // console.log(skillGroomingData);
  // console.log(data[1].responses);
 
  const dryingSkillGrooming = skillGroomingData[4].responses[0].optionId;
  const combingSkillGrooming = skillGroomingData[4].responses[1].optionId;
  const noseCleaningSkillGrooming = skillGroomingData[4].responses[2].optionId;
  const poopCleaningSkillGrooming = skillGroomingData[4].responses[3].optionId;
  const handWashingSkillGrooming = skillGroomingData[4].responses[4].optionId;
  const toothBrushingSkillGrooming = skillGroomingData[4].responses[5].optionId;
  const sphincterDaySkillGrooming = skillGroomingData[4].responses[6].optionId;
  const sphincterNightSkillGrooming = skillGroomingData[4].responses[7].optionId;
  const flushToiletSkillGrooming = skillGroomingData[4].responses[8].optionId;

  // const average = Math.ceil(
  //   (dryingSkillGrooming +
  //     combingSkillGrooming +
  //     noseCleaningSkillGrooming +
  //     poopCleaningSkillGrooming +
  //     handWashingSkillGrooming +
  //     toothBrushingSkillGrooming +
  //     sphincterDaySkillGrooming +
  //     sphincterNightSkillGrooming +
  //     flushToiletSkillGrooming) /
  //     9
  // );
  // console.log(average);
  // console.log(combingSkillGrooming);
  return (
    <div>
      <h2>Habilidades del Aseo Personal</h2>
      <table className="table table-hover results-container">
        <thead className="result-titles">
          <tr>
            <th>HABILIDAD</th>
            <th className="table-primary">CON HABILIDAD</th>
            <th className="table-success">
              EN PROCESO AVANZADO DE APRENDIZAJE
            </th>
            <th className="table-warning">EN PROCESO INICIAL DE APRENDIZAJE</th>
            <th className="table-danger">NO LO HA INTENTADO</th>
          </tr>
        </thead>
        <tbody className="result-titles">
          <tr>
            <td>Secarse el cuerpo</td>
            {dryingSkillGrooming == 4 ? (
              <td className="table-primary">
                <IoCheckmarkDoneSharp />
              </td>
            ) : (
              <td className="table-primary"></td>
            )}
            {dryingSkillGrooming == 3 ? (
              <td className="table-success">
                <IoCheckmarkSharp />
              </td>
            ) : (
              <td className="table-success"></td>
            )}
            {dryingSkillGrooming == 2 ? (
              <td className="table-warning">
                <IoWarningOutline />
                <div></div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {dryingSkillGrooming == 1 ? (
              <td className="table-danger">
               <IoWarningOutline />
                <div></div>
              </td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Peinarse el cabello</td>
            {combingSkillGrooming == 4 ? (
              <td className="table-primary">
                <IoCheckmarkDoneSharp />
              </td>
            ) : (
              <td className="table-primary"></td>
            )}
            {combingSkillGrooming == 3 ? (
              <td className="table-success">
                <IoCheckmarkSharp />
              </td>
            ) : (
              <td className="table-success"></td>
            )}
            {combingSkillGrooming == 2 ? (
              <td className="table-warning">
                <IoWarningOutline />
                <div></div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {combingSkillGrooming == 1 ? (
              <td className="table-danger">
               <IoWarningOutline />
                <div></div>
              </td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Limpiarse la Nariz</td>
            {noseCleaningSkillGrooming == 4 ? (
              <td className="table-primary">
                <IoCheckmarkDoneSharp />
              </td>
            ) : (
              <td className="table-primary"></td>
            )}
            {noseCleaningSkillGrooming == 3 ? (
              <td className="table-success">
                <IoCheckmarkSharp />
              </td>
            ) : (
              <td className="table-success"></td>
            )}
            {noseCleaningSkillGrooming == 2 ? (
              <td className="table-warning">
                <IoWarningOutline />
                <div></div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {noseCleaningSkillGrooming == 1 ? (
              <td className="table-danger">
               <IoWarningOutline />
                <div></div>
              </td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Aseo íntimo al defecar</td>
            {poopCleaningSkillGrooming == 4 ? (
              <td className="table-primary">
                <IoCheckmarkDoneSharp />
              </td>
            ) : (
              <td className="table-primary"></td>
            )}
            {poopCleaningSkillGrooming == 3 ? (
              <td className="table-success">
                <IoCheckmarkSharp />
              </td>
            ) : (
              <td className="table-success"></td>
            )}
            {poopCleaningSkillGrooming == 2 ? (
              <td className="table-warning">
                <IoWarningOutline />
                <div></div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {poopCleaningSkillGrooming == 1 ? (
              <td className="table-danger">
               <IoWarningOutline />
                <div></div>
              </td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Lavarse las manos luego de usar el baño</td>
            {handWashingSkillGrooming == 4 ? (
              <td className="table-primary">
                <IoCheckmarkDoneSharp />
              </td>
            ) : (
              <td className="table-primary"></td>
            )}
            {handWashingSkillGrooming == 3 ? (
              <td className="table-success">
                <IoCheckmarkSharp />
              </td>
            ) : (
              <td className="table-success"></td>
            )}
            {handWashingSkillGrooming == 2 ? (
              <td className="table-warning">
                <IoWarningOutline />
                <div></div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {handWashingSkillGrooming == 1 ? (
              <td className="table-danger">
               <IoWarningOutline />
                <div></div>
              </td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Cepillarse los Dientes</td>
            {toothBrushingSkillGrooming == 4 ? (
              <td className="table-primary">
                <IoCheckmarkDoneSharp />
              </td>
            ) : (
              <td className="table-primary"></td>
            )}
            {toothBrushingSkillGrooming == 3 ? (
              <td className="table-success">
                <IoCheckmarkSharp />
              </td>
            ) : (
              <td className="table-success"></td>
            )}
            {toothBrushingSkillGrooming == 2 ? (
              <td className="table-warning">
                <IoWarningOutline />
                <div></div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {toothBrushingSkillGrooming == 1 ? (
              <td className="table-danger">
               <IoWarningOutline />
                <div></div>
              </td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Control de Esfínteres en el Día</td>
            {sphincterDaySkillGrooming == 4 ? (
              <td className="table-primary">
                <IoCheckmarkDoneSharp />
              </td>
            ) : (
              <td className="table-primary"></td>
            )}
            {sphincterDaySkillGrooming == 3 ? (
              <td className="table-success">
                <IoCheckmarkSharp />
              </td>
            ) : (
              <td className="table-success"></td>
            )}
            {sphincterDaySkillGrooming == 2 ? (
              <td className="table-warning">
                <IoWarningOutline />
                <div></div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {sphincterDaySkillGrooming == 1 ? (
              <td className="table-danger">
               <IoWarningOutline />
                <div></div>
              </td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Control de Esfínteres en la Noche</td>
            {sphincterNightSkillGrooming == 4 ? (
              <td className="table-primary">
                <IoCheckmarkDoneSharp />
              </td>
            ) : (
              <td className="table-primary"></td>
            )}
            {sphincterNightSkillGrooming == 3 ? (
              <td className="table-success">
                <IoCheckmarkSharp />
              </td>
            ) : (
              <td className="table-success"></td>
            )}
            {sphincterNightSkillGrooming == 2 ? (
              <td className="table-warning">
                <IoWarningOutline />
                <div></div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {sphincterNightSkillGrooming == 1 ? (
              <td className="table-danger">
               <IoWarningOutline />
                <div></div>
              </td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Descargar o Vaciar el Baño al Usarlo</td>
            {flushToiletSkillGrooming == 4 ? (
              <td className="table-primary">
                <IoCheckmarkDoneSharp />
              </td>
            ) : (
              <td className="table-primary"></td>
            )}
            {flushToiletSkillGrooming == 3 ? (
              <td className="table-success">
                <IoCheckmarkSharp />
              </td>
            ) : (
              <td className="table-success"></td>
            )}
            {flushToiletSkillGrooming == 2 ? (
              <td className="table-warning">
                <IoWarningOutline />
                <div></div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {flushToiletSkillGrooming == 1 ? (
              <td className="table-danger">
               <IoWarningOutline />
                <div></div>
              </td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
