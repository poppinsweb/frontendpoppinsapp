// import { useEffect, useState } from "react";
// import { getAllUsers, removeUser } from "../../services/authAxiosService";

// import { getAllChildren } from "../../services/testAxiosAPI";

// export const AdminUsersList = () => {
//   const [users, setUsers] = useState(null);
//   const [children, setChildren] = useState(null);

  
//   useEffect(() => {
//     getAllUsers(setUsers);
//   }, []);

//   useEffect(() => {
//     getAllUsers(setUsers);
//     if(users) console.log(users[users.length-1].id);
//   }, []);

//   useEffect(() => {
//     getAllChildren(setChildren);
//   }, []);

//   const handleDelete = async (userId) => {
//     try {
//       await removeUser(userId);
//       getAllUsers(setUsers);
//     } catch (error) {
//       console.error("Error al eliminar al usuario", error);
//     }
//   };
//   return (
//     <>
//       <div>
//         <h2>Usuarios</h2>
//         {users != null ? (
//           <table className="table table-hover table-striped">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>ROL</th>
//                 <th>EMAIL</th>
//                 <th>#TOKEN</th>
//                 <th>ELIMINAR USUARIO</th>
                
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.rol}</td>
//                   <td>{user.email}</td>
//                   <td>{user.usuario_token}</td>
//                   <td>
//                     <button
//                       className="btn btn-outline-danger"
//                       onClick={() => handleDelete(user.id)}
//                     >
//                       Borrar
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           "No hay usuarios"
//         )}
//       </div>
//       <div>
//         <h2>Niños</h2>
//         {children != null ? (
//           <table className="table table-hover table-striped">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>CODIGO</th>
//                 <th>Nacimiento AAAA-MM-DD</th>
//                 <th>SEXO</th>
//                 <th>GRADO</th>
//                 <th>USUARIO_ID</th>
//               </tr>
//             </thead>
//             <tbody>
//               {children.map((child) => (
//                 <tr key={child.id}>
//                   <td>{child.id}</td>
//                   <td>{child.codigo_identificador}</td>
//                   <td>{child.fecha_nacimiento}</td>
//                   <td>{child.sexo}</td>
//                   <td>{child.grado}</td>
//                   <td>{child.usuario_token}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           "No hay Niños"
//         )}
//       </div>
//     </>
//   );
// };
