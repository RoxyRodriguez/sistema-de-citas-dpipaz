import React from "react";

const DpiMenu = () => {
  return (
    <nav>
      <figure>
        <a href="index.html">
          <img src="/images/logo-dpipaz.png" alt="logo-dpipaz" />
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
  );
};

export default DpiMenu;