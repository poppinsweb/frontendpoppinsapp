import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useLatestChild } from "../../context/ChildContext";
import { useGetEvaluations } from "../../services/evaluationService/hooks/useGetEvaluations";
import "../../styles/users/questions.css";

const CardQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [resultsSent, setResultsSent] = useState(false);
  const [userResponses, setUserResponses] = useState([]);
  // const navigate = useNavigate();
  const questionsData = useGetEvaluations(); // Obtiene los datos desde la base de datos

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
          // datos_infante_id: latestChild.id,
        };

        setResultsSent(true);

        console.log(dataToSend);

        // try {
        //   const res = await postEvaluationsScore(dataToSend);
        //   console.log("Puntaje enviado a la API:", res);
        //   if (res) {
        //     navigate("/habilidades-aseo");
        //   }
        // } catch (error) {
        //   console.error("Error al enviar resultados a la API: ", error);
        // }
      }
    }
  };

  if (!questionsData || questionsData.length === 0) {
    return <p>Loading...</p>;
  }

  const currentQuestionData = questionsData[0].questions[currentQuestion];

  return (
    <div className="question-main-container">
      <div className="question-container-questions">
        <h1>{questionsData[0].title}</h1>
        <>
          <h2 className="secoundary-question-title">
            {currentQuestionData.title}
          </h2>
          <p>{currentQuestionData.description}</p>
          <ul className="question-section">
            {currentQuestionData.options.map((option, index) => (
              <div key={index} className="question-li">
                <li
                  onClick={() => handleAnswer(option.score)}
                  className={
                    userResponses[currentQuestion] === option.score
                      ? "selected-answer question-text"
                      : null
                  }
                >
                  {option.label}
                </li>
              </div>
            ))}
          </ul>
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-question">
            /{questionsData[0].questions.length}
          </span>
        </>
      </div>
      <div className="btn-container">
        <button
          onClick={handleBeforeQuestion}
          className="btn-color"
          disabled={currentQuestion === 0 || resultsSent}
        >
          {resultsSent || currentQuestion === 0 ? "Inactivo" : "Anterior"}
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
