import express from "express";
import { createOneTaskByUserId } from "../controllers/tasks.js";
const router = express.Router();

router.post("/create-one-task-by-user-id", createOneTaskByUserId);

export default router;
