import multer from "multer";
import { nanoid } from "nanoid";

function fileUpload(){
    const storage= multer.diskStorage({});
    function fileFilter(req,file,cb){
        if(file.mimetype=='image/jpeg'|| file.mimetype=='image/png'){
            cb(null,true);
        }else {
            cb('invalid format for picture',false);
        }
    }
    const upload=multer({fileFilter,storage});
    return upload;


}

export default fileUpload