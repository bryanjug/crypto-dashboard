import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./components/App.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from './redux/store';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from "./components/App";
import Prices from "./components/Prices";
import Positive from './components/Positive';
import Negative from './components/Negative';
import Exchanges from './components/Exchanges';

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
//(DONE) CHECK IF SERVER IS ONLINE ONCE LOGGED IN
//(DONE) ADD CHART.JS + REACT-CHARTJS-2
//(DONE) FIX NAV BUTTON
//(DONE) BUILD RESPONSIVE BITCOIN CHART
//(DONE) CREATE DASHBOARD UI
//(DONE) RESPONSIVE DASHBOARD UI
//(DONE) BUILD LOADERS, ACTIONS, AND STORES FOR FAVORITES
//(DONE) LOGIN TO SAVE FAVORITES
//(DONE) BUILD RESPONSIVE FAVORITES UI
//(DONE) RESPONSIVE SCROLL BAR
//(DONE) SHOW FAVORITES CHARTS ON LOGIN
//(DONE) FIX GOOGLE BUTTON RESPONSIVE
//(DONE) ADD (DONE) / REMOVE FAVORITES
//(DONE) HIDE REMOVE FAVORITE BUTTON WHEN NOT LOGGED IN
//(DONE) RESPONSIVE FAVORITES LIST BUTTONS
//(DONE) NEXT / BACK FAVORITES LIST BUTTONS
//(DONE) ADD PLACEHOLDER GRAPHS WHEN NOT LOGGED IN
//(DONE) CHANGE GRADIENTS OF GRAPHS
//(DONE) CONNECT BITCOIN TO COINGECKO API
//(DONE) CONNECT FAVORITES TO COINGECKO API
//(DONE) CONNECT TRENDING TO COINGECKO API
//(DONE) CREATE LOADING SPINNER ON TRENDING WHILE CONNECTING
//(DONE) RESPONSIVE TRENDING
//(DONE) CONNECT CHANGES TO COINGECKO API
//(DONE) REMOVE COINGECKO NPM
//(DONE) RESPONSIVE PRICESLIST BUTTONS
//(DONE) FETCH DATA AND MAP PRICESLIST
//(DONE) SHOW / HIDE PRICESLIST LOADER
//(DONE) PRICES LIST LINK
//(DONE) SETUP ALL LINKS
//(DONE) POSITIVE PRICES LINK
//(DONE) NEGATIVE PRICES LINK
//(DONE) EXCHANGES LINK
//(DONE) SHOW/HIDE NEW LOADER
//(DONE) NEWS API
//(DONE) CHANGE TO GNEWS API

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Route exact path="/">
                <App />
            </Route>
            <Route path="/prices">
                <Prices />
            </Route>
            <Route path="/positive">
                <Positive />
            </Route>
            <Route path="/negative">
                <Negative />
            </Route>
            <Route path="/exchanges">
                <Exchanges />
            </Route>
        </Provider>
    </Router>, 
    document.querySelector("#root")
);
