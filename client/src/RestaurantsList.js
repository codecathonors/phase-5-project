import SingleRestaurantCard from "./SingleRestaurantCard";

function RestaurantsList( { restaurants }) {
    console.log(restaurants)

  return (
    <div className="restaurant-grid-container">
        {restaurants.map(restaurant => <SingleRestaurantCard restaurant={restaurant} />)}
    </div>
);
}

export default RestaurantsList;