import { useEffect, useState } from "react";
import { getAllUsers, removeUser } from "../../services/authAxiosService";

export const AdminUsersList = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getAllUsers(setUsers);
  }, []);

  const handleDelete = async (userId) => {
    try {
      await removeUser(userId);
      getAllUsers(setUsers);
    } catch (error) {
      console.error("Error al eliminar al usuario", error);
    }
  };

  return (
    <>
      <div>
        <h2>Usuarios</h2>
        {users != null ? (
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>ROL</th>
                <th>EMAIL</th>
                <th>ID</th>
                <th>ELIMINAR</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.rol}</td>
                  <td>{user.email}</td>
                  <td>{user.id}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Borrar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          "No hay usuarios"
        )}
      </div>
      <div>
        <h2>Children</h2>
        <table className="table table-hover table-striped">
        <thead>
              <tr>
                <th>CODIGO</th>
                <th>EDAD</th>
                <th>SEXO</th>
                <th>GRADO</th>
              </tr>
            </thead>
        </table>
      </div>
    </>
  );
};
