
const express = require("express");
const GithubController = express.Router();

GithubController.get("/", (req, res) => {
        res.send(
          `<a href="https://github.com/login/oauth/authorize?client_id=4b1388926ad97ef09c5e">Login via GitHub</a>`
        );
      });



module.exports = GithubController;