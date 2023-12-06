import { LogoToken } from "../../components/token/LogoToken";
import { InfoToken } from "../../components/token/InfoToken";
import { TokenBox } from "../../components/token/TokenBox";
import { TokenNavigation } from "../../components/token/TokenNavigation";

export function UserToken() {
  return (
    <div className="token-container">
      {/* <div className="row">
        <div className="col-12"> */}
          <InfoToken />
          <LogoToken />
          <TokenBox />
          <TokenNavigation />
        {/* </div>
      </div> */}
     </div>
  )
}
