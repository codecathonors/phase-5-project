import { useState, useEffect } from "react";
import SingleRestaurantCard from "./SingleRestaurantCard";
import Search from "./Search";
import RestaurantForm from "./RestaurantForm";

function RestaurantsList( { restaurants, filteredRestaurants, sortMethod, handleSortAlphabeticalByRestName, search, handleSearch, handleNewRestaurantForm }) {
    // console.log(filteredRestaurants)
    // const [restaurants, setRestaurants] = useState([]);
    // const [search, setSearch] = useState("");
    const [isRestaurantFormVisible, setIsRestaurantFormVisible] = useState(false)
    
    const sortedRestaurants = filteredRestaurants.sort((a, b) => {
      if (sortMethod === "alphabetical") {
          return a.restaurant_name.localeCompare(b.restaurant_name);
      } 
    }).map((restaurant) => (
      <SingleRestaurantCard 
        key={restaurant.id}
        restaurant={restaurant} />
    ))
        
    const handleRestToggle = () => {
      setIsRestaurantFormVisible(isRestaurantFormVisible => !isRestaurantFormVisible)
    }

    
   
  
    // const handleFunction = () => {
    //   console.log("clicked")
    //   handleSortAlphabeticalByRestName()
    //   window.location.reload(true);
    //   console.log(sortMethod)
    // }
    
  
  



  return (
    <>
      <h1 className="top-of-page-title">Check out these Restaurants!</h1>
      <Search handleSearch={handleSearch} search={search}/>
      <button className="on-post-page-normal" onClick={handleRestToggle}>{isRestaurantFormVisible ? "collapse" : "add a restaurant!"}</button>
      {isRestaurantFormVisible ? <RestaurantForm handleNewRestaurantForm={handleNewRestaurantForm}/> : <></>}
      <div className="sortbtns">
        <button className="on-post-page-normal" onClick={handleSortAlphabeticalByRestName}>Sort A-Z by Restaurant Name</button>
      </div>
      <div className="restaurant-grid-container">
          {sortedRestaurants.map((restaurant) => {
            return <div style={{display: "flex", justifyContent: "center"}}>{restaurant}</div>
          })}
      </div>
     
    </>
  );
}

export default RestaurantsList;


    // const sortedRestaurants = filteredRestaurants.sort((a, b) => {
    //   if (sortMethod === "alphabetical") {
    //       return a.restaurant_name.localeCompare(b.restaurant_name);
    //   } 
    // }).map((restaurant) => (
    //   <SingleRestaurantCard 
    //     key={restaurant.id}
    //     restaurant={restaurant} />
    // ))

    // const sortedRestaurantsRating = avg_rating.sort((a,b) => {
    //   if (sortMethod === "rating") {
    //     return b - a;
    //   }
    // }).map((restaurant) => (
    //   <SingleRestaurantCard 
    //     key={restaurant.id}
    //     restaurant={restaurant} />
    // ))

    // const handleFilter = () => 
    //   {if (sortMethod === "alphabetical")
    //     return filteredRestaurants.sort((a,b) => {
    //       return a.restaurant_name.localeCompare(b.restaurant_name)
    //     }) 
    //   else if (sortMethod === "rating")
    //     return avg_rating.sort((a,b) => {
    //       return b - a
    //     })
    //     // .map((restaurant) => (
    //       //   <SingleRestaurantCard 
    //       //     key={restaurant.id}
    //       //     restaurant={restaurant} />
    // }