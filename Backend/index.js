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
// Allow frontend to access backend
app.use(cors({
  origin: "https://task-management-frontend-xush.onrender.com", // Change this to your frontend URL
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
}));
app.use(express.json());
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
