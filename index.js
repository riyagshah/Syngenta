const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
require('dotenv').config()
const mongoose = require("mongoose")
const { connection } = require("./Config/data");
app.use(express.json());
app.use(cors());
console.log(mongoose.connection.readyState);

const GithubController = require("./Controllers/Github.controllers");
const NotesController = require("./Controllers/Notes.route");
app.get("/", async (req, res) => {
    return res.send("Welcome please visit /user to login via Oauth");
  });
app.use("/user", GithubController);
app.use("/organization",NotesController)
app.listen(process.env.PORT, async () => {
  
    try {
        await connection;
        console.log("Connected to server");
      } catch (err) {
        console.log(err);
      }
      console.log(`listening on ${process.env.PORT} port`);
});

