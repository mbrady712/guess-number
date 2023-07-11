import React, { useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

export const Auth = () => {
    return (
        <div className="auth">
            <Login />
            <Register />
        </div>
    );
};

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [ , setCookies] = useCookies(["access_token"]);

    const navigate = useNavigate();

    const loginSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/auth/login", {
                username,
                password
            });
            
            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            navigate("/");
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <LoginForm   
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            onSubmit={loginSubmit}
        />
    );
}

const LoginForm = ({
    username, 
    setUsername, 
    password, 
    setPassword, 
    onSubmit
}) => {
    return (
        <form id="login" onSubmit={onSubmit}>
            <h2>Login</h2>
            <br/>
            <div>Username:</div>
            <input 
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            />
            <br/>
            <div>Password:</div>
            <input type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />
            <br/>
            <button type="submit">Login</button>
        </form>
    );
}

const Register = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const registerSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/auth/register", {
                email,
                username,
                password
            });
            alert("Registration Completed! Now Login.")
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <RegisterForm   
            email={email}
            setEmail={setEmail}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            onSubmit={registerSubmit}
        />
    );
}

const RegisterForm = ({
    email,
    setEmail,
    username, 
    setUsername, 
    password, 
    setPassword, 
    onSubmit
}) => {
    return (
        <form id="register" onSubmit={onSubmit}>
            <h2>Register</h2>
            <div>Email:</div>
            <input 
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
            <br/>
            <div>Username:</div>
            <input 
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            />
            <br/>
            <div>Password:</div>
            <input type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />
            <br/>
            <button type="submit">Register</button>
        </form>
    );
}