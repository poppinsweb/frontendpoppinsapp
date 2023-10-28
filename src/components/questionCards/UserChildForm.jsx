import Select from "react-select";
import { userChildFormOptions } from "../constants/userChildFormOptions";
import "../../styles/userChild.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function UserChildForm() {
  const { gender, socialClass, edCenterType, degree } = userChildFormOptions;

  const [userData, setUserData] = useState({});
  const [userSelect, setUserSelect] = useState("");

  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userBirth, setUserBirth] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const selected = [userData, userSelect]; // Se puede hacer un join? que el form no se vaya vacío
    console.log(selected);
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

  const handleNavigate = () => { // Cuadrar la función para que no navegue a la próxima pag si no hay datos
    setTimeout(() => {
      navigate("/independencia");
    }, 5000);
  };

  return (
    <div className="container user-container">
      <h2 className="user-title">Datos Personales del Niño</h2>
      <div className="row main-row">
        <div className="col first-col">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="user-label">
                <strong>Nombres del niño:</strong>
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
                <strong>Apellidos del niño:</strong>
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
                  onInput={handleBirthChange}
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
            <label className="user-label">
              <strong>Nombre del Centro Educativo</strong>
              <input
                className="user-select"
                id="school"
                name="Centro-Educativo"
                onChange={handleInputChange}
              />
            </label>
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
            <button
              className="btn btn-admin btn-color"
              onClick={handleNavigate} // HACER CONDICIONAL PARA QUE NO DEJE ENVIAR EL FORM VACIO
            >
              Ir a Encuesta
            </button>
          </form>
        </div>
        <div className="second-col col">
          <img
            src="src/styles/images/umbrellaFirst.png"
            className="logo2"
            alt="Logo paraguas"
          />
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
