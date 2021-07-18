import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faFileMedical,
} from "@fortawesome/free-solid-svg-icons";

export const ServicioInformacion = () => {
  return (
    <>
      <h2 className="subtitle">Descripción</h2>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste rerum non
        et saepe, illum enim voluptates aspernatur hic minus! Modi laborum cum
        cumque consequuntur odio pariatur quam est, obcaecati nostrum?
      </p>
      <h2 className="subtitle">Cómo se realiza el Procedimiento</h2>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste rerum non
        et saepe, illum enim voluptates aspernatur hic minus! Modi laborum cum
        cumque consequuntur odio pariatur quam est, obcaecati nostrum?
      </p>
      <h2 className="subtitle">Duración</h2>
      <p className="description__tiempo">
      <FontAwesomeIcon icon={faClock} size="lg" color="#74A127" />15 min
      </p>
      <h2 className="subtitle">Entrega de Resultados</h2>
      <p className="description__tiempo">
      <FontAwesomeIcon icon={faFileMedical} size="lg" color="#74A127" />30 min
      </p>
    </>
  );
};
export default ServicioInformacion;