import React from "react";

const CitaFormulario = () => {
  return (
    <>
      <div className="container__formulario">
        <h2 className="title">Ingrese sus Datos:</h2>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">DNI</span>
                <input
                  type="text"
                  placeholder="Ej. 23456787"
                  maxlength="8"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Nombre y Apellidos</span>
                <input
                  type="text"
                  placeholder="Ej. Dulce Azaña Rodríguez"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Tipo de Servicio:</span>
                <select className="select-service" name="select">
                  <option value="value1" selected>
                    Ecografía Doppler
                  </option>
                  <option value="value2">Ecografía de Cadera</option>
                  <option value="value3">Ecografía Transfontanelar</option>
                  <option value="value4" selected>
                    Radiografía
                  </option>
                  <option value="value5">Urografía Excretora</option>
                  <option value="value6">Mamografía</option>
                </select>
              </div>
              <div className="input-box">
                <span className="details">N°de Celular</span>
                <input type="text" placeholder="Ej. 962345467" required />
              </div>
              <div className="input-box">
                <span className="details">Correo Electrónico</span>
                <input
                  type="text"
                  placeholder="Ej. dulcemaria@gmail.com"
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CitaFormulario;
