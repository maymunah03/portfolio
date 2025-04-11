import { useState, useEffect } from "react";
import axios from "axios";
import './Blog.css';

export const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [expanded, setExpanded] = useState(null); // track which blog is expanded

  useEffect(() => {
    axios.get("http://localhost:5001/api/blogs").then((res) => setBlogs(res.data));
  }, []);

  const toggleExpanded = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <h1 className="blog-title">May's Corner</h1>

      <div className="blog-container">
        {blogs.map((blog) => {
          const isExpanded = expanded === blog._id;
          const preview = blog.content.slice(0, 200) + (blog.content.length > 200 ? "..." : "");

          return (
            <div key={blog._id} className="blog-card">
              <h3>{blog.title}</h3>
              <p>{isExpanded ? blog.content : preview}</p>
              {blog.content.length > 200 && (
                <button className="blog-toggle" onClick={() => toggleExpanded(blog._id)}>
                  {isExpanded ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
