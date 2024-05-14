import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import logger from "morgan";

import Users from "./contactSchema.js";

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/contact-repo",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.post("/contacts-repo", async (req, res) => {
  let user = new Users(req.body);
  let result = await user.save();
  res.send(result);
});
//Add this to server
app.get("/contacts", async (req, res) => {
  const contact = await Contact.find();
  res.json(contact);
});
// Define routes and middleware
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
