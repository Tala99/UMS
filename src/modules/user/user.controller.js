import UserModel from "../../../DB/model/user.js";

export const getUser=async (req, res) => {
    // const users= await UserModel.findAll();
    
       const users= await UserModel.findAll( 
          {
              attributes:["id","name","email"]
          }
         );
         sendEmail(email);
          return res.status(200).json({message:"success",users});
       

 };

export const deleteUser= async (req,res) => {
  
    const {id}=req.params;
const user =await UserModel.findOne({id:id});
if (!user) return res.status(400).json({message:"not found"});
 await UserModel.destroy({
   where: {id:id}
});
return res.status(200).json({message:"User deleted successfully"});


}

export const updateUser=async (req,res) => {

    const {id}=req.params;
   const user =await UserModel.findOne({id:id});
   if (!user) return res.status(400).json({message:"not found"});
 
   const {secure_url}= await cloudinary.uploader.upload(req.file.path);
    user.profilePic= secure_url;
    await user.save();
    return res.status(200).json({message:"Profile picture updated successfully",user});
 
 }