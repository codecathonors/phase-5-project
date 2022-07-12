// import { useHistory } from "react-router-dom";
import React, { useState } from 'react';
import EditProfile from './EditProfile';

function Profile( { user, onUpdatedProfile }) {
    // const [isDisplayed, setIsDisplayed] = useState(false)
    const [isEditButtonVisible, setIsEditButtonVisible] = useState(false)
    // const [username, setUsername] = useState(user.username);
    // const [profile_bio, setProfileBio] = useState(user.profile_bio);
    // const [profile_picture, setProfilePicture] = useState(user.profile_picture);
    
    // console.log(users)

    
    // console.log(user)
    // console.log(<img src={userProfile[0].profile_picture} />)

    function handleClick () {
      // <EditProfile user={userProfile[0]}/>
      setIsEditButtonVisible(isEditButtonVisible => !isEditButtonVisible)
    }

  //   const handleChange = (e) => {
  //     e.preventDefault()
  //    const updatedProfile = {
  //         username: username,
  // password: user.password,
  //         profile_bio: profile_bio,
  //         profile_picture: profile_picture
  //     }
//fetch users/id
  //     fetch('/me', {
  //         method: 'PATCH',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(updatedProfile),
  //     })
  //         .then(res => res.json())
  //         .then(updatedProfile => setEditProfile(updatedProfile))


  //     onUpdatedProfile(updatedProfile)
      
  //     setUsername("");
  //     setProfilePicture("");
  //     setProfileBio("");
  // }


    

  return (
    <>
    <div className="single-rest-profile">
        {/* <h1>User PROFILE</h1> */}
        <h1 className="top-of-page-title-users">{user.username}'s profile</h1>
        <img className="profile-image" src={user.profile_picture}/>
        <p className="users-profile-bio">{user.profile_bio ? user.profile_bio: "this user doesn't have a bio set up"}</p>
        <button onClick={handleClick}>{isEditButtonVisible ? "Nvm" : "Edit Profile"}</button>
        {isEditButtonVisible ? <EditProfile user={user} onUpdatedProfile={(updatedProfile) => {setIsEditButtonVisible(false); return onUpdatedProfile(updatedProfile);}} /> : <></>}

        {/* {isEditButtonVisible ? <EditProfile user={userProfile[0]} onUpdatedProfile={(updatedProfile) => {setIsEditButtonVisible(false); return onUpdatedProfile(updatedProfile);}} /> : <></>} */}
        <p className="users-profile-short-review">Previous reviews: {user.posts ? user.posts.map(post => post.short_review) : "User hasn't made any posts yet"}</p>
    </div>
 </>
);
}

export default Profile;