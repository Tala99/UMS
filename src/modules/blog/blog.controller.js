import blogModel from "../../../DB/model/blog.js";
import UserModel from "../../../DB/model/user.js";
import { appError } from "../../utils/appError.js";


export const getBlog = async (req, res) => {
    const blogs = await blogModel.findAll({
        attributes: ['id', 'title'],
        include: {
            model: UserModel,
            attributes: ['id', 'name']
        }
    });

    return res.status(200).json({ massege: "success to get all blog", blogs })

};

export const createBlog = async (req, res) => {
    //return res.json(req.id);
    const { title, description } = req.body;
    const blog = await blogModel.create({ title: title, description: description, UserId: req.id });
    return res.status(201).json({ massege: "success to create new blog", blog });
}

export const getDetails= async (req, res,next) => {

    const {id}=req.params;
    const blog = await blogModel.findByPk(id);
    if(!blog) return next(new appError("blog not found", 404));
    return res.status(200).json({massege: "success", blog });

};