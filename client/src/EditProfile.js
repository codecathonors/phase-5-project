import React, { useState } from 'react';


function EditProfile ( { user }) {
    const [username, setUsername] = useState(user.username);
    const [profilePicture, setProfilePicture] = useState(user.profile_picture);
    const [profileBio, setProfileBio] = useState(user.profile_bio)


    const handleProfileEdit = (e) => {
        e.preventDefault()
       const updatedProfile = {
            username: username,
            profile_picture: profilePicture,
            profile_bio: profileBio
        }

        fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProfile),
        })
            .then(res => res.json())
            .then(updatedProfile => console.log(updatedProfile)
                // setEditProfile(updatedProfile);
                // onUpdatedProfile(updatedProfile);})
            )

        
        
        // setUsername(user.username);
        // setProfilePicture(user.profile_picture);
        // setProfileBio(user.profile_bio);
    }

    return (
        <div>
            <form onSubmit={handleProfileEdit}>
                <label>Username: </label><input type="text" onChange={e => setUsername(e.target.value)} value={username}></input>
                <label>Profile Picture: </label><input type="text" onChange={e => setProfilePicture(e.target.value)} value={profilePicture}></input>
                <label>Profile Bio: </label><input type="text" onChange={e => setProfileBio} value={profileBio}></input>
                <button type="completededit">Completed Profile Edit</button>
            </form>
        </div>
    )
}


export default EditProfile;