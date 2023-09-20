import Select from "react-select";
import { userChildFormOptions } from "../constants/userChildFormOptions";
import "../../styles/userChild.css";
import { useState } from "react";

export function UserChildForm() {
  const { gender, socialClass, edCenterType, degree } = userChildFormOptions;

  const [userData, setUserData] = useState("");
  const [userSelect, setUserSelect] = useState("");

  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userBirth, setUserBirth] = useState("");

  const handleInputChange = ({ target }) => {
    // console.log(target.value);
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

  // console.log(userSelect);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userData);
    const selected = [userData, userSelect];
    console.log(selected);
  };

  const handleNameChange = ({ target }) => {
    // console.log(typeof target.value);
    setUserName(target.value);
  };

  const handleLastNameChange = ({ target }) => {
    // console.log(typeof target.value);
    setUserLastName(target.value);
  };

  const handleBirthChange = ({ target }) => {
    // console.log(typeof target.value);
    setUserBirth(target.value);
  };

  return (
    <div className="container user-container">
      <h2 className="user-title">Datos Personales del Niño</h2>
      <div className="row main-row">
        <div className="col first-col">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="user-label">
                <strong>Nombres:</strong>
                <input
                  className="user-select user-code"
                  id="names"
                  name="Nombres:"
                  onChange={handleInputChange}
                  onInput={handleNameChange}
                  required
                />
              </label>
            </div>
            <div>
              <label className="user-label user-code">
                <strong>Apellidos:</strong>
                <input
                  className="user-select"
                  id="lastNames"
                  name="Apellidos:"
                  onChange={handleInputChange}
                  onInput={handleLastNameChange}
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
                  name="Fecha-Nacimiento"
                  onChange={handleInputChange}
                  onClick={handleBirthChange}
                />
              </label>
            </div>
            {/* <div className=""> */}
            {/* <div className=""> */}
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
            {/* </div> */}
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
            {/* </div> */}
            {/* <div className=""> */}
            <label className="user-label">
              <strong>Nombre del Centro Educativo</strong>
              <input
                className="user-select"
                id="school"
                name="Centro-Educativo"
                onChange={handleInputChange}
              />
            </label>
            {/* </div> */}
            <div className="">
              {/* <div className=""> */}
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
              {/* </div> */}
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
            <button className="btn btn-admin btn-color">Enviar</button>
          </form>
        </div>
        <div className="second-col col">
          <img
            src="src/styles/images/umbrellaFirst.png"
            className="logo2"
            alt="Logo paraguas"
          />
          <p>
            <strong>Código del Niño</strong>
          </p>
          <p>{userName[0] + userLastName[0] + userBirth}</p>
          <div className="btn-container">
            <button className="btn btn-color">Siguiente</button>
          </div>
        </div>
      </div>
    </div>
  );
}
