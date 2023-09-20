import "../../styles/home/footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="container footer-container">
      <footer className="text-center">
        <div className="container">
          <section className="mt-1 footer-links">
            <div className="row text-center d-flex justify-content-center pt-3">
              <div className="col-md-12">
                <a href="/">Inicio</a>
              </div>
            </div>
            <div className="row text-center d-flex justify-content-center pt-3">
              <div className="col-md-12">
                <a href="/construction">Contactanos</a>
              </div>
            </div>
            <div className="row text-center d-flex justify-content-center pt-3">
              <div className="col-md-12">
                <a href="/construction">Aviso Legal</a>
              </div>
            </div>
            <div className="row text-center d-flex justify-content-center pt-3">
              <div className="col-md-12">
                <a href="/construction">Privacidad</a>
              </div>
            </div>
            <div className="row text-center d-flex justify-content-center pt-3">
              <div className="col-md-12">
                <a href="/construction">Copyright</a>
              </div>
            </div>
            <div className="row text-center d-flex justify-content-center pt-3">
              <div className="col-md-12">
                <a href="/construction">Sobre Nosotros</a>
              </div>
            </div>
          </section>
          <section className="social-logos">
            <a href="www.facebook.com" >
              <FaFacebook alt="Link-facebook" className="social" />
            </a>
            <a href="www.instagram.com">
              <FaInstagram alt="Link-instagram" className="social" />
            </a>
            <a href="www.linkedin.com">
              <FaLinkedin alt="Link-facebook" className="social"/>  
            </a>
          </section>
        </div>
      </footer>
    </div>
  );
};
