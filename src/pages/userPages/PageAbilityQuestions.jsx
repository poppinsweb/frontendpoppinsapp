import CardAbilityDressingQuestion from "../../components/question-cards/CardAbilityDressingQuestion";
import CardAbilityGroomingQuestion from "../../components/question-cards/CardAbilityGroomingQuestion";
import CardAbilityFeedingQuestion from "../../components/question-cards/CardAbilityFeedingQuestion";
import { useState } from "react";

export function PageAbilityQuestions() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const components = [
    <CardAbilityGroomingQuestion key={"grooming"}/>,
    <CardAbilityDressingQuestion key={"dressing"}/>,
    <CardAbilityFeedingQuestion key={"feeding"} />
  ];

  const nextComponent = () => {
    setCurrentComponentIndex(prevIndex => (prevIndex + 1) % components.length);
  }

  return (
    <div>
      {components[currentComponentIndex]}
      {/* hay que hacer condicional para mostrar el boton */}
      <button onClick={nextComponent} className="btn-color" >Siguiente sección</button>
    </div>
  )
}

// hidden={true}