import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

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
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/api/auth/login", { email, password, });
      setUser(response.data.user);
      console.log("User logged in. User:", response.data.user); // **************************** 
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const logout = async() => {
    await axios.post('http://localhost:3000/api/auth/logout')
    setUser(null); // Limpiar el usuario al hacer logout
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// https://www.youtube.com/watch?v=H_vEJt5Id_I
