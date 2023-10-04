import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
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
  const navigate = useNavigate();

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
  // const loginWithGoogle = async () => {
  //   const googleProvider = new GoogleAuthProvider();
  //   return await signInWithPopup(auth, googleProvider);
  // };

  // VERIFICA EL ESTADO DEL LOGIN
  useEffect(() => {
    const loginState = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
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
  };
};

// import { useReducer } from "react";
// import { loginReducer } from "../reducers/loginReducer";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import { auth } from "../services/firebase";

// const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
//   isAuth: false,
//   user: undefined,
// };

// export function useAuth() {
//   const [login, dispatch] = useReducer(loginReducer, initialLogin);
//   const navigate = useNavigate();

//   const handlerLogin = ({ email, password }) => {
//     const isLoginUser = auth({ email, password });

//     if (isLoginUser === true) {
//       const user = { email: "minita@mail.com" }
//       dispatch({
//         type: "login",
//         payload: user,
//       });
//       sessionStorage.setItem("login", JSON.stringify({
//         isAuth: true,
//         user: user,
//       }));
//       navigate('/token');
//     }
//     else if (isLoginAdmin === true) {
//       const admin = { email: "lorena@mail.com" }
//       dispatch({
//         type: "login",
//         payload: admin,
//       });
//       sessionStorage.setItem("login", JSON.stringify({
//         isAuth: true,
//         user: admin,
//       }));
//       navigate("/admin");
//     } else {
//       Swal.fire({
//         icon: 'error',
//         title: 'No logramos encontrarle...',
//         text: 'Revise sus credenciales o regístrese!',
//       })
//     }
//   };

//   const handlerLogout = () => {
//     dispatch({
//       type: "logout",
//     });
//     navigate("/");
//     sessionStorage.removeItem("login");
//   };

//   return {
//     login,
//     handlerLogin,
//     handlerLogout,
//     loginAdmin,
//     loginUser,
//   }
// }
