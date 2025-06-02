import express from 'express';
import { login } from '../controllers/adminController.js';
const adminRouter = express.Router();

//Routes
adminRouter.post('/login', login);

export default adminRouter;