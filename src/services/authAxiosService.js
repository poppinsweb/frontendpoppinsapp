import axios from "axios";

const API = "http://localhost:3000";

// REGISTRO DE USUARIOS, SE RENDERIZARA EN LA RUTA ADMIN COMPONENTE ADMINCREATEUSER
export const registerRequest = async (user) => {
  try {
    const response = await axios.post(`${API}/api/registro`, {...user});
    if (response.status === 201 || response.status === 200) {
      console.log("Respuesta register en auth: ", response.data);

      const userId = response.data.id;
      console.log(userId);

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

// Función para asignar el token al usuario en codigo_token
export const assignTokenToUser = async (userId) => {
  try {
    // Realiza la solicitud POST para asignar el token al usuario
    const response = await axios.post(`${API}/api/usertoken/${userId}`);
    console.log("Token asignado al usuario: ", response.data);
    return response.data;
  } catch (error) {
    console.error("Error al asignar el token al usuario", error);
    throw error;
  }
};

// LOGIN REQUEST
export const loginRequest = async (user) => {
  try {
    console.log("Enviando solicitud de inicio de sesión...");
    const response = await axios.post(`${API}/api/login`, user);
    
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Error en el ingreso de usuario");
  }
};

// TRAE LOS USUARIOS REGISTRADOS
export const getAllUsers = async (updateState) => {
  try {
    // console.log("Iniciando la solicitud GET...");
    const response = await axios.get(`${API}/api/usuarios`);
    updateState(response.data);
    console.log("Respuesta user: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// BORRAR USUARIO REGISTRADO
export const removeUser = async (userId) => {
  try {
    const response = await axios.delete(`${API}/api/usuarios/${userId}`);
    console.log("Usuario eliminado: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// // LLAMAR AL TOKEN DE USUARIO DESDE USER
// export const callUserToken = async() => {
//   try {
//     const response = await axios.post(`${API}/api/crear-token`)
//     if (response.status === 201 || response.status === 200) {
//     console.log("respuesta de token en axios", response);
//     // return response.data;
//     }
//   } catch (error) {
//     console.error("Error en la creacion del token de usuario", error);
//     throw error;
//   }
// }
