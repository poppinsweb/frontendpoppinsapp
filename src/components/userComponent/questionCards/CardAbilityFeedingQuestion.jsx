import { useState } from "react";
import "../../styles/questions.css";
import { abilityFeedingQuestions } from "../constants/abilityFeedingQuestions";

export default function CardAbilityFeedingQuestion() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    // correctAnswers: 0,
    // wrongAnswers: 0,
  });
  const [showResult, setShowResult] = useState(false);
  const { question, choices } = abilityFeedingQuestions.questions[currentQuestion];

  const onAnswerClick = (choice, index) => {
    setAnswerIdx(index);
    if (choice) {
      setAnswer(true);
    }
  };

  const onClickNext = () => {
    setAnswerIdx(null);
    if (answer !== null) {
      scoreAsignation(currentQuestion, answerIdx);
    }

    if (currentQuestion !== abilityFeedingQuestions.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const scoreAsignation = (questionIndex, optionIndex) => {
    const question = abilityFeedingQuestions.questions[questionIndex];
    const pointScore = optionIndex + 1;
    question.score.push(pointScore);

    if (pointScore > 2) {
      setResult((prev) => ({
        ...prev,
        score: prev.score + pointScore,
        correctAnswers: prev.correctAnswers + 1,
      }));
    } else {
      setResult((prev) => ({
        ...prev,
        score: prev.score + pointScore,
        wrongAnswers: prev.wrongAnswers + 1,
      }));
    }
  };

  return (
    <div className="question-main-container">
      <div className="question-container">
        <h2 className="main-question-title">Habilidades de la Alimentación</h2>
        {!showResult ? (
          <>
            <h2 className="secoundary-question-title">{question}</h2>
            <ul className="question-section-ability">
              {choices.map((choice, index) => (
                <div className="question-li" key={choice}>
                  <li
                    onClick={() => onAnswerClick(choice, index)}
                    key={choice}
                    className={
                      answerIdx === index ? "selected-answer question-text" : null
                    }
                  >
                    {choice}
                  </li>
                </div>
              ))}
            </ul>
            <span className="active-question-no">{currentQuestion + 1}</span>
            <span className="total-question">
              /{abilityFeedingQuestions.questions.length}
            </span>
          </>
        ) : (
          <div className="score-section">
            <h3>Resultados</h3>
            <p>
              Preguntas Respondidas:{" "}
              <span>{abilityFeedingQuestions.questions.length}</span>
            </p>
            <p>
              Puntaje Parcial: <span>{result.score}</span>
            </p>
          </div>
        )}
      </div>
      <div className='footer'>
        <button
          onClick={onClickNext}
          disabled={answerIdx === null}
          className='btn-color'
        >
          {showResult
            ? "Atrás"
            : currentQuestion === abilityFeedingQuestions.questions.length - 1
            ? "Final"
            : "Siguiente"}
        </button>
      </div>
    </div>
  );
}
