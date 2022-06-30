import { Link } from "react-router-dom";
import SinglePostProfile from "./SinglePostProfile";


function SinglePostCard( {post} ) {
    // console.log(post)
    // console.log(restaurant)

    // function handleRedirectClick () {
    //     history.push(`/restaurants/:${restaurant.id}`)
    //     // `test ${restaurant.restaurant_name}`
    // }

    // const history = useHistory()

  return (
    <div >
        <h1>{post.user.username}</h1>
        <img src="../client/assets/IMG_8571.jpg"/>
        <h2>{post.restaurant.restaurant_name}</h2>
        <h3>{post.restaurant.location}</h3>
        <h4>User rating: {post.rating}</h4>
        <button>Likes: {post.likes}</button>
        <button>Dislikes: {post.dislikes}</button>
        <img src={post.image} style={{width:100}}/>
        <p>{post.short_review}</p>
        <Link to={`/posts/${post.id}`}>View more</Link>
        
    </div>
);
}

export default SinglePostCard;