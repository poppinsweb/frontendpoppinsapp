import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthProvider";
// import Select from "react-select";
// import Swal from "sweetalert2";

// import { useAuth } from "../../hooks/useAuth";
import "../../styles/admin/create-user.css";

const rol = {
  usuario: "usuario",
  admin: "admin,"
};

export const AdminCreateUser = () => {
  const { register, handleSubmit } = useForm();
  const { signup, user } = useAuth();

  const onSubmit = async (values) => {
    try {
      await signup(values);
    } catch (error) {
      console.error("Error en la solicitud de registro:", error);
    }
  };
  return (
    <div className="register-container">
      <h2 className="title-register">Registro de Usuarios</h2>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <input
          className="form-control my-3 "
          placeholder="E-mail"
          type="email"
          name="email"
          { ...register("email", { required: true })}
        />
        <input
          className="form-control my-3 "
          placeholder="Password"
          type="password"
          { ...register("password", { required: true })}
        />
        {/* <input
          className="form-control my-3 "
          placeholder="Repetir password"
          type="password"
          { ...register("password2", { required: true })}
        /> */}

        <label>Rol</label>
        <select {...register("rol")}>
          <option value={rol.usuario}>Usuario</option>
          <option value={rol.admin}>Admin</option>
        </select>
        <button className="btn btn-color" id="btn-register" type="submit">
          Registrar
        </button>
      </form>
    </div>
  );
};


   // if (!email || !password || !password2) {
    //   Swal.fire({
    //     icon: "warning",
    //     title: "Un momento...",
    //     text: "Todos los campos deben llenarse",
    //   });
  //     return;
  //   }
  //   if (password !== password2) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "Las contraseñas deben coincidir",
  //     });
  //     return;
  //   }
  //   if (password.length < 6) {
  //     Swal.fire({
  //       icon: "warning",
  //       title: "Disculpe...",
  //       text: "La contraseña debe tener al menos 6 caracteres",
  //     });
  //     return;
  //   }
  //   try {
  //     const userCredential = await register(email, password, rol);
  //     console.log(userCredential);
  //     // console.log(rol);

  //     Swal.fire({
  //       icon: "success",
  //       title: "Usuario registrado",
  //       footer: "REGISTRO EXITOSO",
  //       showConfirmButton: true,
  //     });
  //   } catch (error) {
  //     if (error.code === "auth/email-already-in-use") {
  //       Swal.fire({
  //         icon: "warning",
  //         title: "Por favor verifique...",
  //         text: "El correo ya se encuentra registrado",
  //       });
  //     }
  //   }