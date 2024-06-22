import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useFetchData } from "../../services/hooks/useFetchData";
import { useEvaluation } from "../../context/EvaluationProvider";
import { useAuth } from "../../context/AuthProvider";
import "../../styles/users/result.css";

const EvaluationResultPage = () => {
  const { user } = useAuth();
  const {
    data: childrenData,
    loading: childrenLoading,
    error: childrenError,
  } = useFetchData("http://localhost:3000/api/childrenres"); // necesita filter y no find por evaluationtoken?

  const {
    independenceData,
    skillsGroomingData,
    loading: evaluationLoading,
    error: evaluationError,
  } = useEvaluation();
  
  if (childrenLoading || evaluationLoading) return <p>Loading...</p>;
  if (childrenError)
    return <p>Error loading children data: {childrenError.message}</p>;
  if (evaluationError)
    return <p>Error loading evaluation data: {evaluationError.message}</p>;

  const childData = childrenData.find(
    (child) => child.evaluationtoken === user.evaluationtoken
  );
  if (!childData) {
    return <p>No matching child data found</p>;
  }

  console.log(skillsGroomingData.responses);

  // Asumiendo que independenceData y skillGroomingData son arrays
  const showerIndependence = independenceData && independenceData.responses ? independenceData.responses.find(res => res.questionId === 1) : null;
  const dressingIndependence = independenceData && independenceData.responses ? independenceData.responses.find(res => res.questionId === 2) : null;
  const feedingIndependence = independenceData && independenceData.responses ? independenceData.responses.find(res => res.questionId === 3) : null;
  const sleepingIndependence = independenceData && independenceData.responses ? independenceData.responses.find(res => res.questionId === 4) : null;

  const skillGroomingScore = skillsGroomingData && skillsGroomingData.responses ? skillsGroomingData.responses.find(res => res.questionId === 6) : null; // Hay que promediar las respuestas del array
 

  const responses = childData.responses;
  const sexo = responses.find(
    (response) => response.category === "Sexo"
  )?.value;
  const estrato = responses.find(
    (response) => response.category === "Estrato"
  )?.value;
  const tipoInstitucion = responses.find(
    (response) => response.category === "Tipo de Institución Educativa"
  )?.value;
  const nivelEscolar = responses.find(
    (response) => response.category === "Nivel Escolar"
  )?.value;
  const aniosEdad = responses.find(
    (response) => response.category === "Años de edad"
  )?.value;
  const mesesEdad = responses.find(
    (response) => response.category === "Meses"
  )?.value;

  const {
    firstName,
    lastName,
    skillDressingScore,
    skillFeedingScore,
    habitFeedingScore,
    habitSleepingScore,
    responsabilityScore,
  } = childData;

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
          <tr>
            <td>Independencia para bañarse</td>
            {showerIndependence && showerIndependence.optionId == 4 ? (
              <td className="table-primary"><IoCheckmarkDoneSharp /></td>
            ) : (
              <td className="table-primary"></td>
            )}
            {showerIndependence && showerIndependence.optionId == 3 ? (
              <td className="table-success">{showerIndependence.optionId}</td>
            ) : (
              <td className="table-success"></td>
            )}
            {showerIndependence && showerIndependence.optionId == 2 ? (
              <td className="table-warning">
                {showerIndependence.optionId}
                <div>
                </div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {showerIndependence && showerIndependence.optionId == 1 ? (
              <td className="table-danger">
                {showerIndependence.optionId}
                <div>
                </div>
              </td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Independencia para vestirse</td>
            {dressingIndependence && dressingIndependence.optionId == 4 ? (
              <td className="table-primary">{dressingIndependence.optionId}</td>
            ) : (
              <td className="table-primary"></td>
            )}
            {dressingIndependence && dressingIndependence.optionId == 3 ? (
              <td className="table-success">{dressingIndependence.optionId}</td>
            ) : (
              <td className="table-success"></td>
            )}
            {dressingIndependence && dressingIndependence.optionId == 2 ? (
              <td className="table-warning">
                <div style={{color: "blue", textWrap: "wrap"}}>
                  {dressingIndependence.answer}
                </div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {dressingIndependence && dressingIndependence.optionId == 1 ? (
              <td className="table-danger">
                {dressingIndependence.optionId}
                <div>
                </div>
              </td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Independencia para alimentarse</td>
            {feedingIndependence && feedingIndependence.optionId == 4 ? (
              <td className="table-primary">{feedingIndependence.optionId}</td>
            ) : (
              <td className="table-primary"></td>
            )}
            {feedingIndependence && feedingIndependence.optionId == 3 ? (
              <td className="table-success"><IoCheckmarkSharp /></td>
            ) : (
              <td className="table-success"></td>
            )}
            {feedingIndependence && feedingIndependence.optionId == 2 ? (
              <td className="table-warning">
                {feedingIndependence.optionId}
                <div>
                </div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {feedingIndependence && feedingIndependence.optionId == 1 ? (
              <td className="table-danger">
                {feedingIndependence.optionId}
                <div>
                </div>
              </td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Independencia para dormir</td>
            {sleepingIndependence && sleepingIndependence.optionId == 4 ? (
              <td className="table-primary"><IoCheckmarkDoneSharp /></td>
            ) : (
              <td className="table-primary"></td>
            )}
            {sleepingIndependence && sleepingIndependence.optionId == 3 ? (
              <td className="table-success">{sleepingIndependence.optionId}</td>
            ) : (
              <td className="table-success"></td>
            )}
            {sleepingIndependence && sleepingIndependence.optionId == 2 ? (
              <td className="table-warning">
                {sleepingIndependence.optionId}
                <div>
                </div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {sleepingIndependence && sleepingIndependence.optionId == 1 ? (
              <td className="table-danger">
                <div style={{color: "blue", textWrap: "wrap"}}>{sleepingIndependence.answer}
                </div>
              </td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Habilidades de aseo personal</td>
            {skillGroomingScore && skillGroomingScore.optionId == 4 ? (
              <td className="table-primary">{skillGroomingScore.optionId}</td>
            ) : (
              <td className="table-primary"></td>
            )}
            {skillGroomingScore && skillGroomingScore.optionId == 3 ? (
              <td className="table-success">{skillGroomingScore.optionId}</td>
            ) : (
              <td className="table-success"></td>
            )}
            {skillGroomingScore && skillGroomingScore.optionId == 2 ? (
              <td className="table-warning">
                {skillGroomingScore.optionId}
                <div>
                </div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {skillGroomingScore && skillGroomingScore.optionId == 1 ? (
              <td className="table-danger">
                {skillGroomingScore.optionId}
                <div>
                </div>
              </td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default EvaluationResultPage;
