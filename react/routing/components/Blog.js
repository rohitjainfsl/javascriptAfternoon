import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Blog() {
  const [value, setValue] = useState([]);
  //https://jsonplaceholder.typicode.com/posts
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setValue(result.data);
    }
    fetchData();
  }, []);
  return (
    <>
      {value.map((item) => {
        return (
          <div key={item.id}>
            <h3>
              <Link to={`/blog/${item.id}`}>{item.title}</Link>
            </h3>
            <p>{item.body}</p>
          </div>
        );
      })}
    </>
  );
}

export default Blog;
