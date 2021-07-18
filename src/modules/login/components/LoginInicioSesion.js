import React from "react";

const LoginInicioSesion = () => {
  return (
    <>
      <div className="login-form">
        <div className="title">Inicio de Sesión</div>
        <div className="input-boxes">
          <div className="input-box">
            <i className="fas fa-envelope"></i>
            <input
              type="text"
              placeholder="Ingresa tu Correo electrónico"
              required
            />
          </div>
          <div className="input-box">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              placeholder="Ingresa tu Contraseña"
              required
            />
          </div>
          <div className="text">
            <a href="#">Olvidaste tu Contraseña?</a>
          </div>
          <div className="button input-box">
            <input type="submit" value="Ingresar" />
          </div>
          <div className="text sign-up-text">
            No tienes una Cuenta? <label for="flip">Regístrate</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginInicioSesion;
