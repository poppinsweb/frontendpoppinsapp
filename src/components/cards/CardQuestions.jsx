import React, { useState, useEffect } from "react";
import { useChild } from "../../context/ChildProvider";
import Card from "./Card";
import { useSubmitEvaluation } from "../../services/hooks/useSubmitEvaluation";

const CardQuestions = ({ questionsData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultsSent, setResultsSent] = useState(false);
  const [userResponses, setUserResponses] = useState([]);
  const { data: childData, loading: childLoading, error: childError } = useChild();
  const { submitEvaluation, loading: submitting, error: submitError } = useSubmitEvaluation("http://localhost:3000/api/completevaluations");

  useEffect(() => {
    if (questionsData && questionsData.length > 0) {
      setUserResponses(Array(questionsData[0].questions.length).fill(null));
    }
  }, [questionsData]);

  const handleAnswer = (choice) => {
    setUserResponses((prevResponses) => [
      ...prevResponses.slice(0, currentQuestion),
      { optionId: choice.id, answer: choice.label },
      ...prevResponses.slice(currentQuestion + 1),
    ]);
  };
  // console.log(questionsData[0].questions);
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
          evaluationId: questionsData[0]._id, // Reemplazar con el ID correcto de la evaluación
          evaluationtoken: childData.evaluationtoken, // Utilizar el ID del niño obtenido desde el contexto
          responses: userResponses.map((response, index) => ({
            questionId: questionsData[0].questions[index].id,
            optionId: response.optionId,
            answer: response.answer,
          })),
        };

        const responseData = await submitEvaluation(dataToSend);

        if (responseData) {
          console.log("Respuestas enviadas correctamente:", responseData);
          setResultsSent(true);
        } else {
          console.error("Error submitting user responses:", submitError);
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
  return (
    <div className="question-main-container">
      <Card
        title={currentQuestionData.title}
        description={currentQuestionData.description}
        options={currentQuestionData.options}
        handleAnswer={handleAnswer}
        userResponse={userResponses[currentQuestion]?.optionId || null} // pasar el id de la opción seleccionada
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
            ? "Siguiente Sección"
            : "Siguiente"}
        </button>
        {submitError && <p>Error submitting data: {submitError.message}</p>}
      </div>
    </div>
  );
};

export default CardQuestions;
