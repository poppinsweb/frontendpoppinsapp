import { createContext, useContext, useState } from "react";
import { getIndependenceScore,  getSkillsGroomingScore } from "../services/scoresAxiosAPI";

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
  const [skillGroomingScores, setSkillGroomingScores] = useState(null);

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

  // habilidades-aseo scores
  const getSkillsGroomingScores = async(id) => {
    try {
      const skillGroomingScore = await getSkillsGroomingScore(id)
      const scoresArray = Object.values(skillGroomingScore);
      setSkillGroomingScores(scoresArray);
      console.log(scoresArray);
    } catch (error) {
      console.error("Error al obtener el score: ", error);
    }
  };

  return (
    <ScoresContext.Provider
      value={{
        getIndependenceScores,
        independenceScores,
        getSkillsGroomingScores,
        skillGroomingScores,
      }}
    >
      {children}
    </ScoresContext.Provider>
  );
};





// habilidades-vestido scores

// habilidades-alimentacion scores

// habitos-alimentacion scores

// habitos-dormir scores

// responsabilidades scores