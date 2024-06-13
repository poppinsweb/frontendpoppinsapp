import React, { useState, useEffect } from 'react';
import Card from './Card';

const CardQuestions = ({ questionsData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultsSent, setResultsSent] = useState(false);
  const [userResponses, setUserResponses] = useState([]);

  useEffect(() => {
    if (questionsData && questionsData.length > 0) {
      setUserResponses(Array(questionsData[0].questions.length).fill(null));
    }
  }, [questionsData]);

  const handleAnswer = (choice) => {
    setUserResponses((prevResponses) => [
      ...prevResponses.slice(0, currentQuestion),
      choice,
      ...prevResponses.slice(currentQuestion + 1),
    ]);
  };

  console.log(userResponses);

  const handleBeforeQuestion = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const handleNextQuestion = async () => {
    const nextQuestion = currentQuestion + 1;

    if (questionsData && nextQuestion < questionsData[0].questions.length) {
      setCurrentQuestion(nextQuestion);
      setResultsSent(false);
    } else {
      if (userResponses.includes(null)) {
        alert("Responde todas las preguntas antes de enviar los resultados");
      } else {
        const dataToSend = {
          questions: userResponses.map((response, index) => ({
            questionId: questionsData[0].questions[index]._id,
            response,
          })),
        };

        setResultsSent(true);
        console.log(dataToSend);

        // Implementar lógica de envío aquí
      }
    }
  };

  if (!questionsData || questionsData.length === 0) {
    return <p>Loading...</p>;
  }

  const currentQuestionData = questionsData[0].questions[currentQuestion];
  return (
    <div className="question-main-container">
      <Card
        title={currentQuestionData.title}
        description={currentQuestionData.description}
        options={currentQuestionData.options}
        handleAnswer={handleAnswer}
        userResponse={userResponses[currentQuestion]}
        currentQuestion={currentQuestion}
      />
      <div className="btn-container">
        <button
          onClick={handleBeforeQuestion}
          className="btn-color"
          hidden={currentQuestion <= 0 || resultsSent}
        >
          {resultsSent || currentQuestion === 0 ? "inactivo" : "Anterior"}
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

export default CardQuestions;
