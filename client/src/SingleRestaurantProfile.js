import React from "react";
import { useParams } from "react-router-dom";

function SingleRestaurantProfile( { restaurants }) {
  const { id } = useParams();

  const restaurantProfile = restaurants.filter(restaurant => restaurant.id == id)
  
  //averages specific restaurant's post ratings
  const avg_rating = restaurantProfile[0].posts.map(post => post.rating).reduce((sum, curr) => sum + Number(curr), 0) / restaurantProfile[0].posts.length

  const postArray = restaurantProfile[0].posts.map(post => <p>{post.user_rating} User Rating: <b>{post.rating} </b></p>)

  return (
    <div className="single-rest-profile">
        <h1 className="top-of-page-title">RESTAURANT PROFILE</h1>
        <h1 className="restaurant-profile-name">{restaurantProfile[0].restaurant_name}</h1>
        <img src={restaurantProfile[0].image} alt="restaurant profile"/>
        <h3 className="restaurant-profile-location">{restaurantProfile[0].location}</h3>
        <h2>{restaurantProfile[0].restaurant_name}'s rated a {avg_rating}!</h2>
        <div>
          <h5 className="restaurant-profile-category">Type of Food: {restaurantProfile[0].category}</h5>
          <p className="restaurant-profile-user-ratings"><b>User Ratings: </b>{postArray}</p> 
        </div>      
    </div>
  );
}

export default SingleRestaurantProfile;