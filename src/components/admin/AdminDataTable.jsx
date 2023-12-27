// UsersList
// import { useContext } from "react";
// import { useEffect, useState } from "react";
// import { UserTableRow } from "../admin/UserTableRow";
// import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { useUsers } from "../../hooks/useUsers";
// import { getAllUsers } from "../../services/userAuthAxios";

export function AdminDataTable() {
  const [ dataChildren, setDataChildren ] = useState([])

  // const { user } = useAuth()
  const { data, getAllUsers } = useUsers();

  console.log(data) 
  
  useEffect(() =>{
    const getAllData = async () => {
      const result = await getAllUsers()
      // console.log(result.data)
      setDataChildren(result.data)
    }
    getAllData()
  },[])

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
              {/* <tr>
                <td>{user.uid}</td>
                <td>{user.email}</td>
                <td>{token}</td>
              </tr> */}
              {/* {dataChildren.map(({ id, email }) => (
                <UserTableRow
                  key={id}
                  id={id}
                  email={email}
                />
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
