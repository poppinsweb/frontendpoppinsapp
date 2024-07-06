import { useFetchData } from "../../services/hooks/useFetchData";

export const AdminToken = () => {
  const { data:usersData, loading: usersLoading, error: usersError } = useFetchData("http://localhost:3000/api/users");
  // const { data:childrenData, loading: childrenLoading, error: childrenError } = useFetchData("http://localhost:3000/api/childrenres");

  if (usersLoading) return <p>Loading...</p>;
  if (usersError) return <p>Error loading user data: {usersError.message}</p>;
  // if (childrenError) return <p>Error loading children data: {childrenError.message}</p>;
  // if (data) console.log(data[0]);

  return (
    <>
      <div>
        <h2>TOKENS</h2>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Token</th>
              <th>Email</th>
              <th>Crear Token</th>
              <th>Eliminar Token</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user, index) => (
              <tr key={user._id}>
                <td>{user.evaluationtoken}</td>
                <td>{user.email}</td>
                
                <td>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => handleDelete(user.id)}
                  >
                    Crear
                  </button>
                </td>
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
    </>
  );
};
