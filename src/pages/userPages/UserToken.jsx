import { LogoToken } from "../../components/token/LogoToken";
import { InfoToken } from "../../components/token/InfoToken";
import { TokenBox } from "../../components/token/TokenBox";
import { TokenNavigation } from "../../components/token/TokenNavigation";

export function UserToken() {
  return (
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
  );
}
