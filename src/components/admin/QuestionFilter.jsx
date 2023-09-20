import Select from "react-select";
import { useState } from "react";
import "../../styles/App.css";

const DBQuestion = [
  "1", 
  "2", 
  "3", 
  "4",
];

export function QuestionFilter() {
  const [selectedQuestion, setSelectedQuestion] = useState();

  const handleQuestionChange = ({ value }) => {
    console.log(selectedQuestion);
    setSelectedQuestion(value);
  };

  return (
    <>
      <div className="select">
        <label>Independencia en el Baño:</label>
        <Select
          defaultValue={{ label: "Seleccione una opción:", value: "empty" }} 
            options={DBQuestion.map((q) => ({ label: q, value: q }))}
            name="question"
            onChange={handleQuestionChange} 
        />
      </div>
      <div className="select">
      <label>Independencia en el Vestido:</label>
      <Select
        defaultValue={{ label: "Seleccione una opción:", value: "empty" }}
        name=""
      />
    </div>
    <div className="select">
      <label>Independencia en la Alimentación:</label>
      <Select
        defaultValue={{ label: "Seleccione una opción:", value: "empty" }}
        name=""
      />
    </div>
    <div className="select">
      <label>Independencia en el Sueño:</label>
      <Select
        defaultValue={{ label: "Seleccione una opción:", value: "empty" }}
        name=""
      />
    </div>
  </>
  );
}
