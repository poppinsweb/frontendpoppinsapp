import { useFetchData } from "../../services/hooks/useFetchData";
import { useAuth } from "../../context/AuthProvider";
import { CardResultIndependence } from "../../components/cards/CardResultIndependence";
import { CardResultSkillGrooming } from "../../components/cards/CardResultSkillGrooming";
import "../../styles/users/result.css";

const EvaluationResultPage = () => {
  const { user } = useAuth();
  const { data: childrenData, loading: childrenLoading, error: childrenError, } = useFetchData("http://localhost:3000/api/childrenres"); // necesita filter y no find por evaluationtoken?

  if (childrenLoading) return <p>Loading...</p>;
  if (childrenError) return <p>Error loading children data: {childrenError.message}</p>;

  const childData = childrenData.find((child) => child.evaluationtoken === user.evaluationtoken);
  if (!childData) {
    return <p>No matching child data found</p>;
  };

  const responses = childData.responses;
  const sexo = responses.find(
    (response) => response.category === "Sexo"
  )?.value;
  const estrato = responses.find(
    (response) => response.category === "Estrato"
  )?.value;
  const tipoInstitucion = responses.find(
    (response) => response.category === "Tipo de Institución Educativa"
  )?.value;
  const nivelEscolar = responses.find(
    (response) => response.category === "Nivel Escolar"
  )?.value;
  const aniosEdad = responses.find(
    (response) => response.category === "Años de edad"
  )?.value;
  const mesesEdad = responses.find(
    (response) => response.category === "Meses"
  )?.value;

  const { firstName, lastName } = childData;

  return (
    <>
      <h1 className="main-title">
        Evaluación de hábitos e independencia en la rutina diaria
      </h1>
      <div className="header-container">
        <p>
          <strong>Nombre: </strong>
          {firstName + " " + lastName}
        </p>
        <p>
          <strong>Edad: </strong>
          {aniosEdad} años - {mesesEdad} meses
        </p>
        <p>
          <strong>Sexo:</strong> {sexo}
        </p>
        <p>
          <strong>Grado: </strong>
          {nivelEscolar}
        </p>
      </div>
      <CardResultIndependence />
      <CardResultSkillGrooming />
    </>
  );
};

export default EvaluationResultPage;
