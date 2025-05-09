import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { useEvaluation } from "../../context/EvaluationProvider";

export const CardResultSkills = () => {
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

  const evaluation = completEvaluation[0];

  if (!evaluation.responses || evaluation.responses.length === 0) {
    return <p>No skills responses found</p>;
  }

  const skillCategories = [
    {
      name: "Habilidades de aseo personal",
      questionIds: [1, 2, 3, 4, 5],
    },
    {
      name: "Habilidades del vestido",
      questionIds: [6, 7, 8, 9, 10],
    },
    {
      name: "Habilidades de la alimentación",
      questionIds: [11, 12, 13, 14, 15],
    },
  ];

  const renderDescriptions = (descriptions) => {
    if (!descriptions) return null;
    return descriptions.split("-").map((item, index) => (
      <div key={index}>- {item.trim()}</div>
    ));
  };

  const renderCategoryRow = (category) => {
    const responses = evaluation.responses.filter((response) =>
      category.questionIds.includes(response.questionId)
    );

    const groupedDescriptions = {
      1: [],
      2: [],
    };
    let hasOptionId3 = false;
    let hasOptionId4 = false;

    responses.forEach((response) => {
      if (response.optionId === 1 || response.optionId === 2) {
        groupedDescriptions[response.optionId].push(response.description);
      } else if (response.optionId === 3) {
        hasOptionId3 = true;
      } else if (response.optionId === 4) {
        hasOptionId4 = true;
      }
    });

    return (
      <tr key={category.name}>
        <td>{category.name}</td>
        <td className="table-primary">
          {hasOptionId4 && !hasOptionId3 && <IoCheckmarkSharp />}
        </td>
        <td className="table-success">
          {hasOptionId3 && <IoCheckmarkSharp />}
        </td>
        <td className="table-warning">
          {groupedDescriptions[2].length > 0 && (
            <div>
              {groupedDescriptions[2].map((description, index) => (
                <div key={index}>{renderDescriptions(description)}</div>
              ))}
            </div>
          )}
        </td>
        <td className="table-danger">
          {groupedDescriptions[1].length > 0 && (
            <div style={{ whiteSpace: "pre-wrap" }}>
              {groupedDescriptions[1].map((description, index) => (
                <div key={index}>{renderDescriptions(description)}</div>
              ))}
            </div>
          )}
        </td>
      </tr>
    );
  };

  return (
    <div>
      <h2 className="table-title">Habilidades</h2>
      <table className="table table-hover results-container">
        <thead className="result-titles">
          <tr>
            <th>HABILIDADES</th>
            <th className="table-primary">ADQUIRIDO</th>
            <th className="table-success">EN PROCESO AVANZADO DE ADQUISICIÓN</th>
            <th className="table-warning">EN PROCESO INICIAL DE ADQUISICIÓN</th>
            <th className="table-danger">NO ADQUIRIDO</th>
          </tr>
        </thead>
        <tbody className="result-titles">
          {skillCategories.map((category) => renderCategoryRow(category))}
        </tbody>
      </table>
    </div>
  );
};

export default CardResultSkills;
