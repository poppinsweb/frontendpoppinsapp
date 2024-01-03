import axios from "axios";

const BASE_URL = "http://localhost:3000";

// REGISTRO DE USUARIOS, SE RENDERIZARA EN LA RUTA ADMIN COMPONENTE ADMINCREATEUSER
export const register = async (email, password, rol) => {
  try {
    const response = await axios.post(`${BASE_URL}/registro`, {
      email,
      password,
      rol,
    });
    return response.data;
  } catch (error) {
    throw new Error("Error en el registro");
  }
};

// LOGIN DE USUARIOS
// const authAxios = axios.create();
// // Interceptor para agregar el token a las solicitudes:
// authAxios.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export const login = async (email, password) => {
  try {
    console.log("Enviando solicitud de inicio de sesión...");
    const response = await authAxios.post(`${BASE_URL}/login`, {
      email,
      password,
    });
    console.log("Solicitud de inicio de sesión exitosa. Respuesta:", response);
    const user = response.data;
    console.log(user);
    
  } catch (error) {
    throw new Error("Error en el ingreso de usuario");
  }
};

// TRAE LOS USUARIOS REGISTRADOS
export const getAll = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/usuarios`);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Elimina un usuario
export const remove = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error(error);
  }
};

// Edita un usuario
export const update = async (id, email) => {
  try {
    return await axios.put(`${BASE_URL}/${id}`, {
      email,
    });
  } catch (error) {
    console.error(error);
  }
};
