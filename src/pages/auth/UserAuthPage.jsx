import { UserLogin } from "../../components/auth/UserLogin";
import "../../styles/login.css";

export function UserAuthPage() {
  return (
    <>
      <div className="page-container">
        <div className="boxes-container">
          <div className="login-card">
            <UserLogin />
          </div>
        </div>
      </div>
    </>
  );
}
