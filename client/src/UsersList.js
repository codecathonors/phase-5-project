import React from "react";
import SingleUserCard from "./SingleUserCard";

function UsersList( { users }) {

  return (
    <div>
      <h1 className="top-of-page-title-users">Social</h1>
      <div className="user-grid-container">
        {users.map(user => <SingleUserCard user={user} key={user.id}/>)}
      </div>
    </div>
  );
}

export default UsersList;