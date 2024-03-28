import express from "express";
import {
  deleteUser,
  getLoggedInUser,
  getUser,
  getUsers,
  updateUser,
} from "../collections/User.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../TokenVerification.js";

const router = express.Router();

router.put("/update/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/delete/:id", verifyTokenAndAuthorization, deleteUser);
router.get("/getUser/:id", verifyTokenAndAuthorization, getUser);
router.get("/getUsers", verifyTokenAndAdmin, getUsers);
router.get("/getLoggedInUser", getLoggedInUser);

export default router;
