import { LogoToken } from "../../components/token/LogoToken";
import { InfoToken } from "../../components/token/InfoToken";
import { TokenBox } from "../../components/token/TokenBox";
import { TokenNavigation } from "../../components/token/TokenNavigation";

export function UserToken() {
  return (
    <div className="token-container">
      <InfoToken />
      <LogoToken />
      <div className="row">
        <div className="col-md-8 token-card">
          <TokenBox />
        </div>
        <div className="col-md-4">
          <TokenNavigation />
        </div>
      </div>
    </div>
  );
}
