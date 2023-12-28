import { useState, useEffect } from "react";
// import { getAllChildren } from "../../services/cardsConnectionAxios";
import { useUsers } from "../../hooks/useUsers";

export const AdminUsersList = () => {
  // const [dataChildren, setDataChildren] = useState([]);
  const { getAllUsers, data } = useUsers()
  

  useEffect(() => {
    const getAllData = async () => {
      await getAllUsers()  
    };

    getAllData();
  }, []);

  return (
    <div>
      <h2>Usuarios</h2>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>ROL</th>
            <th>EMAIL</th>
            <th>TOKEN</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ id, rol, email }) => {
            return (
              <tr key={id}>
                <td>{rol}</td>
                <td>{email}</td>
                <td>{id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
