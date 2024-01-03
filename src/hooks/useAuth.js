import { useState } from "react";
import { register, login }  from "../services/authAxiosService";

// const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
//   isAuth: false,
//   user: undefined,
// };
// console.log(initialLogin);

export const useAuth = () => {
  const [ user, setUser ] = useState(null);
  const [ token, setToken ] = useState(null);
  const [authStatus, setAuthStatus] = useState();

  // REGISTRO DE USUARIOS
  const registerUser = async(email, password, rol) => {
    try {
      const newUser = await register(email, password, rol);
      setUser(newUser);
      return newUser;
    } catch (error) {
      console.error("Error en el registro", error.message);
      throw error;
    }
  };

  // LOGIN DE USUARIOS
  const loginUser = async(email, password) => {
    try {
      console.log("Iniciando sesión...");
      setAuthStatus("loading");

      const user = await login(email, password);
      console.log(user);
      setUser({ email, password, rol });
      setAuthStatus("authenticated");
      console.log("Inicio de sesión exitoso.");
    } catch (error) {
      console.error("Error en el login", error.message);
      setAuthStatus("unauthenticated");
      throw error;
    }
  };
  // console.log(initialLogin);

  return { registerUser, loginUser };
};
