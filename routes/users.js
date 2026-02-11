import express from "express";
import {
  createOneUser,
  getAllUsers,
  getOneUserById,
} from "../controllers/users.js";
const router = express.Router();

router.post("/create-one-user", createOneUser);
router.get("/get-all-users", getAllUsers);
router.get("/get-one-user-by-id/:id", getOneUserById);

export default router;
