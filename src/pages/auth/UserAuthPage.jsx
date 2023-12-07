import { UserLogin } from "../../components/auth/UserLogin";
import { UserRegister } from "../../components/auth/UserRegister";

export function UserAuthPage() {
  return (
    <>
      <div className="page-container">
        <div className="login-card">
          <UserLogin />
        </div>
      </div>
    </>
  );
}
