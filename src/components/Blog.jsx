import { useState, useEffect } from "react";
import axios from "axios";
import './Blog.css'; // Import your CSS file


export const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/blogs").then((res) => setBlogs(res.data));
  }, []);

  return (
    <div>
      {/* Add the "May's Corner" title here */}
      <h1 className="blog-title">May's Corner</h1>
      
      <div className="blog-container">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};