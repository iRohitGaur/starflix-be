import express from "express";
const router = express.Router();

import { MyUserRequest, User as UserInterface } from "../Interfaces.js";

import mongoose from "mongoose";
const User = mongoose.model<UserInterface>("User");

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { privateRoute } from "../middleware/privateRoute.js";

/**
 * This handler handles user signups.
 * send POST Request at /signup
 * body contains {password, name, email}
 * */
router.post("/signup", (req, res) => {
  const { password, name, email }: UserInterface = req.body;

  if (!password || !name || !email) {
    return res.status(422).json({ error: "all fields are required" });
  }

  // RG: Check if email already exists
  User.findOne({ email: email })
    .then((userWithEmail) => {
      if (userWithEmail) {
        return res.status(422).json({ error: "email already registered" });
      }

      //RG: If email doesn't already exist, hash the password
      bcrypt
        .hash(password, 12)
        .then((hashedPassword: String) => {
          // RG: create a new Mongo User
          const mongoUser = new User({
            password: hashedPassword,
            name: name,
            email: email,
          });

          // RG: Save the newly created user
          mongoUser
            .save()
            .then(() =>
              res.status(200).json({ message: "registration successful" })
            )
            .catch(() =>
              res
                .status(422)
                .json({ error: "Something went wrong. Please try again" })
            );
        })
        .catch(() =>
          res
            .status(422)
            .json({ error: "Something went wrong. Please try again" })
        );
    })
    .catch(() =>
      res.status(422).json({ error: "Something went wrong. Please try again" })
    );
});

/**
 * This handler handles user login.
 * send POST Request at /login
 * body contains {email, password}
 * */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "all fields are required" });
  }

  // RG: Check if username or email is registered
  User.findOne({
    email,
  })
    .then((foundUser) => {
      if (!foundUser) {
        return res.status(422).json({ error: "user does not exist" });
      }

      // RG: Compare password
      bcrypt
        .compare(password, foundUser.password ?? "")
        .then((passwordMatched: Boolean) => {
          if (passwordMatched) {
            const token = jwt.sign(
              { _id: foundUser._id },
              process.env.JWT_SECRET ?? ""
            );
            foundUser.password = undefined;
            return res
              .status(200)
              .json({ message: "login successful", token, user: foundUser });
          } else {
            return res
              .status(422)
              .json({ error: "invalid username/email or password" });
          }
        })
        .catch(() =>
          res
            .status(422)
            .json({ error: "Something went wrong. Please try again" })
        );
    })
    .catch(() =>
      res.status(422).json({ error: "Something went wrong. Please try again" })
    );
});

/**
 * This handler handles user verification.
 * send POST Request at /verify
 * header must contain auth token
 * */
router.post("/verify", privateRoute, (req: MyUserRequest, res) => {
  // RG: Middleware `privateRoute` adds the authenticated user to `req.user`. Remove password field
  req.user.password = undefined;

  res.status(200).json({ message: "user verified", user: req.user });
});

export { router as authRoutes };
