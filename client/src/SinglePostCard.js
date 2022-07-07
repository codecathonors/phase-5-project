import { Link } from "react-router-dom";
import { useState } from "react";
import SinglePostProfile from "./SinglePostProfile";


function SinglePostCard( {post} ) {
    // console.log(post)
    // console.log(restaurant)
    const [isLikeClicked, setIsLikeClicked] = useState(true)
    const [isDislikeClicked, setIsDislikeClicked] = useState(true)
    const [likes, setLikes] = useState(post.likes)
    const [dislikes, setDislikes] = useState(post.dislikes)

    
    //callback function in handleLike
    function handleLikeClick () {
    setIsLikeClicked(isLikeClicked => !isLikeClicked)}

    //PATCH request to update like state
    function handleLike () {
      handleLikeClick()

      isLikeClicked ? (
        fetch(`/posts/${post.id}`, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(
            {likes: post.likes += 1}
            ),
          })
          .then(r => r.json())
          .then(data => console.log('add like:', data)))
        :
        fetch(`/posts/${post.id}`, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(
            {likes: post.likes -= 1}
            ),
          })
          .then(r => r.json())
          .then(data => console.log('remove like:', data))
    }

    //callback function in handleDislike
    function handleDislikeClick () {
      setIsDislikeClicked(isDislikeClicked => !isDislikeClicked)
    }
    //PATCH request to update dislike state
    function handleDislike () {
      handleDislikeClick()
  
      isDislikeClicked ? (
        fetch(`/posts/${post.id}`, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(
            {dislikes: post.dislikes += 1}
            ),
          })
          .then(r => r.json())
          .then(data => console.log('add dislike:', data)))
        :
        fetch(`/posts/${post.id}`, {
          method: 'PATCH',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(
            {dislikes: post.dislikes -= 1}
            ),
          })
          .then(r => r.json())
          .then(data => console.log('remove dislike:', data))
      }

  return (
    <div className="post-grid-item">
        <h1 className="post-grid-item-username">{post.user.username}</h1>
        {/* <img className="grid-item-image" src={post.user.profile_picture}/> */}
        <h2 className="post-grid-item-restaurant-name">{post.restaurant.restaurant_name}</h2>
        <h3 className="post-grid-item-restaurant-location">{post.restaurant.location}</h3>
        <br></br>
        <h4 className="post-grid-item-user-rating">User rating: {post.rating}</h4>
        <button onClick={handleLike} className={isLikeClicked ? "normal" : "like-clicked"} value={likes}>Likes: {post.likes}</button>
        <button onClick={handleDislike} className={isDislikeClicked ? "normal" : "dislike-clicked"}>Dislikes: {post.dislikes}</button>
        <img className="post-grid-item-image" src={post.image} style={{width:100}}/>
        <p className="post-grid-item-short-review">{post.short_review}</p>
        <Link to={`/posts/${post.id}`}>View more</Link>
        
    </div>
);
}

export default SinglePostCard;