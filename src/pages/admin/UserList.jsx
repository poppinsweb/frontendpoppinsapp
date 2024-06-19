// adminUsersPage
import { useFetchData } from "../../services/hooks/useFetchData";

const UserList = () => {
  const { data:usersData, loading: usersLoading, error: usersError } = useFetchData("http://localhost:3000/api/users");
  const { data:childrenData, loading: childrenLoading, error: childrenError } = useFetchData("http://localhost:3000/api/childrenres");

  if (usersLoading || childrenLoading) return <p>Loading...</p>;
  if (usersError) return <p>Error loading user data: {usersError.message}</p>;
  if (childrenError) return <p>Error loading children data: {childrenError.message}</p>;
  // if (data) console.log(data[0]);

  return (
    <>
      <div>
        <h2>USUARIOS</h2>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Token</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, index) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.evaluationtoken}</td>
                <td>{user.email}</td>
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
      <h2>Niños</h2>
        {childrenData != null ? (
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                {/* <th>CODIGO</th> */}
                {/* <th>Nacimiento AAAA-MM-DD</th> */}
                <th>NOMBRES</th>
                <th>APELLIDOS</th>
                <th>SEXO</th>
                <th>GRADO</th>
                {/* <th>USUARIO_ID</th> */}
              </tr>
            </thead>
            <tbody>
              {childrenData.map((child) => (
                <tr key={child._id}>
                  <td>{child._id}</td>
                  <td>{child.firstName}</td>
                  {/* <td>{child.codigo_identificador}</td> */}
                  {/* <td>{child.fecha_nacimiento}</td> */}
                  <td>{child.lastName}</td>
                  <td>{child.responses[0].value}</td>
                  <td>{child.responses[0].value}</td>
                  {/* <td>{child.usuario_token}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          "No hay Niños"
        )}
    </>
  );
};

export default UserList;
