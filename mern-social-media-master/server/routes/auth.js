import express from "express";
import { login } from "../controllers/auth.js";
import rateLimit from "express-rate-limit";

const router = express.Router();

// Middleware: Rate limiter to prevent brute-force attacks
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many login attempts from this IP, please try again after 15 minutes."
});

// POST /login: Login route
router.post("/login", loginLimiter, login);

export default router;
