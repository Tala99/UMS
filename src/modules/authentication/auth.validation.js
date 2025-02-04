import joi from 'joi';

export const registerSchema=joi.object({
    name:joi.string().min(3).max(10).required(),
    email:joi.string().email().required(),
    password:joi.string().min(8).required(),


});
export const loginSchema=joi.object({
    
    email:joi.string().email().required(),
    password:joi.string().min(8).required(),

});
