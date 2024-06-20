import React, { useState, useEffect } from 'react';
import { useSubmitForm } from "../../services/hooks/useSubmitForm";
import { useAuth } from '../../context/AuthProvider';
import Card from './Card';

const CardQuestions = ({ questionsData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultsSent, setResultsSent] = useState(false);
  const [userResponses, setUserResponses] = useState([]);
  const { submitForm, loading: submitting, error: submitError } = useSubmitForm("http://localhost:3000/api/responses");
  const { user } = useAuth();

  // console.log(user);
  // console.log(questionsData[0]._id);

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
          userId: user.id, // Reemplazar con el ID correcto del usuario
          responses: userResponses.map((response, index) => ({
            questionId: questionsData[0].questions[index].id,
            optionId: response.optionId,
            answer: response.answer,
          })),
        };

        console.log(dataToSend);
        const responseData = await submitForm(dataToSend, user.evaluationtoken);

        if (responseData) {
          console.log("Respuestas enviadas correctamente:", responseData);
          setResultsSent(true);
        } else {
          console.error("Error submitting user responses:", submitError);
        }
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
        userResponse={userResponses[currentQuestion]?.optionId || null} // pasar el id de la opción seleccionada
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
          disabled={resultsSent || submitting}
          className="btn-color"
        >
          {submitting ? "Enviando..." : resultsSent ? "Siguiente Sección" : "Siguiente"}
        </button>
        {submitError && <p>Error submitting data: {submitError}</p>}
      </div>
    </div>
  );
};

export default CardQuestions;
