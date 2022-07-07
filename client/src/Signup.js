import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

function Signup( { setUser, handleUpdateUser }) {
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
                  history.push("/")
                  handleUpdateUser(user)
                })
              }
              else if (res.status === 200){
                res.json().then((json) => {
                  console.log(json);
                  setError(json.errors);
                })
              }
})}
    


    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [passwordConfirmation, setPasswordConfirmation] = useState("");

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch("/signup", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             username,
    //             password,
    //             password_confirmation: passwordConfirmation,
    //         }),
    //     })
    //         .then(res => {
    //             if (res) {
    //                 res.json()
    //                     .then(history.push("/"))
    //                     .then(user => {
    //                         handleUpdateUser(user)
    //                         setIsAuthenticated(true)
    //                     })

    //             } else {
    //                 res.json()
    //                     .then(json => setError(json.error))
    //             }
    //         })
    // }

    // const history = useHistory()

    const handleBack = () => {
        history.push('/login')
    }

  return (
        <div className='signup'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="username-1">Username:  </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <br></br>
                <label htmlFor="password" className="password-1">Password:  </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <br></br>
                <label htmlFor="password_confirmation" className='confirm-pass'>Confirm Password:  </label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={password_confirmation}
                    onChange={e => setPasswordConfirmation(e.target.value)}
                />
                 <label htmlFor="profile_picture">Profile Picture:  </label>
                <input
                    type="text"
                    id="profile_picture"
                    value={profile_picture}
                    onChange={e => setProfilePicture(e.target.value)}
                />
                    <label htmlFor="profile_bio">Profile Bio:  </label>
                <input
                    type="text"
                    id="profile_bio"
                    value={profile_bio}
                    onChange={e => setProfileBio(e.target.value)}
                />
                <button type="submit"> Submit </button>
                <br></br>
                <button onClick={handleBack} className="login-page-button"> Back to Login </button>
                {error && <div className="error">{error.join(", ")}</div>}
            </form>
        </div>
    );
}

export default Signup;