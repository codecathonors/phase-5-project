// import { useHistory } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";

function SingleRestaurantProfile( { restaurants }) {
    const { id } = useParams();
// console.log(restaurants)

const restaurantProfile = restaurants.filter(restaurant => restaurant.id == id)
// console.log(restaurantProfile[0].id)
  return (
    <div>
        <h1>RESTAURANT PROFILE</h1>
            <h1>{restaurantProfile[0].restaurant_name}</h1>
            <img src={restaurantProfile[0].image}/>
            <h3>{restaurantProfile[0].location}</h3>
            <h5>{restaurantProfile[0].category}</h5>
            <p>{restaurantProfile[0].total_rating}</p>
    </div>
);
}

export default SingleRestaurantProfile;