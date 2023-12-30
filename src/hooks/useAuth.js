import { auth, db } from "../services/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
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
  // HOOK QUE VA A ACTUALIZAR EL ESTADO DE LOGIN
  const [user, setUser] = useState(initialLogin);
  const [userRol, setUserRol] = useState();

  // REGISTRO DE USUARIOS EN FIREBASE
  const register = async (email, password, rol) => {
    try {
      await setPersistence(auth, browserSessionPersistence);

      const usuarioFirebase = await createUserWithEmailAndPassword(auth, email, password);
      // console.log('Usuario de Firebase:', usuarioFirebase);
      const assignedRol = rol || "usuario";
      const docRef = doc(db, `usuarios/${usuarioFirebase.user.uid}`);
      await setDoc(docRef, {
        email: email,
        rol: rol,
        id: usuarioFirebase.user.uid,
      });

      await setPersistence(auth, browserLocalPersistence);

      return usuarioFirebase;
    } catch (error) {
      console.error("Error durante el registro del usuario", error);
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

  // LOGIN CON GOOGLE
  const loginWithGoogle = () => {
    const currentUser = auth.currentUser;
    if (
      currentUser &&
      currentUser.providerData[0].providerId === "google.com"
    ) {
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

  // LOGOUT DE USUARIO
  const logout = async () => {
    await signOut(auth);
  };

  // PERSISTENCIA DEL ESTADO DE AUTENTICACION DE USUARIO
  const persistence = setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth, email, password);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error en la persistencia:", errorCode, errorMessage)
    });

  return {
    login,
    logout,
    register,
    user,
    userRol,
    loginWithGoogle,
    persistence,
  };
};
