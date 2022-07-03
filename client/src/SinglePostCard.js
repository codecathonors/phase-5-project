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
        <h1>{post.user.username}</h1>
        {/* <img className="grid-item-image" src={post.user.profile_picture}/> */}
        <h2>{post.restaurant.restaurant_name}</h2>
        <h3>{post.restaurant.location}</h3>
        <h4>User rating: {post.rating}</h4>
        <button onClick={handleLike} className={isLikeClicked ? "normal" : "like-clicked"} value={likes}>Likes: {post.likes}</button>
        <button onClick={handleDislike} className={isDislikeClicked ? "normal" : "dislike-clicked"}>Dislikes: {post.dislikes}</button>
        <img src={post.image} style={{width:100}}/>
        <p>{post.short_review}</p>
        <Link to={`/posts/${post.id}`}>View more</Link>
        
    </div>
);
}

export default SinglePostCard;