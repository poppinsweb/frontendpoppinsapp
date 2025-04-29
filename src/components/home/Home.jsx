import React from "react";
import "../../styles/home/home.css";
import umbrellafirst from "../../styles/images/UmbrellaFirst.png";
import tests from "../../styles/images/tests.png";
import paraguas from "../../styles/images/paraguas.png";  
import fondocolores from "../../styles/images/fondocolores.jpg";
import habitosfondo from "../../styles/images/habitosfondo.png";
import lilaFond from "../../styles/images/lilaFond.png";
import cursor from "../../styles/images/cursor.png";

export function Home() {
  return (
    <div className="container">
      <div className="row">
        <section className="col logo-container">
          <img
            src={umbrellafirst}
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
                src={tests}
                alt="test"
                className="img-slider"
              />
              <h2 className="text-slider">Encuesta Hábitos</h2>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4 img-individual-container2">
            <a href="/carrito"> 
              <img
                src={paraguas}
                alt="service"
                className="img-slider"
              />
              <h2 className="text-slider">Compras</h2>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4 img-individual-container1">
            <a href="/materiales">
              <img
                src={fondocolores}
                alt="service"
                className="img-slider"
              />
              <h2 className="text-slider">Materiales</h2>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4 img-individual-container2">
            <a href="/construction">
              <img
                src={habitosfondo}
                alt="service"
                className="img-slider"
              />
              <h2 className="text-slider">Asesorías</h2>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4 img-individual-container1">
            <a href="/construction">
              <img
                src={lilaFond}
                alt="service"
                className="img-slider"
              />
              <h2 className="text-slider">Instituciones Educativas</h2>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4 img-individual-container2">
            <a href="/construction">
              <img
                src={cursor}
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
