import React from "react";
import { Route, Switch } from "react-router-dom";
import ConocenosDpi from "./pages/ConocenosDpi";

const ConocenosRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/conocenos/conocenos" component={ConocenosDpi} />
      </Switch>
    </>
  );
};

export default ConocenosRouter;
