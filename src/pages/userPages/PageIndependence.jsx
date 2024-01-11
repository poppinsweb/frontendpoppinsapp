import { Independence } from "../../components/cards/Independence";
// import CardSurveyTest from "../../components/cards/CardSurveyTest";
import { independenceQuestions } from "../../components/constants/independenceQuestions";

export function PageIndependence() {
  return (
    <div>
      {/* <CardSurveyTest/> */}
      <Independence questions={independenceQuestions.questions}/>
    </div>
  )
}
