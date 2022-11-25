import mongoose from "mongoose";
import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface MyUserRequest extends Request {
  user?: any;
}

export interface MyJwtPayload extends JwtPayload {
  _id?: string;
}

export interface User {
  _id: string;
  password?: string;
  name: string;
  email: string;
  liked: [string];
  watchLater: [string];
  history: [string];
}

export interface Playlist {
  _id: string;
  name: string;
  owner: { _id: mongoose.Schema.Types.ObjectId };
  videos: [string];
}

export interface Video {
  videoId: string;
  title?: string;
  youtubeId?: string;
  videoLength?: string;
  videoThumbnail?: string;
  likes?: string;
  views?: string;
  date?: string;
  category?: string;
  bird?: string;
  featured?: boolean;
  channelName?: string;
  channelThumbnail?: string;
  channelLink?: string;
  subscribers?: string;
  description?: string;
}

export interface PlaylistVideo {
  playlistId: string;
  videoId: string;
}