import express from "express";
const router = express.Router();

import {
  MyUserRequest,
  User as UserInterface,
  Playlist as PlaylistInterface,
  PlaylistVideo,
} from "../Interfaces";
import { privateRoute } from "../middleware/privateRoute.js";

import mongoose from "mongoose";
const User: mongoose.Model<UserInterface> = mongoose.model("User");
const Playlist: mongoose.Model<PlaylistInterface> = mongoose.model("Playlist");

interface createPlaylistAndAddVideo {
  name: string;
  videoId: string;
}

/**
 * This handler creates a new playlist.
 * send POST Request at /user/playlist
 * body contains {name}
 * */
router.post("/user/playlist", privateRoute, (req: MyUserRequest, res) => {
  const { name }: PlaylistInterface = req.body;

  if (!name) {
    return res.status(422).json({ error: "name is required" });
  }

  // RG: Middleware `privateRoute` adds the authenticated user to `req.user`. Remove password field
  req.user.password = undefined;

  // RG: create a new Mongo Playlist
  const mongoPlaylist = new Playlist({ name, owner: req.user });

  // RG: Save the newly created Playlist
  mongoPlaylist
    .save()
    .then((savedPlaylist) => res.status(200).json({ playlist: savedPlaylist }))
    .catch(() =>
      res.status(422).json({ error: "Something went wrong. Please try again" })
    );
});

/**
 * This handler creates a new playlist and adds a video to it.
 * send POST Request at /user/playlist/createandaddvideo
 * body contains {name, videoId}
 * */
router.post(
  "/user/playlist/createandaddvideo",
  privateRoute,
  (req: MyUserRequest, res) => {
    const { name, videoId }: createPlaylistAndAddVideo = req.body;

    if (!name) {
      return res.status(422).json({ error: "name is required" });
    }

    // RG: Middleware `privateRoute` adds the authenticated user to `req.user`. Remove password field
    req.user.password = undefined;

    // RG: create a new Mongo Playlist
    const mongoPlaylist = new Playlist({
      name,
      owner: req.user,
      videos: [videoId],
    });

    // RG: Save the newly created Playlist
    mongoPlaylist
      .save()
      .then((savedPlaylist) =>
        res.status(200).json({ playlist: savedPlaylist })
      )
      .catch(() =>
        res
          .status(422)
          .json({ error: "Something went wrong. Please try again" })
      );
  }
);

/**
 * This handler toggles video in a playlist.
 * send PUT Request at /user/playlist
 * body contains { playlistId, videoId }
 * */
router.put("/user/playlist", privateRoute, (req: MyUserRequest, res) => {
  const { playlistId, videoId }: PlaylistVideo = req.body;

  if (!playlistId || !videoId) {
    return res.status(422).json({ error: "all fields are required" });
  }

  // RG: find and update the Mongo Playlist
  // toggle the videoId in videos array
  Playlist.findByIdAndUpdate(
    playlistId,
    [
      {
        $set: {
          videos: {
            $cond: [
              { $in: [videoId, "$videos"] },
              { $setDifference: ["$videos", [videoId]] },
              { $concatArrays: ["$videos", [videoId]] },
            ],
          },
        },
      },
    ],
    { new: true }
  )
    .populate("owner", "_id name")
    .exec((err, result) => {
      if (err) {
        return res
          .status(422)
          .json({ error: "Something went wrong. Please try again", err });
      }
      return res.status(200).json(result);
    });
});

/**
 * This handler deletes a playlist created by user.
 * send DELETE Request at /user/playlist/:playlistId
 * url param contains { playlistId }
 * */
router.delete(
  "/user/playlist/:playlistId",
  privateRoute,
  (req: MyUserRequest, res) => {
    Playlist.findOne({ _id: req.params.playlistId })
      .populate("owner", "_id")
      .exec((err, playlist) => {
        if (err || !playlist) {
          return res
            .status(422)
            .json({ error: "Something went wrong. Please try again", err });
        }

        if (playlist.owner._id.toString() === req.user._id.toString()) {
          playlist
            .remove()
            .then(() => {
              res.status(200).json({ message: "playlist deleted" });
            })
            .catch((err) => {
              res
                .status(422)
                .json({ error: "Something went wrong. Please try again", err });
            });
        }
      });
  }
);

export { router as playlistRoutes };
