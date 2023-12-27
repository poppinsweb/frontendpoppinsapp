import Select from "react-select";
import { useState } from "react";

import "../../styles/admin/admin.css";

const DBQuestion = ["1", "2", "3", "4"];

export function QuestionFilter() {
  const [selectedQuestion, setSelectedQuestion] = useState();

  const handleQuestionChange = ({ value }) => {
    // REVISAR LA FUNCION PARA QUE CAPTURE EL DATO, POSTERIORMENTE GUARDAR ESTE DATO EN UN ARRAY PARA EL FILTRADO
    console.log(selectedQuestion);
    setSelectedQuestion(value);
  };

  return (
    <div className="container">
      <form>
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
            />
          </div>
          <div className="select">
            <label>Independencia en la Alimentación:</label>
            <Select
              defaultValue={{ label: "Seleccione un puntaje:", value: "empty" }}
              options={DBQuestion.map((q) => ({ label: q, value: q }))}
              name="independencia_alimentacion"
            />
          </div>
          <div className="select">
            <label>Independencia en el Sueño:</label>
            <Select
              defaultValue={{ label: "Seleccione un puntaje:", value: "empty" }}
              options={DBQuestion.map((q) => ({ label: q, value: q }))}
              name="independencia_dormir"
            />
          </div>
          <div className="select">
            <label>Habilidades de Aseo Personal:</label>
            <Select
              defaultValue={{ label: "Seleccione un puntaje:", value: "empty" }}
              options={DBQuestion.map((q) => ({ label: q, value: q }))}
              name="habilidades_higiene"
            />
          </div>
          <div className="select">
            <label>Habilidades del Vestido:</label>
            <Select
              defaultValue={{ label: "Seleccione un puntaje:", value: "empty" }}
              options={DBQuestion.map((q) => ({ label: q, value: q }))}
              name="habilidades_vestido"
            />
          </div>
          <div className="select">
            <label>Habilidades en la Alimentación:</label>
            <Select
              defaultValue={{ label: "Seleccione un puntaje:", value: "empty" }}
              options={DBQuestion.map((q) => ({ label: q, value: q }))}
              name="habilidades_alimentacion"
            />
          </div>
          <div className="select">
            <label>Hábitos de Alimentación:</label>
            <Select
              defaultValue={{ label: "Seleccione un puntaje:", value: "empty" }}
              options={DBQuestion.map((q) => ({ label: q, value: q }))}
              name="habitos_alimentacion"
            />
          </div>
          <div className="select">
            <label>Hábitos de sueño:</label>
            <Select
              defaultValue={{ label: "Seleccione un puntaje:", value: "empty" }}
              options={DBQuestion.map((q) => ({ label: q, value: q }))}
              name="habitos_dormir"
            />
          </div>
          <div className="select">
            <label>Responsabilidades Personales y Escolares:</label>
            <Select
              defaultValue={{ label: "Seleccione un puntaje:", value: "empty" }}
              options={DBQuestion.map((q) => ({ label: q, value: q }))}
              name="habitos_responsabilidad"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
