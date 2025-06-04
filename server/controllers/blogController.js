import imagekit from '../config/imagekit.js';
import Blog from '../models/Blog.js';
import fs from 'fs';
import Comment from '../models/Comment.js';
export const addBlog = async (req,res) => {
    try {
        const {title,subTitle,description,category,isPublished} = JSON.parse(req.body.blog);
        const imageFile = req.file;
        if(!title || !description || !category || !isPublished || !imageFile){
            return res.status(400).json({success:false,message:"All fields are required"})
        }
        const fileBuffer = fs.readFileSync(imageFile.path);
        const response = await imagekit.upload({
            file:fileBuffer,
            fileName:imageFile.originalname,
            folder:"/blogs"
        })

        //Optimization through imagekit URL transformation
        const optimizedImageUrl = imagekit.url({
            path:response.filePath,
            transformation:[
                {quality:"auto"}, //Auto Compression
                {format: 'webp'}, //Convert to modern Format
                {width: '1280'}, //Max width 1280px
            ]
        })

        const imageUrl = optimizedImageUrl;
        
        const blog = await Blog.create({
            title,
            subTitle,
            description,
            category,
            isPublished,
            image:imageUrl,    
        })
        res.status(201).json({success:true,message:"Blog added successfully",blog})
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

export const getAllBlogs = async (req,res) => {
    try {
        const blogs = await Blog.find({isPublished:true});
        res.status(200).json({success:true,blogs})
    } catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}


export const getBlogById = async (req,res) => {
    try {
        const {blogId} = req.params;
        const blog = await Blog.findById(blogId);
        if(!blog){
            return res.status(404).json({success:false,message:"Blog not found"})
        }
        res.status(200).json({success:true,blog})
    } 
    catch (error) {
        res.status(400).json({success:false,message:error.message})    
    }
}

export const deleteBlogById = async (req,res) => {
    try {
        const {id} = req.body;
        await Blog.findByIdAndDelete({_id:id});
        await Comment.deleteMany({blog:id});
        res.status(200).json({success:true,message:"Blog deleted successfully"})
    } 
    catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

export const togglePublish = async (req,res) => {
    try {
        const {id} =req.body;
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.status(200).json({success:true,message:"Blog published status updated"})
    } 
    catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

export const addBlogComments = async (req,res) => {
    try {
         const {blogId,name,comment} = req.body;
         const newComment = await Comment.create({blog:blogId,name,content:comment});
         res.status(200).json({success:true,message:"Comment added successfully for review",newComment})
    } 
    catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

export const getBlogComments = async (req,res) => {
    try {
        const {blogId} = req.body;
        const comments = await Comment.find({blog:blogId,isApproved:true}).sort({createdAt:-1});
        res.status(200).json({success:true,comments})
    } 
    catch (error) {
        res.status(400).json({success:false,message:error.message})
    }
}

