import React, { useState } from 'react';


function EditProfile ( { user, onUpdatedProfile }) {
    const [username, setUsername] = useState(user.username);
    const [profilePicture, setProfilePicture] = useState(user.profile_picture);
    const [profileBio, setProfileBio] = useState(user.profile_bio)
    // const [editProfile, setEditProfile] = useState("");

    console.log(user)

    const handleProfileEdit = (e) => {
        e.preventDefault()
        // const updatedProfile = {
        //     username: username,
        //     // password: user.password,
        //     profile_picture: profilePicture,
        //     profile_bio: profileBio
        // }

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
            .then(res => res.json())
            .then(updatedProfile => onUpdatedProfile(updatedProfile))

            window.location.reload(true);

            setUsername(user.username);
            setProfilePicture(user.profile_picture);
            setProfileBio(user.profile_bio);
            }

        
        
       
    
        
    // function refreshPage() {
    //     window.location.reload(false);
    // }

    return (
        <div>
            <form onSubmit={handleProfileEdit}>
                <label>Username: </label><input type="text" onChange={e => setUsername(e.target.value)} value={username}></input>
                <label>Profile Bio: </label><input type="text" onChange={e => setProfileBio(e.target.value)} value={profileBio}></input>
                <label>Profile Picture: </label><input type="text" onChange={e => setProfilePicture(e.target.value)} value={profilePicture}></input>
                <button type="completededit">Completed Profile Edit</button>
            </form>
        </div>
    )
}


export default EditProfile;