import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
import { Playlist } from "../Interfaces.js";

// Playlist Schema
const playlistSchema = new mongoose.Schema<Playlist>({
  name: { type: String, required: true },
  owner: { type: ObjectId, ref: "User" },
  videos: [{ type: String }],
});

mongoose.model("Playlist", playlistSchema);
