import express from "express";
import cors from "cors";
import taskRoutes from "./routes/task.route.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
