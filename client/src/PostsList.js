import React from "react";
import { useState } from "react";
import SinglePostCard from "./SinglePostCard";
import PostForm from "./PostForm";

function PostsList( { posts, restaurants, handleNewPostForm, sortMethod, handleSortByLikes, handleSortByDislikes }) {
    const [isPostFormVisible, setIsPostFormVisible] = useState(false)
    console.log(posts)

    function handleToggle() {
      setIsPostFormVisible(isPostFormVisible => !isPostFormVisible)
    }

    const sortedPosts = posts.sort((a, b) => {
      if (sortMethod === "likes") {
          return b.likes - a.likes;
      } else if (sortMethod === "dislikes") {
          return b.dislikes - a.dislikes;
      }
   })
      .map((post) => (
          <SinglePostCard 
              key={post.id}
              post={post} />))

  return (
    <div>
      <h1 className="top-of-page-title">Posts</h1>
      <button onClick={handleToggle}>{isPostFormVisible ? "collapse" : "add a post!"} </button>
      {isPostFormVisible ? <PostForm restaurants={restaurants} handleNewPostForm={handleNewPostForm} /> : <></>}
      <div className="sortbtns">
        <button className="sort" onClick={handleSortByLikes}>Sort by Likes</button>
        <button className="sort" onClick={handleSortByDislikes}>Sort by Dislikes</button>
      </div>
      <div className="post-grid-container">
        {/* {posts.map(post => <SinglePostCard post={post} key={post.id}/>)} */}
        {sortedPosts.map((post) => {
            return <div style={{display: "flex", justifyContent: "center"}}>{post}</div>
          })}
        </div>
    </div>
);
}

export default PostsList;