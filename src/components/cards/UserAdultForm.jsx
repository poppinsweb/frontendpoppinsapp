import Select from "react-select";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userAdultFormOptions } from "../constants/userAdultFormOptions";

export const UserAdultForm = () => {
  const { adults } = userAdultFormOptions;
  const [userData, setUserData] = useState({});
  const [userSelect, setUserSelect] = useState("");
  const [userToken, setUserToken] = useState("");

  const navigate = useNavigate();
  
  const handleSelectChange = ({ name, value }) => {
    setUserSelect({
      ...userSelect,
      [name]: value,
    });
  };

  const handleTokenChange = ({ target }) => {
    setUserToken(target.value);
  };

  const handleInputChange = ({ target }) => {
      const { name, value } = target;
      setUserData({
        ...userData,
        [name]: value,
      });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData, userSelect, userToken);
  }

  return (
    <div className="container user-container">
      {/* <img
        src="src/styles/images/umbrellaFirst.png"
        className="logo2"
        alt="Logo paraguas"
      /> */}
      <h2>Datos del Acudiente</h2>
      <div className="row main-row">
        <div className="col first-col">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="user-label">
                <strong>Persona que diligencia:</strong>
                <Select
                  className="user-select"
                  id="adults"
                  defaultValue={{
                    label: "Seleccione una opción",
                    value: "empty",
                  }}
                  options={adults.map((adult) => ({
                    label: adult.label,
                    name: adult.name,
                    value: adult.value,
                  }))}
                  onChange={handleSelectChange}
                />
              </label>
            </div>
            <div>
              <label className="user-label">
                <strong>Nombre de la persona que diligencia:</strong>
                <input
                  className="user-select user-code"
                  id="name"
                  name="nombre"
                  onChange={handleInputChange}
                  // onInput={handleTokenChange}
                  required
                />
              </label>
              </div>
              <div>
                <label className="user-label">
                  <strong>Token:</strong>
                  <input
                    className="user-select user-code"
                    id="token"
                    name="token"
                    onChange={handleTokenChange}
                    required
                  />
                </label>
              </div>
            <button className="btn btn-admin btn-color">Comenzar</button>
          </form>
        </div>
      </div>
    </div>
  );
};
