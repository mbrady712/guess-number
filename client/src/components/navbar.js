import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </div>
    );
}
