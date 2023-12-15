import CardIndependenceQuestion from "../../components/cards/CardIndependenceQuestion";
// import CardSurveyTest from "../../components/cards/CardSurveyTest";
import { independenceQuestions } from "../../components/constants/independenceQuestions";

export function PageIndependenceQuestions() {
  return (
    <div>
      {/* <CardSurveyTest/> */}
      <CardIndependenceQuestion questions={independenceQuestions.questions}/>
    </div>
  )
}
