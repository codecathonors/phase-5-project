import { useState, useEffect } from "react";
// import { Alert } from 'react-bootstrap';

function PostForm({ handleNewPostForm, restaurants }) {
    const [restaurantName, setRestaurantName] = useState("")
    const [restId, setRestId] = useState("")
    const [rating, setRating] = useState(0)
    const [image, setImage] = useState("")
    const [review, setReview] = useState("")
    const [postFormError, setPostFormError] = useState("");
    // console.log(restaurants)

    function handleRestaurantSearch(e) {
        setRestaurantName(e.target.value)
        // setRestId(e.target)
        // console.log(e.target.value)
    }

    const locatedRestaurant = restaurants.find((restaurant) => restaurant.restaurant_name == restaurantName)
    // console.log(locatedRestaurant)
    
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/posts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                //dont have user_id added, not sure how to do that
                restaurant_id: locatedRestaurant.id,
                rating: rating,
                image: image,
                review: review
            })
        })
        .then(res => {
            console.log(res)
            if (res.ok) {
              res.json().then((json) => {
                console.log(json.errors);
                setPostFormError(json.errors);
                // window.location.reload(true);
              })
            } //above is doing what else should be doing
            else {
              res.json().then((json) => {
                console.log(json);
                //maybe handleNewRestaurantForm
                // setRestaurantPostError(json.errors);
              })
            }
          })

        setRestaurantName(restaurantName)
        setRating(rating)
        setImage(image)
        setReview(review)
    }

 
    return (
        <div>
            <form onSubmit={handleSubmit} className="form-container">
                <h4 className="form-header">Create a Post</h4>
                <label>Restaurant Name:
                    <select value={restaurantName} onChange={handleRestaurantSearch} >
                        {restaurants.map(restaurant => <option value={restaurant.restaurant_name} key={restaurant.id}>{restaurant.restaurant_name}</option>)}
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
                <button>Post it!</button>
                {postFormError && <div className="error">{postFormError.join(", ")}</div>}
            </form>
        </div>
    )
}


export default PostForm;