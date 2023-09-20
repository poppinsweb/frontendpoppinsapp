// Carga los usuarios desde el reducer
// import { useReducer } from "react";
// import { usersReducer } from "../reducers/usersReducer";
// import { findAll, save } from "../services/userService";

// const initialUsers = [];

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
