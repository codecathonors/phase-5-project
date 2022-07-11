// import { useHistory } from "react-router-dom";
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import EditProfile from "./EditProfile";

function SingleUserProfile( { users, onUpdatedProfile, currentUser }) {
  // console.log(currentUser)
  
    // const [isDisplayed, setIsDisplayed] = useState(false)
    const { id } = useParams();
    const [isEditButtonVisible, setIsEditButtonVisible] = useState(false)
    // console.log(users)

    const userProfile = users.filter(user => user.id == id)
    console.log(userProfile[0])
    // console.log(<img src={userProfile[0].profile_picture} />)

    // function handleClick () {
    //   // <EditProfile user={userProfile[0]}/>
    //   setIsEditButtonVisible(isEditButtonVisible => !isEditButtonVisible)
    // }



    // function handleProfilePatch() {
    //   if (currentUser.id === userProfile[0].id){
    //     return <button onClick={handleClick}>Edit Profile</button>
    //   } else {
    //     <></>
    //   }
    // }
    

  return (
    <>
    <div className="profile-div">
        {/* <h1>User PROFILE</h1> */}
        <h1 className="top-of-page-title">{userProfile[0].username}'s profile</h1>
        <img src={userProfile[0].profile_picture}/>
        <p className="users-profile-bio">{userProfile[0].profile_bio ? userProfile[0].profile_bio: "this user hasn't made any posts"}</p>
        {/* <button onClick={handleClick}>{isEditButtonVisible ? "Nvm" : "Edit Profile"}</button> */}
        {/* {isEditButtonVisible ? <EditProfile user={currentUser} onUpdatedProfile={(updatedProfile) => {setIsEditButtonVisible(false); return onUpdatedProfile(updatedProfile);}} /> : <></>} */}
        {/* {handleProfilePatch()} */}
        <p className="users-profile-short-review">Previous reviews: {userProfile[0].posts.map(post => post.short_review)}</p>
    </div>
 </>
);
}

export default SingleUserProfile;