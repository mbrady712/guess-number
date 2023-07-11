import React, { useState } from "react";
import axios from "axios";
export const Auth = () => {
    return (
        <div className="auth">
            <Login />
            <Register />
        </div>
    );
};

const Login = () => {
    return(
        <form id="login">
            <h2>Login</h2>
            <div>Username:</div>
            <input type="text"/>
            <br/>
            <div>Password:</div>
            <input type="text"/>
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