import React from "react";
import DpiHeader from "../components/DpiHeader";
import DpiMenu from "../components/DpiMenu";
import DpiCardsInformation from "../components/DpiCardsInformation";
import DpiWelcome from "../components/DpiWelcome";
import DpiServices from "../components/DpiServices";
import DpiWhy from "../components/DpiWhy";
import DpiFooter from "../components/DpiFooter";
import DpiCopyright from "../components/DpiCopyright";
import DpiCarruselGaleria from "../components/DpiCarruselGaleria";

const DpiDpi = () => {
  return (
    <>
      <DpiHeader />
      <DpiMenu />

      <main>
        <section className="container__card ">
          <DpiCardsInformation />
        </section>

        <section className="about-section">
          <DpiWelcome />
        </section>

        <section className="services">
          <DpiServices />
        </section>

        <section className="container__why">
          <DpiWhy />
        </section>
        <section className="gallery__section">
          <DpiCarruselGaleria />
        </section>
        <footer>
          <DpiFooter />
        </footer>
        <div className="copyrightText">
         <DpiCopyright />
        </div>
      </main>
    </>
  );
};

export default DpiDpi;
