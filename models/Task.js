import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    taskName: { type: String, require: true, unique: true },
    description: { type: String },
    assignedUser: { type: String, require: true },
    deadLine: { type: String, require: true },
    taskStatus: { type: String, default: "not started" },
  },
  { timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
