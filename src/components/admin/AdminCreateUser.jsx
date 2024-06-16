// import { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useAuth } from "../../context/AuthProvider";
// import "../../styles/admin/create-user.css";

// const rol = {
//   usuario: "usuario",
//   admin: "admin",
// };

// export const AdminCreateUser = () => {
//   const { register, handleSubmit } = useForm();
//   const { userRegister } = useAuth();

//   const onSubmit = async (values) => {
//     try {
//       const registrado = await userRegister(values);
//       console.log("Registro exitoso", registrado); // Condicional para validar registro
//     } catch (error) {
//       console.error("Error en la solicitud de registro:", error);
//     }
//   };

//   const handleClick = () => {
//     console.log("Registro Exitoso");
//   }
//   return (
//     <>
//       <h2 className="title-register">Registro de Usuarios</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="login-container">
//           <input
//             className="form-control my-3"
//             placeholder="E-mail"
//             type="email"
//             name="email"
//             {...register("email", { required: true })}
//           />
//           <input
//             className="form-control my-3 "
//             placeholder="Password"
//             type="password"
//             {...register("password", { required: true })}
//           />
//           <label>Rol</label>
//           <select {...register("rol")} className="form-select my-3">
//             <option value={rol.usuario}>Usuario</option>
//             <option value={rol.admin}>Admin</option>
//           </select>
//         </div>
//         <button
//           className="btn btn-color"
//           id="btn-register"
//           type="submit"
//           onClick={ handleClick }
//         >
//           Registrar
//         </button>
//       </form>
//     </>
//   );
// };

// if (!email || !password || !password2) {
//   Swal.fire({
//     icon: "warning",
//     title: "Un momento...",
//     text: "Todos los campos deben llenarse",
//   });
//     return;
//   }
//   if (password !== password2) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "Las contraseñas deben coincidir",
//     });
//     return;
//   }
//   if (password.length < 6) {
//     Swal.fire({
//       icon: "warning",
//       title: "Disculpe...",
//       text: "La contraseña debe tener al menos 6 caracteres",
//     });
//     return;
//   }
//   try {
//     const userCredential = await register(email, password, rol);
//     console.log(userCredential);
//     // console.log(rol);

//     Swal.fire({
//       icon: "success",
//       title: "Usuario registrado",
//       footer: "REGISTRO EXITOSO",
//       showConfirmButton: true,
//     });
//   } catch (error) {
//     if (error.code === "auth/email-already-in-use") {
//       Swal.fire({
//         icon: "warning",
//         title: "Por favor verifique...",
//         text: "El correo ya se encuentra registrado",
//       });
//     }
// }
