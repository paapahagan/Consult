import express from "express";
import path from "path";
import posts from "./routes/posts.ts";
import authRoutes from "./routes/authRoutes.ts";
import logger from "./middleware/logger.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/error.js";
// import auth from "./middleware/auth.js";
import cors from "cors";

// const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*", // Adjust this to your needs, e.g., specify allowed origins
  })
); // Allow all origins for simplicity, adjust as needed

//logger middleware
app.use(logger);

//Routes
app.use("/api/posts", posts);

app.use("/api/auth", authRoutes);

//error handler middleware
app.use(notFound);
app.use(errorHandler);

app.listen(8000, () => console.log("first server running on port 8000"));
