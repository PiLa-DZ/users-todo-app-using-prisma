import express from "express";
import {
  createOneTaskByUserId,
  updateOneTaskById,
} from "../controllers/tasks.js";
const router = express.Router();

router.post("/create-one-task-by-user-id", createOneTaskByUserId);
router.put("/update-one-task-by-id/:id", updateOneTaskById);

export default router;
