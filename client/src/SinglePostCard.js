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
        <img src={post.user.profile_picture}/>
        <h2>{post.restaurant.restaurant_name}</h2>
        <h3>{post.restaurant.location}</h3>
        <h4>User rating: {post.rating}</h4>
        <button>Likes: {post.likes}</button>
        <button>Dislikes: {post.dislikes}</button>
        <img src={post.image} style={{width:100}}/>
        <p>{post.short_review}</p>
        <Link to={`/posts/${post.id}`}>View more</Link>
        
        {/* <h1>{restaurant.restaurant_name}</h1>
        <h3>Rating: {restaurant.total_rating}</h3>
        <p>{restaurant.location}</p>
        <Link to={`/restaurants/${restaurant.id}`}>View more</Link> */}
    </div>
);
}

export default SinglePostCard;