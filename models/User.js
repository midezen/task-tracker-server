import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, require: true },
    username: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, require: true },
    tasks: [
      {
        taskName: { type: String, require: true, unique: true },
        description: { type: String },
        assignedUser: { type: String, require: true },
        deadLine: { type: String, require: true },
        taskStatus: { type: String, default: "not started" },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
