import express from 'express';
import {connectDb} from './DB/connection.js';
import UserModel from './DB/model/user.js';
import userRouter from './src/modules/user/user.js';
import authRouter from './src/modules/authentication/authentication.js';
const app = express();
app.use(express.json());//to catch the important function
connectDb();
app.use('/users',userRouter);
app.use('/authentication',authRouter);

app.listen(3000,() => {
    console.log('Server is running on port 3000');
});