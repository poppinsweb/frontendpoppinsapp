// import Select from "react-select";
// import { useEffect, useState } from "react";

// import { userChildFormOptions } from "../constants/userChildFormOptions";
// import "../../styles/admin/admin.css";

// export const UserChildData = () => {
//   const { 
//     gender, 
//     socialLevel, 
//     educationType, 
//     degree, 
//     years, 
//     months 
//   } = userChildFormOptions;

//   const [userChildSelect, setUserChildSelect] = useState({});

//   const handleSelectChange = ({ name, value }) => {
//     console.log(name + ":" + value);
//     setUserChildSelect({
//       ...userChildSelect,
//       [name]: value,
//     });
//   };

//   useEffect(() => {
//     // console.log("User Child Select Updated:", userChildSelect);
//   }, [userChildSelect]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submited:", userChildSelect);
//   };

//   return (
//     <>
//       <div className="container">
//         <form onSubmit={handleSubmit}>
//           <div className="select-container">
//             <div className="select">
//               <label>SEXO</label>
//               <Select
//                 className=""
//                 defaultValue={{
//                   label: "Seleccione una opción",
//                   value: "empty",
//                 }}
//                 options={gender.map((gen) => ({
//                   label: gen.label,
//                   name: gen.name,
//                   value: gen.value,
//                 }))}
//                 onChange={handleSelectChange}
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
//                 onChange={handleSelectChange}
//               />
//               <Select
//                 defaultValue={{ label: "Meses:", value: "empty" }}
//                 options={months.map((month) => ({
//                   label: month.label,
//                   name: month.name,
//                   value: month.value,
//                 }))}
//                 onChange={handleSelectChange}
//               />
//             </div>
//             <div className="select">
//               <label>ESTRATO:</label>
//               <Select
//                 defaultValue={{
//                   label: "Seleccione una opción:",
//                   value: "empty",
//                 }}
//                 options={socialLevel.map((social) => ({
//                   label: social.label,
//                   name: social.name,
//                   value: social.value,
//                 }))}
//                 onChange={handleSelectChange}
//               />
//             </div>
//             <div className="select">
//               <label>CENTRO EDUCATIVO</label>
//               <Select
//                 defaultValue={{
//                   label: "Seleccione una opción",
//                   value: "empty",
//                 }}
//                 options={educationType.map((edCenter) => ({
//                   label: edCenter.label,
//                   name: edCenter.name,
//                   value: edCenter.value,
//                 }))}
//                 onChange={handleSelectChange}
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
//                 onChange={handleSelectChange}
//               />
//             </div>
//           </div>
//           {/* NO FUNCIONA LA RENDERIZACION */}
//           {/* <div className="render-data"> 
//             <p>Género: {userChildSelect.value}</p>
//             <p>Edad: {years.value} años y {months.value} meses</p>
//             <p>Estrato: {socialLevel.value}</p>
//             <p>Centro educativo: {educationType.value}</p>
//             <p>Nivel de escolaridad: {degree.value}</p>
//           </div> */}
//         </form>
//       </div>
//     </>
//   );
// };

