import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { independenceQuestions } from "../constants/independenceQuestions";
import { postIndependenceScore } from "../../services/testAxiosAPI";
import "../../styles/users/questions.css";

export const Independence = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultsSent, setResultsSent] = useState(false);
  const [userResponses, setUserResponses] = useState(
    Array(independenceQuestions.questions.length).fill(null)
  );
  const [result, setResult] = useState({
    score: 0,
  });

  const navigate = useNavigate();

  const handleAnswer = (choice) => {
    setUserResponses((prevResponses) => {
      const newResponses = [...prevResponses];
      newResponses[currentQuestion] = choice;
      console.log("userResponses:", newResponses);
      return newResponses;
    });
  };

  const handleBeforeQuestion = () => {
    if (currentQuestion !== 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
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

        const dataToSend = {};
        userResponses.forEach((response, index) => {
          const fieldName = Object.keys(fieldMap)[index];
          dataToSend[fieldName] = response;
        });

        setResultsSent(true);

        const totalScore = userResponses.reduce(
          (total, response) => total + response,
          0
        );
        console.log(totalScore);

        try {
          const res = await postIndependenceScore({
            ...dataToSend,
            score: totalScore,
          });
          console.log("Puntaje enviado a la API:", res);

          if (res) {
            // setResultsSent(true);
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
        {!result.score ? (
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
        ) : (
          <div className="score-section">
            <h3>Resultados</h3>
            <p>
              Preguntas Respondidas:
              <span>{independenceQuestions.questions.length}</span>
            </p>
            <p>
              Puntaje Parcial: <span>{result.score}</span>
            </p>
          </div>
        )}
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
