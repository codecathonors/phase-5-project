// import { useHistory } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";

function SingleRestaurantProfile( { restaurants }) {
    const { id } = useParams();
// console.log(restaurants)


  return (
    <div>
        <h1>RESTAURANT PROFILE</h1>
            {restaurants
            .filter((restaurant) => restaurant.id === id)
            .map((restaurant, index) => (
                <div key={index}>
                    <h1>{restaurant.restaurant_name}</h1>
                    <p>{restaurant.rating}</p>
                </div>
            ))}
    </div>
);
}

export default SingleRestaurantProfile;