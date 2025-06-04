import express from 'express';
import { addBlog, getAllBlogs, getBlogById, deleteBlogById, togglePublish, addBlogComments, getBlogComments } from '../controllers/blogController.js';
import upload from '../middlewares/multer.js';
import auth from '../middlewares/auth.js';

const blogRouter = express.Router();

blogRouter.post('/add',upload.single('image'),auth,addBlog);
blogRouter.get('/all',getAllBlogs);
blogRouter.get('/:blogId',getBlogById);
blogRouter.delete('/delete',auth,deleteBlogById);
blogRouter.put('/toggle-publish',auth,togglePublish);
blogRouter.post('/add-comment',addBlogComments);
blogRouter.get('/comments',getBlogComments);

export default blogRouter;
