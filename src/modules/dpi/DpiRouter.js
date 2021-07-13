import React from 'react'
import { Route, Switch } from 'react-router-dom'
import DpiDpi from './pages/DpiDpi'

const DpiRouter = () => {
    return (
        <>
            <Switch> 
                <Route path="/dpi/dpi" component={DpiDpi} />
            </Switch>
        </>
    )
}

export default DpiRouter

