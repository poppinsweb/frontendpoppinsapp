import { createContext, useContext, useEffect, useState } from "react";
import { getLastChild } from "../services/testAxiosAPI";

export const ChildContext = createContext();

// ***********
// HOOK PARA LLAMAR A ESTE CONTEXTO
export const useLatestChild = () => {
  const context = useContext(ChildContext);
  if (!context) {
    throw new Error("useChildID must be used within an ChildIDProvider");
  }
  return context;
};
// ***********

export const ChildProvider = ({ children }) => {
  // JSON.parse(localStorage.getItem("child")) || null
  const [latestChild, setLatestChild] = useState(null);
    
  useEffect(() => {
    const getLatestChild = async() => {
      try {
        const lastChild = await getLastChild();
        setLatestChild(lastChild);
        
      } catch (error) {
        console.error("Error al obtener el infante: ", error);
      }
    };

    getLatestChild();
  }, []);

  if (latestChild) console.log(latestChild.id);
  

  return (
    <ChildContext.Provider 
      value={{ 
        latestChild,
      }}
    >
      {children}
    </ChildContext.Provider>
  );
};
