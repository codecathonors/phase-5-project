import React from "react";
import { useState } from "react";
import SinglePostCard from "./SinglePostCard";
import PostForm from "./PostForm";

function PostsList( { handleDeletePost, users, user, posts, restaurants, handleNewPostForm, sortMethod, handleSortByLikes, handleSortByDislikes }) {
  const [isPostFormVisible, setIsPostFormVisible] = useState(false)

  function handleToggle() {
    setIsPostFormVisible(isPostFormVisible => !isPostFormVisible)
  }

  //sort by likes / dislikes
  const sortedPosts = posts.sort((a, b) => {
    if (sortMethod === "likes") {
      return b.likes - a.likes;
    } else if (sortMethod === "dislikes") {
      return b.dislikes - a.dislikes;
    }
  })
  .map((post) => (
  <SinglePostCard handleDeletePost={handleDeletePost} key={post.id} post={post} user={user}/>
  ))

  return (
    <div>
      <h1 className="top-of-page-title">Posts</h1>
      <button onClick={handleToggle} className="on-post-page-normal">{isPostFormVisible ? "collapse" : "add a post!"} </button>
      {isPostFormVisible ? <PostForm users={users} nowUser={user} restaurants={restaurants} handleNewPostForm={handleNewPostForm} /> : <></>}
      <div className="sortbtns">
        <button className="on-post-page-normal" onClick={handleSortByLikes}>Sort by Likes</button>
        <button className="on-post-page-normal" onClick={handleSortByDislikes}>Sort by Dislikes</button>
      </div>
      <div className="post-grid-container">
        {sortedPosts.map((post) => {
          return <div style={{display: "flex", justifyContent: "center"}}>{post}</div>
        })}
      </div>
    </div>
  );
}

export default PostsList;