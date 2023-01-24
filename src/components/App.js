import { useRef } from "react";
import GoogleBtn from "./GoogleBtn";
import { Link } from "react-router-dom";
import Dashboard from './Dashboard';
import Nav from './Nav';

const App = () => {
	const nav = useRef(null);

	function showNav() {
		nav.current.style.left = "0";
	}
	function hideNav() {
		nav.current.style.left = "-60%";
    }
	
	return (
		<div>
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
				<Link to="/" className="nav">
					<button className="navButton">
						<i className="bi bi-speedometer navIcon"></i>
						<span className="navText">Dashboard</span>
					</button>
				</Link>
                <hr className="navLine" />
				<Link to="/prices" className="nav">
					<button className="navButton">
						<i className="bi bi-graph-up navIcon"></i>
						<span className="navText">Prices</span>
					</button>
				</Link>
				<Link to="/positive" className="nav">
					<button className="navButton">
						<i className="bi bi-arrow-up-right-circle navIcon"></i>
						<span className="navText">Positive</span>
					</button>
				</Link>
				<Link to="/negative" className="nav">
					<button className="navButton">
						<i className="bi bi-arrow-down-left-circle navIcon"></i>
						<span className="navText">Negative</span>
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

export default App;
