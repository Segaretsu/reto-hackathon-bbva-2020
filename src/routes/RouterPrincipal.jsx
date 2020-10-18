import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
// Plugins a hacer routing
import { Home } from '../views/home/Home';
import { Inicio } from '../views/inicio/Inicio';
import { RecoilRoot } from 'recoil';

export function RouterPrincipal() {
    return (
        <Router>
            <RecoilRoot>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route  path="/inicio">
                        <Inicio />
                    </Route>
                </Switch>
            </RecoilRoot>
        </Router>
    );
}