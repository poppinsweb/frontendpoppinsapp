import { createContext, useState, useContext } from "react";
import { loginRequest } from "../services/authAxiosService";

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

  // LOGIN DE USUARIO
  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      setUser(res);
      console.log("Response: ", res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// https://www.youtube.com/watch?v=H_vEJt5Id_I
