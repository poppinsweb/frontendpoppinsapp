import { useState } from "react";
import axios from "axios";

const useSubmitEvaluation = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitEvaluation = async (data, evaluationtoken) => {
    setLoading(true);
    setError(null);
    console.log(data);
    try {  
     const response = await axios.post(endpoint, { ...data });
     setLoading(false);
     console.log("Response data", response.data);
     return response.data;
    } catch (err) {
      setLoading(false);
      console.error("Error submitting form:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { submitEvaluation, loading, error };
};

export { useSubmitEvaluation };
