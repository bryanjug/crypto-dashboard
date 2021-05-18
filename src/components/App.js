import './App.css';
import CoinGeko from "coingecko-api";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import GoogleBtn from "./GoogleBtn";
import {connect} from 'react-redux';
import {incrementCountAction} from './actions';

//() SET UP REDUX AND REDUX THUNK
//() CREATE LEFT NAV
//() LOGIN FOR FAVORITES PRICE WATCHING
//() TOP HIGHS AND LOWS FROM PAST 24 HOURS / PAST HOUR / PAST WEEK / PAST YEAR
//() EXCHANGE RATES (PRICES OF EACH CURRENT AND COIN)
//() TRENDING COINS
//() EXCHANGES LIST
//() COINS LIST
//() SEARCH BAR FOR PRICE
//() NEWS

const App = ({incrementMyCount, myCount}) => {
    return (
        <div>
            <button onClick={incrementMyCount}>
                {myCount}
            </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        myCount: state.count
    }
}

const mapDispatchToProps = {
    incrementMyCount: incrementCountAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);