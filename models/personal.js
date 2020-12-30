import mongoose from "mongoose";

const Schema = mongoose.Schema;
//making schema object
export const personalSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
  },
  date_of_birth: {
    type: Date,
  },
  website: {
    type: String,
  },
  linkedin: {
    type: String,
  },
});
