import express from "express";

const router = express.Router();

router.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    timestamp: newDate().toISOString(),
    message: "Backend is running smoothly",
  });
});

export default router;
