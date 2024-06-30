import { IoCheckmarkDoneSharp, IoCheckmarkSharp } from "react-icons/io5";
import { useEvaluation } from "../../context/EvaluationProvider";
import { useAuth } from "../../context/AuthProvider";

export const CardResultIndependence = () => {
  const { user } = useAuth();
  const {
    completEvaluation,
    loading: evaluationLoading,
    error: evaluationError,
  } = useEvaluation();

  if (evaluationLoading) return <p>Loading...</p>;
  if (evaluationError)
    return <p>Error loading evaluation data: {evaluationError.message}</p>;

  if (!completEvaluation || completEvaluation.length === 0) {
    return <p>No evaluation data found</p>;
  }

  // Usar la primera evaluación completa en el array (ajusta según tu lógica)
  const evaluation = completEvaluation[0];

  // console.log(evaluation.responses);

  // Verifica si existen las respuestas dentro de la evaluación
  if (!evaluation.responses || evaluation.responses.length === 0) {
    return <p>No independence responses found</p>;
  }

  // Accede a las respuestas de independencia
  const showerIndependence = evaluation.responses[0];
  const dressingIndependence = evaluation.responses[1];
  const feedingIndependence = evaluation.responses[2];
  const sleepingIndependence = evaluation.responses[3];

  // console.log(showerIndependence.answer);

  return (
    <div>
      <h2>Independencia</h2>
      <table className="table table-hover results-container">
        <thead className="result-titles">
          <tr>
            <th className="th-width">INDEPENDENCIA</th>
            <th className="table-primary">INDEPENDIENTE</th>
            <th className="table-success">SEMI-INDEPENDIENTE</th>
            <th className="table-warning">SEMI-DEPENDIENTE</th>
            <th className="table-danger">DEPENDIENTE</th>
          </tr>
        </thead>
        <tbody className="result-titles">
          <tr>
            <td>Para bañarse</td>
            {showerIndependence && showerIndependence.optionId == 4 ? (
              <td className="table-primary">
                <IoCheckmarkDoneSharp />
              </td>
            ) : (
              <td className="table-primary"></td>
            )}
            {showerIndependence && showerIndependence.optionId == 3 ? (
              <td className="table-success">
                <IoCheckmarkDoneSharp />
              </td>
            ) : (
              <td className="table-success"></td>
            )}
            {showerIndependence && showerIndependence.optionId == 2 ? (
              <td className="table-warning">
                {showerIndependence.answer}
                <div></div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {showerIndependence && showerIndependence.optionId == 1 ? (
              <td className="table-danger">
                {showerIndependence.answer}
                <div></div>
              </td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Para vestirse</td>
            {dressingIndependence && dressingIndependence.optionId == 4 ? (
              <td className="table-primary">
                <IoCheckmarkDoneSharp />
              </td>
            ) : (
              <td className="table-primary"></td>
            )}
            {dressingIndependence && dressingIndependence.optionId == 3 ? (
              <td className="table-success">
                <IoCheckmarkSharp />
              </td>
            ) : (
              <td className="table-success"></td>
            )}
            {dressingIndependence && dressingIndependence.optionId == 2 ? (
              <td className="table-warning">
                <div style={{ color: "blue", textWrap: "wrap" }}>
                  {dressingIndependence.answer}
                </div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {dressingIndependence && dressingIndependence.optionId == 1 ? (
              <td className="table-danger">
                {dressingIndependence.answer}
                <div></div>
              </td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Para alimentarse</td>
            {feedingIndependence && feedingIndependence.optionId == 4 ? (
              <td className="table-primary">
                <IoCheckmarkDoneSharp />
              </td>
            ) : (
              <td className="table-primary"></td>
            )}
            {feedingIndependence && feedingIndependence.optionId == 3 ? (
              <td className="table-success">
                <IoCheckmarkSharp />
              </td>
            ) : (
              <td className="table-success"></td>
            )}
            {feedingIndependence && feedingIndependence.optionId == 2 ? (
              <td className="table-warning">
                {feedingIndependence.answer}
                <div></div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {feedingIndependence && feedingIndependence.optionId == 1 ? (
              <td className="table-danger">
                {feedingIndependence.answer}
                <div></div>
              </td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Para dormir</td>
            {sleepingIndependence && sleepingIndependence.optionId == 4 ? (
              <td className="table-primary">
                <IoCheckmarkDoneSharp />
              </td>
            ) : (
              <td className="table-primary"></td>
            )}
            {sleepingIndependence && sleepingIndependence.optionId == 3 ? (
              <td className="table-success">
                <IoCheckmarkSharp />
              </td>
            ) : (
              <td className="table-success"></td>
            )}
            {sleepingIndependence && sleepingIndependence.optionId == 2 ? (
              <td className="table-warning">
                {sleepingIndependence.answer}
                <div></div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {sleepingIndependence && sleepingIndependence.optionId == 1 ? (
              <td className="table-danger">
                <div style={{ color: "blue", textWrap: "wrap" }}>
                  {sleepingIndependence.answer}
                </div>
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
