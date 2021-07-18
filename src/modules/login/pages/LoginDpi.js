import React from "react";
import LoginHeader from "../components/LoginHeader";
import LoginMenu from "../components/LoginMenu";
import PhotoLogin from "../../../assets/images/doctoraCV.jpg";
import PhotoLoginn from "../../../assets/images/el-doctor.jpg";
import LoginInicioSesion from "../components/LoginInicioSesion";
import LoginRegistrarse from "../components/LoginRegistrarse";
import LoginFooter from "../components/LoginFooter";
import LoginCopyright from "../components/LoginCopyright";

const LoginDpi = () => {
  return (
    <>
      <LoginHeader />
      <LoginMenu />
      <section className="section">
        <div className="container__login">
          <input type="checkbox" id="flip" />
          <div className="cover">
            <div className="front">
              <img src={PhotoLoginn} alt="" />
              <div className="text">
                <span className="text-1">Bienvenido</span>
                <span className="text-2">Ingresa a tu Plataforma Virtual</span>
              </div>
            </div>
            <div className="back">
              <img className="backImg" src={PhotoLogin} alt="" />
              <div className="text">
                <span className="text-1">
                  Regístrate aquí <br />
                </span>
                <span className="text-2">
                  Podrás ver tu Historial, Reservar Citas, y mucho más
                </span>
              </div>
            </div>
          </div>
          <form action="#">
            <div className="form-content">
              <LoginInicioSesion />
              <LoginRegistrarse />
            </div>
          </form>
        </div>
      </section>
      <footer>
        <LoginFooter />
      </footer>
      <div className="copyrightText">
        <LoginCopyright />
      </div>
    </>
  );
};

export default LoginDpi;
