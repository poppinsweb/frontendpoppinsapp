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
   const [error, setError] = useState(null);
  const [independenceData, setIndependenceData] = useState(null);
  
  const { user } = useAuth();


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responses = await axios.get(
          "http://localhost:3000/api/evaluationresponses", {params: { evaluationtoken: user.evaluationtoken }}
        );

        // console.log(responses.evaluationtoken);
        // Filtrar datos según el evaluationtoken
        // const filteredData = responses.data.filter(
        //   (res) => res.evaluationtoken === user.evaluationtoken
        // );
        // console.log("filteredData", filteredData);

        // if (filteredData.length > 0) {
        //   // Asignar las respuestas correspondientes
        //   // const independenceResponses = responses.data[0];
        //   // const skillGroomingResponses = responses.data[1];

        //   // setIndependenceData(
        //   //   independenceResponses ? independenceResponses : null
        //   // );
        //   // setSkillsGroomingData(
        //   //   skillGroomingResponses ? skillGroomingResponses : null
        //   // );
        // }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user]); 

  // console.log(independenceData);
  // console.log(skillsGroomingData);

  return (
    <EvaluationContext.Provider
      value={{
        loading,
        independenceData,
        // skillsGroomingData,
        // skillsDressingData,
        // skillsFeedingData,
        // habitsFeedingData,
        // habitsSleepingData,
        // responsabilitiesData,
        // aditionalData,
        error,
      }}
    >
      {children}
    </EvaluationContext.Provider>
  );
};
