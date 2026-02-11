import express from "express";
import { createOneUser, getAllUsers } from "../controllers/users.js";
const router = express.Router();

router.post("/create-one-user", createOneUser);
router.get("/get-all-users", getAllUsers);

export default router;
