import React from "react";
import { Route, Switch } from "react-router-dom";
import ServiciosDpi from "./pages/ServiciosDpi";

const ServiciosRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/Servicios/servicios" component={ServiciosDpi} />
      </Switch>
    </>
  );
};

export default ServiciosRouter;
