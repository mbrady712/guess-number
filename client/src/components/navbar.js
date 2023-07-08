import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

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
                    </div>
                </div>
                <div id="normnav">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                </div>
            </nav>
        </div>
    );
}
