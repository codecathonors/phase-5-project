import React from 'react';
import { useParams } from "react-router-dom";

function SingleUserProfile( { users }) {
  
  const { id } = useParams();
  
  const userProfile = users.filter(user => user.id == id)
    
  return (
    <div className="profile-div">
      <h1 className="top-of-page-title">{userProfile[0].username}'s profile</h1>
      <img className="single-post-profile-image" src={userProfile[0].profile_picture}/>
      <p className="users-profile-bio">{userProfile[0].profile_bio ? userProfile[0].profile_bio: "this user hasn't made any posts"}</p>
      <p className="users-profile-short-review">Previous reviews: {userProfile[0].posts.map(post => post.short_review)}</p>
    </div>
  );
}

export default SingleUserProfile;