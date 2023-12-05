import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import "../../styles/login.css";
import "../../styles/button-google.css";
import Swal from "sweetalert2";

const initialState = {
  email: "",
  password: "",
};

export function UserLogin() {
  const [user, setUser] = useState(initialState);

  const navigate = useNavigate();

  const { email, password } = user;
  const { login } = useAuth();

  // ***********
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // **********
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser(initialState);

    if (!email || !password) {
      Swal.fire(
        "¿Está registrado?",
        "Debe ingresar sus credenciales de inicio o contactar a la administradora para solicitarlas",
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
          text: "Revise que sus datos estén correctos o contacte a la administradora"
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
