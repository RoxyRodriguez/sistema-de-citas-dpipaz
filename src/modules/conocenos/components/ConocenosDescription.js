import React from "react";
import {NavLink} from "react-router-dom"
const ConocenosDescription = () => {
  return (
    <>
      <div className="about__description ">
        <h1 className="about__title">
          Diagnóstico por <span>Imágenes PAZ</span>{" "}
        </h1>
        <p className="bold">"Entendemos la Imagen que Refleja tu Salud</p>
        <p className="about__words">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, beatae
          atque voluptas, nam inventore ipsam et aut, quasi obcaecati adipisci
          maxime dolore animi. Consequatur placeat dolor in, hic ducimus
          possimus!
        </p>
        <p className="about__words">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, beatae
          atque voluptas, nam inventore ipsam et aut, quasi obcaecati adipisci
          maxime dolore animi. Consequatur placeat dolor in, hic ducimus
          possimus!
        </p>
        <p className="about__words">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, beatae
          atque voluptas, nam inventore ipsam et aut, quasi obcaecati adipisci
          maxime dolore animi. Consequatur placeat dolor in, hic ducimus
          possimus!
        </p>
        <NavLink to={"/citas/reservar"} className="button-reserva" >
          Reserva tu Cita
        </NavLink>
      </div>
    </>
  );
};

export default ConocenosDescription;
