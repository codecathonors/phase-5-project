// import { useState } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import SingleUserCard from "./SingleUserCard";

function UsersList( { users }) {
    // console.log(users)

  return (
    <div>
        <h1 className="top-of-page-title">Social</h1>
        <div className="user-grid-container">
        {users.map(user => <SingleUserCard user={user} key={user.id}/>)}
        </div>
    </div>
);
}

export default UsersList;