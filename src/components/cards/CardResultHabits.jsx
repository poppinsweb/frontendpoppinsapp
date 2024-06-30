import { IoCheckmarkDoneSharp, IoCheckmarkSharp, IoWarningOutline } from "react-icons/io5";
import { useFetchData } from "../../services/hooks/useFetchData";
import { useAuth } from "../../context/AuthProvider";

const HabitIcon = ({ habitLevel, icon, children }) => (
  habitLevel && (
    <div style={{ color: habitLevel === 1 || habitLevel === 2 ? "blue" : "inherit", whiteSpace: "nowrap" }}>
      {icon} {children} 
    </div>
  )
);

const renderhabitCells = (habits, habitNames) => {
  const showCheckmarks = !habits.some(habit => habit <= 2);

  return ["primary", "success", "warning", "danger"].map((color, levelIndex) => (
    <td key={color} className={`table-${color}`}>
      {habits.map((habitLevel, index) => {
        if (!showCheckmarks && (4 - levelIndex === 4 || 4 - levelIndex === 3)) {
          return null;
        }
        return (
          <HabitIcon
            key={index}
            habitLevel={habitLevel === 4 - levelIndex ? habitLevel : null}
            icon={4 - levelIndex === 4 ? <IoCheckmarkDoneSharp /> : 4 - levelIndex === 3 ? <></> : 
            <IoWarningOutline />}
          >
            {(4 - levelIndex === 2 || 4 - levelIndex === 1) ? habitNames[index] : null}
          </HabitIcon>
        );
      })}
    </td>
  ));
};

export const CardResultHabits = () => {
  const { user } = useAuth();
  const { data, loading, error } = useFetchData("http://localhost:3000/api/evaluationresponses");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {data.message}</p>;

    const habitsFeeding = data[7].responses.map(response => response.optionId);
    const habitsSleeping = data[8].responses.map(response => response.optionId);
    const responsabilities = data[9].responses.map(response => response.optionId);

    // console.log(responsabilities);

  const habitNamesFeeding = [
    "Comer frutas",
    "Comer verduras",
    "Comer proteínas",
    "Tomar jugos naturales",
    "Comer la misma comida que el resto de la familia",
    "Desayunar antes de ir a estudiar",
    "Horarios establecidos para comer",
    "Comer sin usar pantallas",
    "Comer sin usar juguetes",
    "Comer en mesa o comedor",
    "Permanecer sentado hasta finalizar la comida",
    "Comer todo sin requerir suplementos nutricionales adicionales",
    "Peso adecuado para su talla",
    "Comer en máximo 30 minutos",
    "Procesamiento de los alimentos (cortarlos, desmecharlos o volverlos papilla)",
  ]

  const habitNamesSleeping = [
    "Horario establecido para ir a dormir",
    "Dormir entre 8 y 10 horas",
    "Dormir entre 10 y 12 horas",
    "Dormir con las luces apagadas",
  ];

  const namesResponsabilities = [
    "Ayudar con su uniforme en las noches",
    "Ayudar con su maleta para el colegio",
    "Recoger y organiza sus juguetes",
    "Recoger y llevar a su lugar su ropa sucia y zapatos",
    "Recoger el plato después de comer",
    "Asignación de oficios que benefician a la familia",
    "Establecimiento de horarios y rutinas",
    "Cumplimiento con horarios y rutinas acordadas",
  ];

  return (
    <div>
      <h2>Hábitos</h2>
      <table className="table table-hover results-container">
        <thead className="result-titles">
          <tr>
            <th>HABITOS</th>
            <th className="table-primary td-width">ADQUIRIDO</th>
            <th className="table-success td-width">EN PROCESO AVANZADO DE ADQUISICION</th>
            <th className="table-warning td-width">EN PROCESO INICIAL DE ADQUISICION</th>
            <th className="table-danger td-width">NO ADQUIRIDO</th>
          </tr>
        </thead>
        <tbody className="result-titles">
          <tr>
            <td>Alimentación</td>
            {renderhabitCells(habitsFeeding, habitNamesFeeding)}
          </tr>
          <tr>
            <td>Sueño</td>
            {renderhabitCells(habitsSleeping, habitNamesSleeping)}
          </tr>
          <tr>
            <td>Responsabiidades Personales y Escolares</td>
            {renderhabitCells(responsabilities, namesResponsabilities)}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
