import { createContext, useContext, useEffect, useState } from "react";
import { getIndependenceScore } from "../services/testAxiosAPI";

export const ScoresContext = createContext();

// ***********
// HOOK PARA LLAMAR A ESTE CONTEXTO
export const useScores = () => {
  const context = useContext(ScoresContext);
  if (!context) {
    throw new Error("useScores must be used within an UseScoresProvider");
  }
  return context;
};

// ***********

export const ScoresProvider = ({ children }) => {
  const [independenceScores, setIndependenceScores] = useState(null);

  const getIndependenceScores = async (id) => {
    try {
      const independenceScore = await getIndependenceScore(id);
      // Extraer solo los valores y convertirlos a un array
      const scoresArray = Object.values(independenceScore);
      setIndependenceScores(scoresArray);
      // console.log(scoresArray);
    } catch (error) {
      console.error("Error al obtener el score: ", error);
    }
  };





  // const [independenceScores, setIndependenceScores] = useState(null);

  // const getIndependenceScores = async(id) => {
  //   try {
  //     const independenceScore = await getIndependenceScore(id);
  //     setIndependenceScores(independenceScore);
  //   } catch (error) {
  //     console.error("Error al obtener el score: ", error);
  //   }
  // };
  

  return (
    <ScoresContext.Provider
      value={{
        getIndependenceScores,
        independenceScores,
      }}
    >
      {children}
    </ScoresContext.Provider>
  );
};



// habilidades-aseo scores
const getSkillsGroomingScores = () => {};

// habilidades-vestido scores

// habilidades-alimentacion scores

// habitos-alimentacion scores

// habitos-dormir scores

// responsabilidades scores