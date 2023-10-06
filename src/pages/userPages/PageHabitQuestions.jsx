import CardHabitSleepingQuestion from "../../components/question-cards/CardHabitSleepingQuestion";
import CardHabitFeedingQuestion from "../../components/question-cards/CardHabitFeedingQuestion";
import CardHabitResponsabilityQuestion from "../../components/question-cards/CardHabitResponsabilityQuestion";
import { useState } from "react";

export function PageHabitQuestions() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

    const components = [
      <CardHabitFeedingQuestion key={"feeding"} />,
      <CardHabitSleepingQuestion key={"sleeping"} />,
      <CardHabitResponsabilityQuestion key={"responsability"} />
    ];
  
    const nextComponent = () => {
      setCurrentComponentIndex(prevIndex => (prevIndex + 1) % components.length);
    }
  
    return (
      <div>
        {components[currentComponentIndex]}
        <button onClick={nextComponent} className="btn-color">Siguiente sección</button>
      </div>
  )
}
