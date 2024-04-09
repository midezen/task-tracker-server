import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    taskName: { type: String, require: true, unique: true, default: null },
    description: { type: String },
    assignedUser: { type: String, require: true },
    assignedBy: { type: String, require: true },
    deadLine: { type: String, require: true },
    priority: { type: String, require: true },
    taskStatus: { type: String, default: "not started" },
  },
  { timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
