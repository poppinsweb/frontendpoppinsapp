import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useFetchData } from "../../services/hooks/useFetchData";
// import { useEvaluation } from "../../context/EvaluationProvider";
import { useAuth } from "../../context/AuthProvider";

export const CardResultIndependence = () => {
  const { user } = useAuth();
  const { data: independenceData, loading: independenceLoading,error: independenceError } = useFetchData("http://localhost:3000/api/evaluationresponses");
  
  if (independenceLoading) return <p>Loading...</p>;
  if (independenceError) return <p>Error loading independence data: {independenceData.message}</p>;

  const independenceD = independenceData.find((data) => data.evaluationtoken === user.evaluationtoken);
  if (!independenceD) {
    return <p>No independence data found</p>;
  }
  // console.log(user.evaluationtoken);
  // console.log(independenceData[0].responses);

  const showerIndependence = independenceData[0].responses[0];
  const dressingIndependence = independenceData[0].responses[1];
  const feedingIndependence = independenceData[0].responses[2];
  const sleepingIndependence = independenceData[0].responses[3];

  return (
    <div>
      <h2>Independencia</h2>
      <table className="table table-hover results-container">
        <thead className="result-titles">
          <tr>
            <th>CATEGORIA</th>
            <th className="table-primary">INDEPENDIENTE</th>
            <th className="table-success">SEMI-INDEPENDIENTE</th>
            <th className="table-warning">SEMI-DEPENDIENTE</th>
            <th className="table-danger">DEPENDIENTE</th>
          </tr>
        </thead>
        <tbody className="result-titles">
          <tr>
            <td>Independencia para bañarse</td>
            {showerIndependence && showerIndependence.optionId == 4 ? (
              <td className="table-primary">
                <IoCheckmarkDoneSharp />
              </td>
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
                <div></div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {showerIndependence && showerIndependence.optionId == 1 ? (
              <td className="table-danger">
                {showerIndependence.optionId}
                <div></div>
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
                <div style={{ color: "blue", textWrap: "wrap" }}>
                  {dressingIndependence.answer}
                </div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {dressingIndependence && dressingIndependence.optionId == 1 ? (
              <td className="table-danger">
                {dressingIndependence.optionId}
                <div></div>
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
              <td className="table-success">
                <IoCheckmarkSharp />
              </td>
            ) : (
              <td className="table-success"></td>
            )}
            {feedingIndependence && feedingIndependence.optionId == 2 ? (
              <td className="table-warning">
                {feedingIndependence.optionId}
                <div></div>
              </td>
            ) : (
              <td className="table-warning"></td>
            )}
            {feedingIndependence && feedingIndependence.optionId == 1 ? (
              <td className="table-danger">
                {feedingIndependence.optionId}
                <div></div>
              </td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Independencia para dormir</td>
            {sleepingIndependence && sleepingIndependence.optionId == 4 ? (
              <td className="table-primary">
                <IoCheckmarkDoneSharp />
              </td>
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
