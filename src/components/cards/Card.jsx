// src/components/Card.js
import React from 'react';
import "../../styles/users/questions.css";

const Card = ({ title, description, options, handleAnswer, userResponse, currentQuestion }) => {
  return (
    <div className="question-container-questions">
      <h2 className="secoundary-question-title">{title}</h2>
      <p>{description}</p>
      <ul className="question-section">
        {options.map((option, index) => (
          <div key={index} className="question-li">
            <li
              onClick={() => handleAnswer(option.score)}
              className={
                userResponse === option.score ? "selected-answer question-text" : null
              }
            >
              {option.label}
            </li>
          </div>
        ))}
      </ul>
      <span className="active-question-no">{currentQuestion + 1}</span>
      <span className="total-question">/{options.length}</span>
    </div>
  );
};

export default Card;
