import axios from "axios";

const TESTAPI = "http://localhost:3000";

// // TRAE LOS INFANTES EXISTENTES
export const getAllChildren = async (state) => {
    try {
      const response = await axios.get(`${TESTAPI}/api/infantes`);
      state(response.data)
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
//   // CREA UN INFANTE. RENDERIZA EN PERSONALES
  export const postNewChild = async (objectChild) => {
    try {
      const response =  await axios.post(`${TESTAPI}/api/infantes`, objectChild);
      console.log("Respuesta crear infante: ", response);
      if (response.status === 201 || response.status === 200) {
        return response.data;
      } else {
        throw new Error (
          `Error en la creación del infante. Estado: ${response.status}`
        );
      }
    } catch (error) {
      console.error(error)
      throw error;
    }
  };

//   // EDITA UN USUARIO INFANTE SEGUN SU ID
// ********SE PUEDE HACER MAS ADELANTE EN UNA VENTANA EMERGENTE.********
// export const updateDataChild = async(id, email) => {
//     try {
//       return await axios.put(`${TESTAPI}/api/infantes/${id}`, {
//         email,
//       })
//     } catch (error) {
//       console.error(error);
//     }
//   };

// ENVIA LOS DATOS DE INDEPENDENCIA AL DUCHARSE, VESTIRSE, ALIMENTARSE, DORMIR: `${TESTAPI}/api/independencia`
export const postIndependenceScore = () => {

}

// ENVIA LOS DATOS DE HABILIDADES HIGIENE: `${TESTAPI}/api/habilidadeshigiene`
export const postSkillGroomingScore = () => {

}

// ENVIA LOS DATOS DE HABILIDADES VESTIDO: `${TESTAPI}/api/habilidadesvestido`

// ENVIA LOS DATOS DE HABILIDADES ALIMENTACION: `${TESTAPI}/api/habilidadesalimentacion`

// ENVIA LOS DATOS DE HABITOS ALIMENTACION: `${TESTAPI}/api/habitosalimentacion`

// ENVIA LOS DATOS DE HABITOS SUENIO: `${TESTAPI}/api/habitosdormir`

// ENVIA LOS DATOS DE HABITOS RESPONSABILIDADES: `${TESTAPI}/api/habitosresponsabilidad`
