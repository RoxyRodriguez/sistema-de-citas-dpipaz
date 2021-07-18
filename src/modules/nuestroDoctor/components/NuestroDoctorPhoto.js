import React from "react";
import photodoctora from "../../../assets/images/doctoraCV.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const NuestroDoctorPhoto = () => {
  return (
    <>
      <div className="item">
        <img src={photodoctora} alt="team" />
        <div className="inner">
          <div className="info">
            <h5>Dra. Patty Zulema Azaña Chauca</h5>
            <p>Médico Cirujano CMP: 55637</p>
            <p>Especialista en Radiología RNE: 32607</p>
            <div className="team-info">
              <a href="#">
                <FontAwesomeIcon icon={faPlus}  />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NuestroDoctorPhoto;
