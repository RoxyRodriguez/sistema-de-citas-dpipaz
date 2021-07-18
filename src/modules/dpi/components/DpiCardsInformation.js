import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faMapMarker,
  faPhone,
 
} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom'


const DpiCardsInformation = () => {
  return (
    <>
      <div className="card">
        <h2 className="card__title">reserva tu cita</h2>
        <p className="card__info">
          Ahora puedes reservar tu Cita desde la Comodidad de tu Hogar
        </p>
        <NavLink to={"/citas/reservar"} className="buttonCard">
          Click aquí
        </NavLink>
      </div>
      <div className="card">
        <h2 className="card__title">contacto</h2>
        <ul className="card__contacto">
          <li>
            <FontAwesomeIcon icon={faMapMarker} color="white" /> Jr. Manuel
            Villavicencio #433 2do piso - Chimbote
          </li>
          <li>
            <FontAwesomeIcon icon={faWhatsapp} size="lg" color="white" />
            955 413 784
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} color="white" /> 943 873 606 / 955
            413 784
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} color="white" />
            dpipazsac@gmail.com
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="card__title">horario</h2>
        <p className="card__horario">
          Lunes a Viernes : 9:00am - 1:00pm <br /> <span> 2:00pm - 8:00pm</span>
        </p>
        <p className="card__horario">
          Sábados :<span className="horario"> 2:00pm - 8:00pm</span>
        </p>
      </div>
    </>
  );
};

export default DpiCardsInformation;
