import { useRef } from "react";
import { Link } from "react-router-dom";
import Nav from './Nav';
import ExchangesList from './ExchangesList';

const Exchanges = () => {
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
                <ExchangesList />
            </div>
        </div>
    );
}

export default Exchanges;