import React from "react";
import { Route, Switch } from "react-router-dom";
import CitasReservar from "./pages/CitasReservar";

const CitasRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/citas/reservar" component={CitasReservar} />
      </Switch>
    </>
  );
};

export default CitasRouter;
