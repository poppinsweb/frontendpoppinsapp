import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthProvider";

export const EvaluationContext = createContext();

// **************************************************************
// HOOK PARA LLAMAR A ESTE CONTEXTO
export const useEvaluation = () => {
  const context = useContext(EvaluationContext);
  if (!context) {
    throw new Error("useEvaluation must be used within an EvaluationProvider");
  }
  return context;
};
// ********************************************************************

export const EvaluationProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [independenceData, setIndependenceData] = useState(null);
  // const [skillGroomingData, setSkillGroomingData] = useState(null);
  const [error, setError] = useState(null);
  const { user } = useAuth();

 useEffect(() => {
  const fetchData = async () => {
    setLoading(true);
    try {
      const responses = await axios.get("http://localhost:3000/api/responses");

      const filteredData = responses.data.filter(res => res.evaluationtoken === user.evaluationtoken)

      const independenceResponses = filteredData.flatMap(res => {
        res.responses.filter(response => [1, 2, 3, 4].includes(response.questionId))
      });

      setIndependenceData(independenceResponses);


      console.log(responses);
      
      const independence = responses.data;
      const skillGrooming = responses.data[1];
      console.log(skillGrooming);

      const dataResponse = independence.find(res => res.evaluationtoken === user.evaluationtoken);
      setIndependenceData(dataResponse)
      
    } catch (error) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if(user){
    fetchData();
  }
 }, [user]);
// console.log(independenceData);
  return (
    <EvaluationContext.Provider
      value={{
        loading,
        independenceData,
        error
      }}
    >
      { children }
    </EvaluationContext.Provider>
  );
};
