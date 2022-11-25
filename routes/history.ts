import express from "express";
const router = express.Router();

import { MyUserRequest, User as UserInterface, Video } from "../Interfaces";
import { privateRoute } from "../middleware/privateRoute.js";

import mongoose from "mongoose";
const User: mongoose.Model<UserInterface> = mongoose.model("User");

/**
 * This handler adds a video to history.
 * send POST Request at /user/history
 * body contains {videoId}
 * */
router.post("/user/history", privateRoute, (req: MyUserRequest, res) => {
  const { videoId }: Video = req.body;

  if (!videoId) {
    return res.status(422).json({ error: "all fields are required" });
  }

  // RG: Middleware `privateRoute` adds the authenticated user to `req.user`. Remove password field
  req.user.password = undefined;

  User.findByIdAndUpdate(
    req.user._id,
    {
      $addToSet: {
        history: videoId,
      },
    },
    { new: true }
  ).exec((err, result) => {
    if (err || !result) {
      return res
        .status(422)
        .json({ error: "Something went wrong. Please try again", err });
    }
    result.password = undefined;
    return res.status(200).json(result);
  });
});

/**
 * This handler removes a video from history.
 * send DELETE Request at /user/history
 * body contains {videoId}
 * */
router.delete("/user/history", privateRoute, (req: MyUserRequest, res) => {
  const { videoId }: Video = req.body;

  if (!videoId) {
    return res.status(422).json({ error: "all fields are required" });
  }

  // RG: Middleware `privateRoute` adds the authenticated user to `req.user`. Remove password field
  req.user.password = undefined;

  User.findByIdAndUpdate(
    req.user._id,
    {
      $pull: {
        history: videoId,
      },
    },
    { new: true }
  ).exec((err, result) => {
    if (err || !result) {
      return res
        .status(422)
        .json({ error: "Something went wrong. Please try again", err });
    }
    result.password = undefined;
    return res.status(200).json(result);
  });
});

/**
 * This handler removes all videos from history.
 * send DELETE Request at /user/history
 * */
router.delete("/user/history/all", privateRoute, (req: MyUserRequest, res) => {
  // RG: Middleware `privateRoute` adds the authenticated user to `req.user`. Remove password field
  req.user.password = undefined;

  User.findByIdAndUpdate(
    req.user._id,
    {
      history: [],
    },
    { new: true }
  ).exec((err, result) => {
    if (err || !result) {
      return res
        .status(422)
        .json({ error: "Something went wrong. Please try again", err });
    }
    result.password = undefined;
    return res.status(200).json(result);
  });
});

export { router as historyRoutes };
