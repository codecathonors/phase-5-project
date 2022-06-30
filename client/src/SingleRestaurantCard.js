import { useHistory } from "react-router-dom";
import SingleRestaurantProfile from "./SingleRestaurantProfile";
import { Link } from "react-router-dom";

function SingleRestaurantCard( {restaurant} ) {
    // console.log(restaurant)

    // function handleRedirectClick () {
    //     history.push(`/restaurants/:${restaurant.id}`)
    //     // `test ${restaurant.restaurant_name}`
    // }

    // const history = useHistory()

  return (
    <div >
        <h1>{restaurant.restaurant_name}</h1>
        <h3>Rating: {restaurant.total_rating}</h3>
        <p>{restaurant.location}</p>
        <Link to={`/restaurants/${restaurant.id}`}>View more</Link>
    </div>
);
}

export default SingleRestaurantCard;