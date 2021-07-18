import React from "react";
import {NavLink} from 'react-router-dom'

const DpiHeader = () => {
  return (
    <header>
      <div class="header-content">
        <h1>
          BIENVENIDOS A <br /> <span> Diagnóstico por Imágenes PAZ</span>
        </h1>
        <p>"Entendemos la Imagen que Refleja tu Salud"</p>
        <NavLink to={"/citas/reservar"}>Reservar Cita</NavLink>
      </div>
    </header>
  );
};

export default DpiHeader;
