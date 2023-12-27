// UsersPage
import { AdminDataTable } from "../../components/admin/AdminDataTable";
// import { UserRegister } from "../../components/auth/UserRegister";

export function UserList() {

  return (
    <div className='container my-4 w-50'>
        <p>UserRegister</p>
        {/* <UserRegister/> */}

        <p>AdminDataTable</p>
        <AdminDataTable />
    </div>
  );
}
