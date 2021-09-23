import React from 'react';
import TopMenu from './components/TopMenu';
import HomePage from './pages/Home';
import CavitiesPage from './pages/Cavities';
import AppointmentsPage from './pages/Appointments';
import WhiteningPage from './pages/Whitening';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route>
                    <TopMenu/>
                </Route>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/gaatjes">
                    <CavitiesPage/>
                </Route>
                <Route exact path="/afspraak">
                    <AppointmentsPage/>
                </Route>
                <Route exact path="/tanden-bleken">
                    <WhiteningPage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
