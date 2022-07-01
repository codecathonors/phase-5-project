// import { useState } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import SinglePostCard from "./SinglePostCard";
import PostForm from "./PostForm";

function PostsList( { posts, restaurants, handleNewPostForm }) {
    // console.log(posts)

    // function handleNewPostClick () {

    // }

  return (
    <div>
      <PostForm restaurants={restaurants} handleNewPostForm={handleNewPostForm} />
      <button>add post</button>
      <h1> I'm the home page that will contain posts</h1>
      <div className="grid-container">
        {posts.map(post => <SinglePostCard post={post} />)}
        </div>
    </div>
);
}

export default PostsList;