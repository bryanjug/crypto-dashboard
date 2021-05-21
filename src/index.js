import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from './redux/store';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//(DONE) SET UP REDUX AND REDUX THUNK
//(DONE) BUILD GOOGLE LOGIN BUTTON
//(DONE) BUILD NAV BAR AND CLOSING / OPENING
//(DONE) STYLE GOOGLE LOGIN BUTTON
//(DONE) CREATE LOADER STATE
//(DONE) SHOW USER'S NAME ONCE LOGGED
//(DONE) REMOVE EXTRA REDUCERS AND PASS IN VARIABLES
//(DONE) CREATE RESPONSIVE LEFT NAV
//(DONE) CHANGE STATES IN GOOGLEBTN TO REDUX
//(DONE) SPLIT FILES INTO DIFFERENT COMPONENTS
//(DONE) SETUP JSON SERVER
//(DONE) ADD USER TO DB ONCE LOGGED IN
//(DONE) FIXED NAV POSITION FIXED
//() ADD CHART.JS
//() CREATE DASHBOARD UI
//() RESPONSIVE DASHBOARD UI
//() LOGIN FOR FAVORITES PRICE WATCHING
//() TOP HIGHS AND LOWS FROM PAST 24 HOURS / PAST HOUR / PAST WEEK / PAST YEAR
//() EXCHANGE RATES (PRICES OF EACH CURRENT AND COIN)
//() TRENDING COINS
//() EXCHANGES LIST
//() COINS LIST
//() SEARCH BAR FOR PRICE
//() NEWS API

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Route exact path="/">
                <App />
            </Route>
        </Provider>
    </Router>, 
    document.querySelector("#root")
);
