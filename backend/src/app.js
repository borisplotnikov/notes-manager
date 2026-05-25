import express from "express";
import cors from "cors";
import healthRouter from "./routes/health.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("./api", healthRouter); // Mounts the route at /api/health

// Basic health check route
// app.get("/api/health", (req, res) => {
//   res.json({ status: "OK", message: "Backend is running smoothly" });
// });

export default app;
