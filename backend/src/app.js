import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check route
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Backend is running smoothly" });
});

export default app;
