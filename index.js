import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import AuthRoute from "./routes/Auth.js";
import UserRoute from "./routes/User.js";
import TaskRoute from "./routes/Task.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    credentials: true,
  })
);

mongoose
  .connect(process.env.mongoUrL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log("db is not connected. This is the" + err));

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.use(
  "/api/auth",
  cors({
    origin: "https://yabatech-task-tracker-1.onrender.com/auth",
    credentials: true,
  }),
  AuthRoute
);
app.use("/api/user", UserRoute);
app.use("/api/task", TaskRoute);

app.listen(8000 || process.env.PORT, () => {
  console.log("app is connected and listening on port 8000");
});
