import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import logger from "morgan";

import Contact from "./contactSchema.js";

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use(express.static("public"));

// Connect to MongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/mycontacts",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.post("/api/contacts", async (req, res) => {
  Contact.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
//Add this to server
app.get("/api/contacts-list", async (req, res) => {
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
