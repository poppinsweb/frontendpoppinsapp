// src/components/Card.js
import React from 'react';
import "../../styles/users/questions.css";

const Card = ({ title, description, options, handleAnswer, userResponse, currentQuestion }) => {
  return (
    <div className="question-container-questions">
      <div className="num-question">
        <span className="active-question-no">{currentQuestion + 1}</span>
        <span className="total-question">/{options.length}</span>
      </div>
      <h3 className="secoundary-question-title">{title}</h3> 
      <h2>{description}</h2>
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
    </div>
  );
};

export default Card;
