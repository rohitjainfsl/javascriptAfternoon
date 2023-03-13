import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  //get, post, put, delete

  //component lifecycle

  //when you want a code to run exactly once
  //when you want a code to run whenever a variable/function (dependancy) is changed

  const [blogPosts, setData] = useState([]);

  useEffect(() => {
    // axios.get("https://dummyjson.com/products").then((response) => {
    //   console.log(response.data);
    //   setData(response.data);
    // });

    async function fetchData() {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data.products);
      setData(response.data.products);
    }

    fetchData();
  }, []);

  return (
    <div className="blog">
      {blogPosts.map((blogPost) => {
        return (
          <div className="post" key={blogPost.id}>
            <h3>{blogPost.title}</h3>
            <p>{blogPost.body}</p>
            <img src={blogPost.thumbnail} alt="Product"></img>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
