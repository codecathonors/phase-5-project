// import { useState } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import SingleUserCard from "./SingleUserCard";

function UsersList( { users }) {
    // console.log(users)

  return (
    <div>
        <h1> I'm the users page baby</h1>
        <div className="user-grid-container">
        {users.map(user => <SingleUserCard user={user} />)}
        </div>
    </div>
);
}

export default UsersList;