import express from 'express';
import { login, getAllBlogsAdmin, getAllComments, getDashboard, deleteCommentById, approveCommentById } from '../controllers/adminController.js';
import { auth } from '../middlewares/auth.js';
const adminRouter = express.Router();

//Routes
adminRouter.post('/login', login);
adminRouter.get('/blogs', auth,getAllBlogsAdmin);
adminRouter.get('/comments', auth, getAllComments);
adminRouter.get('/dashboard', auth, getDashboard);
adminRouter.post('/delete-comment', auth, deleteCommentById);
adminRouter.post('/approve-comment', auth, approveCommentById);

export default adminRouter;