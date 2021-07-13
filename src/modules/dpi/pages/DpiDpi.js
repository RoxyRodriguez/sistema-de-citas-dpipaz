import React from "react";
import logoDpi from "./../../../assets/images/logo-dpipaz.png";
import iconoDoctor from "./../../../assets/images/doctor.png";
import photoWhy from "./../../../assets/images/why_choose_us.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';


const DpiDpi = () => {
  return (
    <>
      <header>
        <div className="header-content">
          <h1>
            BIENVENIDOS A <br /> <span> DPI PAZ</span>
          </h1>
          <p>"Entendemos la Imagen que Refleja tu Salud"</p>
          <a href="#">Reservar Cita</a>
        </div>
      </header>
      <nav>
        <figure>
          <a href="index.html">
            <img src={logoDpi} alt="logo-dpipaz" />
          </a>
        </figure>
        <input type="checkbox" id="box" />
        <label for="box">
          <span>
            Menu <i className="fas fa-bars"></i>
          </span>
        </label>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Conócenos</a>
          </li>
          <li>
            <a href="#">Nuestros Doctores</a>
          </li>
          <li>
            <a href="servicios.html">Servicios</a>
          </li>
          <li>
            <a href="contacto.html">Contáctanos</a>
          </li>
          <li>
            <a href="login.html">
              <i className="fas fa-user"></i>
              <span>Login</span>
            </a>
          </li>
        </ul>
      </nav>
      <main>
        <section className="container__card ">
          <div className="card">
            <h2 className="card__title">reserva tu cita</h2>
            <p className="card__info">
              Ahora puedes reservar tu Cita desde la Comodidad de tu Hogar
            </p>
            <a href="#" className="buttonCard">
              Click aquí
            </a>
          </div>

          <div className="card">
            <h2 className="card__title">contacto</h2>
            <ul className="card__contacto">
              <li>
              <FontAwesomeIcon icon={faMapMarker}  color="white" /> Jr. Manuel
                Villavicencio #433 2do piso - Chimbote
              </li>
              <li>
              <FontAwesomeIcon icon={faWhatsapp} size="lg" color="white"/> 955 413 784
              </li>
              <li>
              <FontAwesomeIcon icon={faPhone} color="white" /> 943 873 606 / 955 413
                784
              </li>
              <li>
              <FontAwesomeIcon icon={faEnvelope}  color="white" /> dpipazsac@gmail.com
              </li>
            </ul>
          </div>

          <div className="card">
            <h2 className="card__title">horario</h2>
            <p className="card__horario">
              Lunes a Viernes : 9:00am - 1:00pm <br />{" "}
              <span> 2:00pm - 8:00pm</span>
            </p>
            <p className="card__horario">
              Sábados :<span className="horario"> 2:00pm - 8:00pm</span>
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="inner-container">
            <h1>
              Bienvenidos a <br /> <span> DPI PAZ</span>{" "}
            </h1>
            <p className="text">
              Nuestro Centro mantiene siempre el compromiso de una atención
              personalizada con el paciente, con el objetivo de asegurar que el
              proceso de diagnóstico o estudio sea lo mas acertado posible.
              <br />
              Contamos siempre con Equipos modernos y médicos de la más alta
              calidad profesional que garantizan un estudio especializado.
            </p>
            <div className="skills">
              <span>
                Dra. Patty Zulema Azaña Chauca - Especialista en Radiología
              </span>
            </div>
          </div>
        </section>

        <section className="services">
          <div className="s-heading">
            <h1>
              Nuestros <span>Servicios</span>
            </h1>
            <p>
              Contamos con tres servicios, además te brindamos servicios de alta
              calidad, con equipos de última tecnología y especialistas
              continuamente capacitados
            </p>
          </div>
          <div className="s-box-container">
            <div className="s-box">
              <div className="bar"></div>
              <img src={iconoDoctor} alt="icono doctor" />
              <h1>Unidad de Ecografías</h1>
              <p>
                La Ecografía es un método de diagnóstco por imágenes que usa
                ondas sonoras de alta frecuencia para producir imágenes de las
                estructuras dentro del cuerpo.
              </p>
              <a className="s-btn" href="#">
                Ver más
              </a>
            </div>

            <div className="s-box">
              <div className="bar"></div>
              <img src={iconoDoctor} alt="icono doctor" />
              <h1>Unidad Radiológica de Mama</h1>
              <p>
                La mamografía es un tipo especifico de toma de imágenes delos
                senos que utiliza rayos X de baja dosis para detectar en forma
                temprana el cáncer.
              </p>
              <a className="s-btn" href="#">
                Ver más
              </a>
            </div>

            <div className="s-box">
              <div className="bar"></div>
              <img src={iconoDoctor} alt="icono doctor" />
              <h1>Unidad Radiográfica</h1>
              <p>
                Una radiografía es una prueba rápida e indolora que genera
                imágenes de las estructuras internas del cuerpo, en especial de
                los huesos, pulmones y otras estructuras.
              </p>
              <a className="s-btn" href="#">
                Ver más
              </a>
            </div>
          </div>
        </section>

        <section className="container__why">
          <figure className="why__image ">
            <img src={photoWhy} alt="" />
          </figure>
          <div className="why__reasons ">
            <h2 className="why__title">
              Porqué <br />
              <span>Elegirnos?</span>
            </h2>
            <ul className="why__list">
              <li className="why__item">
                <i className="fas fa-hand-holding-medical fa-2x"></i>Somos
                Especialistas
              </li>
              <p className="why__description">
                La Dra. Patty Z. Azaña Chauca cuenta con las 8 años de
                experiencia, que garantiza un estudio especializado.
              </p>
              <li className="why__item">
                <i className="fas fa-hand-holding-medical fa-2x"></i>Contamos
                con Equipos modernos
              </li>
              <p className="why__description">
                Contamos con equipos de Última generación para brindarles un
                mejor diagnóstico.
              </p>
              <li className="why__item">
                <i className="fas fa-hand-holding-medical fa-2x"></i>Atención
                Personalizada
              </li>
              <p className="why__description">
                Nuestro centro mantiene siempre el compromiso de una atención
                personalizada con el paciente, con el objetivo de que el proceso
                sea lo mas acertado posible.
              </p>
            </ul>
          </div>
        </section>
        <section className="gallery__section">AQUI VA LA GALERIA</section>
        <footer>
          <div className="container__footer">
            <div className="about">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Facilis, illum a vero voluptate, expedita placeat id omnis
                voluptatem in quas consequuntur temporibus explicabo, amet culpa
                aspernatur! Sit ipsam pariatur quos?
              </p>
              <ul className="redes">
                <li>
                  <a href="!#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="quick__links">
              <h2>Enlaces Útiles</h2>
              <ul>
                <li>
                  <a href="#">Conócenos</a>
                </li>
                <li>
                  <a href="#">Nuestro Médico</a>
                </li>
                <li>
                  <a href="#">Nuestros Servicios</a>
                </li>
                <li>
                  <a href="#">Ecografías</a>
                </li>
                <li>
                  <a href="#">Radiología de Mama</a>
                </li>
                <li>
                  <a href="#">Radiografìa</a>
                </li>
              </ul>
            </div>
            <div className="contact">
              <h2>Contacto</h2>
              <ul className="info">
                <li>
                  <span>
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <span>
                    Jr. Manuel Villavicencio #433 2do piso <br /> Chimbote
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fab fa-whatsapp"></i>
                  </span>
                  <span>955 413 784</span>
                </li>
                <li>
                  <span>
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <span>
                    943 873 606 <br /> 955 413 784
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span>dpipazsac@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="copyrightText">
          <p>Copyright 2021. Todos los Derechos Reservados DPI Paz</p>
        </div>
      </main>
    </>
  );
};

export default DpiDpi;
