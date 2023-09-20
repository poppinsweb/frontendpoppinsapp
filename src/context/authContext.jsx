import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

export const authContext = createContext();

// Hook personalizado que se usará para acceder directamente a la data desde cualquier componente, se llama desde estos.:
export const useAuth = () => {
  const context = useContext(authContext)
  return context;
} 

// Aquí la conexión con Firebase
export function AuthProvider ({ children }) {
  const signup = (email, password) =>{
    createUserWithEmailAndPassword(auth, email, password)
  }

  return (
    <authContext.Provider value={{ signup }}>
      { children }
    </authContext.Provider>
  )
}
