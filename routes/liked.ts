import express from "express";
const router = express.Router();

import { MyUserRequest, User as UserInterface, Video } from "../Interfaces";
import { privateRoute } from "../middleware/privateRoute.js";

import mongoose from "mongoose";
const User: mongoose.Model<UserInterface> = mongoose.model("User");

/**
 * This handler adds/removes a video to liked.
 * send POST Request at /user/liked
 * body contains {videoId}
 * */
router.post("/user/liked", privateRoute, (req: MyUserRequest, res) => {
  const { videoId }: Video = req.body;

  if (!videoId) {
    return res.status(422).json({ error: "all fields are required" });
  }

  // RG: Middleware `privateRoute` adds the authenticated user to `req.user`. Remove password field
  req.user.password = undefined;

  User.findByIdAndUpdate(
    req.user._id,
    [
      {
        $set: {
          liked: {
            $cond: [
              { $in: [videoId, "$liked"] },
              { $setDifference: ["$liked", [videoId]] },
              { $concatArrays: ["$liked", [videoId]] },
            ],
          },
        },
      },
    ],
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

export { router as likedRoutes };
