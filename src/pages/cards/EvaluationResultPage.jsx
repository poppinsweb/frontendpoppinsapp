import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useLocation } from "react-router-dom";
import { useChild } from "../../context/ChildProvider";
import { CardResultIndependence } from "../../components/cards/CardResultIndependence";
import { CardResultSkills } from "../../components/cards/CardResultSkills";
import { CardResultHabits } from "../../components/cards/CardResultHabits";
import umbrella from "../../styles/images/UmbrellaFirst.png";
import "../../styles/users/result.css";

const EvaluationResultPage = () => {
  const { data: childrenData, loading: childrenLoading, error: childrenError } = useChild();

  const location = useLocation();
  const { evaluationtoken } = location.state || {};

  if (childrenLoading) return <p>Loading...</p>;
  if (childrenError)
    return <p>Error loading children data: {childrenError.message}</p>;

  console.log(evaluationtoken);

  const responses = childrenData?.responses || [];

  const fechaAplicacion = childrenData?.createdAt;
  const sexo = responses[0]?.value || "N/A";
  const estrato = responses[1]?.value || "N/A";
  const tipoInstitucion = responses[2]?.value || "N/A";
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
    const pdf = new jsPDF();
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

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
        <h1 className="main-title">Evaluación de hábitos e independencia</h1>
        <h2>en la rutina diaria</h2>
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
                  <td>{fechaAplicacion?.slice(0, 10)}</td>
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
        Download PDF
      </button>
    </>
  );
};

export default EvaluationResultPage;
