// import Evaluation from "../../services/evaluationService/Evaluation";
import "../../styles/home/home.css";

export function Home() {
  return (
    <div className="container">
      <div className="row">
        <section className="col logo-container">
          <img
            src="src/styles/images/UmbrellaFirst.png"
            className="logo"
            alt="umbrella-logo"
          />
        </section>
      </div>
      <section>
        <div className="row services-container">
          <div className="col-12 col-md-6 col-lg-4 img-individual-container1">
            <a href="/infoencuesta">
              <img
                src={"src/styles/images/tests.png"}
                alt="test"
                className="img-slider"
              />
              <h2 className="text-slider">Encuesta Hábitos</h2>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4 img-individual-container2">
            <a href="/carrito"> 
              <img
                src={"src/styles/images/paraguas.png"}
                alt="service"
                className="img-slider"
              />
              <h2 className="text-slider">Compras</h2>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4 img-individual-container1">
            <a href="/construction">
              <img
                src={"src/styles/images/fondocolores.jpg"}
                alt="service"
                className="img-slider"
              />
              <h2 className="text-slider">Materiales</h2>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4 img-individual-container2">
            <a href="/construction">
              <img
                src={"src/styles/images/habitosfondo.png"}
                alt="service"
                className="img-slider"
              />
              <h2 className="text-slider">Asesorías</h2>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4 img-individual-container1">
            <a href="/construction">
              <img
                src={"src/styles/images/lilafond.png"}
                alt="service"
                className="img-slider"
              />
              <h2 className="text-slider">Instituciones Educativas</h2>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4 img-individual-container2">
            <a href="/construction">
              <img
                src={"src/styles/images/cursor.png"}
                alt="service"
                className="img-slider"
              />
              <h2 className="text-slider">Rutas de aprendizaje</h2>
            </a>
          </div>
        </div>
      </section>
      <div>
      </div>
    </div>
  );
}
