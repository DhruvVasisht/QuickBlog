import express from 'express';
import { login, getAllBlogsAdmin, getAllComments, getDashboard, deleteCommentById, approveCommentById } from '../controllers/adminController.js';
const adminRouter = express.Router();

//Routes
adminRouter.post('/login', login);
adminRouter.get('/blogs', getAllBlogsAdmin);
adminRouter.get('/comments', getAllComments);
adminRouter.get('/dashboard', getDashboard);
adminRouter.post('/delete-comment', deleteCommentById);
adminRouter.post('/approve-comment', approveCommentById);

export default adminRouter;