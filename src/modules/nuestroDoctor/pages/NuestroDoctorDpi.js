import React from "react";
import NuestroDoctorHeader from "../components/NuestroDoctorHeader";
import NuestroDoctorMenu from "../components/NuestroDoctorMenu";
import NuestroDoctorPhoto from "../components/NuestroDoctorPhoto";
import NuestroDoctorCopyright from "../components/NuestroDoctorCopyright";
import NuestroDoctorFooter from "../components/NuestroDoctorFooter";

const NuestroDoctorDpi = () => {
  return (
    <>
      <NuestroDoctorHeader />
      <NuestroDoctorMenu />
      <div className="main">
        <section className="team-section">
          <div className="container__team">
            <div className="row">
              <div className="section-title">
                <p>
                  Contamos con una Doctora Especialista en Radiología, con más
                  de 8 años de experiencia.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="team-items">
                <NuestroDoctorPhoto />
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <NuestroDoctorFooter />
      </footer>
      <div className="copyrightText">
       <NuestroDoctorCopyright />
      </div>

    </>
  );
};

export default NuestroDoctorDpi;
