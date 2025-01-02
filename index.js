import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js'; 
import dotenv from 'dotenv';
import cors from 'cors'; // Import the cors package

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/users', userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
