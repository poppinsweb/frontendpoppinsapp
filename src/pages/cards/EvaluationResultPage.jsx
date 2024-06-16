import React from "react";
import { useFetchData } from "../../services/hooks/useFetchData";
import "../../styles/users/result.css";

export const EvaluationResultPage = () => {
  const { data:childrenData, loading: childrenLoading, error: childrenError } = useFetchData("http://localhost:3000/api/childrenres");
  
  if (childrenLoading) return <p>Loading...</p>;
  if (childrenError) return <p>Error loading children data: {childrenError.message}</p>;

  let independenceScore = null;
  let skillGromingScore = null;
  let skillDressingScore = null;
  let skillFeedingScore = null;
  let habitFeedingScore = null;
  let habitSleepingScore = null;
  let responsabilityScore = null;

  // ES NECESARIO ASOCIAR A UN TOKEN Y O A UN ID *********

  return (
    <>
      <h1 className="main-title">Poppins Resultados</h1>
      <div className="header-container">
        <p>
          <strong>Nombre:{childrenData.firstName} apellidos:{childrenData.lastName}</strong>
        </p>
        <p>
          <strong>Edad: </strong>
          años: meses:
        </p>
        <p>
          <strong>Sexo: </strong>
        </p>
        <p>
          <strong>Grado: </strong>
        </p>
        <p>
          <strong>Código: </strong>
        </p>
      </div>
      <table className="table table-hover results-container">
        <thead className="result-titles">
          <tr>
            <th>CATEGORIA</th>
            <th className="table-primary">ESPERADO</th>
            <th className="table-success">ESPERADO</th>
            <th className="table-warning">REFORZAR</th>
            <th className="table-danger">INICIAR</th>
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
            {skillDressingScore == 4 ? (
              <td className="table-primary">{skillDressingScore}</td>
            ) : (
              <td className="table-primary"></td>
            )}
            {skillDressingScore == 3 ? (
              <td className="table-success">{skillDressingScore}</td>
            ) : (
              <td className="table-success"></td>
            )}
            {skillDressingScore == 2 ? (
              <td className="table-warning">{skillDressingScore}</td>
            ) : (
              <td className="table-warning"></td>
            )}
            {skillDressingScore == 1 ? (
              <td className="table-danger">{skillDressingScore}</td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Habilidades de la Alimentación</td>
            {skillFeedingScore == 4 ? (
              <td className="table-primary">{skillFeedingScore}</td>
            ) : (
              <td className="table-primary"></td>
            )}
            {skillFeedingScore == 3 ? (
              <td className="table-success">{skillFeedingScore}</td>
            ) : (
              <td className="table-success"></td>
            )}
            {skillFeedingScore == 2 ? (
              <td className="table-warning">{skillFeedingScore}</td>
            ) : (
              <td className="table-warning"></td>
            )}
            {skillFeedingScore == 1 ? (
              <td className="table-danger">{skillFeedingScore}</td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Hábitos de Alimentación</td>
            {habitFeedingScore == 4 ? (
              <td className="table-primary">{habitFeedingScore}</td>
            ) : (
              <td className="table-primary"></td>
            )}
            {habitFeedingScore == 3 ? (
              <td className="table-success">{habitFeedingScore}</td>
            ) : (
              <td className="table-success"></td>
            )}
            {habitFeedingScore == 2 ? (
              <td className="table-warning">{habitFeedingScore}</td>
            ) : (
              <td className="table-warning"></td>
            )}
            {habitFeedingScore == 1 ? (
              <td className="table-danger">{habitFeedingScore}</td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Hábitos de Sueño</td>
            {habitSleepingScore == 4 ? (
              <td className="table-primary">{habitSleepingScore}</td>
            ) : (
              <td className="table-primary"></td>
            )}
            {habitSleepingScore == 3 ? (
              <td className="table-success">{habitSleepingScore}</td>
            ) : (
              <td className="table-success"></td>
            )}
            {habitSleepingScore == 2 ? (
              <td className="table-warning">{habitSleepingScore}</td>
            ) : (
              <td className="table-warning"></td>
            )}
            {habitSleepingScore == 1 ? (
              <td className="table-danger">{habitSleepingScore}</td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
          <tr>
            <td>Responsabilidades Personales y Escolares</td>
            {responsabilityScore == 4 ? (
              <td className="table-primary">{responsabilityScore}</td>
            ) : (
              <td className="table-primary"></td>
            )}
            {responsabilityScore == 3 ? (
              <td className="table-success">{responsabilityScore}</td>
            ) : (
              <td className="table-success"></td>
            )}
            {responsabilityScore == 2 ? (
              <td className="table-warning">{responsabilityScore}</td>
            ) : (
              <td className="table-warning"></td>
            )}
            {responsabilityScore == 1 ? (
              <td className="table-danger">{responsabilityScore}</td>
            ) : (
              <td className="table-danger"></td>
            )}
          </tr>
        </tbody>
      </table>
      DESCARGAR
      {/* REACT PDF LIBRARY */}
    </>
  );
};
