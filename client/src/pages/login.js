export const Login = () => {
    return (
        <div className="auth">
            <form id="login">
                <h2>Login</h2>
                <div>Email:</div>
                <input type="text"/>
                <br/>
                <div>Password:</div>
                <input type="text"/>
                <br/>
                <button type="submit">Login</button>
            </form>
            <form id="register">
                <h2>Register</h2>
                <div>Email:</div>
                <input type="text"/>
                <br/>
                <div>Password:</div>
                <input type="text"/>
                <br/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};