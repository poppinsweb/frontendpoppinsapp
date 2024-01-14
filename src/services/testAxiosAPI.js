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
//   export const postNewChild = async (objectChild) => {
//     try {
//       return await axios.post(BASE_URL, objectChild);
//     } catch (error) {
//       console.error(error)
//       throw error;
//     }
//   };

//   // EDITA UN USUARIO INFANTE SEGUN SU ID
// export const updateDataChild = async(id, email) => {
//     try {
//       return await axios.put(`${BASE_URL}/infantes/${id}`, {
//         email,
//       })
//     } catch (error) {
//       console.error(error);
//     }
//   };
