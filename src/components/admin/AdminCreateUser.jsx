import { useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";

import { useAuth } from "../../hooks/useAuth";
import "../../styles/admin/create-user.css";

const initialState = {
  email: "",
  password: "",
  password2: "",
};

export const AdminCreateUser = () => {
  const [userRegister, setUserRegister] = useState(initialState);
  const [rol, setRol] = useState(null);

  const { email, password, password2 } = userRegister;
  const { register } = useAuth();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserRegister({
      ...userRegister,
      [name]: value,
    });
  };

  const handleRolChange = (e) => {
    const value = e.value;
    setRol(value === "default" ? "usuario" : value);
    // console.log(value);
  };

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
      // console.log(rol);

      Swal.fire({
        icon: "success",
        title: "Usuario registrado",
        footer: "REGISTRO EXITOSO",
        showConfirmButton: true,
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        Swal.fire({
          icon: "warning",
          title: "Por favor verifique...",
          text: "El correo ya se encuentra registrado",
        });
      }
    }
  };
  return (
    <div className="register-container">
      <h2 className="title-register">Registro de Usuarios</h2>
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
        <Select
          required={true}
          value={{
            label: "Seleccione el rol",
            value: rol || "default",
          }}
          options={[
            { label: "Administrador", value: "admin" },
            { label: "Usuario", value: "usuario" },
          ]}
          onChange={ handleRolChange }
        />
        <button className="btn btn-color" id="btn-register" type="submit">
          Registrar
        </button>
      </form>
    </div>
  );
};
