import { useRef, useEffect } from "react";
import "./App.css";
import GoogleBtn from "./GoogleBtn";
import { connect } from "react-redux";
import {
	loadingAction,
    loadingStyleAction,
} from "../redux/actions";
import { Link } from "react-router-dom";
import Dashboard from './Dashboard';
import Loader from './Loader';
import Nav from './Nav';

const App = ({
	loadingAction,
	isLoading,
	loadingStyleAction,
}) => {
	const nav = useRef(null);

	useEffect(() => {
		loadingAction(false);
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
			<Loader />
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
                <Nav />
				<Dashboard />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isLoading: state.isLoading,
	};
};

const mapDispatchToProps = {
	loadingAction: loadingAction,
    loadingStyleAction: loadingStyleAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
