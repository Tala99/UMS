import { connectDb } from "../DB/connection.js";
import userRouter from './modules/user/user.js';
import blogRouter from './modules/blog/blog.js';
import authRouter from './modules/authentication/authentication.js';

const initApp=(app)=>{
    connectDb();
    
    app.use('/users',userRouter);
    app.use('/authentication',authRouter);
    app.use('/blogs',blogRouter);




};

export default initApp;