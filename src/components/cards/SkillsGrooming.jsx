import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLatestChild } from "../../context/ChildContext";
import { abilityGroomingQuestions } from "../constants/abilityGroomingQuestions";
import "../../styles/users/questions.css";
import { postSkillGroomingScore } from "../../services/testAxiosAPI";

export const SkillsGrooming = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultsSent, setResultsSent] = useState(false);
  const [userResponses, setUserResponses] = useState(
    Array(abilityGroomingQuestions.questions.length).fill(null)
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

    if (nextQuestion < abilityGroomingQuestions.questions.length) {
      setCurrentQuestion(nextQuestion);
      setResultsSent(false);
    } else {
      if (userResponses.includes(null)) {
        alert("Responde todas las preguntas antes de enviar los resultados");
      } else {
        const fieldMap = {
          secarse_alducharse: "Se seca el cuerpo después del baño",
          se_peina: "Se peina el cabello",
          selimpia_nariz: "Se limpia la nariz",
          selimpia_cola: "Se limpia después de ir al baño (cuando hace popó)",
          selava_manos: "Se lava las manos al salir del baño",
          secepilla_dientes:
            "Se cepilla los dientes solo (recibe apoyo por las noches)",
          esfinteres_dia: "Controla esfínteres de día",
          esfinteres_noche: "Controla esfínteres de noche",
          soltar_inodoro: "Suelta el baño después de usarlo",
        };

        const dataToSend = {
          ...Object.fromEntries(
            abilityGroomingQuestions.questions.map((_, index) => [
              Object.keys(fieldMap)[index],
              userResponses[index],
            ])
          ),
          datos_infante_id: latestChild.id,
        };

        setResultsSent(true);

        try {
          const res = await postSkillGroomingScore(dataToSend);

          console.log("Puntaje enviado a la API:", res);

          if (res) {
            navigate("/habilidades-vestido");
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
        <h2 className="main-question-title">Habilidades de Aseo Personal</h2>
        <>
          <h2 className="secoundary-question-title">
            {abilityGroomingQuestions.questions[currentQuestion].question}
          </h2>
          <ul className="question-section-ability">
            {abilityGroomingQuestions.questions[currentQuestion].choices.map(
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
            /{abilityGroomingQuestions.questions.length}
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
