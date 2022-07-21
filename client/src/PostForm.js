import { useState } from "react";
import { useHistory } from "react-router-dom";

function PostForm({ restaurants, nowUser, users, handleNewPostForm }) {
    const [restaurantName, setRestaurantName] = useState("")
    const [rating, setRating] = useState(0)
    const [image, setImage] = useState("")
    const [review, setReview] = useState("")
    const [postFormError, setPostFormError] = useState("");

    const history = useHistory()
  
    //grabs user input and sets to restaurant name
    function handleRestaurantSearch(e) {
        setRestaurantName(e.target.value)
    }
    //finds restaurant based on user inputed name
    const locatedRestaurant = restaurants.find((restaurant) => restaurant.restaurant_name === restaurantName)

    //variable holding current user
    const currentUser = users.find((user) => user.username === nowUser.username)
    
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/posts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                user_id: currentUser.id,
                restaurant_id: locatedRestaurant.id,
                rating: rating,
                image: image,
                review: review
            })
        })
        .then(res => {
            console.log(res.status)
            if (res.status === 201) {
              res.json().then((json) => {
                handleNewPostForm(json);
                window.location.reload(true);
              })
            } 
            else if (res.status === 200) {
              res.json().then((json) => {
                console.log(json.errors);
                setPostFormError(json.errors);
                })
            }
        })

        setRestaurantName(restaurantName)
        setRating(rating)
        setImage(image)
        setReview(review)
    }

    //redirect to add new restaurant if it doesn't exist
    function handleClick(e) {
        e.preventDefault()
        history.push("/restaurants")
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
                <br></br>
                <button onClick={handleClick} className="normal">Don't see your restaurant? Add it here!</button>
                <br></br>
                <label>Rating:
                    <input onChange={e => setRating(e.target.value)} placeholder="Rating from 0 - 5"></input>
                </label>
                <br></br>
                <label>Image:
                    <input onChange={e => setImage(e.target.value)} placeholder="Not required"></input>
                </label>
                <br></br>
                <label>Review:
                    <input onChange={e => setReview(e.target.value)} placeholder="What did you think?" style={{ width: "350px", height: "auto" }}></input>
                </label>
                <br></br>
                <button className="normal">Post it!</button>
                {postFormError && <div className="error">{postFormError.join(", ")}</div>}
            </form>
        </div>
    )
}


export default PostForm;