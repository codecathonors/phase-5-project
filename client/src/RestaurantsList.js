import { useState } from "react";
import SingleRestaurantCard from "./SingleRestaurantCard";
import Search from "./Search";
import RestaurantForm from "./RestaurantForm";

function RestaurantsList( { filteredRestaurants, sortMethod, handleSortAlphabeticalByRestName, search, handleSearch, handleNewRestaurantForm }) {
  const [isRestaurantFormVisible, setIsRestaurantFormVisible] = useState(false)

  //sort restaurant alphabetically
  const sortedRestaurants = filteredRestaurants.sort((a, b) => {
    if (sortMethod === "alphabetical") {
      return a.restaurant_name.localeCompare(b.restaurant_name);
    } 
  }).map((restaurant) => (
    <SingleRestaurantCard 
      key={restaurant.id}
      restaurant={restaurant} />
  ))
        
  //toggle for adding new restaurant
  const handleRestToggle = () => {
    setIsRestaurantFormVisible(isRestaurantFormVisible => !isRestaurantFormVisible)
  }

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