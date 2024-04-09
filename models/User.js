import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, require: true },
    username: { type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, require: true },
    tasks: { type: Array, default: {} },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
