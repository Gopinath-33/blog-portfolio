// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Local Connection
mongoose.connect('mongodb://127.0.0.1:27017/blogDB')
  .then(() => console.log('MongoDB Connected Successfully!'))
  .catch((err) => console.error('MongoDB Connection Error:', err.message));

// Schema & Model
const blogSchema = new mongoose.Schema({
  newTitle: { type: String, required: true },
  newContent: { type: String, required: true },
  date: { type: String, required: true },
  likes: { type: Number, default: 0 }
});

const Blog = mongoose.model('Blog', blogSchema);

// Routes
// 1. Get All Blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ _id: -1 });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. Like a Blog Post
app.patch('/api/blogs/like/:id', async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 3. Create a New Blog Post
app.post('/api/blogs', async (req, res) => {
  const { newTitle, newContent, date, likes } = req.body;

  if (!newTitle || !newContent) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  const blog = new Blog({
    newTitle,
    newContent,
    date: date || new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    likes: likes || 0
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
// 4. Delete a Blog Post Route
app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found in database' });
    }
    return res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error('Delete error:', err.message);
    return res.status(500).json({ message: err.message });
  }
});
// Start Server on Port 5000
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));