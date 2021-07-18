import React from "react";
import {NavLink} from "react-router-dom"
const ContactanosMenu = () => {
  return (
    <>
    <nav>
      <figure>
        <NavLink to={"/dpi/dpi"}>
          <img src="/images/logo-dpipaz.png" alt="logo-dpipaz" />
        </NavLink >
      </figure>
      <input type="checkbox" id="box" />
      <label for="box">
        <span>
          Menu <i className="fas fa-bars"></i>
        </span>
      </label>
      <ul>
        <li>
          <NavLink to={"/dpi/dpi"}>Inicio</NavLink >
        </li>
        <li>
          <NavLink to={"/conocenos/conocenos"}>Conócenos</NavLink >
        </li>
        <li>
          <NavLink to={"/nuestroDoctor/nuestroDoctor"}>Nuestros Doctores</NavLink >
        </li>
        <li>
          <NavLink to={"/servicios/servicios"}>Servicios</NavLink >
        </li>
        <li>
          <NavLink to={"/contactanos/contactanos"}>Contáctanos</NavLink >
        </li>
        <li>
          <NavLink to={"/login/login"}>
            <i className="fas fa-user"></i>
            <span>Login</span>
          </NavLink >
        </li>
      </ul>
    </nav>
    </>
  );
};

export default ContactanosMenu;
