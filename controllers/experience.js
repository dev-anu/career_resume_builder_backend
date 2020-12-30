import mongoose from "mongoose";
import { experienceSchema } from "../models/experience";
import LoginCheck from "../middlewares/requireLogin";

const Experience = mongoose.model("Experience", experienceSchema);
export const postExperience = (req, res, LoginCheck) => {
  //creating a document in collection
  let myExperience = new Experience(req.body);
  myExperience
    .save()
    .then((exp) => res.json(exp))
    .catch((err) => console.log(err));
};
