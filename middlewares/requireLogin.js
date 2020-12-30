import jwt from "jsonwebtoken";
import { url } from "../key";
import mongoose from "mongoose";
import { userSchema } from "../models/user";

const User = mongoose.model("User", userSchema);

const LoginCheck = (req, res, next) => {
  if (
    req.url === "/personal" ||
    req.url === "/education" ||
    req.url === "/experience"
  ) {
    const { authorization } = req.headers;
    if (!authorization) {
      res.status(401).json({ error: "Unauthorised access" });
    }
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, url.JWT_SECRET, (err, payload) => {
      if (err) {
        return res.status(401).json({ error: "you must be logged in" });
      }

      const { _id } = payload;
      User.findById(_id).then((userdata) => {
        req.user = userdata;
      });
    });
  }
  next();
};

export default LoginCheck;
