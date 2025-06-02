import express from "express";
import 'dotenv/config'
import cors from 'cors'
import { connectDB } from './config/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//Health Route
app.get('/test', (req, res) => {
    res.send('Backend Working');
});

//Routes
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/blog', blogRouter);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});