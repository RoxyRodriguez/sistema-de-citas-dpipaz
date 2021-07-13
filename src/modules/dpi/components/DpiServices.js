import React from 'react'
import iconoDoctor from "./../../../assets/images/doctor.png";
const DpiServices = () => {
    return (
        <>
          <div className="s-heading">
            <h1>
              Nuestros <span>Servicios</span>
            </h1>
            <p>
              Contamos con tres servicios, además te brindamos servicios de alta
              calidad, con equipos de última tecnología y especialistas
              continuamente capacitados
            </p>
          </div>
          <div className="s-box-container">
            <div className="s-box">
              <div className="bar"></div>
              <img src={iconoDoctor} alt="icono doctor" />
              <h1>Unidad de Ecografías</h1>
              <p>
                La Ecografía es un método de diagnóstco por imágenes que usa
                ondas sonoras de alta frecuencia para producir imágenes de las
                estructuras dentro del cuerpo.
              </p>
              <a className="s-btn" href="#">
                Ver más
              </a>
            </div>

            <div className="s-box">
              <div className="bar"></div>
              <img src={iconoDoctor} alt="icono doctor" />
              <h1>Unidad Radiológica de Mama</h1>
              <p>
                La mamografía es un tipo especifico de toma de imágenes delos
                senos que utiliza rayos X de baja dosis para detectar en forma
                temprana el cáncer.
              </p>
              <a className="s-btn" href="#">
                Ver más
              </a>
            </div>

            <div className="s-box">
              <div className="bar"></div>
              <img src={iconoDoctor} alt="icono doctor" />
              <h1>Unidad Radiográfica</h1>
              <p>
                Una radiografía es una prueba rápida e indolora que genera
                imágenes de las estructuras internas del cuerpo, en especial de
                los huesos, pulmones y otras estructuras.
              </p>
              <a className="s-btn" href="#">
                Ver más
              </a>
            </div>
          </div>   
        </>
    )
}

export default DpiServices
