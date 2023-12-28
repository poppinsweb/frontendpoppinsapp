import { AdminFilterSelectors } from "../../components/admin/AdminFilterSelectors";
import { QuestionFilter } from "../../components/admin/QuestionFilter";
// import { RenderDataChild } from "../../components/admin/RenderDataChild";
import "../../styles/admin/admin.css";

export function AdminDashboard() {
  return (
    <>
      <div className="container main-container">
        <h1 className="title-panel">Panel del Administrador Poppins</h1>
        <div className="">
          <AdminFilterSelectors />
          {/* <RenderDataChild /> */}
        </div>
        <div className="">
          <QuestionFilter />
        </div>
        <button className="btn btn-primary filter-btn btn-color">
          Filtrar
        </button>
      </div>
    </>
  );
}
