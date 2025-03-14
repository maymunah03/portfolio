require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); //

// Connect to MongoDB

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});

// Define Blog Schema

const BlogSchema = new mongoose.Schema({
  title: String,

  content: String,

  createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", BlogSchema);

// API Routes

app.get("/api/blogs", async (req, res) => {
  const blogs = await Blog.find();

  res.json(blogs);
});

app.post("/api/blogs", async (req, res) => {
  const { title, content } = req.body;

  const newBlog = new Blog({ title, content });

  await newBlog.save();

  res.json(newBlog);
});

// Start server

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
