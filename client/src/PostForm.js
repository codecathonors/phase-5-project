import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import { Alert } from 'react-bootstrap';

function PostForm({ handleNewPostForm, restaurants, nowUser, users }) {
    const [restaurantName, setRestaurantName] = useState("")
    const [restId, setRestId] = useState("")
    const [rating, setRating] = useState(0)
    const [image, setImage] = useState("")
    const [review, setReview] = useState("")
    const [postFormError, setPostFormError] = useState("");

    const history = useHistory()
    // console.log(nowUser)

    function handleRestaurantSearch(e) {
        setRestaurantName(e.target.value)
        // setRestId(e.target)
        // console.log(e.target.value)
    }

    const locatedRestaurant = restaurants.find((restaurant) => restaurant.restaurant_name == restaurantName)
    // console.log(locatedRestaurant)

    const currentUser = users.find((user) => user.username == nowUser.username)
    console.log(nowUser)
    console.log(users)
    
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
                restaurant_id: locatedRestaurant.id, //maybe locatedRestaurant.id?
                rating: rating,
                image: image,
                review: review
            })
        })
        .then(res => {
            console.log(res)
            if (res.status === 201) {
              res.json().then((json) => {
                console.log(json);
                // setPostFormError(json.errors);
                window.location.reload(true);
              })
            } //above is doing what else should be doing
            else if (res.status === 200) {
              res.json().then((json) => {
                console.log(json.errors);
                //maybe handleNewRestaurantForm
                setPostFormError(json.errors);
              })
            }
          })

        setRestaurantName(restaurantName)
        setRating(rating)
        setImage(image)
        setReview(review)
    }

    // console.log(user)
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
                    <input onChange={e => setRating(e.target.value)}></input>
                </label>
                <br></br>
                <label>Image:
                    <input onChange={e => setImage(e.target.value)}></input>
                </label>
                <br></br>
                <label>Review:
                    <input onChange={e => setReview(e.target.value)}></input>
                </label>
                <br></br>
                <button className="normal">Post it!</button>
                {postFormError && <div className="error">{postFormError.join(", ")}</div>}
            </form>
        </div>
    )
}


export default PostForm;