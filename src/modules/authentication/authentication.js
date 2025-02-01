import { Router } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import UserModel from "../../../DB/model/user.js";
const router= Router();
router.post('/register', async (req, res) => {//register function
    try {
        const {name,email,password}=req.body;
    const hashPassword = bcrypt.hashSync(password,8);//choose 8 just because it's good number
    await UserModel.create({name,email,password:hashPassword});
    return res.status(201).json({message:"User created successfully"});
    } catch (error) {
        return res.status(500).json({message:"server error", error});
    }
    

});

router.put('/login', async (req, res) => {//make login
    try {
        const {email,password}=req.body;
    //const user= await UserModel.findAll({where:{"email":email}});// always return array of usres
    const user= await UserModel.findOne({where:{"email":email}}); //email
    if (!user) return res.status(404).json({message:"User not found, invalid email address"});
    const check = await bcrypt.compareSync(password,user.password); // password
    if (!check) return res.status(401).json({message:"Invalid password"}); 
    const token = jwt.sign({ id:user.id,email:user.email,role:user.role }, 'talahetnawi');
    return res.status(200).json({message:"success",token});
    } catch (error) {
        return res.status(500).json({message:"server error", error});
    }
    
});

export default router;