import React from "react";
import {NavLink} from "react-router-dom"

export const ServicioAcordion = () => {
  return (
    <>
      <div className="menu">
        <li className="item" id="ecografia-general">
          <NavLink to="#ecografia-general" className="btn">
            <i className="fas fa-user-md"></i>Ecografía General
          </NavLink >
          <div className="smenu">
            <NavLink to="#">ecografia abdominal </NavLink >
            <NavLink to="#">ecografia renal</NavLink >
            <NavLink to="#">ecografia transvaginal</NavLink >
            <NavLink to="#">ecografia prostática</NavLink >
          </div>
        </li>
        <li className="item" id="ecografia-doppler">
          <NavLink to="#ecografia-doppler" className="btn">
            <i className="fas fa-user-md"></i>Ecografía Doppler
          </NavLink >
          <div className="smenu">
            <NavLink to="#">ecografia doppler carotidea</NavLink >
            <NavLink to="#">ecografia doppler portal</NavLink >
            <NavLink to="#">
              ecografia doppler arterial miembros superiores e inferiores
            </NavLink >
            <NavLink to="#">ecografia doppler venoso</NavLink >
            <NavLink to="#">ecografia doppler testicular</NavLink >
          </div>
        </li>
        <li className="item">
        <NavLink to="#" className="btn" >
            <i className="fas fa-user-md"></i>Ecografía Musculo Esquelético
          </NavLink >
        </li>
        <li className="item">
          <NavLink to ="#" className="btn" >
            <i className="fas fa-user-md"></i>Ecografía Partes Blandas
          </NavLink >
        </li>
      </div>
    </>
  );
};
export default ServicioAcordion;