import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";
import { validateId } from "../middleware/validation.js"; // New middleware for validation

const router = express.Router();

/* READ */
// GET /users/:id: Get a user's details (token required, validate userId)
router.get("/:id", verifyToken, validateId("id"), getUser);

// GET /users/:id/friends: Get a user's friends (token required, validate userId)
router.get("/:id/friends", verifyToken, validateId("id"), getUserFriends);

/* UPDATE */
// PATCH /users/:id/:friendId: Add/remove a friend (token required, validate both IDs)
router.patch("/:id/:friendId", verifyToken, validateId("id"), validateId("friendId"), addRemoveFriend);

export default router;
