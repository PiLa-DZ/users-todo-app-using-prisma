import express from "express";
import { createOneUser } from "../controllers/users.js";
const router = express.Router();

router.post("/create-one-user", createOneUser);

export default router;
