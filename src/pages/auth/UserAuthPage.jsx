import { UserLogin } from "../../components/auth/UserLogin";

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
