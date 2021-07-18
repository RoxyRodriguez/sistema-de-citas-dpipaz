import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import CitasRouter from "./modules/citas/CitasRouter";
import ConocenosRouter from "./modules/conocenos/ConocenosRouter";
import DpiRouter from "./modules/dpi/DpiRouter";
import LoginRouter from "./modules/login/LoginRouter";
import NuestroDoctorRouter from "./modules/nuestroDoctor/NuestroDoctorRouter";
import ServiciosRouter from "./modules/servicios/ServiciosRouter";
import ServicioRouter from "./modules/servicio/ServicioRouter";
import ContactanosRouter from "./modules/contactanos/ContactanosRouter";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/dpi" component={DpiRouter} />
          <Route path="/citas" component={CitasRouter} />
          <Route path="/servicios" component={ServiciosRouter} />
          <Route path="/conocenos" component={ConocenosRouter} />
          <Route path="/nuestroDoctor" component={NuestroDoctorRouter} />
          <Route path="/login" component={LoginRouter} />
          <Route path="/servicio" component={ServicioRouter} />
          <Route path="/contactanos" component={ContactanosRouter} />
          <Redirect to="/dpi/dpi" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
