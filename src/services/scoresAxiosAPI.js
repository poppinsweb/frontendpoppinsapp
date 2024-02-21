import axios from "axios";

const TESTSCORES = "http://localhost:3000";

// ************** GET SCORES ************
// TRAE LOS SCORES DE INDEPENDENCIA POR ID
export const getIndependenceScore = async (id) => {
  try {
    const response = await axios.get(`${TESTSCORES}/api/independencia/${id}`);
    // console.log("Respuesta de getApi: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSkillsGroomingScore = async (id) => {
  try {
    const response = await axios.get(`${TESTSCORES}/api/habilidades_higiene/${id}`);
    console.log("Respuesta de getApi: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
