import jwt from "jsonwebtoken";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) { 
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};  

export const getAllBlogsAdmin = async (req,res) => {
  try {
    const blogs = await Blog.find({}).sort({createdAt:-1});
    res.status(200).json({success:true,blogs})
  } catch (error) {
    res.status(400).json({success:false,message:error.message})
  }
} 

export const getAllComments = async (req,res) => {
  try {
    const comments = await Comment.find({}).populate('blog').sort({createdAt:-1});
    res.status(200).json({success:true,comments})
  } catch (error) {
    res.status(400).json({success:false,message:error.message})
  }
}

export const getDashboard = async (req,res) => {
  try {
    const recentBlogs = await Blog.find({}).sort({createdAt:-1}).limit(5);
    const totalBlogs = await Blog.countDocuments({});
    const comments = await Comment.countDocuments({});
    const draftBlogs = await Blog.countDocuments({isPublished:false});
    const dashboardData = {
      recentBlogs,
      totalBlogs,
      comments,
      draftBlogs
    }
    res.status(200).json({success:true,dashboardData})
  } catch (error) {
    res.status(400).json({success:false,message:error.message})
  }
}

export const deleteCommentById = async (req,res) => {
  try {
    const {id} = req.body;
    await Comment.findByIdAndDelete(id);
    res.status(200).json({success:true,message:"Comment deleted successfully"})
  } catch (error) {
    res.status(400).json({success:false,message:error.message})
  }
}

export const approveCommentById = async (req,res) => {
  try {
    const {id} = req.body;
    await Comment.findByIdAndUpdate(id,{isApproved:true});
    res.status(200).json({success:true,message:"Comment approved successfully"})
  } catch (error) {
    res.status(400).json({success:false,message:error.message})
  }
}
