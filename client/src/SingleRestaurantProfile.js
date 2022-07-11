// import { useHistory } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";

function SingleRestaurantProfile( { restaurants }) {
    const { id } = useParams();


const restaurantProfile = restaurants.filter(restaurant => restaurant.id == id)
console.log(restaurantProfile[0])

const avg_rating = restaurantProfile[0].posts.map(post => post.rating).reduce((sum, curr) => sum + Number(curr), 0) / restaurantProfile[0].posts.length

const postArray = restaurantProfile[0].posts.map(post => <p>{post.user_rating} User Rating: <b>{post.rating} </b></p>)
// console.log(postArray)

//need to create callback function in restaurantlist that can take in the restaurants average rating
//create function here that references the callback in restaurant list


  return (
    <div className="single-rest-profile">
        <h1 className="top-of-page-title">RESTAURANT PROFILE</h1>
            <h1 className="restaurant-profile-name">{restaurantProfile[0].restaurant_name}</h1>
            <img src={restaurantProfile[0].image}/>
            <h3 className="restaurant-profile-location">{restaurantProfile[0].location}</h3>
            <p>{restaurantProfile[0].restaurant_name}'s rated a {avg_rating}!</p>
            <h5 className="restaurant-profile-category">Type of Food: {restaurantProfile[0].category}</h5>
            <p className="restaurant-profile-user-ratings"><b>User Ratings: </b>{postArray}</p>
            
    </div>
);
}

export default SingleRestaurantProfile;