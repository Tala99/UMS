import joi from "joi";

export const createBlogSchema = 
        joi.object({
            title: joi.string().min(3).max(10).required(),
            description: joi.string().min(10).required(),


        });






export const blogDetailsSchema = joi.object({
        id: joi.number().min(1).required(),
    
    });