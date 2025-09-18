import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPostById,
  updatePost,
} from "../controlers/postController.js";

const router = express.Router();

// Get all posts
router.get("/", getPost);

// Get a single post by ID
router.get("/:id", getPostById);

// Create a new post
router.post("/", createPost);

//update a post
router.put("/:id", updatePost);

// Delete a post
router.delete("/:id", deletePost);

export default router;
