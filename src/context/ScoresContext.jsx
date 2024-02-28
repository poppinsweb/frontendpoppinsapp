import { createContext, useContext, useState } from "react";
import {
  getIndependenceScore,
  getSkillsGroomingScore,
  getSkillsDressingScore,
  getSkillsFeedingScore,
  getHabitsFeedingScore,
  getHabitsSleepingScore,
  getResponsabilitiesScore,
} from "../services/scoresAxiosAPI";

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
  const [skillDressingScores, setSkillDressingScores] = useState(null);
  const [skillFeedingScores, setSkillFeedingScores] = useState(null);
  const [habitFeedingScores, setHabitFeedingScores] = useState(null);
  const [habitSleepingScores, setHabitSleepingScores] = useState(null);
  const [responsabilityScores, setResponsabilityScores] = useState(null);

  // Independencia scores
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
  const getSkillsGroomingScores = async (id) => {
    try {
      const skillGroomingScore = await getSkillsGroomingScore(id);
      const scoresArray = Object.values(skillGroomingScore);
      setSkillGroomingScores(scoresArray);
      // console.log(scoresArray);
    } catch (error) {
      console.error("Error al obtener el score: ", error);
    }
  };

  // habilidades-vestido scores
  const getSkillsDressingScores = async (id) => {
    try {
      const skillDressingScore = await getSkillsDressingScore(id);
      const scoresArray = Object.values(skillDressingScore);
      setSkillDressingScores(scoresArray);
      // console.log(scoresArray);
    } catch (error) {
      console.error("Error al obtener el score: ", error);
    }
  };

  // habilidades-alimentacion scores
  const getSkillsFeedingScores = async (id) => {
    try {
      const skillFeedingScore = await getSkillsFeedingScore(id);
      const scoresArray = Object.values(skillFeedingScore);
      setSkillFeedingScores(scoresArray);
      // console.log(scoresArray);
    } catch (error) {
      console.error("Error al obtener el score: ", error);
    }
  };

  // habitos-alimentacion scores
  const getHabitsFeedingScores = async (id) => {
    try {
      const habitFeedingScore = await getHabitsFeedingScore(id);
      const scoresArray = Object.values(habitFeedingScore);
      setHabitFeedingScores(scoresArray);
      // console.log(scoresArray);
    } catch (error) {
      console.error("Error al obtener el score: ", error);
    }
  };

  // habitos-dormir scores
  const getHabitsSleepingScores = async (id) => {
    try {
      const habitSleepingScore = await getHabitsSleepingScore(id);
      const scoresArray = Object.values(habitSleepingScore);
      setHabitSleepingScores(scoresArray);
    } catch (error) {
      console.error("Error al obtener el score: ", error);
    }
  };

  // responsabilidades scores
  const getResponsabilitiesScores = async (id) => {
    try {
      const responsabilityScore = await getResponsabilitiesScore(id);
      const scoresArray = Object.values(responsabilityScore);
      setResponsabilityScores(scoresArray);
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
        getSkillsDressingScores,
        skillDressingScores,
        getSkillsFeedingScores,
        skillFeedingScores,
        getHabitsFeedingScores,
        habitFeedingScores,
        getHabitsSleepingScores,
        habitSleepingScores,
        getResponsabilitiesScores,
        responsabilityScores,
      }}
    >
      {children}
    </ScoresContext.Provider>
  );
};
