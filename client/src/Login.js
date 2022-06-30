import { useState } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  return (
    <div className='login'>
    <form>
        <label htmlFor="username" className="username-2">Username:  </label>
        <input
            // type="text"
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
        />
        <label className="password-2">Password:  </label>
        <input
            // type="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <button type="login-button">Click Here to Signup</button>
    </form>
    {/* {error ? <div>{error}</div> : null} */}
</div>
);
}

export default Login;