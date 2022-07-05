import { useState } from "react";
import SingleRestaurantCard from "./SingleRestaurantCard";
import Search from "./Search";
import RestaurantForm from "./RestaurantForm";

function RestaurantsList( { handleNewRestaurantForm, sortMethod, handleSortByTotalRating, handleSortAlphabeticalByRestName, filteredRestaurants, handleSearch, search, restaurants }) {
    // console.log(restaurants)
    const [isRestaurantFormVisible, setIsRestaurantFormVisible] = useState(false)

    const sortedRestaurants = filteredRestaurants.sort((a, b) => {
      if (sortMethod === "alphabetical") {
          return a.restaurant_name.localeCompare(b.restaurant_name);
      } else if (sortMethod === "rating") {
          return b.total_rating - a.total_rating;
      }
   })
      .map((restaurant) => (
          <SingleRestaurantCard 
              key={restaurant.id}
              restaurant={restaurant} />))
        
  
    const handleRestToggle = () => {
      setIsRestaurantFormVisible(isRestaurantFormVisible => !isRestaurantFormVisible)
    }

  return (
    <>
      <h1 className="top-of-page-title">Restaurant Page</h1>
      <Search handleSearch={handleSearch} search={search}/>
      <button onClick={handleRestToggle}>{isRestaurantFormVisible ? "collapse" : "add a restaurant!"}</button>
      {isRestaurantFormVisible ? <RestaurantForm handleNewRestaurantForm={handleNewRestaurantForm}/> : <></>}
      <div className="sortbtns">
        <button className="sort" onClick={handleSortAlphabeticalByRestName}>Sort A-Z by Restaurant Name</button>
        <button className="sort" onClick={handleSortByTotalRating}>Sort by Rating</button>
      </div>
      <div className="restaurant-grid-container">
          {/* {filteredRestaurants.map(restaurant => <SingleRestaurantCard key={restaurant.id} restaurant={restaurant} />)} */}
          {sortedRestaurants.map((restaurant) => {
            return <div style={{display: "flex", justifyContent: "center"}}>{restaurant}</div>
          })}
      </div>
      
    </>
);
}

export default RestaurantsList;