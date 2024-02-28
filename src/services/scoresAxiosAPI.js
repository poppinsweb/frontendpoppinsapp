import axios from "axios";

const TESTSCORES = "http://localhost:3000/api";

// ************** GET SCORES ************
// TRAE LOS SCORES DE INDEPENDENCIA POR ID
export const getIndependenceScore = async (id) => {
  try {
    const response = await axios.get(`${TESTSCORES}/independencia/${id}`);
    // console.log("Respuesta de getApi: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSkillsGroomingScore = async (id) => {
  try {
    const response = await axios.get(`${TESTSCORES}/habilidadeshigiene/${id}`);
    // console.log("Respuesta de getApi: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getSkillsDressingScore = async (id) => {
  try {
    const response = await axios.get(`${TESTSCORES}/habilidadesvestido/${id}`);
    // console.log("Respuesta de getApi: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// feeding
export const getSkillsFeedingScore = async (id) => {
  try {
    const response = await axios.get(`${TESTSCORES}/habilidadesalimentacion/${id}`);
    // console.log("Respuesta de getApi: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// // feeding
export const getHabitsFeedingScore = async (id) => {
  try {
    const response = await axios.get(`${TESTSCORES}/habitosalimentacion/${id}`);
    // console.log("Respuesta de getApi: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// // sleeping
export const getHabitsSleepingScore = async (id) => {
  try {
    const response = await axios.get(`${TESTSCORES}/habitosdormir/${id}`);
    // console.log("Respuesta de getApi: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// // responsability
export const getResponsabilitiesScore = async (id) => {
  try {
    const response = await axios.get(`${TESTSCORES}/habitosresponsabilidad/${id}`);
    // console.log("Respuesta de getApi: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};