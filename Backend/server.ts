import express from "express";
import path from "path";
import posts from "./routes/posts.ts";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";

// const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//logger middleware
app.use(logger);

//Routes
app.use("/api/posts", posts);

//error handler middleware
app.use(errorHandler);

app.listen(8000, () => console.log("first server running on port 8000"));
