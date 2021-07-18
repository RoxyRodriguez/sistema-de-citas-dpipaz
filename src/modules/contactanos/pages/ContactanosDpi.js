import React from "react";
import ContactanosHeader from "../components/ContactanosHeader";
import ContactanosMenu from "../components/ContactanosMenu";
import ContactanosInformacion from "../components/ContactanosInformacion";
import ContactanosFormulario from "../components/ContactanosFormulario";

const ContactanosDpi = () => {
  return (
    <>
      <ContactanosHeader />
      <ContactanosMenu />
      <section className="section__contact">
        <div className="container__contact">
          <div className="content">
            <ContactanosInformacion />
            <ContactanosFormulario />
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactanosDpi;
