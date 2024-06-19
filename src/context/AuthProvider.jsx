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

  useEffect(() => {
    // Verifica el estado de autenticación cuando se monta el componente
    const sessionExist = localStorage.getItem('sessionActive');
    if (sessionExist) {
      const verifyUser = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/auth/verify', { withCredentials: true });
            setUser(response.data.user);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };
    verifyUser();
    } else {
      setLoading(false);
    }
    
}, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3000/api/auth/login", { email, password, });
      setUser(response.data.user);
      localStorage.setItem('sessionActive', 'true');
      console.log("User logged in. User:", response.data.user); // **************************** 
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const logout = async() => {
    await axios.post('http://localhost:3000/api/auth/logout', {}, { withCredentials: true });
    setUser(null); // Limpiar el usuario al hacer logout
    localStorage.removeItem('sessionActive');
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
