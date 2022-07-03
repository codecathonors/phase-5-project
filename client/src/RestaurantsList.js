import SingleRestaurantCard from "./SingleRestaurantCard";
import Search from "./Search";

function RestaurantsList( { sortMethod, handleSortByTotalRating, handleSortAlphabeticalByRestName, filteredRestaurants, handleSearch, search, restaurants }) {
    // console.log(restaurants)

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
  

  return (
    <>
      <h1>Restaurant Page</h1>
      <Search handleSearch={handleSearch} search={search}/>
      <div className="sortbtns">
        <button className="sort" onClick={handleSortAlphabeticalByRestName}>Sort A-Z by Restaurant Name</button>
        <button className="sort" onClick={handleSortByTotalRating}>Sort by Rating</button>
      </div>
      <div className="restaurant-grid-container">
          {filteredRestaurants.map(restaurant => <SingleRestaurantCard restaurant={restaurant} />)}
      </div>
      
    </>
);
}

export default RestaurantsList;