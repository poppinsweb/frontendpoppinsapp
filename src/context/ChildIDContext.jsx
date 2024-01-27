import { createContext, useContext, useState } from "react";

export const ChildIDContext = createContext();

export const ChildIDProvider = ({ children }) => {
  const [childID, setChildID] = useState(null);

  const updateChildID = (newChildID) => {
    setChildID(newChildID);
  };

  return (
    <ChildIDContext.Provider value={{ childID, updateChildID }}>
      {children}
    </ChildIDContext.Provider>
  );
};

// ***********
// HOOK PARA LLAMAR A ESTE CONTEXTO
export const useChildID = () => {
  const context = useContext(ChildIDContext);
  if (!context) {
    throw new Error("useChildID must be used within an ChildIDProvider");
  }
  return context;
};
