import { useState, useEffect } from "react";

function PostForm({ handleNewPostForm, restaurants }) {
    const [restaurantName, setRestaurantName] = useState("")
    // const [restaurantId, setRestaurantId] = useState("")
    const [rating, setRating] = useState(0)
    const [image, setImage] = useState("")
    const [review, setReview] = useState("")

    //not working
    // function newPostFindRestaurant(e) {
    //     restaurants.forEach((restaurant) => {
    //         if (restaurant.restaurant_name === e.target.value)
    //         // setRestaurantName(e.target.value)
    //         setRestaurantId(restaurant.id)
    //         console.log(restaurant.id)
    //     })
    // }
    // console.log(restaurant.id)
    
    // const selectedRestaurantId = 
    //     restaurants.forEach((restaurant) => {
    //         if (restaurant.restaurant_name === restaurantName)
    //         // setRestaurantName(e.target.value)
    //         setRestaurantId(restaurant.id)
    //         console.log(restaurant.id)
    //     })


    //new attempt
    function handleRestaurantSearch(e) {
        setRestaurantName(e.target.value)
        // console.log(e.target.value)
    }

    // function restaurantId(e) {
    //     restaurants.map(restaurant => {
    //     if (restaurantName === e.target.value){
    //         console.log(restaurant.id)
    //     }
    // })}
    

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/posts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                //restaurant_id: id
                rating: rating,
                image: image,
                review: review
            })
        })
            .then(r => r.json())
            .then(data => handleNewPostForm(data))

        setRestaurantName("")
        setRating(0)
        setImage("")
        setReview("")
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="form-container">
                <h4 className="form-header">Create a Post</h4>
                <label>Restaurant Name:
                    <select value={restaurantName} onChange={handleRestaurantSearch}>
                        {restaurants.map(restaurant => <option value={restaurant.restaurant_name}>{restaurant.restaurant_name}</option>)}
                    </select>
                </label>
                <button>Don't see your restaurant? Add it here!</button>
                <label>Rating:
                    <input onChange={e => setRating(e.target.value)}></input>
                </label>
                <label>Image:
                    <input onChange={e => setImage(e.target.value)}>
                    </input>
                </label>
                <label>Review:
                    <input onChange={e => setReview(e.target.value)}>
                    </input>
                </label>
                <button>BURTON</button>
            </form>
        </div>
    )
}


export default PostForm;