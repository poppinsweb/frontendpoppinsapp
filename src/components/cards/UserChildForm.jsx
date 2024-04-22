import Select from "react-select";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userChildFormOptions } from "../constants/userChildFormOptions";
import { postNewChild } from "../../services/testAxiosAPI";
import "../../styles/users/userChild.css";
import { useAuth } from "../../context/AuthProvider";

export function UserChildForm() {
  const { gender, socialLevel, educationType, degree } = userChildFormOptions;
  const { user } = useAuth();
  const [userData, setUserData] = useState({});
  const [userSelect, setUserSelect] = useState("");
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userBirth, setUserBirth] = useState("");
  const [userToken, setUserToken] = useState(null);

  const navigate = useNavigate();

  // const test_code = user.usuario_token;

  useEffect(() => {
    setUserToken(user.usuario_token);
  }, [])

// console.log(userID);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSelectChange = ({ name, value }) => {
    setUserSelect({
      ...userSelect,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const selected = { ...userData, ...userSelect, 
        // "usuarioId": userID,
        "codigo_identificador": userName[0] + userLastName[0] + userBirth.replace(/-/g, "")
      };
      console.log(selected);
      const res = await postNewChild(selected);
      if (res) {
        navigate("/token");
      }
      return res;
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      throw error;
    }
  };
   
  const handleNameChange = ({ target }) => {
    setUserName(target.value);
  };

  const handleLastNameChange = ({ target }) => {
    setUserLastName(target.value);
  };

  const handleBirthChange = ({ target }) => {
    setUserBirth(target.value);
  };
   
  return (
    <div className="container user-container">
      <img
        src="src/styles/images/umbrellaFirst.png"
        className="logo2"
        alt="Logo paraguas"
      />
      <h2 className="user-title">Datos del Niño</h2>
      <div className="row main-row">
        <div className="col first-col">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="user-label">
                <strong>Nombres del niño:</strong>
                <input
                  className="user-select user-code"
                  id="name"
                  name="nombres"
                  onChange={handleInputChange}
                  onInput={handleNameChange}
                  required
                />
              </label>
            </div>
            <div>
              <label className="user-label user-code">
                <strong>Apellidos del niño:</strong>
                <input
                  className="user-select"
                  id="lasname"
                  name="apellidos"
                  onChange={handleInputChange}
                  onInput={handleLastNameChange}
                  required
                />
              </label>
            </div>
            <div className="">
              <label className="user-label">
                <strong>Fecha de Nacimiento:</strong>
                <input
                  type="date"
                  className="user-select user-code"
                  id="birth"
                  name="fecha_nacimiento"
                  onChange={handleInputChange}
                  onInput={handleBirthChange}
                  required
                />
              </label>
            </div>
            <label className="user-label">
              <strong>Sexo:</strong>
              <Select
                className="user-select"
                id="gender"
                defaultValue={{
                  label: "Seleccione una opción",
                  value: "empty",
                }}
                options={gender.map((gen) => ({
                  label: gen.label,
                  name: gen.name,
                  value: gen.value,
                }))}
                onChange={handleSelectChange}
              />
            </label>
            <div className="">
              <label className="user-label">
                <strong>Estrato:</strong>
                <Select
                  className="user-select"
                  id="socialLevel"
                  defaultValue={{
                    label: "Seleccione una opción",
                    value: "empty",
                  }}
                  options={socialLevel.map((social) => ({
                    label: social.label,
                    name: social.name,
                    value: social.value,
                  }))}
                  onChange={handleSelectChange}
                />
              </label>
            </div>
            <div className="">
              <label className="user-label">
                <strong>Tipo de Centro Educativo:</strong>
                <Select
                  className="user-select"
                  id="schoolType"
                  defaultValue={{
                    label: "Seleccione una opción",
                    value: "empty",
                  }}
                  options={educationType.map((edCenter) => ({
                    label: edCenter.label,
                    name: edCenter.name,
                    value: edCenter.value,
                  }))}
                  onChange={handleSelectChange}
                />
              </label>
              <div className="">
                <label className="label-grade user-label">
                  <strong>Grado de Escolaridad:</strong>
                  <Select
                    className="select-opcion user-select"
                    id="degree"
                    defaultValue={{
                      label: "Seleccione una opción",
                      value: "empty",
                    }}
                    options={degree.map((deg) => ({
                      label: deg.label,
                      name: deg.name,
                      value: deg.value,
                    }))}
                    onChange={handleSelectChange}
                  />
                </label>
              </div>
            </div>
            {Object.values(userSelect).length >= 4 ? (
              <button className="btn btn-admin btn-color">Ir a Encuesta</button>
            ) : (
              <button disabled className="btn btn-admin btn-color">
                Ir a Encuesta
              </button>
            )}
          </form>
        </div>
        <div className="second-col col">
          <div className="code-container">
            <p>
              <strong>Código del Niño</strong>
            </p>
            {userName && userLastName && userBirth ? (

              <p>
                {userName[0] + userLastName[0] + userBirth.replace(/-/g, "")}
              </p>
            ) : (
              <p> * * * * * *</p>
            )}
            <p>
              <strong>Código de la Encuesta</strong>
            </p>
            { userToken } 
            {/* test_code */}
          </div>
        </div>
      </div>
    </div>
  );
}
