import React from "react";
import CitaHeader from "../components/CitaHeader";
import CitaMenu from "../components/CitaMenu";
import CitaFormulario from "../components/CitaFormulario";
import CitaCalendario from "../components/CitaCalendario";
import CitaBotones from "../components/CitaBotones";



const CitasReservar = () => {
  return (
    <>
      <CitaHeader />
      <CitaMenu />
      
      <section className="container__cita">
       <CitaFormulario />
        <div className="container__reserva">
          <div className="calendar__cita">
            <CitaCalendario />
            
            </div>
          <div className="btn-action">
            <CitaBotones />
          </div>
        </div>
      </section>
    </>
  );
};

export default CitasReservar;
