import Select from "react-select";
import { useEffect, useState } from "react";

import "../../styles/admin/admin.css";

const DBQuestion = [1, 2, 3, 4]; // ESTO VENDRIA DE LA BASE DE DATOS?

export function AdminQuestionFilter() {
  const [selectedQuestion, setSelectedQuestion] = useState({});

  const handleQuestionChange = ({ value }) => {
    console.log(value);
    setSelectedQuestion({
      ...selectedQuestion,
      value,
    });
  };

  useEffect(() => {
    console.log("Score selected: ", selectedQuestion);
  }, [selectedQuestion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submited", selectedQuestion);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="select-container">
          <div className="select">
            <label>Independencia en el Baño:</label>
            <Select
              defaultValue={{ label: "Seleccione un puntaje:", value: "empty" }}
              options={DBQuestion.map((q) => ({ label: q, value: q }))}
              name="independencia_ducha"
              onChange={handleQuestionChange}
            />
          </div>
          <div className="select">
            <label>Independencia en el Vestido:</label>
            <Select
              defaultValue={{ label: "Seleccione un puntaje:", value: "empty" }}
              options={DBQuestion.map((q) => ({ label: q, value: q }))}
              name="independencia_vestido"
              onChange={handleQuestionChange}
            />
          </div>
          <div className="select">
            <label>Independencia en la Alimentación:</label>
            <Select
              defaultValue={{ label: "Seleccione un puntaje:", value: "empty" }}
              options={DBQuestion.map((q) => ({ label: q, value: q }))}
              name="independencia_alimentacion"
              onChange={handleQuestionChange}
            />
          </div>
          <div className="select">
            <label>Independencia en el Sueño:</label>
            <Select
              defaultValue={{ label: "Seleccione un puntaje:", value: "empty" }}
              options={DBQuestion.map((q) => ({ label: q, value: q }))}
              name="independencia_dormir"
              onChange={handleQuestionChange}
            />
          </div>
          <div className="select">
            <label>Habilidades de Aseo Personal:</label>
            <Select
              defaultValue={{ label: "Seleccione un puntaje:", value: "empty" }}
              options={DBQuestion.map((q) => ({ label: q, value: q }))}
              name="habilidades_higiene"
              onChange={handleQuestionChange}
            />
          </div>
          <div className="select">
            <label>Habilidades del Vestido:</label>
            <Select
              defaultValue={{ label: "Seleccione un puntaje:", value: "empty" }}
              options={DBQuestion.map((q) => ({ label: q, value: q }))}
              name="habilidades_vestido"
              onChange={handleQuestionChange}
            />
          </div>
          <div className="select">
            <label>Habilidades en la Alimentación:</label>
            <Select
              defaultValue={{ label: "Seleccione un puntaje:", value: "empty" }}
              options={DBQuestion.map((q) => ({ label: q, value: q }))}
              name="habilidades_alimentacion"
              onChange={handleQuestionChange}
            />
          </div>
          <div className="select">
            <label>Hábitos de Alimentación:</label>
            <Select
              defaultValue={{ label: "Seleccione un puntaje:", value: "empty" }}
              options={DBQuestion.map((q) => ({ label: q, value: q }))}
              name="habitos_alimentacion"
              onChange={handleQuestionChange}
            />
          </div>
          <div className="select">
            <label>Hábitos de sueño:</label>
            <Select
              defaultValue={{ label: "Seleccione un puntaje:", value: "empty" }}
              options={DBQuestion.map((q) => ({ label: q, value: q }))}
              name="habitos_dormir"
              onChange={handleQuestionChange}
            />
          </div>
          <div className="select">
            <label>Responsabilidades Personales y Escolares:</label>
            <Select
              defaultValue={{ label: "Seleccione un puntaje:", value: "empty" }}
              options={DBQuestion.map((q) => ({ label: q, value: q }))}
              name="habitos_responsabilidad"
              onChange={handleQuestionChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
