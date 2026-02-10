import express from "express";
import { test } from "../controllers/tasks.js";
const router = express.Router();

router.get("/", test);

export default router;
