import React from "react";
import { Route, Switch } from "react-router-dom";
import ContactanosDpi from "./pages/ContactanosDpi";
const ContactanosRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/contactanos/contactanos" component={ContactanosDpi} />
      </Switch>
    </>
  );
};

export default ContactanosRouter;
