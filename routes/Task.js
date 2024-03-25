import express from "express";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../TokenVerification.js";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  getUserTasks,
  updateTask,
} from "../collections/Task.js";

const router = express.Router();

router.post("/createTask", verifyTokenAndAdmin, createTask);
router.put("/updateTask/:id", verifyToken, updateTask);
router.delete("/deleteTask/:id", verifyTokenAndAdmin, deleteTask);
router.get("/getTask/:id", verifyToken, getTask);
router.get("/getTasks", verifyTokenAndAdmin, getTasks);
router.get("/getUserTasks/:username", verifyToken, getUserTasks);

export default router;
