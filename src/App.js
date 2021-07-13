import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch}from "react-router-dom"
import DpiRouter from './modules/dpi/DpiRouter'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/dpi" component={DpiRouter} />
          <Redirect to ="/dpi/dpi"/>
        </Switch>
      </Router>
    </>
  )
}

export default App

