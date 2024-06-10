// adminUsersPage
import { useFetchData } from "../../services/hooks/useFetchData";

const UserList = () => {

  const { data, loading, error } = useFetchData(
    "http://localhost:3000/api/users"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;
  // if (data) console.log(data[0]);

  return (
    <div>
      <h2>USUARIOS</h2>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Password</th>
            <th>Admin</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.admin.toString()}</td>
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
    </div>
  );
};

export default UserList;
