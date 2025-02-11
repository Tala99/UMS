import { Router } from "express";
import { registerSchema } from "./auth.validation.js";
import { loginSchema } from "./auth.validation.js";
import validation from "../../middleware/validation.js";
import { loginUser, registerUser } from "./auth.controller.js";
import { asyncHandler } from "../../utils/catchError.js";

const router = Router();
router.post('/register', validation(registerSchema), asyncHandler(registerUser));

router.put('/login', validation(loginSchema), asyncHandler(loginUser));

export default router;