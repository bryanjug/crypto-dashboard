import "./App.css";
import CoinGeko from "coingecko-api";
import GoogleBtn from "./GoogleBtn";
import { connect } from "react-redux";
import { incrementCountAction } from "./actions";
import { Link } from "react-router-dom";

//(DONE) SET UP REDUX AND REDUX THUNK
//(DONE) BUILD GOOGLE LOGIN BUTTON
//() RESPONSIVE GOOGLE LOGIN BUTTON
//() CREATE RESPONSIVE LEFT NAV
//() LOGIN FOR FAVORITES PRICE WATCHING
//() TOP HIGHS AND LOWS FROM PAST 24 HOURS / PAST HOUR / PAST WEEK / PAST YEAR
//() EXCHANGE RATES (PRICES OF EACH CURRENT AND COIN)
//() TRENDING COINS
//() EXCHANGES LIST
//() COINS LIST
//() SEARCH BAR FOR PRICE
//() NEWS

const App = ({ incrementMyCount, myCount }) => {
	return (
		<div className="row">
            <div className="col-0 navContainer">
                <div className="logo nav">
                    <button className="navButton">
                        <i className="bi bi-currency-bitcoin navIcon logoIcon"></i>
                        <span className="navText">Crypto</span>
                    </button>
                </div>
                <GoogleBtn />
                <Link to="/" className="nav">
                    <i className="bi bi-speedometer navIcon"></i>
                    <span className="navText">Dashboard</span>
                </Link>
                <Link to="/prices" className="nav">
                    <i className="bi bi-graph-up navIcon"></i>
                    <span className="navText">Prices</span>
                </Link>
                <Link to="/events" className="nav">
                    <i className="bi bi-calendar-check-fill navIcon"></i>
                    <span className="navText">Events</span>
                </Link>
                <Link to="/exchanges" className="nav">
                    <i className="bi bi-shield-lock-fill navIcon"></i>
                    <span className="navText">Exchanges</span>
                </Link>
            </div>
            <div className="col-10 dashboard">
                <button onClick={incrementMyCount}>{myCount}</button>
                <br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L
            </div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		myCount: state.count,
	};
};

const mapDispatchToProps = {
	incrementMyCount: incrementCountAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
