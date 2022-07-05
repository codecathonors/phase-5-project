import { useHistory } from "react-router-dom";
import SingleRestaurantProfile from "./SingleRestaurantProfile";
import { Link } from "react-router-dom";
import { useState } from "react";

function SingleRestaurantCard( {restaurant} ) {
  // console.log(restaurant)

  const avg = restaurant.posts.map(post => post.rating).reduce((sum, curr) => sum + Number(curr), 0) / restaurant.posts.length
  // console.log(restaurant.restaurant_name, avg)
  

  return (
    <div className="restaurant-grid-item">
        <h1>{restaurant.restaurant_name}</h1>
        <h3>Average rating: {avg ? avg : "Restaurant hasn't been rated yet"} </h3>
        <p>{restaurant.location}</p>
        <Link to={`/restaurants/${restaurant.id}`}>View more</Link>
    </div>
);
}

export default SingleRestaurantCard;