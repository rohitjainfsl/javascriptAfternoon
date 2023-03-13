import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SingleBlog() {
  const { id } = useParams();

  const [singlePost, setSinglePost] = useState({})

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setSinglePost(result.data)
    }
    fetchData();
  }, []);

  return (
    <div className="single-blog">
        <h3>{singlePost.title}</h3>
        <p>{singlePost.body}</p>
    </div>
  )
}

export default SingleBlog;
