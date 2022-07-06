import { useState, useEffect } from "react";

function RestaurantForm({ handleNewRestaurantForm }) {
    const [addRestaurantName, setAddRestaurantName] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")
    const [restaurantPostError, setRestaurantPostError] = useState([]);

  
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
            })
        })
            // .then(r => r.json())
            // .then(data => handleNewRestaurantForm(data))
            .then(res => {
                console.log(res.status)
                if (res.status == 201) {
                  res.json().then((json) => {
                    console.log(json)
                    // setRestaurantPostError(json.errors);
                    window.location.reload(true);
                  })
                }
                else if (res.status == 200){
                  res.json().then((json) => {
                    console.log(json.errors);
                    setRestaurantPostError(json.errors);
                  })
                }
              })

        setAddRestaurantName(addRestaurantName)
        setCategory(category)
        setImage(image)
        setLocation(location)
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
                <button>Add Restaurant!</button>
                {restaurantPostError && <div className="error">{restaurantPostError.join(", ")}</div>}
            </form>
        </div>
    )
}


export default RestaurantForm;