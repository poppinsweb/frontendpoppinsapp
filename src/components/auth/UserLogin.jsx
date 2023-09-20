// LoginPage
// import { useContext, useState } from "react";
// import { AuthContext } from "../../auth/context/AuthProvider";
import Swal from "sweetalert2";
import '../../styles/App.css'
import '../../styles/login.css';
import { useState } from "react";

const initialLoginForm = {
  email: "",
  password: "",
};

export function UserLogin() {
  // const { handlerLogin } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const { email, password } = loginForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      Swal.fire(
        '¿Está registrado?',
        'Ingrese sus credenciales',
        'question'
      )
      return;
    }

    handlerLogin({ email, password });

    console.log(loginForm);
    setLoginForm(initialLoginForm);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="card-title title-login">Login</h2>
            <form onSubmit={onSubmitLogin}>
              <div className="container">
                <input
                  className="form-control my-3 "
                  placeholder="E-mail"
                  type="email"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                />
                <input
                  className="form-control my-3 "
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={onInputChange}
                />
                <input
                  className="form-control my-3 "
                  placeholder="Token"
                  type="text"
                  name="token"
                  // value={token}
                  onChange={onInputChange}
                />
              </div>
              <button className="btn btn-color btn-login" type="submit">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
