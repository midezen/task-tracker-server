import express from "express";
import { verifyToken, verifyTokenAndAdmin } from "../TokenVerification.js";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../collections/Task.js";

const router = express.Router();

router.post("/createTask", verifyTokenAndAdmin, createTask);
router.put("/updateTask/:id", verifyToken, updateTask);
router.delete("/deleteTask/:id", verifyTokenAndAdmin, deleteTask);
router.get("/getTask/:id", verifyToken, getTask);
router.get("/getTasks", verifyTokenAndAdmin, getTasks);

export default router;
