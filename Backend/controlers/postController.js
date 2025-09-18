let posts = [
  { id: 1, title: "First Post", content: "This is the first post." },
  { id: 2, title: "Second Post", content: "This is the second post." },
  { id: 3, title: "Third Post", content: "This is the third post" },
];

// desc get post
// route GET /api/posts
export const getPost = (req, res, next) => {
  res.json(posts);
};

// desc get single post
// route GET /api/posts/:id
export const getPostById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(` Post ${id} not found `);
    error.status = 404;
    return next(error);
  }
  res.json(post);
};

// desc create post
// route POST /api/posts
export const createPost = (req, res, next) => {
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
};

// desc update post
// route PUT /api/posts/:id
export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ msg: "Post did not update" });
  } else {
    post.title = req.body.title;
    post.content = req.body.content;

    res.json({ msg: "Post updated", post });
  }
};

// desc delete post
// route DELETE /api/posts/:id
export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(` Post ${id} not found `);
    error.status = 404;
    return next(error);
  }
  posts = posts.filter((post) => post.id !== id);
  res.json({ msg: "Post deleted", post });
};
