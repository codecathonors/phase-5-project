import React, { useState } from 'react';

function EditProfile ( { user, onUpdatedProfile }) {
    const [username, setUsername] = useState(user.username);
    const [profilePicture, setProfilePicture] = useState(user.profile_picture);
    const [profileBio, setProfileBio] = useState(user.profile_bio);
    const [profileEditError, setProfileEditError] = useState([]);

    const handleProfileEdit = (e) => {
        e.preventDefault()
    
        fetch(`users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: "password",
                profile_picture: profilePicture,
                profile_bio: profileBio
            }),
        })
        .then(res => {
            if (res.status === 201 || 202) {
                res.json().then((json) => {
                onUpdatedProfile(json)
                // ();
                })
                window.location.replace("/")
            } else if (res.status === 200){
                res.json().then((json) => {
                    console.log(json);
                    setProfileEditError(json.errors);
                })
            }})
        
        setUsername(user.username);
        setProfilePicture(user.profile_picture);
        setProfileBio(user.profile_bio);
    }

    return (
        <div>
            <form onSubmit={handleProfileEdit}>
                <label>Username: </label><input type="text" onChange={e => setUsername(e.target.value)} value={username}></input>
                <label>Profile Bio: </label><input type="text" onChange={e => setProfileBio(e.target.value)} value={profileBio}></input>
                <label>Profile Picture: </label><input type="text" onChange={e => setProfilePicture(e.target.value)} value={profilePicture}></input>
                <button type="completededit">Completed Profile Edit</button>
                {profileEditError && <div className="error">{profileEditError.join(", ")}</div>}
            </form>
        </div>
    )
}


export default EditProfile;