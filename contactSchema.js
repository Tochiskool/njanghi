import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "A name is required",
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  subject: {
    type: String,
    trim: true,
    required: "Identify yourself",
  },
  text: {
    type: String,
    validate: [({ length }) => length >= 6, "Longstring should be longer."],
  },
  userCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("users", ContactSchema);
