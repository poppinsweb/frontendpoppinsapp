import { IoCheckmarkDoneSharp, IoCheckmarkSharp } from "react-icons/io5";
import { useEvaluation } from "../../context/EvaluationProvider";
import { useAuth } from "../../context/AuthProvider";

export const CardResultSkills = () => {
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

  const evaluation = completEvaluation[0];
  console.log(evaluation.responses);

  if (!evaluation.responses || evaluation.responses.length === 0) {
    return <p>No skills responses found</p>;
  }

  const skillCategories = [
    {
      name: "Habilidades de aseo",
      skillNames: [
        "Secarse el cuerpo",
        "Peinarse el cabello",
        "Limpiarse la Nariz",
        "Aseo íntimo al defecar",
        "Lavarse las manos luego de usar el baño",
        "Cepillarse los Dientes",
        "Control de Esfínteres en el Día",
        "Control de Esfínteres en la Noche",
        "Descargar o Vaciar el Baño al Usarlo",
      ],
      questionIds: [5, 6, 7, 8, 9, 10, 11, 12, 13],
    },
    {
      name: "Habilidades de vestido",
      skillNames: [
        "Abotonarse",
        "Amarrarse los cordones",
        "Ponerse las medias",
        "Ponerse los zapatos",
        "Subir y bajar cremalleras",
      ],
      questionIds: [14, 15, 16, 17, 18],
    },
    {
      name: "Habilidades de alimentación",
      skillNames: ["Utiliza la cuchara", "Utiliza el tenedor", "Utiliza el cuchillo"],
      questionIds: [19, 20, 21],
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
    let renderIcons = true;

    responses.forEach((response) => {
      if (response.optionId === 1 || response.optionId === 2) {
        groupedDescriptions[response.optionId].push(response.description);
        renderIcons = false; // Disable icon rendering if there's an optionId of 1 or 2
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
          {renderIcons && hasOptionId4 && <IoCheckmarkDoneSharp />}
        </td>
        <td className="table-success">
          {renderIcons && hasOptionId3 && <IoCheckmarkSharp />}
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
            <th className="table-primary">CON HABILIDAD</th>
            <th className="table-success">EN PROCESO AVANZADO DE APRENDIZAJE</th>
            <th className="table-warning">EN PROCESO INICIAL DE APRENDIZAJE</th>
            <th className="table-danger">NO LO HA INTENTADO</th>
          </tr>
        </thead>
        <tbody className="result-titles">
          {skillCategories.map((category) => renderCategoryRow(category))}
        </tbody>
      </table>
    </div>
  );
};
