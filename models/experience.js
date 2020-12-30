import mongoose from "mongoose";

const Schema = mongoose.Schema;
//making schema object
export const experienceSchema = new Schema({
  companyName: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  details: {
    type: String,
  },
});
