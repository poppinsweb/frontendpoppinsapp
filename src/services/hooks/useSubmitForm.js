import { useState } from "react";
import axios from "axios";

const useSubmitForm = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitForm = async (data) => {
    setLoading(true);
    setError(null);

    //   try {
    //     const response = await axios.post(endpoint, data);
    //     return response.data;
    //   } catch (err) {
    //     console.error("Error submitting form:", err); // Más detalles de depuración
    //     setError(err);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    try {
      const response = await axios.post(
        endpoint,
        data
        //   {
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // }
      );

      // setLoading(false);
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

  return { submitForm, loading, error };
};

export { useSubmitForm };
