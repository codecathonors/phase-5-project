// import { useHistory } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";

function SingleRestaurantProfile( { restaurants }) {
    const { id } = useParams();


const restaurantProfile = restaurants.filter(restaurant => restaurant.id == id)
console.log(restaurantProfile[0])

const avg_rating = restaurantProfile[0].posts.map(post => post.rating).reduce((sum, curr) => sum + Number(curr), 0) / restaurantProfile[0].posts.length

//need to create callback function in restaurantlist that can take in the restaurants average rating
//create function here that references the callback in restaurant list


  return (
    <div>
        <h1>RESTAURANT PROFILE</h1>
            <h1>{restaurantProfile[0].restaurant_name}</h1>
            <img src={restaurantProfile[0].image}/>
            <h3>{restaurantProfile[0].location}</h3>
            <h5>{restaurantProfile[0].category}</h5>
            <p>{avg_rating}</p>
    </div>
);
}

export default SingleRestaurantProfile;