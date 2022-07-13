import { useState } from "react";

function Login( { setCurrentUser, handleUpdateUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')

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
    if (res.status == 200) {
      res.json().then((json) => {
        console.log(json)
        setCurrentUser(user)
        window.location.replace("/");})
    } else if (res.status == 500 || 401 || 201){
      res.json().then((json) => {
        console.log(json.errors);
        setError(json.errors);})
    }})
    setUsername("")
    setPassword("")
  }

  function handleGoToSignUp(e) {
    e.preventDefault()
    window.location.replace("/signup");
  }

  return (
    <div className='login'>
      <h1 className="login-welcome-back">Welcome back to The Restaurant Finder!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="username-2">username:  </label>
          <input
           type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        <br></br>
        <label className="password-2">password:  </label>
          <input
           type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <br></br>
        {username && password ? <button className="button" type="submit">Login</button> : <button>NOT LOGGED IN</button>}
        <br></br>
        <p className="login-question">Not a Restaurant user?</p>
        <button type="login-button" onClick={handleGoToSignUp} className="login-page-button">Sign Up Here!</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default Login;