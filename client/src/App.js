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
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
 
  useEffect(() => {
    fetch('/me')
    .then((res) => {
      if (res.ok) {
        res.json()
          .then((currentUser) => {
            // setIsAuthenticated(true);
            setCurrentUser(currentUser);
          });
      }
    });
    fetch("/posts")
      .then((r) => r.json())
      .then((posts) => setPosts(posts));
  }, []);

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

  const filteredRestaurants = restaurants.filter(restaurant => restaurant.restaurant_name.toLowerCase().includes(search.toLowerCase()))
  // console.log(filteredRestaurants)
 
  const handleDeletePost = (posty) => {
    console.log(posty)
  }

  const handleUpdateUser = (currentUser) => {
    setCurrentUser(currentUser)
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

  const handleSortByLikes = () => {
    setSortMethod("likes");
  }

  const handleSortByDislikes = () => {
    setSortMethod("dislikes");
  }

  const handleSortAlphabeticalByRestName = () => {
    setSortMethod("alphabetical");
  } 

  const onUpdatedProfile = (updatedProfile) => {
    const newUpdatedProfile = user => {
      if (user.id === updatedProfile.id) {
        return updatedProfile
      } else {return user}
    }
    setUsers(newUpdatedProfile)
  }
  

  if (!currentUser) return (<Login setCurrentUser={setCurrentUser}/>)

  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/me">
            <Header user={currentUser} setUser={setCurrentUser}/>
            <Profile user={currentUser}/> 
            {/* <h1>{user.username}'s Profile!</h1> */}
          </Route>
          <Route exact path="/login">
            <Header user={currentUser} setUser={setCurrentUser}/>
            <Login handleUpdateUser={handleUpdateUser} user={currentUser} setCurrentUser={setCurrentUser}/>
          </Route>
          <Route exact path="/signup">
            <Header user={currentUser} setUser={setCurrentUser}/>
            <Signup handleUpdateUser={handleUpdateUser} setCurrentUser={setCurrentUser}/>
          </Route>
          <Route exact path="/">
            <Header user={currentUser} setUser={setCurrentUser}/>
            <PostsList handleDeletePost={handleDeletePost} user={currentUser} restaurants={restaurants} posts={posts} handleNewPostForm={handleNewPostForm} sortMethod={sortMethod} handleSortByLikes={handleSortByLikes} handleSortByDislikes={handleSortByDislikes} users={users}/>
          </Route>
          <Route exact path="/users">
            <Header user={currentUser} setUser={setCurrentUser}/>
            <UsersList  users={users}/>
          </Route>
          <Route exact path="/restaurants">
            <Header user={currentUser} setUser={setCurrentUser}/>
            <RestaurantsList handleSortAlphabeticalByRestName={handleSortAlphabeticalByRestName} handleNewRestaurantForm={handleNewRestaurantForm} sortMethod={sortMethod} filteredRestaurants={filteredRestaurants}  handleSearch={handleSearch} search={search} restaurants={restaurants}
            />
          </Route>
          <Route path="/restaurants/:id">
            <Header user={currentUser} setUser={setCurrentUser}/>
            <SingleRestaurantProfile restaurants={restaurants} />
          </Route>
          <Route path="/posts/:id">
            <Header user={currentUser} setUser={setCurrentUser}/>
            <SinglePostProfile posts={posts} />
          </Route>
          <Route path="/users/:id">
            <Header user={currentUser} setUser={setCurrentUser}/>
            <SingleUserProfile onUpdatedProfile={onUpdatedProfile} users={users} currentUser={currentUser}/>
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
  