import React from "react";

const LoginRegistrarse = () => {
  return (
    <>
      <div className="signup-form">
        <div className="title">Regístrate</div>
        <div className="input-boxes">
          <div className="input-box">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Ingresa tu Nombre" required />
          </div>
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
              placeholder="Escribe una Contraseña"
              required
            />
          </div>
          <div className="button input-box">
            <input type="submit" value="Registrarse" />
          </div>
          <div className="text sign-up-text">
            Ya tienes una Cuenta? <label for="flip">Inicia Sesión</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegistrarse;
