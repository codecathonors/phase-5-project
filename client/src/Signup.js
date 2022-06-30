import { useState } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

  return (
        <div className='signup'>
            <form>
                <label htmlFor="username" className="username-1">Username:  </label>
                <input
                    // type="text"
                    // id="username"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                />
                <br></br>
                <label htmlFor="password" className="password-1">Password:  </label>
                <input
                    // type="password"
                    // id="password"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>
                <label htmlFor="password_confirmation" className='confirm-pass'>Confirm Password:  </label>
                <input
                    // type="password"
                    // id="password_confirmation"
                    // value={passwordConfirmation}
                    // onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <button type="submit"> Submit </button><br></br>
            </form>
        </div>
    );
}

export default Signup;