import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "")
        window.localStorage.removeItem("userID");
        navigate("/auth")
    }

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
                        {!cookies.access_token ? 
                            (<Link to="/auth">Login/Register</Link>
                        ) : (
                            <button onClick={logout}> Logout </button>
                        )}
                        <Link to="/leaderboard">Leaderboard</Link>
                        <Link to="/stats">Your Stats</Link>
                    </div>
                </div>
                <div id="normnav">
                    <Link to="/">Home</Link>
                    {!cookies.access_token ? 
                        (<Link to="/auth">Login/Register</Link>
                    ) : (
                        <button onClick={logout}> Logout </button>
                    )}
                    <Link to="/leaderboard">Leaderboard</Link>
                    <Link to="/stats">Your Stats</Link>
                </div>
            </nav>
        </div>
    );
}
