import { useState } from "react";
import { independenceQuestions } from "../constants/independenceQuestions";
import "../../styles/questions.css";

export default function CardIndependenceQuestion() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState({
    score: 0,
  });
  const [showResult, setShowResult] = useState(false);

  const { question, choices } =
    independenceQuestions.questions[currentQuestion];

  const handleAnswer = (choice, index) => {
    setAnswerIdx(index);
    if (choice) {
      setAnswer(true);
    }
  };

  const handleBeforeQuestion = () => {
    if (currentQuestion !== 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  };

  const handleNextQuestion = () => {
    setAnswerIdx(null);
    if (answer !== null) {
      scoreAsignation(currentQuestion, answerIdx);
    }

    if (currentQuestion !== independenceQuestions.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const scoreAsignation = (questionIndex, optionIndex) => {
    const question = independenceQuestions.questions[questionIndex];
    const pointScore = optionIndex + 1;
    question.score.push(pointScore);

    if (pointScore) {
      setResult((prev) => ({
        ...prev,
        score: prev.score + pointScore,
      }));
    }
  };

  // console.log(independenceQuestions.questions[0]);
  // console.log(answerIdx);

  // AQUI LA VARIABLE CON EL PUNTAJE PARCIAL1
  let partial1 = result.score;
  console.log(partial1);

  return (
    <div className="question-main-container">
      <div className="question-container">
        {!showResult ? (
          <>
            <h2 className="main-question-title">{question}</h2>
            <ul className="question-section">
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
              /{independenceQuestions.questions.length}
            </span>
          </>
        ) : (
          <div className="score-section">
            <p>A continuación siguen las preguntas relacionadas con las habilidades. Por favor considera cada enunciado con relación al comportamiento del niño o niña en la última semana. Es obligatorio elegir una opción para cambiar de pregunta</p>


            {/* <h3>Resultados</h3>
            <p>
              Preguntas Respondidas:
              <span>{independenceQuestions.questions.length}</span>
            </p>
            <p>
              Puntaje Parcial: <span>{result.score}</span>
            </p> */}
          </div>
        )}
      </div>
      <div className="btn-container">
        <button
          onClick={handleBeforeQuestion}
          className="btn-color"
        >
          {showResult
            ? "Reiniciar"
            : "Anterior"}
        </button>
        {/* ********** */}
        <button
          onClick={handleNextQuestion}
          disabled={answerIdx === null}
          className="btn-color"
        >
          {showResult
            ? "Habilidades"
            : currentQuestion === independenceQuestions.questions.length - 1
            ? "Final"
            : "Siguiente"}
        </button>
      </div>
    </div>
  );
}
