import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch}from "react-router-dom"
import CitasRouter from './modules/citas/CitasRouter'
import DpiRouter from './modules/dpi/DpiRouter'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/dpi" component={DpiRouter} />         
          <Route path="/citas" component={CitasRouter} />
          <Redirect to ="/dpi/dpi"/>
        </Switch>
      </Router>
    </>
  )
}

export default App

