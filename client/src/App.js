import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import UsersList from "./UsersList";
import RestaurantsList from "./RestaurantsList";
import SingleRestaurantProfile from "./SingleRestaurantProfile";

function App() {
  const [users, setUsers] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

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

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <h1>I am the home page that will have posts</h1>
          </Route>
          <Route exact path="/users">
            <UsersList users={users} />
          </Route>
          <Route exact path="/restaurants">
            <RestaurantsList restaurants={restaurants}/>
          </Route>
          <Route path="/restaurants/:id">
            <SingleRestaurantProfile restaurants={restaurants}/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;