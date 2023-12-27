// Carga los usuarios desde el reducer
// import { useReducer } from "react";
// import { usersReducer } from "../reducers/usersReducer";
// import { findAll, save } from "../services/userService";

import { collection, getDocs, query } from "firebase/firestore/lite";
import { useState } from "react";
import { db } from "../services/firebase";

// const initialUsers = [];

export const useUsers = () => {
    // AQUI LOS HOOKS QUE MODIFICAN EL ESTADO DE LAS CARDS
    const [data, setData] = useState([]);
    // const [error, setError] = useState();
    // const [loading, setLoading] = useState({});
  
    const getAllUsers = async () => {
      try {
        // setLoading((prev) => ({ ...prev, getData: true }));
        const q = query(collection(db, "usuarios"));
        const querySnapshot = await getDocs(q);
        const datos = querySnapshot.docs.map((doc) => doc.data());
        console.log("probando datos de firestore", datos)
        setData(datos);
      } catch (error) {
        console.log(error);
        // setError(error.code);
      } 
    //   finally {
    //     setLoading((prev) => ({ ...prev, getData: false }));
    //   }
    };
  
    return { data, getAllUsers };
  }

// const initialUserForm = {
//   id: 0,
//   email: "",
//   password: "",
//   password2: "",
// };

// export const useUsers = () => {
//   const [users, dispatch] = useReducer(usersReducer, initialUsers);
  
//   const getUsers = async() => {
//     const result = await findAll();
//     console.log(result);
//     dispatch({
//       type: "loadingUsers",
//       payload: result.data,
//     });
//   }

//   const handlerAddUser = async(user) => {
//     // console.log(user);
//     let response;
//     if (user.id === 0) {
//       response = await save(user);
//     } 
//     dispatch({
//       type: (user.id === 0) ? "addUser" : "updateUser",
//       payload: response.data,
//     });
//   }

//   return {
//     users,
//     initialUserForm,
//     handlerAddUser,
//     getUsers,
//   }
// };
