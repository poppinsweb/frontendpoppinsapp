import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registerRequest, loginRequest, getAllUsers, assignTokenToUser,
} from "../services/authAxiosService";


export const AuthContext = createContext();

// **************************************************************
// HOOK PARA LLAMAR A ESTE CONTEXTO
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
// ********************************************************************

export const AuthProvider = ({ children }) => {
  const [allUsers, setAllUsers] = useState(null);
  const [user, setUser] = useState();
  const [userList, setUserList] = useState([{}]);
  // const [userToken, setUserToken] = useState();

  const navigate = useNavigate();

  // TRAE TODOS LOS USUARIOS
  useEffect(() => {
    getAllUsers(setAllUsers);
  }, []);

  // LISTA LOS USUARIOS REGISTRADOS
  const getUsers = async () => {
    try {
      const users = await getUsers(setUserList);
      setUserList(users);
    } catch (error) {
      console.error(error);
    }
  };

  // REGISTRO DE USUARIO
  const signup = async (userData) => {
    try {
      const res = await registerRequest(userData);
      console.log("respuesta de registrar en context", res);

      // if (res) await assignTokenToUser(res.id)
    } catch (error) {
      console.error("Error en el registro de usuario:",error);
    }
  };

  // LOGIN DE USUARIO
  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
      setUser(res.usuario);
      localStorage.setItem("user", JSON.stringify(res.usuario));
      console.log("Response de iniciar sesion en context: ", res.usuario.rol);
      if (res.usuario.rol === "admin") {
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
        allUsers,
        user,
        userList,
        signin,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// https://www.youtube.com/watch?v=H_vEJt5Id_I
