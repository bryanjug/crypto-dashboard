import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="padding-0 navCol">
            <div className="navContainerCol position-fixed">
                <div className="nav">
                    <button className="navButton logo">
                        <i className="bi bi-currency-bitcoin navIcon logoIcon"></i>
                        <span className="navText logoText">Crypto</span>
                    </button>
                </div>
                <Link to="/" className="nav dashboardTitle">
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
        </div>
    );
}

export default Nav;