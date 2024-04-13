import { AdminQuestionFilter } from "../../components/admin/AdminQuestionFilter";
import { UserChildData } from "../../components/admin/UserChildData";
import "../../styles/admin/admin.css";

export function AdminDashboard() {
  return (
    <>
      <div className="container main-container">
        <h1 className="title-panel">Panel del Administrador Poppins</h1>
        <div className="">
          <UserChildData />
        </div>
        <div className="">
          <AdminQuestionFilter />
        </div>
        <button className="btn btn-primary filter-btn btn-color">
          Filtrar
        </button>
      </div>
    </>
  );
}
