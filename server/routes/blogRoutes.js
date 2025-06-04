import express from 'express';
import { addBlog, getALlBlogs, getBlogById, deleteBlogById, togglePublish } from '../controllers/blogController.js';
import upload from '../middlewares/multer.js';
import auth from '../middlewares/auth.js';

const blogRouter = express.Router();

blogRouter.post('/add',upload.single('image'),auth,addBlog);
blogRouter.get('/all',getALlBlogs);
blogRouter.get('/:blogId',getBlogById);
blogRouter.delete('/delete',auth,deleteBlogById);
blogRouter.put('/toggle-publish',auth,togglePublish);
blogRouter.post('/add-comment',addBlogComments);
blogRouter.get('/comments',getBlogComments);

export default blogRouter;
