import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useFetchData } from "../../services/hooks/useFetchData";
import { useAuth } from "../../context/AuthProvider";
import { CardResultIndependence } from "../../components/cards/CardResultIndependence";
import { CardResultSkills } from "../../components/cards/CardResultSkills";
import { CardResultHabits } from "../../components/cards/CardResultHabits";
import umbrella from "../../styles/images/UmbrellaFirst.png";
import "../../styles/users/result.css";

const EvaluationResultPage = () => {
  const { user } = useAuth();
  const {
    data: childrenData,
    loading: childrenLoading,
    error: childrenError,
  } = useFetchData("http://localhost:3000/api/childrenres"); // necesita filter y no find por evaluationtoken?

  if (childrenLoading) return <p>Loading...</p>;
  if (childrenError)
    return <p>Error loading children data: {childrenError.message}</p>;

  const childData = childrenData.find(
    (child) => child.evaluationtoken === user.evaluationtoken
  );
  if (!childData) {
    return <p>No matching child data found</p>;
  }

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

  const handleDownloadPdf = async () => {
    const element = document.getElementById("pdf-content");

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    // const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    // const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    const marginLeft = 10;
    const marginTop = 20;
    const marginRight = 10;
    const marginBottom = 10;

    const usableWidth = pdfWidth - marginLeft - marginRight;
    const usableHeight = pdfHeight - marginTop - marginBottom;

    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = imgProps.width;
    const imgHeight = imgProps.height;

    const scaleFactor = Math.min(
      usableWidth / imgWidth,
      usableHeight / imgHeight
    );

    const newImgWidth = imgWidth * scaleFactor;
    const newImgHeight = imgHeight * scaleFactor;

    pdf.addImage(
      imgData,
      "PNG",
      marginLeft,
      marginTop,
      newImgWidth,
      newImgHeight
    );
    pdf.save("poppinsEduca_result.pdf");
  };

  return (
    <>
      <div id="pdf-content">
        <div>
          <img className="img-result" src={umbrella} alt="logo paraguas" />
        </div>
        <h1 className="main-title">Evaluación de hábitos e independencia</h1>{" "}
        <h2>en la rutina diaria</h2>
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
        <CardResultSkills />
        <CardResultHabits />
      </div>
      <button className="btn-color" onClick={handleDownloadPdf}>
        Download PDF
      </button>
    </>
  );
};

export default EvaluationResultPage;
