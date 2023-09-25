import "../../styles/button-google.css";
import { FcGoogle } from "react-icons/fc";


export function ButtonGoogle() {
  return (
    <button className="btn-google" type="submit"><span className="google-icon"><FcGoogle /></span>
      Ingresar con Google
    </button>
  );
}
