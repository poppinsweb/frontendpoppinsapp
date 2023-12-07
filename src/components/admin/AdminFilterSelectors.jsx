import Select from "react-select";
import { useState } from "react";
import { QuestionFilter } from "./QuestionFilter";
import { userChildFormOptions } from "../constants/userChildFormOptions";
import "../../styles/admin/admin.css";

export function AdminFilterSelectors() {
  const { gender, socialClass, edCenterType, degree, years, months } = userChildFormOptions;

  // const [inputName, setInputName] = useState();

  const [selectedGender, setSelectedGender] = useState();
  const [selectedYears, setSelectedYears] = useState();
  const [selectedMonths, setSelectedMonths] = useState();
  const [selectedSocialClass, setSelectedSocialClass] = useState();
  const [SelectedEdCenterType, setSelectedEdCenterType] = useState();
  const [selectedDegree, setSelectedDegree] = useState();

  // USAR USEEFFECT PARA CAPTURAR CADA ELECCION EN UN ARRAY, QUE SERA ENVIADO A TRAVES DEL ONSUBMIT DEL FORM
  // SE PODRA USAR UN PAR NAME: VALUE?

  const handleGenderChange = ({ name, value }) => {
    console.log(name+":", value);
    setSelectedGender(value);
  };

  // const handleNameChange = ({target}) => {
  //   console.log(target.value);
  //   setInputName(target.value);
  // }

  const handleYearsChange = ({ name, value }) => {
    console.log(name+":"+ value);
    setSelectedYears(value);
  };

  const handleMonthsChange = ({ name, value }) => {
    console.log(name+":", value);
    setSelectedMonths(value);
  };

  const handleSocialClassChange = ({ name, value }) => {
    console.log(name+":", value);
    setSelectedSocialClass(value);
  };

  const handleEdCenterChange = ({ name, value }) => {
    console.log(name+":", value);
    setSelectedEdCenterType(value);
  };

  const handleDegreeChange = ({ name, value }) => {
    console.log(name+":", value);
    setSelectedDegree(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selected = [selectedGender, selectedYears, selectedMonths, selectedSocialClass, SelectedEdCenterType, selectedDegree]
    console.log(selected);
  };

  return (
    <>
      <div className='container data-filter-box'>
        <div className='row'>
          <div className='col'>
            <form onSubmit={handleSubmit}>
              <h2>Filtrado de Data</h2>
              <div className='container data-container w-50 filter-data'>
                <div className='select'>
                  <label>PREGUNTAS:</label>
                  <QuestionFilter />
                </div>
                <div className='select'>
                  <label>SEXO</label>
                  <Select
                    defaultValue={{
                      label: "Seleccione una opción",
                      value: "empty",
                    }}
                    options={gender.map((gen) => ({
                      label: gen.label,
                      name: gen.name,
                      value: gen.value,
                    }))}
                    onChange={handleGenderChange}
                  />
                </div>
                <div className='select'>
                  <label>EDAD:</label>
                  <Select
                    defaultValue={{ label: "Años:", value: "empty" }}
                    options={years.map((year) => ({
                      label: year.label,
                      name: year.name,
                      value: year.value,
                    }))}
                    onChange={handleYearsChange}
                  />
                  <Select
                    defaultValue={{ label: "Meses:", value: "empty" }}
                    options={months.map((month) => ({
                      label: month.label,
                      name: month.name,
                      value: month.value,
                    }))}
                    onChange={handleMonthsChange}
                  />
                </div>
                <div className='select'>
                  <label>ESTRATO:</label>
                  <Select
                    defaultValue={{
                      label: "Seleccione una opción:",
                      value: "empty",
                    }}
                    options={socialClass.map((social) => ({
                      label: social.label,
                      name: social.name,
                      value: social.value,
                    }))}
                    onChange={handleSocialClassChange}
                  />
                </div>
                <div className='select'>
                  <label>CENTRO EDUCATIVO</label>
                  <Select
                    defaultValue={{
                      label: "Seleccione una opción",
                      value: "empty",
                    }}
                    options={edCenterType.map((edCenter) => ({
                      label: edCenter.label,
                      name: edCenter.name,
                      value: edCenter.value,
                    }))}
                    onChange={handleEdCenterChange}
                  />
                </div>
                <div className='select'>
                  <label>NIVEL DE ESCOLARIDAD</label>
                  <Select
                    defaultValue={{
                      label: "Seleccione una opción",
                      value: "empty",
                    }}
                    options={degree.map((deg) => ({ label: deg.label, name: deg.name, value: deg.value }))}
                    onChange={handleDegreeChange}
                  />
                </div>
                <button className='btn btn-primary filter-btn btn-color'>
                  Filtrar
                </button>
              </div>
              <div className='col-10 render'>
                <h3>Sexo: {selectedGender}</h3>
                <h3>Años: {selectedYears}</h3>
                <h3>Meses: {selectedMonths}</h3>
                <h3>Estrato: {selectedSocialClass}</h3>
                <h3>Centro Educativo: {SelectedEdCenterType}</h3>
                <h3>Nivel: {selectedDegree}</h3>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
