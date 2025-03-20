import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";
import { useChild } from "../../context/ChildProvider";
import { CardResultIndependence } from "../../components/cards/CardResultIndependence.jsx";
import { CardResultSkills } from "../../components/cards/CardResultSkills.jsx";
import { CardResultHabits } from "../../components/cards/CardResultHabits.jsx";
import umbrella from "../../styles/images/UmbrellaFirst.png";
import "../../styles/users/result.css";

const EvaluationResultPage = () => {
  const { data: childrenData, loading: childrenLoading, error: childrenError } = useChild();

  const location = useLocation();
  const { evaluationtoken } = location.state || {};

  if (childrenLoading) return <p>Loading...</p>;
  if (childrenError)
    return <p>Error loading children data: {childrenError.message}</p>;

  // console.log(evaluationtoken);
  // console.log(childrenData.createdAt);

  const responses = childrenData?.responses || [];

  const fechaParte= childrenData?.createdAt?.slice(0, 10);
  const [year, month, day] = fechaParte?.split("-");
  const fechaAplicacion = `${day}-${month}-${year}`;


  const sexo = responses[0]?.value || "N/A";
  // const estrato = responses[1]?.value || "N/A";
  // const tipoInstitucion = responses[2]?.value || "N/A";
  const nivelEscolar = responses[3]?.value || "N/A";
  const aniosEdad = responses[4]?.value || "N/A";
  const mesesEdad = responses[5]?.value || "N/A";
  const { firstName, lastName } = childrenData || {};

  const handleDownloadPdf = async () => {
    const element = document.getElementById("pdf-content");
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");

    // Crear un nuevo documento PDF con tamaño carta (8.5 x 11 pulgadas)
    const pdf = new jsPDF({
    orientation: "portrait",
    unit: "in",
    format: "letter",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth(); // 8.5 pulgadas
    const pdfHeight = pdf.internal.pageSize.getHeight(); // 11 pulgadas

    const marginLeft = 0.25; // 0.5 pulgadas de margen izquierdo
    const marginTop = 1.0; // 0.5 pulgadas de margen superior
    const marginRight = 0.25; // 0.5 pulgadas de margen derecho
    const marginBottom = 0.25; // 0.5 pulgadas de margen inferior

    const usableWidth = pdfWidth - marginLeft - marginRight;
    const usableHeight = pdfHeight - marginTop - marginBottom;

    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = imgProps.width / 96; // Convertir a pulgadas (asumiendo 96 ppi)
    const imgHeight = imgProps.height / 96; // Convertir a pulgadas (asumiendo 96 ppi)

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
    pdf.save("poppinsEduca_resultados.pdf");
  };

  return (
    <>
      <div id="pdf-content">
        <div>
          <img className="img-result" src={umbrella} alt="logo paraguas" />
        </div>
        <h1 className="main-title main-title-one">Evaluación de hábitos e independencia</h1>
        <h2 className="main-title">en la rutina diaria</h2>
        <div className="header-container">
          <div className="header-container">
            <table className="table table-borderless ">
              <tbody>
                <tr>
                  <th>
                    <strong>Nombre:</strong>
                  </th>
                  <th>
                    <strong>Edad:</strong>
                  </th>
                  <th>
                    <strong>Sexo:</strong>
                  </th>
                  <th>
                    <strong>Grado:</strong>
                  </th>
                  <th>
                    <strong>Fecha:</strong>
                  </th>
                </tr>
                <tr>
                  <td>{firstName + " " + lastName}</td>
                  <td>
                    {aniosEdad} años - {mesesEdad} meses
                  </td>
                  <td>{sexo}</td>
                  <td>{nivelEscolar}</td>
                  <td>{fechaAplicacion}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <CardResultIndependence />
        <CardResultSkills />
        <CardResultHabits />
      </div>
      <button className="btn-color" onClick={handleDownloadPdf}>
        Descargar PDF
      </button>
    </>
  );
};

export default EvaluationResultPage;
