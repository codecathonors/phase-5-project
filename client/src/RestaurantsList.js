import SingleRestaurantCard from "./SingleRestaurantCard";

function RestaurantsList( { restaurants }) {
    console.log(restaurants)

  return (
    <div>
        {restaurants.map(restaurant => <SingleRestaurantCard restaurant={restaurant} />)}
    </div>
);
}

export default RestaurantsList;