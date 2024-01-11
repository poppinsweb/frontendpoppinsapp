import axios from "axios";

const API = "http://localhost:3000";

// REGISTRO DE USUARIOS, SE RENDERIZARA EN LA RUTA ADMIN COMPONENTE ADMINCREATEUSER
export const registerRequest = async (user) => {
  try {
    const response = await axios.post(`${API}/api/registro`, user);
    console.log("Respuesta register en auth: ", response);
    if (response.status === 201) {
      return response.data;
    } else {
      throw new Error(
        `Error en la solicitud de registro. Estado: ${response.status}`
      );
    }
  } catch (error) {
    console.error("Error en la solicitud de registro", error);
    throw error;
  }
};

// LOGIN REQUEST
export const loginRequest = async (user) => {
  try {
    console.log("Enviando solicitud de inicio de sesión...");
    const response = await axios.post(`${API}/api/login`, user);
    // const loguedUser = response.data.usuarioEncontrado;
    // console.log(loguedUser);
    return response.data;
  } catch (error) {
    throw new Error("Error en el ingreso de usuario");
  }
};

// TRAE LOS USUARIOS REGISTRADOS
export const getAll = async (state) => {
  try {
    // console.log("Iniciando la solicitud GET...");
    const response = await axios.get(`${API}/api/usuarios`);
    state(response.data);
    // console.log("Respuesta: ", response.data);
    return response.data;
    // return state
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// // Elimina un usuario
// export const remove = async (id) => {
//   try {
//     await axios.delete(`${API}/api/${id}`);
//   } catch (error) {
//     console.error(error);
//   }
// };

// // Edita un usuario
// export const update = async (id, email) => {
//   try {
//     return await axios.put(`${API}/api/${id}`, {
//       email,
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };
