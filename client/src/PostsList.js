// import { useState } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import SinglePostCard from "./SinglePostCard";

function PostsList( { posts }) {
    // console.log(posts)

  return (
    <div>
        <h1> I'm the home page that will contain posts</h1>
        {posts.map(post => <SinglePostCard post={post} />)}
    </div>
);
}

export default PostsList;