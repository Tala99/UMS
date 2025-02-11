import UserModel from "../../../DB/model/user.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sendEmail } from "../../utils/sendEmail.js";
export const loginUser = async (req, res) => {
    //make login

    const { email, password } = req.body;
    // const result=loginSchema.validate({email,password},{abortEarly:false});// or .validate({name,email,password});
    // if(result.error) {
    //     return res.status(400).json({message:"validation error",error:result.error});
    // }
    //const user= await UserModel.findAll({where:{"email":email}});// always return array of usres
    const user = await UserModel.findOne({ where: { "email": email } }); //email
    if (!user) return res.status(404).json({ message: "User not found, invalid email address" });
    const check = await bcrypt.compareSync(password, user.password); // password
    if (!check) return res.status(401).json({ message: "Invalid password" });
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, 'talahetnawi');
    sendEmail(email);
    return res.status(200).json({ message: "success", token });

    // return res.status(500).json({message:"server error", error:error.stack});


};


export const registerUser = async (req, res) => {//register function

    const { name, email, password } = req.body;
    // const result=registerSchema.validate(req.body,{abortEarly:false});// or .validate({name,email,password});
    // if(result.error) {
    //     return res.status(400).json({message:"validation error",error:result.error});
    // } //i take it in a middleware function
    const hashPassword = bcrypt.hashSync(password, 8);//choose 8 just because it's good number
    await UserModel.create({ name, email, password: hashPassword });
    const html = `<div><h2>new user</h2><br><p>welcome ${name}</p></div>`;
    sendEmail(email, "welcome", html);
    return res.status(201).json({ message: "User created successfully" });

    // return res.status(500).json({message:"server error", error});



}