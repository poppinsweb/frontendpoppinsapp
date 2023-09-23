import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

export const authContext = createContext();

// Hook personalizado que se usará para acceder directamente a la data desde cualquier componente, se llama desde estos:
export const useAuth = () => {
  const context = useContext(authContext)
  return context;
} 
export function AuthProvider ({ children }) {
  // REGISTRO DE USUARIOS EN FIREBASE
  const signup = (email, password) =>{
    createUserWithEmailAndPassword(auth, email, password)
    
  }
  // LOGIN DE USUARIOS
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    
  }
  return (
    <authContext.Provider value={{ signup, login }}>
      { children }
    </authContext.Provider>
  )
}
