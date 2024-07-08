import { createContext, useContext, useState, useEffect } from "react";

export const EvaluationTokenContext = createContext();

// **************************************************************
// HOOK PARA LLAMAR A ESTE CONTEXTO
export const useEvaluationToken = () => {
  const context = useContext(EvaluationTokenContext);
  if (!context) {
    throw new Error("useEvaluationToken must be used within an EvTokenProvider");
  }
  return context;
};
// ********************************************************************

export const EvaluationTokenProvider = ({ children }) => {
  const [evaluTokens, setEvaluTokens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvaluTokens = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/tokens');
      if (!response.ok) {
        throw new Error('Error fetching tokens');
      }
      const data = await response.json();
      setEvaluTokens(data.tokens);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvaluTokens();
  }, [])

  return (
    <EvaluationTokenContext.Provider
      value={{
        loading,
        error,
        evaluTokens,
        fetchEvaluTokens,
      }}
    >
      { children }
    </EvaluationTokenContext.Provider>
  );
};
