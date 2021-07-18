import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import DpiDpi from './pages/DpiDpi'

const DpiRouter = () => {
    return (
        <>
            <Switch> 
                <Route path="/dpi/dpi" component={DpiDpi} />
                <Redirect to = "/dpi/dpi" />
            </Switch>
        </>
    )
}

export default DpiRouter

