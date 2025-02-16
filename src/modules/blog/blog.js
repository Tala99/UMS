import { Router } from "express";
import auth from "../../middleware/auth.js";
import { createBlog, getBlog, getDetails } from "./blog.controller.js";
import { asyncHandler } from "../../utils/catchError.js";
import validation from "../../middleware/validation.js";
import { blogDetailsSchema, createBlogSchema } from "./blog.validation.js";
const router= Router();

router.get('/',asyncHandler(getBlog));
router.post('/',auth(),validation(createBlogSchema),asyncHandler(createBlog));
router.get('/:id',validation(blogDetailsSchema),asyncHandler(getDetails));




export default router;