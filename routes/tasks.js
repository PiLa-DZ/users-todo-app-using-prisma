import express from "express";
import {
  createOneTaskByUserId,
  deleteOneTaskById,
  updateOneTaskById,
} from "../controllers/tasks.js";
const router = express.Router();

router.post("/create-one-task-by-user-id", createOneTaskByUserId);
router.put("/update-one-task-by-id/:id", updateOneTaskById);
router.delete("/delete-one-task-by-id/:id", deleteOneTaskById);

export default router;
