import express from 'express';
import initApp from './src/index.router.js';

const app = express();
app.use(express.json());//to catch the important function

initApp(app);

app.listen(3000,() => {
    console.log('Server is running on port 3000');
});