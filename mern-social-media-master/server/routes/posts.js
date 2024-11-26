import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";
import { validateId } from "../middleware/validation.js"; // New middleware for validation

const router = express.Router();

/* READ */
// GET /posts: Get all feed posts (token required)
router.get("/", verifyToken, getFeedPosts);

// GET /posts/:userId/posts: Get a specific user's posts (token required, validate userId)
router.get("/:userId/posts", verifyToken, validateId("userId"), getUserPosts);

/* UPDATE */
// PATCH /posts/:id/like: Like a specific post (token required, validate postId)
router.patch("/:id/like", verifyToken, validateId("id"), likePost);

export default router;
