import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useChild } from "../../context/ChildProvider";
import { useNavigate } from "react-router-dom";
import { useSubmitEvaluation } from "../../services/hooks/useSubmitEvaluation";
import QuestionCarousel from "./QuestionCarousel";

const CardQuestions = ({ questionsData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultsSent, setResultsSent] = useState(false);
  const [userResponses, setUserResponses] = useState([]);
  const {
    data: childData,
    loading: childLoading,
    error: childError,
  } = useChild();
  const navigate = useNavigate();
  const {
    submitEvaluation,
    loading: submitting,
    error: submitError,
  } = useSubmitEvaluation("http://localhost:3000/api/completevaluation");

  useEffect(() => {
    if (questionsData && questionsData.length > 0) {
      const savedResponses = sessionStorage.getItem("userResponses");
      if (savedResponses) {
        setUserResponses(JSON.parse(savedResponses));
      } else {
        setUserResponses(Array(questionsData[0].questions.length).fill(null));
      }
    }
  }, [questionsData]);

  const handleAnswer = (choice) => {
    const currentQuestionId = questionsData[0].questions[currentQuestion].id;
    const isAdditionalQuestion = [49, 50, 51].includes(currentQuestionId);

    const updatedResponses = [
      ...userResponses.slice(0, currentQuestion),
      {
        optionId: isAdditionalQuestion ? choice.label : choice.id,
        answer: choice.label,
        description: questionsData[0].questions[currentQuestion].description,
      },
      ...userResponses.slice(currentQuestion + 1),
    ];

    if (isAdditionalQuestion) {
      console.log(`Respuesta capturada para pregunta adicional (ID: ${currentQuestionId}):`, choice.label);
    } else {
      console.log(`Respuesta capturada para pregunta (ID: ${currentQuestionId}):`, choice.id);
    }
    
    setUserResponses(updatedResponses);
    sessionStorage.setItem("userResponses", JSON.stringify(updatedResponses));
  };

  const handleBeforeQuestion = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const handleNextQuestion = async () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionsData[0].questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      try {
        await submitEvaluation(userResponses);
        setResultsSent(true);
        sessionStorage.removeItem("userResponses");
        navigate("/token");
      } catch (error) {
        console.error("Error submitting responses:", error);
      }
    }
  };

  if (childLoading) return <p>Loading child data...</p>;
  if (childError) return <p>Error loading child data: {childError.message}</p>;

  if (!questionsData || questionsData.length === 0) {
    return <p>Loading questions...</p>;
  }
  const currentQuestionData = questionsData[0].questions[currentQuestion];

  return (
    <div className="question-main-container">
      <div> Niño: {childData?.firstName}</div>
      <Card
        title={currentQuestionData.title}
        description={currentQuestionData.description}
        options={currentQuestionData.options}
        handleAnswer={handleAnswer}
        userResponse={userResponses[currentQuestion]?.optionId || null}
        currentQuestion={currentQuestion}
      />
      <div className="question-counter">
        Pregunta {currentQuestion + 1} de {questionsData[0].questions.length}
      </div>
      <div>
        <QuestionCarousel
          questions={questionsData[0].questions}
          currentQuestion={currentQuestion}
          onQuestionClick={setCurrentQuestion}
          userResponses={userResponses}
          className="question-carousel"
        />
      </div>
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
          disabled={
            !userResponses[currentQuestion]?.optionId ||
            resultsSent ||
            submitting
          } // Deshabilitado si no hay respuesta
          className="btn-color next-button"
        >
          {submitting
            ? "Enviando..."
            : resultsSent
            ? "Resultados Enviados"
            : "Siguiente"}
        </button>
        {submitError && <p>Error submitting data: {submitError.message}</p>}
      </div>
    </div>
  );
};

export default CardQuestions;
