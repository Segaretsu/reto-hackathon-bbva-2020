import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
// Plugins a hacer routing
import { Home } from '../views/home/Home';
import { RecoilRoot } from 'recoil';

export function RouterPrincipal() {
    return (
        <Router>
            <RecoilRoot>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </RecoilRoot>
        </Router>
    );
}