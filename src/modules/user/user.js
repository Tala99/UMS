import { Router } from "express";
import bcrypt from 'bcryptjs';
import UserModel from "../../../DB/model/user.js";
const router= Router();
router.get('/', async (req, res) => {
    const users= await UserModel.findAll();
    return res.status(200).json({message:"success",users});
});
router.post('/', async (req, res) => {//register function
    const {name,email,password}=req.body;
    const hashPassword = bcrypt.hashSync(password,8);//choose 8 just because it's good number
await UserModel.create({name,email,password:hashPassword});
    return res.status(201).json({message:"User created successfully"});


});

router.put('/login', async (req, res) => {//make login
    const {email,password}=req.body;
    //const user= await UserModel.findAll({where:{"email":email}});// always return array of usres
    const user= await UserModel.findOne({where:{"email":email}}); //email
    if (!user) return res.status(404).json({message:"User not found, invalid email address"});
    const check = await bcrypt.compareSync(password,user.password); // password
    if (!check) return res.status(401).json({message:"Invalid password"}); 
    return res.status(200).json({message:"success",user});
});
export default router;