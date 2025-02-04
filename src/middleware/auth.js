import jwt from 'jsonwebtoken';

const auth=()=>{

    try {
        return (req,res,next)=>{
            const {token}=req.headers;
            const decoded =jwt.verify(token,'talahetnawi');
                if(decoded.role !=="admin"){
                return res.status(403).json({message:"You are not authorized"});
             }
             next();
            //return res.json(decoded);
            //return res.json(decoded);
         };
        
    } catch (error) {
        return res.status(500).json({message:"server error",error:error.stack});
    }
 
}

export default auth;