
import { getSurvey } from "../../services/cardsConnectionAxios"
import { useEffect, useState } from "react"

const CardSurveyTest = () => {
    const [surveyAnswers, setSurveyAnswers] = useState()

    useEffect( () => {
        const surveyAll = async() => {
            const res = await getSurvey()
            console.log(res)
            setSurveyAnswers(res.data)
        }
        surveyAll()
    }, [])

    console.log(surveyAnswers)

  return (
    <>
        <div>CardSurveyTest</div>
            {/* {
                Object.entries(surveyAnswers[0])?.map((res, index)=>
                    (
                        <li key={index}>{res}</li>
                    )
                )
            } */}
            {/* {
                surveyAnswers?.map( (opt) => {
                    return(
                    <ul key={opt.idsurvey}>
                        {Object.entries(opt).map((res, index)=>{
                            return (
                                <li key={index}>{res}</li>
                            )
                        })}
                    </ul>
                    )
                } )
            } */}
    </>
  )
}

export default CardSurveyTest