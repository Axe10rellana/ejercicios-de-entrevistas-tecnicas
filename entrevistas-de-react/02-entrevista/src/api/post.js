//https://jsonplaceholder.typicode.com/posts

const getPosts = (setPosts) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => setPosts(json));
};

export { getPosts };
