import express from "express";
const router = express.Router();

let posts = [
  { id: 1, title: "First Post", content: "This is the first post." },
  { id: 2, title: "Second Post", content: "This is the second post." },
  { id: 3, title: "Third Post", content: "This is the third post" },
];

// Get all posts
router.get("/", (req, res) => {
  res.json(posts);
});

// Get a single post by ID
router.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(` Post ${id} not found `);
    error.status = 404;
    return next(error);
  }
  res.json(post);
});

// Create a new post
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  if (!newPost.title || !newPost.content) {
    return res.status(400).json({ msg: "Title and content are required" });
  }
  posts.push(newPost);

  res.status(201).json(posts);
});

//update a post
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: "Post not found" });
  } else {
    post.title = req.body.title;
    post.content = req.body.content;

    res.json({ msg: "Post updated", post });
  }
});

// Delete a post
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id !== id);

  if (!post) {
    return res.status(404).json({ msg: "Post not found" });
  }
  posts = posts.filter((post) => post.id !== id);
  res.json({ msg: "Post deleted", post });
});

export default router;
