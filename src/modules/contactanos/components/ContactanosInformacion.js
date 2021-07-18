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
const ContactanosInformacion = () => {
  return (
    <>
      <div className="left-side">
        <div className="address details">
          <FontAwesomeIcon icon={faMapMarked} size="2x" color="white" />
          <div className="topic">Dirección</div>
          <div className="text-one">Jr. Manuel Villavicencio #433 2do piso</div>
          <div className="text-two">Chimbote</div>
        </div>
        <div className="phone details">
          <FontAwesomeIcon icon={faWhatsapp} size="2x" color="white" />
          <div className="topic">Whatsapp</div>
          <div className="text-one">955 413 784</div>
        </div>
        <div className="phone details">
          <FontAwesomeIcon icon={faPhone} size="2x" color="white" />
          <div className="topic">Celulares</div>
          <div className="text-one">943 873 606</div>
          <div className="text-two">955 413 784</div>
        </div>
        <div className="email details">
          <FontAwesomeIcon icon={faEnvelope} size="2x" color="white" />
          <div className="topic">Correo</div>
          <div className="text-one">dpipazsac@gmail.com</div>
        </div>
      </div>
    </>
  );
};

export default ContactanosInformacion;
