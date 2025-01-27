import { Router } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from "../../../DB/model/user.js";
const router= Router();
router.get('/', async (req, res) => {
   // const users= await UserModel.findAll();
   const {token}=req.headers;
   const decoded =jwt.verify(token,'talahetnawi');
    if(decoded.role !=="admin"){
    return res.status(403).json({message:"You are not authorized to delete this user"});
 }
   const users= await UserModel.findAll( 
    {
        attributes:["id","name","email"]
    }
   );
    return res.status(200).json({message:"success",users});
});
router.delete('/:id', async (req,res) => {
 const {id}=req.params;
 const {token}=req.headers;
 const decoded =jwt.verify(token,'talahetnawi');
 if(decoded.role !=="admin"){
    return res.status(403).json({message:"You are not authorized to delete this user"});
 }
  const user =await UserModel.findOne({id:id});
  if (!user) return res.status(400).json({message:"not found"});
   await UserModel.destroy({
     where: {id:id}
  });
  return res.status(200).json({message:"User deleted successfully"});
});


export default router;