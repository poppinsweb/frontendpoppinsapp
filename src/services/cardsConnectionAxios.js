import axios from "axios";

const BASE_URL = "http://localhost:8080/api/infante";

// Trae los usuarios infante existentes en el endpoint
const getAllChildren = async () => {
  try {
    const response = await axios.get(BASE_URL);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
  return null;
};

// Crea un nuevo usuario infante
const postNewSurvey = async () => {
  try {
    return await axios.post(BASE_URL);
  } catch (error) {
    console.error(error)
  }
  return undefined;
}

// Edita agregando informacion a las tablas del usuario infante
const updateDataSurvey = async(id, email) => {
  try {
    return await axios.put(`${BASE_URL}/${id}`, {
      email,
    })
  } catch (error) {
    console.error(error);
  }
}

export { getAllChildren, postNewSurvey, updateDataSurvey }
