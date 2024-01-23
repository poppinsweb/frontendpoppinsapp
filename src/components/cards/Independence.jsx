import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { independenceQuestions } from "../constants/independenceQuestions";
import "../../styles/users/questions.css";

export const Independence = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultsSent, setResultsSent] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const [userResponses, setUserResponses] = useState(Array(independenceQuestions.questions.length).fill(null));
  const [result, setResult] = useState({
    score: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Verificar si estamos en la última pregunta
    setIsLastQuestion(currentQuestion === independenceQuestions.questions.length - 1);
  }, [currentQuestion]);

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
    } else {
      navigate("/personales");
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < independenceQuestions.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      const finalScore = userResponses.reduce((totalScore, choice, index) => {
        const questionScore = choice; // Puntaje según la opción elegida
        independenceQuestions.questions[index].score.push(questionScore);

        return totalScore + questionScore;
      }, 0);

      setResult({
        score: finalScore,
      });
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
              {independenceQuestions.questions[currentQuestion].choices.map((choice, index) => (
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
              ))}
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
        <button onClick={handleBeforeQuestion} className="btn-color" disabled={currentQuestion === 0 || resultsSent}>
          {resultsSent ? "Reiniciar" : "Anterior"}
        </button>
        <button
          onClick={handleNextQuestion}
          disabled={resultsSent || isLastQuestion}
          className="btn-color"
        >
          {resultsSent
            ? "Siguiente sección"
            : isLastQuestion
            ? "Finalizar"
            : "Siguiente"}
        </button>
      </div>
    </div>
  );
};
