import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest, registerRequest, getAll } from "../services/authAxiosService";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const initialUser = JSON.parse(localStorage.getItem("user")) || null;
  const [user, setUser] = useState(initialUser);
  const [userList, setUserlist] = useState([{}]);

    // LISTAR USUARIOS REGISTRADOS
    const getAllUsers = async () => {
      try {
        const users = await getAll();
        setUserlist(users);
        console.log(users);
      } catch (error) {
        console.error(error);
      }
    };  

  // REGISTRO DE USUARIO
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      localStorage.setItem("user", JSON.stringify(res));
      console.log("Respuesta de registrar en context", res);
      getAllUsers();
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
      console.log("Response de iniciar sesion en context: ", res.usuarioEncontrado);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// https://www.youtube.com/watch?v=H_vEJt5Id_I
