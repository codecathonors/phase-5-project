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
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch('/me')
      .then((res) => {
       if (res.ok) {
          res.json()
            .then((currentUser) => {
              setCurrentUser(currentUser);})
          {
          fetch("/posts")
            .then((r) => r.json())
            .then((posts) => setPosts(posts));
          fetch("/users")
            .then((r) => r.json())
            .then((users) => setUsers(users));
          fetch("/restaurants")
            .then((r) => r.json())
            .then((restaurants) => setRestaurants(restaurants));
          }
        } else if (res.status == 401){
          <Login />
    }});
  }, []);

  //callback for handleDelete function in SinglePostCard
  const handleDeletePost = (posty) => {
    console.log(posty)
  }

  //HELP HELP HELP HELP GHELP
  const handleUpdateUser = (currentUser) => {
    setCurrentUser(currentUser)
  }

  //callback for handleSubmit function in PostForm
  const handleNewPostForm = (newPost) => {
    setPosts([...posts, newPost])
  }

  //callback for handleSubmit function in RestaurantForm
  const handleNewRestaurantForm = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant])
  }

  //captures search state
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  //restaurant filter for search bar
  const filteredRestaurants = restaurants.filter(restaurant => restaurant.restaurant_name.toLowerCase().includes(search.toLowerCase()))

  //sort method setters
  const handleSortByLikes = () => {
    setSortMethod("likes");
  }
  const handleSortByDislikes = () => {
    setSortMethod("dislikes");
  }
  const handleSortAlphabeticalByRestName = () => {
    setSortMethod("alphabetical");
  } 

  //callback for handleProfileEdit in EditProfile
  const onUpdatedProfile = (updatedProfile) => {
    const newUpdatedProfile = user => {
      if (user.id === updatedProfile.id) {
        return updatedProfile
      } else {return user}
    }
    setUsers(newUpdatedProfile)
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/me">
            <Header user={currentUser} setUser={setCurrentUser}/>
            <Profile user={currentUser} onUpdatedProfile={onUpdatedProfile}/> 
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
            <SingleRestaurantProfile restaurants={restaurants} posts={posts}/>
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