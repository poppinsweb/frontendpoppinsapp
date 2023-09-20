import CardIndependenceQuestion from "../../components/Questions/CardIndependenceQuestion";
import { independenceQuestions } from "../../components/constants/independenceQuestions";

export function PageIndependenceQuestions() {
  return (
    <div>
      <CardIndependenceQuestion questions={independenceQuestions.questions}/>
    </div>
  )
}
