import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
// Plugins a hacer routing
import { Home } from '../views/home/Home';
import { VisorDecisiones } from '../views/visor-decisiones/VisorDesiciones';
import { Inicio } from '../views/inicio/Inicio';
import { RecoilRoot } from 'recoil';

export function RouterPrincipal() {
    return (
        <Router>
            <RecoilRoot>
                <Switch>
                    <Route exact path="/">
                        <Inicio />
                    </Route>
                    <Route path="/testDesiciones">
                        <VisorDecisiones />
                    </Route>
                    <Route path="/inicio">
                        <Home />
                    </Route>
                </Switch>
            </RecoilRoot>
        </Router>
    );
}