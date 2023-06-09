//importaciones
import React, { useState, useEffect } from "react";

//componentes
import Posts from "./components/Posts";

//api
import { getPosts } from "./api/post";

//estilos css
import "./styles/app.css";

const App = () => {
  //variables de estado
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  return (
    <div className="container">
      <Posts posts={posts} />
    </div>
  );
};

export default App;
