import { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup( { setUser, handleUpdateUser, setCurrentUser }) {
    const [error, setError] = useState([])
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPasswordConfirmation] = useState("")
    const [profile_bio, setProfileBio] = useState("")
    const [profile_picture, setProfilePicture] = useState("")

    let history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: password_confirmation,
                profile_picture: profile_picture,
                profile_bio: profile_bio
            })
        })
        .then(res => {
            console.log(res)
            if (res.status === 201) {
                res.json().then((user) => {
                  console.log(user)
                  setCurrentUser(user)
                  window.location.replace("/");
                  
                })
              }
              else if (res.status === 200){
                res.json().then((json) => {
                  console.log(json);
                  setError(json.errors);
                })
              }
})}
    

    const handleBack = () => {
        window.location.replace("/login");
    }

  return (
        <div className='signup'>
            <h1 className="signup-welcome-text">Welcome to The Restaurant Finder!</h1>
            <button onClick={handleBack} className="login-page-button"> Already a user? Log in here </button>
            <h1 className="signup-text">Not Signed Up with The Restaurant Finder? Sign up here!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="username-1">username:  </label>
                <input
                    type="text"
                    id="username"
                    placeholder="enter username here"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <br></br>
                <label htmlFor="password" className="password-1">password:  </label>
                <input
                    type="password"
                    id="password"
                    placeholder="enter password here"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <br></br>
                <label htmlFor="password_confirmation" className='confirm-pass'>confirm password:  </label>
                <input
                    type="password"
                    id="password_confirmation"
                    placeholder="sorry, 1 more time"
                    value={password_confirmation}
                    onChange={e => setPasswordConfirmation(e.target.value)}
                />
                <br></br>
                 <label htmlFor="profile_picture">profile picture:  </label>
                <input
                    type="text"
                    id="profile_picture"
                    placeholder=".jpg format please"
                    value={profile_picture}
                    onChange={e => setProfilePicture(e.target.value)}
                />
                <br></br>
                    <label htmlFor="profile_bio">profile bio:  </label>
                <input
                    type="text"
                    id="profile_bio"
                    value={profile_bio}
                    placeholder="funny profile bio?"
                    onChange={e => setProfileBio(e.target.value)}
                />
                <br></br>
                <button type="submit" className="button"> Create User </button>
                <br></br>
                
                {error && <div className="error">{error.join(", ")}</div>}
            </form>
        </div>
    );
}

export default Signup;