import User from "../models/User.js";
import dotenv from "dotenv";
import CryptoJS from "crypto-js";
import Task from "../models/Task.js";
import jwt from "jsonwebtoken";

dotenv.config();

export const updateUser = async (req, res) => {
  if (req.body.password) {
    const encryptedPassword = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PassKey
    ).toString();

    req.body.password = encryptedPassword;
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    const username = user.username;

    await User.findByIdAndDelete(req.params.id);
    await Task.deleteMany({ assignedUser: username });
    res.status(200).json("User deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json;
  }
};

export const getLoggedInUser = async (req, res) => {
  try {
    const token = req.cookies.access_token;
    !token && res.status(401).json("Unauthorized");
    jwt.verify(token, process.env.jwtKey, async (err, data) => {
      err && res.status(401).json("Invalid token");
      const userId = data.id;
      const userInfo = await User.findById(userId);
      res.status(200).json(userInfo);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};
