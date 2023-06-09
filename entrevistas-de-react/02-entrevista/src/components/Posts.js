//importaciones
import React from "react";

//componentes
import Post from "./Post";

//estilos css
import "../styles/posts.css";

const Posts = ({ posts }) => {
  return (
    <ul className="containerList">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default Posts;
