// import { useHistory } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";

function SingleUserProfile( { users }) {
    const { id } = useParams();
    // console.log(users)

    const userProfile = users.filter(user => user.id == id)
    // console.log(userProfile[0].posts.map(post => post.short_review))
    console.log(<img src={userProfile[0].profile_picture} />)

    // const recentReview = () => {
    // if (!userProfile[0].posts.short_review) {
    //     return "This user hasn't made any posts"
    // } else (userProfile[0].posts.short_review)
    // }

  return (
    <div>
        <h1>User PROFILE</h1>
        <h1>{userProfile[0].username}</h1>
        <img src={userProfile[0].profile_picture}/>
        <p>{userProfile[0].profile_bio}</p>
        <p>Previous reviews: {userProfile[0].posts.map(post => post.short_review)}</p>
    </div>
);
}

export default SingleUserProfile;