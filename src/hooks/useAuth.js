import { auth } from "../services/firebase";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
  isAuth: false,
  user: undefined,
};

export const useAuth = () => {
  // HOOK QUE VA A ACTUALIZAR EL ESTADO DE LOGIN
  const [user, setUser] = useState(initialLogin);

  // REGISTRO DE USUARIOS EN FIREBASE
  const register = async (email, password) => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      return;
    }
    const loginCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(loginCredential);
  };

  // LOGIN DE USUARIOS
  const login = async (email, password) => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      return;
    }
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.operationType);
  };

  // LOGIN CON GOOGLE
  const loginWithGoogle = () => {
    const currentUser = auth.currentUser;
    if (
      currentUser && currentUser.providerData[0].providerId === "google.com") {
      return;
    }
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  // VERIFICA EL ESTADO DEL LOGIN
  useEffect(() => {
    const loginState = onAuthStateChanged(auth, (currentUser) => {
      // console.log({ currentUser });
      setUser(currentUser);
    });
    return () => loginState();
  }, []);

  // LOGOUT DE USUARIO
  const logout = async () => {
    const response = await signOut(auth);
    // console.log(response);
  };

  return {
    login,
    logout,
    register,
    user,
    loginWithGoogle,
  };
};
