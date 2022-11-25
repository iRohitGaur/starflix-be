import dotenv from "dotenv";
dotenv.config();

import express, { json } from "express";
const app = express();
app.use(json());
const port = process.env.PORT || 4000;

import cors from "cors";
app.use(cors());

import mongoose from "mongoose";
mongoose
  .connect(process.env.MONGOURL ?? "")
  .then(() => console.log("mongo db connected"))
  .catch((err) => console.log("could not connect to mongoDB", err));

import "./models/User.js";
import "./models/Playlist.js";

import { authRoutes } from "./routes/auth.js";
import { historyRoutes } from "./routes/history.js";
import { likedRoutes } from "./routes/liked.js";
import { watchLaterRoutes } from "./routes/watchLater.js";
import { playlistRoutes } from "./routes/playlist.js";
import { videoRoutes } from "./routes/video.js";

// Routes
app.use(authRoutes);
app.use(historyRoutes);
app.use(likedRoutes);
app.use(watchLaterRoutes);
app.use(playlistRoutes);
app.use(videoRoutes);

app.listen(port, () => console.log(`listening on port ${port}!`));
