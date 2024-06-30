import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthProvider";

export const ChildContext = createContext();

// Hook para llamar a este contexto
export const useChild = () => {
  const context = useContext(ChildContext);
  if (!context) {
    throw new Error("useChild must be used within a ChildProvider");
  }
  return context;
};

export const ChildProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchChildData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3000/api/childrenres");
        const childData = response.data.find(
          (child) => child.evaluationtoken === user.evaluationtoken
        );

        if (!childData) {
          setError("No matching child data found");
          setData(null);
        } else {
          setData(childData);
          setError(null);
        }
      } catch (error) {
        setError(`Error loading children data: ${error.message}`);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (user && user.evaluationtoken) {
      fetchChildData();
    }
  }, [user]);

  return (
    <ChildContext.Provider value={{ loading, error, data }}>
      {children}
    </ChildContext.Provider>
  );
};
