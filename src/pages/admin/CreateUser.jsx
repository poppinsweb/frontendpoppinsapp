import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Select from "react-select";

const initialState = {
  email: "",
  password: "",
  password2: "",
};

export const CreateUser = () => {
  const [userRegister, setUserRegister] = useState(initialState);
  const [rol, setRol] = useState(null);

  const navigate = useNavigate();
  const { email, password, password2 } = userRegister;
  const { register } = useAuth();

  // **********
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserRegister({
      ...userRegister,
      [name]: value,
    });
  };

  const handleRolChange = (e)=> {
    const value = e.value
    setRol(value)
    console.log(value)
  }

  // *********
  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserRegister(initialState);
    if (!email || !password || !password2) {
      Swal.fire({
        icon: "warning",
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
        icon: "warning",
        title: "Disculpe...",
        text: "La contraseña debe tener al menos 6 caracteres",
      });
      return;
    }
    try {
      const userCredential = await register(email, password, rol);
      console.log(userCredential);
      console.log(rol)
      // SIGNED IN
      Swal.fire({
        icon: "success",
        title: "Usuario registrado",
        footer: "SESION INICIADA",
        showConfirmButton: false,
        timer: 2500,
      });
      navigate("/token");
    } catch (error) {
      const errorCode = error.code;
      // console.log(errorCode);
    //   const errorMessage = error.message;
      // console.log(errorMessage);

      if (errorCode === "auth/email-already-in-use") {
        Swal.fire({
          icon: "warning",
          title: "Por favor inicie sesión...",
          text: "Su correo ya se encuentra registrado",
        });
      }
    }
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
              <Select
                defaultValue={{
                  label: "Seleccione el rol",
                  value: "empty",
                }}
                options={[
                  {label: "administrador", value: "admin"},
                  {label: "usuario", value: "usuario"}
                ]}
                onChange={handleRolChange}
              />
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
