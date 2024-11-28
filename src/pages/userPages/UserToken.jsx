import { LogoToken } from "../../components/token/LogoToken";
import { InfoToken } from "../../components/token/InfoToken";
import { TokenBox } from "../../components/token/TokenBox";
import { AdminToken } from "../../components/token/AdminToken";
import { useAuth } from "../../context/AuthProvider";

export function UserToken() {
  const { user } = useAuth();
  return (
    <>
      {user && user.admin === true ? (
        <div className="token-main-container">
          <AdminToken />
        </div>
      ) : (
        <>
          <div className="token-main-container">
            <LogoToken />
            <div className="container-info-token">
              <InfoToken />
              {/* <InfoToken />
              <InfoToken /> */}
            </div>
            <div className="row">
              <div className="col-md-10 token-card">
                <TokenBox />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
