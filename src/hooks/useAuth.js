import { auth, db } from "../services/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
  isAuth: false,
  user: undefined,
};

export const useAuth = () => {
  const [user, setUser] = useState(initialLogin);
  const [userRol, setUserRol] = useState();

  // REGISTRO DE USUARIOS EN FIREBASE
  const register = async (email, password, rol) => {
    try {
      const usuarioFirebase = await createUserWithEmailAndPassword(auth, email, password);
      const assignedRol = rol || "usuario";
      const docRef = doc(db, `usuarios/${usuarioFirebase.user.uid}`);
      await setDoc(docRef, {
        email: email,
        rol: assignedRol,
        id: usuarioFirebase.user.uid,
      });

      return usuarioFirebase;
    } catch (error) {
      console.error("Error durante el registro del usuario", error);
      throw error;
    }
  };

  // LOGIN DE USUARIOS
  const login = async (email, password) => {
    try {
      const currentUser = auth.currentUser;
      if (currentUser) {
        return;
      }
      await signInWithEmailAndPassword(auth, email, password);
      // console.log(userCredential.operationType);
    } catch (error) {
      console.error("Error durante el inicio de sesion", error);
    }
  };

  // OBTENER EL ROL DE LA BD
  const getRol = async (uid) => {
    const docuRef = doc(db, `usuarios/${uid}`);
    const docu = await getDoc(docuRef);
    const finalData = docu.data() ? docu.data().rol : "usuario";
    return finalData;
  };

  // VERIFICA EL ESTADO DEL LOGIN
  useEffect(() => {
    const loginState = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });

      const resultado = async () => {
        if (currentUser) {
          await getRol(currentUser.uid).then((rol) => {
            const userData = {
              uid: currentUser.uid,
              email: currentUser.email,
              rol: rol,
            };
            setUserRol(userData);
            console.log("userData final", userData);
          });
        }
      };
      resultado();

      setUser(currentUser);
    });
    return () => loginState();
  }, []);

  // LOGOUT DEL USUARIO
  const logout = async () => {
    await signOut(auth);
  };

  // PERSISTENCIA DEL ESTADO DE AUTENTICACION DE USUARIO
  const persistence = async () => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      await setPersistence(auth, browserLocalPersistence);
      console.log("Persistencia configurada ok");
    }
    catch(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error en la persistencia:", errorCode, errorMessage)
    };
  };

  return {
    login,
    logout,
    register,
    user,
    userRol,
    persistence,
  };
};
