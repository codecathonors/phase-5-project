import React from "react";
import { useState } from "react";
import SinglePostCard from "./SinglePostCard";
import PostForm from "./PostForm";

function PostsList( { posts, restaurants, handleNewPostForm }) {
    const [isPostFormVisible, setIsPostFormVisible] = useState(false)
    // console.log(posts)

    function handleToggle() {
      setIsPostFormVisible(isPostFormVisible => !isPostFormVisible)
    }

  return (
    <div>
      <h1 className="top-of-page-title">Posts</h1>
      <button onClick={handleToggle}>{isPostFormVisible ? "collapse" : "add a post!"} </button>
      {isPostFormVisible ? <PostForm restaurants={restaurants} handleNewPostForm={handleNewPostForm} /> : <></>}
      <div className="post-grid-container">
        {posts.map(post => <SinglePostCard post={post} key={post.id}/>)}
        </div>
    </div>
);
}

export default PostsList;