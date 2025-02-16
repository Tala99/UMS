import { appError } from "../utils/appError.js";

const validation = (schema) => {


    return (req, res, next) => {

        const inputData={...req.body, ...req.params};
        const validateResult=schema.validate(inputData,{abortEarly:false});

    
        if (validateResult?.error) {
            return next(new appError(val.error,400));
        }
        next();
    }

}


export default validation;