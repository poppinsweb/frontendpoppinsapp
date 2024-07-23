import { IoCheckmarkDoneSharp, IoCheckmarkSharp } from "react-icons/io5";
import { useEvaluation } from "../../context/EvaluationProvider";
import { useAuth } from "../../context/AuthProvider";

export const CardResultHabits = () => {
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

  if (!evaluation.responses || evaluation.responses.length === 0) {
    return <p>No habits responses found</p>;
  }

  const habitCategories = [
    {
      name: "Hábitos de alimentación",
      habitNames: [
        "Comer frutas",
        "Comer verduras",
        "Comer proteínas",
        "Tomar jugos naturales",
        "Comer la misma comida que el resto de la familia",
        "Desayunar antes de ir a estudiar",
        "Horarios establecidos para comer",
        "Comer sin usar pantallas",
        "Comer sin usar juguetes",
        "Comer en mesa o comedor",
        "Permanecer sentado hasta finalizar la comida",
        "Comer todo sin requerir suplementos nutricionales adicionales",
        "Peso adecuado para su talla",
        "Comer en máximo 30 minutos",
        "Procesamiento de los alimentos (cortarlos, desmecharlos o volverlos papilla)",
      ],
      questionIds: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    },
    {
      name: "Hábitos de sueño",
      habitNames: [
        "Horario establecido para ir a dormir",
        "Dormir entre 8 y 10 horas",
        "Dormir entre 10 y 12 horas",
        "Dormir con las luces apagadas",
      ],
      questionIds: [37, 38, 39, 40],
    },
    {
      name: "Responsabilidades",
      habitNames: [
        "Ayudar con su uniforme en las noches",
        "Ayudar con su maleta para el colegio",
        "Recoger y organizar sus juguetes",
        "Recoger y llevar a su lugar su ropa sucia y zapatos",
        "Recoger el plato después de comer",
        "Asignación de oficios que benefician a la familia",
        "Establecimiento de horarios y rutinas",
        "Cumplimiento con horarios y rutinas acordadas",
      ],
      questionIds: [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51],
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
      <h2 className="table-title">Hábitos y Responsabilidades</h2>
      <table className="table table-hover results-container">
        <thead className="result-titles">
          <tr>
            <th>HÁBITOS Y RESPONSABILIDADES</th>
            <th className="table-primary">ADQUIRIDO</th>
            <th className="table-success">EN PROCESO AVANZADO DE ADQUISICIÓN</th>
            <th className="table-warning">EN PROCESO INICIAL DE ADQUISICIÓN</th>
            <th className="table-danger">NO ADQUIRIDO</th>
          </tr>
        </thead>
        <tbody className="result-titles">
          {habitCategories.map((category) => renderCategoryRow(category))}
        </tbody>
      </table>
    </div>
  );
};
