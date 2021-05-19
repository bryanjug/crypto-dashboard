import "./App.css";
import CoinGeko from "coingecko-api";
import GoogleBtn from "./GoogleBtn";
import { connect } from "react-redux";
import { incrementCountAction } from "./actions";
import { Link } from "react-router-dom";

//(DONE) SET UP REDUX AND REDUX THUNK
//(DONE) BUILD GOOGLE LOGIN BUTTON
//() BUILD NAV BAR AND CLOSING / OPENING
//(DONE) STYLE GOOGLE LOGIN BUTTON
//() SHOW USER'S NAME ONCE LOGGED
//() CHANGE CLASSNAME FOR DASHBOARD AND NAV ONCE SCREEN SIZE CHANGES USING STATE
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
        <div>
            <div className="openNavButton">
                <i class="bi bi-list"></i>
            </div>
            <div className="navContainer">
                <div className="nav">
                    <button className="navButton logo">
                        <div className="closeNavButton">
                            <i class="bi bi-x-lg"></i>
                        </div>
                        <i className="bi bi-currency-bitcoin navIcon logoIcon"></i>
                        <span className="navText logoText">Crypto</span>
                    </button>
                </div>
                <GoogleBtn />        
                <hr className="navLine" />
                <Link to="/" className="nav">
                    <button className="navButton">
                        <i className="bi bi-speedometer navIcon"></i>
                        <span className="navText">Dashboard</span>
                    </button>
                </Link>
                <Link to="/prices" className="nav">
                    <button className="navButton">
                        <i className="bi bi-graph-up navIcon"></i>
                        <span className="navText">Prices</span>
                    </button>
                </Link>
                <Link to="/events" className="nav">
                    <button className="navButton">
                        <i className="bi bi-calendar-check-fill navIcon"></i>
                        <span className="navText">Events</span>
                    </button>
                </Link>
                <Link to="/exchanges" className="nav">
                    <button className="navButton">
                        <i className="bi bi-shield-lock-fill navIcon"></i>
                        <span className="navText">Exchanges</span>
                    </button>
                </Link>
            </div>
            <div className="row">
                <div className="col-12 dashboard">
                    <button onClick={incrementMyCount}>{myCount}</button>
                </div>
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
