import { createContext, useContext, useEffect, useState } from "react";
// import { getLastChild, getAllChildren } from "../services/testAxiosAPI";

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
  const [userChildren, setUserChildren] = useState(null);
  
  useEffect(() => {
    const getLatestChild = async() => {
      try {
        if(latestChild) {
        const lastChild = await getLastChild();
        setLatestChild(lastChild);
        console.log("Dato actualizado correctamente:", lastChild)}
      } catch (error) {
        console.error("Error al obtener el infante: ", error);
      }
    };

    getLatestChild();
  }, []);

  const updateLatestChild = async() => {
    try {
      const lastChild = await getLastChild();
      setLatestChild(lastChild);
    } catch (error) {
      console.error("Error al actualizar el infante: ", error);
    }
  };
  
  useEffect(() => {
    const getUserChildren = async() => {
      try {
        getAllChildren(setUserChildren)
      } catch (error) {
        console.error("Error al obtener los infantes: ", error);
      }
    }
    getUserChildren()
  }, []);

  // console.log(userChildren);

  return (
    <ChildContext.Provider 
      value={{ 
        latestChild,
        updateLatestChild,
        userChildren,
      }}
    >
      {children}
    </ChildContext.Provider>
  );
};
