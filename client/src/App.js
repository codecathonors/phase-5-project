import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import UsersList from "./UsersList";
import RestaurantsList from "./RestaurantsList";
import SingleRestaurantProfile from "./SingleRestaurantProfile";
import PostsList from "./PostsList";
import SinglePostProfile from "./SinglePostProfile";
import SingleUserProfile from "./SingleUserProfile";
import Header from "./Header";
import Profile from "./Profile";


function App() {
  const [users, setUsers] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortMethod, setSortMethod] = useState("rating");
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
 

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    fetch("/restaurants")
      .then((r) => r.json())
      .then((restaurants) => setRestaurants(restaurants));
  }, []);

  useEffect(() => {
    fetch('/me')
    .then((res) => {
      if (res.ok) {
        res.json()
          .then((user) => {
            // setIsAuthenticated(true);
            setUser(user);
          });
      }
    });
    fetch("/posts")
      .then((r) => r.json())
      .then((posts) => setPosts(posts));
  }, []);

  const handleUpdateUser = (user) => {
    setUser(user)
  }

  const handleNewPostForm = (newPost) => {
    setPosts([...posts, newPost])
  }

  const handleNewRestaurantForm = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant])
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const filteredRestaurants = restaurants.filter(restaurant => restaurant.restaurant_name.toLowerCase().includes(search.toLowerCase()))

  const handleSortAlphabeticalByRestName = () => {
    setSortMethod("alphabetical");
  } 

  const handleSortByTotalRating = () => {
    setSortMethod("rating");
  } 

  const handleSortByLikes = () => {
    setSortMethod("likes");
  }

  const handleSortByDislikes = () => {
    setSortMethod("dislikes");
  }

  //think I'll need something like this for the profile patch
  // const onUpdatedProfile = (updatedProfile) => {
  //   const newUpdatedProfile = user => {
  //     if (user.id === updatedProfile.id) {
  //       return updatedProfile
  //     } else {return user}
  //   }
  //   setCurrentUser(newUpdatedProfile)
  // }
  

  if (!user) return <Login onLogin={setUser} />

  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/me">
            <Header user={user} setUser={setUser}/>
            <Profile user={user}/> 
            {/* <h1>{user.username}'s Profile!</h1> */}
          </Route>
          <Route exact path="/login">
            <Header user={user} setUser={setUser}/>
            <Login handleUpdateUser={handleUpdateUser} user={user}/>
          </Route>
          <Route exact path="/signup">
            <Header user={user} setUser={setUser}/>
            <Signup handleUpdateUser={handleUpdateUser} />
          </Route>
          <Route exact path="/">
            <Header user={user} setUser={setUser}/>
            <PostsList users={users} user={user} posts={posts} restaurants={restaurants} handleNewPostForm={handleNewPostForm} sortMethod={sortMethod} handleSortByLikes={handleSortByLikes} handleSortByDislikes={handleSortByDislikes}/>
          </Route>
          <Route exact path="/users">
            <Header user={user} setUser={setUser}/>
            <UsersList users={users} />
          </Route>
          <Route exact path="/restaurants">
            <Header user={user} setUser={setUser}/>
            <RestaurantsList handleNewRestaurantForm={handleNewRestaurantForm} sortMethod={sortMethod} handleSortByTotalRating={handleSortByTotalRating} handleSortAlphabeticalByRestName={handleSortAlphabeticalByRestName} filteredRestaurants={filteredRestaurants}  handleSearch={handleSearch} search={search} restaurants={restaurants}
            />
          </Route>
          <Route path="/restaurants/:id">
            <Header user={user} setUser={setUser}/>
            <SingleRestaurantProfile restaurants={restaurants}/>
          </Route>
          <Route path="/posts/:id">
            <Header user={user} setUser={setUser}/>
            <SinglePostProfile posts={posts}/>
          </Route>
          <Route path="/users/:id">
            <Header user={user} setUser={setUser}/>
            <SingleUserProfile users={users}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

// function handleChangeRestRating(avg_rating, rest_id) {
  //   // console.log(restaurants.map(restaurant => restaurant.total_rating))
  //   const totalRating = restaurants.map(restaurant => restaurant.total_rating)
  //   setAvgRating(avg_rating)
  //   setRestId(rest_id)}
  //   // console.log(totalRating)
  //   // console.log(rest_id)
  //   // console.log(avg_rating)
  //   // setRestaurants(restaurants.map(restaurant => restaurant.total_rating === avg_rating))

  //   // setRestaurants(restaurants.map(restaurant => restaurant.total_rating))
  //   // console.log(rest_id) 
  //   //[1, 2, 3, 4]
  //   // console.log(avg_rating)
  //   //[3, nill, 2.4]

  //   const restObj = {};

  //   restId.forEach((element, index) => {
  //     restObj[element] = avgRating[index];
  //   })

  //   console.log(restObj) //now rest_id is value and avg_rating is key

  //   //below needs to be in an if / else
  //   //if restaurant_rating != rating passed in, run this fetch
    
  //   for (const [key, value] of Object.entries(restObj)) {
  //     // console.log(`${key}: ${value}`)
  //     // useEffect(() => {
  //       fetch(`/restaurants/${key}`, {
  //         method: 'PATCH',
  //         headers: {
  //           'Content-type': 'application/json'
  //         },
  //         body: JSON.stringify( {
  //           total_rating: `${value}`
  //       })
  //       })
  //       .then(r => r.json())
  //       .then(data => console.log('response', data)
  //     )
  //   }
      // }), []}
  // const avg = restaurants.map(restaurant => restaurant.posts.map(post => post.rating).reduce((sum, curr) => sum + Number(curr), 0) / restaurant.posts.length)

  // const averageForRest = restaurants.map(restaurant => restaurant.total_rating)
  // console.log(averageForRest)

  //post request
  // setRestaurants(restaurants.map => restaurant.total_rating = avg)
  // console.log


    // let ratedRest = restaurants.filter(restaurant => restaurant.id === rest_id)
    // const singleRest = rest_id.map(id => )
    // console.log(ratedRest)
    // console.log(avg_rating)
    // const updatedRest = {
    //   total_rating: ratedRest.id
    // }
    // console.log(updatedRest)
    // // newTeam.map(character => {
    //   fetch(`/characters/${character.id}`, {
    //     method: 'PATCH',
    //     headers: {
    //       'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify(
    //       updatedCharacter
    //     ),
    //   })
    //     .then(r => r.json())
    //     .then(data => console.log('response', data))
    // }
    // )

     // const [currentUser, setCurrentUser] = useState("");
  // const [avgRating, setAvgRating] = useState([]);
  // const [restId, setRestId] = useState([])

  // useEffect(() => {
  //   fetch('/me')
  //     .then((res) => {
  //       if (res.ok) {
  //         res.json()
  //           .then((user) => {
  //             setIsAuthenticated(true);
  //             setUser(user);
  //           });
  //       }
  //     });

  // }, []);
  