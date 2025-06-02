import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('Connected to MongoDB');
        });
        await mongoose.connect(`${process.env.MONGO_URI}/quickblog`);
    } catch (error) {
        console.log('MongoDB Connection Failed');
        process.exit(1);
    }
}