import mongoose from "mongoose";
import { userSchema } from "../models/user";
import brcypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { url } from "../key";
import LoginCheck from "../middlewares/requireLogin";

const User = mongoose.model("User", userSchema);

export const addNewUser = (req, res) => {
  //checking all fields are field or not
  const { name, email, password } = req.body;
  if (!email || !password || !name) {
    res.json({ error: "Please add all the fields" });
  }
  //checking if user email already exist
  User.findOne({ email: email })
    .then((savedUser) => {
      if (savedUser) {
        return res.status(422).json({ error: "Email already in use" });
      }

      //hashing password
      brcypt.hash(password, 12).then((hashedpassword) => {
        //creating a document in collection
        let newUser = new User({
          email,
          password: hashedpassword,
          name,
        });
        newUser
          .save()
          .then((user) => res.json(user))
          .catch((err) => console.log(err));
      });
    })
    .catch((err) => console.log(err));
};

export const userExist = (req, res) => {
  //validation
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).json({ error: "Please enter all fields" });
  }
  //find user by it email
  User.findOne({ email: email })
    .then((savedUser) => {
      if (!savedUser) {
        return res.status(422).json({ error: "Invalid Email or password" });
      }
      //compare the password if we got email correct
      brcypt
        .compare(password, savedUser.password)
        .then((doMatch) => {
          if (doMatch) {
            //send token to user
            const token = jwt.sign({ _id: savedUser._id }, url.JWT_SECRET);
            res.json({ token });
          } else {
            return res.status(422).json({ error: "Invalid Email or password" });
          }
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};
