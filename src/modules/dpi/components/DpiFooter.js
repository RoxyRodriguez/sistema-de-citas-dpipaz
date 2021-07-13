import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faPhone,
  faMapMarked,
} from "@fortawesome/free-solid-svg-icons";

const DpiFooter = () => {
  return (
    <>
      <div className="container__footer">
        <div className="about">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            illum a vero voluptate, expedita placeat id omnis voluptatem in quas
            consequuntur temporibus explicabo, amet culpa aspernatur! Sit ipsam
            pariatur quos?
          </p>
          <ul className="redes">
            <li>
              <a href="!#">
                <FontAwesomeIcon icon={faFacebookF} size="lg" color="white" />
              </a>
            </li>
            <li>
              <a href="!#">
                <FontAwesomeIcon icon={faTwitter} size="lg" color="white" />
              </a>
            </li>
            <li>
              <a href="!#">
                <FontAwesomeIcon icon={faInstagram} size="lg" color="white" />
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
                <FontAwesomeIcon icon={faMapMarked} color="white" />
              </span>
              <span>
                Jr. Manuel Villavicencio #433 2do piso <br /> Chimbote
              </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faWhatsapp} color="white" />
              </span>
              <span>955 413 784</span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faPhone} color="white" />
              </span>
              <span>
                943 873 606 <br /> 955 413 784
              </span>
            </li>
            <li>
              <span>
                <FontAwesomeIcon icon={faEnvelope} color="white" />
              </span>
              <span>dpipazsac@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DpiFooter;
