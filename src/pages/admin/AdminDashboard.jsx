import { AdminFilterSelectors } from "../../components/admin/AdminFilterSelectors";
import { QuestionFilter } from "../../components/admin/QuestionFilter";
import "../../styles/admin/admin.css";

export function AdminDashboard() {
  return (
    <>
      <h2>Panel del Administrador Poppins</h2>
      <div className="container main-container">
        <div className="">
          <AdminFilterSelectors />
        </div>
        <div className="">
          {/* <label>PREGUNTAS:</label> */}
          <QuestionFilter />
        </div>
      </div>
    </>
  );
}
