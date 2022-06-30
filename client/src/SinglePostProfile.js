// import { useHistory } from "react-router-dom";
// import React from "react";
import { useParams } from "react-router-dom";

function SinglePostProfile( { posts }) {
    const { id } = useParams();
// console.log(posts)

const postProfile = posts.filter(post => post.id == id)
// console.log(postProfile[0])

  return (
    <div>
        <h1>Post PROFILE</h1>
        <h1>{postProfile[0].user.username}</h1>
        <h2>{postProfile[0].restaurant.restaurant_name}</h2>
        <p>{postProfile[0].review}</p>
    </div>
);
}

export default SinglePostProfile;