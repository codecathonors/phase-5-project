import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

function Login( { user, setIsAuthenticated, handleUpdateUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('')

    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            username: username,
            password
        }

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then(res => {
                console.log(res)
                if (res.status == 201 || 200) {
                    res.json().then((json) => {
                      console.log(json)
                    //   handleUpdateUser(user)
                      //             setIsAuthenticated(true)
                      history.push("/")
                    })
                  }
                  else if (res.status == 500 || 401){
                    res.json().then((json) => {
                      console.log(json.errors);
                      setError(json.errors);
                    })
                  }
            })
        setUsername("")
        setPassword("")
    }

    function handleGoToSignUp(e) {
        e.preventDefault()
        history.push("/signup")
    }

  return (
    <div className='login'>
    <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="username-2">Username:  </label>
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <label className="password-2">Password:  </label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <button type="login-button" onClick={handleGoToSignUp}>Click Here to Signup</button>
        {error && <div className="error">{error}</div>}
    </form>
    
</div>
);
}

export default Login;