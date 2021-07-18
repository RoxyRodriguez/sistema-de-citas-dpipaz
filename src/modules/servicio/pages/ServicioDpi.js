import React from "react";
import ServicioHeader from "../components/ServicioHeader";
import ServicioMenu from "../components/ServicioMenu";
import ServicioAcordion from "../components/ServicioAcordion";
import ServicioDescripcion from "../components/ServicioDescripcion";
import ServicioInformacion  from "../components/ServicioInformacion";
import ServicioFooter  from "../components/ServicioFooter";
import ServicioCopyright  from "../components/ServicioCopyright";

const ServicioDpi = () => {
  return (
    <>
      <ServicioHeader />
      <ServicioMenu />
      <section className="section-Description">
        <ServicioDescripcion />
        <div className="esp">
          <ServicioAcordion />
          <div className="especialidad__information">
            <ServicioInformacion />
          </div>
        </div>
      </section>
      <footer>
        <ServicioFooter />
      </footer>
      <div className="copyrightText">
       <ServicioCopyright />
      </div>
    </>
  );
};

export default ServicioDpi;
