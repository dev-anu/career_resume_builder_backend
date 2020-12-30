import mongoose from "mongoose";

const Schema = mongoose.Schema;
//making schema object
export const educationSchema = new Schema({
  course: {
    type: String,
  },
  school: {
    type: String,
  },
  grade: {
    type: String,
  },
  year: {
    type: Number,
  },
});
