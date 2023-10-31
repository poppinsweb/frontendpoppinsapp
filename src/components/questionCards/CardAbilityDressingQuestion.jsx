import { useState, useEffect } from "react";
import { abilityDressingQuestions } from "../constants/abilityDressingQuestions";
import { useNavigate } from "react-router-dom";
import "../../styles/questions.css";

export default function CardAbilityDressingQuestion() {
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
    abilityDressingQuestions.questions[currentQuestion];

  const handleAnswer = (choice, index) => {
    setAnswerIdx(index);
    if (choice) {
      setAnswer(true);
    }
  };

  const handleBeforeQuestion = () => {
    if (currentQuestion !== 0) {
      setCurrentQuestion((prev) => prev - 1)
    } else {
      navigate("/habilidades-aseo")
    }
  };

  const handleNextQuestion= () => {
    setAnswerIdx(null);
    if (answer !== null) {
      scoreAsignation(currentQuestion, answerIdx);
    }
    if (currentQuestion !== abilityDressingQuestions.questions.length - 1) {
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
    const question = abilityDressingQuestions.questions[questionIndex];
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
       navigate("/habilidades-alimentacion") 
      }, 2000)
      setScoreFinal(result.score);
    }
  }, [showNavigation, result.score])

  if (scoreFinal > 0) {
    <p>Puntaje Final: <span>{scoreFinal}</span></p>;
  }

  return (
    <div className="question-main-container">
      <div className='question-container question-ability-container'>
      <h2 className="main-question-title">Habilidades de Vestido</h2>
        {!showResult ? (
          <>
            <h2 className="secoundary-question-title">{question}</h2>
            <ul className="question-section-ability">
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
              /{abilityDressingQuestions.questions.length}
            </span>
          </>
        ) : (
          <div className="score-section">
            <h3>Resultados</h3>
            <p>
              Preguntas Respondidas:
              <span>{abilityDressingQuestions.questions.length}</span>
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
            : currentQuestion === abilityDressingQuestions.questions.length - 1
            ? "Siguiente"
            : "Siguiente"
            }
        </button>
      </div>
    </div>
  );
}
