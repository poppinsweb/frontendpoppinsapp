// import { useEffect, useState } from "react";
// import { useUsers } from "../../hooks/useUsers";

// export function AdminDataTable() {
//   const [ dataChildren, setDataChildren ] = useState([])

//   const { data, getAllUsers } = useUsers();

//   console.log(data) 
  
//   useEffect(() =>{
//     const getAllData = async () => {
//       const result = await getAllUsers()
//       // console.log(result.data)
//       setDataChildren(result.data)
//     }
//     getAllData()
//   },[])

//   return (
//     <div className="container ">
//       <div className="row">
//         <div className="col">
//           <table className="table table-hover table-striped">
//             <thead>
//               <tr>
//                 <th>#Id</th>
//                 <th>email</th>
//                 <th>token</th>
//               </tr>
//             </thead>
//             <tbody>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
