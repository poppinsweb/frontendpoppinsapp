import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
// import { useAuth } from "./AuthProvider";
import { useChild } from "./ChildProvider";

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
   const [linkedResponses, setLinkedResponses] = useState([]);
  // const [independenceData, setIndependenceData] = useState(null);
  const { data: dataChild } = useChild()

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responses = await axios.get(
          "http://localhost:3000/api/evaluationresponses"
        );

        console.log(responses);

        if (dataChild) {
          const linkedResponses = responses.data.filter(response =>
            response.childId === dataChild._id
          );
          setLinkedResponses(linkedResponses);
          console.log("Linked Responses:", linkedResponses);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (dataChild) {
      fetchData();
    }
  }, [dataChild]); 

  return (
    <EvaluationContext.Provider
      value={{
        loading,
        error,
        linkedResponses,
      }}
    >
      {children}
    </EvaluationContext.Provider>
  );
};
