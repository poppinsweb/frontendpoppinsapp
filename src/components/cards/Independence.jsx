import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLatestChild } from "../../context/ChildContext";
import { independenceQuestions } from "../constants/independenceQuestions";
import { postIndependenceScore } from "../../services/testAxiosAPI";
import "../../styles/users/questions.css";

export const Independence = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultsSent, setResultsSent] = useState(false);
  const [userResponses, setUserResponses] = useState(
    Array(independenceQuestions.questions.length).fill(null)
  );
  const {latestChild, updateLatestChild} = useLatestChild();

  const navigate = useNavigate();

  useEffect(() => {
    const loadInitialData = async() => {
      await updateLatestChild();
    }
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

  const handleNextQuestion = async () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < independenceQuestions.questions.length) {
      setCurrentQuestion(nextQuestion);
      setResultsSent(false);
    } else {
      if (userResponses.includes(null)) {
        alert("Responde todas las preguntas antes de enviar los resultados");
      } else {
        const fieldMap = {
          independencia_ducha: "Al Bañarse",
          independencia_vestido: "Al Vestirse",
          independencia_alimentacion: "Al Alimentarse",
          independencia_dormir: "Al dormir",
        };

        const dataToSend = {
          ...Object.fromEntries(
            independenceQuestions.questions.map((_, index) => [
              Object.keys(fieldMap)[index],
              userResponses[index],
            ])
          ),
          datos_infante_id: latestChild.id,
        };

        setResultsSent(true);

        try {
          const res = await postIndependenceScore(dataToSend);

          console.log("Puntaje enviado a la API:", res);

          if (res) {
            navigate("/habilidades-aseo");
          }
        } catch (error) {
          console.error("Error al enviar resultados a la API: ", error);
        }
      }
    }
  };
  return (
    <div className="question-main-container">
      <div className="question-container-independence">
        <h2 className="main-question-title-independence">Independencia</h2>
        <>
          <h2 className="secoundary-question-title">
            {independenceQuestions.questions[currentQuestion].question}
          </h2>
          <ul className="question-section">
            {independenceQuestions.questions[currentQuestion].choices.map(
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
            /{independenceQuestions.questions.length}
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
