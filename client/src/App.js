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


function App() {
  const [users, setUsers] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [sortMethod, setSortMethod] = useState("rating");
  const [currentUser, setCurrentUser] = useState("");
  const [avgRate, setAvgRate] = useState("")

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
    fetch("/posts")
      .then((r) => r.json())
      .then((posts) => setPosts(posts));
  }, []);

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
  const onUpdatedProfile = (updatedProfile) => {
    const newUpdatedProfile = user => {
      if (user.id === updatedProfile.id) {
        return updatedProfile
      } else {return user}
    }
    setCurrentUser(newUpdatedProfile)
  }

  //callback for getting sort button to work on restaurants list
  // function handleAverageRating(avg_rating){
  //   setAvgRate(avg_rating)
  // }

  const avg = restaurants.map(restaurant => restaurant.posts.map(post => post.rating).reduce((sum, curr) => sum + Number(curr), 0) / restaurant.posts.length)


  //post request
  // setRestaurants(restaurants.map => restaurant.total_rating = avg)
  // console.log

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/login">
            <Header />
            <Login />
          </Route>
          <Route exact path="/signup">
            <Header />
            <Signup />
          </Route>
          <Route exact path="/">
            <Header />
            <PostsList posts={posts} restaurants={restaurants} handleNewPostForm={handleNewPostForm} sortMethod={sortMethod} handleSortByLikes={handleSortByLikes} handleSortByDislikes={handleSortByDislikes}/>
          </Route>
          <Route exact path="/users">
            <Header />
            <UsersList users={users} />
          </Route>
          <Route exact path="/restaurants">
            <Header />
            <RestaurantsList handleNewRestaurantForm={handleNewRestaurantForm} sortMethod={sortMethod} handleSortByTotalRating={handleSortByTotalRating} handleSortAlphabeticalByRestName={handleSortAlphabeticalByRestName} filteredRestaurants={filteredRestaurants}  handleSearch={handleSearch} search={search} restaurants={restaurants}
            />
          </Route>
          <Route path="/restaurants/:id">
            <Header />
            <SingleRestaurantProfile restaurants={restaurants}/>
          </Route>
          <Route path="/posts/:id">
            <Header />
            <SinglePostProfile posts={posts}/>
          </Route>
          <Route path="/users/:id">
            <Header />
            <SingleUserProfile onUpdatedProfile={onUpdatedProfile} users={users}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;