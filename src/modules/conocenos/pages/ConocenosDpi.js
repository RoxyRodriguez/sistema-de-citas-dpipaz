import React from "react";
import ConocenosDescription from "../components/ConocenosDescription";
import ConocenosHeader from "../components/ConocenosHeader";
import ConocenosMenu from "../components/ConocenosMenu";
import ConocenosPhoto from "../components/ConocenosPhoto";
import ConocenosMisionVision from "../components/ConocenosMisionVision";
import ConocenosFooter from "../components/ConocenosFooter";
import ConocenosCopyright from "../components/ConocenosCopyright";

const ConocenosDpi = () => {
  return (
    <>
      <ConocenosHeader />
      <ConocenosMenu />
      <section className="section__About">
        <section className="container__about">
          <div className="about__info">
            <ConocenosPhoto />
            <ConocenosDescription />
          </div>
          {/* <div className="container__flipcards">
            <ConocenosMisionVision />
          </div> */}
        </section>
      </section>
      <footer>
        <ConocenosFooter />
      </footer>
      <div className="copyrightText">
        <ConocenosCopyright />
      </div>
    </>
  );
};

export default ConocenosDpi;
