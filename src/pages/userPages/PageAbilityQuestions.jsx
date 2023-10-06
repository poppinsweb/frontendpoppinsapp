import CardAbilityDressingQuestion from "../../components/questionCards/CardAbilityDressingQuestion";
import CardAbilityGroomingQuestion from "../../components/questionCards/CardAbilityGroomingQuestion";
import CardAbilityFeedingQuestion from "../../components/questionCards/CardAbilityFeedingQuestion";
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