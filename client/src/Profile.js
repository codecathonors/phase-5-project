// import { useHistory } from "react-router-dom";
import React, { useState } from 'react';

function Profile( { user}) {
    // const [isDisplayed, setIsDisplayed] = useState(false)
    const [isEditButtonVisible, setIsEditButtonVisible] = useState(false)
    // console.log(users)

    
    console.log(user)
    // console.log(<img src={userProfile[0].profile_picture} />)

    function handleClick () {
      // <EditProfile user={userProfile[0]}/>
      setIsEditButtonVisible(isEditButtonVisible => !isEditButtonVisible)
    }

    

  return (
    <>
    <div>
        {/* <h1>User PROFILE</h1> */}
        <h1 className="top-of-page-title-users">{user.username}'s profile</h1>
        <img className="profile-image" src={user.profile_picture}/>
        <p>{user.profile_bio ? user.profile_bio: "this user doesn't have a bio set up"}</p>
        <button onClick={handleClick}>{isEditButtonVisible ? "Nvm" : "Edit Profile"}</button>
        {/* {isEditButtonVisible ? <EditProfile user={userProfile[0]} onUpdatedProfile={(updatedProfile) => {setIsEditButtonVisible(false); return onUpdatedProfile(updatedProfile);}} /> : <></>} */}
        <p>Previous reviews: {user.posts ? user.posts.map(post => post.short_review) : "User hasn't made any posts yet"}</p>
    </div>
 </>
);
}

export default Profile;