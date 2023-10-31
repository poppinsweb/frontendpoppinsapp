import { useState, useEffect } from "react";
import { habitFeedingQuestions } from "../constants/habitFeedingQuestions";
import { useNavigate } from "react-router-dom";
import "../../styles/questions.css";

export default function CardAbilityFeedingQuestion() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [showNavigation, setShowNavigation] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [scoreFinal, setScoreFinal] = useState(0)
  const [result, setResult] = useState({
    score: 0,
  });

  const navigate = useNavigate();

  const { question, choices } =
    habitFeedingQuestions.questions[currentQuestion];

  const handleAnswer = (choice, index) => {
    setAnswerIdx(index);
    if (choice) {
      setAnswer(true);
    }
  };

  const handleBeforeQuestion = () => {
    if (currentQuestion !== 0) {
      setCurrentQuestion((prev) => prev - 1);
    } else{
      navigate("/habilidades-alimentacion")
    }
  };

  const handleNextQuestion = () => {
    setAnswerIdx(null);
    if (answer !== null) {
      scoreAsignation(currentQuestion, answerIdx);
    }
    if (currentQuestion !== habitFeedingQuestions.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
      setResult((prev) => ({
        ...prev,
        score: prev.score,
      }));
      setShowNavigation(true);
    }
  };

  const scoreAsignation = (questionIndex, optionIndex) => {
    const question = habitFeedingQuestions.questions[questionIndex];
    const pointScore = optionIndex + 1;
    question.score.push(pointScore);

    if (pointScore) {
      setResult((prev) => ({
        ...prev,
        score: prev.score + pointScore,
      }));
    } 
  };

  useEffect(() => {
    // Navega a la siguiente pantalla después de 2 segundos
    if (showNavigation) {
      setTimeout(() => {
       navigate("/habitos-dormir") 
      }, 2000)
      setScoreFinal(result.score);
    }
  }, [showNavigation, result.score])

  if (scoreFinal > 0) {
    <p>Puntaje Final: <span>{scoreFinal}</span></p>;
  }

  return (
    <div className="question-main-container">
      <div className='question-container'>
        <h2 className="main-question-title">Hábitos de Alimentación</h2>
        {!showResult ? (
          <>
            <h2 className="secoundary-question-title">{question}</h2>
            <ul className="question-section-habit">
              {choices.map((choice, index) => (
                <div className="question-li" key={choice}>
                  <li
                    onClick={() => handleAnswer(choice, index)}
                    key={choice}
                    className={
                      answerIdx === index 
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
              /{habitFeedingQuestions.questions.length}
            </span>
          </>
        ) : (
          <div className="score-section">
            <h3>Resultados</h3>
            <p>
              Preguntas Respondidas:{" "}
              <span>{habitFeedingQuestions.questions.length}</span>
            </p>
            <p>
              Puntaje Parcial: <span>{result.score}</span>
            </p>
          </div>
        )}
      </div>
      <div className="btn-container">
        <button onClick={handleBeforeQuestion} className="btn-color">
          {showResult
            ? "Reiniciar"
            : "Anterior"}
        </button>
        
        <button
          onClick={handleNextQuestion}
          disabled={answerIdx === null}
          className='btn-color'
        >
          {showResult
            ? "Siguiente sección"
            : currentQuestion === habitFeedingQuestions.questions.length - 1
            ? "Siguiente"
            : "Siguiente"
            }
        </button>
      </div>
    </div>
  );
}
