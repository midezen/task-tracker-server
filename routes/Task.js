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

router.post("/createTask", createTask);
router.put("/updateTask/:id", updateTask);
router.delete("/deleteTask/:id", deleteTask);
router.get("/getTask/:id", getTask);
router.get("/getTasks", getTasks);

export default router;
