import { UserLogin } from "../../components/auth/UserLogin";
import { UserRegister } from "../../components/auth/UserRegister";
import "../../styles/login.css";

export function UserAuthPage() {
  return (
    <>
      <div className="page-container">
        <div className="boxes-container">
          <div className="register-card">
            <UserRegister />
          </div>
          <div className="login-card">
            <UserLogin />
          </div>
        </div>
      </div>
    </>
  );
}
