import { connectDb } from "../DB/connection.js";
import userRouter from './modules/user/user.js';
import blogRouter from './modules/blog/blog.js';
import authRouter from './modules/authentication/authentication.js';

const initApp=(app)=>{
    connectDb();
    
    app.use('/users',userRouter);
    app.use('/authentication',authRouter);
    app.use('/blogs',blogRouter);
    app.use((err,req,res,next)=>{

        return res.status(err.statusCode).json({message:err.message});

    });




};

export default initApp;