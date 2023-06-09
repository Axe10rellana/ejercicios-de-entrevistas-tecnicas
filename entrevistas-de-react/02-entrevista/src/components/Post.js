//importaciones
import React from "react";

//estilos css
import "../styles/post.css";

const Post = ({ post }) => {
  return (
    <li className="list">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </li>
  );
};

export default Post;
