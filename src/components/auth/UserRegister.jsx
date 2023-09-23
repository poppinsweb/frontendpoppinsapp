import { useState } from "react";
import { useAuth } from "../../context/authContext";
import Swal from "sweetalert2";

const initialState = {
  email: "",
  password: "",
  password2: "",
};

export function UserRegister() {
  const [user, setUser] = useState(initialState);
  const [error, setError] = useState();

  const { email, password, password2 } = user;
  const { signup } = useAuth();

  // **********
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  // *********
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUser(initialState);
    try {
      await signup(email, password, password2); // Esta es la funcion del context destructurada en linea 12

      if (!email || (!password) || (!password2)) {
        Swal.fire({
          icon: "error",
          title: "Un momento...",
          text: "Todos los campos deben llenarse",
        });
        return;
      }
      if (password !== password2) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Las contraseñas deben coincidir",
        });
        return;
      }
      if (password.length < 6) {
        Swal.fire({
          icon: "error",
          title: "Disculpe...",
          text: "La contraseña debe tener al menos 6 caracteres",
        });
        return;
      }
      // ESTA VALIDACION ME VALIO
      // if (error === "auth/email-already-in-use" ) {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Su correo ya se encuentra registrado",
      //   });
      // }
    } catch  {
      if (error.code === "auth/email-already-in-use") {
        setError("Correo existente")
      }
      console.log(error.code);
    }
    Swal.fire({
      icon: "success",
      title: "Usuario registrado",
      footer: "Puede iniciar sesión",
      showConfirmButton: false,
      timer: 2500,
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="card-title title-login">Registro</h2>
          <form onSubmit={handleSubmit}>
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
              placeholder="Repetir password"
              type="password"
              name="password2"
              value={password2}
              onChange={handleChange}
            />
            <label>
              <input
                className="acept-register"
                type="checkbox"
                id="cbox1"
                value="first_checkbox"
                required
              />
              Acepto la politica de tratamiento de datos
            </label>
            <button className="btn btn-color btn-register" type="submit">
              Registrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
