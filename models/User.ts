import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

import { User } from "../Interfaces.js";

// User Schema
const userSchema = new mongoose.Schema<User>({
  password: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  liked: [{ type: String }],
  watchLater: [{ type: String }],
  history: [{ type: String }],
});

mongoose.model("User", userSchema);
