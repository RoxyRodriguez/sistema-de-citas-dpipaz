import React from "react";

const ContactanosFormulario = () => {
  return (
    <>
      <div className="right-side">
        <div className="topic-text">Envíanos un Mensaje</div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          odit perspiciatis consectetur temporibus quasi nobis.
        </p>
        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Ingrese su Nombre y Apellido" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="Ingrese su Correo electrónico" />
          </div>
          <div className="input-box message-box">
            <textarea placeholder="Escriba aquí su Mensaje"></textarea>
          </div>
          <div className="button">
            <input type="button" value="Enviar" />
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactanosFormulario;
