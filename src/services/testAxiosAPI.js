import axios from "axios";

const TESTAPI = "http://localhost:3000";

// TRAE LOS INFANTES EXISTENTES
export const getAllChildren = async (state) => {
  try {
    const response = await axios.get(`${TESTAPI}/api/infantes`);
    state(response.data);
    console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// TRAE LOS DATOS DEL ULTIMO INFANTE REGISTRADO
export const getLastChild = async () => {
  try {
    const response = await axios.get(
      `${TESTAPI}/api/infantes`
    );
    const latestChildArray = response.data.length - 1;
    const latestChild = response.data[latestChildArray];
    // console.log("Latest Child ID:", latestChild.id);
    // console.log("Latest Child Codigo Identificador:", latestChild.codigo_identificador);
    return latestChild;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// CREA UN INFANTE.
export const postNewChild = async (objectChild) => {
  try {
    const response = await axios.post(`${TESTAPI}/api/infantes`, objectChild);
    console.log("Respuesta crear infante: ", response.data);
    if (response.status === 201 || response.status === 200) {
      return response.data;
    } else {
      throw new Error(
        `Error en la creación del infante. Estado: ${response.status}`
      );
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// ENVIA LOS DATOS DE INDEPENDENCIA AL DUCHARSE, VESTIRSE, ALIMENTARSE, DORMIR: `${TESTAPI}/api/independencia`
export const postIndependenceScore = async (results) => {
  try {
    console.log("Datos a enviar a la API:", results);
    const response = await axios.post(`${TESTAPI}/api/independencia`, results);
    console.log("Respuesta de API: ", response.data);
    return true;
  } catch (error) {
    console.error("Error al enviar los resultados a la API: ", error);
    return false;
  }
};

// TRAE LOS DATOS DE INDEPENDENCIA... ES PARA PROBAR
export const getIndependenceScore = async (state) => {
  try {
    const response = await axios.get(`${TESTAPI}/api/independencia`);
    state(response.data);
    console.log("Respuesta de getApi: ", response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// ENVIA LOS DATOS DE HABILIDADES HIGIENE: `${TESTAPI}/api/habilidadeshigiene`
export const postSkillGroomingScore = async(results) => {
  try {
    console.log("Datos a enviar a la API:", results);
    const response = await axios.post(`${TESTAPI}/api/habilidadeshigiene`, results);
    console.log("Respuesta de API: ", response.data);
    return true;
  } catch (error) {
    console.error("Error al enviar los resultados a la API: ", error);
    return false;
  }
};

// ENVIA LOS DATOS DE HABILIDADES VESTIDO: `${TESTAPI}/api/habilidadesvestido`
export const postSkillDressingScore = async(results) => {
  try {
    console.log("Datos a enviar a la API:", results);
    const response = await axios.post(`${TESTAPI}/api/habilidadesvestido`, results);
    console.log("Respuesta de API: ", response.data);
    return true;
  } catch (error) {
    console.error("Error al enviar los resultados a la API: ", error);
    return false;
  }
};

// ENVIA LOS DATOS DE HABILIDADES ALIMENTACION: `${TESTAPI}/api/habilidadesalimentacion`
export const postSkillFeedingScore = async(results) => {
  try {
    console.log("Datos a enviar a la API:", results);
    const response = await axios.post(`${TESTAPI}/api/habilidadesalimentacion`, results);
    console.log("Respuesta de API: ", response.data);
    return true;
  } catch (error) {
    console.error("Error al enviar los resultados a la API: ", error);
    return false;
  }
};

// ENVIA LOS DATOS DE HABITOS ALIMENTACION: `${TESTAPI}/api/habitosalimentacion`
export const postHabitsFeedingScore = async(results) => {
  try {
    console.log("Datos a enviar a la API:", results);
    const response = await axios.post(`${TESTAPI}/api/habitosalimentacion`, results);
    console.log("Respuesta de API: ", response.data);
    return true;
  } catch (error) {
    console.error("Error al enviar los resultados a la API: ", error);
    return false;
  }
};

// ENVIA LOS DATOS DE HABITOS SUENIO: `${TESTAPI}/api/habitosdormir`
export const postHabitsSleepingScore = async(results) => {
  try {
    console.log("Datos a enviar a la API:", results);
    const response = await axios.post(`${TESTAPI}/api/habitosdormir`, results);
    console.log("Respuesta de API: ", response.data);
    return true;
  } catch (error) {
    console.error("Error al enviar los resultados a la API: ", error);
    return false;
  }
};

// ENVIA LOS DATOS DE HABITOS RESPONSABILIDADES: `${TESTAPI}/api/habitosresponsabilidad`
export const postHabitsResponsabilityScore = async(results) => {
  try {
    console.log("Datos a enviar a la API:", results);
    const response = await axios.post(`${TESTAPI}/api/habitosresponsabilidad`, results);
    console.log("Respuesta de API: ", response.data);
    return true;
  } catch (error) {
    console.error("Error al enviar los resultados a la API: ", error);
    return false;
  }
};
