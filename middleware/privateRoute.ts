import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

import { MyUserRequest, MyJwtPayload } from "../Interfaces.js";

import mongoose from "mongoose";
const User = mongoose.model("User");

export const privateRoute: RequestHandler = (req: MyUserRequest, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "not logged in" });
  }
  const token = authorization.replace("Bearer ", "");

  const { _id } = jwt.verify(
    token,
    process.env.JWT_SECRET ?? ""
  ) as MyJwtPayload;

  User.findById(_id).then((foundUser) => {
    if (foundUser) {
      req.user = foundUser;
      next();
    } else {
      return res.status(401).json({ error: "not logged in" });
    }
  });
};
