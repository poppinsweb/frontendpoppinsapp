// UsersList
// import { useContext } from "react";
import { UserTableRow } from "../admin/UserTableRow";
// import { UserContext } from "../../context/UserContext";

const users = [
  {
    id:1,
    email: "rosa@email.com",
    password: 12345,
    token: "abc123",
  },
  {
    id:2,
    email: "ana@email.com",
    password: 12345,
    token: "def123",
  },
  {
    id:3,
    email: "carlos@email.com",
    password: 12345,
    token: "ghi123",
  },
]

export function AdminDataTable() {
  // const { users } = useContext(UserContext);

  return (
    <div className="container ">
      <div className="row">
        <div className="col">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>#Id</th>
                <th>email</th>
                <th>token</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ id, email, token }) => (
                <UserTableRow
                  key={id}
                  id={id}
                  email={email}
                  token={token} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
