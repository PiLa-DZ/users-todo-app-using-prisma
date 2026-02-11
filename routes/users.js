import express from "express";
import {
  createOneUser,
  deleteOneUserById,
  getAllUsers,
  getOneUserById,
  updateOneUserById,
} from "../controllers/users.js";
const router = express.Router();

router.post("/create-one-user", createOneUser);
router.get("/get-all-users", getAllUsers);
router.get("/get-one-user-by-id/:id", getOneUserById);
router.put("/update-one-user-by-id/:id", updateOneUserById);
router.delete("/delete-one-user-by-id/:id", deleteOneUserById);

export default router;
