import express from "express";
import {
  createOneUser,
  getAllUsers,
  getOneUserById,
  updateOneUserById,
} from "../controllers/users.js";
const router = express.Router();

router.post("/create-one-user", createOneUser);
router.get("/get-all-users", getAllUsers);
router.get("/get-one-user-by-id/:id", getOneUserById);
router.put("/update-one-user-by-id/:id", updateOneUserById);

export default router;
