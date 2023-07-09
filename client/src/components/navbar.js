import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
        <div className="navbar">
            <nav className="nav-section">
                <div id="mobnav">
                    <input className="checkbox" type="checkbox"/>
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>
                    </div>  
                    <div className="menu-items">
                        <Link to="/">Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/leaderboard">Leaderboard</Link>
                        <Link to="/stats">Your Stats</Link>
                    </div>
                </div>
                <div id="normnav">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/leaderboard">Leaderboard</Link>
                    <Link to="/stats">Your Stats</Link>
                </div>
            </nav>
        </div>
    );
}
