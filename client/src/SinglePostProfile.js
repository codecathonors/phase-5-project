import React from "react";
import { useParams } from "react-router-dom";

function SinglePostProfile( { posts }) {
    
    const { id } = useParams();

    const postProfile = posts.filter(post => post.id == id)


  return (
    <div className="single-rest-profile">
        <h1 className="top-of-page-title">Full review</h1>
        <div className="single-post-profile">
            <h1 className="single-post-profile-username">{postProfile[0].user.username}</h1>
            <h2 className="single-post-profile-rest-name">{postProfile[0].restaurant.restaurant_name}</h2>
            <p className="single-post-profile-review">{postProfile[0].review}</p>
        </div>
    </div>
    );
}

export default SinglePostProfile;