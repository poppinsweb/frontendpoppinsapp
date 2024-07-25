import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useChild } from "../../context/ChildProvider";
import { useNavigate } from "react-router-dom";
import { useSubmitEvaluation } from "../../services/hooks/useSubmitEvaluation";
import axios from 'axios';
import { InfoToken } from "../token/InfoToken";

const CardQuestions = ({ questionsData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultsSent, setResultsSent] = useState(false);
  const [userResponses, setUserResponses] = useState([]);
  const { data: childData, loading: childLoading, error: childError } = useChild();
  const navigate = useNavigate();
  const { submitEvaluation, loading: submitting, error: submitError } = useSubmitEvaluation("http://localhost:3000/api/completevaluation");

  useEffect(() => {
    if (questionsData && questionsData.length > 0) {
      const savedResponses = sessionStorage.getItem('userResponses');
      if (savedResponses) {
        setUserResponses(JSON.parse(savedResponses));
      } else {
        setUserResponses(Array(questionsData[0].questions.length).fill(null));
      }
    }
  }, [questionsData]);

  const handleAnswer = (choice) => {
    const updatedResponses = [
      ...userResponses.slice(0, currentQuestion),
      {
        optionId: choice.id,
        answer: choice.label,
        description: questionsData[0].questions[currentQuestion].description,
      },
      ...userResponses.slice(currentQuestion + 1),
    ];
    setUserResponses(updatedResponses);
    sessionStorage.setItem('userResponses', JSON.stringify(updatedResponses));
  };

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
          evaluationId: questionsData[0]._id,
          evaluationtoken: childData.evaluationtoken,
          responses: userResponses.map((response, index) => ({
            questionId: questionsData[0].questions[index].id,
            optionId: response.optionId,
            description: response.description,
            answer: response.answer,
          })),
        };

        // Verificar si el token ya se ha usado una vez
        const responseData = await submitEvaluation(dataToSend);
        if (responseData) {
          console.log("Respuestas enviadas correctamente:", responseData);
          setResultsSent(true);
          alert("Resultados enviados correctamente. Por favor, haga clic en el botón de resultados.");

          // Actualiza el uso del token
          try {
            await axios.post(`http://localhost:3000/api/tokens/${childData.evaluationtoken}/use`);
            sessionStorage.removeItem('userResponses'); // Limpia el almacenamiento después de enviar las respuestas
            navigate("/token");
          } catch (error) {
            console.error("Error updating token usage:", error);
          }
        } else {
          console.error("Error submitting responses:", submitError);
        }
      }
    }
  };

  if (childLoading) return <p>Loading child data...</p>;
  if (childError) return <p>Error loading child data: {childError.message}</p>;

  if (!questionsData || questionsData.length === 0) {
    return <p>Loading questions...</p>;
  }
  const currentQuestionData = questionsData[0].questions[currentQuestion];

  console.log(userResponses);

  return (
    <div className="question-main-container">
      <div>
        <InfoToken />
      </div>
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
          disabled={resultsSent || submitting}
          className="btn-color"
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
