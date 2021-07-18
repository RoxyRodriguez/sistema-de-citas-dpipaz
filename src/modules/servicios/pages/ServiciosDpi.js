import React from "react";
import ServiciosHeader from "../components/ServiciosHeader";
import ServiciosMenu from "../components/ServiciosMenu";
import ServiciosServicios from "../components/ServiciosServicios";
import ServiciosFooter from "../components/ServiciosFooter";
import ServiciosCopyright from "../components/ServiciosCopyright";

const ServiciosDpi = () => {
  return (
    <>
      <ServiciosHeader />
      <ServiciosMenu />   

      <section className="service">
       <ServiciosServicios />
      </section>
      <footer>
          <ServiciosFooter/>
        </footer>
        <div className="copyrightText">
         <ServiciosCopyright />
        </div>
    </>
  );
};

export default ServiciosDpi;
