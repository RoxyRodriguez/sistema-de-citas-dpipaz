import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginDpi from "./pages/LoginDpi";

const LoginRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/login/login" component={LoginDpi} />
      </Switch>
    </>
  );
};

export default LoginRouter;
