import { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

import { userChildFormOptions } from "../constants/userChildFormOptions";
import "../../styles/users/userChild.css";

export function UserChildForm() {
  const { gender, socialClass, edCenterType, degree } = userChildFormOptions;
  // cambiar nombres socialClass por socialLevel. cambiar edCenterType por educationType. 

  const [userData, setUserData] = useState({});
  const [userSelect, setUserSelect] = useState("");

  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userBirth, setUserBirth] = useState(""); // RESOLVER COMO CONVERTIR EN MESES Y ANIOS

  const navigate = useNavigate();

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
        "codigo_identificador": userName[0] + userLastName[0] + userBirth.replace(/-/g, "")
      };
      console.log(selected);
      const res = await postNewSurvey(selected);
      if (res) {
        navigate("/independencia");
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
      <h2 className="user-title">Datos Personales del Niño</h2>
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
                  id="socialClass"
                  defaultValue={{
                    label: "Seleccione una opción",
                    value: "empty",
                  }}
                  options={socialClass.map((social) => ({
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
                  options={edCenterType.map((edCenter) => ({
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
          </div>
        </div>
      </div>
    </div>
  );
}
