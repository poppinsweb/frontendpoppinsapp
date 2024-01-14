import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
// import Swal from "sweetalert2";
import "../../styles/home/login.css";

export const UserLogin = () => {
  const { register, handleSubmit } = useForm();
  const { signin, user } = useAuth();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async(values) => {
    try {
      await signin(values)
      navigate("/token");
    } catch (error) {
      console.error("Error en la solicitud de login:", error);
    }
  });

    // if (!email || !password) {
    //   Swal.fire(
    //     "¿Está registrado?",
    //     "Debe ingresar sus credenciales de inicio o contactar a la administradora para solicitarlas",
    //     "question"
    //   );
    //   return;
    // }

    // try {
    //   await login(email, password);
    //   Swal.fire({
    //     icon: "success",
    //     title: "Sesión Iniciada",
    //     footer: "BIENVENIDO",
    //     showConfirmButton: false,
    //     timer: 2000,
    //   });
    //   navigate("/token"); // DEBERIA SER CONDICIONAL PARA QUE AL ADMIN LO DIRIJA A ADMIN
    // } catch (error) {
    //   const errorCode = error.code;
    //   console.log(errorCode);

    //   if (errorCode === "auth/invalid-login-credentials") {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Por favor ingrese unas credenciales válidas",
    //       text: "Revise que sus datos estén correctos o contacte a la administradora",
    //     });
    //   }
    // }
 
  return (
    <>
      <h2 className="title-login">Login</h2>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <div className="login-container">
          <input
            className="form-control my-3 "
            placeholder="E-mail"
            type="email"
            { ...register("email", {required: true})}
          />
          <input
            className="form-control my-3 "
            placeholder="Password"
            type="password"
            { ...register("password", {required: true})}
          />
          <input
            className="form-control my-3 "
            placeholder="Token"
            type="token"
            { ...register("token", {required: false})}
          />
        </div>
        <div className="buttons">
          <button className="btn btn-color btn-login" type="submit">
            Ingresar
          </button>
        </div>
      </form>
    </>
  );
}
