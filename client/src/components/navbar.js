import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <nav class="nav-section">
                <div id="mobnav">
                    <input class="checkbox" type="checkbox"/>
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>  
                    <div class="menu-items">
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
