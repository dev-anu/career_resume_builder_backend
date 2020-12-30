import mongoose from "mongoose";
import { educationSchema } from "../models/education";
import LoginCheck from "../middlewares/requireLogin";

const Education = mongoose.model("Education", educationSchema);
export const postEducation = (req, res, LoginCheck) => {
  //creating a document in collection
  let myEducation = new Education(req.body);
  myEducation
    .save()
    .then((education) => res.json(education))
    .catch((err) => console.log(err));
};
