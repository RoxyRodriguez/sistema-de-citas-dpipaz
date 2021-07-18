import React from "react";
import { Route, Switch } from "react-router-dom";
import NuestroDoctorDpi from "./pages/NuestroDoctorDpi";

const NuestroDoctorRouter = () => {
  return (
    <>
      <Switch>
        <Route
          path="/nuestroDoctor/nuestroDoctor"
          component={NuestroDoctorDpi}
        />
      </Switch>
    </>
  );
};

export default NuestroDoctorRouter;
