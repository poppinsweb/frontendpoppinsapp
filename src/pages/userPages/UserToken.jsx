import NavToken from "../../components/token/NavToken";
import TokenBox from "../../components/token/TokenBox";

export function UserToken() {
  return (
    <div className="container token-container">
      <div className="row">
        <div className="col">
          <NavToken />
          <TokenBox />
        </div>
      </div>
    </div>
  )
}
