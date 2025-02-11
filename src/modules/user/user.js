import { Router } from "express";
import UserModel from "../../../DB/model/user.js";
import auth from "../../middleware/auth.js";
import { sendEmail } from "../../utils/sendEmail.js";
import fileUpload from "../../utils/multer.js";
import cloudinary from "../../utils/cloudinary.js";
import { deleteUser, getUser, updateUser } from "./user.controller.js";
import { asyncHandler } from "../../utils/catchError.js";
const router= Router();
router.get('/', auth() ,asyncHandler(getUser));
router.delete('/:id', auth(),asyncHandler(deleteUser));
router.put('/:id',fileUpload().single('image'), asyncHandler(updateUser));


export default router;