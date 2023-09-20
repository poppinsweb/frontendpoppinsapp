import CardHabitSleepingQuestion from "../../components/Questions/CardHabitSleepingQuestion";
import CardHabitFeedingQuestion from "../../components/Questions/CardHabitFeedingQuestion";
import CardHabitResponsabilityQuestion from "../../components/Questions/CardHabitResponsabilityQuestion";
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
