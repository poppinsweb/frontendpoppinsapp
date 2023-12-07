// UsersList
// import { useContext } from "react";
import { useEffect, useState } from "react";
import { UserTableRow } from "../admin/UserTableRow";
// import { findAll } from "../../services/userAuthAxios";

export function AdminDataTable() {
  const [ dataChildren, setDataChildren ] = useState([])
  
  useEffect(() =>{
    const getAllData = async () => {
      const result = await findAll()
      console.log(result.data)
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
              {dataChildren.map(({ id, email }) => (
                <UserTableRow
                  key={id}
                  id={id}
                  email={email}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
