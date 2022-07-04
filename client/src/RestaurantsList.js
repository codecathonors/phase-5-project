import { useState } from "react";
import SingleRestaurantCard from "./SingleRestaurantCard";
import Search from "./Search";
import RestaurantForm from "./RestaurantForm";

function RestaurantsList( { handleNewRestaurantForm, sortMethod, handleSortByTotalRating, handleSortAlphabeticalByRestName, filteredRestaurants, handleSearch, search, restaurants }) {
    // console.log(restaurants)
    const [isRestaurantFormVisible, setIsRestaurantFormVisible] = useState(false)

    const sortedRestaurants = filteredRestaurants.sort((a, b) => {
      if (sortMethod === "alphabetical") {
          return a.restaurant.localeCompare(b.restaurant);
      } else if (sortMethod === "rating") {
          return b.rating - a.rating;
      }
   })
      .map((restaurant) => (
          <SingleRestaurantCard 
              key={restaurant.id}
              restaurant={restaurant} />))
              // title={albumEntry.title}
              // artist={albumEntry.artist}
              // dateAdded={albumEntry.dateAdded}
              // image={albumEntry.image}
              // rating={albumEntry.rating}
              // comments={albumEntry.comments}
              // filteredDeletedAlbum={filteredDeletedAlbum}
              // handleNewCommentInEntries={handleNewCommentInEntries}
              // albumEntry={albumEntry}
              // onUpdatedAlbum={onUpdatedAlbum}
              // />
  
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
          {filteredRestaurants.map(restaurant => <SingleRestaurantCard key={restaurant.id} restaurant={restaurant} />)}
      </div>
      
    </>
);
}

export default RestaurantsList;