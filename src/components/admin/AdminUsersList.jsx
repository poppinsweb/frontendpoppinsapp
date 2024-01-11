import { useEffect, useState } from "react";
import { getAll } from "../../services/authAxiosService";

export const AdminUsersList = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getAll(setUsers);
  }, []);

  return (
    <div>
      <h2>Usuarios</h2>
      {users != null ? (
        <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>ROL</th>
            <th>EMAIL</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.rol}</td>
              <td>{user.email}</td>
              <td>{user.id}</td>
            </tr>
          ))} 
        </tbody>
      </table> 
      )
       : ("No hay usuarios")}
    </div>
  );
};
