import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { ButtonGoogle } from "./ButtonGoogle";
import "../../styles/login.css";
import Swal from "sweetalert2";

const initialState = {
  email: "",
  password: "",
};

export function UserLogin() {
  const [user, setUser] = useState(initialState);

  const navigate = useNavigate();

  const { email, password } = user;
  const { login, loginWithGoogle } = useAuth();

  // ***********
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    loginWithGoogle();
  };
  // **********
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setUser(initialState);

    if (!email || !password) {
      Swal.fire(
        "¿Está registrado?",
        "Debe ingresar sus credenciales de inicio",
        "question"
      );
      return;
    }

    try {
      await login(email, password);
      Swal.fire({
        icon: "success",
        title: "Sesión Iniciada",
        footer: "BIENVENIDO",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/token");
    } catch (error) {
      const errorCode = error.code;
      // console.log(errorCode);

      if (errorCode === "auth/invalid-login-credentials") {
        Swal.fire({
          icon: "error",
          title: "Por favor ingrese unas credenciales válidas",
          text: "Su correo o password son incorrectos",
        });
      }
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="card-title title-login">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="container">
                <input
                  className="form-control my-3 "
                  placeholder="E-mail"
                  type="email"
                  name="email"
                  autoComplete="on"
                  value={email}
                  onChange={handleChange}
                />
                <input
                  className="form-control my-3 "
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
                <input
                  className="form-control my-3 "
                  placeholder="Token"
                  type="token"
                  name="token"
                  // value={token}
                  onChange={handleChange}
                />
              </div>
              <div className="buttons">
                <ButtonGoogle onClick={handleGoogle} />
                <button className="btn btn-color btn-login" type="submit">
                  Ingresar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
