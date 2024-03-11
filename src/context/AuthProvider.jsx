import { createContext, useState, useContext, useEffect } from "react";
import {
  loginRequest,
  registerRequest,
  getAllUsers,
} from "../services/authAxiosService";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

// HOOK PARA LLAMAR A ESTE CONTEXTO
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// ***********

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  JSON.parse(localStorage.getItem("user")) || null;
  const [user, setUser] = useState();
  const [userList, setUserList] = useState([{}]);
  const [tokenChild, setTokenChild] = useState("");

  // console.log(user);

  const createToken = () => {
    // CODIGO PARA CREAR EL TOKEN
    let randomString = Date.now().toString(20).substring(7).toUpperCase();
    let randomNumber = Math.random().toString(20).substring(7).toUpperCase();
    const tokenChild = (randomString + randomNumber);
    
    useEffect(() => {
      setTokenChild(tokenChild)
    }, [])
  };
  createToken();
  console.log(tokenChild);

  // LISTAR USUARIOS REGISTRADOS
  const getUsers = async () => {
    try {
      const users = await getUsers(setUserList);
      setUserList(users);
    } catch (error) {
      console.error(error);
    }
  };

  // REGISTRO DE USUARIO
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log("Respuesta de registrar en context", res);
    } catch (error) {
      console.error(error);
    }
  };

  // LOGIN DE USUARIO
  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res.usuarioEncontrado);
      localStorage.setItem("user", JSON.stringify(res.usuarioEncontrado));
      console.log(
        "Response de iniciar sesion en context: ",
        res.usuarioEncontrado.rol
      );
      if (res.usuarioEncontrado.rol === "admin") {
        navigate("/admin");
      } else {
        navigate("/token");
      }
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  // LOGOUT DE USUARIO
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        userList,
        signin,
        signup,
        logout,
        createToken,
        tokenChild,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// https://www.youtube.com/watch?v=H_vEJt5Id_I
