import { createContext, useState, useContext } from "react";
import { loginRequest, registerRequest } from "../services/authAxiosService";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // REGISTRO DE USUARIO
  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res);
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
      // console.log("Response: ", res.usuarioEncontrado)
      const loguedUser = res.usuarioEncontrado;
      console.log(loguedUser);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// https://www.youtube.com/watch?v=H_vEJt5Id_I
