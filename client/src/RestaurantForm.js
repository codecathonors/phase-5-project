import { useState, useEffect } from "react";

function RestaurantForm({ handleNewRestaurantForm }) {
    const [addRestaurantName, setAddRestaurantName] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")
    // const [rating, setRating] = useState(0)

  
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('/restaurants', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                restaurant_name: addRestaurantName,
                category: category,
                image: image,
                location: location
                // rating: rating
            })
        })
            .then(r => r.json())
            .then(data => handleNewRestaurantForm(data))

        setAddRestaurantName("")
        setCategory("")
        setImage("")
        setLocation("")
        // setRating(0)
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="form-container">
                <h4 className="form-header">Add a Restaurant</h4>
                <label>Restaurant Name:
                    <input type="text" onChange={e => setAddRestaurantName(e.target.value)} value={addRestaurantName}></input>
                </label>
                <label>Category:
                    <input type="text" onChange={e => setCategory(e.target.value)} value={category}></input>
                </label>
                <label>Image:
                    <input type="text" onChange={e => setImage(e.target.value)} value={image}>
                    </input>
                </label>
                <label>Location:
                    <input type="text" onChange={e => setLocation(e.target.value)} value={location}>
                    </input>
                </label>
                {/* <label>Rating
                    <input onChange={e => setRating(e.target.value)}></input>
                </label> */}
                <button>Add Restaurant!</button>
            </form>
        </div>
    )
}


export default RestaurantForm;