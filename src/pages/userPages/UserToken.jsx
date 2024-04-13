import { LogoToken } from "../../components/token/LogoToken";
import { InfoToken } from "../../components/token/InfoToken";
import { TokenBox } from "../../components/token/TokenBox";
import { TokenNavigation } from "../../components/token/TokenNavigation";
import { useAuth } from "../../context/AuthProvider";

export function UserToken() {
  const { user } = useAuth();
  return (
    <>
      {user && user.rol === "admin" ? (
        <div className="token-main-container">
          <TokenBox />
        </div>
      ) : (
        <>
          <div className="token-main-container">
            <LogoToken />
            <div className="row">
              <div className="col-md-4">
                <InfoToken />
              </div>
              <div className="col-md-4 token-card">
                <TokenBox />
              </div>
              <div className="col-md-4">
                <TokenNavigation />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
