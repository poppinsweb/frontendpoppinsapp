// import axios from "axios";

// const BASE_URL = "http://localhost:3000/infantes";

// // TRAE LOS INFANTES EXISTENTES
// export const getAllChildren = async () => {
//     try {
//       const response = await axios.get(BASE_URL);
//       console.log(response);
//       return response;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   };
  
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
