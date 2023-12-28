// Cambiar el nombre de este componente por UserChildDataSelectors
import Select from "react-select";
import { useEffect, useState } from "react";
import { userChildFormOptions } from "../constants/userChildFormOptions";
import "../../styles/admin/admin.css";

import React from "react";

export const AdminFilterSelectors = () => {
  const { 
    gender, 
    socialClass, 
    edCenterType, 
    degree, 
    years, 
    months 
  } = userChildFormOptions;

  const [userChildSelect, setUserChildSelect] = useState({});

  const handleSelectChange = ({ name, value }) => {
    console.log(name + ":" + value);
    setUserChildSelect({
      ...userChildSelect,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log("User Child Select Updated:", userChildSelect);
  }, [userChildSelect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submited:", userChildSelect);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="select-container">
            <div className="select">
              <label>SEXO</label>
              <Select
                className=""
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
            </div>
            <div className="select">
              <label>EDAD:</label>
              <Select
                defaultValue={{ label: "Años:", value: "empty" }}
                options={years.map((year) => ({
                  label: year.label,
                  name: year.name,
                  value: year.value,
                }))}
                onChange={handleSelectChange}
              />
              <Select
                defaultValue={{ label: "Meses:", value: "empty" }}
                options={months.map((month) => ({
                  label: month.label,
                  name: month.name,
                  value: month.value,
                }))}
                onChange={handleSelectChange}
              />
            </div>
            <div className="select">
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
                onChange={handleSelectChange}
              />
            </div>
            <div className="select">
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
                onChange={handleSelectChange}
              />
            </div>
            <div className="select">
              <label>NIVEL DE ESCOLARIDAD</label>
              <Select
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
            </div>
          </div>
          {/* NO FUNCIONA LA RENDERIZACION */}
          <div className="render-data"> 
            <p>Género: {userChildSelect.value}</p>
            <p>Edad: {years.value} años y {months.value} meses</p>
            <p>Estrato: {socialClass.value}</p>
            <p>Centro educativo: {edCenterType.value}</p>
            <p>Nivel de escolaridad: {degree.value}</p>
          </div>
        </form>
      </div>
    </>
  );
};

// export function AdminFilterSelectors() {
//   const { gender, socialClass, edCenterType, degree, years, months } =
//     userChildFormOptions;

//   const [selectedGender, setSelectedGender] = useState();
//   const [selectedYears, setSelectedYears] = useState();
//   const [selectedMonths, setSelectedMonths] = useState();
//   const [selectedSocialClass, setSelectedSocialClass] = useState();
//   const [SelectedEdCenterType, setSelectedEdCenterType] = useState();
//   const [selectedDegree, setSelectedDegree] = useState();

//   const handleGenderChange = ({ name, value }) => {
//     console.log(name + ":", value);
//     setSelectedGender(value);
//   };

//   const handleYearsChange = ({ name, value }) => {
//     console.log(name + ":" + value);
//     setSelectedYears(value);
//   };

//   const handleMonthsChange = ({ name, value }) => {
//     console.log(name + ":", value);
//     setSelectedMonths(value);
//   };

//   const handleSocialClassChange = ({ name, value }) => {
//     console.log(name + ":", value);
//     setSelectedSocialClass(value);
//   };

//   const handleEdCenterChange = ({ name, value }) => {
//     console.log(name + ":", value);
//     setSelectedEdCenterType(value);
//   };

//   const handleDegreeChange = ({ name, value }) => {
//     console.log(name + ":", value);
//     setSelectedDegree(value);
//   };

//   // GUARDA LAS SELECCIONES EN UN ARRAY
//   const selected = [
//       selectedGender,
//       selectedYears,
//       selectedMonths,
//       selectedSocialClass,
//       SelectedEdCenterType,
//       selectedDegree,
//     ];
//     console.log(selected);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(e);
//   };
//   return (
//     <>
//       <div className="container">
//         <form onSubmit={ handleSubmit }>
//           <div className="select-container">
//             <div className="select">
//               <label>SEXO</label>
//               <Select
//                 className=""
//                 defaultValue={{
//                   label: "Seleccione una opción",
//                   value: "empty",
//                 }}
//                 options={ gender.map((gen) => ({
//                   label: gen.label,
//                   name: gen.name,
//                   value: gen.value,
//                 }))}
//                 onChange={ handleGenderChange }
//               />
//             </div>
//             <div className="select">
//               <label>EDAD:</label>
//               <Select
//                 defaultValue={{ label: "Años:", value: "empty" }}
//                 options={years.map((year) => ({
//                   label: year.label,
//                   name: year.name,
//                   value: year.value,
//                 }))}
//                 onChange={handleYearsChange}
//               />
//               <Select
//                 defaultValue={{ label: "Meses:", value: "empty" }}
//                 options={months.map((month) => ({
//                   label: month.label,
//                   name: month.name,
//                   value: month.value,
//                 }))}
//                 onChange={handleMonthsChange}
//               />
//             </div>
//             <div className="select">
//               <label>ESTRATO:</label>
//               <Select
//                 defaultValue={{
//                   label: "Seleccione una opción:",
//                   value: "empty",
//                 }}
//                 options={socialClass.map((social) => ({
//                   label: social.label,
//                   name: social.name,
//                   value: social.value,
//                 }))}
//                 onChange={handleSocialClassChange}
//               />
//             </div>
//             <div className="select">
//               <label>CENTRO EDUCATIVO</label>
//               <Select
//                 defaultValue={{
//                   label: "Seleccione una opción",
//                   value: "empty",
//                 }}
//                 options={edCenterType.map((edCenter) => ({
//                   label: edCenter.label,
//                   name: edCenter.name,
//                   value: edCenter.value,
//                 }))}
//                 onChange={handleEdCenterChange}
//               />
//             </div>
//             <div className="select">
//               <label>NIVEL DE ESCOLARIDAD</label>
//               <Select
//                 defaultValue={{
//                   label: "Seleccione una opción",
//                   value: "empty",
//                 }}
//                 options={degree.map((deg) => ({
//                   label: deg.label,
//                   name: deg.name,
//                   value: deg.value,
//                 }))}
//                 onChange={handleDegreeChange}
//               />
//             </div>
//           </div>
//           <div className="render-data">
//             <p><strong>Sexo:</strong> { selectedGender }</p>
//             <p><strong>Años:</strong> { selectedYears } <strong>Meses:</strong> { selectedMonths }</p>
//             <p><strong>Estrato:</strong> { selectedSocialClass }</p>
//             <p><strong>Centro Educativo:</strong> { SelectedEdCenterType }</p>
//             <p><strong>Nivel:</strong> { selectedDegree }</p>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }
