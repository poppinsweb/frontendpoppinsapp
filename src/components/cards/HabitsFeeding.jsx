import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLatestChild } from "../../context/ChildContext";
import { habitFeedingQuestions } from "../constants/habitFeedingQuestions";
import "../../styles/users/questions.css";
import { postHabitsFeedingScore } from "../../services/testAxiosAPI";

export const HabitsFeeding = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultsSent, setResultsSent] = useState(false);
  const [userResponses, setUserResponses] = useState(
    Array(habitFeedingQuestions.questions.length).fill(null)
  );
  const { latestChild, updateLatestChild } = useLatestChild();

  const navigate = useNavigate();

  useEffect(() => {
    const loadInitialData = async () => {
      await updateLatestChild();
    };
    loadInitialData();
  }, []);

  const handleAnswer = (choice) => {
    setUserResponses((prevResponses) => [
      ...prevResponses.slice(0, currentQuestion),
      choice,
      ...prevResponses.slice(currentQuestion + 1),
    ]);
  };

  const handleBeforeQuestion = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const handleNextQuestion = async() => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < habitFeedingQuestions.questions.length) {
      setCurrentQuestion(nextQuestion);
      setResultsSent(false);
    } else {
      if (userResponses.includes(null)) {
        alert("Responde todas las preguntas antes de enviar los resultados");
      } else {
        const fieldMap = {
          come_frutas: "Come la mayoría de las frutas",
          come_verduras: "Come la mayoría de las verduras",
          come_proteinas: "Consume proteínas (huevo, pollo, pescado, carne, leguminosas o champiñones)",
          toma_jugos_naturales: "Toma jugos naturales",
          comeigual_familia: "Come la misma comida que el resto de la familia (sin menú especial)",
          desayuna_antesdel_colegio: "Desayuna antes de ir al jardín/colegio",
          horarios_comidas: "Cuenta con horas establecidas para las comidas",
          come_sinpantallas: "Come sin usar pantallas (T.V, Tablet, celular)",
          come_sinjuguetes: "Come sin llevar juguetes a la mesa",
          usa_comedor: "Utiliza el comedor o una mesa adaptada para las comidas",
          permanece_sentado: "Permanece sentado hasta finalizar la comida",
          cometodo_sinsuplementos: "Come todas las comidas sin reemplazarlas por suplementos nutricionales",
          pesotalla_adecuados: "Su peso es adecuado para su talla",
          come_max30min: "Ingiere los alimientos en un tiempo prudencial de máximo 30 minutos",
          come_sinpartir_alimentos: "Come sus alimentos sin necesidad de colarlos, volverlos papilla o desmecharlos",
        };

        const dataToSend = {
          ...Object.fromEntries(
            habitFeedingQuestions.questions.map((_, index) => [
              Object.keys(fieldMap)[index],
              userResponses[index],
            ])
          ),
          datos_infante_id: latestChild.id,
        };

        setResultsSent(true);

        try {
          const res = await postHabitsFeedingScore(dataToSend);

          console.log("Puntaje enviado a la API:", res);

          if (res) {
            navigate("/habitos-dormir");
          }
        } catch (error) {
          console.error("Error al enviar resultados a la API: ", error);
        }
      }
    }
  };
  return (
    <div className="question-main-container">
      <div className="question-container">
        <h2 className="main-question-title">Habitos de la Alimentación</h2>
        <>
          <h2 className="secoundary-question-title">
            {habitFeedingQuestions.questions[currentQuestion].question}
          </h2>
          <ul className="question-section-ability">
            {habitFeedingQuestions.questions[currentQuestion].choices.map(
              (choice, index) => (
                <div key={index} className="question-li">
                  <li
                    onClick={() => handleAnswer(index + 1)}
                    className={
                      userResponses[currentQuestion] === index + 1
                        ? "selected-answer question-text"
                        : null
                    }
                  >
                    {choice}
                  </li>
                </div>
              )
            )}
          </ul>
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-question">
            /{habitFeedingQuestions.questions.length}
          </span>
        </>
      </div>
      <div className="btn-container">
        <button
          onClick={handleBeforeQuestion}
          className="btn-color"
          disabled={currentQuestion === 0 || resultsSent}
        >
          {resultsSent || currentQuestion === 0 ? "Inactivo" : "Anterior"}
        </button>
        <button
          onClick={handleNextQuestion}
          disabled={resultsSent}
          className="btn-color"
        >
          {resultsSent ? "Siguiente Sección" : "Siguiente"}
        </button>
      </div>
    </div>
  );
};
