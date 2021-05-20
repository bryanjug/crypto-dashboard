import React, { useRef, useEffect } from "react";
import "./App.css";
import CoinGeko from "coingecko-api";
import GoogleBtn from "./GoogleBtn";
import { connect } from "react-redux";
import {
	incrementCountAction,
	loadingAction,
    loadingStyleAction,
} from "./actions";
import { Link } from "react-router-dom";

//(DONE) SET UP REDUX AND REDUX THUNK
//(DONE) BUILD GOOGLE LOGIN BUTTON
//(DONE) BUILD NAV BAR AND CLOSING / OPENING
//(DONE) STYLE GOOGLE LOGIN BUTTON
//(DONE) CREATE LOADER STATE
//(DONE) SHOW USER'S NAME ONCE LOGGED
//(DONE) REMOVE EXTRA REDUCERS AND PASS IN VARIABLES
//(DONE) CREATE RESPONSIVE LEFT NAV
//() CHANGE STATES IN GOOGLEBTN TO REDUX
//() SPLIT REDUCERS / STORES AND ACTIONS
//() LOGIN FOR FAVORITES PRICE WATCHING
//() TOP HIGHS AND LOWS FROM PAST 24 HOURS / PAST HOUR / PAST WEEK / PAST YEAR
//() EXCHANGE RATES (PRICES OF EACH CURRENT AND COIN)
//() TRENDING COINS
//() EXCHANGES LIST
//() COINS LIST
//() SEARCH BAR FOR PRICE
//() NEWS

const App = ({
	incrementMyCount,
	myCount,
	loadingAction,
	isLoading,
	loadingStyleAction,
    loadingStyle,
}) => {
	const nav = useRef(null);

	useEffect(() => {
		nav.current.style.left = "-60%";
		{
			loadingAction(false);
		}
	}, []);

	useEffect(() => {
		if (isLoading === false) {
			const style = "loadingContainer displayNone";
			loadingStyleAction(style);
		}
	}, [isLoading]);

	function showNav() {
		nav.current.style.left = "0";
	}
	function hideNav() {
		nav.current.style.left = "-60%";
    }

	return (
		<div>
			<div className={loadingStyle}>
				<div className="text-center loading">
					<div className="spinner-border text-primary" role="status"></div>
					<br />
					<span className="loadingText">Loading...</span>
				</div>
			</div>
			<div className="openNavButton" onClick={showNav}>
				<i className="bi bi-list" onClick={showNav}></i>
			</div>
			<div className="navContainer" ref={nav}>
				<div className="nav">
					<button className="navButton logo">
						<div className="closeNavButton" onClick={hideNav}>
							<i className="bi bi-x-lg"></i>
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
                <div className="col-md-3 col-lg-2 col-xl-2 padding-0 navCol">
                    <div className="navContainerCol">
                        <div className="nav">
                            <button className="navButton logo">
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
                </div>
				<div className="col-12 col-md-9 col-lg-10 col-xl-10.5 dashboard">
                    <button onClick={incrementMyCount}>{myCount}</button>
                    <div className="text-light">TEST</div>
                    <br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L<br/>L
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		myCount: state.count,
		isLoading: state.isLoading,
        loadingStyle: state.loadingStyle,
	};
};

const mapDispatchToProps = {
	incrementMyCount: incrementCountAction,
	loadingAction: loadingAction,
    loadingStyleAction: loadingStyleAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
