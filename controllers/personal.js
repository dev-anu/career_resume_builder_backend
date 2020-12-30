import mongoose from "mongoose";
import { personalSchema } from "../models/personal";
import LoginCheck from "../middlewares/requireLogin";

const Person = mongoose.model("Person", personalSchema);
export const addPersonal = (req, res, LoginCheck) => {
  const {
    name,
    email,
    address,
    phone,
    date_of_birth,
    website,
    linkedin,
  } = req.body;
  if (!name) {
    res.json({ error: "Please enter name" });
  }
  if (!email) {
    res.json({ error: "Please enter email" });
  }
  //creating a document in collection
  let myInfo = new Person({
    name,
    email,
    address,
    phone,
    date_of_birth,
    website,
    linkedin,
  });
  myInfo
    .save()
    .then((person) => res.json(person))
    .catch((err) => console.log(err));
};
