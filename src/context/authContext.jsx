import { auth } from "../services/firebase";
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const authContext = createContext();

// Hook personalizado que se usará para acceder directamente a la data desde cualquier componente, se llama desde estos:
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is not auth provider");
  return context;
};

export function AuthProvider({ children }) {
  // HOOK QUE VA A ACTUALIZAR EL ESTADO DE LOGIN
  const [user, setUser] = useState(null)

  // REGISTRO DE USUARIOS EN FIREBASE
  const register = async (email, password) => {
    const loginCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(loginCredential);
  };
  // LOGIN DE USUARIOS
  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.operationType);
    
  };
  // LOGIN CON GOOGLE
  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  };

  // VERIFICA EL ESTADO DEL LOGIN
 useEffect(() => {
   onAuthStateChanged(auth, currentUser => {
    setUser(currentUser);
    console.log(user);
   })
 }, [])

  // LOGOUT DE USUARIO
  const logout = async () => {
    const response = await signOut(auth);
    console.log(response);
  };

  return (
    <authContext.Provider value={{ register, login, user, loginWithGoogle, logout }}>
      {children}
    </authContext.Provider>
  );
}

// https://www.youtube.com/watch?v=H_vEJt5Id_I


// if (userCredential.operationType === "signIn") {
//   alert("dentro");
// }