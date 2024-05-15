import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import logger from "morgan";

import Contacts from "./contactSchema.js";

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/cont-document",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.post("/api/contact", async (req, res) => {
  let user = new Users(req.body);
  let result = await user.save();
  res.send(result);
});
//Add this to server
app.get("/api/contact-list", async (req, res) => {
  try {
    const contact = await Contact.find();
    res.json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
// Define routes and middleware
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
