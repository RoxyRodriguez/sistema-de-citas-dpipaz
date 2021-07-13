import React from "react";
import photoWhy from "./../../../assets/images/why_choose_us.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingMedical } from "@fortawesome/free-solid-svg-icons";

const DpiWhy = () => {
  return (
    <>
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
            <FontAwesomeIcon icon={faHandHoldingMedical} size="2x" /> Somos
            Especialistas
          </li>
          <p className="why__description">
            La Dra. Patty Z. Azaña Chauca cuenta con las 8 años de experiencia,
            que garantiza un estudio especializado.
          </p>
          <li className="why__item">
            <FontAwesomeIcon icon={faHandHoldingMedical} size="2x" /> Contamos
            con Equipos modernos
          </li>
          <p className="why__description">
            Contamos con equipos de Última generación para brindarles un mejor
            diagnóstico.
          </p>
          <li className="why__item">
            <FontAwesomeIcon icon={faHandHoldingMedical} size="2x" /> Atención
            Personalizada
          </li>
          <p className="why__description">
            Nuestro centro mantiene siempre el compromiso de una atención
            personalizada con el paciente, con el objetivo de que el proceso sea
            lo mas acertado posible.
          </p>
        </ul>
      </div>
    </>
  );
};

export default DpiWhy;
