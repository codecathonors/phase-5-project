import React from "react";
import { Link } from "react-router-dom";

function SingleRestaurantCard( {restaurant} ) {

  const avg = restaurant.posts.map(post => post.rating).reduce((sum, curr) => sum + Number(curr), 0) / restaurant.posts.length
  
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