import imagekit from '../config/imagekit.js';
import Blog from '../models/Blog.js';
import fs from 'fs';
export const addBlog = async (req,res) => {
    try {
        const {title,subTitle,description,category,isPublished} = JSON.parse(req.body.blog);
        const {imageFile} = req.file;
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