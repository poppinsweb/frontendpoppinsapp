import { IoCheckmarkDoneSharp, IoCheckmarkSharp, IoWarningOutline } from "react-icons/io5";
import { useFetchData } from "../../services/hooks/useFetchData";
import { useAuth } from "../../context/AuthProvider";

const SkillIcon = ({ skillLevel, icon, children }) => (
  skillLevel && (
    <div style={{ color: skillLevel === 1 || skillLevel === 2 ? "blue" : "inherit", whiteSpace: "nowrap" }}>
      {icon} {children} 
    </div>
  )
);

const renderSkillCells = (skills, skillNames) => {
  const showCheckmarks = !skills.some(skill => skill <= 2);

  return ["primary", "success", "warning", "danger"].map((color, levelIndex) => (
    <td key={color} className={`table-${color}`}>
      {skills.map((skillLevel, index) => {
        if (!showCheckmarks && (4 - levelIndex === 4 || 4 - levelIndex === 3)) {
          return null;
        }
        return (
          <SkillIcon
            key={index}
            skillLevel={skillLevel === 4 - levelIndex ? skillLevel : null}
            icon={4 - levelIndex === 4 ? <IoCheckmarkDoneSharp /> : 4 - levelIndex === 3 ? <IoCheckmarkSharp /> : <IoWarningOutline />}
          >
            {(4 - levelIndex === 2 || 4 - levelIndex === 1) ? skillNames[index] : null}
          </SkillIcon>
        );
      })}
    </td>
  ));
};

export const CardResultSkills = () => {
  const { user } = useAuth();
  const { data, loading, error } = useFetchData("http://localhost:3000/api/completevaluations");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {data.message}</p>;

  const skillsGrooming = data[4].responses.map(response => response.optionId);
  const skillsDressing = data[5].responses.map(response => response.optionId);
  const skillsFeeding = data[6].responses.map(response => response.optionId);

  const skillNamesGrooming = [
    "Secarse el cuerpo",
    "Peinarse el cabello",
    "Limpiarse la Nariz",
    "Aseo íntimo al defecar",
    "Lavarse las manos luego de usar el baño",
    "Cepillarse los Dientes",
    "Control de Esfínteres en el Día",
    "Control de Esfínteres en la Noche",
    "Descargar o Vaciar el Baño al Usarlo",
  ]

  const skillNamesDressing = [
    "Abotonarse",
    "Amarrarse los cordones",
    "Ponerse las medias",
    "Ponerse los zapatos",
    "Subir y bajar cremalleras"
  ];

  const skillNamesFeeding = [
    "Utiliza la cuchara",
    "Utiliza el tenedor",
    "Utiliza el cuchillo"
  ];

  return (
    <div>
      <h2>Habilidades</h2>
      <table className="table table-hover results-container">
        <thead className="result-titles">
          <tr>
            <th>HABILIDADES</th>
            <th className="table-primary">CON HABILIDAD</th>
            <th className="table-success">EN PROCESO AVANZADO DE APRENDIZAJE</th>
            <th className="table-warning">EN PROCESO INICIAL DE APRENDIZAJE</th>
            <th className="table-danger">NO LO HA INTENTADO</th>
          </tr>
        </thead>
        <tbody className="result-titles">
          <tr>
            <td>Aseo</td>
            {renderSkillCells(skillsGrooming, skillNamesGrooming)}
          </tr>
          <tr>
            <td>Vestido</td>
            {renderSkillCells(skillsDressing, skillNamesDressing)}
          </tr>
          <tr>
            <td>Alimentación</td>
            {renderSkillCells(skillsFeeding, skillNamesFeeding)}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
