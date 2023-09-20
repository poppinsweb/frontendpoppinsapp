import axios from "axios"

// const BASE_URL = "https://jsonplaceholder.typicode.com/users"
const BASE_URL = "http://shy-tree-3437.fly.dev/api/usuarios";

// Trae los usuarios existentes en el endpoint
export const findAll = async() => {
  try {
    const response = await axios.get(BASE_URL);
    return response;
  } catch (error) {
    console.error(error);
  }
  return null;
}

// Crea un nuevo usuario
export const save = async ({ email, password, password2 }) => {
  try {
    return await axios.post("https://shy-tree-3437.fly.dev/api/usuario", {
      // return await axios.post(BASE_URL, {
      email,
      password,
      password2,
    });
  } catch (error) {
    console.error(error)
  }
  return undefined;
}

// Elimina un usuario
// export const remove = async (id) => {
//   try {
//     await axios.delete(`${BASE_URL}/${id}`);
//   } catch (error) {
//     console.error(error);
//   }
// }

// Edita un usuario
// export const update = async(id, email) => {
//   try {
//     return await axios.put(`${BASE_URL}/${id}`, {
//       email,
//     })
//   } catch (error) {
//     console.error(error);
//   }
// }
