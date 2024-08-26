import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

import User from "./models/User.js";

import ghazalRoutes from "./routes/ghazal.routes.js";

const app = express();
const port = process.env.PORT || 8000;
console.log(process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("MongoDB Connected 😍"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

app.use("/api/v1/ghazal", ghazalRoutes);

app.post("/api/v1/user", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});
app.get("/api/v1/users", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.get("/", (req, res) => {
  res.send("Server for Urdu Dosti 😍🥳 ");
});

app.get("/about", (req, res) => {
  res.send("About Page, 😍🥳 ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} 😎`);
});
