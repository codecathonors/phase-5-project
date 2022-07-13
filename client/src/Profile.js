import React, { useState } from 'react';
import EditProfile from './EditProfile';

function Profile( { user, onUpdatedProfile }) {
  const [isEditButtonVisible, setIsEditButtonVisible] = useState(false);

  function handleClick () {
    setIsEditButtonVisible(isEditButtonVisible => !isEditButtonVisible)
  }

  return (
    <div className="single-rest-profile">
      <h1 className="top-of-page-title-users">{user.username}'s profile</h1>
      <img className="profile-image" src={user.profile_picture} alt="profile"/>
      <p className="users-profile-bio">{user.profile_bio ? user.profile_bio: "this user doesn't have a bio set up"}</p>
      <button onClick={handleClick}>{isEditButtonVisible ? "Nvm" : "Edit Profile"}</button>
      {isEditButtonVisible ? <EditProfile user={user} onUpdatedProfile={(updatedProfile) => {setIsEditButtonVisible(false); return onUpdatedProfile(updatedProfile);}} /> : <></>}
      <p className="users-profile-short-review">Previous reviews: {user.posts ? user.posts.map(post => post.short_review) : "User hasn't made any posts yet"}</p>
    </div>
  );
}

export default Profile;