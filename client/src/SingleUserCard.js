import { Link } from "react-router-dom";
import SingleUserProfile from "./SingleUserProfile";


function SingleUserCard( {user} ) {
    // console.log(post)
    // console.log(restaurant)

    // function handleRedirectClick () {
    //     history.push(`/restaurants/:${restaurant.id}`)
    //     // `test ${restaurant.restaurant_name}`
    // }

    // const history = useHistory()

  return (
    <div >
        <h1>{user.username}</h1>

        <Link to={`/users/${user.id}`}>View more</Link>
        
        {/* <h1>{restaurant.restaurant_name}</h1>
        <h3>Rating: {restaurant.total_rating}</h3>
        <p>{restaurant.location}</p>
        <Link to={`/restaurants/${restaurant.id}`}>View more</Link> */}
    </div>
);
}

export default SingleUserCard;