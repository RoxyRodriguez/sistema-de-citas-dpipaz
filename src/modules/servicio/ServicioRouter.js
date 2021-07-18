import React from "react";
import { Route, Switch } from "react-router-dom";
import ServicioDpi from "./pages/ServicioDpi"
const ServicioRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/servicio/servicio" component={ServicioDpi} />
      </Switch>
    </>
  );
};

export default ServicioRouter;
