import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from './components/store';
import {BrowserRouter as Router, Route} from 'react-router-dom';

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
